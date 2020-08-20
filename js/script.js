// {
//     let point = document.getElementById("indicator");
//     const point_width = 30;
//     let icons = document.getElementsByClassName("nav-icon");

//     for (let i = 0; i < icons.length; i++) {
//         if (icons[i].classList.contains("active")) {
//             var activeicon = icons[i];
//         }
//     }

//     console.log(activeicon);
//     console.log(activeicon.getBoundingClientRect());
//     console.log(activeicon.getBoundingClientRect().left);
//     console.log(activeicon.clientWidth / 2);
//     let x = activeicon.getBoundingClientRect().left + (activeicon.clientWidth / 2) - point_width;
//     point.style.left = (activeicon.getBoundingClientRect().left) + "px";
//     console.log(point.style.left);
// }