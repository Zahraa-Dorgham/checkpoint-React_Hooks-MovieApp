import React from 'react'

function Header() {
    const videoId = "k9bUTfFF3_4";

    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`;
    return (
        <header className="header-container">
            <div className="video-overlay"></div>

            <div className="video-background">
                <iframe
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Background Video"
                />
            </div>

           
        </header>
    )
}

export default Header