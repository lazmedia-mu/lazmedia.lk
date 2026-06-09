// =============================================
// INSTITUTIONS PAGE JAVASCRIPT - St. Lazarus' Church
// =============================================

// Comprehensive institution data with detailed information
const institutionsData = {
    "sisters-of-charity": {
        name: "Sisters of Charity",
        badge: "Religious Congregation",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 8,
        since: 1950,
        fullDescription: `
            <p>The Sisters of Charity have been an integral part of St. Lazarus' parish community for over seven decades. Founded on the principles of service and compassion, they continue the legacy of their foundress, St. Elizabeth Ann Seton, who dedicated her life to educating children and caring for the poor.</p>
            
            <h4>Our Ministry in the Parish</h4>
            <p>In our parish, the Sisters of Charity manage the parish's primary school, where they provide quality Catholic education to over 500 children from Kurukulawa and surrounding areas. They also operate a medical clinic that offers free healthcare services to needy families in the community every Saturday.</p>
            
            <h4>Spiritual Guidance</h4>
            <p>The sisters conduct weekly retreats for youth and organize monthly prayer meetings for women in the parish. Their convent chapel is open daily for parishioners who wish to spend time in prayer and reflection. They also accompany the sick and elderly, bringing them Holy Communion and providing emotional support.</p>
            
            <h4>Community Outreach</h4>
            <p>Every year during the Christmas season, the sisters organize a large food drive that provides Christmas meals to over 200 needy families in our parish boundaries. They also run a tailoring center that teaches vocational skills to young women from disadvantaged backgrounds, empowering them to become self-sufficient.</p>
        `
    },
    "marist-brothers": {
        name: "Marist Brothers",
        badge: "Teaching Order",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 5,
        since: 1965,
        fullDescription: `
            <p>The Marist Brothers in our parish continue the charism of their founder, St. Marcellin Champagnat, who believed that "to educate young people is not to fill a bucket but to light a fire." For nearly 60 years, they have shaped the minds and hearts of countless young people in our community.</p>
            
            <h4>Educational Excellence</h4>
            <p>The brothers oversee St. Lazarus' College, the parish's secondary school that consistently achieves outstanding academic results. They believe in educating the whole person – mind, body, and spirit – and have developed comprehensive programs that combine academic excellence with spiritual formation.</p>
            
            <h4>Sports & Extracurricular Activities</h4>
            <p>Under their guidance, the school's sports programs have produced national-level athletes in cricket, athletics, and basketball. They also organize annual inter-house debates, elocution competitions, and science exhibitions that bring out the best in our students' talents.</p>
            
            <h4>Youth Spiritual Development</h4>
            <p>The Marist Brothers lead the parish's youth ministry, organizing monthly youth masses, camps, and outreach programs. They accompany young people on their faith journey, helping them deepen their relationship with God while building lasting friendships within the parish community.</p>
        `
    },
    "franciscan-missionaries": {
        name: "Franciscan Missionaries",
        badge: "Missionary Order",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 6,
        since: 1972,
        fullDescription: `
            <p>Living out the Franciscan call to "rebuild my Church," the Franciscan Missionaries in our parish embrace a life of simplicity, prayer, and service to the marginalized. Following in the footsteps of St. Francis of Assisi, they bear witness to the Gospel through their lives of poverty, chastity, and obedience.</p>
            
            <h4>Care for Creation</h4>
            <p>True to their Franciscan heritage, the sisters have developed an organic farm at their convent that supplies fresh vegetables to the parish's various feeding programs. They also lead the parish's environmental initiatives, including annual tree planting drives and awareness programs about caring for God's creation.</p>
            
            <h4>Retreat Ministry</h4>
            <p>Their serene convent in the outskirts of Kurukulawa hosts numerous parish retreats throughout the year. Parish groups, confirmation candidates, marriage preparation couples, and prayer groups all benefit from the peaceful atmosphere and spiritual direction provided by the sisters.</p>
            
            <h4>Service to the Poor</h4>
            <p>The Franciscan Missionaries run a night shelter for homeless people in nearby Ragama, providing them with food, shelter, and medical care. They also visit prisons regularly, bringing faith and hope to those who have lost their way in society.</p>
        `
    },
    "benedictine-monks": {
        name: "Benedictine Monks",
        badge: "Contemplative Order",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 4,
        since: 1980,
        fullDescription: `
            <p>The Benedictine Monks from the nearby St. Benedict's Monastery enrich our parish community through their life of ora et labora – prayer and work. Following the ancient Rule of St. Benedict, they witness to the importance of a life centered on the Liturgy of the Hours and sacred liturgy.</p>
            
            <h4>Spiritual Direction</h4>
            <p>Many parishioners benefit from the spiritual direction provided by the learned monks. They help people deepen their prayer life, navigate life's challenges, and grow in their relationship with God. The monks are available for confession and spiritual counseling at the parish every Friday.</p>
            
            <h4>Liturgy & Sacred Music</h4>
            <p>The monks have enriched our parish's liturgical life through their expertise in Gregorian chant and sacred music. They conduct workshops for parish choir members and have helped restore many traditional liturgical practices in our parish celebrations.</p>
            
            <h4>Scholarship & Education</h4>
            <p>The monastery's library contains thousands of theological and spiritual books that are accessible to parishioners. The monks also organize annual Scripture studies that help parishioners deepen their understanding of the Word of God.</p>
        `
    },
    "missionaries-of-charity": {
        name: "Missionaries of Charity",
        badge: "Service Order",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 12,
        since: 1985,
        fullDescription: `
            <p>Founded by St. Teresa of Calcutta, the Missionaries of Charity in our parish continue to serve "the poorest of the poor" with radical love and compassion. Their presence in our community is a powerful reminder of Christ's call to serve the least among us.</p>
            
            <h4>Home for the Destitute</h4>
            <p>They operate a home in our parish that cares for people who are terminally ill, abandoned, and have nowhere else to go. The sisters provide them with not just medical care, but dignity and love in their final days. Parish volunteers regularly assist the sisters in this beautiful ministry.</p>
            
            <h4>Daily Feeding Program</h4>
            <p>Every day, the Missionaries of Charity provide hot meals to over 150 people who come to their doors – street children, daily wage earners, and the homeless. This program is entirely supported by donations from our generous parishioners.</p>
            
            <h4>Slum Ministry</h4>
            <p>The sisters visit the slum areas near our parish daily, providing basic medical care, education for children, and spiritual support. They run a small school in the slum that prepares young children for admission to mainstream schools.</p>
            
            <h4>Parish Collaboration</h4>
            <p>Our parish works closely with the Missionaries of Charity, organizing monthly volunteer days where parishioners can help with their various programs. The annual parish collection for the poor is entirely donated to support their vital work in our community.</p>
        `
    },
    "salesian-sisters": {
        name: "Salesian Sisters of Don Bosco",
        badge: "Youth Ministry",
        image: "Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg",
        members: 7,
        since: 1990,
        fullDescription: `
            <p>The Salesian Sisters of Don Bosco, also known as the Daughters of Mary Help of Christians, bring the joyous spirit of Don Bosco and Mother Mazzarello to our parish's youth. Their characteristic preventive system of education – based on reason, religion, and loving kindness – has transformed countless young lives.</p>
            
            <h4>Youth Center Programs</h4>
            <p>The sisters run the Don Bosco Youth Center in our parish, which provides after-school tutoring, computer literacy classes, and life skills training for underprivileged youth. The center is a beacon of hope for many young people who would otherwise lack access to these opportunities.</p>
            
            <h4>Vocational Training</h4>
            <p>They operate a vocational training center that offers courses in stitching, embroidery, basic computing, and beautician skills. Over the years, hundreds of young women have graduated from these programs, enabling them to find employment and build better lives for themselves and their families.</p>
            
            <h4>Oratory & Recreation</h4>
            <p>Every Sunday, the sisters organize an oratory where children and youth from the parish gather for games, prayer, and catechism. This vibrant space keeps young people engaged in positive activities and helps build strong Christian communities among the youth.</p>
            
            <h4>Family Counseling</h4>
            <p>The Salesian Sisters provide family counseling services at the parish, helping families navigate challenges and build stronger, more loving relationships. They also conduct monthly parent education workshops that help parents raise their children in the faith.</p>
        `
    }
};

