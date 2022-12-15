const { createContext, useContext, useState } = require("react");

const OpenContext = createContext();
const OpenProvider = (props: any) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenListExam, setIsOpenListExam] = useState(false);
  const value = {
    isOpenMenu,
    setIsOpenMenu,
    isOpenListExam,
    setIsOpenListExam,
  };
  return <OpenContext.Provider value={value} {...props}></OpenContext.Provider>;
};
const useOpen = () => {
  const context = useContext(OpenContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
};
export { OpenProvider, useOpen };
