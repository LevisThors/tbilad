import toggleOverlay from "./toggleOverlay";

export default function toggleDrawer(
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id: string
) {
    if (isOpen) {
        const drawer = document.getElementById(id);
        drawer?.classList.add("close-drawer");
        toggleOverlay();

        setTimeout(() => {
            setIsOpen((prevState: boolean) => !prevState);
        }, 300);
    } else {
        setIsOpen((prevState: boolean) => !prevState);
    }
}
