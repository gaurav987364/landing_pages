window.onload = function() {
    const gallery = document.querySelector('.galary');
    const prevImg = document.querySelector('.preview-img img');

    document.addEventListener('mousemove', function(event){
        const x = event.clientX;
        const y = event.clientY;

        const centerX = window.innerWidth   / 2;
        const centerY = window.innerHeight  / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = 55 + percentY * 2 ;
        const rotateY =  percentX * 2 ;

        gsap.to(gallery,{
            duration : 1,
            ease: 'power2.out',
            rotateX: rotateX,
            rotateY: rotateY,
            overwrite: "auto"
        });
    });

    for (let i = 0; i < 150; i++) {
        const item = document.createElement('div');
        item.className = 'item';

        const img = document.createElement('img');
        img.className = 'img';
        img.src = './imgs/img' + ((i % 15) + 1) + '.jpg';
        item.appendChild(img);
        gallery.appendChild(item);
    }

    const items = document.querySelectorAll(".item");
    const numOfItems = items.length;
    const angleIncrement = 360 / numOfItems;

    items.forEach(function(item,index){
        gsap.set(item,{
            rotationY: 90,
            rotationZ : index * angleIncrement - 90,
            transformOrigin: "50% 400px",
        });

        item.addEventListener('mouseover', function(){
            const imgInsideItem = item.querySelector('img');
            prevImg.src = imgInsideItem.src;

            gsap.to(item,{
                x:10,
                y:10,
                z:10,
                duration : 0.5,
                ease: 'power2.out',
            });
        });

        item.addEventListener('mouseout', function(){
            prevImg.src = "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            gsap.to(item,{
                x:0,
                y:0,
                z:0,
                duration : 0.5,
                ease: 'power2.out',
            });
        });
    });

    ScrollTrigger.create({
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        // markers:true,
        scrub:2,
        onRefresh: setupRotation,
        onUpdate : (self)=>{
            const rotationProgerss =  self.progress * 360 * 1;
            items.forEach((item,index)=>{
                const currentAngle = index * angleIncrement - 90 + rotationProgerss;
                gsap.to(item, {
                    rotationZ: currentAngle,
                    duration:1,
                    ease: 'power3.out',
                    overwrite: "auto"
                });
            });
        },
    });
};

function setupRotation() {};

