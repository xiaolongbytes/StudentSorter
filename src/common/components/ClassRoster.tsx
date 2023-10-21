import { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Student, { StudentData } from './Student';

const ClassRoster: FunctionComponent<{
    students: StudentData[];
    deleteStudent: (id) => void;
    addStudent: () => void;
}> = ({ students, deleteStudent, addStudent }) => {
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
                            deleteStudent(id);
                        }}
                    />
                ))}
                <tr>
                    <td></td>
                    <td>
                        <Form.Control type="text" placeholder="First Name" />
                    </td>
                    <td>
                        <Form.Control type="text" placeholder="Last Name" />
                    </td>
                    <td>
                        <Button variant="primary" onClick={addStudent}>
                            Add Student
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default ClassRoster;
