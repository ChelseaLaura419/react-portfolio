import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Logo from './images/clw.png';
import LogoLRG from './images/cwallenquest.png';
import "./App.css";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
<div>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About Me</h4>
          <p className="text-muted">Hello! My name is Chelsea Wallenquest. I am a creative, versatile, reliable and energetic professional with a broad knowledge of design. I am highly skilled in the Adobe Creative Suite programs and print production. I am proficient in front end development, 3D modeling, and video editing. When I am not at a computer I can usually be found fishing the backwaters of the Florida east coast or at home enjoying whatever New England sports game happens to be on TV.</p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><Link to="mailto: chelsealaura@live.com" className="text-white">Email</Link></li>
            <li><Link to="tel:1-407-555-5555" className="text-white">Phone</Link></li>
            <li><Link to="//drive.google.com/file/d/1Kn-5GnZjQq42v8Svs57yIxX_H3PMU70v/view?usp=sharing" className="text-white">Résumé</Link></li>
            <li><Link to="//www.linkedin.com/in/chelsea-desrosiers-a8470442/" target="_blank" className="text-white">Linkedin</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-info shadow-sm">
    <div className="container d-flex justify-content-between">
      <Link to="#" className="navbar-brand d-flex align-items-center">
      <img className="logo" src={Logo} alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</div>

<div role="main">

  <div className="jumbotron text-center">
    <div className="container">
      <img className="logoLarge" src={LogoLRG} alt="logoLarge" />
      <p className="lead text-muted">Below you will find a small example of some of the work I have done in the development field.<br /> If you have any questions or want to know more about a specific discipline please visit my Linkedin page or contact me via email listed in the menu above.</p>
    </div>
  </div>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
          <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src={require("./images/patriot.png")} className="card-img-top" alt="patriot" />
                <div className="card-body">
                  <p className="card-text">Patriot Home Inspections Plus</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <img className="icon" src={require("./images/html.png")} alt="image"/> <img className="icon" src={require("./images/css.png")} alt="image"/> <img className="icon" src={require("./images/js.png")} alt="image" />
                    <div className="btn-group">
                      <Link to="//patriothomeinspectionsplus.com/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                      <Link to="//github.com/ChelseaLaura419/patriothome" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src={require("./images/nhl.png")} className="card-img-top" alt="patriot" />
                <div className="card-body">
                  <p className="card-text">NHL Clickygame</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <img className="icon" src={require("./images/react.png")} alt="image"/> <img className="icon" src={require("./images/js.png")} alt="image"/> <img className="icon" src={require("./images/css.png")} alt="image" />
                    <div className="btn-group">
                      <Link to="//chelsealaura419.github.io/nhl-clickygame/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                      <Link to="//github.com/ChelseaLaura419/nhl-clickygame" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img src={require("./images/burger.png")} className="card-img-top" alt="liri bot" />
                    <div className="card-body">
                      <p className="card-text">Eat-Da-Burger</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <img className="icon" src={require("./images/mysql.png")}  alt="image"/> <img className="icon" src={require("./images/node.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                        <div className="btn-group">
                            <Link to="//limitless-scrubland-70750.herokuapp.com/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                            <Link to="//github.com/ChelseaLaura419/burger" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/band.jpg")} className="card-img-top" alt="bandSearch" />
            <div className="card-body">
              <p className="card-text">bandSearch</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")}  alt="image"/> <img className="icon" src={require("./images/css.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                <div className="btn-group">
                  <Link to="//moguera57.github.io/group-project-1/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                  <Link to="//github.com/moguera57/group-project-1" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/superjail.jpg")} className="card-img-top" alt="hangman" />
            <div className="card-body">
              <p className="card-text">SuperJail Hangman</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")}  alt="image"/> <img className="icon" src={require("./images/css.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                <div className="btn-group">
                    <Link to="//chelsealaura419.github.io/Superjail-Hangman/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/Superjail-Hangman" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/bathhouse.jpg")} className="card-img-top" alt="bathhouse buffet" />
            <div className="card-body">
              <p className="card-text">Yubaba's Bathhouse Buffet</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")}  alt="image"/> <img className="icon" src={require("./images/css.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                <div className="btn-group">
                    <Link to="//chelsealaura419.github.io/unit-4-game/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/unit-4-game" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/jaws.jpg")} className="card-img-top" alt="jaws trivia" />
            <div className="card-body">
              <p className="card-text">Jaws Trivia</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")}  alt="image"/> <img className="icon" src={require("./images/css.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                <div className="btn-group">
                    <Link to="//chelsealaura419.github.io/TriviaGame/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/TriviaGame" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/rupaul.jpg")} className="card-img-top" alt="giphy race" />
            <div className="card-body">
              <p className="card-text">RuPaul's Giphy Race</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")}  alt="image"/> <img className="icon" src={require("./images/css.png")}  alt="image"/> <img className="icon" src={require("./images/js.png")}  alt="image"/>
                <div className="btn-group">
                    <Link to="//chelsealaura419.github.io/GifTastic/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/GifTastic" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/trains.jpg")} className="card-img-top" alt="train scheduler"/>
            <div className="card-body">
              <p className="card-text">Sheldon Cooper's Train Scheduler</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/html.png")} alt="image"/> <img className="icon" src={require("./images/css.png")} alt="image"/> <img className="icon" src={require("./images/js.png")} alt="image"/>
                <div className="btn-group">
                    <Link to="//chelsealaura419.github.io/TrainScheduler/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/TrainScheduler" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/liri.jpg")} className="card-img-top" alt="liri bot" />
            <div className="card-body">
              <p className="card-text">LIRI Bot App</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/node.png")} alt="image" /> <img className="icon" src={require("./images/js.png")} alt="image" />
                <div className="btn-group">
                    <Link to="//drive.google.com/open?id=1ojCFAO3es5KfO4PzBsPPZvGuMFP8a6l4" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/liri-node-app" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/bamazon.jpg")} className="card-img-top" alt="liri bot" />
            <div className="card-body">
              <p className="card-text">Bamazon App</p>
              <div className="d-flex justify-content-between align-items-center">
                <img className="icon" src={require("./images/mysql.png")} alt="image" /> <img className="icon" src={require("./images/node.png")} alt="image" /> <img className="icon" src={require("./images/js.png")} alt="image" />
                <div className="btn-group">
                    <Link to="//drive.google.com/file/d/12Jbw-wF7rpr0wNAtJhRk--ZPoaQcYqvP/view?usp=sharing" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                    <Link to="//github.com/ChelseaLaura419/bamazon" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={require("./images/combat.png")} className="card-img-top" alt="bandSearch" />
            <div className="card-body">
              <p className="card-text">Combat Squad</p>
              <div className="d-flex justify-content-between align-items-center">
                  <img className="icon" src={require("./images/handle.png")} alt="image" /> <img className="icon" src={require("./images/js.png")} alt="image" /> <img className="icon" src={require("./images/css.png")} alt="image" /> <img className="icon" src={require("./images/sequel.png")} alt="image" />
                <div className="btn-group">
                  <Link to="//calm-caverns-97023.herokuapp.com/" target="_blank" className="btn btn-sm btn-outline-info">View</Link>
                  <Link to="//github.com/ChelseaLaura419/project2" target="_blank" className="btn btn-sm btn-outline-info">GitHub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>



<footer className="text-muted">
  <div className="container">
    <p className="float-right">
      <Link to="#">Back to top</Link>
    </p>
    <p>© Copyright 2019 Chelsea Wallenquest. All Rights Reserved.</p>
  </div>
</footer>

      </div>
</Router>
    );
  }
}

export default App;
