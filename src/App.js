import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
import { Card, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const todos=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Go Shopping',
    id: 1528817012345,
    completed: false
  },
  {
    task: 'Practice JS',
    id: 1528817009876,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={todos};
  }

  toggleTask = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  handleRemove = () => {
    const newTodos = this.state.todos.filter((item) => !item.completed);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className='appBody'>
      <Card>
        <Card.Content>
          <Header color='teal' as='h2'>
            <Icon color='teal' name='edit outline'/>
            To-Do-List
          </Header>
        </Card.Content>
        <Card.Content>
          <TodoForm addItem={this.addItem}/>
        </Card.Content>
        <Card.Content>
          <TodoList
          toggleTask={this.toggleTask} 
          todos={this.state.todos}
          handleRemove={this.handleRemove}
          />
        </Card.Content>   
      </Card>
      </div>
    );
  }
}

export default App;
