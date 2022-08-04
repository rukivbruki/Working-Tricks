'use strict';

const video = document.getElementById('video');
const canvas = document.createElement('canvas');
const button = document.createElement('button');

const getBlobFromCanvas = () => {
  canvas.toBlob(function (blob) {
    let link = document.createElement('a');
    link.download = 'new_video_fragment.png';

    link.href = URL.createObjectURL(blob);
    link.click();

    URL.revokeObjectURL(link.href);
  }, 'image/png');
};

class HandleEvent {
  createSaveButton = domElementCreator.createSaveButton;
  createCanvas = domElementCreator.createCanvas;
  removeElement = domElementCreator.removeElement;
  insertElement = domElementCreator.insertElement;

  handleEvent(event) {
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }

  onPause() {
    this.createCanvas();
    this.createSaveButton();

    canvas
      .getContext('2d')
      .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    this.insertElement(video, canvas, 'after');
    this.insertElement(canvas, button, 'after');
  }

  onPlay() {
    this.removeElement(canvas);
    this.removeElement(button);
    button.removeEventListener('click', getBlobFromCanvas);
  }

  onClick() {
    getBlobFromCanvas();
    this.removeElement(canvas);
    this.removeElement(button);
    button.removeEventListener('click', getBlobFromCanvas);
  }
}

const domElementCreator = {
  createCanvas() {
    canvas.id = 'canvas';
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
  },
  createSaveButton() {
    button.innerText = 'Сохранить фрагмент';
  },
  insertElement(target, element, method) {
    target[method](element);
  },
  removeElement(element) {
    element.remove();
  },
};

const handleEvent = new HandleEvent();

video.addEventListener('pause', handleEvent);
video.addEventListener('play', handleEvent);
button.addEventListener('click', handleEvent);
