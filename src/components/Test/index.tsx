import React from "react";
import { NavLink } from "react-router-dom";
import { TestStyles } from "./TestStyles.styled";

interface ITest {
  title: string;
  time: string;
  point: number;
  pointMax: number;
  to: string;
  onClick: any;
}


const Test: React.FC<ITest> = ({
  title,
  time,
  point,
  pointMax,
  to,
  onClick = () => {},
}) => {
  return (
    <NavLink to={to} onClick={onClick}>
      <TestStyles>
        <h3>{title}</h3>
        <div className="time-achievements">
          <div className="time">
            <img src="/images/icon/time.svg" alt="icon" />
            <span>{+time / 60} phút</span>
          </div>
          <div className="achievements">
            <img src="/images/icon/achievements.svg" alt="icon" />
            <span>
              {point}/{pointMax} điểm
            </span>
          </div>
        </div>
        <div className="start">
          <img src="/images/icon/start1.svg" alt="icon" />
          <img src="/images/icon/start1.svg" alt="icon" />
          <img src="/images/icon/start1.svg" alt="icon" />
          <img src="/images/icon/start1.svg" alt="icon" />
          <img src="/images/icon/start2.svg" alt="icon" />
        </div>
      </TestStyles>
    </NavLink>
  );
};

export default Test;
