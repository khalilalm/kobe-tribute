import React, { Component } from "react";
import Kobewin from "./img/kobe-win.jpg";
import "./Mamba.css";
import KobeSuit from "./img/KobeSuit.jpg";
import KobeShout from "./img/kobeShouting.jpg";
import KBlogo from "./img/kobelogo.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class Mamba extends Component {
  render() {
    return (
      <div className="mamba-wrapper">
        <h1 className="mamba-title">Mamba Mentality</h1>
        <div className="box-container">
          <div className="box">
            <Card style={{ width: "30rem" }} className="bg-dark text-white">
              <Card.Img className="card" src={KobeSuit} alt="Card image" />
              <Card.ImgOverlay>
               
                <Card.Title>"Great Kobe Story"</Card.Title>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/SHV2OuUv1tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="box">
            <a href="https://mambaandmambacita.org/" target="_blank"><Card style={{ width: "30rem" }} className="bg-dark text-white">
              <Card.Img
                src="https://mambaandmambacita.org/wp-content/uploads/2020/08/GettyImages-1243234587-scaled.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>The Mamba/MambFoundation</Card.Title>
                <Card.Img src="https://mambaandmambacita.org/wp-content/uploads/2020/06/mmsf_horizontal_working_v4-opt01.jpeg"/>
                <Card.Text>Charity Foundation dedicated to creating a positive influence on young atheletes by funneling charity donations to schools </Card.Text>
              </Card.ImgOverlay> 
            </Card></a>
          </div>
          <div className="box">
            <Card style={{ width: "30rem" }} className="bg-dark text-white">
              <Card.Img src="https://staticg.sportskeeda.com/editor/2021/02/26c3b-16124440386495-800.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Kobe 5x Champion</Card.Title>
                <Card.Text>
                  <ul className="champ-list">
                    <li>Indiana Pacers, 4-2</li>
                    <li>Philadelphia 76ers, 4-1</li>
                    <li> New Jersey Nets, 4-0</li>
                    <li>Orlando Magic, 4-1</li>
                    <li>Boston Celtics, 4-3</li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="box">
            <Card style={{ width: "30rem" }} className="bg-dark text-white">
              <Card.Img src="https://th.bing.com/th/id/R.8e07dc44e13388f0cd4417d5dd02e4f8?rik=u6pgj1v6%2fHg6cg&pid=ImgRaw&r=0" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Thank You Kobe</Card.Title>
                
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div class="content"></div>
      </div>
    );
  }
}

export default Mamba;
