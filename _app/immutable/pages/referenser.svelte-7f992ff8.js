import{S as y,i as z,s as A,l as p,u as G,a as E,m as v,p as m,v as S,h as o,c as k,q as c,b,H as g,n as I,L as j,w as C,G as q,r as w}from"../chunks/index-f329180d.js";function D(n,s,l){const r=n.slice();return r[1]=s[l],r}function H(n,s,l){const r=n.slice();return r[4]=s[l],r}function R(n){let s,l,r,f,u,_,h,a;return{c(){s=p("a"),l=p("img"),this.h()},l(e){s=v(e,"A",{href:!0,target:!0,"data-pswp-width":!0,"data-pswp-height":!0,class:!0});var t=m(s);l=v(t,"IMG",{src:!0,height:!0,width:!0,loading:!0,alt:!0,style:!0}),t.forEach(o),this.h()},h(){q(l.src,r=n[4].url)||c(l,"src",r),c(l,"height",f=n[4].height),c(l,"width",u=n[4].width),c(l,"loading","lazy"),c(l,"alt",""),w(l,"height","240px"),w(l,"width","100%"),w(l,"max-width","320px"),w(l,"aspect-ratio",n[4].width+"/"+n[4].height),c(s,"href",_=n[4].url),c(s,"target","_blank"),c(s,"data-pswp-width",h=n[4].width),c(s,"data-pswp-height",a=n[4].height),c(s,"class","svelte-1u40uou")},m(e,t){b(e,s,t),g(s,l)},p(e,t){t&1&&!q(l.src,r=e[4].url)&&c(l,"src",r),t&1&&f!==(f=e[4].height)&&c(l,"height",f),t&1&&u!==(u=e[4].width)&&c(l,"width",u),t&1&&w(l,"aspect-ratio",e[4].width+"/"+e[4].height),t&1&&_!==(_=e[4].url)&&c(s,"href",_),t&1&&h!==(h=e[4].width)&&c(s,"data-pswp-width",h),t&1&&a!==(a=e[4].height)&&c(s,"data-pswp-height",a)},d(e){e&&o(s)}}}function V(n){let s,l=n[1].name+"",r,f,u,_,h=n[1].images,a=[];for(let e=0;e<h.length;e+=1)a[e]=R(H(n,h,e));return{c(){s=p("h3"),r=G(l),f=E(),u=p("div");for(let e=0;e<a.length;e+=1)a[e].c();_=E(),this.h()},l(e){s=v(e,"H3",{});var t=m(s);r=S(t,l),t.forEach(o),f=k(e),u=v(e,"DIV",{class:!0});var i=m(u);for(let d=0;d<a.length;d+=1)a[d].l(i);_=k(i),i.forEach(o),this.h()},h(){c(u,"class","js-gallery gallery svelte-1u40uou")},m(e,t){b(e,s,t),g(s,r),b(e,f,t),b(e,u,t);for(let i=0;i<a.length;i+=1)a[i].m(u,null);g(u,_)},p(e,t){if(t&1&&l!==(l=e[1].name+"")&&C(r,l),t&1){h=e[1].images;let i;for(i=0;i<h.length;i+=1){const d=H(e,h,i);a[i]?a[i].p(d,t):(a[i]=R(d),a[i].c(),a[i].m(u,_))}for(;i<a.length;i+=1)a[i].d(1);a.length=h.length}},d(e){e&&o(s),e&&o(f),e&&o(u),j(a,e)}}}function L(n){let s,l,r,f,u,_=n[0],h=[];for(let a=0;a<_.length;a+=1)h[a]=V(D(n,_,a));return{c(){s=p("div"),l=p("div"),r=p("h2"),f=G("Referenser"),u=E();for(let a=0;a<h.length;a+=1)h[a].c();this.h()},l(a){s=v(a,"DIV",{class:!0});var e=m(s);l=v(e,"DIV",{class:!0});var t=m(l);r=v(t,"H2",{id:!0});var i=m(r);f=S(i,"Referenser"),i.forEach(o),u=k(t);for(let d=0;d<h.length;d+=1)h[d].l(t);t.forEach(o),e.forEach(o),this.h()},h(){c(r,"id","references"),c(l,"class","content svelte-1u40uou"),c(s,"class","references svelte-1u40uou")},m(a,e){b(a,s,e),g(s,l),g(l,r),g(r,f),g(l,u);for(let t=0;t<h.length;t+=1)h[t].m(l,null)},p(a,[e]){if(e&1){_=a[0];let t;for(t=0;t<_.length;t+=1){const i=D(a,_,t);h[t]?h[t].p(i,e):(h[t]=V(i),h[t].c(),h[t].m(l,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=_.length}},i:I,o:I,d(a){a&&o(s),j(h,a)}}}function M(n,s,l){let{references:r}=s;return n.$$set=f=>{"references"in f&&l(0,r=f.references)},[r]}class F extends y{constructor(s){super(),z(this,s,M,L,A,{references:0})}}export{F as default};
