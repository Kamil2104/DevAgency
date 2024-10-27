export interface NavbarOption {
    text: string,
    type: 'text' | 'button'
}

export interface NavbarProps {
    navbarOptions: NavbarOption[];
}

export interface OptionProps {
    text: string
}