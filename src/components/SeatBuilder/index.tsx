import RosterTable from '@/common/components/ClassRoster';
import useStudents from '../../hooks/useStudents'
import { StudentData } from '@/common/components/Student';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SeatsUserInput from './SeatUserInput';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './style.module.css'

// // Fake data for rendering, delete when real data is ready
// export const students: StudentData[] = [
//     {
//         id: 0,
//         first: 'John',
//         last: 'Smith',
//         groupID: 1,
//     },
//     {
//         id: 1,
//         first: 'John',
//         last: 'Doe',
//         groupID: 1,
//     },
//     {
//         id: 2,
//         first: 'Jane',
//         last: 'Smith',
//         groupID: 1,
//     },
//     {
//         id: 3,
//         first: 'John',
//         last: 'Jingle Heimershmidt',
//         groupID: 1,
//     },
//     {
//         id: 4,
//         first: 'April',
//         last: 'Wang',
//         groupID: 1,
//     },
//     {
//         id: 5,
//         first: 'Jane',
//         last: 'Smith',
//         groupID: 1,
//     },
//     {
//         id: 6,
//         first: 'John',
//         last: 'Jingle Heimershmidt',
//         groupID: 1,
//     },
//     {
//         id: 7,
//         first: 'April',
//         last: 'Wang',
//         groupID: 1,
//     },
//     {
//         id: 8,
//         first: 'Jane',
//         last: 'Smith',
//         groupID: 1,
//     },
//     {
//         id: 9,
//         first: 'John',
//         last: 'Jingle Heimershmidt',
//         groupID: 1,
//     },
//     {
//         id: 10,
//         first: 'April',
//         last: 'Wang',
//         groupID: 1,
//     },
// ];


const SeatBuilder: React.FC = () => {
    const [numColumns, setNumColumns] = useState<number>(0);
    const [seatingChart, setSeatingChart] = useState<StudentData[][]>([]);
    const { students, addStudent, deleteStudent, handleFileUpload, processCSVUpload } = useStudents();
  
    const generateSeatingChart = () => {
      const newSeatingChart: StudentData[][] = [];
  
      students.forEach((student, index) => {
        const row = Math.floor(index / numColumns); 
        if (!newSeatingChart[row]) {
          newSeatingChart[row] = [];
        }
        newSeatingChart[row].push(student);
      });
  
      setSeatingChart(newSeatingChart);
    };
  
    useEffect(() => {
      generateSeatingChart();
    }, [numColumns, students]);
  
    return (
      <Container>
        <Row>
          <Col md="auto">
            <h1>Class List</h1>
          </Col>
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control type="file" accept=".csv" onChange={handleFileUpload} />
            </Form.Group>
            <Button variant="primary" onClick={(e) => processCSVUpload(e)}>Upload CSV</Button>
          </Form>
        </Row>
        <Row>
          <Col>
            {/* Assuming RosterTable is a valid component */}
            <RosterTable students={students} deleteStudent={deleteStudent} addStudent={addStudent} />
          </Col>
          <Col>
            {/* Assuming SeatsUserInput is a valid component */}
            <SeatsUserInput setNumColumns={setNumColumns} />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <h1>Seating Chart</h1>
          </Col>
          <Col md="auto">
            <Button variant="primary">Export Seating Chart</Button>
          </Col>
        </Row>
        {/* Display the seating chart here */}
        <Table striped bordered hover size="sm">
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
    );
  };
  
  export default SeatBuilder;