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
                        
                            <li><i className="now-ui-icons education_glasses"> {book_viewcount}</i>
                                 
                            </li>
                            <li><i className="now-ui-icons ui-1_send"> {book_scrapcount}</i>
                                 
                            </li>
                            <li><i className="now-ui-icons ui-2_favourite-28"> {book_likecount}</i>
                                 
                            </li>


                        </div>

                    </ul>

                    <div className="detailButton">
                        <Modal_detail
                            book_content={book_content}
                            book_image={book_image}
                            book_title={book_title}
                            book_num={book_num}
                            book_writer={book_writer}
                            book_date={book_date}
                            book_publisher={book_publisher}
                            book_content={book_content}
                            book_likecount={book_likecount}
                            book_viewcount={book_viewcount}
                            book_scrapcount={book_scrapcount} />


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