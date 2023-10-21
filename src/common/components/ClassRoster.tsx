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
    firstName: string;
    lastName: string;
    handleFirstName: (e) => void;
    handleLastName: (e) => void;
}> = ({ students, deleteStudent, addStudent, firstName, lastName, handleFirstName, handleLastName}) => {
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
                    students={students.filter(student => student.id !== currentlyEditedStudent.id)}
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
                    </tr>
                </thead>
                <tbody>
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
                                value={firstName}
                                onChange={handleFirstName}
                            />
                        </td>
                        <td>
                            <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={handleLastName} />
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
