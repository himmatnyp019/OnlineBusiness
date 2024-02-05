const  openDrawer = document.getElementById('open');
const closeDrawer = document.getElementById('close');
const drawer = document.getElementById('drawer');


openDrawer.addEventListener('click', function(){
drawer.classList.add('active');
});

closeDrawer.addEventListener('click', function(){
drawer.classList.remove('active');
});