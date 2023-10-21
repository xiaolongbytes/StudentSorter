import { useState } from 'react'
import * as d3 from "d3"
import defaultStudents from '../../data/defaultStudents';
import { StudentData } from '@/common/components/Student';
import { TeamData } from '@/common/components/Team';


const useStudents = () => {
    
    const [file, setFile] = useState();
    const [students, setStudents] = useState(defaultStudents);
    const defaultTeam: TeamData[] = []
    const [teams, setTeams] = useState(defaultTeam);
    const [maxPerGroup, setMaxPerGroup] = useState(3);

    if (typeof window !== "undefined") {
        var fileReader = new window.FileReader()
    }

    const handleFileUpload = e  => {
        setFile(e.target.files[0]);
    }
    
    const processCSVUpload = e => {
        e.preventDefault();
    
        if (file) {
            fileReader.onload = function (event) {
                if (!event.target) return
                const text = event.target.result;
                const csvData = d3.csvParse(text);
    
                const students: StudentData[] = csvData
                setStudents(students)
            };
    
            fileReader.readAsText(file);
        }
    }

    const mapStudents = students => {
        const newStudents = students.map((student, i) => {
            return {
                id: i,
                first: student.first,
                last: student.last,
                groupID: student.groupID
            } 
        })
        return newStudents
    }

    const addStudent = () => {
        const first = prompt("Enter first name")
        const last = prompt("Enter first name")
        const add = confirm("Add student?")

        if (add) {
            let maxID = students[students.length - 1].id
            const newStudents = JSON.parse(JSON.stringify(students));
            newStudents.push({id: maxID + 1, first: first, last: last, teamID: 1})
            setStudents(newStudents)
        }

    }

    const deleteStudent = id => {
        let newStudents = students.filter(student => student.id !== id)
        newStudents = mapStudents(newStudents)
        setStudents(newStudents)
    }

    const setMax = e => {
        e.preventDefault()
        setMaxPerGroup(e.target.value);
    }

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    const shuffleArray = array => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const generateTeams = () => {
        let studentsToAdd = JSON.parse(JSON.stringify(students));
        shuffleArray(studentsToAdd)
        let teamID = 0
        const newTeams: { id: number, studentIDs: number[] }[]  = [{id: 0, studentIDs: []}]
        
        studentsToAdd.forEach(student => {
            if (newTeams[teamID].studentIDs.length >= maxPerGroup){
                teamID += 1
                newTeams.push({id: teamID, studentIDs: []})
            }
            newTeams[teamID].studentIDs.push(student.id)
        })
        setTeams(newTeams)
    }

    return {students, teams, maxPerGroup, addStudent, setMax, deleteStudent, generateTeams, handleFileUpload, processCSVUpload}
}

export default useStudents

