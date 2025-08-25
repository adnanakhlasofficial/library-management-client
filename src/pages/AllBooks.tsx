import AllBookTable from "@/components/modules/Books/AllBookTable";
import { booksApi, useGetCountBooksQuery } from "@/redux/features/book/booksApi";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";
import { updateSkip } from "@/redux/features/book/booksSlice";
import { useAppDispatch } from "@/redux/hook";


export default function AllBooks() {
  const { data, isLoading, isError, error } = useGetCountBooksQuery({})

  const dispatch = useAppDispatch()

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{JSON.stringify(error)}</p>

  const page = Math.ceil(data.count / 10)

  const pageArr = Array.from({ length: page })


  console.log(pageArr)

  return (
    <section className="max-w-7xl mx-auto">
      <AllBookTable />
      <div className="my-4">
        <Pagination>
          <PaginationContent>
            {/* <PaginationItem onClick={() => dispatch(updateSkip(skip - 10))}>
              <PaginationPrevious />
            </PaginationItem> */}

            {pageArr.map((page, idx) =>
              <PaginationItem onClick={() => { dispatch(updateSkip(idx)); dispatch(booksApi.util.invalidateTags(['books'])) }} key={idx}>
                <PaginationLink>{idx + 1}</PaginationLink>
              </PaginationItem>
            )}

            {/* 
            <PaginationItem onClick={() => dispatch(updateSkip(skip + 10))}>
              <PaginationNext />
            </PaginationItem> */}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
