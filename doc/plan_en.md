# Don Elote Web Application

Create a modern, responsive web application for a Mexican elotes business with product menu, cart system, and WhatsApp ordering, using vanilla HTML/CSS/JS with Tailwind and Alpine.js for easy Cloudflare Pages deployment.

## Summary
Build a modern, single-page web application for "Don Elote" using vanilla HTML/CSS/JavaScript with Tailwind CSS and Alpine.js via CDN. This approach requires no build tools, can be deployed as static files to Cloudflare Pages, and provides a modern Mexican street food aesthetic.

## Proposed Architecture

### Tech Stack
- **HTML5** - Semantic structure
- **Tailwind CSS (via CDN)** - Utility-first CSS for modern styling and responsiveness
- **Alpine.js (via CDN)** - Lightweight reactive framework for cart state management
- **Vanilla JavaScript** - Custom logic for WhatsApp order generation
- **No backend** - Static site deployed to Cloudflare Pages

### Why This Stack?
- **Zero build step** - No Node.js, npm, or build tools required
- **Cloudflare Pages native** - Static HTML/CSS/JS deploys instantly
- **Fast and lightweight** - Minimal dependencies, quick load times
- **Easy to maintain** - Simple, readable code without complex framework abstractions
- **Modern UX** - Alpine.js provides reactive cart/total calculations without complexity

## Implementation Steps

### 1. Project Structure
```
/
├── index.html          # Main single-page application
├── css/
│   └── custom.css      # Custom styles for Mexican aesthetic
├── js/
│   └── app.js          # Application logic and WhatsApp integration
└── assets/
    └── images/         # Product images (if needed)
```

### 2. Core Features to Implement

**Page Sections:**
- Hero section with branding and tagline
- Product menu with elote varieties
- Size selector (chico/mediano/grande)
- Additional ingredients (mayonesa, crema, queso, chile, limón, etc.)
- Shopping cart with item management
- Order summary with total calculation
- WhatsApp order button

**Data Structure:**
- Product catalog with base prices
- Size modifiers (price multipliers)
- Ingredient add-ons with prices
- Cart state management with Alpine.js

**WhatsApp Integration:**
- Format order details as structured message
- Generate WhatsApp API link with pre-filled message
- Include all order details: items, sizes, ingredients, total

### 3. Design Aesthetic
- Color palette: Warm yellows, oranges, earth tones (corn, spices)
- Modern typography: Clean sans-serif with character
- Subtle Mexican-inspired patterns/accents (not caricature)
- High contrast for readability
- Mobile-first responsive design

### 4. Files to Create

**index.html** (~300 lines)
- HTML structure with Alpine.js directives
- Tailwind classes for layout and styling
- Product menu with size/ingredient selectors
- Cart display and checkout section

**css/custom.css** (~100 lines)
- Custom color variables
- Mexican-inspired decorative elements
- Responsive adjustments
- Animation utilities

**js/app.js** (~150 lines)
- Product data configuration
- Alpine.js component for cart management
- WhatsApp message formatting
- Price calculation logic

## Verification
- [ ] Test responsive design on mobile viewport
- [ ] Verify cart calculations for all product combinations
- [ ] Test WhatsApp order generation with sample order
- [ ] Check Cloudflare Pages deployment readiness
- [ ] Validate accessibility (keyboard navigation, screen readers)

## Risks/Considerations
- **WhatsApp phone number** - User will need to provide their business WhatsApp number
- **Product images** - Can use placeholder images or user-provided assets
- **No backend persistence** - Cart data lost on page refresh (acceptable for this use case)
- **Alpine.js CDN dependency** - Requires internet connection (standard for web apps)
