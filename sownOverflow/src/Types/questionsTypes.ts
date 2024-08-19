interface User {
    id: number,
    username: string,
    level: string
}
interface Answer {
    id: number,
    content: string,
    votes: number,
    dataAnswered: string,
    user: User
}
export interface AnswerProps {
    answers: Answer[]
}

export interface Question {
    id: number,
    title: string,
    content: string,
    dateAsked: string,
    user: User,
    answers: Answer[]
    votes: number
}

export interface Questions {
    questions: Question[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    qStatus?: boolean | null
}

export interface AnswerPost {
    token: string
    category_id: number,
    q_title: string,
    q_description: string,
    q_date: string
}

interface Value {
    value1: string,
    setValue1: React.Dispatch<React.SetStateAction<string>>;
}
export interface ControlProps1 {
    value: Value
}

export interface QuestionModalProps {
    id: number,
    content: string
}

export interface EditQuestion {
    token: string
    id: number,
    q_description: string,
}