---
name: Add support for large data files
about: Enable Git LFS or alternative for handling large conversation exports
title: 'Add support for large data files (Git LFS or alternative)'
labels: enhancement
---

## Problem
Users need to upload large data files (e.g., conversations.json at 256+ MB) but GitHub has file size limits:
- Direct uploads: 25-100 MB limit
- Currently requires manual workarounds (compression, splitting, external storage)

## Proposed Solutions

### Option 1: Git LFS (Large File Storage)
- Install and configure Git LFS
- Track large data files (*.json files > 50 MB)
- Benefits: Native git integration, seamless for users
- Considerations: LFS bandwidth limits, storage costs

### Option 2: External Storage with Scripts
- Store large files in cloud storage (Google Drive, S3, etc.)
- Provide download scripts to fetch data when needed
- Add `.gitignore` rules for large local files
- Document the process in README

### Option 3: File Splitting Utility
- Create helper scripts to split/rejoin large files
- Add to data folder with clear naming convention
- Document usage in README

## Current Workaround
Users can:
1. Compress large files (gzip reduces ~80%)
2. Split into chunks < 25 MB each
3. Upload via GitHub web interface to `data/` folder

## Files Affected
- `data/conversations.json` (256 MB uncompressed, 53 MB compressed)
- Future large data exports from Claude

## Priority
Medium - affects users wanting to analyze their full conversation history
