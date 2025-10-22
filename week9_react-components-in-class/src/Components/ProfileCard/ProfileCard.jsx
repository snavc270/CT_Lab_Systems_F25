import './ProfileCard.css' 

function ProfileCard (props){
    return(
        <>
            <div class="profile-card">
                <h2> This is, {props.name} </h2>
                <p> {props.hobby} </p> 
                <p> {props.emoji} </p>
            </div>
        </>
    )
}

export default ProfileCard; 