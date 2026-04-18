export function decodeEmail(email: string) {
  return atob(email);
}

export function decodePhoneNumber(phone: string) {
  return atob(phone);
}

export function formatPhoneNumber(phone: string) {
  if (!phone) return "";

  // remove all non-digits
  let digits = phone.replace(/\D/g, "");

  // remove existing country code if present
  if (digits.startsWith("91") && digits.length > 10) {
    digits = digits.slice(2);
  }

  // keep only last 10 digits
  digits = digits.slice(-10);

  // format: 98765 43210
  let formatted =
    digits.length > 5
      ? digits.replace(/(\d{5})(\d+)/, "$1 $2")
      : digits;

  return `+91 ${formatted}`;
}