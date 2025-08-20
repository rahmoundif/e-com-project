# E-Commerce Project

Consolidating my knowledge by making a modern e-commerce web application built with Next.js 15 and TypeScript.

## Tech Stack

- **Framework**: Next.js 15.4.7
- **Language**: TypeScript ^5
- **Styling**: Tailwind CSS 4.1
- **Runtime**: React 19.1.0
- **Package Manager**: PNPM

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rahmoundif/NEXT.git
cd e-com-project
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
src/app/
├── page.tsx              # Homepage
├── about/
│   ├── page.tsx          # About page
│   └── team/page.tsx     # Team page
├── contact/page.tsx      # Contact page
└── products/
    ├── page.tsx          # Products listing
    ├── [productId]/
    │   ├── page.tsx      # Individual product
    │   └── reviews/
    │       └── [reviewId]/page.tsx  # Product reviews
    └── [[...slug]]/page.tsx         # Catch-all route
```
