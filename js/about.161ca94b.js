(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b81":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return p})),i.d(t,"d",(function(){return b}));var n=i("7a23");
/**
 * Vue 3 Carousel 0.1.19
 * (c) 2021
 * @license MIT
 */function a(){return new Proxy({value:0,read:0},{get(e,t){return t in e?"read"===t?e[t]:e[t]++:0},set(e,t,i){return e[t]=Math.max(i,0),!0}})}function l(e,t){let i;return function(...n){i&&clearTimeout(i),i=setTimeout(()=>{e(...n),i=null},t)}}function c(e,t){let i;return function(...n){const a=this;i||(e.apply(a,n),i=!0,setTimeout(()=>i=!1,t))}}var s=Object(n["i"])({name:"Carousel",props:{itemsToShow:{default:1,type:Number},currentSlide:{default:0,type:Number},wrapAround:{default:!1,type:Boolean},snapAlign:{default:"center",validator(e){return["start","end","center"].includes(e)}},transition:{default:300,type:Number},settings:{default(){return{}},type:Object},breakpoints:{default:null,type:Object},autoplay:{default:0,type:Number}},setup(e,{slots:t}){const i=Object(n["w"])(null),s=Object(n["w"])([]),r=Object(n["w"])([]),o=Object(n["w"])(0),u=Object(n["w"])(1),b=a(),p=Object.assign(Object.assign({},e),e.settings),d=Object(n["w"])(Object.assign({},p.breakpoints));delete p.settings,delete p.breakpoints;const g=Object(n["v"])(Object.assign({},p)),j=Object(n["w"])(g.currentSlide),m=Object(n["w"])(0),O=Object(n["w"])(0);function v(){const e=Object.keys(d.value).map(e=>Number(e)).sort((e,t)=>+t-+e);let t=Object.assign({},p);e.some(e=>{const i=window.matchMedia(`(min-width: ${e}px)`).matches;return!!i&&(t=Object.assign(Object.assign({},t),d.value[e]),!0)}),Object.keys(t).forEach(e=>g[e]=t[e])}Object(n["t"])("config",g),Object(n["t"])("slidesBuffer",r),Object(n["t"])("slidesCount",u),Object(n["t"])("currentSlide",j),Object(n["t"])("slidesCounter",b);const h=l(()=>{d.value&&v(),f()},16);function _(){setInterval(()=>{F()},g.autoplay)}function f(){if(!i.value)return;const e=i.value.getBoundingClientRect();o.value=e.width/g.itemsToShow}function y(){u.value=s.value.length,O.value=Math.ceil((u.value-1)/2),j.value=Math.min(u.value-1,j.value)}function k(){const e=[...Array(u.value).keys()];if(g.wrapAround){const t=j.value+O.value+1;for(let i=0;i<t;i++)e.push(Number(e.shift()))}r.value=e}Object(n["p"])(()=>{d.value&&v(),f(),g.autoplay>0&&_(),window.addEventListener("resize",h,{passive:!0})});let w=!1;const x={x:0,y:0},S={x:0,y:0},B=Object(n["v"])({x:0,y:0}),z=Object(n["w"])(!1),M=c(e=>{w||e.preventDefault(),S.x=w?e.touches[0].clientX:e.clientX,S.y=w?e.touches[0].clientY:e.clientY;const t=S.x-x.x,i=S.y-x.y;B.y=i,B.x=t},16);function L(e){e.preventDefault(),w="touchstart"===e.type,!w&&0!==e.button||T.value||(z.value=!0,x.x=w?e.touches[0].clientX:e.clientX,x.y=w?e.touches[0].clientY:e.clientY,document.addEventListener(w?"touchmove":"mousemove",M),document.addEventListener(w?"touchend":"mouseup",A))}function A(){z.value=!1;const e=.4*Math.sign(B.x),t=Math.round(B.x/o.value+e);let i=j.value-t;g.wrapAround||(i=Math.max(Math.min(i,u.value-1),0)),C(i),B.x=0,B.y=0,document.removeEventListener(w?"touchmove":"mousemove",M),document.removeEventListener(w?"touchend":"mouseup",A)}const T=Object(n["w"])(!1);function C(e){if(j.value===e||T.value)return;const t=u.value-1;return e>t?C(e-u.value):e<0?C(e+u.value):(T.value=!0,m.value=j.value,j.value=e,void setTimeout(()=>{g.wrapAround&&k(),T.value=!1},g.transition))}function F(){const e=j.value>=u.value-1;e?g.wrapAround&&C(0):C(j.value+1)}function q(){const e=j.value<=0;e?g.wrapAround&&C(u.value-1):C(j.value-1)}const D={slideTo:C,next:F,prev:q};Object(n["t"])("nav",D);const E=Object(n["b"])(()=>{let e=r.value.indexOf(j.value);if("center"===g.snapAlign&&(e-=(g.itemsToShow-1)/2),"end"===g.snapAlign&&(e-=g.itemsToShow-1),!g.wrapAround){const t=u.value-g.itemsToShow,i=0;e=Math.max(Math.min(e,t),i)}return e}),N=Object(n["b"])(()=>{const e=B.x-E.value*o.value;return{transform:`translateX(${e}px)`,transition:(T.value?g.transition:0)+"ms"}}),G=Object(n["v"])({slideWidth:o,slidesCount:u,currentSlide:j}),H=t.default||t.slides,X=t.addons;return Object(n["E"])(()=>{var e;const t=(null===H||void 0===H?void 0:H(G))||[];s.value=(null===(e=t[0])||void 0===e?void 0:e.children)||[];const i=u.value!==s.value.length;i&&(y(),k()),b.read&&(b.value=s.value.length-1)}),k(),()=>{const e=(null===H||void 0===H?void 0:H(G))||[],t=(null===X||void 0===X?void 0:X(G))||[],a=Object(n["k"])("ol",{class:"carousel__track",style:N.value,onMousedown:L,onTouchstart:L},e),l=Object(n["k"])("div",{class:"carousel__viewport"},a);return Object(n["k"])("section",{ref:i,class:"carousel","aria-label":"Gallery"},[l,t])}}});const r={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},o=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const i=r[t],a=Object(n["k"])("path",{d:i});e.title;const l=Object(n["k"])("title",null,t);return Object(n["k"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[l,a])};o.props={name:String,title:String};const u=(e,{slots:t,attrs:i})=>{const{next:a,prev:l}=t,c=Object(n["l"])("nav",{}),s=Object(n["k"])("button",{class:["carousel__prev",null===i||void 0===i?void 0:i.class],onClick:c.prev},(null===l||void 0===l?void 0:l())||Object(n["k"])(o,{name:"arrowLeft"})),r=Object(n["k"])("button",{class:["carousel__next",null===i||void 0===i?void 0:i.class],onClick:c.next},(null===a||void 0===a?void 0:a())||Object(n["k"])(o,{name:"arrowRight"}));return[s,r]};var b=Object(n["i"])({name:"CarouselSlide",props:{order:{type:Number,default:1}},setup(e,{slots:t}){const i=Object(n["l"])("config",Object(n["v"])({})),a=Object(n["l"])("slidesBuffer",Object(n["w"])([])),l=Object(n["l"])("slidesCounter"),c=l.value,s=Object(n["w"])(c);function r(){s.value=a.value.indexOf(c)}i.wrapAround&&(r(),Object(n["E"])(r));const o=Object(n["b"])(()=>{const e=i.itemsToShow,t=1/e*100+"%";return{width:t,order:s.value.toString()}});return()=>{var e;return Object(n["k"])("li",{style:o.value,class:"carousel__slide"},null===(e=t.default)||void 0===e?void 0:e.call(t))}}});const p=()=>{const e=Object(n["l"])("slidesCount",Object(n["w"])(1)),t=Object(n["l"])("currentSlide",Object(n["w"])(1)),i=Object(n["l"])("nav",{});function a(e){i.slideTo(e)}const l=[];for(let c=0;c<e.value;c++){const e=Object(n["k"])("button",{class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":t.value===c},onClick:()=>a(c)}),i=Object(n["k"])("li",{class:"carousel__pagination-item",key:c},e);l.push(i)}return Object(n["k"])("ol",{class:"carousel__pagination"},l)}},"3c38":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),a={class:"main"},l={class:"hero-full"},c={class:"wrap hero-full__wrap"},s={class:"hero-full__col"},r=Object(n["h"])("div",{class:"hero-full__col_cover",style:{"background-image":"url('images/hero/gostinaya-liberty__hero.jpg')"}},[Object(n["h"])("div",{class:"cover"})],-1),o={class:"hero-full__info"},u=Object(n["h"])("h1",{class:"h1_desktop"},[Object(n["g"])("Гостиные "),Object(n["h"])("span",null,"по индивидуальному проекту"),Object(n["g"])(" от Фабрики интерьерной мебели Рось")],-1),b=Object(n["h"])("h1",{class:"h1_mobile"},[Object(n["h"])("span",null,"Гостиные по индивидуальному проекту"),Object(n["g"])(" от Фабрики интерьерной мебели Рось")],-1),p=Object(n["h"])("p",null,"Покрытие итальянской эмалью Sayerlack с соблюдением технологического процесса, что обеспечивает максимальную износостойкость лакокрасочного покрытия, и как следствие практичность и долговечность изделий.",-1),d={class:"hero__button"},g=Object(n["g"])("Рассчитаем гостиную "),j=Object(n["h"])("br",null,null,-1),m=Object(n["g"])(" по эскизам"),O=Object(n["h"])("div",{class:"hero-full__col"},[Object(n["h"])("div",{class:"hero-full__cover",style:{"background-image":"url('images/hero/gostinaya-liberty__hero.jpg')"}})],-1),v=Object(n["g"])("Нравится модель гостиной, но хочется иначе?"),h=Object(n["g"])("Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство в вашей гостиной правильно!");function _(e,t,i,_,f,y){var k=Object(n["z"])("Header"),w=Object(n["z"])("Button"),x=Object(n["z"])("Benefits"),S=Object(n["z"])("MainGostinaya"),B=Object(n["z"])("Calculate"),z=Object(n["z"])("Designer"),M=Object(n["z"])("Warranty"),L=Object(n["z"])("Director"),A=Object(n["z"])("Footer");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(k),Object(n["h"])("main",a,[Object(n["h"])("section",l,[Object(n["h"])("div",c,[Object(n["h"])("div",s,[r,Object(n["h"])("div",o,[u,b,p,Object(n["h"])("div",d,[Object(n["h"])(w,null,{"modal-title":Object(n["F"])((function(){return[g,j,m]})),_:1})])])]),O])]),Object(n["h"])(x),Object(n["h"])(S),Object(n["h"])(B),Object(n["h"])(z,null,{title:Object(n["F"])((function(){return[v]})),text:Object(n["F"])((function(){return[h]})),_:1}),Object(n["h"])(M),Object(n["h"])(L),Object(n["h"])(A)])])}var f=i("0418"),y=i("3fd7"),k=i("b18d"),w=i("1a34"),x=i("b261"),S=i("0f2d"),B=i("fd2d"),z=i("fb08"),M=(i("b0c0"),i("9911"),i("0862")),L=i.n(M),A={class:"product"},T={class:"product-name"},C=Object(n["g"])("Коллекция гостиных"),F={class:"wrap"},q={class:"product-items"},D={class:"carousel__item"},E={class:"product-info"},N={class:"product-name"},G={class:"product-price"},H={class:"mdl"},X={class:"mdl-row"},$={class:"mdl-col"},V={class:"mdl-product__images"},Y={class:"mdl-product__images_big"},I={class:"mdl-product__images-thumbnails"},P={class:"mdl-col"},R={class:"mdl-product__price"},W=Object(n["h"])("span",null,"Цена: ",-1),J=Object(n["h"])("div",{class:"mdl-product__button"},[Object(n["h"])("a",{"data-fancybox":"","data-src":"#proizvodstvo",href:"javascript:;",class:"button"},[Object(n["h"])("span",{class:"button__text"},"Заказать гостиную"),Object(n["h"])("img",{src:L.a,class:"button__icon"})]),Object(n["h"])("div",{style:{display:"none"},id:"proizvodstvo",class:"white-popup"},[Object(n["h"])("div",{class:"white-popup__title"},"Заказать гостиную"),Object(n["h"])("form",{action:"mailfile.php",method:"POST",enctype:"multipart/form-data",class:"form white-popup__form eskiz-form"},[Object(n["h"])("input",{type:"text",name:"user_name",class:"form__input",placeholder:"Ваше Имя"}),Object(n["h"])("input",{type:"phone",name:"user_phone",class:"form__input",placeholder:"Ваш телефон*",required:""}),Object(n["h"])("textarea",{name:"message",cols:"30",rows:"4",placeholder:"Ваш вопрос",class:"form__input form__textarea"}),Object(n["h"])("input",{type:"hidden",name:"source",class:"source",value:""}),Object(n["h"])("input",{type:"hidden",name:"term",class:"term",value:""}),Object(n["h"])("input",{type:"hidden",name:"medium",class:"medium",value:""}),Object(n["h"])("input",{type:"hidden",name:"campaign",class:"campaign",value:""}),Object(n["h"])("input",{type:"hidden",name:"project_name",value:"Мебель на заказ"}),Object(n["h"])("input",{type:"hidden",name:"admin_email",value:"kuhni-ros@yandex.ru"}),Object(n["h"])("input",{type:"hidden",name:"form_subject",value:"Заказать гостиную"}),Object(n["h"])("button",{onclick:"ym(41430234,'reachGoal','eskizy_done'); return true;",type:"submit",class:"button button__popup"},[Object(n["h"])("span",{class:"button__text"},"Заказать"),Object(n["h"])("img",{src:L.a,class:"button__icon"})])]),Object(n["h"])("p",{class:"form__confidence white-popup__confidence"},"Нажимая кнопку вы соглашаетесь с политикой конфиденциальности")])],-1);function U(e,t,i,a,l,c){var s=Object(n["z"])("slide"),r=Object(n["z"])("navigation"),o=Object(n["z"])("pagination"),u=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])("section",A,[Object(n["h"])("h2",T,[Object(n["y"])(e.$slots,"title",{},(function(){return[C]}))]),Object(n["h"])("div",F,[Object(n["h"])("ul",q,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.halls,(function(e){return Object(n["r"])(),Object(n["d"])("li",{class:"product-item",key:e.id},[Object(n["h"])(u,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(r),Object(n["h"])(o)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(e.slides,(function(e){return Object(n["r"])(),Object(n["d"])(s,{key:e},{default:Object(n["F"])((function(){return[Object(n["h"])("div",D,[Object(n["h"])("img",{src:"images/product/gostinye/"+e.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:2},1024),Object(n["h"])("div",E,[Object(n["h"])("h3",N,"Гостиная "+Object(n["B"])(e.name),1),Object(n["h"])("span",G,"от "+Object(n["B"])(e.price)+" руб.",1)]),Object(n["h"])("a",{"data-fancybox":"","data-src":"#"+e.link,href:"javascript:;",class:"product-description"},"Подробное описание",8,["data-src"]),Object(n["h"])("div",{style:{display:"none"},id:e.link},[Object(n["h"])("div",H,[Object(n["h"])("div",X,[Object(n["h"])("div",$,[Object(n["h"])("div",V,[Object(n["h"])("div",Y,[Object(n["h"])("a",{"data-fancybox":"gallery"+e.link,href:"images/product/gostinye/"+e.imgBig},[Object(n["h"])("img",{src:"images/product/gostinye/"+e.imgBig},null,8,["src"])],8,["data-fancybox","href"])]),Object(n["h"])("ul",I,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(e.thumbnails,(function(e){return Object(n["r"])(),Object(n["d"])("li",{key:e.id,class:"mdl-product__images-kitchen-thumbnail"},[Object(n["h"])("a",{"data-fancybox":"gallery"+e.link,href:"images/product/gostinye/"+e.imgBig},[Object(n["h"])("img",{src:"images/product/gostinye/"+e.imgSmall},null,8,["src"])],8,["data-fancybox","href"])])})),128))])])]),Object(n["h"])("div",P,[Object(n["h"])("h2",null,"Гостиная "+Object(n["B"])(e.name),1),Object(n["h"])("div",{class:"mdl-product__description",innerHTML:e.text},null,8,["innerHTML"]),Object(n["h"])("div",R,[W,Object(n["h"])("span",null,"от "+Object(n["B"])(e.price)+" руб.",1)]),J])])])],8,["id"])])})),128))])])])}i("4001");var K=i("0b81"),Q={name:"MainGostinaya",components:{Carousel:K["a"],Slide:K["d"],Pagination:K["c"],Navigation:K["b"]},data:function(){return{halls:[{name:"Либерти",price:"75 880",link:"liberti",imgBig:"liberti/liberti-8_big.jpg",thumbnails:[{imgSmall:"liberti/liberti-1_small.png",imgBig:"liberti/liberti-1_big.jpg",link:"liberti"},{imgSmall:"liberti/liberti-2_small.png",imgBig:"liberti/liberti-2_big.jpg",link:"liberti"},{imgSmall:"liberti/liberti-3_small.png",imgBig:"liberti/liberti-3_big.jpg",link:"liberti"},{imgSmall:"liberti/liberti-4_small.png",imgBig:"liberti/liberti-4_big.jpg",link:"liberti"}],slides:[{img:"liberti/liberti-8_big.jpg"},{img:"liberti/liberti-1_big.jpg"},{img:"liberti/liberti-2_big.jpg"},{img:"liberti/liberti-3_big.jpg"},{img:"liberti/liberti-4_big.jpg"}],text:"<p>У вашей гостиной множество ролей: сегодня это домашний кинотеатр, завтра столовая, библиотека или кабинет.</p><p>Как организовать пространство с таким количеством функций, сохранив целостность и гармонию?</p><p>Коллекция мебели «Либерти» поможет решить эту задачу.</p><p>Всевозможные модули с ритмичным сочетанием высот и отдельно стоящие предметы органичны в новом прочтении классического стиля.</p>"},{name:"Сканди",price:"88 205",link:"scandi",imgBig:"scandi/scandi-1_big.jpg",thumbnails:[{imgSmall:"scandi/scandi-2_small.png",imgBig:"scandi/scandi-2_big.jpg",link:"scandi"}],slides:[{img:"scandi/scandi-1_big.jpg"},{img:"scandi/scandi-2_big.jpg"}],text:"<p>В основе серии «Сканди» лежит современный подход к организации жилого пространства, который позволяет сочетать лаконичность внешнего вида, функциональность и удобство хранения с ощущением домашнего тепла и уюта.</p><p>Предложенный в рамках серии выбор модулей и фасадов позволяет с одной стороны - создавать уникальные цветовые решения, а с другой - оставаться в рамках запланированного бюджета.</p>"},{name:"Лаура",price:"99 300",link:"laura",imgBig:"laura/laura-1_big.jpg",thumbnails:[{imgSmall:"laura/laura-2_small.png",imgBig:"laura/laura-2_big.jpg",link:"laura"},{imgSmall:"laura/laura-4_small.png",imgBig:"laura/laura-4_big.jpg",link:"laura"}],slides:[{img:"laura/laura-1_big.jpg"},{img:"laura/laura-2_big.jpg"},{img:"laura/laura-4_big.jpg"}],text:"<p>Классический интерьер гостиной «Лаура» – это сочетание стиля, изысканности, гармонии и роскоши.</p><p>Выбирая классический дизайн, вы подчеркиваете безупречный вкус и эстетичность, а также создаете уютную и комфортную атмосферу в гостиной.</p><p>Все модули для гостиной «Лаура» привлекают к себе внимание благодаря безупречности форм и силуэтов, ведь каждая их линия элегантна и проста.</p>"},{name:"Рось",price:"88 205",link:"ros",imgBig:"ros/ros-3.jpg",thumbnails:[{imgSmall:"ros/ros-4_small.png",imgBig:"ros/ros-4.jpg",link:"ros"},{imgSmall:"ros/ros-5_small.png",imgBig:"ros/ros-5.jpg",link:"ros"},{imgSmall:"ros/ros-6_small.png",imgBig:"ros/ros-6jpg",link:"ros"},{imgSmall:"ros/ros-7_small.png",imgBig:"ros/ros-7.jpg",link:"ros"},{imgSmall:"ros/ros-8_small.png",imgBig:"ros/ros-8.jpg",link:"ros"},{imgSmall:"ros/ros-9_small.png",imgBig:"ros/ros-9.jpg",link:"ros"}],slides:[{img:"ros/ros-3.jpg"},{img:"ros/ros-4.jpg"},{img:"ros/ros-5.jpg"},{img:"ros/ros-6.jpg"},{img:"ros/ros-7.jpg"},{img:"ros/ros-8.jpg"},{img:"ros/ros-9.jpg"}],text:"<p>Как добиться того, чтобы новая мебель гармонично вписалась в уже сложившийся интерьер, где тщательно подобраны предметы, все самое необходимое и ничего лишнего, а каждой вещице нашлось бы свое место?</p><p>Решение этой задачи можно найти в коллекции мебели для гостиной «Рось», модульная система которой поможет создать любую композицию, сделав ваш дом неповторимым.</p><p>Всегда актуальный классический стиль и различные текстуры под натуральное дерево, позволят лаконично вписаться мебели в ваш интерьер.</p>"},{name:"Валенсия",price:"65 000",link:"valensiya-g",imgBig:"valensiya/valensiya-1.jpg",thumbnails:[{imgSmall:"valensiya/valensiya-2_small.png",imgBig:"valenciya/valenciya-2.jpg",link:"valensiya-g"},{imgSmall:"valensiya/valensiya-3_small.png",imgBig:"valensiya/valensiya-3.jpg",link:"valensiya-g"},{imgSmall:"valensiya/valensiya-4_small.png",imgBig:"valensiya/valensiya-2.jpg",link:"valensiya-g"},{imgSmall:"valensiya/valensiya-5_small.png",imgBig:"valensiya/valensiya-3.jpg",link:"valensiya-g"}],slides:[{img:"valensiya/valensiya-1.jpg"},{img:"valensiya/valensiya-2.jpg"},{img:"valensiya/valensiya-3.jpg"},{img:"valensiya/valensiya-4.jpg"},{img:"valensiya/valensiya-5.jpg"}],text:"<p>Как выбрать мебель, которая отвечала бы множеству ваших вопросов? Многофункциональность, лаконичность форм, многообразие цветовых решений, сдержанность в декоре и акцент на фурнитуру.</p><p>Все это – коллекция «Валенсия», созданная на основе хорошо знакомой нашим покупателям, модульной система «Рось». Функциональность и востребованность которой уже проверена временем.</p>"}]}}};Q.render=U;var Z=Q,ee={components:{Header:f["a"],Benefits:y["a"],Designer:k["a"],Calculate:w["a"],Warranty:x["a"],Director:S["a"],Footer:B["a"],Button:z["a"],MainGostinaya:Z},metaInfo:{title:"Vue App",meta:[{vmid:"description",property:"description",content:"Vue App"},{vmid:"og:title",property:"og:title",content:"Vue App"},{vmid:"og:description",property:"og:description",content:"Vue App"}]}};i("5543");ee.render=_;t["default"]=ee},4001:function(e,t,i){},5543:function(e,t,i){"use strict";i("f05f")},7762:function(e,t,i){},"857a":function(e,t,i){var n=i("1d80"),a=/"/g;e.exports=function(e,t,i,l){var c=String(n(e)),s="<"+t;return""!==i&&(s+=" "+i+'="'+String(l).replace(a,"&quot;")+'"'),s+">"+c+"</"+t+">"}},9911:function(e,t,i){"use strict";var n=i("23e7"),a=i("857a"),l=i("af03");n({target:"String",proto:!0,forced:l("link")},{link:function(e){return a(this,"a","href",e)}})},af03:function(e,t,i){var n=i("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b0c0:function(e,t,i){var n=i("83ab"),a=i("9bf2").f,l=Function.prototype,c=l.toString,s=/^\s*function ([^ (]*)/,r="name";n&&!(r in l)&&a(l,r,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},b18d:function(e,t,i){"use strict";var n=i("7a23"),a=i("e495"),l=i.n(a),c=i("ecd0"),s=i.n(c),r=i("0862"),o=i.n(r),u=Object(n["H"])("data-v-59d71a15");Object(n["u"])("data-v-59d71a15");var b={class:"designer"},p={class:"wrap designer__wrap"},d={class:"designer__header"},g=Object(n["h"])("div",{class:"designer__photo"},[Object(n["h"])("img",{src:l.a,alt:"Дизайнер мебельной фабрики Рось"})],-1),j={class:"designer__title"},m=Object(n["g"])("Нравится модель, но хочется немного иначе?"),O=Object(n["h"])("p",{class:"designer__description"},[Object(n["g"])("К вашим услугам "),Object(n["h"])("span",null,"профессиональный дизайнер мебели со стажем 8 лет"),Object(n["g"])(" и более 800 реализованными проектами!")],-1),v={class:"designer__bottom"},h={class:"quote designer__quote"},_=Object(n["h"])("img",{src:s.a,alt:"",class:"quote__icon"},null,-1),f={class:"quote__text"},y=Object(n["g"])("Порой хочется всего и сразу. И чтобы к цвету любимого платья подходило, уж я то знаю)) Но это довольно сложно, особенно в небольшом помещении. Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство правильно!"),k=Object(n["h"])("p",{class:"quote__name"},"Татьяна, служба заботы о клиентах",-1),w=Object(n["h"])("div",{class:"designer__button"},[Object(n["h"])("a",{onclick:"ym(41430234,'reachGoal','click--designer-button'); return true;",href:"#designer-popup",class:"button button__designer open-popup-link"},[Object(n["h"])("span",{class:"button__text"},"Помощь дизайнера"),Object(n["h"])("img",{src:o.a,class:"button__icon"})])],-1);Object(n["s"])();var x=u((function(e,t,i,a,l,c){return Object(n["r"])(),Object(n["d"])("section",b,[Object(n["h"])("div",p,[Object(n["h"])("div",d,[g,Object(n["h"])("div",null,[Object(n["h"])("h3",j,[Object(n["y"])(e.$slots,"title",{},(function(){return[m]}),{},!0)]),O])]),Object(n["h"])("div",v,[Object(n["h"])("div",h,[_,Object(n["h"])("p",f,[Object(n["y"])(e.$slots,"text",{},(function(){return[y]}),{},!0)]),k]),w])])])})),S={name:"Designer"};i("b485");S.render=x,S.__scopeId="data-v-59d71a15";t["a"]=S},b485:function(e,t,i){"use strict";i("7762")},e495:function(e,t,i){e.exports=i.p+"img/designer__photo.adb96199.png"},ecd0:function(e,t,i){e.exports=i.p+"img/designer-quote__icon.04df6c12.svg"},f05f:function(e,t,i){}}]);
//# sourceMappingURL=about.161ca94b.js.map