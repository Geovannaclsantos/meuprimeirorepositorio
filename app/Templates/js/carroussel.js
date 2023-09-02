
const largeSlider = ()=>{

        let largeSliders = document.querySelectorAll('.large-swiper')
    
        let prevArrow = document.querySelectorAll('.prev')
    
        let nextArrow = document.querySelectorAll('.next')
    
        largeSliders.forEach((slider, index)=>{
    
        // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
    
            let sliderLength = slider.children[0].children.length
    
            let result = (sliderLength > 1) ? true : false
    
            const swiper = new Swiper(slider, {
    
                direction: 'horizontal',
    
                centeredSlidesBounds:true,
    
                slidesPerView: 5,
    
                spaceBetween: 5,
    
                centerSlide: 'true',
    
                slidesPerGroup:1,
    
                loop: false,
                //faz os slides se moverem//
    
                autoplay: {
    
                    delay: 3000,
    
                    disableOnInteraction: false,
    
                },
    
     
    
               
    
                fade: 'true',
    
                speed: 200,
    
                grabCursor: 'true',
    
             
    
                navigation: {
    
            // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
    
                    nextEl: nextArrow[index],
    
                    prevEl: prevArrow[index],
    
                },
    
               
    
                breakpoints:{
    
                    0: {
    
                        slidesPerView: 3,
    
                        
    
             
    
                    },
    
                    520: {
    
                        slidesPerView: 3,
    
    
                   
    
                    },
    
                 
    
                    950: {
    
                        slidesPerView: 5,
    
                      
    
                   
    
                    },
    
                },
    
            });
    
        })
    
    }
    
    window.addEventListener('load', largeSlider)