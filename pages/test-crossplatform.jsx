import HeroMockup from '../src/components/HeroMockup';

export default function TestCrossplatform() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>
      <HeroMockup
        layout="crossplatform"
        title="Cross Platform"
        subtitle="React Native"
        devices={[
          {
            screenshot: '/assets/images/raw/hornets01.png',
            device: 'iphone',
            frameColor: 'space-gray'
          },
          {
            screenshot: '/assets/images/raw/hornets02.png',
            device: 'android',
            frameColor: 'black'
          }
        ]}
      />
    </div>
  );
}
