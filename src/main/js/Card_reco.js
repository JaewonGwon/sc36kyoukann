import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Modal_detail from './Modal_detail';
const Card_reco = ({property_reco}) => {
    const {BOOK_NUM, BOOK_IMAGE, BOOK_PUBLISHER, BOOK_CONTENT, BOOK_LIKECOUNT, BOOK_VIEWCOUNT, BOKK_SCRAPCOUNT} = property_reco;
    return (
        <div id={`card-${BOOK_NUM}`} className="card">
            <img src={BOOK_IMAGE} alt={BOOK_LIKECOUNT} />
            <div className="details">
                <span className="index">{BOOK_NUM+1}</span>
                <p className="location">
                    {BOOK_PUBLISHER}<br />
                    {BOOK_CONTENT}
                </p>
                <ul className="features">

                     <li><Icon name='eye' />
                    {BOOK_LIKECOUNT}
                    <span>bedrooms</span>
                    </li>
                    <li><Icon 
                        color='red'
                        name="heart" />
                    {BOOK_VIEWCOUNT} <span>bathrooms</span>
                    </li>
                    <li><Icon  
                    name="save"
                    color='blue' />
                    {BOKK_SCRAPCOUNT} <span>parking spots</span>
                    </li>
                    <li>
                        <Modal_detail img={BOOK_IMAGE}/>
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