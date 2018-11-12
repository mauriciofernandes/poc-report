import React, { Component } from "react";
import { isEmpty } from "lodash";
import { Table, Button, Badge } from "react-bootstrap";

class Report extends Component {
  render() {
    const {
      props: { data, cleanValue, example2 }
    } = this;
    return (
      <div className={example2 ? "content no-border" : "content"}>
        {!example2 && (
          <h6>
            Report
            {!isEmpty(data) && (
              <button type="button" className="close" onClick={cleanValue}>
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            )}
          </h6>
        )}
        {isEmpty(data) ? (
          <div className="message">
            No record selected. <br />
            Please, click on the chart to see more details about the selected
            record.
          </div>
        ) : (
          <Table striped responsive>
            <tbody>
              <tr>
                <td>
                  <b>Date:</b>
                </td>
                <td>{data.label}</td>
              </tr>
              <tr>
                <td>
                  <b>Value:</b>
                </td>
                <td>{data.value}</td>
              </tr>
              <tr>
                <td>
                  <b>Report name 1:</b>
                </td>
                <td>
                  <Button bsStyle="primary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Report name 2:</b>
                </td>
                <td>
                  <Badge bsClass="badge-danger">Unavailable</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default Report;
