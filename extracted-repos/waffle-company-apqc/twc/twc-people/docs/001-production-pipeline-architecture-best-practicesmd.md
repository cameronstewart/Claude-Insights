---
title: "Production Pipeline Architecture & Best Practices.md"
project: "TWC - People"
project_uuid: "0197834e-74a7-7631-bf87-ff8efcce93f3"
doc_uuid: "058f1c41-e1e8-43dc-9a4b-5e7c1652a211"
created_at: "2025-08-07T06:12:32.658414+00:00"
doc_index: 1
---

# Production Xero Data Pipeline Architecture

## 🏗️ **Best Architecture: GitHub Actions + Smart Storage**

### **Why GitHub Actions is Perfect:**
- ✅ **Free tier**: 2,000 minutes/month (plenty for daily Xero extractions)
- ✅ **Reliable scheduling**: Built-in cron triggers
- ✅ **Version control**: All code and config in Git
- ✅ **Secrets management**: Secure token storage
- ✅ **Artifact storage**: Built-in file storage
- ✅ **Notifications**: Easy Slack/email integration
- ✅ **Monitoring**: Built-in logs and status tracking

## 🎯 **Production-Ready Features**

### **1. Smart Rate Limiting**
```python
class RateLimitManager:
    def __init__(self, base_delay=1.0, max_delay=60.0):
        self.base_delay = base_delay
        self.current_delay = base_delay
        
    def wait_if_needed(self):
        # Intelligent waiting between requests
        
    def handle_rate_limit_error(self, retry_after=None):
        # Exponential backoff on rate limit hits
```

**Xero API Limits:**
- **60 requests per minute** per app
- **5,000 requests per day** per tenant
- **Our strategy**: 1-second delays + exponential backoff

### **2. Incremental Updates Only**
```python
class ChangeTracker:
    def has_entity_changed(self, entity_type, entity_id, entity_data):
        # SHA256 hash comparison
        # Only extract what's actually changed
        
    def get_last_extraction_time(self, entity_type):
        # Track last successful extraction per entity
```

**Benefits:**
- **Faster extractions** (seconds vs minutes)
- **Lower API usage** (10-50 calls vs 1000+)
- **Reduced storage** (only changed data)
- **Better performance** overall

### **3. Data Deduplication**
```python
def get_entity_hash(self, entity_data):
    # Remove timestamp fields that change frequently
    filtered_data = {k: v for k, v in entity_data.items() 
                    if k not in ['updated_date_utc', 'status_attribute_string']}
    
    return hashlib.sha256(json.dumps(filtered_data, sort_keys=True).encode()).hexdigest()
```

**Smart Filtering:**
- Ignores timestamp-only changes
- Focuses on actual business data changes
- Prevents unnecessary storage bloat

## 📁 **Optimal Data Storage Strategy**

### **Repository Structure:**
```
xero-data-pipeline/
├── .github/workflows/
│   └── xero-data-pipeline.yml     # Main workflow
├── scripts/
│   ├── xero_pipeline.py           # Core extraction
│   ├── refresh_tokens.py          # Token management
│   ├── process_data.py            # Data processing
│   └── send_notification.py       # Alerts
├── config/
│   ├── extraction_config.yml      # What to extract
│   └── quality_thresholds.yml     # Data quality rules
├── data/                          # Gitignored raw data
│   ├── raw/                       # Daily extractions
│   ├── processed/                 # Cleaned data
│   ├── reports/                   # Generated reports
│   └── archive/                   # Compressed backups
└── docs/
    ├── api_usage.md               # API tracking
    └── data_dictionary.md         # Schema docs
```

### **Storage Optimization:**
```yaml
# Only commit essential files to Git
.gitignore:
  data/raw/              # Daily extractions (too large)
  data/logs/             # Log files
  *.db                   # SQLite databases
  
# Commit to Git:
  data/processed/        # Cleaned, important data
  data/reports/          # Summary reports
  scripts/               # All code
  config/                # Configuration
```

### **External Storage for Large Data:**
```python
# Option 1: GitHub Artifacts (free, 90-day retention)
- name: Upload artifacts
  uses: actions/upload-artifact@v4
  with:
    name: xero-data-${{ date }}
    path: data/processed/
    retention-days: 90

# Option 2: AWS S3 (for long-term storage)
- name: Upload to S3
  run: aws s3 sync data/archive/ s3://your-bucket/xero-backups/

# Option 3: Google Drive API (if you prefer)
- name: Upload to Drive
  run: python scripts/upload_to_drive.py
```

## ⚡ **Pipeline Execution Strategy**

### **Daily Incremental (Primary)**
```yaml
# Runs every night at 2 AM
- cron: '0 2 * * *'

# Only extracts changed data from last 1-2 days
Mode: incremental
Duration: 2-5 minutes
API Calls: 10-50
Data Size: 1-10 MB
```

### **Weekly Full Backup**
```yaml
# Runs Sunday nights
- cron: '0 2 * * 0'

# Complete extraction for verification
Mode: full
Duration: 15-30 minutes  
API Calls: 500-2000
Data Size: 50-200 MB
```

### **Manual Triggers**
```yaml
workflow_dispatch:
  inputs:
    mode: [incremental, full, reports_only]
    days_back: "1"  # Configurable lookback
```

## 🔄 **Token Management**

### **Automatic Token Refresh:**
```python
# scripts/refresh_tokens.py
def refresh_xero_tokens():
    """Automatically refresh expired tokens"""
    response = requests.post('https://identity.xero.com/connect/token', {
        'grant_type': 'refresh_token',
        'refresh_token': os.getenv('XERO_REFRESH_TOKEN'),
        'client_id': os.getenv('XERO_CLIENT_ID'),
        'client_secret': os.getenv('XERO_CLIENT_SECRET')
    })
    
    tokens = response.json()
    
    # Update GitHub secrets via API
    update_github_secret('XERO_ACCESS_TOKEN', tokens['access_token'])
    update_github_secret('XERO_REFRESH_TOKEN', tokens['refresh_token'])
```

