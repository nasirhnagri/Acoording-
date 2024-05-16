document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentNode;
        const accordionContent = header.nextElementSibling;
  
        // Toggle active class on accordion content
        accordionContent.classList.toggle('active');
  
        // Collapse other accordion items
        const siblings = Array.from(accordionItem.parentNode.children).filter(item => item !== accordionItem);
        siblings.forEach(sibling => {
          const content = sibling.querySelector('.accordion-content');
          if (content.classList.contains('active')) {
            content.classList.remove('active');
          }
        });
      });
    });
  });