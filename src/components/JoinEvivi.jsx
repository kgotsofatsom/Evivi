import { useState } from "react";
import { Gift, Store, Bike, PartyPopper, Check } from "lucide-react";

const ROLES = [
  {
    id: "customer",
    icon: Gift,
    title: "I want to shop",
    copy: "Join as a shopper for early access.",
    segment: "CUSTOMER_EARLY_ACCESS",
    cta: "Join Early Access",
  },
  {
    id: "seller",
    icon: Store,
    title: "I sell gifts",
    copy: "Apply to sell on the marketplace.",
    segment: "GIFT_SELLER_BETA",
    cta: "Apply for Seller Beta",
  },
  {
    id: "driver",
    icon: Bike,
    title: "I want to deliver",
    copy: "Join the delivery partner network.",
    segment: "DELIVERY_PARTNER_WAITLIST",
    cta: "Join Delivery Waitlist",
  },
  {
    id: "planner",
    icon: PartyPopper,
    title: "I'm a planner / supplier",
    copy: "Join the future marketplace.",
    segment: "FUTURE_MARKETPLACE_WAITLIST",
    cta: "Join Future Marketplace",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  consent: false,
  // seller
  businessName: "",
  businessCategory: "",
  instagram: "",
  offersDelivery: "",
  offersCollection: "",
  giftTypes: "",
  businessDescription: "",
  // driver
  vehicleType: "",
  deliveryAreas: "",
  availability: "",
  hasSmartphone: "",
  hasDriversLicence: "",
  hasVehicleLicence: "",
  verificationConsent: "",
  // planner
  serviceCategory: "",
  website: "",
  plannerDescription: "",
};

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium" style={{ color: "var(--color-near-black)" }}>
        {label} {required && <span style={{ color: "var(--color-vibrant-magenta)" }}>*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-vibrant-magenta)] bg-white";
const inputStyle = { borderColor: "var(--color-lavender-border)" };

