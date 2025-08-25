
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TableCell,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { IBook } from "@/types"
import { BookOpen, Eye, Pencil, Trash2 } from "lucide-react"
import { useNavigate } from "react-router"

interface ISingleBook {
  book: IBook
}

export default function SingleTableRow({ book }: ISingleBook) {
  const { _id, title, author, copies, available, genre, isbn } = book

  const navigate = useNavigate()

  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell>{genre}</TableCell>
      <TableCell>{isbn}</TableCell>
      <TableCell>{copies}</TableCell>
      <TableCell className="text-center"><Badge className={cn("font-medium", {
        "bg-red-200 text-red-500": available === false,
        "bg-green-200 text-green-500": available === true

      })}>{available ? "In Stock" : "Out Of Stock"}</Badge></TableCell>
      <TableCell className="flex items-center gap-2">
        <Button onClick={() => navigate(`/book/${_id}`)}><Eye /></Button>
        <Button><Pencil /></Button>
        <Button><Trash2 /></Button>
        <Button><BookOpen /></Button>
      </TableCell>

    </TableRow>
  )
}
