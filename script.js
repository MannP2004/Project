const faqs=document.querySelectorAll(".m-4");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});