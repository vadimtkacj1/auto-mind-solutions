'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamic imports для клиентских компонентов
const CookiePopup = dynamic(
  () => import('./CookiePopup/CookiePopup'),
  { ssr: false }
);

export default function ClientPageWrapper() {
  const router = useRouter();

  const handleNavigate = (page: 'privacy' | 'terms') => {
    router.push(`/${page}`);
  };

  return (
    <>
      <CookiePopup onNavigate={handleNavigate} />
    </>
  );
}
