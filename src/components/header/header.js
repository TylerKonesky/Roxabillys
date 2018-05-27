import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'
import HeaderLogo from "../../img/logo-white.png"


class Header extends Component {

    constructor() {
        super()
        this.state = {      
        }
    }

    render () {
        return(
            <div>
                <header class="header"> 

                    <div class="header__logo-box">
                        <img src={HeaderLogo} alt="white logo" class="header__logo"/>
                    </div>

                    <div class="header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">
                                Roxabilly's
                            </span>
                            <span class="heading-primary--sub">
                                Where baking happens!
                            </span>
                        </h1>
                        <a href="#" class="button button--white button--animated">See our goods</a>     
                    </div>
                </header>
            </div>
        )
    }
}
        

export default Header;