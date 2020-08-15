import React, { Component } from 'react'

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

        //     <div className="input-group mb-3 dropdown">
        //     <div className="input-group-prepend">
        //         <label className="input-group-text" >Region</label>
        //     </div>
        //     <select data-live-search="true" className="form-control custom-select" onChange={this.handleChange}>
        //             {
        //                 this.state.continents.map(
        //                     continent => (<option key={continent} value= {continent}> {continent} </option>)
        //                 )
        //             }
        //     </select>
        // </div>


            <div className="input-group input-group mb-3 dropdown">
                <div className="input-group-prepend">
                    <label className="input-group-text">Country</label>
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