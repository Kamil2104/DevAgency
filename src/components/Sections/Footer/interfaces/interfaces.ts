export interface footerOption {
    text: string,
    onClick: () => void;
}

export interface FooterProps {
    footerOptions: footerOption[];
}