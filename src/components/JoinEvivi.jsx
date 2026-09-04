import { useState, useRef, useEffect } from "react";
import { Gift, Store, Bike, Users2, Check, ChevronDown, ChevronRight, Heart } from "lucide-react";

const ROLES = [
  {
    id: "customer",
    icon: Gift,
    title: "Buy Gifts",
    copy: "Get early access to discover and shop Valentine gifts.",
    group: "valentine",
    segment: "CUSTOMER_EARLY_ACCESS",
    cta: "Get Valentine Early Access",
  },
  {
    id: "seller",
    icon: Store,
    title: "Join as a Gift Seller",
    copy: "Apply to sell on Evivi and prepare your business for Valentine 2027.",
    group: "valentine",
    segment: "GIFT_SELLER_BETA",
    cta: "Join as a Seller",
  },
  {
    id: "driver",
    icon: Bike,
    title: "Become a Delivery Partner",
    copy: "Join the waitlist for future Evivi delivery opportunities.",
    group: "valentine",
    segment: "DELIVERY_PARTNER_WAITLIST",
    cta: "Join Delivery Waitlist",
  },
  {
    id: "planner",
    icon: Users2,
    title: "I'm an Event Planner or Coordinator",
    copy: "Join the waitlist to offer your planning services on Evivi in the future.",
    group: "future",
    segment: "EVENT_PLANNER_WAITLIST",
    cta: "Join the Waitlist",
  },
  {
    id: "supplier",
    icon: Store,
    title: "I'm an Event Supplier",
    copy: "Register your interest in supplying products or services through Evivi in the future.",
    group: "future",
    segment: "EVENT_SUPPLIER_WAITLIST",
    cta: "Register Interest",
  },
];

const PROVINCES_AND_CITIES = {
  "Gauteng": ["Johannesburg", "Pretoria", "Sandton", "Centurion", "Soweto", "Randburg", "Midrand", "Benoni"],
  "Western Cape": ["Cape Town", "Stellenbosch", "Somerset West", "Bellville", "Paarl", "George"],
  "KwaZulu-Natal": ["Durban", "Umhlanga", "Pietermaritzburg", "Ballito", "Hillcrest"],
  "Eastern Cape": ["Gqeberha (Port Elizabeth)", "East London", "Mthatha"],
  "Free State": ["Bloemfontein", "Welkom"],
  "Limpopo": ["Polokwane", "Tzaneen", "Thohoyandou"],
  "Mpumalanga": ["Nelspruit (Mbombela)", "Witbank (eMalahleni)", "Secunda"],
  "North West": ["Rustenburg", "Potchefstroom", "Mahikeng"],
  "Northern Cape": ["Kimberley", "Upington"],
};

const BUSINESS_CATEGORIES = [
  "Florist",
  "Bakery",
  "Hamper & gift box",
  "Chocolatier / confectionery",
  "Balloons & decor",
  "Jewellery & accessories",
  "Personalised / custom gifts",
  "Wine & spirits",
  "Other",
];

const AVAILABILITY_OPTIONS = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Weekends",
  "Public holidays",
];

const SERVICE_CATEGORIES = [
  "Event planner",
  "Venue",
  "Decor & styling",
  "Catering",
  "Photography / videography",
  "Entertainment",
  "Florist",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  mobile: "",
  province: "",
  city: "",
  consent: false,
  // seller
  businessName: "",
  businessCategory: [],
  instagram: "",
  offersDelivery: "",
  offersCollection: "",
  businessDescription: "",
  // driver
  vehicleType: "",
  availability: [],
  hasSmartphone: "",
  hasDriversLicence: "",
  hasVehicleLicence: "",
  verificationConsent: "",
  // planner / supplier
  serviceCategory: [],
  website: "",
  plannerDescription: "",
};

function Field({ label, children, required }) {
  return (
    <div className="block">
      <span className="mb-1.5 block text-sm font-medium" style={{ color: "var(--color-near-black, #1A1A1A)" }}>
        {label} {required && <span style={{ color: "var(--color-vibrant-magenta, #C2185B)" }}>*</span>}
      </span>
      {children}
    </div>
  );
}

