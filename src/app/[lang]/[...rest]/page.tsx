import { notFound } from "next/navigation";

// Unknown marketing paths render the localized not-found page.
export default function CatchAll() {
  notFound();
}
