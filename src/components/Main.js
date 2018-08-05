import React, { Component } from "react";
import { withRouter } from "react-router";
import Form from "react-jsonschema-form";
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {}
    }
  }

  async fetchSchema(schema) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SCHEMA_URL}/${schema}.json`,
        { method: "get" }
      );
      const json = await response.json();
      this.setState({
        schema: json
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentWillMount() {
      this.fetchSchema('form1');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.fetchSchema(nextProps.location.pathname);
    }
  }

  render() {
    const { schema } = this.state;
    const { pathname } = this.props.location;

    return (
      <div>
        <Link style={{display: 'inline-block',margin: 10}} to={'/'}> Home </Link>
        <Link style={{display: 'inline-block',margin: 10}} to={'/form1'}> Form 1 </Link>
        <Link style={{display: 'inline-block',margin: 10}} to={'/form2'}> Form 2 </Link>
      <div className="m-5">
        { (pathname === "/") ?
          <h2>Home: Seleccione un form del menu</h2>
          :
          <Form schema={schema} />
        }
      </div>
      </div>
    );
  }
}

export default withRouter(Main);
