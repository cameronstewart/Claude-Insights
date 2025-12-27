# Claude Insights

A privacy-first web application that analyzes your Claude conversation data and provides comprehensive insights about your usage patterns.

## Features

- **Privacy-First**: All data processing happens locally in your browser. Nothing is uploaded to any server.

### 📊 Usage Analytics
- Total conversations and messages
- Usage patterns over time
- Activity by hour of day
- Conversation length distribution
- Top conversations by message count

### 📝 Prompting Style Analysis
- Average prompt length and word count
- Question vs command vs description breakdown
- Politeness score
- Code block usage tracking
- Follow-up pattern detection

### ⭐ Best Practices Evaluation
- Overall prompting score (0-100)
- Detailed scores for clarity, specificity, context, and formatting
- Personalized strengths and improvement suggestions
- Learn how to get better responses from Claude

### 🎯 Theme Extraction
- Automatic topic detection (Web Dev, Data & AI, DevOps, etc.)
- Identify your main areas of interest
- Track topic distribution across conversations

### 💡 Ideas & Next Steps
- Find incomplete conversations to continue
- Personalized follow-up ideas based on your interests
- Pattern detection in your usage
- Smart suggestions for maximizing value

### 🎨 Visualizations & Export
- Beautiful, interactive charts powered by Recharts
- Export insights as HTML reports
- Dark mode support

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
