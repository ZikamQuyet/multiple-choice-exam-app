const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();
const AuthProvider = (props: any) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
};
export { AuthProvider, useAuth };
