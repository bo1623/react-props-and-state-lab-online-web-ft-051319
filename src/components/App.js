import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import update from 'immutability-helper';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType=(event)=>{
    console.log('inside changetype')
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick=()=>{
    console.log('inside petsclick')
    if (this.state.filters.type==='all'){
      let url='/api/pets'
      this.fetchFunction(url)
    } else {
      let url=`/api/pets?type=${this.state.filters.type}`
      this.fetchFunction(url)
    }
  }

  fetchFunction=(url)=>{
    fetch(url)
    .then(resp=>resp.json())
    .then(json=>{
      this.setState({
        pets: json
      })
    })
    .then(()=>console.log(this.state))
  }

  getIndex=(id)=>{
    let arr=this.state.pets
    for (let i=0;arr.length;i++){
      if(arr[i].id===id){
        return i //getting index of the object with the matching id
      }
    }
  }

  onAdoptPet=(id)=>{
    let arr=this.state.pets //creating a copy of the current array
    arr[this.getIndex(id)].isAdopted=true //setting the isAdopted feature of the chosen object to true
    this.setState({
      pets: arr //just replacing the entire pets array with the new updated one
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
