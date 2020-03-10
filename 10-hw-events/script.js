const boardKeys = ['q', 'w', 'e', 'r'];

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    playSound(key);
  });
});


document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const keyIndex = boardKeys.indexOf(key);
  if (keyIndex > -1) playSound(keys[keyIndex]);
});


function playSound(key) {
  const sound = document.getElementById(key.dataset.note);
  sound.play();
  sound.currentTime = 0;

  document.addEventListener('play', e => {
      if (sound && sound != e.target) {
        sound.pause();
      }
      audio = e.target;
    },
    true
  );

  key.classList.add('pressed');
  key.addEventListener('mouseout', () => {
    key.classList.remove('pressed');
  });
}
