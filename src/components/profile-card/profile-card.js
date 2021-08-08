import "./profile-card.css" ;

const ProfileCard = ({user}) => {
    return ( 
        <div className="profile-card">
            <div className="title">Your Profile</div>
            <div className="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <g>
                        <path d="M27.711,21.887C25.332,21.026,21.368,20,16,20s-9.332,1.026-11.711,1.887 C2.322,22.598,1,24.486,1,26.587V31c0,0.552,0.448,1,1,1h28c0.552,0,1-0.448,1-1v-4.413C31,24.486,29.678,22.598,27.711,21.887z"></path> 
                        <path d="M16,18c4.411,0,8-3.589,8-8V8c0-4.411-3.589-8-8-8S8,3.589,8,8v2C8,14.411,11.589,18,16,18z"></path>
                    </g>
                </svg>
            </div>
            <div className="username">{user.username}</div>
        </div> 
    );
}
 
export default ProfileCard;