import { useState } from "react";
import "/src/components/App.css";
import ImageCard from "./ImageCard/ImageCard"; 
import imageData from "../data/images.json";

function App(){
	const [images] = useState(imageData);
  console.log(images[0].title);

  // const moveImageToFront = (index) => {
  //   //stores the new image array in memory with the selected image at the front
  //   const newImages = [...images]; 
  //   const [selected] = newImages.splice(index, 1);
  //   newImages.unshift(selected);
  //   setImages(newImages);
  // };

  return (
    <>
    <div className="gallery">
      <ImageCard image={images[0]} alt= {images[0].title} />
      
      {images.map((img, i) => (
        <ImageCard
          key={img.id}
          image={img}
          alt= {img.title}
          // onMoveToFront={() => moveImageToFront(i)}
        />
      ))}
    </div>
 
    </>
  );
}

export default App; 
