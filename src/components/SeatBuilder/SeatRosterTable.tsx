import { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import SeatStudent, { StudentData } from './SeatStudent';

const SeatRosterTable: FunctionComponent<{
    students: StudentData[];
    deleteStudent: (id) => void;
    addStudent: () => void;
    firstName: string;
    lastName: string;
    handleFirstName: (e) => void;
    handleLastName: (e) => void;
}> = ({
    students,
    deleteStudent,
    addStudent,
    firstName,
    lastName,
    handleFirstName,
    handleLastName,
}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <SeatStudent
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
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleLastName}
                        />
                    </td>
                    <td>
                        <Button variant="outline-primary" onClick={addStudent}>
                            Add Student
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SeatRosterTable;
