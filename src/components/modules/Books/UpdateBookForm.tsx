import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/features/book/booksApi"
import type { IBook } from "@/types"
import { useEffect } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { useParams } from "react-router"

export default function UpdateBookForm() {
  const { id } = useParams()
  const { data: book, isLoading, isError, error, } = useGetSingleBookQuery(id)
  const [updateBook] = useUpdateBookMutation()

  const form = useForm<IBook>({
    defaultValues: {
      _id: "",
      title: "",
      author: "",
      copies: 0,
      genre: "BIOGRAPHY",

    }
  })

  useEffect(() => {
    form.reset({
      _id: book?.data?._id,
      title: book?.data?.title,
      author: book?.data?.author,
      copies: book?.data?.copies,
      description: book?.data?.description,
      genre: book?.data?.genre
    })

  }, [book, form])


  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>

  const onSubmit: SubmitHandler<FieldValues> = async (newBook) => {
    const bookData = {
      ...newBook,
      copies: parseInt(newBook.copies),
      _id: book?.data?._id
    };

    console.log(bookData)

    const { data } = await updateBook(bookData)

    if (data?.success) {
      toast.success("Book updated successfully")
    } else {
      toast.error("Failed to update the book")
    }

    // form.reset()
  }

  return (
    <Form {...form}>
      <form className="border rounded-xl p-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormItem>
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={book?.data?.genre}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

        </FormItem>
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input  {...field} value={field.value || ""} type="number" min={0} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="col-span-full" type="submit">{isLoading ? "Updating book..." : "Update Book"}</Button>

      </form>
    </Form>
  )
}
