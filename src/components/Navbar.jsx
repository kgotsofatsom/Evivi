import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import EviviLogo from "../assets/images/evivi-logo.png";

export default function Navbar() {
    const [navTheme, setNavTheme] = useState("transparent"); // 'transparent', 'light', or 'dark'
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Select sections or elements you want the navbar to react to
        const sections = document.querySelectorAll("section[data-navbar-theme], #hero, section");

        const observerOptions = {
            root: null,
            // Trigger right near the top of the viewport where the navbar sits
            rootMargin: "-80px 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const theme = entry.target.getAttribute("data-navbar-theme");
                    if (theme) {
                        setNavTheme(theme);
                    } else {
                        // Fallback logic based on section ID or background characteristics
                        const id = entry.target.id;
                        if (id === "hero") {
                            setNavTheme("transparent");
                        } else {
                            setNavTheme("light"); // default for content sections with white/light backgrounds
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Dynamic styles based on active section theme
    const isTransparent = navTheme === "transparent";
    const isDark = navTheme === "dark";

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isTransparent 
                    ? "bg-transparent border-b border-transparent" 
                    : isDark 
                    ? "bg-[var(--color-deep-plum)]/90 backdrop-blur-md border-b border-white/10" 
                    : "bg-white/94 backdrop-blur-md border-b border-[var(--color-lavender-border)] shadow-[0_4px_24px_rgba(59,13,92,0.08)]"
            }`}
        >
            <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 md:py-0 md:h-20">
                <a href="#hero" className="flex items-center gap-2 shrink-0">
                    <img
                        src={EviviLogo}
                        alt="Evivi"
                        className="h-12 w-auto md:h-14 object-contain"
                    />
                </a>
                
                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    <a
                        href="#seller-beta"
                        className="text-sm font-medium transition-colors hover:opacity-70"
                        style={{ color: isTransparent || isDark ? "rgba(255,255,255,0.9)" : "var(--color-muted-purple)" }}
                    >
                        Sell Gifts on Evivi
                    </a>
                    <a href="#join" className="btn-primary text-sm py-3 px-6">
                        Get Valentine Early Access
                    </a>
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden p-2 -mr-2"
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <X size={24} color={isTransparent || isDark ? "#ffffff" : "var(--color-deep-plum)"} />
                    ) : (
                        <Menu size={24} color={isTransparent || isDark ? "#ffffff" : "var(--color-deep-plum)"} />
                    )}
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {open && (
                <div
                    className="md:hidden px-5 py-6 flex flex-col gap-4 bg-white/95 backdrop-blur-md shadow-lg"
                    style={{ borderTop: "1px solid var(--color-lavender-border)" }}
                >
                    <a
                        href="#seller-beta"
                        onClick={() => setOpen(false)}
                        className="text-base font-medium py-1 transition-colors hover:text-[var(--color-vibrant-magenta)]"
                        style={{ color: "var(--color-muted-purple)" }}
                    >
                        Sell Gifts on Evivi
                    </a>
                    <a
                        href="#join"
                        onClick={() => setOpen(false)}
                        className="btn-primary text-sm py-3 px-6 w-full text-center block"
                    >
                        Get Valentine Early Access
                    </a>
                </div>
            )}
        </header>
    );
}