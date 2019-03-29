import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} /><div className="tags">dddddddddddddddddddddddddddddddddddddddddddddd</div>
            
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    
                    <li><Icon name='eye' />
                    {bedrooms}
                    <span>bedrooms</span>
                    </li>
                    <li><Icon 
                        color='red'
                        name="heart" />
                    {bathrooms} <span>bathrooms</span>
                    </li>
                    <li><Icon  
                    name="save"
                    color='blue' />
                    {carSpaces} <span>parking spots</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}


Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;