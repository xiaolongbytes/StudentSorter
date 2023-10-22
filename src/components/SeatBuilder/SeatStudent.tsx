import { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
export type StudentData = {
    id: number;
    first: string;
    last: string;
    groupID: number;
};

const SeatStudent: FunctionComponent<{
    student: StudentData;

    onDelete: (id: number) => void;
}> = ({ student, onDelete }) => {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.first}</td>
            <td>{student.last}</td>
            <td>
                <Button
                    onClick={() => onDelete(student.id)}
                    variant="outline-danger"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
};
export default SeatStudent;
