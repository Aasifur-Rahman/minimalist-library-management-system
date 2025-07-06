export default function Footer() {
  return (
    <footer className="bg-orange-100 px-4 py-10 md:px-8 ">
      <div className="max-w-6xl mx-auto flex justify-between gap-8 border-b pb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">The Archivist</h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore stories, organize collections, and stay in control. The
            Archivist turns your library into a smart experience
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Email: support@archivist.com</li>
            <li>Phone: +880 1544-437722</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 text-center text-sm text-gray-500">
        © 2025 The Archivist. All rights reserved.
      </div>
    </footer>
  );
}
