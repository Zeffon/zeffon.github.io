"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{39058:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),l=a(34334),r=a(81566),s=a(87524),c=a(39960),i=a(95999),m="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",b="sidebarItemLink_mo7H",d="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:d},e.title)))))))}var p=a(13102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return n.createElement(p.Zo,{component:f,props:e})}function k(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(h,{sidebar:t}):n.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return n.createElement(r.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(k,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},24524:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),l=a(34334),r=a(35155),s=a(10833),c=a(35281),i=a(39058),m=a(26090),o=a(90197);function u(e){let{tags:t,sidebar:a}=e;const u=(0,r.M)();return n.createElement(s.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(s.d,{title:u}),n.createElement(o.Z,{tag:"blog_tags_list"}),n.createElement(i.Z,{sidebar:a},n.createElement("h1",null,u),n.createElement(m.Z,{tags:t})))}},13008:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(34334),r=a(39960),s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,m?i:c)},a,m&&n.createElement("span",null,m))}},26090:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(35155),r=a(13008),s="tag_Nnez";function c(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:s},n.createElement(r.Z,e))))),n.createElement("hr",null))}function i(e){let{tags:t}=e;const a=(0,l.P)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(c,{key:e.letter,letterEntry:e}))))}},35155:function(e,t,a){a.d(t,{M:function(){return l},P:function(){return r}});var n=a(95999);const l=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);