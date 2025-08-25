// app/page.tsx or pages/index.tsx
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetBooksQuery } from "@/redux/features/book/booksApi"
import { selectQueries } from "@/redux/features/book/booksSlice"
import { useAppSelector } from "@/redux/hook"
import { Link } from "react-router"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import type { IBook } from "@/types"
import SingleTableRow from "@/components/modules/Books/SingleTableRow"



export default function Home() {

  const state = useAppSelector(selectQueries)
  const { isError, isLoading, data, error } = useGetBooksQuery({ ...state, limit: 6, sortBy: "createdAt", sort: "desc" })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>

  console.log(data)

  return (
    <main className="space-y-10">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br min-h-48 my-0 !py-6 from-purple-900 via-indigo-800 to-gray-900 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">📚 Minimal Library System</h1>
        <p className="text-lg mb-6">Manage books, borrow records, and summaries with ease.</p>
        <Link to="/books">
          <Button variant="secondary">Explore Books</Button>
        </Link>
      </Section>

      <Section title="Latest Book">
        <Table className="overflow-x-scroll">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
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
                ? data?.data?.map((book: IBook, idx: number) => <SingleTableRow key={book._id} book={book} idx={idx} />)
                : <TableRow><TableCell colSpan={7}><h2 className="text-2xl font-semibold mt-2 text-center">No books found</h2></TableCell></TableRow>
            }
          </TableBody>
        </Table>
      </Section>

      {/* Features Section */}
      <Section title="Core Features">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>📖 Book Management</CardTitle></CardHeader>
            <CardContent><p>Add, edit, delete, and borrow books with ease.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>📊 Borrow Summary</CardTitle></CardHeader>
            <CardContent><p>Track borrowed books and quantities in real time.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>⚡ Responsive UI</CardTitle></CardHeader>
            <CardContent><p>Minimalist design with full responsiveness and dark mode.</p></CardContent>
          </Card>
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section title="Get Started">
        <div className="flex flex-wrap gap-4">
          <Link to="/books"><Button>📚 View All Books</Button></Link>
          <Link to="/create-book"><Button variant="outline">➕ Add New Book</Button></Link>
          <Link to="/borrow-summary"><Button variant="ghost">📈 Borrow Summary</Button></Link>
        </div>
      </Section>

      {/* System Overview */}
      <Section title="System Overview">
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><strong>Frontend:</strong> React.js + Shadcn UI</li>
          <li><strong>Backend:</strong> Node.js + Express</li>
          <li><strong>Database:</strong> MongoDB</li>
        </ul>
      </Section>

      {/* Developer Notes */}
      <Section title="Developer Notes">
        <div className="space-y-2 text-muted-foreground">
          <p>✅ Tailwind v4 integration with semantic tokens</p>
          <p>🧩 Modular React components for clarity and reuse</p>
          <p>🚀 Dark mode with glitch-inspired accents</p>
        </div>
      </Section>

      {/* Footer */}
      <Section className="bg-muted text-center">
        <p className="text-sm text-muted-foreground">© 2025 Book Store. Crafted with precision and neon gradients.</p>
      </Section>
    </main>
  )
}
