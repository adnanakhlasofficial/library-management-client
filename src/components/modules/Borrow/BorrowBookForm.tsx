import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { IBorrow } from "@/types"
import { CalendarIcon } from "lucide-react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { format } from "date-fns"
import { useNavigate, useParams } from "react-router"
import { useBorrowBookMutation } from "@/redux/features/borrow/borrowApi"
import toast from "react-hot-toast"
import { useAppDispatch } from "@/redux/hook"
import { booksApi } from "@/redux/features/book/booksApi"

export default function BorrowBookForm() {
  const { bookId } = useParams()
  const form = useForm<IBorrow>()
  const [borrowBook] = useBorrowBookMutation()
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FieldValues> = async (book) => {
    console.log({ ...book, book: bookId, quantity: Number(book.quantity) })
    const { data } = await borrowBook({ ...book, book: bookId })

    dispatch(booksApi.util.invalidateTags(['books']))
    if (data.success) {
      toast.success(data.message);
      navigate("/borrow-summary")
    } else {
      toast.error(data.error.errors.quantity.message)
    }
  }

  return (
    <div className="max-w-lg mx-auto my-6">
      <Form {...form}>
        <form className="border rounded-xl p-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="book"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || bookId || "Unknown Book"} disabled />
                </FormControl>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input {...field} type="number" value={field.value || ""} min={1} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Return Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date()
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <Button type="submit">Borrow Book</Button>
        </form>
      </Form>
    </div>
  )
}
