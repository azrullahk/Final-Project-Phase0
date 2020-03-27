

let score = 0;
let time =1000;
let num=8;
let array =[];

function randomNumber (num) {
    let output=0;
    let random =Math.ceil(Math.random()*num)
    output=random;
    array.push(random);
    console.log(array.length)
    return output;
}

function start() {
    let parent=document.getElementById("box");
    let child=parent.getElementsByTagName('p')[0];
    let removed=parent.removeChild(child);
    let id=0;
    for (i=1; i<=2; i++) {
        for (j=1; j<=num; j++) {
            id++
            let value = randomNumber(num);
            let index = id;
            var boxs = document.createElement('button');
            // boxs.setAttribute('disable','disable');
            boxs.setAttribute(`id`,`${id}`);
            boxs.setAttribute(`onclick`,`getNumber(${id})`);
            boxs.setAttribute(`class`,`angka`);
            boxs.innerHTML = `${value}`;
            document.getElementById("box").appendChild(boxs);
        }

    }
    let button = document.getElementById("start");
    button.style.display='none';
    let restart= document.getElementById("restart");
    restart.removeAttribute('disable')
    document.getElementById('scorevalue').innerHTML=score;
    document.getElementById('timevalue').innerHTML=time;
    document.getElementById('restart').style.display='block';
    timer();
    // console.log(array)
}
function restart () {
    location.reload()
}

function rubahWarna (angka) {
    angka.style.backgroundImage='none';
    angka.style.backgroundColor='whitesmoke';
    angka.style.width= '105px';
    angka.style.height= '105px';
    angka.style.borderRadius= '10%';
    angka.style.fontSize= '80px';
    angka.style.color='black';
    angka.style.transition='all 0.5s';
    angka.disable=true
}

function reset (angka) {
    angka.style.backgroundImage='url(image/back.jpg)';
    angka.style.backgroundSize='cover';
    angka.style.width= '105px';
    angka.style.height= '105px';
    angka.style.borderRadius= '10%';
    angka.style.fontSize= '80px';
    angka.style.color='transparent';
    angka.style.transition='all 0.5s';
}

function disable (angka) {
    angka.style.backgroundColor='cyan';
    angka.style.width= '105px';
    angka.style.height= '105px';
    angka.style.fontSize= '80px';
    angka.style.color='black';
    angka.style.backgroundImage='none';
    angka.style.transition='all 0.5s';
}

function removecard() {
    let box=document.getElementById("box");
    for (i=0;i<16; i++) {
    var boxbutton=box.getElementsByTagName('button')[0];
    box.removeChild(boxbutton);
    }
}

function playerScore() {
    let box=document.getElementById("box");
    box.innerHTML=`<p class='timeup'>Times Up !! Your Score <span class='scoreteks'>${score}</span></p>` ;
}


function timer () {
    let timers = document.getElementById('timevalue')
    var downloadTimer = setInterval(function(){
    time --;
    if (time<10 && time>=0) {
        timers.innerHTML='0'+time; 
    } else {
        timers.innerHTML=time;
    }
    if (time==0) {
        removecard()
        playerScore()
    }
    if (time<0) {
        timers.innerHTML='00';
    }
    }, 1000); 
}


function compare (pertama,kedua,angka,Ide) {

    if (pertama!=kedua) {
        var timeout = setTimeout(function() {
            reset(angka);
            reset(document.getElementById(`${Ide}`));
            score-=25;
            if (score<0) {
                score=0;
            }
            document.getElementById('scorevalue').innerHTML=score;
        },1000); 
        pertama=0;
        kedua=0;
        end=true;
    } else if (pertama==kedua){
        var timeout = setTimeout(function() {
            disable(angka);
            disable(document.getElementById(`${Ide}`));
            score+=100;
            document.getElementById('scorevalue').innerHTML=score;
        },1000);
        pertama=0;
        kedua=0;
        // console.log(score)
    }
}

let pertama=0;
let kedua=0;
let Ide=0;

function getNumber(idgen){
    let angka = document.getElementById(`${idgen}`)
    if (pertama==0 || kedua==0 || Ide==0) {
        rubahWarna(angka);
    if (pertama==0) {
        pertama=angka.innerHTML;
        Ide=`${idgen}`;
    } else if (pertama!=0) {
        kedua=angka.innerHTML;
        compare(pertama,kedua,angka,Ide);
        Ide=0;
        pertama=0;
        kedua=0;
        }
    }
}

