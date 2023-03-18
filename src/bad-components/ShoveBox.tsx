import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { NumberLiteralType } from "typescript";

interface box {
    position: number;
    setPosition: (newPos: number) => void;
}

function ShoveBoxButton({ position, setPosition }: box) {
    return (
        <div>
            (
            <Button
                onClick={() => {
                    setPosition(4 + position);
                }}
            >
                Shove the Box
            </Button>
            )
        </div>
    );
}

function MoveableBox({ position }: box): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "${position}px",
                height: "${position}px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox
                    position={position}
                    setPosition={setPosition}
                ></MoveableBox>
            </div>
        </div>
    );
}
