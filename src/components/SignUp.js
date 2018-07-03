import React, { Component } from 'react';

import {Button, Icon, Row, Col, CardPanel, Input, Navbar, NavItem} from 'react-materialize';


export default class SignUp extends Component {

	constructor() {
		super();

		this.state = {
			shipper_name: "",
			contact_number: "",
			email: "",
			company_name: "",
			pickup_address: "",
			account_number: "",

			quantity: 0,
			description: "",
			size: ""
		}

		this.handleshipper_nameChanged = this.handleshipper_nameChanged.bind(this);
		this.handleContactChanged = this.handleContactChanged.bind(this);
		this.handleEmailChanged = this.handleEmailChanged.bind(this);
		this.handleCompanyChanged = this.handleCompanyChanged.bind(this);
		this.handleAddressChanged = this.handleAddressChanged.bind(this);
		this.handleAccountChanged = this.handleAccountChanged.bind(this);

		this.handleQuantityChanged = this.handleQuantityChanged.bind(this);
		this.handleDescChanged = this.handleDescChanged.bind(this);
		this.handleSizeChanged = this.handleSizeChanged.bind(this);

		 this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleshipper_nameChanged(e) { this.setState({shipper_name: e.target.value}); }
	handleContactChanged(e) { this.setState({contact_number: e.target.value}); }
	handleEmailChanged(e) { this.setState({email: e.target.value}); }
	handleCompanyChanged(e) { this.setState({company_name: e.target.value}); }
	handleAddressChanged(e) { this.setState({pickup_address: e.target.value}); }
	handleAccountChanged(e) { this.setState({account_number: e.target.value}); }

	handleQuantityChanged(e) { this.setState({quantity: e.target.value}); }
	handleDescChanged(e) { this.setState({description: e.target.value}); }
	handleSizeChanged(e) { this.setState({size: e.target.value}); }

	handleSubmit(event) {
		console.log(this.state.shipper_name);
        event.preventDefault()
       
        fetch(`http://localhost:3001/booking/add-booking`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)

        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log("Success");    
        }).catch(function(err) {
            console.log(err)
        });
    }



	render(){
		return(
			<div>
			
				<Row style={style}>
					<h4> Book Now! </h4>
					<CardPanel classshipper_name="white black-text">
					    <Row>
							<h6>Customer Information </h6>
						    <Input  s={6} label="Shipper name" onChange={this.handleshipper_nameChanged}/>
						    <Input type="email" label="Email" s={6} onChange={this.handleEmailChanged}/>
						    <Input s={6} label="Contact Number" onChange={this.handleContactChanged}/>
						    <Input label="Company name" s={6} onChange={this.handleCompanyChanged}/>
						    <Input label="Pick-up Address" s={6} onChange={this.handleAddressChanged}/>
						    <Input label="Account Number" s={6} onChange={this.handleAccountChanged}/>
						    <h6>Item Information </h6>
						    <Input label="Quantity" s={6} onChange={this.handleQuantityChanged}/>
						    <Input label="Description" s={6} onChange={this.handleDescChanged}/>
						    <Input label="Size" s={6} onChange={this.handleSizeChanged}/>
						</Row>
					</CardPanel>

					<Button waves='light' onClick={this.handleSubmit} method="POST">
						SAVE<Icon left>save</Icon>
					</Button>	
				</Row>

			</div>
		);
	}
}

const style = {
	height: 570,
	width: '90%',
	marginTop: '50px',
	marginLeft: '5%',
	marginRight: '5%',
	textAlign: 'center',
	
};

