import BookTable from "@/components/module/BookTable";
import CreateBookModal from "@/components/module/CreateBookModal";

export default function Home() {
  return (
    <div className="p-2 max-w-5xl mx-auto">
      <div className="  flex justify-between items-center ">
        <div>
          <h1 className="text-4xl text-accent font-bold ">
            Explore The Archive
          </h1>
          <p className="mt-2 ">
            Mange Book inventory and find your desired books
          </p>
        </div>
        <CreateBookModal />
      </div>

      <BookTable />
    </div>
  );
}
