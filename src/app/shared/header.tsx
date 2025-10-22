const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stacks", href: "#stacks" },
  { label: "About", href: "#about" },
];

const Header = () => {
  return (
    <nav
      className="
      text-background 
      flex justify-around items-center 
      p-2 sm:p-3 md:p-4 
      fixed top-0 left-0 right-0 
      z-50 
      w-[95%] sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-[28%]
      border border-ring 
      mx-auto 
      mt-2 sm:mt-3 md:mt-5 
      rounded-full 
      backdrop-blur-sm 
      px-2 sm:px-4 md:px-6 lg:px-8
    "
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            text-muted-foreground 
            text-xs sm:text-sm md:text-base 
            font-medium
            transition-transform duration-300 
            hover:scale-110 
            hover:drop-shadow-[0_0_4px_white]
            whitespace-nowrap
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Header;
