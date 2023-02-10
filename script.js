document.querySelector("#read1").addEventListener("mousemove",function(dets){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets.x-200}px`
    document.querySelector("#read1 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read1").addEventListener("mouseleave",function(dets){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read1 h1").style.borderBottom="none"
})
document.querySelector("#read2").addEventListener("mousemove",function(dets1){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets1.x-200}px`
    document.querySelector(".oval1").style.top=`${dets1.y-200}px`
    document.querySelector("#read2 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read2").addEventListener("mouseleave",function(dets1){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read2 h1").style.borderBottom="none"
})
document.querySelector("#read3").addEventListener("mousemove",function(dets1){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets1.x-200}px`
    document.querySelector(".oval1").style.top=`${dets1.y-200}px`
    document.querySelector("#read3 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read3").addEventListener("mouseleave",function(dets1){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read3 h1").style.borderBottom="none"
})
document.querySelector("#read4").addEventListener("mousemove",function(dets1){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets1.x-200}px`
    document.querySelector(".oval1").style.top=`${dets1.y-200}px`
    document.querySelector("#read4 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read4").addEventListener("mouseleave",function(dets1){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read4 h1").style.borderBottom="none"
})
document.querySelector("#read5").addEventListener("mousemove",function(dets1){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets1.x-200}px`
    document.querySelector(".oval1").style.top=`${dets1.y-200}px`
    document.querySelector("#read5 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read5").addEventListener("mouseleave",function(dets1){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read5 h1").style.borderBottom="none"
})
document.querySelector("#read6").addEventListener("mousemove",function(dets1){
    document.querySelector(".oval1").style.opacity=1;
    document.querySelector(".oval1").style.left=`${dets1.x-200}px`
    document.querySelector(".oval1").style.top=`${dets1.y+200}px`
    document.querySelector("#read6 h1").style.borderBottom="#E5855E 14px solid"
})
document.querySelector("#read6").addEventListener("mouseleave",function(dets1){
    document.querySelector(".oval1").style.opacity=0
    document.querySelector("#read6 h1").style.borderBottom="none"
})

var t1=gsap.timeline();

t1.from(".l012",{
    opacity:0,
    y:20,
    duration:.5,
    stagger:.5
})
.from(".l01",{
    opacity:0,
    y:20,
    

},"hello")
t1.from("#page1img1 #mc",{
    opacity:0,
    scale:0.5,
    duration:1
},"hello")

gsap.set(".l02",{y:20})
gsap.set(".l022",{y:20})

setTimeout(function(){
    gsap.set("#bc",{scale:0.5})
    
    t1.to(".l012",{
        opacity:0,
        y:20,
        duration:.5,
        stagger:.5
    },"b1")
    .to(".l01",{
        opacity:0,
        y:20,
        
    
    },"a1")
    
    .to(".l022",{
        opacity:1,
        y:0,
        duration:.5,
        stagger:.5
    },"a2")
    .to(".l02",{
        opacity:1,
        y:0
        
    
    },)
    .to(".no1",{
        opacity:0
    },"a1")
    .to(".no2",{
        opacity:1
    },"a2")
    t1.to("#page1img1 #mc",{
        
        opacity:0,
        scale:0.5,
        duration:1
    },"b1")
    t1.to("#page1img1 #bc",{
        opacity:1,
        scale:1
    },"a2")
    
    
},8000)

    setTimeout(function(){
        
        gsap.set("#gc",{scale:0.5})
        t1.to(".l022",{
            opacity:0,
            y:20,
            duration:.5,
            stagger:.5
        },"b2")
        .to(".l02",{
            opacity:0,
            y:20,
            
        
        },"a3")
        
        .to(".l032",{
            opacity:1,
            y:0,
            duration:.5,
            stagger:.5
        },"a4")
        .to(".l03",{
            opacity:1,
            y:0
            
        
        })
        .to(".no2",{
            opacity:0
        },"b2")
        .to(".no3",{
            opacity:1
        },"a3")
        t1.to("#page1img1 #bc",{
            
            opacity:0,
            scale:0.5,
            duration:1
        },"b2")
        t1.to("#page1img1 #gc",{
            opacity:1,
            scale:1
        },"a4")
        
    },16000)
    setTimeout(function(){
        
        gsap.set("#fc",{scale:0.5})
        t1.to(".l032",{
            opacity:0,
            y:20,
            duration:.5,
            stagger:.5
        },"b3")
        .to(".l03",{
            opacity:0,
            y:20,
            
        
        },"a6")
        
        .to(".l042",{
            opacity:1,
            y:0,
            duration:.5,
            stagger:.5
        },"a7")
        .to(".l04",{
            opacity:1,
            y:0
            
        
        },)
        .to(".no3",{
            opacity:0
        },"a6")
        .to(".no4",{
            opacity:1
        },"a7")
        t1.to("#page1img1 #gc",{
            
            opacity:0,
            scale:0.5,
            duration:1
        },"b3")
        t1.to("#page1img1 #fc",{
            opacity:1,
            scale:1
        },"a7")
        
    },24000)
function animation1(){
    t3=gsap.timeline();
    t3.to("#img1",{
        scale:.5,
        opacity:0,
        duration:1
    })
    .to("#img2",{
        opacity:1
    })
}
document.querySelector("#select2").addEventListener("click",function animation1(){
    t3=gsap.timeline();
    gsap.set("#head2",{opacity:0,y:20});
    t3.to("#img1",{
        scale:.5,
        opacity:0,
        duration:1
    },"k")
    .to("#img2",{
        scale:1,
        opacity:1,
        duration:1
    },"p")
    .to("#head1",{
        y:20,
        opacity:0,
        
    },"k")
    .to("#head2",{
        y:0,
        opacity:1
    },"p")
    document.querySelector("#select2").style.boxShadow="0px 5px  #000, -3px 5px  #000"
    document.querySelector("#select2").style.backgroundColor="#fff"
    document.querySelector("#select1").style.boxShadow="none"
    document.querySelector("#select1").style.backgroundColor="transparent"
})
document.querySelector("#select1").addEventListener("click",function animation2(){
    t3=gsap.timeline();
    gsap.set("#head1",{opacity:0,y:20});
    t3.to("#img2",{
        scale:.5,
        opacity:0,
        duration:.5
    },"y")
    .to("#img1",{
        scale:1,
        opacity:1,
        duration:.5 
    },"s")
    .to("#head2",{
        y:20,
        opacity:0,
        
    },"y")
    .to("#head1",{
        y:0,
        opacity:1
    },"s")
    document.querySelector("#select2").style.boxShadow="none"
    document.querySelector("#select2").style.backgroundColor="transparent"
    document.querySelector("#select1").style.boxShadow="0px 5px  #000, -3px 5px  #000"
    document.querySelector("#select1").style.backgroundColor="#fff"
})
