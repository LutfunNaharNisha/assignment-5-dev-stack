import { useState } from "react";
import { BADGE_STYLES } from "../constants/site";
import type { Technology } from "../types/technology";

interface Props {
	tech: Technology;
	added: boolean;
	onAdd: (tech: Technology) => void;
}

/** Icon with a letter fallback when the image URL fails to load. */
export function TechIcon({
	tech,
	size = "h-8 w-8",
}: {
	tech: Technology;
	size?: string;
}) {
	const [failed, setFailed] = useState(false);
	return failed ? (
		<span
			className={`${size} grid place-items-center rounded bg-slate-100 text-sm font-bold text-slate-500`}
		>
			{tech.name[0]}
		</span>
	) : (
		<img
			src={tech.icon}
			alt={`${tech.name} logo`}
			className={`${size} object-contain`}
			onError={() => setFailed(true)}
		/>
	);
}

export default function TechCard({ tech, added, onAdd }: Props) {
	return (
		<article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
			<div className="flex items-start justify-between">
				<TechIcon tech={tech} />
				<span
					className={`rounded-full px-3 py-1 text-xs font-semibold ${BADGE_STYLES[tech.badge] ?? BADGE_STYLES.default}`}
				>
					{tech.badge}
				</span>
			</div>

			<h3 className="mt-4 text-xl font-bold">{tech.name}</h3>
			<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
				{tech.description}
			</p>

			<div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
				<span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-600">
					{tech.category}
				</span>
				<span>{tech.difficulty}</span>
				<span className="font-semibold text-slate-700">
					<span className="text-amber-400">★</span>{" "}
					{tech.rating.toFixed(1)}
				</span>
			</div>

			<button
				className="btn mt-4 w-full border-0 bg-[#0b0f1a] text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-500"
				disabled={added}
				onClick={() => onAdd(tech)}
			>
				{added ? "✓ Added to Stack" : "Add to Stack"}
			</button>
		</article>
	);
}
