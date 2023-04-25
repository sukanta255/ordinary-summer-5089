import { useToast } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("authToken") || false);

  const navigate = useNavigate();
  const toast = useToast();
  const token = localStorage.getItem("authToken");

  const handleLogin = (e, user) => {
    e.preventDefault();

    let { email, password } = user;
    if (email.includes("@kapdelo.com")) {
      if (email && password) {
        fetch("https://enchanting-gold-tie.cyclic.app/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.msg === "Login success") {
              localStorage.setItem("authToken", data.token);
              toast({
                description: "Admin Login Successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/admin", { replace: true });
            } else if (data.msg === "Invaild credentials") {
              toast({
                description: "Invaild credentials",
                status: "error",
                duration: 1000,
                isClosable: true,
              });
              navigate("/login", { replace: true });
            }
          })
          .catch((err) => console.log(err));
        // toast({
        //     description: 'Invaild credentials',
        //     status: 'error',
        //     duration: 1000,
        //     isClosable: true,
        // })
      } else {
        alert("Please Sign Up first");
      }
    } else {
      if (email && password) {
        fetch("https://enchanting-gold-tie.cyclic.app/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.msg === "Login success") {
              localStorage.setItem("authToken", data.token);
              toast({
                description: "Login Successfully",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/", { replace: true });
            } else if (data.msg === "Invaild credentials") {
              toast({
                title: "An error occurred.",
                description: "Invaild credentials",
                status: "error",
                duration: 1000,
                isClosable: true,
              });
              navigate("/login", { replace: true });
            }
          })
          .catch((err) => console.log(err));
        toast({
          description: "Invaild credentials",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      } else {
        alert("Please Sign Up first");
      }
    }
  };

  const handleSignup = (e, user) => {
    e.preventDefault();

    let { firstname, lastname, email, password } = user;
    if (firstname && lastname && email && password) {
      fetch("https://enchanting-gold-tie.cyclic.app/users/register", {
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
            toast({
              description: "Registered Sucessfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/login");
          } else if (data.msg === "Please login, user already exist") {
            toast({
              description: "Please login, user already exist",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please provide all fields.");
    }
  };

  const data = {
    handleLogin,
    handleSignup,
  };
  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export default AppcontextProvider;
