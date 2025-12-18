class CustomSkillPill extends HTMLElement {
    connectedCallback() {
        const skill = this.textContent.trim();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                
                .skill-pill {
                    display: inline-flex;
                    align-items: center;
                    background-color: #e0f2fe;
                    color: #0369a1;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    transition: all 0.2s;
                }
                
                .skill-pill:hover {
                    background-color: #bae6fd;
                    transform: translateY(-1px);
                }
            </style>
            <span class="skill-pill">${skill}</span>
        `;
    }
}

customElements.define('custom-skill-pill', CustomSkillPill);