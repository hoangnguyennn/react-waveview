import { CSSProperties, FC, useEffect, useState } from 'react';
import { TimingFunction, WaveItem } from '../interfaces';

import './Wave.css';

type WaveProps = {
  className?: string;
  style?: CSSProperties;
  H: number;
  waveParams: WaveItem[];
  animated?: boolean;
  speed?: number;
  speedIncreasePerWave?: number;
  easing?: TimingFunction;
};

const Wave: FC<WaveProps> = ({
  className = '',
  style,
  H,
  waveParams,
  animated = false,
  speed = 5000,
  speedIncreasePerWave = 1000,
  easing = TimingFunction.LINEAR
}) => {
  const waves: JSX.Element[] = [];

  for (let i = 0; i < waveParams.length; i++) {
    let { A, T, fill } = waveParams[i];
    let wave = (
      <svg
        key={i}
        style={{ width: 3 * T, height: A + H }}
        className={`wave__item wave__item-${i + 1}`}
        preserveAspectRatio="xMinYMin meet"
        viewBox={`0 0 ${3 * T} ${A + H}`}
      >
        <path
          d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${(3 * T) / 2} 0 T ${
            2 * T
          } 0 T ${(5 * T) / 2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
          fill={fill}
          transform={`translate(0, ${A})`}
        />
      </svg>
    );

    waves.push(wave);
  }

  const stopAnim = () => {
    for (let i = 0; i < waves.length; i++) {
      const item = document.querySelector<SVGElement>(`.wave__item-${i + 1}`);

      if (item) {
        item.style.animation = '';
      }
    }
  };

  const startAnim = () => {
    stopAnim();

    for (let i = 0; i < waves.length; i++) {
      const item = document.querySelector<SVGElement>(`.wave__item-${i + 1}`);

      if (item) {
        const name = 'wave__animate';
        const duration = `${speed + i * speedIncreasePerWave}ms`;
        const timingFunction = easing;
        const iterationCount = 'infinite';

        const animation = `${name} ${duration} ${timingFunction} ${iterationCount}`;

        item.style.animation = animation;
      }
    }
  };

  useEffect(() => {
    if (animated) {
      startAnim();
    } else {
      stopAnim();
    }
  }, [animated, stopAnim, startAnim]);

  return (
    <div style={style} className={`wave__group ${className}`}>
      {waves}
    </div>
  );
};

export default Wave;
