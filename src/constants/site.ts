export const NAV_LINKS = [
	{ label: "Home", href: "#home" },
	{ label: "Technologies", href: "#technologies" },
	{ label: "Projects", href: "#projects" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
	{ label: "GitHub", href: "https://github.com" },
	{ label: "Twitter", href: "https://twitter.com" },
	{ label: "LinkedIn", href: "https://linkedin.com" },
];

export const FOOTER_GROUPS = [
	{ title: "Product", links: ["Home", "Technologies", "Projects"] },
	{ title: "Company", links: ["About", "Contact", "Careers"] },
	{ title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

/** Badge colour per badge label; unknown badges fall back to "default". */
export const BADGE_STYLES: Record<string, string> = {
	"Popular": "bg-sky-50 text-sky-600",
	"Versatile": "bg-emerald-50 text-emerald-600",
	"Fast": "bg-orange-50 text-orange-500",
	"SSR / Edge": "bg-violet-50 text-violet-600",
	"Standard": "bg-green-50 text-green-600",
	"Top SQL": "bg-blue-50 text-blue-600",
	"Modern": "bg-cyan-50 text-cyan-600",
	"Containers": "bg-blue-50 text-blue-600",
	"Cache": "bg-red-50 text-red-500",
	"Ubiquitous": "bg-amber-50 text-amber-600",
	"Essential": "bg-sky-50 text-sky-600",
	"Robust": "bg-sky-50 text-sky-600",
	"default": "bg-slate-100 text-slate-600",
};
