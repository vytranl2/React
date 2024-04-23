import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import DoodleCard from './DoodleCard';
import './App.css';

// Shuffle function definition
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

function App() {
  const [doodles, setDoodles] = useState([]);

  useEffect(() => {
    const defaultDoodles = [
      { id: 1, title: 'Fire Noodle - by Julie', image: '/images/food1.jpeg' },
      { id: 2, title: 'Hi Dood by Jane', image: '/images/art1.jpg' },
      { id: 4, title: 'Dinner at Konbon by Cait', image: '/images/art2.jpg' },
      { id: 5, title: 'UDON Noodles', image: '/images/doodle1.jpg' },
      { id: 6, title: 'Elonara Perfume - New York', image: '/images/doodle2.jpg' },
      { id: 7, title: 'Fuled by Ramen', image: '/images/art3.jpeg' },
      { id: 8, title: 'Sketching Sketches', image: '/images/doodle3.jpeg' },
      { id: 9, title: 'Street in Korea - by Jun', image: '/images/art4.jpeg' }
    ];
    shuffleArray(defaultDoodles);  // Shuffle right after defining
    setDoodles(defaultDoodles);
  }, []);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Swap elements
  }
}

  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoodles = doodles.filter(doodle =>
    doodle.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setDoodles(prevDoodles => [
        ...prevDoodles,
        { id: prevDoodles.length + 1, title: file.name, image: reader.result }
      ]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Do-Odle</h1>
        <input
          type="text"
          placeholder="Search doodles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <nav>
          <a href="#!" className="menu-item">Home</a>
          <a href="#!" className="menu-item">About</a>
          <a href="#!" className="menu-item">Create</a>
          <label htmlFor="file" className="upload-button menu-item">Upload</label>
          <input type="file" onChange={handleUpload} accept="image/*" style={{ display: 'none' }} id="file" />
        </nav>
      </header>
      <div className="content"></div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {doodles.map(doodle => (
          <DoodleCard key={doodle.id} title={doodle.title} image={doodle.image} />
        ))}
      </Masonry>
    </div>
  );
}

export default App;
