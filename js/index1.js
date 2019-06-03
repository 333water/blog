window.onload=function () {
    let home=document.getElementById('home')
    home.onmouseenter=function () {
        home.style.color= '#00c1de'
    }
    home.onmouseleave=function () {
        home.style.color='#ffffff'
    }

    let home2=document.getElementById('home2')
    home2.onmouseenter=function () {
        home2.style.color= '#00c1de'
    }
    home2.onmouseleave=function () {
        home2.style.color='#ffffff'
    }

    let home3=document.getElementById('home3')
    home3.onmouseenter=function () {
        home3.style.color= '#00c1de'
    }
    home3.onmouseleave=function () {
        home3.style.color='#ffffff'
    }


    // 四个圆点点
    let btnlist=document.getElementsByClassName('btnlist');
    let activeColor='#046b80',inactiveColor='#fff'

    let bannerpoint=btnlist[0].getElementsByTagName('li');
    for (let i=0;i<bannerpoint.length;i++){
        bannerpoint[i].onmouseenter=function () {
            this.style.backgroundColor=activeColor;
        };
        bannerpoint[i].onmouseleave=function () {
            this.style.backgroundColor=inactiveColor;
        }
    }

    let diarylist=document.getElementsByClassName('diarylist')[0];
    let listli=diarylist.getElementsByTagName('li')
    for (let i=0;i<listli.length;i++) {
        listli[i].onmouseenter=function () {
            for (let j=0;j<listli.length;j++){
                listli[j].style.borderBottom='none';
            }
            listli[i].style.borderBottom='1px solid #333333';
            return false;
            // a标签会跳转 加了return false以后会把a标签的默认样式屏蔽掉
        }
    }

    let tablist=document.querySelector('.tablist >li')
    let tablists=document.querySelectorAll('.tablist >li');
    // console.dir(tablist);
    // console.dir(tablists);
    tablists.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            for (let i=0;i<tablists.length;i++){
                tablists[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    })



    let  index=0;
    let rightbtn=document.querySelector('.rightbtn')
    let leftbtn=document.querySelector('.leftbtn')
    let bannerimg=document.querySelectorAll('.bannerimg >li');
    rightbtn.onclick=function () {
        index++;
        if (index==bannerimg.length){
            index=0;
        }
        bannerimg.forEach(function (ele) {
            ele.style.zIndex=1;
        })
        Array.prototype.forEach.call(bannerpoint,function (elem) {
            elem.classList.remove('hot')
        })
        bannerpoint[index].classList.add('hot');
        bannerimg[index].style.zIndex=999;
        // 当前图片层级调高
    }

    leftbtn.onclick=function () {
        index--;
        if (index<0){
            index=bannerimg.length - 1;
        }
        bannerimg.forEach(function (ele) {
            ele.style.zIndex=1;
        })
        Array.prototype.forEach.call(bannerpoint,function (elem) {
            elem.classList.remove('hot')
        })
        bannerpoint[index].classList.add('hot');
        bannerimg[index].style.zIndex=999;
        // 当前图片层级调高
    }

    let current=0,next=0;
    let w=bannerimg[0].offsetWidth;
    let flag=true;


    rightbtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==bannerimg.length){
            next=0;
        }
        bannerimg[next].style.left=w+'px';
        bannerpoint[current].classList.remove('hot');
        bannerpoint[next].classList.add('hot');
        animate(bannerimg[current],{left:-w})
        animate(bannerimg[next],{left:0},function () {
            flag=true;
        })
        current=next;
    }
    leftbtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=bannerimg.length - 1;
        }
        bannerimg[next].style.left=-w+'px';
        bannerpoint[current].classList.remove('hot');
        bannerpoint[next].classList.add('hot');
        animate(bannerimg[current],{left:w})
        animate(bannerimg[next],{left:0},function () {
            flag=true;
        })
        current=next;
    }

//轮播图3秒换一张 自动滚动
    let bannerleft=document.querySelector('.bannerleft')
    let t=setInterval(rightbtn.onclick,3000)
    bannerleft.onmouseenter=function () {
        clearInterval(t);
    }
    bannerleft.onmouseleave=function () {
        t=setInterval(rightbtn.onclick,3000)
    }

    // for (let i=0;i<bannerpoint.length;i++){
    //     bannerpoint[i].=i;
    //     bannerpoint[i].onclick=function () {
    //         Array.prototype.forEach.call(bannerpoint,function (elem) {
    //             this.classList.remove('hot')
    //         })
    //         bannerimg.forEach(function (ele) {
    //             ele.style.zIndex=1;
    //         })
    //         this.classList.add('hot');
    //         bannerimg[this.].style.zIndex=999;
    //     }
    // }
    for(let i=0;i<bannerpoint.length;i++){
        bannerpoint[i].onclick=function () {
        if (current===i){
            return;
        } 
        next=i;
        if (next>current){
            bannerimg[next].style.left=w+'px';
            animate(bannerimg[current],{left:-w})
            animate(bannerimg[next],{left:0})
        }else {
            bannerimg[next].style.left=-w+'px';
            animate(bannerimg[current],{left:w})
            animate(bannerimg[next],{left:0})
        }

        bannerpoint[current].classList.remove('hot');
        bannerpoint[next].classList.add('hot');
        current=next;
        }
    }

    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.lazyload');
    let positionArr=[];
    imgs.forEach(function (ele) {
        let parent=ele.offsetParent;
        positionArr.push(parent.offsetTop+ele.offsetTop)
    })
   window.onscroll=function () {
       let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
       for (let i=0;i<positionArr.length;i++){
           if (scrolltop + viewH >=positionArr[i]+50){
              // 标准属性
               if (!imgs[i].src){
                   imgs[i].src=imgs[i].getAttribute('aa')
               }
           }
       }
    }


}
