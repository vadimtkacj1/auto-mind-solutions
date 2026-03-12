import type { NavItem } from "@/lib/navigation";

export type HeaderNavLinkProps = {
  item: NavItem;
  pathname: string;
  className?: string;
  activeClassName: string;
  inactiveClassName: string;
  onClick?: () => void;
};

export type LogoProps = {
  className?: string;
};

export type DesktopNavProps = {
  pathname: string;
};

export type PrimaryCtaLinkProps = {
  className?: string;
  size?: "desktop" | "mobile";
};

export type MobileMenuToggleButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export type MobileMenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type MobileSidebarProps = {
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
};

export type NavLinksProps = {
  pathname: string;
  items?: NavItem[];
  variant: "desktop" | "mobile";
};

export type BrandLogoProps = {
  variant?: "default" | "white";
  className?: string;
};

export type HeaderViewProps = {
  pathname: string;
  isScrolled: boolean;
  isHidden: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

export type UseHeaderStateResult = {
  pathname: string;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
};

