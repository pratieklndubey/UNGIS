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

// Data Lists
const membersList = [
    "CEB", "ECA", "ECE", "ECLAC", "ESCAP", "ESCWA", "FAO", "IAEA", "ILO", "IMO", "ITC",
    "ITU", "OECD", "UN Women", "UNCTAD", "UNDESA", "UNDP", "UNEPC", "UNESCO", "UNFCCC", "UNFPA",
    "UNHabitat", "UNHCR", "UNICEF", "UNIDO", "UNITAR", "UNODC", "UNOPS", "UNRWA", "UNWTO", "UPU",
    "WFP", "WHO", "WIPO", "WMO", "World Bank", "WTO"
];

const observersList = [
    "AUC", "Commonwealth", "CSTO", "GCC", "ICANN", "IEEE", "ISOC", "OIC", "OSCE", "South Centre"
];


// Generate Member Cards
if (membersTrack) {
    membersList.forEach(member => {
        const memberCard = `
            <div class="snap-center flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-6 group hover:border-un-blue transition-all cursor-pointer">
                <span class="text-slate-400 font-bold group-hover:text-un-blue transition-colors text-lg">${member}</span>
            </div>
        `;
        membersTrack.innerHTML += memberCard;
    });
}

// Generate Observer Cards
const observersTrack = document.getElementById('observers-track');
if (observersTrack) {
    observersList.forEach(observer => {
        const observerCard = `
            <div class="snap-center flex-shrink-0 w-48 h-24 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center p-4 group hover:border-slate-500 transition-all cursor-pointer">
                    <span class="text-slate-500 font-semibold group-hover:text-slate-300 transition-colors text-sm">${observer}</span>
            </div>
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
