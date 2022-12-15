import React from "react";
import { ExamHeaderStyles } from "./ExamHeaderStyles.styled";

interface IExamHeader {
  title: string;
  time: number;
}

const ExamHeader: React.FC<IExamHeader> = ({ title, time, ...rest }) => {
  return (
    <ExamHeaderStyles {...rest}>
      <h3>{title}</h3>
      <p>Còn lại: {time / 60} phút</p>
      <div className="all-time">
        <div className="real-time"></div>
      </div>
    </ExamHeaderStyles>
  );
};

export default ExamHeader;
