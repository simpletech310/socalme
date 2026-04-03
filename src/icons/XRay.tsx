export default function XRay({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10v4M9 12h6M10 16l2-2 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
