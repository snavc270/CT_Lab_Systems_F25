import './ProfileCard.css' 
import { useState } from 'react';

function ProfileCard (props){
    //defining our likes variable to keep track of number of likes 
    //for each profile card 
    const [likes, setLikes] = useState(0);

    return(
        <>
            <div class="profile-card">
                <h2> This is, {props.name} </h2>
                <p> {props.hobby} </p> 
                <p> {props.emoji} </p>
                <button onClick={() => setLikes(likes + 1)}>
                    ❤️ Likes: {likes}
                </button>
            </div>
        </>
    )
}

export default ProfileCard; 