// function tidak di gunakan =================
// function getNumber2(){
//     let angka = document.getElementById(`2`)
//     if (pertama==0 || kedua==0 || Ide==0) {
//         rubahWarna(angka);
//         if (pertama==0) {
//             pertama=angka.innerHTML;
//             Ide=`2`;
//         } else if (pertama!=0) {
//             kedua=angka.innerHTML;
//             compare(pertama,kedua,angka,Ide,end);
//             Ide=0;
//             pertama=0;
//             kedua=0;
//         }
//     }
// }
// function getNumber3(){
//     let angka = document.getElementById(`3`)
//         if (pertama==0 || kedua==0 || Ide==0) {
//             rubahWarna(angka);
//             if (pertama==0) {
//                 pertama=angka.innerHTML;
//                 Ide=`3`;
//             } else if (pertama!=0) {
//                 kedua=angka.innerHTML;
//                 compare(pertama,kedua,angka,Ide,end);
//                 Ide=0;
//                 pertama=0;
//                 kedua=0;
//             } 
//         }
//     }

// function getNumber4(){
//     let angka = document.getElementById(`4`)
//         if (pertama==0 || kedua==0 || Ide==0) {
//             rubahWarna(angka);
//             if (pertama==0) {
//                 pertama=angka.innerHTML;
//                 Ide=`4`;
//             } else if (pertama!=0) {
//                 kedua=angka.innerHTML;
//                 compare(pertama,kedua,angka,Ide,end);
//                 Ide=0;
//                 pertama=0;
//                 kedua=0;
//             }
//         }
//     }

// function getNumber5(){
//     let angka = document.getElementById(`5`)
//     if (pertama==0 || kedua==0 || Ide==0) {
//         rubahWarna(angka);
//         if (pertama==0) {
//             pertama=angka.innerHTML;
//             Ide=`5`;
//         } else if (pertama!=0) {
//             kedua=angka.innerHTML;
//             compare(pertama,kedua,angka,Ide,end);
//             Ide=0;
//             pertama=0;
//             kedua=0;
//         }
//     }
// }

// function getNumber6(){
//     let angka = document.getElementById(`6`)
//     rubahWarna(angka);
//         if (pertama==0) {
//             pertama=angka.innerHTML;
//             Ide=`6`;
//         } else if (pertama!=0) {
//             kedua=angka.innerHTML;
//             compare(pertama,kedua,angka,Ide,end);
//             Ide=0;
//             pertama=0;
//             kedua=0;
//         }
//     }

// function getNumber7(){
//     let angka = document.getElementById(`7`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`7`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }
//     }

// function getNumber8(){
//     let angka = document.getElementById(`8`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`8`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }

//     }

// function getNumber9(){
//     let angka = document.getElementById(`9`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`9`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }
//     }

// function getNumber10(){
//     let angka = document.getElementById(`10`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`10`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }
 
//     }

// function getNumber11(){
//     let angka = document.getElementById(`11`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`11`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }

//     }

// function getNumber12(){
//     let angka = document.getElementById(`12`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`12`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }
//     }

// function getNumber13(){
//     let angka = document.getElementById(`13`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`13`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }

//     }

// function getNumber14(){
//     let angka = document.getElementById(`14`)
//     rubahWarna(angka);
//     if (pertama==0) {
//         pertama=angka.innerHTML;
//         Ide=`14`;
//     } else if (pertama!=0) {
//         kedua=angka.innerHTML;
//         compare(pertama,kedua,angka,Ide,end);
//         Ide=0;
//         pertama=0;
//         kedua=0;
//     }
//     }

// function getNumber15(){
//     let angka = document.getElementById(`15`)
//         rubahWarna(angka);
//         if (pertama==0) {
//             pertama=angka.innerHTML;
//             Ide=`15`;
//         } else if (pertama!=0) {
//             kedua=angka.innerHTML;
//             compare(pertama,kedua,angka,Ide,end);
//             Ide=0;
//             pertama=0;
//             kedua=0;
//         }
//     }

// function getNumber16(){
//     let angka = document.getElementById(`16`)
//         rubahWarna(angka);
//         if (pertama==0) {
//             pertama=angka.innerHTML;
//             Ide=`16`;
//         } else if (pertama!=0) {
//             kedua=angka.innerHTML;
//             compare(pertama,kedua,angka,Ide,end);
//             Ide=0;
//             pertama=0;
//             kedua=0;
//         }
//     }