
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = 80; // Offset for navbar
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Projects carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });

        // Auto slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Memory Game
    const gameBoard = document.querySelector('.game-board');
    const movesCount = document.getElementById('moves-count');
    const timeCount = document.getElementById('time-count');
    const restartButton = document.getElementById('restart-button');
    
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let isPlaying = false;
    let gameTimer;
    let seconds = 0;
    
    const cardSymbols = [
        '🤖', '🧠', '📊', '💻',
        '🔍', '📱', '🌐', '🔐'
    ];
    
    // Initialize game
    function initGame() {
        const cardPairs = [...cardSymbols, ...cardSymbols];
        cards = shuffleArray(cardPairs);
        matchedPairs = 0;
        moves = 0;
        flippedCards = [];
        seconds = 0;
        
        // Clear game board
        if (gameBoard) {
            gameBoard.innerHTML = '';
            
            // Create cards
            cards.forEach((symbol, index) => {
                const card = document.createElement('div');
                card.classList.add('memory-card');
                card.dataset.cardIndex = index;
                
                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardFront.textContent = symbol;
                
                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                
                card.appendChild(cardFront);
                card.appendChild(cardBack);
                
                card.addEventListener('click', flipCard);
                
                gameBoard.appendChild(card);
            });
            
            // Update counters
            if (movesCount) movesCount.textContent = moves;
            if (timeCount) timeCount.textContent = '00:00';
            
            // Clear previous timer
            if (gameTimer) clearInterval(gameTimer);
            isPlaying = false;
        }
    }
    
    // Shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Start game timer
    function startGameTimer() {
        if (!isPlaying) {
            isPlaying = true;
            gameTimer = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                
                if (timeCount) {
                    timeCount.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                }
            }, 1000);
        }
    }
    
    // Flip card on click
    function flipCard() {
        if (flippedCards.length >= 2 || this.classList.contains('flipped') || this.classList.contains('matched')) {
            return;
        }
        
        startGameTimer();
        
        this.classList.add('flipped');
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            moves++;
            if (movesCount) movesCount.textContent = moves;
            
            const card1Index = flippedCards[0].dataset.cardIndex;
            const card2Index = flippedCards[1].dataset.cardIndex;
            
            if (cards[card1Index] === cards[card2Index]) {
                // Match found
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.add('matched');
                    });
                    flippedCards = [];
                    matchedPairs++;
                    
                    if (matchedPairs === cardSymbols.length) {
                        endGame();
                    }
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.remove('flipped');
                    });
                    flippedCards = [];
                }, 1000);
            }
        }
    }
    
    // End game
    function endGame() {
        clearInterval(gameTimer);
        isPlaying = false;
        
        setTimeout(() => {
            alert(`Gratulacje! Ukończyłeś grę w ${moves} ruchach, w czasie ${timeCount.textContent}!`);
        }, 500);
    }
    
    // Restart game
    if (restartButton) {
        restartButton.addEventListener('click', initGame);
    }
    
    // Initialize memory game if the board exists
    if (gameBoard) {
        initGame();
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send data to a server
            // For demonstration only, show alert
            alert(`Dziękuję ${name}! Twoja wiadomość została wysłana. Skontaktuję się z Tobą na adres ${email} najszybciej jak to możliwe.`);
            
            contactForm.reset();
        });
    }
});
