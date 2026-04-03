export default function Stethoscope({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2v6a4 4 0 008 0V2M4 2h4M16 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="14" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 16v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
