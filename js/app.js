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

(function(){
// target search box
const search = document.getElementById('search-item');
search.addEventListener('keyup', function(){
    let value = search.value.toLowerCase().trim();
    // console.log(value);
    const items = document.querySelectorAll('.store-item');
    items.forEach(function(item){
        let type = item.dataset.item;
        // console.log(type);
        // console.log(typeof type);
        // create if else statement
        if (type.includes(value)){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
});
})();