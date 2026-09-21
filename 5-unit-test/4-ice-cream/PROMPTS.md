# Tasarım

Create a modern, playful, visually appetizing local e-commerce website for an ice cream shop. The website should feel premium but friendly, with a strong focus on product photography, easy browsing, and a frictionless add-to-cart experience.

The overall design should be clean, colorful, fresh, and slightly playful, inspired by premium artisan ice cream brands. Use soft pastel colors, creamy backgrounds, rounded UI elements, subtle shadows, smooth animations, and large high-quality ice cream photography. Avoid making the site look childish or overly saturated.

The website should be fully responsive and optimized for desktop, tablet, and mobile.

Header

Create a clean sticky header containing:

Brand logo on the left

Navigation links such as:

Ana Sayfa

Dondurmalar

Hakkımızda

İletişim

Optional location/delivery information

Basket/cart icon on the right

Display the number of items currently inside the basket

On mobile, use a compact hamburger navigation

Keep the header lightweight so the products remain the main visual focus.

Hero Section

Create a visually striking hero section introducing the ice cream shop.

Include:

A bold and memorable headline

A short supporting paragraph

A primary CTA button such as "Dondurmaları Keşfet"

An optional secondary CTA such as "Menüyü Gör"

A large, attractive ice cream image or product composition

Small decorative visual elements such as floating fruit, chocolate pieces, cones, sprinkles, or abstract shapes

Example messaging:

Mutluluk Bir Top Dondurma Uzağında.

Freshly prepared artisan ice creams made with quality ingredients and delivered locally.

The hero should immediately communicate freshness, flavor, and enjoyment.

Trust / Benefits Section

Directly below the hero, add a compact benefits section with 3–4 highlights such as:

Günlük Üretim

Kaliteli Malzemeler

Hızlı Yerel Teslimat

Özenle Hazırlanır

Use simple icons and short descriptions.

Category Selector + Product Grid

This should be the main shopping section.

At the top, include category filters such as:

Tümü

Meyveli

Çikolatalı

Sütlü

Sorbe

Özel Tatlar

The category selector can use rounded pill-style buttons.

Below it, display products in a responsive grid.

Product Card

Each product card should contain:

Large product image

Product name

Short one- or two-line description

Price

Optional badge such as:

Çok Satan

Yeni

Favori

Serving type selector:

Külah

Bardak

Optional quantity selector

Prominent "Sepete Ekle" button

Make the cards clean and visually appetizing with rounded corners, subtle shadows, and smooth hover interactions.

Selecting Külah or Bardak should clearly show the active option.

When the customer adds an item to the basket, provide visual feedback such as a small animation, toast notification, or cart counter update.

Featured / Best Sellers Section

Add a visually distinct section highlighting the shop's most popular flavors.

Example heading:

En Sevilen Tatlarımız

Show 3–4 best-selling ice creams with larger imagery than the standard product cards.

About / Brand Story Section

Add a short storytelling section introducing the local ice cream shop.

Include:

A lifestyle or preparation image

Short brand story

Emphasis on freshness, craftsmanship, local production, and ingredient quality

Example heading:

Her Topta Biraz Mutluluk

Keep the copy warm and concise.

Promotional Banner

Add a colorful promotional section for campaigns or local delivery offers.

Example:

2 kutu al, teslimat bizden.

Include a CTA leading back to the products.

This section should visually break up the page and add energy to the layout.

Customer Favorites / Reviews

Include a small testimonials section with 3 customer reviews.

Each review can contain:

Customer name

Star rating

Short review

Optional small avatar

Keep the testimonials visually simple and trustworthy.

Local Delivery Section

Because this is a local e-commerce website, clearly communicate the delivery experience.

Include information such as:

Delivery area

Estimated preparation/delivery time

Minimum order if applicable

Store pickup option if available

Example heading:

Dondurmanız Erimeden Kapınızda.

Include a location or delivery icon and a CTA such as "Teslimat Bölgesini Kontrol Et".

Basket / Cart Experience

The basket should be easy to access without leaving the shopping experience.

Prefer a slide-out cart drawer from the right side.

