# tech-summit-project

## Project Summary

This repository contains a static website for the Tech Event 2026. The site includes multiple pages for registration, event details, location, sales, and contact information. It is built with HTML, CSS, and JavaScript, and includes a responsive registration form with:
- email validation
- password strength checking
- responsive layout for desktop and mobile

## Project Structure

- `tech-event-2026/index.html` — homepage
- `tech-event-2026/registration.html` — registration page with login form and validation
- `tech-event-2026/events.html` — event highlights and schedule
- `tech-event-2026/location.html` — venue location and directions
- `tech-event-2026/sales.html` — sales and sponsorship information
- `tech-event-2026/contact.html` — contact form and address details
- `tech-event-2026/css/` — stylesheets
- `tech-event-2026/js/` — JavaScript for form validation and site behavior
- `tech-event-2026/assets/` — fonts and other static assets

## How to Run

### Option 1: Open directly in the browser
1. Open `tech-event-2026/index.html` in your web browser.
2. Navigate between pages using the site navigation bar.

### Option 2: Use a local HTTP server
From the repository root:

```bash
cd tech-event-2026
python3 -m http.server 8000
```