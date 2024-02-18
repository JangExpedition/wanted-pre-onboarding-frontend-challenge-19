import React from 'react';
import Title from './components/Title/Title';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Title/>
      <AddTodo/>
      <List/>
    </div>
  );
}

export default App;
