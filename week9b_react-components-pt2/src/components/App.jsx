import { useState } from "react";
import "/src/components/App.css";
import ImageCard from "./ImageCard/ImageCard"; 
import imageData from "../data/images.json";

function App(){
	const [images, setImages] = useState(imageData);
  
  // const [images, setImages] = useState([
  //   { id: 1, url: "/src/images/photo1.jpg", title: "Yesterday" },
  //   { id: 2, url: "/src/images/photo2.jpg", title: "Today" },
  //   { id: 3, url: "/src/images/photo3.jpg", title: "Tomorrow" },
  // ]);

  //function to move selected image to front of array
  const moveImageToFront = (index) => {
    //stores the new image array in memory with the selected image at the front
    const newImages = [...images]; 
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    setImages(newImages);
  };

  return (
    <>
    <div className="gallery">
      {images.map((img, i) => (
        <ImageCard
          key={img.id}
          image={img}
          onMoveToFront={() => moveImageToFront(i)}
        />
      ))}
    </div>
    <button 
      onClick={() => setImages([...images].sort(() => Math.random() - 0.5))
      }
    >
      Shuffle Images
    </button>
    </>
  );
}

export default App; 
