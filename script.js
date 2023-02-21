function playSong(song, title, artist) {
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    audioPlayer.src = song;
    audioPlayer.play();
    songTitle.textContent = title;
    songArtist.textContent = artist;
}

const songList = document.querySelectorAll('#song-list li a');

songList.forEach((song) => {
    song.addEventListener('click', function(e) {
        e.preventDefault();
        const songSrc = song.dataset.src;
        const songTitle = song.dataset.title;
        const songArtist = song.dataset.artist;
        playSong(songSrc, songTitle, songArtist);
    });
});
