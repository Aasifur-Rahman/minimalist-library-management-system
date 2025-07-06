import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import libraryLogo from "../../assets/libraryimg.png";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0  w-full bg-[#faf3e5] text-[#2f393d] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-evenly items-center">
        {/* desktop mode */}
        <Link
          className=" flex justify-center items-center lg:w-1/2 gap-2"
          to="/"
        >
          {/* logo */}

          <motion.img
            whileHover={{ y: [-2, -6, 0] }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            width={"30px"}
            src={libraryLogo}
            alt="logo"
          />

          <h1 className="text-foreground font-bold text-xl  ">The Archivist</h1>
        </Link>
        <nav className=" hidden md:flex gap-6 ">
          <Link
            className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
            to="/"
          >
            Home
          </Link>
          <Link
            className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
            to="/books"
          >
            Books
          </Link>
          <Link
            className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
            to="/borrow-summary"
          >
            Borrow Summary
          </Link>
        </nav>

        <nav className=" hidden md:flex gap-6 ">
          <Button variant="outline" className="  ">
            Log In
          </Button>
        </nav>

        {/* mobile mode */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-2 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col text-center gap-4 mt-6 w-1/2 mx-auto">
                <Link
                  className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
                  to="/books"
                >
                  Books
                </Link>
                <Link
                  className=" relative hover:text-[#aa966d] transition-colors duration-200 text-base font-medium after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 "
                  to="/borrow-summary"
                >
                  Borrow Summary
                </Link>

                <button className="  bg-accent hover:bg-black px-3 py-1 rounded-lg transition-colors duration-200 text-white font-medium">
                  Log In
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
