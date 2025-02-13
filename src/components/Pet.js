import React from 'react'

class Pet extends React.Component {

  handleClick=()=>{
    let id=this.props.pet.id
    this.props.onAdoptPet(id)
  }

  renderButton = () => {
    if(this.props.pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    }else{
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
  }

  renderGender=()=>{
    if(this.props.pet.gender==="male"){
      return '♂'
    }else{
      return '♀'
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.renderGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
