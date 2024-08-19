export interface Answer {
    token: string
    q_id: number,
    a_description: string,
    a_date: string
}

export interface EditAnswer {
    token: string
    id: number,
    a_description: string,
}

export interface DeleteAnswer {
    token: string
    id: number,
}

export interface AnswerModalProps {
    id: number,
    content: string
}

interface Value {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
interface Text {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>;
}
export interface ControlProps {
    value: Value
    text: Text,
    content?: string
    // onEditorInputChange: (newValue: string, editor: any) => void
}