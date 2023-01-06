"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[7163],{8524:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-4b5a6b63",path:"/page/page.html",title:"文章配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"侧标栏",slug:"侧标栏",children:[]},{level:2,title:"图片懒加载",slug:"图片懒加载",children:[]},{level:2,title:"文章推荐",slug:"文章推荐",children:[]},{level:2,title:"edit",slug:"edit",children:[]},{level:2,title:"最后更新时间",slug:"最后更新时间",children:[]},{level:2,title:"贡献者",slug:"贡献者",children:[]},{level:2,title:"上一页，下一页",slug:"上一页-下一页",children:[]},{level:2,title:"赞赏功能",slug:"赞赏功能",children:[]},{level:2,title:"SEO配置",slug:"seo配置",children:[]},{level:2,title:"文章推荐",slug:"文章推荐-1",children:[]},{level:2,title:"评论",slug:"评论",children:[]},{level:2,title:"页脚",slug:"页脚",children:[]}],git:{}}},5725:(e,a,n)=>{n.r(a),n.d(a,{default:()=>v});var s=n(6252);const t=(0,s.uE)('<h1 id="文章配置" tabindex="-1"><a class="header-anchor" href="#文章配置" aria-hidden="true">#</a> 文章配置</h1><h2 id="侧标栏" tabindex="-1"><a class="header-anchor" href="#侧标栏" aria-hidden="true">#</a> 侧标栏</h2><p>侧边栏是自动生成的，你可以更改自动生成的规则</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件</span>\n<span class="token literal-property property">sidebarCatalogLevel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2><p>图片懒加载有默认值，但是你也可以自己指定</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//文章懒加载图片 仅限文章，首页文章占位图片并不是这个</span>\n        <span class="token literal-property property">lazyLoadingImg</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/ljz.gif&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="文章推荐" tabindex="-1"><a class="header-anchor" href="#文章推荐" aria-hidden="true">#</a> 文章推荐</h2><p>文章推荐设置可以查看</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//文章底部最大推荐文章数 默认值为30</span>\n<span class="token literal-property property">recommendPageLength</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n\n<span class="token comment">//推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`</span>\n<span class="token literal-property property">recommendNoTitle</span><span class="token operator">:</span> <span class="token string">&quot;`╮(￣▽￣)╭`&quot;</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="edit" tabindex="-1"><a class="header-anchor" href="#edit" aria-hidden="true">#</a> edit</h2><p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#editlink">点击</a>查看vuepress的editlink设置</p><h2 id="最后更新时间" tabindex="-1"><a class="header-anchor" href="#最后更新时间" aria-hidden="true">#</a> 最后更新时间</h2><p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#lastupdated">点击</a>查看vuepress的lastupdated设置</p><h2 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h2><p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#contributors">点击</a>查看vuepress的contributors设置</p><h2 id="上一页-下一页" tabindex="-1"><a class="header-anchor" href="#上一页-下一页" aria-hidden="true">#</a> 上一页，下一页</h2>',17),l=(0,s._)("p",null,[(0,s._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20211021085208081",originSrc:"https://ooszy.cco.vin/img/blog-note/image-20211021085208081.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),r=(0,s._)("p",null,[(0,s.Uk)("上一页，下一页会自动获取，并不能在"),(0,s._)("code",null,"frontmatter"),(0,s.Uk)("中，指定下一页，上一页，往后版本会增加")],-1),p=(0,s._)("h2",{id:"赞赏功能",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#赞赏功能","aria-hidden":"true"},"#"),(0,s.Uk)(" 赞赏功能")],-1),i=(0,s.Uk)("赞赏配置"),o=(0,s._)("h2",{id:"seo配置",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#seo配置","aria-hidden":"true"},"#"),(0,s.Uk)(" SEO配置")],-1),c=(0,s.Uk)("seo"),d=(0,s._)("h2",{id:"文章推荐-1",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#文章推荐-1","aria-hidden":"true"},"#"),(0,s.Uk)(" 文章推荐")],-1),u=(0,s.Uk)("文章推荐"),h=(0,s._)("h2",{id:"评论",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#评论","aria-hidden":"true"},"#"),(0,s.Uk)(" 评论")],-1),m=(0,s.Uk)("评论"),b=(0,s._)("h2",{id:"页脚",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#页脚","aria-hidden":"true"},"#"),(0,s.Uk)(" 页脚")],-1),g=(0,s.Uk)("页脚"),k={},v=(0,n(3744).Z)(k,[["render",function(e,a){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,l,r,p,(0,s._)("p",null,[(0,s.Wm)(n,{to:"/feature/donate.html"},{default:(0,s.w5)((()=>[i])),_:1})]),o,(0,s._)("p",null,[(0,s.Wm)(n,{to:"/feature/seo.html"},{default:(0,s.w5)((()=>[c])),_:1})]),d,(0,s._)("p",null,[(0,s.Wm)(n,{to:"/feature/recommend.html"},{default:(0,s.w5)((()=>[u])),_:1})]),h,(0,s._)("p",null,[(0,s.Wm)(n,{to:"/comment/"},{default:(0,s.w5)((()=>[m])),_:1})]),b,(0,s._)("p",null,[(0,s.Wm)(n,{to:"/footer.html"},{default:(0,s.w5)((()=>[g])),_:1})])],64)}]])}}]);