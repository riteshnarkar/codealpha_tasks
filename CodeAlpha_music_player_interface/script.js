// ==================== MUSIC PLAYER APPLICATION ====================

// Sample playlist data (Replace with your actual audio files)
const playlist = [
    {
        title: "Beat It",
        artist: "Michael Jackson",
        src: "assets/music/Beat It - Michael Jackson.mp3",
        cover: "assets/images/Beat It.jpg",
        duration: "4:48"
    },
    {
        title: "Big Dawgs",
        artist: "HanumanKind",
        src: "assets/music/Big Dawgs - HanumanKind.mp3",
        cover: "assets/images/Big Dawg.jpg",
        duration: "3:12"
    },
    {
        title: "Haseen",
        artist: "Talwiinder",
        src: "assets/music/Haseen - Talwiinder.mp3",
        cover: "assets/images/Haseen.jpg",
        duration: "2:54"
    },
    {
        title: "Pal Pal",
        artist: "Afusic",
        src: "assets/music/Pal Pal - Afusic.mp3",
        cover: "assets/images/Pal Pal.jpg",
        duration: "2:27"
    },
    {
        title: "Rasputin",
        artist: "Boney M",
        src: "assets/music/Rasputin - Boney M.mp3",
        cover: "assets/images/Rasputin.jpg",
        duration: "3:40"
    }
];

// ==================== DOM ELEMENTS ====================
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressSlider = document.getElementById('progressSlider');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const albumCover = document.getElementById('albumCover');
const playlistContainer = document.getElementById('playlistContainer');

// ==================== STATE VARIABLES ====================
let currentSongIndex = 0;
let isPlaying = false;

// ==================== INITIALIZATION ====================
// Initialize the music player when the page loads
function init() {
    loadSong(currentSongIndex);
    generatePlaylist();
    setVolume();
    
    // Set initial volume
    audioPlayer.volume = volumeSlider.value / 100;
}

// ==================== LOAD SONG ====================
// Load a song's details and audio source
function loadSong(index) {
    const song = playlist[index];
    
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumCover.src = song.cover;
    audioPlayer.src = song.src;
    
    // Update active playlist item
    updateActivePlaylistItem(index);
}

// ==================== PLAY/PAUSE FUNCTIONALITY ====================
function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    document.querySelector('.album-art').classList.add('playing');
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    document.querySelector('.album-art').classList.remove('playing');
}

// ==================== PREVIOUS/NEXT SONG ====================
function prevSong() {
    currentSongIndex--;
    
    // Loop back to last song if at the beginning
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    
    loadSong(currentSongIndex);
    
    // Auto-play if music was already playing
    if (isPlaying) {
        playSong();
    }
}

function nextSong() {
    currentSongIndex++;
    
    // Loop back to first song if at the end
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
    }
    
    loadSong(currentSongIndex);
    
    // Auto-play if music was already playing
    if (isPlaying) {
        playSong();
    }
}

// ==================== TIME FORMATTING ====================
// Convert seconds to MM:SS format
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// ==================== PROGRESS BAR ====================
// Update progress bar as song plays
function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    progressSlider.value = progressPercent;
    
    // Update time displays
    currentTimeEl.textContent = formatTime(currentTime);
    
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
}

// Seek to a specific time when user clicks/drags progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Handle slider input
function handleProgressSlider() {
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (progressSlider.value / 100) * duration;
}

// ==================== VOLUME CONTROL ====================
function setVolume() {
    const volume = volumeSlider.value;
    audioPlayer.volume = volume / 100;
    volumeValue.textContent = `${volume}%`;
    
    // Update volume icon based on level
    updateVolumeIcon(volume);
}

function updateVolumeIcon(volume) {
    const volumeIcon = document.querySelector('.volume-icon');
    
    if (volume == 0) {
        volumeIcon.innerHTML = `
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>
        `;
    } else if (volume < 50) {
        volumeIcon.innerHTML = `
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2"/>
            <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
    } else {
        volumeIcon.innerHTML = `
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2"/>
            <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M18.07 5.93C20.9447 8.80528 20.9447 13.4748 18.07 16.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
    }
}

// ==================== PLAYLIST GENERATION ====================
function generatePlaylist() {
    playlistContainer.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const playlistItem = document.createElement('li');
        playlistItem.classList.add('playlist-item');
        
        if (index === currentSongIndex) {
            playlistItem.classList.add('active');
        }
        
        playlistItem.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-details">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <div class="song-duration">${song.duration}</div>
        `;
        
        // Add click event to play song from playlist
        playlistItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        
        playlistContainer.appendChild(playlistItem);
    });
}

// Update active state in playlist
function updateActivePlaylistItem(index) {
    const items = document.querySelectorAll('.playlist-item');
    
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ==================== EVENT LISTENERS ====================

// Play/Pause button
playPauseBtn.addEventListener('click', togglePlayPause);

// Previous/Next buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Progress bar click and slider
document.querySelector('.progress-bar').addEventListener('click', setProgress);
progressSlider.addEventListener('input', handleProgressSlider);

// Volume control
volumeSlider.addEventListener('input', setVolume);

// Audio player events
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Auto-play next song when current song ends
audioPlayer.addEventListener('ended', nextSong);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowRight':
            nextSong();
            break;
        case 'ArrowLeft':
            prevSong();
            break;
        case 'ArrowUp':
            e.preventDefault();
            volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 10);
            setVolume();
            break;
        case 'ArrowDown':
            e.preventDefault();
            volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 10);
            setVolume();
            break;
    }
});

// ==================== START APPLICATION ====================
// Initialize the player when DOM is loaded
document.addEventListener('DOMContentLoaded', init);