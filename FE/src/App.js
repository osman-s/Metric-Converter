import React, { Component } from "react";
import http from "./services/httpService";
import config from "./config.json";
import "./App.css";

class App extends Component {
  state = {
    unit: "1111111"
  };

  async componentDidMount() {
    // const { data: posts } = await http.get(config.apiEndpoint);
    // this.setState({ posts });
  }

  handleConvert = async e => {
    e.preventDefault();
    // var form = document.getElementById("form");
    // var num = form.elements.unitconv.value;
    // var num = form.elements.imperial.value;
    // let form = document.forms.form

    const unitOriginal = this.state.unit;
    const { data: units } = await http.post(
      config.apiEndpoint + "/api/convert/",
      form
    );

    this.setState({ unit: units });
    console.log(form);
  };

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    await http.put(config.apiEndpoint + "/" + post.id, post);
    // http.patch(config.apiEndpoint + "/" + post.id, { title: post.title });

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
      // throw new Error("");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("This post has already been deleted");
      }
      // Expected (404: not found, 400: bad request) - Client Errors
      //  - Display a specific error message
      //
      // Unexpected (network down, server down, db down, bug)
      // - Log them
      // - Display a generic and friendly error message
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="form-group">
          <form id="form" action="#">
            <label htmlFor="unitconv" name="unitconv"></label>
            <input
              type="text"
              className="form-control"
              name="unitconv"
              id=""
              placeholder="1.4mi"
            ></input>
            <select name="imperial">
              <option value="gal">gal</option>
              <option value="lbs">lbs</option>
              <option value="mi">mi</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleConvert}
            >
              Submit
            </button>
          </form>
        </div>
        <div></div>
        <h1>{this.state.unit}</h1>
      </div>
    );
  }
}

export default App;
