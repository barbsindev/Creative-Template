import { createContext, useState } from "react";

export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ canScroll: false });
  const changeUser = () => {
    setUser({ canScroll: !user.canScroll });
    console.log("called", user);
  };
  return (
    <userContext.Provider value={{ user, changeUser }}>
      {children}
    </userContext.Provider>
  );
};
