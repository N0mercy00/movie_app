(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{57:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),r=s(29),i=s.n(r),o=s(8),j=s(2),l=s(17),m=s.n(l),u=s(30),d=s(11),b=s(12),h=s(14),p=s(13),v=s(31),O=s.n(v);s(57);var x=function(e){var t=e.id,s=e.year,a=e.title,c=e.summary,r=e.poster,i=e.genres;return Object(n.jsx)("div",{className:" movie",children:Object(n.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:c,poster:r,genres:i}},children:[Object(n.jsx)("img",{src:r,alt:a,title:a}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:a}),Object(n.jsx)("h5",{className:"movie__year",children:s}),Object(n.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"summary",children:[c.slice(0,100),"..."]})]})]})})},y=(s(63),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component));var f=function(){return Object(n.jsx)("span",{children:"some"})},g=(s(64),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(n.jsxs)("div",{className:"detail",children:[Object(n.jsx)("img",{className:"post",src:e.state.poster}),Object(n.jsxs)("div",{class:"text",children:[Object(n.jsx)("h3",{children:e.state.title}),Object(n.jsx)("span",{children:e.state.year}),Object(n.jsx)("li",{children:e.state.genres}),Object(n.jsx)("p",{children:e.state.summary})]})]}):null}}]),s}(c.a.Component));s(65);var _=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};var N=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(_,{}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(n.jsx)(j.a,{path:"/about",component:f}),Object(n.jsx)(j.a,{path:"/movie/:id",component:g})]})};i.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.dd79db82.chunk.js.map