### **Secret Management:**
```bash
# GitHub Repository Secrets
XERO_CLIENT_ID=your_client_id
XERO_CLIENT_SECRET=your_client_secret  
XERO_REFRESH_TOKEN=your_refresh_token
XERO_TENANT_ID=your_tenant_id

# Notification secrets
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
NOTIFICATION_EMAIL=admin@yourcompany.com
SMTP_CONFIG={"server": "smtp.gmail.com", ...}

# Optional: External storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
```

## 📊 **Data Quality & Monitoring**

### **Automatic Data Validation:**
```python
def validate_extraction_data(data_dir):
    """Validate extracted data quality"""
    checks = {
        'invoices': {
            'required_fields': ['invoice_id', 'contact', 'date', 'total'],
            'min_records': 1,
            'max_records': 10000
        },
        'payments': {
            'required_fields': ['payment_id', 'invoice', 'amount', 'date'],
            'business_rules': ['amount > 0', 'date <= today']
        }
    }
    
    return run_quality_checks(data_dir, checks)
```

### **Smart Notifications:**
```python
def send_notification(status, records_count, errors):
    """Send contextual notifications"""
    if status == 'success' and errors == 0:
        # Green: Success notification
        message = f"✅ Xero extraction completed: {records_count} records"
        
    elif status == 'success' and errors > 0:
        # Yellow: Partial success  
        message = f"⚠️ Xero extraction completed with {errors} errors"
        
    else:
        # Red: Failure notification
        message = f"❌ Xero extraction failed: {errors} errors"
        
    send_to_slack(message)
    send_email_if_critical(message, status)
```

## 📈 **Performance Optimization**

### **Parallel Processing:**
```python
# Process multiple entities concurrently
with ThreadPoolExecutor(max_workers=4) as executor:
    futures = []
    
    for entity_type in ['invoices', 'payments', 'contacts']:
        future = executor.submit(extract_entity, entity_type)
        futures.append(future)
    
    for future in as_completed(futures):
        result = future.result()
        process_entity_data(result)
```

### **Memory Optimization:**
```python
def stream_large_datasets(entity_type, batch_size=100):
    """Stream large datasets to avoid memory issues"""
    page = 1
    
    while True:
        batch = extract_entity_page(entity_type, page, batch_size)
        if not batch:
            break
            
        # Process and save immediately
        process_and_save_batch(batch)
        
        page += 1
        gc.collect()  # Force garbage collection
```

## 🎯 **Expected Performance**

### **Daily Incremental Extraction:**
```
Small Business:
- Duration: 1-2 minutes
- API calls: 5-15
- Data size: 100KB - 1MB
- GitHub Actions time: ~3 minutes

Medium Business:  
- Duration: 2-5 minutes
- API calls: 15-50
- Data size: 1-10 MB
- GitHub Actions time: ~7 minutes

Large Business:
- Duration: 5-10 minutes
- API calls: 50-150  
- Data size: 10-50 MB
- GitHub Actions time: ~15 minutes
```

### **Weekly Full Backup:**
```
Small Business:
- Duration: 5-10 minutes
- API calls: 100-500
- Data size: 10-50 MB

Medium Business:
- Duration: 10-20 minutes  
- API calls: 500-1500
- Data size: 50-200 MB

Large Business:
- Duration: 20-40 minutes
- API calls: 1500-4000
- Data size: 200MB - 1GB
```

## 🚀 **Quick Setup (15 Minutes)**

### **1. Repository Setup:**
```bash
# Create new repository
gh repo create xero-data-pipeline --private

# Clone and add files
git clone https://github.com/yourusername/xero-data-pipeline
cd xero-data-pipeline

# Copy pipeline files
cp xero_pipeline.py scripts/
cp xero-data-pipeline.yml .github/workflows/
```

### **2. Configure Secrets:**
```bash
# Add all required secrets
gh secret set XERO_CLIENT_ID --body "your_client_id"
gh secret set XERO_CLIENT_SECRET --body "your_client_secret"  
gh secret set XERO_REFRESH_TOKEN --body "your_refresh_token"
gh secret set XERO_TENANT_ID --body "your_tenant_id"
gh secret set SLACK_WEBHOOK_URL --body "your_webhook_url"
```

### **3. Test Run:**
```bash
# Trigger manual test
gh workflow run xero-data-pipeline.yml -f mode=incremental -f days_back=1

# Monitor progress
gh run list --workflow=xero-data-pipeline.yml
```

## 🎯 **Why This Architecture Wins**

### **vs Manual Scripts:**
- ✅ **Automated scheduling** - No manual intervention
- ✅ **Built-in monitoring** - GitHub Actions dashboard
- ✅ **Version control** - All changes tracked
- ✅ **Secrets management** - Secure token storage

### **vs Cloud Functions:**
- ✅ **Cost effective** - Free tier generous
- ✅ **No vendor lock-in** - Portable to any Git host
- ✅ **Full control** - Complete customization
- ✅ **Easy debugging** - Full logs and artifacts

### **vs Traditional ETL:**
- ✅ **Lightweight** - No heavy infrastructure
- ✅ **Fast setup** - Running in 15 minutes
- ✅ **Transparent** - All code visible and auditable
- ✅ **Maintainable** - Standard Python, no proprietary tools

This architecture gives you **enterprise-grade reliability** with **startup-level simplicity**!