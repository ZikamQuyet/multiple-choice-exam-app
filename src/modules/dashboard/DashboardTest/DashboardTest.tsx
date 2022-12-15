import React from "react";
import Test from "../../../components/Test";
import { useQuiz } from "../../../contexts/datatQuestionsContext";
import { DashboardTestStyles } from "./DashboardTestStyles.styled";

const DashboardTest: React.FC = () => {
  const { dataQuiz, setIndexSetOfQuestion } = useQuiz();

  return (
    <DashboardTestStyles>
      {dataQuiz.length > 0 &&
        dataQuiz?.map((item: any, index: number) => (
          <Test
            title={item.title}
            point={item.point}
            time={item.time}
            pointMax={item.pointMax}
            key={item.id}
            to={`/exam/${index}/0`}
            onClick={() => setIndexSetOfQuestion(index)}
          />
        ))}
    </DashboardTestStyles>
  );
};

export default DashboardTest;
