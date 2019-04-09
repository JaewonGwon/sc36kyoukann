import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import Modal_detail from './Modal_detail';




const Card = ({ property }) => {
    var styles = {
        width: "100%"


    };

    const { book_index, book_num, book_title, book_image, book_writer, book_date, book_publisher, book_content, book_likecount, book_viewcount, book_scrapcount } = property;
    return (

        <div className="cardlist">
            <div id={`card-${book_index}`} className="card">
                <img style={styles} src={book_image} alt={book_title} />
                <div className="details">
                 

                  
                        <ul className="features">
                            <div className="allList">
                            <li><Icon name='eye' />
                                {book_viewcount}
                                <span>bedrooms</span>
                            </li>

                            <li><Icon
                                color='red'
                                name="heart" />
                                {book_likecount}
                            </li>

                            <li><Icon
                                name="save"
                                color='blue' />
                                {book_scrapcount}
                            </li>
                            </div>
                            
                        </ul>
                        
                            <div className="detailButton">
                                <Modal_detail
                                    content={book_content}
                                    img={book_image} />
                            </div>
                   
                </div>

            </div>
        </div>
    )
}


Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;