interface User {
    username: string,
    level: string
}

export interface Question {
    id: number,
    title: string,
    content: string,
    dateAsked: string,
    user: User
}

export interface Questions {
    questions: Question[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}