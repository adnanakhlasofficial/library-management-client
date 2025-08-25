import BorrowBookForm from "@/components/modules/Borrow/BorrowBookForm";

export default function BorrowBook() {
  return (

    <div className="max-w-lg mx-auto my-6 p-4 pb-0 shadow-xl border rounded-lg">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold ">Borrow your Book</h2>
      </div>
      <BorrowBookForm />
    </div>
  )
}
