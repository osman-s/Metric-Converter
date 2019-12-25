import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MetricConverter extends Form {
  state = {
    data: { number: "", units: ["yes", "no", "dsfdasdf"] },
    errors: {}
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
    console.log(this.state.data);
    if (units === "gal") {
      const metric = number * 3.78541;
      const mUnits = "L";
      console.log(`${metric} ${mUnits}`)
    }
  };

  render() {
      var metric = ""
      var mUnits = ""

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
        {(mUnits)? <div>{metric} {mUnits}</div>: null}
      </div>
    );
  }
}

export default MetricConverter;
