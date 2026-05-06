# 12megaBlog - Project Summary

## Overview
12megaBlog is a full-featured blog application built with **React 19**, **Vite**, and **Appwrite** as the backend-as-a-service (BaaS). It allows users to create, read, update, and delete blog posts with rich text editing, image uploads, and authentication.

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, React Router 7 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 (via `@tailwindcss/vite` plugin) |
| **State Management** | Redux Toolkit + React Redux |
| **Forms** | React Hook Form |
| **Rich Text Editor** | TinyMCE (`@tinymce/tinymce-react`) |
| **Backend / BaaS** | Appwrite (Auth, Database, Storage) |
| **HTML Parsing** | html-react-parser |

## Architecture

### Project Structure
```
src/
├── appwrite/          # Appwrite SDK wrappers (config.js, auth.js)
├── components/        # Reusable UI components
│   ├── Header/        # Navigation bar + LogoutBtn
│   ├── Footer/        # Site footer
│   ├── container/     # Layout container component
│   └── post-form/     # PostForm (used for both create & edit)
├── pages/             # Route-level page components
├── store/             # Redux store & authSlice
├── conf/              # Environment config (conf.js)
├── utils/             # Utility functions (user serializer)
├── App.jsx            # Root component with auth check
└── main.jsx           # Entry point (React + Redux Provider + Router)
```

### Key Design Patterns

**1. Service Layer Pattern**
- `appwrite/config.js` — Handles all database and storage operations (CRUD for posts, file upload/delete/preview)
- `appwrite/auth.js` — Handles authentication (login, signup, logout, session management)
- Both are singleton class instances exported as default, making it easy to swap backend providers

**2. State Management (Redux Toolkit)**
- `authSlice` tracks `status` (boolean) and `userData` (object)
- `App.jsx` checks for existing session on mount via `getCurrentUser()` and dispatches `login`/`logout`
- `Protected` component (`AuthLayout.jsx`) uses `useSelector` to guard routes based on authentication status

**3. Form Handling**
- `PostForm.jsx` is reused for both creating and editing posts
- Auto-generates URL-friendly slugs from title using `watch` + `setValue` from react-hook-form
- Integrates TinyMCE via a custom `RTE` component using react-hook-form's `Controller`

**4. Routing**
- `App.jsx` uses `<Outlet />` as the nested route renderer
- Protected routes wrap authenticated pages (`AddPost`, `EditPost`, `AllPosts`)
- Public routes: `Home`, `Post`, `Login`, `Signup`

## Core Features

| Feature | Description |
|---------|-------------|
| **Authentication** | Email/password signup & login via Appwrite Auth sessions |
| **CRUD Posts** | Create, edit, delete posts with title, slug, content, featured image, and status |
| **Rich Text Editing** | TinyMCE editor with image, links, formatting, lists, tables, and more |
| **File Storage** | Upload featured images to Appwrite Storage with preview URLs |
| **Post Status** | Posts can be `active` (publicly visible) or `inactive` (hidden) |
| **Protected Routes** | `AuthLayout` component redirects unauthenticated users |
| **Author Controls** | Post authors see Edit/Delete buttons on their own posts |
| **Dark Mode** | Respects `prefers-color-scheme` system preference via CSS custom properties |

## Data Flow

### Creating a Post
1. User fills form in `AddPost.jsx` → `PostForm.jsx`
2. Title auto-generates a slug via `slugTransform` callback
3. Featured image uploaded to Appwrite Storage → returns file ID
4. Post data (title, slug, content, featuredImage ID, status, userID) sent to Appwrite Database
5. On success, navigate to `/post/{slug}` to view the new post

### Viewing a Post
1. `Post.jsx` fetches post by `slug` param via `useParams`
2. HTML content parsed with `html-react-parser` and rendered
3. Featured image displayed via `appwriteService.getFilePreview()`
4. If current user is the author, Edit/Delete buttons appear