Inside the cart show:

Product image

Product name

Külah / Bardak selection

Quantity controls

Product price

Remove button

Subtotal

Delivery information

Checkout button

Use a clear CTA such as:

Siparişi Tamamla

On mobile, make the checkout button easily accessible.

Footer

Create a structured but minimal footer containing:

Logo

Short brand description

Navigation links

Contact information

Store address

Opening hours

Phone / WhatsApp

Instagram or other social media links

Delivery information

Copyright

Visual Direction

Use a premium artisan ice cream aesthetic.

Suggested design characteristics:

Cream/off-white background

Soft pastel accent colors such as strawberry pink, pistachio green, vanilla yellow, chocolate brown, and berry purple

Dark neutral color for primary text

Rounded cards and buttons

Generous whitespace

Bold modern typography for headings

Highly readable typography for body text

Large, realistic product photography

Subtle gradients where appropriate

Soft shadows instead of heavy borders

Small playful illustrations or floating ingredients used sparingly

Buttons should feel tactile and inviting.

Interactions & Animation

Add subtle micro-interactions throughout the website:

Product card hover effects

Smooth category filtering

Button hover/press animations

Cart drawer animation

Add-to-cart feedback

Slight floating movement for decorative hero elements

Smooth scrolling

Image transitions

Animations should feel polished and lightweight rather than distracting.

UX Requirements

Prioritize conversion and simplicity.

Users should be able to:

Discover flavors quickly

Filter products easily

Select Külah or Bardak

Add products to the basket with minimal effort

Edit quantities directly from the cart

Clearly understand delivery options

Complete their order easily on mobile

Avoid unnecessary popups and complicated navigation.

Make the final website feel like a real, modern local ice cream brand, not a generic e-commerce template. The interface should make users immediately crave the products while keeping the purchasing experience simple and intuitive.

# PROJE

