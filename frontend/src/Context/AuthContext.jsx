import React, { createContext, useState, useEffect, useRef } from "react";
import { useToast, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const toast = useToast();
  const myNav = useNavigate();

  const [username, setUsername] = useState("");
  const [admin, setAdmin] = useState(false);
  const disableOnStartRef = useRef(false);

  const login = () => {
    setUsername(localStorage.getItem("user") || "");
    setAdmin(localStorage.getItem("admin") || false);
  };

  useEffect(() => {
    if (username === "" && disableOnStartRef.current) {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg={`green.500`}>
            Logout Success, Redirecting...
          </Box>
        ),
      });

      setTimeout(() => {
        myNav("/login");
      }, 1000);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
    }
    disableOnStartRef.current = true;
  }, [username, myNav, toast]);

  const logout = () => {
    setUsername("");
    setAdmin(false);
  };

  return <AuthContext.Provider value={{ username, login, logout, admin, setAdmin }}>{children}</AuthContext.Provider>;
};
