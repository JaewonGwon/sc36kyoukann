import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

class RequestButton extends Component {
	
	render() {
		return(
				<div>
                  <Form>
                        <TextArea placeholder='Tell us more' />
                  </Form>
				</div>
		);
	}
}

export default RequestButton;