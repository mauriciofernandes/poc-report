import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";

// import Test from "./Test";
import Chart from "./Chart";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Chart Title</h1>
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <Chart />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
