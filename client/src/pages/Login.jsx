import './Login.css'
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
const Login = () => {
    return (
        <div className="login">
            <div className="login-left">
                <img src='src/assets/login-img.jpg'></img>
            </div>
            <div className="login-form">
                <h1>Welcome</h1>
                <div className="inputs">
                    <div className="input-f">
                        <IoMdMail color='grey' />
                        <input placeholder="Email"></input>
                    </div>
                    <div className="input-f">
                        <FaLock color='grey'/>
                        <input placeholder="Password"></input>
                    </div>
                </div>
                <button className='login-btn'>Login</button>
                <div className="links">
                    <p>Don't have an account?</p>
                    <p className='slink'>Sign Up</p>
                </div>
            </div>
        </div>
    );
}

export default Login;