#!/bin/bash

# Extract conversations from split RAR archive
# This script extracts the conversations.json.gz file from the split RAR parts

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Extracting conversations data..."

# Check if unrar is installed
if ! command -v unrar &> /dev/null; then
    echo "Error: unrar is not installed"
    echo ""
    echo "Please install unrar:"
    echo "  Ubuntu/Debian: sudo apt-get install unrar"
    echo "  macOS: brew install unrar"
    echo "  Windows: Download from https://www.rarlab.com/download.htm"
    exit 1
fi

# Check if part01 exists
if [ ! -f "conversations.part01.rar" ]; then
    echo "Error: conversations.part01.rar not found"
    exit 1
fi

# Extract the archive
unrar x -o+ conversations.part01.rar

if [ -f "conversations.json.gz" ]; then
    echo "✓ Successfully extracted conversations.json.gz"
    echo ""
    echo "To decompress the file, run:"
    echo "  gunzip conversations.json.gz"
    echo ""
    echo "This will create conversations.json (~256 MB)"
else
    echo "✗ Extraction failed"
    exit 1
fi
