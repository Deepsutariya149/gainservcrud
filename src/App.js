import React, { Component } from "react";
import { List } from "./components/List/List";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { constData } from "./data/const";
import "./assets/css/main.css";
class App extends Component {
  state = {
    todos: [],
    selectedValue: [],
    todoText: "",
  };

  onChangeInput = (e) => {
    this.setState({ todoText: e.target.value });
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.onSubmitTodo();
    }
  };

  onSubmitTodo = () => {
    let { selectedValue, todos, todoText } = this.state;
    if (selectedValue.length <= 0) {
      this.setState(({ todos, todoText }) => ({
        todos: [
          ...todos,
          { id: todos.length + 1, name: todoText, done: false },
        ],
        todoText: "",
      }));
    } else {
      let updateValue = todos;
      updateValue.map((item) => {
        if (item.id === selectedValue[0].id) {
          item.name = todoText;
          item.done = false;
        }
        return true;
      });
      this.setState({
        todos: updateValue,
        todoText: "",
      });
    }
  };

  onChangeBox = (item) => {
    let { todos } = this.state;
    let ItemList = todos.map((el) =>
      el.id === item.id ? { ...el, done: !el.done } : el
    );
    this.setState({
      todos: ItemList,
      selectedValue: ItemList.filter((el) => el.done),
    });
  };

  handleDel = () => {
    this.setState(({ todos }) => ({
      todos: todos.filter((el) => !el.done),
      selectedValue: [],
    }));
  };

  handleEdit = () => {
    let { selectedValue } = this.state;
    this.setState(() => ({
      todoText: selectedValue[0].name,
    }));
  };

  render() {
    const { todos, todoText, selectedValue } = this.state;

    return (
      <div className="outer-main">
        <div className="inner-main">
          <div className="title">
            <h2>{constData.thingsToDo}</h2>
          </div>
          <div className="outer-text-container">
            <Input
              value={todoText}
              onChange={this.onChangeInput}
              onKeyDown={this._handleKeyDown}
            />
          </div>
          <div className="outer-list">
            <List list={todos} onChangeBox={this.onChangeBox} />
          </div>
          <div className="footer-btn">
            <Button
              onClick={this.handleEdit}
              disabled={selectedValue.length > 1}
              classname="mr-2 btn"
            >
              Edit
            </Button>
            <Button onClick={this.handleDel} classname="btn">
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
