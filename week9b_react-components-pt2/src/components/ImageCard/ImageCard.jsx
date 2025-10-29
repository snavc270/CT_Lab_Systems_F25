import './ImageCard.css';

function ImageCard({ image, isSelected, onClick }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} width="150" className={`${isSelected ? 'show' : 'hide'}`}/>
      <p>{image.title}</p>
      <button onClick={onClick}>Show Image</button>
    </div>
  );
}

export default ImageCard; 