import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // onAdoptPet=(id)=>{
  //   this.props.onAdoptPet(id)
  // }

  render() {
    let petCards=this.props.pets.map((petDetails) => <Pet pet={petDetails} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
