export type optionProps={
    option:string,
    onPress:()=>void,
    selected:boolean,
    correct:boolean
}

export type GetQuestionPayload = {
    user:string,
    correctResponses:string
}