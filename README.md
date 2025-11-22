# ClientStories

A sophisticated, interactive client testimonial component featuring smooth transitions, professional branding, and elegant typography. Showcases real client stories with a clean split-layout design and seamless navigation.

## Live Demo

[View Live Demo](https://thisislefa.github.io/clientstories)

## Features

- **Interactive Testimonial Carousel**: Smooth fade transitions between client stories with synchronized content updates
- **Split-Layout Design**: Balanced two-column grid with profile cards and testimonial content
- **Professional Branding**: Custom SVG logos for each client with consistent visual identity
- **Elegant Typography**: Inter Tight font family with precise weight scaling and optimal readability
- **Responsive Design**: Adapts seamlessly from desktop to mobile with intelligent layout adjustments
- **Smooth Animations**: CSS transitions for content changes with fade effects
- **Navigation Controls**: Intuitive previous/next buttons with hover states
- **Accessibility**: Proper ARIA labels and semantic HTML structure

## Tech Stack

- **HTML5** - Semantic structure with clean, accessible markup
- **CSS3** - CSS Grid, Flexbox, and custom properties with smooth transitions
- **JavaScript** - ES6+ with interactive carousel functionality
- **Google Fonts** - Inter Tight font family
- **SVG Graphics** - Custom client logos and navigation icons

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thisislefa/clientstories.git
   cd clientstories
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```

## Project Structure

```
clientstories/
├── index.html          # Complete HTML with embedded CSS and JavaScript
└── README.md           # Project documentation
```

## Usage

### Basic Integration
The client stories component is entirely self-contained in a single HTML file. Simply include it in your project:

```html
<!-- Copy the entire cs-wrapper section -->
<section class="cs-wrapper">
    <!-- Component content -->
</section>
```

### Adding New Client Stories
Extend the carousel by adding new story objects to the JavaScript array:

```javascript
const stories = [
    {
        name: "Client Name",
        role: "Position, Company",
        image: "path/to/image.jpg",
        quote: "Client testimonial quote.",
        description: "Detailed description of the project and results.",
        logoHTML: `Your SVG logo code here`
    }
    // Add more stories here
];
```

## Customization

### Colors
- Text Primary: `#1a1a1a`
- Text Secondary: `#555555`, `#666666`
- Background: `#f1f1f1`
- Card Background: `#ffffff`
- Navigation Buttons: `#d6d6d6`

### Typography
- Main Title: 64px, 500 weight, -1.5px letter spacing
- Quote Text: 38px, 500 weight, -1px letter spacing
- Profile Name: 24px, 600 weight, -0.5px letter spacing
- Description: 17px, regular weight
- Subtitle: 18px, regular weight

### Layout
- Container Max Width: 1200px
- Grid Columns: 1fr 1.2fr (left/right ratio)
- Grid Gap: 80px (desktop), 40px (mobile)
- Card Aspect Ratio: 4/3 (profile images)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 901px and above (2-column layout)
- Mobile: 900px and below (1-column layout)

## Design Features

- **Smooth Transitions**: 300ms fade effects for all content changes
- **Balanced Grid**: Asymmetric columns for optimal content hierarchy
- **Image Optimization**: Object-fit cover for consistent image presentation
- **Navigation Design**: Circular buttons with hover and active states
- **Typography Hierarchy**: Clear visual scaling from headlines to body text
- **Color Consistency**: Monochromatic scheme with strategic grays

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT License](https://github.com/thisislefa/ClientStories/blob/main/LICENSE)

## Author

**Lefa Mofokeng**
- GitHub: [@thisislefa](https://github.com/thisislefa)
- Portfolio: [thisislefa.com](https://thisislefa.github.io/portfolio)


