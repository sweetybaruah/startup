import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-12 px-4 relative border-t border-border mt-12 pt-8 flex flex-col items-center"
      style={{ backgroundColor: "rgba(93, 100, 135, 1)" }}
    >
      <div className="text-center text-white">
        <p className="font-bold">Email</p>
        <p>hello@gmail.com</p>
        <p className="font-bold mt-4">Phone</p>
        <p>+1 (123) 456-7890</p>
        <p className="font-bold mt-4">Location</p>
        <p>Vancouver, BC, Canada</p>
      </div>
      <p className="text-sm text-muted-foreground text-center mt-8">
        &copy; {new Date().getFullYear()} SyntraPal All rights reserved.
      </p>
      <a
        href="#hero"
        className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
