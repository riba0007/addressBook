/*****************************************************************
File: contactsDetails.jsx
Author: Priscila Ribas da Costa
Description: 
    MAD9135 - Midterm Assingment.
    Shows the contact details.
Version: 0.0.1
Updated: Oct 31, 2017

*****************************************************************/
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {formatName, formatDOB, getAge, formatLocation} from '../common';

export default class ContactDetails extends Component {
    render() {
        if (!this.props.item){
            return (
                <div className='container details'>
                    <p>Please select a contact</p>
                </div>
            );
        } else {
            return (
                <div className='container details'>
                    <div>
                        <figure>
                            <img src={this.props.item.picture.large} alt={formatName(this.props.item.name)} />
                            <figcaption>
                                <h2>{formatName(this.props.item.name, true)}</h2>
                                <span>{formatDOB(this.props.item.dob)} ( {getAge(this.props.item.dob)} years old )</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <p>Email: {this.props.item.email}</p>
                        <p>Phone: {this.props.item.phone}</p>
                        <p>Cell: {this.props.item.cell}</p>
                    </div>
                    <div>
                        <p>{formatLocation(this.props.item.location, 1)}</p>
                        <p>{formatLocation(this.props.item.location, 2)}</p>
                        <p>{formatLocation(this.props.item.location, 3)}</p>
                    </div>
                </div>
            );
        }
    }
}

ContactDetails.propTypes = {
    item: PropTypes.object
};