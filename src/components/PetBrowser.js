import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet=(id)=>{
    this.props.onAdoptPet(id)
  }

  render() {
    return this.props.pets.map((petDetails, index) => <div key={index} className="ui cards"><Pet pet={petDetails} onAdoptPet={this.onAdoptPet}/></div>)
  }
}

export default PetBrowser
