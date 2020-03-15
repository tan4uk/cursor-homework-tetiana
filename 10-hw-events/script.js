const boardKeys = ['q', 'w', 'e', 'r'];

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    playSound(key);
    key.classList.add('pressed');
  });
});

keys.forEach(key => {
  key.addEventListener('mouseout', () => {
    key.classList.remove('pressed');
  });
});

document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const keyIndex = boardKeys.indexOf(key);
  if (keyIndex > -1) playSound(keys[keyIndex]);
  keys[keyIndex].classList.add('pressed');
});

document.addEventListener('keyup', e => {
  const key = e.key;
  const keyIndex = boardKeys.indexOf(key);
  keys[keyIndex].classList.remove('pressed');
});


let sound = null;

function playSound(key) {
  const sound = document.getElementById(key.dataset.note);
  sound.play();
  sound.currentTime = 0;
}

document.addEventListener('play', e => {
    if (sound && sound != e.target) {
      sound.pause();
    }
    sound = e.target;
  },
  true
);
