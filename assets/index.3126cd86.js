var J=Object.defineProperty;var Q=(u,e,t)=>e in u?J(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var U=(u,e,t)=>(Q(u,typeof e!="symbol"?e+"":e,t),t);const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};g();const x=(u,e,t)=>{const n=new Map;return[...Array(t.length).keys()].forEach(o=>{const r=u.getUniformLocation(e,t[o]);if(!r)throw new Error("Error");n.set(t[o],r)}),n},ee=(u,e,t)=>{const n=u.createProgram();if(!n)throw new Error("Error");if(u.attachShader(n,e),u.attachShader(n,t),u.linkProgram(n),!u.getProgramParameter(n,u.LINK_STATUS))throw new Error(`\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u30EA\u30F3\u30AF\u306B\u5931\u6557\u3057\u307E\u3057\u305F ${u.getProgramInfoLog}`);return u.useProgram(n),n},$=(u,e,t)=>{const n=u.createShader(u[e]);if(!n)throw new Error("WebGLShader\u306E\u4F5C\u6210\u4E2D\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u307E\u3057\u305F\u3002\u5F37\u5236\u7D42\u4E86\u3057\u307E\u3059\u3002");if(u.shaderSource(n,t),u.compileShader(n),!u.getShaderParameter(n,u.COMPILE_STATUS))throw new Error(`${u.getShaderInfoLog(n)} ${t}`);return n},te=(u,e)=>{const t=u.createVertexArray();if(!t)throw new Error("VertexArrayObject\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");u.bindVertexArray(t);const n=e.verticesData.length;[...Array(n).keys()].forEach(i=>{const s=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,s),u.bufferData(u.ARRAY_BUFFER,new Float32Array(e.verticesData[i]),u.STATIC_DRAW);const d=e.attributeLocationIndex[i],a=e.attributeSize[i],f=u.FLOAT,w=!1,l=0,E=0;u.enableVertexAttribArray(d),u.vertexAttribPointer(d,a,f,w,l,E)});const o=u.createBuffer();if(!o)throw new Error("Error!! IndexBuffer\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");return u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,o),u.bufferData(u.ELEMENT_ARRAY_BUFFER,new Uint16Array(e.indicesData),u.STATIC_DRAW),u.bindVertexArray(null),u.bindBuffer(u.ARRAY_BUFFER,null),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,null),{vao:t,ibo:o}},ne=(u,e,t)=>{e.clearColor(t[0],t[1],t[2],1),e.clear(e.COLOR_BUFFER_BIT),e.viewport(0,0,u.width,u.height)};class oe{static sphere(e,t,n,o){let r,i;const s=[],d=[],a=[],f=[],w=[];for(r=0;r<=e;r++){const E=Math.PI/e*r,c=Math.cos(E),h=Math.sin(E);for(i=0;i<=t;i++){const A=Math.PI*2/t*i,F=h*n*Math.cos(A),v=c*n,C=h*n*Math.sin(A),S=h*Math.cos(A),p=h*Math.sin(A);s.push(F,v,C),d.push(S,c,p),a.push(o[0],o[1],o[2],o[3]),f.push(1-1/t*i,1/e*r)}}for(r=0;r<e;r++)for(i=0;i<t;i++){let E=(t+1)*r+i;w.push(E,E+1,E+t+2),w.push(E,E+t+2,E+t+1)}return{vertices:s,normal:d,color:a,textureCoord:f,indices:w}}static sphereColor(e,t,n){let o,r;const i=[],s=[],d=[],a=[],f=[];for(o=0;o<=e;o++){const l=Math.PI/e*o,E=Math.cos(l),c=Math.sin(l);for(r=0;r<=t;r++){const h=Math.PI*2/t*r,A=c*n*Math.cos(h),F=E*n,v=c*n*Math.sin(h),C=c*Math.cos(h),S=c*Math.sin(h);i.push(A,F,v),s.push(C,E,S);const p=[1,.5,0,1];d.push(p[0],p[1],p[2],p[3]),a.push(1-1/t*r,1/e*o)}}for(o=0;o<e;o++)for(r=0;r<t;r++){let l=(t+1)*o+r;f.push(l,l+1,l+t+2),f.push(l,l+t+2,l+t+1)}return{vertices:i,normal:s,color:d,textureCoord:a,indices:f}}}const k=class{};let m=k;U(m,"constrain",(e,t,n)=>Math.max(Math.min(e,n),t)),U(m,"lerp",(e,t,n)=>n*(t-e)+e),U(m,"map",(e,t,n,o,r,i)=>{const s=(e-t)/(n-t)*(r-o)+o;return i?o<r?k.constrain(s,o,r):k.constrain(s,r,o):s}),U(m,"radians",e=>e*Math.PI/180);class j{static create(){return new Float32Array(3)}static set(e,t,n){const o=this.create();return o[0]=e,o[1]=t,o[2]=n,o}}const Y=class{static init(){return new Float32Array(16)}static copy(e,t){let n=t;return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}static identity(e){let t=e;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static multiply(e,t,n){let o=n,r=e[0],i=e[1],s=e[2],d=e[3],a=e[4],f=e[5],w=e[6],l=e[7],E=e[8],c=e[9],h=e[10],A=e[11],F=e[12],v=e[13],C=e[14],S=e[15],p=t[0],P=t[1],B=t[2],y=t[3],T=t[4],L=t[5],b=t[6],D=t[7],R=t[8],V=t[9],N=t[10],M=t[11],q=t[12],_=t[13],z=t[14],O=t[15];return o[0]=p*r+P*a+B*E+y*F,o[1]=p*i+P*f+B*c+y*v,o[2]=p*s+P*w+B*h+y*C,o[3]=p*d+P*l+B*A+y*S,o[4]=T*r+L*a+b*E+D*F,o[5]=T*i+L*f+b*c+D*v,o[6]=T*s+L*w+b*h+D*C,o[7]=T*d+L*l+b*A+D*S,o[8]=R*r+V*a+N*E+M*F,o[9]=R*i+V*f+N*c+M*v,o[10]=R*s+V*w+N*h+M*C,o[11]=R*d+V*l+N*A+M*S,o[12]=q*r+_*a+z*E+O*F,o[13]=q*i+_*f+z*c+O*v,o[14]=q*s+_*w+z*h+O*C,o[15]=q*d+_*l+z*A+O*S,o}static translate(e,t,n){let o=n;return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[0]*t[0]+e[4]*t[1]+e[8]*t[2]+e[12],o[13]=e[1]*t[0]+e[5]*t[1]+e[9]*t[2]+e[13],o[14]=e[2]*t[0]+e[6]*t[1]+e[10]*t[2]+e[14],o[15]=e[3]*t[0]+e[7]*t[1]+e[11]*t[2]+e[15],o}static rotate(e,t,n,o){let r=o;r==null&&(r=Y.init());let i=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);if(!i)return null;let s=n[0],d=n[1],a=n[2];i!=1&&(i=1/i,s*=i,d*=i,a*=i);const f=Math.sin(t),w=Math.cos(t),l=1-w,E=e[0],c=e[1],h=e[2],A=e[3],F=e[4],v=e[5],C=e[6],S=e[7],p=e[8],P=e[9],B=e[10],y=e[11],T=s*s*l+w,L=d*s*l+a*f,b=a*s*l-d*f,D=s*d*l-a*f,R=d*d*l+w,V=a*d*l+s*f,N=s*a*l+d*f,M=d*a*l-s*f,q=a*a*l+w;return t?e!=r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]):r=e,r[0]=E*T+F*L+p*b,r[1]=c*T+v*L+P*b,r[2]=h*T+C*L+B*b,r[3]=A*T+S*L+y*b,r[4]=E*D+F*R+p*V,r[5]=c*D+v*R+P*V,r[6]=h*D+C*R+B*V,r[7]=A*D+S*R+y*V,r[8]=E*N+F*M+p*q,r[9]=c*N+v*M+P*q,r[10]=h*N+C*M+B*q,r[11]=A*N+S*M+y*q,r}static perspective(e,t,n,o,r){let i=r,s=n*Math.tan(e*Math.PI/360),a=s*t*2,f=s*2,w=o-n;return i[0]=n*2/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=n*2/f,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-(o+n)/w,i[11]=-1,i[12]=0,i[13]=0,i[14]=-(o*n*2)/w,i[15]=0,i}static transpose(e,t){let n=t;return n[0]=e[0],n[1]=e[4],n[2]=e[8],n[3]=e[12],n[4]=e[1],n[5]=e[5],n[6]=e[9],n[7]=e[13],n[8]=e[2],n[9]=e[6],n[10]=e[10],n[11]=e[14],n[12]=e[3],n[13]=e[7],n[14]=e[11],n[15]=e[15],n}static invert(e,t){let n=t,o=e[0],r=e[1],i=e[2],s=e[3],d=e[4],a=e[5],f=e[6],w=e[7],l=e[8],E=e[9],c=e[10],h=e[11],A=e[12],F=e[13],v=e[14],C=e[15],S=o*a-r*d,p=o*f-i*d,P=o*w-s*d,B=r*f-i*a,y=r*w-s*a,T=i*w-s*f,L=l*F-E*A,b=l*v-c*A,D=l*C-h*A,R=E*v-c*F,V=E*C-h*F,N=c*C-h*v,M=1/(S*N-p*V+P*R+B*D-y*b+T*L);return n[0]=(a*N-f*V+w*R)*M,n[1]=(-r*N+i*V-s*R)*M,n[2]=(F*T-v*y+C*B)*M,n[3]=(-E*T+c*y-h*B)*M,n[4]=(-d*N+f*D-w*b)*M,n[5]=(o*N-i*D+s*b)*M,n[6]=(-A*T+v*P-C*p)*M,n[7]=(l*T-c*P+h*p)*M,n[8]=(d*V-a*D+w*L)*M,n[9]=(-o*V+r*D-s*L)*M,n[10]=(A*y-F*P+C*S)*M,n[11]=(-l*y+E*P-h*S)*M,n[12]=(-d*R+a*b-f*L)*M,n[13]=(o*R-r*b+i*L)*M,n[14]=(-A*B+F*p-v*S)*M,n[15]=(l*B-E*p+c*S)*M,n}};let I=Y;U(I,"lookAt",(e,t,n,o)=>{const r=e[0],i=e[1],s=e[2],d=t[0],a=t[1],f=t[2],w=n[0],l=n[1],E=n[2];if(r==d&&i==a&&s==f)return Y.identity(o);let c=o;c==null&&(c=Y.init());let h,A,F,v,C,S,p,P,B,y;return p=r-t[0],P=i-t[1],B=s-t[2],y=1/Math.sqrt(p*p+P*P+B*B),p*=y,P*=y,B*=y,h=l*B-E*P,A=E*p-w*B,F=w*P-l*p,y=Math.sqrt(h*h+A*A+F*F),y?(y=1/y,h*=y,A*=y,F*=y):(h=0,A=0,F=0),v=P*F-B*A,C=B*h-p*F,S=p*A-P*h,y=Math.sqrt(v*v+C*C+S*S),y?(y=1/y,v*=y,C*=y,S*=y):(v=0,C=0,S=0),c[0]=h,c[1]=v,c[2]=p,c[3]=0,c[4]=A,c[5]=C,c[6]=P,c[7]=0,c[8]=F,c[9]=S,c[10]=B,c[11]=0,c[12]=-(h*r+A*i+F*s),c[13]=-(v*r+C*i+S*s),c[14]=-(p*r+P*i+B*s),c[15]=1,c});const H=(u,e,t,n,o)=>{const r=n.value,i=e.get(t);if(!i)throw new Error("Error!! \u30C7\u30FC\u30BF\u304C\u672A\u5B9A\u7FA9\u3067\u3059");u.uniform1f(i,Number(r)),o.textContent=`${r}`},re=(u,e)=>{const t="uFrequency",n=document.querySelector(`.${t}`);if(!(n instanceof HTMLInputElement))throw new Error("Error!! HTMLInputElement\u306F\u4F5C\u6210\u3067\u304D\u3066\u3044\u307E\u305B\u3093");const o=document.querySelector(".uFrequencyValue");if(!(o instanceof HTMLDivElement))throw new Error("Error!! \u6570\u5024\u7D50\u679C\u3092\u8FD4\u305B\u307E\u305B\u3093");H(u,e,t,n,o),n.addEventListener("change",()=>{H(u,e,t,n,o)});const r="uAmplitude",i=document.querySelector(`.${r}`);if(!(i instanceof HTMLInputElement))throw new Error("Error!! HTMLInputElement\u306F\u4F5C\u6210\u3067\u304D\u3066\u3044\u307E\u305B\u3093");const s=document.querySelector(".uAmplitudeValue");if(!(s instanceof HTMLDivElement))throw new Error("Error!! \u6570\u5024\u7D50\u679C\u3092\u8FD4\u305B\u307E\u305B\u3093");H(u,e,r,i,s),i.addEventListener("change",()=>{H(u,e,r,i,s)});const d="uPointSize",a=document.querySelector(`.${d}`);if(!(a instanceof HTMLInputElement))throw new Error("Error!! HTMLInputElement\u306F\u4F5C\u6210\u3067\u304D\u3066\u3044\u307E\u305B\u3093");const f=document.querySelector(".uPointSizeValue");if(!(f instanceof HTMLDivElement))throw new Error("Error!! \u6570\u5024\u7D50\u679C\u3092\u8FD4\u305B\u307E\u305B\u3093");H(u,e,d,a,f),a.addEventListener("change",()=>{H(u,e,d,a,f)})};var ue=`#version 300 es\r
precision highp float;\r
precision highp int;\r
// uniform\r
uniform mat4 uModelViewProjectionMatrix;\r
uniform float uFrameCount;\r
uniform float uFrequency;\r
uniform float uAmplitude;\r
uniform float uPointSize;\r
// attribute\r
// in vec4 aColor;\r
layout (location = 0) in vec3 aPosition;\r
layout (location = 1) in vec3 aNormal;\r
layout (location = 2) in vec2 aTexCoord;\r
\r
// varying\r
out vec3 vNormal;\r
out vec2 vTexCoord;\r
\r
void main(void){\r
\r
  vNormal = aNormal;\r
\r
  vTexCoord = aTexCoord;\r
\r
  gl_PointSize = uPointSize;\r
\r
  vec4 cPosition = vec4(aPosition, 1.0);\r
\r
  const float slow = 0.1;\r
  float waveX = cos(cPosition.x * uFrequency + uFrameCount * slow);\r
  cPosition.x += waveX * aNormal.x * uAmplitude;\r
\r
  float waveY = sin(cPosition.y * uFrequency + uFrameCount * slow);\r
  cPosition.y += waveY * aNormal.y * uAmplitude;\r
\r
  gl_Position = uModelViewProjectionMatrix * cPosition;\r
}`,ie=`#version 300 es\r
precision highp float;\r
precision highp int;\r
\r
// varying\r
in vec3 vNormal;\r
in vec2 vTexCoord;\r
out vec4 fragColor;\r
\r
void main(void){\r
\r
  vec2 coord = vTexCoord;\r
  \r
  // vec4 color = vec4(1.0, 1.0, 1.0, 1.0);\r
  vec4 color = vec4(vNormal, 1.0);\r
\r
  fragColor = color;\r
}`;const se=(u,e)=>{const t=$(e,"VERTEX_SHADER",ue),n=$(e,"FRAGMENT_SHADER",ie),o=ee(e,t,n),r=[0,1,2],i=[3,3,2],s=oe.sphere(64,64,.5,[1,1,1,1]),d=s.vertices,a=s.normal,f=s.textureCoord,w=s.indices,E=te(e,{attributeLocationIndex:r,attributeSize:i,verticesData:[d,a,f],indicesData:w}),c=E.vao,h=E.ibo,A=x(e,o,["uModelViewProjectionMatrix","uFrameCount","uFrequency","uAmplitude","uPointSize"]),F=I.identity(I.init()),v=I.identity(I.init()),C=I.identity(I.init()),S=I.identity(I.init()),p=I.identity(I.init()),P=j.set(0,0,3),B=j.set(0,0,0),y=j.set(0,1,0);let T=Date.now();e.enable(e.BLEND),e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE);const L=()=>{re(e,A)},b=()=>{ne(u,e,[0,0,0]);const D=(Date.now()-T)*.025,R=m.radians(D),V=j.set(0,1,1);I.lookAt(P,B,y,v);const N=90,M=u.width/u.height,q=.1,_=15;I.perspective(N,M,q,_,C),I.identity(F),I.rotate(F,R,V,F),I.multiply(S,F,p);const z=A.get("uModelViewProjectionMatrix");if(!z)throw new Error("Error!! \u30C7\u30FC\u30BF\u304C\u672A\u5B9A\u7FA9\u3067\u3059");e.uniformMatrix4fv(z,!1,p);const O=A.get("uFrameCount");if(!O)throw new Error("Error!! \u30C7\u30FC\u30BF\u304C\u672A\u5B9A\u7FA9\u3067\u3059");e.uniform1f(O,D),e.bindVertexArray(c),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,h);const X=e.POINTS,G=w.length,K=e.UNSIGNED_SHORT,Z=0;e.drawElements(X,G,K,Z),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),requestAnimationFrame(b)};window.addEventListener("resize",()=>{u.width=window.innerWidth,u.height=window.innerHeight,e.viewport(0,0,u.width,u.height)}),L(),b()},ce=u=>{const e=document.createElement("button");e.className="fullScreenButton",e.textContent="fullScreen",u.appendChild(e),e.addEventListener("click",()=>{u.requestFullscreen()})},ae=u=>{const e=document.createElement("section");e.className="controllerSection";const t=`
  <form class="controllerForm">
      <div>
        <label>uFrequency</label>
        <input
          class="input uFrequency"
          type="range"
          min="0"
          max="20"
          value="0"
          step="0.01"
        />
        <div class="uFrequencyValue"></div>
      </div>
      <div>
        <label>uAmplitude</label>
        <input
          class="input uAmplitude"
          type="range"
          min="0"
          max="0.1"
          value="0"
          step="0.01"
        />
        <div class="uAmplitudeValue"></div>
      </div>
      <div>
      <label>uPointSize</label
      ><input
        class="input uPointSize"
        type="range"
        min="1"
        max="5"
        value="3"
        step="1"
      />
      <div class="uPointSizeValue"></div>
    </div>
    </form>
  `;e.innerHTML=t,u.appendChild(e)};const W=document.body;document.addEventListener("DOMContentLoaded",()=>{ce(W),ae(W);const u=document.createElement("canvas");u.width=window.innerWidth,u.height=window.innerHeight,document.body.appendChild(u);const e=u.getContext("webgl2");if(!e)throw new Error("Error!! WebGL2\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002");se(u,e)});
