import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MainCateporyPage from "../Features/Categories/MainCateporyPage"
import { PersonalNav } from "@/Features/PersonalNav/PersonalNav";
import StatsPage from '../Features/Stats/StatsPage';
import { BsMenuAppFill } from "react-icons/bs"
import SigninButton from "./SigninButton"
import SignupButton from "./SignupButton"
import { useAppSelector } from "@/Types/hooksTypes"
import { getUserInfo } from "@/Features/Users/usersSlice"
import QuestionButton from "./QuestionButton"

export function ResponsiveNav() {
  const userInfo  = useAppSelector(getUserInfo)
    const isActive = userInfo.isActive;
    
  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <BsMenuAppFill />
      </SheetTrigger>
      <SheetContent className="p-4 overflow-y-scroll">
        <SheetHeader>
        </SheetHeader>
        <div className="">
            <div className="mt-6"><MainCateporyPage /></div>
            {isActive ? "" : <div className="mt-6 flex justify-center"><QuestionButton /></div>}
            {isActive ? "" : <div className="mt-6"><PersonalNav /></div>}
            {isActive ?
            <div className="mt-6 flex flex-col items-center gap-2">
             <SigninButton />
              <SignupButton />
            </div> : ""
          }
            <div className="mt-6"><StatsPage /></div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="mt-5">Got It</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
