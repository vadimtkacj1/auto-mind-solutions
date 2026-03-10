// Form data types
export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  businessType: string;
}

export interface ShortLeadFormData {
  name: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
}

// Service type
export interface Service {
  id: number;
  title: string;
  description: string[];
  icon: string;
}

// Portfolio item type
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  url?: string;
  tags?: string[];
}

// Why Us pillar type
export interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: string;
}
