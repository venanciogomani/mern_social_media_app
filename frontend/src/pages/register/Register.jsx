import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Active Play</h3>
                    <span className="loginDesc">
                        Connect with the world
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Name" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Register</button>
                        <button className="loginRegisterButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
