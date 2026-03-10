"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports для клиентских компонентов
const CookiePopup = dynamic(() => import("./CookiePopup/CookiePopup"), { ssr: false });

export default function ClientPageWrapper() {
  const router = useRouter();

  // Add page-loaded class to body when component mounts
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  const handleNavigate = (page: "home" | "privacy" | "terms") => {
    router.push(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <CookiePopup onNavigate={handleNavigate} />
    </>
  );
}
