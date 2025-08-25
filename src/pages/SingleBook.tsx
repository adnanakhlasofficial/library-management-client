import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useGetSingleBookQuery } from "@/redux/features/book/booksApi"
import { useParams } from "react-router"

export default function SingleBook() {
  const { id } = useParams()

  const { data, isLoading, isError, error, } = useGetSingleBookQuery(id)

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>

  const { title, author, description, genre, isbn, createdAt, updatedAt, copies, available } = data.data

  return (
    <section className="max-w-3xl mx-auto px-6 py-10 text-neutral-900 dark:text-slate-100 border mt-6 rounded-lg shadow-xl">
      <header className="mb-6 border-b border-neutral-300 dark:border-slate-700 pb-4">
        <h1 className="text-3xl font-bold tracking-tight neon-text">{title}</h1>
        <p className="text-sm text-neutral-500 dark:text-slate-400">by {author}</p>
      </header>

      <div className="space-y-4">
        <p className="text-lg text-neutral-800 dark:text-slate-200">{description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-slate-300">
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">Genre:</span> {genre}
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">ISBN:</span> {isbn}
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">Copies:</span> {copies}
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">Available:</span>{" "}
            <Badge
              className={cn("font-medium text-center", {
                "bg-red-100 text-red-600 dark:bg-red-200 dark:text-red-500": available === false,
                "bg-green-100 text-green-600 dark:bg-green-200 dark:text-green-500": available === true,
              })}
            >
              {available ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">Created:</span>{" "}
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-slate-200">Updated:</span>{" "}
            {new Date(updatedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </section>

  )
}

