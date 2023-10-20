import { FunctionComponent } from 'react';
import { StudentData } from './Student';

export type TeamData = {
    id: number;
    studentIDs: number[]; // You can find the student via the StudentData
};

const Team: FunctionComponent<{
    team: TeamData;
    students: StudentData[];
}> = ({ team, students }) => {
    const studentsInTeam = students.filter((student) =>
        team.studentIDs.includes(student.id),
    );

    return (
        <tr>
            <td>{team.id}</td>
            <td>
                <ul>
                    {studentsInTeam.map((student) => (
                        <li>
                            {student.first} {student.last}
                        </li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

export default Team;
