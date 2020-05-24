import React from 'react';
import './Filters.scss';

class Filters extends React.Component {

	render() {
		const { onChangeSearch, selected, orderClick } = this.props;

		let buttons = {
			name: 'Name',
			country: 'País',
			company: 'Empresa',
			phone: 'Telefone',
			department: 'Departamento',
			admission: 'Data de adimissão'
		};

		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input type="text"
							className="filters__search__input"
							placeholder="Pesquisar"
							onChange={ event => onChangeSearch(event.target.value) } />

					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					{ selected && Object.keys(buttons).map( button =>

						(
							<button key={button}
								className={"filters__item" + (selected.field === button ? " is-selected" : "")}
								onClick={ event => orderClick(button) }	>
								{buttons[button]}

								<i className={"fas fa-sort-" + (selected.field === button ? selected.order : "down")} />
							</button>
						)
					) }
				</section>
        	</div>
		);
	}
}

export default Filters;
