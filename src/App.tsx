import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import picture from "./DSC01830.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript-Eric Kang Hello World
            </header>
            <h1>New Header Text</h1>
            <img src={picture} alt="Picture didn't load." />
            <br></br>
            List:
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                height: "100%",
                                width: "30%",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        Second Column
                        <div
                            style={{
                                height: "80%",
                                width: "50%",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
