/**
 * Single source of truth for launch-critical config.
 * Swap these three values when the real assets/links are ready —
 * nothing else in the codebase needs to change.
 */

// Path to the approved OKAO wordmark (svg/png) under /public.
// Falls back to a styled text wordmark until this is provided.
export const OKAO_LOGO = "/brand/okao-logo.png";

export const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/JNjlUu7I2Su854CEUQecbW?s=cl&p=i&mlu=4&ilr=4";

export const INSTAGRAM_URL =
  "https://www.instagram.com/okao_in?stkn=MWJwNjZoYzdncm1lZQ%3D%3D&utm_source=qr";

// October 1, 2026, 12:00 AM IST expressed as a fixed UTC offset (+05:30)
// so the countdown is correct regardless of the visitor's local timezone.
export const LAUNCH_DATE_ISO = "2026-10-01T00:00:00+05:30";
