import React from 'react'
import "./Logobar.css"


const logos = [
    { name: 'nike', src: 'https://i.pinimg.com/1200x/6e/44/d8/6e44d8091bbce3113a6b5ea1af6b7bff.jpg' },
    { name: 'ooredoo', src: 'https://i.pinimg.com/736x/26/0a/cd/260acd0aad77db1817ca9a871b5ed31f.jpg' },
    { name: 'qnb', src: 'https://i.pinimg.com/1200x/f9/27/13/f927132a5384c176ea95d5c69725876f.jpg' },
    { name: "adidas", src: 'https://i.pinimg.com/webp70/736x/85/e8/ac/85e8ac7e34fc40846fedd80dee7bec86.webp' },
    { name: "new balence", src: 'https://i.pinimg.com/736x/e0/8c/de/e08cde2f956d6768fc44216a9b89ff6e.jpg' },
    { name: "puma", src: 'https://i.pinimg.com/736x/ea/b2/f6/eab2f6607757689f5eba6aaac97a7118.jpg' },
    { name: "crocs", src: 'https://i.pinimg.com/1200x/18/78/35/18783572533fd0a5db630a6036c06334.jpg' },


    { name: "converce", src: 'https://i.pinimg.com/webp70/736x/a3/89/f0/a389f01c97d24df3fa1e26dd4af08e6b.webp' },
    { name: "kappa", src: 'https://i.pinimg.com/1200x/fe/f8/72/fef872fc2eec48c89e27ec88f8f7c1f6.jpg' },
    { name: "reebook", src: 'https://i.pinimg.com/1200x/49/a9/17/49a917dc23d53b51bcb2b459b5d35c8b.jpg' },
    { name: "under armour", src: 'https://i.pinimg.com/736x/87/4a/06/874a060331d5329537f23f70a001dffb.jpg' },

];
function Logobar() {
    const infiniteLogos = [...logos, ...logos];
    return (
        <div className="logo-container">
            <div className="logo">
                {infiniteLogos.map((logo, el) => (
                    <img
                        el={el}
                        src={logo.src}
                        alt={logo.name}
                        className="img-logo"
                    />
                ))}
            </div>
        </div>
    )
}

export default Logobar