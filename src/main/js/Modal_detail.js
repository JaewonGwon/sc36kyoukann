import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Segment } from 'semantic-ui-react';

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
          <Button inverted color='red' onClick={this.toggle}>
        {this.props.buttonLabel}Detail
      </Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <img src={this.props.img}></img>
            <p>{this.props.content}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="red" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;