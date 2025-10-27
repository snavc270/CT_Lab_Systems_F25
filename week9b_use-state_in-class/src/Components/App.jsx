import { useState } from "react";
import ImageCard from "/src/Components/ImageCard/ImageCard";
import imageData from "../data/images.json";
import "./App.css"; 

function App(){
	// const [images, setImages] = useState([
  //   { id: 1, url: "/src/images/photo1.jpeg", title: "Yesterday" },
  //   { id: 2, url: "/src/images/photo2.jpeg", title: "Today" },
  //   { id: 3, url: "/src/images/photo3.jpeg", title: "Tomorrow" },
  // ]);
  const [images, setImages] = useState(imageData);
  
  return (
    <div className="gallery">
      {images.map((img, i) => (
        <ImageCard
          key={img.id}
          image={img}
        />
      ))}
    </div>
  );
}

export default App; 