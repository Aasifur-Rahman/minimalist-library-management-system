import { motion } from "motion/react";

interface BorrowSummaryItem {
  book: {
    _id: string;
    title: string;
    author: string;
    isbn: string;
  };
  totalQuantity: number;
}

interface BorrowSummaryData {
  data: BorrowSummaryItem[];
}

export default function BorrowSummary({
  summary,
}: {
  summary: BorrowSummaryData;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 overflow-x-hidden ">
      <h2 className="text-2xl font-bold mb-6 text-center">Borrow Summary</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-lg">
          <thead className="bg-accent  shadow-md">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Book Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                ISBN
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Total Borrowed
              </th>
            </tr>
          </thead>
          <tbody className="overflow-x-hidden">
            {summary?.data?.map((item, index) => {
              const book = item.book; // book is an array due to aggregation

              return (
                <motion.tr
                  key={index}
                  className="shadow-lg overflow-x-hidden "
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{ originX: 0.5 }}
                >
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{book.title}</td>
                  <td className="px-6 py-4 text-sm">{book.isbn}</td>
                  <td className="px-6 py-4 text-sm">
                    {item.totalQuantity} copies
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
