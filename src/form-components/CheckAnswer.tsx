import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateGiven(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
                <Form.Group controlId="formCheckAns">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={givenAnswer} onChange={updateGiven} />
                </Form.Group>
            </div>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
