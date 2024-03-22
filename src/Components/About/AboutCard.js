import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kaua Lucas Seara </span>
            from <span className="purple"> Salvador, Brazil.</span>
            <br />I am a senior full-stack web developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <SportsBasketballIcon /> Playing basketball
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> Reading Scientific Books
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Kaua</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
