function launchParticlesJS(e,a){var i=document.querySelector("#"+e+" > canvas");if(pJS={canvas:{el:i,w:i.offsetWidth,h:i.offsetHeight},particles:{color:"#fff",color_random:!1,shape:"circle",opacity:{opacity:1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:2.5,size_random:!0,nb:200,line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:3e3,rotateY:3e3}},anim:{enable:!0,speed:2},array:[]},interactivity:{enable:!0,mouse:{distance:100},detect_on:"canvas",mode:"grab",line_linked:{opacity:1},events:{onclick:{enable:!0,mode:"push",nb:4},onresize:{enable:!0,mode:"out",density_auto:!1,density_area:800}}},retina_detect:!1,fn:{vendors:{interactivity:{}}}},a){if(a.particles){var t=a.particles;if(t.color&&(pJS.particles.color=t.color),t.color_random&&(pJS.particles.color_random=t.color_random),t.shape&&(pJS.particles.shape=t.shape),t.opacity){var n=t.opacity;if("object"==typeof n?pJS.particles.opacity.opacity=n.opacity:pJS.particles.opacity.opacity=n,n.anim){var c=n.anim;!1==c.enable&&(pJS.particles.opacity.anim.enable=c.enable),c.speed&&(pJS.particles.opacity.anim.speed=c.speed),c.opacity_min&&(pJS.particles.opacity.anim.opacity_min=c.opacity_min),!1==c.sync&&(pJS.particles.opacity.anim.sync=c.sync)}}if(t.size&&(pJS.particles.size=t.size),!1==t.size_random&&(pJS.particles.size_random=t.size_random),t.nb&&(pJS.particles.nb=t.nb),t.line_linked){var s=t.line_linked;if(!1==s.enable_auto&&(pJS.particles.line_linked.enable_auto=s.enable_auto),s.distance&&(pJS.particles.line_linked.distance=s.distance),s.color&&(pJS.particles.line_linked.color=s.color),s.opacity&&(pJS.particles.line_linked.opacity=s.opacity),s.width&&(pJS.particles.line_linked.width=s.width),s.condensed_mode){var r=s.condensed_mode;!1==r.enable&&(pJS.particles.line_linked.condensed_mode.enable=r.enable),r.rotateX&&(pJS.particles.line_linked.condensed_mode.rotateX=r.rotateX),r.rotateY&&(pJS.particles.line_linked.condensed_mode.rotateY=r.rotateY)}}if(t.anim){var o=t.anim;!1==o.enable&&(pJS.particles.anim.enable=o.enable),o.speed&&(pJS.particles.anim.speed=o.speed)}}if(a.interactivity){var l=a.interactivity;if(!1==l.enable&&(pJS.interactivity.enable=l.enable),l.mouse&&l.mouse.distance&&(pJS.interactivity.mouse.distance=l.mouse.distance),l.detect_on&&(pJS.interactivity.detect_on=l.detect_on),(!1==l.mode||l.mode)&&(pJS.interactivity.mode=l.mode),l.line_linked&&l.line_linked.opacity&&(pJS.interactivity.line_linked.opacity=l.line_linked.opacity),l.events){var v=l.events;if(v.onclick){var d=v.onclick;!1==d.enable&&(pJS.interactivity.events.onclick.enable=!1),"push"!=d.mode&&(pJS.interactivity.events.onclick.mode=d.mode),d.nb&&(pJS.interactivity.events.onclick.nb=d.nb)}if(v.onresize){var p=v.onresize;!1==p.enable&&(pJS.interactivity.events.onresize.enable=!1),p.mode&&(pJS.interactivity.events.onresize.mode=p.mode),(!1==p.density_auto||p.density_auto)&&(pJS.interactivity.events.onresize.density_auto=p.density_auto),p.density_area&&(pJS.interactivity.events.onresize.density_area=p.density_area)}}}pJS.retina_detect=a.retina_detect}function y(){pJS.fn.canvasInit(),pJS.fn.canvasSize(),pJS.fn.canvasPaint(),pJS.fn.particlesCreate(),pJS.fn.particlesDraw(),pJS.fn.densityAuto()}pJS.particles.color_rgb=hexToRgb(pJS.particles.color),pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color),pJS.retina_detect&&window.devicePixelRatio>1&&(pJS.retina=!0,pJS.canvas.pxratio=window.devicePixelRatio,pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio,pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio,pJS.particles.anim.speed=pJS.particles.anim.speed*pJS.canvas.pxratio,pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*pJS.canvas.pxratio,pJS.particles.line_linked.width=pJS.particles.line_linked.width*pJS.canvas.pxratio,pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*pJS.canvas.pxratio),pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")},pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,window.addEventListener("resize",function(){pJS&&pJS.interactivity.events.onresize.enable&&(pJS.canvas.w=pJS.canvas.el.offsetWidth,pJS.canvas.h=pJS.canvas.el.offsetHeight,pJS.retina&&(pJS.canvas.w*=pJS.canvas.pxratio,pJS.canvas.h*=pJS.canvas.pxratio),pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,pJS.fn.canvasPaint(),pJS.particles.anim.enable||(pJS.fn.particlesRemove(),pJS.fn.canvasRemove(),y()),pJS.fn.densityAuto())})},pJS.fn.densityAuto=function(){if(pJS.interactivity.events.onresize.density_auto){var e=pJS.canvas.el.width*pJS.canvas.el.height/1e3;pJS.retina&&(e/=2*pJS.canvas.pxratio);var a=e*pJS.particles.nb/pJS.interactivity.events.onresize.density_area,i=pJS.particles.array.length-a;i<0?pJS.fn.vendors.interactivity.pushParticles(Math.abs(i)):pJS.fn.vendors.interactivity.removeParticles(i)}},pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.particle=function(e,a,i){this.x=i?i.x:Math.random()*pJS.canvas.w,this.y=i?i.y:Math.random()*pJS.canvas.h,this.radius=(pJS.particles.size_random?Math.random():1)*pJS.particles.size,pJS.retina&&(this.radius*=pJS.canvas.pxratio),pJS.particles.color_random?this.color={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:this.color=e,this.opacity=a,pJS.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=pJS.particles.opacity.anim.speed/100,pJS.particles.opacity.anim.sync||(this.vo=this.vo*Math.random())),this.vx=-.5+Math.random(),this.vy=-.5+Math.random()},pJS.fn.particle.prototype.draw=function(){switch(pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")",pJS.canvas.ctx.beginPath(),pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,2*this.radius,2*this.radius);break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y-this.radius),pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius),pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius),pJS.canvas.ctx.closePath()}pJS.canvas.ctx.fill()},pJS.fn.particlesCreate=function(){for(var e=0;e<pJS.particles.nb;e++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity.opacity))},pJS.fn.particlesAnimate=function(){for(var e=0;e<pJS.particles.array.length;e++){var a=pJS.particles.array[e];switch(a.x+=a.vx*(pJS.particles.anim.speed/2),a.y+=a.vy*(pJS.particles.anim.speed/2),pJS.particles.opacity.anim.enable&&(!0==a.opacity_status?(a.opacity>=pJS.particles.opacity.opacity&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=pJS.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo)),pJS.interactivity.events.onresize.mode){case"bounce":a.x-a.radius>pJS.canvas.w?a.vx=-a.vx:a.x+a.radius<0&&(a.vx=-a.vx),a.y-a.radius>pJS.canvas.h?a.vy=-a.vy:a.y+a.radius<0&&(a.vy=-a.vy);break;case"out":a.x-a.radius>pJS.canvas.w?a.x=a.radius:a.x+a.radius<0&&(a.x=pJS.canvas.w+a.radius),a.y-a.radius>pJS.canvas.h?a.y=a.radius:a.y+a.radius<0&&(a.y=pJS.canvas.h+a.radius)}for(var i=e+1;i<pJS.particles.array.length;i++){var t=pJS.particles.array[i];pJS.particles.line_linked.enable_auto&&pJS.fn.vendors.distanceParticles(a,t),pJS.interactivity.enable&&"grab"===pJS.interactivity.mode&&pJS.fn.vendors.interactivity.grabParticles(a,t)}}},pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h),pJS.fn.particlesAnimate();for(var e=0;e<pJS.particles.array.length;e++){var a=pJS.particles.array[e];a.draw("rgba("+a.color.r+","+a.color.g+","+a.color.b+","+a.opacity+")")}},pJS.fn.particlesRemove=function(){pJS.particles.array=[]},pJS.fn.vendors.distanceParticles=function(e,a){var i=e.x-a.x,t=e.y-a.y,n=Math.sqrt(i*i+t*t);if(n<=pJS.particles.line_linked.distance){var c=pJS.particles.line_linked.color_rgb_line;if(pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+(pJS.particles.line_linked.opacity-n/pJS.particles.line_linked.distance)+")",pJS.canvas.ctx.moveTo(e.x,e.y),pJS.canvas.ctx.lineTo(a.x,a.y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath(),pJS.particles.line_linked.condensed_mode.enable){var i=e.x-a.x,t=e.y-a.y,s=i/(1e3*pJS.particles.line_linked.condensed_mode.rotateX),r=t/(1e3*pJS.particles.line_linked.condensed_mode.rotateY);a.vx+=s,a.vy+=r}}},pJS.fn.vendors.interactivity.listeners=function(){if("window"==pJS.interactivity.detect_on)var e=window;else var e=pJS.canvas.el;if(e.onmousemove=function(a){if(e==window)var i=a.clientX,t=a.clientY;else var i=a.offsetX||a.clientX,t=a.offsetY||a.clientY;pJS&&(pJS.interactivity.mouse.pos_x=i,pJS.interactivity.mouse.pos_y=t,pJS.retina&&(pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio,pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio),pJS.interactivity.status="mousemove")},e.onmouseleave=function(e){pJS&&(pJS.interactivity.mouse.pos_x=0,pJS.interactivity.mouse.pos_y=0,pJS.interactivity.status="mouseleave")},pJS.interactivity.events.onclick.enable)switch(pJS.interactivity.events.onclick.mode){case"push":e.onclick=function(e){pJS.fn.vendors.interactivity.pushParticles(pJS.interactivity.events.onclick.nb,pJS.interactivity.mouse)};break;case"remove":e.onclick=function(e){pJS.fn.vendors.interactivity.removeParticles(pJS.interactivity.events.onclick.nb)}}},pJS.fn.vendors.interactivity.pushParticles=function(e,a){if(pJS)for(var i=0;i<e;i++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity.opacity,{x:a?a.pos_x:Math.random()*pJS.canvas.w,y:a?a.pos_y:Math.random()*pJS.canvas.h}))},pJS.fn.vendors.interactivity.removeParticles=function(e){pJS&&pJS.particles.array.splice(0,e)},pJS.fn.vendors.interactivity.grabParticles=function(e,a){var i=e.x-a.x,t=e.y-a.y,n=e.x-pJS.interactivity.mouse.pos_x,c=e.y-pJS.interactivity.mouse.pos_y,s=Math.sqrt(n*n+c*c);if(Math.sqrt(i*i+t*t)<=pJS.particles.line_linked.distance&&s<=pJS.interactivity.mouse.distance&&"mousemove"==pJS.interactivity.status){var r=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+(pJS.interactivity.line_linked.opacity-s/pJS.interactivity.mouse.distance)+")",pJS.canvas.ctx.moveTo(e.x,e.y),pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath()}},pJS.fn.vendors.destroy=function(){cancelAnimationFrame(pJS.fn.requestAnimFrame),i.remove(),pJS=null},y(),pJS.particles.anim.enable&&function e(){pJS.fn.particlesDraw(),pJS.fn.requestAnimFrame=requestAnimFrame(e)}(),pJS.interactivity.enable&&pJS.fn.vendors.interactivity.listeners()}function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,a,i,t){return a+a+i+i+t+t});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var i=document.createElement("canvas");i.style.width="100%",i.style.height="100%",null!=document.getElementById(e).appendChild(i)&&launchParticlesJS(e,a)};