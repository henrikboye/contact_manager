import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
      default:
      return state;
  }
}

export class Provider extends Component {
state = {
  contacts:[
    {
      id: 1,
      name: 'Henrik Boye',
      email: 'henrik.mortensen@gmail.com',
      phone: '53881325'
    },
    {
      id: 2,
      name: 'Louise Kaas',
      email: 'louise.kaas.mortensen@gmail.com',
      phone: '40212691'
    },
    {
      id: 3,
      name: 'Silke Kaas',
      email: 'silke.kaas.mortensen@gmail.com',
      phone: '53881325'
    }
  ],
  dispatch: action => 
    this.setState(state => reducer(state, action))
  };


render()  {
  return(
    <Context.Provider value={this.state}>
    {this.props.children}
    </Context.Provider>
  )
}
}
export const Consumer = Context.Consumer;