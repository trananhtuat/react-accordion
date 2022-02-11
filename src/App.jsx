import './App.scss';
import 'boxicons/css/boxicons.min.css';
import Accordion from './components/accordion/Accordion';

const data = [
    {
        title: "In just 3 hours, learn basic HTML",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia."
    },
    {
        title: "This tutorial will teach you CSS from basic to advanced",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia."
    },
    {
        title: "Master your language with lessons, quizzes, and projects",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia."
    },
    {
        title: "Focus on Learning Programming Basics",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste accusamus, quos quas magnam ut doloribus reiciendis fuga quod non voluptatum voluptas quia voluptatibus corrupti optio nihil molestiae totam mollitia."
    }
]

function App() {
    return (
        <div style={{ width: "600px", paddingTop: "100px" }}>
            <h1 style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "50px"
            }}>
                React Accordion
            </h1>
            {
                data.map((item, index) => <div
                    key={index}
                    style={{ marginBottom: "5px" }}
                >
                    <Accordion
                        title={item.title}
                        content={item.content}
                    />
                </div>)
            }
        </div>
    );
}

export default App;
