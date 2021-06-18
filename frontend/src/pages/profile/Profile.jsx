import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import Widget from "../../components/widget/Widget"


export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Venancio Gomani</h4>
                            <span className="profileInfoDesc">Artist | Author | Engineer | Entrepreneur</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Timeline />
                        <Widget profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
