import React from "react";
import Button from "../../components/Button";
import { ExamFinishStyles } from "./ExamFinishStyles.styled";


const ExamFinish: React.FC = () => {
  return (
    <ExamFinishStyles>
      <div className="exam-finish-content">
        <h3>Kiểm tra an toàn bảo mật thông tin lần 2</h3>
        <div className="exam-finish-info">
          <div>
            <div className="item-info">
              <span>Số câu trả lời đúng:</span>
              <span>12</span>
            </div>
            <div className="item-info">
              <span>Số câu trả lời sai:</span>
              <span>3</span>
            </div>
            <div className="item-info">
              <span>Số câu chưa trả lời đúng:</span>
              <span>1</span>
            </div>
            <div className="item-info">
              <span>Tổng số câu hỏi:</span>
              <span>16</span>
            </div>
          </div>
          <div>Điểm số: 120 / 160</div>
        </div>
        <Button
          bgColor="#9F9D9F"
          borderRadius="40px"
          width="230px"
          height="80px"
        >
          Dashboard
        </Button>
      </div>
    </ExamFinishStyles>
  );
};

export default ExamFinish;
