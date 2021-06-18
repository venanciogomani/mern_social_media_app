import "./widget.css"
import {Users} from "../../dummy"
import Online from "../online/Online"

export default function Widget({profile}) {

    const HomeWidget = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Venancio Gomani</b> and <b>2 others</b> have birthdays today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="widgetAd" />
                <h4 className="widgetTitle">Friends Online</h4>
                <ul className="widgetFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileWidget = () => {
        return (
            <>
                <h4 className="widgetTitle">User Information</h4>
                <div className="widgetInfo">
                    <div className="widgetInfoItem">
                        <div className="widgetInfoKey">City: </div>
                        <div className="widgetInfoValue">Cape Town</div>
                    </div>
                    <div className="widgetInfoItem">
                        <div className="widgetInfoKey">From: </div>
                        <div className="widgetInfoValue">Rome, Italy</div>
                    </div>
                    <div className="widgetInfoItem">
                        <div className="widgetInfoKey">Relationship: </div>
                        <div className="widgetInfoValue">Engaged</div>
                    </div>
                </div>

                <h4 className="widgetTitle">User Friends</h4>
                <div className="widgetFollowings">
                    <div className="widgetFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="widgetFollowingImg" />
                        <span className="widgetFollowingName">Emmie Phiri</span>
                    </div>
                    <div className="widgetFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="widgetFollowingImg" />
                        <span className="widgetFollowingName">Ferlistus Tandeo</span>
                    </div>
                    <div className="widgetFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="widgetFollowingImg" />
                        <span className="widgetFollowingName">Regina Gomani</span>
                    </div>
                    <div className="widgetFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="widgetFollowingImg" />
                        <span className="widgetFollowingName">Joackim Gomani</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="widget">
            <div className="widgetWrapper">
                {profile ? <ProfileWidget /> : <HomeWidget />}
            </div>
        </div>
    )
}
