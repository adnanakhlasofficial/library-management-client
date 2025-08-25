
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TableCell,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { useDeleteBookMutation } from "@/redux/features/book/booksApi"
import type { IBook } from "@/types"
import { BookOpen, Eye, Pencil, Trash2 } from "lucide-react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"

interface ISingleBook {
  book: IBook
}

export default function SingleTableRow({ book }: ISingleBook) {
  const { _id, title, author, copies, available, genre, isbn } = book
  const [deleteBook] = useDeleteBookMutation()
  const navigate = useNavigate()

  const handleDelete = async () => {
    const { data } = await deleteBook(_id)
    if (data.success) {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
  }

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
        <Button onClick={handleDelete}><Trash2 /></Button>
        <Button onClick={() => navigate(`/borrow/${_id}`)}><BookOpen /></Button>
      </TableCell>

    </TableRow>
  )
}
