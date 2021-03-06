import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { isEmpty } from "lodash";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const data = {
  labels: [
    "12/11",
    "13/11",
    "14/11",
    "15/11",
    "16/11",
    "17/11",
    "18/11",
    "19/11",
    "20/11",
    "21/11"
  ],
  datasets: [
    {
      borderColor: "rgba(75,192,192,0.8)",
      label: "labelName",
      data: [2, 29, 5, 0, 2, 3, 10, 4, 11, 8],
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
      startDate: null
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
      this.props.updateValue({ label: label, value: value });
    }
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.updateValue({
      label: moment(date).format("DD/MM"),
      value: "12"
    });
  };

  render() {
    const {
      handleClick,
      handleChange,
      state: { startDate }
    } = this;
    return (
      <div className="content">
        <h6>
          Chart Name
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            dateFormat="DD/MM/YYYY"
            placeholderText="Click to select a date"
          />
        </h6>
        <Line
          data={data}
          options={options}
          onElementsClick={handleClick}
          height={100}
          ref="chartName"
        />
      </div>
    );
  }
}

export default Chart;
