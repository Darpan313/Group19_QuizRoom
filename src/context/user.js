import React from "react";
const UserContext = React.createContext();
function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}
function UserProvider({ children }) {
  const [user, setUser] = React.useState(getUserFromLocalStorage());

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
