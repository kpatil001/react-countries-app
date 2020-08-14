import React, { Component } from 'react';


import CardComponent from './CardComponent';
class CountriesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allCountries: []
            // continent : props.selectedContinent
        };
        // this.refreshState = this.refreshState.bind(this);
        // setContinent = setContinent.bind(this);
    }
    com
    render() {
        // this.refreshState();
        return (
            <>
            <div className="container flexstyle">
                {console.log("value of props :: ", this.props.selectedCountry)}
                <div className=" row hidden-md-up w-100">
                    {
                        (this.props.selectedCountry != "All") ?
                            (
                                this.props.allCountries.map(
                                    (nation) =>
                                        <>
                                            {(nation.name == this.props.selectedCountry) && <CardComponent key={nation.name} country={nation} return />}
                                        </>
                                )
                            ) :
                            (
                                this.props.allCountries.map(
                                    (nation) =>
                                        <>
                                            {(nation.region == this.props.selectedContinent || this.props.selectedContinent == "All") && <CardComponent key={nation.name} country={nation} modalCallback= {this.props.modalCallback} />}
                                        </>
                                )
                            )
                    }
                </div>
            </div>
        </>
        );
    }
}

export default CountriesComponent;
