import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons';

class ModalComponent extends Component {

    render() {

        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modalStyle modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Country Detail</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container flexstyle">
                                <div className="row">
                                    <div class="col">
                                        <img className="ModalImg" src={this.props.country.flag} ></img>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div class="col">
                                        <div>
                                            <h4> {this.props.country.name} | {this.props.country.nativeName} </h4>
                                        </div>
                                        <div >
                                            <h6><FontAwesomeIcon icon={faCity} /> {this.props.country.capital} </h6>
                                        </div>
                                        <table className="table table-borderless table-hover table-sm">
                                            {/* <thead class="thead-light">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <td scope="col">{this.props.country.name}</td>
                                            </tr>
                                        </thead> */}
                                            <tbody>
                                                {/* <tr>
                                                <th scope="row">Name</th>
                                                <td>{this.props.country.name}</td>
                                            </tr> */}
                                                <tr>
                                                    <th scope="row">Region</th>
                                                    <td>{this.props.country.region} - {this.props.country.subregion}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Area</th>
                                                    <td>{this.props.country.area}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Population</th>
                                                    <td>{this.props.country.population}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Timezones</th>
                                                    <td>
                                                        {(this.props.country.timezones) ?
                                                            (
                                                                (this.props.country.timezones.toString())
                                                            ) :
                                                            ("")
                                                        }
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Languages</th>
                                                    <td>

                                                        {
                                                            // if languages is not empty
                                                            (this.props.country.languages) ?
                                                                (
                                                                    // if languages has length more than 1
                                                                    (this.props.country.languages.length > 1) ?
                                                                        (this.props.country.languages.reduce((total, language, index) => {
                                                                            let str = language.name;
                                                                            if (index != this.props.country.languages.length - 1)
                                                                                str += ",";
                                                                            return total + str;
                                                                        }, ""))
                                                                        :
                                                                        (this.props.country.languages[0].name)
                                                                ) :
                                                                ("")
                                                        }
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Currencies</th>
                                                    <td>
                                                        {(this.props.country.currencies) ?
                                                            ((this.props.country.currencies.length > 1) ?
                                                                (this.props.country.currencies.map(
                                                                    (currency) => (currency.symbol + "-" + currency.name + ",")
                                                                )
                                                                )
                                                                :
                                                                (this.props.country.currencies[0].symbol + "-" + this.props.country.currencies[0].name)
                                                            ) :
                                                            ("")
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Area</th>
                                                    <td>{this.props.country.area}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Border Shared With</th>
                                                    <td>
                                                        {(this.props.country.borders) ?
                                                            (
                                                                (this.props.country.borders.toString())
                                                            ) :
                                                            ("")
                                                        }
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ModalComponent;