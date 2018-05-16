import React from 'react';
import '.././sass/main.css';


class MainArea extends React.Component {


    render() {
        return (
            <div>
                <main id="main">
                    {/*--------------SECTION A----------------------*/}
                    <section id="sectionA" className="grid">
                        <div className="contentWrap">
                            <h2 className="contentTitle">StarWars</h2>
                            <p>
                                May the Force be with you
                            </p>
                            <div className="contentText">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consectetur, delectus dicta doloribus earum esse eveniet exercitationem facere fugiat illum ipsam iste necessitatibus nemo, nihil nobis officia provident qui quod quos repellendus saepe sequi suscipit veniam vitae voluptatem voluptatibus?</p>
                            </div>
                        </div>
                    </section>
                    {/*--------------SECTION B----------------------*/}
                    <section id="sectionB" className="grid">
                        <ul>
                            <li>
                                <div className="card">
                                    <img
                                        src="https://vignette.wikia.nocookie.net/disney/images/9/95/Master_Yoda.png/revision/latest?cb=20151112212224"
                                        alt="masterYoda"
                                    />
                                    <div className="cardContent">
                                        <h3 className="cardTitle">Master Yoda</h3>
                                        <p>Jedi master who trains Count Dooku and Luke Skywalker. He goes into exile on
                                            Dagobah after the fall of the Republic in Revenge of the Sith.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src="https://www.eurobricks.com/forum/uploads/gallery/album_296/gallery_7500_296_1105389.png"
                                        alt="K-2SO"
                                    />
                                    <div className="cardContent">
                                        <h3 className="cardTitle">K-2SO</h3>
                                        <p>Imperial security droid stolen and reprogrammed by the Alliance in Rogue
                                            One.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png" alt="R2-D2"
                                    />
                                    <div className="cardContent">
                                        <h3 className="cardTitle">R2-D2</h3>
                                        <p>Astromech droid built on Naboo that appears in all eight Star Wars films and
                                            in Rogue One: A Star Wars Story.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    {/*--------------SECTION C----------------------*/}
                    <section id="sectionC" className="grid">
                        <div className="contentWrap">
                            <h2 className="contentTitle">Darth Bane</h2>
                            <p>Dark Lord of the Sith who is responsible regaining the "Rule of Two" that states there
                                shall only ever be two Sith at a time, a Master and an Apprentice, during the Old
                                Republic.</p>
                        </div>
                    </section>
                    {/*--------------SECTION D----------------------*/}
                    <section id="sectionD" className="grid">
                        <div className="box">
                            <h2 className="contentTitle">Contact Us</h2>
                            <p>The Galactic Empire, also known as the First Galactic Empire, the New Order, or simply
                                the Empire or the Order, and remembered as the Old Empire, was the galactic, autocratic
                                government that replaced the Galactic Republic in the aftermath of the Clone Wars.</p>
                            <p>darkLord@gmail.com</p>
                        </div>
                        <div className="box">
                            <h2 className="contentTitle">About Our Empire</h2>
                            <p>Dark Lord of the Sith was a title held by Sith Lords who were members of the ancient Sith
                                Order. During the days of the Old Republic, many Sith fought against the Jedi Order,
                                commanded by Dark Lords of the Sith. </p>

                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default MainArea;