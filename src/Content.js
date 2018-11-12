import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Chart from "./Chart";
import Report from "./Report";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: {}
    };
  }

  updateValue = data => {
    this.setState({
      selectedValue: data
    });
  };

  cleanValue = () => {
    this.updateValue({});
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={7} className="small-padding-right">
            <Chart updateValue={this.updateValue} />
          </Col>
          <Col md={5} className="small-padding-left">
            <Report
              data={this.state.selectedValue}
              cleanValue={this.cleanValue}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Content;
