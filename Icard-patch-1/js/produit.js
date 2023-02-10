
const technoObserver=new IntersectionObserver(entry=>{
    if(entry[0].isIntersecting){
        document.getElementById('annot1').classList.add('anim')
        document.getElementById('annot2').classList.add('anim')
        document.getElementById('annot3').classList.add('anim')
        document.getElementById('annot4').classList.add('anim')
        technoObserver.disconnect()
    }

},{threshold:0.5})
technoObserver.observe(document.getElementById('imageSchema'))
