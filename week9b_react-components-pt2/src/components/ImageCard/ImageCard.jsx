//added image prop and function to move image to front
function ImageCard({ image, onMoveToFront }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} width="150" />
      <p>{image.title}</p>
      {/* onClick calls the function passed from App.jsx to move this image to the front */}
      <button onClick={onMoveToFront}>Move to Front</button>
    </div>
  );
}

export default ImageCard; 