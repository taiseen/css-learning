// 25 Dec 2021

const faqs = document.querySelectorAll('.faq');

faqs.forEach(question => {
    question.addEventListener('click', () => {
        
        // question.classList.toggle('whenUserClick');
       
        faqs.forEach(q => q.classList.remove('whenUserClick'));
        
        question.classList.add('whenUserClick');
    });
});