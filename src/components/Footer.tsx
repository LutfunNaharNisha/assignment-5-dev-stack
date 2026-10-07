import Logo from "../assets/logo-text.png";
import { FOOTER_GROUPS, SOCIAL_LINKS } from "../constants/site";

export default function Footer() {
	return (
		<footer
			id="footer"
			className="border-t border-slate-100"
		>
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 max-lg:text-center lg:grid-cols-[2fr_1fr_1fr_1fr]">
					<div className="max-lg:flex max-lg:flex-col max-lg:items-center">
						<img
							src={Logo}
							alt="Logo"
							className="mx-auto h-8 w-auto lg:mx-0"
						/>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
							Curated tools, technologies, and resources for
							developers building modern software.
						</p>
						<div className="mt-5 flex gap-4 text-sm font-medium text-slate-600">
							{SOCIAL_LINKS.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noreferrer"
									className="hover:text-brand"
								>
									{s.label}
								</a>
							))}
						</div>
					</div>

					{FOOTER_GROUPS.map((group) => (
						<nav
							key={group.title}
							aria-label={group.title}
							className="max-lg:hidden"
						>
							<h4 className="text-xs font-bold uppercase tracking-wider">
								{group.title}
							</h4>
							<ul className="mt-4 space-y-3 text-sm text-slate-500">
								{group.links.map((l) => (
									<li key={l}>
										<a
											href="#"
											className="hover:text-brand"
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>

				<div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
					<p>
						© {new Date().getFullYear()} Dev Stack. All rights
						reserved.
					</p>
					<div className="flex gap-5">
						<a
							href="#"
							className="hover:text-brand"
						>
							Privacy
						</a>
						<a
							href="#"
							className="hover:text-brand"
						>
							Terms
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
