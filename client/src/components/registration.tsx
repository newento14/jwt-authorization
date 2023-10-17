import {FC, useState} from 'react';
import {IRegistration} from "../types/user.ts";
import userServices from "../services/userServices.ts";
import {useDispatch} from "react-redux";
import '../styles/forms.css'
import Button from "../UI/button/button.tsx";
import { useNavigate } from "react-router-dom";

const Registration:FC = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState<IRegistration>({username: "",email: "", password: ""});
    const navigate = useNavigate();

    return (
        <div className="form">
            <p>Username</p>
            <input type="text" value={form.username} onChange={(e) => setForm({...form, username:e.target.value })}/>
            <p>Email</p>
            <input type="text" value={form.email} onChange={(e) => setForm({...form, email:e.target.value })}/>
            <p>Password</p>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password:e.target.value })}/>
            <div style={{marginTop: 8}}>
                <Button onClick={() => {
                    (userServices.registration(form))(dispatch);
                    navigate("/problems");
                }}>Submit</Button>
            </div>
        </div>
    );
};

export default Registration;