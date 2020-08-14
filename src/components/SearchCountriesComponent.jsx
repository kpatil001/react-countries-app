import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchCountriesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.callback(event.target.value);
    }

    render() {
        return (
            <div className="input-group input-group mb-3 dropdown">
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                
                {console.log("countries value in searchComponent is ", this.props.countries)}
                <select className="form-control custom-select" onChange={this.handleChange} >
                    <option value="All">All</option>
                    {
                        this.props.countries.map(
                            country => {
                                console.log(country);
                                return (<option key={country} value={country}> {country} </option>)
                            }
                        )
                    }
                </select>

            </div>
        );
    }
}

export default SearchCountriesComponent