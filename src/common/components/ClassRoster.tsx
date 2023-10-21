import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import BannedPartnerModal from './BannedPartnerModal';
import Student, { StudentData } from './Student';

const ClassRoster: FunctionComponent<{
    students: StudentData[];
    deleteStudent: (id) => void;
    addStudent: () => void;
}> = ({ students, deleteStudent, addStudent }) => {
    const [currentlyEditedStudentID, setCurrentlyEditedStudentID] = useState<
        number | null
    >(null);
    const onSave = useCallback(
        (studentIDs: number[]) => {
            console.log(
                'save the student pairings',
                studentIDs,
                currentlyEditedStudentID,
            );
            setCurrentlyEditedStudentID(null);
        },
        [currentlyEditedStudentID],
    );
    const onCancel = useCallback(() => {
        setCurrentlyEditedStudentID(null);
    }, []);
    const currentlyEditedStudent = useMemo(() => {
        return students.find(
            (student) => student.id === currentlyEditedStudentID,
        );
    }, [currentlyEditedStudentID]);
    return (
        <>
            {currentlyEditedStudent !== undefined && (
                <BannedPartnerModal
                    currentlyEditedStudent={
                        currentlyEditedStudent as StudentData
                    }
                    students={students}
                    isOpen={currentlyEditedStudentID !== null}
                    onCancel={onCancel}
                    onSave={onSave}
                />
            )}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Banned Partners</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>Jane Smith, Smith Jones</td>
                        <td>(Example)</td>
                    </tr>
                    {students.map((student, index) => (
                        <Student
                            key={index}
                            student={student}
                            onEditStudent={(studentID: number) => {
                                setCurrentlyEditedStudentID(studentID);
                            }}
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
                            />
                        </td>
                        <td>
                            <Form.Control type="text" placeholder="Last Name" />
                        </td>
                        <td>
                            Add Banned Partners with the <br /> "Edit" button
                            after adding student
                        </td>
                        <td>
                            <Button variant="primary" onClick={addStudent}>
                                Add Student
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default ClassRoster;
