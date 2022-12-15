import styled from "styled-components";

export const ExamContentStyles = styled.div`
  padding: 2.25rem 2.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.secondary};
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .button-transfer {
    display: flex;
    justify-content: space-between;
  }
  .btn-list-questions {
    display: none;
    margin: 1.5rem auto;
  }
  /* ____________________________________ */
  .container-input {
    display: block;
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 0.6rem;
    cursor: pointer;
    font-size: 1.1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container-input input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 10%;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 4px;
    border: 1px solid #000;
    background-color: ${(props) => props.theme.primary};
  }

  /* On mouse-over, add a grey background color */
  .container-input:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container-input input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container-input input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container-input .checkmark:after {
    left: 9px;
    top: 0.25rem;
    width: 0.25rem;
    height: 0.5rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  /* ____________________________________ */

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 2.25rem 0.5rem;
    height: 70%;
    .btn-list-questions {
      display: flex;
    }
  }
`;
