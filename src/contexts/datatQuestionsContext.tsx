import { setOfQuestions } from "../config/dataQuestion";

const { createContext, useContext, useState } = require("react");

const QuizContext = createContext();
const QuizProvider = (props: any) => {
  const [dataQuiz, setDataQuiz] = useState(setOfQuestions);
  const value = {
    dataQuiz,
    setDataQuiz,
  };
  return <QuizContext.Provider value={value} {...props}></QuizContext.Provider>;
};
const useQuiz = () => {
  const context = useContext(QuizContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
};
export { QuizProvider, useQuiz };
