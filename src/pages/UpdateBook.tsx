import UpdateBookForm from "@/components/modules/Books/UpdateBookForm";

export default function UpdateBook() {
  return (
    <>
      <div className="max-w-lg mx-auto my-6 p-4 shadow-xl border rounded-lg">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold ">Update Book</h2>
        </div>
        <UpdateBookForm />
      </div>
    </>
  )
}
