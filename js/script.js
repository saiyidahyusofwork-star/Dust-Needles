// 1. Fungsi Menu Telefon (Mobile)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) nav.classList.toggle('show');
}

// 2. Fungsi Animasi Piring Hitam (Vinyl) & Pemain Spotify
function playSpotify(playlistId, title, labelColor) {
  const vinyls = document.querySelectorAll('#vinyl-record, .vinyl-grooves, .vinyl');
  const vinylLabel = document.getElementById('vinyl-label');
  const statusText = document.getElementById('status-text');
  const spotifyIframe = document.getElementById('spotify-player');

  // Pastikan kod ini hanya jalan jika elemen vinyl & iframe wujud
  if (vinyls.length === 0 || !spotifyIframe) {
    return;
  }

  // Berhentikan pusingan seketika untuk reset animasi
  vinyl.classList.remove('spin');

  // Menukar link embed Spotify secara dinamik mengikut playlistId yang diklik
  spotifyIframe.src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`;

  // Menukar teks tajuk lagu di atas piring hitam
  if (statusText) {
    statusText.innerText = `Playing: ${title}`;
  }

 // Menukar gambar bahagian tengah piring hitam (vinyl label)
  if (vinylLabel && labelColor) {
    // Kalau fail imej anda dalam folder assets, contoh: assets/lofi.jpg
    // Anda boleh hantar nama fail gambar terus ke dalam fungsi playSpotify
    vinylLabel.style.backgroundImage = `url('${labelColor}')`;
    vinylLabel.style.backgroundSize = 'cover';
    vinylLabel.style.backgroundPosition = 'center';
  }
    
 // Menghidupkan semula animasi pusingan untuk kesemua piring hitam
  vinyls.forEach(v => {
    v.classList.remove('spin');
    void v.offsetWidth; // Trik untuk paksa browser faham reset animasi
    v.classList.add('spin');
  });
}
