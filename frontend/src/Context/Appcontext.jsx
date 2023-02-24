import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem("authToken") || false
    );

    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");


    const handleLogin = (e, user) => {
        e.preventDefault();

        let { email, password } = user;
        if (email && password) {
            fetch("http://localhost:4100/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.msg === "Login success") {
                        localStorage.setItem("authToken",data.token)
                        navigate("/");
                    }
                    else if (data.msg === "Invaild credentials") {
                        alert(data.msg);
                        navigate("/login");
                    }
                })
                .catch((err) => console.log(err));
        }
        else {
            alert("Please Sign Up first");
        }
    }

    const handleSignup = (e, user) => {
        e.preventDefault();

        let { firstname, lastname, email, password} = user;
        if (firstname && lastname && email && password) {
            fetch("http://localhost:4100/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.msg === "User registered.") {
                        navigate("/login");
                    }
                    else if (data.msg === "Please login, user already exist") {
                        alert(data.msg);
                        navigate("/login");
                    }
                })
                .catch((err) => console.log(err));
        }
        else {
            alert("Please provide all fields.");
        }
    };




    const data = {
        handleLogin,
        handleSignup,
    };
    return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;


}

export default AppcontextProvider;