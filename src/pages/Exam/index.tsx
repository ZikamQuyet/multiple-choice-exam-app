import React from "react";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../contexts/datatQuestionsContext";
import DashboardHeadMobile from "../../modules/dashboard/DashboardHeadMobile";
import DashboardUserInfo from "../../modules/dashboard/DashboardUserInfo";
import ExamContent from "../../modules/exam/ExamContent";
import ExamHeader from "../../modules/exam/ExamHeader";
import ExamListQuestion from "../../modules/exam/ExamListQuestion";
import { ExamStyles } from "./ExamStyles.styled";

const Exam: React.FC = () => {
  const params = useParams();
  const { dataQuiz } = useQuiz();
  return (
    <ExamStyles>
      <div className="question-content">
        <DashboardHeadMobile>Làm bài thi</DashboardHeadMobile>
        <ExamHeader
          title={dataQuiz[Number(params.examIndex)].title}
          time={dataQuiz[Number(params.examIndex)].time}
        />
        <ExamContent
          question={
            dataQuiz[Number(params.examIndex)].listQuestion[
              Number(params.questionIndex)
            ].question
          }
          answers={
            dataQuiz[Number(params.examIndex)].listQuestion[
              Number(params.questionIndex)
            ].answers
          }
          examIndex={params.examIndex}
          questionIndex={params.questionIndex}
          lengthList={dataQuiz[Number(params.examIndex)].listQuestion.length}
        />
      </div>
      <DashboardUserInfo className="user-info"></DashboardUserInfo>
      <ExamListQuestion
        listQuestion={dataQuiz[Number(params.examIndex)].listQuestion}
        questionIndex={params.questionIndex}
        examIndex={params.examIndex}
      ></ExamListQuestion>
    </ExamStyles>
  );
};

export default Exam;