### Authentication Flow
1. `App.jsx` calls `authService.getCurrentUser()` on mount
2. If user exists → dispatch `login(userData)` → Redux state updated
3. `Protected` component checks `authStatus` → allows/blocks route access
4. `LogoutBtn` calls `authService.logout()` → dispatch `logout()` → redirects to home

## Environment Variables
```
VITE_APPWRITE_URL
VITE_APPWRITE_PROJECT_ID
VITE_APPWRITE_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID
VITE_TINYMCE_API_KEY
```

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Flow (End-to-End)

```
App Start
  └─> main.jsx
       ├─> Wraps <Provider store={store}> (Redux)
       └─> Wraps <BrowserRouter>
            └─> <App />
                 ├─> useEffect: checks Appwrite session
                 ├─> If session exists → dispatch login(status=true, userData)
                 └─> If no session → dispatch logout(status=false)
                      └─> Renders <Header> + <Outlet> + <Footer>

User visits / (Home)
  └─> Home.jsx
       └─> Fetches posts (status=active) from Appwrite
       └─> Renders <PostCard> grid

User clicks a post
  └─> /post/:slug → Post.jsx
       └─> Fetches single post by slug
       └─> Parses HTML content with html-react-parser
       └─> Renders post with image, title, body
       └─> If author → shows Edit/Delete buttons

User wants to write a post
  └─> Protected(authentication=true) wraps AddPost.jsx
       └─> If not logged in → redirected to /login
       └─> PostForm.jsx renders
            ├─> User types title → slug auto-generated
            ├─> TinyMCE RTE for rich content
            └─> File input for featured image
       └─> On submit → upload image → create post → navigate to /post/:slug

User wants to edit
  └─> /edit-post/:id → EditPost.jsx
       └─> Fetches existing post
       └─> Pre-fills PostForm with current values
       └─> On submit → update post → navigate to /post/:slug
```

## Why These Technologies Were Chosen

| Technology | Why Chosen | Alternatives Considered |
|------------|------------|------------------------|
| **Vite** | Extremely fast dev server with instant HMR, native ESM support, minimal config. CRA is deprecated and Webpack is heavy. | CRA (Create React App), Next.js, Webpack |
| **React 19** | Component-based UI, large ecosystem, concurrent features. Industry standard for SPAs. | Vue, Angular, Svelte |
| **Appwrite** | Open-source BaaS that handles Auth, Database, Storage, and real-time in one platform. Avoids building a custom backend from scratch. Perfect for solo devs and startups. | Firebase, Supabase, custom Node.js + Express + MongoDB |
| **Redux Toolkit** | Official Redux standard. Solves prop-drilling for auth state. Easy devtools integration. RTK's `configureStore` and `createSlice` reduce boilerplate significantly vs old Redux. | Context API, Zustand, Jotai |
| **React Hook Form** | Performance-focused. Uses uncontrolled inputs, minimizing re-renders. Excellent validation API. Far less code than Formik. | Formik, manual state + onChange handlers |
| **TinyMCE** | Enterprise-grade rich text editor. Handles images, links, tables, code blocks out of the box. React wrapper available. | Quill, CKEditor, Slate.js, TipTap |
| **Tailwind CSS 4** | Utility-first CSS. No context-switching to write separate stylesheets. V4's CSS-first config and native Vite plugin remove need for `tailwind.config.js`. | CSS Modules, Styled Components, plain CSS, Bootstrap |
| **React Router 7** | Declarative routing with nested routes, `<Outlet />`, `useParams`, and protected route patterns. Standard for React SPAs. | Wouter, TanStack Router |
| **html-react-parser** | Safely converts TinyMCE's HTML strings into React elements. Better than `dangerouslySetInnerHTML` because it produces real React nodes you could theoretically transform. | `dangerouslySetInnerHTML` |

## Architecture Decisions & Trade-offs

### Why Redux for just auth state?
Redux provides a single source of truth for authentication that any component can access without prop-drilling. While Context API could work here, Redux scales better as the app grows (comments, likes, drafts). It also gives access to Redux DevTools for debugging.

