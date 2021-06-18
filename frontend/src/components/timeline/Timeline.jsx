import Share from "../shared/Share"
import Post from "../post/Post"
import "./timeline.css"
import {Posts} from "../../dummy"

export default function Timeline() {
    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share/>
                {Posts.map(p => (
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    )
}