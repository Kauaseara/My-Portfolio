import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a Full-stack web Developer, I specialize in{" "}
              <b className="purple">translating figma</b>
              design into user-friendly and mobile-friendly UI, integrating
              <b className="purple"> third party's APIs</b> like Payment Method
              and Email Server, <b className="purple">2D & 3D animation</b>{" "}
              using D3.js and three.js,{" "}
              <b className="purple">Data Visualization</b>, and{" "}
              <b className="purple">Database optimization</b> and{" "}
              <b className="purple">Performance optimization</b> of the website.
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">PHP</b> and{" "}
              <b className="purple">Javascript/Typescript</b> by utilizing
              <i>
                <b className="purple"> Popular PHP Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Laravel</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React and Three.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:harshmehta813@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  kauaseara343@gmail.com
                </a>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kauaseara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaua-seara-40a64b2ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
