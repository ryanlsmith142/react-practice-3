import React from 'react';
import './App.css';
import animals from './seed.js';

class AnimalList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
        };
    }

    componentDidMount() {
        this.setState({animals: animals});
    }

  render() {
    const animalComponents = animals.map((animal) => (
        <Animal
            id={animal.id}
            name={animal.name}
            type={animal.type}
        />
        ));

    return (
        <div>
          {animalComponents}
        </div>
    );

  }
}

class Animal extends React.Component {
  render() {
    return (
      <div>
          {this.props.name}
          {this.props.type}
      </div>
    );
  }
}

export default AnimalList;
