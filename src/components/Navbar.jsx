import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import EviviLogo from "../assets/images/evivi-logo.png";

export default function Navbar() {
    const [ scrolled, setScrolled ] = useState(false);
    const [ open, setOpen ] = useState(false);

    useEffect(() =>{
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "shadow-[0_4px_24px_rgba(59,13,92,0.08)]" : ""
            }`}
            style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid var(--color-lavender-border)",
              }}
            >
                <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 md:py-0 md:h-20">
                    <a href="#hero" className="flex items-center gap-2 shrink-0">
                        {/* <span
                            className="font-display text-2xl md:text-[28px] font-semibold tracking-wide"
                            style={{ color: "var(--color-deep-plum)" }}
                        >
                            EVIVI
                        </span> */}
                        <img
                            src={EviviLogo}
                            alt="Evivi"
                            className="h-12 w-auto md:h-14 object-contain"
                        />
                    </a>
                    <div className="hidden items-center gap-3 md:flex">
                        <a
                            href="#seller-beta"
                            className="text-sm font-medium transition-colors hover:opacity-70"
                            style={{ color: "var(--color-muted-purple)" }}
                        >
                            Sell on Evivi
                        </a>
                        <a href="#join" className="btn-primary text-sm py-3 px-6">
                            Get Early Access
                        </a>
                    </div>
                    <button
                        className="md:hidden p-2 -mr-2"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? (
                        <X size={24} color="var(--color-deep-plum)" />
                        ) : (
                        <Menu size={24} color="var(--color-deep-plum)" />
                        )}
                    </button>
                    {open && (
                        <div
                            className="md:hidden px-5 pb-5 flex flex-col gap-3"
                            style={{ borderTop: "1px solid var(--color-lavender-border)" }}
                            >
                            <a
                                href="#seller-beta"
                                onClick={() => setOpen(false)}
                                className="pt-4 text-sm font-medium"
                                style={{ color: "var(--color-muted-purple)" }}
                            >
                                Sell on Evivi
                            </a>
                            <a
                                href="#join"
                                onClick={() => setOpen(false)}
                                className="btn-primary text-sm py-3 px-6 w-full"
                            >
                                Get Early Access
                            </a>
                        </div>
                   )}
                </nav>
                
        </header>
    );
}