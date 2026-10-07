import type { Technology } from "../types/technology";
import { TechIcon } from "./TechCard";

interface Props {
	stack: Technology[];
	onRemove: (tech: Technology) => void;
	onClear: () => void;
}

export default function StackPanel({ stack, onRemove, onClear }: Props) {
	return (
		<aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] lg:sticky lg:top-24">
			<div className="flex items-start justify-between gap-2">
				<div>
					<h2 className="text-lg font-bold">Your Stack</h2>
					<p className="mt-1 text-sm text-slate-400">
						{stack.length === 0
							? "No technologies selected yet."
							: `${stack.length} Technology Selected`}
					</p>
				</div>
				{stack.length > 0 && (
					<button
						className="btn btn-ghost btn-xs font-semibold text-brand"
						onClick={onClear}
					>
						Remove All
					</button>
				)}
			</div>

			{stack.length === 0 ? (
				<p className="mt-4 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-400">
					Your stack is empty.
				</p>
			) : (
				<ul className="mt-4 grid grid-cols-1 gap-2.5">
					{stack.map((tech) => (
						<li
							key={tech.id}
							className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
						>
							<TechIcon
								tech={tech}
								size="h-7 w-7"
							/>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-semibold">
									{tech.name}
								</p>
								<p className="text-xs text-slate-400">
									{tech.category}
								</p>
							</div>
							<button
								onClick={() => onRemove(tech)}
								aria-label={`Remove ${tech.name} from stack`}
								className="cursor-pointer rounded-full px-2 py-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
							>
								✕
							</button>
						</li>
					))}
				</ul>
			)}
		</aside>
	);
}
