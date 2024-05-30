const _7=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function a(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerpolicy&&(m.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?m.credentials="include":h.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(h){if(h.ep)return;h.ep=!0;const m=a(h);fetch(h.href,m)}};_7();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qo(o,i){const a=new Set(o.split(","));return i?d=>a.has(d.toLowerCase()):d=>a.has(d)}const jt=Object.freeze({}),_c=Object.freeze([]),Hn=()=>{},v7=()=>!1,qc=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&(o.charCodeAt(2)>122||o.charCodeAt(2)<97),km=o=>o.startsWith("onUpdate:"),Ut=Object.assign,Mw=(o,i)=>{const a=o.indexOf(i);a>-1&&o.splice(a,1)},w7=Object.prototype.hasOwnProperty,Bt=(o,i)=>w7.call(o,i),st=Array.isArray,ja=o=>Gc(o)==="[object Map]",tl=o=>Gc(o)==="[object Set]",ES=o=>Gc(o)==="[object Date]",A7=o=>Gc(o)==="[object RegExp]",pt=o=>typeof o=="function",Yt=o=>typeof o=="string",Fs=o=>typeof o=="symbol",Nt=o=>o!==null&&typeof o=="object",Um=o=>(Nt(o)||pt(o))&&pt(o.then)&&pt(o.catch),w5=Object.prototype.toString,Gc=o=>w5.call(o),Bw=o=>Gc(o).slice(8,-1),A5=o=>Gc(o)==="[object Object]",Nw=o=>Yt(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,vc=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),C7=qo("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Wm=o=>{const i=Object.create(null);return a=>i[a]||(i[a]=o(a))},y7=/-(\w)/g,ro=Wm(o=>o.replace(y7,(i,a)=>a?a.toUpperCase():"")),E7=/\B([A-Z])/g,Qn=Wm(o=>o.replace(E7,"-$1").toLowerCase()),Hs=Wm(o=>o.charAt(0).toUpperCase()+o.slice(1)),$r=Wm(o=>o?`on${Hs(o)}`:""),Li=(o,i)=>!Object.is(o,i),Os=(o,i)=>{for(let a=0;a<o.length;a++)o[a](i)},_m=(o,i,a)=>{Object.defineProperty(o,i,{configurable:!0,enumerable:!1,value:a})},eh=o=>{const i=parseFloat(o);return isNaN(i)?o:i},vm=o=>{const i=Yt(o)?Number(o):NaN;return isNaN(i)?o:i};let xS;const Ow=()=>xS||(xS=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),x7="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",T7=qo(x7);function Ln(o){if(st(o)){const i={};for(let a=0;a<o.length;a++){const d=o[a],h=Yt(d)?M7(d):Ln(d);if(h)for(const m in h)i[m]=h[m]}return i}else if(Yt(o)||Nt(o))return o}const D7=/;(?![^(]*\))/g,S7=/:([^]+)/,I7=/\/\*[^]*?\*\//g;function M7(o){const i={};return o.replace(I7,"").split(D7).forEach(a=>{if(a){const d=a.split(S7);d.length>1&&(i[d[0].trim()]=d[1].trim())}}),i}function B7(o){let i="";if(!o||Yt(o))return i;for(const a in o){const d=o[a],h=a.startsWith("--")?a:Qn(a);(Yt(d)||typeof d=="number")&&(i+=`${h}:${d};`)}return i}function We(o){let i="";if(Yt(o))i=o;else if(st(o))for(let a=0;a<o.length;a++){const d=We(o[a]);d&&(i+=d+" ")}else if(Nt(o))for(const a in o)o[a]&&(i+=a+" ");return i.trim()}function Cn(o){if(!o)return null;let{class:i,style:a}=o;return i&&!Yt(i)&&(o.class=We(i)),a&&(o.style=Ln(a)),o}const N7="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",O7="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",P7="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",L7=qo(N7),R7=qo(O7),z7=qo(P7),C5="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j7=qo(C5),TS=qo(C5+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Pw(o){return!!o||o===""}const $7=qo("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),V7=qo("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function F7(o){if(o==null)return!1;const i=typeof o;return i==="string"||i==="number"||i==="boolean"}function H7(o,i){if(o.length!==i.length)return!1;let a=!0;for(let d=0;a&&d<o.length;d++)a=Us(o[d],i[d]);return a}function Us(o,i){if(o===i)return!0;let a=ES(o),d=ES(i);if(a||d)return a&&d?o.getTime()===i.getTime():!1;if(a=Fs(o),d=Fs(i),a||d)return o===i;if(a=st(o),d=st(i),a||d)return a&&d?H7(o,i):!1;if(a=Nt(o),d=Nt(i),a||d){if(!a||!d)return!1;const h=Object.keys(o).length,m=Object.keys(i).length;if(h!==m)return!1;for(const g in o){const k=o.hasOwnProperty(g),f=i.hasOwnProperty(g);if(k&&!f||!k&&f||!Us(o[g],i[g]))return!1}}return String(o)===String(i)}function qm(o,i){return o.findIndex(a=>Us(a,i))}const Ie=o=>Yt(o)?o:o==null?"":st(o)||Nt(o)&&(o.toString===w5||!pt(o.toString))?JSON.stringify(o,y5,2):String(o),y5=(o,i)=>i&&i.__v_isRef?y5(o,i.value):ja(i)?{[`Map(${i.size})`]:[...i.entries()].reduce((a,[d,h],m)=>(a[F_(d,m)+" =>"]=h,a),{})}:tl(i)?{[`Set(${i.size})`]:[...i.values()].map(a=>F_(a))}:Fs(i)?F_(i):Nt(i)&&!st(i)&&!A5(i)?String(i):i,F_=(o,i="")=>{var a;return Fs(o)?`Symbol(${(a=o.description)!=null?a:i})`:o};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ar(o,...i){console.warn(`[Vue warn] ${o}`,...i)}let Ro;class Lw{constructor(i=!1){this.detached=i,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ro,!i&&Ro&&(this.index=(Ro.scopes||(Ro.scopes=[])).push(this)-1)}get active(){return this._active}run(i){if(this._active){const a=Ro;try{return Ro=this,i()}finally{Ro=a}}else ar("cannot run an inactive effect scope.")}on(){Ro=this}off(){Ro=this.parent}stop(i){if(this._active){let a,d;for(a=0,d=this.effects.length;a<d;a++)this.effects[a].stop();for(a=0,d=this.cleanups.length;a<d;a++)this.cleanups[a]();if(this.scopes)for(a=0,d=this.scopes.length;a<d;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!i){const h=this.parent.scopes.pop();h&&h!==this&&(this.parent.scopes[this.index]=h,h.index=this.index)}this.parent=void 0,this._active=!1}}}function Rw(o){return new Lw(o)}function E5(o,i=Ro){i&&i.active&&i.effects.push(o)}function Gm(){return Ro}function zw(o){Ro?Ro.cleanups.push(o):ar("onScopeDispose() is called when there is no active effect scope to be associated with.")}let $a;class xc{constructor(i,a,d,h){this.fn=i,this.trigger=a,this.scheduler=d,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,E5(this,h)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Qs();for(let i=0;i<this._depsLength;i++){const a=this.deps[i];if(a.computed&&(U7(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Zs()}return this._dirtyLevel>=4}set dirty(i){this._dirtyLevel=i?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let i=zs,a=$a;try{return zs=!0,$a=this,this._runnings++,DS(this),this.fn()}finally{SS(this),this._runnings--,$a=a,zs=i}}stop(){var i;this.active&&(DS(this),SS(this),(i=this.onStop)==null||i.call(this),this.active=!1)}}function U7(o){return o.value}function DS(o){o._trackId++,o._depsLength=0}function SS(o){if(o.deps.length>o._depsLength){for(let i=o._depsLength;i<o.deps.length;i++)x5(o.deps[i],o);o.deps.length=o._depsLength}}function x5(o,i){const a=o.get(i);a!==void 0&&i._trackId!==a&&(o.delete(i),o.size===0&&o.cleanup())}function W7(o,i){o.effect instanceof xc&&(o=o.effect.fn);const a=new xc(o,Hn,()=>{a.dirty&&a.run()});i&&(Ut(a,i),i.scope&&E5(a,i.scope)),(!i||!i.lazy)&&a.run();const d=a.run.bind(a);return d.effect=a,d}function q7(o){o.effect.stop()}let zs=!0,Ev=0;const T5=[];function Qs(){T5.push(zs),zs=!1}function Zs(){const o=T5.pop();zs=o===void 0?!0:o}function jw(){Ev++}function $w(){for(Ev--;!Ev&&xv.length;)xv.shift()()}function D5(o,i,a){var d;if(i.get(o)!==o._trackId){i.set(o,o._trackId);const h=o.deps[o._depsLength];h!==i?(h&&x5(h,o),o.deps[o._depsLength++]=i):o._depsLength++,(d=o.onTrack)==null||d.call(o,Ut({effect:o},a))}}const xv=[];function S5(o,i,a){var d;jw();for(const h of o.keys()){let m;h._dirtyLevel<i&&(m!=null?m:m=o.get(h)===h._trackId)&&(h._shouldSchedule||(h._shouldSchedule=h._dirtyLevel===0),h._dirtyLevel=i),h._shouldSchedule&&(m!=null?m:m=o.get(h)===h._trackId)&&((d=h.onTrigger)==null||d.call(h,Ut({effect:h},a)),h.trigger(),(!h._runnings||h.allowRecurse)&&h._dirtyLevel!==2&&(h._shouldSchedule=!1,h.scheduler&&xv.push(h.scheduler)))}$w()}const I5=(o,i)=>{const a=new Map;return a.cleanup=o,a.computed=i,a},wm=new WeakMap,Va=Symbol("iterate"),Tv=Symbol("Map key iterate");function Xn(o,i,a){if(zs&&$a){let d=wm.get(o);d||wm.set(o,d=new Map);let h=d.get(a);h||d.set(a,h=I5(()=>d.delete(a))),D5($a,h,{target:o,type:i,key:a})}}function or(o,i,a,d,h,m){const g=wm.get(o);if(!g)return;let k=[];if(i==="clear")k=[...g.values()];else if(a==="length"&&st(o)){const f=Number(d);g.forEach((C,y)=>{(y==="length"||!Fs(y)&&y>=f)&&k.push(C)})}else switch(a!==void 0&&k.push(g.get(a)),i){case"add":st(o)?Nw(a)&&k.push(g.get("length")):(k.push(g.get(Va)),ja(o)&&k.push(g.get(Tv)));break;case"delete":st(o)||(k.push(g.get(Va)),ja(o)&&k.push(g.get(Tv)));break;case"set":ja(o)&&k.push(g.get(Va));break}jw();for(const f of k)f&&S5(f,4,{target:o,type:i,key:a,newValue:d,oldValue:h,oldTarget:m});$w()}function G7(o,i){var a;return(a=wm.get(o))==null?void 0:a.get(i)}const K7=qo("__proto__,__v_isRef,__isVue"),M5=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(Fs)),IS=Y7();function Y7(){const o={};return["includes","indexOf","lastIndexOf"].forEach(i=>{o[i]=function(...a){const d=kt(this);for(let m=0,g=this.length;m<g;m++)Xn(d,"get",m+"");const h=d[i](...a);return h===-1||h===!1?d[i](...a.map(kt)):h}}),["push","pop","shift","unshift","splice"].forEach(i=>{o[i]=function(...a){Qs(),jw();const d=kt(this)[i].apply(this,a);return $w(),Zs(),d}}),o}function Q7(o){const i=kt(this);return Xn(i,"has",o),i.hasOwnProperty(o)}class B5{constructor(i=!1,a=!1){this._isReadonly=i,this._isShallow=a}get(i,a,d){const h=this._isReadonly,m=this._isShallow;if(a==="__v_isReactive")return!h;if(a==="__v_isReadonly")return h;if(a==="__v_isShallow")return m;if(a==="__v_raw")return d===(h?m?j5:z5:m?R5:L5).get(i)||Object.getPrototypeOf(i)===Object.getPrototypeOf(d)?i:void 0;const g=st(i);if(!h){if(g&&Bt(IS,a))return Reflect.get(IS,a,d);if(a==="hasOwnProperty")return Q7}const k=Reflect.get(i,a,d);return(Fs(a)?M5.has(a):K7(a))||(h||Xn(i,"get",a),m)?k:Vt(k)?g&&Nw(a)?k:k.value:Nt(k)?h?Tc(k):xt(k):k}}class N5 extends B5{constructor(i=!1){super(!1,i)}set(i,a,d,h){let m=i[a];if(!this._isShallow){const f=Gr(m);if(!js(d)&&!Gr(d)&&(m=kt(m),d=kt(d)),!st(i)&&Vt(m)&&!Vt(d))return f?!1:(m.value=d,!0)}const g=st(i)&&Nw(a)?Number(a)<i.length:Bt(i,a),k=Reflect.set(i,a,d,h);return i===kt(h)&&(g?Li(d,m)&&or(i,"set",a,d,m):or(i,"add",a,d)),k}deleteProperty(i,a){const d=Bt(i,a),h=i[a],m=Reflect.deleteProperty(i,a);return m&&d&&or(i,"delete",a,void 0,h),m}has(i,a){const d=Reflect.has(i,a);return(!Fs(a)||!M5.has(a))&&Xn(i,"has",a),d}ownKeys(i){return Xn(i,"iterate",st(i)?"length":Va),Reflect.ownKeys(i)}}class O5 extends B5{constructor(i=!1){super(!0,i)}set(i,a){return ar(`Set operation on key "${String(a)}" failed: target is readonly.`,i),!0}deleteProperty(i,a){return ar(`Delete operation on key "${String(a)}" failed: target is readonly.`,i),!0}}const Z7=new N5,J7=new O5,X7=new N5(!0),e8=new O5(!0),Vw=o=>o,Km=o=>Reflect.getPrototypeOf(o);function Mf(o,i,a=!1,d=!1){o=o.__v_raw;const h=kt(o),m=kt(i);a||(Li(i,m)&&Xn(h,"get",i),Xn(h,"get",m));const{has:g}=Km(h),k=d?Vw:a?Hw:nh;if(g.call(h,i))return k(o.get(i));if(g.call(h,m))return k(o.get(m));o!==h&&o.get(i)}function Bf(o,i=!1){const a=this.__v_raw,d=kt(a),h=kt(o);return i||(Li(o,h)&&Xn(d,"has",o),Xn(d,"has",h)),o===h?a.has(o):a.has(o)||a.has(h)}function Nf(o,i=!1){return o=o.__v_raw,!i&&Xn(kt(o),"iterate",Va),Reflect.get(o,"size",o)}function MS(o){o=kt(o);const i=kt(this);return Km(i).has.call(i,o)||(i.add(o),or(i,"add",o,o)),this}function BS(o,i){i=kt(i);const a=kt(this),{has:d,get:h}=Km(a);let m=d.call(a,o);m?P5(a,d,o):(o=kt(o),m=d.call(a,o));const g=h.call(a,o);return a.set(o,i),m?Li(i,g)&&or(a,"set",o,i,g):or(a,"add",o,i),this}function NS(o){const i=kt(this),{has:a,get:d}=Km(i);let h=a.call(i,o);h?P5(i,a,o):(o=kt(o),h=a.call(i,o));const m=d?d.call(i,o):void 0,g=i.delete(o);return h&&or(i,"delete",o,void 0,m),g}function OS(){const o=kt(this),i=o.size!==0,a=ja(o)?new Map(o):new Set(o),d=o.clear();return i&&or(o,"clear",void 0,void 0,a),d}function Of(o,i){return function(d,h){const m=this,g=m.__v_raw,k=kt(g),f=i?Vw:o?Hw:nh;return!o&&Xn(k,"iterate",Va),g.forEach((C,y)=>d.call(h,f(C),f(y),m))}}function Pf(o,i,a){return function(...d){const h=this.__v_raw,m=kt(h),g=ja(m),k=o==="entries"||o===Symbol.iterator&&g,f=o==="keys"&&g,C=h[o](...d),y=a?Vw:i?Hw:nh;return!i&&Xn(m,"iterate",f?Tv:Va),{next(){const{value:w,done:v}=C.next();return v?{value:w,done:v}:{value:k?[y(w[0]),y(w[1])]:y(w),done:v}},[Symbol.iterator](){return this}}}}function As(o){return function(...i){{const a=i[0]?`on key "${i[0]}" `:"";ar(`${Hs(o)} operation ${a}failed: target is readonly.`,kt(this))}return o==="delete"?!1:o==="clear"?void 0:this}}function t8(){const o={get(m){return Mf(this,m)},get size(){return Nf(this)},has:Bf,add:MS,set:BS,delete:NS,clear:OS,forEach:Of(!1,!1)},i={get(m){return Mf(this,m,!1,!0)},get size(){return Nf(this)},has:Bf,add:MS,set:BS,delete:NS,clear:OS,forEach:Of(!1,!0)},a={get(m){return Mf(this,m,!0)},get size(){return Nf(this,!0)},has(m){return Bf.call(this,m,!0)},add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear"),forEach:Of(!0,!1)},d={get(m){return Mf(this,m,!0,!0)},get size(){return Nf(this,!0)},has(m){return Bf.call(this,m,!0)},add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear"),forEach:Of(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{o[m]=Pf(m,!1,!1),a[m]=Pf(m,!0,!1),i[m]=Pf(m,!1,!0),d[m]=Pf(m,!0,!0)}),[o,a,i,d]}const[n8,o8,i8,r8]=t8();function Ym(o,i){const a=i?o?r8:i8:o?o8:n8;return(d,h,m)=>h==="__v_isReactive"?!o:h==="__v_isReadonly"?o:h==="__v_raw"?d:Reflect.get(Bt(a,h)&&h in d?a:d,h,m)}const s8={get:Ym(!1,!1)},a8={get:Ym(!1,!0)},l8={get:Ym(!0,!1)},c8={get:Ym(!0,!0)};function P5(o,i,a){const d=kt(a);if(d!==a&&i.call(o,d)){const h=Bw(o);ar(`Reactive ${h} contains both the raw and reactive versions of the same object${h==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const L5=new WeakMap,R5=new WeakMap,z5=new WeakMap,j5=new WeakMap;function d8(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function u8(o){return o.__v_skip||!Object.isExtensible(o)?0:d8(Bw(o))}function xt(o){return Gr(o)?o:Qm(o,!1,Z7,s8,L5)}function Fw(o){return Qm(o,!1,X7,a8,R5)}function Tc(o){return Qm(o,!0,J7,l8,z5)}function Pa(o){return Qm(o,!0,e8,c8,j5)}function Qm(o,i,a,d,h){if(!Nt(o))return ar(`value cannot be made reactive: ${String(o)}`),o;if(o.__v_raw&&!(i&&o.__v_isReactive))return o;const m=h.get(o);if(m)return m;const g=u8(o);if(g===0)return o;const k=new Proxy(o,g===2?d:a);return h.set(o,k),k}function zo(o){return Gr(o)?zo(o.__v_raw):!!(o&&o.__v_isReactive)}function Gr(o){return!!(o&&o.__v_isReadonly)}function js(o){return!!(o&&o.__v_isShallow)}function th(o){return zo(o)||Gr(o)}function kt(o){const i=o&&o.__v_raw;return i?kt(i):o}function tr(o){return Object.isExtensible(o)&&_m(o,"__v_skip",!0),o}const nh=o=>Nt(o)?xt(o):o,Hw=o=>Nt(o)?Tc(o):o,h8="Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";class $5{constructor(i,a,d,h){this.getter=i,this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xc(()=>i(this._value),()=>wc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!h,this.__v_isReadonly=d}get value(){const i=kt(this);return(!i._cacheable||i.effect.dirty)&&Li(i._value,i._value=i.effect.run())&&wc(i,4),Uw(i),i.effect._dirtyLevel>=2&&(this._warnRecursive&&ar(h8,`

getter: `,this.getter),wc(i,2)),i._value}set value(i){this._setter(i)}get _dirty(){return this.effect.dirty}set _dirty(i){this.effect.dirty=i}}function p8(o,i,a=!1){let d,h;const m=pt(o);m?(d=o,h=()=>{ar("Write operation failed: computed value is readonly")}):(d=o.get,h=o.set);const g=new $5(d,h,m||!h,a);return i&&!a&&(g.effect.onTrack=i.onTrack,g.effect.onTrigger=i.onTrigger),g}function Uw(o){var i;zs&&$a&&(o=kt(o),D5($a,(i=o.dep)!=null?i:o.dep=I5(()=>o.dep=void 0,o instanceof $5?o:void 0),{target:o,type:"get",key:"value"}))}function wc(o,i=4,a){o=kt(o);const d=o.dep;d&&S5(d,i,{target:o,type:"set",key:"value",newValue:a})}function Vt(o){return!!(o&&o.__v_isRef===!0)}function Me(o){return V5(o,!1)}function Ww(o){return V5(o,!0)}function V5(o,i){return Vt(o)?o:new f8(o,i)}class f8{constructor(i,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?i:kt(i),this._value=a?i:nh(i)}get value(){return Uw(this),this._value}set value(i){const a=this.__v_isShallow||js(i)||Gr(i);i=a?i:kt(i),Li(i,this._rawValue)&&(this._rawValue=i,this._value=a?i:nh(i),wc(this,4,i))}}function m8(o){wc(o,4,o.value)}function V(o){return Vt(o)?o.value:o}function g8(o){return pt(o)?o():V(o)}const b8={get:(o,i,a)=>V(Reflect.get(o,i,a)),set:(o,i,a,d)=>{const h=o[i];return Vt(h)&&!Vt(a)?(h.value=a,!0):Reflect.set(o,i,a,d)}};function qw(o){return zo(o)?o:new Proxy(o,b8)}class k8{constructor(i){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:d}=i(()=>Uw(this),()=>wc(this));this._get=a,this._set=d}get value(){return this._get()}set value(i){this._set(i)}}function F5(o){return new k8(o)}function Dv(o){th(o)||ar("toRefs() expects a reactive object but received a plain one.");const i=st(o)?new Array(o.length):{};for(const a in o)i[a]=H5(o,a);return i}class _8{constructor(i,a,d){this._object=i,this._key=a,this._defaultValue=d,this.__v_isRef=!0}get value(){const i=this._object[this._key];return i===void 0?this._defaultValue:i}set value(i){this._object[this._key]=i}get dep(){return G7(kt(this._object),this._key)}}class v8{constructor(i){this._getter=i,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function G(o,i,a){return Vt(o)?o:pt(o)?new v8(o):Nt(o)&&arguments.length>1?H5(o,i,a):Me(o)}function H5(o,i,a){const d=o[i];return Vt(d)?d:new _8(o,i,a)}const w8={GET:"get",HAS:"has",ITERATE:"iterate"},A8={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fa=[];function Fu(o){Fa.push(o)}function Hu(){Fa.pop()}function Be(o,...i){Qs();const a=Fa.length?Fa[Fa.length-1].component:null,d=a&&a.appContext.config.warnHandler,h=C8();if(d)ir(d,a,11,[o+i.map(m=>{var g,k;return(k=(g=m.toString)==null?void 0:g.call(m))!=null?k:JSON.stringify(m)}).join(""),a&&a.proxy,h.map(({vnode:m})=>`at <${sg(a,m.type)}>`).join(`
`),h]);else{const m=[`[Vue warn]: ${o}`,...i];h.length&&m.push(`
`,...y8(h)),console.warn(...m)}Zs()}function C8(){let o=Fa[Fa.length-1];if(!o)return[];const i=[];for(;o;){const a=i[0];a&&a.vnode===o?a.recurseCount++:i.push({vnode:o,recurseCount:0});const d=o.component&&o.component.parent;o=d&&d.vnode}return i}function y8(o){const i=[];return o.forEach((a,d)=>{i.push(...d===0?[]:[`
`],...E8(a))}),i}function E8({vnode:o,recurseCount:i}){const a=i>0?`... (${i} recursive calls)`:"",d=o.component?o.component.parent==null:!1,h=` at <${sg(o.component,o.type,d)}`,m=">"+a;return o.props?[h,...x8(o.props),m]:[h+m]}function x8(o){const i=[],a=Object.keys(o);return a.slice(0,3).forEach(d=>{i.push(...U5(d,o[d]))}),a.length>3&&i.push(" ..."),i}function U5(o,i,a){return Yt(i)?(i=JSON.stringify(i),a?i:[`${o}=${i}`]):typeof i=="number"||typeof i=="boolean"||i==null?a?i:[`${o}=${i}`]:Vt(i)?(i=U5(o,kt(i.value),!0),a?i:[`${o}=Ref<`,i,">"]):pt(i)?[`${o}=fn${i.name?`<${i.name}>`:""}`]:(i=kt(i),a?i:[`${o}=`,i])}function Gw(o,i){o!==void 0&&(typeof o!="number"?Be(`${i} is not a valid number - got ${JSON.stringify(o)}.`):isNaN(o)&&Be(`${i} is NaN - the duration expression might be incorrect.`))}const T8={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Zm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ir(o,i,a,d){try{return d?o(...d):o()}catch(h){Js(h,i,a)}}function jo(o,i,a,d){if(pt(o)){const m=ir(o,i,a,d);return m&&Um(m)&&m.catch(g=>{Js(g,i,a)}),m}const h=[];for(let m=0;m<o.length;m++)h.push(jo(o[m],i,a,d));return h}function Js(o,i,a,d=!0){const h=i?i.vnode:null;if(i){let m=i.parent;const g=i.proxy,k=Zm[a];for(;m;){const C=m.ec;if(C){for(let y=0;y<C.length;y++)if(C[y](o,g,k)===!1)return}m=m.parent}const f=i.appContext.config.errorHandler;if(f){ir(f,null,10,[o,g,k]);return}}D8(o,a,h,d)}function D8(o,i,a,d=!0){{const h=Zm[i];if(a&&Fu(a),Be(`Unhandled error${h?` during execution of ${h}`:""}`),a&&Hu(),d)throw o;console.error(o)}}let oh=!1,Sv=!1;const Zn=[];let er=0;const Ac=[];let jr=null,Ts=0;const W5=Promise.resolve();let Kw=null;const S8=100;function so(o){const i=Kw||W5;return o?i.then(this?o.bind(this):o):i}function I8(o){let i=er+1,a=Zn.length;for(;i<a;){const d=i+a>>>1,h=Zn[d],m=rh(h);m<o||m===o&&h.pre?i=d+1:a=d}return i}function fh(o){(!Zn.length||!Zn.includes(o,oh&&o.allowRecurse?er+1:er))&&(o.id==null?Zn.push(o):Zn.splice(I8(o.id),0,o),q5())}function q5(){!oh&&!Sv&&(Sv=!0,Kw=W5.then(G5))}function M8(o){const i=Zn.indexOf(o);i>er&&Zn.splice(i,1)}function ih(o){st(o)?Ac.push(...o):(!jr||!jr.includes(o,o.allowRecurse?Ts+1:Ts))&&Ac.push(o),q5()}function PS(o,i,a=oh?er+1:0){for(i=i||new Map;a<Zn.length;a++){const d=Zn[a];if(d&&d.pre){if(o&&d.id!==o.uid||Yw(i,d))continue;Zn.splice(a,1),a--,d()}}}function Am(o){if(Ac.length){const i=[...new Set(Ac)].sort((a,d)=>rh(a)-rh(d));if(Ac.length=0,jr){jr.push(...i);return}for(jr=i,o=o||new Map,Ts=0;Ts<jr.length;Ts++)Yw(o,jr[Ts])||jr[Ts]();jr=null,Ts=0}}const rh=o=>o.id==null?1/0:o.id,B8=(o,i)=>{const a=rh(o)-rh(i);if(a===0){if(o.pre&&!i.pre)return-1;if(i.pre&&!o.pre)return 1}return a};function G5(o){Sv=!1,oh=!0,o=o||new Map,Zn.sort(B8);const i=a=>Yw(o,a);try{for(er=0;er<Zn.length;er++){const a=Zn[er];if(a&&a.active!==!1){if(i(a))continue;ir(a,null,14)}}}finally{er=0,Zn.length=0,Am(o),oh=!1,Kw=null,(Zn.length||Ac.length)&&G5(o)}}function Yw(o,i){if(!o.has(i))o.set(i,1);else{const a=o.get(i);if(a>S8){const d=i.ownerInstance,h=d&&ch(d.type);return Js(`Maximum recursive updates exceeded${h?` in component <${h}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else o.set(i,a+1)}}let $s=!1;const uc=new Set;Ow().__VUE_HMR_RUNTIME__={createRecord:H_(K5),rerender:H_(P8),reload:H_(L8)};const Ka=new Map;function N8(o){const i=o.type.__hmrId;let a=Ka.get(i);a||(K5(i,o.type),a=Ka.get(i)),a.instances.add(o)}function O8(o){Ka.get(o.type.__hmrId).instances.delete(o)}function K5(o,i){return Ka.has(o)?!1:(Ka.set(o,{initialDef:Uu(i),instances:new Set}),!0)}function Uu(o){return HM(o)?o.__vccOpts:o}function P8(o,i){const a=Ka.get(o);!a||(a.initialDef.render=i,[...a.instances].forEach(d=>{i&&(d.render=i,Uu(d.type).render=i),d.renderCache=[],$s=!0,d.effect.dirty=!0,d.update(),$s=!1}))}function L8(o,i){const a=Ka.get(o);if(!a)return;i=Uu(i),LS(a.initialDef,i);const d=[...a.instances];for(const h of d){const m=Uu(h.type);uc.has(m)||(m!==a.initialDef&&LS(m,i),uc.add(m)),h.appContext.propsCache.delete(h.type),h.appContext.emitsCache.delete(h.type),h.appContext.optionsCache.delete(h.type),h.ceReload?(uc.add(m),h.ceReload(i.styles),uc.delete(m)):h.parent?(h.parent.effect.dirty=!0,fh(h.parent.update)):h.appContext.reload?h.appContext.reload():typeof window!="undefined"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}ih(()=>{for(const h of d)uc.delete(Uu(h.type))})}function LS(o,i){Ut(o,i);for(const a in o)a!=="__file"&&!(a in i)&&delete o[a]}function H_(o){return(i,a)=>{try{return o(i,a)}catch(d){console.error(d),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Bi,Lu=[],Iv=!1;function mh(o,...i){Bi?Bi.emit(o,...i):Iv||Lu.push({event:o,args:i})}function Qw(o,i){var a,d;Bi=o,Bi?(Bi.enabled=!0,Lu.forEach(({event:h,args:m})=>Bi.emit(h,...m)),Lu=[]):typeof window!="undefined"&&window.HTMLElement&&!((d=(a=window.navigator)==null?void 0:a.userAgent)!=null&&d.includes("jsdom"))?((i.__VUE_DEVTOOLS_HOOK_REPLAY__=i.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{Qw(m,i)}),setTimeout(()=>{Bi||(i.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Iv=!0,Lu=[])},3e3)):(Iv=!0,Lu=[])}function R8(o,i){mh("app:init",o,i,{Fragment:ot,Text:Ws,Comment:bn,Static:Vs})}function z8(o){mh("app:unmount",o)}const Mv=Zw("component:added"),Y5=Zw("component:updated"),j8=Zw("component:removed"),$8=o=>{Bi&&typeof Bi.cleanupBuffer=="function"&&!Bi.cleanupBuffer(o)&&j8(o)};function Zw(o){return i=>{mh(o,i.appContext.app,i.uid,i.parent?i.parent.uid:void 0,i)}}const V8=Q5("perf:start"),F8=Q5("perf:end");function Q5(o){return(i,a,d)=>{mh(o,i.appContext.app,i.uid,i,a,d)}}function H8(o,i,a){mh("component:emit",o.appContext.app,o,i,a)}function U8(o,i,...a){if(o.isUnmounted)return;const d=o.vnode.props||jt;{const{emitsOptions:y,propsOptions:[w]}=o;if(y)if(!(i in y))(!w||!($r(i)in w))&&Be(`Component emitted event "${i}" but it is neither declared in the emits option nor as an "${$r(i)}" prop.`);else{const v=y[i];pt(v)&&(v(...a)||Be(`Invalid event arguments: event validation failed for event "${i}".`))}}let h=a;const m=i.startsWith("update:"),g=m&&i.slice(7);if(g&&g in d){const y=`${g==="modelValue"?"model":g}Modifiers`,{number:w,trim:v}=d[y]||jt;v&&(h=a.map(E=>Yt(E)?E.trim():E)),w&&(h=a.map(eh))}H8(o,i,h);{const y=i.toLowerCase();y!==i&&d[$r(y)]&&Be(`Event "${y}" is emitted in component ${sg(o,o.type)} but the handler is registered for "${i}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Qn(i)}" instead of "${i}".`)}let k,f=d[k=$r(i)]||d[k=$r(ro(i))];!f&&m&&(f=d[k=$r(Qn(i))]),f&&jo(f,o,6,h);const C=d[k+"Once"];if(C){if(!o.emitted)o.emitted={};else if(o.emitted[k])return;o.emitted[k]=!0,jo(C,o,6,h)}}function Z5(o,i,a=!1){const d=i.emitsCache,h=d.get(o);if(h!==void 0)return h;const m=o.emits;let g={},k=!1;if(!pt(o)){const f=C=>{const y=Z5(C,i,!0);y&&(k=!0,Ut(g,y))};!a&&i.mixins.length&&i.mixins.forEach(f),o.extends&&f(o.extends),o.mixins&&o.mixins.forEach(f)}return!m&&!k?(Nt(o)&&d.set(o,null),null):(st(m)?m.forEach(f=>g[f]=null):Ut(g,m),Nt(o)&&d.set(o,g),g)}function Jm(o,i){return!o||!qc(i)?!1:(i=i.slice(2).replace(/Once$/,""),Bt(o,i[0].toLowerCase()+i.slice(1))||Bt(o,Qn(i))||Bt(o,i))}let cn=null,Xm=null;function sh(o){const i=cn;return cn=o,Xm=o&&o.type.__scopeId||null,i}function Go(o){Xm=o}function Ko(){Xm=null}const W8=o=>Te;function Te(o,i=cn,a){if(!i||o._n)return o;const d=(...h)=>{d._d&&$v(-1);const m=sh(i);let g;try{g=o(...h)}finally{sh(m),d._d&&$v(1)}return Y5(i),g};return d._n=!0,d._c=!0,d._d=!0,d}let Bv=!1;function Cm(){Bv=!0}function nm(o){const{type:i,vnode:a,proxy:d,withProxy:h,props:m,propsOptions:[g],slots:k,attrs:f,emit:C,render:y,renderCache:w,data:v,setupState:E,ctx:S,inheritAttrs:M}=o;let N,R;const L=sh(o);Bv=!1;try{if(a.shapeFlag&4){const q=h||d,J=E.__isScriptSetup?new Proxy(q,{get(K,ee,B){return Be(`Property '${String(ee)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(K,ee,B)}}):q;N=wo(y.call(J,q,w,m,E,v,S)),R=f}else{const q=i;f===m&&Cm(),N=wo(q.length>1?q(m,{get attrs(){return Cm(),f},slots:k,emit:C}):q(m,null)),R=i.props?f:q8(f)}}catch(q){qu.length=0,Js(q,o,1),N=Ue(bn)}let z=N,$;if(N.patchFlag>0&&N.patchFlag&2048&&([z,$]=J5(N)),R&&M!==!1){const q=Object.keys(R),{shapeFlag:J}=z;if(q.length){if(J&7)g&&q.some(km)&&(R=G8(R,g)),z=fi(z,R);else if(!Bv&&z.type!==bn){const K=Object.keys(f),ee=[],B=[];for(let U=0,te=K.length;U<te;U++){const ae=K[U];qc(ae)?km(ae)||ee.push(ae[2].toLowerCase()+ae.slice(3)):B.push(ae)}B.length&&Be(`Extraneous non-props attributes (${B.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ee.length&&Be(`Extraneous non-emits event listeners (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(RS(z)||Be("Runtime directive used on component with non-element root node. The directives will not function as intended."),z=fi(z),z.dirs=z.dirs?z.dirs.concat(a.dirs):a.dirs),a.transition&&(RS(z)||Be("Component inside <Transition> renders non-element root node that cannot be animated."),z.transition=a.transition),$?$(z):N=z,sh(L),N}const J5=o=>{const i=o.children,a=o.dynamicChildren,d=eg(i,!1);if(d){if(d.patchFlag>0&&d.patchFlag&2048)return J5(d)}else return[o,void 0];const h=i.indexOf(d),m=a?a.indexOf(d):-1,g=k=>{i[h]=k,a&&(m>-1?a[m]=k:k.patchFlag>0&&(o.dynamicChildren=[...a,k]))};return[wo(d),g]};function eg(o,i=!0){let a;for(let d=0;d<o.length;d++){const h=o[d];if(Kr(h)){if(h.type!==bn||h.children==="v-if"){if(a)return;if(a=h,i&&a.patchFlag>0&&a.patchFlag&2048)return eg(a.children)}}else return}return a}const q8=o=>{let i;for(const a in o)(a==="class"||a==="style"||qc(a))&&((i||(i={}))[a]=o[a]);return i},G8=(o,i)=>{const a={};for(const d in o)(!km(d)||!(d.slice(9)in i))&&(a[d]=o[d]);return a},RS=o=>o.shapeFlag&7||o.type===bn;function K8(o,i,a){const{props:d,children:h,component:m}=o,{props:g,children:k,patchFlag:f}=i,C=m.emitsOptions;if((h||k)&&$s||i.dirs||i.transition)return!0;if(a&&f>=0){if(f&1024)return!0;if(f&16)return d?zS(d,g,C):!!g;if(f&8){const y=i.dynamicProps;for(let w=0;w<y.length;w++){const v=y[w];if(g[v]!==d[v]&&!Jm(C,v))return!0}}}else return(h||k)&&(!k||!k.$stable)?!0:d===g?!1:d?g?zS(d,g,C):!0:!!g;return!1}function zS(o,i,a){const d=Object.keys(i);if(d.length!==Object.keys(o).length)return!0;for(let h=0;h<d.length;h++){const m=d[h];if(i[m]!==o[m]&&!Jm(a,m))return!0}return!1}function Jw({vnode:o,parent:i},a){for(;i;){const d=i.subTree;if(d.suspense&&d.suspense.activeBranch===o&&(d.el=o.el),d===o)(o=i.vnode).el=a,i=i.parent;else break}}const ym="components",Y8="directives";function Wn(o,i){return eA(ym,o,!0,i)||o}const Xw=Symbol.for("v-ndc");function vt(o){return Yt(o)?eA(ym,o,!1)||o:o||Xw}function Q8(o){return eA(Y8,o)}function eA(o,i,a=!0,d=!1){const h=cn||An;if(h){const m=h.type;if(o===ym){const k=ch(m,!1);if(k&&(k===i||k===ro(i)||k===Hs(ro(i))))return m}const g=jS(h[o]||m[o],i)||jS(h.appContext[o],i);if(!g&&d)return m;if(a&&!g){const k=o===ym?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";Be(`Failed to resolve ${o.slice(0,-1)}: ${i}${k}`)}return g}else Be(`resolve${Hs(o.slice(0,-1))} can only be used in render() or setup().`)}function jS(o,i){return o&&(o[i]||o[ro(i)]||o[Hs(ro(i))])}const X5=o=>o.__isSuspense;let Nv=0;const Z8={name:"Suspense",__isSuspense:!0,process(o,i,a,d,h,m,g,k,f,C){if(o==null)X8(i,a,d,h,m,g,k,f,C);else{if(m&&m.deps>0&&!o.suspense.isInFallback){i.suspense=o.suspense,i.suspense.vnode=i,i.el=o.el;return}e9(o,i,a,d,h,g,k,f,C)}},hydrate:t9,create:tA,normalize:n9},J8=Z8;function ah(o,i){const a=o.props&&o.props[i];pt(a)&&a()}function X8(o,i,a,d,h,m,g,k,f){const{p:C,o:{createElement:y}}=f,w=y("div"),v=o.suspense=tA(o,h,d,i,w,a,m,g,k,f);C(null,v.pendingBranch=o.ssContent,w,null,d,v,m,g),v.deps>0?(ah(o,"onPending"),ah(o,"onFallback"),C(null,o.ssFallback,i,a,d,null,m,g),Cc(v,o.ssFallback)):v.resolve(!1,!0)}function e9(o,i,a,d,h,m,g,k,{p:f,um:C,o:{createElement:y}}){const w=i.suspense=o.suspense;w.vnode=i,i.el=o.el;const v=i.ssContent,E=i.ssFallback,{activeBranch:S,pendingBranch:M,isInFallback:N,isHydrating:R}=w;if(M)w.pendingBranch=v,Ni(v,M)?(f(M,v,w.hiddenContainer,null,h,w,m,g,k),w.deps<=0?w.resolve():N&&(R||(f(S,E,a,d,h,null,m,g,k),Cc(w,E)))):(w.pendingId=Nv++,R?(w.isHydrating=!1,w.activeBranch=M):C(M,h,w),w.deps=0,w.effects.length=0,w.hiddenContainer=y("div"),N?(f(null,v,w.hiddenContainer,null,h,w,m,g,k),w.deps<=0?w.resolve():(f(S,E,a,d,h,null,m,g,k),Cc(w,E))):S&&Ni(v,S)?(f(S,v,a,d,h,w,m,g,k),w.resolve(!0)):(f(null,v,w.hiddenContainer,null,h,w,m,g,k),w.deps<=0&&w.resolve()));else if(S&&Ni(v,S))f(S,v,a,d,h,w,m,g,k),Cc(w,v);else if(ah(i,"onPending"),w.pendingBranch=v,v.shapeFlag&512?w.pendingId=v.component.suspenseId:w.pendingId=Nv++,f(null,v,w.hiddenContainer,null,h,w,m,g,k),w.deps<=0)w.resolve();else{const{timeout:L,pendingId:z}=w;L>0?setTimeout(()=>{w.pendingId===z&&w.fallback(E)},L):L===0&&w.fallback(E)}}let $S=!1;function tA(o,i,a,d,h,m,g,k,f,C,y=!1){$S||($S=!0,console[console.info?"info":"log"]("<Suspense> is an experimental feature and its API will likely change."));const{p:w,m:v,um:E,n:S,o:{parentNode:M,remove:N}}=C;let R;const L=o9(o);L&&i!=null&&i.pendingBranch&&(R=i.pendingId,i.deps++);const z=o.props?vm(o.props.timeout):void 0;Gw(z,"Suspense timeout");const $=m,q={vnode:o,parent:i,parentComponent:a,namespace:g,container:d,hiddenContainer:h,deps:0,pendingId:Nv++,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!y,isHydrating:y,isUnmounted:!1,effects:[],resolve(J=!1,K=!1){{if(!J&&!q.pendingBranch)throw new Error("suspense.resolve() is called without a pending branch.");if(q.isUnmounted)throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.")}const{vnode:ee,activeBranch:B,pendingBranch:U,pendingId:te,effects:ae,parentComponent:be,container:ye}=q;let me=!1;q.isHydrating?q.isHydrating=!1:J||(me=B&&U.transition&&U.transition.mode==="out-in",me&&(B.transition.afterLeave=()=>{te===q.pendingId&&(v(U,ye,m===$?S(B):m,0),ih(ae))}),B&&(M(B.el)!==q.hiddenContainer&&(m=S(B)),E(B,be,q,!0)),me||v(U,ye,m,0)),Cc(q,U),q.pendingBranch=null,q.isInFallback=!1;let ue=q.parent,he=!1;for(;ue;){if(ue.pendingBranch){ue.effects.push(...ae),he=!0;break}ue=ue.parent}!he&&!me&&ih(ae),q.effects=[],L&&i&&i.pendingBranch&&R===i.pendingId&&(i.deps--,i.deps===0&&!K&&i.resolve()),ah(ee,"onResolve")},fallback(J){if(!q.pendingBranch)return;const{vnode:K,activeBranch:ee,parentComponent:B,container:U,namespace:te}=q;ah(K,"onFallback");const ae=S(ee),be=()=>{!q.isInFallback||(w(null,J,U,ae,B,null,te,k,f),Cc(q,J))},ye=J.transition&&J.transition.mode==="out-in";ye&&(ee.transition.afterLeave=be),q.isInFallback=!0,E(ee,B,null,!0),ye||be()},move(J,K,ee){q.activeBranch&&v(q.activeBranch,J,K,ee),q.container=J},next(){return q.activeBranch&&S(q.activeBranch)},registerDep(J,K){const ee=!!q.pendingBranch;ee&&q.deps++;const B=J.vnode.el;J.asyncDep.catch(U=>{Js(U,J,0)}).then(U=>{if(J.isUnmounted||q.isUnmounted||q.pendingId!==J.suspenseId)return;J.asyncResolved=!0;const{vnode:te}=J;Fu(te),Wv(J,U,!1),B&&(te.el=B);const ae=!B&&J.subTree.el;K(J,te,M(B||J.subTree.el),B?null:S(J.subTree),q,g,f),ae&&N(ae),Jw(J,te.el),Hu(),ee&&--q.deps===0&&q.resolve()})},unmount(J,K){q.isUnmounted=!0,q.activeBranch&&E(q.activeBranch,a,J,K),q.pendingBranch&&E(q.pendingBranch,a,J,K)}};return q}function t9(o,i,a,d,h,m,g,k,f){const C=i.suspense=tA(i,d,a,o.parentNode,document.createElement("div"),null,h,m,g,k,!0),y=f(o,C.pendingBranch=i.ssContent,a,C,m,g);return C.deps===0&&C.resolve(!1,!0),y}function n9(o){const{shapeFlag:i,children:a}=o,d=i&32;o.ssContent=VS(d?a.default:a),o.ssFallback=d?VS(a.fallback):Ue(bn)}function VS(o){let i;if(pt(o)){const a=Qa&&o._c;a&&(o._d=!1,H()),o=o(),a&&(o._d=!0,i=Co,OM())}if(st(o)){const a=eg(o);!a&&o.filter(d=>d!==Xw).length>0&&Be("<Suspense> slots expect a single root node."),o=a}return o=wo(o),i&&!o.dynamicChildren&&(o.dynamicChildren=i.filter(a=>a!==o)),o}function eM(o,i){i&&i.pendingBranch?st(o)?i.effects.push(...o):i.effects.push(o):ih(o)}function Cc(o,i){o.activeBranch=i;const{vnode:a,parentComponent:d}=o;let h=i.el;for(;!h&&i.component;)i=i.component.subTree,h=i.el;a.el=h,d&&d.subTree===a&&(d.vnode.el=h,Jw(d,h))}function o9(o){var i;return((i=o.props)==null?void 0:i.suspensible)!=null&&o.props.suspensible!==!1}const tM=Symbol.for("v-scx"),nM=()=>{{const o=gn(tM);return o||Be("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),o}};function Ha(o,i){return gh(o,null,i)}function oM(o,i){return gh(o,null,Ut({},i,{flush:"post"}))}function iM(o,i){return gh(o,null,Ut({},i,{flush:"sync"}))}const Lf={};function St(o,i,a){return pt(i)||Be("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),gh(o,i,a)}function gh(o,i,{immediate:a,deep:d,flush:h,once:m,onTrack:g,onTrigger:k}=jt){if(i&&m){const K=i;i=(...ee)=>{K(...ee),J()}}d!==void 0&&typeof d=="number"&&Be('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),i||(a!==void 0&&Be('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),d!==void 0&&Be('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),m!==void 0&&Be('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const f=K=>{Be("Invalid watch source: ",K,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},C=An,y=K=>d===!0?K:La(K,d===!1?1:void 0);let w,v=!1,E=!1;if(Vt(o)?(w=()=>o.value,v=js(o)):zo(o)?(w=()=>y(o),v=!0):st(o)?(E=!0,v=o.some(K=>zo(K)||js(K)),w=()=>o.map(K=>{if(Vt(K))return K.value;if(zo(K))return y(K);if(pt(K))return ir(K,C,2);f(K)})):pt(o)?i?w=()=>ir(o,C,2):w=()=>(S&&S(),jo(o,C,3,[M])):(w=Hn,f(o)),i&&d){const K=w;w=()=>La(K())}let S,M=K=>{S=$.onStop=()=>{ir(K,C,4),S=$.onStop=void 0}},N;if(_h)if(M=Hn,i?a&&jo(i,C,3,[w(),E?[]:void 0,M]):w(),h==="sync"){const K=nM();N=K.__watcherHandles||(K.__watcherHandles=[])}else return Hn;let R=E?new Array(o.length).fill(Lf):Lf;const L=()=>{if(!(!$.active||!$.dirty))if(i){const K=$.run();(d||v||(E?K.some((ee,B)=>Li(ee,R[B])):Li(K,R)))&&(S&&S(),jo(i,C,3,[K,R===Lf?void 0:E&&R[0]===Lf?[]:R,M]),R=K)}else $.run()};L.allowRecurse=!!i;let z;h==="sync"?z=L:h==="post"?z=()=>Fn(L,C&&C.suspense):(L.pre=!0,C&&(L.id=C.uid),z=()=>fh(L));const $=new xc(w,Hn,z),q=Gm(),J=()=>{$.stop(),q&&Mw(q.effects,$)};return $.onTrack=g,$.onTrigger=k,i?a?L():R=$.run():h==="post"?Fn($.run.bind($),C&&C.suspense):$.run(),N&&N.push(J),J}function i9(o,i,a){const d=this.proxy,h=Yt(o)?o.includes(".")?rM(d,o):()=>d[o]:o.bind(d,d);let m;pt(i)?m=i:(m=i.handler,a=i);const g=Za(this),k=gh(h,m.bind(d),a);return g(),k}function rM(o,i){const a=i.split(".");return()=>{let d=o;for(let h=0;h<a.length&&d;h++)d=d[a[h]];return d}}function La(o,i,a=0,d){if(!Nt(o)||o.__v_skip)return o;if(i&&i>0){if(a>=i)return o;a++}if(d=d||new Set,d.has(o))return o;if(d.add(o),Vt(o))La(o.value,i,a,d);else if(st(o))for(let h=0;h<o.length;h++)La(o[h],i,a,d);else if(tl(o)||ja(o))o.forEach(h=>{La(h,i,a,d)});else if(A5(o))for(const h in o)La(o[h],i,a,d);return o}function sM(o){C7(o)&&Be("Do not use built-in directive ids as custom directive id: "+o)}function $t(o,i){if(cn===null)return Be("withDirectives can only be used inside render functions."),o;const a=rg(cn)||cn.proxy,d=o.dirs||(o.dirs=[]);for(let h=0;h<i.length;h++){let[m,g,k,f=jt]=i[h];m&&(pt(m)&&(m={mounted:m,updated:m}),m.deep&&La(g),d.push({dir:m,instance:a,value:g,oldValue:void 0,arg:k,modifiers:f}))}return o}function Xi(o,i,a,d){const h=o.dirs,m=i&&i.dirs;for(let g=0;g<h.length;g++){const k=h[g];m&&(k.oldValue=m[g].value);let f=k.dir[d];f&&(Qs(),jo(f,a,8,[o.el,k,o,i]),Zs())}}const Ds=Symbol("_leaveCb"),Rf=Symbol("_enterCb");function nA(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ft(()=>{o.isMounted=!0}),nl(()=>{o.isUnmounting=!0}),o}const li=[Function,Array],oA={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:li,onEnter:li,onAfterEnter:li,onEnterCancelled:li,onBeforeLeave:li,onLeave:li,onAfterLeave:li,onLeaveCancelled:li,onBeforeAppear:li,onAppear:li,onAfterAppear:li,onAppearCancelled:li},r9={name:"BaseTransition",props:oA,setup(o,{slots:i}){const a=To(),d=nA();return()=>{const h=i.default&&tg(i.default(),!0);if(!h||!h.length)return;let m=h[0];if(h.length>1){let v=!1;for(const E of h)if(E.type!==bn){if(v){Be("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}m=E,v=!0}}const g=kt(o),{mode:k}=g;if(k&&k!=="in-out"&&k!=="out-in"&&k!=="default"&&Be(`invalid <transition> mode: ${k}`),d.isLeaving)return U_(m);const f=FS(m);if(!f)return U_(m);const C=Dc(f,g,d,a);Ya(f,C);const y=a.subTree,w=y&&FS(y);if(w&&w.type!==bn&&!Ni(f,w)){const v=Dc(w,g,d,a);if(Ya(w,v),k==="out-in")return d.isLeaving=!0,v.afterLeave=()=>{d.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},U_(m);k==="in-out"&&f.type!==bn&&(v.delayLeave=(E,S,M)=>{const N=lM(d,w);N[String(w.key)]=w,E[Ds]=()=>{S(),E[Ds]=void 0,delete C.delayedLeave},C.delayedLeave=M})}return m}}},aM=r9;function lM(o,i){const{leavingVNodes:a}=o;let d=a.get(i.type);return d||(d=Object.create(null),a.set(i.type,d)),d}function Dc(o,i,a,d){const{appear:h,mode:m,persisted:g=!1,onBeforeEnter:k,onEnter:f,onAfterEnter:C,onEnterCancelled:y,onBeforeLeave:w,onLeave:v,onAfterLeave:E,onLeaveCancelled:S,onBeforeAppear:M,onAppear:N,onAfterAppear:R,onAppearCancelled:L}=i,z=String(o.key),$=lM(a,o),q=(ee,B)=>{ee&&jo(ee,d,9,B)},J=(ee,B)=>{const U=B[1];q(ee,B),st(ee)?ee.every(te=>te.length<=1)&&U():ee.length<=1&&U()},K={mode:m,persisted:g,beforeEnter(ee){let B=k;if(!a.isMounted)if(h)B=M||k;else return;ee[Ds]&&ee[Ds](!0);const U=$[z];U&&Ni(o,U)&&U.el[Ds]&&U.el[Ds](),q(B,[ee])},enter(ee){let B=f,U=C,te=y;if(!a.isMounted)if(h)B=N||f,U=R||C,te=L||y;else return;let ae=!1;const be=ee[Rf]=ye=>{ae||(ae=!0,ye?q(te,[ee]):q(U,[ee]),K.delayedLeave&&K.delayedLeave(),ee[Rf]=void 0)};B?J(B,[ee,be]):be()},leave(ee,B){const U=String(o.key);if(ee[Rf]&&ee[Rf](!0),a.isUnmounting)return B();q(w,[ee]);let te=!1;const ae=ee[Ds]=be=>{te||(te=!0,B(),be?q(S,[ee]):q(E,[ee]),ee[Ds]=void 0,$[U]===o&&delete $[U])};$[U]=o,v?J(v,[ee,ae]):ae()},clone(ee){return Dc(ee,i,a,d)}};return K}function U_(o){if(Kc(o))return o=fi(o),o.children=null,o}function FS(o){return Kc(o)?o.component?o.component.subTree:o.children?o.children[0]:void 0:o}function Ya(o,i){o.shapeFlag&6&&o.component?Ya(o.component.subTree,i):o.shapeFlag&128?(o.ssContent.transition=i.clone(o.ssContent),o.ssFallback.transition=i.clone(o.ssFallback)):o.transition=i}function tg(o,i=!1,a){let d=[],h=0;for(let m=0;m<o.length;m++){let g=o[m];const k=a==null?g.key:String(a)+String(g.key!=null?g.key:m);g.type===ot?(g.patchFlag&128&&h++,d=d.concat(tg(g.children,i,k))):(i||g.type!==bn)&&d.push(k!=null?fi(g,{key:k}):g)}if(h>1)for(let m=0;m<d.length;m++)d[m].patchFlag=-2;return d}/*! #__NO_SIDE_EFFECTS__ */function Fe(o,i){return pt(o)?(()=>Ut({name:o.name},i,{setup:o}))():o}const Ua=o=>!!o.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function s9(o){pt(o)&&(o={loader:o});const{loader:i,loadingComponent:a,errorComponent:d,delay:h=200,timeout:m,suspensible:g=!0,onError:k}=o;let f=null,C,y=0;const w=()=>(y++,f=null,v()),v=()=>{let E;return f||(E=f=i().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),k)return new Promise((M,N)=>{k(S,()=>M(w()),()=>N(S),y+1)});throw S}).then(S=>{if(E!==f&&f)return f;if(S||Be("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."),S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),S&&!Nt(S)&&!pt(S))throw new Error(`Invalid async component load result: ${S}`);return C=S,S}))};return Fe({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return C},setup(){const E=An;if(C)return()=>W_(C,E);const S=L=>{f=null,Js(L,E,13,!d)};if(g&&E.suspense||_h)return v().then(L=>()=>W_(L,E)).catch(L=>(S(L),()=>d?Ue(d,{error:L}):null));const M=Me(!1),N=Me(),R=Me(!!h);return h&&setTimeout(()=>{R.value=!1},h),m!=null&&setTimeout(()=>{if(!M.value&&!N.value){const L=new Error(`Async component timed out after ${m}ms.`);S(L),N.value=L}},m),v().then(()=>{M.value=!0,E.parent&&Kc(E.parent.vnode)&&(E.parent.effect.dirty=!0,fh(E.parent.update))}).catch(L=>{S(L),N.value=L}),()=>{if(M.value&&C)return W_(C,E);if(N.value&&d)return Ue(d,{error:N.value});if(a&&!R.value)return Ue(a)}}})}function W_(o,i){const{ref:a,props:d,children:h,ce:m}=i.vnode,g=Ue(o,d,h);return g.ref=a,g.ce=m,delete i.vnode.ce,g}const Kc=o=>o.type.__isKeepAlive,a9={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(o,{slots:i}){const a=To(),d=a.ctx;if(!d.renderer)return()=>{const L=i.default&&i.default();return L&&L.length===1?L[0]:L};const h=new Map,m=new Set;let g=null;a.__v_cache=h;const k=a.suspense,{renderer:{p:f,m:C,um:y,o:{createElement:w}}}=d,v=w("div");d.activate=(L,z,$,q,J)=>{const K=L.component;C(L,z,$,0,k),f(K.vnode,L,z,$,K,k,q,L.slotScopeIds,J),Fn(()=>{K.isDeactivated=!1,K.a&&Os(K.a);const ee=L.props&&L.props.onVnodeMounted;ee&&vo(ee,K.parent,L)},k),Mv(K)},d.deactivate=L=>{const z=L.component;C(L,v,null,1,k),Fn(()=>{z.da&&Os(z.da);const $=L.props&&L.props.onVnodeUnmounted;$&&vo($,z.parent,L),z.isDeactivated=!0},k),Mv(z)};function E(L){q_(L),y(L,a,k,!0)}function S(L){h.forEach((z,$)=>{const q=ch(z.type);q&&(!L||!L(q))&&M($)})}function M(L){const z=h.get(L);!g||!Ni(z,g)?E(z):g&&q_(g),h.delete(L),m.delete(L)}St(()=>[o.include,o.exclude],([L,z])=>{L&&S($=>Ru(L,$)),z&&S($=>!Ru(z,$))},{flush:"post",deep:!0});let N=null;const R=()=>{N!=null&&h.set(N,G_(a.subTree))};return Ft(R),og(R),nl(()=>{h.forEach(L=>{const{subTree:z,suspense:$}=a,q=G_(z);if(L.type===q.type&&L.key===q.key){q_(q);const J=q.component.da;J&&Fn(J,$);return}E(L)})}),()=>{if(N=null,!i.default)return null;const L=i.default(),z=L[0];if(L.length>1)return Be("KeepAlive should contain exactly one component child."),g=null,L;if(!Kr(z)||!(z.shapeFlag&4)&&!(z.shapeFlag&128))return g=null,z;let $=G_(z);const q=$.type,J=ch(Ua($)?$.type.__asyncResolved||{}:q),{include:K,exclude:ee,max:B}=o;if(K&&(!J||!Ru(K,J))||ee&&J&&Ru(ee,J))return g=$,z;const U=$.key==null?q:$.key,te=h.get(U);return $.el&&($=fi($),z.shapeFlag&128&&(z.ssContent=$)),N=U,te?($.el=te.el,$.component=te.component,$.transition&&Ya($,$.transition),$.shapeFlag|=512,m.delete(U),m.add(U)):(m.add(U),B&&m.size>parseInt(B,10)&&M(m.values().next().value)),$.shapeFlag|=256,g=$,X5(z.type)?z:$}}},l9=a9;function Ru(o,i){return st(o)?o.some(a=>Ru(a,i)):Yt(o)?o.split(",").includes(i):A7(o)?o.test(i):!1}function bh(o,i){dM(o,"a",i)}function cM(o,i){dM(o,"da",i)}function dM(o,i,a=An){const d=o.__wdc||(o.__wdc=()=>{let h=a;for(;h;){if(h.isDeactivated)return;h=h.parent}return o()});if(ng(i,d,a),a){let h=a.parent;for(;h&&h.parent;)Kc(h.parent.vnode)&&c9(d,i,a,h),h=h.parent}}function c9(o,i,a,d){const h=ng(i,o,d,!0);kh(()=>{Mw(d[i],h)},a)}function q_(o){o.shapeFlag&=-257,o.shapeFlag&=-513}function G_(o){return o.shapeFlag&128?o.ssContent:o}function ng(o,i,a=An,d=!1){if(a){const h=a[o]||(a[o]=[]),m=i.__weh||(i.__weh=(...g)=>{if(a.isUnmounted)return;Qs();const k=Za(a),f=jo(i,a,o,g);return k(),Zs(),f});return d?h.unshift(m):h.push(m),m}else{const h=$r(Zm[o].replace(/ hook$/,""));Be(`${h} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Zr=o=>(i,a=An)=>(!_h||o==="sp")&&ng(o,(...d)=>i(...d),a),uM=Zr("bm"),Ft=Zr("m"),hM=Zr("bu"),og=Zr("u"),nl=Zr("bum"),kh=Zr("um"),pM=Zr("sp"),fM=Zr("rtg"),mM=Zr("rtc");function gM(o,i=An){ng("ec",o,i)}function Et(o,i,a,d){let h;const m=a&&a[d];if(st(o)||Yt(o)){h=new Array(o.length);for(let g=0,k=o.length;g<k;g++)h[g]=i(o[g],g,void 0,m&&m[g])}else if(typeof o=="number"){Number.isInteger(o)||Be(`The v-for range expect an integer value but got ${o}.`),h=new Array(o);for(let g=0;g<o;g++)h[g]=i(g+1,g,void 0,m&&m[g])}else if(Nt(o))if(o[Symbol.iterator])h=Array.from(o,(g,k)=>i(g,k,void 0,m&&m[k]));else{const g=Object.keys(o);h=new Array(g.length);for(let k=0,f=g.length;k<f;k++){const C=g[k];h[k]=i(o[C],C,k,m&&m[k])}}else h=[];return a&&(a[d]=h),h}function iA(o,i){for(let a=0;a<i.length;a++){const d=i[a];if(st(d))for(let h=0;h<d.length;h++)o[d[h].name]=d[h].fn;else d&&(o[d.name]=d.key?(...h)=>{const m=d.fn(...h);return m&&(m.key=d.key),m}:d.fn)}return o}function _e(o,i,a={},d,h){if(cn.isCE||cn.parent&&Ua(cn.parent)&&cn.parent.isCE)return i!=="default"&&(a.name=i),Ue("slot",a,d&&d());let m=o[i];m&&m.length>1&&(Be("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),m=()=>[]),m&&m._c&&(m._d=!1),H();const g=m&&bM(m(a)),k=Le(ot,{key:a.key||g&&g.key||`_${i}`},g||(d?d():[]),g&&o._===1?64:-2);return!h&&k.scopeId&&(k.slotScopeIds=[k.scopeId+"-s"]),m&&m._c&&(m._d=!0),k}function bM(o){return o.some(i=>Kr(i)?!(i.type===bn||i.type===ot&&!bM(i.children)):!0)?o:null}function d9(o,i){const a={};if(!Nt(o))return Be("v-on with no argument expects an object value."),a;for(const d in o)a[i&&/[A-Z]/.test(d)?`on:${d}`:$r(d)]=o[d];return a}const Ov=o=>o?jM(o)?rg(o)||o.proxy:Ov(o.parent):null,Wa=Ut(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>Pa(o.props),$attrs:o=>Pa(o.attrs),$slots:o=>Pa(o.slots),$refs:o=>Pa(o.refs),$parent:o=>Ov(o.parent),$root:o=>Ov(o.root),$emit:o=>o.emit,$options:o=>aA(o),$forceUpdate:o=>o.f||(o.f=()=>{o.effect.dirty=!0,fh(o.update)}),$nextTick:o=>o.n||(o.n=so.bind(o.proxy)),$watch:o=>i9.bind(o)}),rA=o=>o==="_"||o==="$",K_=(o,i)=>o!==jt&&!o.__isScriptSetup&&Bt(o,i),Wu={get({_:o},i){const{ctx:a,setupState:d,data:h,props:m,accessCache:g,type:k,appContext:f}=o;if(i==="__isVue")return!0;let C;if(i[0]!=="$"){const E=g[i];if(E!==void 0)switch(E){case 1:return d[i];case 2:return h[i];case 4:return a[i];case 3:return m[i]}else{if(K_(d,i))return g[i]=1,d[i];if(h!==jt&&Bt(h,i))return g[i]=2,h[i];if((C=o.propsOptions[0])&&Bt(C,i))return g[i]=3,m[i];if(a!==jt&&Bt(a,i))return g[i]=4,a[i];Pv&&(g[i]=0)}}const y=Wa[i];let w,v;if(y)return i==="$attrs"?(Xn(o,"get",i),Cm()):i==="$slots"&&Xn(o,"get",i),y(o);if((w=k.__cssModules)&&(w=w[i]))return w;if(a!==jt&&Bt(a,i))return g[i]=4,a[i];if(v=f.config.globalProperties,Bt(v,i))return v[i];cn&&(!Yt(i)||i.indexOf("__v")!==0)&&(h!==jt&&rA(i[0])&&Bt(h,i)?Be(`Property ${JSON.stringify(i)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):o===cn&&Be(`Property ${JSON.stringify(i)} was accessed during render but is not defined on instance.`))},set({_:o},i,a){const{data:d,setupState:h,ctx:m}=o;return K_(h,i)?(h[i]=a,!0):h.__isScriptSetup&&Bt(h,i)?(Be(`Cannot mutate <script setup> binding "${i}" from Options API.`),!1):d!==jt&&Bt(d,i)?(d[i]=a,!0):Bt(o.props,i)?(Be(`Attempting to mutate prop "${i}". Props are readonly.`),!1):i[0]==="$"&&i.slice(1)in o?(Be(`Attempting to mutate public property "${i}". Properties starting with $ are reserved and readonly.`),!1):(i in o.appContext.config.globalProperties?Object.defineProperty(m,i,{enumerable:!0,configurable:!0,value:a}):m[i]=a,!0)},has({_:{data:o,setupState:i,accessCache:a,ctx:d,appContext:h,propsOptions:m}},g){let k;return!!a[g]||o!==jt&&Bt(o,g)||K_(i,g)||(k=m[0])&&Bt(k,g)||Bt(d,g)||Bt(Wa,g)||Bt(h.config.globalProperties,g)},defineProperty(o,i,a){return a.get!=null?o._.accessCache[i]=0:Bt(a,"value")&&this.set(o,i,a.value,null),Reflect.defineProperty(o,i,a)}};Wu.ownKeys=o=>(Be("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(o));const u9=Ut({},Wu,{get(o,i){if(i!==Symbol.unscopables)return Wu.get(o,i,o)},has(o,i){const a=i[0]!=="_"&&!T7(i);return!a&&Wu.has(o,i)&&Be(`Property ${JSON.stringify(i)} should not start with _ which is a reserved prefix for Vue internals.`),a}});function h9(o){const i={};return Object.defineProperty(i,"_",{configurable:!0,enumerable:!1,get:()=>o}),Object.keys(Wa).forEach(a=>{Object.defineProperty(i,a,{configurable:!0,enumerable:!1,get:()=>Wa[a](o),set:Hn})}),i}function p9(o){const{ctx:i,propsOptions:[a]}=o;a&&Object.keys(a).forEach(d=>{Object.defineProperty(i,d,{enumerable:!0,configurable:!0,get:()=>o.props[d],set:Hn})})}function f9(o){const{ctx:i,setupState:a}=o;Object.keys(kt(a)).forEach(d=>{if(!a.__isScriptSetup){if(rA(d[0])){Be(`setup() return property ${JSON.stringify(d)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(i,d,{enumerable:!0,configurable:!0,get:()=>a[d],set:Hn})}})}const ol=o=>Be(`${o}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);function m9(){return ol("defineProps"),null}function g9(){return ol("defineEmits"),null}function b9(o){ol("defineExpose")}function k9(o){ol("defineOptions")}function _9(){return ol("defineSlots"),null}function v9(){ol("defineModel")}function w9(o,i){return ol("withDefaults"),null}function Gn(){return kM().slots}function sA(){return kM().attrs}function kM(){const o=To();return o||Be("useContext() called without active instance."),o.setupContext||(o.setupContext=FM(o))}function lh(o){return st(o)?o.reduce((i,a)=>(i[a]=null,i),{}):o}function A9(o,i){const a=lh(o);for(const d in i){if(d.startsWith("__skip"))continue;let h=a[d];h?st(h)||pt(h)?h=a[d]={type:h,default:i[d]}:h.default=i[d]:h===null?h=a[d]={default:i[d]}:Be(`props default key "${d}" has no corresponding declaration.`),h&&i[`__skip_${d}`]&&(h.skipFactory=!0)}return a}function C9(o,i){return!o||!i?o||i:st(o)&&st(i)?o.concat(i):Ut({},lh(o),lh(i))}function y9(o,i){const a={};for(const d in o)i.includes(d)||Object.defineProperty(a,d,{enumerable:!0,get:()=>o[d]});return a}function E9(o){const i=To();i||Be("withAsyncContext called without active current instance. This is likely a bug.");let a=o();return Hv(),Um(a)&&(a=a.catch(d=>{throw Za(i),d})),[a,()=>Za(i)]}function x9(){const o=Object.create(null);return(i,a)=>{o[a]?Be(`${i} property "${a}" is already defined in ${o[a]}.`):o[a]=i}}let Pv=!0;function T9(o){const i=aA(o),a=o.proxy,d=o.ctx;Pv=!1,i.beforeCreate&&HS(i.beforeCreate,o,"bc");const{data:h,computed:m,methods:g,watch:k,provide:f,inject:C,created:y,beforeMount:w,mounted:v,beforeUpdate:E,updated:S,activated:M,deactivated:N,beforeDestroy:R,beforeUnmount:L,destroyed:z,unmounted:$,render:q,renderTracked:J,renderTriggered:K,errorCaptured:ee,serverPrefetch:B,expose:U,inheritAttrs:te,components:ae,directives:be,filters:ye}=i,me=x9();{const[he]=o.propsOptions;if(he)for(const de in he)me("Props",de)}if(C&&D9(C,d,me),g)for(const he in g){const de=g[he];pt(de)?(Object.defineProperty(d,he,{value:de.bind(a),configurable:!0,enumerable:!0,writable:!0}),me("Methods",he)):Be(`Method "${he}" has type "${typeof de}" in the component definition. Did you reference the function correctly?`)}if(h){pt(h)||Be("The data option must be a function. Plain object usage is no longer supported.");const he=h.call(a,a);if(Um(he)&&Be("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Nt(he))Be("data() should return an object.");else{o.data=xt(he);for(const de in he)me("Data",de),rA(de[0])||Object.defineProperty(d,de,{configurable:!0,enumerable:!0,get:()=>he[de],set:Hn})}}if(Pv=!0,m)for(const he in m){const de=m[he],Qe=pt(de)?de.bind(a,a):pt(de.get)?de.get.bind(a,a):Hn;Qe===Hn&&Be(`Computed property "${he}" has no getter.`);const Oe=!pt(de)&&pt(de.set)?de.set.bind(a):()=>{Be(`Write operation failed: computed property "${he}" is readonly.`)},it=Y({get:Qe,set:Oe});Object.defineProperty(d,he,{enumerable:!0,configurable:!0,get:()=>it.value,set:Se=>it.value=Se}),me("Computed",he)}if(k)for(const he in k)_M(k[he],d,a,he);if(f){const he=pt(f)?f.call(a):f;Reflect.ownKeys(he).forEach(de=>{Oi(de,he[de])})}y&&HS(y,o,"c");function ue(he,de){st(de)?de.forEach(Qe=>he(Qe.bind(a))):de&&he(de.bind(a))}if(ue(uM,w),ue(Ft,v),ue(hM,E),ue(og,S),ue(bh,M),ue(cM,N),ue(gM,ee),ue(mM,J),ue(fM,K),ue(nl,L),ue(kh,$),ue(pM,B),st(U))if(U.length){const he=o.exposed||(o.exposed={});U.forEach(de=>{Object.defineProperty(he,de,{get:()=>a[de],set:Qe=>a[de]=Qe})})}else o.exposed||(o.exposed={});q&&o.render===Hn&&(o.render=q),te!=null&&(o.inheritAttrs=te),ae&&(o.components=ae),be&&(o.directives=be)}function D9(o,i,a=Hn){st(o)&&(o=Lv(o));for(const d in o){const h=o[d];let m;Nt(h)?"default"in h?m=gn(h.from||d,h.default,!0):m=gn(h.from||d):m=gn(h),Vt(m)?Object.defineProperty(i,d,{enumerable:!0,configurable:!0,get:()=>m.value,set:g=>m.value=g}):i[d]=m,a("Inject",d)}}function HS(o,i,a){jo(st(o)?o.map(d=>d.bind(i.proxy)):o.bind(i.proxy),i,a)}function _M(o,i,a,d){const h=d.includes(".")?rM(a,d):()=>a[d];if(Yt(o)){const m=i[o];pt(m)?St(h,m):Be(`Invalid watch handler specified by key "${o}"`,m)}else if(pt(o))St(h,o.bind(a));else if(Nt(o))if(st(o))o.forEach(m=>_M(m,i,a,d));else{const m=pt(o.handler)?o.handler.bind(a):i[o.handler];pt(m)?St(h,m,o):Be(`Invalid watch handler specified by key "${o.handler}"`,m)}else Be(`Invalid watch option: "${d}"`,o)}function aA(o){const i=o.type,{mixins:a,extends:d}=i,{mixins:h,optionsCache:m,config:{optionMergeStrategies:g}}=o.appContext,k=m.get(i);let f;return k?f=k:!h.length&&!a&&!d?f=i:(f={},h.length&&h.forEach(C=>Em(f,C,g,!0)),Em(f,i,g)),Nt(i)&&m.set(i,f),f}function Em(o,i,a,d=!1){const{mixins:h,extends:m}=i;m&&Em(o,m,a,!0),h&&h.forEach(g=>Em(o,g,a,!0));for(const g in i)if(d&&g==="expose")Be('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const k=S9[g]||a&&a[g];o[g]=k?k(o[g],i[g]):i[g]}return o}const S9={data:US,props:WS,emits:WS,methods:zu,computed:zu,beforeCreate:io,created:io,beforeMount:io,mounted:io,beforeUpdate:io,updated:io,beforeDestroy:io,beforeUnmount:io,destroyed:io,unmounted:io,activated:io,deactivated:io,errorCaptured:io,serverPrefetch:io,components:zu,directives:zu,watch:M9,provide:US,inject:I9};function US(o,i){return i?o?function(){return Ut(pt(o)?o.call(this,this):o,pt(i)?i.call(this,this):i)}:i:o}function I9(o,i){return zu(Lv(o),Lv(i))}function Lv(o){if(st(o)){const i={};for(let a=0;a<o.length;a++)i[o[a]]=o[a];return i}return o}function io(o,i){return o?[...new Set([].concat(o,i))]:i}function zu(o,i){return o?Ut(Object.create(null),o,i):i}function WS(o,i){return o?st(o)&&st(i)?[...new Set([...o,...i])]:Ut(Object.create(null),lh(o),lh(i!=null?i:{})):i}function M9(o,i){if(!o)return i;if(!i)return o;const a=Ut(Object.create(null),o);for(const d in i)a[d]=io(o[d],i[d]);return a}function vM(){return{app:null,config:{isNativeTag:v7,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B9=0;function N9(o,i){return function(d,h=null){pt(d)||(d=Ut({},d)),h!=null&&!Nt(h)&&(Be("root props passed to app.mount() must be an object."),h=null);const m=vM(),g=new WeakSet;let k=!1;const f=m.app={_uid:B9++,_component:d,_props:h,_container:null,_context:m,_instance:null,version:Gv,get config(){return m.config},set config(C){Be("app.config cannot be replaced. Modify individual options instead.")},use(C,...y){return g.has(C)?Be("Plugin has already been applied to target app."):C&&pt(C.install)?(g.add(C),C.install(f,...y)):pt(C)?(g.add(C),C(f,...y)):Be('A plugin must either be a function or an object with an "install" function.'),f},mixin(C){return m.mixins.includes(C)?Be("Mixin has already been applied to target app"+(C.name?`: ${C.name}`:"")):m.mixins.push(C),f},component(C,y){return Uv(C,m.config),y?(m.components[C]&&Be(`Component "${C}" has already been registered in target app.`),m.components[C]=y,f):m.components[C]},directive(C,y){return sM(C),y?(m.directives[C]&&Be(`Directive "${C}" has already been registered in target app.`),m.directives[C]=y,f):m.directives[C]},mount(C,y,w){if(k)Be("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{C.__vue_app__&&Be("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const v=Ue(d,h);return v.appContext=m,w===!0?w="svg":w===!1&&(w=void 0),m.reload=()=>{o(fi(v),C,w)},y&&i?i(v,C):o(v,C,w),k=!0,f._container=C,C.__vue_app__=f,f._instance=v.component,R8(f,Gv),rg(v.component)||v.component.proxy}},unmount(){k?(o(null,f._container),f._instance=null,z8(f),delete f._container.__vue_app__):Be("Cannot unmount an app that is not mounted.")},provide(C,y){return C in m.provides&&Be(`App already provides property with key "${String(C)}". It will be overwritten with the new value.`),m.provides[C]=y,f},runWithContext(C){const y=yc;yc=f;try{return C()}finally{yc=y}}};return f}}let yc=null;function Oi(o,i){if(!An)Be("provide() can only be used inside setup().");else{let a=An.provides;const d=An.parent&&An.parent.provides;d===a&&(a=An.provides=Object.create(d)),a[o]=i}}function gn(o,i,a=!1){const d=An||cn;if(d||yc){const h=d?d.parent==null?d.vnode.appContext&&d.vnode.appContext.provides:d.parent.provides:yc._context.provides;if(h&&o in h)return h[o];if(arguments.length>1)return a&&pt(i)?i.call(d&&d.proxy):i;Be(`injection "${String(o)}" not found.`)}else Be("inject() can only be used inside setup() or functional components.")}function wM(){return!!(An||cn||yc)}function O9(o,i,a,d=!1){const h={},m={};_m(m,ig,1),o.propsDefaults=Object.create(null),AM(o,i,h,m);for(const g in o.propsOptions[0])g in h||(h[g]=void 0);yM(i||{},h,o),a?o.props=d?h:Fw(h):o.type.props?o.props=h:o.props=m,o.attrs=m}function P9(o){for(;o;){if(o.type.__hmrId)return!0;o=o.parent}}function L9(o,i,a,d){const{props:h,attrs:m,vnode:{patchFlag:g}}=o,k=kt(h),[f]=o.propsOptions;let C=!1;if(!P9(o)&&(d||g>0)&&!(g&16)){if(g&8){const y=o.vnode.dynamicProps;for(let w=0;w<y.length;w++){let v=y[w];if(Jm(o.emitsOptions,v))continue;const E=i[v];if(f)if(Bt(m,v))E!==m[v]&&(m[v]=E,C=!0);else{const S=ro(v);h[S]=Rv(f,k,S,E,o,!1)}else E!==m[v]&&(m[v]=E,C=!0)}}}else{AM(o,i,h,m)&&(C=!0);let y;for(const w in k)(!i||!Bt(i,w)&&((y=Qn(w))===w||!Bt(i,y)))&&(f?a&&(a[w]!==void 0||a[y]!==void 0)&&(h[w]=Rv(f,k,w,void 0,o,!0)):delete h[w]);if(m!==k)for(const w in m)(!i||!Bt(i,w)&&!0)&&(delete m[w],C=!0)}C&&or(o,"set","$attrs"),yM(i||{},h,o)}function AM(o,i,a,d){const[h,m]=o.propsOptions;let g=!1,k;if(i)for(let f in i){if(vc(f))continue;const C=i[f];let y;h&&Bt(h,y=ro(f))?!m||!m.includes(y)?a[y]=C:(k||(k={}))[y]=C:Jm(o.emitsOptions,f)||(!(f in d)||C!==d[f])&&(d[f]=C,g=!0)}if(m){const f=kt(a),C=k||jt;for(let y=0;y<m.length;y++){const w=m[y];a[w]=Rv(h,f,w,C[w],o,!Bt(C,w))}}return g}function Rv(o,i,a,d,h,m){const g=o[a];if(g!=null){const k=Bt(g,"default");if(k&&d===void 0){const f=g.default;if(g.type!==Function&&!g.skipFactory&&pt(f)){const{propsDefaults:C}=h;if(a in C)d=C[a];else{const y=Za(h);d=C[a]=f.call(null,i),y()}}else d=f}g[0]&&(m&&!k?d=!1:g[1]&&(d===""||d===Qn(a))&&(d=!0))}return d}function CM(o,i,a=!1){const d=i.propsCache,h=d.get(o);if(h)return h;const m=o.props,g={},k=[];let f=!1;if(!pt(o)){const y=w=>{f=!0;const[v,E]=CM(w,i,!0);Ut(g,v),E&&k.push(...E)};!a&&i.mixins.length&&i.mixins.forEach(y),o.extends&&y(o.extends),o.mixins&&o.mixins.forEach(y)}if(!m&&!f)return Nt(o)&&d.set(o,_c),_c;if(st(m))for(let y=0;y<m.length;y++){Yt(m[y])||Be("props must be strings when using array syntax.",m[y]);const w=ro(m[y]);qS(w)&&(g[w]=jt)}else if(m){Nt(m)||Be("invalid props options",m);for(const y in m){const w=ro(y);if(qS(w)){const v=m[y],E=g[w]=st(v)||pt(v)?{type:v}:Ut({},v);if(E){const S=KS(Boolean,E.type),M=KS(String,E.type);E[0]=S>-1,E[1]=M<0||S<M,(S>-1||Bt(E,"default"))&&k.push(w)}}}}const C=[g,k];return Nt(o)&&d.set(o,C),C}function qS(o){return o[0]!=="$"&&!vc(o)?!0:(Be(`Invalid prop name: "${o}" is a reserved property.`),!1)}function zv(o){return o===null?"null":typeof o=="function"?o.name||"":typeof o=="object"&&o.constructor&&o.constructor.name||""}function GS(o,i){return zv(o)===zv(i)}function KS(o,i){return st(i)?i.findIndex(a=>GS(a,o)):pt(i)&&GS(i,o)?0:-1}function yM(o,i,a){const d=kt(i),h=a.propsOptions[0];for(const m in h){let g=h[m];g!=null&&R9(m,d[m],g,Pa(d),!Bt(o,m)&&!Bt(o,Qn(m)))}}function R9(o,i,a,d,h){const{type:m,required:g,validator:k,skipCheck:f}=a;if(g&&h){Be('Missing required prop: "'+o+'"');return}if(!(i==null&&!g)){if(m!=null&&m!==!0&&!f){let C=!1;const y=st(m)?m:[m],w=[];for(let v=0;v<y.length&&!C;v++){const{valid:E,expectedType:S}=j9(i,y[v]);w.push(S||""),C=E}if(!C){Be($9(o,i,w));return}}k&&!k(i,d)&&Be('Invalid prop: custom validator check failed for prop "'+o+'".')}}const z9=qo("String,Number,Boolean,Function,Symbol,BigInt");function j9(o,i){let a;const d=zv(i);if(z9(d)){const h=typeof o;a=h===d.toLowerCase(),!a&&h==="object"&&(a=o instanceof i)}else d==="Object"?a=Nt(o):d==="Array"?a=st(o):d==="null"?a=o===null:a=o instanceof i;return{valid:a,expectedType:d}}function $9(o,i,a){if(a.length===0)return`Prop type [] for prop "${o}" won't match anything. Did you mean to use type Array instead?`;let d=`Invalid prop: type check failed for prop "${o}". Expected ${a.map(Hs).join(" | ")}`;const h=a[0],m=Bw(i),g=YS(i,h),k=YS(i,m);return a.length===1&&QS(h)&&!V9(h,m)&&(d+=` with value ${g}`),d+=`, got ${m} `,QS(m)&&(d+=`with value ${k}.`),d}function YS(o,i){return i==="String"?`"${o}"`:i==="Number"?`${Number(o)}`:`${o}`}function QS(o){return["string","number","boolean"].some(a=>o.toLowerCase()===a)}function V9(...o){return o.some(i=>i.toLowerCase()==="boolean")}const EM=o=>o[0]==="_"||o==="$stable",lA=o=>st(o)?o.map(wo):[wo(o)],F9=(o,i,a)=>{if(i._n)return i;const d=Te((...h)=>(An&&(!a||a.root===An.root)&&Be(`Slot "${o}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),lA(i(...h))),a);return d._c=!1,d},xM=(o,i,a)=>{const d=o._ctx;for(const h in o){if(EM(h))continue;const m=o[h];if(pt(m))i[h]=F9(h,m,d);else if(m!=null){Be(`Non-function value encountered for slot "${h}". Prefer function slots for better performance.`);const g=lA(m);i[h]=()=>g}}},TM=(o,i)=>{Kc(o.vnode)||Be("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=lA(i);o.slots.default=()=>a},H9=(o,i)=>{if(o.vnode.shapeFlag&32){const a=i._;a?(o.slots=kt(i),_m(i,"_",a)):xM(i,o.slots={})}else o.slots={},i&&TM(o,i);_m(o.slots,ig,1)},U9=(o,i,a)=>{const{vnode:d,slots:h}=o;let m=!0,g=jt;if(d.shapeFlag&32){const k=i._;k?$s?(Ut(h,i),or(o,"set","$slots")):a&&k===1?m=!1:(Ut(h,i),!a&&k===1&&delete h._):(m=!i.$stable,xM(i,h)),g=i}else i&&(TM(o,i),g={default:1});if(m)for(const k in h)!EM(k)&&g[k]==null&&delete h[k]};function xm(o,i,a,d,h=!1){if(st(o)){o.forEach((v,E)=>xm(v,i&&(st(i)?i[E]:i),a,d,h));return}if(Ua(d)&&!h)return;const m=d.shapeFlag&4?rg(d.component)||d.component.proxy:d.el,g=h?null:m,{i:k,r:f}=o;if(!k){Be("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const C=i&&i.r,y=k.refs===jt?k.refs={}:k.refs,w=k.setupState;if(C!=null&&C!==f&&(Yt(C)?(y[C]=null,Bt(w,C)&&(w[C]=null)):Vt(C)&&(C.value=null)),pt(f))ir(f,k,12,[g,y]);else{const v=Yt(f),E=Vt(f);if(v||E){const S=()=>{if(o.f){const M=v?Bt(w,f)?w[f]:y[f]:f.value;h?st(M)&&Mw(M,m):st(M)?M.includes(m)||M.push(m):v?(y[f]=[m],Bt(w,f)&&(w[f]=y[f])):(f.value=[m],o.k&&(y[o.k]=f.value))}else v?(y[f]=g,Bt(w,f)&&(w[f]=g)):E?(f.value=g,o.k&&(y[o.k]=g)):Be("Invalid template ref type:",f,`(${typeof f})`)};g?(S.id=-1,Fn(S,a)):S()}else Be("Invalid template ref type:",f,`(${typeof f})`)}}let Mr=!1;const W9=o=>o.namespaceURI.includes("svg")&&o.tagName!=="foreignObject",q9=o=>o.namespaceURI.includes("MathML"),zf=o=>{if(W9(o))return"svg";if(q9(o))return"mathml"},xu=o=>o.nodeType===8;function G9(o){const{mt:i,p:a,o:{patchProp:d,createText:h,nextSibling:m,parentNode:g,remove:k,insert:f,createComment:C}}=o,y=(z,$)=>{if(!$.hasChildNodes()){Be("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),a(null,z,$),Am(),$._vnode=z;return}Mr=!1,w($.firstChild,z,null,null,null),Am(),$._vnode=z,Mr&&console.error("Hydration completed but contains mismatches.")},w=(z,$,q,J,K,ee=!1)=>{const B=xu(z)&&z.data==="[",U=()=>M(z,$,q,J,K,B),{type:te,ref:ae,shapeFlag:be,patchFlag:ye}=$;let me=z.nodeType;$.el=z,"__vnode"in z||Object.defineProperty(z,"__vnode",{value:$,enumerable:!1}),"__vueParentComponent"in z||Object.defineProperty(z,"__vueParentComponent",{value:q,enumerable:!1}),ye===-2&&(ee=!1,$.dynamicChildren=null);let ue=null;switch(te){case Ws:me!==3?$.children===""?(f($.el=h(""),g(z),z),ue=z):ue=U():(z.data!==$.children&&(Mr=!0,Be("Hydration text mismatch in",z.parentNode,`
  - rendered on server: ${JSON.stringify(z.data)}
  - expected on client: ${JSON.stringify($.children)}`),z.data=$.children),ue=m(z));break;case bn:L(z)?(ue=m(z),R($.el=z.content.firstChild,z,q)):me!==8||B?ue=U():ue=m(z);break;case Vs:if(B&&(z=m(z),me=z.nodeType),me===1||me===3){ue=z;const he=!$.children.length;for(let de=0;de<$.staticCount;de++)he&&($.children+=ue.nodeType===1?ue.outerHTML:ue.data),de===$.staticCount-1&&($.anchor=ue),ue=m(ue);return B?m(ue):ue}else U();break;case ot:B?ue=S(z,$,q,J,K,ee):ue=U();break;default:if(be&1)(me!==1||$.type.toLowerCase()!==z.tagName.toLowerCase())&&!L(z)?ue=U():ue=v(z,$,q,J,K,ee);else if(be&6){$.slotScopeIds=K;const he=g(z);if(B?ue=N(z):xu(z)&&z.data==="teleport start"?ue=N(z,z.data,"teleport end"):ue=m(z),i($,he,null,q,J,zf(he),ee),Ua($)){let de;B?(de=Ue(ot),de.anchor=ue?ue.previousSibling:he.lastChild):de=z.nodeType===3?rt(""):Ue("div"),de.el=z,$.component.subTree=de}}else be&64?me!==8?ue=U():ue=$.type.hydrate(z,$,q,J,K,ee,o,E):be&128?ue=$.type.hydrate(z,$,q,J,zf(g(z)),K,ee,o,w):Be("Invalid HostVNode type:",te,`(${typeof te})`)}return ae!=null&&xm(ae,null,J,$),ue},v=(z,$,q,J,K,ee)=>{ee=ee||!!$.dynamicChildren;const{type:B,props:U,patchFlag:te,shapeFlag:ae,dirs:be,transition:ye}=$,me=B==="input"||B==="option";{be&&Xi($,null,q,"created");let ue=!1;if(L(z)){ue=MM(J,ye)&&q&&q.vnode.props&&q.vnode.props.appear;const de=z.content.firstChild;ue&&ye.beforeEnter(de),R(de,z,q),$.el=z=de}if(ae&16&&!(U&&(U.innerHTML||U.textContent))){let de=E(z.firstChild,$,z,q,J,K,ee),Qe=!1;for(;de;){Mr=!0,Qe||(Be("Hydration children mismatch on",z,`
Server rendered element contains more child nodes than client vdom.`),Qe=!0);const Oe=de;de=de.nextSibling,k(Oe)}}else ae&8&&z.textContent!==$.children&&(Mr=!0,Be("Hydration text content mismatch on",z,`
  - rendered on server: ${z.textContent}
  - expected on client: ${$.children}`),z.textContent=$.children);if(U)for(const de in U)K9(z,de,U[de],$,q)&&(Mr=!0),(me&&(de.endsWith("value")||de==="indeterminate")||qc(de)&&!vc(de)||de[0]===".")&&d(z,de,null,U[de],void 0,void 0,q);let he;(he=U&&U.onVnodeBeforeMount)&&vo(he,q,$),be&&Xi($,null,q,"beforeMount"),((he=U&&U.onVnodeMounted)||be||ue)&&eM(()=>{he&&vo(he,q,$),ue&&ye.enter(z),be&&Xi($,null,q,"mounted")},J)}return z.nextSibling},E=(z,$,q,J,K,ee,B)=>{B=B||!!$.dynamicChildren;const U=$.children,te=U.length;let ae=!1;for(let be=0;be<te;be++){const ye=B?U[be]:U[be]=wo(U[be]);if(z)z=w(z,ye,J,K,ee,B);else{if(ye.type===Ws&&!ye.children)continue;Mr=!0,ae||(Be("Hydration children mismatch on",q,`
Server rendered element contains fewer child nodes than client vdom.`),ae=!0),a(null,ye,q,null,J,K,zf(q),ee)}}return z},S=(z,$,q,J,K,ee)=>{const{slotScopeIds:B}=$;B&&(K=K?K.concat(B):B);const U=g(z),te=E(m(z),$,U,q,J,K,ee);return te&&xu(te)&&te.data==="]"?m($.anchor=te):(Mr=!0,f($.anchor=C("]"),U,te),te)},M=(z,$,q,J,K,ee)=>{if(Mr=!0,Be(`Hydration node mismatch:
- rendered on server:`,z,z.nodeType===3?"(text)":xu(z)&&z.data==="["?"(start of fragment)":"",`
- expected on client:`,$.type),$.el=null,ee){const te=N(z);for(;;){const ae=m(z);if(ae&&ae!==te)k(ae);else break}}const B=m(z),U=g(z);return k(z),a(null,$,U,B,q,J,zf(U),K),B},N=(z,$="[",q="]")=>{let J=0;for(;z;)if(z=m(z),z&&xu(z)&&(z.data===$&&J++,z.data===q)){if(J===0)return m(z);J--}return z},R=(z,$,q)=>{const J=$.parentNode;J&&J.replaceChild(z,$);let K=q;for(;K;)K.vnode.el===$&&(K.vnode.el=K.subTree.el=z),K=K.parent},L=z=>z.nodeType===1&&z.tagName.toLowerCase()==="template";return[y,w]}function K9(o,i,a,d,h){var m;let g,k,f,C;if(i==="class")f=o.getAttribute("class"),C=We(a),Y9(ZS(f||""),ZS(C))||(g=k="class");else if(i==="style"){f=o.getAttribute("style"),C=Yt(a)?a:B7(Ln(a));const y=JS(f),w=JS(C);if(d.dirs)for(const{dir:E,value:S}of d.dirs)E.name==="show"&&!S&&w.set("display","none");const v=h==null?void 0:h.subTree;if(d===v||(v==null?void 0:v.type)===ot&&v.children.includes(d)){const E=(m=h==null?void 0:h.getCssVars)==null?void 0:m.call(h);for(const S in E)w.set(`--${S}`,String(E[S]))}Q9(y,w)||(g=k="style")}else(o instanceof SVGElement&&V7(i)||o instanceof HTMLElement&&(TS(i)||$7(i)))&&(TS(i)?(f=o.hasAttribute(i),C=Pw(a)):a==null?(f=o.hasAttribute(i),C=!1):(o.hasAttribute(i)?f=o.getAttribute(i):i==="value"&&o.tagName==="TEXTAREA"?f=o.value:f=!1,C=F7(a)?String(a):!1),f!==C&&(g="attribute",k=i));if(g){const y=E=>E===!1?"(not rendered)":`${k}="${E}"`,w=`Hydration ${g} mismatch on`,v=`
  - rendered on server: ${y(f)}
  - expected on client: ${y(C)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;return Be(w,o,v),!0}return!1}function ZS(o){return new Set(o.trim().split(/\s+/))}function Y9(o,i){if(o.size!==i.size)return!1;for(const a of o)if(!i.has(a))return!1;return!0}function JS(o){const i=new Map;for(const a of o.split(";")){let[d,h]=a.split(":");d=d==null?void 0:d.trim(),h=h==null?void 0:h.trim(),d&&h&&i.set(d,h)}return i}function Q9(o,i){if(o.size!==i.size)return!1;for(const[a,d]of o)if(d!==i.get(a))return!1;return!0}let Tu,Ps;function Lr(o,i){o.appContext.config.performance&&Tm()&&Ps.mark(`vue-${i}-${o.uid}`),V8(o,i,Tm()?Ps.now():Date.now())}function Rr(o,i){if(o.appContext.config.performance&&Tm()){const a=`vue-${i}-${o.uid}`,d=a+":end";Ps.mark(d),Ps.measure(`<${sg(o,o.type)}> ${i}`,a,d),Ps.clearMarks(a),Ps.clearMarks(d)}F8(o,i,Tm()?Ps.now():Date.now())}function Tm(){return Tu!==void 0||(typeof window!="undefined"&&window.performance?(Tu=!0,Ps=window.performance):Tu=!1),Tu}function Z9(){const o=[];if(o.length){const i=o.length>1;console.warn(`Feature flag${i?"s":""} ${o.join(", ")} ${i?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Fn=eM;function DM(o){return IM(o)}function SM(o){return IM(o,G9)}function IM(o,i){Z9();const a=Ow();a.__VUE__=!0,Qw(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:d,remove:h,patchProp:m,createElement:g,createText:k,createComment:f,setText:C,setElementText:y,parentNode:w,nextSibling:v,setScopeId:E=Hn,insertStaticContent:S}=o,M=(F,Z,re,Ae=null,we=null,$e=null,ke=void 0,ze=null,Re=$s?!1:!!Z.dynamicChildren)=>{if(F===Z)return;F&&!Ni(F,Z)&&(Ae=Ce(F),le(F,we,$e,!0),F=null),Z.patchFlag===-2&&(Re=!1,Z.dynamicChildren=null);const{type:Ee,ref:Ye,shapeFlag:ct}=Z;switch(Ee){case Ws:N(F,Z,re,Ae);break;case bn:R(F,Z,re,Ae);break;case Vs:F==null?L(Z,re,Ae,ke):z(F,Z,re,ke);break;case ot:be(F,Z,re,Ae,we,$e,ke,ze,Re);break;default:ct&1?J(F,Z,re,Ae,we,$e,ke,ze,Re):ct&6?ye(F,Z,re,Ae,we,$e,ke,ze,Re):ct&64||ct&128?Ee.process(F,Z,re,Ae,we,$e,ke,ze,Re,fe):Be("Invalid VNode type:",Ee,`(${typeof Ee})`)}Ye!=null&&we&&xm(Ye,F&&F.ref,$e,Z||F,!Z)},N=(F,Z,re,Ae)=>{if(F==null)d(Z.el=k(Z.children),re,Ae);else{const we=Z.el=F.el;Z.children!==F.children&&C(we,Z.children)}},R=(F,Z,re,Ae)=>{F==null?d(Z.el=f(Z.children||""),re,Ae):Z.el=F.el},L=(F,Z,re,Ae)=>{[F.el,F.anchor]=S(F.children,Z,re,Ae,F.el,F.anchor)},z=(F,Z,re,Ae)=>{if(Z.children!==F.children){const we=v(F.anchor);q(F),[Z.el,Z.anchor]=S(Z.children,re,we,Ae)}else Z.el=F.el,Z.anchor=F.anchor},$=({el:F,anchor:Z},re,Ae)=>{let we;for(;F&&F!==Z;)we=v(F),d(F,re,Ae),F=we;d(Z,re,Ae)},q=({el:F,anchor:Z})=>{let re;for(;F&&F!==Z;)re=v(F),h(F),F=re;h(Z)},J=(F,Z,re,Ae,we,$e,ke,ze,Re)=>{Z.type==="svg"?ke="svg":Z.type==="math"&&(ke="mathml"),F==null?K(Z,re,Ae,we,$e,ke,ze,Re):U(F,Z,we,$e,ke,ze,Re)},K=(F,Z,re,Ae,we,$e,ke,ze)=>{let Re,Ee;const{props:Ye,shapeFlag:ct,transition:lt,dirs:dt}=F;if(Re=F.el=g(F.type,$e,Ye&&Ye.is,Ye),ct&8?y(Re,F.children):ct&16&&B(F.children,Re,null,Ae,we,Y_(F,$e),ke,ze),dt&&Xi(F,null,Ae,"created"),ee(Re,F,F.scopeId,ke,Ae),Ye){for(const It in Ye)It!=="value"&&!vc(It)&&m(Re,It,null,Ye[It],$e,F.children,Ae,we,ce);"value"in Ye&&m(Re,"value",null,Ye.value,$e),(Ee=Ye.onVnodeBeforeMount)&&vo(Ee,Ae,F)}Object.defineProperty(Re,"__vnode",{value:F,enumerable:!1}),Object.defineProperty(Re,"__vueParentComponent",{value:Ae,enumerable:!1}),dt&&Xi(F,null,Ae,"beforeMount");const mt=MM(we,lt);mt&&lt.beforeEnter(Re),d(Re,Z,re),((Ee=Ye&&Ye.onVnodeMounted)||mt||dt)&&Fn(()=>{Ee&&vo(Ee,Ae,F),mt&&lt.enter(Re),dt&&Xi(F,null,Ae,"mounted")},we)},ee=(F,Z,re,Ae,we)=>{if(re&&E(F,re),Ae)for(let $e=0;$e<Ae.length;$e++)E(F,Ae[$e]);if(we){let $e=we.subTree;if($e.patchFlag>0&&$e.patchFlag&2048&&($e=eg($e.children)||$e),Z===$e){const ke=we.vnode;ee(F,ke,ke.scopeId,ke.slotScopeIds,we.parent)}}},B=(F,Z,re,Ae,we,$e,ke,ze,Re=0)=>{for(let Ee=Re;Ee<F.length;Ee++){const Ye=F[Ee]=ze?Ss(F[Ee]):wo(F[Ee]);M(null,Ye,Z,re,Ae,we,$e,ke,ze)}},U=(F,Z,re,Ae,we,$e,ke)=>{const ze=Z.el=F.el;let{patchFlag:Re,dynamicChildren:Ee,dirs:Ye}=Z;Re|=F.patchFlag&16;const ct=F.props||jt,lt=Z.props||jt;let dt;if(re&&Ma(re,!1),(dt=lt.onVnodeBeforeUpdate)&&vo(dt,re,Z,F),Ye&&Xi(Z,F,re,"beforeUpdate"),re&&Ma(re,!0),$s&&(Re=0,ke=!1,Ee=null),Ee?(te(F.dynamicChildren,Ee,ze,re,Ae,Y_(Z,we),$e),Dm(F,Z)):ke||Qe(F,Z,ze,null,re,Ae,Y_(Z,we),$e,!1),Re>0){if(Re&16)ae(ze,Z,ct,lt,re,Ae,we);else if(Re&2&&ct.class!==lt.class&&m(ze,"class",null,lt.class,we),Re&4&&m(ze,"style",ct.style,lt.style,we),Re&8){const mt=Z.dynamicProps;for(let It=0;It<mt.length;It++){const Xt=mt[It],_n=ct[Xt],Dn=lt[Xt];(Dn!==_n||Xt==="value")&&m(ze,Xt,_n,Dn,we,F.children,re,Ae,ce)}}Re&1&&F.children!==Z.children&&y(ze,Z.children)}else!ke&&Ee==null&&ae(ze,Z,ct,lt,re,Ae,we);((dt=lt.onVnodeUpdated)||Ye)&&Fn(()=>{dt&&vo(dt,re,Z,F),Ye&&Xi(Z,F,re,"updated")},Ae)},te=(F,Z,re,Ae,we,$e,ke)=>{for(let ze=0;ze<Z.length;ze++){const Re=F[ze],Ee=Z[ze],Ye=Re.el&&(Re.type===ot||!Ni(Re,Ee)||Re.shapeFlag&70)?w(Re.el):re;M(Re,Ee,Ye,null,Ae,we,$e,ke,!0)}},ae=(F,Z,re,Ae,we,$e,ke)=>{if(re!==Ae){if(re!==jt)for(const ze in re)!vc(ze)&&!(ze in Ae)&&m(F,ze,re[ze],null,ke,Z.children,we,$e,ce);for(const ze in Ae){if(vc(ze))continue;const Re=Ae[ze],Ee=re[ze];Re!==Ee&&ze!=="value"&&m(F,ze,Ee,Re,ke,Z.children,we,$e,ce)}"value"in Ae&&m(F,"value",re.value,Ae.value,ke)}},be=(F,Z,re,Ae,we,$e,ke,ze,Re)=>{const Ee=Z.el=F?F.el:k(""),Ye=Z.anchor=F?F.anchor:k("");let{patchFlag:ct,dynamicChildren:lt,slotScopeIds:dt}=Z;($s||ct&2048)&&(ct=0,Re=!1,lt=null),dt&&(ze=ze?ze.concat(dt):dt),F==null?(d(Ee,re,Ae),d(Ye,re,Ae),B(Z.children||[],re,Ye,we,$e,ke,ze,Re)):ct>0&&ct&64&&lt&&F.dynamicChildren?(te(F.dynamicChildren,lt,re,we,$e,ke,ze),Dm(F,Z)):Qe(F,Z,re,Ye,we,$e,ke,ze,Re)},ye=(F,Z,re,Ae,we,$e,ke,ze,Re)=>{Z.slotScopeIds=ze,F==null?Z.shapeFlag&512?we.ctx.activate(Z,re,Ae,ke,Re):me(Z,re,Ae,we,$e,ke,Re):ue(F,Z,Re)},me=(F,Z,re,Ae,we,$e,ke)=>{const ze=F.component=zM(F,Ae,we);if(ze.type.__hmrId&&N8(ze),Fu(F),Lr(ze,"mount"),Kc(F)&&(ze.ctx.renderer=fe),Lr(ze,"init"),$M(ze),Rr(ze,"init"),ze.asyncDep){if(we&&we.registerDep(ze,he),!F.el){const Re=ze.subTree=Ue(bn);R(null,Re,Z,re)}}else he(ze,F,Z,re,we,$e,ke);Hu(),Rr(ze,"mount")},ue=(F,Z,re)=>{const Ae=Z.component=F.component;if(K8(F,Z,re))if(Ae.asyncDep&&!Ae.asyncResolved){Fu(Z),de(Ae,Z,re),Hu();return}else Ae.next=Z,M8(Ae.update),Ae.effect.dirty=!0,Ae.update();else Z.el=F.el,Ae.vnode=Z},he=(F,Z,re,Ae,we,$e,ke)=>{const ze=()=>{if(F.isMounted){let{next:Ye,bu:ct,u:lt,parent:dt,vnode:mt}=F;{const zi=BM(F);if(zi){Ye&&(Ye.el=mt.el,de(F,Ye,ke)),zi.asyncDep.then(()=>{F.isUnmounted||ze()});return}}let It=Ye,Xt;Fu(Ye||F.vnode),Ma(F,!1),Ye?(Ye.el=mt.el,de(F,Ye,ke)):Ye=mt,ct&&Os(ct),(Xt=Ye.props&&Ye.props.onVnodeBeforeUpdate)&&vo(Xt,dt,Ye,mt),Ma(F,!0),Lr(F,"render");const _n=nm(F);Rr(F,"render");const Dn=F.subTree;F.subTree=_n,Lr(F,"patch"),M(Dn,_n,w(Dn.el),Ce(Dn),F,we,$e),Rr(F,"patch"),Ye.el=_n.el,It===null&&Jw(F,_n.el),lt&&Fn(lt,we),(Xt=Ye.props&&Ye.props.onVnodeUpdated)&&Fn(()=>vo(Xt,dt,Ye,mt),we),Y5(F),Hu()}else{let Ye;const{el:ct,props:lt}=Z,{bm:dt,m:mt,parent:It}=F,Xt=Ua(Z);if(Ma(F,!1),dt&&Os(dt),!Xt&&(Ye=lt&&lt.onVnodeBeforeMount)&&vo(Ye,It,Z),Ma(F,!0),ct&&pe){const _n=()=>{Lr(F,"render"),F.subTree=nm(F),Rr(F,"render"),Lr(F,"hydrate"),pe(ct,F.subTree,F,we,null),Rr(F,"hydrate")};Xt?Z.type.__asyncLoader().then(()=>!F.isUnmounted&&_n()):_n()}else{Lr(F,"render");const _n=F.subTree=nm(F);Rr(F,"render"),Lr(F,"patch"),M(null,_n,re,Ae,F,we,$e),Rr(F,"patch"),Z.el=_n.el}if(mt&&Fn(mt,we),!Xt&&(Ye=lt&&lt.onVnodeMounted)){const _n=Z;Fn(()=>vo(Ye,It,_n),we)}(Z.shapeFlag&256||It&&Ua(It.vnode)&&It.vnode.shapeFlag&256)&&F.a&&Fn(F.a,we),F.isMounted=!0,Mv(F),Z=re=Ae=null}},Re=F.effect=new xc(ze,Hn,()=>fh(Ee),F.scope),Ee=F.update=()=>{Re.dirty&&Re.run()};Ee.id=F.uid,Ma(F,!0),Re.onTrack=F.rtc?Ye=>Os(F.rtc,Ye):void 0,Re.onTrigger=F.rtg?Ye=>Os(F.rtg,Ye):void 0,Ee.ownerInstance=F,Ee()},de=(F,Z,re)=>{Z.component=F;const Ae=F.vnode.props;F.vnode=Z,F.next=null,L9(F,Z.props,Ae,re),U9(F,Z.children,re),Qs(),PS(F),Zs()},Qe=(F,Z,re,Ae,we,$e,ke,ze,Re=!1)=>{const Ee=F&&F.children,Ye=F?F.shapeFlag:0,ct=Z.children,{patchFlag:lt,shapeFlag:dt}=Z;if(lt>0){if(lt&128){it(Ee,ct,re,Ae,we,$e,ke,ze,Re);return}else if(lt&256){Oe(Ee,ct,re,Ae,we,$e,ke,ze,Re);return}}dt&8?(Ye&16&&ce(Ee,we,$e),ct!==Ee&&y(re,ct)):Ye&16?dt&16?it(Ee,ct,re,Ae,we,$e,ke,ze,Re):ce(Ee,we,$e,!0):(Ye&8&&y(re,""),dt&16&&B(ct,re,Ae,we,$e,ke,ze,Re))},Oe=(F,Z,re,Ae,we,$e,ke,ze,Re)=>{F=F||_c,Z=Z||_c;const Ee=F.length,Ye=Z.length,ct=Math.min(Ee,Ye);let lt;for(lt=0;lt<ct;lt++){const dt=Z[lt]=Re?Ss(Z[lt]):wo(Z[lt]);M(F[lt],dt,re,null,we,$e,ke,ze,Re)}Ee>Ye?ce(F,we,$e,!0,!1,ct):B(Z,re,Ae,we,$e,ke,ze,Re,ct)},it=(F,Z,re,Ae,we,$e,ke,ze,Re)=>{let Ee=0;const Ye=Z.length;let ct=F.length-1,lt=Ye-1;for(;Ee<=ct&&Ee<=lt;){const dt=F[Ee],mt=Z[Ee]=Re?Ss(Z[Ee]):wo(Z[Ee]);if(Ni(dt,mt))M(dt,mt,re,null,we,$e,ke,ze,Re);else break;Ee++}for(;Ee<=ct&&Ee<=lt;){const dt=F[ct],mt=Z[lt]=Re?Ss(Z[lt]):wo(Z[lt]);if(Ni(dt,mt))M(dt,mt,re,null,we,$e,ke,ze,Re);else break;ct--,lt--}if(Ee>ct){if(Ee<=lt){const dt=lt+1,mt=dt<Ye?Z[dt].el:Ae;for(;Ee<=lt;)M(null,Z[Ee]=Re?Ss(Z[Ee]):wo(Z[Ee]),re,mt,we,$e,ke,ze,Re),Ee++}}else if(Ee>lt)for(;Ee<=ct;)le(F[Ee],we,$e,!0),Ee++;else{const dt=Ee,mt=Ee,It=new Map;for(Ee=mt;Ee<=lt;Ee++){const qt=Z[Ee]=Re?Ss(Z[Ee]):wo(Z[Ee]);qt.key!=null&&(It.has(qt.key)&&Be("Duplicate keys found during update:",JSON.stringify(qt.key),"Make sure keys are unique."),It.set(qt.key,Ee))}let Xt,_n=0;const Dn=lt-mt+1;let zi=!1,cl=0;const ji=new Array(Dn);for(Ee=0;Ee<Dn;Ee++)ji[Ee]=0;for(Ee=dt;Ee<=ct;Ee++){const qt=F[Ee];if(_n>=Dn){le(qt,we,$e,!0);continue}let sn;if(qt.key!=null)sn=It.get(qt.key);else for(Xt=mt;Xt<=lt;Xt++)if(ji[Xt-mt]===0&&Ni(qt,Z[Xt])){sn=Xt;break}sn===void 0?le(qt,we,$e,!0):(ji[sn-mt]=Ee+1,sn>=cl?cl=sn:zi=!0,M(qt,Z[sn],re,null,we,$e,ke,ze,Re),_n++)}const oa=zi?J9(ji):_c;for(Xt=oa.length-1,Ee=Dn-1;Ee>=0;Ee--){const qt=mt+Ee,sn=Z[qt],un=qt+1<Ye?Z[qt+1].el:Ae;ji[Ee]===0?M(null,sn,re,un,we,$e,ke,ze,Re):zi&&(Xt<0||Ee!==oa[Xt]?Se(sn,re,un,2):Xt--)}}},Se=(F,Z,re,Ae,we=null)=>{const{el:$e,type:ke,transition:ze,children:Re,shapeFlag:Ee}=F;if(Ee&6){Se(F.component.subTree,Z,re,Ae);return}if(Ee&128){F.suspense.move(Z,re,Ae);return}if(Ee&64){ke.move(F,Z,re,fe);return}if(ke===ot){d($e,Z,re);for(let ct=0;ct<Re.length;ct++)Se(Re[ct],Z,re,Ae);d(F.anchor,Z,re);return}if(ke===Vs){$(F,Z,re);return}if(Ae!==2&&Ee&1&&ze)if(Ae===0)ze.beforeEnter($e),d($e,Z,re),Fn(()=>ze.enter($e),we);else{const{leave:ct,delayLeave:lt,afterLeave:dt}=ze,mt=()=>d($e,Z,re),It=()=>{ct($e,()=>{mt(),dt&&dt()})};lt?lt($e,mt,It):It()}else d($e,Z,re)},le=(F,Z,re,Ae=!1,we=!1)=>{const{type:$e,props:ke,ref:ze,children:Re,dynamicChildren:Ee,shapeFlag:Ye,patchFlag:ct,dirs:lt}=F;if(ze!=null&&xm(ze,null,re,F,!0),Ye&256){Z.ctx.deactivate(F);return}const dt=Ye&1&&lt,mt=!Ua(F);let It;if(mt&&(It=ke&&ke.onVnodeBeforeUnmount)&&vo(It,Z,F),Ye&6)Ke(F.component,re,Ae);else{if(Ye&128){F.suspense.unmount(re,Ae);return}dt&&Xi(F,null,Z,"beforeUnmount"),Ye&64?F.type.remove(F,Z,re,we,fe,Ae):Ee&&($e!==ot||ct>0&&ct&64)?ce(Ee,Z,re,!1,!0):($e===ot&&ct&384||!we&&Ye&16)&&ce(Re,Z,re),Ae&&Pe(F)}(mt&&(It=ke&&ke.onVnodeUnmounted)||dt)&&Fn(()=>{It&&vo(It,Z,F),dt&&Xi(F,null,Z,"unmounted")},re)},Pe=F=>{const{type:Z,el:re,anchor:Ae,transition:we}=F;if(Z===ot){F.patchFlag>0&&F.patchFlag&2048&&we&&!we.persisted?F.children.forEach(ke=>{ke.type===bn?h(ke.el):Pe(ke)}):Je(re,Ae);return}if(Z===Vs){q(F);return}const $e=()=>{h(re),we&&!we.persisted&&we.afterLeave&&we.afterLeave()};if(F.shapeFlag&1&&we&&!we.persisted){const{leave:ke,delayLeave:ze}=we,Re=()=>ke(re,$e);ze?ze(F.el,$e,Re):Re()}else $e()},Je=(F,Z)=>{let re;for(;F!==Z;)re=v(F),h(F),F=re;h(Z)},Ke=(F,Z,re)=>{F.type.__hmrId&&O8(F);const{bum:Ae,scope:we,update:$e,subTree:ke,um:ze}=F;Ae&&Os(Ae),we.stop(),$e&&($e.active=!1,le(ke,F,Z,re)),ze&&Fn(ze,Z),Fn(()=>{F.isUnmounted=!0},Z),Z&&Z.pendingBranch&&!Z.isUnmounted&&F.asyncDep&&!F.asyncResolved&&F.suspenseId===Z.pendingId&&(Z.deps--,Z.deps===0&&Z.resolve()),$8(F)},ce=(F,Z,re,Ae=!1,we=!1,$e=0)=>{for(let ke=$e;ke<F.length;ke++)le(F[ke],Z,re,Ae,we)},Ce=F=>F.shapeFlag&6?Ce(F.component.subTree):F.shapeFlag&128?F.suspense.next():v(F.anchor||F.el);let He=!1;const qe=(F,Z,re)=>{F==null?Z._vnode&&le(Z._vnode,null,null,!0):M(Z._vnode||null,F,Z,null,null,null,re),He||(He=!0,PS(),Am(),He=!1),Z._vnode=F},fe={p:M,um:le,m:Se,r:Pe,mt:me,mc:B,pc:Qe,pbc:te,n:Ce,o};let ut,pe;return i&&([ut,pe]=i(fe)),{render:qe,hydrate:ut,createApp:N9(qe,ut)}}function Y_({type:o,props:i},a){return a==="svg"&&o==="foreignObject"||a==="mathml"&&o==="annotation-xml"&&i&&i.encoding&&i.encoding.includes("html")?void 0:a}function Ma({effect:o,update:i},a){o.allowRecurse=i.allowRecurse=a}function MM(o,i){return(!o||o&&!o.pendingBranch)&&i&&!i.persisted}function Dm(o,i,a=!1){const d=o.children,h=i.children;if(st(d)&&st(h))for(let m=0;m<d.length;m++){const g=d[m];let k=h[m];k.shapeFlag&1&&!k.dynamicChildren&&((k.patchFlag<=0||k.patchFlag===32)&&(k=h[m]=Ss(h[m]),k.el=g.el),a||Dm(g,k)),k.type===Ws&&(k.el=g.el),k.type===bn&&!k.el&&(k.el=g.el)}}function J9(o){const i=o.slice(),a=[0];let d,h,m,g,k;const f=o.length;for(d=0;d<f;d++){const C=o[d];if(C!==0){if(h=a[a.length-1],o[h]<C){i[d]=h,a.push(d);continue}for(m=0,g=a.length-1;m<g;)k=m+g>>1,o[a[k]]<C?m=k+1:g=k;C<o[a[m]]&&(m>0&&(i[d]=a[m-1]),a[m]=d)}}for(m=a.length,g=a[m-1];m-- >0;)a[m]=g,g=i[g];return a}function BM(o){const i=o.subTree.component;if(i)return i.asyncDep&&!i.asyncResolved?i:BM(i)}const X9=o=>o.__isTeleport,Ec=o=>o&&(o.disabled||o.disabled===""),XS=o=>typeof SVGElement!="undefined"&&o instanceof SVGElement,e2=o=>typeof MathMLElement=="function"&&o instanceof MathMLElement,jv=(o,i)=>{const a=o&&o.to;if(Yt(a))if(i){const d=i(a);return d||Be(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),d}else return Be("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!Ec(o)&&Be(`Invalid Teleport target: ${a}`),a},eH={name:"Teleport",__isTeleport:!0,process(o,i,a,d,h,m,g,k,f,C){const{mc:y,pc:w,pbc:v,o:{insert:E,querySelector:S,createText:M,createComment:N}}=C,R=Ec(i.props);let{shapeFlag:L,children:z,dynamicChildren:$}=i;if($s&&(f=!1,$=null),o==null){const q=i.el=N("teleport start"),J=i.anchor=N("teleport end");E(q,a,d),E(J,a,d);const K=i.target=jv(i.props,S),ee=i.targetAnchor=M("");K?(E(ee,K),g==="svg"||XS(K)?g="svg":(g==="mathml"||e2(K))&&(g="mathml")):R||Be("Invalid Teleport target on mount:",K,`(${typeof K})`);const B=(U,te)=>{L&16&&y(z,U,te,h,m,g,k,f)};R?B(a,J):K&&B(K,ee)}else{i.el=o.el;const q=i.anchor=o.anchor,J=i.target=o.target,K=i.targetAnchor=o.targetAnchor,ee=Ec(o.props),B=ee?a:J,U=ee?q:K;if(g==="svg"||XS(J)?g="svg":(g==="mathml"||e2(J))&&(g="mathml"),$?(v(o.dynamicChildren,$,B,h,m,g,k),Dm(o,i,!0)):f||w(o,i,B,U,h,m,g,k,!1),R)ee?i.props&&o.props&&i.props.to!==o.props.to&&(i.props.to=o.props.to):jf(i,a,q,C,1);else if((i.props&&i.props.to)!==(o.props&&o.props.to)){const te=i.target=jv(i.props,S);te?jf(i,te,null,C,0):Be("Invalid Teleport target on update:",J,`(${typeof J})`)}else ee&&jf(i,J,K,C,1)}NM(i)},remove(o,i,a,d,{um:h,o:{remove:m}},g){const{shapeFlag:k,children:f,anchor:C,targetAnchor:y,target:w,props:v}=o;if(w&&m(y),g&&m(C),k&16){const E=g||!Ec(v);for(let S=0;S<f.length;S++){const M=f[S];h(M,i,a,E,!!M.dynamicChildren)}}},move:jf,hydrate:tH};function jf(o,i,a,{o:{insert:d},m:h},m=2){m===0&&d(o.targetAnchor,i,a);const{el:g,anchor:k,shapeFlag:f,children:C,props:y}=o,w=m===2;if(w&&d(g,i,a),(!w||Ec(y))&&f&16)for(let v=0;v<C.length;v++)h(C[v],i,a,2);w&&d(k,i,a)}function tH(o,i,a,d,h,m,{o:{nextSibling:g,parentNode:k,querySelector:f}},C){const y=i.target=jv(i.props,f);if(y){const w=y._lpa||y.firstChild;if(i.shapeFlag&16)if(Ec(i.props))i.anchor=C(g(o),i,k(o),a,d,h,m),i.targetAnchor=w;else{i.anchor=g(o);let v=w;for(;v;)if(v=g(v),v&&v.nodeType===8&&v.data==="teleport anchor"){i.targetAnchor=v,y._lpa=i.targetAnchor&&g(i.targetAnchor);break}C(w,i,y,a,d,h,m)}NM(i)}return i.anchor&&g(i.anchor)}const Yo=eH;function NM(o){const i=o.ctx;if(i&&i.ut){let a=o.children[0].el;for(;a&&a!==o.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",i.uid),a=a.nextSibling;i.ut()}}const ot=Symbol.for("v-fgt"),Ws=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Vs=Symbol.for("v-stc"),qu=[];let Co=null;function H(o=!1){qu.push(Co=o?null:[])}function OM(){qu.pop(),Co=qu[qu.length-1]||null}let Qa=1;function $v(o){Qa+=o}function PM(o){return o.dynamicChildren=Qa>0?Co||_c:null,OM(),Qa>0&&Co&&Co.push(o),o}function ne(o,i,a,d,h,m){return PM(O(o,i,a,d,h,m,!0))}function Le(o,i,a,d,h){return PM(Ue(o,i,a,d,h,!0))}function Kr(o){return o?o.__v_isVNode===!0:!1}function Ni(o,i){return i.shapeFlag&6&&uc.has(i.type)?(o.shapeFlag&=-257,i.shapeFlag&=-513,!1):o.type===i.type&&o.key===i.key}let Vv;function nH(o){Vv=o}const oH=(...o)=>iH(...Vv?Vv(o,cn):o),ig="__vInternal",LM=({key:o})=>o!=null?o:null,om=({ref:o,ref_key:i,ref_for:a})=>(typeof o=="number"&&(o=""+o),o!=null?Yt(o)||Vt(o)||pt(o)?{i:cn,r:o,k:i,f:!!a}:o:null);function O(o,i=null,a=null,d=0,h=null,m=o===ot?0:1,g=!1,k=!1){const f={__v_isVNode:!0,__v_skip:!0,type:o,props:i,key:i&&LM(i),ref:i&&om(i),scopeId:Xm,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:d,dynamicProps:h,dynamicChildren:null,appContext:null,ctx:cn};return k?(cA(f,a),m&128&&o.normalize(f)):a&&(f.shapeFlag|=Yt(a)?8:16),f.key!==f.key&&Be("VNode created with invalid key (NaN). VNode type:",f.type),Qa>0&&!g&&Co&&(f.patchFlag>0||m&6)&&f.patchFlag!==32&&Co.push(f),f}const Ue=oH;function iH(o,i=null,a=null,d=0,h=null,m=!1){if((!o||o===Xw)&&(o||Be(`Invalid vnode type when creating vnode: ${o}.`),o=bn),Kr(o)){const k=fi(o,i,!0);return a&&cA(k,a),Qa>0&&!m&&Co&&(k.shapeFlag&6?Co[Co.indexOf(o)]=k:Co.push(k)),k.patchFlag|=-2,k}if(HM(o)&&(o=o.__vccOpts),i){i=Un(i);let{class:k,style:f}=i;k&&!Yt(k)&&(i.class=We(k)),Nt(f)&&(th(f)&&!st(f)&&(f=Ut({},f)),i.style=Ln(f))}const g=Yt(o)?1:X5(o)?128:X9(o)?64:Nt(o)?4:pt(o)?2:0;return g&4&&th(o)&&(o=kt(o),Be("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,o)),O(o,i,a,d,h,g,m,!0)}function Un(o){return o?th(o)||ig in o?Ut({},o):o:null}function fi(o,i,a=!1){const{props:d,ref:h,patchFlag:m,children:g}=o,k=i?bt(d||{},i):d;return{__v_isVNode:!0,__v_skip:!0,type:o.type,props:k,key:k&&LM(k),ref:i&&i.ref?a&&h?st(h)?h.concat(om(i)):[h,om(i)]:om(i):h,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:m===-1&&st(g)?g.map(RM):g,target:o.target,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:i&&o.type!==ot?m===-1?16:m|16:m,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:o.transition,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&fi(o.ssContent),ssFallback:o.ssFallback&&fi(o.ssFallback),el:o.el,anchor:o.anchor,ctx:o.ctx,ce:o.ce}}function RM(o){const i=fi(o);return st(o.children)&&(i.children=o.children.map(RM)),i}function rt(o=" ",i=0){return Ue(Ws,null,o,i)}function rH(o,i){const a=Ue(Vs,null,o);return a.staticCount=i,a}function Ne(o="",i=!1){return i?(H(),Le(bn,null,o)):Ue(bn,null,o)}function wo(o){return o==null||typeof o=="boolean"?Ue(bn):st(o)?Ue(ot,null,o.slice()):typeof o=="object"?Ss(o):Ue(Ws,null,String(o))}function Ss(o){return o.el===null&&o.patchFlag!==-1||o.memo?o:fi(o)}function cA(o,i){let a=0;const{shapeFlag:d}=o;if(i==null)i=null;else if(st(i))a=16;else if(typeof i=="object")if(d&65){const h=i.default;h&&(h._c&&(h._d=!1),cA(o,h()),h._c&&(h._d=!0));return}else{a=32;const h=i._;!h&&!(ig in i)?i._ctx=cn:h===3&&cn&&(cn.slots._===1?i._=1:(i._=2,o.patchFlag|=1024))}else pt(i)?(i={default:i,_ctx:cn},a=32):(i=String(i),d&64?(a=16,i=[rt(i)]):a=8);o.children=i,o.shapeFlag|=a}function bt(...o){const i={};for(let a=0;a<o.length;a++){const d=o[a];for(const h in d)if(h==="class")i.class!==d.class&&(i.class=We([i.class,d.class]));else if(h==="style")i.style=Ln([i.style,d.style]);else if(qc(h)){const m=i[h],g=d[h];g&&m!==g&&!(st(m)&&m.includes(g))&&(i[h]=m?[].concat(m,g):g)}else h!==""&&(i[h]=d[h])}return i}function vo(o,i,a,d=null){jo(o,i,7,[a,d])}const sH=vM();let aH=0;function zM(o,i,a){const d=o.type,h=(i?i.appContext:o.appContext)||sH,m={uid:aH++,vnode:o,type:d,parent:i,appContext:h,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:i?i.provides:Object.create(h.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:CM(d,h),emitsOptions:Z5(d,h),emit:null,emitted:null,propsDefaults:jt,inheritAttrs:d.inheritAttrs,ctx:jt,data:jt,props:jt,attrs:jt,slots:jt,refs:jt,setupState:jt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx=h9(m),m.root=i?i.root:m,m.emit=U8.bind(null,m),o.ce&&o.ce(m),m}let An=null;const To=()=>An||cn;let Sm,Fv;{const o=Ow(),i=(a,d)=>{let h;return(h=o[a])||(h=o[a]=[]),h.push(d),m=>{h.length>1?h.forEach(g=>g(m)):h[0](m)}};Sm=i("__VUE_INSTANCE_SETTERS__",a=>An=a),Fv=i("__VUE_SSR_SETTERS__",a=>_h=a)}const Za=o=>{const i=An;return Sm(o),o.scope.on(),()=>{o.scope.off(),Sm(i)}},Hv=()=>{An&&An.scope.off(),Sm(null)},lH=qo("slot,component");function Uv(o,{isNativeTag:i}){(lH(o)||i(o))&&Be("Do not use built-in or reserved HTML elements as component id: "+o)}function jM(o){return o.vnode.shapeFlag&4}let _h=!1;function $M(o,i=!1){i&&Fv(i);const{props:a,children:d}=o.vnode,h=jM(o);O9(o,a,h,i),H9(o,d);const m=h?cH(o,i):void 0;return i&&Fv(!1),m}function cH(o,i){var a;const d=o.type;{if(d.name&&Uv(d.name,o.appContext.config),d.components){const m=Object.keys(d.components);for(let g=0;g<m.length;g++)Uv(m[g],o.appContext.config)}if(d.directives){const m=Object.keys(d.directives);for(let g=0;g<m.length;g++)sM(m[g])}d.compilerOptions&&dA()&&Be('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}o.accessCache=Object.create(null),o.proxy=tr(new Proxy(o.ctx,Wu)),p9(o);const{setup:h}=d;if(h){const m=o.setupContext=h.length>1?FM(o):null,g=Za(o);Qs();const k=ir(h,o,0,[Pa(o.props),m]);if(Zs(),g(),Um(k)){if(k.then(Hv,Hv),i)return k.then(f=>{Wv(o,f,i)}).catch(f=>{Js(f,o,0)});if(o.asyncDep=k,!o.suspense){const f=(a=d.name)!=null?a:"Anonymous";Be(`Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Wv(o,k,i)}else VM(o,i)}function Wv(o,i,a){pt(i)?o.type.__ssrInlineRender?o.ssrRender=i:o.render=i:Nt(i)?(Kr(i)&&Be("setup() should not return VNodes directly - return a render function instead."),o.devtoolsRawSetupState=i,o.setupState=qw(i),f9(o)):i!==void 0&&Be(`setup() should return an object. Received: ${i===null?"null":typeof i}`),VM(o,a)}let Gu,qv;function dH(o){Gu=o,qv=i=>{i.render._rc&&(i.withProxy=new Proxy(i.ctx,u9))}}const dA=()=>!Gu;function VM(o,i,a){const d=o.type;if(!o.render){if(!i&&Gu&&!d.render){const h=d.template||aA(o).template;if(h){Lr(o,"compile");const{isCustomElement:m,compilerOptions:g}=o.appContext.config,{delimiters:k,compilerOptions:f}=d,C=Ut(Ut({isCustomElement:m,delimiters:k},g),f);d.render=Gu(h,C),Rr(o,"compile")}}o.render=d.render||Hn,qv&&qv(o)}{const h=Za(o);Qs();try{T9(o)}finally{Zs(),h()}}!d.render&&o.render===Hn&&!i&&(!Gu&&d.template?Be('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):Be("Component is missing template or render function."))}function uH(o){return o.attrsProxy||(o.attrsProxy=new Proxy(o.attrs,{get(i,a){return Cm(),Xn(o,"get","$attrs"),i[a]},set(){return Be("setupContext.attrs is readonly."),!1},deleteProperty(){return Be("setupContext.attrs is readonly."),!1}}))}function hH(o){return o.slotsProxy||(o.slotsProxy=new Proxy(o.slots,{get(i,a){return Xn(o,"get","$slots"),i[a]}}))}function FM(o){return Object.freeze({get attrs(){return uH(o)},get slots(){return hH(o)},get emit(){return(a,...d)=>o.emit(a,...d)},expose:a=>{if(o.exposed&&Be("expose() should be called only once per setup()."),a!=null){let d=typeof a;d==="object"&&(st(a)?d="array":Vt(a)&&(d="ref")),d!=="object"&&Be(`expose() should be passed a plain object, received ${d}.`)}o.exposed=a||{}}})}function rg(o){if(o.exposed)return o.exposeProxy||(o.exposeProxy=new Proxy(qw(tr(o.exposed)),{get(i,a){if(a in i)return i[a];if(a in Wa)return Wa[a](o)},has(i,a){return a in i||a in Wa}}))}const pH=/(?:^|[-_])(\w)/g,fH=o=>o.replace(pH,i=>i.toUpperCase()).replace(/[-_]/g,"");function ch(o,i=!0){return pt(o)?o.displayName||o.name:o.name||i&&o.__name}function sg(o,i,a=!1){let d=ch(i);if(!d&&i.__file){const h=i.__file.match(/([^/\\]+)\.\w+$/);h&&(d=h[1])}if(!d&&o&&o.parent){const h=m=>{for(const g in m)if(m[g]===i)return g};d=h(o.components||o.parent.type.components)||h(o.appContext.components)}return d?fH(d):a?"App":"Anonymous"}function HM(o){return pt(o)&&"__vccOpts"in o}const Y=(o,i)=>{const a=p8(o,i,_h);{const d=To();d&&d.appContext.config.warnRecursiveComputed&&(a._warnRecursive=!0)}return a};function mH(o,i,a=jt){const d=To();if(!d)return Be("useModel() called without active instance."),Me();if(!d.propsOptions[0][i])return Be(`useModel() called with prop "${i}" which is not declared.`),Me();const h=ro(i),m=Qn(i),g=F5((f,C)=>{let y;return iM(()=>{const w=o[i];Li(y,w)&&(y=w,C())}),{get(){return f(),a.get?a.get(y):y},set(w){const v=d.vnode.props;!(v&&(i in v||h in v||m in v)&&(`onUpdate:${i}`in v||`onUpdate:${h}`in v||`onUpdate:${m}`in v))&&Li(w,y)&&(y=w,C()),d.emit(`update:${i}`,a.set?a.set(w):w)}}}),k=i==="modelValue"?"modelModifiers":`${i}Modifiers`;return g[Symbol.iterator]=()=>{let f=0;return{next(){return f<2?{value:f++?o[k]||{}:g,done:!1}:{done:!0}}}},g}function Ct(o,i,a){const d=arguments.length;return d===2?Nt(i)&&!st(i)?Kr(i)?Ue(o,null,[i]):Ue(o,i):Ue(o,null,i):(d>3?a=Array.prototype.slice.call(arguments,2):d===3&&Kr(a)&&(a=[a]),Ue(o,i,a))}function UM(){if(typeof window=="undefined")return;const o={style:"color:#3ba776"},i={style:"color:#1677ff"},a={style:"color:#f5222d"},d={style:"color:#eb2f96"},h={header(w){return Nt(w)?w.__isVue?["div",o,"VueInstance"]:Vt(w)?["div",{},["span",o,y(w)],"<",k(w.value),">"]:zo(w)?["div",{},["span",o,js(w)?"ShallowReactive":"Reactive"],"<",k(w),`>${Gr(w)?" (readonly)":""}`]:Gr(w)?["div",{},["span",o,js(w)?"ShallowReadonly":"Readonly"],"<",k(w),">"]:null:null},hasBody(w){return w&&w.__isVue},body(w){if(w&&w.__isVue)return["div",{},...m(w.$)]}};function m(w){const v=[];w.type.props&&w.props&&v.push(g("props",kt(w.props))),w.setupState!==jt&&v.push(g("setup",w.setupState)),w.data!==jt&&v.push(g("data",kt(w.data)));const E=f(w,"computed");E&&v.push(g("computed",E));const S=f(w,"inject");return S&&v.push(g("injected",S)),v.push(["div",{},["span",{style:d.style+";opacity:0.66"},"$ (internal): "],["object",{object:w}]]),v}function g(w,v){return v=Ut({},v),Object.keys(v).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},w],["div",{style:"padding-left:1.25em"},...Object.keys(v).map(E=>["div",{},["span",d,E+": "],k(v[E],!1)])]]:["span",{}]}function k(w,v=!0){return typeof w=="number"?["span",i,w]:typeof w=="string"?["span",a,JSON.stringify(w)]:typeof w=="boolean"?["span",d,w]:Nt(w)?["object",{object:v?kt(w):w}]:["span",a,String(w)]}function f(w,v){const E=w.type;if(pt(E))return;const S={};for(const M in w.ctx)C(E,M,v)&&(S[M]=w.ctx[M]);return S}function C(w,v,E){const S=w[E];if(st(S)&&S.includes(v)||Nt(S)&&v in S||w.extends&&C(w.extends,v,E)||w.mixins&&w.mixins.some(M=>C(M,v,E)))return!0}function y(w){return js(w)?"ShallowRef":w.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(h):window.devtoolsFormatters=[h]}function gH(o,i,a,d){const h=a[d];if(h&&WM(h,o))return h;const m=i();return m.memo=o.slice(),a[d]=m}function WM(o,i){const a=o.memo;if(a.length!=i.length)return!1;for(let d=0;d<a.length;d++)if(Li(a[d],i[d]))return!1;return Qa>0&&Co&&Co.push(o),!0}const Gv="3.4.21",Jn=Be,bH=Zm,kH=Bi,_H=Qw,vH={createComponentInstance:zM,setupComponent:$M,renderComponentRoot:nm,setCurrentRenderingInstance:sh,isVNode:Kr,normalizeVNode:wo},wH=vH,AH=null,CH=null,yH=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const EH="http://www.w3.org/2000/svg",xH="http://www.w3.org/1998/Math/MathML",Is=typeof document!="undefined"?document:null,t2=Is&&Is.createElement("template"),TH={insert:(o,i,a)=>{i.insertBefore(o,a||null)},remove:o=>{const i=o.parentNode;i&&i.removeChild(o)},createElement:(o,i,a,d)=>{const h=i==="svg"?Is.createElementNS(EH,o):i==="mathml"?Is.createElementNS(xH,o):Is.createElement(o,a?{is:a}:void 0);return o==="select"&&d&&d.multiple!=null&&h.setAttribute("multiple",d.multiple),h},createText:o=>Is.createTextNode(o),createComment:o=>Is.createComment(o),setText:(o,i)=>{o.nodeValue=i},setElementText:(o,i)=>{o.textContent=i},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>Is.querySelector(o),setScopeId(o,i){o.setAttribute(i,"")},insertStaticContent(o,i,a,d,h,m){const g=a?a.previousSibling:i.lastChild;if(h&&(h===m||h.nextSibling))for(;i.insertBefore(h.cloneNode(!0),a),!(h===m||!(h=h.nextSibling)););else{t2.innerHTML=d==="svg"?`<svg>${o}</svg>`:d==="mathml"?`<math>${o}</math>`:o;const k=t2.content;if(d==="svg"||d==="mathml"){const f=k.firstChild;for(;f.firstChild;)k.appendChild(f.firstChild);k.removeChild(f)}i.insertBefore(k,a)}return[g?g.nextSibling:i.firstChild,a?a.previousSibling:i.lastChild]}},Cs="transition",Du="animation",Sc=Symbol("_vtc"),Yc=(o,{slots:i})=>Ct(aM,GM(o),i);Yc.displayName="Transition";const qM={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DH=Yc.props=Ut({},oA,qM),Ba=(o,i=[])=>{st(o)?o.forEach(a=>a(...i)):o&&o(...i)},n2=o=>o?st(o)?o.some(i=>i.length>1):o.length>1:!1;function GM(o){const i={};for(const ae in o)ae in qM||(i[ae]=o[ae]);if(o.css===!1)return i;const{name:a="v",type:d,duration:h,enterFromClass:m=`${a}-enter-from`,enterActiveClass:g=`${a}-enter-active`,enterToClass:k=`${a}-enter-to`,appearFromClass:f=m,appearActiveClass:C=g,appearToClass:y=k,leaveFromClass:w=`${a}-leave-from`,leaveActiveClass:v=`${a}-leave-active`,leaveToClass:E=`${a}-leave-to`}=o,S=SH(h),M=S&&S[0],N=S&&S[1],{onBeforeEnter:R,onEnter:L,onEnterCancelled:z,onLeave:$,onLeaveCancelled:q,onBeforeAppear:J=R,onAppear:K=L,onAppearCancelled:ee=z}=i,B=(ae,be,ye)=>{xs(ae,be?y:k),xs(ae,be?C:g),ye&&ye()},U=(ae,be)=>{ae._isLeaving=!1,xs(ae,w),xs(ae,E),xs(ae,v),be&&be()},te=ae=>(be,ye)=>{const me=ae?K:L,ue=()=>B(be,ae,ye);Ba(me,[be,ue]),o2(()=>{xs(be,ae?f:m),zr(be,ae?y:k),n2(me)||i2(be,d,M,ue)})};return Ut(i,{onBeforeEnter(ae){Ba(R,[ae]),zr(ae,m),zr(ae,g)},onBeforeAppear(ae){Ba(J,[ae]),zr(ae,f),zr(ae,C)},onEnter:te(!1),onAppear:te(!0),onLeave(ae,be){ae._isLeaving=!0;const ye=()=>U(ae,be);zr(ae,w),YM(),zr(ae,v),o2(()=>{!ae._isLeaving||(xs(ae,w),zr(ae,E),n2($)||i2(ae,d,N,ye))}),Ba($,[ae,ye])},onEnterCancelled(ae){B(ae,!1),Ba(z,[ae])},onAppearCancelled(ae){B(ae,!0),Ba(ee,[ae])},onLeaveCancelled(ae){U(ae),Ba(q,[ae])}})}function SH(o){if(o==null)return null;if(Nt(o))return[Q_(o.enter),Q_(o.leave)];{const i=Q_(o);return[i,i]}}function Q_(o){const i=vm(o);return Gw(i,"<transition> explicit duration"),i}function zr(o,i){i.split(/\s+/).forEach(a=>a&&o.classList.add(a)),(o[Sc]||(o[Sc]=new Set)).add(i)}function xs(o,i){i.split(/\s+/).forEach(d=>d&&o.classList.remove(d));const a=o[Sc];a&&(a.delete(i),a.size||(o[Sc]=void 0))}function o2(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let IH=0;function i2(o,i,a,d){const h=o._endId=++IH,m=()=>{h===o._endId&&d()};if(a)return setTimeout(m,a);const{type:g,timeout:k,propCount:f}=KM(o,i);if(!g)return d();const C=g+"end";let y=0;const w=()=>{o.removeEventListener(C,v),m()},v=E=>{E.target===o&&++y>=f&&w()};setTimeout(()=>{y<f&&w()},k+1),o.addEventListener(C,v)}function KM(o,i){const a=window.getComputedStyle(o),d=S=>(a[S]||"").split(", "),h=d(`${Cs}Delay`),m=d(`${Cs}Duration`),g=r2(h,m),k=d(`${Du}Delay`),f=d(`${Du}Duration`),C=r2(k,f);let y=null,w=0,v=0;i===Cs?g>0&&(y=Cs,w=g,v=m.length):i===Du?C>0&&(y=Du,w=C,v=f.length):(w=Math.max(g,C),y=w>0?g>C?Cs:Du:null,v=y?y===Cs?m.length:f.length:0);const E=y===Cs&&/\b(transform|all)(,|$)/.test(d(`${Cs}Property`).toString());return{type:y,timeout:w,propCount:v,hasTransform:E}}function r2(o,i){for(;o.length<i.length;)o=o.concat(o);return Math.max(...i.map((a,d)=>s2(a)+s2(o[d])))}function s2(o){return o==="auto"?0:Number(o.slice(0,-1).replace(",","."))*1e3}function YM(){return document.body.offsetHeight}function MH(o,i,a){const d=o[Sc];d&&(i=(i?[i,...d]:[...d]).join(" ")),i==null?o.removeAttribute("class"):a?o.setAttribute("class",i):o.className=i}const Im=Symbol("_vod"),QM=Symbol("_vsh"),vh={beforeMount(o,{value:i},{transition:a}){o[Im]=o.style.display==="none"?"":o.style.display,a&&i?a.beforeEnter(o):Su(o,i)},mounted(o,{value:i},{transition:a}){a&&i&&a.enter(o)},updated(o,{value:i,oldValue:a},{transition:d}){!i!=!a&&(d?i?(d.beforeEnter(o),Su(o,!0),d.enter(o)):d.leave(o,()=>{Su(o,!1)}):Su(o,i))},beforeUnmount(o,{value:i}){Su(o,i)}};vh.name="show";function Su(o,i){o.style.display=i?o[Im]:"none",o[QM]=!i}function BH(){vh.getSSRProps=({value:o})=>{if(!o)return{style:{display:"none"}}}}const ZM=Symbol("CSS_VAR_TEXT");function NH(o){const i=To();if(!i){Jn("useCssVars is called without current active component instance.");return}const a=i.ut=(h=o(i.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${i.uid}"]`)).forEach(m=>Yv(m,h))};i.getCssVars=()=>o(i.proxy);const d=()=>{const h=o(i.proxy);Kv(i.subTree,h),a(h)};oM(d),Ft(()=>{const h=new MutationObserver(d);h.observe(i.subTree.el.parentNode,{childList:!0}),kh(()=>h.disconnect())})}function Kv(o,i){if(o.shapeFlag&128){const a=o.suspense;o=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{Kv(a.activeBranch,i)})}for(;o.component;)o=o.component.subTree;if(o.shapeFlag&1&&o.el)Yv(o.el,i);else if(o.type===ot)o.children.forEach(a=>Kv(a,i));else if(o.type===Vs){let{el:a,anchor:d}=o;for(;a&&(Yv(a,i),a!==d);)a=a.nextSibling}}function Yv(o,i){if(o.nodeType===1){const a=o.style;let d="";for(const h in i)a.setProperty(`--${h}`,i[h]),d+=`--${h}: ${i[h]};`;a[ZM]=d}}const OH=/(^|;)\s*display\s*:/;function PH(o,i,a){const d=o.style,h=Yt(a);let m=!1;if(a&&!h){if(i)if(Yt(i))for(const g of i.split(";")){const k=g.slice(0,g.indexOf(":")).trim();a[k]==null&&im(d,k,"")}else for(const g in i)a[g]==null&&im(d,g,"");for(const g in a)g==="display"&&(m=!0),im(d,g,a[g])}else if(h){if(i!==a){const g=d[ZM];g&&(a+=";"+g),d.cssText=a,m=OH.test(a)}}else i&&o.removeAttribute("style");Im in o&&(o[Im]=m?d.display:"",o[QM]&&(d.display="none"))}const LH=/[^\\];\s*$/,a2=/\s*!important$/;function im(o,i,a){if(st(a))a.forEach(d=>im(o,i,d));else if(a==null&&(a=""),LH.test(a)&&Jn(`Unexpected semicolon at the end of '${i}' style value: '${a}'`),i.startsWith("--"))o.setProperty(i,a);else{const d=RH(o,i);a2.test(a)?o.setProperty(Qn(d),a.replace(a2,""),"important"):o[d]=a}}const l2=["Webkit","Moz","ms"],Z_={};function RH(o,i){const a=Z_[i];if(a)return a;let d=ro(i);if(d!=="filter"&&d in o)return Z_[i]=d;d=Hs(d);for(let h=0;h<l2.length;h++){const m=l2[h]+d;if(m in o)return Z_[i]=m}return i}const c2="http://www.w3.org/1999/xlink";function zH(o,i,a,d,h){if(d&&i.startsWith("xlink:"))a==null?o.removeAttributeNS(c2,i.slice(6,i.length)):o.setAttributeNS(c2,i,a);else{const m=j7(i);a==null||m&&!Pw(a)?o.removeAttribute(i):o.setAttribute(i,m?"":a)}}function jH(o,i,a,d,h,m,g){if(i==="innerHTML"||i==="textContent"){d&&g(d,h,m),o[i]=a==null?"":a;return}const k=o.tagName;if(i==="value"&&k!=="PROGRESS"&&!k.includes("-")){const C=k==="OPTION"?o.getAttribute("value")||"":o.value,y=a==null?"":a;(C!==y||!("_value"in o))&&(o.value=y),a==null&&o.removeAttribute(i),o._value=a;return}let f=!1;if(a===""||a==null){const C=typeof o[i];C==="boolean"?a=Pw(a):a==null&&C==="string"?(a="",f=!0):C==="number"&&(a=0,f=!0)}try{o[i]=a}catch(C){f||Jn(`Failed setting prop "${i}" on <${k.toLowerCase()}>: value ${a} is invalid.`,C)}f&&o.removeAttribute(i)}function Fr(o,i,a,d){o.addEventListener(i,a,d)}function $H(o,i,a,d){o.removeEventListener(i,a,d)}const d2=Symbol("_vei");function VH(o,i,a,d,h=null){const m=o[d2]||(o[d2]={}),g=m[i];if(d&&g)g.value=d;else{const[k,f]=FH(i);if(d){const C=m[i]=WH(d,h);Fr(o,k,C,f)}else g&&($H(o,k,g,f),m[i]=void 0)}}const u2=/(?:Once|Passive|Capture)$/;function FH(o){let i;if(u2.test(o)){i={};let d;for(;d=o.match(u2);)o=o.slice(0,o.length-d[0].length),i[d[0].toLowerCase()]=!0}return[o[2]===":"?o.slice(3):Qn(o.slice(2)),i]}let J_=0;const HH=Promise.resolve(),UH=()=>J_||(HH.then(()=>J_=0),J_=Date.now());function WH(o,i){const a=d=>{if(!d._vts)d._vts=Date.now();else if(d._vts<=a.attached)return;jo(qH(d,a.value),i,5,[d])};return a.value=o,a.attached=UH(),a}function qH(o,i){if(st(i)){const a=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{a.call(o),o._stopped=!0},i.map(d=>h=>!h._stopped&&d&&d(h))}else return i}const h2=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&o.charCodeAt(2)>96&&o.charCodeAt(2)<123,GH=(o,i,a,d,h,m,g,k,f)=>{const C=h==="svg";i==="class"?MH(o,d,C):i==="style"?PH(o,a,d):qc(i)?km(i)||VH(o,i,a,d,g):(i[0]==="."?(i=i.slice(1),!0):i[0]==="^"?(i=i.slice(1),!1):KH(o,i,d,C))?jH(o,i,d,m,g,k,f):(i==="true-value"?o._trueValue=d:i==="false-value"&&(o._falseValue=d),zH(o,i,d,C))};function KH(o,i,a,d){if(d)return!!(i==="innerHTML"||i==="textContent"||i in o&&h2(i)&&pt(a));if(i==="spellcheck"||i==="draggable"||i==="translate"||i==="form"||i==="list"&&o.tagName==="INPUT"||i==="type"&&o.tagName==="TEXTAREA")return!1;if(i==="width"||i==="height"){const h=o.tagName;if(h==="IMG"||h==="VIDEO"||h==="CANVAS"||h==="SOURCE")return!1}return h2(i)&&Yt(a)?!1:i in o}/*! #__NO_SIDE_EFFECTS__ */function JM(o,i){const a=Fe(o);class d extends ag{constructor(m){super(a,m,i)}}return d.def=a,d}/*! #__NO_SIDE_EFFECTS__ */const YH=o=>JM(o,cB),QH=typeof HTMLElement!="undefined"?HTMLElement:class{};class ag extends QH{constructor(i,a={},d){super(),this._def=i,this._props=a,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&d?d(this._createVNode(),this.shadowRoot):(this.shadowRoot&&Jn("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."),this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),so(()=>{this._connected||(Qv(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let d=0;d<this.attributes.length;d++)this._setAttr(this.attributes[d].name);this._ob=new MutationObserver(d=>{for(const h of d)this._setAttr(h.attributeName)}),this._ob.observe(this,{attributes:!0});const i=(d,h=!1)=>{const{props:m,styles:g}=d;let k;if(m&&!st(m))for(const f in m){const C=m[f];(C===Number||C&&C.type===Number)&&(f in this._props&&(this._props[f]=vm(this._props[f])),(k||(k=Object.create(null)))[ro(f)]=!0)}this._numberProps=k,h&&this._resolveProps(d),this._applyStyles(g),this._update()},a=this._def.__asyncLoader;a?a().then(d=>i(d,!0)):i(this._def)}_resolveProps(i){const{props:a}=i,d=st(a)?a:Object.keys(a||{});for(const h of Object.keys(this))h[0]!=="_"&&d.includes(h)&&this._setProp(h,this[h],!0,!1);for(const h of d.map(ro))Object.defineProperty(this,h,{get(){return this._getProp(h)},set(m){this._setProp(h,m)}})}_setAttr(i){let a=this.getAttribute(i);const d=ro(i);this._numberProps&&this._numberProps[d]&&(a=vm(a)),this._setProp(d,a,!1)}_getProp(i){return this._props[i]}_setProp(i,a,d=!0,h=!0){a!==this._props[i]&&(this._props[i]=a,h&&this._instance&&this._update(),d&&(a===!0?this.setAttribute(Qn(i),""):typeof a=="string"||typeof a=="number"?this.setAttribute(Qn(i),a+""):a||this.removeAttribute(Qn(i))))}_update(){Qv(this._createVNode(),this.shadowRoot)}_createVNode(){const i=Ue(this._def,Ut({},this._props));return this._instance||(i.ce=a=>{this._instance=a,a.isCE=!0,a.ceReload=m=>{this._styles&&(this._styles.forEach(g=>this.shadowRoot.removeChild(g)),this._styles.length=0),this._applyStyles(m),this._instance=null,this._update()};const d=(m,g)=>{this.dispatchEvent(new CustomEvent(m,{detail:g}))};a.emit=(m,...g)=>{d(m,g),Qn(m)!==m&&d(Qn(m),g)};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof ag){a.parent=h._instance,a.provides=h._instance.provides;break}}),i}_applyStyles(i){i&&i.forEach(a=>{const d=document.createElement("style");d.textContent=a,this.shadowRoot.appendChild(d),(this._styles||(this._styles=[])).push(d)})}}function ZH(o="$style"){{const i=To();if(!i)return Jn("useCssModule must be called inside setup()"),jt;const a=i.type.__cssModules;if(!a)return Jn("Current instance does not have CSS modules injected."),jt;const d=a[o];return d||(Jn(`Current instance does not have CSS module named "${o}".`),jt)}}const XM=new WeakMap,eB=new WeakMap,Mm=Symbol("_moveCb"),p2=Symbol("_enterCb"),tB={name:"TransitionGroup",props:Ut({},DH,{tag:String,moveClass:String}),setup(o,{slots:i}){const a=To(),d=nA();let h,m;return og(()=>{if(!h.length)return;const g=o.moveClass||`${o.name||"v"}-move`;if(!oU(h[0].el,a.vnode.el,g))return;h.forEach(eU),h.forEach(tU);const k=h.filter(nU);YM(),k.forEach(f=>{const C=f.el,y=C.style;zr(C,g),y.transform=y.webkitTransform=y.transitionDuration="";const w=C[Mm]=v=>{v&&v.target!==C||(!v||/transform$/.test(v.propertyName))&&(C.removeEventListener("transitionend",w),C[Mm]=null,xs(C,g))};C.addEventListener("transitionend",w)})}),()=>{const g=kt(o),k=GM(g);let f=g.tag||ot;h=m,m=i.default?tg(i.default()):[];for(let C=0;C<m.length;C++){const y=m[C];y.key!=null?Ya(y,Dc(y,k,d,a)):Jn("<TransitionGroup> children must be keyed.")}if(h)for(let C=0;C<h.length;C++){const y=h[C];Ya(y,Dc(y,k,d,a)),XM.set(y,y.el.getBoundingClientRect())}return Ue(f,null,m)}}},JH=o=>delete o.mode;tB.props;const XH=tB;function eU(o){const i=o.el;i[Mm]&&i[Mm](),i[p2]&&i[p2]()}function tU(o){eB.set(o,o.el.getBoundingClientRect())}function nU(o){const i=XM.get(o),a=eB.get(o),d=i.left-a.left,h=i.top-a.top;if(d||h){const m=o.el.style;return m.transform=m.webkitTransform=`translate(${d}px,${h}px)`,m.transitionDuration="0s",o}}function oU(o,i,a){const d=o.cloneNode(),h=o[Sc];h&&h.forEach(k=>{k.split(/\s+/).forEach(f=>f&&d.classList.remove(f))}),a.split(/\s+/).forEach(k=>k&&d.classList.add(k)),d.style.display="none";const m=i.nodeType===1?i:i.parentNode;m.appendChild(d);const{hasTransform:g}=KM(d);return m.removeChild(d),g}const qs=o=>{const i=o.props["onUpdate:modelValue"]||!1;return st(i)?a=>Os(i,a):i};function iU(o){o.target.composing=!0}function f2(o){const i=o.target;i.composing&&(i.composing=!1,i.dispatchEvent(new Event("input")))}const hi=Symbol("_assign"),dn={created(o,{modifiers:{lazy:i,trim:a,number:d}},h){o[hi]=qs(h);const m=d||h.props&&h.props.type==="number";Fr(o,i?"change":"input",g=>{if(g.target.composing)return;let k=o.value;a&&(k=k.trim()),m&&(k=eh(k)),o[hi](k)}),a&&Fr(o,"change",()=>{o.value=o.value.trim()}),i||(Fr(o,"compositionstart",iU),Fr(o,"compositionend",f2),Fr(o,"change",f2))},mounted(o,{value:i}){o.value=i==null?"":i},beforeUpdate(o,{value:i,modifiers:{lazy:a,trim:d,number:h}},m){if(o[hi]=qs(m),o.composing)return;const g=h||o.type==="number"?eh(o.value):o.value,k=i==null?"":i;g!==k&&(document.activeElement===o&&o.type!=="range"&&(a||d&&o.value.trim()===k)||(o.value=k))}},il={deep:!0,created(o,i,a){o[hi]=qs(a),Fr(o,"change",()=>{const d=o._modelValue,h=Ic(o),m=o.checked,g=o[hi];if(st(d)){const k=qm(d,h),f=k!==-1;if(m&&!f)g(d.concat(h));else if(!m&&f){const C=[...d];C.splice(k,1),g(C)}}else if(tl(d)){const k=new Set(d);m?k.add(h):k.delete(h),g(k)}else g(nB(o,m))})},mounted:m2,beforeUpdate(o,i,a){o[hi]=qs(a),m2(o,i,a)}};function m2(o,{value:i,oldValue:a},d){o._modelValue=i,st(i)?o.checked=qm(i,d.props.value)>-1:tl(i)?o.checked=i.has(d.props.value):i!==a&&(o.checked=Us(i,nB(o,!0)))}const lg={created(o,{value:i},a){o.checked=Us(i,a.props.value),o[hi]=qs(a),Fr(o,"change",()=>{o[hi](Ic(o))})},beforeUpdate(o,{value:i,oldValue:a},d){o[hi]=qs(d),i!==a&&(o.checked=Us(i,d.props.value))}},wh={deep:!0,created(o,{value:i,modifiers:{number:a}},d){const h=tl(i);Fr(o,"change",()=>{const m=Array.prototype.filter.call(o.options,g=>g.selected).map(g=>a?eh(Ic(g)):Ic(g));o[hi](o.multiple?h?new Set(m):m:m[0]),o._assigning=!0,so(()=>{o._assigning=!1})}),o[hi]=qs(d)},mounted(o,{value:i,modifiers:{number:a}}){g2(o,i,a)},beforeUpdate(o,i,a){o[hi]=qs(a)},updated(o,{value:i,modifiers:{number:a}}){o._assigning||g2(o,i,a)}};function g2(o,i,a){const d=o.multiple,h=st(i);if(d&&!h&&!tl(i)){Jn(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(i).slice(8,-1)}.`);return}for(let m=0,g=o.options.length;m<g;m++){const k=o.options[m],f=Ic(k);if(d)if(h){const C=typeof f;C==="string"||C==="number"?k.selected=i.includes(a?eh(f):f):k.selected=qm(i,f)>-1}else k.selected=i.has(f);else if(Us(Ic(k),i)){o.selectedIndex!==m&&(o.selectedIndex=m);return}}!d&&o.selectedIndex!==-1&&(o.selectedIndex=-1)}function Ic(o){return"_value"in o?o._value:o.value}function nB(o,i){const a=i?"_trueValue":"_falseValue";return a in o?o[a]:i}const oB={created(o,i,a){$f(o,i,a,null,"created")},mounted(o,i,a){$f(o,i,a,null,"mounted")},beforeUpdate(o,i,a,d){$f(o,i,a,d,"beforeUpdate")},updated(o,i,a,d){$f(o,i,a,d,"updated")}};function iB(o,i){switch(o){case"SELECT":return wh;case"TEXTAREA":return dn;default:switch(i){case"checkbox":return il;case"radio":return lg;default:return dn}}}function $f(o,i,a,d,h){const g=iB(o.tagName,a.props&&a.props.type)[h];g&&g(o,i,a,d)}function rU(){dn.getSSRProps=({value:o})=>({value:o}),lg.getSSRProps=({value:o},i)=>{if(i.props&&Us(i.props.value,o))return{checked:!0}},il.getSSRProps=({value:o},i)=>{if(st(o)){if(i.props&&qm(o,i.props.value)>-1)return{checked:!0}}else if(tl(o)){if(i.props&&o.has(i.props.value))return{checked:!0}}else if(o)return{checked:!0}},oB.getSSRProps=(o,i)=>{if(typeof i.type!="string")return;const a=iB(i.type.toUpperCase(),i.props&&i.props.type);if(a.getSSRProps)return a.getSSRProps(o,i)}}const sU=["ctrl","shift","alt","meta"],aU={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,i)=>sU.some(a=>o[`${a}Key`]&&!i.includes(a))},ao=(o,i)=>{const a=o._withMods||(o._withMods={}),d=i.join(".");return a[d]||(a[d]=(h,...m)=>{for(let g=0;g<i.length;g++){const k=aU[i[g]];if(k&&k(h,i))return}return o(h,...m)})},lU={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rB=(o,i)=>{const a=o._withKeys||(o._withKeys={}),d=i.join(".");return a[d]||(a[d]=h=>{if(!("key"in h))return;const m=Qn(h.key);if(i.some(g=>g===m||lU[g]===m))return o(h)})},sB=Ut({patchProp:GH},TH);let Ku,b2=!1;function aB(){return Ku||(Ku=DM(sB))}function lB(){return Ku=b2?Ku:SM(sB),b2=!0,Ku}const Qv=(...o)=>{aB().render(...o)},cB=(...o)=>{lB().hydrate(...o)},dB=(...o)=>{const i=aB().createApp(...o);hB(i),pB(i);const{mount:a}=i;return i.mount=d=>{const h=fB(d);if(!h)return;const m=i._component;!pt(m)&&!m.render&&!m.template&&(m.template=h.innerHTML),h.innerHTML="";const g=a(h,!1,uB(h));return h instanceof Element&&(h.removeAttribute("v-cloak"),h.setAttribute("data-v-app","")),g},i},cU=(...o)=>{const i=lB().createApp(...o);hB(i),pB(i);const{mount:a}=i;return i.mount=d=>{const h=fB(d);if(h)return a(h,!0,uB(h))},i};function uB(o){if(o instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&o instanceof MathMLElement)return"mathml"}function hB(o){Object.defineProperty(o.config,"isNativeTag",{value:i=>L7(i)||R7(i)||z7(i),writable:!1})}function pB(o){if(dA()){const i=o.config.isCustomElement;Object.defineProperty(o.config,"isCustomElement",{get(){return i},set(){Jn("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=o.config.compilerOptions,d='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(o.config,"compilerOptions",{get(){return Jn(d),a},set(){Jn(d)}})}}function fB(o){if(Yt(o)){const i=document.querySelector(o);return i||Jn(`Failed to mount app: mount target selector "${o}" returned null.`),i}return window.ShadowRoot&&o instanceof window.ShadowRoot&&o.mode==="closed"&&Jn('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),o}let k2=!1;const dU=()=>{k2||(k2=!0,rU(),BH())};/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uU(){UM()}uU();const hU=()=>{Jn('Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".')};var pU=Object.freeze(Object.defineProperty({__proto__:null,compile:hU,EffectScope:Lw,ReactiveEffect:xc,TrackOpTypes:w8,TriggerOpTypes:A8,customRef:F5,effect:W7,effectScope:Rw,getCurrentScope:Gm,isProxy:th,isReactive:zo,isReadonly:Gr,isRef:Vt,isShallow:js,markRaw:tr,onScopeDispose:zw,proxyRefs:qw,reactive:xt,readonly:Tc,ref:Me,shallowReactive:Fw,shallowReadonly:Pa,shallowRef:Ww,stop:q7,toRaw:kt,toRef:G,toRefs:Dv,toValue:g8,triggerRef:m8,unref:V,camelize:ro,capitalize:Hs,normalizeClass:We,normalizeProps:Cn,normalizeStyle:Ln,toDisplayString:Ie,toHandlerKey:$r,BaseTransition:aM,BaseTransitionPropsValidators:oA,Comment:bn,DeprecationTypes:yH,ErrorCodes:T8,ErrorTypeStrings:bH,Fragment:ot,KeepAlive:l9,Static:Vs,Suspense:J8,Teleport:Yo,Text:Ws,assertNumber:Gw,callWithAsyncErrorHandling:jo,callWithErrorHandling:ir,cloneVNode:fi,compatUtils:CH,computed:Y,createBlock:Le,createCommentVNode:Ne,createElementBlock:ne,createElementVNode:O,createHydrationRenderer:SM,createPropsRestProxy:y9,createRenderer:DM,createSlots:iA,createStaticVNode:rH,createTextVNode:rt,createVNode:Ue,defineAsyncComponent:s9,defineComponent:Fe,defineEmits:g9,defineExpose:b9,defineModel:v9,defineOptions:k9,defineProps:m9,defineSlots:_9,devtools:kH,getCurrentInstance:To,getTransitionRawChildren:tg,guardReactiveProps:Un,h:Ct,handleError:Js,hasInjectionContext:wM,initCustomFormatter:UM,inject:gn,isMemoSame:WM,isRuntimeOnly:dA,isVNode:Kr,mergeDefaults:A9,mergeModels:C9,mergeProps:bt,nextTick:so,onActivated:bh,onBeforeMount:uM,onBeforeUnmount:nl,onBeforeUpdate:hM,onDeactivated:cM,onErrorCaptured:gM,onMounted:Ft,onRenderTracked:mM,onRenderTriggered:fM,onServerPrefetch:pM,onUnmounted:kh,onUpdated:og,openBlock:H,popScopeId:Ko,provide:Oi,pushScopeId:Go,queuePostFlushCb:ih,registerRuntimeCompiler:dH,renderList:Et,renderSlot:_e,resolveComponent:Wn,resolveDirective:Q8,resolveDynamicComponent:vt,resolveFilter:AH,resolveTransitionHooks:Dc,setBlockTracking:$v,setDevtoolsHook:_H,setTransitionHooks:Ya,ssrContextKey:tM,ssrUtils:wH,toHandlers:d9,transformVNodeArgs:nH,useAttrs:sA,useModel:mH,useSSRContext:nM,useSlots:Gn,useTransitionState:nA,version:Gv,warn:Jn,watch:St,watchEffect:Ha,watchPostEffect:oM,watchSyncEffect:iM,withAsyncContext:E9,withCtx:Te,withDefaults:w9,withDirectives:$t,withMemo:gH,withScopeId:W8,Transition:Yc,TransitionGroup:XH,VueElement:ag,createApp:dB,createSSRApp:cU,defineCustomElement:JM,defineSSRCustomElement:YH,hydrate:cB,initDirectivesForSSR:dU,render:Qv,useCssModule:ZH,useCssVars:NH,vModelCheckbox:il,vModelDynamic:oB,vModelRadio:lg,vModelSelect:wh,vModelText:dn,vShow:vh,withKeys:rB,withModifiers:ao},Symbol.toStringTag,{value:"Module"}));function fU(){return mB().__VUE_DEVTOOLS_GLOBAL_HOOK__}function mB(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:{}}const mU=typeof Proxy=="function",gU="devtools-plugin:setup",bU="plugin:settings:set";let ic,Zv;function kU(){var o;return ic!==void 0||(typeof window!="undefined"&&window.performance?(ic=!0,Zv=window.performance):typeof globalThis!="undefined"&&((o=globalThis.perf_hooks)===null||o===void 0?void 0:o.performance)?(ic=!0,Zv=globalThis.perf_hooks.performance):ic=!1),ic}function _U(){return kU()?Zv.now():Date.now()}class vU{constructor(i,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=i,this.hook=a;const d={};if(i.settings)for(const g in i.settings){const k=i.settings[g];d[g]=k.defaultValue}const h=`__vue-devtools-plugin-settings__${i.id}`;let m=Object.assign({},d);try{const g=localStorage.getItem(h),k=JSON.parse(g);Object.assign(m,k)}catch{}this.fallbacks={getSettings(){return m},setSettings(g){try{localStorage.setItem(h,JSON.stringify(g))}catch{}m=g},now(){return _U()}},a&&a.on(bU,(g,k)=>{g===this.plugin.id&&this.fallbacks.setSettings(k)}),this.proxiedOn=new Proxy({},{get:(g,k)=>this.target?this.target.on[k]:(...f)=>{this.onQueue.push({method:k,args:f})}}),this.proxiedTarget=new Proxy({},{get:(g,k)=>this.target?this.target[k]:k==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(k)?(...f)=>(this.targetQueue.push({method:k,args:f,resolve:()=>{}}),this.fallbacks[k](...f)):(...f)=>new Promise(C=>{this.targetQueue.push({method:k,args:f,resolve:C})})})}async setRealTarget(i){this.target=i;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function uA(o,i){const a=o,d=mB(),h=fU(),m=mU&&a.enableEarlyProxy;if(h&&(d.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!m))h.emit(gU,o,i);else{const g=m?new vU(a,h):null;(d.__VUE_DEVTOOLS_PLUGINS__=d.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:i,proxy:g}),g&&i(g.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof window!="undefined";function wU(o){return o.__esModule||o[Symbol.toStringTag]==="Module"}const Kt=Object.assign;function X_(o,i){const a={};for(const d in i){const h=i[d];a[d]=$o(h)?h.map(o):o(h)}return a}const Yu=()=>{},$o=Array.isArray;function Pt(o){const i=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+o].concat(i))}const AU=/\/$/,CU=o=>o.replace(AU,"");function ev(o,i,a="/"){let d,h={},m="",g="";const k=i.indexOf("#");let f=i.indexOf("?");return k<f&&k>=0&&(f=-1),f>-1&&(d=i.slice(0,f),m=i.slice(f+1,k>-1?k:i.length),h=o(m)),k>-1&&(d=d||i.slice(0,k),g=i.slice(k,i.length)),d=xU(d!=null?d:i,a),{fullPath:d+(m&&"?")+m+g,path:d,query:h,hash:g}}function yU(o,i){const a=i.query?o(i.query):"";return i.path+(a&&"?")+a+(i.hash||"")}function _2(o,i){return!i||!o.toLowerCase().startsWith(i.toLowerCase())?o:o.slice(i.length)||"/"}function v2(o,i,a){const d=i.matched.length-1,h=a.matched.length-1;return d>-1&&d===h&&Gs(i.matched[d],a.matched[h])&&gB(i.params,a.params)&&o(i.query)===o(a.query)&&i.hash===a.hash}function Gs(o,i){return(o.aliasOf||o)===(i.aliasOf||i)}function gB(o,i){if(Object.keys(o).length!==Object.keys(i).length)return!1;for(const a in o)if(!EU(o[a],i[a]))return!1;return!0}function EU(o,i){return $o(o)?w2(o,i):$o(i)?w2(i,o):o===i}function w2(o,i){return $o(i)?o.length===i.length&&o.every((a,d)=>a===i[d]):o.length===1&&o[0]===i}function xU(o,i){if(o.startsWith("/"))return o;if(!i.startsWith("/"))return Pt(`Cannot resolve a relative location without an absolute path. Trying to resolve "${o}" from "${i}". It should look like "/${i}".`),o;if(!o)return i;const a=i.split("/"),d=o.split("/"),h=d[d.length-1];(h===".."||h===".")&&d.push("");let m=a.length-1,g,k;for(g=0;g<d.length;g++)if(k=d[g],k!==".")if(k==="..")m>1&&m--;else break;return a.slice(0,m).join("/")+"/"+d.slice(g-(g===d.length?1:0)).join("/")}var dh;(function(o){o.pop="pop",o.push="push"})(dh||(dh={}));var Qu;(function(o){o.back="back",o.forward="forward",o.unknown=""})(Qu||(Qu={}));function TU(o){if(!o)if(Vr){const i=document.querySelector("base");o=i&&i.getAttribute("href")||"/",o=o.replace(/^\w+:\/\/[^\/]+/,"")}else o="/";return o[0]!=="/"&&o[0]!=="#"&&(o="/"+o),CU(o)}const DU=/^[^#]+#/;function SU(o,i){return o.replace(DU,"#")+i}function IU(o,i){const a=document.documentElement.getBoundingClientRect(),d=o.getBoundingClientRect();return{behavior:i.behavior,left:d.left-a.left-(i.left||0),top:d.top-a.top-(i.top||0)}}const cg=()=>({left:window.pageXOffset,top:window.pageYOffset});function MU(o){let i;if("el"in o){const a=o.el,d=typeof a=="string"&&a.startsWith("#");if(typeof o.el=="string"&&(!d||!document.getElementById(o.el.slice(1))))try{const m=document.querySelector(o.el);if(d&&m){Pt(`The selector "${o.el}" should be passed as "el: document.querySelector('${o.el}')" because it starts with "#".`);return}}catch{Pt(`The selector "${o.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const h=typeof a=="string"?d?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!h){Pt(`Couldn't find element using selector "${o.el}" returned by scrollBehavior.`);return}i=IU(h,o)}else i=o;"scrollBehavior"in document.documentElement.style?window.scrollTo(i):window.scrollTo(i.left!=null?i.left:window.pageXOffset,i.top!=null?i.top:window.pageYOffset)}function A2(o,i){return(history.state?history.state.position-i:-1)+o}const Jv=new Map;function BU(o,i){Jv.set(o,i)}function NU(o){const i=Jv.get(o);return Jv.delete(o),i}let OU=()=>location.protocol+"//"+location.host;function bB(o,i){const{pathname:a,search:d,hash:h}=i,m=o.indexOf("#");if(m>-1){let k=h.includes(o.slice(m))?o.slice(m).length:1,f=h.slice(k);return f[0]!=="/"&&(f="/"+f),_2(f,"")}return _2(a,o)+d+h}function PU(o,i,a,d){let h=[],m=[],g=null;const k=({state:v})=>{const E=bB(o,location),S=a.value,M=i.value;let N=0;if(v){if(a.value=E,i.value=v,g&&g===S){g=null;return}N=M?v.position-M.position:0}else d(E);h.forEach(R=>{R(a.value,S,{delta:N,type:dh.pop,direction:N?N>0?Qu.forward:Qu.back:Qu.unknown})})};function f(){g=a.value}function C(v){h.push(v);const E=()=>{const S=h.indexOf(v);S>-1&&h.splice(S,1)};return m.push(E),E}function y(){const{history:v}=window;!v.state||v.replaceState(Kt({},v.state,{scroll:cg()}),"")}function w(){for(const v of m)v();m=[],window.removeEventListener("popstate",k),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",k),window.addEventListener("beforeunload",y,{passive:!0}),{pauseListeners:f,listen:C,destroy:w}}function C2(o,i,a,d=!1,h=!1){return{back:o,current:i,forward:a,replaced:d,position:window.history.length,scroll:h?cg():null}}function LU(o){const{history:i,location:a}=window,d={value:bB(o,a)},h={value:i.state};h.value||m(d.value,{back:null,current:d.value,forward:null,position:i.length-1,replaced:!0,scroll:null},!0);function m(f,C,y){const w=o.indexOf("#"),v=w>-1?(a.host&&document.querySelector("base")?o:o.slice(w))+f:OU()+o+f;try{i[y?"replaceState":"pushState"](C,"",v),h.value=C}catch(E){Pt("Error with push/replace State",E),a[y?"replace":"assign"](v)}}function g(f,C){const y=Kt({},i.state,C2(h.value.back,f,h.value.forward,!0),C,{position:h.value.position});m(f,y,!0),d.value=f}function k(f,C){const y=Kt({},h.value,i.state,{forward:f,scroll:cg()});i.state||Pt(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),m(y.current,y,!0);const w=Kt({},C2(d.value,f,null),{position:y.position+1},C);m(f,w,!1),d.value=f}return{location:d,state:h,push:k,replace:g}}function RU(o){o=TU(o);const i=LU(o),a=PU(o,i.state,i.location,i.replace);function d(m,g=!0){g||a.pauseListeners(),history.go(m)}const h=Kt({location:"",base:o,go:d,createHref:SU.bind(null,o)},i,a);return Object.defineProperty(h,"location",{enumerable:!0,get:()=>i.location.value}),Object.defineProperty(h,"state",{enumerable:!0,get:()=>i.state.value}),h}function zU(o){return typeof o=="string"||o&&typeof o=="object"}function kB(o){return typeof o=="string"||typeof o=="symbol"}const ys={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_B=Symbol("navigation failure");var y2;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(y2||(y2={}));const jU={[1]({location:o,currentLocation:i}){return`No match for
 ${JSON.stringify(o)}${i?`
while being at
`+JSON.stringify(i):""}`},[2]({from:o,to:i}){return`Redirected from "${o.fullPath}" to "${VU(i)}" via a navigation guard.`},[4]({from:o,to:i}){return`Navigation aborted from "${o.fullPath}" to "${i.fullPath}" via a navigation guard.`},[8]({from:o,to:i}){return`Navigation cancelled from "${o.fullPath}" to "${i.fullPath}" with a new navigation.`},[16]({from:o,to:i}){return`Avoided redundant navigation to current location: "${o.fullPath}".`}};function Mc(o,i){return Kt(new Error(jU[o](i)),{type:o,[_B]:!0},i)}function Br(o,i){return o instanceof Error&&_B in o&&(i==null||!!(o.type&i))}const $U=["params","query","hash"];function VU(o){if(typeof o=="string")return o;if("path"in o)return o.path;const i={};for(const a of $U)a in o&&(i[a]=o[a]);return JSON.stringify(i,null,2)}const E2="[^/]+?",FU={sensitive:!1,strict:!1,start:!0,end:!0},HU=/[.+*?^${}()[\]/\\]/g;function UU(o,i){const a=Kt({},FU,i),d=[];let h=a.start?"^":"";const m=[];for(const C of o){const y=C.length?[]:[90];a.strict&&!C.length&&(h+="/");for(let w=0;w<C.length;w++){const v=C[w];let E=40+(a.sensitive?.25:0);if(v.type===0)w||(h+="/"),h+=v.value.replace(HU,"\\$&"),E+=40;else if(v.type===1){const{value:S,repeatable:M,optional:N,regexp:R}=v;m.push({name:S,repeatable:M,optional:N});const L=R||E2;if(L!==E2){E+=10;try{new RegExp(`(${L})`)}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+$.message)}}let z=M?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;w||(z=N&&C.length<2?`(?:/${z})`:"/"+z),N&&(z+="?"),h+=z,E+=20,N&&(E+=-8),M&&(E+=-20),L===".*"&&(E+=-50)}y.push(E)}d.push(y)}if(a.strict&&a.end){const C=d.length-1;d[C][d[C].length-1]+=.7000000000000001}a.strict||(h+="/?"),a.end?h+="$":a.strict&&(h+="(?:/|$)");const g=new RegExp(h,a.sensitive?"":"i");function k(C){const y=C.match(g),w={};if(!y)return null;for(let v=1;v<y.length;v++){const E=y[v]||"",S=m[v-1];w[S.name]=E&&S.repeatable?E.split("/"):E}return w}function f(C){let y="",w=!1;for(const v of o){(!w||!y.endsWith("/"))&&(y+="/"),w=!1;for(const E of v)if(E.type===0)y+=E.value;else if(E.type===1){const{value:S,repeatable:M,optional:N}=E,R=S in C?C[S]:"";if($o(R)&&!M)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=$o(R)?R.join("/"):R;if(!L)if(N)v.length<2&&(y.endsWith("/")?y=y.slice(0,-1):w=!0);else throw new Error(`Missing required param "${S}"`);y+=L}}return y||"/"}return{re:g,score:d,keys:m,parse:k,stringify:f}}function WU(o,i){let a=0;for(;a<o.length&&a<i.length;){const d=i[a]-o[a];if(d)return d;a++}return o.length<i.length?o.length===1&&o[0]===40+40?-1:1:o.length>i.length?i.length===1&&i[0]===40+40?1:-1:0}function qU(o,i){let a=0;const d=o.score,h=i.score;for(;a<d.length&&a<h.length;){const m=WU(d[a],h[a]);if(m)return m;a++}if(Math.abs(h.length-d.length)===1){if(x2(d))return 1;if(x2(h))return-1}return h.length-d.length}function x2(o){const i=o[o.length-1];return o.length>0&&i[i.length-1]<0}const GU={type:0,value:""},KU=/[a-zA-Z0-9_]/;function YU(o){if(!o)return[[]];if(o==="/")return[[GU]];if(!o.startsWith("/"))throw new Error(`Route paths should start with a "/": "${o}" should be "/${o}".`);function i(E){throw new Error(`ERR (${a})/"${C}": ${E}`)}let a=0,d=a;const h=[];let m;function g(){m&&h.push(m),m=[]}let k=0,f,C="",y="";function w(){!C||(a===0?m.push({type:0,value:C}):a===1||a===2||a===3?(m.length>1&&(f==="*"||f==="+")&&i(`A repeatable param (${C}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:C,regexp:y,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):i("Invalid state to consume buffer"),C="")}function v(){C+=f}for(;k<o.length;){if(f=o[k++],f==="\\"&&a!==2){d=a,a=4;continue}switch(a){case 0:f==="/"?(C&&w(),g()):f===":"?(w(),a=1):v();break;case 4:v(),a=d;break;case 1:f==="("?a=2:KU.test(f)?v():(w(),a=0,f!=="*"&&f!=="?"&&f!=="+"&&k--);break;case 2:f===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+f:a=3:y+=f;break;case 3:w(),a=0,f!=="*"&&f!=="?"&&f!=="+"&&k--,y="";break;default:i("Unknown state");break}}return a===2&&i(`Unfinished custom RegExp for param "${C}"`),w(),g(),h}function QU(o,i,a){const d=UU(YU(o.path),a);{const m=new Set;for(const g of d.keys)m.has(g.name)&&Pt(`Found duplicated params with name "${g.name}" for path "${o.path}". Only the last one will be available on "$route.params".`),m.add(g.name)}const h=Kt(d,{record:o,parent:i,children:[],alias:[]});return i&&!h.record.aliasOf==!i.record.aliasOf&&i.children.push(h),h}function ZU(o,i){const a=[],d=new Map;i=S2({strict:!1,end:!0,sensitive:!1},i);function h(y){return d.get(y)}function m(y,w,v){const E=!v,S=JU(y);nW(S,w),S.aliasOf=v&&v.record;const M=S2(i,y),N=[S];if("alias"in y){const z=typeof y.alias=="string"?[y.alias]:y.alias;for(const $ of z)N.push(Kt({},S,{components:v?v.record.components:S.components,path:$,aliasOf:v?v.record:S}))}let R,L;for(const z of N){const{path:$}=z;if(w&&$[0]!=="/"){const q=w.record.path,J=q[q.length-1]==="/"?"":"/";z.path=w.record.path+($&&J+$)}if(z.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(R=QU(z,w,M),w&&$[0]==="/"&&oW(R,w),v?(v.alias.push(R),tW(v,R)):(L=L||R,L!==R&&L.alias.push(R),E&&y.name&&!D2(R)&&g(y.name)),S.children){const q=S.children;for(let J=0;J<q.length;J++)m(q[J],R,v&&v.children[J])}v=v||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&f(R)}return L?()=>{g(L)}:Yu}function g(y){if(kB(y)){const w=d.get(y);w&&(d.delete(y),a.splice(a.indexOf(w),1),w.children.forEach(g),w.alias.forEach(g))}else{const w=a.indexOf(y);w>-1&&(a.splice(w,1),y.record.name&&d.delete(y.record.name),y.children.forEach(g),y.alias.forEach(g))}}function k(){return a}function f(y){let w=0;for(;w<a.length&&qU(y,a[w])>=0&&(y.record.path!==a[w].record.path||!vB(y,a[w]));)w++;a.splice(w,0,y),y.record.name&&!D2(y)&&d.set(y.record.name,y)}function C(y,w){let v,E={},S,M;if("name"in y&&y.name){if(v=d.get(y.name),!v)throw Mc(1,{location:y});{const L=Object.keys(y.params||{}).filter(z=>!v.keys.find($=>$.name===z));L.length&&Pt(`Discarded invalid param(s) "${L.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}M=v.record.name,E=Kt(T2(w.params,v.keys.filter(L=>!L.optional).map(L=>L.name)),y.params&&T2(y.params,v.keys.map(L=>L.name))),S=v.stringify(E)}else if("path"in y)S=y.path,S.startsWith("/")||Pt(`The Matcher cannot resolve relative paths but received "${S}". Unless you directly called \`matcher.resolve("${S}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),v=a.find(L=>L.re.test(S)),v&&(E=v.parse(S),M=v.record.name);else{if(v=w.name?d.get(w.name):a.find(L=>L.re.test(w.path)),!v)throw Mc(1,{location:y,currentLocation:w});M=v.record.name,E=Kt({},w.params,y.params),S=v.stringify(E)}const N=[];let R=v;for(;R;)N.unshift(R.record),R=R.parent;return{name:M,path:S,params:E,matched:N,meta:eW(N)}}return o.forEach(y=>m(y)),{addRoute:m,resolve:C,removeRoute:g,getRoutes:k,getRecordMatcher:h}}function T2(o,i){const a={};for(const d of i)d in o&&(a[d]=o[d]);return a}function JU(o){return{path:o.path,redirect:o.redirect,name:o.name,meta:o.meta||{},aliasOf:void 0,beforeEnter:o.beforeEnter,props:XU(o),children:o.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in o?o.components||null:o.component&&{default:o.component}}}function XU(o){const i={},a=o.props||!1;if("component"in o)i.default=a;else for(const d in o.components)i[d]=typeof a=="object"?a[d]:a;return i}function D2(o){for(;o;){if(o.record.aliasOf)return!0;o=o.parent}return!1}function eW(o){return o.reduce((i,a)=>Kt(i,a.meta),{})}function S2(o,i){const a={};for(const d in o)a[d]=d in i?i[d]:o[d];return a}function Xv(o,i){return o.name===i.name&&o.optional===i.optional&&o.repeatable===i.repeatable}function tW(o,i){for(const a of o.keys)if(!a.optional&&!i.keys.find(Xv.bind(null,a)))return Pt(`Alias "${i.record.path}" and the original record: "${o.record.path}" must have the exact same param named "${a.name}"`);for(const a of i.keys)if(!a.optional&&!o.keys.find(Xv.bind(null,a)))return Pt(`Alias "${i.record.path}" and the original record: "${o.record.path}" must have the exact same param named "${a.name}"`)}function nW(o,i){i&&i.record.name&&!o.name&&!o.path&&Pt(`The route named "${String(i.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function oW(o,i){for(const a of i.keys)if(!o.keys.find(Xv.bind(null,a)))return Pt(`Absolute path "${o.record.path}" must have the exact same param named "${a.name}" as its parent "${i.record.path}".`)}function vB(o,i){return i.children.some(a=>a===o||vB(o,a))}const wB=/#/g,iW=/&/g,rW=/\//g,sW=/=/g,aW=/\?/g,AB=/\+/g,lW=/%5B/g,cW=/%5D/g,CB=/%5E/g,dW=/%60/g,yB=/%7B/g,uW=/%7C/g,EB=/%7D/g,hW=/%20/g;function hA(o){return encodeURI(""+o).replace(uW,"|").replace(lW,"[").replace(cW,"]")}function pW(o){return hA(o).replace(yB,"{").replace(EB,"}").replace(CB,"^")}function ew(o){return hA(o).replace(AB,"%2B").replace(hW,"+").replace(wB,"%23").replace(iW,"%26").replace(dW,"`").replace(yB,"{").replace(EB,"}").replace(CB,"^")}function fW(o){return ew(o).replace(sW,"%3D")}function mW(o){return hA(o).replace(wB,"%23").replace(aW,"%3F")}function gW(o){return o==null?"":mW(o).replace(rW,"%2F")}function uh(o){try{return decodeURIComponent(""+o)}catch{Pt(`Error decoding "${o}". Using original value`)}return""+o}function bW(o){const i={};if(o===""||o==="?")return i;const d=(o[0]==="?"?o.slice(1):o).split("&");for(let h=0;h<d.length;++h){const m=d[h].replace(AB," "),g=m.indexOf("="),k=uh(g<0?m:m.slice(0,g)),f=g<0?null:uh(m.slice(g+1));if(k in i){let C=i[k];$o(C)||(C=i[k]=[C]),C.push(f)}else i[k]=f}return i}function I2(o){let i="";for(let a in o){const d=o[a];if(a=fW(a),d==null){d!==void 0&&(i+=(i.length?"&":"")+a);continue}($o(d)?d.map(m=>m&&ew(m)):[d&&ew(d)]).forEach(m=>{m!==void 0&&(i+=(i.length?"&":"")+a,m!=null&&(i+="="+m))})}return i}function kW(o){const i={};for(const a in o){const d=o[a];d!==void 0&&(i[a]=$o(d)?d.map(h=>h==null?null:""+h):d==null?d:""+d)}return i}const _W=Symbol("router view location matched"),M2=Symbol("router view depth"),dg=Symbol("router"),pA=Symbol("route location"),tw=Symbol("router view location");function Iu(){let o=[];function i(d){return o.push(d),()=>{const h=o.indexOf(d);h>-1&&o.splice(h,1)}}function a(){o=[]}return{add:i,list:()=>o.slice(),reset:a}}function Ms(o,i,a,d,h){const m=d&&(d.enterCallbacks[h]=d.enterCallbacks[h]||[]);return()=>new Promise((g,k)=>{const f=w=>{w===!1?k(Mc(4,{from:a,to:i})):w instanceof Error?k(w):zU(w)?k(Mc(2,{from:i,to:w})):(m&&d.enterCallbacks[h]===m&&typeof w=="function"&&m.push(w),g())},C=o.call(d&&d.instances[h],i,a,vW(f,i,a));let y=Promise.resolve(C);if(o.length<3&&(y=y.then(f)),o.length>2){const w=`The "next" callback was never called inside of ${o.name?'"'+o.name+'"':""}:
${o.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof C=="object"&&"then"in C)y=y.then(v=>f._called?v:(Pt(w),Promise.reject(new Error("Invalid navigation guard"))));else if(C!==void 0&&!f._called){Pt(w),k(new Error("Invalid navigation guard"));return}}y.catch(w=>k(w))})}function vW(o,i,a){let d=0;return function(){d++===1&&Pt(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${i.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),o._called=!0,d===1&&o.apply(null,arguments)}}function tv(o,i,a,d){const h=[];for(const m of o){!m.components&&!m.children.length&&Pt(`Record with path "${m.path}" is either missing a "component(s)" or "children" property.`);for(const g in m.components){let k=m.components[g];{if(!k||typeof k!="object"&&typeof k!="function")throw Pt(`Component "${g}" in record with path "${m.path}" is not a valid component. Received "${String(k)}".`),new Error("Invalid route component");if("then"in k){Pt(`Component "${g}" in record with path "${m.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const f=k;k=()=>f}else k.__asyncLoader&&!k.__warnedDefineAsync&&(k.__warnedDefineAsync=!0,Pt(`Component "${g}" in record with path "${m.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(i!=="beforeRouteEnter"&&!m.instances[g]))if(wW(k)){const C=(k.__vccOpts||k)[i];C&&h.push(Ms(C,a,d,m,g))}else{let f=k();"catch"in f||(Pt(`Component "${g}" in record with path "${m.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),f=Promise.resolve(f)),h.push(()=>f.then(C=>{if(!C)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${m.path}"`));const y=wU(C)?C.default:C;m.components[g]=y;const v=(y.__vccOpts||y)[i];return v&&Ms(v,a,d,m,g)()}))}}}return h}function wW(o){return typeof o=="object"||"displayName"in o||"props"in o||"__vccOpts"in o}function B2(o){const i=gn(dg),a=gn(pA),d=Y(()=>i.resolve(V(o.to))),h=Y(()=>{const{matched:f}=d.value,{length:C}=f,y=f[C-1],w=a.matched;if(!y||!w.length)return-1;const v=w.findIndex(Gs.bind(null,y));if(v>-1)return v;const E=N2(f[C-2]);return C>1&&N2(y)===E&&w[w.length-1].path!==E?w.findIndex(Gs.bind(null,f[C-2])):v}),m=Y(()=>h.value>-1&&EW(a.params,d.value.params)),g=Y(()=>h.value>-1&&h.value===a.matched.length-1&&gB(a.params,d.value.params));function k(f={}){return yW(f)?i[V(o.replace)?"replace":"push"](V(o.to)).catch(Yu):Promise.resolve()}if(Vr){const f=To();if(f){const C={route:d.value,isActive:m.value,isExactActive:g.value};f.__vrl_devtools=f.__vrl_devtools||[],f.__vrl_devtools.push(C),Ha(()=>{C.route=d.value,C.isActive=m.value,C.isExactActive=g.value},{flush:"post"})}}return{route:d,href:Y(()=>d.value.href),isActive:m,isExactActive:g,navigate:k}}const AW=Fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:B2,setup(o,{slots:i}){const a=xt(B2(o)),{options:d}=gn(dg),h=Y(()=>({[O2(o.activeClass,d.linkActiveClass,"router-link-active")]:a.isActive,[O2(o.exactActiveClass,d.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const m=i.default&&i.default(a);return o.custom?m:Ct("a",{"aria-current":a.isExactActive?o.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:h.value},m)}}}),CW=AW;function yW(o){if(!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)&&!o.defaultPrevented&&!(o.button!==void 0&&o.button!==0)){if(o.currentTarget&&o.currentTarget.getAttribute){const i=o.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(i))return}return o.preventDefault&&o.preventDefault(),!0}}function EW(o,i){for(const a in i){const d=i[a],h=o[a];if(typeof d=="string"){if(d!==h)return!1}else if(!$o(h)||h.length!==d.length||d.some((m,g)=>m!==h[g]))return!1}return!0}function N2(o){return o?o.aliasOf?o.aliasOf.path:o.path:""}const O2=(o,i,a)=>o!=null?o:i!=null?i:a,xW=Fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(o,{attrs:i,slots:a}){DW();const d=gn(tw),h=Y(()=>o.route||d.value),m=gn(M2,0),g=Y(()=>{let C=V(m);const{matched:y}=h.value;let w;for(;(w=y[C])&&!w.components;)C++;return C}),k=Y(()=>h.value.matched[g.value]);Oi(M2,Y(()=>g.value+1)),Oi(_W,k),Oi(tw,h);const f=Me();return St(()=>[f.value,k.value,o.name],([C,y,w],[v,E,S])=>{y&&(y.instances[w]=C,E&&E!==y&&C&&C===v&&(y.leaveGuards.size||(y.leaveGuards=E.leaveGuards),y.updateGuards.size||(y.updateGuards=E.updateGuards))),C&&y&&(!E||!Gs(y,E)||!v)&&(y.enterCallbacks[w]||[]).forEach(M=>M(C))},{flush:"post"}),()=>{const C=h.value,y=o.name,w=k.value,v=w&&w.components[y];if(!v)return P2(a.default,{Component:v,route:C});const E=w.props[y],S=E?E===!0?C.params:typeof E=="function"?E(C):E:null,N=Ct(v,Kt({},S,i,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(w.instances[y]=null)},ref:f}));if(Vr&&N.ref){const R={depth:g.value,name:w.name,path:w.path,meta:w.meta};($o(N.ref)?N.ref.map(z=>z.i):[N.ref.i]).forEach(z=>{z.__vrv_devtools=R})}return P2(a.default,{Component:N,route:C})||N}}});function P2(o,i){if(!o)return null;const a=o(i);return a.length===1?a[0]:a}const TW=xW;function DW(){const o=To(),i=o.parent&&o.parent.type.name,a=o.parent&&o.parent.subTree&&o.parent.subTree.type;if(i&&(i==="KeepAlive"||i.includes("Transition"))&&typeof a=="object"&&a.name==="RouterView"){const d=i==="KeepAlive"?"keep-alive":"transition";Pt(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${d}>
    <component :is="Component" />
  </${d}>
</router-view>`)}}function Mu(o,i){const a=Kt({},o,{matched:o.matched.map(d=>RW(d,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:o.fullPath,tooltip:i,value:a}}}function Vf(o){return{_custom:{display:o}}}let SW=0;function IW(o,i,a){if(i.__hasDevtools)return;i.__hasDevtools=!0;const d=SW++;uA({id:"org.vuejs.router"+(d?"."+d:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:o},h=>{typeof h.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),h.on.inspectComponent((y,w)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Mu(i.currentRoute.value,"Current Route")})}),h.on.visitComponentTree(({treeNode:y,componentInstance:w})=>{if(w.__vrv_devtools){const v=w.__vrv_devtools;y.tags.push({label:(v.name?`${v.name.toString()}: `:"")+v.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:xB})}$o(w.__vrl_devtools)&&(w.__devtoolsApi=h,w.__vrl_devtools.forEach(v=>{let E=SB,S="";v.isExactActive?(E=DB,S="This is exactly active"):v.isActive&&(E=TB,S="This link is active"),y.tags.push({label:v.route.path,textColor:0,tooltip:S,backgroundColor:E})}))}),St(i.currentRoute,()=>{f(),h.notifyComponentUpdate(),h.sendInspectorTree(k),h.sendInspectorState(k)});const m="router:navigations:"+d;h.addTimelineLayer({id:m,label:`Router${d?" "+d:""} Navigations`,color:4237508}),i.onError((y,w)=>{h.addTimelineEvent({layerId:m,event:{title:"Error during Navigation",subtitle:w.fullPath,logType:"error",time:h.now(),data:{error:y},groupId:w.meta.__navigationId}})});let g=0;i.beforeEach((y,w)=>{const v={guard:Vf("beforeEach"),from:Mu(w,"Current Location during this navigation"),to:Mu(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:g++}),h.addTimelineEvent({layerId:m,event:{time:h.now(),title:"Start of navigation",subtitle:y.fullPath,data:v,groupId:y.meta.__navigationId}})}),i.afterEach((y,w,v)=>{const E={guard:Vf("afterEach")};v?(E.failure={_custom:{type:Error,readOnly:!0,display:v?v.message:"",tooltip:"Navigation Failure",value:v}},E.status=Vf("\u274C")):E.status=Vf("\u2705"),E.from=Mu(w,"Current Location during this navigation"),E.to=Mu(y,"Target location"),h.addTimelineEvent({layerId:m,event:{title:"End of navigation",subtitle:y.fullPath,time:h.now(),data:E,logType:v?"warning":"default",groupId:y.meta.__navigationId}})});const k="router-inspector:"+d;h.addInspector({id:k,label:"Routes"+(d?" "+d:""),icon:"book",treeFilterPlaceholder:"Search routes"});function f(){if(!C)return;const y=C;let w=a.getRoutes().filter(v=>!v.parent||!v.parent.record.components);w.forEach(BB),y.filter&&(w=w.filter(v=>nw(v,y.filter.toLowerCase()))),w.forEach(v=>MB(v,i.currentRoute.value)),y.rootNodes=w.map(IB)}let C;h.on.getInspectorTree(y=>{C=y,y.app===o&&y.inspectorId===k&&f()}),h.on.getInspectorState(y=>{if(y.app===o&&y.inspectorId===k){const v=a.getRoutes().find(E=>E.record.__vd_id===y.nodeId);v&&(y.state={options:BW(v)})}}),h.sendInspectorTree(k),h.sendInspectorState(k)})}function MW(o){return o.optional?o.repeatable?"*":"?":o.repeatable?"+":""}function BW(o){const{record:i}=o,a=[{editable:!1,key:"path",value:i.path}];return i.name!=null&&a.push({editable:!1,key:"name",value:i.name}),a.push({editable:!1,key:"regexp",value:o.re}),o.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:o.keys.map(d=>`${d.name}${MW(d)}`).join(" "),tooltip:"Param keys",value:o.keys}}}),i.redirect!=null&&a.push({editable:!1,key:"redirect",value:i.redirect}),o.alias.length&&a.push({editable:!1,key:"aliases",value:o.alias.map(d=>d.record.path)}),Object.keys(o.record.meta).length&&a.push({editable:!1,key:"meta",value:o.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:o.score.map(d=>d.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:o.score}}}),a}const xB=15485081,TB=2450411,DB=8702998,NW=2282478,SB=16486972,OW=6710886;function IB(o){const i=[],{record:a}=o;a.name!=null&&i.push({label:String(a.name),textColor:0,backgroundColor:NW}),a.aliasOf&&i.push({label:"alias",textColor:0,backgroundColor:SB}),o.__vd_match&&i.push({label:"matches",textColor:0,backgroundColor:xB}),o.__vd_exactActive&&i.push({label:"exact",textColor:0,backgroundColor:DB}),o.__vd_active&&i.push({label:"active",textColor:0,backgroundColor:TB}),a.redirect&&i.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:OW});let d=a.__vd_id;return d==null&&(d=String(PW++),a.__vd_id=d),{id:d,label:a.path,tags:i,children:o.children.map(IB)}}let PW=0;const LW=/^\/(.*)\/([a-z]*)$/;function MB(o,i){const a=i.matched.length&&Gs(i.matched[i.matched.length-1],o.record);o.__vd_exactActive=o.__vd_active=a,a||(o.__vd_active=i.matched.some(d=>Gs(d,o.record))),o.children.forEach(d=>MB(d,i))}function BB(o){o.__vd_match=!1,o.children.forEach(BB)}function nw(o,i){const a=String(o.re).match(LW);if(o.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(i))return o.children.forEach(g=>nw(g,i)),o.record.path!=="/"||i==="/"?(o.__vd_match=o.re.test(i),!0):!1;const h=o.record.path.toLowerCase(),m=uh(h);return!i.startsWith("/")&&(m.includes(i)||h.includes(i))||m.startsWith(i)||h.startsWith(i)||o.record.name&&String(o.record.name).includes(i)?!0:o.children.some(g=>nw(g,i))}function RW(o,i){const a={};for(const d in o)i.includes(d)||(a[d]=o[d]);return a}function zW(o){const i=ZU(o.routes,o),a=o.parseQuery||bW,d=o.stringifyQuery||I2,h=o.history;if(!h)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const m=Iu(),g=Iu(),k=Iu(),f=Ww(ys);let C=ys;Vr&&o.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=X_.bind(null,ce=>""+ce),w=X_.bind(null,gW),v=X_.bind(null,uh);function E(ce,Ce){let He,qe;return kB(ce)?(He=i.getRecordMatcher(ce),qe=Ce):qe=ce,i.addRoute(qe,He)}function S(ce){const Ce=i.getRecordMatcher(ce);Ce?i.removeRoute(Ce):Pt(`Cannot remove non-existent route "${String(ce)}"`)}function M(){return i.getRoutes().map(ce=>ce.record)}function N(ce){return!!i.getRecordMatcher(ce)}function R(ce,Ce){if(Ce=Kt({},Ce||f.value),typeof ce=="string"){const F=ev(a,ce,Ce.path),Z=i.resolve({path:F.path},Ce),re=h.createHref(F.fullPath);return re.startsWith("//")?Pt(`Location "${ce}" resolved to "${re}". A resolved location cannot start with multiple slashes.`):Z.matched.length||Pt(`No match found for location with path "${ce}"`),Kt(F,Z,{params:v(Z.params),hash:uh(F.hash),redirectedFrom:void 0,href:re})}let He;if("path"in ce)"params"in ce&&!("name"in ce)&&Object.keys(ce.params).length&&Pt(`Path "${ce.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),He=Kt({},ce,{path:ev(a,ce.path,Ce.path).path});else{const F=Kt({},ce.params);for(const Z in F)F[Z]==null&&delete F[Z];He=Kt({},ce,{params:w(F)}),Ce.params=w(Ce.params)}const qe=i.resolve(He,Ce),fe=ce.hash||"";fe&&!fe.startsWith("#")&&Pt(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`),qe.params=y(v(qe.params));const ut=yU(d,Kt({},ce,{hash:pW(fe),path:qe.path})),pe=h.createHref(ut);return pe.startsWith("//")?Pt(`Location "${ce}" resolved to "${pe}". A resolved location cannot start with multiple slashes.`):qe.matched.length||Pt(`No match found for location with path "${"path"in ce?ce.path:ce}"`),Kt({fullPath:ut,hash:fe,query:d===I2?kW(ce.query):ce.query||{}},qe,{redirectedFrom:void 0,href:pe})}function L(ce){return typeof ce=="string"?ev(a,ce,f.value.path):Kt({},ce)}function z(ce,Ce){if(C!==ce)return Mc(8,{from:Ce,to:ce})}function $(ce){return K(ce)}function q(ce){return $(Kt(L(ce),{replace:!0}))}function J(ce){const Ce=ce.matched[ce.matched.length-1];if(Ce&&Ce.redirect){const{redirect:He}=Ce;let qe=typeof He=="function"?He(ce):He;if(typeof qe=="string"&&(qe=qe.includes("?")||qe.includes("#")?qe=L(qe):{path:qe},qe.params={}),!("path"in qe)&&!("name"in qe))throw Pt(`Invalid redirect found:
${JSON.stringify(qe,null,2)}
 when navigating to "${ce.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Kt({query:ce.query,hash:ce.hash,params:"path"in qe?{}:ce.params},qe)}}function K(ce,Ce){const He=C=R(ce),qe=f.value,fe=ce.state,ut=ce.force,pe=ce.replace===!0,F=J(He);if(F)return K(Kt(L(F),{state:typeof F=="object"?Kt({},fe,F.state):fe,force:ut,replace:pe}),Ce||He);const Z=He;Z.redirectedFrom=Ce;let re;return!ut&&v2(d,qe,He)&&(re=Mc(16,{to:Z,from:qe}),it(qe,qe,!0,!1)),(re?Promise.resolve(re):U(Z,qe)).catch(Ae=>Br(Ae)?Br(Ae,2)?Ae:Oe(Ae):de(Ae,Z,qe)).then(Ae=>{if(Ae){if(Br(Ae,2))return v2(d,R(Ae.to),Z)&&Ce&&(Ce._count=Ce._count?Ce._count+1:1)>30?(Pt(`Detected a possibly infinite redirection in a navigation guard when going from "${qe.fullPath}" to "${Z.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):K(Kt({replace:pe},L(Ae.to),{state:typeof Ae.to=="object"?Kt({},fe,Ae.to.state):fe,force:ut}),Ce||Z)}else Ae=ae(Z,qe,!0,pe,fe);return te(Z,qe,Ae),Ae})}function ee(ce,Ce){const He=z(ce,Ce);return He?Promise.reject(He):Promise.resolve()}function B(ce){const Ce=Pe.values().next().value;return Ce&&typeof Ce.runWithContext=="function"?Ce.runWithContext(ce):ce()}function U(ce,Ce){let He;const[qe,fe,ut]=jW(ce,Ce);He=tv(qe.reverse(),"beforeRouteLeave",ce,Ce);for(const F of qe)F.leaveGuards.forEach(Z=>{He.push(Ms(Z,ce,Ce))});const pe=ee.bind(null,ce,Ce);return He.push(pe),Ke(He).then(()=>{He=[];for(const F of m.list())He.push(Ms(F,ce,Ce));return He.push(pe),Ke(He)}).then(()=>{He=tv(fe,"beforeRouteUpdate",ce,Ce);for(const F of fe)F.updateGuards.forEach(Z=>{He.push(Ms(Z,ce,Ce))});return He.push(pe),Ke(He)}).then(()=>{He=[];for(const F of ut)if(F.beforeEnter)if($o(F.beforeEnter))for(const Z of F.beforeEnter)He.push(Ms(Z,ce,Ce));else He.push(Ms(F.beforeEnter,ce,Ce));return He.push(pe),Ke(He)}).then(()=>(ce.matched.forEach(F=>F.enterCallbacks={}),He=tv(ut,"beforeRouteEnter",ce,Ce),He.push(pe),Ke(He))).then(()=>{He=[];for(const F of g.list())He.push(Ms(F,ce,Ce));return He.push(pe),Ke(He)}).catch(F=>Br(F,8)?F:Promise.reject(F))}function te(ce,Ce,He){k.list().forEach(qe=>B(()=>qe(ce,Ce,He)))}function ae(ce,Ce,He,qe,fe){const ut=z(ce,Ce);if(ut)return ut;const pe=Ce===ys,F=Vr?history.state:{};He&&(qe||pe?h.replace(ce.fullPath,Kt({scroll:pe&&F&&F.scroll},fe)):h.push(ce.fullPath,fe)),f.value=ce,it(ce,Ce,He,pe),Oe()}let be;function ye(){be||(be=h.listen((ce,Ce,He)=>{if(!Je.listening)return;const qe=R(ce),fe=J(qe);if(fe){K(Kt(fe,{replace:!0}),qe).catch(Yu);return}C=qe;const ut=f.value;Vr&&BU(A2(ut.fullPath,He.delta),cg()),U(qe,ut).catch(pe=>Br(pe,12)?pe:Br(pe,2)?(K(pe.to,qe).then(F=>{Br(F,20)&&!He.delta&&He.type===dh.pop&&h.go(-1,!1)}).catch(Yu),Promise.reject()):(He.delta&&h.go(-He.delta,!1),de(pe,qe,ut))).then(pe=>{pe=pe||ae(qe,ut,!1),pe&&(He.delta&&!Br(pe,8)?h.go(-He.delta,!1):He.type===dh.pop&&Br(pe,20)&&h.go(-1,!1)),te(qe,ut,pe)}).catch(Yu)}))}let me=Iu(),ue=Iu(),he;function de(ce,Ce,He){Oe(ce);const qe=ue.list();return qe.length?qe.forEach(fe=>fe(ce,Ce,He)):(Pt("uncaught error during route navigation:"),console.error(ce)),Promise.reject(ce)}function Qe(){return he&&f.value!==ys?Promise.resolve():new Promise((ce,Ce)=>{me.add([ce,Ce])})}function Oe(ce){return he||(he=!ce,ye(),me.list().forEach(([Ce,He])=>ce?He(ce):Ce()),me.reset()),ce}function it(ce,Ce,He,qe){const{scrollBehavior:fe}=o;if(!Vr||!fe)return Promise.resolve();const ut=!He&&NU(A2(ce.fullPath,0))||(qe||!He)&&history.state&&history.state.scroll||null;return so().then(()=>fe(ce,Ce,ut)).then(pe=>pe&&MU(pe)).catch(pe=>de(pe,ce,Ce))}const Se=ce=>h.go(ce);let le;const Pe=new Set,Je={currentRoute:f,listening:!0,addRoute:E,removeRoute:S,hasRoute:N,getRoutes:M,resolve:R,options:o,push:$,replace:q,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:m.add,beforeResolve:g.add,afterEach:k.add,onError:ue.add,isReady:Qe,install(ce){const Ce=this;ce.component("RouterLink",CW),ce.component("RouterView",TW),ce.config.globalProperties.$router=Ce,Object.defineProperty(ce.config.globalProperties,"$route",{enumerable:!0,get:()=>V(f)}),Vr&&!le&&f.value===ys&&(le=!0,$(h.location).catch(fe=>{Pt("Unexpected error when starting the router:",fe)}));const He={};for(const fe in ys)Object.defineProperty(He,fe,{get:()=>f.value[fe],enumerable:!0});ce.provide(dg,Ce),ce.provide(pA,Fw(He)),ce.provide(tw,f);const qe=ce.unmount;Pe.add(ce),ce.unmount=function(){Pe.delete(ce),Pe.size<1&&(C=ys,be&&be(),be=null,f.value=ys,le=!1,he=!1),qe()},Vr&&IW(ce,Ce,i)}};function Ke(ce){return ce.reduce((Ce,He)=>Ce.then(()=>B(He)),Promise.resolve())}return Je}function jW(o,i){const a=[],d=[],h=[],m=Math.max(i.matched.length,o.matched.length);for(let g=0;g<m;g++){const k=i.matched[g];k&&(o.matched.find(C=>Gs(C,k))?d.push(k):a.push(k));const f=o.matched[g];f&&(i.matched.find(C=>Gs(C,f))||h.push(f))}return[a,d,h]}function yn(){return gn(dg)}function Xs(){return gn(pA)}var $W=!1;function Ff(o,i,a){return Array.isArray(o)?(o.length=Math.max(o.length,i),o.splice(i,1,a),a):(o[i]=a,a)}function nv(o,i){if(Array.isArray(o)){o.splice(i,1);return}delete o[i]}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ow;const hh=o=>ow=o,NB=Symbol("pinia");function Ja(o){return o&&typeof o=="object"&&Object.prototype.toString.call(o)==="[object Object]"&&typeof o.toJSON!="function"}var rr;(function(o){o.direct="direct",o.patchObject="patch object",o.patchFunction="patch function"})(rr||(rr={}));const ug=typeof window!="undefined",Bm=ug,L2=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function VW(o,{autoBom:i=!1}={}){return i&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob([String.fromCharCode(65279),o],{type:o.type}):o}function fA(o,i,a){const d=new XMLHttpRequest;d.open("GET",o),d.responseType="blob",d.onload=function(){LB(d.response,i,a)},d.onerror=function(){console.error("could not download file")},d.send()}function OB(o){const i=new XMLHttpRequest;i.open("HEAD",o,!1);try{i.send()}catch{}return i.status>=200&&i.status<=299}function rm(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{const a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(a)}}const sm=typeof navigator=="object"?navigator:{userAgent:""},PB=(()=>/Macintosh/.test(sm.userAgent)&&/AppleWebKit/.test(sm.userAgent)&&!/Safari/.test(sm.userAgent))(),LB=ug?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!PB?FW:"msSaveOrOpenBlob"in sm?HW:UW:()=>{};function FW(o,i="download",a){const d=document.createElement("a");d.download=i,d.rel="noopener",typeof o=="string"?(d.href=o,d.origin!==location.origin?OB(d.href)?fA(o,i,a):(d.target="_blank",rm(d)):rm(d)):(d.href=URL.createObjectURL(o),setTimeout(function(){URL.revokeObjectURL(d.href)},4e4),setTimeout(function(){rm(d)},0))}function HW(o,i="download",a){if(typeof o=="string")if(OB(o))fA(o,i,a);else{const d=document.createElement("a");d.href=o,d.target="_blank",setTimeout(function(){rm(d)})}else navigator.msSaveOrOpenBlob(VW(o,a),i)}function UW(o,i,a,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof o=="string")return fA(o,i,a);const h=o.type==="application/octet-stream",m=/constructor/i.test(String(L2.HTMLElement))||"safari"in L2,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||h&&m||PB)&&typeof FileReader!="undefined"){const k=new FileReader;k.onloadend=function(){let f=k.result;if(typeof f!="string")throw d=null,new Error("Wrong reader.result type");f=g?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=f:location.assign(f),d=null},k.readAsDataURL(o)}else{const k=URL.createObjectURL(o);d?d.location.assign(k):location.href=k,d=null,setTimeout(function(){URL.revokeObjectURL(k)},4e4)}}function Pn(o,i){const a="\u{1F34D} "+o;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(a,i):i==="error"?console.error(a):i==="warn"?console.warn(a):console.log(a)}function mA(o){return"_a"in o&&"install"in o}function RB(){if(!("clipboard"in navigator))return Pn("Your browser doesn't support the Clipboard API","error"),!0}function zB(o){return o instanceof Error&&o.message.toLowerCase().includes("document is not focused")?(Pn('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function WW(o){if(!RB())try{await navigator.clipboard.writeText(JSON.stringify(o.state.value)),Pn("Global state copied to clipboard.")}catch(i){if(zB(i))return;Pn("Failed to serialize the state. Check the console for more details.","error"),console.error(i)}}async function qW(o){if(!RB())try{jB(o,JSON.parse(await navigator.clipboard.readText())),Pn("Global state pasted from clipboard.")}catch(i){if(zB(i))return;Pn("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(i)}}async function GW(o){try{LB(new Blob([JSON.stringify(o.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(i){Pn("Failed to export the state as JSON. Check the console for more details.","error"),console.error(i)}}let Nr;function KW(){Nr||(Nr=document.createElement("input"),Nr.type="file",Nr.accept=".json");function o(){return new Promise((i,a)=>{Nr.onchange=async()=>{const d=Nr.files;if(!d)return i(null);const h=d.item(0);return i(h?{text:await h.text(),file:h}:null)},Nr.oncancel=()=>i(null),Nr.onerror=a,Nr.click()})}return o}async function YW(o){try{const a=await KW()();if(!a)return;const{text:d,file:h}=a;jB(o,JSON.parse(d)),Pn(`Global state imported from "${h.name}".`)}catch(i){Pn("Failed to import the state from JSON. Check the console for more details.","error"),console.error(i)}}function jB(o,i){for(const a in i){const d=o.state.value[a];d?Object.assign(d,i[a]):o.state.value[a]=i[a]}}function Mi(o){return{_custom:{display:o}}}const $B="\u{1F34D} Pinia (root)",iw="_root";function QW(o){return mA(o)?{id:iw,label:$B}:{id:o.$id,label:o.$id}}function ZW(o){if(mA(o)){const a=Array.from(o._s.keys()),d=o._s;return{state:a.map(m=>({editable:!0,key:m,value:o.state.value[m]})),getters:a.filter(m=>d.get(m)._getters).map(m=>{const g=d.get(m);return{editable:!1,key:m,value:g._getters.reduce((k,f)=>(k[f]=g[f],k),{})}})}}const i={state:Object.keys(o.$state).map(a=>({editable:!0,key:a,value:o.$state[a]}))};return o._getters&&o._getters.length&&(i.getters=o._getters.map(a=>({editable:!1,key:a,value:o[a]}))),o._customProperties.size&&(i.customProperties=Array.from(o._customProperties).map(a=>({editable:!0,key:a,value:o[a]}))),i}function JW(o){return o?Array.isArray(o)?o.reduce((i,a)=>(i.keys.push(a.key),i.operations.push(a.type),i.oldValue[a.key]=a.oldValue,i.newValue[a.key]=a.newValue,i),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Mi(o.type),key:Mi(o.key),oldValue:o.oldValue,newValue:o.newValue}:{}}function XW(o){switch(o){case rr.direct:return"mutation";case rr.patchFunction:return"$patch";case rr.patchObject:return"$patch";default:return"unknown"}}let gc=!0;const am=[],Na="pinia:mutations",Yn="pinia",{assign:eq}=Object,Nm=o=>"\u{1F34D} "+o;function tq(o,i){uA({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:am,app:o},a=>{typeof a.now!="function"&&Pn("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.addTimelineLayer({id:Na,label:"Pinia \u{1F34D}",color:15064968}),a.addInspector({id:Yn,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{WW(i)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await qW(i),a.sendInspectorTree(Yn),a.sendInspectorState(Yn)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{GW(i)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await YW(i),a.sendInspectorTree(Yn),a.sendInspectorState(Yn)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:d=>{const h=i._s.get(d);h?typeof h.$reset!="function"?Pn(`Cannot reset "${d}" store because it doesn't have a "$reset" method implemented.`,"warn"):(h.$reset(),Pn(`Store "${d}" reset.`)):Pn(`Cannot reset "${d}" store because it wasn't found.`,"warn")}}]}),a.on.inspectComponent((d,h)=>{const m=d.componentInstance&&d.componentInstance.proxy;if(m&&m._pStores){const g=d.componentInstance.proxy._pStores;Object.values(g).forEach(k=>{d.instanceData.state.push({type:Nm(k.$id),key:"state",editable:!0,value:k._isOptionsAPI?{_custom:{value:kt(k.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>k.$reset()}]}}:Object.keys(k.$state).reduce((f,C)=>(f[C]=k.$state[C],f),{})}),k._getters&&k._getters.length&&d.instanceData.state.push({type:Nm(k.$id),key:"getters",editable:!1,value:k._getters.reduce((f,C)=>{try{f[C]=k[C]}catch(y){f[C]=y}return f},{})})})}}),a.on.getInspectorTree(d=>{if(d.app===o&&d.inspectorId===Yn){let h=[i];h=h.concat(Array.from(i._s.values())),d.rootNodes=(d.filter?h.filter(m=>"$id"in m?m.$id.toLowerCase().includes(d.filter.toLowerCase()):$B.toLowerCase().includes(d.filter.toLowerCase())):h).map(QW)}}),a.on.getInspectorState(d=>{if(d.app===o&&d.inspectorId===Yn){const h=d.nodeId===iw?i:i._s.get(d.nodeId);if(!h)return;h&&(d.state=ZW(h))}}),a.on.editInspectorState((d,h)=>{if(d.app===o&&d.inspectorId===Yn){const m=d.nodeId===iw?i:i._s.get(d.nodeId);if(!m)return Pn(`store "${d.nodeId}" not found`,"error");const{path:g}=d;mA(m)?g.unshift("state"):(g.length!==1||!m._customProperties.has(g[0])||g[0]in m.$state)&&g.unshift("$state"),gc=!1,d.set(m,g,d.state.value),gc=!0}}),a.on.editComponentState(d=>{if(d.type.startsWith("\u{1F34D}")){const h=d.type.replace(/^🍍\s*/,""),m=i._s.get(h);if(!m)return Pn(`store "${h}" not found`,"error");const{path:g}=d;if(g[0]!=="state")return Pn(`Invalid path for store "${h}":
${g}
Only state can be modified.`);g[0]="$state",gc=!1,d.set(m,g,d.state.value),gc=!0}})})}function nq(o,i){am.includes(Nm(i.$id))||am.push(Nm(i.$id)),uA({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:am,app:o,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},a=>{const d=typeof a.now=="function"?a.now.bind(a):Date.now;i.$onAction(({after:g,onError:k,name:f,args:C})=>{const y=VB++;a.addTimelineEvent({layerId:Na,event:{time:d(),title:"\u{1F6EB} "+f,subtitle:"start",data:{store:Mi(i.$id),action:Mi(f),args:C},groupId:y}}),g(w=>{Ls=void 0,a.addTimelineEvent({layerId:Na,event:{time:d(),title:"\u{1F6EC} "+f,subtitle:"end",data:{store:Mi(i.$id),action:Mi(f),args:C,result:w},groupId:y}})}),k(w=>{Ls=void 0,a.addTimelineEvent({layerId:Na,event:{time:d(),logType:"error",title:"\u{1F4A5} "+f,subtitle:"end",data:{store:Mi(i.$id),action:Mi(f),args:C,error:w},groupId:y}})})},!0),i._customProperties.forEach(g=>{St(()=>V(i[g]),(k,f)=>{a.notifyComponentUpdate(),a.sendInspectorState(Yn),gc&&a.addTimelineEvent({layerId:Na,event:{time:d(),title:"Change",subtitle:g,data:{newValue:k,oldValue:f},groupId:Ls}})},{deep:!0})}),i.$subscribe(({events:g,type:k},f)=>{if(a.notifyComponentUpdate(),a.sendInspectorState(Yn),!gc)return;const C={time:d(),title:XW(k),data:eq({store:Mi(i.$id)},JW(g)),groupId:Ls};k===rr.patchFunction?C.subtitle="\u2935\uFE0F":k===rr.patchObject?C.subtitle="\u{1F9E9}":g&&!Array.isArray(g)&&(C.subtitle=g.type),g&&(C.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:g}}),a.addTimelineEvent({layerId:Na,event:C})},{detached:!0,flush:"sync"});const h=i._hotUpdate;i._hotUpdate=tr(g=>{h(g),a.addTimelineEvent({layerId:Na,event:{time:d(),title:"\u{1F525} "+i.$id,subtitle:"HMR update",data:{store:Mi(i.$id),info:Mi("HMR update")}}}),a.notifyComponentUpdate(),a.sendInspectorTree(Yn),a.sendInspectorState(Yn)});const{$dispose:m}=i;i.$dispose=()=>{m(),a.notifyComponentUpdate(),a.sendInspectorTree(Yn),a.sendInspectorState(Yn),a.getSettings().logStoreChanges&&Pn(`Disposed "${i.$id}" store \u{1F5D1}`)},a.notifyComponentUpdate(),a.sendInspectorTree(Yn),a.sendInspectorState(Yn),a.getSettings().logStoreChanges&&Pn(`"${i.$id}" store installed \u{1F195}`)})}let VB=0,Ls;function R2(o,i,a){const d=i.reduce((h,m)=>(h[m]=kt(o)[m],h),{});for(const h in d)o[h]=function(){const m=VB,g=a?new Proxy(o,{get(...f){return Ls=m,Reflect.get(...f)},set(...f){return Ls=m,Reflect.set(...f)}}):o;Ls=m;const k=d[h].apply(g,arguments);return Ls=void 0,k}}function oq({app:o,store:i,options:a}){if(i.$id.startsWith("__hot:"))return;i._isOptionsAPI=!!a.state,R2(i,Object.keys(a.actions),i._isOptionsAPI);const d=i._hotUpdate;kt(i)._hotUpdate=function(h){d.apply(this,arguments),R2(i,Object.keys(h._hmrPayload.actions),!!i._isOptionsAPI)},nq(o,i)}function iq(){const o=Rw(!0),i=o.run(()=>Me({}));let a=[],d=[];const h=tr({install(m){hh(h),h._a=m,m.provide(NB,h),m.config.globalProperties.$pinia=h,Bm&&tq(m,h),d.forEach(g=>a.push(g)),d=[]},use(m){return!this._a&&!$W?d.push(m):a.push(m),this},_p:a,_a:null,_e:o,_s:new Map,state:i});return Bm&&typeof Proxy!="undefined"&&h.use(oq),h}function FB(o,i){for(const a in i){const d=i[a];if(!(a in o))continue;const h=o[a];Ja(h)&&Ja(d)&&!Vt(d)&&!zo(d)?o[a]=FB(h,d):o[a]=d}return o}const rq=()=>{};function z2(o,i,a,d=rq){o.push(i);const h=()=>{const m=o.indexOf(i);m>-1&&(o.splice(m,1),d())};return!a&&Gm()&&zw(h),h}function rc(o,...i){o.slice().forEach(a=>{a(...i)})}const sq=o=>o();function rw(o,i){o instanceof Map&&i instanceof Map&&i.forEach((a,d)=>o.set(d,a)),o instanceof Set&&i instanceof Set&&i.forEach(o.add,o);for(const a in i){if(!i.hasOwnProperty(a))continue;const d=i[a],h=o[a];Ja(h)&&Ja(d)&&o.hasOwnProperty(a)&&!Vt(d)&&!zo(d)?o[a]=rw(h,d):o[a]=d}return o}const aq=Symbol("pinia:skipHydration");function lq(o){return!Ja(o)||!o.hasOwnProperty(aq)}const{assign:ci}=Object;function j2(o){return!!(Vt(o)&&o.effect)}function $2(o,i,a,d){const{state:h,actions:m,getters:g}=i,k=a.state.value[o];let f;function C(){!k&&!d&&(a.state.value[o]=h?h():{});const y=Dv(d?Me(h?h():{}).value:a.state.value[o]);return ci(y,m,Object.keys(g||{}).reduce((w,v)=>(v in y&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${v}" in store "${o}".`),w[v]=tr(Y(()=>{hh(a);const E=a._s.get(o);return g[v].call(E,E)})),w),{}))}return f=sw(o,C,i,a,d,!0),f}function sw(o,i,a={},d,h,m){let g;const k=ci({actions:{}},a);if(!d._e.active)throw new Error("Pinia destroyed");const f={deep:!0};f.onTrigger=U=>{C?E=U:C==!1&&!K._hotUpdating&&(Array.isArray(E)?E.push(U):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let C,y,w=[],v=[],E;const S=d.state.value[o];!m&&!S&&!h&&(d.state.value[o]={});const M=Me({});let N;function R(U){let te;C=y=!1,E=[],typeof U=="function"?(U(d.state.value[o]),te={type:rr.patchFunction,storeId:o,events:E}):(rw(d.state.value[o],U),te={type:rr.patchObject,payload:U,storeId:o,events:E});const ae=N=Symbol();so().then(()=>{N===ae&&(C=!0)}),y=!0,rc(w,te,d.state.value[o])}const L=m?function(){const{state:te}=a,ae=te?te():{};this.$patch(be=>{ci(be,ae)})}:()=>{throw new Error(`\u{1F34D}: Store "${o}" is built using the setup syntax and does not implement $reset().`)};function z(){g.stop(),w=[],v=[],d._s.delete(o)}function $(U,te){return function(){hh(d);const ae=Array.from(arguments),be=[],ye=[];function me(de){be.push(de)}function ue(de){ye.push(de)}rc(v,{args:ae,name:U,store:K,after:me,onError:ue});let he;try{he=te.apply(this&&this.$id===o?this:K,ae)}catch(de){throw rc(ye,de),de}return he instanceof Promise?he.then(de=>(rc(be,de),de)).catch(de=>(rc(ye,de),Promise.reject(de))):(rc(be,he),he)}}const q=tr({actions:{},getters:{},state:[],hotState:M}),J={_p:d,$id:o,$onAction:z2.bind(null,v),$patch:R,$reset:L,$subscribe(U,te={}){const ae=z2(w,U,te.detached,()=>be()),be=g.run(()=>St(()=>d.state.value[o],ye=>{(te.flush==="sync"?y:C)&&U({storeId:o,type:rr.direct,events:E},ye)},ci({},f,te)));return ae},$dispose:z},K=xt(ci({_hmrPayload:q,_customProperties:tr(new Set)},J));d._s.set(o,K);const B=(d._a&&d._a.runWithContext||sq)(()=>d._e.run(()=>(g=Rw()).run(i)));for(const U in B){const te=B[U];if(Vt(te)&&!j2(te)||zo(te))h?Ff(M.value,U,G(B,U)):m||(S&&lq(te)&&(Vt(te)?te.value=S[U]:rw(te,S[U])),d.state.value[o][U]=te),q.state.push(U);else if(typeof te=="function"){const ae=h?te:$(U,te);B[U]=ae,q.actions[U]=te,k.actions[U]=te}else j2(te)&&(q.getters[U]=m?a.getters[U]:te,ug&&(B._getters||(B._getters=tr([]))).push(U))}if(ci(K,B),ci(kt(K),B),Object.defineProperty(K,"$state",{get:()=>h?M.value:d.state.value[o],set:U=>{if(h)throw new Error("cannot set hotState");R(te=>{ci(te,U)})}}),K._hotUpdate=tr(U=>{K._hotUpdating=!0,U._hmrPayload.state.forEach(te=>{if(te in K.$state){const ae=U.$state[te],be=K.$state[te];typeof ae=="object"&&Ja(ae)&&Ja(be)?FB(ae,be):U.$state[te]=be}Ff(K,te,G(U.$state,te))}),Object.keys(K.$state).forEach(te=>{te in U.$state||nv(K,te)}),C=!1,y=!1,d.state.value[o]=G(U._hmrPayload,"hotState"),y=!0,so().then(()=>{C=!0});for(const te in U._hmrPayload.actions){const ae=U[te];Ff(K,te,$(te,ae))}for(const te in U._hmrPayload.getters){const ae=U._hmrPayload.getters[te],be=m?Y(()=>(hh(d),ae.call(K,K))):ae;Ff(K,te,be)}Object.keys(K._hmrPayload.getters).forEach(te=>{te in U._hmrPayload.getters||nv(K,te)}),Object.keys(K._hmrPayload.actions).forEach(te=>{te in U._hmrPayload.actions||nv(K,te)}),K._hmrPayload=U._hmrPayload,K._getters=U._getters,K._hotUpdating=!1}),Bm){const U={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(te=>{Object.defineProperty(K,te,ci({value:K[te]},U))})}return d._p.forEach(U=>{if(Bm){const te=g.run(()=>U({store:K,app:d._a,pinia:d,options:k}));Object.keys(te||{}).forEach(ae=>K._customProperties.add(ae)),ci(K,te)}else ci(K,g.run(()=>U({store:K,app:d._a,pinia:d,options:k})))}),K.$state&&typeof K.$state=="object"&&typeof K.$state.constructor=="function"&&!K.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${K.$id}".`),S&&m&&a.hydrate&&a.hydrate(K.$state,S),C=!0,y=!0,K}function cq(o,i,a){let d,h;const m=typeof i=="function";if(typeof o=="string")d=o,h=m?a:i;else if(h=o,d=o.id,typeof d!="string")throw new Error('[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.');function g(k,f){const C=wM();if(k=k||(C?gn(NB,null):null),k&&hh(k),!ow)throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);k=ow,k._s.has(d)||(m?sw(d,i,h,k):$2(d,h,k),g._pinia=k);const y=k._s.get(d);if(f){const w="__hot:"+d,v=m?sw(w,i,h,k,!0):$2(w,ci({},h),k,!0);f._hotUpdate(v),delete k.state.value[w],k._s.delete(w)}if(ug){const w=To();if(w&&w.proxy&&!f){const v=w.proxy,E="_pStores"in v?v._pStores:v._pStores={};E[d]=y}}return y}return g.$id=d,g}function eo(o){{o=kt(o);const i={};for(const a in o){const d=o[a];(Vt(d)||zo(d))&&(i[a]=G(o,a))}return i}}var nr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function dq(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function HB(o){if(o.__esModule)return o;var i=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(o).forEach(function(a){var d=Object.getOwnPropertyDescriptor(o,a);Object.defineProperty(i,a,d.get?d:{enumerable:!0,get:function(){return o[a]}})}),i}var gA={exports:{}},UB=function(i,a){return function(){for(var h=new Array(arguments.length),m=0;m<h.length;m++)h[m]=arguments[m];return i.apply(a,h)}},uq=UB,bA=Object.prototype.toString,kA=function(o){return function(i){var a=bA.call(i);return o[a]||(o[a]=a.slice(8,-1).toLowerCase())}}(Object.create(null));function rl(o){return o=o.toLowerCase(),function(a){return kA(a)===o}}function _A(o){return Array.isArray(o)}function Om(o){return typeof o=="undefined"}function hq(o){return o!==null&&!Om(o)&&o.constructor!==null&&!Om(o.constructor)&&typeof o.constructor.isBuffer=="function"&&o.constructor.isBuffer(o)}var WB=rl("ArrayBuffer");function pq(o){var i;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?i=ArrayBuffer.isView(o):i=o&&o.buffer&&WB(o.buffer),i}function fq(o){return typeof o=="string"}function mq(o){return typeof o=="number"}function qB(o){return o!==null&&typeof o=="object"}function lm(o){if(kA(o)!=="object")return!1;var i=Object.getPrototypeOf(o);return i===null||i===Object.prototype}var gq=rl("Date"),bq=rl("File"),kq=rl("Blob"),_q=rl("FileList");function vA(o){return bA.call(o)==="[object Function]"}function vq(o){return qB(o)&&vA(o.pipe)}function wq(o){var i="[object FormData]";return o&&(typeof FormData=="function"&&o instanceof FormData||bA.call(o)===i||vA(o.toString)&&o.toString()===i)}var Aq=rl("URLSearchParams");function Cq(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function yq(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function wA(o,i){if(!(o===null||typeof o=="undefined"))if(typeof o!="object"&&(o=[o]),_A(o))for(var a=0,d=o.length;a<d;a++)i.call(null,o[a],a,o);else for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&i.call(null,o[h],h,o)}function aw(){var o={};function i(h,m){lm(o[m])&&lm(h)?o[m]=aw(o[m],h):lm(h)?o[m]=aw({},h):_A(h)?o[m]=h.slice():o[m]=h}for(var a=0,d=arguments.length;a<d;a++)wA(arguments[a],i);return o}function Eq(o,i,a){return wA(i,function(h,m){a&&typeof h=="function"?o[m]=uq(h,a):o[m]=h}),o}function xq(o){return o.charCodeAt(0)===65279&&(o=o.slice(1)),o}function Tq(o,i,a,d){o.prototype=Object.create(i.prototype,d),o.prototype.constructor=o,a&&Object.assign(o.prototype,a)}function Dq(o,i,a){var d,h,m,g={};i=i||{};do{for(d=Object.getOwnPropertyNames(o),h=d.length;h-- >0;)m=d[h],g[m]||(i[m]=o[m],g[m]=!0);o=Object.getPrototypeOf(o)}while(o&&(!a||a(o,i))&&o!==Object.prototype);return i}function Sq(o,i,a){o=String(o),(a===void 0||a>o.length)&&(a=o.length),a-=i.length;var d=o.indexOf(i,a);return d!==-1&&d===a}function Iq(o){if(!o)return null;var i=o.length;if(Om(i))return null;for(var a=new Array(i);i-- >0;)a[i]=o[i];return a}var Mq=function(o){return function(i){return o&&i instanceof o}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Kn={isArray:_A,isArrayBuffer:WB,isBuffer:hq,isFormData:wq,isArrayBufferView:pq,isString:fq,isNumber:mq,isObject:qB,isPlainObject:lm,isUndefined:Om,isDate:gq,isFile:bq,isBlob:kq,isFunction:vA,isStream:vq,isURLSearchParams:Aq,isStandardBrowserEnv:yq,forEach:wA,merge:aw,extend:Eq,trim:Cq,stripBOM:xq,inherits:Tq,toFlatObject:Dq,kindOf:kA,kindOfTest:rl,endsWith:Sq,toArray:Iq,isTypedArray:Mq,isFileList:_q},sc=Kn;function V2(o){return encodeURIComponent(o).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var GB=function(i,a,d){if(!a)return i;var h;if(d)h=d(a);else if(sc.isURLSearchParams(a))h=a.toString();else{var m=[];sc.forEach(a,function(f,C){f===null||typeof f=="undefined"||(sc.isArray(f)?C=C+"[]":f=[f],sc.forEach(f,function(w){sc.isDate(w)?w=w.toISOString():sc.isObject(w)&&(w=JSON.stringify(w)),m.push(V2(C)+"="+V2(w))}))}),h=m.join("&")}if(h){var g=i.indexOf("#");g!==-1&&(i=i.slice(0,g)),i+=(i.indexOf("?")===-1?"?":"&")+h}return i},Bq=Kn;function hg(){this.handlers=[]}hg.prototype.use=function(i,a,d){return this.handlers.push({fulfilled:i,rejected:a,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1};hg.prototype.eject=function(i){this.handlers[i]&&(this.handlers[i]=null)};hg.prototype.forEach=function(i){Bq.forEach(this.handlers,function(d){d!==null&&i(d)})};var Nq=hg,Oq=Kn,Pq=function(i,a){Oq.forEach(i,function(h,m){m!==a&&m.toUpperCase()===a.toUpperCase()&&(i[a]=h,delete i[m])})},KB=Kn;function Bc(o,i,a,d,h){Error.call(this),this.message=o,this.name="AxiosError",i&&(this.code=i),a&&(this.config=a),d&&(this.request=d),h&&(this.response=h)}KB.inherits(Bc,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var YB=Bc.prototype,QB={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(o){QB[o]={value:o}});Object.defineProperties(Bc,QB);Object.defineProperty(YB,"isAxiosError",{value:!0});Bc.from=function(o,i,a,d,h,m){var g=Object.create(YB);return KB.toFlatObject(o,g,function(f){return f!==Error.prototype}),Bc.call(g,o.message,i,a,d,h),g.name=o.name,m&&Object.assign(g,m),g};var Qc=Bc,ZB={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ii=Kn;function Lq(o,i){i=i||new FormData;var a=[];function d(m){return m===null?"":Ii.isDate(m)?m.toISOString():Ii.isArrayBuffer(m)||Ii.isTypedArray(m)?typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,g){if(Ii.isPlainObject(m)||Ii.isArray(m)){if(a.indexOf(m)!==-1)throw Error("Circular reference detected in "+g);a.push(m),Ii.forEach(m,function(f,C){if(!Ii.isUndefined(f)){var y=g?g+"."+C:C,w;if(f&&!g&&typeof f=="object"){if(Ii.endsWith(C,"{}"))f=JSON.stringify(f);else if(Ii.endsWith(C,"[]")&&(w=Ii.toArray(f))){w.forEach(function(v){!Ii.isUndefined(v)&&i.append(y,d(v))});return}}h(f,y)}}),a.pop()}else i.append(g,d(m))}return h(o),i}var JB=Lq,ov=Qc,Rq=function(i,a,d){var h=d.config.validateStatus;!d.status||!h||h(d.status)?i(d):a(new ov("Request failed with status code "+d.status,[ov.ERR_BAD_REQUEST,ov.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d))},Hf=Kn,zq=Hf.isStandardBrowserEnv()?function(){return{write:function(a,d,h,m,g,k){var f=[];f.push(a+"="+encodeURIComponent(d)),Hf.isNumber(h)&&f.push("expires="+new Date(h).toGMTString()),Hf.isString(m)&&f.push("path="+m),Hf.isString(g)&&f.push("domain="+g),k===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var d=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return d?decodeURIComponent(d[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),jq=function(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)},$q=function(i,a){return a?i.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):i},Vq=jq,Fq=$q,XB=function(i,a){return i&&!Vq(a)?Fq(i,a):a},iv=Kn,Hq=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Uq=function(i){var a={},d,h,m;return i&&iv.forEach(i.split(`
`),function(k){if(m=k.indexOf(":"),d=iv.trim(k.substr(0,m)).toLowerCase(),h=iv.trim(k.substr(m+1)),d){if(a[d]&&Hq.indexOf(d)>=0)return;d==="set-cookie"?a[d]=(a[d]?a[d]:[]).concat([h]):a[d]=a[d]?a[d]+", "+h:h}}),a},F2=Kn,Wq=F2.isStandardBrowserEnv()?function(){var i=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),d;function h(m){var g=m;return i&&(a.setAttribute("href",g),g=a.href),a.setAttribute("href",g),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return d=h(window.location.href),function(g){var k=F2.isString(g)?h(g):g;return k.protocol===d.protocol&&k.host===d.host}}():function(){return function(){return!0}}(),lw=Qc,qq=Kn;function eN(o){lw.call(this,o==null?"canceled":o,lw.ERR_CANCELED),this.name="CanceledError"}qq.inherits(eN,lw,{__CANCEL__:!0});var pg=eN,Gq=function(i){var a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return a&&a[1]||""},Bu=Kn,Kq=Rq,Yq=zq,Qq=GB,Zq=XB,Jq=Uq,Xq=Wq,eG=ZB,Or=Qc,tG=pg,nG=Gq,H2=function(i){return new Promise(function(d,h){var m=i.data,g=i.headers,k=i.responseType,f;function C(){i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}Bu.isFormData(m)&&Bu.isStandardBrowserEnv()&&delete g["Content-Type"];var y=new XMLHttpRequest;if(i.auth){var w=i.auth.username||"",v=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+v)}var E=Zq(i.baseURL,i.url);y.open(i.method.toUpperCase(),Qq(E,i.params,i.paramsSerializer),!0),y.timeout=i.timeout;function S(){if(!!y){var R="getAllResponseHeaders"in y?Jq(y.getAllResponseHeaders()):null,L=!k||k==="text"||k==="json"?y.responseText:y.response,z={data:L,status:y.status,statusText:y.statusText,headers:R,config:i,request:y};Kq(function(q){d(q),C()},function(q){h(q),C()},z),y=null}}if("onloadend"in y?y.onloadend=S:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(S)},y.onabort=function(){!y||(h(new Or("Request aborted",Or.ECONNABORTED,i,y)),y=null)},y.onerror=function(){h(new Or("Network Error",Or.ERR_NETWORK,i,y,y)),y=null},y.ontimeout=function(){var L=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded",z=i.transitional||eG;i.timeoutErrorMessage&&(L=i.timeoutErrorMessage),h(new Or(L,z.clarifyTimeoutError?Or.ETIMEDOUT:Or.ECONNABORTED,i,y)),y=null},Bu.isStandardBrowserEnv()){var M=(i.withCredentials||Xq(E))&&i.xsrfCookieName?Yq.read(i.xsrfCookieName):void 0;M&&(g[i.xsrfHeaderName]=M)}"setRequestHeader"in y&&Bu.forEach(g,function(L,z){typeof m=="undefined"&&z.toLowerCase()==="content-type"?delete g[z]:y.setRequestHeader(z,L)}),Bu.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),k&&k!=="json"&&(y.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&y.addEventListener("progress",i.onDownloadProgress),typeof i.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",i.onUploadProgress),(i.cancelToken||i.signal)&&(f=function(R){!y||(h(!R||R&&R.type?new tG:R),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f))),m||(m=null);var N=nG(E);if(N&&["http","https","file"].indexOf(N)===-1){h(new Or("Unsupported protocol "+N+":",Or.ERR_BAD_REQUEST,i));return}y.send(m)})},oG=null,On=Kn,U2=Pq,W2=Qc,iG=ZB,rG=JB,sG={"Content-Type":"application/x-www-form-urlencoded"};function q2(o,i){!On.isUndefined(o)&&On.isUndefined(o["Content-Type"])&&(o["Content-Type"]=i)}function aG(){var o;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(o=H2),o}function lG(o,i,a){if(On.isString(o))try{return(i||JSON.parse)(o),On.trim(o)}catch(d){if(d.name!=="SyntaxError")throw d}return(a||JSON.stringify)(o)}var fg={transitional:iG,adapter:aG(),transformRequest:[function(i,a){if(U2(a,"Accept"),U2(a,"Content-Type"),On.isFormData(i)||On.isArrayBuffer(i)||On.isBuffer(i)||On.isStream(i)||On.isFile(i)||On.isBlob(i))return i;if(On.isArrayBufferView(i))return i.buffer;if(On.isURLSearchParams(i))return q2(a,"application/x-www-form-urlencoded;charset=utf-8"),i.toString();var d=On.isObject(i),h=a&&a["Content-Type"],m;if((m=On.isFileList(i))||d&&h==="multipart/form-data"){var g=this.env&&this.env.FormData;return rG(m?{"files[]":i}:i,g&&new g)}else if(d||h==="application/json")return q2(a,"application/json"),lG(i);return i}],transformResponse:[function(i){var a=this.transitional||fg.transitional,d=a&&a.silentJSONParsing,h=a&&a.forcedJSONParsing,m=!d&&this.responseType==="json";if(m||h&&On.isString(i)&&i.length)try{return JSON.parse(i)}catch(g){if(m)throw g.name==="SyntaxError"?W2.from(g,W2.ERR_BAD_RESPONSE,this,null,this.response):g}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oG},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};On.forEach(["delete","get","head"],function(i){fg.headers[i]={}});On.forEach(["post","put","patch"],function(i){fg.headers[i]=On.merge(sG)});var AA=fg,cG=Kn,dG=AA,uG=function(i,a,d){var h=this||dG;return cG.forEach(d,function(g){i=g.call(h,i,a)}),i},tN=function(i){return!!(i&&i.__CANCEL__)},G2=Kn,rv=uG,hG=tN,pG=AA,fG=pg;function sv(o){if(o.cancelToken&&o.cancelToken.throwIfRequested(),o.signal&&o.signal.aborted)throw new fG}var mG=function(i){sv(i),i.headers=i.headers||{},i.data=rv.call(i,i.data,i.headers,i.transformRequest),i.headers=G2.merge(i.headers.common||{},i.headers[i.method]||{},i.headers),G2.forEach(["delete","get","head","post","put","patch","common"],function(h){delete i.headers[h]});var a=i.adapter||pG.adapter;return a(i).then(function(h){return sv(i),h.data=rv.call(i,h.data,h.headers,i.transformResponse),h},function(h){return hG(h)||(sv(i),h&&h.response&&(h.response.data=rv.call(i,h.response.data,h.response.headers,i.transformResponse))),Promise.reject(h)})},Lo=Kn,nN=function(i,a){a=a||{};var d={};function h(y,w){return Lo.isPlainObject(y)&&Lo.isPlainObject(w)?Lo.merge(y,w):Lo.isPlainObject(w)?Lo.merge({},w):Lo.isArray(w)?w.slice():w}function m(y){if(Lo.isUndefined(a[y])){if(!Lo.isUndefined(i[y]))return h(void 0,i[y])}else return h(i[y],a[y])}function g(y){if(!Lo.isUndefined(a[y]))return h(void 0,a[y])}function k(y){if(Lo.isUndefined(a[y])){if(!Lo.isUndefined(i[y]))return h(void 0,i[y])}else return h(void 0,a[y])}function f(y){if(y in a)return h(i[y],a[y]);if(y in i)return h(void 0,i[y])}var C={url:g,method:g,data:g,baseURL:k,transformRequest:k,transformResponse:k,paramsSerializer:k,timeout:k,timeoutMessage:k,withCredentials:k,adapter:k,responseType:k,xsrfCookieName:k,xsrfHeaderName:k,onUploadProgress:k,onDownloadProgress:k,decompress:k,maxContentLength:k,maxBodyLength:k,beforeRedirect:k,transport:k,httpAgent:k,httpsAgent:k,cancelToken:k,socketPath:k,responseEncoding:k,validateStatus:f};return Lo.forEach(Object.keys(i).concat(Object.keys(a)),function(w){var v=C[w]||m,E=v(w);Lo.isUndefined(E)&&v!==f||(d[w]=E)}),d},oN={version:"0.27.2"},gG=oN.version,Bs=Qc,CA={};["object","boolean","number","function","string","symbol"].forEach(function(o,i){CA[o]=function(d){return typeof d===o||"a"+(i<1?"n ":" ")+o}});var K2={};CA.transitional=function(i,a,d){function h(m,g){return"[Axios v"+gG+"] Transitional option '"+m+"'"+g+(d?". "+d:"")}return function(m,g,k){if(i===!1)throw new Bs(h(g," has been removed"+(a?" in "+a:"")),Bs.ERR_DEPRECATED);return a&&!K2[g]&&(K2[g]=!0,console.warn(h(g," has been deprecated since v"+a+" and will be removed in the near future"))),i?i(m,g,k):!0}};function bG(o,i,a){if(typeof o!="object")throw new Bs("options must be an object",Bs.ERR_BAD_OPTION_VALUE);for(var d=Object.keys(o),h=d.length;h-- >0;){var m=d[h],g=i[m];if(g){var k=o[m],f=k===void 0||g(k,m,o);if(f!==!0)throw new Bs("option "+m+" must be "+f,Bs.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new Bs("Unknown option "+m,Bs.ERR_BAD_OPTION)}}var kG={assertOptions:bG,validators:CA},iN=Kn,_G=GB,Y2=Nq,Q2=mG,mg=nN,vG=XB,rN=kG,ac=rN.validators;function Nc(o){this.defaults=o,this.interceptors={request:new Y2,response:new Y2}}Nc.prototype.request=function(i,a){typeof i=="string"?(a=a||{},a.url=i):a=i||{},a=mg(this.defaults,a),a.method?a.method=a.method.toLowerCase():this.defaults.method?a.method=this.defaults.method.toLowerCase():a.method="get";var d=a.transitional;d!==void 0&&rN.assertOptions(d,{silentJSONParsing:ac.transitional(ac.boolean),forcedJSONParsing:ac.transitional(ac.boolean),clarifyTimeoutError:ac.transitional(ac.boolean)},!1);var h=[],m=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(a)===!1||(m=m&&E.synchronous,h.unshift(E.fulfilled,E.rejected))});var g=[];this.interceptors.response.forEach(function(E){g.push(E.fulfilled,E.rejected)});var k;if(!m){var f=[Q2,void 0];for(Array.prototype.unshift.apply(f,h),f=f.concat(g),k=Promise.resolve(a);f.length;)k=k.then(f.shift(),f.shift());return k}for(var C=a;h.length;){var y=h.shift(),w=h.shift();try{C=y(C)}catch(v){w(v);break}}try{k=Q2(C)}catch(v){return Promise.reject(v)}for(;g.length;)k=k.then(g.shift(),g.shift());return k};Nc.prototype.getUri=function(i){i=mg(this.defaults,i);var a=vG(i.baseURL,i.url);return _G(a,i.params,i.paramsSerializer)};iN.forEach(["delete","get","head","options"],function(i){Nc.prototype[i]=function(a,d){return this.request(mg(d||{},{method:i,url:a,data:(d||{}).data}))}});iN.forEach(["post","put","patch"],function(i){function a(d){return function(m,g,k){return this.request(mg(k||{},{method:i,headers:d?{"Content-Type":"multipart/form-data"}:{},url:m,data:g}))}}Nc.prototype[i]=a(),Nc.prototype[i+"Form"]=a(!0)});var wG=Nc,AG=pg;function Oc(o){if(typeof o!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(h){i=h});var a=this;this.promise.then(function(d){if(!!a._listeners){var h,m=a._listeners.length;for(h=0;h<m;h++)a._listeners[h](d);a._listeners=null}}),this.promise.then=function(d){var h,m=new Promise(function(g){a.subscribe(g),h=g}).then(d);return m.cancel=function(){a.unsubscribe(h)},m},o(function(h){a.reason||(a.reason=new AG(h),i(a.reason))})}Oc.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Oc.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]};Oc.prototype.unsubscribe=function(i){if(!!this._listeners){var a=this._listeners.indexOf(i);a!==-1&&this._listeners.splice(a,1)}};Oc.source=function(){var i,a=new Oc(function(h){i=h});return{token:a,cancel:i}};var CG=Oc,yG=function(i){return function(d){return i.apply(null,d)}},EG=Kn,xG=function(i){return EG.isObject(i)&&i.isAxiosError===!0},Z2=Kn,TG=UB,cm=wG,DG=nN,SG=AA;function sN(o){var i=new cm(o),a=TG(cm.prototype.request,i);return Z2.extend(a,cm.prototype,i),Z2.extend(a,i),a.create=function(h){return sN(DG(o,h))},a}var Eo=sN(SG);Eo.Axios=cm;Eo.CanceledError=pg;Eo.CancelToken=CG;Eo.isCancel=tN;Eo.VERSION=oN.version;Eo.toFormData=JB;Eo.AxiosError=Qc;Eo.Cancel=Eo.CanceledError;Eo.all=function(i){return Promise.all(i)};Eo.spread=yG;Eo.isAxiosError=xG;gA.exports=Eo;gA.exports.default=Eo;var Oa=gA.exports;const kn=cq("auth",()=>{const o=Me(null),i=Me(null),a=Me(null),d=Me(""),h=Me([]);async function m(k,f){try{const C=await Oa.post("http://13.210.146.57:1541/login",{username:k,password:f});if(C.status===200){const[y,w]=C.data.split("}{"),{authorities:v,usernameRes:E}=JSON.parse(y+"}"),{refreshToken:S,accessToken:M}=JSON.parse("{"+w);h.value=v,a.value=E,o.value=!0,a.value=k,d.value=f,localStorage.setItem("accessToken",M),localStorage.setItem("refreshToken",S)}}catch(C){throw i.value=!0,a.value=k,d.value=f,new Error(C)}}function g(){o.value=!1,i.value=!1,a.value=null,d.value=null,h.value=[],localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")}return Oa.interceptors.request.use(k=>{const f=localStorage.getItem("accessToken");return k.headers.Authorization=`Bearer ${f}`,k}),Oa.interceptors.response.use(k=>k,k=>{const f=k.config;return k.response.status===401&&!f._retry?(f._retry=!0,Oa.post("http://localhost:1541/login").then(C=>(f.headers.Authorization=`Bearer ${C}`,Oa(f)))):Promise.reject(k)}),{loginSuccess:o,loginError:i,userName:a,authoritiesRef:h,login:m,logout:g,isLoggedIn:Y(()=>o.value),hasLoginErrored:Y(()=>i.value),getUserName:Y(()=>a.value),getAuthorities:Y(()=>h.value===null||h.value===void 0?"USER":h.value.length>=2?"ADMIN":"USER")}});var Ht=(o,i)=>{const a=o.__vccOpts||o;for(const[d,h]of i)a[d]=h;return a};const IG={class:"navbar navbar-expand-sm navbar-dark bg-primary"},MG={class:"container-fluid"},BG=O("a",{class:"navbar-brand",href:"/"},"PORTFOLIO",-1),NG=O("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[O("span",{class:"navbar-toggler-icon"})],-1),OG={class:"collapse navbar-collapse",id:"navbarSupportedContent"},PG={class:"navbar-nav me-auto"},LG={class:"nav-item"},RG={class:"nav-item"},zG={class:"nav-item"},jG={class:"nav-item"},$G={key:0,class:"d-flex mg"},VG={key:1,class:"d-flex justify-content-center"},FG={key:0},HG=O("b",null,"\uAD00\uB9AC\uC790 : ",-1),UG=[HG],WG={class:"ms-1"},qG={__name:"TheHeader",setup(o){const i=kn(),{userName:a,loginSuccess:d}=eo(i),h=kn().getAuthorities,m=yn();console.log(h);const g=()=>{m.push({name:"MemberRegister"})},k=()=>{i.logout()};return(f,C)=>{const y=Wn("RouterLink"),w=Wn("router-link");return H(),ne("header",null,[O("nav",IG,[O("div",MG,[BG,NG,O("div",OG,[O("ul",PG,[O("li",LG,[Ue(y,{class:"nav-link","active-class":"active",to:"/notices"},{default:Te(()=>[rt(" \uACF5\uC9C0 ")]),_:1})]),O("li",RG,[Ue(y,{class:"nav-link","active-class":"active",to:"/boards"},{default:Te(()=>[rt(" \uC790\uC720\uAC8C\uC2DC\uD310 ")]),_:1})]),O("li",zG,[Ue(y,{class:"nav-link","active-class":"active",to:"/galleries"},{default:Te(()=>[rt(" \uAC24\uB7EC\uB9AC ")]),_:1})]),O("li",jG,[Ue(y,{class:"nav-link","active-class":"active",to:"/helps"},{default:Te(()=>[rt(" \uBB38\uC758 \uAC8C\uC2DC\uD310 ")]),_:1})])]),V(d)?(H(),ne("div",VG,[V(h)==="ADMIN"?(H(),ne("div",FG,[...UG])):Ne("v-if",!0),O("div",WG,[O("b",null,Ie(V(a))+"\uB2D8 ",1)]),O("div",{class:"me-2 ms-2"},[O("button",{class:"btn btn-sm btn-light fw-bold",onClick:k},"\uB85C\uADF8\uC544\uC6C3")])])):(H(),ne("div",$G,[V(d)?Ne("v-if",!0):(H(),Le(w,{key:0,to:"/login",class:"btn btn-outline-light me-2"},{default:Te(()=>[rt("Login")]),_:1})),O("button",{class:"btn btn-secondary",type:"button",onClick:g}," \uD68C\uC6D0\uAC00\uC785 ")]))])])])])}}};var GG=Ht(qG,[["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/layouts/TheHeader.vue"]]);const KG={},YG=O("div",null,[Ne("  <Test1></Test1>"),Ne("  <Test2></Test2>")],-1),QG={class:"container py-4"};function ZG(o,i){const a=Wn("RouterView");return H(),ne(ot,null,[YG,O("main",null,[O("div",QG,[Ue(a)])])],64)}var JG=Ht(KG,[["render",ZG],["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/layouts/TheView.vue"]]);const XG={__name:"App",setup(o){return(i,a)=>(H(),ne(ot,null,[Ue(GG),Ue(JG)],64))}};var eK=Ht(XG,[["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/App.vue"]]);const tK={class:"text-center py-5"},nK=O("h1",null,"Oops!",-1),oK=O("div",{class:"text-muted"},"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4! ",-1),iK={class:"text-muted"},rK={class:"mt-4"},sK=O("button",{class:"btn btn-primary"},"HOME",-1),aK={__name:"ErrorView",setup(o){const i=Xs(),a=yn(),d=Y(()=>i.params.errorMsg);return window.addEventListener("popstate",h=>{h.state&&h.state.back&&a.push("/")}),(h,m)=>{const g=Wn("RouterLink");return H(),ne("div",tK,[nK,oK,O("div",iK,Ie(d.value),1),O("div",rK,[Ue(g,{to:"/"},{default:Te(()=>[sK]),_:1})])])}}};var lK=Ht(aK,[["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/views/common/ErrorView.vue"]]);const cK={},dK={class:"text-center py-5"},uK=O("h1",null,"Oops!",-1),hK=O("h2",null,"404 Not Found",-1),pK=O("div",{class:"text-muted"},"\uC694\uCCAD\uD55C \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4!",-1),fK={class:"mt-4"},mK=O("button",{class:"btn btn-primary"},"HOME",-1);function gK(o,i){const a=Wn("RouterLink");return H(),ne("div",dK,[uK,hK,pK,O("div",fK,[Ue(a,{to:"/"},{default:Te(()=>[mK]),_:1})])])}var bK=Ht(cK,[["render",gK],["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/views/common/NotFoundView.vue"]]);const kK={class:"mt-5","aria-label":"Page navigation"},_K={class:"pagination justify-content-center"},vK=O("span",{"aria-hidden":"true"},"\xAB",-1),wK=[vK],AK=["onClick"],CK=O("span",{"aria-hidden":"true"},"\xBB",-1),yK=[CK],EK={__name:"ThePagination",props:{currentPage:{type:Number,required:!0},total:{type:Number,required:!0},size:{type:Number,required:!0}},emits:["page"],setup(o){const i=o,a=Y(()=>({disabled:i.currentPage<=1})),d=Y(()=>({disabled:i.currentPage*i.size>=i.total})),h=Y(()=>{const m=Math.max(i.currentPage,1),g=Math.floor((m-1)/i.size)*i.size+1;let k=Math.min(g+9,Math.ceil(i.total/i.size));return Array.from({length:k-g+1},(f,C)=>g+C)});return(m,g)=>(H(),ne("nav",kK,[O("ul",_K,[O("li",{class:We(["page-item",a.value])},[O("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:g[0]||(g[0]=ao(k=>m.$emit("page",o.currentPage-1),["prevent"]))},[...wK])],2),(H(!0),ne(ot,null,Et(h.value,k=>(H(),ne("li",{key:k,class:We(["page-item",{active:o.currentPage===k}])},[O("a",{class:"page-link",href:"#",onClick:ao(f=>m.$emit("page",k),["prevent"])},Ie(k),9,AK)],2))),128)),O("li",{class:We(["page-item",d.value])},[O("a",{class:"page-link",href:"#","aria-label":"Next",onClick:g[1]||(g[1]=ao(k=>m.$emit("page",o.currentPage+1),["prevent"]))},[...yK])],2)])]))}};var gg=Ht(EK,[["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/components/common/ThePagination.vue"]]);const xK={class:"d-flex justify-content-between"},TK={class:"d-flex",style:{width:"90%"}},DK={class:"d-flex justify-content-between gy-3 mt-2"},SK={class:"col-md-3"},IK=O("option",{selected:"",value:"10"},"10\uAC1C\uC529 \uBCF4\uAE30",-1),MK=O("option",{value:"25"},"25\uAC1C\uC529 \uBCF4\uAE30",-1),BK=O("option",{value:"50"},"50\uAC1C\uC529 \uBCF4\uAE30",-1),NK=[IK,MK,BK],OK={class:"d-flex me-3"},PK=O("option",{selected:"",value:"regDate"},"\uB4F1\uB85D\uC77C\uC2DC",-1),LK=O("option",{value:"title"},"\uC81C\uBAA9",-1),RK=O("option",{value:"viewCount"},"\uC870\uD68C\uC218",-1),zK=[PK,LK,RK],jK=O("option",{selected:"",value:"desc"},"\uB0B4\uB9BC\uCC28\uC21C",-1),$K=O("option",{value:"asc"},"\uC624\uB984\uCC28\uC21C",-1),VK=[jK,$K],FK={__name:"TheFilter",props:{keyword:String},emits:["search","update:size","update:sort","update:order"],setup(o){const i=xt({type:"t",keyword:"",size:10,sort:"",order:""}),a=Me([{value:"t",text:"\uC81C\uBAA9"},{value:"c",text:"\uB0B4\uC6A9"},{value:"w",text:"\uC791\uC131\uC790"},{value:"tc",text:"\uC81C\uBAA9+\uB0B4\uC6A9"},{value:"tcw",text:"\uC81C\uBAA9+\uB0B4\uC6A9+\uC791\uC131\uC790"}]);return(d,h)=>{const m=Wn("b-form-select");return H(),ne(ot,null,[O("div",xK,[O("div",TK,[Ue(m,{class:"form-select w-25 me-2",modelValue:i.type,"onUpdate:modelValue":h[0]||(h[0]=g=>i.type=g),options:a.value},null,8,["modelValue","options"]),$t(O("input",{"onUpdate:modelValue":h[1]||(h[1]=g=>i.keyword=g),type:"text",class:"form-control"},null,512),[[dn,i.keyword]])]),O("div",null,[O("button",{class:"btn btn-light",onClick:h[2]||(h[2]=g=>{d.$emit("search",i)})},"\uAC80\uC0C9")])]),O("div",DK,[O("div",SK,[O("select",{class:"form-select",onInput:h[3]||(h[3]=g=>d.$emit("update:size",Number(g.target.value)))},[...NK],32)]),O("div",OK,[O("div",null,[O("select",{class:"form-select",onInput:h[4]||(h[4]=g=>d.$emit("update:order",g.target.value))},[...zK],32)]),O("div",null,[O("select",{class:"form-select",onInput:h[5]||(h[5]=g=>d.$emit("update:sort",g.target.value))},[...VK],32)])])])],64)}}};var bg=Ht(FK,[["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/components/TheFilter.vue"]]);const HK=o=>(Go("data-v-03e682c0"),o=o(),Ko(),o),UK={key:0},WK=HK(()=>O("div",{class:"modal-backdrop fade show"},null,-1)),qK={class:"modal fade show d-block",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},GK={class:"modal-dialog"},KK={class:"modal-content"},YK={class:"modal-header"},QK={class:"modal-title",id:"exampleModalLabel"},ZK={class:"modal-body"},JK={class:"modal-footer"},XK={__name:"TheModal",props:{isPopup:Boolean,title:String},emits:["close","update:modelValue"],setup(o){return(i,a)=>(H(),Le(Yc,null,{default:Te(()=>[o.isPopup?(H(),ne("div",UK,[WK,O("div",qK,[O("div",GK,[O("div",KK,[O("div",YK,[_e(i.$slots,"header",{},()=>[O("h5",QK,Ie(o.title),1),O("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:a[0]||(a[0]=d=>i.$emit("update:modelValue",!1))})],!0)]),O("div",ZK,[_e(i.$slots,"default",{},void 0,!0)]),O("div",JK,[_e(i.$slots,"actions",{},void 0,!0)])])])])])):Ne("v-if",!0)]),_:3}))}};var bi=Ht(XK,[["__scopeId","data-v-03e682c0"],["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/components/common/TheModal.vue"]]);const aN=Oa.create({baseURL:"http://13.210.146.57:1541/api"});aN.interceptors.request.use(o=>(o.data={accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken")},o),o=>Promise.reject(o));const Wt=Oa.create({baseURL:"http://13.210.146.57:1541/api"});let Uf=!1,Nu=[];Wt.interceptors.request.use(o=>(o.headers.Authorization=`Bearer ${localStorage.getItem("accessToken")}`,o),o=>Promise.reject(o));Wt.interceptors.response.use(o=>o,async o=>{const i=o.config;if(o.response.data.msg==="Expired Token"&&!i._retry){if(Uf)try{return await new Promise((d,h)=>{Nu.push({resolve:d,reject:h})})}catch(a){return Promise.reject(a)}i._retry=!0,Uf=!0;try{const d=(await aN.post("/refreshToken",{accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken")})).data.accessToken;return localStorage.setItem("accessToken",d),Uf=!1,Nu.forEach(h=>h.resolve()),Nu=[],i.headers.Authorization=`Bearer ${d}`,Wt(i)}catch(a){return Uf=!1,Nu.forEach(d=>d.reject(a)),Nu=[],Promise.reject(a)}}return o.response?o.response.status===404?await dm.push({name:"NotFound"}):o.response.status===403&&o.response.data.msg==="Malformed Token"?await dm.push({name:"ErrorView",params:{errorMsg:"\uC778\uC99D\uB418\uC9C0 \uC54A\uC740 \uC811\uADFC\uC785\uB2C8\uB2E4. \uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694."}}):o.response.status===403||o.response.data==="\uD574\uB2F9 \uD398\uC774\uC9C0\uC5D0 \uC811\uADFC\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694"?await dm.push({name:"ErrorView",params:{errorMsg:o.response.data}}):console.error("API \uC694\uCCAD \uC2E4\uD328:",o.response.status):console.error("API \uC694\uCCAD \uC2E4\uD328:",o.message),Promise.reject(o)});function eY(o){return Wt.get("/boards",{params:o})}function lN(o){return Wt.get(`/boards/${o}`)}function tY(o){return Wt.post("/boards",o)}function nY(o){return Wt.patch("/boards",o)}function oY(o){return Wt.delete(`/boards/${o}`)}const cN=o=>(Go("data-v-26661e8a"),o=o(),Ko(),o),iY={class:"row mt-3"},rY={class:"table"},sY=cN(()=>O("thead",null,[O("tr",null,[O("th",{scope:"col"},"\uCE74\uD14C\uACE0\uB9AC"),O("th",{scope:"col"},"\uC81C\uBAA9"),O("th",{scope:"col"},"\uC791\uC131\uC790"),O("th",{scope:"col"},"\uC870\uD68C\uC218"),O("th",{scope:"col"},"\uB4F1\uB85D\uC77C\uC2DC"),O("th",{scope:"col"},"\uC218\uC815\uC77C\uC2DC")])],-1)),aY={key:0,class:"attachment-icon show"},lY=cN(()=>O("i",{class:"fas fa-paperclip"},null,-1)),cY=[lY],dY={__name:"BoardList",props:{limit:Number},setup(o){const i=kn(),{userName:a}=eo(i),d=Me(!1),h=yn(),m=xt({items:[],end:0,next:null,page:0,prev:null,size:0,start:0,total:0}),g=xt({order:"regDate",sort:"desc",page:1,size:10,type:null,keyword:null});Y(()=>Math.ceil(m.total/g.size));const k=()=>{if(a.value===null){d.value=!0;return}h.push("/boards/register")},f=async()=>{try{const{data:v}=await eY(g);Object.assign(m,v.resultData)}catch(v){console.error(v)}};f(),St(g,async()=>{await f()});const C=async v=>{try{g.type=v.type,g.keyword=v.keyword}catch{}},y=()=>{h.push({name:"Login"})},w=()=>{d.value=!1};return(v,E)=>{const S=Wn("router-link");return H(),ne(ot,null,[O("div",iY,[Ue(bg,{onSearch:C,"onUpdate:size":E[0]||(E[0]=M=>g.size=M),"onUpdate:order":E[1]||(E[1]=M=>g.order=M),"onUpdate:sort":E[2]||(E[2]=M=>g.sort=M)})]),O("button",{class:"btn btn-primary mb-2 mt-2",onClick:k},"\uAC8C\uC2DC\uAE00 \uB4F1\uB85D"),O("table",rY,[sY,O("tbody",null,[(H(!0),ne(ot,null,Et(m.items,M=>(H(),ne("tr",null,[O("td",null,Ie(M.category),1),O("td",null,[Ue(S,{to:{name:"BoardRead",params:{bno:M.bno}}},{default:Te(()=>[rt(Ie(M.title),1)]),_:2},1032,["to"]),O("span",null,"["+Ie(M.replyCount)+"]",1),M.fileCount>=1?(H(),ne("span",aY,[...cY])):Ne("v-if",!0)]),O("td",null,Ie(M.writer),1),O("td",null,Ie(M.viewCount),1),O("td",null,Ie(v.$dayjs(M.regDate).format("YYYY.MM.DD")),1),O("td",null,Ie(v.$dayjs(M.modDate).format("YYYY.MM.DD")),1)]))),256))])]),$t(Ue(gg,{"current-page":m.page,total:m.total,size:g.size,onPage:E[3]||(E[3]=M=>g.page=M),class:"flex-md-grow-0"},null,8,["current-page","total","size"]),[[vh,g.size>=10]]),(H(),Le(Yo,{to:"#modal"},[Ue(bi,{modelValue:d.value,"onUpdate:modelValue":E[4]||(E[4]=M=>d.value=M),isPopup:d.value,title:"\uD655\uC778"},{default:Te(()=>[rt(" \uB85C\uADF8\uC778\uD55C \uC0AC\uC6A9\uC790\uB9CC \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ")]),actions:Te(()=>[O("button",{class:"btn btn-primary",onClick:y},"\uB85C\uADF8\uC778"),O("button",{class:"btn btn-light",onClick:w},"\uB2EB\uAE30")]),_:1},8,["modelValue","isPopup"])]))],64)}}};var uY=Ht(dY,[["__scopeId","data-v-26661e8a"],["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/views/free/BoardList.vue"]]);function dN(o){return Wt.get(`/replies/${o}`)}function hY(o){return Wt.post("/replies",o)}function pY(o){return Wt.delete(`/replies/${o}`)}const fY={key:0},mY={class:"row d-flex justify-content-center"},gY={class:"reply_nick shadow-0"},bY={class:"d-flex justify-content-between"},kY={class:"reply_box"},_Y=["onClick"],vY={key:0},wY={class:"border border-secondary-subtle border-1 rounded mt-4"},AY={class:"my-2 ms-2"},CY={class:"d-flex"},yY={key:1},EY={__name:"ReplyArea",props:{bno:Number,replyList:Object,modelValue:String},emits:["update:replyText","replyDelete"],setup(o,{emit:i}){const a=kn(),{userName:d}=eo(a),h=o,m=Me(h.replyText),g=i,k=async()=>{const C={bno:h.bno,replyer:d._value,replyText:m._value};if((await hY(C)).status!==200){console.log("\uB313\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");return}m.value="",document.getElementById("addReply").textContent="",g("update:replyText",m.value)},f=async C=>{if((await pY(C)).status!==200){console.log("\uB313\uAE00\uC0AD\uC81C\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uD655\uC778\uD574\uC8FC\uC138\uC694.");return}g("replyDelete")};return(C,y)=>(H(),ne("section",null,[V(d)!==null?(H(),ne("div",fY,[O("div",mY,[O("div",null,[O("ul",null,[(H(!0),ne(ot,null,Et(o.replyList,(w,v)=>(H(),ne("li",{key:w.rno},[O("div",gY,[O("b",null,Ie(w.replyer),1),rt(" "+Ie(w.regDate),1)]),O("div",bY,[O("div",kY,Ie(w.replyText),1),O("div",null,[V(d)===w.replyer?(H(),ne("button",{key:0,class:"btn btn-danger btn-sm",onClick:E=>f(w.rno)},"\uC0AD\uC81C ",8,_Y)):Ne("v-if",!0)])]),o.replyList.length!==v+1?(H(),ne("hr",vY)):Ne("v-if",!0)]))),128))])])]),O("div",wY,[O("div",AY,Ie(V(d)),1),O("div",CY,[$t(O("textarea",{"onUpdate:modelValue":y[0]||(y[0]=w=>m.value=w),type:"text",id:"addReply",class:"form-control",placeholder:"\uB313\uAE00\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694"},null,512),[[dn,m.value]]),O("button",{class:"btn btn-secondary btn-sm m-1 p-1 rbtn",onClick:k},"\uB4F1\uB85D ")])])])):(H(),ne("div",yY," \uB85C\uADF8\uC778\uD55C \uC0AC\uC6A9\uC790\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4 "))]))}};var uN=Ht(EY,[["__scopeId","data-v-491e2568"],["__file","C:/Users/azzud/IdeaProjects/portfolio/frontend/src/views/reply/ReplyArea.vue"]]);function kg(o){return Wt.post("/files/upload",o)}function xY(o){return Wt.post("/files/download",o,{responseType:"blob"})}var cw={exports:{}};(function(o,i){(function(a){const d=a.en=a.en||{};d.dictionary=Object.assign(d.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(a,d){o.exports=d()}(self,()=>(()=>{var a={9246:(g,k,f)=>{const C=f(6931),y={};for(const v of Object.keys(C))y[C[v]]=v;const w={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};g.exports=w;for(const v of Object.keys(w)){if(!("channels"in w[v]))throw new Error("missing channels property: "+v);if(!("labels"in w[v]))throw new Error("missing channel labels property: "+v);if(w[v].labels.length!==w[v].channels)throw new Error("channel and label counts mismatch: "+v);const{channels:E,labels:S}=w[v];delete w[v].channels,delete w[v].labels,Object.defineProperty(w[v],"channels",{value:E}),Object.defineProperty(w[v],"labels",{value:S})}w.rgb.hsl=function(v){const E=v[0]/255,S=v[1]/255,M=v[2]/255,N=Math.min(E,S,M),R=Math.max(E,S,M),L=R-N;let z,$;R===N?z=0:E===R?z=(S-M)/L:S===R?z=2+(M-E)/L:M===R&&(z=4+(E-S)/L),z=Math.min(60*z,360),z<0&&(z+=360);const q=(N+R)/2;return $=R===N?0:q<=.5?L/(R+N):L/(2-R-N),[z,100*$,100*q]},w.rgb.hsv=function(v){let E,S,M,N,R;const L=v[0]/255,z=v[1]/255,$=v[2]/255,q=Math.max(L,z,$),J=q-Math.min(L,z,$),K=function(ee){return(q-ee)/6/J+.5};return J===0?(N=0,R=0):(R=J/q,E=K(L),S=K(z),M=K($),L===q?N=M-S:z===q?N=.3333333333333333+E-M:$===q&&(N=.6666666666666666+S-E),N<0?N+=1:N>1&&(N-=1)),[360*N,100*R,100*q]},w.rgb.hwb=function(v){const E=v[0],S=v[1];let M=v[2];const N=w.rgb.hsl(v)[0],R=1/255*Math.min(E,Math.min(S,M));return M=1-.00392156862745098*Math.max(E,Math.max(S,M)),[N,100*R,100*M]},w.rgb.cmyk=function(v){const E=v[0]/255,S=v[1]/255,M=v[2]/255,N=Math.min(1-E,1-S,1-M);return[100*((1-E-N)/(1-N)||0),100*((1-S-N)/(1-N)||0),100*((1-M-N)/(1-N)||0),100*N]},w.rgb.keyword=function(v){const E=y[v];if(E)return E;let S,M=1/0;for(const L of Object.keys(C)){const z=C[L],$=(R=z,((N=v)[0]-R[0])**2+(N[1]-R[1])**2+(N[2]-R[2])**2);$<M&&(M=$,S=L)}var N,R;return S},w.keyword.rgb=function(v){return C[v]},w.rgb.xyz=function(v){let E=v[0]/255,S=v[1]/255,M=v[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,[100*(.4124*E+.3576*S+.1805*M),100*(.2126*E+.7152*S+.0722*M),100*(.0193*E+.1192*S+.9505*M)]},w.rgb.lab=function(v){const E=w.rgb.xyz(v);let S=E[0],M=E[1],N=E[2];return S/=95.047,M/=100,N/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*M-16,500*(S-M),200*(M-N)]},w.hsl.rgb=function(v){const E=v[0]/360,S=v[1]/100,M=v[2]/100;let N,R,L;if(S===0)return L=255*M,[L,L,L];N=M<.5?M*(1+S):M+S-M*S;const z=2*M-N,$=[0,0,0];for(let q=0;q<3;q++)R=E+.3333333333333333*-(q-1),R<0&&R++,R>1&&R--,L=6*R<1?z+6*(N-z)*R:2*R<1?N:3*R<2?z+(N-z)*(.6666666666666666-R)*6:z,$[q]=255*L;return $},w.hsl.hsv=function(v){const E=v[0];let S=v[1]/100,M=v[2]/100,N=S;const R=Math.max(M,.01);return M*=2,S*=M<=1?M:2-M,N*=R<=1?R:2-R,[E,100*(M===0?2*N/(R+N):2*S/(M+S)),100*((M+S)/2)]},w.hsv.rgb=function(v){const E=v[0]/60,S=v[1]/100;let M=v[2]/100;const N=Math.floor(E)%6,R=E-Math.floor(E),L=255*M*(1-S),z=255*M*(1-S*R),$=255*M*(1-S*(1-R));switch(M*=255,N){case 0:return[M,$,L];case 1:return[z,M,L];case 2:return[L,M,$];case 3:return[L,z,M];case 4:return[$,L,M];case 5:return[M,L,z]}},w.hsv.hsl=function(v){const E=v[0],S=v[1]/100,M=v[2]/100,N=Math.max(M,.01);let R,L;L=(2-S)*M;const z=(2-S)*N;return R=S*N,R/=z<=1?z:2-z,R=R||0,L/=2,[E,100*R,100*L]},w.hwb.rgb=function(v){const E=v[0]/360;let S=v[1]/100,M=v[2]/100;const N=S+M;let R;N>1&&(S/=N,M/=N);const L=Math.floor(6*E),z=1-M;R=6*E-L,1&L&&(R=1-R);const $=S+R*(z-S);let q,J,K;switch(L){default:case 6:case 0:q=z,J=$,K=S;break;case 1:q=$,J=z,K=S;break;case 2:q=S,J=z,K=$;break;case 3:q=S,J=$,K=z;break;case 4:q=$,J=S,K=z;break;case 5:q=z,J=S,K=$}return[255*q,255*J,255*K]},w.cmyk.rgb=function(v){const E=v[0]/100,S=v[1]/100,M=v[2]/100,N=v[3]/100;return[255*(1-Math.min(1,E*(1-N)+N)),255*(1-Math.min(1,S*(1-N)+N)),255*(1-Math.min(1,M*(1-N)+N))]},w.xyz.rgb=function(v){const E=v[0]/100,S=v[1]/100,M=v[2]/100;let N,R,L;return N=3.2406*E+-1.5372*S+-.4986*M,R=-.9689*E+1.8758*S+.0415*M,L=.0557*E+-.204*S+1.057*M,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,N=Math.min(Math.max(0,N),1),R=Math.min(Math.max(0,R),1),L=Math.min(Math.max(0,L),1),[255*N,255*R,255*L]},w.xyz.lab=function(v){let E=v[0],S=v[1],M=v[2];return E/=95.047,S/=100,M/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,[116*S-16,500*(E-S),200*(S-M)]},w.lab.xyz=function(v){let E,S,M;S=(v[0]+16)/116,E=v[1]/500+S,M=S-v[2]/200;const N=S**3,R=E**3,L=M**3;return S=N>.008856?N:(S-.13793103448275862)/7.787,E=R>.008856?R:(E-.13793103448275862)/7.787,M=L>.008856?L:(M-.13793103448275862)/7.787,E*=95.047,S*=100,M*=108.883,[E,S,M]},w.lab.lch=function(v){const E=v[0],S=v[1],M=v[2];let N;return N=360*Math.atan2(M,S)/2/Math.PI,N<0&&(N+=360),[E,Math.sqrt(S*S+M*M),N]},w.lch.lab=function(v){const E=v[0],S=v[1],M=v[2]/360*2*Math.PI;return[E,S*Math.cos(M),S*Math.sin(M)]},w.rgb.ansi16=function(v,E=null){const[S,M,N]=v;let R=E===null?w.rgb.hsv(v)[2]:E;if(R=Math.round(R/50),R===0)return 30;let L=30+(Math.round(N/255)<<2|Math.round(M/255)<<1|Math.round(S/255));return R===2&&(L+=60),L},w.hsv.ansi16=function(v){return w.rgb.ansi16(w.hsv.rgb(v),v[2])},w.rgb.ansi256=function(v){const E=v[0],S=v[1],M=v[2];return E===S&&S===M?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(S/255*5)+Math.round(M/255*5)},w.ansi16.rgb=function(v){let E=v%10;if(E===0||E===7)return v>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const S=.5*(1+~~(v>50));return[(1&E)*S*255,(E>>1&1)*S*255,(E>>2&1)*S*255]},w.ansi256.rgb=function(v){if(v>=232){const S=10*(v-232)+8;return[S,S,S]}let E;return v-=16,[Math.floor(v/36)/5*255,Math.floor((E=v%36)/6)/5*255,E%6/5*255]},w.rgb.hex=function(v){const E=(((255&Math.round(v[0]))<<16)+((255&Math.round(v[1]))<<8)+(255&Math.round(v[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},w.hex.rgb=function(v){const E=v.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let S=E[0];E[0].length===3&&(S=S.split("").map(N=>N+N).join(""));const M=parseInt(S,16);return[M>>16&255,M>>8&255,255&M]},w.rgb.hcg=function(v){const E=v[0]/255,S=v[1]/255,M=v[2]/255,N=Math.max(Math.max(E,S),M),R=Math.min(Math.min(E,S),M),L=N-R;let z,$;return z=L<1?R/(1-L):0,$=L<=0?0:N===E?(S-M)/L%6:N===S?2+(M-E)/L:4+(E-S)/L,$/=6,$%=1,[360*$,100*L,100*z]},w.hsl.hcg=function(v){const E=v[1]/100,S=v[2]/100,M=S<.5?2*E*S:2*E*(1-S);let N=0;return M<1&&(N=(S-.5*M)/(1-M)),[v[0],100*M,100*N]},w.hsv.hcg=function(v){const E=v[1]/100,S=v[2]/100,M=E*S;let N=0;return M<1&&(N=(S-M)/(1-M)),[v[0],100*M,100*N]},w.hcg.rgb=function(v){const E=v[0]/360,S=v[1]/100,M=v[2]/100;if(S===0)return[255*M,255*M,255*M];const N=[0,0,0],R=E%1*6,L=R%1,z=1-L;let $=0;switch(Math.floor(R)){case 0:N[0]=1,N[1]=L,N[2]=0;break;case 1:N[0]=z,N[1]=1,N[2]=0;break;case 2:N[0]=0,N[1]=1,N[2]=L;break;case 3:N[0]=0,N[1]=z,N[2]=1;break;case 4:N[0]=L,N[1]=0,N[2]=1;break;default:N[0]=1,N[1]=0,N[2]=z}return $=(1-S)*M,[255*(S*N[0]+$),255*(S*N[1]+$),255*(S*N[2]+$)]},w.hcg.hsv=function(v){const E=v[1]/100,S=E+v[2]/100*(1-E);let M=0;return S>0&&(M=E/S),[v[0],100*M,100*S]},w.hcg.hsl=function(v){const E=v[1]/100,S=v[2]/100*(1-E)+.5*E;let M=0;return S>0&&S<.5?M=E/(2*S):S>=.5&&S<1&&(M=E/(2*(1-S))),[v[0],100*M,100*S]},w.hcg.hwb=function(v){const E=v[1]/100,S=E+v[2]/100*(1-E);return[v[0],100*(S-E),100*(1-S)]},w.hwb.hcg=function(v){const E=v[1]/100,S=1-v[2]/100,M=S-E;let N=0;return M<1&&(N=(S-M)/(1-M)),[v[0],100*M,100*N]},w.apple.rgb=function(v){return[v[0]/65535*255,v[1]/65535*255,v[2]/65535*255]},w.rgb.apple=function(v){return[v[0]/255*65535,v[1]/255*65535,v[2]/255*65535]},w.gray.rgb=function(v){return[v[0]/100*255,v[0]/100*255,v[0]/100*255]},w.gray.hsl=function(v){return[0,0,v[0]]},w.gray.hsv=w.gray.hsl,w.gray.hwb=function(v){return[0,100,v[0]]},w.gray.cmyk=function(v){return[0,0,0,v[0]]},w.gray.lab=function(v){return[v[0],0,0]},w.gray.hex=function(v){const E=255&Math.round(v[0]/100*255),S=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(S.length)+S},w.rgb.gray=function(v){return[(v[0]+v[1]+v[2])/3/255*100]}},9047:(g,k,f)=>{const C=f(9246),y=f(802),w={};Object.keys(C).forEach(v=>{w[v]={},Object.defineProperty(w[v],"channels",{value:C[v].channels}),Object.defineProperty(w[v],"labels",{value:C[v].labels});const E=y(v);Object.keys(E).forEach(S=>{const M=E[S];w[v][S]=function(N){const R=function(...L){const z=L[0];if(z==null)return z;z.length>1&&(L=z);const $=N(L);if(typeof $=="object")for(let q=$.length,J=0;J<q;J++)$[J]=Math.round($[J]);return $};return"conversion"in N&&(R.conversion=N.conversion),R}(M),w[v][S].raw=function(N){const R=function(...L){const z=L[0];return z==null?z:(z.length>1&&(L=z),N(L))};return"conversion"in N&&(R.conversion=N.conversion),R}(M)})}),g.exports=w},802:(g,k,f)=>{const C=f(9246);function y(E){const S=function(){const N={},R=Object.keys(C);for(let L=R.length,z=0;z<L;z++)N[R[z]]={distance:-1,parent:null};return N}(),M=[E];for(S[E].distance=0;M.length;){const N=M.pop(),R=Object.keys(C[N]);for(let L=R.length,z=0;z<L;z++){const $=R[z],q=S[$];q.distance===-1&&(q.distance=S[N].distance+1,q.parent=N,M.unshift($))}}return S}function w(E,S){return function(M){return S(E(M))}}function v(E,S){const M=[S[E].parent,E];let N=C[S[E].parent][E],R=S[E].parent;for(;S[R].parent;)M.unshift(S[R].parent),N=w(C[S[R].parent][R],N),R=S[R].parent;return N.conversion=M,N}g.exports=function(E){const S=y(E),M={},N=Object.keys(S);for(let R=N.length,L=0;L<R;L++){const z=N[L];S[z].parent!==null&&(M[z]=v(z,S))}return M}},6931:g=>{g.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const E=v},8708:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=v},1866:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const E=v},7793:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const E=v},7388:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},4098:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=v},8264:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=v},6269:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=v},265:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=v},5247:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=v},3350:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const E=v},7378:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const E=v},3469:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=v},6386:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},7693:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=v},1559:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=v},2267:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=v},4062:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},7719:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=v},8762:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},3817:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},4808:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const E=v},1232:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=v},6903:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},9968:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=v},7141:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=v},8991:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const E=v},70:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=v},7048:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},5651:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},5506:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},4043:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},2655:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=v},5032:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=v},2329:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=v},4143:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const E=v},8986:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},8795:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const E=v},8137:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=v},1623:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},5562:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},8423:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},1801:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const E=v},5727:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},9715:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=v},4391:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=v},25:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=v},7317:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=v},1905:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const E=v},6309:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const E=v},9819:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},9822:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const E=v},8149:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},3629:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},1792:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},1666:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=v},8527:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},1185:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},7913:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=v},9529:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const E=v},7621:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},253:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},7801:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=v},4962:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},5199:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},497:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const E=v},4:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const E=v},3344:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=v},9481:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const E=v},977:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const E=v},9108:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},3710:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},991:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=v},5380:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},8298:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},2722:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},8107:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const E=v},109:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const E=v},1671:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const E=v},2710:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=v},9677:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},9205:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=v},7676:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=v},695:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},4095:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=v},8508:(g,k,f)=>{f.d(k,{A:()=>E});var C=f(9372),y=f.n(C),w=f(935),v=f.n(w)()(y());v.push([g.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=v},935:g=>{g.exports=function(k){var f=[];return f.toString=function(){return this.map(function(C){var y=k(C);return C[2]?"@media ".concat(C[2]," {").concat(y,"}"):y}).join("")},f.i=function(C,y,w){typeof C=="string"&&(C=[[null,C,""]]);var v={};if(w)for(var E=0;E<this.length;E++){var S=this[E][0];S!=null&&(v[S]=!0)}for(var M=0;M<C.length;M++){var N=[].concat(C[M]);w&&v[N[0]]||(y&&(N[2]?N[2]="".concat(y," and ").concat(N[2]):N[2]=y),f.push(N))}},f}},9372:g=>{function k(C,y){return function(w){if(Array.isArray(w))return w}(C)||function(w,v){var E=w&&(typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"]);if(E!=null){var S,M,N=[],R=!0,L=!1;try{for(E=E.call(w);!(R=(S=E.next()).done)&&(N.push(S.value),!v||N.length!==v);R=!0);}catch(z){L=!0,M=z}finally{try{R||E.return==null||E.return()}finally{if(L)throw M}}return N}}(C,y)||function(w,v){if(!!w){if(typeof w=="string")return f(w,v);var E=Object.prototype.toString.call(w).slice(8,-1);if(E==="Object"&&w.constructor&&(E=w.constructor.name),E==="Map"||E==="Set")return Array.from(w);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return f(w,v)}}(C,y)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(C,y){(y==null||y>C.length)&&(y=C.length);for(var w=0,v=new Array(y);w<y;w++)v[w]=C[w];return v}g.exports=function(C){var y=k(C,4),w=y[1],v=y[3];if(!v)return w;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),M="/*# ".concat(S," */"),N=v.sources.map(function(R){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(R," */")});return[w].concat(N).concat([M]).join(`
`)}return[w].join(`
`)}},2591:(g,k,f)=>{var C,y=function(){return C===void 0&&(C=Boolean(window&&document&&document.all&&!window.atob)),C},w=function(){var K={};return function(ee){if(K[ee]===void 0){var B=document.querySelector(ee);if(window.HTMLIFrameElement&&B instanceof window.HTMLIFrameElement)try{B=B.contentDocument.head}catch{B=null}K[ee]=B}return K[ee]}}(),v=[];function E(K){for(var ee=-1,B=0;B<v.length;B++)if(v[B].identifier===K){ee=B;break}return ee}function S(K,ee){for(var B={},U=[],te=0;te<K.length;te++){var ae=K[te],be=ee.base?ae[0]+ee.base:ae[0],ye=B[be]||0,me="".concat(be," ").concat(ye);B[be]=ye+1;var ue=E(me),he={css:ae[1],media:ae[2],sourceMap:ae[3]};ue!==-1?(v[ue].references++,v[ue].updater(he)):v.push({identifier:me,updater:J(he,ee),references:1}),U.push(me)}return U}function M(K){var ee=document.createElement("style"),B=K.attributes||{};if(B.nonce===void 0){var U=f.nc;U&&(B.nonce=U)}if(Object.keys(B).forEach(function(ae){ee.setAttribute(ae,B[ae])}),typeof K.insert=="function")K.insert(ee);else{var te=w(K.insert||"head");if(!te)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");te.appendChild(ee)}return ee}var N,R=(N=[],function(K,ee){return N[K]=ee,N.filter(Boolean).join(`
`)});function L(K,ee,B,U){var te=B?"":U.media?"@media ".concat(U.media," {").concat(U.css,"}"):U.css;if(K.styleSheet)K.styleSheet.cssText=R(ee,te);else{var ae=document.createTextNode(te),be=K.childNodes;be[ee]&&K.removeChild(be[ee]),be.length?K.insertBefore(ae,be[ee]):K.appendChild(ae)}}function z(K,ee,B){var U=B.css,te=B.media,ae=B.sourceMap;if(te?K.setAttribute("media",te):K.removeAttribute("media"),ae&&typeof btoa!="undefined"&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ae))))," */")),K.styleSheet)K.styleSheet.cssText=U;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(U))}}var $=null,q=0;function J(K,ee){var B,U,te;if(ee.singleton){var ae=q++;B=$||($=M(ee)),U=L.bind(null,B,ae,!1),te=L.bind(null,B,ae,!0)}else B=M(ee),U=z.bind(null,B,ee),te=function(){(function(be){if(be.parentNode===null)return!1;be.parentNode.removeChild(be)})(B)};return U(K),function(be){if(be){if(be.css===K.css&&be.media===K.media&&be.sourceMap===K.sourceMap)return;U(K=be)}else te()}}g.exports=function(K,ee){(ee=ee||{}).singleton||typeof ee.singleton=="boolean"||(ee.singleton=y());var B=S(K=K||[],ee);return function(U){if(U=U||[],Object.prototype.toString.call(U)==="[object Array]"){for(var te=0;te<B.length;te++){var ae=E(B[te]);v[ae].references--}for(var be=S(U,ee),ye=0;ye<B.length;ye++){var me=E(B[ye]);v[me].references===0&&(v[me].updater(),v.splice(me,1))}B=be}}}}},d={};function h(g){var k=d[g];if(k!==void 0)return k.exports;var f=d[g]={id:g,exports:{}};return a[g](f,f.exports,h),f.exports}h.n=g=>{var k=g&&g.__esModule?()=>g.default:()=>g;return h.d(k,{a:k}),k},h.d=(g,k)=>{for(var f in k)h.o(k,f)&&!h.o(g,f)&&Object.defineProperty(g,f,{enumerable:!0,get:k[f]})},h.o=(g,k)=>Object.prototype.hasOwnProperty.call(g,k),h.nc=void 0;var m={};return(()=>{function g({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(s,l)=>{if(!e())return;const c=typeof l.composedPath=="function"?l.composedPath():[],u=typeof n=="function"?n():n;for(const p of u)if(p.contains(l.target)||c.includes(p))return;t()})}function k(r){return class extends r{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function f({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}function C({keystrokeHandler:r,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:s}){const l=typeof n=="number"?()=>n:n;function c(b){return _=>{const A=t.find(I=>I.element===e.focusedElement),x=t.getIndex(A),D=b(x,t);t.get(D).focus(),_.stopPropagation(),_.preventDefault()}}function u(b,_){return b===_-1?0:b+1}function p(b,_){return b===0?_-1:b-1}r.set("arrowright",c((b,_)=>s==="rtl"?p(b,_.length):u(b,_.length))),r.set("arrowleft",c((b,_)=>s==="rtl"?u(b,_.length):p(b,_.length))),r.set("arrowup",c((b,_)=>{let A=b-l();return A<0&&(A=b+l()*Math.floor(_.length/l()),A>_.length-1&&(A-=l())),A})),r.set("arrowdown",c((b,_)=>{let A=b+l();return A>_.length-1&&(A=b%l()),A}))}h.d(m,{default:()=>V_});const y=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var w;const v={isMac:E(y),isWindows:(w=y,w.indexOf("windows")>-1),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(y),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(y),isiOS:function(r){return!!r.match(/iphone|ipad/i)||E(r)&&navigator.maxTouchPoints>0}(y),isAndroid:function(r){return r.indexOf("android")>-1}(y),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(y),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}};function E(r){return r.indexOf("macintosh")>-1}function S(r,e,t,n){t=t||function(p,b){return p===b};const s=Array.isArray(r)?r:Array.prototype.slice.call(r),l=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(p,b,_){const A=M(p,b,_);if(A===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const x=N(p,A),D=N(b,A),I=M(x,D,_),P=p.length-I,W=b.length-I;return{firstIndex:A,lastIndexOld:P,lastIndexNew:W}}(s,l,t);return n?function(p,b){const{firstIndex:_,lastIndexOld:A,lastIndexNew:x}=p;if(_===-1)return Array(b).fill("equal");let D=[];return _>0&&(D=D.concat(Array(_).fill("equal"))),x-_>0&&(D=D.concat(Array(x-_).fill("insert"))),A-_>0&&(D=D.concat(Array(A-_).fill("delete"))),x<b&&(D=D.concat(Array(b-x).fill("equal"))),D}(c,l.length):function(p,b){const _=[],{firstIndex:A,lastIndexOld:x,lastIndexNew:D}=b;return D-A>0&&_.push({index:A,type:"insert",values:p.slice(A,D)}),x-A>0&&_.push({index:A+(D-A),type:"delete",howMany:x-A}),_}(l,c)}function M(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function N(r,e){return r.slice(e).reverse()}function R(r,e,t){t=t||function(P,W){return P===W};const n=r.length,s=e.length;if(n>200||s>200||n+s>300)return R.fastDiff(r,e,t,!0);let l,c;if(s<n){const P=r;r=e,e=P,l="delete",c="insert"}else l="insert",c="delete";const u=r.length,p=e.length,b=p-u,_={},A={};function x(P){const W=(A[P-1]!==void 0?A[P-1]:-1)+1,Q=A[P+1]!==void 0?A[P+1]:-1,se=W>Q?-1:1;_[P+se]&&(_[P]=_[P+se].slice(0)),_[P]||(_[P]=[]),_[P].push(W>Q?l:c);let ge=Math.max(W,Q),xe=ge-P;for(;xe<u&&ge<p&&t(r[xe],e[ge]);)xe++,ge++,_[P].push("equal");return ge}let D,I=0;do{for(D=-I;D<b;D++)A[D]=x(D);for(D=b+I;D>b;D--)A[D]=x(D);A[b]=x(b),I++}while(A[b]!==p);return _[b].slice(1)}R.fastDiff=S;const L=function(){return function r(){r.called=!0}};class z{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=L(),this.off=L()}}const $=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function q(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+$[255&r]+$[r>>8&255]+$[r>>16&255]+$[r>>24&255]+$[255&e]+$[e>>8&255]+$[e>>16&255]+$[e>>24&255]+$[255&t]+$[t>>8&255]+$[t>>16&255]+$[t>>24&255]+$[255&n]+$[n>>8&255]+$[n>>16&255]+$[n>>24&255]}const J={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function K(r,e){const t=J.get(e.priority);for(let n=0;n<r.length;n++)if(J.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}const ee="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class B extends Error{constructor(e,t,n){super(function(s,l){const c=new WeakSet,u=(_,A)=>{if(typeof A=="object"&&A!==null){if(c.has(A))return`[object ${A.constructor.name}]`;c.add(A)}return A},p=l?` ${JSON.stringify(l,u)}`:"",b=ae(s);return s+p+b}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new B(e.message,t);throw n.stack=e.stack,n}}function U(r,e){console.warn(...be(r,e))}function te(r,e){console.error(...be(r,e))}function ae(r){return`
Read more: ${ee}#error-${r}`}function be(r,e){const t=ae(r);return e?[r,e,t]:[r,t]}const ye="41.3.1",me=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new B("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=ye;const ue=Symbol("listeningTo"),he=Symbol("emitterId"),de=Symbol("delegations"),Qe=Oe(Object);function Oe(r){return r?class extends r{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let s=!1;this.listenTo(this,e,(l,...c)=>{s||(s=!0,l.off(),t.call(this,l,...c))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,s={}){let l,c;this[ue]||(this[ue]={});const u=this[ue];Se(e)||it(e);const p=Se(e);(l=u[p])||(l=u[p]={emitter:e,callbacks:{}}),(c=l.callbacks[t])||(c=l.callbacks[t]=[]),c.push(n),function(b,_,A,x,D){_._addEventListener?_._addEventListener(A,x,D):b._addEventListener.call(_,A,x,D)}(this,e,t,n,s)}stopListening(e,t,n){const s=this[ue];let l=e&&Se(e);const c=s&&l?s[l]:void 0,u=c&&t?c.callbacks[t]:void 0;if(!(!s||e&&!c||t&&!u))if(n)ce(this,e,t,n),u.indexOf(n)!==-1&&(u.length===1?delete c.callbacks[t]:ce(this,e,t,n));else if(u){for(;n=u.pop();)ce(this,e,t,n);delete c.callbacks[t]}else if(c){for(t in c.callbacks)this.stopListening(e,t);delete s[l]}else{for(l in s)this.stopListening(s[l].emitter);delete this[ue]}}fire(e,...t){try{const n=e instanceof z?e:new z(this,e),s=n.name;let l=Je(this,s);if(n.path.push(this),l){const u=[n,...t];l=Array.from(l);for(let p=0;p<l.length&&(l[p].callback.apply(this,u),n.off.called&&(delete n.off.called,this._removeEventListener(s,l[p].callback)),!n.stop.called);p++);}const c=this[de];if(c){const u=c.get(s),p=c.get("*");u&&Ke(u,n,t),p&&Ke(p,n,t)}return n.return}catch(n){B.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[de]||(this[de]=new Map),e.forEach(s=>{const l=this[de].get(s);l?l.set(t,n):this[de].set(s,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[de])if(e)if(t){const n=this[de].get(e);n&&n.delete(t)}else this[de].delete(e);else this[de].clear()}_addEventListener(e,t,n){(function(c,u){const p=le(c);if(p[u])return;let b=u,_=null;const A=[];for(;b!==""&&!p[b];)p[b]={callbacks:[],childEvents:[]},A.push(p[b]),_&&p[b].childEvents.push(_),_=b,b=b.substr(0,b.lastIndexOf(":"));if(b!==""){for(const x of A)x.callbacks=p[b].callbacks.slice();p[b].childEvents.push(_)}})(this,e);const s=Pe(this,e),l={callback:t,priority:J.get(n.priority)};for(const c of s)K(c,l)}_removeEventListener(e,t){const n=Pe(this,e);for(const s of n)for(let l=0;l<s.length;l++)s[l].callback==t&&(s.splice(l,1),l--)}}:Qe}function it(r,e){r[he]||(r[he]=e||q())}function Se(r){return r[he]}function le(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function Pe(r,e){const t=le(r)[e];if(!t)return[];let n=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const l=Pe(r,t.childEvents[s]);n=n.concat(l)}return n}function Je(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Je(r,e.substr(0,e.lastIndexOf(":"))):null}function Ke(r,e,t){for(let[n,s]of r){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const l=new z(e.source,s);l.path=[...e.path],n.fire(l,...t)}}function ce(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Oe[r]=Qe.prototype[r]});const Ce=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},He=Symbol("observableProperties"),qe=Symbol("boundObservables"),fe=Symbol("boundProperties"),ut=Symbol("decoratedMethods"),pe=Symbol("decoratedOriginal"),F=Z(Oe());function Z(r){return r?class extends r{set(e,t){if(Ce(e))return void Object.keys(e).forEach(s=>{this.set(s,e[s])},this);re(this);const n=this[He];if(e in this&&!n.has(e))throw new B("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(s){const l=n.get(e);let c=this.fire(`set:${e}`,e,s,l);c===void 0&&(c=s),l===c&&n.has(e)||(n.set(e,c),this.fire(`change:${e}`,e,c,l))}}),this[e]=t}bind(...e){if(!e.length||!$e(e))throw new B("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new B("observable-bind-duplicate-properties",this);re(this);const t=this[fe];e.forEach(s=>{if(t.has(s))throw new B("observable-bind-rebind",this)});const n=new Map;return e.forEach(s=>{const l={property:s,to:[]};t.set(s,l),n.set(s,l)}),{to:Ae,toMany:we,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[He])return;const t=this[fe],n=this[qe];if(e.length){if(!$e(e))throw new B("observable-unbind-wrong-properties",this);e.forEach(s=>{const l=t.get(s);l&&(l.to.forEach(([c,u])=>{const p=n.get(c),b=p[u];b.delete(l),b.size||delete p[u],Object.keys(p).length||(n.delete(c),this.stopListening(c,"change"))}),t.delete(s))})}else n.forEach((s,l)=>{this.stopListening(l,"change")}),n.clear(),t.clear()}decorate(e){re(this);const t=this[e];if(!t)throw new B("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,s)=>{n.return=t.apply(this,s)}),this[e]=function(...n){return this.fire(e,n)},this[e][pe]=t,this[ut]||(this[ut]=[]),this[ut].push(e)}stopListening(e,t,n){if(!e&&this[ut]){for(const s of this[ut])this[s]=this[s][pe];delete this[ut]}super.stopListening(e,t,n)}}:F}function re(r){r[He]||(Object.defineProperty(r,He,{value:new Map}),Object.defineProperty(r,qe,{value:new Map}),Object.defineProperty(r,fe,{value:new Map}))}function Ae(...r){const e=function(...l){if(!l.length)throw new B("observable-bind-to-parse-error",null);const c={to:[]};let u;return typeof l[l.length-1]=="function"&&(c.callback=l.pop()),l.forEach(p=>{if(typeof p=="string")u.properties.push(p);else{if(typeof p!="object")throw new B("observable-bind-to-parse-error",null);u={observable:p,properties:[]},c.to.push(u)}}),c}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new B("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new B("observable-bind-to-extra-callback",this);var s;e.to.forEach(l=>{if(l.properties.length&&l.properties.length!==n)throw new B("observable-bind-to-properties-length",this);l.properties.length||(l.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),s=this._observable,this._to.forEach(l=>{const c=s[qe];let u;c.get(l.observable)||s.listenTo(l.observable,"change",(p,b)=>{u=c.get(l.observable)[b],u&&u.forEach(_=>{ke(s,_.property)})})}),function(l){let c;l._bindings.forEach((u,p)=>{l._to.forEach(b=>{c=b.properties[u.callback?0:l._bindProperties.indexOf(p)],u.to.push([b.observable,c]),function(_,A,x,D){const I=_[qe],P=I.get(x),W=P||{};W[D]||(W[D]=new Set),W[D].add(A),P||I.set(x,W)}(l._observable,u,b.observable,c)})})}(this),this._bindProperties.forEach(l=>{ke(this._observable,l)})}function we(r,e,t){if(this._bindings.size>1)throw new B("observable-bind-to-many-not-one-binding",this);this.to(...function(n,s){const l=n.map(c=>[c,s]);return Array.prototype.concat.apply([],l)}(r,e),t)}function $e(r){return r.every(e=>typeof e=="string")}function ke(r,e){const t=r[fe].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(s=>s[0][s[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Z[r]=F.prototype[r]});class ze{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Re(r){let e=0;for(const t of r)e++;return e}function Ee(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}function Ye(r){return!(!r||!r[Symbol.iterator])}const ct=typeof nr=="object"&&nr&&nr.Object===Object&&nr;var lt=typeof self=="object"&&self&&self.Object===Object&&self;const dt=ct||lt||Function("return this")(),mt=dt.Symbol;var It=Object.prototype,Xt=It.hasOwnProperty,_n=It.toString,Dn=mt?mt.toStringTag:void 0;const zi=function(r){var e=Xt.call(r,Dn),t=r[Dn];try{r[Dn]=void 0;var n=!0}catch{}var s=_n.call(r);return n&&(e?r[Dn]=t:delete r[Dn]),s};var cl=Object.prototype.toString;const ji=function(r){return cl.call(r)};var oa=mt?mt.toStringTag:void 0;const qt=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":oa&&oa in Object(r)?zi(r):ji(r)},sn=Array.isArray,un=function(r){return r!=null&&typeof r=="object"},Ih=function(r){return typeof r=="string"||!sn(r)&&un(r)&&qt(r)=="[object String]"};function uo(r,e,t={},n=[]){const s=t&&t.xmlns,l=s?r.createElementNS(s,e):r.createElement(e);for(const c in t)l.setAttribute(c,t[c]);!Ih(n)&&Ye(n)||(n=[n]);for(let c of n)Ih(c)&&(c=r.createTextNode(c)),l.appendChild(c);return l}const Mh=function(r,e){return function(t){return r(e(t))}},od=Mh(Object.getPrototypeOf,Object);var Pg=Function.prototype,Lg=Object.prototype,Bh=Pg.toString,Rg=Lg.hasOwnProperty,zg=Bh.call(Object);const to=function(r){if(!un(r)||qt(r)!="[object Object]")return!1;var e=od(r);if(e===null)return!0;var t=Rg.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Bh.call(t)==zg},jg=function(){this.__data__=[],this.size=0},$i=function(r,e){return r===e||r!=r&&e!=e},dl=function(r,e){for(var t=r.length;t--;)if($i(r[t][0],e))return t;return-1};var JA=Array.prototype.splice;const Vi=function(r){var e=this.__data__,t=dl(e,r);return!(t<0)&&(t==e.length-1?e.pop():JA.call(e,t,1),--this.size,!0)},Nh=function(r){var e=this.__data__,t=dl(e,r);return t<0?void 0:e[t][1]},$g=function(r){return dl(this.__data__,r)>-1},Vg=function(r,e){var t=this.__data__,n=dl(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function Xr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Xr.prototype.clear=jg,Xr.prototype.delete=Vi,Xr.prototype.get=Nh,Xr.prototype.has=$g,Xr.prototype.set=Vg;const Fi=Xr,es=function(){this.__data__=new Fi,this.size=0},ts=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},ul=function(r){return this.__data__.get(r)},Fg=function(r){return this.__data__.has(r)},_i=function(r){if(!Ce(r))return!1;var e=qt(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},id=dt["__core-js_shared__"];var Oh=function(){var r=/[^.]+$/.exec(id&&id.keys&&id.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const Hg=function(r){return!!Oh&&Oh in r};var Ug=Function.prototype.toString;const dr=function(r){if(r!=null){try{return Ug.call(r)}catch{}try{return r+""}catch{}}return""};var Wg=/^\[object .+?Constructor\]$/,Ph=Function.prototype,hl=Object.prototype,qg=Ph.toString,Gg=hl.hasOwnProperty,Kg=RegExp("^"+qg.call(Gg).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Yg=function(r){return!(!Ce(r)||Hg(r))&&(_i(r)?Kg:Wg).test(dr(r))},Qg=function(r,e){return r==null?void 0:r[e]},Hi=function(r,e){var t=Qg(r,e);return Yg(t)?t:void 0},ns=Hi(dt,"Map"),ia=Hi(Object,"create"),Zg=function(){this.__data__=ia?ia(null):{},this.size=0},Jg=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var Xg=Object.prototype.hasOwnProperty;const eb=function(r){var e=this.__data__;if(ia){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return Xg.call(e,r)?e[r]:void 0};var tb=Object.prototype.hasOwnProperty;const nb=function(r){var e=this.__data__;return ia?e[r]!==void 0:tb.call(e,r)},ob=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=ia&&e===void 0?"__lodash_hash_undefined__":e,this};function So(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}So.prototype.clear=Zg,So.prototype.delete=Jg,So.prototype.get=eb,So.prototype.has=nb,So.prototype.set=ob;const Lh=So,XA=function(){this.size=0,this.__data__={hash:new Lh,map:new(ns||Fi),string:new Lh}},ra=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},pl=function(r,e){var t=r.__data__;return ra(e)?t[typeof e=="string"?"string":"hash"]:t.map},ib=function(r){var e=pl(this,r).delete(r);return this.size-=e?1:0,e},rb=function(r){return pl(this,r).get(r)},sb=function(r){return pl(this,r).has(r)},ab=function(r,e){var t=pl(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function os(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}os.prototype.clear=XA,os.prototype.delete=ib,os.prototype.get=rb,os.prototype.has=sb,os.prototype.set=ab;const is=os,rs=function(r,e){var t=this.__data__;if(t instanceof Fi){var n=t.__data__;if(!ns||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new is(n)}return t.set(r,e),this.size=t.size,this};function vi(r){var e=this.__data__=new Fi(r);this.size=e.size}vi.prototype.clear=es,vi.prototype.delete=ts,vi.prototype.get=ul,vi.prototype.has=Fg,vi.prototype.set=rs;const ss=vi,lb=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},fl=function(){try{var r=Hi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),ml=function(r,e,t){e=="__proto__"&&fl?fl(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var cb=Object.prototype.hasOwnProperty;const rd=function(r,e,t){var n=r[e];cb.call(r,e)&&$i(n,t)&&(t!==void 0||e in r)||ml(r,e,t)},Ui=function(r,e,t,n){var s=!t;t||(t={});for(var l=-1,c=e.length;++l<c;){var u=e[l],p=n?n(t[u],r[u],u,t,r):void 0;p===void 0&&(p=r[u]),s?ml(t,u,p):rd(t,u,p)}return t},db=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},Rh=function(r){return un(r)&&qt(r)=="[object Arguments]"};var ur=Object.prototype,zh=ur.hasOwnProperty,e0=ur.propertyIsEnumerable;const Qo=Rh(function(){return arguments}())?Rh:function(r){return un(r)&&zh.call(r,"callee")&&!e0.call(r,"callee")},sd=function(){return!1};var jh=i&&!i.nodeType&&i,ad=jh&&!0&&o&&!o.nodeType&&o,$h=ad&&ad.exports===jh?dt.Buffer:void 0;const as=($h?$h.isBuffer:void 0)||sd;var ub=/^(?:0|[1-9]\d*)$/;const gl=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&ub.test(r))&&r>-1&&r%1==0&&r<e},ld=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var on={};on["[object Float32Array]"]=on["[object Float64Array]"]=on["[object Int8Array]"]=on["[object Int16Array]"]=on["[object Int32Array]"]=on["[object Uint8Array]"]=on["[object Uint8ClampedArray]"]=on["[object Uint16Array]"]=on["[object Uint32Array]"]=!0,on["[object Arguments]"]=on["[object Array]"]=on["[object ArrayBuffer]"]=on["[object Boolean]"]=on["[object DataView]"]=on["[object Date]"]=on["[object Error]"]=on["[object Function]"]=on["[object Map]"]=on["[object Number]"]=on["[object Object]"]=on["[object RegExp]"]=on["[object Set]"]=on["[object String]"]=on["[object WeakMap]"]=!1;const hb=function(r){return un(r)&&ld(r.length)&&!!on[qt(r)]},bl=function(r){return function(e){return r(e)}};var cd=i&&!i.nodeType&&i,sa=cd&&!0&&o&&!o.nodeType&&o,Wi=sa&&sa.exports===cd&&ct.process;const ls=function(){try{var r=sa&&sa.require&&sa.require("util").types;return r||Wi&&Wi.binding&&Wi.binding("util")}catch{}}();var Vh=ls&&ls.isTypedArray;const dd=Vh?bl(Vh):hb;var pb=Object.prototype.hasOwnProperty;const Fh=function(r,e){var t=sn(r),n=!t&&Qo(r),s=!t&&!n&&as(r),l=!t&&!n&&!s&&dd(r),c=t||n||s||l,u=c?db(r.length,String):[],p=u.length;for(var b in r)!e&&!pb.call(r,b)||c&&(b=="length"||s&&(b=="offset"||b=="parent")||l&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||gl(b,p))||u.push(b);return u};var hr=Object.prototype;const ud=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||hr)},kl=Mh(Object.keys,Object);var fb=Object.prototype.hasOwnProperty;const mb=function(r){if(!ud(r))return kl(r);var e=[];for(var t in Object(r))fb.call(r,t)&&t!="constructor"&&e.push(t);return e},_l=function(r){return r!=null&&ld(r.length)&&!_i(r)},aa=function(r){return _l(r)?Fh(r):mb(r)},gb=function(r,e){return r&&Ui(e,aa(e),r)},bb=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var kb=Object.prototype.hasOwnProperty;const _b=function(r){if(!Ce(r))return bb(r);var e=ud(r),t=[];for(var n in r)(n!="constructor"||!e&&kb.call(r,n))&&t.push(n);return t},cs=function(r){return _l(r)?Fh(r,!0):_b(r)},vb=function(r,e){return r&&Ui(e,cs(e),r)};var Hh=i&&!i.nodeType&&i,Uh=Hh&&!0&&o&&!o.nodeType&&o,Wh=Uh&&Uh.exports===Hh?dt.Buffer:void 0,ho=Wh?Wh.allocUnsafe:void 0;const hd=function(r,e){if(e)return r.slice();var t=r.length,n=ho?ho(t):new r.constructor(t);return r.copy(n),n},qh=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},Gh=function(r,e){for(var t=-1,n=r==null?0:r.length,s=0,l=[];++t<n;){var c=r[t];e(c,t,r)&&(l[s++]=c)}return l},pd=function(){return[]};var wb=Object.prototype.propertyIsEnumerable,Kh=Object.getOwnPropertySymbols;const vl=Kh?function(r){return r==null?[]:(r=Object(r),Gh(Kh(r),function(e){return wb.call(r,e)}))}:pd,Ab=function(r,e){return Ui(r,vl(r),e)},Cb=function(r,e){for(var t=-1,n=e.length,s=r.length;++t<n;)r[s+t]=e[t];return r},la=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)Cb(e,vl(r)),r=od(r);return e}:pd,yb=function(r,e){return Ui(r,la(r),e)},Yh=function(r,e,t){var n=e(r);return sn(r)?n:Cb(n,t(r))},fd=function(r){return Yh(r,aa,vl)},Eb=function(r){return Yh(r,cs,la)},wl=Hi(dt,"DataView"),md=Hi(dt,"Promise"),gd=Hi(dt,"Set"),Al=Hi(dt,"WeakMap");var bd="[object Map]",kd="[object Promise]",ca="[object Set]",_d="[object WeakMap]",Cl="[object DataView]",xb=dr(wl),t0=dr(ns),po=dr(md),Tb=dr(gd),Db=dr(Al),pr=qt;(wl&&pr(new wl(new ArrayBuffer(1)))!=Cl||ns&&pr(new ns)!=bd||md&&pr(md.resolve())!=kd||gd&&pr(new gd)!=ca||Al&&pr(new Al)!=_d)&&(pr=function(r){var e=qt(r),t=e=="[object Object]"?r.constructor:void 0,n=t?dr(t):"";if(n)switch(n){case xb:return Cl;case t0:return bd;case po:return kd;case Tb:return ca;case Db:return _d}return e});const da=pr;var Qh=Object.prototype.hasOwnProperty;const Zh=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Qh.call(r,"index")&&(t.index=r.index,t.input=r.input),t},yl=dt.Uint8Array,vd=function(r){var e=new r.constructor(r.byteLength);return new yl(e).set(new yl(r)),e},Sb=function(r,e){var t=e?vd(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var Ib=/\w*$/;const Mb=function(r){var e=new r.constructor(r.source,Ib.exec(r));return e.lastIndex=r.lastIndex,e};var Jh=mt?mt.prototype:void 0,wd=Jh?Jh.valueOf:void 0;const Bb=function(r){return wd?Object(wd.call(r)):{}},Ad=function(r,e){var t=e?vd(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},Cd=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return vd(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return Sb(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ad(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return Mb(r);case"[object Symbol]":return Bb(r)}};var Xh=Object.create;const Nb=function(){function r(){}return function(e){if(!Ce(e))return{};if(Xh)return Xh(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),ep=function(r){return typeof r.constructor!="function"||ud(r)?{}:Nb(od(r))},Ob=function(r){return un(r)&&da(r)=="[object Map]"};var tp=ls&&ls.isMap;const Pb=tp?bl(tp):Ob,fr=function(r){return un(r)&&da(r)=="[object Set]"};var np=ls&&ls.isSet;const n0=np?bl(np):fr;var Zo="[object Arguments]",yd="[object Function]",op="[object Object]",en={};en[Zo]=en["[object Array]"]=en["[object ArrayBuffer]"]=en["[object DataView]"]=en["[object Boolean]"]=en["[object Date]"]=en["[object Float32Array]"]=en["[object Float64Array]"]=en["[object Int8Array]"]=en["[object Int16Array]"]=en["[object Int32Array]"]=en["[object Map]"]=en["[object Number]"]=en[op]=en["[object RegExp]"]=en["[object Set]"]=en["[object String]"]=en["[object Symbol]"]=en["[object Uint8Array]"]=en["[object Uint8ClampedArray]"]=en["[object Uint16Array]"]=en["[object Uint32Array]"]=!0,en["[object Error]"]=en[yd]=en["[object WeakMap]"]=!1;const El=function r(e,t,n,s,l,c){var u,p=1&t,b=2&t,_=4&t;if(n&&(u=l?n(e,s,l,c):n(e)),u!==void 0)return u;if(!Ce(e))return e;var A=sn(e);if(A){if(u=Zh(e),!p)return qh(e,u)}else{var x=da(e),D=x==yd||x=="[object GeneratorFunction]";if(as(e))return hd(e,p);if(x==op||x==Zo||D&&!l){if(u=b||D?{}:ep(e),!p)return b?yb(e,vb(u,e)):Ab(e,gb(u,e))}else{if(!en[x])return l?e:{};u=Cd(e,x,p)}}c||(c=new ss);var I=c.get(e);if(I)return I;c.set(e,u),n0(e)?e.forEach(function(W){u.add(r(W,t,n,W,e,c))}):Pb(e)&&e.forEach(function(W,Q){u.set(Q,r(W,t,n,Q,e,c))});var P=A?void 0:(_?b?Eb:fd:b?cs:aa)(e);return lb(P||e,function(W,Q){P&&(W=e[Q=W]),rd(u,Q,r(W,t,n,Q,e,c))}),u},xl=function(r,e){return El(r,5,e=typeof e=="function"?e:void 0)},qi=function(r){return un(r)&&r.nodeType===1&&!to(r)};class ip{constructor(e,t){this._config={},t&&this.define(Ed(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,s=!1){if(to(t))return void this._setObjectToTarget(e,t,s);const l=t.split(".");t=l.pop();for(const c of l)to(e[c])||(e[c]={}),e=e[c];if(to(n))return to(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,s);s&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const s of n){if(!to(e[s])){e=null;break}e=e[s]}return e?Ed(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],n)})}}function Ed(r){return xl(r,Lb)}function Lb(r){return qi(r)||typeof r=="function"?r:void 0}function Gi(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}function Tl(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}const xd=no(Oe());function no(r){return r?class extends r{listenTo(e,t,n,s={}){if(Gi(e)||Tl(e)){const l={capture:!!s.useCapture,passive:!!s.usePassive},c=this._getProxyEmitter(e,l)||new Rb(e,l);this.listenTo(c,t,n,s)}else super.listenTo(e,t,n,s)}stopListening(e,t,n){if(Gi(e)||Tl(e)){const s=this._getAllProxyEmitters(e);for(const l of s)this.stopListening(l,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,s){const l=n[ue];return l&&l[s]?l[s].emitter:null}(this,rp(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:xd}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{no[r]=xd.prototype[r]});class Rb extends Oe(){constructor(e,t){super(),it(this,rp(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Oe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Oe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function rp(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=q())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Td;try{Td={window,document}}catch{Td={window:{},document:{}}}const at=Td;function sp(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function hn(r){return Object.prototype.toString.call(r)=="[object Text]"}function fo(r){return Object.prototype.toString.apply(r)=="[object Range]"}function zb(r){return r&&r.parentNode?r.offsetParent===at.document.body?null:r.offsetParent:null}const Dd=["top","right","bottom","left","width","height"];class Dt{constructor(e){const t=fo(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Sd(e)||t)if(t){const n=Dt.getDomRangeRects(e);Dl(this,Dt.getBoundingRect(n))}else Dl(this,e.getBoundingClientRect());else if(Tl(e)){const{innerWidth:n,innerHeight:s}=e;Dl(this,{top:0,right:n,bottom:s,left:0,width:n,height:s})}else Dl(this,e)}clone(){return new Dt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new Dt(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(ap(e))return t;let n,s=e,l=e.parentNode||e.commonAncestorContainer;for(;l&&!ap(l);){const u=((c=l)instanceof HTMLElement?c.ownerDocument.defaultView.getComputedStyle(c).overflow:"visible")==="visible";s instanceof HTMLElement&&lp(s)==="absolute"&&(n=s);const p=lp(l);if(u||n&&(p==="relative"&&u||p!=="relative")){s=l,l=l.parentNode;continue}const b=new Dt(l),_=t.getIntersection(b);if(!_)return null;_.getArea()<t.getArea()&&(t=_),s=l,l=l.parentNode}var c;return t}isEqual(e){for(const t of Dd)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=at.window,n=this.clone().moveBy(e,t);if(Sd(n._source)){const s=zb(n._source);s&&function(l,c){const u=new Dt(c),p=sp(c);let b=0,_=0;b-=u.left,_-=u.top,b+=c.scrollLeft,_+=c.scrollTop,b-=p.left,_-=p.top,l.moveBy(b,_)}(n,s)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,s;if(Tl(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const l=sp(e);t=e.offsetWidth-e.clientWidth-l.left-l.right,n=e.offsetHeight-e.clientHeight-l.top-l.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=l.left,this.top+=l.top,this.right-=l.right,this.bottom-=l.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const s of n)t.push(new Dt(s));else{let s=e.startContainer;hn(s)&&(s=s.parentNode);const l=new Dt(s.getBoundingClientRect());l.right=l.left,l.width=0,t.push(l)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const s of e)n++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Dt(t))}}function Dl(r,e){for(const t of Dd)r[t]=e[t]}function ap(r){return!!Sd(r)&&r===r.ownerDocument.body}function Sd(r){return r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.getBoundingClientRect=="function"}function lp(r){return r instanceof HTMLElement?r.ownerDocument.defaultView.getComputedStyle(r).position:"static"}const an=class{constructor(r,e){an._observerInstance||an._createObserver(),this._element=r,this._callback=e,an._addElementCallback(r,e),an._observerInstance.observe(r)}get element(){return this._element}destroy(){an._deleteElementCallback(this._element,this._callback)}static _addElementCallback(r,e){an._elementCallbacks||(an._elementCallbacks=new Map);let t=an._elementCallbacks.get(r);t||(t=new Set,an._elementCallbacks.set(r,t)),t.add(e)}static _deleteElementCallback(r,e){const t=an._getElementCallbacks(r);t&&(t.delete(e),t.size||(an._elementCallbacks.delete(r),an._observerInstance.unobserve(r))),an._elementCallbacks&&!an._elementCallbacks.size&&(an._observerInstance=null,an._elementCallbacks=null)}static _getElementCallbacks(r){return an._elementCallbacks?an._elementCallbacks.get(r):null}static _createObserver(){an._observerInstance=new at.window.ResizeObserver(r=>{for(const e of r){const t=an._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let ua=an;function cp(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}function ds(r){return e=>e+r}function Sl(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function dp(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function mr(r){return r&&r.nodeType===Node.COMMENT_NODE}function gr(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}ua._observerInstance=null,ua._elementCallbacks=null;var ha=Math.pow;function Il({element:r,target:e,positions:t,limiter:n,fitInViewport:s,viewportOffsetConfig:l}){_i(e)&&(e=e()),_i(n)&&(n=n());const c=zb(r),u=function(x){x=Object.assign({top:0,bottom:0,left:0,right:0},x);const D=new Dt(at.window);return D.top+=x.top,D.height-=x.top,D.bottom-=x.bottom,D.height-=x.bottom,D}(l),p=new Dt(r),b=Id(e,u);let _;if(!b||!u.getIntersection(b))return null;const A={targetRect:b,elementRect:p,positionedElementAncestor:c,viewportRect:u};if(n||s){if(n){const x=Id(n,u);x&&(A.limiterRect=x)}_=function(x,D){const{elementRect:I}=D,P=I.getArea(),W=x.map(ge=>new Md(ge,D)).filter(ge=>!!ge.name);let Q=0,se=null;for(const ge of W){const{limiterIntersectionArea:xe,viewportIntersectionArea:nt}=ge;if(xe===P)return ge;const gt=ha(nt,2)+ha(xe,2);gt>Q&&(Q=gt,se=ge)}return se}(t,A)}else _=new Md(t[0],A);return _}function Id(r,e){const t=new Dt(r).getVisible();return t?t.getIntersection(e):null}class Md{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:s,top:l,name:c,config:u}=n;this.name=c,this.config=u,this._positioningFunctionCoordinates={left:s,top:l},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function us(r){const e=r.parentNode;e&&e.removeChild(r)}function Bd({window:r,rect:e,alignToTop:t,forceScroll:n,viewportOffset:s}){const l=e.clone().moveBy(0,s.bottom),c=e.clone().moveBy(0,-s.top),u=new Dt(r).excludeScrollbarsAndBorders(),p=t&&n,b=[c,l].every(I=>u.contains(I));let{scrollX:_,scrollY:A}=r;const x=_,D=A;p?A-=u.top-e.top+s.top:b||(hp(c,u)?A-=u.top-e.top+s.top:up(l,u)&&(A+=t?e.top-u.top-s.top:e.bottom-u.bottom+s.bottom)),b||(pp(e,u)?_-=u.left-e.left+s.left:fp(e,u)&&(_+=e.right-u.right+s.right)),_==x&&A===D||r.scrollTo(_,A)}function jb({parent:r,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:s=0,limiterElement:l}){const c=Nd(r),u=t&&n;let p,b,_;const A=l||c.document.body;for(;r!=A;)b=e(),p=new Dt(r).excludeScrollbarsAndBorders(),_=p.contains(b),u?r.scrollTop-=p.top-b.top+s:_||(hp(b,p)?r.scrollTop-=p.top-b.top+s:up(b,p)&&(r.scrollTop+=t?b.top-p.top-s:b.bottom-p.bottom+s)),_||(pp(b,p)?r.scrollLeft-=p.left-b.left+s:fp(b,p)&&(r.scrollLeft+=b.right-p.right+s)),r=r.parentNode}function up(r,e){return r.bottom>e.bottom}function hp(r,e){return r.top<e.top}function pp(r,e){return r.left<e.left}function fp(r,e){return r.right>e.right}function Nd(r){return fo(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function $b(r){if(fo(r)){let e=r.commonAncestorContainer;return hn(e)&&(e=e.parentNode),e}return r.parentNode}function mp(r,e){const t=Nd(r),n=new Dt(r);if(t===e)return n;{let s=t;for(;s!=e;){const l=s.frameElement,c=new Dt(l).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),s=s.parent}}return n}const Vb={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Fb={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},gp={37:"\u2190",38:"\u2191",39:"\u2192",40:"\u2193",9:"\u21E5",33:"Page Up",34:"Page Down"},Mt=function(){const r={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)r[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;return Object.assign(r,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),r}(),Hb=Object.fromEntries(Object.entries(Mt).map(([r,e])=>{let t;return t=e in gp?gp[e]:r.charAt(0).toUpperCase()+r.slice(1),[e,t]}));function hs(r){let e;if(typeof r=="string"){if(e=Mt[r.toLowerCase()],!e)throw new B("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?Mt.alt:0)+(r.ctrlKey?Mt.ctrl:0)+(r.shiftKey?Mt.shift:0)+(r.metaKey?Mt.cmd:0);return e}function pa(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return hs(t.slice(0,-1));const n=hs(t);return(v.isMac||v.isiOS)&&n==Mt.ctrl?Mt.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Jo(r){let e=pa(r);return Object.entries(v.isMac||v.isiOS?Vb:Fb).reduce((t,[n,s])=>(e&Mt[n]&&(e&=~Mt[n],t+=s),t),"")+(e?Hb[e]:"")}function Od(r,e){const t=e==="ltr";switch(r){case Mt.arrowleft:return t?"left":"right";case Mt.arrowright:return t?"right":"left";case Mt.arrowup:return"up";case Mt.arrowdown:return"down"}}function Qt(r){return Array.isArray(r)?r:[r]}const Pd=function(r,e,t){(t!==void 0&&!$i(r[e],t)||t===void 0&&!(e in r))&&ml(r,e,t)},bp=function(r){return function(e,t,n){for(var s=-1,l=Object(e),c=n(e),u=c.length;u--;){var p=c[r?u:++s];if(t(l[p],p,l)===!1)break}return e}}(),Ub=function(r){return un(r)&&_l(r)},ps=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},Wb=function(r){return Ui(r,cs(r))},o0=function(r,e,t,n,s,l,c){var u=ps(r,t),p=ps(e,t),b=c.get(p);if(b)Pd(r,t,b);else{var _=l?l(u,p,t+"",r,e,c):void 0,A=_===void 0;if(A){var x=sn(p),D=!x&&as(p),I=!x&&!D&&dd(p);_=p,x||D||I?sn(u)?_=u:Ub(u)?_=qh(u):D?(A=!1,_=hd(p,!0)):I?(A=!1,_=Ad(p,!0)):_=[]:to(p)||Qo(p)?(_=u,Qo(u)?_=Wb(u):Ce(u)&&!_i(u)||(_=ep(p))):A=!1}A&&(c.set(p,_),s(_,p,n,l,c),c.delete(p)),Pd(r,t,_)}},Ld=function r(e,t,n,s,l){e!==t&&bp(t,function(c,u){if(l||(l=new ss),Ce(c))o0(e,t,u,n,r,s,l);else{var p=s?s(ps(e,u),c,u+"",e,t,l):void 0;p===void 0&&(p=c),Pd(e,u,p)}},cs)},Ki=function(r){return r},qb=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var Rd=Math.max;const Gb=function(r,e,t){return e=Rd(e===void 0?r.length-1:e,0),function(){for(var n=arguments,s=-1,l=Rd(n.length-e,0),c=Array(l);++s<l;)c[s]=n[e+s];s=-1;for(var u=Array(e+1);++s<e;)u[s]=n[s];return u[e]=t(c),qb(r,this,u)}},Kb=function(r){return function(){return r}},fs=fl?function(r,e){return fl(r,"toString",{configurable:!0,enumerable:!1,value:Kb(e),writable:!0})}:Ki;var Yb=Date.now;const Qb=function(r){var e=0,t=0;return function(){var n=Yb(),s=16-(n-t);if(t=n,s>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(fs),_p=function(r,e){return Qb(Gb(r,e,Ki),r+"")},i0=function(r,e,t){if(!Ce(t))return!1;var n=typeof e;return!!(n=="number"?_l(t)&&gl(e,t.length):n=="string"&&e in t)&&$i(t[e],r)},Zb=function(r){return _p(function(e,t){var n=-1,s=t.length,l=s>1?t[s-1]:void 0,c=s>2?t[2]:void 0;for(l=r.length>3&&typeof l=="function"?(s--,l):void 0,c&&i0(t[0],t[1],c)&&(l=s<3?void 0:l,s=1),e=Object(e);++n<s;){var u=t[n];u&&r(e,u,n,l)}return e})},zd=Zb(function(r,e,t){Ld(r,e,t)});function Jb(r,e,t=1,n){if(typeof t!="number")throw new B("translation-service-quantity-not-a-number",null,{quantity:t});const s=n||at.window.CKEDITOR_TRANSLATIONS,l=function(_){return Object.keys(_).length}(s);l===1&&(r=Object.keys(s)[0]);const c=e.id||e.string;if(l===0||!function(_,A,x){return!!x[_]&&!!x[_].dictionary[A]}(r,c,s))return t!==1?e.plural:e.string;const u=s[r].dictionary,p=s[r].getPluralForm||(_=>_===1?0:1),b=u[c];return typeof b=="string"?b:b[Number(p(t))]}at.window.CKEDITOR_TRANSLATIONS||(at.window.CKEDITOR_TRANSLATIONS={});const Xb=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function vp(r){return Xb.includes(r)?"rtl":"ltr"}class ek{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=vp(this.uiLanguage),this.contentLanguageDirection=vp(this.contentLanguage),this.translations=function(s){return Array.isArray(s)?s.reduce((l,c)=>zd(l,c)):s}(n),this.t=(s,l)=>this._t(s,l)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Qt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(s,l){return s.replace(/%(\d+)/g,(c,u)=>u<l.length?l[u]:c)}(Jb(this.uiLanguage,e,n,this.translations),t)}}class Rn extends Oe(){constructor(e={},t={}){super();const n=Ye(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new B("collection-add-item-invalid-index",this);let n=0;for(const s of e){const l=this._getItemIdBeforeAdding(s),c=t+n;this._items.splice(c,0,s),this._itemMap.set(l,s),this.fire("add",s,c),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new B("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new B("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(s,l,c)=>{const u=t._bindToCollection==this,p=t._bindToInternalToExternalMap.get(l);if(u&&p)this._bindToExternalToInternalMap.set(l,p),this._bindToInternalToExternalMap.set(p,l);else{const b=e(l);if(!b)return void this._skippedIndexesFromExternal.push(c);let _=c;for(const A of this._skippedIndexesFromExternal)c>A&&_--;for(const A of t._skippedIndexesFromExternal)_>=A&&_++;this._bindToExternalToInternalMap.set(l,b),this._bindToInternalToExternalMap.set(b,l),this.add(b,_);for(let A=0;A<t._skippedIndexesFromExternal.length;A++)_<=t._skippedIndexesFromExternal[A]&&t._skippedIndexesFromExternal[A]++}};for(const s of t)n(0,s,t.getIndex(s));this.listenTo(t,"add",n),this.listenTo(t,"remove",(s,l,c)=>{const u=this._bindToExternalToInternalMap.get(l);u&&this.remove(u),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,b)=>(c<b&&p.push(b-1),c>b&&p.push(b),p),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new B("collection-add-invalid-id",this);if(this.get(n))throw new B("collection-add-item-already-exists",this)}else e[t]=n=q();return n}_remove(e){let t,n,s,l=!1;const c=this._idProperty;if(typeof e=="string"?(n=e,s=this._itemMap.get(n),l=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],l=!s,s&&(n=s[c])):(s=e,n=s[c],t=this._items.indexOf(s),l=t==-1||!this._itemMap.get(n)),l)throw new B("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const u=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(u),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function En(r){const e=r.next();return e.done?null:e.value}class Sn extends no(Z()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new B("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class ln{constructor(){this._listener=new(no())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+hs(n),n)})}set(e,t,n={}){const s=pa(e),l=n.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(c,u)=>{t(u,()=>{u.preventDefault(),u.stopPropagation(),c.stop()}),c.return=!0},{priority:l})}press(e){return!!this._listener.fire("_keydown:"+hs(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function Xo(r){return Ye(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}function jd(r,e){let t;function n(...s){n.cancel(),t=setTimeout(()=>r(...s),e)}return n.cancel=()=>{clearTimeout(t)},n}function $d(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Vd(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const tk=function(){const r=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+r.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:\u200D${t})*`,"ug")}();function wp(r,e){const t=String(r).matchAll(tk);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Ve extends Z(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ap,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ap),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ap(r){r.return=!1,r.stop()}class yt extends Z(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,s=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!s)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Cp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Cp),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Cp(r){r.return=!1,r.stop()}class Fd extends yt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){K(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Ml extends Oe(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,l]of n)this._contextPlugins.set(s,l),this._contextPlugins.set(l,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new B("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const s=this,l=this._context;(function I(P,W=new Set){P.forEach(Q=>{p(Q)&&(W.has(Q)||(W.add(Q),Q.pluginName&&!s._availablePlugins.has(Q.pluginName)&&s._availablePlugins.set(Q.pluginName,Q),Q.requires&&I(Q.requires,W)))})})(e),x(e);const c=[...function I(P,W=new Set){return P.map(Q=>p(Q)?Q:s._availablePlugins.get(Q)).reduce((Q,se)=>W.has(se)?Q:(W.add(se),se.requires&&(x(se.requires,se),I(se.requires,W).forEach(ge=>Q.add(ge))),Q.add(se)),new Set)}(e.filter(I=>!_(I,t)))];(function(I,P){for(const W of P){if(typeof W!="function")throw new B("plugincollection-replace-plugin-invalid-type",null,{pluginItem:W});const Q=W.pluginName;if(!Q)throw new B("plugincollection-replace-plugin-missing-name",null,{pluginItem:W});if(W.requires&&W.requires.length)throw new B("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:Q});const se=s._availablePlugins.get(Q);if(!se)throw new B("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:Q});const ge=I.indexOf(se);if(ge===-1){if(s._contextPlugins.has(se))return;throw new B("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:Q})}if(se.requires&&se.requires.length)throw new B("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:Q});I.splice(ge,1,W),s._availablePlugins.set(Q,W)}})(c,n);const u=c.map(I=>{let P=s._contextPlugins.get(I);return P=P||new I(l),s._add(I,P),P});return D(u,"init").then(()=>D(u,"afterInit")).then(()=>u);function p(I){return typeof I=="function"}function b(I){return p(I)&&!!I.isContextPlugin}function _(I,P){return P.some(W=>W===I||A(I)===W||A(W)===I)}function A(I){return p(I)?I.pluginName||I.name:I}function x(I,P=null){I.map(W=>p(W)?W:s._availablePlugins.get(W)||W).forEach(W=>{(function(Q,se){if(!p(Q))throw se?new B("plugincollection-soft-required",l,{missingPlugin:Q,requiredBy:A(se)}):new B("plugincollection-plugin-not-found",l,{plugin:Q})})(W,P),function(Q,se){if(!!b(se)&&!b(Q))throw new B("plugincollection-context-required",l,{plugin:A(Q),requiredBy:A(se)})}(W,P),function(Q,se){if(!!se&&!!_(Q,t))throw new B("plugincollection-required",l,{plugin:A(Q),requiredBy:A(se)})}(W,P)})}function D(I,P){return I.reduce((W,Q)=>Q[P]?s._contextPlugins.has(Q)?W:W.then(Q[P].bind(Q)):W,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new B("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var Hd=Object.getOwnPropertySymbols,br=Object.prototype.hasOwnProperty,yp=Object.prototype.propertyIsEnumerable;class Bl{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,s=((u,p)=>{var b={};for(var _ in u)br.call(u,_)&&p.indexOf(_)<0&&(b[_]=u[_]);if(u!=null&&Hd)for(var _ of Hd(u))p.indexOf(_)<0&&yp.call(u,_)&&(b[_]=u[_]);return b})(t,["translations"]);this.config=new ip(s,this.constructor.defaultConfig);const l=this.constructor.builtinPlugins;this.config.define("plugins",l),this.plugins=new Ml(this,l);const c=this.config.get("language")||{};this.locale=new ek({uiLanguage:typeof c=="string"?c:c.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new Rn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new B("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new B("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new B("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Nl extends Z(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class Ep extends ln{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const s=t;t=(l,c)=>{this.editor.execute(s),c()}}super.set(e,t,n)}}var nk=h(2591),Ze=h.n(nk),xp=h(4098),ok={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(xp.A,ok),xp.A.locals;const Ol=new WeakMap;let Ud=!1;function Pl({view:r,element:e,text:t,isDirectHost:n=!0,keepOnFocus:s=!1}){const l=r.document;function c(u){Ol.get(l).set(e,{text:u,isDirectHost:n,keepOnFocus:s,hostElement:n?e:null}),r.change(p=>Tp(l,p))}Ol.has(l)||(Ol.set(l,new Map),l.registerPostFixer(u=>Tp(l,u)),l.on("change:isComposing",()=>{r.change(u=>Tp(l,u))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(u,p,b)=>{c(b)}),e.placeholder?c(e.placeholder):t&&c(t),t&&function(){Ud||U("enableplaceholder-deprecated-text-option"),Ud=!0}()}function ik(r,e){return!e.hasClass("ck-placeholder")&&(r.addClass("ck-placeholder",e),!0)}function kr(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function rk(r,e){if(!r.isAttached()||Array.from(r.getChildren()).some(s=>!s.is("uiElement")))return!1;const t=r.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==r)&&(!!e||!t.isFocused||!!n&&n.parent!==r)}function Tp(r,e){const t=Ol.get(r),n=[];let s=!1;for(const[l,c]of t)c.isDirectHost&&(n.push(l),wi(e,l,c)&&(s=!0));for(const[l,c]of t){if(c.isDirectHost)continue;const u=sk(l);u&&(n.includes(u)||(c.hostElement=u,wi(e,l,c)&&(s=!0)))}return s}function wi(r,e,t){const{text:n,isDirectHost:s,hostElement:l}=t;let c=!1;return l.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,l),c=!0),(s||e.childCount==1)&&rk(l,t.keepOnFocus)?ik(r,l)&&(c=!0):kr(r,l)&&(c=!0),c}function sk(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class _r{is(){throw new Error("is() method is abstract")}}const Dp=function(r){return El(r,4)};class vr extends Oe(_r){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new B("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),s=e.getAncestors(t);let l=0;for(;n[l]==s[l]&&n[l];)l++;return l===0?null:n[l-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),s=Ee(t,n);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<n[s]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Dp(this);return delete e.parent,e}}vr.prototype.is=function(r){return r==="node"||r==="view:node"};class Gt extends vr{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Gt&&(this===e||this.data===e.data)}_clone(){return new Gt(this.document,this.data)}}Gt.prototype.is=function(r){return r==="$text"||r==="view:$text"||r==="text"||r==="view:text"||r==="node"||r==="view:node"};class ei extends _r{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new B("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new B("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}ei.prototype.is=function(r){return r==="$textProxy"||r==="view:$textProxy"||r==="textProxy"||r==="view:textProxy"};class ti{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const s=Sp(t,n);if(s)return{element:t,pattern:n,match:s}}return null}matchAll(...e){const t=[];for(const n of e)for(const s of this._patterns){const l=Sp(n,s);l&&t.push({element:n,pattern:s,match:l})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Sp(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,s){return n instanceof RegExp?!!s.match(n):n===s}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,s){const l=new Set(s.getAttributeKeys());return to(n)?(n.style!==void 0&&U("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&U("matcher-pattern-deprecated-attributes-class-key",n)):(l.delete("style"),l.delete("class")),Wd(n,l,c=>s.getAttribute(c))}(e.attributes,r),!t.attributes)||e.classes&&(t.classes=function(n,s){return Wd(n,s.getClassNames(),()=>{})}(e.classes,r),!t.classes)||e.styles&&(t.styles=function(n,s){return Wd(n,s.getStyleNames(!0),l=>s.getStyle(l))}(e.styles,r),!t.styles)?null:t}function Wd(r,e,t){const n=function(c){return Array.isArray(c)?c.map(u=>to(u)?(u.key!==void 0&&u.value!==void 0||U("matcher-pattern-missing-key-or-value",u),[u.key,u.value]):[u,!0]):to(c)?Object.entries(c):[[c,!0]]}(r),s=Array.from(e),l=[];if(n.forEach(([c,u])=>{s.forEach(p=>{(function(b,_){return b===!0||b===_||b instanceof RegExp&&_.match(b)})(c,p)&&function(b,_,A){if(b===!0)return!0;const x=A(_);return b===x||b instanceof RegExp&&!!String(x).match(b)}(u,p,t)&&l.push(p)})}),n.length&&!(l.length<n.length))return l}const fa=function(r){return typeof r=="symbol"||un(r)&&qt(r)=="[object Symbol]"};var Ll=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rl=/^\w*$/;const qd=function(r,e){if(sn(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!fa(r))||Rl.test(r)||!Ll.test(r)||e!=null&&r in Object(e)};function Gd(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,s=e?e.apply(this,n):n[0],l=t.cache;if(l.has(s))return l.get(s);var c=r.apply(this,n);return t.cache=l.set(s,c)||l,c};return t.cache=new(Gd.Cache||is),t}Gd.Cache=is;const ma=Gd,r0=function(r){var e=ma(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,T=/\\(\\)?/g,j=r0(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(oe,function(t,n,s,l){e.push(s?l.replace(T,"$1"):n||t)}),e});const ie=j,De=function(r,e){for(var t=-1,n=r==null?0:r.length,s=Array(n);++t<n;)s[t]=e(r[t],t,r);return s};var tt=mt?mt.prototype:void 0,Xe=tt?tt.toString:void 0;const Tt=function r(e){if(typeof e=="string")return e;if(sn(e))return De(e,r)+"";if(fa(e))return Xe?Xe.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Bn=function(r){return r==null?"":Tt(r)},zn=function(r,e){return sn(r)?r:qd(r,e)?[r]:ie(Bn(r))},xn=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},jn=function(r){if(typeof r=="string"||fa(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},oo=function(r,e){for(var t=0,n=(e=zn(e,r)).length;r!=null&&t<n;)r=r[jn(e[t++])];return t&&t==n?r:void 0},ga=function(r,e,t){var n=-1,s=r.length;e<0&&(e=-e>s?0:s+e),(t=t>s?s:t)<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var l=Array(s);++n<s;)l[n]=r[n+e];return l},ak=function(r,e){return e.length<2?r:oo(r,ga(e,0,-1))},ms=function(r,e){return e=zn(e,r),(r=ak(r,e))==null||delete r[jn(xn(e))]},EP=function(r,e){return r==null||ms(r,e)},Kd=function(r,e,t){var n=r==null?void 0:oo(r,e);return n===void 0?t:n},xP=function(r,e,t,n){if(!Ce(r))return r;for(var s=-1,l=(e=zn(e,r)).length,c=l-1,u=r;u!=null&&++s<l;){var p=jn(e[s]),b=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return r;if(s!=c){var _=u[p];(b=n?n(_,p,u):void 0)===void 0&&(b=Ce(_)?_:gl(e[s+1])?[]:{})}rd(u,p,b),u=u[p]}return r},TP=function(r,e,t){return r==null?r:xP(r,e,t)};class lk{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let s=null,l=0,c=0,u=null;const p=new Map;if(n==="")return p;n.charAt(n.length-1)!=";"&&(n+=";");for(let b=0;b<n.length;b++){const _=n.charAt(b);if(s===null)switch(_){case":":u||(u=n.substr(l,b-l),c=b+1);break;case'"':case"'":s=_;break;case";":{const A=n.substr(c,b-c);u&&p.set(u.trim(),A.trim()),u=null,l=b+1;break}}else _===s&&(s=null)}return p}(e);for(const[n,s]of t)this._styleProcessor.toNormalizedForm(n,s,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Ce(e))for(const[n,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=ck(e);EP(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Ce(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),s=Kd(this._styles,n);!s||!Object.keys(s).length&&this.remove(n)}}class DP{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Ce(t))dk(n,ck(e),t);else if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:l,value:c}=s(t);dk(n,l,c)}else dk(n,e,t)}getNormalized(e,t){if(!e)return zd({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Kd(t,n);const s=n(e,t);if(s)return s}return Kd(t,ck(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const l=this.getNormalized(s,e);return l&&typeof l=="object"?Object.keys(l).length:l}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function ck(r){return r.replace("-",".")}function dk(r,e,t){let n=t;Ce(t)&&(n=zd({},Kd(r,e),t)),TP(r,e,n)}class Io extends vr{constructor(e,t,n,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(l){const c=Xo(l);for(const[u,p]of c)p===null?c.delete(u):typeof p!="string"&&c.set(u,String(p));return c}(n),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const l=this._attrs.get("class");s0(this._classes,l),this._attrs.delete("class")}this._styles=new lk(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Io))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new ti(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const s=function(l,c){return typeof c=="string"?[new Gt(l,c)]:(Ye(c)||(c=[c]),Array.from(c).map(u=>typeof u=="string"?new Gt(l,u):u instanceof ei?new Gt(l,u.data):u))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,l.document=this.document,this._children.splice(e,0,l),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?s0(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Qt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Qt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Qt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function s0(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}Io.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="view:element"):r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Yd extends Io{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=SP}}function SP(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}Yd.prototype.is=function(r,e){return e?e===this.name&&(r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Ip extends Z(Yd){constructor(e,t,n,s){super(e,t,n,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",l=>l&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Ip.prototype.is=function(r,e){return e?e===this.name&&(r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const a0=Symbol("rootName");class l0 extends Ip{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(a0)}set rootName(e){this._setCustomProperty(a0,e)}set _name(e){this.name=e}}l0.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class ba{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new B("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new B("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=et._createAt(e.startPosition):this._position=et._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(n instanceof Gt){if(e.isAtEnd)return this._position=et._createAfter(n),this._next();s=n.data[e.offset]}else s=n.getChild(e.offset);if(s instanceof Io){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new et(s,0);return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof Gt){if(this.singleCharacters)return e=new et(s,0),this._position=e,this._next();let l,c=s.data.length;return s==this._boundaryEndParent?(c=this.boundaries.end.offset,l=new ei(s,0,c),e=et._createAfter(l)):(l=new ei(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",l,t,e,c)}if(typeof s=="string"){let l;this.singleCharacters?l=1:l=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const c=new ei(n,e.offset,l);return e.offset+=l,this._position=e,this._formatReturnValue("text",c,t,e,l)}return e=et._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(n instanceof Gt){if(e.isAtStart)return this._position=et._createBefore(n),this._previous();s=n.data[e.offset-1]}else s=n.getChild(e.offset-1);if(s instanceof Io)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new et(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof Gt){if(this.singleCharacters)return e=new et(s,s.data.length),this._position=e,this._previous();let l,c=s.data.length;if(s==this._boundaryStartParent){const u=this.boundaries.start.offset;l=new ei(s,u,s.data.length-u),c=l.data.length,e=et._createBefore(l)}else l=new ei(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",l,t,e,c)}if(typeof s=="string"){let l;if(this.singleCharacters)l=1;else{const u=n===this._boundaryStartParent?this.boundaries.start.offset:0;l=e.offset-u}e.offset-=l;const c=new ei(n,e.offset,l);return this._position=e,this._formatReturnValue("text",c,t,e,l)}return e=et._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,s,l){return t instanceof ei&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=et._createAfter(t.textNode):(s=et._createAfter(t.textNode),this._position=s)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=et._createBefore(t.textNode):(s=et._createBefore(t.textNode),this._position=s))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:s,length:l}}}}class et extends _r{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ip);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=et._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ba(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let s=0;for(;t[s]==n[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const s=Ee(t,n);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<n[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ba(e)}clone(){return new et(this.parent,this.offset)}static _createAt(e,t){if(e instanceof et)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new B("view-createpositionat-offset-required",n)}return new et(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new et(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new B("view-position-after-root",e,{root:e});return new et(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new et(e.textNode,e.offsetInText);if(!e.parent)throw new B("view-position-before-root",e,{root:e});return new et(e.parent,e.index)}}et.prototype.is=function(r){return r==="position"||r==="view:position"};class _t extends _r{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ba({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Mp,{direction:"backward"}),t=this.end.getLastMatchingPosition(Mp);return e.parent.is("$text")&&e.isAtStart&&(e=et._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=et._createAfter(t.parent)),new _t(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Mp);if(e.isAfter(this.end)||e.isEqual(this.end))return new _t(e,e);let t=this.end.getLastMatchingPosition(Mp,{direction:"backward"});const n=e.nodeAfter,s=t.nodeBefore;return n&&n.is("$text")&&(e=new et(n,0)),s&&s.is("$text")&&(t=new et(s,s.data.length)),new _t(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new _t(this.start,e.start)),this.containsPosition(e.end)&&t.push(new _t(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new _t(t,n)}return null}getWalker(e={}){return e.boundaries=this,new ba(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new _t(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ba(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ba(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,s){return new this(new et(e,t),new et(n,s))}static _createFromPositionAndShift(e,t){const n=e,s=e.getShiftedBy(t);return t>0?new this(n,s):new this(s,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(et._createBefore(e),t)}}function Mp(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}_t.prototype.is=function(r){return r==="range"||r==="view:range"};class Ai extends Oe(_r){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const s of e._ranges)if(t.isEqual(s)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Re(this.getRanges());if(t!=Re(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let s=!1;for(let l of e.getRanges())if(l=l.getTrimmed(),n.start.isEqual(l.start)&&n.end.isEqual(l.end)){s=!0;break}if(!s)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,s]=e;if(typeof n=="object"&&(s=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof Ai||t instanceof uk)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof _t)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof et)this._setRanges([new _t(t)]),this._setFakeOptions(s);else if(t instanceof vr){const l=!!s&&!!s.backward;let c;if(n===void 0)throw new B("view-selection-setto-required-second-parameter",this);c=n=="in"?_t._createIn(t):n=="on"?_t._createOn(t):new _t(et._createAt(t,n)),this._setRanges([c],l),this._setFakeOptions(s)}else{if(!Ye(t))throw new B("view-selection-setto-not-selectable",this);this._setRanges(t,s&&s.backward),this._setFakeOptions(s)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new B("view-selection-setfocus-no-ranges",this);const n=et._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),n.compareWith(s)=="before"?this._addRange(new _t(n,s),!0):this._addRange(new _t(s,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof _t))throw new B("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new B("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new _t(e.start,e.end))}}Ai.prototype.is=function(r){return r==="selection"||r==="view:selection"};class uk extends Oe(_r){constructor(...e){super(),this._selection=new Ai,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}uk.prototype.is=function(r){return r==="selection"||r=="documentSelection"||r=="view:selection"||r=="view:documentSelection"};class zl extends z{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const hk=Symbol("bubbling contexts");function pk(r){return class extends r{fire(e,...t){try{const n=e instanceof z?e:new z(this,e),s=fk(this);if(!s.size)return;if(Qd(n,"capturing",this),jl(s,"$capture",n,...t))return n.return;const l=n.startRange||this.selection.getFirstRange(),c=l?l.getContainedElement():null,u=!!c&&Boolean(c0(s,c));let p=c||function(b){if(!b)return null;const _=b.start.parent,A=b.end.parent,x=_.getPath(),D=A.getPath();return x.length>D.length?_:A}(l);if(Qd(n,"atTarget",p),!u){if(jl(s,"$text",n,...t))return n.return;Qd(n,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(jl(s,"$root",n,...t))return n.return}else if(p.is("element")&&jl(s,p.name,n,...t))return n.return;if(jl(s,p,n,...t))return n.return;p=p.parent,Qd(n,"bubbling",p)}return Qd(n,"bubbling",this),jl(s,"$document",n,...t),n.return}catch(n){B.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const s=Qt(n.context||"$document"),l=fk(this);for(const c of s){let u=l.get(c);u||(u=new(Oe()),l.set(c,u)),this.listenTo(u,e,t,n)}}_removeEventListener(e,t){const n=fk(this);for(const s of n.values())this.stopListening(s,e,t)}}}{const r=pk(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{pk[e]=r.prototype[e]})}function Qd(r,e,t){r instanceof zl&&(r._eventPhase=e,r._currentTarget=t)}function jl(r,e,t,...n){const s=typeof e=="string"?r.get(e):c0(r,e);return!!s&&(s.fire(t,...n),t.stop.called)}function c0(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function fk(r){return r[hk]||(r[hk]=new Map),r[hk]}class Bp extends pk(Z()){constructor(e){super(),this._postFixers=new Set,this.selection=new uk,this.roots=new Rn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class ka extends Io{constructor(e,t,n,s){super(e,t,n,s),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=IP}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new B("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function IP(){if(mk(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(mk(r)>1)return null;r=r.parent}return!r||mk(r)>1?null:this.childCount}function mk(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}ka.DEFAULT_PRIORITY=10,ka.prototype.is=function(r,e){return e?e===this.name&&(r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"):r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class gk extends Io{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=MP}_insertChild(e,t){if(t&&(t instanceof vr||Array.from(t).length>0))throw new B("view-emptyelement-cannot-add",[this,t]);return 0}}function MP(){return null}gk.prototype.is=function(r,e){return e?e===this.name&&(r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"):r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Np extends Io{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=NP}_insertChild(e,t){if(t&&(t instanceof vr||Array.from(t).length>0))throw new B("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function BP(r){r.document.on("arrowKey",(e,t)=>function(n,s,l){if(s.keyCode==Mt.arrowright){const c=s.domTarget.ownerDocument.defaultView.getSelection(),u=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(u||s.shiftKey){const p=c.focusNode,b=c.focusOffset,_=l.domPositionToView(p,b);if(_===null)return;let A=!1;const x=_.getLastMatchingPosition(D=>(D.item.is("uiElement")&&(A=!0),!(!D.item.is("uiElement")&&!D.item.is("attributeElement"))));if(A){const D=l.viewPositionToDom(x);u?c.collapse(D.parent,D.offset):c.extend(D.parent,D.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function NP(){return null}Np.prototype.is=function(r,e){return e?e===this.name&&(r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"):r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class bk extends Io{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=OP}_insertChild(e,t){if(t&&(t instanceof vr||Array.from(t).length>0))throw new B("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function OP(){return null}bk.prototype.is=function(r,e){return e?e===this.name&&(r==="rawElement"||r==="view:rawElement"||r==="element"||r==="view:element"):r==="rawElement"||r==="view:rawElement"||r===this.name||r==="view:"+this.name||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class _a extends Oe(_r){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const s=function(l,c){return typeof c=="string"?[new Gt(l,c)]:(Ye(c)||(c=[c]),Array.from(c).map(u=>typeof u=="string"?new Gt(l,u):u instanceof ei?new Gt(l,u.data):u))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,this._children.splice(e,0,l),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}_a.prototype.is=function(r){return r==="documentFragment"||r==="view:documentFragment"};class d0{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new _a(this.document,e)}createText(e){return new Gt(this.document,e)}createAttributeElement(e,t,n={}){const s=new ka(this.document,e,t);return typeof n.priority=="number"&&(s._priority=n.priority),n.id&&(s._id=n.id),n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createContainerElement(e,t,n={},s={}){let l=null;to(n)?s=n:l=n;const c=new Yd(this.document,e,t,l);return s.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),c}createEditableElement(e,t,n={}){const s=new Ip(this.document,e,t);return n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createEmptyElement(e,t,n={}){const s=new gk(this.document,e,t);return n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createUIElement(e,t,n){const s=new Np(this.document,e,t);return n&&(s.render=n),s}createRawElement(e,t,n,s={}){const l=new bk(this.document,e,t);return n&&(l.render=n),s.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),l}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){to(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof et?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new B("view-writer-break-non-container-element",this.document);if(!t.parent)throw new B("view-writer-break-root",this.document);if(e.isAtStart)return et._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(et._createAfter(t),n);const s=new _t(e,et._createAt(t,"end")),l=new et(n,0);this.move(s,l)}return et._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,u=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new et(c,u))}const s=n.getChild(t-1),l=n.getChild(t);if(!s||!l)return e;if(s.is("$text")&&l.is("$text"))return h0(s,l);if(s.is("attributeElement")&&l.is("attributeElement")&&s.isSimilar(l)){const c=s.childCount;return s._appendChild(l.getChildren()),l._remove(),this._removeFromClonedElementsGroup(l),this.mergeAttributes(new et(s,c))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new B("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),l=s instanceof Gt?et._createAt(s,"end"):et._createAt(t,"end");return this.move(_t._createIn(n),et._createAt(t,"end")),this.remove(_t._createOn(n)),l}insert(e,t){p0(t=Ye(t)?[...t]:[t],this.document);const n=t.reduce((c,u)=>{const p=c[c.length-1],b=!u.is("uiElement");return p&&p.breakAttributes==b?p.nodes.push(u):c.push({breakAttributes:b,nodes:[u]}),c},[]);let s=null,l=e;for(const{nodes:c,breakAttributes:u}of n){const p=this._insertNodes(l,c,u);s||(s=p.start),l=p.end}return s?new _t(s,l):new _t(e)}remove(e){const t=e instanceof _t?e:_t._createOn(e);if(Zd(t,this.document),t.isCollapsed)return new _a(this.document);const{start:n,end:s}=this._breakAttributesRange(t,!0),l=n.parent,c=s.offset-n.offset,u=l._removeChildren(n.offset,c);for(const b of u)this._removeFromClonedElementsGroup(b);const p=this.mergeAttributes(n);return t.start=p,t.end=p.clone(),new _a(this.document,u)}clear(e,t){Zd(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of n){const l=s.item;let c;if(l.is("element")&&t.isSimilar(l))c=_t._createOn(l);else if(!s.nextPosition.isAfter(e.start)&&l.is("$textProxy")){const u=l.getAncestors().find(p=>p.is("element")&&t.isSimilar(p));u&&(c=_t._createIn(u))}c&&(c.end.isAfter(e.end)&&(c.end=e.end),c.start.isBefore(e.start)&&(c.start=e.start),this.remove(c))}}move(e,t){let n;if(t.isAfter(e.end)){const s=(t=this._breakAttributes(t,!0)).parent,l=s.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=s.childCount-l}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof ka))throw new B("view-writer-wrap-invalid-attribute",this.document);if(Zd(e,this.document),e.isCollapsed){let s=e.start;s.parent.is("element")&&(n=s.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(s=s.getLastMatchingPosition(c=>c.item.is("uiElement"))),s=this._wrapPosition(s,t);const l=this.document.selection;return l.isCollapsed&&l.getFirstPosition().isEqual(e.start)&&this.setSelection(s),new _t(s)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof ka))throw new B("view-writer-unwrap-invalid-attribute",this.document);if(Zd(e,this.document),e.isCollapsed)return e;const{start:n,end:s}=this._breakAttributesRange(e,!0),l=n.parent,c=this._unwrapChildren(l,n.offset,s.offset,t),u=this.mergeAttributes(c.start);u.isEqual(c.start)||c.end.offset--;const p=this.mergeAttributes(c.end);return new _t(u,p)}rename(e,t){const n=new Yd(this.document,e,t.getAttributes());return this.insert(et._createAfter(t),n),this.move(_t._createIn(t),et._createAt(n,0)),this.remove(_t._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return et._createAt(e,t)}createPositionAfter(e){return et._createAfter(e)}createPositionBefore(e){return et._createBefore(e)}createRange(e,t){return new _t(e,t)}createRangeOn(e){return _t._createOn(e)}createRangeIn(e){return _t._createIn(e)}createSelection(...e){return new Ai(...e)}createSlot(e="children"){if(!this._slotFactory)throw new B("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let s,l;if(s=n?kk(e):e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new B("view-writer-invalid-position-container",this.document);l=n?this._breakAttributes(e,!0):e.parent.is("$text")?_k(e):e;const c=s._insertChild(l.offset,t);for(const _ of t)this._addToClonedElementsGroup(_);const u=l.getShiftedBy(c),p=this.mergeAttributes(l);p.isEqual(l)||u.offset--;const b=this.mergeAttributes(u);return new _t(p,b)}_wrapChildren(e,t,n,s){let l=t;const c=[];for(;l<n;){const p=e.getChild(l),b=p.is("$text"),_=p.is("attributeElement");if(_&&this._wrapAttributeElement(s,p))c.push(new et(e,l));else if(b||!_||PP(s,p)){const A=s._clone();p._remove(),A._appendChild(p),e._insertChild(l,A),this._addToClonedElementsGroup(A),c.push(new et(e,l))}else this._wrapChildren(p,0,p.childCount,s);l++}let u=0;for(const p of c)p.offset-=u,p.offset!=t&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return _t._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,s){let l=t;const c=[];for(;l<n;){const p=e.getChild(l);if(p.is("attributeElement"))if(p.isSimilar(s)){const b=p.getChildren(),_=p.childCount;p._remove(),e._insertChild(l,b),this._removeFromClonedElementsGroup(p),c.push(new et(e,l),new et(e,l+_)),l+=_,n+=_-1}else this._unwrapAttributeElement(s,p)?(c.push(new et(e,l),new et(e,l+1)),l++):(this._unwrapChildren(p,0,p.childCount,s),l++);else l++}let u=0;for(const p of c)p.offset-=u,!(p.offset==t||p.offset==n)&&(this.mergeAttributes(p).isEqual(p)||(u++,n--));return _t._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:s}=this._breakAttributesRange(e,!0),l=n.parent,c=this._wrapChildren(l,n.offset,s.offset,t),u=this.mergeAttributes(c.start);u.isEqual(c.start)||c.end.offset--;const p=this.mergeAttributes(c.end);return new _t(u,p)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return u0(e.clone());e.parent.is("$text")&&(e=_k(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const s=new _t(e,e.getShiftedBy(1));this.wrap(s,t);const l=new et(n.parent,n.index);n._remove();const c=l.nodeBefore,u=l.nodeAfter;return c instanceof Gt&&u instanceof Gt?h0(c,u):u0(l)}_wrapAttributeElement(e,t){if(!f0(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!f0(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,s=e.end;if(Zd(e,this.document),e.isCollapsed){const p=this._breakAttributes(e.start,t);return new _t(p,p)}const l=this._breakAttributes(s,t),c=l.parent.childCount,u=this._breakAttributes(n,t);return l.offset+=l.parent.childCount-c,new _t(u,l)}_breakAttributes(e,t=!1){const n=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new B("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new B("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new B("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&vk(s.parent)||vk(s))return e.clone();if(s.is("$text"))return this._breakAttributes(_k(e),t);if(n==s.childCount){const l=new et(s.parent,s.index+1);return this._breakAttributes(l,t)}if(n===0){const l=new et(s.parent,s.index);return this._breakAttributes(l,t)}{const l=s.index+1,c=s._clone();s.parent._insertChild(l,c),this._addToClonedElementsGroup(c);const u=s.childCount-n,p=s._removeChildren(n,u);c._appendChild(p);const b=new et(s.parent,l);return this._breakAttributes(b,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function kk(r){let e=r.parent;for(;!vk(e);){if(!e)return;e=e.parent}return e}function PP(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function u0(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new et(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new et(t,0):r}function _k(r){if(r.offset==r.parent.data.length)return new et(r.parent.parent,r.parent.index+1);if(r.offset===0)return new et(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new Gt(r.root.document,e)),new et(r.parent.parent,r.parent.index+1)}function h0(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new et(r,t)}const LP=[Gt,ka,Yd,gk,bk,Np];function p0(r,e){for(const t of r){if(!LP.some(n=>t instanceof n))throw new B("view-writer-insert-invalid-node-type",e);t.is("$text")||p0(t.getChildren(),e)}}function vk(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function Zd(r,e){const t=kk(r.start),n=kk(r.end);if(!t||!n||t!==n)throw new B("view-writer-invalid-range-container",e)}function f0(r,e){return r.id===null&&e.id===null}const m0=r=>r.createTextNode("\xA0"),g0=r=>{const e=r.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},b0=r=>{const e=r.createElement("br");return e.dataset.ckeFiller="true",e},Ci=7,Jd="\u2060".repeat(Ci);function Mo(r){return typeof r=="string"?r.substr(0,Ci)===Jd:hn(r)&&r.data.substr(0,Ci)===Jd}function Xd(r){return r.data.length==Ci&&Mo(r)}function k0(r){const e=typeof r=="string"?r:r.data;return Mo(r)?e.slice(Ci):e}function RP(r,e){if(e.keyCode==Mt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;Mo(n)&&s<=Ci&&t.collapse(n,0)}}}var _0=h(8264),zP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(_0.A,zP),_0.A.locals;class jP extends Z(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),v.isBlink&&!v.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new B("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!v.isAndroid)return;let e=null;const t=!(v.isBlink&&!v.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=et._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),s=n.parent.ownerDocument;Mo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=v0(s,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),s=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),l=this._diffNodeLists(n,s),c=this._findUpdateActions(l,n,s,$P);if(c.indexOf("update")!==-1){const u={equal:0,insert:0,delete:0};for(const p of c)if(p==="update"){const b=u.equal+u.insert,_=u.equal+u.delete,A=e.getChild(b);!A||A.is("uiElement")||A.is("rawElement")||this._updateElementMappings(A,n[_]),us(s[b]),u.equal++}else u[p]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?et._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&hn(t.parent)&&Mo(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Mo(e))throw new B("view-renderer-filler-was-lost",this);Xd(e)?e.remove():e.data=e.data.substr(Ci),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const u=c.findAncestor(p=>p.hasAttribute("contenteditable"));return!u||u.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const s=e.nodeBefore,l=e.nodeAfter;return!(s instanceof Gt||l instanceof Gt)&&(!v.isAndroid||!s&&!l)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let s=this.domConverter.viewToDom(e).data;const l=t.inlineFillerPosition;l&&l.parent==e.parent&&l.offset==e.index&&(s=Jd+s),w0(n,s)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(l=>l.name),s=e.getAttributeKeys();for(const l of s)this.domConverter.setDomElementAttribute(t,l,e.getAttribute(l),e);for(const l of n)e.hasAttribute(l)||this.domConverter.removeDomElementAttribute(t,l)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(v.isAndroid){let A=null;for(const x of Array.from(n.childNodes)){if(A&&hn(A)&&hn(x)){n.normalize();break}A=x}}const s=t.inlineFillerPosition,l=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&v0(n.ownerDocument,c,s.offset);const u=this._diffNodeLists(l,c),p=this._findUpdateActions(u,l,c,VP);let b=0;const _=new Set;for(const A of p)A==="delete"?(_.add(l[b]),us(l[b])):A!=="equal"&&A!=="update"||b++;b=0;for(const A of p)A==="insert"?(dp(n,b,c[b]),b++):A==="update"?(w0(l[b],c[b].data),b++):A==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[b])),b++);for(const A of _)A.parentNode||this.domConverter.unbindDomElement(A)}_diffNodeLists(e,t){return e=function(n,s){const l=Array.from(n);return l.length==0||!s||l[l.length-1]==s&&l.pop(),l}(e,this._fakeSelectionContainer),R(e,t,FP.bind(null,this.domConverter))}_findUpdateActions(e,t,n,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let l=[],c=[],u=[];const p={equal:0,insert:0,delete:0};for(const b of e)b==="insert"?u.push(n[p.equal+p.insert]):b==="delete"?c.push(t[p.equal+p.delete]):(l=l.concat(R(c,u,s).map(_=>_==="equal"?"update":_)),l.push("equal"),c=[],u=[]),p[b]++;return l.concat(R(c,u,s).map(b=>b==="equal"?"update":b))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(v.isBlink&&!v.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&v.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const u=c.createElement("div");return u.className="ck-fake-selection-container",Object.assign(u.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),u.textContent="\xA0",u}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const s=t.getSelection(),l=t.createRange();s.removeAllRanges(),l.selectNodeContents(n),s.addRange(l)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,s.parent,s.offset),v.isGecko&&function(l,c){const u=l.parent;if(u.nodeType!=Node.ELEMENT_NODE||l.offset!=u.childNodes.length-1)return;const p=u.childNodes[l.offset];p&&p.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,s=this.domConverter.mapDomToView(n);n&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function v0(r,e,t){const n=e instanceof Array?e:e.childNodes,s=n[t];if(hn(s))return s.data=Jd+s.data,s;{const l=r.createTextNode(Jd);return Array.isArray(e)?n.splice(t,0,l):dp(e,t,l),l}}function $P(r,e){return Gi(r)&&Gi(e)&&!hn(r)&&!hn(e)&&!mr(r)&&!mr(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function VP(r,e){return Gi(r)&&Gi(e)&&hn(r)&&hn(e)}function FP(r,e,t){return e===t||(hn(e)&&hn(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}function w0(r,e){const t=r.data;if(t==e)return;const n=S(t,e);for(const s of n)s.type==="insert"?r.insertData(s.index,s.values.join("")):r.deleteData(s.index,s.howMany)}const HP=b0(at.document),UP=m0(at.document),WP=g0(at.document),Op="data-ck-unsafe-attribute-",A0="data-ck-unsafe-element";class Pp{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ti,this._inlineObjectElementMatcher=new ti,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?at.document:at.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Ai(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),s=n.createDocumentFragment(),l=n.body.childNodes;for(;l.length>0;)s.appendChild(l[0]);const c=n.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),u=[];let p;for(;p=c.nextNode();)u.push(p);for(const b of u){for(const A of b.getAttributeNames())this.setDomElementAttribute(b,A,b.getAttribute(A));const _=b.tagName.toLowerCase();this._shouldRenameElement(_)&&(E0(_),b.replaceWith(this._createReplacementDomElement(_,b)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let s;if(n.is("documentFragment"))s=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(s,n);else{if(n.is("uiElement"))return s=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(s,n),s;this._shouldRenameElement(n.name)?(E0(n.name),s=this._createReplacementDomElement(n.name)):s=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(s,this),t.bind&&this.bindElements(s,n);for(const l of n.getAttributeKeys())this.setDomElementAttribute(s,l,n.getAttribute(l),n)}if(t.withChildren!==!1)for(const l of this.viewChildrenToDom(n,t))s.appendChild(l);return s}}setDomElementAttribute(e,t,n,s){const l=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);l||U("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(c){try{at.document.createAttribute(c)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!l?e.removeAttribute(t):e.hasAttribute(Op+t)&&l&&e.removeAttribute(Op+t),e.setAttribute(l?t:Op+t,n)):U("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=A0&&(e.removeAttribute(t),e.removeAttribute(Op+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const l of e.getChildren()){n===s&&(yield this._getBlockFiller());const c=l.is("element")&&!!l.getCustomProperty("dataPipeline:transparentRendering")&&!En(l.getAttributes());c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(l,t):(c&&U("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:l}),yield this.viewToDom(l,t)),s++}n===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(n.parent,n.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let s=e.offset;return Mo(n)&&(s+=Ci),{parent:n,offset:s}}{let n,s,l;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;l=n.childNodes[0]}else{const c=e.nodeBefore;if(s=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!s)return null;n=s.parentNode,l=s.nextSibling}return hn(l)&&Mo(l)?{parent:l,offset:Ci}:{parent:n,offset:s?Sl(s)+1:0}}}domToView(e,t={}){const n=[],s=this._domToView(e,t,n),l=s.next().value;return l?(s.next(),this._processDomInlineNodes(null,n,t),l.is("$text")&&l.data.length==0?null:l):null}*domChildrenToView(e,t={},n=[]){for(let s=0;s<e.childNodes.length;s++){const l=e.childNodes[s],c=this._domToView(l,t,n),u=c.next().value;u!==null&&(this._isBlockViewElement(u)&&this._processDomInlineNodes(e,n,t),yield u,c.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(s){if(!v.isGecko||!s.rangeCount)return!1;const l=s.getRangeAt(0).startContainer;try{Object.prototype.toString.call(l)}catch{return!0}return!1}(e))return new Ai([]);if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;hn(s)&&(s=s.parentNode);const l=this.fakeSelectionToView(s);if(l)return l}const t=this.isDomSelectionBackward(e),n=[];for(let s=0;s<e.rangeCount;s++){const l=e.getRangeAt(s),c=this.domRangeToView(l);c&&n.push(c)}return new Ai(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new _t(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Sl(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return et._createBefore(n);if(hn(e)){if(Xd(e))return this.domPositionToView(e.parentNode,Sl(e));const s=this.findCorrespondingViewText(e);let l=t;return s?(Mo(e)&&(l-=Ci,l=l<0?0:l),new et(s,l)):null}if(t===0){const s=this.mapDomToView(e);if(s)return new et(s,0)}else{const s=e.childNodes[t-1];if(hn(s)&&Xd(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,Sl(s));const l=hn(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(l&&l.parent)return new et(l.parent,l.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Xd(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const s=this.mapDomToView(n);if(s){const l=s.nextSibling;return l instanceof Gt?l:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const l=s.getChild(0);return l instanceof Gt?l:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:s}=at.window,l=[];C0(t,c=>{const{scrollLeft:u,scrollTop:p}=c;l.push([u,p])}),t.focus(),C0(t,c=>{const[u,p]=l.shift();c.scrollLeft=u,c.scrollTop=p}),at.window.scrollTo(n,s)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(HP):!(e.tagName!=="BR"||!y0(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(WP)||function(t,n){return t.isEqualNode(UP)&&y0(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const s=[];let l=n;for(;l&&l.nodeType!=Node.DOCUMENT_NODE;)s.unshift(l),l=l.parentNode;return s}(e);for(t.pop();t.length;){const n=t.pop(),s=this._domToViewMapping.get(n);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return m0(this._domDocument);case"markedNbsp":return g0(this._domDocument);case"br":return b0(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(hn(e)&&Mo(e)&&t<Ci||this.isElement(e)&&Mo(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const s=this.getHostViewElement(e);if(s)return s;if(mr(e)&&t.skipComments)return null;if(hn(e)){if(Xd(e))return null;{const l=e.data;if(l==="")return null;const c=new Gt(this.document,l);return n.push(c),c}}{let l=this.mapDomToView(e);if(l)return this._isInlineObjectElement(l)&&n.push(l),l;if(this.isDocumentFragment(e))l=new _a(this.document),t.bind&&this.bindDocumentFragments(e,l);else{l=this._createViewElement(e,t),t.bind&&this.bindElements(e,l);const u=e.attributes;if(u)for(let p=u.length,b=0;b<p;b++)l._setAttribute(u[b].name,u[b].value);if(this._isViewElementWithRawContent(l,t))return l._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(l)||n.push(l),l;if(mr(e))return l._setCustomProperty("$rawContent",e.data),l}yield l;const c=[];if(t.withChildren!==!1)for(const u of this.domChildrenToView(e,t,c))l._appendChild(u);if(this._isInlineObjectElement(l))n.push(l);else for(const u of c)n.push(u)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let s=!1;for(let l=0;l<t.length;l++){const c=t[l];if(!c.is("$text")){s=!1;continue}let u,p=!1;if(qP(c,this.preElements))u=k0(c.data);else{u=c.data.replace(/[ \n\t\r]{1,}/g," "),p=/[^\S\u00A0]/.test(u.charAt(u.length-1));const b=l>0?t[l-1]:null,_=l+1<t.length?t[l+1]:null,A=!b||b.is("element")&&b.name=="br"||s,x=!_&&!Mo(c.data);n.withChildren!==!1&&(A&&(u=u.replace(/^ /,"")),x&&(u=u.replace(/ $/,""))),u=k0(u),u=u.replace(/ \u00A0/g,"  ");const D=_&&_.is("element")&&_.name!="br",I=_&&_.is("$text")&&_.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(u)||!_||D||I)&&(u=u.replace(/\u00A0$/," ")),(A||b&&b.is("element")&&b.name!="br")&&(u=u.replace(/^\u00A0/," "))}u.length==0&&c.parent?(c._remove(),t.splice(l,1),l--):(c._data=u,s=p)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),s=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!s||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new ba({startPosition:t?et._createAfter(e):et._createBefore(e),direction:t?"forward":"backward"});for(const s of n){if(s.item.is("element","br"))return null;if(this._isInlineObjectElement(s.item))return s.item;if(s.item.is("containerElement"))return null;if(s.item.is("$textProxy"))return s.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(mr(e))return new Np(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Io(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(A0,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const s of t.getAttributeNames())n.setAttribute(s,t.getAttribute(s))}return n}}function qP(r,e){return r.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function C0(r,e){let t=r;for(;t;)e(t),t=t.parentElement}function y0(r,e){const t=r.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function E0(r){r==="script"&&U("domconverter-unsafe-script-element-detected"),r==="style"&&U("domconverter-unsafe-style-element-detected")}class Yi extends no(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const x0=Zb(function(r,e){Ui(e,cs(e),r)});class $l{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,x0(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class gs extends Yi{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,s)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(s.target)&&this.onDomEvent(s)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new $l(this.view,t,n))}}class GP extends gs{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return hs(this)}};this.fire(e.type,e,t)}}const wk=function(){return dt.Date.now()};var KP=/\s/;const YP=function(r){for(var e=r.length;e--&&KP.test(r.charAt(e)););return e};var QP=/^\s+/;const ZP=function(r){return r&&r.slice(0,YP(r)+1).replace(QP,"")};var JP=/^[-+]0x[0-9a-f]+$/i,XP=/^0b[01]+$/i,e4=/^0o[0-7]+$/i,t4=parseInt;const T0=function(r){if(typeof r=="number")return r;if(fa(r))return NaN;if(Ce(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Ce(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=ZP(r);var t=XP.test(r);return t||e4.test(r)?t4(r.slice(2),t?2:8):JP.test(r)?NaN:+r};var n4=Math.max,o4=Math.min;const Vl=function(r,e,t){var n,s,l,c,u,p,b=0,_=!1,A=!1,x=!0;if(typeof r!="function")throw new TypeError("Expected a function");function D(se){var ge=n,xe=s;return n=s=void 0,b=se,c=r.apply(xe,ge)}function I(se){var ge=se-p;return p===void 0||ge>=e||ge<0||A&&se-b>=l}function P(){var se=wk();if(I(se))return W(se);u=setTimeout(P,function(ge){var xe=e-(ge-p);return A?o4(xe,l-(ge-b)):xe}(se))}function W(se){return u=void 0,x&&n?D(se):(n=s=void 0,c)}function Q(){var se=wk(),ge=I(se);if(n=arguments,s=this,p=se,ge){if(u===void 0)return function(xe){return b=xe,u=setTimeout(P,e),_?D(xe):c}(p);if(A)return clearTimeout(u),u=setTimeout(P,e),D(p)}return u===void 0&&(u=setTimeout(P,e)),c}return e=T0(e)||0,Ce(t)&&(_=!!t.leading,l=(A="maxWait"in t)?n4(T0(t.maxWait)||0,e):l,x="trailing"in t?!!t.trailing:x),Q.cancel=function(){u!==void 0&&clearTimeout(u),b=0,n=p=s=u=void 0},Q.flush=function(){return u===void 0?c:W(wk())},Q};class i4 extends Yi{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Vl(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Ai(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Mt.arrowleft&&e!=Mt.arrowup||n.setTo(n.getFirstPosition()),e!=Mt.arrowright&&e!=Mt.arrowdown||n.setTo(n.getLastPosition());const s={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}const r4=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},s4=function(r){return this.__data__.has(r)};function Lp(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new is;++e<t;)this.add(r[e])}Lp.prototype.add=Lp.prototype.push=r4,Lp.prototype.has=s4;const a4=Lp,l4=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},c4=function(r,e){return r.has(e)},D0=function(r,e,t,n,s,l){var c=1&t,u=r.length,p=e.length;if(u!=p&&!(c&&p>u))return!1;var b=l.get(r),_=l.get(e);if(b&&_)return b==e&&_==r;var A=-1,x=!0,D=2&t?new a4:void 0;for(l.set(r,e),l.set(e,r);++A<u;){var I=r[A],P=e[A];if(n)var W=c?n(P,I,A,e,r,l):n(I,P,A,r,e,l);if(W!==void 0){if(W)continue;x=!1;break}if(D){if(!l4(e,function(Q,se){if(!c4(D,se)&&(I===Q||s(I,Q,t,n,l)))return D.push(se)})){x=!1;break}}else if(I!==P&&!s(I,P,t,n,l)){x=!1;break}}return l.delete(r),l.delete(e),x},d4=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,s){t[++e]=[s,n]}),t},u4=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var S0=mt?mt.prototype:void 0,Ak=S0?S0.valueOf:void 0;const h4=function(r,e,t,n,s,l,c){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!l(new yl(r),new yl(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return $i(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var u=d4;case"[object Set]":var p=1&n;if(u||(u=u4),r.size!=e.size&&!p)return!1;var b=c.get(r);if(b)return b==e;n|=2,c.set(r,e);var _=D0(u(r),u(e),n,s,l,c);return c.delete(r),_;case"[object Symbol]":if(Ak)return Ak.call(r)==Ak.call(e)}return!1};var p4=Object.prototype.hasOwnProperty;const f4=function(r,e,t,n,s,l){var c=1&t,u=fd(r),p=u.length;if(p!=fd(e).length&&!c)return!1;for(var b=p;b--;){var _=u[b];if(!(c?_ in e:p4.call(e,_)))return!1}var A=l.get(r),x=l.get(e);if(A&&x)return A==e&&x==r;var D=!0;l.set(r,e),l.set(e,r);for(var I=c;++b<p;){var P=r[_=u[b]],W=e[_];if(n)var Q=c?n(W,P,_,e,r,l):n(P,W,_,r,e,l);if(!(Q===void 0?P===W||s(P,W,t,n,l):Q)){D=!1;break}I||(I=_=="constructor")}if(D&&!I){var se=r.constructor,ge=e.constructor;se==ge||!("constructor"in r)||!("constructor"in e)||typeof se=="function"&&se instanceof se&&typeof ge=="function"&&ge instanceof ge||(D=!1)}return l.delete(r),l.delete(e),D};var I0="[object Arguments]",M0="[object Array]",Rp="[object Object]",B0=Object.prototype.hasOwnProperty;const m4=function(r,e,t,n,s,l){var c=sn(r),u=sn(e),p=c?M0:da(r),b=u?M0:da(e),_=(p=p==I0?Rp:p)==Rp,A=(b=b==I0?Rp:b)==Rp,x=p==b;if(x&&as(r)){if(!as(e))return!1;c=!0,_=!1}if(x&&!_)return l||(l=new ss),c||dd(r)?D0(r,e,t,n,s,l):h4(r,e,p,t,n,s,l);if(!(1&t)){var D=_&&B0.call(r,"__wrapped__"),I=A&&B0.call(e,"__wrapped__");if(D||I){var P=D?r.value():r,W=I?e.value():e;return l||(l=new ss),s(P,W,t,n,l)}}return!!x&&(l||(l=new ss),f4(r,e,t,n,s,l))},zp=function r(e,t,n,s,l){return e===t||(e==null||t==null||!un(e)&&!un(t)?e!=e&&t!=t:m4(e,t,n,s,r,l))},g4=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?zp(r,e,void 0,t):!!n};class N0 extends Yi{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,s=new Set;for(const c of e){const u=t.mapDomToView(c.target);u&&(u.is("uiElement")||u.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||s.add(u))}for(const c of e){const u=t.mapDomToView(c.target);if((!u||!u.is("uiElement")&&!u.is("rawElement"))&&c.type==="characterData"){const p=t.findCorrespondingViewText(c.target);p&&!s.has(p.parent)?n.add(p):!p&&Mo(c.target)&&s.add(t.mapDomToView(c.target.parentNode))}}let l=!1;for(const c of n)l=!0,this.renderer.markToSync("text",c);for(const c of s){const u=t.mapViewToDom(c),p=Array.from(c.getChildren()),b=Array.from(t.domChildrenToView(u,{withChildren:!1}));g4(p,b,b4)||(l=!0,this.renderer.markToSync("children",c))}l&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function b4(r,e){if(!Array.isArray(r))return r===e||!(!r.is("$text")||!e.is("$text"))&&r.data===e.data}class jp extends gs{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,s)=>{const l=t.selection.editableElement;l!==null&&l!==s.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class k4 extends Yi{constructor(e){super(e),this.mutationObserver=e.getObserver(N0),this.focusObserver=e.getObserver(jp),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Vl(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Vl(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(s,l)=>{this.document.isComposing&&!v.isAndroid||(this._handleSelectionChange(l,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(n);if(s.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(s)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(s))this.view.forceRender();else{const l={oldSelection:this.selection,newSelection:s,domSelection:n};this.document.fire("selectionChange",l),this._fireSelectionChangeDoneDebounced(l)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class _4 extends gs{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class O0{constructor(e,t={}){this._files=t.cacheFiles?P0(e):null,this._native=e}get files(){return this._files||(this._files=P0(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function P0(r){const e=Array.from(r.files||[]),t=Array.from(r.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class v4 extends gs{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,s=n.document;let l=null,c=null,u=[];if(e.dataTransfer&&(l=new O0(e.dataTransfer)),e.data!==null?c=e.data:l&&(c=l.getData("text/plain")),s.selection.isFake)u=Array.from(s.selection.getRanges());else if(t.length)u=t.map(p=>{const b=n.domConverter.domPositionToView(p.startContainer,p.startOffset),_=n.domConverter.domPositionToView(p.endContainer,p.endOffset);return b?n.createRange(b,_):_?n.createRange(_):void 0}).filter(p=>!!p);else if(v.isAndroid){const p=e.target.ownerDocument.defaultView.getSelection();u=Array.from(n.domConverter.domSelectionToView(p).getRanges())}if(v.isAndroid&&e.inputType=="insertCompositionText"&&c&&c.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(u[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function r1(r,e,t){return(n,s)=>{const l=new Dt(r);if(l.width<CR||l.height<AR)return null;let c;c=e.position==="inside"?l.bottom-s.height:l.bottom-s.height/2,c-=e.verticalOffset;const u=t(l,s),p=n.clone().moveTo(u,c).getIntersection(s.clone().moveTo(u,c)).getVisible();return!p||p.getArea()<s.getArea()?null:{top:c,left:u,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function s1(r){const e=r.config.get("ui.poweredBy"),t=e&&e.position||"border";return wR({position:t,label:yR,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:r.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var a1=h(1801),TR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(a1.A,TR),a1.A.locals;const l1="polite";class DR{constructor(e){this.editor=e}announce(e,t,n=l1){const s=this.editor;this.view||(this.view=new SR(s.locale),s.ui.view.body.add(this.view));let l=this.view.regionViews.find(c=>c.regionName===e);l||(l=new IR(this.view.locale),this.view.regionViews.add(l)),l.set({regionName:e,text:t,politeness:n})}}class SR extends ht{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class IR extends ht{constructor(e){super(e);const t=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",l1),this.setTemplate({tag:"div",attributes:{role:"region","data-region":t.to("regionName"),"aria-live":t.to("politeness")},children:[{text:t.to("text")}]})}}var MR=Object.defineProperty,c1=Object.getOwnPropertySymbols,BR=Object.prototype.hasOwnProperty,NR=Object.prototype.propertyIsEnumerable,d1=(r,e,t)=>e in r?MR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;class OR extends Z(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new eR(e),this.focusTracker=new Sn,this.tooltipManager=new tf(e),this.poweredBy=new ER(e),this.ariaLiveAnnouncer=new DR(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,s;e.keystrokes.set("Alt+F10",(l,c)=>{const u=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(u)&&!Array.from(t.domRoots.values()).includes(u)&&(n=u);const p=this._getCurrentFocusedToolbarDefinition();p&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let b=0;b<s.length;b++){const _=s.shift();if(s.push(_),_!==p&&this._focusFocusableCandidateToolbar(_)){p&&p.options.afterBlur&&p.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(l,c)=>{const u=this._getCurrentFocusedToolbarDefinition();u&&(n?(n.focus(),n=null):e.editing.view.focus(),u.options.afterBlur&&u.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:s}=t;(gr(n.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,n)=>u1(t)-u1(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!gr(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((s,l)=>{for(var c in l||(l={}))BR.call(l,c)&&d1(s,c,l[c]);if(c1)for(var c of c1(l))NR.call(l,c)&&d1(s,c,l[c]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function u1(r){const{toolbarView:e,options:t}=r;let n=10;return gr(e.element)&&n--,t.isContextual&&n--,n}var h1=h(1185),PR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(h1.A,PR),h1.A.locals;class LR extends ht{constructor(e){super(e),this.body=new w3(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class RR extends LR{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new qp;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class zR extends ht{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(s=>{const l=e.document.getRoot(n.name);s.addClass(n.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(n.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function n(s){e.once("change:isRenderingInProgress",(l,c,u)=>{u?n(s):t(s)})}(this):t(this)}}class jR extends zR{constructor(e,t,n,s={}){super(e,t,n);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class Qk extends Nl{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class p1 extends Z(){constructor(e,t){super(),t&&x0(this,t),e&&this.set(e)}}var f1=h(991),$R={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(f1.A,$R),f1.A.locals;var m1=h(5380),VR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(m1.A,VR),m1.A.locals;const of=ds("px");class rf extends Ve{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new B("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new B("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new B("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new bo(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new FR(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,s)=>!s&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new HR(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class FR extends ht{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Sn,this.buttonPrevView=this._createButtonView(t("Previous"),wt.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),wt.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Rt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class HR extends ht{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:n.to("top",of),left:n.to("left",of),width:n.to("width",of),height:n.to("height",of)}},children:this.content}),this.on("change:numberOfPanels",(s,l,c,u)=>{c>u?this._addPanels(c-u):this._removePanels(u-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ht;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:s}=new Dt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:s})}}}var g1=h(8298),UR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(g1.A,UR),g1.A.locals;const Gl=ds("px");class WR extends ht{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ti({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Gl(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Ti({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Gl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&Gl(n)),bottom:t.to("_stickyBottomOffset",n=>n&&Gl(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(at.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Dt(this.limiterElement);let t=e.getVisible();if(t){const n=new Dt(at.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const s=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-s>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(s):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Gl(-at.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Gl(-at.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Dt(this.contentPanelElement)}}class qR extends Yp{constructor(e,t){const n=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Jp},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new Er,this.iconView.content=wt.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Rt(e),this.resetButtonView.set({label:n("Clear"),icon:wt.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",l=>!l),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class GR extends ht{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class KR extends ht{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Sn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new ii({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var b1=/[\\^$.*+?()[\]{}|]/g,YR=RegExp(b1.source);const k1=function(r){return(r=Bn(r))&&YR.test(r)?r.replace(b1,"\\$&"):r};var _1=h(8107),QR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(_1.A,QR),_1.A.locals;var ZR=Object.defineProperty,v1=Object.getOwnPropertySymbols,JR=Object.prototype.hasOwnProperty,XR=Object.prototype.propertyIsEnumerable,w1=(r,e,t)=>e in r?ZR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;class ez extends ht{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Sn,this.keystrokes=new ln,this.resultsView=new KR(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new GR,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new ii({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:s,totalItemsCount:l})=>{this.resultsCount=s,this.totalItemsCount=l}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(k1(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((s,l)=>{for(var c in l||(l={}))JR.call(l,c)&&w1(s,c,l[c]);if(v1)for(var c of v1(l))XR.call(l,c)&&w1(s,c,l[c]);return s})({query:e},n))}_createSearchTextQueryView(){const e=new qR(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(s,{query:l,resultsCount:c,totalItemsCount:u}){return typeof s=="function"?s(l,c,u):s}this.on("search",(s,l)=>{if(l.resultsCount)t.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let u,p;l.totalItemsCount?c&&c.notFound?(u=c.notFound.primary,p=c.notFound.secondary):(u=e("No results found"),p=""):c&&c.noSearchableItems?(u=c.noSearchableItems.primary,p=c.noSearchableItems.secondary):(u=e("No searchable items"),p=""),t.set({primaryText:n(u,l),secondaryText:n(p,l),isVisible:!0})}})}}var A1=h(5727),tz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(A1.A,tz),A1.A.locals;const Zk=class extends ez{constructor(r,e){super(r,e),this._config=e;const t=ds("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",s=>!s),n.to("_position",s=>`ck-search__results_${s}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(s,l,c)=>{this._updateResultsVisibility(),c?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(s,l)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,l())}),this.listenTo(at.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(s,{value:l})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=l,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Dt(this.queryView.fieldView.element).width;const r=Zk._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Zk.defaultResultsPositions});this.resultsView._position=r?r.name:"s"}_updateResultsVisibility(){const r=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=r}};let C1=Zk;C1.defaultResultsPositions=[r=>({top:r.bottom,left:r.left,name:"s"}),(r,e)=>({top:r.top-e.height,left:r.left,name:"n"})],C1._getOptimalPosition=Il;var y1=h(9529),nz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(y1.A,nz),y1.A.locals;var E1=h(109),oz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(E1.A,oz),E1.A.locals;var x1=h(2710),iz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(x1.A,iz),x1.A.locals;var T1=h(3344),rz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(T1.A,rz),T1.A.locals;class sz extends Rt{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Er;return e.content=Kp,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var D1=h(9481),az={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(D1.A,az),D1.A.locals;class Jk extends ql{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var lz=Object.defineProperty,S1=Object.getOwnPropertySymbols,cz=Object.prototype.hasOwnProperty,dz=Object.prototype.propertyIsEnumerable,I1=(r,e,t)=>e in r?lz(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,M1=(r,e)=>{for(var t in e||(e={}))cz.call(e,t)&&I1(r,t,e[t]);if(S1)for(var t of S1(e))dz.call(e,t)&&I1(r,t,e[t]);return r};const uu={toggleMenusAndFocusItemsOnHover(r){r.on("menu:mouseenter",e=>{if(r.isOpen){for(const t of r.menus){const n=e.path[0],s=n instanceof Jk&&n.children.first===t;t.isOpen=(e.path.includes(t)||s)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(r){const e=r.locale.uiLanguageDirection==="rtl";function t(n,s){const l=r.children.getIndex(n),c=n.isOpen,u=r.children.length,p=r.children.get((l+u+s)%u);n.isOpen=!1,c&&(p.isOpen=!0),p.buttonView.focus()}r.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),r.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(r){r.on("change:isOpen",()=>{r.isOpen||r.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(r){r.on("menu:change:isOpen",(e,t,n)=>{n&&r.menus.filter(s=>e.source.parentMenuView===s.parentMenuView&&e.source!==s&&s.isOpen).forEach(s=>{s.isOpen=!1})})},closeOnClickOutside(r){g({emitter:r,activator:()=>r.isOpen,callback:()=>r.close(),contextElements:()=>r.children.map(e=>e.element)})}},ya={openAndFocusPanelOnArrowDownKey(r){r.keystrokes.set("arrowdown",(e,t)=>{r.focusTracker.focusedElement===r.buttonView.element&&(r.isOpen||(r.isOpen=!0),r.panelView.focus(),t())})},openOnArrowRightKey(r){const e=r.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";r.keystrokes.set(e,(t,n)=>{r.focusTracker.focusedElement===r.buttonView.element&&r.isEnabled&&(r.isOpen||(r.isOpen=!0),r.panelView.focus(),n())})},openOnButtonClick(r){r.buttonView.on("execute",()=>{r.isOpen=!0,r.panelView.focus()})},toggleOnButtonClick(r){r.buttonView.on("execute",()=>{r.isOpen=!r.isOpen,r.isOpen&&r.panelView.focus()})},closeOnArrowLeftKey(r){const e=r.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";r.keystrokes.set(e,(t,n)=>{r.isOpen&&(r.isOpen=!1,r.focus(),n())})},closeOnEscKey(r){r.keystrokes.set("esc",(e,t)=>{r.isOpen&&(r.isOpen=!1,r.focus(),t())})},closeOnParentClose(r){r.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==r.parentMenuView||(r.isOpen=!1)})}},uz={southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),eastSouth:r=>({top:r.top,left:r.right-5,name:"es"}),eastNorth:(r,e)=>({top:r.top-e.height,left:r.right-5,name:"en"}),westSouth:(r,e)=>({top:r.top,left:r.left-e.width+5,name:"ws"}),westNorth:(r,e)=>({top:r.top-e.height,left:r.left-e.width+5,name:"wn"})},hz=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function pz({normalizedConfig:r,locale:e,componentFactory:t}){const n=yi(r);return function(s,l){const c=l.removeItems,u=[];l.items=l.items.filter(({menuId:p})=>!c.includes(p)||(u.push(p),!1)),Kl(l.items,p=>{p.groups=p.groups.filter(({groupId:b})=>!c.includes(b)||(u.push(b),!1));for(const b of p.groups)b.items=b.items.filter(_=>{const A=O1(_);return!c.includes(A)||(u.push(A),!1)})});for(const p of c)u.includes(p)||U("menu-bar-item-could-not-be-removed",{menuBarConfig:s,itemName:p})}(r,n),function(s,l){const c=l.addItems,u=[];for(const p of c){const b=gz(p.position),_=bz(p.position);if(fz(p))if(_){const A=l.items.findIndex(x=>x.menuId===_);A!=-1?b==="before"?(l.items.splice(A,0,p.menu),u.push(p)):b==="after"&&(l.items.splice(A+1,0,p.menu),u.push(p)):B1(l,p.menu,_,b)&&u.push(p)}else b==="start"?(l.items.unshift(p.menu),u.push(p)):b==="end"&&(l.items.push(p.menu),u.push(p));else mz(p)?Kl(l.items,A=>{if(A.menuId===_)b==="start"?(A.groups.unshift(p.group),u.push(p)):b==="end"&&(A.groups.push(p.group),u.push(p));else{const x=A.groups.findIndex(D=>D.groupId===_);x!==-1&&(b==="before"?(A.groups.splice(x,0,p.group),u.push(p)):b==="after"&&(A.groups.splice(x+1,0,p.group),u.push(p)))}}):B1(l,p.item,_,b)&&u.push(p)}for(const p of c)u.includes(p)||U("menu-bar-item-could-not-be-added",{menuBarConfig:s,addedItemConfig:p})}(r,n),function(s,l,c){Kl(l.items,u=>{for(const p of u.groups)p.items=p.items.filter(b=>{const _=typeof b=="string"&&!c.has(b);return _&&!l.isUsingDefaultConfig&&U("menu-bar-item-unavailable",{menuBarConfig:s,parentMenuConfig:yi(u),componentName:b}),!_})})}(r,n,t),N1(r,n),function(s,l){const c=l.t,u={File:c({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:c({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:c({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:c({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:c({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:c({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:c({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:c({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:c({string:"Font",id:"MENU_BAR_MENU_FONT"})};Kl(s.items,p=>{p.label in u&&(p.label=u[p.label])})}(n,e),n}function B1(r,e,t,n){let s=!1;return Kl(r.items,l=>{for(const{groupId:c,items:u}of l.groups){if(s)return;if(c===t)n==="start"?(u.unshift(e),s=!0):n==="end"&&(u.push(e),s=!0);else{const p=u.findIndex(b=>O1(b)===t);p!==-1&&(n==="before"?(u.splice(p,0,e),s=!0):n==="after"&&(u.splice(p+1,0,e),s=!0))}}}),s}function N1(r,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(s=>!!s.groups.length||(Xk(r,s,t),!1)),e.items.length?(Kl(e.items,s=>{s.groups=s.groups.filter(l=>!!l.items.length||(n=!0,!1));for(const l of s.groups)l.items=l.items.filter(c=>!(P1(c)&&!c.groups.length)||(Xk(r,c,t),n=!0,!1))}),n&&N1(r,e)):Xk(r,r,t)}function Xk(r,e,t){t||U("menu-bar-menu-empty",{menuBarConfig:r,emptyMenuConfig:e})}function Kl(r,e){if(Array.isArray(r))for(const n of r)t(n);function t(n){e(n);for(const s of n.groups)for(const l of s.items)P1(l)&&t(l)}}function fz(r){return typeof r=="object"&&"menu"in r}function mz(r){return typeof r=="object"&&"group"in r}function gz(r){return r.startsWith("start")?"start":r.startsWith("end")?"end":r.startsWith("after")?"after":"before"}function bz(r){const e=r.match(/^[^:]+:(.+)/);return e?e[1]:null}function O1(r){return typeof r=="string"?r:r.menuId}function P1(r){return typeof r=="object"&&"menuId"in r}var L1=h(9108),kz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(L1.A,kz),L1.A.locals;class _z extends ht{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var R1=h(4),vz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(R1.A,vz),R1.A.locals;const z1=class extends ht{constructor(r){super(r);const e=this.bindTemplate;this.buttonView=new sz(r),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new _z(r),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new ln,this.focusTracker=new Sn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),ya.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(ya.openOnButtonClick(this),ya.openOnArrowRightKey(this),ya.closeOnArrowLeftKey(this),ya.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),ya.openAndFocusPanelOnArrowDownKey(this),ya.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(r,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(r,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(r,e,t)=>{if(!t)return;const n=z1._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:r,southWest:e,northEast:t,northWest:n,westSouth:s,eastSouth:l,westNorth:c,eastNorth:u}=uz;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[l,u,s,c]:[r,e,t,n]:this.parentMenuView?[s,c,l,u]:[e,r,n,t]}};let Yl=z1;Yl._getOptimalPosition=Il;class e_ extends Uk{constructor(e){super(e),this.role="menu"}}var j1=h(977),wz={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(j1.A,wz),j1.A.locals;class Po extends Rt{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class $1 extends by{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var V1=h(497),Az={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(V1.A,Az),V1.A.locals;const F1=["mouseenter","arrowleft","arrowright","change:isOpen"];class Cz extends ht{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=pz({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(s=>this._createMenu({componentFactory:t,menuDefinition:s}));this.children.addMany(n)}render(){super.render(),uu.toggleMenusAndFocusItemsOnHover(this),uu.closeMenusWhenTheBarCloses(this),uu.closeMenuWhenAnotherOnTheSameLevelOpens(this),uu.focusCycleMenusOnArrows(this),uu.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...F1).to(t),e.parentMenuView=t):e.delegate(...F1).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const s=this.locale,l=new Yl(s);return this.registerMenu(l,n),l.buttonView.set({label:t.label}),l.once("change:isOpen",()=>{const c=new e_(s);c.ariaLabel=t.label,l.panelView.children.add(c),c.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:l,componentFactory:e}))}),l}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const s=this.locale,l=[];for(const c of e.groups){for(const u of c.items){const p=new Jk(s,t);if(Ce(u))p.children.add(this._createMenu({componentFactory:n,menuDefinition:u,parentMenuView:t}));else{const b=this._createMenuItemContentFromFactory({componentName:u,componentFactory:n,parentMenuView:t});if(!b)continue;p.children.add(b)}l.push(p)}c!==e.groups[e.groups.length-1]&&l.push(new Hk(s))}return l}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const s=n.create(e);return s instanceof Yl||s instanceof Po||s instanceof $1?(this._registerMenuTree(s,t),s.on("execute",()=>{this.close()}),s):(U("menu-bar-component-unsupported",{componentName:e,componentView:s}),null)}_registerMenuTree(e,t){if(!(e instanceof Yl))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(l=>l instanceof e_)[0];if(!n)return void e.delegate("mouseenter").to(t);const s=n.items.filter(l=>l instanceof ql);for(const l of s)this._registerMenuTree(l.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,s)=>{clearTimeout(e),s?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(l=>l.isOpen)},0)})}}class yz extends OR{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Dy(e.config.get("toolbar")),this._menuBarConfig=function(n){let s;return s="items"in n&&n.items?M1({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):M1({items:yi(hz),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),s}(e.config.get("menuBar")||{}),this._elementReplacer=new ze,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,s=t.editing.view,l=n.editable,c=s.document.getRoot();l.name=c.rootName,n.render();const u=l.element;this.setEditableElement(l.name,u),n.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(u),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initMenuBar(){const e=this.view;e.menuBarView&&(this._setupMenuBarBehaviors(e.menuBarView.element),e.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),s=e.sourceElement;let l;const c=e.config.get("placeholder");c&&(l=typeof c=="string"?c:c[this.view.editable.name]),!l&&s&&s.tagName.toLowerCase()==="textarea"&&(l=s.getAttribute("placeholder")),l&&(n.placeholder=l),Pl({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const s=this.view.stickyPanel;if(s.isSticky){const l=new Dt(s.element).height;t.viewportOffset.top+=l}else{const l=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(s,"change:isSticky",l),setTimeout(()=>{this.stopListening(s,"change:isSticky",l)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(s,l)=>{if(!e.isSticky||n.wasMoved)return;const c=new Dt(e.contentPanelElement);l[1]<c.bottom+ef.defaultOffset&&(l[1]=c.bottom+ef.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(e){const t=this.editor;this.focusTracker.add(e),t.keystrokes.listenTo(e),t.keystrokes.set("Esc",(n,s)=>{e.contains(this.focusTracker.focusedElement)&&(t.editing.view.focus(),s())}),t.keystrokes.set("Alt+F9",(n,s)=>{e.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),s())})}}var H1=h(7388),Ez={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ze()(H1.A,Ez),H1.A.locals;class xz extends RR{constructor(e,t,n={}){super(e),this.stickyPanel=new WR(e),this.toolbar=new Fk(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new Cz(e)),this.editable=new jR(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class U1{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const s of n)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function t_(r,e=new Set){const t=[r],n=new Set;let s=0;for(;t.length>s;){const l=t[s++];if(!n.has(l)&&Tz(l)&&!e.has(l))if(n.add(l),Symbol.iterator in l)try{for(const c of l)t.push(c)}catch{}else for(const c in l)c!=="defaultValue"&&t.push(l[c])}return n}function Tz(r){const e=Object.prototype.toString.call(r),t=typeof r;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||r==null||r._watchdogExcluded||r instanceof EventTarget||r instanceof Event)}function W1(r,e,t=new Set){if(r===e&&typeof(n=r)=="object"&&n!==null)return!0;var n;const s=t_(r,t),l=t_(e,t);for(const c of s)if(l.has(c))return!0;return!1}var Dz=Object.defineProperty,Sz=Object.defineProperties,Iz=Object.getOwnPropertyDescriptors,sf=Object.getOwnPropertySymbols,q1=Object.prototype.hasOwnProperty,G1=Object.prototype.propertyIsEnumerable,K1=(r,e,t)=>e in r?Dz(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n_=(r,e)=>{for(var t in e||(e={}))q1.call(e,t)&&K1(r,t,e[t]);if(sf)for(var t of sf(e))G1.call(e,t)&&K1(r,t,e[t]);return r};class Y1 extends U1{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=nf(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,s)=>e.create(n,s)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},s={};for(const[p,b]of Object.entries(this._data.roots))b.isLoaded?(e[p]="",s[p]=n[p]||{}):t.push(p);const l=(c=n_({},this._config),u={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:s,_watchdogInitialData:this._data},Sz(c,Iz(u)));var c,u;return delete l.initialData,l.extraPlugins.push(Mz),this._initUsingData?this.create(e,l,l.context):qi(this._elementOrData)?this.create(this._elementOrData,l,l.context):this.create(this._editables,l,l.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(u=>u.isAttached()&&u.rootName!="$graveyard"),{plugins:n}=e,s=n.has("CommentsRepository")&&n.get("CommentsRepository"),l=n.has("TrackChanges")&&n.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(u=>{c.roots[u.rootName]={content:JSON.stringify(Array.from(u.getChildren())),attributes:JSON.stringify(Array.from(u.getAttributes())),isLoaded:u._isLoaded}});for(const u of e.model.markers)u._affectsData&&(c.markers[u.name]={rangeJSON:u.getRange().toJSON(),usingOperation:u._managedUsingOperations,affectsData:u._affectsData});return s&&(c.commentThreads=JSON.stringify(s.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),l&&(c.suggestions=JSON.stringify(l.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return W1(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return xl(e,(t,n)=>qi(t)||n==="context"?t:void 0)}}class Mz{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const s of t.children)n._appendChild(this._createNode(e,s));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:s,attributes:l}])=>{const c=JSON.parse(s),u=JSON.parse(l),p=t.model.document.getRoot(n);for(const[b,_]of u)e.setAttribute(b,_,p);for(const b of c){const _=this._createNode(e,b);e.insert(_,p,"end")}}),Object.entries(this._data.markers).forEach(([n,s])=>{const{document:l}=t.model,c=s,{rangeJSON:{start:u,end:p}}=c,b=((I,P)=>{var W={};for(var Q in I)q1.call(I,Q)&&P.indexOf(Q)<0&&(W[Q]=I[Q]);if(I!=null&&sf)for(var Q of sf(I))P.indexOf(Q)<0&&G1.call(I,Q)&&(W[Q]=I[Q]);return W})(c,["rangeJSON"]),_=l.getRoot(u.root),A=e.createPositionFromPath(_,u.path,u.stickiness),x=e.createPositionFromPath(_,p.path,p.stickiness),D=e.createRange(A,x);e.addMarker(n,n_({range:D},b))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const s=this.editor.config.get("collaboration.channelId"),l=this.editor.plugins.get("CommentsRepository");l.hasCommentThread(n.threadId)&&l.getCommentThread(n.threadId).remove(),l.addCommentThread(n_({channelId:s},n))}),t.forEach(n=>{const s=this.editor.plugins.get("TrackChangesEditing");s.hasSuggestion(n.id)?s.getSuggestion(n.id).attributes=n.attributes:s.addSuggestionData(n)})}}const hu=Symbol("MainQueueId");class Bz{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===hu;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(hu),this._queues.get(e)])).then(t),l=s.catch(()=>{});return this._queues.set(e,l),s.finally(()=>{this._activeActions--,this._queues.get(e)===l&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function Q1(r){return Array.isArray(r)?r:[r]}class af extends Lk(d3){constructor(e,t={}){if(!lf(e)&&t.initialData!==void 0)throw new B("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return lf(c)?(u=c,u instanceof HTMLTextAreaElement?u.value:u.innerHTML):c;var u}(e)),lf(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=this.config.get("menuBar"),l=new xz(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:s.isVisible});this.ui=new yz(this,l),function(c){if(!_i(c.updateSourceElement))throw new B("attachtoform-missing-elementapi-interface",c);const u=c.sourceElement;if(function(p){return!!p&&p.tagName.toLowerCase()==="textarea"}(u)&&u.form){let p;const b=u.form,_=()=>c.updateSourceElement();_i(b.submit)&&(p=b.submit,b.submit=()=>{_(),p.apply(b)}),b.addEventListener("submit",_),c.on("destroy",()=>{b.removeEventListener("submit",_),p&&(b.submit=p)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const s=new this(e,t);n(s.initPlugins().then(()=>s.ui.init(lf(e)?e:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function lf(r){return qi(r)}af.Context=Bl,af.EditorWatchdog=Y1,af.ContextWatchdog=class extends U1{constructor(r,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Bz,this._watchdogConfig=e,this._creator=t=>r.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(r){this._creator=r}setDestructor(r){this._destructor=r}get context(){return this._context}create(r={}){return this._actionQueues.enqueue(hu,()=>(this._contextConfig=r,this._create()))}getItem(r){return this._getWatchdog(r)._item}getItemState(r){return this._getWatchdog(r).state}add(r){const e=Q1(r);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new Y1(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(s,{error:l,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:l}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(u=>{const p=()=>{n.off("restart",p),this._fire("itemRestart",{itemId:t.id}),u()};n.on("restart",p)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(r){const e=Q1(r);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(hu,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(hu,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(r=>{console.error("An error happened during destroying the context or items.",r)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(r=>(this._context=r,this._contextProps=t_(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const r=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(r))})}_getWatchdog(r){const e=this._watchdogs.get(r);if(!e)throw new Error(`Item with the given id was not registered: ${r}.`);return e}_isErrorComingFromThisItem(r){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(r))return!1;return W1(this._context,r.context)}};class pu extends gs{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(s){return(l,c)=>{c.preventDefault();const u=c.dropRange?[c.dropRange]:null,p=new z(t,s);t.fire(p,{dataTransfer:c.dataTransfer,method:l.name,targetRanges:u,target:c.target,domEvent:c.domEvent}),p.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",s={dataTransfer:new O0(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,c){const u=c.target.ownerDocument,p=c.clientX,b=c.clientY;let _;return u.caretRangeFromPoint&&u.caretRangeFromPoint(p,b)?_=u.caretRangeFromPoint(p,b):c.rangeParent&&(_=u.createRange(),_.setStart(c.rangeParent,c.rangeOffset),_.collapse(!0)),_?l.domConverter.domRangeToView(_):null}(this.view,e)),this.fire(e.type,e,s)}}const Z1=["figcaption","li"],J1=["ol","ul"];function X1(r){if(r.is("$text")||r.is("$textProxy"))return r.data;if(r.is("element","img")&&r.hasAttribute("alt"))return r.getAttribute("alt");if(r.is("element","br"))return`
`;let e="",t=null;for(const n of r.getChildren())e+=Nz(n,t)+X1(n),t=n;return e}function Nz(r,e){return e?r.is("element","li")&&!r.isEmpty&&r.getChild(0).is("containerElement")||J1.includes(r.name)&&J1.includes(e.name)?`

`:r.is("containerElement")||e.is("containerElement")?Z1.includes(r.name)||Z1.includes(e.name)?`
`:`

  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(o,i){(function(a,d){o.exports=d(Ste)})(nr,function(a){function d(oe){const T=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(oe){for(const j in oe)if(j!=="default"){const ie=Object.getOwnPropertyDescriptor(oe,j);Object.defineProperty(T,j,ie.get?ie:{enumerable:!0,get:()=>oe[j]})}}return T.default=oe,Object.freeze(T)}const h=d(a),m=new Map,g={set(oe,T,j){m.has(oe)||m.set(oe,new Map);const ie=m.get(oe);if(!ie.has(T)&&ie.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(ie.keys())[0]}.`);return}ie.set(T,j)},get(oe,T){return m.has(oe)&&m.get(oe).get(T)||null},remove(oe,T){if(!m.has(oe))return;const j=m.get(oe);j.delete(T),j.size===0&&m.delete(oe)}},k=1e6,f=1e3,C="transitionend",y=oe=>(oe&&window.CSS&&window.CSS.escape&&(oe=oe.replace(/#([^\s"#']+)/g,(T,j)=>`#${CSS.escape(j)}`)),oe),w=oe=>oe==null?`${oe}`:Object.prototype.toString.call(oe).match(/\s([a-z]+)/i)[1].toLowerCase(),v=oe=>{do oe+=Math.floor(Math.random()*k);while(document.getElementById(oe));return oe},E=oe=>{if(!oe)return 0;let{transitionDuration:T,transitionDelay:j}=window.getComputedStyle(oe);const ie=Number.parseFloat(T),De=Number.parseFloat(j);return!ie&&!De?0:(T=T.split(",")[0],j=j.split(",")[0],(Number.parseFloat(T)+Number.parseFloat(j))*f)},S=oe=>{oe.dispatchEvent(new Event(C))},M=oe=>!oe||typeof oe!="object"?!1:(typeof oe.jquery!="undefined"&&(oe=oe[0]),typeof oe.nodeType!="undefined"),N=oe=>M(oe)?oe.jquery?oe[0]:oe:typeof oe=="string"&&oe.length>0?document.querySelector(y(oe)):null,R=oe=>{if(!M(oe)||oe.getClientRects().length===0)return!1;const T=getComputedStyle(oe).getPropertyValue("visibility")==="visible",j=oe.closest("details:not([open])");if(!j)return T;if(j!==oe){const ie=oe.closest("summary");if(ie&&ie.parentNode!==j||ie===null)return!1}return T},L=oe=>!oe||oe.nodeType!==Node.ELEMENT_NODE||oe.classList.contains("disabled")?!0:typeof oe.disabled!="undefined"?oe.disabled:oe.hasAttribute("disabled")&&oe.getAttribute("disabled")!=="false",z=oe=>{if(!document.documentElement.attachShadow)return null;if(typeof oe.getRootNode=="function"){const T=oe.getRootNode();return T instanceof ShadowRoot?T:null}return oe instanceof ShadowRoot?oe:oe.parentNode?z(oe.parentNode):null},$=()=>{},q=oe=>{oe.offsetHeight},J=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,K=[],ee=oe=>{document.readyState==="loading"?(K.length||document.addEventListener("DOMContentLoaded",()=>{for(const T of K)T()}),K.push(oe)):oe()},B=()=>document.documentElement.dir==="rtl",U=oe=>{ee(()=>{const T=J();if(T){const j=oe.NAME,ie=T.fn[j];T.fn[j]=oe.jQueryInterface,T.fn[j].Constructor=oe,T.fn[j].noConflict=()=>(T.fn[j]=ie,oe.jQueryInterface)}})},te=(oe,T=[],j=oe)=>typeof oe=="function"?oe(...T):j,ae=(oe,T,j=!0)=>{if(!j){te(oe);return}const ie=5,De=E(T)+ie;let tt=!1;const Xe=({target:Tt})=>{Tt===T&&(tt=!0,T.removeEventListener(C,Xe),te(oe))};T.addEventListener(C,Xe),setTimeout(()=>{tt||S(T)},De)},be=(oe,T,j,ie)=>{const De=oe.length;let tt=oe.indexOf(T);return tt===-1?!j&&ie?oe[De-1]:oe[0]:(tt+=j?1:-1,ie&&(tt=(tt+De)%De),oe[Math.max(0,Math.min(tt,De-1))])},ye=/[^.]*(?=\..*)\.|.*/,me=/\..*/,ue=/::\d+$/,he={};let de=1;const Qe={mouseenter:"mouseover",mouseleave:"mouseout"},Oe=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function it(oe,T){return T&&`${T}::${de++}`||oe.uidEvent||de++}function Se(oe){const T=it(oe);return oe.uidEvent=T,he[T]=he[T]||{},he[T]}function le(oe,T){return function j(ie){return ut(ie,{delegateTarget:oe}),j.oneOff&&fe.off(oe,ie.type,T),T.apply(oe,[ie])}}function Pe(oe,T,j){return function ie(De){const tt=oe.querySelectorAll(T);for(let{target:Xe}=De;Xe&&Xe!==this;Xe=Xe.parentNode)for(const Tt of tt)if(Tt===Xe)return ut(De,{delegateTarget:Xe}),ie.oneOff&&fe.off(oe,De.type,T,j),j.apply(Xe,[De])}}function Je(oe,T,j=null){return Object.values(oe).find(ie=>ie.callable===T&&ie.delegationSelector===j)}function Ke(oe,T,j){const ie=typeof T=="string",De=ie?j:T||j;let tt=qe(oe);return Oe.has(tt)||(tt=oe),[ie,De,tt]}function ce(oe,T,j,ie,De){if(typeof T!="string"||!oe)return;let[tt,Xe,Tt]=Ke(T,j,ie);T in Qe&&(Xe=(ak=>function(ms){if(!ms.relatedTarget||ms.relatedTarget!==ms.delegateTarget&&!ms.delegateTarget.contains(ms.relatedTarget))return ak.call(this,ms)})(Xe));const Bn=Se(oe),zn=Bn[Tt]||(Bn[Tt]={}),xn=Je(zn,Xe,tt?j:null);if(xn){xn.oneOff=xn.oneOff&&De;return}const jn=it(Xe,T.replace(ye,"")),oo=tt?Pe(oe,j,Xe):le(oe,Xe);oo.delegationSelector=tt?j:null,oo.callable=Xe,oo.oneOff=De,oo.uidEvent=jn,zn[jn]=oo,oe.addEventListener(Tt,oo,tt)}function Ce(oe,T,j,ie,De){const tt=Je(T[j],ie,De);!tt||(oe.removeEventListener(j,tt,Boolean(De)),delete T[j][tt.uidEvent])}function He(oe,T,j,ie){const De=T[j]||{};for(const[tt,Xe]of Object.entries(De))tt.includes(ie)&&Ce(oe,T,j,Xe.callable,Xe.delegationSelector)}function qe(oe){return oe=oe.replace(me,""),Qe[oe]||oe}const fe={on(oe,T,j,ie){ce(oe,T,j,ie,!1)},one(oe,T,j,ie){ce(oe,T,j,ie,!0)},off(oe,T,j,ie){if(typeof T!="string"||!oe)return;const[De,tt,Xe]=Ke(T,j,ie),Tt=Xe!==T,Bn=Se(oe),zn=Bn[Xe]||{},xn=T.startsWith(".");if(typeof tt!="undefined"){if(!Object.keys(zn).length)return;Ce(oe,Bn,Xe,tt,De?j:null);return}if(xn)for(const jn of Object.keys(Bn))He(oe,Bn,jn,T.slice(1));for(const[jn,oo]of Object.entries(zn)){const ga=jn.replace(ue,"");(!Tt||T.includes(ga))&&Ce(oe,Bn,Xe,oo.callable,oo.delegationSelector)}},trigger(oe,T,j){if(typeof T!="string"||!oe)return null;const ie=J(),De=qe(T),tt=T!==De;let Xe=null,Tt=!0,Bn=!0,zn=!1;tt&&ie&&(Xe=ie.Event(T,j),ie(oe).trigger(Xe),Tt=!Xe.isPropagationStopped(),Bn=!Xe.isImmediatePropagationStopped(),zn=Xe.isDefaultPrevented());const xn=ut(new Event(T,{bubbles:Tt,cancelable:!0}),j);return zn&&xn.preventDefault(),Bn&&oe.dispatchEvent(xn),xn.defaultPrevented&&Xe&&Xe.preventDefault(),xn}};function ut(oe,T={}){for(const[j,ie]of Object.entries(T))try{oe[j]=ie}catch{Object.defineProperty(oe,j,{configurable:!0,get(){return ie}})}return oe}function pe(oe){if(oe==="true")return!0;if(oe==="false")return!1;if(oe===Number(oe).toString())return Number(oe);if(oe===""||oe==="null")return null;if(typeof oe!="string")return oe;try{return JSON.parse(decodeURIComponent(oe))}catch{return oe}}function F(oe){return oe.replace(/[A-Z]/g,T=>`-${T.toLowerCase()}`)}const Z={setDataAttribute(oe,T,j){oe.setAttribute(`data-bs-${F(T)}`,j)},removeDataAttribute(oe,T){oe.removeAttribute(`data-bs-${F(T)}`)},getDataAttributes(oe){if(!oe)return{};const T={},j=Object.keys(oe.dataset).filter(ie=>ie.startsWith("bs")&&!ie.startsWith("bsConfig"));for(const ie of j){let De=ie.replace(/^bs/,"");De=De.charAt(0).toLowerCase()+De.slice(1,De.length),T[De]=pe(oe.dataset[ie])}return T},getDataAttribute(oe,T){return pe(oe.getAttribute(`data-bs-${F(T)}`))}};class re{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(T){return T=this._mergeConfigObj(T),T=this._configAfterMerge(T),this._typeCheckConfig(T),T}_configAfterMerge(T){return T}_mergeConfigObj(T,j){const ie=M(j)?Z.getDataAttribute(j,"config"):{};return{...this.constructor.Default,...typeof ie=="object"?ie:{},...M(j)?Z.getDataAttributes(j):{},...typeof T=="object"?T:{}}}_typeCheckConfig(T,j=this.constructor.DefaultType){for(const[ie,De]of Object.entries(j)){const tt=T[ie],Xe=M(tt)?"element":w(tt);if(!new RegExp(De).test(Xe))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${ie}" provided type "${Xe}" but expected type "${De}".`)}}}const Ae="5.3.3";class we extends re{constructor(T,j){super(),T=N(T),T&&(this._element=T,this._config=this._getConfig(j),g.set(this._element,this.constructor.DATA_KEY,this))}dispose(){g.remove(this._element,this.constructor.DATA_KEY),fe.off(this._element,this.constructor.EVENT_KEY);for(const T of Object.getOwnPropertyNames(this))this[T]=null}_queueCallback(T,j,ie=!0){ae(T,j,ie)}_getConfig(T){return T=this._mergeConfigObj(T,this._element),T=this._configAfterMerge(T),this._typeCheckConfig(T),T}static getInstance(T){return g.get(N(T),this.DATA_KEY)}static getOrCreateInstance(T,j={}){return this.getInstance(T)||new this(T,typeof j=="object"?j:null)}static get VERSION(){return Ae}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(T){return`${T}${this.EVENT_KEY}`}}const $e=oe=>{let T=oe.getAttribute("data-bs-target");if(!T||T==="#"){let j=oe.getAttribute("href");if(!j||!j.includes("#")&&!j.startsWith("."))return null;j.includes("#")&&!j.startsWith("#")&&(j=`#${j.split("#")[1]}`),T=j&&j!=="#"?j.trim():null}return T?T.split(",").map(j=>y(j)).join(","):null},ke={find(oe,T=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(T,oe))},findOne(oe,T=document.documentElement){return Element.prototype.querySelector.call(T,oe)},children(oe,T){return[].concat(...oe.children).filter(j=>j.matches(T))},parents(oe,T){const j=[];let ie=oe.parentNode.closest(T);for(;ie;)j.push(ie),ie=ie.parentNode.closest(T);return j},prev(oe,T){let j=oe.previousElementSibling;for(;j;){if(j.matches(T))return[j];j=j.previousElementSibling}return[]},next(oe,T){let j=oe.nextElementSibling;for(;j;){if(j.matches(T))return[j];j=j.nextElementSibling}return[]},focusableChildren(oe){const T=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(j=>`${j}:not([tabindex^="-"])`).join(",");return this.find(T,oe).filter(j=>!L(j)&&R(j))},getSelectorFromElement(oe){const T=$e(oe);return T&&ke.findOne(T)?T:null},getElementFromSelector(oe){const T=$e(oe);return T?ke.findOne(T):null},getMultipleElementsFromSelector(oe){const T=$e(oe);return T?ke.find(T):[]}},ze=(oe,T="hide")=>{const j=`click.dismiss${oe.EVENT_KEY}`,ie=oe.NAME;fe.on(document,j,`[data-bs-dismiss="${ie}"]`,function(De){if(["A","AREA"].includes(this.tagName)&&De.preventDefault(),L(this))return;const tt=ke.getElementFromSelector(this)||this.closest(`.${ie}`);oe.getOrCreateInstance(tt)[T]()})},Re="alert",Ye=".bs.alert",ct=`close${Ye}`,lt=`closed${Ye}`,dt="fade",mt="show";class It extends we{static get NAME(){return Re}close(){if(fe.trigger(this._element,ct).defaultPrevented)return;this._element.classList.remove(mt);const j=this._element.classList.contains(dt);this._queueCallback(()=>this._destroyElement(),this._element,j)}_destroyElement(){this._element.remove(),fe.trigger(this._element,lt),this.dispose()}static jQueryInterface(T){return this.each(function(){const j=It.getOrCreateInstance(this);if(typeof T=="string"){if(j[T]===void 0||T.startsWith("_")||T==="constructor")throw new TypeError(`No method named "${T}"`);j[T](this)}})}}ze(It,"close"),U(It);const Xt="button",Dn=".bs.button",zi=".data-api",cl="active",ji='[data-bs-toggle="button"]',oa=`click${Dn}${zi}`;class qt extends we{static get NAME(){return Xt}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(cl))}static jQueryInterface(T){return this.each(function(){const j=qt.getOrCreateInstance(this);T==="toggle"&&j[T]()})}}fe.on(document,oa,ji,oe=>{oe.preventDefault();const T=oe.target.closest(ji);qt.getOrCreateInstance(T).toggle()}),U(qt);const sn="swipe",un=".bs.swipe",Ih=`touchstart${un}`,uo=`touchmove${un}`,Mh=`touchend${un}`,od=`pointerdown${un}`,Pg=`pointerup${un}`,Lg="touch",Bh="pen",Rg="pointer-event",zg=40,to={endCallback:null,leftCallback:null,rightCallback:null},jg={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class $i extends re{constructor(T,j){super(),this._element=T,!(!T||!$i.isSupported())&&(this._config=this._getConfig(j),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return to}static get DefaultType(){return jg}static get NAME(){return sn}dispose(){fe.off(this._element,un)}_start(T){if(!this._supportPointerEvents){this._deltaX=T.touches[0].clientX;return}this._eventIsPointerPenTouch(T)&&(this._deltaX=T.clientX)}_end(T){this._eventIsPointerPenTouch(T)&&(this._deltaX=T.clientX-this._deltaX),this._handleSwipe(),te(this._config.endCallback)}_move(T){this._deltaX=T.touches&&T.touches.length>1?0:T.touches[0].clientX-this._deltaX}_handleSwipe(){const T=Math.abs(this._deltaX);if(T<=zg)return;const j=T/this._deltaX;this._deltaX=0,j&&te(j>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(fe.on(this._element,od,T=>this._start(T)),fe.on(this._element,Pg,T=>this._end(T)),this._element.classList.add(Rg)):(fe.on(this._element,Ih,T=>this._start(T)),fe.on(this._element,uo,T=>this._move(T)),fe.on(this._element,Mh,T=>this._end(T)))}_eventIsPointerPenTouch(T){return this._supportPointerEvents&&(T.pointerType===Bh||T.pointerType===Lg)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const dl="carousel",Vi=".bs.carousel",Nh=".data-api",$g="ArrowLeft",Vg="ArrowRight",Xr=500,Fi="next",es="prev",ts="left",ul="right",Fg=`slide${Vi}`,_i=`slid${Vi}`,id=`keydown${Vi}`,Oh=`mouseenter${Vi}`,Hg=`mouseleave${Vi}`,Ug=`dragstart${Vi}`,dr=`load${Vi}${Nh}`,Wg=`click${Vi}${Nh}`,Ph="carousel",hl="active",qg="slide",Gg="carousel-item-end",Kg="carousel-item-start",Yg="carousel-item-next",Qg="carousel-item-prev",Hi=".active",ns=".carousel-item",ia=Hi+ns,Zg=".carousel-item img",Jg=".carousel-indicators",Xg="[data-bs-slide], [data-bs-slide-to]",eb='[data-bs-ride="carousel"]',tb={[$g]:ul,[Vg]:ts},nb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ob={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class So extends we{constructor(T,j){super(T,j),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ke.findOne(Jg,this._element),this._addEventListeners(),this._config.ride===Ph&&this.cycle()}static get Default(){return nb}static get DefaultType(){return ob}static get NAME(){return dl}next(){this._slide(Fi)}nextWhenVisible(){!document.hidden&&R(this._element)&&this.next()}prev(){this._slide(es)}pause(){this._isSliding&&S(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){fe.one(this._element,_i,()=>this.cycle());return}this.cycle()}}to(T){const j=this._getItems();if(T>j.length-1||T<0)return;if(this._isSliding){fe.one(this._element,_i,()=>this.to(T));return}const ie=this._getItemIndex(this._getActive());if(ie===T)return;const De=T>ie?Fi:es;this._slide(De,j[T])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(T){return T.defaultInterval=T.interval,T}_addEventListeners(){this._config.keyboard&&fe.on(this._element,id,T=>this._keydown(T)),this._config.pause==="hover"&&(fe.on(this._element,Oh,()=>this.pause()),fe.on(this._element,Hg,()=>this._maybeEnableCycle())),this._config.touch&&$i.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const ie of ke.find(Zg,this._element))fe.on(ie,Ug,De=>De.preventDefault());const j={leftCallback:()=>this._slide(this._directionToOrder(ts)),rightCallback:()=>this._slide(this._directionToOrder(ul)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Xr+this._config.interval))}};this._swipeHelper=new $i(this._element,j)}_keydown(T){if(/input|textarea/i.test(T.target.tagName))return;const j=tb[T.key];j&&(T.preventDefault(),this._slide(this._directionToOrder(j)))}_getItemIndex(T){return this._getItems().indexOf(T)}_setActiveIndicatorElement(T){if(!this._indicatorsElement)return;const j=ke.findOne(Hi,this._indicatorsElement);j.classList.remove(hl),j.removeAttribute("aria-current");const ie=ke.findOne(`[data-bs-slide-to="${T}"]`,this._indicatorsElement);ie&&(ie.classList.add(hl),ie.setAttribute("aria-current","true"))}_updateInterval(){const T=this._activeElement||this._getActive();if(!T)return;const j=Number.parseInt(T.getAttribute("data-bs-interval"),10);this._config.interval=j||this._config.defaultInterval}_slide(T,j=null){if(this._isSliding)return;const ie=this._getActive(),De=T===Fi,tt=j||be(this._getItems(),ie,De,this._config.wrap);if(tt===ie)return;const Xe=this._getItemIndex(tt),Tt=ga=>fe.trigger(this._element,ga,{relatedTarget:tt,direction:this._orderToDirection(T),from:this._getItemIndex(ie),to:Xe});if(Tt(Fg).defaultPrevented||!ie||!tt)return;const zn=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Xe),this._activeElement=tt;const xn=De?Kg:Gg,jn=De?Yg:Qg;tt.classList.add(jn),q(tt),ie.classList.add(xn),tt.classList.add(xn);const oo=()=>{tt.classList.remove(xn,jn),tt.classList.add(hl),ie.classList.remove(hl,jn,xn),this._isSliding=!1,Tt(_i)};this._queueCallback(oo,ie,this._isAnimated()),zn&&this.cycle()}_isAnimated(){return this._element.classList.contains(qg)}_getActive(){return ke.findOne(ia,this._element)}_getItems(){return ke.find(ns,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(T){return B()?T===ts?es:Fi:T===ts?Fi:es}_orderToDirection(T){return B()?T===es?ts:ul:T===es?ul:ts}static jQueryInterface(T){return this.each(function(){const j=So.getOrCreateInstance(this,T);if(typeof T=="number"){j.to(T);return}if(typeof T=="string"){if(j[T]===void 0||T.startsWith("_")||T==="constructor")throw new TypeError(`No method named "${T}"`);j[T]()}})}}fe.on(document,Wg,Xg,function(oe){const T=ke.getElementFromSelector(this);if(!T||!T.classList.contains(Ph))return;oe.preventDefault();const j=So.getOrCreateInstance(T),ie=this.getAttribute("data-bs-slide-to");if(ie){j.to(ie),j._maybeEnableCycle();return}if(Z.getDataAttribute(this,"slide")==="next"){j.next(),j._maybeEnableCycle();return}j.prev(),j._maybeEnableCycle()}),fe.on(window,dr,()=>{const oe=ke.find(eb);for(const T of oe)So.getOrCreateInstance(T)}),U(So);const Lh="collapse",ra=".bs.collapse",pl=".data-api",ib=`show${ra}`,rb=`shown${ra}`,sb=`hide${ra}`,ab=`hidden${ra}`,os=`click${ra}${pl}`,is="show",rs="collapse",vi="collapsing",ss="collapsed",lb=`:scope .${rs} .${rs}`,fl="collapse-horizontal",ml="width",cb="height",rd=".collapse.show, .collapse.collapsing",Ui='[data-bs-toggle="collapse"]',db={parent:null,toggle:!0},Rh={parent:"(null|element)",toggle:"boolean"};class ur extends we{constructor(T,j){super(T,j),this._isTransitioning=!1,this._triggerArray=[];const ie=ke.find(Ui);for(const De of ie){const tt=ke.getSelectorFromElement(De),Xe=ke.find(tt).filter(Tt=>Tt===this._element);tt!==null&&Xe.length&&this._triggerArray.push(De)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return db}static get DefaultType(){return Rh}static get NAME(){return Lh}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let T=[];if(this._config.parent&&(T=this._getFirstLevelChildren(rd).filter(Tt=>Tt!==this._element).map(Tt=>ur.getOrCreateInstance(Tt,{toggle:!1}))),T.length&&T[0]._isTransitioning||fe.trigger(this._element,ib).defaultPrevented)return;for(const Tt of T)Tt.hide();const ie=this._getDimension();this._element.classList.remove(rs),this._element.classList.add(vi),this._element.style[ie]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const De=()=>{this._isTransitioning=!1,this._element.classList.remove(vi),this._element.classList.add(rs,is),this._element.style[ie]="",fe.trigger(this._element,rb)},Xe=`scroll${ie[0].toUpperCase()+ie.slice(1)}`;this._queueCallback(De,this._element,!0),this._element.style[ie]=`${this._element[Xe]}px`}hide(){if(this._isTransitioning||!this._isShown()||fe.trigger(this._element,sb).defaultPrevented)return;const j=this._getDimension();this._element.style[j]=`${this._element.getBoundingClientRect()[j]}px`,q(this._element),this._element.classList.add(vi),this._element.classList.remove(rs,is);for(const De of this._triggerArray){const tt=ke.getElementFromSelector(De);tt&&!this._isShown(tt)&&this._addAriaAndCollapsedClass([De],!1)}this._isTransitioning=!0;const ie=()=>{this._isTransitioning=!1,this._element.classList.remove(vi),this._element.classList.add(rs),fe.trigger(this._element,ab)};this._element.style[j]="",this._queueCallback(ie,this._element,!0)}_isShown(T=this._element){return T.classList.contains(is)}_configAfterMerge(T){return T.toggle=Boolean(T.toggle),T.parent=N(T.parent),T}_getDimension(){return this._element.classList.contains(fl)?ml:cb}_initializeChildren(){if(!this._config.parent)return;const T=this._getFirstLevelChildren(Ui);for(const j of T){const ie=ke.getElementFromSelector(j);ie&&this._addAriaAndCollapsedClass([j],this._isShown(ie))}}_getFirstLevelChildren(T){const j=ke.find(lb,this._config.parent);return ke.find(T,this._config.parent).filter(ie=>!j.includes(ie))}_addAriaAndCollapsedClass(T,j){if(!!T.length)for(const ie of T)ie.classList.toggle(ss,!j),ie.setAttribute("aria-expanded",j)}static jQueryInterface(T){const j={};return typeof T=="string"&&/show|hide/.test(T)&&(j.toggle=!1),this.each(function(){const ie=ur.getOrCreateInstance(this,j);if(typeof T=="string"){if(typeof ie[T]=="undefined")throw new TypeError(`No method named "${T}"`);ie[T]()}})}}fe.on(document,os,Ui,function(oe){(oe.target.tagName==="A"||oe.delegateTarget&&oe.delegateTarget.tagName==="A")&&oe.preventDefault();for(const T of ke.getMultipleElementsFromSelector(this))ur.getOrCreateInstance(T,{toggle:!1}).toggle()}),U(ur);const zh="dropdown",Qo=".bs.dropdown",sd=".data-api",jh="Escape",ad="Tab",$h="ArrowUp",as="ArrowDown",ub=2,gl=`hide${Qo}`,ld=`hidden${Qo}`,on=`show${Qo}`,hb=`shown${Qo}`,bl=`click${Qo}${sd}`,cd=`keydown${Qo}${sd}`,sa=`keyup${Qo}${sd}`,Wi="show",ls="dropup",Vh="dropend",dd="dropstart",pb="dropup-center",Fh="dropdown-center",hr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ud=`${hr}.${Wi}`,kl=".dropdown-menu",fb=".navbar",mb=".navbar-nav",_l=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",aa=B()?"top-end":"top-start",gb=B()?"top-start":"top-end",bb=B()?"bottom-end":"bottom-start",kb=B()?"bottom-start":"bottom-end",_b=B()?"left-start":"right-start",cs=B()?"right-start":"left-start",vb="top",Hh="bottom",Uh={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Wh={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ho extends we{constructor(T,j){super(T,j),this._popper=null,this._parent=this._element.parentNode,this._menu=ke.next(this._element,kl)[0]||ke.prev(this._element,kl)[0]||ke.findOne(kl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Uh}static get DefaultType(){return Wh}static get NAME(){return zh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(L(this._element)||this._isShown())return;const T={relatedTarget:this._element};if(!fe.trigger(this._element,on,T).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(mb))for(const ie of[].concat(...document.body.children))fe.on(ie,"mouseover",$);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Wi),this._element.classList.add(Wi),fe.trigger(this._element,hb,T)}}hide(){if(L(this._element)||!this._isShown())return;const T={relatedTarget:this._element};this._completeHide(T)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(T){if(!fe.trigger(this._element,gl,T).defaultPrevented){if("ontouchstart"in document.documentElement)for(const ie of[].concat(...document.body.children))fe.off(ie,"mouseover",$);this._popper&&this._popper.destroy(),this._menu.classList.remove(Wi),this._element.classList.remove(Wi),this._element.setAttribute("aria-expanded","false"),Z.removeDataAttribute(this._menu,"popper"),fe.trigger(this._element,ld,T)}}_getConfig(T){if(T=super._getConfig(T),typeof T.reference=="object"&&!M(T.reference)&&typeof T.reference.getBoundingClientRect!="function")throw new TypeError(`${zh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return T}_createPopper(){if(typeof h=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let T=this._element;this._config.reference==="parent"?T=this._parent:M(this._config.reference)?T=N(this._config.reference):typeof this._config.reference=="object"&&(T=this._config.reference);const j=this._getPopperConfig();this._popper=h.createPopper(T,this._menu,j)}_isShown(){return this._menu.classList.contains(Wi)}_getPlacement(){const T=this._parent;if(T.classList.contains(Vh))return _b;if(T.classList.contains(dd))return cs;if(T.classList.contains(pb))return vb;if(T.classList.contains(Fh))return Hh;const j=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return T.classList.contains(ls)?j?gb:aa:j?kb:bb}_detectNavbar(){return this._element.closest(fb)!==null}_getOffset(){const{offset:T}=this._config;return typeof T=="string"?T.split(",").map(j=>Number.parseInt(j,10)):typeof T=="function"?j=>T(j,this._element):T}_getPopperConfig(){const T={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Z.setDataAttribute(this._menu,"popper","static"),T.modifiers=[{name:"applyStyles",enabled:!1}]),{...T,...te(this._config.popperConfig,[T])}}_selectMenuItem({key:T,target:j}){const ie=ke.find(_l,this._menu).filter(De=>R(De));!ie.length||be(ie,j,T===as,!ie.includes(j)).focus()}static jQueryInterface(T){return this.each(function(){const j=ho.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof j[T]=="undefined")throw new TypeError(`No method named "${T}"`);j[T]()}})}static clearMenus(T){if(T.button===ub||T.type==="keyup"&&T.key!==ad)return;const j=ke.find(ud);for(const ie of j){const De=ho.getInstance(ie);if(!De||De._config.autoClose===!1)continue;const tt=T.composedPath(),Xe=tt.includes(De._menu);if(tt.includes(De._element)||De._config.autoClose==="inside"&&!Xe||De._config.autoClose==="outside"&&Xe||De._menu.contains(T.target)&&(T.type==="keyup"&&T.key===ad||/input|select|option|textarea|form/i.test(T.target.tagName)))continue;const Tt={relatedTarget:De._element};T.type==="click"&&(Tt.clickEvent=T),De._completeHide(Tt)}}static dataApiKeydownHandler(T){const j=/input|textarea/i.test(T.target.tagName),ie=T.key===jh,De=[$h,as].includes(T.key);if(!De&&!ie||j&&!ie)return;T.preventDefault();const tt=this.matches(hr)?this:ke.prev(this,hr)[0]||ke.next(this,hr)[0]||ke.findOne(hr,T.delegateTarget.parentNode),Xe=ho.getOrCreateInstance(tt);if(De){T.stopPropagation(),Xe.show(),Xe._selectMenuItem(T);return}Xe._isShown()&&(T.stopPropagation(),Xe.hide(),tt.focus())}}fe.on(document,cd,hr,ho.dataApiKeydownHandler),fe.on(document,cd,kl,ho.dataApiKeydownHandler),fe.on(document,bl,ho.clearMenus),fe.on(document,sa,ho.clearMenus),fe.on(document,bl,hr,function(oe){oe.preventDefault(),ho.getOrCreateInstance(this).toggle()}),U(ho);const hd="backdrop",qh="fade",Gh="show",pd=`mousedown.bs.${hd}`,wb={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Kh={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vl extends re{constructor(T){super(),this._config=this._getConfig(T),this._isAppended=!1,this._element=null}static get Default(){return wb}static get DefaultType(){return Kh}static get NAME(){return hd}show(T){if(!this._config.isVisible){te(T);return}this._append();const j=this._getElement();this._config.isAnimated&&q(j),j.classList.add(Gh),this._emulateAnimation(()=>{te(T)})}hide(T){if(!this._config.isVisible){te(T);return}this._getElement().classList.remove(Gh),this._emulateAnimation(()=>{this.dispose(),te(T)})}dispose(){!this._isAppended||(fe.off(this._element,pd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const T=document.createElement("div");T.className=this._config.className,this._config.isAnimated&&T.classList.add(qh),this._element=T}return this._element}_configAfterMerge(T){return T.rootElement=N(T.rootElement),T}_append(){if(this._isAppended)return;const T=this._getElement();this._config.rootElement.append(T),fe.on(T,pd,()=>{te(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(T){ae(T,this._getElement(),this._config.isAnimated)}}const Ab="focustrap",la=".bs.focustrap",yb=`focusin${la}`,Yh=`keydown.tab${la}`,fd="Tab",Eb="forward",wl="backward",md={autofocus:!0,trapElement:null},gd={autofocus:"boolean",trapElement:"element"};class Al extends re{constructor(T){super(),this._config=this._getConfig(T),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return md}static get DefaultType(){return gd}static get NAME(){return Ab}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),fe.off(document,la),fe.on(document,yb,T=>this._handleFocusin(T)),fe.on(document,Yh,T=>this._handleKeydown(T)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,fe.off(document,la))}_handleFocusin(T){const{trapElement:j}=this._config;if(T.target===document||T.target===j||j.contains(T.target))return;const ie=ke.focusableChildren(j);ie.length===0?j.focus():this._lastTabNavDirection===wl?ie[ie.length-1].focus():ie[0].focus()}_handleKeydown(T){T.key===fd&&(this._lastTabNavDirection=T.shiftKey?wl:Eb)}}const bd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",kd=".sticky-top",ca="padding-right",_d="margin-right";class Cl{constructor(){this._element=document.body}getWidth(){const T=document.documentElement.clientWidth;return Math.abs(window.innerWidth-T)}hide(){const T=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ca,j=>j+T),this._setElementAttributes(bd,ca,j=>j+T),this._setElementAttributes(kd,_d,j=>j-T)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ca),this._resetElementAttributes(bd,ca),this._resetElementAttributes(kd,_d)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(T,j,ie){const De=this.getWidth(),tt=Xe=>{if(Xe!==this._element&&window.innerWidth>Xe.clientWidth+De)return;this._saveInitialAttribute(Xe,j);const Tt=window.getComputedStyle(Xe).getPropertyValue(j);Xe.style.setProperty(j,`${ie(Number.parseFloat(Tt))}px`)};this._applyManipulationCallback(T,tt)}_saveInitialAttribute(T,j){const ie=T.style.getPropertyValue(j);ie&&Z.setDataAttribute(T,j,ie)}_resetElementAttributes(T,j){const ie=De=>{const tt=Z.getDataAttribute(De,j);if(tt===null){De.style.removeProperty(j);return}Z.removeDataAttribute(De,j),De.style.setProperty(j,tt)};this._applyManipulationCallback(T,ie)}_applyManipulationCallback(T,j){if(M(T)){j(T);return}for(const ie of ke.find(T,this._element))j(ie)}}const xb="modal",po=".bs.modal",Tb=".data-api",Db="Escape",pr=`hide${po}`,da=`hidePrevented${po}`,Qh=`hidden${po}`,Zh=`show${po}`,yl=`shown${po}`,vd=`resize${po}`,Sb=`click.dismiss${po}`,Ib=`mousedown.dismiss${po}`,Mb=`keydown.dismiss${po}`,Jh=`click${po}${Tb}`,wd="modal-open",Bb="fade",Ad="show",Cd="modal-static",Xh=".modal.show",Nb=".modal-dialog",ep=".modal-body",Ob='[data-bs-toggle="modal"]',tp={backdrop:!0,focus:!0,keyboard:!0},Pb={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class fr extends we{constructor(T,j){super(T,j),this._dialog=ke.findOne(Nb,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Cl,this._addEventListeners()}static get Default(){return tp}static get DefaultType(){return Pb}static get NAME(){return xb}toggle(T){return this._isShown?this.hide():this.show(T)}show(T){this._isShown||this._isTransitioning||fe.trigger(this._element,Zh,{relatedTarget:T}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(T)))}hide(){!this._isShown||this._isTransitioning||fe.trigger(this._element,pr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ad),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){fe.off(window,po),fe.off(this._dialog,po),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vl({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Al({trapElement:this._element})}_showElement(T){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const j=ke.findOne(ep,this._dialog);j&&(j.scrollTop=0),q(this._element),this._element.classList.add(Ad);const ie=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,fe.trigger(this._element,yl,{relatedTarget:T})};this._queueCallback(ie,this._dialog,this._isAnimated())}_addEventListeners(){fe.on(this._element,Mb,T=>{if(T.key===Db){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),fe.on(window,vd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),fe.on(this._element,Ib,T=>{fe.one(this._element,Sb,j=>{if(!(this._element!==T.target||this._element!==j.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(wd),this._resetAdjustments(),this._scrollBar.reset(),fe.trigger(this._element,Qh)})}_isAnimated(){return this._element.classList.contains(Bb)}_triggerBackdropTransition(){if(fe.trigger(this._element,da).defaultPrevented)return;const j=this._element.scrollHeight>document.documentElement.clientHeight,ie=this._element.style.overflowY;ie==="hidden"||this._element.classList.contains(Cd)||(j||(this._element.style.overflowY="hidden"),this._element.classList.add(Cd),this._queueCallback(()=>{this._element.classList.remove(Cd),this._queueCallback(()=>{this._element.style.overflowY=ie},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const T=this._element.scrollHeight>document.documentElement.clientHeight,j=this._scrollBar.getWidth(),ie=j>0;if(ie&&!T){const De=B()?"paddingLeft":"paddingRight";this._element.style[De]=`${j}px`}if(!ie&&T){const De=B()?"paddingRight":"paddingLeft";this._element.style[De]=`${j}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(T,j){return this.each(function(){const ie=fr.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof ie[T]=="undefined")throw new TypeError(`No method named "${T}"`);ie[T](j)}})}}fe.on(document,Jh,Ob,function(oe){const T=ke.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&oe.preventDefault(),fe.one(T,Zh,De=>{De.defaultPrevented||fe.one(T,Qh,()=>{R(this)&&this.focus()})});const j=ke.findOne(Xh);j&&fr.getInstance(j).hide(),fr.getOrCreateInstance(T).toggle(this)}),ze(fr),U(fr);const np="offcanvas",Zo=".bs.offcanvas",yd=".data-api",op=`load${Zo}${yd}`,en="Escape",El="show",xl="showing",qi="hiding",ip="offcanvas-backdrop",Ed=".offcanvas.show",Lb=`show${Zo}`,Gi=`shown${Zo}`,Tl=`hide${Zo}`,xd=`hidePrevented${Zo}`,no=`hidden${Zo}`,Rb=`resize${Zo}`,rp=`click${Zo}${yd}`,Td=`keydown.dismiss${Zo}`,at='[data-bs-toggle="offcanvas"]',sp={backdrop:!0,keyboard:!0,scroll:!1},hn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fo extends we{constructor(T,j){super(T,j),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return sp}static get DefaultType(){return hn}static get NAME(){return np}toggle(T){return this._isShown?this.hide():this.show(T)}show(T){if(this._isShown||fe.trigger(this._element,Lb,{relatedTarget:T}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Cl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xl);const ie=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(El),this._element.classList.remove(xl),fe.trigger(this._element,Gi,{relatedTarget:T})};this._queueCallback(ie,this._element,!0)}hide(){if(!this._isShown||fe.trigger(this._element,Tl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(qi),this._backdrop.hide();const j=()=>{this._element.classList.remove(El,qi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Cl().reset(),fe.trigger(this._element,no)};this._queueCallback(j,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const T=()=>{if(this._config.backdrop==="static"){fe.trigger(this._element,xd);return}this.hide()},j=Boolean(this._config.backdrop);return new vl({className:ip,isVisible:j,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:j?T:null})}_initializeFocusTrap(){return new Al({trapElement:this._element})}_addEventListeners(){fe.on(this._element,Td,T=>{if(T.key===en){if(this._config.keyboard){this.hide();return}fe.trigger(this._element,xd)}})}static jQueryInterface(T){return this.each(function(){const j=fo.getOrCreateInstance(this,T);if(typeof T=="string"){if(j[T]===void 0||T.startsWith("_")||T==="constructor")throw new TypeError(`No method named "${T}"`);j[T](this)}})}}fe.on(document,rp,at,function(oe){const T=ke.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&oe.preventDefault(),L(this))return;fe.one(T,no,()=>{R(this)&&this.focus()});const j=ke.findOne(Ed);j&&j!==T&&fo.getInstance(j).hide(),fo.getOrCreateInstance(T).toggle(this)}),fe.on(window,op,()=>{for(const oe of ke.find(Ed))fo.getOrCreateInstance(oe).show()}),fe.on(window,Rb,()=>{for(const oe of ke.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(oe).position!=="fixed"&&fo.getOrCreateInstance(oe).hide()}),ze(fo),U(fo);const Dd={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Dt=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Dl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ap=(oe,T)=>{const j=oe.nodeName.toLowerCase();return T.includes(j)?Dt.has(j)?Boolean(Dl.test(oe.nodeValue)):!0:T.filter(ie=>ie instanceof RegExp).some(ie=>ie.test(j))};function Sd(oe,T,j){if(!oe.length)return oe;if(j&&typeof j=="function")return j(oe);const De=new window.DOMParser().parseFromString(oe,"text/html"),tt=[].concat(...De.body.querySelectorAll("*"));for(const Xe of tt){const Tt=Xe.nodeName.toLowerCase();if(!Object.keys(T).includes(Tt)){Xe.remove();continue}const Bn=[].concat(...Xe.attributes),zn=[].concat(T["*"]||[],T[Tt]||[]);for(const xn of Bn)ap(xn,zn)||Xe.removeAttribute(xn.nodeName)}return De.body.innerHTML}const lp="TemplateFactory",an={allowList:Dd,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ua={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},cp={entry:"(string|element|function|null)",selector:"(string|element)"};class ds extends re{constructor(T){super(),this._config=this._getConfig(T)}static get Default(){return an}static get DefaultType(){return ua}static get NAME(){return lp}getContent(){return Object.values(this._config.content).map(T=>this._resolvePossibleFunction(T)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(T){return this._checkContent(T),this._config.content={...this._config.content,...T},this}toHtml(){const T=document.createElement("div");T.innerHTML=this._maybeSanitize(this._config.template);for(const[De,tt]of Object.entries(this._config.content))this._setContent(T,tt,De);const j=T.children[0],ie=this._resolvePossibleFunction(this._config.extraClass);return ie&&j.classList.add(...ie.split(" ")),j}_typeCheckConfig(T){super._typeCheckConfig(T),this._checkContent(T.content)}_checkContent(T){for(const[j,ie]of Object.entries(T))super._typeCheckConfig({selector:j,entry:ie},cp)}_setContent(T,j,ie){const De=ke.findOne(ie,T);if(!!De){if(j=this._resolvePossibleFunction(j),!j){De.remove();return}if(M(j)){this._putElementInTemplate(N(j),De);return}if(this._config.html){De.innerHTML=this._maybeSanitize(j);return}De.textContent=j}}_maybeSanitize(T){return this._config.sanitize?Sd(T,this._config.allowList,this._config.sanitizeFn):T}_resolvePossibleFunction(T){return te(T,[this])}_putElementInTemplate(T,j){if(this._config.html){j.innerHTML="",j.append(T);return}j.textContent=T.textContent}}const Sl="tooltip",dp=new Set(["sanitize","allowList","sanitizeFn"]),mr="fade",gr="modal",ha="show",Il=".tooltip-inner",Id=`.${gr}`,Md="hide.bs.modal",us="hover",Bd="focus",jb="click",up="manual",hp="hide",pp="hidden",fp="show",Nd="shown",$b="inserted",mp="click",Vb="focusin",Fb="focusout",gp="mouseenter",Mt="mouseleave",Hb={AUTO:"auto",TOP:"top",RIGHT:B()?"left":"right",BOTTOM:"bottom",LEFT:B()?"right":"left"},hs={allowList:Dd,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},pa={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Jo extends we{constructor(T,j){if(typeof h=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(T,j),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hs}static get DefaultType(){return pa}static get NAME(){return Sl}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(!!this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),fe.off(this._element.closest(Id),Md,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const T=fe.trigger(this._element,this.constructor.eventName(fp)),ie=(z(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(T.defaultPrevented||!ie)return;this._disposePopper();const De=this._getTipElement();this._element.setAttribute("aria-describedby",De.getAttribute("id"));const{container:tt}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(tt.append(De),fe.trigger(this._element,this.constructor.eventName($b))),this._popper=this._createPopper(De),De.classList.add(ha),"ontouchstart"in document.documentElement)for(const Tt of[].concat(...document.body.children))fe.on(Tt,"mouseover",$);const Xe=()=>{fe.trigger(this._element,this.constructor.eventName(Nd)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(Xe,this.tip,this._isAnimated())}hide(){if(!this._isShown()||fe.trigger(this._element,this.constructor.eventName(hp)).defaultPrevented)return;if(this._getTipElement().classList.remove(ha),"ontouchstart"in document.documentElement)for(const De of[].concat(...document.body.children))fe.off(De,"mouseover",$);this._activeTrigger[jb]=!1,this._activeTrigger[Bd]=!1,this._activeTrigger[us]=!1,this._isHovered=null;const ie=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),fe.trigger(this._element,this.constructor.eventName(pp)))};this._queueCallback(ie,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(T){const j=this._getTemplateFactory(T).toHtml();if(!j)return null;j.classList.remove(mr,ha),j.classList.add(`bs-${this.constructor.NAME}-auto`);const ie=v(this.constructor.NAME).toString();return j.setAttribute("id",ie),this._isAnimated()&&j.classList.add(mr),j}setContent(T){this._newContent=T,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(T){return this._templateFactory?this._templateFactory.changeContent(T):this._templateFactory=new ds({...this._config,content:T,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Il]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(T){return this.constructor.getOrCreateInstance(T.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(mr)}_isShown(){return this.tip&&this.tip.classList.contains(ha)}_createPopper(T){const j=te(this._config.placement,[this,T,this._element]),ie=Hb[j.toUpperCase()];return h.createPopper(this._element,T,this._getPopperConfig(ie))}_getOffset(){const{offset:T}=this._config;return typeof T=="string"?T.split(",").map(j=>Number.parseInt(j,10)):typeof T=="function"?j=>T(j,this._element):T}_resolvePossibleFunction(T){return te(T,[this._element])}_getPopperConfig(T){const j={placement:T,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:ie=>{this._getTipElement().setAttribute("data-popper-placement",ie.state.placement)}}]};return{...j,...te(this._config.popperConfig,[j])}}_setListeners(){const T=this._config.trigger.split(" ");for(const j of T)if(j==="click")fe.on(this._element,this.constructor.eventName(mp),this._config.selector,ie=>{this._initializeOnDelegatedTarget(ie).toggle()});else if(j!==up){const ie=j===us?this.constructor.eventName(gp):this.constructor.eventName(Vb),De=j===us?this.constructor.eventName(Mt):this.constructor.eventName(Fb);fe.on(this._element,ie,this._config.selector,tt=>{const Xe=this._initializeOnDelegatedTarget(tt);Xe._activeTrigger[tt.type==="focusin"?Bd:us]=!0,Xe._enter()}),fe.on(this._element,De,this._config.selector,tt=>{const Xe=this._initializeOnDelegatedTarget(tt);Xe._activeTrigger[tt.type==="focusout"?Bd:us]=Xe._element.contains(tt.relatedTarget),Xe._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},fe.on(this._element.closest(Id),Md,this._hideModalHandler)}_fixTitle(){const T=this._element.getAttribute("title");!T||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",T),this._element.setAttribute("data-bs-original-title",T),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(T,j){clearTimeout(this._timeout),this._timeout=setTimeout(T,j)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(T){const j=Z.getDataAttributes(this._element);for(const ie of Object.keys(j))dp.has(ie)&&delete j[ie];return T={...j,...typeof T=="object"&&T?T:{}},T=this._mergeConfigObj(T),T=this._configAfterMerge(T),this._typeCheckConfig(T),T}_configAfterMerge(T){return T.container=T.container===!1?document.body:N(T.container),typeof T.delay=="number"&&(T.delay={show:T.delay,hide:T.delay}),typeof T.title=="number"&&(T.title=T.title.toString()),typeof T.content=="number"&&(T.content=T.content.toString()),T}_getDelegateConfig(){const T={};for(const[j,ie]of Object.entries(this._config))this.constructor.Default[j]!==ie&&(T[j]=ie);return T.selector=!1,T.trigger="manual",T}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(T){return this.each(function(){const j=Jo.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof j[T]=="undefined")throw new TypeError(`No method named "${T}"`);j[T]()}})}}U(Jo);const Od="popover",Qt=".popover-header",Pd=".popover-body",bp={...Jo.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ub={...Jo.DefaultType,content:"(null|string|element|function)"};class ps extends Jo{static get Default(){return bp}static get DefaultType(){return Ub}static get NAME(){return Od}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Qt]:this._getTitle(),[Pd]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(T){return this.each(function(){const j=ps.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof j[T]=="undefined")throw new TypeError(`No method named "${T}"`);j[T]()}})}}U(ps);const Wb="scrollspy",Ld=".bs.scrollspy",Ki=".data-api",qb=`activate${Ld}`,Rd=`click${Ld}`,Gb=`load${Ld}${Ki}`,Kb="dropdown-item",fs="active",Yb='[data-bs-spy="scroll"]',kp="[href]",Qb=".nav, .list-group",_p=".nav-link",zd=`${_p}, .nav-item > ${_p}, .list-group-item`,Jb=".dropdown",Xb=".dropdown-toggle",vp={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ek={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Rn extends we{constructor(T,j){super(T,j),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return vp}static get DefaultType(){return ek}static get NAME(){return Wb}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const T of this._observableSections.values())this._observer.observe(T)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(T){return T.target=N(T.target)||document.body,T.rootMargin=T.offset?`${T.offset}px 0px -30%`:T.rootMargin,typeof T.threshold=="string"&&(T.threshold=T.threshold.split(",").map(j=>Number.parseFloat(j))),T}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(fe.off(this._config.target,Rd),fe.on(this._config.target,Rd,kp,T=>{const j=this._observableSections.get(T.target.hash);if(j){T.preventDefault();const ie=this._rootElement||window,De=j.offsetTop-this._element.offsetTop;if(ie.scrollTo){ie.scrollTo({top:De,behavior:"smooth"});return}ie.scrollTop=De}}))}_getNewObserver(){const T={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(j=>this._observerCallback(j),T)}_observerCallback(T){const j=Xe=>this._targetLinks.get(`#${Xe.target.id}`),ie=Xe=>{this._previousScrollData.visibleEntryTop=Xe.target.offsetTop,this._process(j(Xe))},De=(this._rootElement||document.documentElement).scrollTop,tt=De>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=De;for(const Xe of T){if(!Xe.isIntersecting){this._activeTarget=null,this._clearActiveClass(j(Xe));continue}const Tt=Xe.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(tt&&Tt){if(ie(Xe),!De)return;continue}!tt&&!Tt&&ie(Xe)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const T=ke.find(kp,this._config.target);for(const j of T){if(!j.hash||L(j))continue;const ie=ke.findOne(decodeURI(j.hash),this._element);R(ie)&&(this._targetLinks.set(decodeURI(j.hash),j),this._observableSections.set(j.hash,ie))}}_process(T){this._activeTarget!==T&&(this._clearActiveClass(this._config.target),this._activeTarget=T,T.classList.add(fs),this._activateParents(T),fe.trigger(this._element,qb,{relatedTarget:T}))}_activateParents(T){if(T.classList.contains(Kb)){ke.findOne(Xb,T.closest(Jb)).classList.add(fs);return}for(const j of ke.parents(T,Qb))for(const ie of ke.prev(j,zd))ie.classList.add(fs)}_clearActiveClass(T){T.classList.remove(fs);const j=ke.find(`${kp}.${fs}`,T);for(const ie of j)ie.classList.remove(fs)}static jQueryInterface(T){return this.each(function(){const j=Rn.getOrCreateInstance(this,T);if(typeof T=="string"){if(j[T]===void 0||T.startsWith("_")||T==="constructor")throw new TypeError(`No method named "${T}"`);j[T]()}})}}fe.on(window,Gb,()=>{for(const oe of ke.find(Yb))Rn.getOrCreateInstance(oe)}),U(Rn);const En="tab",ln=".bs.tab",Xo=`hide${ln}`,jd=`hidden${ln}`,$d=`show${ln}`,Vd=`shown${ln}`,tk=`click${ln}`,wp=`keydown${ln}`,Ve=`load${ln}`,Ap="ArrowLeft",yt="ArrowRight",Cp="ArrowUp",Fd="ArrowDown",Ml="Home",Hd="End",br="active",yp="fade",Bl="show",Nl="dropdown",Ep=".dropdown-toggle",nk=".dropdown-menu",Ze=`:not(${Ep})`,xp='.list-group, .nav, [role="tablist"]',ok=".nav-item, .list-group-item",Ol=`.nav-link${Ze}, .list-group-item${Ze}, [role="tab"]${Ze}`,Ud='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Pl=`${Ol}, ${Ud}`,ik=`.${br}[data-bs-toggle="tab"], .${br}[data-bs-toggle="pill"], .${br}[data-bs-toggle="list"]`;class kr extends we{constructor(T){super(T),this._parent=this._element.closest(xp),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),fe.on(this._element,wp,j=>this._keydown(j)))}static get NAME(){return En}show(){const T=this._element;if(this._elemIsActive(T))return;const j=this._getActiveElem(),ie=j?fe.trigger(j,Xo,{relatedTarget:T}):null;fe.trigger(T,$d,{relatedTarget:j}).defaultPrevented||ie&&ie.defaultPrevented||(this._deactivate(j,T),this._activate(T,j))}_activate(T,j){if(!T)return;T.classList.add(br),this._activate(ke.getElementFromSelector(T));const ie=()=>{if(T.getAttribute("role")!=="tab"){T.classList.add(Bl);return}T.removeAttribute("tabindex"),T.setAttribute("aria-selected",!0),this._toggleDropDown(T,!0),fe.trigger(T,Vd,{relatedTarget:j})};this._queueCallback(ie,T,T.classList.contains(yp))}_deactivate(T,j){if(!T)return;T.classList.remove(br),T.blur(),this._deactivate(ke.getElementFromSelector(T));const ie=()=>{if(T.getAttribute("role")!=="tab"){T.classList.remove(Bl);return}T.setAttribute("aria-selected",!1),T.setAttribute("tabindex","-1"),this._toggleDropDown(T,!1),fe.trigger(T,jd,{relatedTarget:j})};this._queueCallback(ie,T,T.classList.contains(yp))}_keydown(T){if(![Ap,yt,Cp,Fd,Ml,Hd].includes(T.key))return;T.stopPropagation(),T.preventDefault();const j=this._getChildren().filter(De=>!L(De));let ie;if([Ml,Hd].includes(T.key))ie=j[T.key===Ml?0:j.length-1];else{const De=[yt,Fd].includes(T.key);ie=be(j,T.target,De,!0)}ie&&(ie.focus({preventScroll:!0}),kr.getOrCreateInstance(ie).show())}_getChildren(){return ke.find(Pl,this._parent)}_getActiveElem(){return this._getChildren().find(T=>this._elemIsActive(T))||null}_setInitialAttributes(T,j){this._setAttributeIfNotExists(T,"role","tablist");for(const ie of j)this._setInitialAttributesOnChild(ie)}_setInitialAttributesOnChild(T){T=this._getInnerElement(T);const j=this._elemIsActive(T),ie=this._getOuterElement(T);T.setAttribute("aria-selected",j),ie!==T&&this._setAttributeIfNotExists(ie,"role","presentation"),j||T.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(T,"role","tab"),this._setInitialAttributesOnTargetPanel(T)}_setInitialAttributesOnTargetPanel(T){const j=ke.getElementFromSelector(T);!j||(this._setAttributeIfNotExists(j,"role","tabpanel"),T.id&&this._setAttributeIfNotExists(j,"aria-labelledby",`${T.id}`))}_toggleDropDown(T,j){const ie=this._getOuterElement(T);if(!ie.classList.contains(Nl))return;const De=(tt,Xe)=>{const Tt=ke.findOne(tt,ie);Tt&&Tt.classList.toggle(Xe,j)};De(Ep,br),De(nk,Bl),ie.setAttribute("aria-expanded",j)}_setAttributeIfNotExists(T,j,ie){T.hasAttribute(j)||T.setAttribute(j,ie)}_elemIsActive(T){return T.classList.contains(br)}_getInnerElement(T){return T.matches(Pl)?T:ke.findOne(Pl,T)}_getOuterElement(T){return T.closest(ok)||T}static jQueryInterface(T){return this.each(function(){const j=kr.getOrCreateInstance(this);if(typeof T=="string"){if(j[T]===void 0||T.startsWith("_")||T==="constructor")throw new TypeError(`No method named "${T}"`);j[T]()}})}}fe.on(document,tk,Ud,function(oe){["A","AREA"].includes(this.tagName)&&oe.preventDefault(),!L(this)&&kr.getOrCreateInstance(this).show()}),fe.on(window,Ve,()=>{for(const oe of ke.find(ik))kr.getOrCreateInstance(oe)}),U(kr);const rk="toast",wi=".bs.toast",sk=`mouseover${wi}`,_r=`mouseout${wi}`,Dp=`focusin${wi}`,vr=`focusout${wi}`,Gt=`hide${wi}`,ei=`hidden${wi}`,ti=`show${wi}`,Sp=`shown${wi}`,Wd="fade",fa="hide",Ll="show",Rl="showing",qd={animation:"boolean",autohide:"boolean",delay:"number"},Gd={animation:!0,autohide:!0,delay:5e3};class ma extends we{constructor(T,j){super(T,j),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Gd}static get DefaultType(){return qd}static get NAME(){return rk}show(){if(fe.trigger(this._element,ti).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Wd);const j=()=>{this._element.classList.remove(Rl),fe.trigger(this._element,Sp),this._maybeScheduleHide()};this._element.classList.remove(fa),q(this._element),this._element.classList.add(Ll,Rl),this._queueCallback(j,this._element,this._config.animation)}hide(){if(!this.isShown()||fe.trigger(this._element,Gt).defaultPrevented)return;const j=()=>{this._element.classList.add(fa),this._element.classList.remove(Rl,Ll),fe.trigger(this._element,ei)};this._element.classList.add(Rl),this._queueCallback(j,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ll),super.dispose()}isShown(){return this._element.classList.contains(Ll)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(T,j){switch(T.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=j;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=j;break}}if(j){this._clearTimeout();return}const ie=T.relatedTarget;this._element===ie||this._element.contains(ie)||this._maybeScheduleHide()}_setListeners(){fe.on(this._element,sk,T=>this._onInteraction(T,!0)),fe.on(this._element,_r,T=>this._onInteraction(T,!1)),fe.on(this._element,Dp,T=>this._onInteraction(T,!0)),fe.on(this._element,vr,T=>this._onInteraction(T,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(T){return this.each(function(){const j=ma.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof j[T]=="undefined")throw new TypeError(`No method named "${T}"`);j[T](this)}})}}return ze(ma),U(ma),{Alert:It,Button:qt,Carousel:So,Collapse:ur,Dropdown:ho,Modal:fr,Offcanvas:fo,Popover:ps,ScrollSpy:Rn,Tab:kr,Toast:ma,Tooltip:Jo}})})(Fee);var Ite={install(o){o.config.globalProperties.$dayjs=Pm,o.provide("dayjs",Pm)}};function Mte(o){return typeof o=="object"&&o!==null}function aI(o,i){return o=Mte(o)?o:Object.create(null),new Proxy(o,{get(a,d,h){return d==="key"?Reflect.get(a,d,h):Reflect.get(a,d,h)||Reflect.get(i,d,h)}})}function Bte(o,i){return i.reduce((a,d)=>a==null?void 0:a[d],o)}function Nte(o,i,a){return i.slice(0,-1).reduce((d,h)=>/^(__proto__)$/.test(h)?{}:d[h]=d[h]||{},o)[i[i.length-1]]=a,o}function Ote(o,i){return i.reduce((a,d)=>{const h=d.split(".");return Nte(a,h,Bte(o,h))},{})}function Pte(o,i){return a=>{var d;try{const{storage:h=localStorage,beforeRestore:m=void 0,afterRestore:g=void 0,serializer:k={serialize:JSON.stringify,deserialize:JSON.parse},key:f=i.$id,paths:C=null,debug:y=!1}=a;return{storage:h,beforeRestore:m,afterRestore:g,serializer:k,key:((d=o.key)!=null?d:w=>w)(typeof f=="string"?f:f(i.$id)),paths:C,debug:y}}catch(h){return a.debug&&console.error("[pinia-plugin-persistedstate]",h),null}}}function lI(o,{storage:i,serializer:a,key:d,debug:h}){try{const m=i==null?void 0:i.getItem(d);m&&o.$patch(a==null?void 0:a.deserialize(m))}catch(m){h&&console.error("[pinia-plugin-persistedstate]",m)}}function cI(o,{storage:i,serializer:a,key:d,paths:h,debug:m}){try{const g=Array.isArray(h)?Ote(o,h):o;i.setItem(d,a.serialize(g))}catch(g){m&&console.error("[pinia-plugin-persistedstate]",g)}}function Lte(o={}){return i=>{const{auto:a=!1}=o,{options:{persist:d=a},store:h,pinia:m}=i;if(!d)return;if(!(h.$id in m.state.value)){const k=m._s.get(h.$id.replace("__hot:",""));k&&Promise.resolve().then(()=>k.$persist());return}const g=(Array.isArray(d)?d.map(k=>aI(k,o)):[aI(d,o)]).map(Pte(o,h)).filter(Boolean);h.$persist=()=>{g.forEach(k=>{cI(h.$state,k)})},h.$hydrate=({runHooks:k=!0}={})=>{g.forEach(f=>{const{beforeRestore:C,afterRestore:y}=f;k&&(C==null||C(i)),lI(h,f),k&&(y==null||y(i))})},g.forEach(k=>{const{beforeRestore:f,afterRestore:C}=k;f==null||f(i),lI(h,k),C==null||C(i),h.$subscribe((y,w)=>{cI(w,k)},{detached:!0})})}}/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(o,i){(function(a,d){o.exports=d(Due)})(self,a=>(()=>{var d={976:k=>{k.exports=a}},h={};function m(k){var f=h[k];if(f!==void 0)return f.exports;var C=h[k]={exports:{}};return d[k](C,C.exports,m),C.exports}m.d=(k,f)=>{for(var C in f)m.o(f,C)&&!m.o(k,C)&&Object.defineProperty(k,C,{enumerable:!0,get:f[C]})},m.o=(k,f)=>Object.prototype.hasOwnProperty.call(k,f);var g={};return(()=>{m.d(g,{default:()=>Se});var k=m(976);const f=function(le){var Pe=typeof le;return le!=null&&(Pe=="object"||Pe=="function")},C=typeof nr=="object"&&nr&&nr.Object===Object&&nr;var y=typeof self=="object"&&self&&self.Object===Object&&self;const w=C||y||Function("return this")(),v=function(){return w.Date.now()};var E=/\s/;const S=function(le){for(var Pe=le.length;Pe--&&E.test(le.charAt(Pe)););return Pe};var M=/^\s+/;const N=function(le){return le&&le.slice(0,S(le)+1).replace(M,"")},R=w.Symbol;var L=Object.prototype,z=L.hasOwnProperty,$=L.toString,q=R?R.toStringTag:void 0;const J=function(le){var Pe=z.call(le,q),Je=le[q];try{le[q]=void 0;var Ke=!0}catch{}var ce=$.call(le);return Ke&&(Pe?le[q]=Je:delete le[q]),ce};var K=Object.prototype.toString;const ee=function(le){return K.call(le)};var B=R?R.toStringTag:void 0;const U=function(le){return le==null?le===void 0?"[object Undefined]":"[object Null]":B&&B in Object(le)?J(le):ee(le)},te=function(le){return le!=null&&typeof le=="object"},ae=function(le){return typeof le=="symbol"||te(le)&&U(le)=="[object Symbol]"};var be=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,me=/^0o[0-7]+$/i,ue=parseInt;const he=function(le){if(typeof le=="number")return le;if(ae(le))return NaN;if(f(le)){var Pe=typeof le.valueOf=="function"?le.valueOf():le;le=f(Pe)?Pe+"":Pe}if(typeof le!="string")return le===0?le:+le;le=N(le);var Je=ye.test(le);return Je||me.test(le)?ue(le.slice(2),Je?2:8):be.test(le)?NaN:+le};var de=Math.max,Qe=Math.min;const Oe=function(le,Pe,Je){var Ke,ce,Ce,He,qe,fe,ut=0,pe=!1,F=!1,Z=!0;if(typeof le!="function")throw new TypeError("Expected a function");function re(Re){var Ee=Ke,Ye=ce;return Ke=ce=void 0,ut=Re,He=le.apply(Ye,Ee)}function Ae(Re){return ut=Re,qe=setTimeout($e,Pe),pe?re(Re):He}function we(Re){var Ee=Re-fe;return fe===void 0||Ee>=Pe||Ee<0||F&&Re-ut>=Ce}function $e(){var Re=v();if(we(Re))return ke(Re);qe=setTimeout($e,function(Ee){var Ye=Pe-(Ee-fe);return F?Qe(Ye,Ce-(Ee-ut)):Ye}(Re))}function ke(Re){return qe=void 0,Z&&Ke?re(Re):(Ke=ce=void 0,He)}function ze(){var Re=v(),Ee=we(Re);if(Ke=arguments,ce=this,fe=Re,Ee){if(qe===void 0)return Ae(fe);if(F)return clearTimeout(qe),qe=setTimeout($e,Pe),re(fe)}return qe===void 0&&(qe=setTimeout($e,Pe)),He}return Pe=he(Pe)||0,f(Je)&&(pe=!!Je.leading,Ce=(F="maxWait"in Je)?de(he(Je.maxWait)||0,Pe):Ce,Z="trailing"in Je?!!Je.trailing:Z),ze.cancel=function(){qe!==void 0&&clearTimeout(qe),ut=0,Ke=fe=ce=qe=void 0},ze.flush=function(){return qe===void 0?He:ke(v())},ze},it=(0,k.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(le){this.instance&&le!==this.lastEditorData&&this.instance.data.set(le)},disabled(le){le?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:le}=window;if(le){const[Pe]=le.split(".").map(Number);Pe<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const le=Object.assign({},this.config);this.modelValue&&(le.initialData=this.modelValue),this.editor.create(this.$el,le).then(Pe=>{this.instance=(0,k.markRaw)(Pe),this.setUpEditorEvents(),this.modelValue!==le.initialData&&Pe.data.set(this.modelValue),this.disabled&&Pe.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Pe)}).catch(Pe=>{console.error(Pe)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const le=this.instance,Pe=Oe(Je=>{if(this.disableTwoWayDataBinding)return;const Ke=this.lastEditorData=le.data.get();this.$emit("update:modelValue",Ke,Je,le),this.$emit("input",Ke,Je,le)},300,{leading:!0});le.model.document.on("change:data",Pe),le.editing.view.document.on("focus",Je=>{this.$emit("focus",Je,le)}),le.editing.view.document.on("blur",Je=>{this.$emit("blur",Je,le)})}},render(){return(0,k.h)(this.tagName)}});if(!k.version||!k.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Se={install(le){le.component("Ckeditor",it)},component:it}})(),g=g.default})())})(CP);var Sue=CP.exports;const yP=iq();yP.use(Lte({storage:localStorage,auto:!0}));const Iue=dB(eK).use(dm).use(yP).use(Ite).use(Tue).use(Sue);Iue.mount("#app");