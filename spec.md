# Royale Packard

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page website for ROYALE PACKARD, a Delhi-based premium builder and developer
- Home page with: Hero, About, Interior Design Feature, Services, Featured Projects, Why Choose Us, Process Timeline, Testimonials, CTA, Contact sections
- Separate Property Listings page with filter system
- Floating WhatsApp button visible on all pages
- Contact form (Name, Phone, Email, Project Type dropdown, Budget Range, Message)
- Trust metrics grid (Years of Experience, Projects Delivered, Sq Ft Developed, Satisfied Clients, Commercial Spaces)
- Before/after interior slider gallery
- Process timeline (5 steps)
- Testimonials slider (3-5 entries)
- Footer with logo, tagline, quick links, services, phone, WhatsApp, email, social icons, privacy/terms/copyright
- SEO meta tags for home and listings pages
- Clickable phone number (9990456786) and WhatsApp integration (wa.me/919990456786)
- Google Maps embed for Delhi, India location

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan

### Backend
- Store contact form submissions: name, phone, email, projectType, budgetRange, message, timestamp
- Property listings data model: id, name, location, area, priceRange, type (Residential/Commercial/Interior), status (Completed/Ongoing), description, imageUrl
- Projects data model: id, name, location, type, status, shortDescription, imageUrl
- Query functions: getListings (with optional type/status filter), getProjects, submitContactForm

### Frontend Pages
1. **Home page** (`/`) — all 12 sections
2. **Property Listings page** (`/listings`) — filterable grid

### Key UI Sections
- Hero: full-width image, bold headline, two CTAs, phone number
- About: 3 paragraphs + stats grid + mission/vision
- Interior Design Feature: gold-accented section, 10 service items in grid, before/after slider
- Services: 3 cards (Residential, Commercial, Interior & Renovation) with icon + paragraph + button
- Featured Projects: grid cards with hover overlay
- Why Choose Us: dark background, 6 gold icon boxes
- Process: numbered step timeline
- Testimonials: minimal card slider
- CTA: dark background, headline, consultation button, phone
- Contact: form + contact info + Google Maps embed
- Footer: full footer with all links and info

### Design Tokens
- Background: #F5F1E8 (cream)
- Dark: #111111 (matte black)
- Accent: #C6A75E (gold)
- Text: #2B2B2B (deep charcoal)
- Fonts: Playfair Display (serif headings) + Inter (body)
