!function(e){var n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/dist/",i(i.s=0)}([function(e,n,i){"use strict";i.r(n);var t={x:180,y:380,width:136,height:172,frameX:0,frameY:0,speed:8,walking:!1};var o=700,a=400,r=73,d=69,w=300,s=500,c=80,l=50,u=function(){if(window.gameStart){var e=1,n=59;setInterval((function(){(n=n%60<10?"0"+n:n)>0&&e>0?document.getElementById("countdown").innerHTML=e+" min : "+n+" sec before departure":(document.getElementById("countdown").innerHTML="Time is up!",window.gameOver=!0),0===--n&&(e--,n=59)}),1e3)}},g=document.getElementById("canvas"),f=g.getContext("2d");g.height=window.innerHeight,g.width=window.innerWidth,window.gameSplashScreen=!1,window.gameSplashScreen2=!0,window.gameSplashScreen3=!0,window.introDialogue=!0,window.introDialogue2=!1,window.introDialogue3=!1,window.foundTickets=!1,window.foundTickets2=!1,window.foundTickets3=!1,window.inventory=[],window.gameOver=!1;var m=new Image;m.src="../dist/images/splash.png";var h=new Image;h.src="../dist/images/splash-2.png";var p=new Image;p.src="../dist/images/splash-3.png";var v=new Image;v.src="../dist/images/passport.png";var y=new Image;y.src="../dist/images/ticket.png";var k=new Image;k.src="../dist/images/sprite.png";var S=new Image;S.src="../dist/images/living-room.png";var T=new Image;function x(e,n,i,t,o){f.drawImage(e,n,i,t,o)}function I(e){e.drawImage(T,240,450,800,128)}T.src="../dist/images/dialogue.png";var b=new Audio("./dist/audio/background.mp3");document.getElementById("backgroundMusic").addEventListener("click",(function(e){b.paused?b.play():b.pause()}));var D,E=[];function O(){if(window.introDialogue&&window.gameStart){D=["Hola! Cómo estás?","Hey! how are you?"],I(f);for(var e=0;e<D.length;e++){var n=30*(e+1)+472;f.fillText(D[e],420,n)}}else if(!window.introDialogue&&window.introDialogue2){D=["My name is Sunny, un gusto!","A pleasure!"],I(f);for(var i=0;i<D.length;i++){var t=30*(i+1)+472;f.fillText(D[i],420,t)}}else if(!window.introDialogue2&&window.introDialogue3){D=["¡Oye! I gotta get my passport, my plane tickets,","and my wallet before the taxi gets here!"],I(f);for(var o=0;o<D.length;o++){var a=30*(o+1)+472;f.fillText(D[o],420,a)}}else if(window.foundTickets){D=["¡Ándale! You found my flight tickets.","¡Muchas gracias!"],I(f),window.inventory.push("tickets");for(var r=0;r<D.length;r++){var d=30*(r+1)+472;f.fillText(D[r],420,d)}}else if(window.foundTickets2){D=['How do you say, "Here is my passport."',"in Spanish?"],I(f);for(var w=0;w<D.length;w++){var s=30*(w+1)+472;f.fillText(D[w],420,s)}}else if(window.foundTickets3){D=["Acá está mi pasaporte.","¿Dónde está mi pasaporte?","Necesito mi pasaporte.","Este! ¡¡¡¡Pasaporte!!!! HEREEEEEE TAKE IT!"],function(e){e.drawImage(T,240,380,800,200)}(f);for(var c=0;c<D.length;c++){var l=30*(c+1)+409;f.fillText(D[c],370,l)}}}document.addEventListener("keydown",(function(e){var n=e.keyCode;[37,38,39,40].includes(n)?(E[n]=!0,t.walking=!0):[32].includes(n)&&!window.gameSplashScreen?(window.gameSplashScreen=!0,window.gameSplashScreen2=!1,!1===window.gameSplashScreen2&&x(h,0,100,g.width,487)):[32].includes(n)&&!window.gameSplashScreen2?(window.gameSplashScreen2=!0,window.gameSplashScreen3=!1,!1===window.gameSplashScreen3&&x(p,0,100,g.width,487)):[32].includes(n)&&!window.gameSplashScreen3?(window.gameSplashScreen3=!0,f.clearRect(0,0,g.width,g.height),window.gameStart=!0,u()):[32].includes(n)&&window.gameStart&&!0===window.introDialogue?(window.introDialogue=!1,f.clearRect(0,0,g.width,g.height),window.introDialogue2=!0):[32].includes(n)&&!0===window.introDialogue2?(window.introDialogue2=!1,f.clearRect(0,0,g.width,g.height),window.introDialogue3=!0):[32].includes(n)&&!0===window.introDialogue3?(window.introDialogue3=!1,f.clearRect(0,0,g.width,g.height)):[32].includes(n)&&298<t.x<302&&498<t.y<501&&!1===window.foundTickets&&!window.inventory.includes("tickets")?window.foundTickets=!0:[32].includes(n)&&!0===window.foundTickets&&!1===window.foundTickets2&&window.inventory.includes("tickets")?(window.foundTickets=!1,f.clearRect(0,0,g.width,g.height),window.foundTickets2=!0):[32].includes(n)&&!0===window.foundTickets2&&!1===window.foundTickets3&&window.inventory.includes("tickets")?(window.foundTickets2=!1,f.clearRect(0,0,g.width,g.height),window.foundTickets3=!0):[32].includes(n)&&!0===window.foundTickets3&&(window.foundTickets3=!1,f.clearRect(0,0,g.width,g.height))})),document.addEventListener("keyup",(function(e){var n=e.keyCode;[37,38,39,40].includes(n)&&delete E[n]})),f.font="14pt Courier",function e(){var n,i,u,h,p,T,I,b,D;!1===window.gameSplashScreen&&x(m,0,100,g.width,487),window.gameStart&&(f.clearRect(0,0,g.width,g.height),x(S,0,100,g.width,487),n=k,i=t.frameX/t.width,u=t.frameY*t.height,h=t.width,p=t.height,T=t.x,I=t.y,b=t.width,D=t.height,f.drawImage(n,i,u,h,p,T,I,b,D),window.inventory.includes("tickets")?x(y,1168,300,c,l):x(y,w,s,c,l),x(v,o,a,r,d),O(),E[38]&&t.y>300&&(t.y-=t.speed,t.frameY=3,t.walking=!0),E[37]&&t.x>0&&(t.x-=t.speed,t.frameY=1,t.walking=!0),E[40]&&t.y<g.height-t.height&&(t.y+=t.speed,t.frameY=0,t.walking=!0),E[39]&&t.x<g.width-t.width&&(t.x+=t.speed,t.frameY=2,t.walking=!0),t.frameX<3&&t.walking?t.frameX++:t.frameX=0),requestAnimationFrame(e)}()}]);
//# sourceMappingURL=main.js.map