import { PureComponent } from 'react';
import { TimingFunction, WaveItem } from '../interfaces';

import './Wave.css';

type WaveProps = {
  className?: string | undefined;
  H: number;
  waveParams: WaveItem[];
  animated: boolean;
  speed?: number;
  speedIncreasePerWave?: number;
  easing?: TimingFunction;
};

type WaveState = {
  H: number;
  waveParams: WaveItem[];
};

class Wave extends PureComponent<WaveProps, WaveState> {
  private _animated: boolean;

  constructor(props: WaveProps) {
    super(props);

    const { H, waveParams, animated } = this.props;

    this.state = { H, waveParams };
    this._animated = animated || false;
  }

  componentDidMount() {
    this._animated && this.startAnim();
  }

  render() {
    const { className } = this.props;
    const { H, waveParams } = this.state;

    const waves = [];

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
            d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${
              (3 * T) / 2
            } 0 T ${2 * T} 0 T ${(5 * T) / 2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </svg>
      );

      waves.push(wave);
    }

    return <div className={`wave__group ${className}`}>{waves}</div>;
  }

  startAnim() {
    this.stopAnim();

    const waves = this.state.waveParams;

    const {
      speed = 5000,
      speedIncreasePerWave = 1000,
      easing = TimingFunction.LINEAR
    } = this.props;

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

    this._animated = true;
  }

  stopAnim() {
    const waves = this.state.waveParams;

    for (let i = 0; i < waves.length; i++) {
      const item = document.querySelector<SVGElement>(`.wave__item-${i + 1}`);

      if (item) {
        item.style.animation = '';
      }
    }

    this._animated = false;
  }

  setWaterHeight(H: number) {
    this.setState({ H });
  }

  setWaveParams(waveParams: WaveItem[]) {
    if (!waveParams) return;

    let animated = this._animated;
    if (animated) {
      this.stopAnim();
    }

    this.setState({ waveParams }, () => {
      if (animated) {
        this.startAnim();
      }
    });
  }
}

export default Wave;
