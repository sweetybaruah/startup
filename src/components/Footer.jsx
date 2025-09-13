import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-nowrap justify-center items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} SyntraPal All rights reserved.
      </p>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
=======
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-end items-center">
      <p className="text-sm text-muted-foreground text-center mr-4">
        &copy; {new Date().getFullYear()} SyntraPal All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
>>>>>>> 68da1dbfe6638575ab62283fa500718d7e98bebb
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  );
};
