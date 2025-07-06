import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetBookIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";
import { DotLoader } from "react-spinners";

export default function BookDetails() {
  const { id } = useParams();
  const { data: bookData, isLoading } = useGetBookIdQuery(id as string);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[800px]">
        <DotLoader color="#daa83a" size={67} />
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col py-12 ">
      <Card className="w-full max-w-sm shadow-sm border-0">
        <CardHeader></CardHeader>
        <CardContent>
          <div className="space-y-5">
            <h3 className="font-bold text-xl">{bookData?.data.title}</h3>
            <h4 className="text-[14px]">
              {" "}
              <span className="font-bold">Author:</span>{" "}
              {`${bookData?.data.author}`}
            </h4>
            <div className="py-3">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>{bookData?.data.description}</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-8">
                <p className="font-bold">ISBN:</p>
                <p>{bookData?.data.isbn}</p>
              </div>
              <div className="flex gap-8">
                <p className="font-bold">Genre:</p>
                <p>{bookData?.data.genre}</p>
              </div>
              <div className="flex gap-8 ">
                <p className="font-bold">Total Copies:</p>
                <p>{bookData?.data.copies}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
