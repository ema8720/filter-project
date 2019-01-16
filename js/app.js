// filter buttons
(function(){
// select all buttons
const filterBtn = document.querySelectorAll('.filter-btn');
// console.log(filterBtn);
filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        const value = e.target.dataset.filter
        // console.log(value);
        const items = document.querySelectorAll('.store-item');
        // console.log(items);
        items.forEach(function(item){
            if (value === 'all'){
                item.style.display = 'block';
            }
            else {
                if (item.classList.contains(value)){
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            }
        })
        
    })
})


})();



// search innputs