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

    handleLikeCount(animalId) {
        console.log(animalId + 'was liked.');
    }

  render() {
    const animalComponents = animals.map((animal) => (
        <Animal
            id={animal.id}
            name={animal.name}
            type={animal.type}
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
          <a onClick={this.handleLike}>
              <i className={'large caret up icon'}/>
          </a>
          {this.props.votes}
      </div>
    );
  }
}

export default AnimalList;
