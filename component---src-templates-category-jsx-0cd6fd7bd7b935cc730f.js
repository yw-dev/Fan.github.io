(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{159:function(t,e,r){"use strict";r.r(e),r.d(e,"query",function(){return y});r(92),r(82),r(60),r(184),r(172);var a=r(169),i=r(7),n=(r(0),r(38)),o=r(1),d=r.n(o),m=r(175),s=r.n(m),c=r(176),u=r(170),h=r.n(u),l=r(171),p=Object(a.a)("div",{target:"e43y48g0"})("margin:1rem 9rem 1rem 9rem;width:auto;@media (max-width:",function(t){return t.theme.breakpoints.l},"){margin:2rem 6rem 2rem 6rem;}@media (max-width:",function(t){return t.theme.breakpoints.hd},"){margin:1rem 4rem 1rem 4rem;}@media (max-width:",function(t){return t.theme.breakpoints.m},"){margin:1rem 2rem 1rem 2rem;}@media (max-width:",function(t){return t.theme.breakpoints.s},"){margin:1rem;}"),f=Object(a.a)("div",{target:"e43y48g1"})("width:auto;display:flex;flex-direction:row;justify-content:center;@media (max-width:",function(t){return t.theme.breakpoints.m},"){flex-wrap:wrap;}"),g=Object(a.a)("div",{target:"e43y48g2"})("width:100%;display:flex;flex-direction:column;padding-right:1rem;@media (max-width:",function(t){return t.theme.breakpoints.m},"){padding-right:0rem;}.list{margin:0;padding:0;@media (max-width:",function(t){return t.theme.breakpoints.m},"){margin:0 0 1rem 0;}}"),b=Object(a.a)("div",{target:"e43y48g3"})("width:calc(99.9% * 1 / 3 - 1rem);display:flex;flex-direction:column;@media (max-width:",function(t){return t.theme.breakpoints.vl},"){width:calc(99.9% * 1 / 2 - 1rem);}@media (max-width:",function(t){return t.theme.breakpoints.m},"){width:100%;}"),w=(Object(a.a)("article",{target:"e43y48g4"})("width:100%;margin:0;padding:1rem 3rem;font-size:14px;box-shadow:",function(t){return t.theme.shadow.feature.title.bottom},";"),Object(a.a)("div",{target:"e43y48g5"})("margin:auto;position:relative;box-shadow:",function(t){return t.theme.shadow.feature.small.default},";transition:",function(t){return t.theme.transitions.boom.transition},";border-radius:",function(t){return t.theme.borderRadius.default},";min-height:400px;img{border-radius:",function(t){return t.theme.borderRadius.default},";}&:hover{box-shadow:",function(t){return t.theme.shadow.feature.small.hover},";transform:scale(1.04);}a{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:",function(t){return t.theme.borderRadius.default},";> div{position:static !important;}> div > div{position:static !important;}&:focus{outline:none;box-shadow:0 0 0 5px ",function(t){return t.theme.colors.primary.dark},";}}flex-basis:100%;max-width:100%;width:100%;@media (max-width:800px){flex-basis:100%;max-width:100%;width:100%;margin-bottom:1.5rem;}@media (max-width:500px){min-height:200px;}div{style:none;}"),Object(a.a)(n.Link,{target:"e43y48g6"})("color:",function(t){return t.theme.colors.white.light},";padding:5px 10px;border:solid 1px #fff;border-radius:20px;&:hover{color:",function(t){return t.theme.colors.white.grey},";background:",function(t){return t.theme.colors.white.light},";}")),x=(Object(a.a)("div",{target:"e43y48g7"})("h1{display:inline-block;transition:all ",function(t){return t.theme.transitions.default.duration},";&:hover{color:",function(t){return t.theme.colors.white.light},";}}text-align:center;flex-basis:100%;max-width:100%;width:100%;border-bottom:",function(t){return t.theme.border.posts},";@media (max-width:800px){flex-basis:100%;max-width:100%;width:100%;}"),Object(a.a)("div",{target:"e43y48g8"})("padding:1rem 0rem;display:flex;flex-direction:column;color:",function(t){return t.theme.colors.white.light},";"),function(t){var e=t.pageContext,r=t.data,a=e.spath,n=e.tagName,o=[],d={},m={},u=[],x=[],y=[];r.allMarkdownRemark.edges.map(function(t){var e=t.node;e.frontmatter.type&&(o[e.frontmatter.type]||(o[e.frontmatter.type]=[]),o[e.frontmatter.type][e.frontmatter.typeTitle]||(o[e.frontmatter.type][e.frontmatter.typeTitle]=[]),o[e.frontmatter.type][e.frontmatter.typeTitle].push(e))}),Object.keys(o).map(function(t){o[t][Object.keys(o[t])].map(function(e){t&&(d[t]||(d[t]=[]),e.frontmatter.categores&&(d[t][e.frontmatter.categores]||(d[t][e.frontmatter.categores]=[]),d[t][e.frontmatter.categores].push(e)),m[t]||(m[t]=[]),e.frontmatter.tags&&e.frontmatter.tags.forEach(function(r){m[t][r]||(m[t][r]=[]),m[t][r].push(e)}))})});var j=a.split("/"),O="";switch(j.length){case 2:o[j[0]]&&(O=Object.keys(o[j[0]])+" · 标签"),u=[j[0],O],y=d[j[0]][j[1]]?d[j[0]][j[1]]:m[j[0]][j[1]],x=Object.keys(m[j[0]]);break;case 3:break;default:o[j[0]]&&(O=Object.keys(o[j[0]])+" · 分类"),u=[j[0],O],y=o[j[0]][Object.keys(o[j[0]])],x=Object.keys(d[j[0]])}return Object(i.d)(c.d,null,Object(i.d)(s.a,{title:n+" | "+h.a.siteTitle}),Object(i.d)(l.j,{title:n},Object(i.d)(w,{to:"/category"},"分类")),Object(i.d)(p,null,Object(i.d)(f,null,Object(i.d)(g,null,Object(i.d)(c.a,{className:"list"},Object(i.d)(l.g,{path:a,title:"分类",keyword:n}),y&&y.map(function(t){return Object(i.d)(l.b,{key:t.id,cover:t.frontmatter.cover.childImageSharp.fluid,stype:t.frontmatter.type,path:t.frontmatter.path,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,excerpt:t.excerpt})}))),Object(i.d)(b,null,Object(i.d)(l.c,{title:u[1],other:"",path:u[0],list:x}),Object(i.d)(l.a,null),Object(i.d)(l.h,null)))))});e.default=x,x.propTypes={pageContext:d.a.shape({spath:d.a.string,tagname:d.a.string}),data:d.a.shape({allMarkdownRemark:d.a.shape({edges:d.a.arrayOf(d.a.shape({node:d.a.shape({excerpt:d.a.string,frontmatter:d.a.shape({cover:d.a.object.isRequired,path:d.a.string.isRequired,title:d.a.string.isRequired,date:d.a.string.isRequired,tags:d.a.array,categores:d.a.string.isRequired,type:d.a.string.isRequired,typeID:d.a.string.isRequired,typeTitle:d.a.string.isRequired})})}).isRequired)})})};var y="2645769119"}}]);
//# sourceMappingURL=component---src-templates-category-jsx-0cd6fd7bd7b935cc730f.js.map