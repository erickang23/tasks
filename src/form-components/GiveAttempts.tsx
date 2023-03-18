/* eslint-disable indent */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <Form.Group controlId="formGiveAttmpets">
                    <Form.Label>Gain How Many Attempts?:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequestAttempts(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() =>
                        parseInt(requestAttempts) > 0
                            ? setAttemptsLeft(
                                  attemptsLeft + parseInt(requestAttempts)
                              )
                            : setAttemptsLeft(attemptsLeft)
                    }
                >
                    Gain
                </Button>
                <Button
                    disabled={!(attemptsLeft > 0)}
                    onClick={() =>
                        attemptsLeft > 0
                            ? setAttemptsLeft(attemptsLeft - 1)
                            : setAttemptsLeft(attemptsLeft)
                    }
                >
                    Use
                </Button>
            </div>
            <div>Attempts Left: {attemptsLeft}</div>
        </div>
    );
}
