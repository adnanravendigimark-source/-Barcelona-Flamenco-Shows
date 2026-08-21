"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLogoutButton from "./AdminLogoutButton";
import { AdminSidebarNav, AdminMobileNav } from "./AdminNav";
import { ExternalLinkIcon, MenuIcon, CloseIcon } from "./icons";
import ToastProvider from "./Toast";
import type { PageKey } from "@/lib/pageAccess";

// Wraps the whole dashboard chrome (sidebar + header + main) in one client
// component so the sidebar's open/closed state can live in one place and
// drive both the <aside> width and the header's toggle button. The parent
// layout.tsx stays a Server Component (it needs the session), and just
// passes the already-resolved, serializable bits in as props.
export default function AdminShell({
  isAdmin,
  pages,
  sessionEmail,
  sessionRole,
  brandName,
  brandColorClass,
  avatarColorClass,
  children,
}: {
  isAdmin: boolean;
  pages: PageKey[];
  sessionEmail?: string;
  sessionRole?: string;
  brandName: string;
  brandColorClass: string;
  avatarColorClass: string;
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("admin-sidebar-collapsed");
    if (saved === "1") setCollapsed(true);
    setHydrated(true);
  }, []);

  function toggle() {
    setCollapsed((prev) => {
      const next = !prev;
      window.localStorage.setItem("admin-sidebar-collapsed", next ? "1" : "0");
      return next;
    });
  }

  return (
    <div className="flex min-h-screen bg-stone-100 font-body text-stone-900">
      <div
        className={`shrink-0 overflow-hidden sm:transition-[width] sm:duration-200 sm:ease-in-out ${collapsed ? "sm:w-0" : "sm:w-64"
          } ${hydrated ? "" : "sm:w-64"}`}
      >
        <aside className="hidden h-full w-64 flex-col bg-stone-900 text-white sm:flex">
          {/* Sidebar is narrower than the public header, so this is a
              purpose-sized brand mark rather than the full <Logo /> — that
              component's wordmark needs more width than 256px leaves room
              for. Same flamenco dancer glyph as Logo.tsx's icon and
              app/icon.tsx's favicon, on the same red gradient badge, so all
              three brand marks (public header, admin sidebar, browser tab)
              match. */}
          <div className="flex items-center gap-2.5 border-b border-white/10 px-5 py-5">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-900 shadow-md">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <circle cx="24" cy="14" r="3.2" fill="#fde047" />
                <path
                  d="M16 11C18 7.5 21.5 6 24 6C26.5 6 30 7.5 32 11"
                  stroke="#fde047"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M22 17.5C22 17.5 21 21 21.5 25C22 29 20 32 14 38C20 37 25 36 28 39C32 43 37 42 41 40C36 36 34 33 31 29C28.5 25.5 27 21 26 17.5H22Z"
                  fill="#fde047"
                />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold italic text-white">{brandName}</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">Content Admin</p>
            </div>
          </div>
          <AdminSidebarNav isAdmin={isAdmin} pages={pages} />
          <div className="border-t border-white/10 p-4">
            <Link
              href="/"
              target="_blank"
              className="mb-2 flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" /> View live site
            </Link>
            <AdminLogoutButton />
          </div>
        </aside>
      </div>

      <div className="min-w-0 flex-1">
        {/* Top admin bar */}
        <header className="flex items-center justify-between border-b border-stone-900/10 bg-white px-4 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              title={collapsed ? "Open sidebar" : "Close sidebar"}
              className="hidden shrink-0 items-center justify-center rounded-lg border border-stone-200 p-2 text-stone-600 transition hover:bg-stone-50 sm:flex"
            >
              {collapsed ? <MenuIcon className="h-5 w-5" /> : <CloseIcon className="h-5 w-5" />}
            </button>
            <div className="sm:hidden">
              <p className="font-display text-base font-bold">{brandName}</p>
              <p className={`text-[10px] font-semibold uppercase tracking-widest ${brandColorClass}`}>
                Content Admin
              </p>
            </div>
            <div className="hidden items-center gap-2 text-sm text-stone-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {sessionEmail && (
                <>
                  {sessionEmail}
                  <span
                    className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${isAdmin ? "bg-gold-500/15 text-gold-600" : "bg-stone-200 text-stone-600"
                      }`}
                  >
                    {sessionRole}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:bg-stone-50 sm:flex"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" /> View Site
            </Link>
            <span className="hidden sm:block">
              <AdminLogoutButton compact />
            </span>
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:hidden ${avatarColorClass}`}
            >
              {sessionEmail?.slice(0, 1).toUpperCase() || "A"}
            </span>
          </div>
        </header>

        <AdminMobileNav isAdmin={isAdmin} pages={pages} />
        <main className="mx-auto max-w-[100rem] px-4 py-8 sm:px-8 sm:py-10">
          <ToastProvider>{children}</ToastProvider>
        </main>
      </div>
    </div>
  );
}
