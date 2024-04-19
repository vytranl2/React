import React, { useState } from 'react';
import DoodleCard from './DoodleCard';
import './App.css';

function App() {
  const [doodles, setDoodles] = useState([]);

  const handleUpload = (event) => {
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

  return (
    <div className="app">
      <input type="file" onChange={handleUpload} accept="image/*" />
      <div className="board">
        {doodles.map(doodle => (
          <DoodleCard key={doodle.id} title={doodle.title} image={doodle.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
