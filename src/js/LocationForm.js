import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class LocationForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Type in a city!</Form.Label>
            <Form.Control
              onChange={this.props.handleChange}
              type="default"
              placeholder="city"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>
      </>
    );
  }
}
