#!/bin/sh
# Print resume/resume.html to static/resume.pdf with headless Chrome.
# Set CHROME to point at a specific Chrome/Chromium binary if needed.
set -e
cd "$(dirname "$0")/.."

if [ -z "$CHROME" ]; then
  for c in google-chrome google-chrome-stable chromium chromium-browser \
           "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
[ -n "$CHROME" ] || { echo "Chrome not found; set CHROME=/path/to/chrome" >&2; exit 1; }

"$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$PWD/static/resume.pdf" "file://$PWD/resume/resume.html"
echo "wrote static/resume.pdf"