Use [agency-frontend-developer](slashCommand;agency-frontend-developer) while coding this website.
Develop a **React project that closely matches the design located in the [design](directory;file:///c:/Users/furka/Desktop/16-hs-frontend/5-unit-test/4-ice-cream/design) folder**.

The final implementation should reproduce the provided design as accurately as possible in terms of:

- Layout
- Spacing
- Typography
- Colors
- Component proportions
- Images and visual hierarchy
- Responsive behavior
- Hover, focus, and interaction states

Treat the files inside the `design` folder as the **primary visual reference and source of truth**. Avoid unnecessary redesign decisions unless something is missing, unclear, or technically impractical.

## Technical Requirements

Build the application using **React** with a clean, scalable, and maintainable architecture.

Structure the project with reusable components and avoid large monolithic components.

Use:

- Semantic HTML
- Reusable React components
- Clear separation of concerns
- Predictable state management
- Clean and consistent naming conventions
- Minimal and well-justified dependencies

Avoid unnecessary libraries when the same result can be achieved efficiently with native browser APIs or lightweight React patterns.

## Testability

Develop the project with future automated testing in mind.

The codebase should be easy to test using tools such as React Testing Library, Vitest, or similar testing frameworks.

Follow these principles:

- Keep business logic separate from presentation where appropriate.
- Build small, reusable components.
- Avoid tightly coupled components.
- Use stable and meaningful selectors when necessary.
- Prefer accessible selectors such as roles, labels, and semantic elements instead of relying heavily on arbitrary class names.
- Make interactive elements predictable and easy to test.
- Avoid hidden side effects.
- Keep data and UI logic deterministic whenever possible.

Do not sacrifice implementation quality simply to make testing easier.

## Performance

Performance is a high priority and should not be compromised.

Optimize the application for strong Core Web Vitals and real-world loading performance.

Pay attention to:

- Minimizing unnecessary React re-renders
- Efficient component rendering
- Lazy loading where appropriate
- Code splitting when beneficial
- Optimized image formats and responsive images
- Correct image dimensions to prevent layout shifts
- Avoiding unnecessarily large dependencies
- Efficient font loading
- Reducing unused JavaScript and CSS
- Avoiding excessive client-side computation
- Preventing cumulative layout shift
- Maintaining fast interaction responsiveness

Do not apply premature micro-optimizations that make the code unnecessarily complex, but address meaningful performance issues proactively.

## SEO

Implement the project without compromising SEO.

Use proper semantic document structure and ensure that important content is understandable by search engines.

Include:

- Correct heading hierarchy (`h1`, `h2`, `h3`, etc.)
- Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`
- Meaningful page titles
- Meta descriptions
- Canonical URL support where appropriate
- Open Graph metadata
- Twitter/X sharing metadata where relevant
- Descriptive image `alt` attributes
- Search-engine-friendly URLs
- Accessible internal navigation
- Proper link semantics
- Structured data / Schema.org markup where it adds meaningful SEO value

If the project contains multiple routes or pages, ensure each important page can have its own SEO metadata.

Do not hide important content behind unnecessary JavaScript interactions when it can be rendered directly.

## Accessibility

Accessibility should be treated as a core implementation requirement.

Follow common WCAG best practices, including:

- Full keyboard accessibility
- Visible focus states
- Proper button and link semantics
- Accessible form labels
- Appropriate ARIA attributes only when necessary
- Sufficient color contrast
- Logical tab order
- Meaningful alternative text
- Respect for `prefers-reduced-motion`

Do not replace native accessible HTML elements with generic `div` elements unless there is a strong reason.

## Responsive Design

The implementation must work correctly across:

- Desktop
- Laptop
- Tablet
- Mobile

Reproduce the responsive behavior shown in the reference design when available.

When responsive states are not explicitly provided, infer sensible behavior while preserving the original visual language and hierarchy.

Avoid hardcoded layouts that only work at one viewport size.

## Design Fidelity

Match the design in the `design` folder as closely as reasonably possible.

Pay particular attention to:

- Container widths
- Grid behavior
- Alignment
- Section spacing
- Border radius
- Shadows
- Font sizes
- Font weights
- Line heights
- Button dimensions
- Card dimensions
- Image aspect ratios
- Header and navigation behavior
- Mobile spacing

Create reusable design tokens or variables for repeated values such as:

- Colors
- Spacing
- Border radii
- Shadows
- Typography
- Breakpoints

Avoid duplicating arbitrary values throughout the codebase.

## Interactions

Implement all interactions visible or implied by the design.

This may include:

- Navigation
- Buttons
- Dropdowns
- Tabs
- Product interactions
- Forms
- Modals
- Carousels
- Hover states
- Active states
- Mobile navigation
- Loading states
- Empty states
- Error states

Interactions should feel polished but should remain lightweight and performant.

Use animation only where it improves the experience. Avoid excessive animation or effects that negatively affect performance.

## Code Quality

The final code should be production-oriented.

Ensure that:

- Components have clear responsibilities.
- Repeated UI patterns are extracted into reusable components.
- There is minimal duplicated code.
- Constants and configuration values are centralized where useful.
- There are no unnecessary console logs.
- There is no dead or placeholder code left behind.
- Error cases are handled gracefully.
- The project has a logical folder structure.
- The code remains easy for another developer to understand and extend.

## Final Validation

Before considering the implementation complete:

1. Compare the final interface against the reference files in the `design` folder.
2. Verify responsive behavior at multiple viewport sizes.
3. Check for obvious visual inconsistencies.
4. Verify keyboard navigation and basic accessibility.
5. Check for unnecessary rendering or performance bottlenecks.
6. Verify that images and fonts are loaded efficiently.
7. Check SEO metadata and semantic HTML structure.
8. Ensure the project builds successfully without warnings or errors.
9. Make sure the architecture remains suitable for future automated tests.
10. Avoid compromising design fidelity, SEO, accessibility, or performance for implementation convenience.

The goal is to deliver a **pixel-conscious, production-quality React implementation of the provided design**, with a strong emphasis on maintainability, testability, accessibility, SEO, and performance.

## Data

Use **json-server** as a mock API.

Create a `db.json` file based on the content and product data shown in the `design` folder, and structure it realistically for future API integration and testing.
