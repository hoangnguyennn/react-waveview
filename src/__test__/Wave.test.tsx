import { render } from '@testing-library/react';
import Wave, { WaveItem } from '../';

describe('Wave', () => {
  test('renders successful', async () => {
    const waveItems: WaveItem[] = [
      { A: 10, T: 180, fill: '#62c2ff' },
      { A: 15, T: 140, fill: '#0087dc' },
      { A: 20, T: 100, fill: '#1aa7ff' }
    ];

    render(<Wave H={30} waveParams={waveItems} animated={true}></Wave>);
    expect(true).toBe(true);
  });
});
