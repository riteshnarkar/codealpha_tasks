# 🎵 Music Player Web Application

A modern, responsive music player built with vanilla HTML, CSS, and JavaScript. Features a beautiful UI with full playback controls, playlist support, and real-time progress tracking.


## ✨ Features

### Core Functionality
- ▶️ **Play/Pause Control** - Smooth audio playback with toggle functionality
- ⏭️ **Next/Previous Track** - Navigate through your playlist seamlessly
- 🎚️ **Progress Bar** - Real-time progress indicator with seek functionality
- 🔊 **Volume Control** - Adjustable volume slider with visual feedback
- ⏱️ **Time Display** - Current time and total duration for each track

### Advanced Features
- 📋 **Playlist Support** - Array-based playlist with multiple songs
- 🔄 **Auto-play Next** - Automatically plays the next song when current ends
- 🎯 **Active Track Highlight** - Visual indicator for currently playing song
- 🎨 **Rotating Album Art** - Animated album cover during playback
- ⌨️ **Keyboard Shortcuts** - Control playback with keyboard
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎵 **Click-to-Play Playlist** - Click any song in playlist to play

### Keyboard Shortcuts
- `Space` - Play/Pause
- `→` Arrow Right - Next track
- `←` Arrow Left - Previous track
- `↑` Arrow Up - Increase volume
- `↓` Arrow Down - Decrease volume

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and audio element
- **CSS3** - Modern styling with flexbox, grid, animations, and gradients
- **Vanilla JavaScript** - No external libraries or frameworks
- **Web Audio API** - Native browser audio playback

## 📁 Folder Structure

```
/music-player
│
├── index.html              # Main HTML file
├── style.css               # Stylesheet with responsive design
├── script.js               # JavaScript logic for player functionality
├── README.md               # Project documentation
│
└── assets/
    ├── music/              # Audio files folder
    │   ├── song1.mp3       # Sample audio file 1
    │   ├── song2.mp3       # Sample audio file 2
    │   ├── song3.mp3       # Sample audio file 3
    │   ├── song4.mp3       # Sample audio file 4
    │   └── song5.mp3       # Sample audio file 5
    │
    └── images/             # Images folder
        ├── cover1.jpg      # Album cover 1
        ├── cover2.jpg      # Album cover 2
        ├── cover3.jpg      # Album cover 3
        ├── cover4.jpg      # Album cover 4
        ├── cover5.jpg      # Album cover 5
        ├── default-cover.jpg # Default album cover
        └── screenshot.png  # Screenshot for README
```

## 🚀 How to Run Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Option 1: Direct File Opening
1. **Download/Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/music-player.git
   cd music-player
   ```

2. **Add your audio files:**
   - Place your `.mp3` audio files in the `assets/music/` folder
   - Add album cover images (`.jpg` or `.png`) to the `assets/images/` folder

3. **Update the playlist:**
   - Open `script.js`
   - Update the `playlist` array with your audio file paths:
   ```javascript
   const playlist = [
       {
           title: "Your Song Title",
           artist: "Artist Name",
           src: "assets/music/your-song.mp3",
           cover: "assets/images/your-cover.jpg",
           duration: "3:45"
       },
       // Add more songs...
   ];
   ```

4. **Open the application:**
   - Double-click `index.html` or right-click and select "Open with Browser"

### Option 2: Using Live Server (Recommended)

**Using VS Code Live Server Extension:**
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then navigate to `http://localhost:8000`

**Using Node.js:**
```bash
npx serve
```

## 📝 Usage Instructions

### Playing Music
1. Click on any song in the playlist to start playback
2. Use the play/pause button in the center to control playback
3. Navigate between songs using the previous/next buttons

### Adjusting Playback
- **Seek**: Click anywhere on the progress bar or drag the slider
- **Volume**: Adjust the volume slider at the bottom
- **Time**: View current time and total duration below the album art

### Adding Your Own Music
1. Place your audio files in `assets/music/`
2. Add corresponding album covers in `assets/images/`
3. Update the `playlist` array in `script.js`:

```javascript
{
    title: "Song Name",
    artist: "Artist Name",
    src: "assets/music/filename.mp3",
    cover: "assets/images/cover.jpg",
    duration: "3:45" // Optional, for display only
}
```

## 🎨 Customization

### Color Scheme
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main accent color */
    --primary-hover: #4f46e5;      /* Hover state */
    --bg-color: #0f172a;           /* Background */
    --card-bg: #1e293b;            /* Card background */
    --text-primary: #f1f5f9;       /* Primary text */
    --text-secondary: #94a3b8;     /* Secondary text */
}
```

### Playlist Capacity
The player supports unlimited songs. Simply add more objects to the `playlist` array in `script.js`.

## 🐛 Known Issues

- Some browsers may require user interaction before auto-playing audio
- Progress bar may occasionally lag on older devices
- Safari may have different audio format support (use MP3 for best compatibility)

## 🔧 Troubleshooting

**Audio not playing?**
- Check that audio files exist in the correct path
- Ensure audio files are in a supported format (MP3 recommended)
- Check browser console for errors

**Album covers not showing?**
- Verify image file paths are correct
- Ensure images are in supported formats (JPG, PNG)
- Check that file names match the playlist configuration

**Progress bar not working?**
- Make sure audio files are fully loaded
- Check that duration metadata is available in audio files

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons designed using SVG
- Gradient backgrounds inspired by modern UI trends
- Audio playback using HTML5 Web Audio API

## 📧 Contact

Your Name - narkarritesh@gmail.com


---

**Made with ❤️ and vanilla JavaScript**