// Custom Styled Dropdown Component (single choice)
function CustomSelect({ value, onChange, options, placeholder, disabled = false, required = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between rounded-xl border px-4 py-2.5 text-base outline-none transition-all bg-white text-left ${
          disabled ? "bg-gray-50 opacity-60 cursor-not-allowed" : "focus:border-[var(--color-vibrant-magenta,#C2185B)]"
        }`}
        style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}>
          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-base transition-colors flex items-center justify-between ${
                  isSelected ? "bg-pink-50 text-[var(--color-vibrant-magenta,#C2185B)] font-medium" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{opt}</span>
                {isSelected && <Check size={14} style={{ color: "var(--color-vibrant-magenta, #C2185B)" }} />}
              </button>
            );
          })}
        </div>
      )}

      {required && (
        <input
          type="text"
          value={value}
          required
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none h-0 w-0"
        />
      )}
    </div>
  );
}

// Custom Styled Dropdown Component (multi choice, with checkboxes + chips)
function MultiSelect({ value, onChange, options, placeholder, required = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (opt) => {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-base outline-none transition-all bg-white text-left focus:border-[var(--color-vibrant-magenta,#C2185B)]"
        style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}
      >
        {value.length === 0 ? (
          <span className="text-gray-400">{placeholder}</span>
        ) : (
          <span className="flex flex-wrap gap-1.5 py-0.5">
            {value.map((v) => (
              <span
                key={v}
                className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ background: "var(--color-warm-lilac, #F3E9F7)", color: "var(--color-vibrant-magenta, #C2185B)" }}
              >
                {v}
              </span>
            ))}
          </span>
        )}
        <ChevronDown size={16} className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-lg" style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}>
          {options.map((opt) => {
            const isSelected = value.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleOption(opt)}
                className={`w-full px-4 py-2 text-left text-base transition-colors flex items-center gap-2.5 ${
                  isSelected ? "bg-pink-50 text-[var(--color-vibrant-magenta,#C2185B)] font-medium" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded border-2"
                  style={{
                    borderColor: isSelected ? "var(--color-vibrant-magenta, #C2185B)" : "var(--color-lavender-border, #E4D8F0)",
                    background: isSelected ? "var(--color-vibrant-magenta, #C2185B)" : "transparent",
                  }}
                >
                  {isSelected && <Check size={10} color="#fff" strokeWidth={3} />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {required && (
        <input
          type="text"
          value={value.length ? "filled" : ""}
          required
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none h-0 w-0"
        />
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-colors focus:border-[var(--color-vibrant-magenta,#C2185B)] bg-white";
const inputStyle = { borderColor: "var(--color-lavender-border, #E4D8F0)" };

export default function JoinEvivi() {
  const [role, setRole] = useState("customer");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [touchedRole, setTouchedRole] = useState(false);

  useEffect(() => {
    const applyRole = (selectedRole) => {
      if (ROLES.some((r) => r.id === selectedRole)) {
        setRole(selectedRole);
        setTouchedRole(true);
        setStep(1);

        setTimeout(() => {
          document.getElementById("join")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      }
    };

    // Handle role passed via cross-page navigation (Link + sessionStorage)
    const storedRole = sessionStorage.getItem("evivi-selected-role");
    if (storedRole) {
      applyRole(storedRole);
      sessionStorage.removeItem("evivi-selected-role");
    }

    // Handle role passed via same-page CustomEvent (existing button behavior)
    const handleRoleSelection = (event) => {
      applyRole(event.detail);
    };

    window.addEventListener("evivi-select-role", handleRoleSelection);

    return () => {
      window.removeEventListener("evivi-select-role", handleRoleSelection);
    };
  }, []);

  const update = (key, value) => {
    setForm((f) => {
      if (key === "province") {
        return { ...f, province: value, city: "" };
      }
      return { ...f, [key]: value };
    });
  };

  const updateInput = (key) => (e) => {
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
    setStep(3);
  };

  const active = ROLES.find((r) => r.id === role);
  const availableCities = form.province ? PROVINCES_AND_CITIES[form.province] || [] : [];

  return (
    <section id="join" className="py-16 md:py-24" style={{ background: "var(--color-warm-lilac, #F3E9F7)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p
            className="text-[12px] font-semibold text-magenta uppercase"
            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
          >
            Registration
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl">
            How would you like to join Evivi?{" "}
            <Heart size={26} fill="currentColor" className="inline text-[#ff8fa3] align-middle" aria-hidden="true" />
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            One place to register — choose your role and we will only send you what is relevant.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Role list — grouped, single-column rows */}
          <div className="flex flex-col gap-3">
            {["valentine", "future"].map((group) => (
              <div key={group}>
                <p
                  className="mb-3 text-[11px] font-semibold uppercase text-magenta"
                  style={{ letterSpacing: "1.2px" }}
                >
                  {group === "valentine" ? "Available for Valentine 2027" : "Coming as Evivi expands"}
                </p>
                <div className="flex flex-col gap-3">
                  {ROLES.filter((r) => r.group === group).map(({ id, icon: Icon, title, copy }) => {
                    const isActive = role === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => selectRole(id)}
                        aria-pressed={isActive}
                        className="flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200"
                        style={{
                          borderWidth: isActive ? "2px" : "1px",
                          borderColor: isActive ? "var(--color-vibrant-magenta, #C2185B)" : "var(--color-lavender-border, #E4D8F0)",
                          background: "#fff",
                        }}
                      >
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            background: isActive ? "var(--color-vibrant-magenta, #C2185B)" : "var(--color-warm-lilac, #F3E9F7)",
                            color: isActive ? "#fff" : "var(--color-vibrant-magenta, #C2185B)",
                          }}
                        >
                          <Icon size={22} aria-hidden="true" />
                        </span>
                        <div className="flex-1">
                          <p className="font-display text-base font-semibold" style={{ color: "var(--color-deep-plum, #3B0D5C)" }}>
                            {title}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed" style={{ color: "var(--color-muted-purple, #6B5B7B)" }}>
                            {copy}
                          </p>
                        </div>
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2"
                          style={{
                            borderColor: isActive ? "var(--color-vibrant-magenta, #C2185B)" : "var(--color-lavender-border, #E4D8F0)",
                            background: isActive ? "var(--color-vibrant-magenta, #C2185B)" : "transparent",
                          }}
                        >
                          {isActive && <Check size={14} color="#fff" strokeWidth={3} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic form */}
          <div className="rounded-[24px] border bg-white p-6 md:p-8" style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}>
            <h3 className="mb-6 font-display text-xl font-semibold" style={{ color: "var(--color-deep-plum, #3B0D5C)" }}>
              Tell us a bit about yourself
            </h3>

            {step === 3 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "var(--color-success-green, #2E7D32)" }}
                >
                  <Check size={24} color="#fff" strokeWidth={3} />
                </span>
                <h4 className="font-display text-xl font-semibold" style={{ color: "var(--color-deep-plum, #3B0D5C)" }}>
                  You're on the list
                </h4>
                <p className="mt-2 max-w-[340px] text-sm" style={{ color: "var(--color-muted-purple, #6B5B7B)" }}>
                  Thanks for joining Evivi to "{active.title}" — we'll be in touch with
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
                    <input required value={form.fullName} onChange={updateInput("fullName")} className={inputClass} style={inputStyle} />
                  </Field>
                  <Field label="Email address" required>
                    <input type="email" required value={form.email} onChange={updateInput("email")} className={inputClass} style={inputStyle} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Mobile number" required>
                    <input required value={form.mobile} onChange={updateInput("mobile")} className={inputClass} style={inputStyle} />
                  </Field>
                  <Field label="Province" required>
                    <CustomSelect
                      required
                      value={form.province}
                      onChange={(val) => update("province", val)}
                      options={Object.keys(PROVINCES_AND_CITIES)}
                      placeholder="Select province"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="City / Area" required>
                    <CustomSelect
                      required
                      value={form.city}
                      onChange={(val) => update("city", val)}
                      options={availableCities}
                      placeholder={form.province ? "Select city / area" : "Select province first"}
                      disabled={!form.province}
                    />
                  </Field>
                </div>

                {/* Seller fields */}
                {role === "seller" && (
                  <>
                    <Field label="Business name" required>
                      <input required value={form.businessName} onChange={updateInput("businessName")} className={inputClass} style={inputStyle} />
                    </Field>
                    <Field label="Business category" required>
                      <MultiSelect
                        required
                        value={form.businessCategory}
                        onChange={(val) => update("businessCategory", val)}
                        options={BUSINESS_CATEGORIES}
                        placeholder="Select all categories that apply"
                      />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Do you offer delivery?" required>
                        <CustomSelect
                          required
                          value={form.offersDelivery}
                          onChange={(val) => update("offersDelivery", val)}
                          options={["Yes", "No"]}
                          placeholder="Select"
                        />
                      </Field>
                      <Field label="Do you offer collection?" required>
                        <CustomSelect
                          required
                          value={form.offersCollection}
                          onChange={(val) => update("offersCollection", val)}
                          options={["Yes", "No"]}
                          placeholder="Select"
                        />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Instagram / website (optional)">
                        <input value={form.instagram} onChange={updateInput("instagram")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Short business description (optional)">
                        <input value={form.businessDescription} onChange={updateInput("businessDescription")} className={inputClass} style={inputStyle} />
                      </Field>
                    </div>
                  </>
                )}

                {/* Driver fields */}
                {role === "driver" && (
                  <>
                    <Field label="Vehicle type" required>
                      <CustomSelect
                        required
                        value={form.vehicleType}
                        onChange={(val) => update("vehicleType", val)}
                        options={["Car", "Motorcycle", "Scooter", "Other"]}
                        placeholder="Select"
                      />
                    </Field>
                    <Field label="Typical availability" required>
                      <MultiSelect
                        required
                        value={form.availability}
                        onChange={(val) => update("availability", val)}
                        options={AVAILABILITY_OPTIONS}
                        placeholder="Select all that apply"
                      />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <Field label="Own smartphone?" required>
                        <CustomSelect
                          required
                          value={form.hasSmartphone}
                          onChange={(val) => update("hasSmartphone", val)}
                          options={["Yes", "No"]}
                          placeholder="Select"
                        />
                      </Field>
                      <Field label="Valid driver's licence?" required>
                        <CustomSelect
                          required
                          value={form.hasDriversLicence}
                          onChange={(val) => update("hasDriversLicence", val)}
                          options={["Yes", "No"]}
                          placeholder="Select"
                        />
                      </Field>
                      <Field label="Valid vehicle licence?" required>
                        <CustomSelect
                          required
                          value={form.hasVehicleLicence}
                          onChange={(val) => update("hasVehicleLicence", val)}
                          options={["Yes", "No", "Not applicable"]}
                          placeholder="Select"
                        />
                      </Field>
                    </div>
                    <Field label="Willing to complete identity / driver verification if selected?" required>
                      <CustomSelect
                        required
                        value={form.verificationConsent}
                        onChange={(val) => update("verificationConsent", val)}
                        options={["Yes", "No"]}
                        placeholder="Select"
                      />
                    </Field>
                  </>
                )}

                {/* Planner / Supplier fields — same shape for both future-marketplace roles */}
                {(role === "planner" || role === "supplier") && (
                  <>
                    <Field label="Business name" required>
                      <input required value={form.businessName} onChange={updateInput("businessName")} className={inputClass} style={inputStyle} />
                    </Field>
                    <Field label={role === "planner" ? "Service category" : "Products / services offered"} required>
                      <MultiSelect
                        required
                        value={form.serviceCategory}
                        onChange={(val) => update("serviceCategory", val)}
                        options={SERVICE_CATEGORIES}
                        placeholder="Select all categories that apply"
                      />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Website / social profile (optional)">
                        <input value={form.website} onChange={updateInput("website")} className={inputClass} style={inputStyle} />
                      </Field>
                      <Field label="Short description (optional)">
                        <input value={form.plannerDescription} onChange={updateInput("plannerDescription")} className={inputClass} style={inputStyle} />
                      </Field>
                    </div>
                  </>
                )}

                <label className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={updateInput("consent")}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded"
                    style={{ accentColor: "var(--color-vibrant-magenta, #C2185B)" }}
                  />
                  <span className="text-xs leading-relaxed" style={{ color: "var(--color-muted-purple, #6B5B7B)" }}>
                    I agree to the{" "}
                    <a href="#" className="underline" style={{ color: "var(--color-deep-plum, #3B0D5C)" }}>
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline" style={{ color: "var(--color-deep-plum, #3B0D5C)" }}>
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                  {active.cta}
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}