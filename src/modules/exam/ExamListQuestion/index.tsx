import React from "react";
import Button from "../../../components/Button";
import { useOpen } from "../../../contexts/open-context";
import { ExamListQuestionStyles } from "./ExamListQuestionStyles.styled";

interface IExamListQuestion {
  listQuestion: any;
  examIndex?: string;
  questionIndex?: string;
}

const ExamListQuestion: React.FC<IExamListQuestion> = ({
  listQuestion,
  examIndex,
  questionIndex = 0,
  ...rest
}) => {
  const { isOpenListExam, setIsOpenListExam } = useOpen();
  console.log("examIndex", examIndex);
  return (
    // setup display flex để hiển thị style={{ display: "flex" }}
    <ExamListQuestionStyles
      style={isOpenListExam ? { display: "flex" } : undefined}
      onClick={() => setIsOpenListExam(!isOpenListExam)}
      {...rest}
    >
      <div
        className="exam-list-question-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="question-tags">
          {listQuestion.map((item: object, index: number) => {
            return (
              <Button
                height="65px"
                width="50px"
                border={`${
                  index + 1 === +questionIndex + 1
                    ? "2px solid #000"
                    : "1px solid #000"
                }`}
                borderRadius="4px"
                // bgColor={`${
                //   index + 1 === 1 ||
                //   index + 1 === 2 ||
                //   index + 1 === 4 ||
                //   index + 1 === 7
                //     ? "#B6B6B6"
                //     : index + 1 === 3
                //     ? "#92FD9D"
                //     : "#D9D9D9"
                // }`}
                bgColor={`${
                  index + 1 === +questionIndex + 1 ? "#92FD9D" : "#D9D9D9"
                }`}
                to={`/exam/${examIndex}/${+index}`}
              >
                {+index + 1 + ""}
              </Button>
            );
          })}
        </div>
        <Button bgColor="#9F9D9F" width="100%" borderRadius="40px">
          Nộp bài
        </Button>
      </div>
    </ExamListQuestionStyles>
  );
};

export default ExamListQuestion;
