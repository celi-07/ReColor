import React, { useState } from "react"
import Potato from "../assets/icon/ic_potato.svg"
import CommunityDyes from '../assets/icon/ic_community_dyes.svg'
import InteractiveButton from '../elements/InteractiveButton'

const SectionCommunity2 = ({ width }) => {
    // State to manage suggestion inputs
    const [suggestionTitle, setSuggestionTitle] = useState("");
    const [suggestionSubtitle, setSuggestionSubtitle] = useState("");
    const [suggestionDescription, setSuggestionDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleSubmitSuggestion = () => {
        if (suggestionTitle.trim() && suggestionSubtitle.trim() && suggestionDescription.trim()) {
            console.log("Suggestion Submitted:", {
                title: suggestionTitle,
                subtitle: suggestionSubtitle,
                description: suggestionDescription,
            });
            setIsSubmitted(true);
            setFeedbackMessage("Thank you for your suggestion! It has been successfully submitted.");

            // Clear inputs after submission
            setSuggestionTitle("");
            setSuggestionSubtitle("");
            setSuggestionDescription("");

            // Reset submission state and feedback message after a delay
            setTimeout(() => {
                setIsSubmitted(false);
                setFeedbackMessage("");
            }, 3000);
        } else {
            setFeedbackMessage("Please fill out all fields before submitting.");
        }
    };

    return (
        <div className='flex flex-col bg-lightPink py-10 px-5 md:px-16'>
            {/* Best Suggestions Section */}
            <div className='flex flex-row flex-wrap gap-8 mb-16'>
                <div className={`flex items-center flex-col md:flex-row ${width <= 1000 ? 'w-full' : 'w-[80%]'}`}>
                    <div className='mb-5 md:mb-0 md:mr-8'>
                        <img src={Potato} alt="Potato Character" className="w-40 h-auto" />
                    </div>
                    
                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-between items-center mb-5'>
                            <h2 className='text-xl font-bold text-blue'>BEST SUGGESTIONS FROM OUR BELOVED USERS</h2>
                        </div>
                        
                        <div className='flex flex-col gap-3'>
                            <input 
                                type="text" 
                                placeholder="Enter your dye title (e.g., 'Ocean Blue')" 
                                value={suggestionTitle}
                                onChange={(e) => setSuggestionTitle(e.target.value)}
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue focus:outline-blue'
                            />
                            <input 
                                type="text" 
                                placeholder="Enter a subtitle (e.g., 'Inspired by the sea')" 
                                value={suggestionSubtitle}
                                onChange={(e) => setSuggestionSubtitle(e.target.value)}
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue focus:outline-blue'
                            />
                            <textarea 
                                placeholder="Describe your dye recipe and inspiration (e.g., 'This dye is made from blueberry skins and seaweed extract.')" 
                                value={suggestionDescription}
                                onChange={(e) => setSuggestionDescription(e.target.value)}
                                className='w-full p-3 rounded-tl-2xl rounded-br-2xl border border-blue text-blue h-32 focus:outline-blue'
                            ></textarea>
                            
                            <div className='mt-3 flex flex-col'>
                                <InteractiveButton 
                                    text={isSubmitted ? "Suggestion Sent!" : "Send your suggestions"}
                                    className={`bg-blue ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    outlineColor="outline-blue"
                                    textStyle="text-sm"
                                    disableHover={true}
                                    disabled={isSubmitted}
                                    handlePress={handleSubmitSuggestion}
                                />
                                {feedbackMessage && (
                                    <p className={`mt-2 text-sm ${isSubmitted ? 'text-green-500' : 'text-red-500'}`}>
                                        {feedbackMessage}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Community Dyes Stats Section */}
            <div className='flex flex-row flex-wrap gap-10'>
                <div className='relative'>
                    <img src={CommunityDyes} alt="Community Dyes" className="max-w-xs" />
                </div>
                
                <div className='flex-1'>
                    <h2 className='text-2xl font-bold text-blue mb-3'>SO FAR, WE HAVE ADOPTED</h2>
                    <h1 className='text-4xl font-bold text-blue mb-5'>78 RECIPES THAT OUR BELOVED USERS SHARED ON COMMUNITY</h1>
                    <p className='text-blue'>
                    🌿 <b>"Each recipe tells a story — of culture, creativity, and color."</b> <br />
                    Our community continues to inspire with unique dye blends passed down through generations or discovered through bold experimentation. Join us as we turn shared wisdom into vibrant possibilities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionCommunity2