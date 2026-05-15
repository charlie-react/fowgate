export default function Button({
  children,
  variant = "primary",

}: {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  others?: string;
}) {
  const styles = {
    primary:
      "bg-cobalt text-white  bg-blue-700 border border-transparent",
    light:
      "bg-white text-slate-700 hover:bg-slate-100 border border-transparent",
    outline:
      "border border-white/15 bg-white/5 text-white  hover:text-cobalt",
  };

  return (
    <button
      className={`inline-flex cursor-pointer h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 ${styles[variant]} `}
    >
      {children}
    </button>
  );
}