// gsap.registerPlugin(ScrollTrigger);

// function addImgScaleAnimation(){
//     gsap.utils.toArray("section").forEach((section, index) => {
//         const img = document.querySelector(`#preview-${index + 1} img`);
//         let startCondition = index === 0 ? 'top top' : 'bottom bottom';

//         gsap.to(img , {
//             scrollTrigger : {
//                 trigger: section,
//                 start: startCondition,
//                 end: () => {
//                 let viewportHeight = window.innerHeight;
//                 let sectionBottom = section.offsetTop + section.offsetHeight;
//                 let additionalDistance = viewportHeight * 0.5;
//                 let endvalue = sectionBottom - viewportHeight + additionalDistance;
//                 return `+=${endvalue}`;
//                },
//                scrub :1,
//             },
//             scale: 3,
//             ease:"none",
//         });
//     });
// }
// addImgScaleAnimation();

// function animateClipPath(
//     sectionId,
//     previewId,
//     startClipPath,
//     endClipPath,
//     start = "top center",
//     end = "bottom top"){
//     const section = document.querySelector(sectionId);
//     const preview = document.querySelector(previewId);

//     ScrollTrigger.create({
//         trigger: section,
//         start: start,
//         end: end,
//        onEnter: ()=>{
//         gsap.to(preview, {
//            scrollTrigger:{
//              trigger: section,
//              start: start,
//              end: end,
//              scrub: 0.125,
//            },
//            clipPath: startClipPath,
//            ease:"none",
//         });
//        },
//     })
// }

// animateClipPath(
//     "#section-1",
//     "#preview-1",
//     "polygon(0% 100%, 100% 100%, 100% 100%,0% 100%)",
//     "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
// );

// let totalSections = 7;
// for(let i = 2; i <= totalSections; i++){
//     let currentSection = `#section-${i}`;
//     let prevPreview = `#preview-${i - 1}`;
//     let currentPreview = `#preview-${i}`;

//     animateClipPath(
//         currentSection,
//         prevPreview,
//         "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         "top  bottom",
//         "center center",
//     );
//     if(i < currentSection){
//         animateClipPath(
//             currentSection,
//             currentPreview,
//             "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//             "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             "center center",
//             "bottom top",
//         );
//     }
// }



gsap.registerPlugin(ScrollTrigger);

// function addImgScaleAnimation() {
//     gsap.utils.toArray("section").forEach((section, index) => {
//         const img = section.querySelector("img");
//         const startCondition = index === 0 ? 'top top' : 'bottom bottom';
//         const sectionBottom = section.offsetTop + section.offsetHeight;
//         const additionalDistance = window.innerHeight * 0.5;

//         gsap.to(img, {
//             scrollTrigger: {
//                 trigger: section,
//                 start: startCondition,
//                 end: `+=${sectionBottom - window.innerHeight + additionalDistance}`,
//                 scrub: 1,
//             },
//             scale: 3,
//             ease: "none",
//         });
//     });
// }

// function animateClipPath(sectionId, previewId, startClipPath, endClipPath, start = "top center", end = "bottom top") {
//     const section = document.querySelector(sectionId);
//     const preview = document.querySelector(previewId);

//     ScrollTrigger.create({
//         trigger: section,
//         start: start,
//         end: end,
//         onEnter: () => {
//             gsap.to(preview, {
//                 scrollTrigger: {
//                     trigger: section,
//                     start: start,
//                     end: end,
//                     scrub: 0.125,
//                 },
//                 clipPath: startClipPath,
//                 ease: "none",
//             });
//         },
//     });
// }

// animateClipPath(
//     "#section-1",
//     "#preview-1",
//     "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//     "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
// );

// const totalSections = 7;
// for (let i = 3; i <= totalSections; i++) {
//     const currentSection = `#section-${i}`;
//     const prevPreview = `#preview-${i - 1}`;
//     const currentPreview = `#preview-${i}`;

//     animateClipPath(
//         currentSection,
//         prevPreview,
//         "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         "top  bottom",
//         "center center"
//     );

//     if (i < totalSections) { // Change from `i < currentSection` to `i < totalSections`
//         animateClipPath(
//             currentSection,
//             currentPreview,
//             "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//             "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             "center center",
//             "bottom top"
//         );
//     }
// }

