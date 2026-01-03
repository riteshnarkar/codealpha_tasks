# 🖼️ Modern Image Gallery

A fully responsive, interactive image gallery built with HTML, CSS, and vanilla JavaScript. Features category filtering, lightbox modal view, smooth animations, and keyboard navigation.

![Gallery Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- **📱 Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Category Filtering** - Filter images by Nature, City, or Animals with smooth animations
- **🔍 Lightbox Modal** - Click any image to view it in full-screen mode
- **⌨️ Keyboard Navigation** - Use arrow keys to browse and ESC to close
- **🎭 Hover Effects** - Interactive image scaling and overlay effects
- **🎬 Smooth Animations** - CSS animations for better user experience
- **♿ Accessible** - Semantic HTML and keyboard-friendly navigation

## 🚀 Demo

You can view a live demo by opening `index.html` in your browser.

## 📂 Project Structure

```
image-gallery/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/image-gallery.git
   ```

2. **Navigate to project directory**
   ```bash
   cd image-gallery
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server
   ```

### Using Live Server (Recommended)

If you have VS Code installed:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 💻 Usage

### Basic Navigation

- **Filter Images**: Click on category buttons (All, Nature, City, Animals)
- **View Full Image**: Click on any image to open lightbox
- **Navigate**: Use Previous/Next buttons or arrow keys
- **Close Lightbox**: Click the X button, click outside the image, or press ESC

### Customizing Images

Edit the `images` array in `script.js`:

```javascript
const images = [
    {
        src: 'your-image-url.jpg',
        title: 'Image Title',
        category: 'nature', // or 'city', 'animals'
        description: 'Image description'
    },
    // Add more images...
];
```

### Adding New Categories

1. Add a filter button in `index.html`:
```html
<button class="filter-btn" data-filter="newcategory">New Category</button>
```

2. Add images with the new category in `script.js`:
```javascript
{
    src: 'image.jpg',
    category: 'newcategory',
    // ...
}
```

### Customizing Colors

Edit the gradient colors in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change these hex values to your preferred colors */
}
```

## 🎨 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling with Grid, Flexbox, and animations
- **JavaScript (ES6)** - Interactive functionality
- **Unsplash API** - High-quality placeholder images

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (3 columns)
- **Tablet**: 481px - 768px (2 columns)
- **Mobile**: ≤ 480px (1 column)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous image (in lightbox) |
| `→` | Next image (in lightbox) |
| `ESC` | Close lightbox |

## 🎯 Key Features Explained

### Grid Layout
Uses CSS Grid with `auto-fit` and `minmax()` for responsive columns that automatically adjust based on screen size.

### Lightbox Modal
Full-screen overlay that displays images with navigation controls. Prevents body scrolling when active.

### Filter System
JavaScript-powered filtering that shows/hides images based on data attributes with smooth CSS animations.

### Hover Effects
- Images scale up 15% on hover
- Overlay slides up with gradient background
- Gallery items lift with enhanced shadow

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Structure

### HTML (`index.html`)
- Semantic structure with header, filter buttons, gallery grid, and lightbox modal
- External CSS and JS linking
- Minimal inline markup (generated dynamically via JS)

### CSS (`style.css`)
- BEM-style naming convention
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Custom animations and transitions
- Organized with clear section comments

### JavaScript (`script.js`)
- Modular function structure
- Event-driven architecture
- Clear comments and documentation
- ES6+ features (arrow functions, template literals, destructuring)

## 🎓 Learning Outcomes

This project demonstrates:
- Modern CSS techniques (Grid, Flexbox, animations)
- JavaScript DOM manipulation
- Event handling and listeners
- Responsive web design principles
- Clean code organization
- Git version control

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Author

**Your Name**
- GitHub: [@riteshnarkar](https://github.com/riteshnarkar)
- LinkedIn: [Ritesh Narkar](https://linkedin.com/in/riteshnarkar)

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Inspiration from modern gallery designs
- Built as a learning project for web development

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- Email: narkarritesh@gmail.com

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!

**Made with ❤️ and JavaScript**