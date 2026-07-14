// NIPPON KIKAI - Used Japanese Excavators Web Application Logic

// --- Excavators Database ---
const excavators = [
    {
        id: 'NK-258',
        name: 'Komatsu PC30-7',
        brand: 'komatsu',
        size: 'mini',
        hours: '2,450 ชม.',
        year: '2016',
        weight: '3.2 ตัน',
        grade: 'A++',
        price: '460,000 บาท',
        engine: 'Komatsu 3D84E',
        bucket: '0.09 ลบ.ม.',
        image: './images/komatsu_pc30.jpg',
        desc: 'รถขุดขนาดเล็กยอดนิยมนำเข้าจากญี่ปุ่น สภาพบอดี้สวยกริ๊บ สีเดิมจากโรงงาน ระบบไฮดรอลิกแน่นมาก ปั๊มแรง ตักไว เหมาะสำหรับงานเกษตร ขุดบ่อ ทำสวน หรือเข้าทำงานในที่แคบ เปลี่ยนถ่ายของเหลวและตรวจเช็ค 150 จุดให้พร้อมใช้ทันที'
    },
    {
        id: 'NK-892',
        name: 'Kobelco SK200-8 Super',
        brand: 'kobelco',
        size: 'large',
        hours: '5,800 ชม.',
        year: '2018',
        weight: '20.2 ตัน',
        grade: 'A',
        price: '1,850,000 บาท',
        engine: 'Hino J05E-TA',
        bucket: '0.80 ลบ.ม.',
        image: './images/kobelco_sk200.jpg',
        desc: 'รถขุดขนาดใหญ่ยอดนิยมสำหรับงานขุดดินลึก งานเหมือง หรือปรับหน้าดินพื้นที่กว้างขวาง เครื่องยนต์ Hino ประหยัดน้ำมันสูงสุด ปั๊มและระบบควบคุมไวตอบสนองดีเยี่ยม ช่วงล่างเต็ม โซ่หนา บูชแทรคดี บูรณะชิ้นส่วนและเก็บงานคุณภาพเรียบร้อย'
    },
    {
        id: 'NK-415',
        name: 'Hitachi ZX120-3',
        brand: 'hitachi',
        size: 'medium',
        hours: '4,100 ชม.',
        year: '2015',
        weight: '12.2 ตัน',
        grade: 'A',
        price: '1,120,000 บาท',
        engine: 'Isuzu AJ-4JJ1X',
        bucket: '0.52 ลบ.ม.',
        image: './images/hitachi_zx120.jpg',
        desc: 'ขนาดพอเหมาะสำหรับการทำงานทั่วไป ทั้งงานรับเหมาก่อสร้าง ถมดิน และขุดสระ เครื่องยนต์ Isuzu แข็งแกร่งทนทาน อะไหล่หาง่ายในไทย ตัวรถมีความคล่องตัวสูง บูรณะระบบไฟฟ้าและไฮดรอลิกโดยทีมช่างผู้เชี่ยวชาญจากญี่ปุ่น'
    },
    {
        id: 'NK-330',
        name: 'Komatsu PC120-8',
        brand: 'komatsu',
        size: 'medium',
        hours: '4,900 ชม.',
        year: '2017',
        weight: '12.0 ตัน',
        grade: 'A',
        price: 'สอบถามราคาทาง Line',
        engine: 'Komatsu SAA4D95LE-5',
        bucket: '0.50 ลบ.ม.',
        image: './images/komatsu_pc120.jpg',
        desc: 'โมเดลยอดฮิตตระกูล PC120 สภาพนางฟ้า เครื่องยนต์คอมมอนเรลปั๊มไฮดรอลิกระบบอิเล็กทรอนิกส์ คอนโทรลสั้นใช้งานนุ่มนวล ขุดแรง บูมยาวพิเศษ ช่วงล่างแน่น โซ่เหล็กหนา เหมาะกับงานก่อสร้างทั่วไป'
    },
    {
        id: 'NK-124',
        name: 'Kobelco SK30SR-5',
        brand: 'kobelco',
        size: 'mini',
        hours: '1,920 ชม.',
        year: '2017',
        weight: '3.0 ตัน',
        grade: 'A++',
        price: '480,000 บาท',
        engine: 'Yanmar 3TNV82A',
        bucket: '0.08 ลบ.ม.',
        image: './images/kobelco_sk30.jpg',
        desc: 'รถขุดรุ่นท้ายสั้น (SR - Short Radius) เหมาะอย่างยิ่งสำหรับไซต์งานในเมือง ซอยแคบ ทำงานริมถนน เครื่องยนต์ Yanmar เดินเงียบ ไฮดรอลิกนุ่มนวลเป็นเอกลักษณ์ของ Kobelco คอนโทรลน้ำมัน ตรวจเช็คเปลี่ยนซีลยางกระบอกสูบให้ใหม่ทุกจุด'
    },
    {
        id: 'NK-987',
        name: 'Caterpillar 320D',
        brand: 'cat',
        size: 'large',
        hours: '6,200 ชม.',
        year: '2015',
        weight: '21.5 ตัน',
        grade: 'B',
        price: '1,490,000 บาท',
        engine: 'CAT C6.4 ACERT',
        bucket: '0.90 ลบ.ม.',
        image: './images/cat_320d.jpg',
        desc: 'รถขุดดินอเมริกาแบรนด์ CAT สมรรถนะขุดหนัก ทรงพลัง เหมาะกับงานรับเหมาหินหรืองานตักหินแข็ง บอดี้และช่วงล่างแข็งแกร่งเป็นเอกลักษณ์ มีชุดหัวเจาะกระแทกติดตั้งเพิ่มเติมได้ ระบบไฟฟ้าเช็คสมบูรณ์พร้อมลุยงานทันที'
    }
];

