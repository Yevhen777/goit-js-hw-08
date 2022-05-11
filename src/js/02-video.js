import player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
iframe.addEventListener('click', throttle(pagePlayer, 1000));

function playerMEdia(e) {
  console.log(object);
}

player.on('timeupdate ', function (data) {
  console.log({
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  });

  // data is an object containing properties specific to that event
});
localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));

const pagePlayer = () => {
  const seconds = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime('seconds');
};
