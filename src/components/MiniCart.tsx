import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Drawer from "./Drawer";

interface MiniCartProps {
    toggleMiniCart: React.MouseEventHandler;
}

export default function MiniCart({ toggleMiniCart }: MiniCartProps) {
    return (
        <>
            <Drawer id="minicart" toggler={toggleMiniCart}>
                <div>
                    <h1>Cart</h1>
                    <div className="w-full flex justify-center">
                        <p>Your cart is empty</p>
                    </div>
                    <div className="flex flex-col gap-2 px-5">
                        <button className="bg-black text-white text-l font-semibold py-5 px-8 rounded-full w-full border border-black">
                            Checkout
                        </button>
                        <button className=" bg-gray-100 py-5 px-8 rounded-full w-full border font-semibold border-slate-300">
                            <ShoppingBagOutlinedIcon /> Go to Cart
                        </button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
