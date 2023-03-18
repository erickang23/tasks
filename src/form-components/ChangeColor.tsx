import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "magenta"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <div>
                <h3>Change Color</h3>
                {COLORS.map((c: string) => (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        name="ChangeColor"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setColor(e.target.value)
                        }
                        id={"color-check-" + c}
                        label={c}
                        value={c}
                        checked={color === c}
                    />
                ))}
            </div>
            <div>
                {"You have chosen "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
