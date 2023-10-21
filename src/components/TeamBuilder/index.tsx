import RosterTable from '@/common/components/ClassRoster';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TeamsTable from './TeamsTable';
import TeamsUserInput from './TeamsUserInput';
import Form from 'react-bootstrap/Form';
import useStudents from '../../hooks/useStudents'

const TeamBuilder = () => {
    const { students, teams, maxPerGroup, addStudent, setMax, deleteStudent, generateTeams, handleFileUpload, processCSVUpload } = useStudents();

    return (
        <Container>
            <Row>
                <Col md="auto">
                    <h1>Class List</h1>
                </Col>
                <Col md="auto">
                <Form>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control type="file" accept=".csv" onChange={handleFileUpload}/>
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => processCSVUpload(e)}>Upload CSV</Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RosterTable students={students} deleteStudent={deleteStudent} addStudent={addStudent} />
                </Col>
                <Col>
                    <TeamsUserInput maxPerGroup={maxPerGroup} setMax={setMax} generateTeams={generateTeams} />
                </Col>
            </Row>
            <Row>
                <Col md="auto">
                    <h1>Project Groups</h1>
                </Col>
                <Col md="auto">
                    <Button variant="primary">Export Groups</Button>
                </Col>
            </Row>
            <Row>
                <TeamsTable students={students} teams={teams}/>
            </Row>
        </Container>
    );
};

export default TeamBuilder;
