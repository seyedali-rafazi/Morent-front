# MORENT — Car Rental Frontend

A modern car rental web application built with **React**, **TypeScript**, and **Material UI**. Browse premium vehicles, filter by type and price, view cars in 360° / 3D, manage favourites, build a cart, and complete a rental checkout — all from a responsive, polished UI.

**Live demo:** [morent.liara.run](https://morent.liara.run)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Application Flows](#application-flows)
- [Data Layer](#data-layer)
- [Filtering & Search](#filtering--search)
- [3D Car Viewer](#3d-car-viewer)
- [Profile Completion](#profile-completion)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## Features

### Browse & Discover
- **Home page** with hero banner, pickup/drop-off date pickers, and recommended cars
- **Car catalog** with grid layout, skeleton loading states, and pagination-style "Show more"
- **Search** by car name or type from the navbar
- **Filters** by car type, passenger capacity, and max price (sidebar on desktop, drawer on mobile)
- **Sort** by latest, earliest, or popularity via URL query params

### Car Details
- Full car detail page with image gallery (Swiper), specs, pricing, and discount display
- **360° frame viewer** using car image sequences
- **Interactive 3D model** (BMW M4 GLB) via React Three Fiber
- Add to favourites and rent actions

### User Account
- Phone-based sign up / sign in (OTP flow)
- **User dashboard** with stats: favourites, rentals, cart items
- **Profile completion** progress bar (name, email, phone, address)
- Edit profile form
- Favourites list
- Rental / order history
- Logout

### Cart & Checkout
- Add cars to cart from detail or listing pages
- Multi-step billing flow (billing info → confirmation)
- Coupon code support (`MORENT20` = 20% off)
- Simulated payment that creates an order and clears the cart

### UI / UX
- Responsive navbar with mobile drawer, search, and filter access
- Custom MORENT design system (Plus Jakarta Sans, blue palette)
- Toast notifications for user actions
- Empty states for cart, favourites, and orders
- Sticky navbar with blur on scroll

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| UI | Material UI (MUI) 5, Emotion |
| Routing | React Router 6 |
| Server state | TanStack React Query 5 |
| Forms | React Hook Form |
| HTTP client | Axios (ready for backend integration) |
| Dates | Day.js, MUI X Date Pickers |
| 3D | Three.js, React Three Fiber, Drei |
| Carousel | Swiper |
| Icons | MUI Icons, React Icons |
| Notifications | React Hot Toast |
| Virtualization | React Window |

---

## Project Structure

```
Morent-front/
├── public/
│   ├── models/           # 3D assets (e.g. bmw-m4.glb)
│   └── photos/           # Logo, avatars, static images
├── src/
│   ├── components/       # Feature-specific UI
│   │   ├── available-car/  # Filters, sidebar, car type
│   │   ├── car-rent/       # Car detail & rent pages
│   │   ├── home/           # Banner, pickup, car lists
│   │   ├── profile/        # Dashboard, orders, favourites
│   │   └── user-card/      # Cart & checkout flow
│   ├── context/          # React context (filters, forms)
│   ├── data/             # Static car & category data
│   ├── feachers/         # Feature hooks & auth screens
│   ├── fonts/            # Plus Jakarta Sans
│   ├── pages/            # Route-level page components
│   ├── services/         # API / data access layer
│   ├── types/            # Shared TypeScript interfaces
│   ├── ui/               # Reusable UI components
│   ├── utils/            # Helpers (pricing, profile %, cities)
│   ├── App.tsx           # Routes & providers
│   ├── main.tsx          # App entry point
│   └── theme.ts          # MUI theme configuration
├── .env                  # Local environment variables (not committed)
├── .npmrc                # npm registry (official npmjs for CI/CD)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Morent-front

# Install dependencies
npm install

# Create environment file
cp .env.example .env   # or create .env manually (see below)

# Start development server
npm run dev
```

The app runs at **http://localhost:3000** by default.

### Production preview locally

```bash
npm run build
npm run preview
```

Preview server runs at **http://localhost:8080**.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run typecheck` | Run TypeScript compiler (`tsc -b`) |
| `npm run lint` | ESLint check |

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_BASE_URL=http://localhost:5000/api
```

| Variable | Description |
|----------|-------------|
| `VITE_BASE_URL` | Base URL for the backend API. Used by `httpService.ts` for Axios requests with credentials and token refresh. |

> **Note:** The app currently runs in **demo mode** using `localStorage` via `localDataService.ts`. Car, auth, cart, and payment operations work without a backend. The HTTP layer is wired and ready for a real API when you connect one.

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with search, dates, recommendations |
| `/available-cars` | Catalog | Full car listing with filters |
| `/car-rent/:id` | Car detail | Single car rent page |
| `/auth` | Auth | Sign up / sign in |
| `/Complete-profile` | Profile setup | Name, email, phone, address |
| `/user-card` | Cart | Shopping cart & checkout |
| `/user-profile` | Profile layout | Sidebar navigation |
| `/user-profile/dashboard` | Dashboard | Stats & quick actions |
| `/user-profile/user-favourit` | Favourites | Saved cars |
| `/user-profile/user-order` | Orders | Rental history |

---

## Application Flows

### Authentication
1. User enters phone number on `/auth`
2. OTP is simulated — any phone number logs in
3. Session state is stored in `localStorage` under `morent_app_state`
4. Logout resets to the default demo user

### Rent a car
1. Browse or search cars → open `/car-rent/:id`
2. Review specs, 360° images, and 3D model
3. Click **Rent Now** → car is added to cart
4. Go to `/user-card` to complete billing and pay

### Checkout
1. Review cart items and apply coupon (`MORENT20`)
2. Fill billing information
3. Confirm payment → order appears in **My Rentals**
4. Cart is cleared after successful payment

### Favourites
- Click the heart icon on any car card or detail page
- View saved cars under **Profile → Favourites**

---

## Data Layer

### Demo mode (current)

All data operations go through `src/services/localDataService.ts`:

- **Cars:** 12 vehicles from `src/data/cars.ts` (Unsplash images)
- **Categories:** Sport, SUV, Sedan, Coupe, Hatchback, MPV
- **Persistence:** `localStorage` key `morent_app_state`
- **Default user:** Demo User / demo@morent.com

Service modules re-export from the local layer:

```
carServices.ts      → getAllCars, getCarById, getAllCategory, postUserFavourit
userAuthService.ts  → getOtp, getUser, completeUser, userLogout
psymentService.ts   → addToCard, addOff, userPayment
```

### Backend integration (future)

`src/services/httpService.ts` provides an Axios instance with:

- `withCredentials: true` for cookie-based auth
- Automatic retry on `401` via `/user/refresh-token`

To connect a real API, replace the exports in the service files to call `http` instead of `localDataService`.

---

## Filtering & Search

Filters are driven by **URL search params** on `/available-cars`:

| Param | Example | Effect |
|-------|---------|--------|
| `search` | `?search=bmw` | Text search in title, type, description |
| `carGroup` | `?carGroup=Sport` | Filter by car type |
| `capacite` | `?capacite=4` | Filter by passenger capacity |
| `offPrice` | `?offPrice=100` | Max price per day |
| `sort` | `?sort=popular` | Sort: `latest`, `earliest`, `popular` |

On mobile, filters open in a slide-out drawer (`FilterDrawer`). On desktop, a sidebar is shown on the catalog page.

---

## 3D Car Viewer

Located in `src/ui/Car3DViewer.tsx`:

- Renders a GLB model from `/public/models/bmw-m4.glb`
- Orbit controls for drag-to-rotate
- Loading progress indicator
- Platform/ground meshes are automatically hidden

Used on the car detail page for an interactive preview experience.

---

## Profile Completion

The dashboard shows a **profile completion** percentage based on four fields (25% each):

| Field | Form location |
|-------|---------------|
| Full name | `/Complete-profile` |
| Email address | `/Complete-profile` |
| Phone number | `/Complete-profile` |
| Delivery address | `/Complete-profile` |

Logic lives in `src/utils/profileCompletion.ts`. Missing fields are listed under the progress bar.

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `VITE_BASE_URL` in Environment Variables if using a backend

The project includes `.npmrc` with `registry=https://registry.npmjs.org/` so CI/CD installs from the official npm registry (required for Vercel; avoid Liara mirror URLs in `package-lock.json`).

### Liara

Previously deployed at [morent.liara.run](https://morent.liara.run). Use Liara's static site or Node static hosting with the same build output (`dist/`).

### Build notes

- Production build uses `vite build` (no separate `tsc` step in CI)
- Run `npm run typecheck` locally before major changes
- Large JS bundle warning is expected due to Three.js; consider code-splitting for optimization

---

## Troubleshooting

### `npm install` fails on Vercel

If `package-lock.json` contains `package-mirror.liara.ir` URLs, replace them with `https://registry.npmjs.org/` or regenerate the lockfile:

```bash
rm -rf node_modules package-lock.json
npm install
```

### `tsc: command not found` during build

Dependencies were not installed. Ensure `npm install` completes before `npm run build`.

### TypeScript `TS2590` (union type too complex)

Known issue with MUI `sx` props and custom palette shades. Run `npm run typecheck` locally; production builds use Vite only.

### Cart or user data seems stuck

Clear browser `localStorage` key `morent_app_state`, or use **Logout** in the profile sidebar.

### 3D model not loading

Confirm `/public/models/bmw-m4.glb` exists and is deployed with the build.

---

## Contact

For questions or inquiries:

**Email:** seyedalirafazi80@gmail.com

---

## License

This project is private. All rights reserved.
