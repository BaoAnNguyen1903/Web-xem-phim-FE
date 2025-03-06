import { createContext, useState } from "react";

export const AuthContext = createContext({
  id: "",
  name: "",
  dob: "",
  gender: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  avatar: "",
  points: "",
  status: "",
  role: ""
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    avatar: "",
    points: "",
    status: "",
    role: ""
  });

  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAppLoading, setIsAppLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
