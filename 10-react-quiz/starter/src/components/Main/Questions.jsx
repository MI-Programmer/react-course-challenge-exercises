import { useQuiz } from "../../contexts/QuizContext";
import Options from "./Options";

const Questions = () => {
  const {question } = useQuiz()
  
    return (
        <div>
            <h4>{question.question}</h4>

            <Options />
        </div>
    );
};

export default Questions;
