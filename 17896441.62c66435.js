(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(69),i=a(170),c=a(177),o=a(172);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))},m=a(606),u=a.n(m);function d(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"contents__link"},e.value),r.a.createElement(d,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=Object(i.a)().siteConfig,a=(void 0===t?{}:t).url,n=e.metadata,o=e.content,m=n.description,v=n.title,E=n.permalink,g=n.image,p=n.editUrl,f=n.lastUpdatedAt,h=n.lastUpdatedBy,w=n.keywords,b=a+Object(c.a)(g);return r.a.createElement("div",null,r.a.createElement(l.a,null,v&&r.a.createElement("title",null,v),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),w&&w.length&&r.a.createElement("meta",{name:"keywords",content:w.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:b}),g&&r.a.createElement("meta",{property:"twitter:image",content:b}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),E&&r.a.createElement("meta",{property:"og:url",content:a+E})),r.a.createElement("div",{className:"padding-vert--lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:u.a.docItemContainer},!n.hide_title&&r.a.createElement("header",null,r.a.createElement("h1",{className:u.a.docTitle},n.title)),r.a.createElement("article",null,r.a.createElement("div",{className:"markdown"},r.a.createElement(o,null))),(p||f||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||h)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",f&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("strong",null,new Date(1e3*f).toLocaleDateString()),h&&" "),h&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,h)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:n})))),o.rightToc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:u.a.tableOfContents},r.a.createElement(d,{headings:o.rightToc})))))))}},170:function(e,t,a){"use strict";var n=a(0),r=a(72);t.a=function(){return Object(n.useContext)(r.a)}},172:function(e,t,a){"use strict";a(59);var n=a(0),r=a.n(n),l=a(41);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,o=e.href,s=a||o,m=c.test(s),u=!1,d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!d&&m&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,m]),s&&m?r.a.createElement(l.b,i({},e,{onMouseEnter:function(){u||(window.docusaurus.preload(s),u=!0)},innerRef:function(e){var a,n;d&&e&&m&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",i({},e,{href:s}))}},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(592);var n=a(170);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},592:function(e,t,a){"use strict";var n=a(9),r=a(25),l=a(100),i="".startsWith;n(n.P+n.F*a(101)("startsWith"),"String",{startsWith:function(e){var t=l(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})},606:function(e,t,a){e.exports={docTitle:"docTitle_2AEX",docItemContainer:"docItemContainer_2vWn",tableOfContents:"tableOfContents_3iTc"}}}]);