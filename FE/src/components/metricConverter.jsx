import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MetricConverter extends Form {
  state = {
    data: { number: "", units: "" },
    errors: {},
    converted: { metric: "", units: "" }
  };

  schema = {
    number: Joi.number()
      .required()
      .label("Number"),
    units: Joi.string()
      .required()
      .label("Units")
  };

  doSubmit = async () => {
    const { units, number } = this.state.data;

    if (units === "gal") {
      const metric = Math.round(100 * (number * 3.78541)) / 100;
      const mUnits = "L";
      const sconv = { metric: metric, units: mUnits };
      this.setState({ converted: sconv });
    }
    if (units === "lbs") {
      const metric = Math.round(100 * (number * 0.453592)) / 100;
      const mUnits = "kg";
      const sconv = { metric: metric, units: mUnits };
      this.setState({ converted: sconv });
    }
    if (units === "mi") {
      const metric = Math.round(100 * (number * 1.60934)) / 100;
      const mUnits = "km";
      const sconv = { metric: metric, units: mUnits };
      this.setState({ converted: sconv });
    }
  };

  render() {
    const { metric, units } = this.state.converted;

    return (
      <div>
        <h1>Metric-Imperial Converter</h1>
        <form onSubmit={this.handleSubmit} className="center-text">
          {this.renderInput("number", "", "Type number here")}
          {this.renderSelect("units", "Units", [
            { _id: "gal", name: "gal" },
            { _id: "lbs", name: "lbs" },
            { _id: "mi", name: "mi" }
          ])}
          {this.renderButton("Convert")}
        </form>
        {metric && <div className="display-conv">{`${metric} ${units}`}</div>}
      </div>
    );
  }
}

export default MetricConverter;
