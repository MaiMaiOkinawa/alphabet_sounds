const sounds = [
  'sh', 'th', 'ch', 'ng', 'ay', 'ee', 'igh', 'ow', 'o_o', 'oo', 'ar', 'or',
  'air', 'ir', 'ou', 'oy', 'ea', 'oi', 'a-e', 'i-e', 'o-e', 'u-e', 'aw', 'are',
  'ur', 'ow', 'er', 'ai', 'oa', 'ew', 'ire', 'ear'
];

sounds.forEach(sound => {
  // Creates sound buttons
  const btn = document.createElement('button')
  btn.classList.add('btn')
  // Name each buttons of sounds as it loops
  btn.innerText = sound

  btn.addEventListener('click', () => {
    // Adding a fnc pauses songs
    stopSongs() 

    // This plays the song
    document.getElementById(sound).play()
  })
  
  document.getElementById('buttons').appendChild(btn)
})

// A fnc pauses songs when other buttons were clicked
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}