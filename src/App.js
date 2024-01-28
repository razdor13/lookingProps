import {Component} from 'react';
import './App.css';







class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          number : 0
          
        }
      }
    
    decrement = () => {
      
      if (this.state.number === -20) {
          return
        }
      this.setState(state => ({
        number : state.number - 1
      }))
    }
    
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке
    increment = () => {
      console.log()
      if (this.state.number === 20) {
          return
        }
      this.setState(state => ({
        number : state.number + 1
      }))
    }
    
    getRandom = () => {
        this.setState(state => ({
            number : Math.floor(Math.random() * (50 - (-50) + 1)) + (-50)
          }))
    }
    

    getReset = () => {
        
        this.setState(state => ({
            number : this.props.counter
          }))
    }


    render() {
      return (
        <div className="app">
          <div className="counter">{this.state.number}</div>
          <div className="controls">
            <button onClick={this.increment}>INC</button>
            <button onClick={this.decrement}>DEC</button>
            <button onClick={this.getRandom}>RND</button>
            <button onClick={this.getReset}>RESET</button>
          </div>
        </div>
      )
    }
  }

export default App;

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов