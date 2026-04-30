import React from 'react';
import "./MovieBanner.css";

const MovieBanner = () => {
    // Liste de tes images (remplace par tes URLs réelles)
    const images = [
        "https://i.pinimg.com/1200x/fd/d1/35/fdd13560c71adf6103a435ec44f88e56.jpg", 
        "https://i.pinimg.com/736x/c3/07/18/c3071819888cffde834805fedef630b5.jpg", 
        "https://i.pinimg.com/736x/fa/b8/bf/fab8bf931b25ef82046f8e8119582db7.jpg",
        "https://i.pinimg.com/webp70/1200x/3c/b4/28/3cb428f7b5e7246ee9c2727862e423e4.webp",
        "https://i.pinimg.com/736x/65/71/18/657118c03fe08b343c3774bcb4bd46bf.jpg",
        "https://i.pinimg.com/1200x/3e/c2/87/3ec287be90986951f2f3be19e8f2bbc9.jpg",
        "https://i.pinimg.com/webp70/736x/74/f6/87/74f687c316ea2304bc42611f818495f2.webp",
        "https://i.pinimg.com/736x/62/62/aa/6262aab9458b18541e07b5743fae2d52.jpg", 
        "https://i.pinimg.com/1200x/66/2e/72/662e727724f35d1d8235599ef72355ef.jpg",
        "https://i.pinimg.com/736x/f6/26/b8/f626b82aab83e922036065ab68ac51f5.jpg",
        "https://i.pinimg.com/1200x/f4/0a/21/f40a2169f06fe7aa38c927947e69e107.jpg",
        "https://i.pinimg.com/736x/84/0b/71/840b712f1585d3261731a44fbd90ee65.jpg",
        "https://i.pinimg.com/1200x/ef/cc/08/efcc089d885cfbb3d1f7eae282f1d453.jpg"
    ];

    return (
        <div className="banner-wrapper">
            <div className="banner-track">
                {[...images, ...images].map((img, index) => (
                    <div className="banner-item" key={index}>
                        <img src={img} alt={`Pixar ${index}`} />
                        <div className="item-overlay"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieBanner;