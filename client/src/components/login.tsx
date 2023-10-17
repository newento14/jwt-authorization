import {FC, useState} from 'react';
import {ILogin} from "../types/user.ts";
import userServices from "../services/userServices.ts";
import {useDispatch} from "react-redux";
import Button from "../UI/button/button.tsx";
import { useNavigate } from "react-router-dom";

const Login:FC = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState<ILogin>({email: "", password: ""});
    const navigate = useNavigate();

    return (
        <div className="form">
            <p>Email</p>
            <input type="text" value={form.email} onChange={(e) => setForm({...form, email:e.target.value })}/>
            <p>Password</p>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password:e.target.value })}/>
            <div style={{marginTop: 8}}>
                <Button onClick={() => {
                   (userServices.login(form))(dispatch);
                    navigate("/problems");
                }}>Submit</Button>
            </div>
        </div>
    );
};

export default Login;