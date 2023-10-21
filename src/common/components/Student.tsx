import { FunctionComponent } from 'react';
import { Button, Stack } from 'react-bootstrap';

export type StudentData = {
    id: number;
    first: string;
    last: string;
    groupID: number;
};

const Student: FunctionComponent<{
    student: StudentData;
    onEditStudent: (studentID: number) => void;
    onDelete: (id: number) => void;
}> = ({ student, onDelete, onEditStudent }) => {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.first}</td>
            <td>{student.last}</td>
            <td></td>
            <td>
                <Stack direction="horizontal" gap={3}>
                    <Button
                        onClick={() => onEditStudent(student.id)}
                        variant="secondary"
                    >
                        Edit Banned Partners
                    </Button>
                    <Button
                        onClick={() => onDelete(student.id)}
                        variant="outline-danger"
                    >
                        Delete
                    </Button>
                </Stack>
            </td>
        </tr>
    );
};

export default Student;
