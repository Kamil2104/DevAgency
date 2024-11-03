export interface NavbarOption {
    text: string,
    type: 'text' | 'button',
    onClick: () => void;
}

export interface NavbarProps {
    navbarOptions: NavbarOption[];
}

export interface OptionProps {
    text: string;
    onClick: () => void;
}