import React, { useState } from "react";
import Input from "../../../components/Input";
import Label from "../../../components/Label/Label";
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import { useOpen } from "../../../contexts/open-context";
import { useForm } from "react-hook-form";
import { ExamContentStyles } from "./ExamContentStyles.styled";

interface IExamContent {
  question: string;
  answers: string[];
  lengthList: number;
  examIndex?: string;
  questionIndex?: string;
}

const ExamContent: React.FC<IExamContent> = ({
  question,
  answers,
  examIndex,
  questionIndex,
  lengthList,
  ...rest
}) => {
  const { isOpenListExam, setIsOpenListExam } = useOpen();
  const { control } = useForm();
  const [checkAns, setCheckAns] = useState<
    { indexCheckAns: string; valueAns: string }[]
  >([]);
  const handleGetAns = (item: string) => {
    const newArr = [...checkAns];
    if (checkAns.some((item) => item.indexCheckAns === questionIndex)) {
      newArr.forEach((ele) => {
        if (ele.indexCheckAns === questionIndex) ele.valueAns = item;
      });
      if (checkAns !== newArr && checkAns.length === newArr.length) {
        setCheckAns(newArr);
        return;
      }
    }
    setCheckAns((checkAns: any) => [
      ...checkAns,
      { indexCheckAns: questionIndex, valueAns: item },
    ]);
  };
  console.log("checkAns", checkAns);
  return (
    <>
      {question && (
        <ExamContentStyles {...rest}>
          <div className="question">
            <h3>{question}</h3>
            <div>
              {answers.map((item: string, index: number) => (
                <Field onClick={() => handleGetAns(item)}>
                  <Label
                    htmlFor={index + ""}
                    marginLeft="20px"
                    className="container-input"
                  >
                    {item}
                    <Input
                      control={control}
                      type="radio"
                      name={examIndex + ""}
                      id={index + ""}
                      checked={
                        checkAns[Number(questionIndex)]?.valueAns === item
                          ? true
                          : false
                      }
                    />
                    <span className="checkmark"></span>
                  </Label>
                </Field>
              ))}
            </div>
          </div>
          <div>
            <div className="button-transfer">
              <Button
                width="165px"
                height="60"
                border="1px solid rgba(0, 0, 0, 0.5)"
                borderRadius="4px"
                bgColor="#EEE7A9"
                to={`/exam/${examIndex}/${Number(questionIndex) - 1}`}
                disabled={Number(questionIndex) + 1 === 1}
              >
                Câu trước
              </Button>
              <Button
                width="165px"
                height="60"
                border="1px solid rgba(0, 0, 0, 0.5)"
                borderRadius="4px"
                bgColor="#EEE7A9"
                to={`/exam/${examIndex}/${Number(questionIndex) + 1}`}
                disabled={Number(questionIndex) + 1 >= lengthList}
              >
                Câu sau
              </Button>
            </div>
            <Button
              className="btn-list-questions"
              width="240px"
              height="65px"
              borderRadius="40px"
              bgColor="#9F9D9F"
              onClick={() => {
                setIsOpenListExam(!isOpenListExam);
              }}
            >
              Chuyển đến
            </Button>
          </div>
        </ExamContentStyles>
      )}
    </>
  );
};

export default ExamContent;
