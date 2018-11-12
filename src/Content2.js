import React, { Component } from "react";
import { Grid, Row, Col, Modal, Button } from "react-bootstrap";
import { isEmpty } from "lodash";

import Chart from "./Chart";
import Report from "./Report";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: {},
      show: false
    };
  }

  updateValue = data => {
    this.setState({
      selectedValue: data,
      show: !isEmpty(data)
    });
  };

  cleanValue = () => {
    this.updateValue({});
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12} className="small-padding-right">
            <Chart updateValue={this.updateValue} />
          </Col>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Report
                data={this.state.selectedValue}
                cleanValue={this.cleanValue}
                example2={true}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Grid>
    );
  }
}

export default Content;
