import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SeatsUserInput = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="SeatRows">
                <Form.Label>Rows of Seats</Form.Label>
                <Form.Control placeholder="4" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="SeatColumns">
                <Form.Label>Columns of Seats</Form.Label>
                <Form.Control placeholder="5" />
            </Form.Group>
            <Button>Generate Seating Chart</Button>
        </Form>
    );
};

export default SeatsUserInput;
