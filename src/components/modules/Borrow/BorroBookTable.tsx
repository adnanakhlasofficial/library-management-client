import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { useGetBorrowBooksQuery } from "@/redux/features/borrow/borrowApi";
import type { IBorrowBook } from "@/types";


export function BorrowBookTable() {

  const { data, isLoading, isError, error } = useGetBorrowBooksQuery({})

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>

  console.log(data)


  return (
    <div className="rounded-xl mx-auto max-w-lg border border-muted p-4 bg-background shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-fit text-foreground"></TableHead>
            <TableHead className=" text-foreground">Title</TableHead>
            <TableHead className=" text-foreground">ISBN</TableHead>
            <TableHead className=" text-right text-foreground">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.length > 0 ? data.data.map((borrowBook: IBorrowBook, idx: number) => (
            <TableRow key={borrowBook._id} className="hover:bg-muted/50 transition">
              <TableCell className="font-medium !w-fit">{idx + 1}</TableCell>
              <TableCell className="font-medium">{borrowBook.book.title}</TableCell>
              <TableCell className="text-muted-foreground">{borrowBook.book.isbn}</TableCell>
              <TableCell className="text-right font-semibold">
                {borrowBook.totalQuantity}
              </TableCell>
            </TableRow>
          )) : <TableRow><TableCell colSpan={7}><h2 className="text-2xl font-semibold mt-2 text-center">No borrow books found</h2></TableCell></TableRow>}
        </TableBody>
      </Table>
    </div>
  );
}
