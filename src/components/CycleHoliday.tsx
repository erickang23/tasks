import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🐲" | "🍔" | "🇺🇸" | "🎃" | "🎄";

const cycleAlpha: Record<Holiday, Holiday> = {
    "🇺🇸": "🐲",
    "🐲": "🎄",
    "🎄": "🎃",
    "🎃": "🍔",
    "🍔": "🇺🇸"
};

const cycleDate: Record<Holiday, Holiday> = {
    "🐲": "🍔",
    "🍔": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🎄",
    "🎄": "🐲"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐲");

    function cycleA(): void {
        const newHoli = cycleAlpha[holiday];
        setHoliday(newHoli);
    }
    function cycleD(): void {
        const newHoli = cycleDate[holiday];
        setHoliday(newHoli);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={() => cycleA()}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={() => cycleD()}>Advance by Year</Button>
            </div>
        </div>
    );
}
