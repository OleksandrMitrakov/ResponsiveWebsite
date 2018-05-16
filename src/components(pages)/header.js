import React from 'react';
import '.././sass/main.css';
import bgImage from '.././images/troopers.jpg'


class Header extends React.Component {


    render() {
        return (
            <div>
                <header id="showcase" className="grid">
                    <img src={bgImage} alt="troopersBg"/>
                    <div className="contentWrap">
                        <h1>StarWars</h1>
                        <p>A long time ago in a galaxy far, far away</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consequatur culpa cumque dicta illum impedit laborum, nisi perferendis quisquam.</p>
                        <a href="#sectionB" className="btn">Hit me!</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;