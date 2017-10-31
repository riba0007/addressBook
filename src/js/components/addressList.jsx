/*****************************************************************
File: adressList.js
Author: Priscila Ribas da Costa
Description: 
    MAD9135 - Midterm Assingment.
    Create the contact list.
Version: 0.0.1
Updated: Oct 31, 2017

*****************************************************************/
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {formatName, formatDOB} from '../common';

export default class AddressList extends Component {
    render() {
        return (
            <div className='container list'>
                <li>Scroll for more contacts</li>
                <ul>
                    {this.props.items.map( item => (
                        <li key={item.key} >
                            <a href={'#contact/' + item.id}> 
                                <figure>
                                    <img src={item.picture.thumbnail} alt={formatName(item.name)} />
                                    <figcaption>
                                        <p>{formatName(item.name)}</p>
                                        <span>{formatDOB(item.dob)}</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

AddressList.propTypes = {
    items: PropTypes.array
};