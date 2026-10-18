"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Modal that is a bottom sheet on phones and a centered dialog on wider screens. */
export function Sheet({
  open,
  onClose,
  label,
  closeLabel,
  flush = false,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  closeLabel: string;
  /** Drop the padding so content (e.g. a photo) can run edge to edge. */
  flush?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Swapping the content (e.g. opening a related item) starts from the top
  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [label]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 mx-auto max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-menu-surface p-0 font-menu-body text-menu-text backdrop:bg-black/50 sm:inset-y-0 sm:my-auto sm:h-fit sm:rounded-3xl"
    >
      {open && (
        <div className={flush ? "relative" : "relative p-6 pb-8"}>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className={`absolute end-4 top-4 z-10 grid size-9 place-items-center rounded-full border shadow-sm ${
              flush
                ? "border-white/30 bg-black/35 text-white backdrop-blur-md"
                : "border-menu-border bg-menu-surface text-menu-muted"
            }`}
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
