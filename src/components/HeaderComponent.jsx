import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-nav ml-4 mr-auto"><a href="#" className="navbar-brand">World</a></div>
                    <div className="mr-2" > <a href="#" className="btn btn-secondary">Dark Mode</a></div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent