import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PiPersonSimpleThrowBold } from "react-icons/pi"
import { QuestionModalProps } from "@/Types/questionsTypes"
import EditAnswerPage from "./EditAnswerPage"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/Types/hooksTypes"
import { getUserInfo } from "../Users/usersSlice"
import { useNavigate } from "react-router-dom"
import { editQuestion, getQuestions } from "./questionsSlice"

interface Props {
  questionInfo: QuestionModalProps
}
  const  EditAnswerModal: React.FC<Props> = ({questionInfo}) => {
    const content = questionInfo.content
    const id = questionInfo.id

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userInfo = useAppSelector(getUserInfo)
    const token = userInfo.user?.token
    const [value, setValue] = useState<string>("")
    const [text, setText] = useState<string>("")

   const controlProps = {
    value: { value: value, setValue: setValue},
    text: {text: text, setText: setText},
    content: content
  }

   const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = {token: token!, id: id, q_description: text}

    try {
      await dispatch(editQuestion(data)).unwrap()
      alert("Question Edited, Go Home, then comeback")
      navigate('/')
    } catch(err) {
      console.log(err)
    }
   }

    return (
      <Dialog>
        <DialogTrigger asChild>
        <button className='border border-indigo-400 rounded md:p-2 px-1'>Edit Question</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-200">
          <DialogHeader>
            <DialogTitle>
                <h1>
                    Editing Question:
                    <span className="font-serif text-sm">{content.substring(0, 40)}</span>
                </h1>
            </DialogTitle>
          </DialogHeader>
          <EditAnswerPage controlProps={controlProps}/>
          <DialogFooter>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'
                        onClick={handlePost}>
                    <PiPersonSimpleThrowBold />
                    Edit Question
                </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default EditAnswerModal