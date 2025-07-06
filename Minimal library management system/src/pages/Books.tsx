import BookTable from "@/components/module/BookTable";

export default function Books() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-2">All Book</h1>
      <BookTable />
    </div>
  );
}
