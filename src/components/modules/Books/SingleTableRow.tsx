
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TableCell,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { IBook } from "@/types"

interface ISingleBook {
  book: IBook
}

export default function SingleTableRow({ book }: ISingleBook) {
  const { title, author, copies, available, genre, isbn } = book

  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>{genre}</TableCell>
      <TableCell>{isbn}</TableCell>
      <TableCell>{copies}</TableCell>
      <TableCell className="text-center"><Badge className={cn("font-medium text-center", {
        "bg-red-200 text-red-500": available === false,
        "bg-green-200 text-green-500": available === true

      })}>{available ? "In Stock" : "Out Of Stock"}</Badge></TableCell>
      <TableCell className="flex items-center gap-2">
        <Button>View</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
        <Button>Borrow</Button>
      </TableCell>

    </TableRow>
  )
}
