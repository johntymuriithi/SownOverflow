import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MainCateporyPage from "../Features/Categories/MainCateporyPage"
import PersonalNav from "../Features/PersonalNav/PersonalNav"
import StatsPage from '../Features/Stats/StatsPage';
import { BsMenuAppFill } from "react-icons/bs"

export function ResponsiveNav() {
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
            <div className="mt-6"><PersonalNav /></div>
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
