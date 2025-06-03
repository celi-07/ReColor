import React, { useContext } from "react";

import InteractiveButton from "../elements/InteractiveButton";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";

function ProductCard({ product, width, textColor = 'text-turqoise', mainTextColor = 'text-white', mainBackgroundColor = 'bg-lightPink', setShowItemAdded = () => {} }) {
    const navigate = useNavigate();

    const [isHoverCheckout, setIsHoverCheckout] = React.useState(false);
    const [isHoverAdd, setIsHoverAdd] = React.useState(false);
    const [feedbackMessage, setFeedbackMessage] = React.useState(""); // State for feedback message
    const { addItem, uncheckAllItems } = useContext(CheckoutContext);

    const handleCheckout = () => {
        uncheckAllItems();
        addItem(product);
        navigate('/checkout');
    };

    const handleAdd = () => {
        addItem(product);
        setShowItemAdded(true);
        setFeedbackMessage(`${product.name} has been added to your cart!`); // Set feedback message
        setTimeout(() => {
            setShowItemAdded(false);
            setFeedbackMessage(""); // Clear feedback message after 3 seconds
        }, 3000);
    };

    return (
        <div className="relative">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 fill-blue"
            />
            <h3 className={`font-maurenTrial ${mainTextColor} text-lg`}>{product.name}</h3>
            <p className={`font-focusGrotesk ${mainTextColor} text-sm`}>{product.description}</p>
            <p className={`font-focusGrotesk ${mainTextColor} text-sm mt-2`}>{product.price}</p>
            <div className="font-maurenTrial flex justify-center items-center gap-4 mt-4">
                <InteractiveButton
                    handlePress={handleCheckout}
                    text='CHECKOUT'
                    className={`${width < 650 ? 'w-[100px] outline outline-black' : 'w-[150px]'} ${isHoverCheckout ? '' : 'bg-lightPink'}`}
                    outlineColor={'outline-lightPink'}
                    textStyle={`${width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'} ${isHoverCheckout ? 'text-lightPink' : textColor}`}
                    onMouseEnter={() => setIsHoverCheckout(true)}
                    onMouseLeave={() => setIsHoverCheckout(false)}
                    disableHover={true}
                />

                <InteractiveButton
                    handlePress={handleAdd}
                    text='+'
                    className={`${width < 650 ? 'w-[30px] outline outline-2' : 'w-[50px] outline outline-2 outline-lightPink'} ${isHoverAdd ? 'bg-lightPink' : ''}`}
                    outlineColor="outline-lightPink"
                    textStyle={`${width < 650 ? 'text-[10px]' : width < 700 ? 'text-[12px]' : 'text-[16px]'} ${isHoverAdd ? textColor : 'text-lightPink'}`}
                    onMouseEnter={() => setIsHoverAdd(true)}
                    onMouseLeave={() => setIsHoverAdd(false)}
                    disableHover={true}
                />
            </div>
            {/* Feedback message */}
            {feedbackMessage && (
                <p className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md text-sm">
                    {feedbackMessage}
                </p>
            )}
        </div>
    );
}

export default ProductCard;
