class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1e293b;
                    color: white;
                    padding: 3rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #f8fafc;
                }
                
                .footer-section p {
                    color: #94a3b8;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-links a {
                    color: #94a3b8;
                    transition: color 0.3s;
                }
                
                .social-links a:hover {
                    color: #3b82f6;
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid #334155;
                    color: #94a3b8;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Jane Alkushovski</h3>
                    <p>IT Infrastructure & Digital Transformation Leader with extensive experience in managing enterprise IT infrastructure and digital transformation.</p>
                    <div class="social-links">
                        <a href="#"><i data-feather="linkedin"></i></a>
                        <a href="#"><i data-feather="github"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="mail"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <p><a href="#about" class="text-blue-400 hover:underline">About</a></p>
                    <p><a href="#experience" class="text-blue-400 hover:underline">Experience</a></p>
                    <p><a href="#contact" class="text-blue-400 hover:underline">Contact</a></p>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i data-feather="mail" class="inline mr-2"></i> yalkusovski@gmail.com</p>
                    <p><i data-feather="phone" class="inline mr-2"></i> (+60) 146353392</p>
                    <p><i data-feather="map-pin" class="inline mr-2"></i> St.Mary Residence 1, Kuala Lumpur</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; ${new Date().getFullYear()} Jane Alkushovski. All rights reserved.</p>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
