const GenAI = () => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="genai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285f4"/>
          <stop offset="50%" stopColor="#9c27b0"/>
          <stop offset="100%" stopColor="#ff5722"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#genai-gradient)"/>
      <path d="M12,10l8,6-8,6V10z" fill="#fff"/>
      <circle cx="8" cy="8" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="24" cy="8" r="1.5" fill="#fff" opacity="0.5"/>
      <circle cx="24" cy="24" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="8" cy="24" r="1.5" fill="#fff" opacity="0.5"/>
      <path d="M16,8c0,0-2,2-2,8s2,8,2,8s2-2,2-8S16,8,16,8z" fill="#fff" opacity="0.3"/>
    </svg>
  )
}

export default GenAI
