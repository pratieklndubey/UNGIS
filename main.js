// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('translate-x-full');

    if (isHidden) {
        // Open
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.remove('hidden', 'opacity-0');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        // Close
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMenu);

// Manual Scroll Logic for Members
const scrollLeftBtn = document.getElementById('members-scroll-left');
const scrollRightBtn = document.getElementById('members-scroll-right');
const membersTrack = document.getElementById('members-track');

if (scrollLeftBtn && membersTrack) {
    scrollLeftBtn.addEventListener('click', () => {
        membersTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });
}

if (scrollRightBtn && membersTrack) {
    scrollRightBtn.addEventListener('click', () => {
        membersTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Data Lists with Images and Full Names
const membersData = [
    { code: "FAO", name: "Food and Agriculture Organization", img: "fao.png" },
    { code: "IAEA", name: "International Atomic Energy Agency", img: "IAEA.png" },
    { code: "ICAO", name: "International Civil Aviation Organization", img: "icao.png" },
    { code: "IFAD", name: "International Fund for Agricultural Development", img: "ifad.png" },
    { code: "ILO", name: "International Labour Organization", img: "ilo.png" },
    { code: "IMF", name: "International Monetary Fund", img: "imf.png" },
    { code: "IMO", name: "International Maritime Organization", img: "imo.png" },
    { code: "IOM", name: "International Organization for Migration", img: "iom.png" },
    { code: "ITU", name: "International Telecommunication Union", img: "itu.png" },
    { code: "UN", name: "United Nations", img: "un.png" },
    { code: "UN Tourism", name: "UN Tourism", img: "untourism.png" },
    { code: "UN Women", name: "UN Women", img: "unwomen.png" },
    { code: "UNCTAD", name: "United Nations Conference on Trade and Development", img: "unctad.png" },
    { code: "UNDP", name: "United Nations Development Programme", img: "undp.png" },
    { code: "UNEP", name: "United Nations Environment Programme", img: "unep.png" },
    { code: "UNESCO", name: "United Nations Educational, Scientific and Cultural Organization", img: "unesco.png" },
    { code: "UNFPA", name: "United Nations Population Fund", img: "unfpa.png" },
    { code: "UN-Habitat", name: "United Nations Human Settlements Programme", img: "unhabitat.png" },
    { code: "UNHCR", name: "United Nations High Commissioner for Refugees", img: "unhcr.png" },
    { code: "UNICEF", name: "United Nations Children's Fund", img: "unicef.png" },
    { code: "UNIDO", name: "United Nations Industrial Development Organization", img: "unido.png" },
    { code: "UNODC", name: "United Nations Office on Drugs and Crime", img: "unodc.png" },
    { code: "UNOPS", name: "United Nations Office for Project Services", img: "unops.png" },
    { code: "UNRWA", name: "United Nations Relief and Works Agency for Palestine Refugees in the Near East", img: "unrwa.png" },
    { code: "UPU", name: "Universal Postal Union", img: "upu.png" },
    { code: "WFP", name: "World Food Programme", img: "wfp.png" },
    { code: "WHO", name: "World Health Organization", img: "who.png" },
    { code: "WIPO", name: "World Intellectual Property Organization", img: "wipo.png" },
    { code: "WMO", name: "World Meteorological Organization", img: "wmo.png" },
    { code: "World Bank", name: "The World Bank Group", img: "worldbank.png" },
    { code: "WTO", name: "World Trade Organization", img: "WTO.png" }
];

const observersData = [
    { code: "CTBTO", name: "Comprehensive Nuclear-Test-Ban Treaty Organization", img: "ctbto.png" },
    { code: "ITC", name: "International Trade Centre", img: "itc.png" },
    { code: "ODET", name: "Office of the Secretary-General's Envoy on Technology", img: "odet.png" },
    { code: "OECD", name: "Organisation for Economic Co-operation and Development", img: "oecd.jpg" },
    { code: "OHCHR", name: "Office of the United Nations High Commissioner for Human Rights", img: "ohchr.png" },
    { code: "UN DESA", name: "United Nations Department of Economic and Social Affairs", img: "undesa.jpg" },
    { code: "UN AIDS", name: "Joint United Nations Programme on HIV/AIDS", img: "unaids.png" },
    { code: "UN ECA", name: "United Nations Economic Commission for Africa", img: "uneca.png" },
    { code: "UN ECE", name: "United Nations Economic Commission for Europe", img: "unece.png" },
    { code: "UN ECLAC", name: "Economic Commission for Latin America and the Caribbean", img: "uneclac.png" },
    { code: "UN ESCAP", name: "Economic and Social Commission for Asia and the Pacific", img: "unescap.png" },
    { code: "UN ESCWA", name: "Economic and Social Commission for Western Asia", img: "unescwa.png" },
    { code: "UNFCCC", name: "United Nations Framework Convention on Climate Change", img: "unfccc.png" },
    { code: "UNICC", name: "United Nations International Computing Centre", img: "unicc.jpg" },
    { code: "UNITAR", name: "United Nations Institute for Training and Research", img: "unitar.png" },
    { code: "UNJSPF", name: "United Nations Joint Staff Pension Fund", img: "unjspf.png" },
    { code: "UNU", name: "United Nations University", img: "unu.png" }
];


// Generate Member Cards (Duplicated for Marquee)
if (membersTrack) {
    const doubleMembers = [...membersData, ...membersData]; // Duplicate list
    doubleMembers.forEach(member => {
        // Use image if available, else fallback to text
        let content;
        if (member.img) {
            content = `<img src="${member.img}" alt="${member.code}" class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300">`;
        } else {
            content = `<span class="text-slate-400 font-bold group-hover:text-un-blue transition-colors text-lg">${member.code}</span>`;
        }

        const memberCard = `
            <a href="#" class="relative flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-4 group hover:border-un-blue transition-all cursor-pointer hover:shadow-lg duration-300 block" title="${member.name}">
                ${content}
                
                <!-- Hover Hint for Full Name -->
                <div class="absolute inset-x-0 bottom-0 top-0 bg-slate-900/90 rounded-xl flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span class="text-white text-xs font-medium text-center leading-tight">${member.name}</span>
                </div>
            </a>
        `;
        membersTrack.innerHTML += memberCard;
    });
}

// Generate Observer Cards (Duplicated for Marquee) - UPDATED TO MATCH MEMBERS STYLE EXACTLY
const observersTrack = document.getElementById('observers-track');
if (observersTrack) {
    const doubleObservers = [...observersData, ...observersData];
    doubleObservers.forEach(observer => {
        let content;
        if (observer.img) {
            content = `<img src="${observer.img}" alt="${observer.code}" class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300">`;
        } else {
            // Text fallback updated to match member card style (light theme compatible, text-lg)
            content = `<span class="text-slate-400 font-bold group-hover:text-un-blue transition-colors text-lg">${observer.code}</span>`;
        }

        // Card updated to bg-white, border-slate-100, shadow-sm, h-32 (Exact match to Members)
        const observerCard = `
            <a href="#" class="relative flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-4 group hover:border-un-blue transition-all cursor-pointer hover:shadow-lg duration-300 block" title="${observer.name}">
                 ${content}
                  <!-- Hover Hint for Full Name -->
                <div class="absolute inset-x-0 bottom-0 top-0 bg-slate-900/90 rounded-xl flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span class="text-white text-xs font-medium text-center leading-tight">${observer.name}</span>
                </div>
            </a>
        `;
        observersTrack.innerHTML += observerCard;
    });
}

// Tab Switching Logic (Meetings Page)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // Update Buttons
            tabBtns.forEach(b => {
                if (b === btn) {
                    // Active State
                    b.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-50');
                    b.classList.add('bg-un-blue', 'text-white', 'shadow-md');
                } else {
                    // Inactive State
                    b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-50');
                    b.classList.remove('bg-un-blue', 'text-white', 'shadow-md');
                }
            });

            // Update Panels
            tabPanels.forEach(panel => {
                if (panel.id === target) {
                    panel.classList.remove('hidden');
                    panel.classList.add('grid', 'animate-fade-in'); // Ensure grid layout is restored
                } else {
                    panel.classList.add('hidden');
                    panel.classList.remove('grid');
                }
            });
        });
    });
}

