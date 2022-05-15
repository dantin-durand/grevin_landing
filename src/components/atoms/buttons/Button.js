import joinClasses from "helpers/joinClasses";

export function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={joinClasses("p-default rounded-full", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
