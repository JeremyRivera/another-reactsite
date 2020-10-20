import React from 'react';
import './styles.css';
import CardItem from '../CardItem';
import Waterfall from '../../assets/images/img-9.jpg';
import Beach from '../../assets/images/img-1.jpg';
import Boat from '../../assets/images/img-3.jpg';
import Ball from '../../assets/images/img-4.jpg';
import Ride from '../../assets/images/img-8.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Waterfall}
                            text='Example 1'
                            label='#1'
                            alt=''
                            path='/services'
                        />
                        <CardItem
                            src={Beach}
                            text='example 2'
                            label='#2'
                            alt=''
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={Boat}
                            text='example 3'
                            label='#3'
                            alt=''
                            path='/services'
                        />
                        <CardItem
                            src={Ball}
                            text='Example 4'
                            label='#4'
                            alt=''
                            path='/products'
                        />
                        <CardItem
                            src={Ride}
                            text='example 5'
                            label='#5'
                            alt=''
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
