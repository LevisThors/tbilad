import BackgroundOverlay from "./BackgroundOverlay";

interface DrawerProps {
    toggler: React.MouseEventHandler;
    id: string;
    children: React.ReactNode;
}
export default function Drawer({ toggler, id, children }: DrawerProps) {
    return (
        <>
            <section
                className="move-in-right bg-white px-5 z-20 fixed top-0 right-0 w-96 h-full transition-all duration-500 transform shadow-lg peer-checked:translate-x-0"
                id={id}
            >
                {children}
            </section>
            <BackgroundOverlay toggler={toggler} />
        </>
    );
}
