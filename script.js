// Register both Core Engines
gsap.registerPlugin(ScrollTrigger, Flip);

// Existing load timelines go here...
// (Keep your heroTimeline code at the top of your script)

// ==========================================
// 3. GSAP ADVANCED FLIP ENGINE
// ==========================================
const cards = document.querySelectorAll('.flip-card');
const container = document.querySelector('#flip-container');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // If the close button was clicked, or if card is already expanded, run shrink logic
        if (card.classList.contains('is-expanded') || e.target.classList.contains('close-btn')) {
            e.stopPropagation(); // Stop click bubble loop
            
            const state = Flip.getState(card);
            
            // Revert layout styles smoothly
            card.classList.remove('is-expanded', 'col-span-2', 'z-40', 'bg-[#060a1c]');
            card.querySelector('.expanded-content').classList.add('hidden');
            card.querySelector('.close-btn').classList.add('hidden');
            
            // Flip back animation engine
            Flip.from(state, {
                duration: 0.5,
                ease: "power3.inOut",
                absolute: true
            });
            return;
        }

        // Capture initial coordinate state
        const state = Flip.getState(card);

        // Inject expanded architecture classes to completely redesign layout parameters
        card.classList.add('is-expanded', 'col-span-2', 'z-40', 'bg-[#060a1c]');
        card.querySelector('.expanded-content').classList.remove('hidden');
        card.querySelector('.close-btn').classList.remove('hidden');

        // Animate seamlessly from initial state coordinates to new viewport distribution
        Flip.from(state, {
            duration: 0.6,
            ease: "back.out(1.2)",
            absolute: true, // Prevents layout snapping layout layout calculations
            onComplete: () => {
                // Micro-stagger internal text entry items
                gsap.fromTo(card.querySelectorAll('.expanded-content > *'), 
                    { opacity: 0, y: 10 }, 
                    { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 }
                );
            }
        });
    });
});
