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

    // 瞎改的个人博客日记标题
    // let diarylist=document.querySelector('.diarylist >li')
    // let diarylists=document.querySelectorAll('.diarylist >li');
    // diarylists.forEach(function (elem,index) {
    //     elem.onmouseenter=function () {
    //         for (let i=0;i<tablists.length;i++){
    //             listli[i].style.borderBottom='none';
    //         }
    //         listli[i].style.borderBottom='1px solid #333333';
    //     }
    // })





    // 安静女子
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
    let bannerimg=document.querySelectorAll('.bannerimg >li')
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

//轮播图3秒换一张 自动滚动
    let bannerleft=document.querySelector('bannerleft')
    let t=setInterval(rightbtn.onclick,3000)
    bannerleft.onmouseenter=function () {
        clearInterval(t);
    }
    bannerleft.onmouseleave=function () {
        t=setInterval(rightbtn.onclick,3000)
    }

    for (let i=0;i<bannerpoint.length;i++){
        bannerpoint[i].onclick=function () {
            Array.prototype.forEach.call(bannerpoint,function (elem) {
                this.classList.remove('hot')
            })
        }
    }






}