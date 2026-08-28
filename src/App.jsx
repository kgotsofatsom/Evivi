import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyEvivi from "./components/WhyEvivi";
import HowItWorks from "./components/HowItWorks";
import ValentineExperience from "./components/ValentineExperience";
import SellerGrowth from "./components/SellerGrowth";
// import TrustSafety from "./components/TrustSafety";
// import EarlyAccess from "./components/EarlyAccess";
import DeliveryPartners from "./components/DeliveryPartners";
import BeyondValentine from "./components/BeyondValentine";
import JoinEvivi from "./components/JoinEvivi";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-[var(--color-blush-white)] text-[var(--color-near-black)]">
            <Navbar />
            <main>
                <Hero />
                <WhyEvivi />
                <HowItWorks />
                <ValentineExperience />
                <SellerGrowth />
                <DeliveryPartners />
                <BeyondValentine />
                <JoinEvivi />
                <ClosingCTA />
            </main>
            <Footer />
        </div>
    );
}