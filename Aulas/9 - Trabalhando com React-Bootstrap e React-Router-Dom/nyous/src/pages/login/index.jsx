import React from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import {Container, Form, Button} from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <Menu/>
            <Container className="form-height">
                <Form style={{marginTop: "20px", height: "50vh"}}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Endereço de email</Form.Label>
                        <Form.Control type="email" placeholder="usuario@email.com" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                </Form>
            </Container>
            <Rodape/>
        </div>
    )
}

export default Login;