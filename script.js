// 1. Xử lý Mobile Menu (Hamburger)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Đóng menu khi click vào link
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 2. Xử lý Accordion cho Danh sách Giáo viên
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    // Toggle active class
    this.classList.toggle("active");

    // Toggle panel
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// 3. Smooth Scroll cho các link nội bộ (nếu trình duyệt cũ không hỗ trợ CSS smooth-scroll)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 4. Scroll Spy (Highlight menu khi cuộn)
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links li a").forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").includes(current)) {
      li.classList.add("active");
    }
  });
});

// --- 5. NÚT BACK TO TOP ---
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
