import Wave, { WaveItem } from '../lib';

const waveItems: WaveItem[] = [
  { A: 10, T: 180, fill: '#62c2ff' },
  { A: 15, T: 140, fill: '#0087dc' },
  { A: 20, T: 100, fill: '#1aa7ff' }
];

const Demo = () => {
  let waveRef: Wave | null = null;

  const stopAnimate = () => {
    waveRef && waveRef.stopAnim();
  };

  const startAnimate = () => {
    waveRef && waveRef.startAnim();
  };

  const changeWaveHeight = () => {
    waveRef && waveRef.setWaterHeight(70);
  };

  const changeWaves = () => {
    waveRef &&
      waveRef.setWaveParams([
        { A: 10, T: 180, fill: '#FF9F2E' },
        { A: 15, T: 140, fill: '#F08200' },
        { A: 20, T: 100, fill: '#B36100' }
      ]);
  };

  return (
    <div>
      <button onClick={stopAnimate}>Stop Animate</button>
      <button onClick={startAnimate}>Start Animate</button>
      <button onClick={changeWaveHeight}>Change Wave Height</button>
      <button onClick={changeWaves}>Change Waves</button>

      <Wave
        ref={(ref) => (waveRef = ref)}
        H={30}
        waveParams={waveItems}
        animated={true}
      />
    </div>
  );
};

export default Demo;
