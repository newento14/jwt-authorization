import {FC} from "react";
import '../styles/header.css'
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {Link} from "react-router-dom";
import mainIcon from '../assets/icon.png'
import avatar from '../assets/avatar-placeholder.png'
import Button from "../UI/button/button.tsx";
import userServices from "../services/userServices.ts";
import {useDispatch} from "react-redux";

const Header:FC = () => {
    const dispatch = useDispatch();
    const isAuth = useTypedSelector(x => x.user.isAuth);


    return (
        <header className="header">
            <div
                style={{width: 1200, display: "flex", paddingLeft: 24, paddingRight: 24}} >
                <div className="header-left">
                    <img className="header-icon" src={mainIcon} alt="project icon"/>
                    <div className="selected"><a>Problems</a></div>
                </div>
                {isAuth
                    ? (
                        <div className="header-right">
                            <img className="profile-img" src={avatar} />
                            <button className="button-premium">Premium</button>
                            <Button btnColor="gray" textColor="white" onClick={() => {
                                (userServices.logout())(dispatch)
                            }}>Logout</Button>
                        </div>
                    )
                    : (
                        <div className="header-right">
                            <Button btnColor="transparent">
                                <Link to="/registration" style={{textDecoration: "none", color: "white"}}>Register</Link>
                            </Button>
                            <Button btnColor="transparent">
                                <Link to="/login" style={{textDecoration: "none", color: "white"}}>Sign in</Link>
                            </Button>
                        </div>
                    )
                }
            </div>
        </header>
    );
};

export default Header;