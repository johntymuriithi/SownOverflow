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
}

export interface Questions {
    questions: Question[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}