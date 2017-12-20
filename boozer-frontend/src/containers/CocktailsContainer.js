import React from 'react';
import CocktailList from '../components/CocktailList'
import Details from '../components/Details'

class CocktailsContainer extends React.Component {

  state = {
    cocktails: [],
    selected: ""
  }

  getData = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(cocktails => this.setState({ cocktails }))
  }

  componentDidMount() {
    this.getData();
  }

  makeSelected = (select) => {
    this.setState({
      selected: select
    })
  }

  render() {
    // console.log(this.state)
    return(
      <div>
        <Details cocktails={this.state.cocktails} selected={this.state.selected} />
        <CocktailList cocktails={this.state.cocktails} makeSelected={this.makeSelected} />
      </div>
    )
  }
}

export default CocktailsContainer;
