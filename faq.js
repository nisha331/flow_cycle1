document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");
    
    faqs.forEach(faq => {
      faq.addEventListener("click",() => {
        console.log("clicked!");
        faq.classList.toggle("active");
      });
    });
  });
  