import RosterTable from '@/common/components/ClassRoster';
import { StudentData } from '@/common/components/Student';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TeamsTable from './TeamsTable';
import TeamsUserInput from './TeamsUserInput';

// Fake data for rendering, delete when real data is ready
export const students: StudentData[] = [
    {
        id: 0,
        first: 'John',
        last: 'Smith',
        groupID: 1,
    },
    {
        id: 1,
        first: 'John',
        last: 'Doe',
        groupID: 1,
    },
    {
        id: 2,
        first: 'Jane',
        last: 'Smith',
        groupID: 1,
    },
    {
        id: 3,
        first: 'John',
        last: 'Jingle Heimershmidt',
        groupID: 1,
    },
    {
        id: 4,
        first: 'April',
        last: 'Wang',
        groupID: 1,
    },
];

const TeamBuilder = () => {
    return (
        <Container>
            <Row>
                <Col md="auto">
                    <h1>Class Roster</h1>
                </Col>
                <Col md="auto">
                    <Button variant="primary">Import Roster</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RosterTable students={students} />
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