// --- DOM Elements ---
const excavatorGrid = document.getElementById('excavator-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('details-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

const navLinks = document.querySelectorAll('.nav-link');

// --- State Variables ---
let currentBrandFilter = 'all';
let currentSizeFilter = 'all';

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    setupFilters();
    setupMobileMenu();
    setupModalClose();
    setupScrollSpy();
});

// --- Functions ---

// Render Excavator Cards
function renderCatalog() {
    excavatorGrid.innerHTML = '';
    
    const filteredExcavators = excavators.filter(item => {
        const brandMatch = currentBrandFilter === 'all' || item.brand === currentBrandFilter;
        const sizeMatch = currentSizeFilter === 'all' || item.size === currentSizeFilter;
        return brandMatch && sizeMatch;
    });

    if (filteredExcavators.length === 0) {
        excavatorGrid.innerHTML = `
            <div class="no-results container" style="grid-column: span 3; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 16px; display:block;"></i>
                <h3>ไม่พบรุ่นที่ตรงกับตัวกรองของคุณ</h3>
                <p style="color: var(--text-secondary); margin-top: 10px;">ลองปรับตัวกรองขนาดหรือแบรนด์อื่นเพิ่มเติม หรือทักสอบถามทีมงานโดยตรงใน Line ได้เลยครับ</p>
            </div>
        `;
        return;
    }

    filteredExcavators.forEach(item => {
        const card = document.createElement('div');
        card.className = 'excavator-card card-hover-effect';
        
        const isAskPrice = item.price.includes('สอบถาม');
        const priceHTML = isAskPrice 
            ? `<span class="price-ask">${item.price}</span>` 
            : `<span class="price-value">${item.price}</span>`;

        card.innerHTML = `
            <div class="excavator-card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" class="excavator-card-img" loading="lazy">
                <div class="card-grade-badge">Grade ${item.grade}</div>
            </div>
            <div class="excavator-card-info">
                <span class="card-brand">${item.brand}</span>
                <h3>${item.name}</h3>
                
                <div class="card-summary-specs">
                    <div class="spec-inline">
                        <span class="spec-inline-label"><i class="far fa-clock"></i> ชั่วโมงใช้งาน</span>
                        <span class="spec-inline-value">${item.hours}</span>
                    </div>
                    <div class="spec-inline">
                        <span class="spec-inline-label"><i class="fas fa-weight-hanging"></i> น้ำหนักรถ</span>
                        <span class="spec-inline-value">${item.weight}</span>
                    </div>
                </div>
                
                <div class="card-price-row">
                    <div class="price-box">
                        <span class="price-label">ราคาจำหน่าย</span>
                        ${priceHTML}
                    </div>
                    <button class="card-btn btn-view-details" data-id="${item.id}">
                        ดูข้อมูลเพิ่มเติม <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        excavatorGrid.appendChild(card);
    });

    // Attach Click Event listeners to details button
    const detailButtons = excavatorGrid.querySelectorAll('.btn-view-details');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openDetailModal(id);
        });
    });
}

// Set up Filter Click Listeners
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const parent = target.parentElement;
            
            // Remove active class from sibling buttons in this group
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');

            // Check if brand or size filter was clicked
            if (target.hasAttribute('data-filter-brand')) {
                currentBrandFilter = target.getAttribute('data-filter-brand');
            } else if (target.hasAttribute('data-filter-size')) {
                currentSizeFilter = target.getAttribute('data-filter-size');
            }

            renderCatalog();
        });
    });
}

// Generate Line Redirect Message
function generateLineMessage(item) {
    const text = `สวัสดีครับ สนใจรถแม็คโครนำเข้าจากญี่ปุ่น ${item.name} รหัสรถ [${item.id}] เกรด ${item.grade} รบกวนขอวิดีโอทดสอบจริง และสอบถามข้อมูลสเปค/ราคา เพิ่มเติมหน่อยครับ`;
    // We target official line oa message API schema or a standard share link
    // https://line.me/R/oaMessage/@nipponkikai/?{message}
    return `https://line.me/R/oaMessage/@nipponkikai/?${encodeURIComponent(text)}`;
}

// Open Details Modal and Populate
function openDetailModal(id) {
    const item = excavators.find(e => e.id === id);
    if (!item) return;

    const lineLink = generateLineMessage(item);

    modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="modal-main-img-wrap">
                <img src="${item.image}" alt="${item.name}" class="modal-main-img">
            </div>
            <div class="grade-specs" style="margin-top: 10px;">
                <p style="color: var(--text-secondary); text-align: center;"><i class="fas fa-shield-alt" style="color: var(--accent);"></i> รับประกันระบบและเครื่องยนต์ 3 เดือนเต็ม</p>
            </div>
        </div>
        
        <div class="modal-specs-details">
            <span class="brand">${item.brand} (นำเข้าญี่ปุ่น)</span>
            <h2>${item.name}</h2>
            
            <div class="modal-price-grade">
                <span class="modal-price">${item.price}</span>
                <span class="modal-grade">Grade ${item.grade}</span>
            </div>
            
            <p class="modal-description">${item.desc}</p>
            
            <div class="modal-tech-specs-table">
                <div class="tech-spec-row">
                    <span class="tech-spec-label">รหัสสินค้า</span>
                    <span class="tech-spec-val">${item.id}</span>
                </div>
                <div class="tech-spec-row">
                    <span class="tech-spec-label">ปีผลิต</span>
                    <span class="tech-spec-val">${item.year}</span>
                </div>
                <div class="tech-spec-row">
                    <span class="tech-spec-label">ชั่วโมงใช้งานจริง</span>
                    <span class="tech-spec-val">${item.hours}</span>
                </div>
                <div class="tech-spec-row">
                    <span class="tech-spec-label">น้ำหนักปฏิบัติการ</span>
                    <span class="tech-spec-val">${item.weight}</span>
                </div>
                <div class="tech-spec-row">
                    <span class="tech-spec-label">ขนาดเครื่องยนต์</span>
                    <span class="tech-spec-val">${item.engine}</span>
                </div>
                <div class="tech-spec-row">
                    <span class="tech-spec-label">ความจุบุ้งกี๋</span>
                    <span class="tech-spec-val">${item.bucket}</span>
                </div>
            </div>
            
            <div class="modal-cta-box">
                <p>ต้องการดูวิดีโอเทสขุดจริง คุยปรึกษาสเปครุ่นนี้ สอบถามผ่าน Line OA ได้ทันที 24 ชม.</p>
                <a href="${lineLink}" target="_blank" class="line-modal-btn">
                    <i class="fab fa-line" style="font-size:1.3rem;"></i> สนใจคันนี้ สอบถามทาง Line
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

// Close Modal
function setupModalClose() {
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scroll
}

// Setup Mobile Menu
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
    });
}

// Scroll Spy to update navigation active menu links
function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
