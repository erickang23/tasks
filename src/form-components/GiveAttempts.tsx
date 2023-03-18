import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);

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
                        ) =>
                            setRequestAttempts(
                                parseInt(event.target.value) || attemptsLeft
                            )
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + requestAttempts)
                    }
                >
                    Gain
                </Button>
                <Button onClick={() => setAttemptsLeft(attemptsLeft - 1)}>
                    Use
                </Button>
            </div>
            <div>Attempts Left: {attemptsLeft}</div>
        </div>
    );
}
