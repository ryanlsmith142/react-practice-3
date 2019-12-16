import React from 'react';
import './App.css';
import animals from './seed.js';

class AnimalList extends React.Component {
    state = {
        animals: [],
    };

    componentDidMount() {
        this.setState({animals: animals});
    }

    handleLikeCount = (animalId) => {
        const nextAnimals = this.state.animals.map((animal) => {
            if (animal.id === animalId) {
                return Object.assign({}, animal, {
                    votes: animal.votes + 1,
                });
            } else {
                return animal;
            }
        });
        this.setState({
           animals: nextAnimals,
        });
    };

  render() {
    const animals = this.state.animals.sort((a, b) => (
        b.votes - a.votes
    ));
    const animalComponents = animals.map((animal) => (
        <Animal
            id={animal.id}
            name={animal.name}
            type={animal.type}
            votes={animal.votes}
            onLike={this.handleLikeCount}
        />
        ));

    return (
        <div className='ui unstackable items'>
          {animalComponents}
        </div>
    );

  }
}

class Animal extends React.Component {
  constructor(props) {
      super(props);

      this.handleLike = this.handleLike.bind(this);
  }
  handleLike() {
      this.props.onLike(this.props.id);
  }
  render() {
    return (
      <div className='item'>
          {this.props.name}
          {this.props.type}
          {this.props.votes}
          <a onClick={this.handleLike}>
              <i className={'large caret up icon'}/>
          </a>
      </div>
    );
  }
}

export default AnimalList;
