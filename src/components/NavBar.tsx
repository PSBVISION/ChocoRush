import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image
        src="/images/nav-logo.svg"
        alt="nav-Logo"
        width={50}
        height={50}
        className="md:w-24 w-20"
      />
    </nav>
  );
};

export default NavBar;
