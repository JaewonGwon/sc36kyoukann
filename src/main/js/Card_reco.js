import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Modal_detail from './Modal_detail';
const Card_reco = ({property_reco}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property_reco;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
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
                    <li>
                        <Modal_detail img={picture}/>
                    </li>

                </ul>
            </div>
        </div>
    )
}

Card_reco.propTypes = {
    property_reco: PropTypes.object.isRequired
}

export default Card_reco;