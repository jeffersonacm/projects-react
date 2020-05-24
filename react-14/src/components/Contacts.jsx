import React from "react";
import './Contacts.scss';
import Contact from "./Contact";
import Loading from "./Loading";

class Contacts extends React.Component {
	render() {
		const contacts = this.props.contacts;

		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{this.props.loading ? <Loading/> : null}
					{  contacts && contacts.map( value => <Contact key={value.id} value={value} />)}
				</section>
			</div>
		);

	}
}

export default Contacts;
