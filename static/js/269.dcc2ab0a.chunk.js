"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{6269:function(r,t,e){e.r(t);var n=e(9439),a=e(2791),u=e(7689),c=e(1667),o=e(184);t.default=function(){var r=(0,u.UO)().movieId,t=(0,a.useState)([]),e=(0,n.Z)(t,2),i=e[0],s=e[1];return(0,a.useEffect)((function(){(0,c.jP)(r).then((function(r){if("object"===typeof r){var t=r.map((function(r){return{id:r.id,author:r.author,content:r.content}}));s(t)}}))}),[r]),(0,o.jsx)("ul",{children:0!==i.length?i.map((function(r){var t=r.id,e=r.author,n=r.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e]}),(0,o.jsx)("p",{children:n})]},t)})):"We don't have any reviews for this movie."})}},1667:function(r,t,e){e.d(t,{Df:function(){return i},M1:function(){return f},TP:function(){return p},gy:function(){return s},jP:function(){return v}});var n=e(5861),a=e(7757),u=e.n(a),c=e(3263),o=e(7596),i=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?api_key=15514698987343768a5fd47afc677b65",r.prev=1,r.next=4,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=15514698987343768a5fd47afc677b65");case 4:return t=r.sent,r.abrupt("return",t.data.results);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",o.Am.error("Error occurred",r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=15514698987343768a5fd47afc677b65&query=".concat(t,"&include_adult=false"),r.prev=1,r.next=4,c.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",o.Am.error("Error occurred",r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=15514698987343768a5fd47afc677b65&language=en-US"),r.prev=1,r.next=4,c.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",o.Am.error("Error occurred",r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=15514698987343768a5fd47afc677b65&language=en-US"),r.prev=1,r.next=4,c.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data.cast);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",o.Am.error("Error occurred",r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=15514698987343768a5fd47afc677b65&language=en-US"),r.prev=1,r.next=4,c.Z.get(e);case 4:return n=r.sent,r.abrupt("return",n.data.results);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",o.Am.error("Error occurred",r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=269.dcc2ab0a.chunk.js.map