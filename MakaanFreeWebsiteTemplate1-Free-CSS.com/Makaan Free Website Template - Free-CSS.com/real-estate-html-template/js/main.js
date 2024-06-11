document.addEventListener('DOMContentLoaded', function() {
    // Spinner
    (function ($) {
        "use strict";
    
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();
    })(jQuery);
    
    // Sticky Navbar
    (function ($) {
        "use strict";
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 45) {
                $('.nav-bar').addClass('sticky-top');
            } else {
                $('.nav-bar').removeClass('sticky-top');
            }
        });
    })(jQuery);
    
    // Back to top button
    (function ($) {
        "use strict";
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });
    })(jQuery);
    
    // Header carousel
    (function ($) {
        "use strict";
    
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    
        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 24,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    })(jQuery);

    // Handle collection form submission
    const collectionForm = document.getElementById('collectionForm');
    if (collectionForm) {
        collectionForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const collectionPoint = document.getElementById('collectionPoint').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (collectionPoint && date && time) {
                alert(`Point de collecte : ${collectionPoint}\nDate de dépôt : ${date}\nHeure d'arrivée : ${time}`);
                // Add code to send data to the server here
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }

    // Handle recovery form submission
    const recoveryForm = document.getElementById('recoveryForm');
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const lastName = document.getElementById('lastName').value;
            const firstName = document.getElementById('firstName').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const contact = document.getElementById('contact').value;
            const commune = document.getElementById('commune').value;

            if (lastName && firstName && date && time && contact && commune) {
                alert(`Nom : ${lastName}\nPrénom : ${firstName}\nDate de disponibilité : ${date}\nHeure de passage : ${time}\nContact : ${contact}\nCommune : ${commune}`);
                // Add code to send data to the server here
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }

    const addArticleBtn = document.getElementById('addArticleBtn');
    if (addArticleBtn) {
        addArticleBtn.addEventListener('click', function () {
            var form = document.getElementById('articleForm');
            if (form) {
                form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
            }
        });
    }

    fetch('get_data.php')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('articles-container');
            if (container) {
                data.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('col-md-4', 'mb-4');
                    articleElement.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${article.titre}</h5>
                                <p class="card-text">${article.contenu}</p>
                                <p class="card-text"><small class="text-muted">${article.date_publication}</small></p>
                            </div>
                        </div>
                    `;
                    container.appendChild(articleElement);
                });
            }
        })
        .catch(error => console.error('Erreur de fetch:', error));

    const showRegisterForm = document.getElementById("showRegisterForm");
    if (showRegisterForm) {
        showRegisterForm.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("resetPasswordForm").style.display = "none";
            document.getElementById("registerForm").style.display = "block";
        });
    }

    const showResetPasswordForm = document.getElementById("showResetPasswordForm");
    if (showResetPasswordForm) {
        showResetPasswordForm.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("registerForm").style.display = "none";
            document.getElementById("resetPasswordForm").style.display = "block";
        });
    }
});
