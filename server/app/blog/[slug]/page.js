(()=>{var e={};e.id=308,e.ids=[308],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2744:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d}),n(2265),n(7127),n(5866);var r=n(3191),s=n(8716),i=n(7922),a=n.n(i),o=n(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,2265)),"C:\\Users\\Admin\\Documents\\github\\github.io\\app\\blog\\[slug]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,7127)),"C:\\Users\\Admin\\Documents\\github\\github.io\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Admin\\Documents\\github\\github.io\\app\\blog\\[slug]\\page.js"],m="/blog/[slug]/page",u={require:n,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9574:(e,t,n)=>{Promise.resolve().then(n.bind(n,8781)),Promise.resolve().then(n.bind(n,9694)),Promise.resolve().then(n.bind(n,9662)),Promise.resolve().then(n.t.bind(n,9404,23)),Promise.resolve().then(n.t.bind(n,4064,23)),Promise.resolve().then(n.bind(n,9394))},2874:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},5303:()=>{},2265:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(9510),s=n(9916);async function i(e){let t=await fetch(`https://dev.to/api/articles/${s.U.devUsername}/${e}`);if(!t.ok)throw Error("Failed to fetch data");return await t.json()}let a=async function({params:e}){let t=e.slug;return await i(t),r.jsx("div",{})}},7127:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u,metadata:()=>m});var r=n(9510),s=n(2002),i=n.n(s),a=n(2847),o=n(6557);n(7001);var l=n(7371);let d=function(){return r.jsx("div",{className:"relative border-t bg-[#0d1224] border-[#353951] text-white",children:(0,r.jsxs)("div",{className:"mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10",children:[r.jsx("div",{className:"flex justify-center -z-40",children:r.jsx("div",{className:"absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"})}),r.jsx("div",{className:"flex flex-col md:flex-row items-center justify-between",children:(0,r.jsxs)("p",{className:"text-sm",children:["\xa9 Developer Portfolio by ",r.jsx(l.default,{target:"_blank",href:"https://www.linkedin.com/in/zbrulea-constantin-6b3241311/",className:"text-[#16f2b3]",children:"Zbrulea Constantin"})]})})]})})},c=function(){return r.jsx("nav",{className:"bg-transparent",children:(0,r.jsxs)("div",{className:"flex items-center justify-between py-5",children:[r.jsx("div",{className:"flex flex-shrink-0 items-center",children:r.jsx(l.default,{href:"/",className:" text-[#16f2b3] text-3xl font-bold",children:"Zbrulea Constantin"})}),(0,r.jsxs)("ul",{className:"mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100",id:"navbar-default",children:[r.jsx("li",{children:r.jsx(l.default,{className:"block px-4 py-2 no-underline outline-none hover:no-underline",href:"/#about",children:r.jsx("div",{className:"text-sm text-white transition-colors duration-300 hover:text-pink-600",children:"ABOUT"})})}),r.jsx("li",{children:r.jsx(l.default,{className:"block px-4 py-2 no-underline outline-none hover:no-underline",href:"/#experience",children:r.jsx("div",{className:"text-sm text-white transition-colors duration-300 hover:text-pink-600",children:"EXPERIENCE"})})}),r.jsx("li",{children:r.jsx(l.default,{className:"block px-4 py-2 no-underline outline-none hover:no-underline",href:"/#skills",children:r.jsx("div",{className:"text-sm text-white transition-colors duration-300 hover:text-pink-600",children:"SKILLS"})})}),r.jsx("li",{children:r.jsx(l.default,{className:"block px-4 py-2 no-underline outline-none hover:no-underline",href:"/#education",children:r.jsx("div",{className:"text-sm text-white transition-colors duration-300 hover:text-pink-600",children:"EDUCATION"})})}),r.jsx("li",{children:r.jsx(l.default,{className:"block px-4 py-2 no-underline outline-none hover:no-underline",href:"/#projects",children:r.jsx("div",{className:"text-sm text-white transition-colors duration-300 hover:text-pink-600",children:"PROJECTS"})})})]})]})})};n(2480),n(7838);let m={title:"Portfolio of Zbrulea Constantin - Software Developer",description:"This is the portfolio of Zbrulea Constantin. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."};function u({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("body",{className:i().className,children:[r.jsx(o.Ix,{}),(0,r.jsxs)("main",{className:"min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white",children:[r.jsx(c,{}),e]}),r.jsx(d,{})]}),r.jsx(a.GoogleTagManager,{gtmId:process.env.NEXT_PUBLIC_GTM})]})}},9916:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});let r={name:"Zbrulea Constantin",profile:"/profile.jpg",designation:"Software Developer",description:"My name is Zbrulea Constantin. I am a highly skilled and experienced software developer with a deep understanding of software design, development, and maintenance. I am proficient in multiple programming languages and technologies, and I have a proven track record of delivering high-quality software solutions. I am a strong team player and I am always eager to learn new things. Ultimately, the goal is to create software that has a positive impact on the world, solving problems, increasing efficiency, and making people's lives easier. I am confident that I can make a significant contribution to your organization.",email:"brainartfu@gmail.com",phone:"+40 7*******7",address:"Prislav nr.51, Tulcea, TL, Romania",github:"https://github.com/zbrdev",linkedIn:"https://www.linkedin.com/in/zbrulea-constantin-6b3241311/",stackOverflow:"https://stackoverflow.com/users/25537821/zbr",facebook:"https://www.facebook.com/zbr.constantin/",twitter:"https://twitter.com/zbrconstatin",leetcode:"https://leetcode.com/u/BrainArtfu/",devUsername:"BrainArtfu",resume:"https://drive.google.com/file/d/1WKEBIECCZd6y3qXM8XvCjZ3LQ0D6G3PG/view?usp=sharing"}},7481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(6621);let s=e=>[{type:"image/x-icon",sizes:"32x32",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2480:()=>{},7838:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,846,621],()=>n(2744));module.exports=r})();