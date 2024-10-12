import { QUESTIONS } from "../constants";

export const ListOfQuestions = () => {
  return (
    <>
      {QUESTIONS.map((item, index) => (
        <div key={`${item.question}-${index}`} className="question">
          <h3>{item.question}</h3>
        </div>
      ))}
    </>
  );
};
