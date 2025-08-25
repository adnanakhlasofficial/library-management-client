import CreateBookForm from "@/components/modules/Books/CreateBookForm";

export default function CreateBook() {
  return (
    <>
      <div className="max-w-lg mx-auto my-6 p-4 shadow-xl border rounded-lg">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold ">Create a New Book</h2>
        </div>
        <CreateBookForm />
      </div>
    </>
  )
}
