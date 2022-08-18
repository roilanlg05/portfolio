let articles = document.querySelectorAll('article')
let h1_footer = document.querySelector('.h1_footer')
let h2_footer = document.querySelector('.h2_footer')
let name = document.querySelector('.name').textContent = '</Roilan Lambert>'
let profesion = document.querySelector('.profesion').textContent = '</Web Developer>'

const cb = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.classList.contains('float-lg-start')){
            entry.target.style.animationName = 'entry_left'
        }
        else if(!entry.isIntersecting && entry.target.classList.contains('float-lg-start')){
            entry.target.style.animationName = 'exit_left'
        }

        if(entry.isIntersecting && entry.target.classList.contains('float-lg-end')){
            entry.target.style.animationName = 'entry_right'
        }
        else if(!entry.isIntersecting && entry.target.classList.contains('float-lg-end')){
            entry.target.style.animationName = 'exit_right'
        }

        if(entry.isIntersecting && entry.target.classList.contains('h1_footer') ){
            entry.target.style.animationName = 'entry_left'
        }
        if(entry.target.classList.contains('h2_footer')){
            entry.target.style.animationName = 'entry_left'
        }
        if(!entry.isIntersecting && entry.target.classList.contains('h1_footer')){
            entry.target.style.animationName = 'exit_left'
        }
        if(!entry.isIntersecting && entry.target.classList.contains('h2_footer')){
            entry.target.style.animationName = 'exit_left'
        }
        
        
    });
}


const observer = new IntersectionObserver(cb)
articles.forEach(element => observer.observe(element))
observer.observe(h1_footer)
setTimeout(observer.observe(h2_footer),1000)