### Why a Service Layer instead of direct Appwrite calls in components?
- **Decoupling**: If you switch from Appwrite to Supabase or Firebase, you only change the service files, not every component.
- **Testability**: Services can be unit-tested independently of UI.
- **Reusability**: `appwriteService.uploadFile()` is called from both create and edit flows.

### Why single `PostForm` for both create and edit?
The `post` prop is optional. When `post` is passed, the form acts as an edit form; when omitted, it acts as a create form. This eliminates code duplication and keeps the UI consistent.

### Why `slug` as document ID instead of auto-generated ID?
SEO-friendly URLs (`/post/my-first-blog`) instead of opaque IDs (`/post/abc123xyz`). The `slugTransform` function ensures slugs are URL-safe.

## Hurdles, Challenges & Solutions

### 1. TinyMCE Content Not Adapting to Dark Mode
**Problem**: TinyMCE saves content with hardcoded black text. When the system switches to dark mode (`prefers-color-scheme: dark`), the parsed HTML text remains black on a `#16171d` background, making it invisible.
**Solution**: Added a `.browser-css` CSS class block in `index.css` that maps all text elements (p, span, div, li, h1-h6, strong, a) to CSS custom properties (`var(--text)`, `var(--text-h)`, `var(--accent)`), ensuring dynamic color adaptation.

### 2. Hardcoded Colors Breaking Dark Mode
**Problem**: Several components (`Input`, `Select`, `Login`, `Signup`, `PostCard`) used hardcoded Tailwind classes like `bg-white`, `text-black`, and `bg-gray-100` that ignored the dark mode CSS variables.
**Solution**: Replaced hardcoded colors with Tailwind arbitrary values pointing to CSS variables: `bg-[var(--bg)]`, `text-[var(--text)]`, `border-[var(--border)]`.

### 3. Authentication Race Condition
**Problem**: On app load, protected routes could render before `App.jsx` finishes checking the Appwrite session, causing a flash of unauthenticated content or incorrect redirects.
**Solution**: `App.jsx` uses a `loading` state that blocks rendering until `getCurrentUser()` resolves. The `Protected` component also has its own loader state.

### 4. Slug Generation Edge Cases
**Problem**: User-entered titles can contain spaces, special characters, uppercase letters, and be very long — none of which are valid in URLs.
**Solution**: Implemented `slugTransform` with `useCallback` that trims, lowercases, replaces non-alphanumeric sequences with hyphens, strips leading/trailing hyphens, and truncates to 36 characters. Integrated via `watch` + `setValue` so the slug updates in real-time as the user types.

### 5. File Upload Before Document Creation
**Problem**: When creating a post, the featured image must be uploaded to Appwrite Storage first to get its file ID, which is then referenced in the database document. If the upload fails, no document should be created. If the document creation fails after a successful upload, an orphan file is left in storage.
**Solution**: The form handler uploads the file first, checks for a valid response, then creates the document. Orphan file cleanup is not yet implemented but could be added with a try/catch around `createPost` that calls `deleteFile` on failure.

### 6. Tailwind v4 Migration
**Problem**: Tailwind CSS v4 changes configuration from JS (`tailwind.config.js`) to CSS-first (`@import "tailwindcss"`). The Vite plugin replaces the PostCSS setup. Some older Tailwind patterns and `@apply` usage may behave differently.
**Solution**: Used the `@tailwindcss/vite` plugin and CSS-based configuration. Arbitrary value syntax (`bg-[var(--bg)]`) works seamlessly with CSS custom properties in v4.

### 7. Missing CSS for `.browser-css` Class
**Problem**: The class was applied in `Post.jsx` but no CSS rules existed for it anywhere, so parsed HTML content had no styling context.
**Solution**: Defined comprehensive `.browser-css` rules in `index.css` covering all common HTML elements that TinyMCE produces.
