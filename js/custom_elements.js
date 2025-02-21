class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="whats_new.html">Whats going on</a>
            <a href="publications.html">Publications</a>
            <a href="projects.html">Projects</a>
        </nav>
        `
    }
}

class Footer extends HTMLElement { 
    connectedCallback() {
        this.innerHTML =  `
        <footer>
            <hr>    
            <p>Email: nicholas [dot] daultryball [at] maths [dot] ox [dot] ac [dot] uk</p>
            <p><a href = "https://www.linkedin.com/in/nicholas-daultry-ball-85a53011a/">Linkedin</a></p> 
            <p><a href="docs/Resume_CV.pdf" attributes-list download="CV Nicholas Daultry Ball">CV</a></p>
            <div>
                <img 
                    src="docs/oxford_logo.png"
                    height=50 
                >
                <img 
                    src="docs/cdt_logo.jpg"
                    height=50
                >
            </div>
        </footer>
    `
    }
}

window.customElements.define('nav-bar', AppHeader)

window.customElements.define('custom-footer', Footer) 