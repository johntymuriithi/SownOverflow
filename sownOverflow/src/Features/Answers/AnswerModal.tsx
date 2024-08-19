import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PiPersonSimpleThrowBold } from "react-icons/pi"
import AnswerPage from "./AnswerPage"
import React, { useState } from 'react'
import { AnswerModalProps } from "@/Types/answersTypes"
import { useAppDispatch, useAppSelector } from "@/Types/hooksTypes"
import { getUserInfo } from "../Users/usersSlice"
import { postAnswer } from "../Questions/questionsSlice"
import { useNavigate } from "react-router-dom"
  

interface Props {
  questionInfo: AnswerModalProps
}
  const  AnswerModal: React.FC<Props> = (questionInfo) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userInfo = useAppSelector(getUserInfo)
    const token = userInfo.user?.token
    const [value, setValue] = useState<string>("")
    const [text, setText] = useState<string>("")
    console.log(text)

   const controlProps = {
    value: { value: value, setValue: setValue},
    text: {text: text, setText: setText},
  }

   const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = {token: token!, q_id: questionInfo.questionInfo.id, a_description: text, a_date: "1 day Ago"}

    try {
      await dispatch(postAnswer(data)).unwrap()
      alert("Answer Submitted, Go Home and Refresh, then comeback")
      navigate('/')
    } catch(err) {
      console.log(err)
    }
   }
    return (
      <Dialog>
        <DialogTrigger asChild>
        <button className='border border-indigo-400 rounded md:p-2 px-1'>Answer</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-200">
          <DialogHeader>
            <DialogTitle>
                <h1>
                    Answering Question:
                    <span className="font-serif text-sm">  {questionInfo.questionInfo.content}</span>
                </h1>
            </DialogTitle>
          </DialogHeader>
          <AnswerPage controlProps={controlProps}/>
          <DialogFooter>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'
                        onClick={handlePost}>
                    <PiPersonSimpleThrowBold />
                    Post Answer
                </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default AnswerModal