export default function JoinEvivi() {
  const [role, setRole] = useState("customer");
  const [step, setStep] = useState(1); // 1: details, 2: (unused), 3: submitted
  const [form, setForm] = useState(initialForm);
  const [touchedRole, setTouchedRole] = useState(false);

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const selectRole = (id) => {
    setRole(id);
    setTouchedRole(true);
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: POST { segment: ROLES.find(r=>r.id===role).segment, ...form }
    setStep(3);
  };

  const active = ROLES.find((r) => r.id === role);

  return (
    <section id="join" className="py-16 md:py-24" style={{ background: "var(--color-warm-lilac)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
            Registration
          </p>
          <h2 className="mt-3 text-4xl leading-[1.05] text-plum-deep md:text-5xl">
            How would you like to join Evivi?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            One place to register — choose your role and we will only send you what is relevant.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Role cards */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {ROLES.map(({ id, icon: Icon, title, copy }) => {
              const isActive = role === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectRole(id)}
                  aria-pressed={isActive}
                  className={`rounded-[18px] border-2 bg-white p-5 text-left transition-all duration-200 ${
                    isActive ? "shadow-[0_10px_30px_-12px_rgba(194,24,91,0.35)]" : "hover:-translate-y-0.5"
                  }`}
                  style={{
                    borderColor: isActive ? "var(--color-vibrant-magenta)" : "var(--color-lavender-border)",
                    borderStyle: isActive ? "solid" : "dashed",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{
                        background: isActive ? "var(--color-vibrant-magenta)" : "var(--color-warm-lilac)",
                        color: isActive ? "#fff" : "var(--color-vibrant-magenta)",
                      }}
                    >
                      <Icon size={18} />
                    </span>
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: isActive ? "var(--color-vibrant-magenta)" : "var(--color-lavender-border)",
                        background: isActive ? "var(--color-vibrant-magenta)" : "transparent",
                      }}
                    >
                      {isActive && <Check size={12} color="#fff" strokeWidth={3} />}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-lg font-semibold" style={{ color: "var(--color-deep-plum)" }}>
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--color-muted-purple)" }}>
                    {copy}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Dynamic form */}
          <div className="rounded-[24px] border bg-white p-6 md:p-8" style={{ borderColor: "var(--color-lavender-border)" }}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold" style={{ color: "var(--color-deep-plum)" }}>
                Tell us a bit about yourself
              </h3>
              <div className="flex items-center gap-2" aria-hidden="true">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium"
                    style={{
                      background: step >= n ? "var(--color-vibrant-magenta)" : "var(--color-lavender-border)",
                      color: step >= n ? "#fff" : "var(--color-muted-purple)",
                    }}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {step === 3 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "var(--color-success-green)" }}
                >
                  <Check size={24} color="#fff" strokeWidth={3} />
                </span>
                <h4 className="font-display text-xl font-semibold" style={{ color: "var(--color-deep-plum)" }}>
                  You're on the list
                </h4>
                <p className="mt-2 max-w-[340px] text-sm" style={{ color: "var(--color-muted-purple)" }}>
                  Thanks for joining as "{active.title.replace(/^I(?:'m| want)?\s*/i, "")}" — we'll be in touch with
                  updates as Evivi's launch gets closer.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setStep(1);
                  }}
                  className="btn-secondary mt-6"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Shared fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input required value={form.fullName} onChange={update("fullName")} className={inputClass} style={inputStyle} />
                  </Field>
                  <Field label="Email address" required>
                    <input type="email" required value={form.email} onChange={update("email")} className={inputClass} style={inputStyle} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Mobile number" required>
                    <input required value={form.mobile} onChange={update("mobile")} className={inputClass} style={inputStyle} />
                  </Field>
                  <Field label={role === "seller" || role === "driver" || role === "planner" ? "City / areas served" : "Your area / city"} required>
                    <input required value={form.city} onChange={update("city")} className={inputClass} style={inputStyle} />
                  </Field>
                </div>

                {/* Seller fields */}
                {role === "seller" && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Business name" required>
                        <input required value={form.businessName} onChange={update("businessName")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Business category" required>
                        <input required value={form.businessCategory} onChange={update("businessCategory")} className={inputClass} style={inputStyle} placeholder="Florist, bakery, hamper..." />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Do you offer delivery?" required>
                        <select required value={form.offersDelivery} onChange={update("offersDelivery")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </Field>
                      <Field label="Do you offer collection?" required>
                        <select required value={form.offersCollection} onChange={update("offersCollection")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </Field>
                    </div>
                    <Field label="Types of gifts / Valentine packages sold" required>
                      <input required value={form.giftTypes} onChange={update("giftTypes")} className={inputClass} style={inputStyle} />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Instagram / website (optional)">
                        <input value={form.instagram} onChange={update("instagram")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Short business description (optional)">
                        <input value={form.businessDescription} onChange={update("businessDescription")} className={inputClass} style={inputStyle} />
                      </Field>
                    </div>
                  </>
                )}

                {/* Driver fields */}
                {role === "driver" && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Vehicle type" required>
                        <select required value={form.vehicleType} onChange={update("vehicleType")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option>Car</option>
                          <option>Motorcycle</option>
                          <option>Scooter</option>
                          <option>Other</option>
                        </select>
                      </Field>
                      <Field label="Areas willing to deliver" required>
                        <input required value={form.deliveryAreas} onChange={update("deliveryAreas")} className={inputClass} style={inputStyle} />
                      </Field>
                    </div>
                    <Field label="Typical availability" required>
                      <input required value={form.availability} onChange={update("availability")} className={inputClass} style={inputStyle} placeholder="Weekday evenings, weekends..." />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <Field label="Own smartphone?" required>
                        <select required value={form.hasSmartphone} onChange={update("hasSmartphone")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </Field>
                      <Field label="Valid driver's licence?" required>
                        <select required value={form.hasDriversLicence} onChange={update("hasDriversLicence")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </Field>
                      <Field label="Valid vehicle licence?" required>
                        <select required value={form.hasVehicleLicence} onChange={update("hasVehicleLicence")} className={inputClass} style={inputStyle}>
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="na">Not applicable</option>
                        </select>
                      </Field>
                    </div>
                    <Field label="Willing to complete identity / driver verification if selected?" required>
                      <select required value={form.verificationConsent} onChange={update("verificationConsent")} className={inputClass} style={inputStyle}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </Field>
                  </>
                )}

                {/* Planner fields */}
                {role === "planner" && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Business name" required>
                        <input required value={form.businessName} onChange={update("businessName")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Service category" required>
                        <input required value={form.serviceCategory} onChange={update("serviceCategory")} className={inputClass} style={inputStyle} placeholder="Planner, venue, decor..." />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Website / social profile (optional)">
                        <input value={form.website} onChange={update("website")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Short description (optional)">
                        <input value={form.plannerDescription} onChange={update("plannerDescription")} className={inputClass} style={inputStyle} />
                      </Field>
                    </div>
                  </>
                )}

                <label className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={update("consent")}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded"
                    style={{ accentColor: "var(--color-vibrant-magenta)" }}
                  />
                  <span className="text-xs leading-relaxed" style={{ color: "var(--color-muted-purple)" }}>
                    I agree to the{" "}
                    <a href="#" className="underline" style={{ color: "var(--color-deep-plum)" }}>
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline" style={{ color: "var(--color-deep-plum)" }}>
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {active.cta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}