import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProg, setInProg] = useState<boolean>(false);

    function startQuiz(): void {
        setInProg(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={() => startQuiz()}
                    disabled={attempts === 0 || inProg}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setInProg(false)} disabled={!inProg}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={inProg}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                {inProg ? (
                    <span>Quiz is in progress</span>
                ) : (
                    <span>Quiz is not in progress</span>
                )}
            </div>
            <div>
                <span>Attempts: {attempts}</span>
            </div>
        </div>
    );
}
