// const section = document.getElementsByTagName('section')
const sections = document.querySelectorAll('section')
// console.log(section)
// for(const section of sections){
//     console.log(section)
//     section.style.backgroundColor = 'gray'
//     section.style.border = 'solid 2px green'
//     section.style.marginBottom = '20px'
//     section.style.borderRadius = '15px'
//     section.style.padding = '30px'
// }




// dynamic class
for(const section of sections ){
    section.classList.add('section-cart')
}