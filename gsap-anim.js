

var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"60% 60%",
    end: "150% 60%",
    scrub:1,
    pin: true
}})

tl3.to(".image",{
    height:"350vh",
    width:"450vw"
},"a")
.to("#mainH1",{
    top:"40%",
    fontSize: "3.5rem"

},"a")
.to("#mainImg",{
    height:"120%",
    width:"120%"
   
},"a")
.to(".main-p",{
    top:"70%",
    fontSize: "1rem"

},"a")
