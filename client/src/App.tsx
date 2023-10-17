import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login.tsx";
import {useEffect} from "react";
import userServices from "./services/userServices.ts";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import Registration from "./components/registration.tsx";
import Header from "./components/header.tsx";
import './styles/index.css'
import Loader from "./UI/loader/loader.tsx";
import Home from "./pages/home.tsx";


function App() {
    const dispatch = useDispatch();
    const isAuth = useTypedSelector(x => x.user.isAuth);
    const isLoading = useTypedSelector(x => x.user.isLoading);


    useEffect(() => {
        if(localStorage.getItem('token')) {
            (userServices.auth())(dispatch);
        }
    }, []);

    if (isLoading) {
        return <Loader />
    }

    const notAuthRoutes = (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/registration" element={<div className="center"> <Registration /> </div>} />
            <Route path="/login" element={<div className="center"> <Login /> </div>} />
        </Routes>
    );

    const AuthRoutes = (
        <Routes>
            <Route path="/problems" element={<Home />} />
        </Routes>
    );

    return (
      <BrowserRouter>
          <Header />
          {isAuth
              ? AuthRoutes
              : notAuthRoutes
          }

      </BrowserRouter>
  )
}

export default App
