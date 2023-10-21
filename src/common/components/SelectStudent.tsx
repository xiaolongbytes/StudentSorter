import { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';
import { StudentData } from './Student';

const SelectStudent: FunctionComponent<{
    student: StudentData;
}> = ({ student }) => {
    return (
        <tr>
            <td>
                <Form.Check aria-label="select student" />
            </td>
            <td>{student.first}</td>
            <td>{student.last}</td>
        </tr>
    );
};

export default SelectStudent;
