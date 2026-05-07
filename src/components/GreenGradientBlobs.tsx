export default function GreenGradientBlobs() {
    return (
        <>
            {/* Left 3D Tube */}
            <svg className="absolute bottom-0 left-0 w-[420px] h-[280px] pointer-events-none" viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="tubeLeft" gradientUnits="userSpaceOnUse" x1="0" y1="100" x2="0" y2="280">
                        <stop offset="0%" stopColor="#e8f76a" />
                        <stop offset="15%" stopColor="#d4e84a" />
                        <stop offset="40%" stopColor="#a8cc22" />
                        <stop offset="65%" stopColor="#7ba90e" />
                        <stop offset="85%" stopColor="#5c8a10" />
                        <stop offset="100%" stopColor="#4a7a0c" />
                    </linearGradient>
                </defs>
                <path d="M -60,130 C 40,250 180,300 340,220" fill="none" stroke="url(#tubeLeft)" strokeWidth="80" strokeLinecap="round" />
            </svg>

            {/* Right 3D Tube */}
            <svg className="absolute bottom-0 right-0 w-[320px] h-[320px] pointer-events-none" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="tubeRight" gradientUnits="userSpaceOnUse" x1="120" y1="80" x2="320" y2="280">
                        <stop offset="0%" stopColor="#e8f76a" />
                        <stop offset="25%" stopColor="#c4db30" />
                        <stop offset="50%" stopColor="#8fb515" />
                        <stop offset="75%" stopColor="#6a9a0c" />
                        <stop offset="100%" stopColor="#4a7a0c" />
                    </linearGradient>
                </defs>
                <path d="M 60,400 C 100,260 200,160 380,80" fill="none" stroke="url(#tubeRight)" strokeWidth="80" strokeLinecap="round" />
            </svg>
        </>
    )
}
