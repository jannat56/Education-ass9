import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
      
        <div className="container bg-dark mt-4">
          <h3 className="mt-4 p-4">Contact Us</h3>
          <Form className="container p-4">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
     Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Course
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="course name" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className="btn btn-warning " type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
        </div>
    );
};

export default Contact;