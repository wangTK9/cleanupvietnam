document.addEventListener("DOMContentLoaded", function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("section");

  // Xử lý sự kiện click cho nút "Scroll to Top"
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Xử lý sự kiện cuộn trang
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Hiển thị hoặc ẩn nút "Scroll to Top"
    if (scrollPosition > 200) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }

    // Cập nhật trạng thái active cho các nav-link
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      var sectionTop = section.offsetTop - 100; // Điều chỉnh tùy theo chiều cao của navbar
      var sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        link.classList.add("act");
      } else {
        link.classList.remove("act");
      }
    });

    // Xóa lớp active từ tất cả các nav-link khi cuộn về đầu trang
    if (scrollPosition === 0) {
      navLinks.forEach(function (item) {
        item.classList.remove("act");
      });
    }
  });

  // Xử lý sự kiện click cho các liên kết
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("act");
      });
      this.classList.add("act");
    });
  });
});

var getNavbar = document.querySelector(".navbar_container");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    getNavbar.classList.add("navbar-active");
  } else {
    getNavbar.classList.remove("navbar-active");
  }
});

// display menu
var getBar = document.querySelector(".fa-bars");
var getX = document.querySelector(".fa-x");
var getMenu = document.querySelector(".menu-container");
getBar.addEventListener("click", () => {
  getMenu.classList.toggle("active");
  getBar.classList.toggle("hiden-x");
  getX.classList.toggle("active-x");
});

getX.addEventListener("click", () => {
  getMenu.classList.toggle("active");
  getBar.classList.toggle("hiden-x");
  getX.classList.toggle("active-x");
});

document
  .querySelector(".container-video")
  .addEventListener("click", function () {
    document.querySelector(".video-overlay").style.display = "flex";
    // Code để play video
    var video = document.querySelector(".video-overlay video");
    if (video) {
      video.play();
    }
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".video-overlay").style.display = "none";
  // Code để pause video
  var video = document.querySelector(".video-overlay video");
  if (video) {
    video.pause();
  }
  console.log("this");
});

// Lấy phần tử popup và các nút
var popup = document.getElementById("popup");
var openPopupBtn = document.getElementById("open-popup");
var closePopupBtn = document.getElementById("close-popup");

// Mở cửa sổ popup khi nhấp vào nút "Tìm hiểu thêm"
openPopupBtn.onclick = function () {
  popup.style.display = "block";
};

// Đóng cửa sổ popup khi nhấp vào nút đóng
closePopupBtn.onclick = function () {
  popup.style.display = "none";
};

// Đóng cửa sổ popup nếu nhấp ra ngoài nội dung popup
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
// form
document.addEventListener("DOMContentLoaded", function () {
  var currentStep = 1;

  document
    .querySelector(".btn-next")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (currentStep === 1) {
        var email = document.getElementById("email").value.trim();
        var name = document.getElementById("name").value.trim();
        var genderChecked = document.querySelector(
          'input[name="gender"]:checked'
        );

        if (email === "" || name === "" || !genderChecked) {
          alert("Vui lòng điền đầy đủ thông tin ở bước này.");
          return;
        }
      }

      if (currentStep < 2) {
        currentStep++;
        updateFormSteps();
        updateProgressBar(); // Cập nhật thanh tiến trình
      }
    });

  document
    .querySelector(".btn-back")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (currentStep > 1) {
        currentStep--;
        updateFormSteps();
        updateProgressBar(); // Cập nhật thanh tiến trình
      }
    });

  function updateFormSteps() {
    document.querySelectorAll(".form-step").forEach(function (step) {
      step.style.display = "none";
    });
    document.querySelector(".step-" + currentStep).style.display = "block";

    if (currentStep === 1) {
      document.querySelector(".btn-back").style.display = "none";
      document.querySelector(".btn-next").style.display = "inline-block";
      document.querySelector(".btn-submit").style.display = "none";
    } else if (currentStep === 2) {
      document.querySelector(".btn-back").style.display = "inline-block";
      document.querySelector(".btn-next").style.display = "none";
      document.querySelector(".btn-submit").style.display = "inline-block";
    }
  }

  function updateProgressBar() {
    var progressBar = document.getElementById("progress-bar");
    var updateLabel = document.getElementById("label-progress");

    if (!progressBar || !updateLabel) {
      console.error("Không tìm thấy thanh tiến trình hoặc nhãn tiến trình.");
      return;
    }

    // Cập nhật giá trị thanh tiến trình dựa trên bước hiện tại
    if (currentStep === 1) {
      progressBar.value = 50;
      updateLabel.innerHTML = "Hoàn thành 1 trên 2";
    } else if (currentStep === 2) {
      progressBar.value = 100;
      updateLabel.innerHTML = "Hoàn thành 2 trên 2";
    }
  }

  // Xử lý sự kiện khi người dùng nhấn nút "Gửi"
  document
    .getElementById("volunteer-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

      // Thu thập dữ liệu từ form
      var email = document.getElementById("email").value.trim();
      var name = document.getElementById("name").value.trim();
      var address = document.getElementById("address").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var area = document.getElementById("area").value.trim();

      if (
        email === "" ||
        name === "" ||
        address === "" ||
        phone === "" ||
        area === ""
      ) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      // Hiển thị thông báo cảm ơn
      alert("Cảm ơn bạn! Chúng tôi đã nhận được thông tin của bạn.");
    });

  updateFormSteps(); // Khởi tạo hiển thị đúng bước đầu tiên
  updateProgressBar(); // Khởi tạo thanh tiến trình cho bước đầu tiên
});

// couter

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter-number");

  // Hàm để bắt đầu đếm
  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // Thay đổi thời gian đếm theo nhu cầu
    const startVal = 0;
    const stepTime = Math.abs(Math.floor(duration / (target - startVal)));

    let currentVal = startVal;
    const increment = ((target - startVal) / duration) * stepTime;

    const updateCounter = () => {
      currentVal += increment;
      if (currentVal >= target) {
        counter.textContent = target.toLocaleString(); // Định dạng số với dấu phân cách hàng nghìn
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(currentVal).toLocaleString();
      }
    };

    const timer = setInterval(updateCounter, stepTime);
  };

  // Intersection Observer để quan sát phần tử
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          // Reset counter và bắt đầu đếm lại mỗi khi cuộn đến
          if (counter.classList.contains("counting")) {
            counter.classList.remove("counting"); // Xóa lớp đánh dấu nếu đã đếm
            counter.textContent = "0"; // Reset giá trị về 0
          }
          startCounting(counter);
          counter.classList.add("counting"); // Đánh dấu rằng số đã được đếm
        }
      });
    },
    {
      threshold: 0.5, // Khởi động khi 50% phần tử nằm trong viewport
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// slide show
let visibleItems = 3; // Số lượng item muốn hiển thị
const slideWidth = 400; // Chiều rộng mỗi slide
const container = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
let scrollAmount = 0;

function scrollSlides(n) {
  let maxScroll = (slides.length - visibleItems) * slideWidth;
  scrollAmount += n * slideWidth;

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }
  container.style.transform = `translateX(-${scrollAmount}px)`;
}
