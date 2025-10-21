// Типы для компонентов

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HeaderProps {
  onOpenModal: () => void;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
