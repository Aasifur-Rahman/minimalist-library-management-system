import BorrowSummary from "@/components/module/BorrowSummary";
import { useGetBorrowSummaryQuery } from "@/redux/api/bookApi";
import { DotLoader } from "react-spinners";

export default function BookSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[800px]">
        <DotLoader color="#daa83a" size={67} />
      </div>
    );
  }
  return (
    <div>
      <div>
        <BorrowSummary summary={data} />
      </div>
    </div>
  );
}
