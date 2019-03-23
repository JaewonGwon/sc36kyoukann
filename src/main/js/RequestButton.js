import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

class RequestButton extends Component {
	
	render() {
		return(
				<div>
                  <Form>
                        <TextArea placeholder='Tell us more' />
                        <button className='btn btn-primary'>bootstrap button</button>
                    </Form>
				</div>
		);
	}
}

export default RequestButton;