// Modal functionality
let currentModal = null;

function openInstitutionModal(institutionId) {
    const modal = document.getElementById('institutionModal');
    const modalBody = document.getElementById('modalBody');
    const institution = institutionsData[institutionId];

    if (!institution) {
        console.error('Institution not found:', institutionId);
        return;
    }

    // Build modal content
    modalBody.innerHTML = `
        <div class="modal-institution-header">
            <h2 class="modal-institution-name">${institution.name}</h2>
            <span class="modal-institution-badge">${institution.badge}</span>
        </div>
        <div class="modal-institution-content">
            ${institution.fullDescription}
        </div>
        <div class="modal-institution-meta">
            <div class="modal-meta-item">
                <i class="fas fa-users"></i>
                <span>Community Members</span>
                <strong>${institution.members} Members</strong>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Serving Our Parish</span>
                <strong>Since ${institution.since}</strong>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-clock"></i>
                <span>Years of Service</span>
                <strong>${new Date().getFullYear() - institution.since} Years</strong>
            </div>
        </div>
    `;

    // Show modal with animation
    modal.classList.add('active');
    currentModal = modal;

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Add escape key listener
    document.addEventListener('keydown', handleEscapeKey);
}

function closeInstitutionModal() {
    const modal = document.getElementById('institutionModal');
    modal.classList.remove('active');
    currentModal = null;

    // Restore body scroll
    document.body.style.overflow = '';

    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
    if (event.key === 'Escape' && currentModal) {
        closeInstitutionModal();
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all institution cards
    const cards = document.querySelectorAll('.institution-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add click ripple effect to buttons
function addButtonRippleEffects() {
    const buttons = document.querySelectorAll('.view-details-btn, .whatsapp-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add CSS animation for ripples
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    addButtonRippleEffects();
    addRippleAnimation();

    // Close modal when clicking outside of it
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeInstitutionModal);
    }

    // Add smooth entrance animations for hero section elements
    const heroElements = document.querySelectorAll('.institutions-hero .since-when, .institutions-hero .section-title, .institutions-hero .section-subtitle');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, 100 * (index + 1));
    });

    console.log('🏛️ Religious Institutions page initialized for St. Lazarus\' Church');
});

// Expose functions globally for onclick handlers
window.openInstitutionModal = openInstitutionModal;
window.closeInstitutionModal = closeInstitutionModal;



// Tab Switching JavaScript
    function switchTab(tabId) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        // Add active class to selected tab
        event.currentTarget.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }