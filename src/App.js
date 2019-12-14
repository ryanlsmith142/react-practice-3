import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Animal() {
  return (
      <div>
        Roger
      </div>
  )
}

class AnimalList extends React.Component {
  render() {
    const animal = <Animal

      name="Roger"



    />;
    return (
        <div>
          {animal}
        </div>
    );

  }
}

// class Animal extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.name}
//       </div>
//     );
//   }
// }

export default Animal;
