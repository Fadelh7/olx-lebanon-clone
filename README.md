# OLX Lebanon Clone - Premium Marketplace

A high-fidelity clone of the OLX Lebanon marketplace, built with Next.js, TypeScript, and a focus on premium UI/UX.

## 🏗 Project Structure

```text
olx-clone/
├── public/              # Static assets (images, fonts, holiday banners)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── home/        # Landing page components (AdGrid, AdCard, Banner)
│   │   ├── layout/      # Shared layout (Header, Footer, Navigation)
│   │   └── post-ad/     # Ad posting flow (CategorySelector, DynamicForm)
│   ├── data/            # Processed JSON data for ads, categories, and fields
│   ├── lib/             # API layer and utility functions
│   ├── pages/           # Next.js routes (Index, Post-Ad, etc.)
│   ├── styles/          # CSS Modules and Global Design System
│   └── types/           # TypeScript definitions
├── process_data.js      # Script to transform raw .txt data into optimized JSON
├── ads data.txt         # Raw source data provided
├── categories.txt       # Raw category hierarchy
└── categoryFields.txt   # Raw dynamic form field definitions
```

## 🚀 Approach & Rationale

### 1. Dynamic Form Generation
The ad posting flow is entirely dynamic. Instead of hardcoding forms, the `DynamicForm.tsx` component reads field definitions (`categoryFields.json`) to render appropriate inputs (selects, numbers, text areas). This mirrors how real-world classified platforms scale across thousands of categories.

### 2. Premium UI/UX Design System
I opted for a custom CSS-module based system rather than a generic UI library to achieve a "Pixel Perfect" replica of OLX:
- **Consistent Grid**: Standardized card dimensions for a clean, organized look.
- **Micro-interactions**: Hover states, smooth transitions, and responsive layouts.
- **Theming**: A centralized `variables.css` ensures color and typography consistency.

### 3. Holiday Integration (Christmas Theme)
The landing page includes a specialized Christmas banner and curated sections for high-traffic categories (Cars, Apartments, Phones), demonstrating the platform's ability to handle seasonal marketing widgets.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Vanilla CSS)
- **State**: React Hooks (useState/useEffect)
- **i18n**: next-i18next (English/Arabic support)


