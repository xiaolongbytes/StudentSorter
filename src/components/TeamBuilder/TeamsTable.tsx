import { StudentData } from '@/common/components/Student';
import Team, { TeamData } from '@/common/components/Team';
import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';

const teams: TeamData[] = [
    { id: 0, studentIDs: [0, 1] },
    { id: 1, studentIDs: [2, 3] },
];

const TeamsTable: FunctionComponent<{
    students: StudentData[];
}> = ({ students }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Team #</th>
                    <th>Team Members</th>
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
