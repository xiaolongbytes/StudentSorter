import { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { StudentData } from './Student';
import useStudents from '../../hooks/useStudents';

const SelectStudent: FunctionComponent<{
    student: StudentData;
    currentlyEditedStudent: StudentData;
}> = ({ student, currentlyEditedStudent }) => {
    const {
        handleBannedToggle
    } = useStudents();

    return (
        <tr>
            <td>
                <Form.Check checked={currentlyEditedStudent.bannedList.includes(student.id)} aria-label="select student" onChange={(e) => handleBannedToggle(e, currentlyEditedStudent, student)} />
            </td>
            <td>{student.first}</td>
            <td>{student.last}</td>
        </tr>
    );
};

export default SelectStudent;
