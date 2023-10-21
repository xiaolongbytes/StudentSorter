import RosterTable from '@/common/components/ClassRoster';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TeamsTable from './TeamsTable';
import TeamsUserInput from './TeamsUserInput';
import Form from 'react-bootstrap/Form';
import useStudents from './helpers/useStudents'

const TeamBuilder = () => {
    const { students, deleteStudent, handleFileUpload, processCSVUpload } = useStudents();
    return (
        <Container>
            <Row>
                <Col md="auto">
                    <h1>Class Roster</h1>
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
                    <RosterTable students={students} deleteStudent={deleteStudent} />
                </Col>
                <Col>
                    <TeamsUserInput />
                </Col>
            </Row>
            <Row>
                <Col md="auto">
                    <h1>Project Teams</h1>
                </Col>
                <Col md="auto">
                    <Button variant="primary">Export Teams</Button>
                </Col>
            </Row>
            <Row>
                <TeamsTable students={students} />
            </Row>
        </Container>
    );
};

export default TeamBuilder;
