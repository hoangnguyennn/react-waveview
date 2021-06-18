## WaveView

Wave view component in React

## Screenshot

![wave.png](https://raw.githubusercontent.com/hoangnguyennn/react-waveview/master/screenshot/wave.png)

## Install

```bash
npm i react-waveview --save
```

## Get started

### Example

```tsx
import Wave from 'react-waveview';

const waveItems: WaveItem[] = [
  { A: 10, T: 180, fill: '#62c2ff' },
  { A: 15, T: 140, fill: '#0087dc' },
  { A: 20, T: 100, fill: '#1aa7ff' }
];

const MyComponent = () => (
  <Wave H={30} waveParams={waveItems} animated={true}></Wave>
);
```

### Props

```
/**
  ---------+------------------------+
  <-- P -->|<--    T    -->|        |______
           |   /\          |   /\   |  ^
           |  /  \         |  /  \  |  A
           | /    \        | /    \ |  |
           |/      \       |/      \|__V___
           |        \      /        |  ^
           |         \    /         |  |
           |          \  /          |  |
           |           \/           |  H
           |                        |  |
           |        fill            |  |
  ---------+------------------------+__V___
*/

```

| name                 | type                              | description                               | default               | required |
| -------------------- | --------------------------------- | ----------------------------------------- | --------------------- | -------- |
| H                    | number                            | Baseline height                           | -                     | true     |
| waveParams           | [WaveItem[]](#WaveItem)           | List of waves                             | -                     | true     |
| animated             | boolean                           | If `true`, animation when mounted         | false                 | false    |
| easing               | [TimingFunction](#TimingFunction) | Specifies the speed curve of an animation | TimingFunction.LINEAR | false    |
| speed                | number                            | Base duration in ms of one wave cycle     | 5000                  | false    |
| speedIncreasePerWave | number                            | Increase in speed in ms per each wave     | 1000                  | false    |
| className            | string                            | `className` for wave container            | -                     | false    |
| style                | `CSSProperties`                   | `style` for wave container                | -                     | false    |

### Interfaces and Enums

#### WaveItem

| name | type   | description                       |
| ---- | ------ | --------------------------------- |
| A    | number | distance protruding from baseline |
| T    | number | distance of a wavelength          |
| fill | any    | background color of wave          |

#### TimingFunction

An enum containing all of speed curve of an animation

```ts
{
  EASE = 'ease',
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
  EASE_IN_OUT = 'ease-in-out',
  LINEAR = 'linear',
  STEP_START = 'step-start',
  STEP_END = 'step-end',
}
```
