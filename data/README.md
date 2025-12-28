# Data Directory

This directory contains data files for the Claude Insights project.

## Files

### User Data Files
- `users.json` - User profile data
- `memories.json` - Memory data
- `projects.json` - Project data

### Conversation Data (Split Archive)
- `conversations.part01.rar` - Conversations data (part 1 of 2)
- `conversations.part02.rar` - Conversations data (part 2 of 2)

## Extracting Conversations Data

The conversations data is split into multiple RAR files due to GitHub's file size limits (original: 256 MB, compressed: 53 MB).

### Using the extraction script (Recommended)

```bash
cd data
./extract-conversations.sh
```

This will extract `conversations.json.gz`, which you can then decompress:

```bash
gunzip conversations.json.gz
```

### Manual extraction

**On Linux/Mac:**
```bash
unrar x conversations.part01.rar
```

**On Windows:**
- Right-click `conversations.part01.rar`
- Select "Extract here" (WinRAR, 7-Zip, or similar)
- The tool will automatically use part02 when needed

**On Android:**
- Use RAR app by RARLAB
- Open `conversations.part01.rar`
- Tap Extract

### After Extraction

The extracted file will be `conversations.json.gz` (~53 MB). To get the full JSON:

```bash
gunzip conversations.json.gz
# Creates conversations.json (~256 MB)
```

## Note

The extracted files (`conversations.json.gz` and `conversations.json`) are in `.gitignore` to prevent accidental commits of large files.
