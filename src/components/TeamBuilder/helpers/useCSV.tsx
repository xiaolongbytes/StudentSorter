import { useState } from 'react'
import * as d3 from "d3"
import defaultStudents from './defaultStudents';
import { StudentData } from '@/common/components/Student';


const useCSV = () => {
    const [file, setFile] = useState();
    const [students, setStudents] = useState(defaultStudents);

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

    return {students, handleFileUpload, processCSVUpload}
}

export default useCSV
