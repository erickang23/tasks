/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(6);
    //const [win, setWin] = useState<string>("");
    /*
    function rollLeft(): void {
        setD1(d6());
        setWin(d1 === d2 ? (d1 !== 1 ? "Win" : "Lose") : "");
    }

    function rollRight(): void {
        setD2(d6());
        setWin(d1 === d2 ? (d1 !== 1 ? "Win" : "Lose") : "");
    }
*/
    return (
        <div>
            <div>
                <Button onClick={() => setD1(d6())}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => setD2(d6())}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">Left Die:{d1}</span>
                <span data-testid="right-die"> Right Die:{d2}</span>
            </div>
            <div>
                {d1 === d2 ? (
                    d1 !== 1 ? (
                        <span>Win</span>
                    ) : (
                        <span>Lose</span>
                    )
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
