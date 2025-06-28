const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stacks", href: "#stacks" },
  { label: "Contact", href: "#contact" },
];
const Header = () => {
  return (
    <nav className=" text-background flex justify-around items-center p-4 fixed top-0 left-0 right-0 z-50 w-[28%] border-3 border-ring mx-auto mt-5 rounded-full backdrop-blur-sm px-15  ">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-white text-base transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_4px_white]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Header;
