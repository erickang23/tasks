import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorIndex {
    colorIndex: number;
    setColorIndex: (newCIndex: number) => void;
}

function ChangeColor({ colorIndex, setColorIndex }: colorIndex): JSX.Element {
    return (
        <Button
            onClick={() =>
                colorIndex < COLORS.length - 1
                    ? setColorIndex(colorIndex + 1)
                    : setColorIndex(DEFAULT_COLOR_INDEX)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorIndex): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
