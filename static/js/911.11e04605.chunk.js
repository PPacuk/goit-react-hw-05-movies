"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[911],{911:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(87),o=n(689),f=n(390),p=n(686),v="Movies_moviesContainer__x6Wcs",l="Movies_moviesForm__qD0jp",h="Movies_moviesInput__694yl",m="Movies_moviesList__hkkZP",d=n(184),_=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],c=e[1],_=(0,s.useState)([]),x=(0,a.Z)(_,2),w=x[0],y=x[1],k=(0,i.lr)(),Z=(0,a.Z)(k,2),b=Z[0],g=Z[1],j=(0,o.TH)(),N=b.get("query"),S=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==n){t.next=3;break}return t.abrupt("return",p.Notify.failure("Field is empty!!!"));case 3:g({query:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){if(N){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.LI)("".concat(N));case 3:e=t.sent,y(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[N]),(0,d.jsxs)("div",{className:v,children:[(0,d.jsxs)("form",{className:l,onSubmit:S,children:[(0,d.jsx)("input",{className:h,type:"text",value:"".concat(n),onChange:function(t){c(t.target.value)}}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),(0,d.jsx)("ul",{className:m,children:w.map((function(t){var e=t.id,n=t.title;return(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"".concat(e),state:{from:j},children:n})},e)}))})]})}},390:function(t,e,n){n.d(e,{IV:function(){return p},LI:function(){return o},Sg:function(){return f},wH:function(){return v},wr:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="10cf95a18950474154f88572c16f5960",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(e,"&api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=911.11e04605.chunk.js.map