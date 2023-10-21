import RosterTable from '@/common/components/ClassRoster';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useStudents from '../../hooks/useStudents';
import TeamsUserInput from '../TeamBuilder/TeamsUserInput';

const About = () => {
    const {
        students,
        teams,
        maxPerGroup,
        addStudent,
        setMax,
        deleteStudent,
        generateTeams,
        handleFileUpload,
        processCSVUpload,
    } = useStudents();

    return (
        <Container>
            <Row>
                <Col md="auto">
                    <h1>Class List</h1>
                </Col>
                <Col md="auto">
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="file"
                            accept=".csv"
                            onChange={handleFileUpload}
                        />
                        <Button
                            variant="outline-primary"
                            onClick={(e) => processCSVUpload(e)}
                        >
                            Upload CSV
                        </Button>
                    </InputGroup>
                    {/* <Form>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control type="file" accept=".csv" onChange={handleFileUpload}/>
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => processCSVUpload(e)}>Upload CSV</Button>
                </Form> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <RosterTable
                        students={students}
                        deleteStudent={deleteStudent}
                        addStudent={addStudent}
                    />
                </Col>
                <Col>
                    <TeamsUserInput
                        maxPerGroup={maxPerGroup}
                        setMax={setMax}
                        generateTeams={generateTeams}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
