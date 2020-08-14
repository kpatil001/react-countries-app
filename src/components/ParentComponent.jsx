import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import SearchCountriesComponent from './SearchCountriesComponent'
import ContinentDropDownComponent from './ContinentDropDownComponent'
import CountriesComponent, { setContinent } from './CountriesComponent';
import FetchApiService from '../api/FetchApiService';
import ModalComponent from './ModalComponent';


class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            continent: "All",
            country: "All",
            countryToShowInModal :{},
            allCountries : []
        }
        this.setContinent = this.setContinent.bind(this);
        this.setCountry = this.setCountry.bind(this);
        this.setCountryToShowInModal = this.setCountryToShowInModal.bind(this);
        this.getCountriesOfContinent = this.getCountriesOfContinent.bind(this);
    }

    componentDidMount(){
        FetchApiService.retrieveAllCountries()
        .then(response => {
            this.setState({allCountries: response})
            console.log("State",this.state.allCountries)
        })
        .catch((err)=>{console.log(err)});
    }

    setContinent(selectedContinent) {
        this.setState((state) => {
            return { continent: selectedContinent, country : "All" }
        });
    }

    setCountry(selectedCountry){
        this.setState({country:selectedCountry});
    }

    setCountryToShowInModal(country){
        console.log("Inside setCoumtryTOshw in Modal Function");
        this.setState({countryToShowInModal: country});
    }

    getCountriesOfContinent(){
        let countries = [];
        console.log("inside get countries and value of this.continentis")
        if(this.state.continent != "All")
        {
            this.state.allCountries.forEach((country)=>{
                if(country.region == this.state.continent)
                    countries.push(country.name);
            })
        }
        console.log("return value of getCountriesOfContinent is ",countries);
        return countries;
    }

    render() {
        return (
            <>
                <HeaderComponent />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <SearchCountriesComponent countries={this.getCountriesOfContinent()} callback={this.setCountry}/>
                        </div>
                        <div className="col">
                            <ContinentDropDownComponent callback={this.setContinent} />
                        </div>
                    </div>
                    <div id="CountryComponent" className="row mt-3">
                        <CountriesComponent allCountries={this.state.allCountries} selectedContinent={this.state.continent} selectedCountry={this.state.country} modalCallback={this.setCountryToShowInModal} />
                    </div>
                </div>
                <ModalComponent country={this.state.countryToShowInModal}/>
            </>
        )
    }
}
export default ParentComponent;