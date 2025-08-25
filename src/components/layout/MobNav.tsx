import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

export default function MobNav() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return <Sheet onOpenChange={() => setSheetOpen(!sheetOpen)} open={sheetOpen}>
    <SheetTrigger onClick={() => setSheetOpen(!sheetOpen)} className="block md:hidden"><Menu /></SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>

        <div className="mt-10 ml-4">
          <ul className="*:hover:underline *:underline-offset-2 flex flex-col items-start gap-4 font-medium">
            <li onClick={() => setSheetOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setSheetOpen(false)}><Link to="/books">All Books</Link></li>
            <li onClick={() => setSheetOpen(false)}><Link to="/create-book">Create Book</Link></li>
            <li onClick={() => setSheetOpen(false)}><Link to="/borrow-summary">All Borrow Books</Link></li>
          </ul>
        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
}
