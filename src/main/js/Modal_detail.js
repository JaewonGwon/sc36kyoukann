import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Segment } from 'semantic-ui-react';
import axios from 'axios';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
          <div className="ModalButton">
          <Button inverted color='orange' onClick={this.toggle}>
        {this.props.buttonLabel}Read More
      </Button>
      </div>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.book_title}</ModalHeader>
          <ModalBody>
            <img src={this.props.book_image}/>
            <b></b>
            <p>{this.props.book_content}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="red" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

      componentDidMount() {
        axios.get('')
            .then(tags => {
                let tag_list = tags.data

                for (var i = 0; i < tag_list.length; i++) {
                    if(tag_list.book_title == this.props.book_title){
                       
                    }
                    tag_list[i].book_index = i;

                }
                this.setState({
                    properties: book_list,
                    property: book_list[0]
                });

                console.log(book_list);
            })
            .catch(function (error) {
                console.log(error);
            });
 
    }

}

export default ModalExample;