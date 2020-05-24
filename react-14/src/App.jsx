import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import TopBar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      nameOnChange: "",
      loading: false,
      selected: {
        field: "name",
        order: "down"
      }
    };
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch(URL)
      .then(data => data.json())
      .then(data => this.setState({data: data, loading:false}));
  }

  onChangeSearch = value => {
    this.setState({nameOnChange: value});
  }

  orderClick = field => {
    if (this.state.selected.field === field && this.state.selected.order === "down") {
      let sorted = this.state.data.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
      this.setState({data: sorted, selected : {field: field, order: "up"}});
    } else {
      let sorted = this.state.data.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
      this.setState({data: sorted, selected : {field: field, order: "down"}});
    }
  }

  render() {
    const { data, nameOnChange } = this.state;
    let contacts = data.filter(contact => contact.name.toLowerCase().includes(nameOnChange));

    return (
      <div className="app" data-testid="app">
        <React.Fragment>
          <TopBar />
          <Filters onChangeSearch={this.onChangeSearch}
                    orderClick={this.orderClick}
                    selected={this.state.selected} />
          <Contacts contacts={contacts} loading={this.state.loading}/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
