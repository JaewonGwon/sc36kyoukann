import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import Modal_detail from './Modal_detail';




const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            
            <div className="details">
                <span className="index">{index+1}</span><br/>
                

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
                    

                    {/* <Modal_detail 
                    picture={picture}
                    bedrooms={bedrooms}
                    carSpaces={carSpaces} /> */}
                    {/* <img src={this.props.picture}></img><br/>
           <b>bedrooms : {this.props.bedrooms}</b><br/>
           <b>carSpaces : {this.props.carSpaces}</b> */}
                    
                    <li>
                        <Modal_detail img={picture}/>
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