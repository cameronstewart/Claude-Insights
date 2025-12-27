# Claude Insights

A privacy-first web application that analyzes your Claude conversation data and provides comprehensive insights about your usage patterns.

## Features

- **Privacy-First**: All data processing happens locally in your browser. Nothing is uploaded to any server.
- **Comprehensive Analytics**:
  - Total conversations and messages
  - Usage patterns over time
  - Activity by hour of day
  - Conversation length distribution
  - Top conversations by message count
  - And more!
- **Beautiful Visualizations**: Interactive charts and graphs powered by Recharts
- **Export Reports**: Download your insights as HTML reports
- **Dark Mode Support**: Automatically adapts to your system theme

## How to Use

1. Go to [claude.ai](https://claude.ai)
2. Click on your profile icon in the bottom left
3. Select "Settings"
4. Go to "Data & Privacy"
5. Click "Export data"
6. Wait for the export email (usually arrives within minutes)
7. Download the JSON file
8. Upload the JSON file to this tool
9. Explore your insights!

## Getting Started (Development)

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Client-side processing** - Privacy-first architecture

## Build

To create a production build:

```bash
npm run build
npm start
```

## Privacy

This tool is designed with privacy as the top priority:

- All data processing happens in your browser
- No data is sent to any external servers
- No tracking or analytics
- Your conversation data never leaves your device

## License

ISC
