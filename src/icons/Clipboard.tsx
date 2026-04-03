export default function Clipboard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2h6l1 2H8l1-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="5" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
