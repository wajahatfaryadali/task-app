export type IsOpenStateType = {
  where: boolean;
  when: boolean;
  guests: boolean;
};

export type SelectedOptionsType = {
  where: SelectOption;
  when: SelectOption;
  guests: SelectOption;
};

export enum MenuKeyEnum {
  WHERE = "where",
  WHEN = "when",
  GUESTS = "guests",
}

export interface SelectOption {
  label: string;
  value: string;
}

export const whereOptions: SelectOption[] = [
  { label: "Dubai, UAE", value: "dubai" },
  { label: "Abu Dhabi, UAE", value: "abu_dhabi" },
  { label: "Sharjah, UAE", value: "sharjah" },
  { label: "Doha, Qatar", value: "doha" },
  { label: "Riyadh, Saudi Arabia", value: "riyadh" },
  { label: "Manama, Bahrain", value: "bahrain" },
  { label: "Kuwait City, Kuwait", value: "kuwait" },
];

export const whenOptions: SelectOption[] = [
  { label: "Anytime", value: "anytime" },
  { label: "This Week", value: "this_week" },
  { label: "This Weekend", value: "this_weekend" },
  { label: "Next Week", value: "next_week" },
  { label: "Next Month", value: "next_month" },
  { label: "Custom Dates", value: "custom" },
];

export const guestOptions: SelectOption[] = [
  { label: "1–5", value: "1-5" },
  { label: "5–10", value: "5-10" },
  { label: "10–20", value: "10-20" },
  { label: "20–50", value: "20-50" },
  { label: "50–100", value: "50-100" },
  { label: "100+", value: "100_plus" },
];
