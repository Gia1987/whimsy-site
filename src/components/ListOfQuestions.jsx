import { QUESTIONS } from "../constants";

export const ListOfQuestions = () => {
  return (
    <>
      {QUESTIONS.map((item, index) => (
        <div key={`${item.question}-${index}`} className="question">
          <h2>{item.question}</h2>
        </div>
      ))}
    </>
  );
};
