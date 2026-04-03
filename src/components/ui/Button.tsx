import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-coral text-white hover:bg-coral-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  outline:
    "bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-navy hover:text-coral hover:underline",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  external = false,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-[family-name:var(--font-jakarta)] font-bold text-lg transition-all duration-300 cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
