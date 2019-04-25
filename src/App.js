import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  const itemsList = props.store.lists.map(function(list) {
    return <List header={list.header} cards={list.cardIds.map(id=> props.store.allCards[id])} key={list.id}/>
  });
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {itemsList}
      </div>
    </main>
  );
}

export default App;
