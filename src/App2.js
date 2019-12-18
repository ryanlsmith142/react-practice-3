import React from 'react';
import './App.css';
import animals from './seed.js';

class AnimalDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableAnimalList />
                </div>
            </div>

        );
    }
}

class EditableAnimalList extends React.Component {
    render() {
        return (
            <div id='animals'>
                <EditableAnimal
                    name='Harvey'
                    type='Dog'
                    description='A very good dog'
                    editFormOpen={false}
                />
                <EditableAnimal
                    name='Ava'
                    type='Dog'
                    description='Also a very good dog'
                    editFormOpen={true}
                />
            </div>
        );
    }
}

class EditableAnimal extends React.Component {
    render() {
            if(this.props.editFormOpen) {
                return (
                    <AnimalForm
                        name={this.props.name}
                        type={this.props.type}
                        description={this.props.description}
                    />
                )
            } else {
                return (
                    <AnimalForm
                        name={this.props.name}
                    />
                );
            }
    } //render()
} //EditableAnimal

class AnimalForm extends React.Component {
    render() {
        const submitText = this.props.name ? 'Update' : 'Create';

        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Name</label>
                            <input type='text' defaultValue={this.props.name} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

