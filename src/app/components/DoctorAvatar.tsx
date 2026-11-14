function getInitials(name: string) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.trim().slice(0, 2).toUpperCase() || "ВР";
}

function makeId(name: string) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = Math.imul(31, hash) + name.charCodeAt(i) | 0;
    return `docav${Math.abs(hash)}`;
}

export function DoctorAvatar({ name, className = "" }: { name: string; className?: string }) {
    const initials = getInitials(name);
    const gradId = makeId(name);

    return (
        <svg
            className={className}
            viewBox="0 0 240 300"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={name}
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#93C572" />
                    <stop offset="100%" stopColor="#5B8C3A" />
                </linearGradient>
            </defs>
            <rect width="240" height="300" fill={`url(#${gradId})`} />
            <circle cx="210" cy="30" r="90" fill="rgba(255,255,255,0.08)" />
            <circle cx="10" cy="270" r="80" fill="rgba(255,255,255,0.07)" />
            <circle cx="120" cy="148" r="58" fill="rgba(255,255,255,0.12)" />
            <text
                x="120"
                y="162"
                textAnchor="middle"
                fill="#1F3310"
                fontSize="52"
                fontWeight="700"
                fontFamily="Inter, system-ui, sans-serif"
            >
                {initials}
            </text>
        </svg>
    );
}
