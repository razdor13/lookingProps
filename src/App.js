import {useState} from "react";

import "./App.css";

const App = (props) => {
    const [number, setNumber] = useState(0);

    const getRandom = () => {

        setNumber(Math.floor(Math.random() * (50 - (-50) + 1)) + (-50))
    };

    const getReset = () => {
        setNumber(0)
    };

    const increment =() => {
        if(number < 20) {
            setNumber(number => number + 1)
        }
    }

    const decrement =() => {
        if(number > -20) {
            setNumber(number => number - 1)
        }
    }

    return (
        <div className="app">
            <div className="counter">{number}</div>
            <div className="controls">
                <button onClick={increment}>INC</button>
                <button onClick={decrement}>DEC</button>
                <button onClick={getRandom}>RND</button>
                <button onClick={getReset}>RESET</button>
            </div>
        </div>
    );
};

export default App;

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
