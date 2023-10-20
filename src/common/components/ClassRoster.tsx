import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';
import Student, { StudentData } from './Student';

const ClassRoster: FunctionComponent<{
    students: StudentData[];
}> = ({ students }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <Student
                        student={student}
                        onDelete={(id: number) => {
                            console.log('We should delete student', id);
                        }}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default ClassRoster;
