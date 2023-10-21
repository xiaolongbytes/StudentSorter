import { StudentData } from '@/common/components/Student';
import Team, { TeamData } from '@/common/components/Team';
import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';

const TeamsTable: FunctionComponent<{
    students: StudentData[];
    teams: TeamData[];
}> = ({ students, teams }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Group #</th>
                    <th>Group Members</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, index) => (
                    <Team key={index} team={team} students={students} />
                ))}
            </tbody>
        </Table>
    );
};

export default TeamsTable;
