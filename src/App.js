import React from 'react';
import './sass/main.css';
import Header from './components(pages)/header';
import MainArea from './components(pages)/mainArea';
import Footer from './components(pages)/footer';


class App extends React.Component {


    render() {
        return (
            <div>
                <Header/>
                <MainArea/>
                <Footer/>
            </div>
        )
    }
}

export default App;


