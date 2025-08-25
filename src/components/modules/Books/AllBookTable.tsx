import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useGetBooksQuery } from "@/redux/features/book/booksApi"
import type { IBook } from "@/types"
import { useAppSelector } from "@/redux/hook"
import { selectQueries } from "@/redux/features/book/booksSlice"
import SingleTableRow from "./SingleTableRow"

export default function AllBookTable() {

  const state = useAppSelector(selectQueries)
  const { isError, isLoading, data, error } = useGetBooksQuery(state)

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>


  return (
    <div className="max-w-5xl mx-auto my-4 border rounded-lg p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data?.data.length > 0
              ? data?.data?.map((book: IBook) => <SingleTableRow key={book._id} book={book} />)
              : <TableRow><TableCell colSpan={7}><h2 className="text-2xl font-semibold mt-2 text-center">No books found</h2></TableCell></TableRow>
          }
        </TableBody>
      </Table>
    </div>
  )
}


