import React from 'react';
import sleeping from '../../../images/sleeping1.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className="text-primary text-center">Mechanic is Sleeping</h2>
            <img className="w-100" height={500} src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;