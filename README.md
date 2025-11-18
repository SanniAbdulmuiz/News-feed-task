News Feed Task

This is a Next.js project that implements a news feed page using the News API
. It allows users to view the latest headlines, filter by category, search for news, and view individual articles.

Features

Display latest news headlines from the US.

Search functionality to filter articles by keywords.

Category filter to view news by specific categories (e.g., technology, sports).

Loading and error states for better user experience.

View a single article with image, content, and source link.

Live Demo

View Live Demo: https://news-feed-task.vercel.app/

Getting Started
Prerequisites

Node.js >= 18

npm, yarn, pnpm, or bun

Installation

Clone the repository:

git clone https://github.com/SanniAbdulmuiz/News-feed-task.git
cd News-feed-task


Install dependencies:

npm install
# or
yarn install
# or
pnpm install

Environment Variables

Create a .env.local file in the root directory and add your News API key:

NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWS_API_KEY
NEXT_PUBLIC_BASE_URL=http://localhost:3000

Running the Development Server
npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000
 in your browser. The app will automatically reload when you make changes.

Project Structure

app/ – main Next.js app directory

app/_lib/api.ts – API helpers for fetching news articles

app/types.ts – TypeScript types for articles

app/page.tsx – Homepage showing headlines with filters

app/articles/[articleId]/page.tsx – Individual article page

Implementation Notes

Uses Next.js 16 (App Router) and Server Components for fetching data.

Fetches news from the News API
 through a server-side API route to hide API keys.

Includes proper error handling and loading states.

Fully deployed on Vercel.
