import '../ProfileCard/ProfileCard.css'

// in this example we've extracted the props data, but using props, props.name, props.emoji, etc. works the same way
function ProfileCard({ name, hobby, emoji }) {
  return (
    <div className="profile-card">
      <h2>{emoji} {name}</h2>
      <p>Loves: {hobby}</p>
    </div>
  );
}

export default ProfileCard;