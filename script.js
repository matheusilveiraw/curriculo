const titles = document.querySelectorAll('h2');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const section = title.parentElement; 
        const content = section.querySelector('ul, p'); 

        title.classList.toggle('active');
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});