export interface User {
    username: string,
    email: string,
    id: number,
    token: string,
}

export interface Logins {
    email: string,
    password: string
}

export interface SignUp {
    email: string,
    username: string,
    password: string
    level: string
}


interface LoginFormFields extends HTMLFormControlsCollection {
    emailLogin: HTMLInputElement,
    passWord: HTMLInputElement
}

export interface LoginFormElements extends HTMLFormElement {
    readonly elements: LoginFormFields
}

interface SignUpFormFields extends HTMLFormControlsCollection {
    emailSignup: HTMLInputElement,
    username: HTMLInputElement,
    confirmPassword: HTMLInputElement,
    formRadio: HTMLInputElement

}

export interface SignUpFormElements extends HTMLFormElement {
    readonly elements: SignUpFormFields
}