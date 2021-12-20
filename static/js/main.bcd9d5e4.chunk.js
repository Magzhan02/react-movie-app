(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,a){e.exports={genres:"Genres_genres__LjDZ9"}},129:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(34),s=a.n(r),i=a(48),o=(a(129),a(19)),l=a(8),u=a(60),d=a.n(u),j=a(1);var p=function(){var e=c.a.useState("Trending"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:d.a.logo,children:[Object(j.jsx)("img",{width:80,height:80,src:"/img/movie.png",alt:"logo"}),Object(j.jsx)("h1",{children:"Movies Hub"})]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{onClick:function(e){return n(e.target.textContent)},children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("li",{className:"Trending"===a?d.a.active:"",children:"Trending"})}),Object(j.jsx)(i.b,{to:"/movies",children:Object(j.jsx)("li",{className:"Movies"===a?d.a.active:"",children:"Movies"})}),Object(j.jsx)(i.b,{to:"/tvSeries",children:Object(j.jsx)("li",{className:"TV Series"===a?d.a.active:"",children:"TV Series"})}),Object(j.jsx)(i.b,{to:"/search",children:Object(j.jsx)("li",{className:"Search"===a?d.a.active:"",children:"Search"})})]})})]})},b=a(25),f=a(20),h=a.n(f),v=a(31),O=a(32),m=a.n(O),x=a(14),g=a(226),_=a(108),w=a.n(_);var y=function(e){var t=e.type,a=e.selectedGenre,n=e.setSelectedGenre,r=e.genres,s=e.setGenres,i=function(){var e=Object(v.a)(h.a.mark((function e(){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/genre/".concat(t,"/list?api_key=").concat("2d2bfeef1e819ffe74edc1a51ff6c924","&language=en-US"));case 2:a=e.sent,n=a.data,s(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){return i(),function(){s([])}}),[]),Object(j.jsx)("div",{className:w.a.genres,children:Object(j.jsxs)("div",{style:{padding:"6px"},children:[a&&a.map((function(e){return Object(j.jsx)(g.a,{label:e.name,color:"primary",clickable:!0,onDelete:function(){return function(e){n(a.filter((function(t){return t.id!==e.id}))),s([].concat(Object(x.a)(r),[e]))}(e)},style:{margin:2}},e.id)})),r&&r.map((function(e){return Object(j.jsx)(g.a,{label:e.name,style:{margin:2},clickable:!0,onClick:function(){return function(e){n([].concat(Object(x.a)(a),[e])),s(r.filter((function(t){return t.id!==e.id})))}(e)}},e.id)}))]})})},S=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},N=a(53),C=a.n(N),k=a(213),P=a(109),M=a.n(P);var T=function(e){var t=e.title,a=e.name,n=e.id,r=e.overview,s=e.release_date,i=e.first_air_date,o=e.vote_average,u=e.poster_path,d=e.backdrop_path,p=e.setModalVisible,b=e.media_type,f=c.a.useState(),O=Object(l.a)(f,2),x=O[0],g=O[1],_=c.a.useRef(),w=function(){var e=Object(v.a)(h.a.mark((function e(){var t,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("\n    https://api.themoviedb.org/3/".concat(b,"/").concat(n,"/videos?api_key=").concat("2d2bfeef1e819ffe74edc1a51ff6c924","&language=en-US"));case 2:a=e.sent,c=a.data,g(null===(t=c.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){w(),document.onclick=function(e){e.path.includes(_.current)||p(!1)}}),[]),Object(j.jsx)("div",{className:C.a.over,children:Object(j.jsx)("div",{className:C.a.wrapper,children:Object(j.jsxs)("div",{className:C.a.content,ref:_,children:[Object(j.jsx)("img",{src:"http://image.tmdb.org/t/p/w1280/"+d||u,alt:t||a}),Object(j.jsxs)("div",{className:C.a.info,children:[Object(j.jsx)("h2",{children:t||a}),Object(j.jsxs)("div",{className:C.a.overview,children:[Object(j.jsx)("h3",{children:"Overview:"}),Object(j.jsx)("p",{children:r})]}),Object(j.jsx)("div",{className:C.a.trailer,children:Object(j.jsx)(k.a,{variant:"contained",startIcon:Object(j.jsx)(M.a,{}),style:{color:"white",backgroundColor:"red",width:"230px",height:"60px"},href:"https://www.youtube.com/watch?v=".concat(x),children:"Watch the Trailer"})}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("b",{children:[" Release data: ",s||i||"..."]}),Object(j.jsxs)("b",{children:["Vote average: ",o||"..."]})]})]})]})})})},E=a(68),F=a.n(E);var G=function(e){var t=e.title,a=e.name,n=e.release_date,r=e.first_air_date,s=e.vote_average,i=e.backdrop_path,o=e.poster_path,u=e.media_type,d=c.a.useState(!1),p=Object(l.a)(d,2),f=p[0],h=p[1];return Object(j.jsxs)("main",{className:F.a.card,onClick:function(){h(!0)},children:[Object(j.jsx)("div",{className:F.a.vote,children:s}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:"http://image.tmdb.org/t/p/w1280/"+o||i,alt:"poster"}),Object(j.jsxs)("div",{className:F.a.info,children:[Object(j.jsx)("b",{children:t||a}),Object(j.jsxs)("div",{className:F.a.media,children:[Object(j.jsx)("span",{children:"tv"===u?"TV Series":"Movie"}),Object(j.jsx)("span",{children:n||r})]})]})]}),f&&Object(j.jsx)(T,Object(b.a)(Object(b.a)({},e),{},{setModalVisible:h}))]})},W=a(221),L=a(218),U=Object(L.a)((function(){return{ul:{"& .MuiPaginationItem-root":{color:"#f3f3f3"}}}}));var V=function(e){var t=e.setPage,a=e.numOfPage,n=U();return Object(j.jsx)("div",{style:{width:"30%",display:"flex",justifyContent:"center",margin:50},children:Object(j.jsx)(W.a,{classes:{ul:n.ul},count:a,color:"primary",onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,variant:"outlined"})})},B=a(69),R=a.n(B);var H=function(e){var t=e.items,a=e.setSort,n=c.a.useState(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],o=c.a.useState(0),u=Object(l.a)(o,2),d=u[0],p=u[1],b=c.a.useRef(),f=function(e){e.path.includes(b.current)||i(!1)};c.a.useEffect((function(){document.body.addEventListener("click",f)}),[]),c.a.useEffect((function(){a(t[d].type)}),[d]);var h=t[d].name;return Object(j.jsxs)("div",{className:R.a.sort,ref:b,children:[Object(j.jsxs)("div",{className:R.a.label,children:[Object(j.jsx)("svg",{className:s?R.a.rotated:"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"#f3f3f3",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"})}),Object(j.jsx)("b",{children:"Sort by:"}),Object(j.jsx)("span",{onClick:function(){i(!s)},children:h})]}),s&&Object(j.jsx)("div",{className:R.a.popup,children:Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)("li",{className:d===t?"active":"",onClick:function(){return function(e){p(e),i(!1)}(t)},children:e.name},t)}))})})]})};var I=function(){var e=c.a.useState(1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=c.a.useState([]),d=Object(l.a)(u,2),p=d[0],f=d[1],O=c.a.useState([]),x=Object(l.a)(O,2),g=x[0],_=x[1],w=c.a.useState([]),N=Object(l.a)(w,2),C=N[0],k=N[1],P=c.a.useState("popular"),M=Object(l.a)(P,2),T=M[0],E=M[1],F=S(C),W=function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/movie/".concat(T,"?api_key=").concat("2d2bfeef1e819ffe74edc1a51ff6c924","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=").concat(a,"&with_genres=").concat(F));case 2:t=e.sent,n=t.data,f(n.results),o(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){W()}),[a,F,T]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{type:"movie",selectedGenre:C,setSelectedGenre:k,genres:g,setGenres:_,setPage:n}),Object(j.jsx)(H,{setSort:E,items:[{name:"Popular",type:"popular"},{name:"Top Rated",type:"top_rated"},{name:"Now playing",type:"now_playing"},{name:"Upcoming",type:"upcoming"}]}),Object(j.jsx)("div",{className:"container",children:p.length>0&&p.map((function(e){return Object(j.jsx)(G,Object(b.a)(Object(b.a)({},e),{},{"media-type":"movie"}),e.id)}))}),i>1&&Object(j.jsx)(V,{setPage:n,page:a,numOfPage:i})]})};var A=function(){var e=c.a.useState(1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=c.a.useState([]),d=Object(l.a)(u,2),p=d[0],f=d[1],O=function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("2d2bfeef1e819ffe74edc1a51ff6c924","&page=").concat(a));case 2:t=e.sent,n=t.data,f(n.results),o(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){O()}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:p.length>0&&p.map((function(e){return Object(j.jsx)(G,Object(b.a)({},e),e.id)}))}),i>1&&Object(j.jsx)(V,{setPage:n,page:a,numOfPage:i})]})};var D=function(){var e=c.a.useState(1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=c.a.useState([]),d=Object(l.a)(u,2),p=d[0],f=d[1],O=c.a.useState([]),x=Object(l.a)(O,2),g=x[0],_=x[1],w=c.a.useState([]),N=Object(l.a)(w,2),C=N[0],k=N[1],P=c.a.useState("popular"),M=Object(l.a)(P,2),T=M[0],E=M[1],F=S(C),W=function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/tv/".concat(T,"?api_key=").concat("2d2bfeef1e819ffe74edc1a51ff6c924","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(F));case 2:t=e.sent,n=t.data,f(n.results),o(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){W()}),[a,F,T]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{type:"tv",selectedGenre:C,setSelectedGenre:k,genres:g,setGenres:_,setPage:n}),Object(j.jsx)(H,{items:[{name:"Popular",type:"popular"},{name:"Top Rated",type:"top_rated"},{name:"Airing today",type:"airing_today"},{name:"On the air",type:"on_the_air"}],setSort:E}),Object(j.jsx)("div",{className:"container",children:p.length>0&&p.map((function(e){return Object(j.jsx)(G,Object(b.a)(Object(b.a)({},e),{},{media_type:"tv"}),e.id)}))}),i>1&&Object(j.jsx)(V,{setPage:n,page:a,numOfPage:i})]})},J=a(220),Z=a(222),q=a(225);var z=function(){var e=c.a.useState(0),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState(""),s=Object(l.a)(r,2),i=s[0],o=s[1],u=c.a.useState(1),d=Object(l.a)(u,2),p=d[0],f=d[1],O=c.a.useState([]),x=Object(l.a)(O,2),g=x[0],_=x[1],w=c.a.useState(0),y=Object(l.a)(w,2),S=y[0],N=y[1],C=function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("2d2bfeef1e819ffe74edc1a51ff6c924","&language=en-US&query=").concat(i,"&page=").concat(p,"&include_adult=false"));case 2:t=e.sent,n=t.data,_(n.results),console.log(n.results),N(n.total_pages);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){window.scroll(0,0),C()}),[a,p,i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)(J.a,{className:"search-box",label:"Search..",variant:"filled",value:i,onChange:function(e){return o(e.target.value)}}),Object(j.jsxs)(Z.a,{value:a,className:"tabs",indicatorColor:"primary",onChange:function(e,t){n(t)},children:[Object(j.jsx)(q.a,{style:{width:"50%",color:"#f3f3f3"},label:"Search Movies"}),Object(j.jsx)(q.a,{style:{width:"50%",color:"#f3f3f3"},label:"Search TV Series"})]})]}),i.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:g.length>0&&g.map((function(e){return Object(j.jsx)(G,Object(b.a)(Object(b.a)({},e),{},{media_type:a?"tv":"movie"}),e.id)}))}),S>1&&Object(j.jsx)(V,{setPage:f,page:p,numOfPage:S})]})]})};var K=function(){return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(p,{}),Object(j.jsx)(o.a,{path:"/",component:A,exact:!0}),Object(j.jsx)(o.a,{path:"/movies",component:I,exact:!0}),Object(j.jsx)(o.a,{path:"/tvSeries",component:D,exact:!0}),Object(j.jsx)(o.a,{path:"/search",component:z,exact:!0})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,229)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(K,{})})}),document.getElementById("root")),Q()},53:function(e,t,a){e.exports={over:"ModalWindow_over__2ewn1",wrapper:"ModalWindow_wrapper__3xcUN",content:"ModalWindow_content__kLwe5",info:"ModalWindow_info__29aQd",overview:"ModalWindow_overview__3zsuK",trailer:"ModalWindow_trailer__3N_1q"}},60:function(e,t,a){e.exports={logo:"Header_logo__3_WZC",active:"Header_active__3ATEF"}},68:function(e,t,a){e.exports={card:"Card_card__2f8bp",vote:"Card_vote__20cfP",info:"Card_info__3pibR",media:"Card_media__C6Bbc"}},69:function(e,t,a){e.exports={sort:"SortPopup_sort__JarAW",label:"SortPopup_label__2F1js",rotated:"SortPopup_rotated__3nuax",popup:"SortPopup_popup__C4w7d",active:"SortPopup_active__1dcNL"}}},[[163,1,2]]]);
//# sourceMappingURL=main.bcd9d5e4.chunk.js.map