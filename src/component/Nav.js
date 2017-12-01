import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <div className="Nav col-lg-3">
                <nav className="">
                    <div classname="">
                        <h1 className="main-header">weiran.code()</h1>
                        <ul className="nav-list">
                            <li>home</li>
                            <li>about</li>
                            <li>contact</li>
                            <li>Resume</li>
                        </ul>
                        <div className="building-notice container">
                            <p>Still building this site...</p>
                            <p>Open Source on <a href="https://github.com/weiranx/personal-website">Github</a></p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Nav;