(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a693c2"],{"0b81":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return d}));var a=n("7a23");
/**
 * Vue 3 Carousel 0.1.19
 * (c) 2021
 * @license MIT
 */function c(){return new Proxy({value:0,read:0},{get(e,t){return t in e?"read"===t?e[t]:e[t]++:0},set(e,t,n){return e[t]=Math.max(n,0),!0}})}function l(e,t){let n;return function(...a){n&&clearTimeout(n),n=setTimeout(()=>{e(...a),n=null},t)}}function s(e,t){let n;return function(...a){const c=this;n||(e.apply(c,a),n=!0,setTimeout(()=>n=!1,t))}}var i=Object(a["i"])({name:"Carousel",props:{itemsToShow:{default:1,type:Number},currentSlide:{default:0,type:Number},wrapAround:{default:!1,type:Boolean},snapAlign:{default:"center",validator(e){return["start","end","center"].includes(e)}},transition:{default:300,type:Number},settings:{default(){return{}},type:Object},breakpoints:{default:null,type:Object},autoplay:{default:0,type:Number}},setup(e,{slots:t}){const n=Object(a["w"])(null),i=Object(a["w"])([]),r=Object(a["w"])([]),o=Object(a["w"])(0),u=Object(a["w"])(1),d=c(),b=Object.assign(Object.assign({},e),e.settings),p=Object(a["w"])(Object.assign({},b.breakpoints));delete b.settings,delete b.breakpoints;const j=Object(a["v"])(Object.assign({},b)),O=Object(a["w"])(j.currentSlide),m=Object(a["w"])(0),h=Object(a["w"])(0);function v(){const e=Object.keys(p.value).map(e=>Number(e)).sort((e,t)=>+t-+e);let t=Object.assign({},b);e.some(e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),p.value[e]),!0)}),Object.keys(t).forEach(e=>j[e]=t[e])}Object(a["t"])("config",j),Object(a["t"])("slidesBuffer",r),Object(a["t"])("slidesCount",u),Object(a["t"])("currentSlide",O),Object(a["t"])("slidesCounter",d);const g=l(()=>{p.value&&v(),_()},16);function f(){setInterval(()=>{F()},j.autoplay)}function _(){if(!n.value)return;const e=n.value.getBoundingClientRect();o.value=e.width/j.itemsToShow}function y(){u.value=i.value.length,h.value=Math.ceil((u.value-1)/2),O.value=Math.min(u.value-1,O.value)}function k(){const e=[...Array(u.value).keys()];if(j.wrapAround){const t=O.value+h.value+1;for(let n=0;n<t;n++)e.push(Number(e.shift()))}r.value=e}Object(a["p"])(()=>{p.value&&v(),_(),j.autoplay>0&&f(),window.addEventListener("resize",g,{passive:!0})});let w=!1;const x={x:0,y:0},S={x:0,y:0},B=Object(a["v"])({x:0,y:0}),z=Object(a["w"])(!1),M=s(e=>{w||e.preventDefault(),S.x=w?e.touches[0].clientX:e.clientX,S.y=w?e.touches[0].clientY:e.clientY;const t=S.x-x.x,n=S.y-x.y;B.y=n,B.x=t},16);function L(e){e.preventDefault(),w="touchstart"===e.type,!w&&0!==e.button||C.value||(z.value=!0,x.x=w?e.touches[0].clientX:e.clientX,x.y=w?e.touches[0].clientY:e.clientY,document.addEventListener(w?"touchmove":"mousemove",M),document.addEventListener(w?"touchend":"mouseup",T))}function T(){z.value=!1;const e=.4*Math.sign(B.x),t=Math.round(B.x/o.value+e);let n=O.value-t;j.wrapAround||(n=Math.max(Math.min(n,u.value-1),0)),A(n),B.x=0,B.y=0,document.removeEventListener(w?"touchmove":"mousemove",M),document.removeEventListener(w?"touchend":"mouseup",T)}const C=Object(a["w"])(!1);function A(e){if(O.value===e||C.value)return;const t=u.value-1;return e>t?A(e-u.value):e<0?A(e+u.value):(C.value=!0,m.value=O.value,O.value=e,void setTimeout(()=>{j.wrapAround&&k(),C.value=!1},j.transition))}function F(){const e=O.value>=u.value-1;e?j.wrapAround&&A(0):A(O.value+1)}function q(){const e=O.value<=0;e?j.wrapAround&&A(u.value-1):A(O.value-1)}const D={slideTo:A,next:F,prev:q};Object(a["t"])("nav",D);const E=Object(a["b"])(()=>{let e=r.value.indexOf(O.value);if("center"===j.snapAlign&&(e-=(j.itemsToShow-1)/2),"end"===j.snapAlign&&(e-=j.itemsToShow-1),!j.wrapAround){const t=u.value-j.itemsToShow,n=0;e=Math.max(Math.min(e,t),n)}return e}),N=Object(a["b"])(()=>{const e=B.x-E.value*o.value;return{transform:`translateX(${e}px)`,transition:(C.value?j.transition:0)+"ms"}}),H=Object(a["v"])({slideWidth:o,slidesCount:u,currentSlide:O}),X=t.default||t.slides,$=t.addons;return Object(a["E"])(()=>{var e;const t=(null===X||void 0===X?void 0:X(H))||[];i.value=(null===(e=t[0])||void 0===e?void 0:e.children)||[];const n=u.value!==i.value.length;n&&(y(),k()),d.read&&(d.value=i.value.length-1)}),k(),()=>{const e=(null===X||void 0===X?void 0:X(H))||[],t=(null===$||void 0===$?void 0:$(H))||[],c=Object(a["k"])("ol",{class:"carousel__track",style:N.value,onMousedown:L,onTouchstart:L},e),l=Object(a["k"])("div",{class:"carousel__viewport"},c);return Object(a["k"])("section",{ref:n,class:"carousel","aria-label":"Gallery"},[l,t])}}});const r={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},o=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=r[t],c=Object(a["k"])("path",{d:n});e.title;const l=Object(a["k"])("title",null,t);return Object(a["k"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[l,c])};o.props={name:String,title:String};const u=(e,{slots:t,attrs:n})=>{const{next:c,prev:l}=t,s=Object(a["l"])("nav",{}),i=Object(a["k"])("button",{class:["carousel__prev",null===n||void 0===n?void 0:n.class],onClick:s.prev},(null===l||void 0===l?void 0:l())||Object(a["k"])(o,{name:"arrowLeft"})),r=Object(a["k"])("button",{class:["carousel__next",null===n||void 0===n?void 0:n.class],onClick:s.next},(null===c||void 0===c?void 0:c())||Object(a["k"])(o,{name:"arrowRight"}));return[i,r]};var d=Object(a["i"])({name:"CarouselSlide",props:{order:{type:Number,default:1}},setup(e,{slots:t}){const n=Object(a["l"])("config",Object(a["v"])({})),c=Object(a["l"])("slidesBuffer",Object(a["w"])([])),l=Object(a["l"])("slidesCounter"),s=l.value,i=Object(a["w"])(s);function r(){i.value=c.value.indexOf(s)}n.wrapAround&&(r(),Object(a["E"])(r));const o=Object(a["b"])(()=>{const e=n.itemsToShow,t=1/e*100+"%";return{width:t,order:i.value.toString()}});return()=>{var e;return Object(a["k"])("li",{style:o.value,class:"carousel__slide"},null===(e=t.default)||void 0===e?void 0:e.call(t))}}});const b=()=>{const e=Object(a["l"])("slidesCount",Object(a["w"])(1)),t=Object(a["l"])("currentSlide",Object(a["w"])(1)),n=Object(a["l"])("nav",{});function c(e){n.slideTo(e)}const l=[];for(let s=0;s<e.value;s++){const e=Object(a["k"])("button",{class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":t.value===s},onClick:()=>c(s)}),n=Object(a["k"])("li",{class:"carousel__pagination-item",key:s},e);l.push(n)}return Object(a["k"])("ol",{class:"carousel__pagination"},l)}},4001:function(e,t,n){},7762:function(e,t,n){},"857a":function(e,t,n){var a=n("1d80"),c=/"/g;e.exports=function(e,t,n,l){var s=String(a(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(l).replace(c,"&quot;")+'"'),i+">"+s+"</"+t+">"}},8879:function(e,t,n){"use strict";n("f0f3")},"8a05":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"main"},l={class:"hero-full"},s={class:"wrap hero-full__wrap"},i={class:"hero-full__col"},r=Object(a["h"])("div",{class:"hero-full__col_cover",style:{"background-image":"url('images/hero/spalnya-aleksandriya__hero.jpg')"}},[Object(a["h"])("div",{class:"cover"})],-1),o={class:"hero-full__info"},u=Object(a["h"])("h1",{class:"h1_desktop"},[Object(a["g"])("Спальни "),Object(a["h"])("span",null,"по индивидуальному проекту"),Object(a["g"])(" от Фабрики интерьерной мебели Рось")],-1),d=Object(a["h"])("h1",{class:"h1_mobile"},[Object(a["h"])("span",null,"Спальни по индивидуальному проекту"),Object(a["g"])(" от Фабрики интерьерной мебели Рось")],-1),b=Object(a["h"])("p",null,"Покрытие итальянской эмалью Sayerlack с соблюдением технологического процесса, что обеспечивает максимальную износостойкость лакокрасочного покрытия, и как следствие практичность и долговечность изделий.",-1),p={class:"hero__button"},j=Object(a["g"])("Рассчитаем спальню "),O=Object(a["h"])("br",null,null,-1),m=Object(a["g"])(" по эскизам"),h=Object(a["h"])("div",{class:"hero-full__col"},[Object(a["h"])("div",{class:"hero-full__cover",style:{"background-image":"url('images/hero/spalnya-aleksandriya__hero.jpg')"}})],-1),v=Object(a["g"])("Нравится модель спальни, но хочется иначе?"),g=Object(a["g"])("Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство в вашей спальне правильно!");function f(e,t,n,f,_,y){var k=Object(a["z"])("Header"),w=Object(a["z"])("Button"),x=Object(a["z"])("Benefits"),S=Object(a["z"])("SpalniMain"),B=Object(a["z"])("Calculate"),z=Object(a["z"])("Designer"),M=Object(a["z"])("Warranty"),L=Object(a["z"])("Director"),T=Object(a["z"])("Footer");return Object(a["r"])(),Object(a["d"])("div",null,[Object(a["h"])(k),Object(a["h"])("main",c,[Object(a["h"])("section",l,[Object(a["h"])("div",s,[Object(a["h"])("div",i,[r,Object(a["h"])("div",o,[u,d,b,Object(a["h"])("div",p,[Object(a["h"])(w,null,{"modal-title":Object(a["F"])((function(){return[j,O,m]})),_:1})])])]),h])]),Object(a["h"])(x),Object(a["h"])(S),Object(a["h"])(B),Object(a["h"])(z,null,{title:Object(a["F"])((function(){return[v]})),text:Object(a["F"])((function(){return[g]})),_:1}),Object(a["h"])(M),Object(a["h"])(L),Object(a["h"])(T)])])}var _=n("0418"),y=n("3fd7"),k=n("1a34"),w=(n("b0c0"),n("9911"),n("0862")),x=n.n(w),S={class:"product"},B={class:"product-name"},z=Object(a["g"])("Коллекции спален"),M={class:"wrap"},L={class:"product-items"},T={class:"carousel__item"},C={class:"product-info"},A={class:"product-name"},F={class:"product-price"},q={class:"mdl"},D={class:"mdl-row"},E={class:"mdl-col"},N={class:"mdl-product__images"},H={class:"mdl-product__images_big"},X={class:"mdl-product__images-thumbnails"},$={class:"mdl-col"},Y={class:"mdl-product__price"},G=Object(a["h"])("span",null,"Цена: ",-1),P=Object(a["h"])("div",{class:"mdl-product__button"},[Object(a["h"])("a",{"data-fancybox":"","data-src":"#proizvodstvo",href:"javascript:;",class:"button"},[Object(a["h"])("span",{class:"button__text"},"Заказать спальню"),Object(a["h"])("img",{src:x.a,class:"button__icon"})]),Object(a["h"])("div",{style:{display:"none"},id:"proizvodstvo",class:"white-popup"},[Object(a["h"])("div",{class:"white-popup__title"},"Заказать спальню"),Object(a["h"])("form",{action:"mailfile.php",method:"POST",enctype:"multipart/form-data",class:"form white-popup__form eskiz-form"},[Object(a["h"])("input",{type:"text",name:"user_name",class:"form__input",placeholder:"Ваше Имя"}),Object(a["h"])("input",{type:"phone",name:"user_phone",class:"form__input",placeholder:"Ваш телефон*",required:""}),Object(a["h"])("textarea",{name:"message",cols:"30",rows:"4",placeholder:"Ваш вопрос",class:"form__input form__textarea"}),Object(a["h"])("input",{type:"hidden",name:"source",class:"source",value:""}),Object(a["h"])("input",{type:"hidden",name:"term",class:"term",value:""}),Object(a["h"])("input",{type:"hidden",name:"medium",class:"medium",value:""}),Object(a["h"])("input",{type:"hidden",name:"campaign",class:"campaign",value:""}),Object(a["h"])("input",{type:"hidden",name:"project_name",value:"Мебель на заказ"}),Object(a["h"])("input",{type:"hidden",name:"admin_email",value:"kuhni-ros@yandex.ru"}),Object(a["h"])("input",{type:"hidden",name:"form_subject",value:"Заказать спальню"}),Object(a["h"])("button",{onclick:"ym(41430234,'reachGoal','eskizy_done'); return true;",type:"submit",class:"button button__popup"},[Object(a["h"])("span",{class:"button__text"},"Заказать"),Object(a["h"])("img",{src:x.a,class:"button__icon"})])]),Object(a["h"])("p",{class:"form__confidence white-popup__confidence"},"Нажимая кнопку вы соглашаетесь с политикой конфиденциальности")])],-1);function R(e,t,n,c,l,s){var i=Object(a["z"])("slide"),r=Object(a["z"])("navigation"),o=Object(a["z"])("pagination"),u=Object(a["z"])("carousel");return Object(a["r"])(),Object(a["d"])("section",S,[Object(a["h"])("h2",B,[Object(a["y"])(e.$slots,"title",{},(function(){return[z]}))]),Object(a["h"])("div",M,[Object(a["h"])("ul",L,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(l.bedrooms,(function(e){return Object(a["r"])(),Object(a["d"])("li",{class:"product-item",key:e.id},[Object(a["h"])(u,{"items-to-show":1,"wrap-around":!0},{addons:Object(a["F"])((function(){return[Object(a["h"])(r),Object(a["h"])(o)]})),default:Object(a["F"])((function(){return[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(e.slides,(function(e){return Object(a["r"])(),Object(a["d"])(i,{key:e},{default:Object(a["F"])((function(){return[Object(a["h"])("div",T,[Object(a["h"])("img",{src:"images/product/spalni/"+e.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:2},1024),Object(a["h"])("div",C,[Object(a["h"])("h3",A,"Спальня "+Object(a["B"])(e.name),1),Object(a["h"])("span",F,"от "+Object(a["B"])(e.price)+" руб.",1)]),Object(a["h"])("a",{"data-fancybox":"","data-src":"#"+e.link,href:"javascript:;",class:"product-description"},"Подробное описание",8,["data-src"]),Object(a["h"])("div",{style:{display:"none"},id:e.link},[Object(a["h"])("div",q,[Object(a["h"])("div",D,[Object(a["h"])("div",E,[Object(a["h"])("div",N,[Object(a["h"])("div",H,[Object(a["h"])("a",{"data-fancybox":"gallery"+e.link,href:"images/product/spalni/"+e.imgBig},[Object(a["h"])("img",{src:"images/product/spalni/"+e.imgBig},null,8,["src"])],8,["data-fancybox","href"])]),Object(a["h"])("ul",X,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(e.thumbnails,(function(e){return Object(a["r"])(),Object(a["d"])("li",{key:e.id,class:"mdl-product__images-kitchen-thumbnail"},[Object(a["h"])("a",{"data-fancybox":"gallery"+e.link,href:"images/product/spalni/"+e.imgBig},[Object(a["h"])("img",{src:"images/product/spalni/"+e.imgSmall},null,8,["src"])],8,["data-fancybox","href"])])})),128))])])]),Object(a["h"])("div",$,[Object(a["h"])("h2",null,"Спальня "+Object(a["B"])(e.name),1),Object(a["h"])("div",{class:"mdl-product__description",innerHTML:e.text},null,8,["innerHTML"]),Object(a["h"])("div",Y,[G,Object(a["h"])("span",null,"от "+Object(a["B"])(e.price)+" руб.",1)]),P])])])],8,["id"])])})),128))])])])}n("4001");var W=n("0b81"),I={name:"SpalniMain",components:{Carousel:W["a"],Slide:W["d"],Pagination:W["c"],Navigation:W["b"]},data:function(){return{bedrooms:[{name:"Верона",price:"86 300",link:"verona-sp",imgBig:"verona/verona-1.jpg",thumbnails:[{imgSmall:"verona/verona-2_small.jpg",imgBig:"verona/verona-2.jpg",link:"verona-sp"}],slides:[{img:"verona/verona-1.jpg"},{img:"verona/verona-2.jpg"}],text:"<p>Как наполнить дом атмосферой легкости и свободы, ощутить ласковое итальянской солнце, почувствовать дуновение морского бриза?</p><p>С коллекцией «Верона» мечты становятся реальностью!</p><p>Созданная специально для ценителей классики, мебель имеет изысканное цветовое решение и широкий выбор модулей. Это поможет оформить вашу спальню в лучших традициях итальянского стиля.</p>"},{name:"Александрия",price:"120 665",link:"aleksandriya",imgBig:"aleksandriya/aleksandriya-1.jpg",thumbnails:[{imgSmall:"aleksandriya/aleksandriya-2_small.jpg",imgBig:"aleksandriya/aleksandriya-2.jpg",link:"valenciya"}],slides:[{img:"aleksandriya/aleksandriya-1.jpg"},{img:"aleksandriya/aleksandriya-2.jpg"}],text:"<p>Мебель из коллекции «Александрия» сочетает в себе простоту и строгость античной классики и призвана подчеркнуть Ваш статус и чувство стиля.</p><p>Бескомпромиссный подход к выбору материалов и фурнитуры сделал линейку настоящим флагманом среди всей нашей мебели.</p>"},{name:"Палермо",price:"63 280",link:"palermo",imgBig:"palermo/palermo-1.jpg",thumbnails:[{imgSmall:"palermo/palermo-2_small.jpg",imgBig:"palermo/palermo-2.jpg",link:"palermo"},{imgSmall:"palermo/palermo-3_small.jpg",imgBig:"palermo/palermo-3.jpg",link:"palermo"}],slides:[{img:"palermo/palermo-1.jpg"},{img:"palermo/palermo-2.jpg"},{img:"palermo/palermo-3.jpg"}],text:"<p>Как создать в доме атмосфету созвучную нашим чувствам, передать то, что трудно выразить словами? Обустроить уголок, где два сердца бьются в унисон? Может новая спальня «Палермо» вдохновит вас на самые нежные чувства.</p><p>Классический дизайн которой, в сочетании с проверенной надежностью, подарит вам ощущение простора и безмятежности.</p>"},{name:"Стелла",price:"75 200",link:"stella-sp",imgBig:"stella/stella-1.jpg",thumbnails:[{imgSmall:"stella/stella-2_small.jpg",imgBig:"stella/stella-2.jpg",link:"stella-sp"}],slides:[{img:"stella/stella-1.jpg"},{img:"stella/stella-2.jpg"}],text:'<p>Если вам по душе минималистичное оформление, спальни коллекции "Стелла" – решение специально для вас.</p><p>Благородная палитра цветов под дерево, простота форм, отсутствие украшений – то, что сделает ваше жилье стильным и создаст ощущение простора и легкости.</p><p>Мебель гармонично «встроится» в любой дизайн, в особенности хорошо сочетаясь с элементами экостиля и хай-тека.</p>'}]}}};n("8879");I.render=R;var J=I,U=n("b18d"),K=n("b261"),Q=n("0f2d"),V=n("fd2d"),Z=n("fb08"),ee={components:{Header:_["a"],Benefits:y["a"],Calculate:k["a"],Designer:U["a"],Warranty:K["a"],Director:Q["a"],Footer:V["a"],Button:Z["a"],SpalniMain:J}};ee.render=f;t["default"]=ee},9911:function(e,t,n){"use strict";var a=n("23e7"),c=n("857a"),l=n("af03");a({target:"String",proto:!0,forced:l("link")},{link:function(e){return c(this,"a","href",e)}})},af03:function(e,t,n){var a=n("d039");e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b0c0:function(e,t,n){var a=n("83ab"),c=n("9bf2").f,l=Function.prototype,s=l.toString,i=/^\s*function ([^ (]*)/,r="name";a&&!(r in l)&&c(l,r,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},b18d:function(e,t,n){"use strict";var a=n("7a23"),c=n("e495"),l=n.n(c),s=n("ecd0"),i=n.n(s),r=n("0862"),o=n.n(r),u=Object(a["H"])("data-v-59d71a15");Object(a["u"])("data-v-59d71a15");var d={class:"designer"},b={class:"wrap designer__wrap"},p={class:"designer__header"},j=Object(a["h"])("div",{class:"designer__photo"},[Object(a["h"])("img",{src:l.a,alt:"Дизайнер мебельной фабрики Рось"})],-1),O={class:"designer__title"},m=Object(a["g"])("Нравится модель, но хочется немного иначе?"),h=Object(a["h"])("p",{class:"designer__description"},[Object(a["g"])("К вашим услугам "),Object(a["h"])("span",null,"профессиональный дизайнер мебели со стажем 8 лет"),Object(a["g"])(" и более 800 реализованными проектами!")],-1),v={class:"designer__bottom"},g={class:"quote designer__quote"},f=Object(a["h"])("img",{src:i.a,alt:"",class:"quote__icon"},null,-1),_={class:"quote__text"},y=Object(a["g"])("Порой хочется всего и сразу. И чтобы к цвету любимого платья подходило, уж я то знаю)) Но это довольно сложно, особенно в небольшом помещении. Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство правильно!"),k=Object(a["h"])("p",{class:"quote__name"},"Татьяна, служба заботы о клиентах",-1),w=Object(a["h"])("div",{class:"designer__button"},[Object(a["h"])("a",{onclick:"ym(41430234,'reachGoal','click--designer-button'); return true;",href:"#designer-popup",class:"button button__designer open-popup-link"},[Object(a["h"])("span",{class:"button__text"},"Помощь дизайнера"),Object(a["h"])("img",{src:o.a,class:"button__icon"})])],-1);Object(a["s"])();var x=u((function(e,t,n,c,l,s){return Object(a["r"])(),Object(a["d"])("section",d,[Object(a["h"])("div",b,[Object(a["h"])("div",p,[j,Object(a["h"])("div",null,[Object(a["h"])("h3",O,[Object(a["y"])(e.$slots,"title",{},(function(){return[m]}),{},!0)]),h])]),Object(a["h"])("div",v,[Object(a["h"])("div",g,[f,Object(a["h"])("p",_,[Object(a["y"])(e.$slots,"text",{},(function(){return[y]}),{},!0)]),k]),w])])])})),S={name:"Designer"};n("b485");S.render=x,S.__scopeId="data-v-59d71a15";t["a"]=S},b485:function(e,t,n){"use strict";n("7762")},e495:function(e,t,n){e.exports=n.p+"img/designer__photo.adb96199.png"},ecd0:function(e,t,n){e.exports=n.p+"img/designer-quote__icon.04df6c12.svg"},f0f3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-10a693c2.9cea485a.js.map