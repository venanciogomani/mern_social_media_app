import "./online.css";

export default function Online({user}) {
    return (
        <li className="widgetFriend">
            <div className="widgetProfileImgContainer">
                <img src={user.profilePicture} alt="" className="widgetProfileImg" />
                <span className="widgetOnline"></span>
            </div>
            <span className="widgetUsername">{user.username}</span>
        </li>
    );
}