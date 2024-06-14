import { mapClasses , previews } from "./data.js";


document.addEventListener('DOMContentLoaded',function(){
    let container = document.querySelector('.container');
    let previewBg = document.querySelector('.preview-bg');
    let items = document.querySelectorAll('.item');
    let activePreview = document.querySelector('.preview.default');

    let isMouseOverItem = false;
    const defaultClipPath = {
        'variant-1':"polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
        'variant-2':"polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
        'variant-3':"polygon(0% 0%,0% 0%,0% 100%,0% 100%)",
    };
    let variantTransforms = {
        'variant-1':{
            title:{x:75, opacity:0},
            tags:{y:-75, opacity:0},
            description:{x:-75, opacity:0},
        },
        'variant-2':{
            title:{x: -75, opacity:0},
            tags:{y:-75, opacity:0},
            description:{y:75, opacity:0},
        },
        'variant-3':{
            title:{x:75, opacity:0},
            tags:{y:75 ,opacity:0},
            description:{x:75, opacity:0},
        },
    };

    function getDefaultClipPath(previewElement){
        for(const variant in defaultClipPath){
            if(previewElement.classList.contains(variant)){
                return defaultClipPath[variant];
            }
        }
        return "polygon(100% 0%,0% 0%,0% 100%,100% 100%)";
    }
    function applyVariantStyles(previewElement){
        const variant = previewElement.className
        .split(" ")
        .find((className) => className.startsWith("variant-"));
        if(variant && variantTransforms[variant]){
            Object.entries(variantTransforms[variant]).forEach(([elementClass, transform]) => {
                let element = previewElement.querySelector(`.preview-${elementClass}`
                );
                if(element){
                    gsap.set(element, transform);
                }
            });
        }
    }

    function chnageBg(newImgSrc){
        let newImg = document.createElement('img');
        newImg.src = newImgSrc;
        newImg.style.position = 'absolute';
        newImg.style.top = '0';
        newImg.style.left = '0';
        newImg.style.width = '100%';
        newImg.style.height = '100%';
        newImg.style.objectFit = 'cover';
        newImg.style.opacity ='0';

        previewBg.appendChild(newImg);

        gsap.to(newImg,{
            opacity:1,
            duration:0.5,
        });
        if(previewBg.children.length > 1){
            let oldImg = previewBg.children[0];
            gsap.to(oldImg,{
                opacity:0,
                duration:0.5,
                onComplete: ()=>{
                    previewBg.removeChild(oldImg);
                },
            });
        }
    }

    previews.forEach((preview,index)=>{
        let previewElement = document.createElement('div');
        previewElement.className = `preview ${mapClasses[index]} preview-${index +1 }`;

        previewElement.innerHTML = `
        <div class="preview-img"><img src="${preview.img}" alt=""/></div>
        <div class="preview-title"><h1>${preview.title}</h1></div>
        <div class="preview-tags"><p>${preview.tags}</p></div>
        <div class="preview-description"><P>${preview.description}</P></div>`;

        container.appendChild(previewElement);
        applyVariantStyles(previewElement);
    });
    items.forEach((item, index)=>{
        item.addEventListener('mouseenter', function(){
            isMouseOverItem = true;
            let newBg = `./wallpaper/bg-${index + 1}.jpg`;
            chnageBg(newBg);

            const newActivePreview = document.querySelector(`.preview-${index+1}`);
            if(activePreview && activePreview != newActivePreview){
                const previusActivePreviewImg = activePreview.querySelector('.preview-img');
                let previusDefaultClipPtah = getDefaultClipPath(activePreview);
                gsap.to(previusActivePreviewImg,{
                    clipPath: previusDefaultClipPtah,
                    duration:0.75,
                    ease:"power3.out",
                });
                gsap.to(activePreview,{
                    opacity:0,
                    duration:0.3,
                    delay:0.2,
                });
                applyVariantStyles(activePreview,true);
            }
            gsap.to(newActivePreview,{
                opacity:1,
                duration:0.1,
            });
            activePreview = newActivePreview;
            const elementToAnimate = ['title','tags','description'];
            elementToAnimate.forEach((el)=>{
                const element = newActivePreview.querySelector(`.preview-${el}`);

                if(element){
                    gsap.to(element,{
                        x:0,
                        y:0,
                        opacity:1,
                        duration:0.5,
                    });
                };
            });

            let activePreviewImg = activePreview.querySelector('.preview-img');
            gsap.to(activePreviewImg,{
                clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                duration:1,
                ease:"power3.out",
            });
        });

        item.addEventListener('mouseleave',()=>{
            isMouseOverItem = false;
            applyVariantStyles(activePreview,true);

            setTimeout(() => {
                if(!isMouseOverItem){
                    chnageBg('./wallpaper/default-bg.jpg');
                    if(activePreview){
                        gsap.to(activePreview,{
                            opacity:0,
                            duration:0.1,
                        });
                        let defaultPreview = document.querySelector('.preview.default');
                        gsap.to(defaultPreview,{
                            opacity:1,
                            duration:0.1,
                        });
                        activePreview = defaultPreview;

                        let activePreviewImg = 
                        activePreview.querySelector('.preview-img');

                        let defaultClipPath = getDefaultClipPath(activePreview);
                        gsap.to(activePreviewImg,{
                            clipPath:defaultClipPath,
                            duration:1,
                            ease:'power3.out'
                        });
                    }
                }
            }, 10);
        });
    });
});