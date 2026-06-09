// Society data - all the details for each society
const societiesData = {
    'liturgical-committee': {
        name: 'St. Lazarus Liturgical Committee',
        badge: 'Liturgy',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "The Liturgical Committee plays a vital role in our parish by planning and coordinating all Holy Masses, sacraments, and seasonal feasts. Working closely with the parish priest, they ensure that our liturgical celebrations are reverent, orderly, and beautifully ordered to foster deep spiritual growth for the entire community.",
        started: 'January 1926',
        members: ' Members',
        motto: "To worship God in spirit and truth, creating sacred moments that draw the faithful closer to Him.",
        vision: "To be a beacon of liturgical excellence in our archdiocese, inspiring all parishioners to encounter Christ through reverent and beautiful worship that transforms lives and builds up the Body of Christ."
    },

    'secrad-heart': {
        name: 'St. Lazarus Sacred Heart Society',
        badge: '',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "The Sacred Heart Society dedicatedly fosters deep devotion to the Sacred Heart of Jesus within our parish. Through regular prayer, monthly Holy Hours, and compassionate acts of charity, members strive to model their lives after Christ’s infinite love and mercy, enriching the spiritual life of the entire community.",
        started: 'January 1926',
        members: ' Members',
        motto: "All for the Sacred Heart of Jesus.",
        vision: "To set the world on fire with the love of Christ by uniting our daily prayers, sacrifices, and service with His Sacred Heart for the salvation of all."
    },

    'slsdssws': {
        name: 'St. Lazarus Spiritual Development and Social Services Welfare Society',
        badge: 'Social Welfare',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "Dedicated to enriching our parish, the Spiritual Development and Social Services Welfare Society nurtures spiritual growth and community welfare. By centering its mission on devotion to the Sacred Heart of Jesus, the society unites parishioners through communal prayer, spiritual formation, and impactful acts of charity that support those in need.",
        started: 'January 1926',
        members: ' Members',
        motto: "Data Record not Found.",
        vision: "Data Record not Found."
    },

    'welfare-society': {
        name: 'St. Lazarus Welfare Society',
        badge: 'Social Welfare',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "Dedicated to enriching our parish, the Spiritual Development and Social Services Welfare Society nurtures spiritual growth and community welfare. By centering its mission on devotion to the Sacred Heart of Jesus, the society unites parishioners through communal prayer, spiritual formation, and impactful acts of charity that support those in need.",
        started: 'January 1926',
        members: ' Members',
        motto: "Data Record not Found.",
        vision: "Data Record not Found."
    },

    'vincent-de-paul': {
        name: 'St. Vincent de Paul Society',
        badge: 'Charity',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "The Society of St. Vincent de Paul channels Christ's love into action by serving those in need within our parish community. Through home visits, food drives, and financial aid, members offer confidential, practical support to the marginalized, seeking to alleviate poverty and promote human dignity through spiritual fellowship and charity.",
        started: 'January 1926',
        members: ' Members',
        motto: "Action of love.",
        vision: "To be a global Catholic network of charity, inspired by Gospel values, where members grow spiritually by embracing and serving those in need with love, respect, and justice."
    },

    'marriage-ministry': {
        name: 'St. Lazarus Marriage Ministry',
        badge: 'Marriage',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "The Marriage Ministry is dedicated to nurturing, strengthening, and celebrating the sacrament of holy matrimony within our parish. Through marriage preparation for engaged couples, enrichment workshops for newlyweds, and ongoing spiritual support for seasoned couples, the ministry helps families build a solid, faith-filled foundation rooted in Christ’s love.",
        started: 'January 1926',
        members: ' Members',
        motto: "Data Record not Found.",
        vision: "Data Record not Found."
    },

    'ssds': {
        name: 'Sunday School Development Society',
        badge: 'Development',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "The Development Society oversees the physical growth and maintenance of our parish grounds. Committed to stewardship, the committee plans renovations, maintains buildings, and manages construction projects, ensuring that our church facilities remain a beautiful, safe, and sustainable space for worship, ministry, and community gatherings.",
        started: 'January 1926',
        members: ' Members',
        motto: "Data Record not Found.",
        vision: "Data Record not Found."
    },

    'media-unit': {
        name: 'St. Lazarus Media Circle',
        badge: 'Digital & Media',
        image: 'Assets/Societies/If-no-group-photoUse-PlaceHolder.jpeg',
        description: "As the media unit of our parish, St. Lazarus' Media Circle bridges the gap between the church and the community through technology. The team handles live-streaming, photography, social media management, and digital announcements, ensuring that the message of the Gospel and vital parish updates reach every home efficiently and beautifully.",
        started: 'April 2023',
        members: '10 Members',
        motto: "Lumen fidei lucens per potentiam mediae.",
        vision: "To be a dynamic beacon of truth and connection for St. Lazarus Church, leveraging the power of modern media to illuminate hearts, inspire faith, and unite our parish community in Christ."
    }
};

// Scroll Animation for Society Cards - fade in/out when scrolling
function animateSocietyCards() {
    const cards = document.querySelectorAll('.society-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    cards.forEach(card => observer.observe(card));
}

// Open society modal with selected society's data
function openSocietyModal(societyId) {
    const society = societiesData[societyId];
    if (!society) return;

    // Populate modal with society data
    document.getElementById('modal-image').src = society.image;
    document.getElementById('modal-image').alt = society.name;
    document.getElementById('modal-badge').textContent = society.badge;
    document.getElementById('modal-name').textContent = society.name;
    document.getElementById('modal-description').textContent = society.description;
    document.getElementById('modal-motto').textContent = society.motto;
    document.getElementById('modal-vision').textContent = society.vision;

    // Update details section
    const detailsContainer = document.getElementById('modal-details');
    detailsContainer.innerHTML = `
        <div class="detail-item">
            <i class="fas fa-calendar-alt"></i>
            <span><strong>Started:</strong> ${society.started}</span>
        </div>
        <div class="detail-item">
            <i class="fas fa-users"></i>
            <span><strong>Members:</strong> ${society.members}</span>
        </div>
    `;

    // Removed contact links as we've replaced join section with motto and vision

    // Show the modal
    document.getElementById('society-modal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close the society modal
function closeSocietyModal() {
    document.getElementById('society-modal').classList.remove('active');
    document.body.style.overflow = ''; // Restore background scrolling
}

// Close modal when clicking outside of it
function closeModalOnOverlay(event) {
    if (event.target.id === 'society-modal') {
        closeSocietyModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSocietyModal();
    }
});

// Initialize all animations
window.addEventListener('load', () => {
    animateSocietyCards();
});