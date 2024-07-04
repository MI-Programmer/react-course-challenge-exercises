import { Link } from "react-router-dom";

const base =
  "inline-block rounded-full font-semibold uppercase tracking-wide  transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";

const { yellow } = {
  yellow:
    "bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300",
};

const styles = {
  primary: `${base} ${yellow} px-4 py-3 text-sm md:px-6 md:py-4`,
  small: `${base} ${yellow} px-4 py-2 text-xs md:px-5 md:py-2.5`,
  round: `${base} ${yellow} px-2.5 py-3 text-sm md:px-3.5 md:py-2`,
  secondary:
    base +
    " border-2 border-stone-300 px-4 py-2.5 text-sm text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-300 md:px-6 md:py-3.5",
};

const Button = ({ children, disabled, to, type, onClick }) => {
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
