import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { isEmpty } from "lodash";
import { Table, Button } from "react-bootstrap";

const data = {
  labels: ["12/11", "13/11", "14/11", "15/11", "16/11", "17/11", "18/11"],
  datasets: [
    {
      borderColor: "rgba(75,192,192,0.8)",
      label: "labelName",
      data: [2, 29, 5, 5, 2, 3, 10],
      tension: 0.4,
      fill: false
    }
  ]
};

const options = {
  legend: {
    display: false
  }
};

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      active: {}
    };
  }

  handleClick = e => {
    if (!isEmpty(e)) {
      const activeItem = e[0]._index;
      const label = this.refs.chartName.chartInstance.config.data.labels[
        activeItem
      ];
      const value = this.refs.chartName.chartInstance.config.data.datasets[0]
        .data[activeItem];
      this.setState({
        active: {
          label: label,
          value: value
        }
      });
    }
  };

  cleanState = () => {
    this.setState({ active: {} });
  };

  render() {
    const {
      state: { active },
      handleClick,
      cleanState
    } = this;
    return (
      <div>
        <Line
          data={data}
          options={options}
          onElementsClick={handleClick}
          ref="chartName"
        />
        {!isEmpty(active) && (
          <div>
            <h2>
              Report{" "}
              <button type="button" class="close" onClick={cleanState}>
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            </h2>
            <Table striped responsive>
              <tbody>
                <tr>
                  <td>
                    <b>Date:</b>
                  </td>
                  <td>{active.label}</td>
                </tr>
                <tr>
                  <td>
                    <b>Value:</b>
                  </td>
                  <td>{active.value}</td>
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
                    <Button bsStyle="primary">Download</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default Chart;
