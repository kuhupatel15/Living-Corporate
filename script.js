var t1=gsap.timeline({repeat:-1});
var pk=0;
           t1.from(".l01",{
                opacity:0,
                y:20,
                duration:.5
            })
            .from(".l012",{
                opacity:0,
                y:20,
                duration:.5,
                stagger:.5
            })
            
            t1.to("#page1img1 #mc",{
                opacity:0.7,
                scale:1.1,
                duration:0.5
            })
            t1.to("#page1img1 #mc",{
                opacity:1,
                scale:1,
                duration:.3
            })
        // })
        // console.log(pk)
    // }
    // s();
    gsap.set(".l02",{y:20})
    gsap.set(".l022",{y:20})
    //  setTimeout(function(){
        gsap.set("#bc",{scale:0.5},{opacity:0})
        t1.to(".l012",{
            delay:4,
            opacity:0,
            y:20,
            duration:.5,
            stagger:.5
        },"i1")
        .to(".l01",{
            opacity:0,
            y:20,
        },"i2")
        .to(".l022",{
            opacity:1,
            y:0,
            duration:.5,
            stagger:.5
        },"i3")
        .to(".l02",{
            opacity:1,
            y:0,
            duration:.3
        },"i4")
        .to(".no1",{
            opacity:0,
            duration:.3
        },"i1")
        .to(".no2",{
            opacity:1,
            duration:.3
        },"i2")
        t1.to("#page1img1 #mc",{
            delay:4,
            opacity:0,
            scale:0.5,
            duration:.5
        },"i1")
        t1.to("#page1img1 #bc",{
            
            opacity:0.7,
            scale:1.1,
            duration:0.5
        },"i3")
        t1.to("#page1img1 #bc",{
            delay:-0.5,
            opacity:1,
            scale:1,
            duration:.3
        },"i4")
        // pk=pk+8000
        // console.log(pk)
    // },8000)
    // setTimeout(function(){
        gsap.set("#gc",{scale:0.5},{opacity:0})
            t1.to(".l022",{
                delay:4,
                opacity:0,
                y:20,
                duration:.5,
                stagger:.5
            },"i7")
            .to(".l02",{
                opacity:0,
                y:20,
            },"i8")
            .to(".l032",{
                opacity:1,
                y:0,
                duration:.5,
                stagger:.5
            },"i5")
            .to(".l03",{
                opacity:1,
                y:0
            },"i6")
            .to(".no2",{
                opacity:0
            },"i7")
            .to(".no3",{
                opacity:1
            },"i8")
            t1.to("#page1img1 #bc",{
                delay:4,
                opacity:0,
                scale:0.5,
                duration:.5
            },"i7")
            t1.to("#page1img1 #gc",{
                opacity:0.7,
                scale:1.1,
                duration:0.5
            },"i5")
            t1.to("#page1img1 #gc",{
                // delay:-0.15,
                opacity:1,
                scale:1,
                duration:.3
            },"i6")
            // pk=pk+8000
            // console.log(pk)
    // },16000)
    // setTimeout(function(){
        gsap.set("#fc",{scale:0.5},{opacity:0})
            t1.to(".l032",{
                delay:5,
                opacity:0,
                y:20,
                duration:.5,
                stagger:.5
            },"i9")
            .to(".l03",{
                opacity:0,
                y:20,
            },"i10")
            .to(".l042",{
                opacity:1,
                y:0,
                duration:.5,
                stagger:.5
            },"i11")
            .to(".l04",{
                opacity:1,
                y:0
            },"i12")
            .to(".no3",{
                opacity:0
            },"i9")
            .to(".no4",{
                opacity:1
            },"i10")
            t1.to("#page1img1 #gc",{
                delay:5,
                opacity:0,
                scale:0.5,
                duration:1
            },"i9")
            t1.to("#page1img1 #fc",{
                opacity:0.7,
                scale:1.1,
                duration:0.5
            },"i11")
            t1.to("#page1img1 #fc",{
                opacity:1,
                scale:1,
                duration:.3
            },"i12")
    //         // pk=pk+8000
    //         // console.log(pk)
    // },24000)
    // setTimeout(function(){
        t1.to("#page1img1 #fc",{
            delay:5,
            opacity:0,
            scale:0.5,
            duration:.5
        })
    //     // pk=pk+8000
    // },32000)
    
var m=1000/60;
// setInterval(
//     infinite(),10
// )
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
    // document.querySelector("#select2").style.boxShadow="0px 5px  #000, -3px 5px  #000"
    document.querySelector("#select2").style.backgroundColor="#fff"
    // document.querySelector("#select1").style.boxShadow="none"
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
    // document.querySelector("#select2").style.boxShadow="none"
    document.querySelector("#select2").style.backgroundColor="transparent"
    // document.querySelector("#select1").style.boxShadow="0px 5px  #000, -3px 5px  #000"
    document.querySelector("#select1").style.backgroundColor="#fff"
})

const cnt=document.querySelectorAll(".cnt");
const imageDiv=document.querySelector("#oval1");
// cnt.forEach(function(c){
//     c.addEventListener("mouseenter",function(){
//         imageDiv.style.opacity=1;
//         let img=c.getAttribute("data-image");
//         imageDiv.style.backgroundImage=`url(${img})`;
        
        
//     }) 
//     const rect=c.getBoundingClientRect();
//     c.addEventListener("mousemove",function(dets){
//         x=rect.right;
//         console.log(rect)
//         imageDiv.style.right=`${rect.right-700}px` 
//         imageDiv.style.top=`${rect.y-150}px`
//      })
    
// })
// const rect=cnt.getBoundingClientRect();
// console.log(rect);
// document.querySelector("#hover").addEventListener("mouseleave",function(){
//     imageDiv.style.opacity=0;
// })