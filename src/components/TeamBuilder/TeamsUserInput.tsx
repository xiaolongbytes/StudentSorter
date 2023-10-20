import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TeamsUserInput = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="StudentsPerTeam">
                <Form.Label>Minimum Students per Team</Form.Label>
                <Form.Control placeholder="4" />
            </Form.Group>
            <Button>Generate Teams</Button>
        </Form>
    );
};

export default TeamsUserInput;
