import { StudentData } from '@/common/components/Student';
import useStudents from '@/hooks/useStudents';
import exportFromJSON from 'export-from-json';
import React, { useEffect, useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    Stack,
    Table,
} from 'react-bootstrap';
import SeatRosterTable from './SeatRosterTable';
import SeatsUserInput from './SeatUserInput';
import './style.module.css';

const SeatBuilder: React.FC = () => {
    const [numColumns, setNumColumns] = useState<number>(0);
    const [seatingChart, setSeatingChart] = useState<StudentData[][]>([]);
    const [sortOrder, setSortOrder] = useState<'firstName' | 'lastName' | null>(
        null,
    );

    // Export seating chart data to CSV
    const exportCSV = () => {
        if (seatingChart.length < 1) {
            alert(
                'No Seating data to export. Make sure to populate the class list and generate the seating chart first.',
            );
        } else {
            const exportData = seatingChart.map((row) =>
                row.map((student) => `${student.first} ${student.last}`),
            );
            exportFromJSON({
                data: exportData,
                fileName: 'data',
                exportType: exportFromJSON.types.csv,
            });
        }
    };

    // Custom hook for managing student-related actions
    const {
        students,
        firstName,
        lastName,
        addStudent,
        deleteStudent,
        handleFileUpload,
        processCSVUpload,
        handleFirstName,
        handleLastName,
    } = useStudents();

    // Generate seating chart based on current settings
    const generateSeatingChart = () => {
        let sortedStudents = [...students];

        if (sortOrder === 'firstName') {
            sortedStudents = sortedStudents.sort((a, b) =>
                a.first.localeCompare(b.first),
            );
        } else if (sortOrder === 'lastName') {
            sortedStudents = sortedStudents.sort((a, b) =>
                a.last.localeCompare(b.last),
            );
        }

        const newSeatingChart: StudentData[][] = [];

        sortedStudents.forEach((student, index) => {
            const row = Math.floor(index / numColumns);
            if (!newSeatingChart[row]) {
                newSeatingChart[row] = [];
            }
            newSeatingChart[row].push(student);
        });

        setSeatingChart(newSeatingChart);
    };

    // Effect to regenerate seating chart when dependencies change
    useEffect(() => {
        generateSeatingChart();
    }, [numColumns, students, sortOrder]);

    // Handle sorting of students
    const handleSort = (order: 'firstName' | 'lastName') => {
        setSortOrder(order);
    };

    return (
        <Stack gap={4}>
            <Container>
                {/* Class List Section */}
                <Row>
                    <Col md="auto">
                        <h1>Class List</h1>
                    </Col>
                    <Col md="auto">
                        <Form className="d-flex align-items-end ">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="file"
                                    accept=".csv"
                                    onChange={handleFileUpload}
                                />
                                <Button
                                    variant="primary"
                                    onClick={(e) => processCSVUpload(e)}
                                >
                                    Upload CSV
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

                {/* Student Roster and Input Section */}
                <Row>
                    <SeatRosterTable
                        students={students}
                        deleteStudent={deleteStudent}
                        addStudent={addStudent}
                        firstName={firstName}
                        lastName={lastName}
                        handleFirstName={handleFirstName}
                        handleLastName={handleLastName}
                    />
                </Row>
                <Row>
                    <SeatsUserInput setNumColumns={setNumColumns} />
                </Row>
            </Container>
            <Container>
                {/* Seating Chart Section */}
                <Row>
                    <Col md="auto">
                        <h1>Seating Chart</h1>
                    </Col>
                    <Col md="auto">
                        <Stack direction="horizontal" gap={3}>
                            <Button
                                variant="secondary"
                                style={{ margin: '8px 0' }}
                                onClick={() => handleSort('firstName')}
                            >
                                Sort by First Name
                            </Button>
                            <Button
                                variant="secondary"
                                style={{ margin: '8px 0' }}
                                onClick={() => handleSort('lastName')}
                            >
                                Sort by Last Name
                            </Button>
                            <Button variant="primary" onClick={exportCSV}>
                                Export Seating Chart
                            </Button>
                        </Stack>
                    </Col>
                </Row>

                {/* Display the seating chart here */}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {seatingChart[0]?.map((_, index) => (
                                <th key={index}> Col {index + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {seatingChart.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((student) => (
                                    <td key={student.id}>
                                        {`${student.first} ${student.last}`}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Stack>
    );
};

export default SeatBuilder;
