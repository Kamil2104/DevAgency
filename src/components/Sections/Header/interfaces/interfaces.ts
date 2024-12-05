export interface NavbarOption {
    text: string,
    type: 'text' | 'button',
    onClick: () => void;
}

export interface NavbarProps {
    navbarOptions: NavbarOption[];
}

export interface MenuProps extends NavbarProps {
    isMenuOpen: boolean,
    handleButtonClick: () => void;
}

export interface NavbarMobileViewProps {
    displayedIcon: string,
    setDisplayedIcon: (iconName: string) => void,
    toggleIsMenuOpen: () => void;
}

export interface OptionProps {
    text: string,
    onClick: () => void;
}