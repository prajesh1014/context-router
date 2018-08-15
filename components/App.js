import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <header>
                    <div className="dropdown">
                        <button className="dropbtn">Home</button>
                        <div className="dropdown-content">
                            <NavLink to="/about">Option1</NavLink>
                            <NavLink to="/user">Option2</NavLink>
                        </div>
                    </div>
                </header>
                {this.props.children}
            </div>
        )
    }
})