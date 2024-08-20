import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EditPage from "./EditPage"
import { PiPersonSimpleThrowBold } from "react-icons/pi"
import { AnswerModalProps } from "@/Types/answersTypes"
import { useAppDispatch, useAppSelector } from "@/Types/hooksTypes"
import { useNavigate} from "react-router-dom"
import { useState } from "react"
import { getUserInfo } from "../Users/usersSlice"
import { editAnswer, getQuestions } from "../Questions/questionsSlice"

interface Props {
  answerInfo: AnswerModalProps
}
  
export const  EditModal: React.FC<Props> = ({answerInfo}) => {

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
    content: answerInfo.content
  }

   const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = {token: token!, id: answerInfo.id, a_description: text}

    try {
      await dispatch(editAnswer(data)).unwrap()
      alert("Answer Edited, Go Home, then comeback")
      navigate('/')
    } catch(err) {
      console.log(err)
    }
   }
    return (
      <Dialog>
        <DialogTrigger asChild>
        <button className='border border-indigo-400 rounded'>Edit</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-200">
          <DialogHeader>
            <DialogTitle>
                <h1>
                    Editing Answer:
                    <span className="font-serif text-sm"> Interesting. Are there other...</span>
                </h1>
            </DialogTitle>
          </DialogHeader>
          <EditPage controlProps={controlProps}/>
          <DialogFooter>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'
                        onClick={handlePost}>
                    <PiPersonSimpleThrowBold />
                    Edit Answer
                </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }