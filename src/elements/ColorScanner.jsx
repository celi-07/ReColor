import React, { useEffect, useRef, useState } from "react"
import InteractiveButton from "./InteractiveButton"

const ColorScanner = ({
    baseColor = '',
    hoverColor = '',
    borderImg = '',
    baseBgColor = 'bg-turqoise',
    hoverBgColor = 'bg-lightPink',
    outlineColor = '',
    focusOutline = 'focus:outline-turqoise',
    borderOutline = 'border-turqoise',
    chosen = () => {},
}) => {
    const [isHoveredA, setIsHoveredA] = useState(false)
    const [isHoveredB, setIsHoveredB] = useState(false)
    const [hexInput, setHexInput] = useState(false)
    const [hexChosen, setHexChosen] = useState(false)
    const [hexCode, setHexCode] = useState('')
    const [error, setError] = useState('')
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null)
    
    const handleHexChange = (e) => {
        const value = e.target.value
        setHexCode(value)

        const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
        if (!hexPattern.test(value)) {
            setError("Invalid hex code")
        } else {
            setError("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !error && hexCode) {
            setHexInput(false)
            chosen(true)
            setHexChosen(true)
        }
    }

    const handleFileUpload = (file) => {
        if (!file) return

        const reader = new FileReader()
        reader.onload = function (e) {
            const img = new Image()
            img.src = e.target.result
            img.onload = function () {
                extractColor(img)
                setImage(img.src)
                chosen(true)
            }

            fileInputRef.current.value = ""
        }
        reader.readAsDataURL(file)
    }

    const extractColor = (img) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        canvas.width = 50
        canvas.height = 50
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const pixels = imageData.data

        let r = 0, g = 0, b = 0, count = 0
        for (let i = 0; i < pixels.length; i += 4) {
            r += pixels[i]
            g += pixels[i + 1]
            b += pixels[i + 2]
            count++
        }

        r = Math.floor(r / count)
        g = Math.floor(g / count)
        b = Math.floor(b / count)

        const extractedHex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
        setHexCode(extractedHex)
    }

    const handleBackdropPress = (e) => { 
        console.log(e.target.tagName)
        if (hexInput && e.target.tagName !== "INPUT") {
            setHexInput(false)
            setIsHoveredB(false)
            chosen(false)
        } else if (image) {
            setImage(null)
            setIsHoveredA(false)
            chosen(false)
        } else if (hexChosen) {
            setHexChosen(false)
            setHexCode('')
            setIsHoveredB(false)
            chosen(false)
        }
    }
    
    const handleDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        console.log('file', file)
        handleFileUpload(file)
    }

    return (
        <div 
            className={`relative flex justify-center items-center`} 
            onClick={handleBackdropPress} 
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e)}
        >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e.target.files[0])}
            />

            <img src={borderImg} alt=""/>
            <div className={`flex flex-col justify-center items-center gap-2 w-[300px] absolute`}>
                {!hexInput && !image && !hexChosen ? (
                    <>
                        <InteractiveButton
                            className={`${isHoveredA ? hoverBgColor : baseBgColor} ${outlineColor}`}
                            text={'Scan your color now'}
                            textStyle={`${isHoveredA ? hoverColor : baseColor} font-maurenTrial text-[16px]`}
                            onMouseEnter={() => setIsHoveredA(true)}
                            onMouseLeave={() => setIsHoveredA(false)}
                            handlePress={() => fileInputRef.current.click()}
                            disableHover={true}
                        />
                        <p className={`font-focus text-[16px] ${baseColor} text-center`}>or</p>
                        <InteractiveButton
                            className={`${isHoveredB ? hoverBgColor : baseBgColor} ${outlineColor}`}
                            text={'insert colour hex code'}
                            textStyle={`${isHoveredB ? hoverColor : baseColor} font-maurenTrial text-[16px]`}
                            onMouseEnter={() => setIsHoveredB(true)}
                            onMouseLeave={() => setIsHoveredB(false)}
                            handlePress={() => setHexInput(true)}
                            disableHover={true}
                        />
                    </>
                ) : hexInput ? (
                    <div className="w-full flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Input Hex Code (e.g., #34A853)"
                            value={hexCode}
                            onChange={handleHexChange}
                            onKeyDown={handleKeyPress}
                            className={`w-full rounded-tl-2xl rounded-br-2xl p-2 border ${borderOutline} rounded-md ${focusOutline} text-center font-focus`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1 font-focus">{error}</p>}
                    </div>
                ) : image ? (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <img src={image} alt="Uploaded" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                        <p className="text-center font-focus text-lg mt-4" style={{ color: hexCode }}>
                            Color: {hexCode}
                        </p>
                        <div
                            className="w-10 h-10 rounded-full border border-gray-300"
                            style={{ backgroundColor: hexCode }}
                        ></div>
                    </div>
                ) : hexChosen ? (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <p className="text-center font-focus text-lg mt-4" style={{ color: hexCode }}>
                            Color: {hexCode}
                        </p>
                        <div
                            className="w-10 h-10 rounded-full border border-gray-300"
                            style={{ backgroundColor: hexCode }}
                        ></div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default ColorScanner
