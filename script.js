// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.background = window.scrollY > 50
    ? 'rgba(10,15,30,0.98)'
    : 'rgba(10,15,30,0.85)';
});

// Live clock on monitor
function updateClock() {
  const el = document.querySelector('.vc-time');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
  }
}
setInterval(updateClock, 1000);
updateClock();

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.layanan-card, .produk-card, .testi-card, .keunggulan-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// WhatsApp form submit
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = this.querySelector('input[type="text"]').value;
  const wa = this.querySelector('input[type="tel"]').value;
  const kebutuhan = this.querySelector('select').value;
  const pesan = this.querySelector('textarea').value;
  const msg = `Halo CCTV Solo! Saya ${nama} ingin konsultasi.\nKebutuhan: ${kebutuhan}\nPesan: ${pesan}\nNo WA: ${wa}`;
  window.open(`https://wa.me/620882005479994?text=${encodeURIComponent(msg)}`, '_blank');
});
