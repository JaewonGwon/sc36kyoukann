import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import Modal_detail from './Modal_detail';




const Card = ({property}) => {
    const {BOOK_NUM, BOOK_TITLE, BOOK_IMAGE, BOOK_WRITER, BOOK_DATE, BOOK_PUBLISHER, BOOK_CONTENT, BOOK_LIKECOUNT, BOOK_VIEWCOUNT, BOKK_SCRAPCOUNT}  = property;
    return (
            <div id={`card-${BOOK_NUM}`} className="card">
            <img src={BOOK_IMAGE} alt={BOOK_TITLE} />
            <div className="details">
                <span className="index">{BOOK_NUM+1}</span>
                <p className="content">
                    {BOOK_TITLE}<br />
                    {BOOK_WRITER}
                </p>
                <ul className="features">

                     <li><Icon name='eye' />
                    {BOOK_VIEWCOUNT}
                    <span>bedrooms</span>
                    </li>
                    <li><Icon 
                        color='red'
                        name="heart" />
                    {BOOK_LIKECOUNT}
                    </li>
                    <li><Icon  
                    name="save"
                    color='blue' />
                    {BOKK_SCRAPCOUNT}
                    </li>
                    <li>
                        <Modal_detail 
                        BOOK_CONTENT={BOOK_CONTENT}
                        img={BOOK_IMAGE}/>
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