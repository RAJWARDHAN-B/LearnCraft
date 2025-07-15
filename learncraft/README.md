# LearnCraft WebApp

A modern, responsive frontend web application for online learning, inspired by platforms like Coursera. Built with React and Vite.

## Features

### Implemented Features

- **Landing/Home Page**
  - Hero section with promotional text, search bar, and feature highlights
  - Trusted companies section with animated logos
  - Popular courses showcase with ratings, price, and best-seller tags
  - Training section with institute highlights
  - Author/mentor showcase
  - Testimonials carousel from learners/clients

- **Course Details**
  - Dedicated course detail pages with curriculum, skills, ratings, duration, and job/salary info
  - “My Learning” dashboard with enrolled courses and expandable details

- **Blog Section**
  - Blog listing with images, titles, and summaries
  - Individual blog detail pages with full content and images

- **Navigation & Layout**
  - Responsive navbar with links to all main sections
  - Responsive design for mobile and desktop
  - Footer with contact info, social links, and legal links

- **Other**
  - Author/mentor profiles with LinkedIn links
  - Static assets for branding and visuals

---

### Potential Features to Enhance the WebApp

- **YouTube Video Integration:** Embed and organize YouTube course videos directly in course detail pages
- **User Authentication:** Allow users to register, log in, and track their progress
- **Progress Tracking:** Show video/course completion status and certificates
- **Quizzes & Assignments:** Add interactive quizzes and assignments for each course
- **Discussion Forums/Community:** Enable learners to discuss and ask questions
- **Wishlist/Bookmarking:** Let users save courses for later
- **Search & Filter:** Advanced search and filtering for courses and blogs
- **Notifications:** Notify users about new courses, blog posts, or progress
- **Admin Dashboard:** For managing courses, blogs, and users
- **Multi-language Support:** Make the platform accessible to a wider audience
- **Dark Mode:** User-selectable theme for better accessibility
- **Payment Integration:** For paid courses or certifications

---

## Getting Started

This project uses React + Vite. To run locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---

## Development Notes

- Uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for fast refresh.
- ESLint is configured for code quality.
- For production, consider using TypeScript and type-aware lint rules.

---



Frontend-Only Suggestions
1. User Experience & UI
Dark Mode Toggle: Add a button to switch between light and dark themes for better accessibility and comfort.
Progress Indicators: Show a progress bar or checkmarks for watched videos in the sidebar.
Animated Transitions: Use framer-motion or similar libraries for smooth page and component transitions.
Responsive Enhancements: Further optimize layouts for mobile and tablet, especially sidebars and video players.
Sticky Sidebar: Make the video/topic sidebar sticky on larger screens for easier navigation.
Improved Course Cards: Add hover effects, subtle shadows, and badges (e.g., “New”, “Popular”) to course cards.
Skeleton Loaders: Show animated placeholders while content is loading for a smoother feel.
Accessible Design: Ensure all interactive elements are keyboard-accessible and have proper ARIA labels.
2. Discoverability & Navigation
Search Autocomplete: Enhance the search bar with instant suggestions as users type.
Filter & Sort: Allow users to filter courses by category, duration, or rating, and sort them (e.g., by popularity).
Category Badges: Display category tags on course cards for quick visual identification.
3. Content Presentation
Video Playlist UI: Add “Next” and “Previous” buttons below the video player for easier navigation.
Course Overview Section: Add a collapsible section with a brief course summary, instructor info, or FAQs.
Highlight Active Video: Visually highlight the currently playing video in the sidebar.
4. Visual Polish
Consistent Color Palette: Refine your color scheme for a more cohesive look.
Typography: Use modern, readable fonts and consistent heading styles.
Microinteractions: Add small animations to buttons, links, and cards for a lively feel.
5. Performance & Best Practices
Lazy Load Images: Use loading=\"lazy\" for images to improve page speed.
Code Splitting: Use React’s lazy loading for large components/pages.
SEO Meta Tags: Add meta tags and descriptive titles for each page (can be done in the frontend with React Helmet).