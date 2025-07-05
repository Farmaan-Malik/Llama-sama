import { useState } from "react"

const useOptions = () => {
 const classData :number[]=[1,2,3,4,5,6,7,8]
 const subjectData:string[]= ['History','Civics','Geography','English','Physics','Chemistry','Biology']

 const [selectedClass,setSelectedClass]= useState<number | null>(null)
 const [selectedSubject,setSelectedSubject]= useState<string | null>(null)
 return{
    classData,
    subjectData,
    selectedClass,
    setSelectedClass,
    selectedSubject,
    setSelectedSubject
 }
}

export default useOptions