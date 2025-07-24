import ImageSlider from './ImageSlider';

const App = () => {
  const slides = [
    { url: 'http://localhost:3000/picture_1.jpg', title: 'Beach1' },
    { url: 'http://localhost:3000/picture_2.jpg', title: 'Beach2' },
    { url: 'http://localhost:3000/picture_3.jpg', title: 'Beach3' },
    { url: 'http://localhost:3000/picture_4.jpg', title: 'Beach4' },
    { url: 'http://localhost:3000/picture_5.jpg', title: 'Beach5' },
    { url: 'http://localhost:3000/picture_6.jpg', title: 'Beach6' },
  ];

  const containerStyles = {
    width: '800px',
    height: '500px',
    margin: '0 auto',
  };

  return (
    <div className="slider">
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} /> {/* Исправлено на slides */}
      </div>
    </div>
  );
};

export default App;