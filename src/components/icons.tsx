import type { SVGProps } from "react";

export function Arrow({
  diagonal = false,
  ...props
}: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function Spark({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 0v32M0 16h32M4.7 4.7l22.6 22.6M4.7 27.3 27.3 4.7" />
    </svg>
  );
}

export function DisciplineGraphic({ variant = 0 }: { variant?: number }) {
  return (
    <svg
      className="discipline-graphic"
      viewBox="0 0 320 260"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <g opacity=".18" strokeWidth=".65">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${40 + i * 30} 10v240M10 ${20 + i * 28}h300`} />
        ))}
      </g>
      {variant % 3 === 0 ? (
        <g strokeWidth="1.2">
          {Array.from({ length: 15 }, (_, i) => (
            <rect
              key={i}
              x={87 + i * 2}
              y={54 + i * 2}
              width={140 - i * 4}
              height={140 - i * 4}
              rx={6}
              transform={`rotate(${i * 5} 157 124)`}
              opacity={0.4 + i / 30}
            />
          ))}
          <path
            d="M48 125h32m154 0h35M158 14v32m0 155v36"
            strokeDasharray="3 5"
          />
          <circle cx="157" cy="124" r="10" fill="currentColor" stroke="none" />
        </g>
      ) : variant % 3 === 1 ? (
        <g strokeWidth="1.3">
          {Array.from({ length: 14 }, (_, i) => (
            <ellipse
              key={i}
              cx="160"
              cy="130"
              rx={25 + i * 7}
              ry={95 - i * 3}
              transform={`rotate(${i * 8} 160 130)`}
              opacity={0.35 + i / 23}
            />
          ))}
        </g>
      ) : (
        <g strokeWidth="1.3">
          {Array.from({ length: 15 }, (_, i) => (
            <path
              key={i}
              d={`M${55 + i * 4} ${70 + i * 5}l105 -48 105 48-105 55Z`}
              opacity={0.3 + i / 24}
            />
          ))}
          <path d="M160 22v200" strokeDasharray="4 5" />
        </g>
      )}
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M284 227h12m-6-6v12" />
    </svg>
  );
}
