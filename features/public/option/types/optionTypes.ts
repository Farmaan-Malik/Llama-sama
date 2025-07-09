import { Dispatch, SetStateAction } from "react"

export type UseOptions = {
    classData:number[],
    subjectData: string[],
    selectedClass:number|null,
    setSelectedClass:Dispatch<SetStateAction<number|null>>,
    selectedSubject:string|null,
    setSelectedSubject:Dispatch<SetStateAction<string|null>>,
    handleSubmit:()=>void
    isPending: boolean
}

export type gradeOptionProps={
    standard:number,
    onPress:()=>void,
    selected:boolean
}
export type rectOptionProps={
    subject:string,
    onPress:()=>void,
    selected:boolean
}
export type goButtonProps={
    onPress:()=>void,
}

export type InitialPromptPayload={
    user:string,
    standard:string,
    subject:string
}