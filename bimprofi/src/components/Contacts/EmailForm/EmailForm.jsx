import React, { Component } from "react";
import style from './EmailForm.module.css';
import { Form, Button, Container } from "react-bootstrap";

export default class EmailForm extends Component {
  render() {
    return (
      <Container>
        <h3>Напишите нам</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control type="email" placeholder="Здесь будет email" />
            <Form.Text>Ваш email не передается третьим лицам</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Введите здесь текст вашего сообщения</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Здесь будет текст сообщения"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Container>
    );
  }
}
