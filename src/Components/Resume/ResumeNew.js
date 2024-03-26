import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/uc?export=download&id=1aSEn9_df8cijiCR0gyqCzPxSDatB5-Rf"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Card sx={{ maxWidth: 824 }}>
            <CardMedia
              className="cardmedia"
              component="iframe"
              Height="1056px"
              src="https://drive.google.com/file/d/1aSEn9_df8cijiCR0gyqCzPxSDatB5-Rf/preview"
            />
          </Card>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/uc?export=download&id=1aSEn9_df8cijiCR0gyqCzPxSDatB5-Rf"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
