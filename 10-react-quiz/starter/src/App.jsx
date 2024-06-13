import { useQuiz } from "./contexts/QuizContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/Main/StartScreen";
import Questions from "./components/Main/Questions";
import NextButton from "./components/Main/NextButton";
import Progress from "./components/Main/Progress";
import FinishScreen from "./components/Main/FinishScreen";
import Footer from "./components/Main/Footer";
import Timer from "./components/Main/Timer";

const App = () => {
    const { status } = useQuiz();
    return (
        <div className="app">
            <Header />

            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen />}
                {status === "active" && (
                    <>
                        <Progress />
                        <Questions />
                        <Footer>
                            <Timer />
                            <NextButton />
                        </Footer>
                    </>
                )}
                {status === "finished" && (
                    <FinishScreen
                        
                    />
                )}
            </Main>
        </div>
    );
};

export default App;
