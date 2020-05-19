import React from "react";
import './Contacts.scss';

class Contacts extends React.Component {
	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					{this.props.children}
				</section>
			</div>
    	);
	}
}

export default Contacts;
