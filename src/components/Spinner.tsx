import { ClipLoader } from "react-spinners";

export default function Spinner({
	label = "Loading technologies…",
}: {
	label?: string;
}) {
	return (
		<div
			role="status"
			className="flex items-center justify-center gap-3 py-24 text-slate-500"
		>
			<ClipLoader
				color="#d81b7e"
				size={28}
			/>
			<span className="text-sm">{label}</span>
		</div>
	);
}
