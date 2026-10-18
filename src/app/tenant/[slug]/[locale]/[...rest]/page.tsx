import { notFound } from "next/navigation";

// A menu is a single page per locale; deeper paths do not exist.
export default function CatchAll() {
  notFound();
}
