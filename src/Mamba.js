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
              <Card.Img src="https://scontent.fagc1-1.fna.fbcdn.net/v/t1.6435-9/83385429_102401171323085_1164183273929179136_n.jpg?stp=c0.7.526.275a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=mGHFvpsAAXgAX-Z40Q3&_nc_ht=scontent.fagc1-1.fna&oh=00_AT9co4ZdqX7SgejsB9r8C5llP8UGah4bzohSxvXwyV86Og&oe=62C2DBF4" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Thank You Kobe RIP!!!</Card.Title>
                
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
