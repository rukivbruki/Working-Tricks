import { useState } from 'react';

const Style = {
  base: [
    'font-family: Monospace',
    'font-size: 16px',
    'text-transform: capitalize',
    'color: #FFD700',
    'background-color: #0057B8 ',
    'padding: 2px 4px',
    'border-radius: 2px',
  ],
};

export default function () {
  const [intervalId, setIntervalId] = useState(null);
  const log = (text, extra = []) => {
    let style = Style.base.join(';') + ';';
    style += extra.join(';');
    console.log(`%c${text}`, style);
  };

  let LogMessageAnimation = function (clear = false) {
    let point = '.';
    setIntervalId(
      setInterval(() => {
        point.length <= 2 ? (point += '.') : (point = '.');
        console.clear();
        log(`data processing: ${point}`);
      }, 1000),
    );
  };

  return [LogMessageAnimation, intervalId, log];
}