// Initialize Lucide Icons
lucide.createIcons();


// MARQUEE LOGIC
function setupMarquee(elementId, speed, duplicationFactor = 2) {
    const track = document.getElementById(elementId);
    if (!track) return;

    let isPaused = false;

    // Pause on interaction
    track.addEventListener('mouseenter', () => isPaused = true);
    track.addEventListener('mouseleave', () => isPaused = false);
    track.addEventListener('touchstart', () => isPaused = true);
    track.addEventListener('touchend', () => setTimeout(() => isPaused = false, 1000)); // Delay resume on touch

    function step() {
        if (!isPaused) {
            track.scrollLeft += speed;
            const threshold = track.scrollWidth / duplicationFactor;
            if (track.scrollLeft >= threshold) {
                track.scrollLeft = 0;
            }
        }
        requestAnimationFrame(step);
    }

    // Start animation
    step();
}

// Start Marquees
// Members duplicated 2x
setupMarquee('members-track', 0.8, 2);
// Observers duplicated 2x
setupMarquee('observers-track', 0.6, 2);

// Homepage Navbar Scroll Logic
const mainHeader = document.getElementById('main-header');
const navLogoText = document.getElementById('nav-logo-text');
const navLinks = document.querySelectorAll('.nav-link');

if (mainHeader) {
    // Check initial scroll position
    if (window.scrollY > 50) {
        setScrolledState();
    } else {
        setTopState();
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setScrolledState();
        } else {
            setTopState();
        }
    });

    function setScrolledState() {
        mainHeader.classList.remove('bg-transparent');
        mainHeader.classList.add('glass-card');

        navLogoText.classList.remove('text-white');
        navLogoText.classList.add('text-slate-900');

        navLinks.forEach(link => {
            link.classList.remove('text-white/90', 'hover:text-white');
            link.classList.add('text-slate-600', 'hover:text-un-blue');
        });

        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('text-white');
            mobileMenuBtn.classList.add('text-slate-600');
        }
    }

    function setTopState() {
        mainHeader.classList.add('bg-transparent');
        mainHeader.classList.remove('glass-card');

        navLogoText.classList.add('text-white');
        navLogoText.classList.remove('text-slate-900');

        navLinks.forEach(link => {
            link.classList.add('text-white/90', 'hover:text-white');
            link.classList.remove('text-slate-600', 'hover:text-un-blue');
        });

        if (mobileMenuBtn) {
            mobileMenuBtn.classList.add('text-white');
            mobileMenuBtn.classList.remove('text-slate-600');
        }
    }
}
