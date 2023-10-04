(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{6388:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[directorySlug]/[parentSlug]/[childSlug]",function(){return __webpack_require__(2879)}])},2879:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return _childSlug_}});var jsx_runtime=__webpack_require__(2322),Meta=__webpack_require__(9774),Layout=__webpack_require__(7266),MoreThanSection=__webpack_require__(6584),Markdown=__webpack_require__(8897),Image=__webpack_require__(2729),HowToSchema=__webpack_require__(4835);let HowToSection=param=>{let{heading,description,section,image,video}=param;return(0,jsx_runtime.jsxs)("section",{id:"how-to-section",className:"grid grid-cols-1 gap-10 pb-4 pt-6 md:grid-cols-2",children:[(0,jsx_runtime.jsx)(HowToSchema.i,{heading:heading||"",description:description,howToItems:section,video:video}),(0,jsx_runtime.jsxs)("div",{className:"grid grid-flow-row content-start gap-8",children:[heading&&(0,jsx_runtime.jsx)("h2",{className:"mt-8 text-2xl font-medium leading-tight tracking-tight sm:text-4xl",children:heading}),(0,jsx_runtime.jsx)("div",{className:"grid grid-flow-row content-start gap-8",children:section.map((section,index)=>section.heading||section.content?(0,jsx_runtime.jsxs)("div",{className:"grid grid-flow-row gap-4",children:[(0,jsx_runtime.jsxs)("h3",{className:"flex items-center justify-start gap-3 text-xl font-medium leading-tight tracking-tight",children:[(0,jsx_runtime.jsx)("div",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-black text-white ltr:mr-2 rtl:ml-2",children:index+1}),section.heading]}),(0,jsx_runtime.jsx)(Markdown.U,{content:section.content,className:"max-w-full"})]},index):null)})]}),image&&(0,jsx_runtime.jsx)(Image.Ee,{alt:image.alt,hash:image.hash,ext:image.ext,height:600,width:556,sizes:{xs:296,sm:544,md:316,lg:396,xl:524}})]})};var LogoSection=__webpack_require__(3732),VideoSection=__webpack_require__(3798);let UVPSection=param=>{let{section}=param,widthClass=2===section.length?"lg:w-1/2":"lg:w-1/3";return(0,jsx_runtime.jsx)("section",{id:"uvp-section",className:"flex flex-row flex-wrap justify-center pt-6 pb-12 md:pt-12 md:pb-20",children:section.map((uvp,index)=>uvp.heading||uvp.content?(0,jsx_runtime.jsx)("div",{className:"w-full p-4 ".concat(widthClass),children:(0,jsx_runtime.jsxs)("div",{className:"grid h-full grid-flow-row content-start gap-4 rounded-2xl bg-neutral-50 p-12",children:[uvp.heading&&(0,jsx_runtime.jsx)("h2",{className:"text-2xl font-medium leading-tight tracking-tight",children:uvp.heading}),(0,jsx_runtime.jsx)(Markdown.U,{content:uvp.content,className:"max-w-full"})]})},index):null)})};var FAQSection=__webpack_require__(6935),DiscoverSection=__webpack_require__(4622),TestimonialSection=__webpack_require__(5044),AggregateRatingSchema=__webpack_require__(9160),BlogPostSection=__webpack_require__(6948),HeroSection=__webpack_require__(3570);let VideoDownloaderChildTemplate=param=>{let{directoryType,pageData,locales,navData,breadcrumbData,footerData,staticContent,showSmartBanner,blogPosts,children:microApp,dynamicOgImage}=param;return(0,jsx_runtime.jsxs)(Layout.A,{locales:locales,navData:navData,breadcrumbData:breadcrumbData,footerData:footerData,children:[(0,jsx_runtime.jsx)(AggregateRatingSchema.f,{title:pageData.titleSection.heading,description:pageData.titleSection.content}),(0,jsx_runtime.jsx)(Meta.h_,{title:pageData.meta.metaTitle,description:pageData.meta.metaDescription,locales:locales,showSmartBanner:showSmartBanner,dynamicOgImage:pageData.titleSection.image||(null==dynamicOgImage?void 0:dynamicOgImage.image)?{title:(null==dynamicOgImage?void 0:dynamicOgImage.title)||pageData.titleSection.heading,image:(null==dynamicOgImage?void 0:dynamicOgImage.image)||(0,Image.zL)(pageData.titleSection.image.hash,pageData.titleSection.image.ext,pageData.titleSection.image.width),ctaText:(null==dynamicOgImage?void 0:dynamicOgImage.ctaText)||staticContent.getStartedNow,theme:(null==dynamicOgImage?void 0:dynamicOgImage.theme)||["#43AFF6","#6BEEA7"]}:null}),(0,jsx_runtime.jsx)("div",{className:"mx-auto w-full max-w-screen-2xl px-6",children:microApp}),(0,jsx_runtime.jsxs)("div",{className:"mx-auto max-w-6xl px-8 sm:px-12 lg:px-24 xl:px-0",children:[(0,jsx_runtime.jsx)(HowToSection,{heading:pageData.howToHeading,section:pageData.howToSection,description:pageData.titleSection.content,image:pageData.howToImage,video:pageData.videoSection}),(0,jsx_runtime.jsx)(LogoSection.h,{}),(0,jsx_runtime.jsx)(HeroSection.D,{section:pageData.heroSection}),pageData.videoSection&&(0,jsx_runtime.jsx)(VideoSection.n,{section:pageData.videoSection,description:pageData.titleSection.content}),(0,jsx_runtime.jsx)(UVPSection,{section:pageData.UVPSection}),(0,jsx_runtime.jsx)(FAQSection.v,{heading:staticContent.faqTitle,section:pageData.faqSection}),pageData.siblings.length>0&&(0,jsx_runtime.jsx)(DiscoverSection.A,{heading:staticContent.discoverMore,section:pageData.siblings}),(0,jsx_runtime.jsx)(TestimonialSection.J,{heading:staticContent.whatTheySay}),blogPosts&&blogPosts.length>0&&(0,jsx_runtime.jsx)(BlogPostSection.q,{heading:staticContent.moreFromVEED,posts:blogPosts})]}),(0,jsx_runtime.jsx)(MoreThanSection.c,{section:pageData.moreThanSection,cta:pageData.titleSection.CTA})]})};var micro_app=__webpack_require__(1262);let ChildPage=param=>{let{directoryType,pageData,locales,navData,breadcrumbData,footerData,staticContent,showSmartBanner,blogPosts,direction}=param;return(0,jsx_runtime.jsx)(VideoDownloaderChildTemplate,{directoryType:directoryType,pageData:pageData,locales:locales,navData:navData,breadcrumbData:breadcrumbData,footerData:footerData,staticContent:staticContent,showSmartBanner:showSmartBanner,blogPosts:blogPosts,direction:direction,children:pageData.microApp&&(0,jsx_runtime.jsx)(micro_app.H,{microApp:pageData.microApp,pageData:pageData})})};var __N_SSG=!0,_childSlug_=ChildPage}},function(__webpack_require__){__webpack_require__.O(0,[424,917,789,525,461,748,872,602,278,326,446,554,865,995,774,888,179],function(){return __webpack_require__(__webpack_require__.s=6388)}),_N_E=__webpack_require__.O()}]);