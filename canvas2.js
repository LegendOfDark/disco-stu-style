let canvas2 = document.getElementById('canvas2');
let c2 = canvas2.getContext('2d');

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;



let disco = () => {
    var pic = new Image();
    pic.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86cf185c-ad61-4faa-9c63-de77f6c62a3c/dazlbwx-516f4792-c662-49db-9c2b-812012c03689.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2Y2YxODVjLWFkNjEtNGZhYS05YzYzLWRlNzdmNmM2MmEzY1wvZGF6bGJ3eC01MTZmNDc5Mi1jNjYyLTQ5ZGItOWMyYi04MTIwMTJjMDM2ODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6GvL5kH37IPIwm3513Ua6vfGNVP4lTCzmg4-eYFqvBo";
    pic.addEventListener('load', () => {
        c2.drawImage(pic, canvas2.width/2-pic.width/2, canvas2.height/2-pic.height/2  -100);
    });
}

disco();
