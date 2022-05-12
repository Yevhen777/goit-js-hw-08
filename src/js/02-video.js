import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

console.log('object');

function data({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(data, 1000));

const pagePlayer = () => {
  const seconds = JSON.parse(localStorage.getItem('videoplayer-current-time'));

  if (!seconds) {
    return;
  }

  player.setCurrentTime(seconds);
};

document.addEventListener('DOMContentLoaded', pagePlayer);
