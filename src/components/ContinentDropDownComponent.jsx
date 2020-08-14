import React, { Component } from 'react'
import CountriesComponent, {setContinent} from './CountriesComponent'


class ContinentDropDownComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            continents : ["All","Africa","Americas","Asia","Europe","Oceania","Polar"],
            default : "All"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("Inside handleChange");
        console.log("Target value " , event.target.value);
        this.props.callback(event.target.value);
    }
    render() {
        return (
            <div className="input-group mb-3 dropdown">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Region</label>
                </div>
                <select data-live-search="true" className="form-control custom-select" onChange={this.handleChange}>
                        {
                            this.state.continents.map(
                                continent => (<option key={continent} value= {continent}> {continent} </option>)
                            )
                        }
                </select>
            </div>
        );
    }
}

export default ContinentDropDownComponent

