 // Data for the stories with unique logos
        const stories = [
            {
                name: "Liam Foster",
                role: "Founder, Autodesk",
                image: "https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg",
                quote: "“Working with Avexa felt like having an in-house team. The results spoke for themselves.”",
                description: "Liam partnered with us for growth marketing and content consulting, focusing on scaling his business through targeted campaigns and refined messaging.",
                logoHTML: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cs-logo-svg"><path fill="#000000" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm3.206 3.72l2.179 5.3l-2.158 4.556h-4.22q.03-.131.085-.256zm7.53 14.965l-4.101-9.911l-2.27-5.52h4.056l6.559 15.43zm-8.101-3.86H4.25l2.187 3.554a.77.77 0 0 0 1.095.232l6.231-3.784H7.634l.001-.001Z" clip-rule="evenodd"/></svg>
                    <span>Autodesk</span>
                `
            },
            {
                name: "Sarah Jenkins",
                role: "CEO, Behance",
                image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quote: "“The strategic insights provided completely transformed our approach to customer acquisition.”",
                description: "We worked with Sarah to overhaul their digital presence, resulting in a 40% increase in qualified leads within the first quarter.",
                logoHTML: `
                    <svg class="cs-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M15 6.5v-2h6.5v2zm-1.074 3.297C14.876 8.683 16.266 8 18 8c3.103 0 5 2.708 5 5.5V15h-7.201c.447.86 1.29 1.5 2.201 1.5a5.3 5.3 0 0 0 2.7-.768l1.492 2.603C20.944 19.07 19.458 19.5 18 19.5c-1.442 0-2.814-.669-3.82-1.67c-1.004-1.002-1.68-2.374-1.68-3.83c0-1.602.483-3.099 1.426-4.203m6.437 2.703h-5.16c.386-1.308 1.422-2 2.797-2c1.254 0 2.06.855 2.363 2M1 5h5.75a4.25 4.25 0 0 1 3.65 6.428A4.25 4.25 0 0 1 7.75 19H1zm3 8v3.5h3.25a1.75 1.75 0 1 0 0-3.5zm4-3.75A1.75 1.75 0 0 1 6.25 11H4V7.5h2.25C7.216 7.5 8 8.284 8 9.25" clip-rule="evenodd"/></svg>
                    <span>Behance</span>
                `
            },
            {
                name: "Marcus Chen",
                role: "CTO, Coroflot",
                image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quote: "“Avexa's technical expertise and dedication to quality are unmatched in the industry.”",
                description: "Marcus needed a partner to modernize their legacy systems. We delivered a scalable cloud solution that improved performance by 300%.",
                logoHTML: `
                    <svg class="cs-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M4 12a8 8 0 0 1 14.317-4.91l2.366-1.843A10.98 10.98 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11c3.53 0 6.673-1.665 8.683-4.247l-2.366-1.843A8 8 0 0 1 4 12m10.616 4.384L12 13.768l-2.616 2.616l-1.768-1.768L10.232 12L7.616 9.384l1.768-1.768L12 10.232l2.616-2.616l1.768 1.768L13.768 12l2.616 2.616z" clip-rule="evenodd"/></svg>
                    <span>Coroflot</span>
                `
            }
        ];

        let currentIndex = 0;

        // DOM Elements
        const elements = {
            image: document.getElementById('cs-image'),
            name: document.getElementById('cs-name'),
            role: document.getElementById('cs-role'),
            quote: document.getElementById('cs-quote'),
            desc: document.getElementById('cs-desc'),
            logoContainer: document.getElementById('cs-logo-container'),
            prevBtn: document.getElementById('cs-prev'),
            nextBtn: document.getElementById('cs-next')
        };

        function updateContent(index) {
            const story = stories[index];
            
            // Add fade-out class
            elements.image.classList.add('fade-out');
            elements.quote.classList.add('fade-out');
            elements.desc.classList.add('fade-out');
            elements.logoContainer.classList.add('fade-out'); // Fade out logo too

            // Wait for transition, then swap content and fade in
            setTimeout(() => {
                elements.image.src = story.image;
                elements.image.alt = story.name;
                elements.name.textContent = story.name;
                elements.role.textContent = story.role;
                elements.quote.textContent = story.quote;
                elements.desc.textContent = story.description;
                elements.logoContainer.innerHTML = story.logoHTML; // Update Logo

                // Remove fade-out class
                elements.image.classList.remove('fade-out');
                elements.quote.classList.remove('fade-out');
                elements.desc.classList.remove('fade-out');
                elements.logoContainer.classList.remove('fade-out');
            }, 300); // Matches the CSS transition time
        }

        // Event Listeners
        elements.prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + stories.length) % stories.length;
            updateContent(currentIndex);
        });

        elements.nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % stories.length;
            updateContent(currentIndex);
        });