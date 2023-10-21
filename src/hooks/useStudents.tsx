import { useState } from 'react'
import * as d3 from "d3"
import defaultStudents from '../../data/defaultStudents';
import { StudentData } from '@/common/components/Student';
import { TeamData } from '@/common/components/Team';
import exportFromJSON from 'export-from-json'


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

                if (!csvData[0].hasOwnProperty('first') || !csvData[0].hasOwnProperty('last')){
                    alert("Incorrect CSV format. Make sure the file has a column of first names called \"first\" and last names called \"last\"")
                }

                else {
                    const students: StudentData[] = csvData.map((student, i) => ({id: i, first: student.first, last: student.last, groupID: 0}))
                    setStudents(students)
                }
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
            let maxID = students.length > 0 ? students[students.length - 1].id : -1
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
        var newStudents = JSON.parse(JSON.stringify(students));
        for (let i = 0; i < newTeams.length; i++) {
            for (let j = 0; j < newTeams[i].studentIDs.length; j++) {
                newStudents = newStudents.map(student => student.id !== newTeams[i].studentIDs[j] ? student : {...student, groupID: i} )
            }
        }
        setTeams(newTeams)
        setStudents(newStudents)
    }

    const exportCSV = () => {
        const data = JSON.parse(JSON.stringify(students));
        if (data.length < 1){
            alert("No team data to export. Make sure to populate the class list and generate the teams first.")
        }

        else {
            var exportData: { groupID: number, first: string, last: string }[]  = []
            exportData = data.map(student => ({groupID: student.groupID, first: student.first, last: student.last}))
            exportData = exportData.sort((a, b) => a.groupID - b.groupID);  
            exportFromJSON({ data: exportData, fileName: 'data', exportType: exportFromJSON.types.csv })
        }
    }

    return {students, teams, maxPerGroup, exportCSV, addStudent, setMax, deleteStudent, generateTeams, handleFileUpload, processCSVUpload}
}

export default useStudents

