import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Zdareeec jmenuji se <span className="purple">Marek Dlabaja </span> a jsem rádoby výhledový programátor
            <br />
            <br />
            Aktuálně jsem studentem na Střední škole Baltaci s.r.o.
            <br />
            <br />
            Kromě kódování se věnuji i dalším činnostem, které mě baví!          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hraní her
            </li>
            <li className="about-activity">
              <ImPointRight /> Editování
            </li>
            <li className="about-activity">
              <ImPointRight /> Auta
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
