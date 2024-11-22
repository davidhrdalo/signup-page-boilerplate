# SaaS Beta Signup Boilerplate

A modern, ready-to-deploy beta signup page for SaaS products built with Next.js 14, Tailwind CSS, shadcn/ui, and Supabase.

## 🚀 Quick Start

```bash
# Clone the repository
git clone [your-repo-url]
cd signup-page-boilerplate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## 📦 Installation Steps

1. Create new Next.js project:
```bash
npx create-next-app@14.2.18 signup-page-boilerplate --typescript --tailwind --eslint
cd signup-page-boilerplate
```

2. During setup, select:
- `src/` directory: Yes
- App Router: Yes
- Turbopack: No
- Import alias (@/*): No

3. Install shadcn/ui:
```bash
npx shadcn@latest init
```
- Choose "New York" theme for SaaS/dashboard style
- Install required components:
```bash
npx shadcn@latest add button input card
```

4. Install additional dependencies:
```bash
npm install lucide-react
npm install @supabase/ssr @supabase/supabase-js
npm install --save-dev @cloudflare/next-on-pages
```

## 🔑 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📚 Supabase Setup

1. Create new Supabase project
2. Create signup table:
```sql
create table signups (
    id uuid default uuid_generate_v4() primary key,
    email text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()),
    metadata jsonb default '{}',
    unique(email)
);
```

## 🚢 Deployment

### Cloudflare Pages:

1. Add to `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "pages:build": "npx @cloudflare/next-on-pages",
    "deploy": "npm run build && npm run pages:build"
  }
}
```

2. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
└── 📁src
    └── 📁app
        └── 📁fonts
            └── GeistMonoVF.woff     # Geist Mono Variable Font
            └── GeistVF.woff         # Geist Variable Font
        └── favicon.ico              # Site favicon
        └── globals.css              # Global styles
        └── layout.tsx               # Root layout
        └── page.tsx                 # Homepage
    └── 📁components
        └── 📁ui                     # shadcn/ui components
            └── button.tsx           # Button component
            └── card.tsx             # Card component
            └── input.tsx            # Input component
    └── 📁lib
        └── utils.ts                 # Utility functions
    └── 📁supabase                   # Supabase configuration
        └── client.ts                # Client-side config
        └── middleware.ts            # Auth middleware
        └── server.ts                # Server-side config
```

## 🌟 Features

- Modern, responsive design
- Dark mode support
- Email signup with Supabase
- Form validation
- Loading states
- Success/error notifications
- SEO optimized

## 🔧 Known Issues

- Cloudflare Pages deployment shows 13 vulnerabilities (3 low, 1 moderate, 9 high)
  - These are from development dependencies and don't affect production
  - Will be resolved in future dependency updates

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Create Pull Request

## 📄 License

MIT License - feel free to use this boilerplate for your projects!