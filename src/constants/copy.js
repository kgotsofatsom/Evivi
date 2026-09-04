export const CTA = {
  buyer: {
    label: "Get Valentine Early Access",
    subtext: "Be the first to shop gifts for your person",
    href: "#join",
  },
  seller: {
    label: "Sell Your Gift on Evivi",
    subtext: "Grow your gift business with Evivi",
    href: "#join",
  },
};

// Generic version — dispatches the same event JoinEvivi.jsx listens for,
// pre-selecting whichever role is passed in. selectSellerRole kept as a
// thin wrapper so the Navbar fix from before still works unchanged.
export function selectRole(roleId) {
  window.dispatchEvent(new CustomEvent("evivi-select-role", { detail: roleId }));
}

export function selectSellerRole() {
  selectRole("seller");
}