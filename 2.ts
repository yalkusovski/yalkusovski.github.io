class CustomExperienceCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'company', 'duration', 'location', 'icon'];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }
    
    render() {
        const title = this.getAttribute('title') || '';
        const company = this.getAttribute('company') || '';
        const duration = this.getAttribute('duration') || '';
        const location = this.getAttribute('location') || '';
        const icon = this.getAttribute('icon') || 'briefcase';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 1.5rem;
                }
                
                .experience-card {
                    background-color: white;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    padding: 1.5rem;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                
                .experience-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
                
                .experience-header {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }
                
                .experience-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 0.5rem;
                    background-color: #e0f2fe;
                    color: #0369a1;
                    margin-right: 1rem;
                    flex-shrink: 0;
                }
                
                .experience-title {
                    flex: 1;
                }
                
                .experience-title h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }
                
                .experience-company {
                    font-weight: 500;
                    color: #3b82f6;
                    margin-bottom: 0.25rem;
                }
                
                .experience-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem 1rem;
                    font-size: 0.875rem;
                    color: #64748b;
                }
                
                .experience-meta-item {
                    display: flex;
                    align-items: center;
                }
                
                .experience-meta-item i {
                    margin-right: 0.25rem;
                    width: 1rem;
                    height: 1rem;
                }
                
                .experience-content {
                    color: #475569;
                    line-height: 1.6;
                }
                
                @media (max-width: 640px) {
                    .experience-header {
                        flex-direction: column;
                    }
                    
                    .experience-icon {
                        margin-bottom: 1rem;
                    }
                }
            </style>
            <div class="experience-card">
                <div class="experience-header">
                    <div class="experience-icon">
                        <i data-feather="${icon}"></i>
                    </div>
                    <div class="experience-title">
                        <h3>${title}</h3>
                        <div class="experience-company">${company}</div>
                        <div class="experience-meta">
                            <div class="experience-meta-item">
                                <i data-feather="calendar"></i>
                                <span>${duration}</span>
                            </div>
                            <div class="experience-meta-item">
                                <i data-feather="map-pin"></i>
                                <span>${location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="experience-content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-experience-card', CustomExperienceCard);