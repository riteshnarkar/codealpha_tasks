# Basic Calculator Web Application

A modern, responsive calculator built with vanilla HTML, CSS, and JavaScript. Features a sleek design with full keyboard support and smooth animations.

## 📋 Features

- ✅ **Basic Arithmetic Operations**
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
  
- ✅ **Additional Functionality**
  - Percentage calculation (%)
  - Clear button (C)
  - Delete/Backspace button (DEL)
  - Decimal point support
  - Real-time result display
  
- ✅ **User Experience**
  - Clean and modern UI design
  - Smooth button animations and hover effects
  - Previous operation display
  - Number formatting with commas
  - Error handling (division by zero)
  
- ✅ **Keyboard Support**
  - Full keyboard navigation
  - All operations accessible via keyboard
  
- ✅ **Responsive Design**
  - Works on desktop, tablet, and mobile devices
  - Touch-friendly interface

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - Calculator logic and functionality
- **No frameworks or libraries** - Pure vanilla JavaScript

## 📁 Folder Structure

```
/calculator
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Calculator logic and functionality
└── README.md       # Project documentation
```

## 🚀 How to Run the Project Locally

1. **Clone or Download** the repository:
   ```bash
   git clone <your-repository-url>
   cd calculator
   ```

2. **Open the project**:
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Start calculating!** 🎉

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Percentage |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear all |
| `Backspace` | Delete last digit |

## 💡 Usage Tips

- Click buttons or use keyboard for input
- Chain multiple operations together
- Use percentage for quick calculations
- Press DEL to remove last digit
- Press C to start fresh

## 🎨 Design Features

- **Modern gradient background** with purple-pink theme
- **Dark mode calculator** for reduced eye strain
- **Smooth animations** on button clicks and hovers
- **Glassmorphism effect** on keyboard info panel
- **Color-coded buttons**:
  - Gray: Numbers
  - Orange: Operators
  - Red: Clear
  - Green: Equals

## 📱 Responsive Breakpoints

- **Desktop**: Full size (max-width: 380px)
- **Mobile**: Optimized for screens < 480px
- **Small Mobile**: Further optimized for screens < 360px

## 🔧 Code Highlights

- **Object-Oriented Design**: Calculator implemented as a class
- **Clean Code**: Well-commented and organized
- **Error Handling**: Prevents division by zero
- **Floating Point Fix**: Rounds results to avoid JavaScript floating point errors
- **Accessibility**: Keyboard navigation support

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 👨‍💻 Author

Created as a learning project to demonstrate vanilla JavaScript skills.

---

**Enjoy calculating!** If you found this helpful, please give it a ⭐!