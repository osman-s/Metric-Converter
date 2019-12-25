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
    console.log(this.state.data);
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.username, data.password);

    //   const { state } = this.props.location;
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
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
      </div>
    );
  }
}

export default MetricConverter;
