import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TeamsUserInput = ({maxPerGroup, setMax, generateTeams}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="StudentsPerTeam">
                <Form.Label>Maximum Students per Group</Form.Label>
                <Form.Control defaultValue={maxPerGroup} onChange={(e) => setMax(e)} />
            </Form.Group>
            <Button onClick={generateTeams}>Generate Groups</Button>
        </Form>
    );
};

export default TeamsUserInput;
