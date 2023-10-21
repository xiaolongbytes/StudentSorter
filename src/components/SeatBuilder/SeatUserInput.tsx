import React from 'react';
import Form from 'react-bootstrap/Form';

interface SeatsUserInputProps {
    setNumColumns: React.Dispatch<React.SetStateAction<number>>;
}

const SeatsUserInput: React.FC<SeatsUserInputProps> = ({ setNumColumns }) => {
    return (
        <Form.Group>
            <Form.Label>Number of Columns:</Form.Label>
            <Form.Control
                type="number"
                onChange={(e) => setNumColumns(parseInt(e.target.value, 10))}
            />
        </Form.Group>
    );
};

export default SeatsUserInput;
