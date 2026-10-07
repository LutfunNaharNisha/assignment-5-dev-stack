import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import Spinner from "./Spinner";
import StackPanel from "./StackPanel";
import TechCard from "./TechCard";

export default function TechnologiesSection() {
	const [technologies, setTechnologies] = useState<Technology[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [stack, setStack] = useState<Technology[]>([]);

	// Load the technologies from the local JSON file
	useEffect(() => {
		const controller = new AbortController();

		fetch(`${import.meta.env.BASE_URL}data/technologies.json`, {
			signal: controller.signal,
		})
			.then((res) => {
				if (!res.ok) throw new Error(`Request failed (${res.status})`);
				return res.json() as Promise<Technology[]>;
			})
			.then(setTechnologies)
			.catch((err: Error) => {
				if (err.name !== "AbortError") setError(err.message);
			})
			.finally(() => {
				if (!controller.signal.aborted) setLoading(false);
			});

		return () => controller.abort();
	}, []);

	const isInStack = (id: string) => stack.some((t) => t.id === id);

	const handleAdd = (tech: Technology) => {
		if (isInStack(tech.id)) {
			toast.warning(`${tech.name} is already in your stack.`);
			return;
		}
		setStack([...stack, tech]);
		toast.success(`${tech.name} added to your stack.`);
	};

	const handleRemove = (tech: Technology) => {
		setStack(stack.filter((t) => t.id !== tech.id));
		toast.info(`${tech.name} removed from your stack.`);
	};

	const handleClear = () => {
		setStack([]);
		toast.info("Your stack has been cleared.");
	};

	return (
		<section
			id="technologies"
			className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"
		>
			<header className="text-center lg:text-left">
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
					Explore the{" "}
					<span className="text-gradient-section">Technologies</span>
				</h2>
				<p className="mt-2 text-slate-500">
					Pick one technology per category to build your ideal stack.
				</p>
			</header>

			{loading && <Spinner />}
			{error && (
				<p
					role="alert"
					className="py-16 text-center text-red-500"
				>
					Could not load technologies: {error}
				</p>
			)}

			{!loading && !error && (
				<div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
					<div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
						{technologies.map((tech) => (
							<TechCard
								key={tech.id}
								tech={tech}
								added={isInStack(tech.id)}
								onAdd={handleAdd}
							/>
						))}
					</div>
					<StackPanel
						stack={stack}
						onRemove={handleRemove}
						onClear={handleClear}
					/>
				</div>
			)}
		</section>
	);
}
