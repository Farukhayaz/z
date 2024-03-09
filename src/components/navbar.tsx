import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
// import "../styles/navbar.css"
interface NavLinkProps {
  to: string;
  children: ReactNode;
}

function NavLink({ to, children }: NavLinkProps): JSX.Element {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

interface MobileNavProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileNav({ open, setOpen }: MobileNavProps): JSX.Element {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#1C1622] text-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div
        className="flex items-center justify-center filter drop-shadow-md  h-20"
        style={{
          background:
            "linear-gradient(94deg, #F9A2FF 5.04%, rgba(237, 143, 243, 0.00) 96.43%)",
        }}
      >
        {/* logo container */}
        <Link className="text-2xl " href="/">
          <Image
            width={200}
            height={68}
            className="h-[45px] mr-8"
            src="/images/Logo2.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex flex-col  ml-4">
        <Link
          className="text-xl font-medium my-4 text-center"
          href="/"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Home
        </Link>
        <Link
          className="text-xl font-normal my-4 text-center"
          href="/about"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          About
        </Link>
        <Link
          className="text-xl font-medium my-4 text-center"
          href="/services"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Services
        </Link>
        <Link
          className="text-xl font-normal my-4  text-center"
          href="/page"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Pages
        </Link>
        <button className="btn w-[50%] my-4 ml-[25%] ">Contact</button>
              <button className="btn w-[50%] my-4 ml-[25%]">Contact Wallet</button>
      </div>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute d w-[100%] flex flex-col  items-center"
       style={{
        // borderBottom:"2px solid #47414c"
        
        }}>
        <nav
          className="navbar flex justify-center items-center filter drop-shadow-md w-[100%] text-white lg:px-10 px-5 lg:py-5 py-5"
          aria-label="Main Navigation"
        >
          <MobileNav open={open} setOpen={setOpen} />
          <div className="lg:w-3/12 w-[350px] flex items-center">
            <Link className="text-2xl " href="/">
              <Image
                width={200}
                height={68}
                className=" lg:w-[224px]"
                src="/images/log.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="lg:w-[100%] ml-[12%]   flex justify-start items-center">
            <div
              className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #F9A2FF 0%, rgba(255, 135, 250, 0.00) 100%)",
                }}
                className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-3.5" : ""
                }`}
              />
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #F9A2FF 0%, rgba(255, 135, 250, 0.00) 100%)",
                }}
                className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              />
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #F9A2FF 0%, rgba(255, 135, 250, 0.00) 100%)",
                }}
                className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-3.5" : ""
                }`}
              />
            </div>

            <div className="  hidden  lg:w-[80%] md:w-[58%] lg:text-[19px] md:text-[15px] flex justify-around md:flex">
              <NavLink to="/">Ecosystem</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Features</NavLink>
              <NavLink to="/page">Service</NavLink>
            </div>
            <div className="  hidden  ml-[18%] w-[30%] flex justify-around md:flex">
              <button className="btn px-8 py-3 lg:text-[19px] md:text-[15px]">Contact</button>
              {/* <button className="btn">Contact Wallet</button> */}
            </div>
          </div>
        </nav>
        {/* <div className="nav-bar w-[93%] h-[1px]"></div> */}
      </div>
    </>
  );
}
