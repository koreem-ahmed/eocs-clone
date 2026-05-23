# EOCS Main Website

The official website for the Egyptian Olympiad in Computational Science (EOCS) - a high school competition that aims to aid students in learning computational techniques across various scientific fields.

## About EOCS

The Egyptian Olympiad in Computational Scien- Instagram: [eg_ocs](https://www.instagram.com/eg_ocs/)

## License(EOCS) bridges Egypt's rich scientific heritage with cutting-edge computational innovation. Students solve complex scientific problems using modern computational methods across four main domains:

- **Physics Computation**: Celestial Systems, Ising Model, Molecule Diffusion, and Particle Physics
- **Chemical Computation**: Molecular Geometry, Reaction Kinetics, and Drug Design
- **Biological Computation**: DNA Analysis, Machine Learning in Biology, Genomic and Evolutionary Analysis, and Molecular Docking
- **Mathematical Computation**: Linear Equations Systems, Numerical Calculus, and Graph-Based Genomics

## Live Website

Visit the live website at: [EOCS Platform](https://eocs-platform.vercel.app)

## Project Structure

```
main/
├── index.html              # Main landing page
├── feedback.html           # Feedback form for qualifications
├── teams.html             # Team information checker
├── vercel.json            # Vercel deployment configuration
├── assets/                # Static assets
│   ├── data/             # CSV data files (teams.csv)
│   ├── favicon/          # Favicon files
│   ├── images/           # Image assets
│   ├── Logo.webp         # Main EOCS logo
│   └── *.svg             # EOCS brand logos and decorative elements
├── css/                   # Stylesheets
│   ├── styles.css        # Main stylesheet with Egyptian-themed design
│   ├── animations.css    # Animation definitions
│   ├── navigation.css    # Navigation component styles
│   ├── loader.css        # Loading screen styles
│   ├── logo-animation.css # Logo animation styles
│   └── normalize.css     # CSS reset/normalize
├── js/                    # JavaScript files
│   ├── main.js           # Core website functionality
│   ├── animations.js     # Animation controllers
│   ├── advanced-animations.js # Complex animation effects
│   ├── countdown.js      # Competition countdown timer
│   ├── mobile-menu.js    # Mobile navigation handler
│   ├── title-animations.js # Page title animations
│   └── alerts.js         # Alert system
└── pages/                 # Additional website pages
    ├── about.html        # About EOCS and competition details
    ├── contact.html      # Contact information and form
    ├── eligibility.html  # Eligibility requirements and rules
    ├── partners.html     # Partners and sponsors
    ├── prizes.html       # Prize information
    └── auth/            # Authentication related pages
        └── register.html # Registration page
```

## Key Features

### Main Website (`index.html`)
- Egyptian-themed design with custom animations and visual elements
- Competition countdown timer showing time remaining until events
- Responsive navigation that works on desktop and mobile
- Hero section with clear call-to-action buttons
- Detailed competition structure breakdown covering all three rounds
- Eligibility requirements and participation guidelines
- Links to official EOCS social media channels

### Team Information System (`teams.html`)
- Team lookup functionality using email addresses
- Reads team data from CSV files in the assets directory
- Displays team member details and contact information
- Mobile-optimized interface design

### Feedback System (`feedback.html`)
- Integration with Google Forms for feedback collection
- Client-side validation for email addresses and required fields
- Optional name and contact fields for anonymous feedback
- Error handling with clear messaging

### Design System

#### Color Palette
```css
--egyptian-gold: #ad8231     /* Primary accent color */
--egyptian-dark: #3f3938     /* Background color */
--egyptian-light: #f5f0ec    /* Primary text color */
--egyptian-gray: #606060     /* Secondary text color */
--egyptian-beige: #e4d5bd    /* Secondary accent */
```

#### Typography
- Primary font is Orbitron for its futuristic, science-themed appearance
- System fonts used as fallbacks for optimal performance
- Font weights range from 400-900 for different text hierarchies

#### Animation Features
- Intersection Observer API for scroll-triggered animations
- CSS animations for smooth transitions and hover effects
- Egyptian pyramid-themed loading animations
- Subtle parallax effects on background elements

## Technologies Used

- HTML5 with semantic markup and accessibility features
- CSS3 using modern styling with custom properties and animations
- Vanilla JavaScript without external frameworks for optimal performance
- Font Awesome for UI icons
- Google Fonts for the Orbitron font family
- Vercel for hosting and deployment

## Responsive Design

The website works on all screen sizes with breakpoints for:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

Key responsive features:
- Collapsible mobile navigation
- Flexible grid layouts
- Optimized touch targets
- Compressed content for smaller screens

## Design Philosophy

### Egyptian Heritage Integration
- Visual elements include hieroglyphs, pyramids, and Egyptian corner decorations
- Color scheme uses gold and earth tones reflecting ancient Egyptian art
- Modern fonts with classical proportions
- Smooth, elegant transitions inspired by Egyptian aesthetics

### User Experience
- Performance-first approach with optimized loading times and minimal dependencies
- Accessibility compliance following WCAG guidelines
- Progressive enhancement - works without JavaScript
- Mobile-first design approach, then enhanced for desktop

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Local server for development (Live Server extension, Python HTTP server, etc.)

### Installation
1. Clone or download the project files
2. Open the project in your preferred text editor
3. Start a local development server
4. Open `index.html` in your browser

### Development Server
Using VS Code Live Server:
```bash
# Install Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"
```

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx serve .
```

## Data Management

### Team Data Format (`assets/data/teams.csv`)
```csv
Team Name,Member Count,Member1 Name,Member1 Email,Member1 Phone,Member2 Name,Member2 Email,Member2 Phone,...
```

### Form Integration
- Feedback form connects to Google Forms for data collection
- Client-side validation with error messaging
- Proper labels and ARIA attributes for accessibility

## Deployment

### Vercel Configuration (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/index",
      "destination": "/index.html"
    },
    {
      "source": "/(.*)",
      "destination": "/$1.html"
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Deployment Steps
1. Connect your Git repository to Vercel
2. Configure build settings (if needed)
3. Deploy automatically on push to main branch

## Performance Optimizations

- Image optimization using WebP format for better compression
- CSS minification with compressed stylesheets for production
- Optimized Google Fonts loading
- Lazy loading for images
- Browser caching for static assets

## Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
1. Colors: Modify CSS custom properties in `css/styles.css`
2. Content: Update HTML files for text changes
3. Images: Replace files in `assets/` directory
4. Forms: Update Google Forms URLs in JavaScript

## Content Management

### Adding New Pages
1. Create new HTML file in appropriate directory
2. Follow existing template structure
3. Update navigation links in all pages
4. Add corresponding styles if needed

### Updating Team Data
1. Export team data to CSV format
2. Replace `assets/data/teams.csv`
3. Ensure proper column structure

### Modifying Countdown
Update the target date in `js/countdown.js`:
```javascript
const targetDate = new Date('2025-XX-XX').getTime();
```

## Competition Information

### Round 1: Qualifications (Online, Individual)
- Format: Multiple-choice, short-answer, basic coding
- Focus: Fundamental concepts across all domains
- Duration: 1.5 hours
- Advancement: Top 10-30% qualify for Round 2

### Training Period (Optional, Team-Based)
- Format: Daily sessions covering all fields
- Duration: 10 days, 1 session per day
- Focus: Computational thinking and scientific modeling
- Structure: 2 sessions per competition field

### Round 2: National (Online, Team-Based)
- Format: Advanced problem-solving with implementations
- Focus: Computational science applications
- Duration: 2.5-3 hours
- Advancement: Top 8-16 teams qualify for Finals

### Round 3: Finals (Onsite, Hackathon-Style, Team-Based)
- Format: Open-ended computational challenges
- Duration: 5-6 hours
- Judging: Innovation, Scientific Accuracy, Algorithm Efficiency, Presentation

## Contributing

### Reporting Issues
1. Check existing issues first
2. Provide detailed description
3. Include browser and device information
4. Add screenshots if applicable

### Development Guidelines
- Follow existing code style
- Test on multiple browsers
- Ensure mobile responsiveness
- Validate HTML and CSS

## Contact Information

- **Website**: [EOCS Platform](https://eocs-platform.vercel.app)
- **Facebook**: [egyptocs](https://www.facebook.com/egyptocs)
- **WhatsApp**: [EOCS Channel](https://whatsapp.com/channel/0029Vb5QNKSKAwEiegaoYF2B)
- **LinkedIn**: [eg-ocs](https://www.linkedin.com/company/eg-ocs/)
- **Instagram**: [eg_ocs](https://www.instagram.com/eg_ocs/)

## 📄 License

© 2025 Egyptian Olympiad in Computational Science. All rights reserved.

## Acknowledgments

- Competition organizers and volunteers
- Educational partners and sponsors
- Student participants and mentors
- Web development and design contributors

Built for the future of computational science in Egypt
