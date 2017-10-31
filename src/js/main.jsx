/*****************************************************************
File: main.jsx
Author: Priscila Ribas da Costa
Description: 
    MAD9135 - Midterm Assingment.
    Create an adress list.
Version: 0.0.1
Updated: Oct 23, 2017

*****************************************************************/
//imports
import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import AddressList from './components/addressList.jsx'; // eslint-disable-line no-unused-vars
import ContactDetails from './components/contactDetails.jsx'; // eslint-disable-line no-unused-vars
import {contacts} from './data/contacts';

//global variables
let state = {};

//on hash change
window.addEventListener('hashchange', ()=>setState({location: location.hash}));

//initializer
function setState(changes){
    //set changes to object state
    state = Object.assign({}, state, changes);
    
    let item;
    let location = state.location.replace(/^#\/?|\/$/g, '').split('/');
    
    //routing
    if (location[0] === 'contact' ){
        item = state.items.find(item => item.id == location[1] ? true : false);
    }
    
    const MainView = (
        <div className='wrap'>
            <AddressList items = {state.items} />
            <ContactDetails item = {item}/>
        </div>
    ); 
    
    ReactDOM.render(MainView, document.getElementById('react-app'));
}

//initial state
setState({
    items: contacts,
    location: location.hash
});