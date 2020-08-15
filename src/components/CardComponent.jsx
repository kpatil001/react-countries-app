import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCity } from '@fortawesome/free-solid-svg-icons';
class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flagImg: this.props.country.flag,
            countryName: this.props.country.name,
            capital: this.props.country.capital,
            population: this.props.country.population
        }
    }

    render() {
        return (
            <>
                <div className="col-md-4 mt-3">
                    <div className="card">
                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {this.props.modalCallback(this.props.country)} }>
                            <img className="card-img-top imgCard" src={this.state.flagImg} alt="Country image"/>
                        </a>
                        <div className="card-footer bg-transparent">
                            <div className="text-left"><h5>{this.state.countryName}</h5></div>
                            <div>
                                <span className="float-left"><FontAwesomeIcon icon={faCity} /> {this.state.capital}  </span>
                                <span className="float-right" ><FontAwesomeIcon icon={faUsers} /> {this.state.population}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default CardComponent;