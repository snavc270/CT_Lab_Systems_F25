import { useState } from "react";
import "/src/components/App.css";
import ImageCard from "./ImageCard/ImageCard"; 
import imageData from "../data/images.json";

function App(){
	const [images] = useState(imageData);
  const [selectedId, setSelectedId] = useState(null);

  const showImage = (id) => {
    setSelectedId(selectedId === id ? null : id); // Toggle selected state
  }

  return (
    <>
    <div className="gallery">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          isSelected={selectedId === img.id}
          onClick={() => showImage(img.id)}
        />
      ))}
    </div>
 
    </>
  );
}

export default App; 
