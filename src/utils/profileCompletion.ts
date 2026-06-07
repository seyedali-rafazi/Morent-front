import type { User } from "../types";

const PROFILE_FIELDS = [
  { key: "name", label: "Full name" },
  { key: "email", label: "Email address" },
  { key: "phone", label: "Phone number" },
  { key: "address", label: "Delivery address" },
] as const;

export function getProfileCompletion(user?: User | null) {
  if (!user) {
    return { percent: 0, missing: PROFILE_FIELDS.map((field) => field.label) };
  }

  const filled = PROFILE_FIELDS.filter((field) => {
    const value = user[field.key];
    return typeof value === "string" && value.trim().length > 0;
  });

  const missing = PROFILE_FIELDS.filter((field) => !filled.includes(field)).map(
    (field) => field.label
  );

  return {
    percent: Math.round((filled.length / PROFILE_FIELDS.length) * 100),
    missing,
  };
}
