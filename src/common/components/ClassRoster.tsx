import { FunctionComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Student, { StudentData } from './Student';

const ClassRoster: FunctionComponent<{
    students: StudentData[];
    deleteStudent: (id) => void;
}> = ({ students, deleteStudent }) => {
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
                {students.map((student, index) => (
                    <Student
                        key={index}
                        student={student}
                        onDelete={(id: number) => {
                            deleteStudent(id)
                        }}
                    />
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Button variant="primary">Add Student</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default ClassRoster;
