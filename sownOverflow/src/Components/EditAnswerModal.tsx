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
  
  const  EditAnswerModal = () => {
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
                    <span className="font-serif text-sm"> Interesting. Are there other...</span>
                </h1>
            </DialogTitle>
          </DialogHeader>
          <EditPage editValue="Interesting. Are there other things you'll like to explore? I forgot to add the name of the foundation."/>
          <DialogFooter>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'>
                    <PiPersonSimpleThrowBold />
                    Edit Question
                </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default EditAnswerModal