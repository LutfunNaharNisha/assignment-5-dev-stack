import Banner from "../assets/banner-stack.png";

export default function Hero() {
	return (
		<section
			id="home"
			className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 text-center sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-32 lg:text-left"
		>
			<div>
				<h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
					Build Your Ideal <br />
					<span className="text-gradient-brand">
						Development Stack
					</span>
				</h1>
				<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 lg:mx-0 lg:text-lg">
					Explore frontend, backend, database, and tooling options,
					compare them side by side, and put together the stack that
					fits your next project.
				</p>
				<div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
					<a
						href="#technologies"
						className="btn border-0 bg-gradient-button px-5 text-white hover:opacity-90"
					>
						Explore Technologies
					</a>
					<a
						href="#footer"
						className="btn border-slate-200 bg-white px-8 font-medium text-slate-700 hover:bg-slate-50"
					>
						Learn More
					</a>
				</div>
			</div>
			<div className="relative">
				<img
					src={Banner}
					alt="Illustration of a developer's stack"
					className="mx-auto max-w-full rounded-lg shadow-lg lg:mx-0"
				/>
			</div>
		</section>
	);
}
