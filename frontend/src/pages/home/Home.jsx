import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Timeline from "../../components/timeline/Timeline"
import Widget from "../../components/widget/Widget"
import "./home.css"

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Timeline />
                <Widget />
            </div>
        </>
    )
}