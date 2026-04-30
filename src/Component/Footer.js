import React from 'react';
import { Sparkles, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
    return (
       <div>
          <div class="pre-footer-banner">
                <img src="https://i.pinimg.com/1200x/20/80/e6/2080e6384abc2702e2f78b774a3d9853.jpg" alt="Bannière Disney"/>
            </div>  
        <footer className="footer">
            
            <div className="footer-container">

                <div className="footer-section">
                    <div className="footer-logo">
                        <Sparkles size={20} />
                        <span>DisneyVault</span>
                    </div>
                    <p>The magic of collecting and sharing your favorite movies.</p>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>A magical gallery created for fans of great stories.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 DisneyVault. All magic reserved.</p>
                <p>Made with <Heart size={14} className="heart-icon" /> for fans.</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;