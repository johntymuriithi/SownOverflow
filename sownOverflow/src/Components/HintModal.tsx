import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const  HintModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className='bg-inherit px-1  rounded-lg text-indigo-800 font-semibold border border-indigo-800 hover:bg-indigo-300 mx-2'
    >Hint Me</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-200">
        <DialogHeader>
          <DialogTitle>Hint</DialogTitle>
        </DialogHeader>
        <div className='p-4 rounded-lg'>
                <div className='mb-3'>
                    <h1 className='font-bold font-sans'>Writing a good question</h1>
                    <h3 className='mt-3 font-serif'>
                        You’re ready to <span className='text-green-600'>ask</span> a <span className='text-green-600'>farming-related question</span> and this
                        form will help guide you through the process.
                    </h3>
                </div>
                <div>
                    <h1 className='font-medium'>Steps:</h1>
                    <ol className='list-disc mx-8 font-serif'>
                        <li>Summarize your problem in a one-line title.</li>
                        <li>Add <span className='text-green-600'>"category"</span>which help surface your question to members of the community.</li>
                        <li>Describe your problem in more detail.</li>
                        <li>Review your question and post it to the site.</li>
                    </ol>
                </div>
            </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

export default HintModal