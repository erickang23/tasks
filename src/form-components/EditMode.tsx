import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isInEdit, setIsInEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    inline
                    type="switch"
                    id="is-edit-check"
                    label="Toggle Edit Mode"
                    checked={isInEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setIsInEdit(event.target.checked)
                    }
                />
            </div>
            <div>
                <Form.Group controlId="formStudentName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        hidden={!isInEdit}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Check
                    inline
                    type="checkbox"
                    id="is-student-check"
                    label="Toggle Student Status"
                    hidden={!isInEdit}
                    checked={isStudent}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setIsStudent(e.target.checked)
                    }
                />
            </div>
            <div>
                {isInEdit
                    ? ""
                    : name + (isStudent ? " is" : " is not") + " a student."}
            </div>
        </div>
    );
}
