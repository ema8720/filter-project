// filter buttons
(function(){
// select all buttons
const filterBtn = document.querySelectorAll('.filter-btn');
// console.log(filterBtn);
filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const value = e.target.dataset.filter
    })
})


})();



// search innputs