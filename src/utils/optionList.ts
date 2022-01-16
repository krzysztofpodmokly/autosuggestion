export const optionList = [
  {
    label: "Account code/Corporate ID",
    value: "fare-codes",
    checked: false,
    hover: false,
  },
  {
    label: "Alliance",
    value: "alliance-priorities",
    checked: false,
  },
  {
    label: "Cabin by leg",
    value: "cabin-leg",
    checked: false,
  },
  {
    label: "Carrier by leg",
    value: "carrier-leg",
    checked: false,
  },
  {
    label: "Connection Time",
    value: "connection-time",
    disables: ["exclude-overnight-connections"],
    checked: false,
  },
  {
    label: "Currency Code",
    value: "currency-code",
    checked: false,
  },
  {
    label: "Exclude Fare Source",
    value: "exclude-fares",
    checked: false,
  },
  {
    label: "Exclude Overnight Connections",
    value: "exclude-overnight-connections",
    disables: ["connection-time"],
    checked: false,
  },
  {
    label: "Exclude Restrictions - Advance Purchase",
    value: "exclude-restrictions-purchase",
    checked: false,
  },
];
