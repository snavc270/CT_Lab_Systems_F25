import './ImageCard.css';

function ImageCard({ image }) {
    return (
        <div className="image-card">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
            <p>Date: {image.date} </p>
            <p>Sound: {image.soundLevel} </p>
        </div>
    );
}

export default ImageCard;
