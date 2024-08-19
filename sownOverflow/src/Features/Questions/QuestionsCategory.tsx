"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {useAppSelector } from "@/Types/hooksTypes"
import { getCategories } from "../Categories/categoriesSlice"
import { ControlProps1 } from "@/Types/questionsTypes"

interface Props {
  controlProps1: ControlProps1
}
export const QuestionsCategory: React.FC<Props> = ({controlProps1}) => {
  const [open, setOpen] = React.useState(false)
  const value = controlProps1.value.value1
  const setValue = controlProps1.value.setValue1
  const frameworks = useAppSelector(getCategories).categories

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="md:w-[200px] w-[170px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.category_name === value)?.category_label
            : "Select Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Category..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.category_id}
                  value={framework.category_name!}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.category_name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.category_label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
