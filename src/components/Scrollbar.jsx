import React, { useState } from 'react';


const Scrollbar = () => {
    const [imageArray, setImageArray] = useState(0);

    const array = [
        <img src="https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />,
        <img src="https://images.pexels.com/photos/16576234/pexels-photo-16576234/free-photo-of-woman-walking-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />,

        <img src="https://images.pexels.com/photos/6051741/pexels-photo-6051741.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" srcset="" />,
        
        <img src="https://images.pexels.com/photos/16091159/pexels-photo-16091159/free-photo-of-light-city-red-port.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" srcset="" />

        
    ];

    const previous = () => {
        setImageArray(imageArray === 0 ? array.length - 1 : imageArray - 1);
    };

    const next = () => {
        setImageArray(imageArray === array.length - 1 ? 0 : imageArray + 1);
    };

    return (
        <div className='main-container'>
            <div className='child-container'S>
            <button className='pre' onClick={previous}>Previous</button>
            {array[imageArray]}
            <button className='next' onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Scrollbar;
