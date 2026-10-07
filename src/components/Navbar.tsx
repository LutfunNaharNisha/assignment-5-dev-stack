import { useState } from "react";
import { NAV_LINKS } from "../constants/site";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
	const [active, setActive] = useState("#home");

	const links = NAV_LINKS.map(({ label, href }) => (
		<li key={href}>
			<a
				href={href}
				onClick={() => setActive(href)}
				className={`text-sm font-medium ${active === href ? "text-brand" : "text-slate-600"}`}
			>
				{label}
			</a>
		</li>
	));

	return (
		<header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
			<div className="navbar mx-auto max-w-7xl px-2 sm:px-6 lg:min-h-20 lg:px-8">
				{/* Start: hamburger on mobile, logo on desktop */}
				<div className="navbar-start">
					<div className="dropdown lg:hidden">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-square"
							aria-label="Open menu"
						>
							<svg
								width="26"
								height="26"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
							>
								<path d="M4 7h16M4 12h16M4 17h16" />
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-white p-2 shadow-lg"
						>
							{links}
						</ul>
					</div>
					<div className="hidden lg:block">
						<img
							src={Logo}
							alt="Logo"
							className="h-8 w-auto"
						/>
					</div>
				</div>

				{/* Center: logo on mobile, nav links on desktop */}
				<div className="navbar-center">
					<div className="lg:hidden">
						<img
							src={Logo}
							alt="Logo"
							className="h-8 w-auto"
						/>
					</div>
					<ul className="menu menu-horizontal hidden gap-2 px-1 lg:flex">
						{links}
					</ul>
				</div>

				{/* End: auth buttons */}
				<div className="navbar-end gap-1 sm:gap-3">
					<button className="btn btn-ghost btn-sm text-xs font-semibold sm:text-sm">
						Sign In
					</button>
					<button className="btn btn-sm rounded-full border-0 bg-brand px-4 text-xs font-semibold text-white sm:btn-md sm:px-6 sm:text-sm">
						Sign Up
					</button>
				</div>
			</div>
		</header>
	);
}
