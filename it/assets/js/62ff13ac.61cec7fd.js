(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(8),a=(n(0),n(318)),l={id:"run",title:"pnpm run"},o={unversionedId:"cli/run",id:"version-6.x/cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/run.md",slug:"/cli/run",permalink:"/it/cli/run",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/it/cli/why"},next:{title:"pnpm test",permalink:"/it/cli/test"}},p=[{value:"Esempi",id:"esempi",children:[]},{value:"Dettagli",id:"dettagli",children:[]},{value:"Differenze con <code>num run</code>",id:"differenze-con-num-run",children:[]},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[]},{value:"shell-emulator",id:"shell-emulator",children:[]},{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--stream",id:"--stream",children:[]},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"run-script")),Object(a.b)("p",null,"Esegue uno script definito nel manifest del pacchetto."),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("p",null,"Diciamo che hai uno script ",Object(a.b)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", cos\xec:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),Object(a.b)("p",null,"Ora puoi eseguire questo script usando ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),Object(a.b)("h2",{id:"dettagli"},"Dettagli"),Object(a.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," includes ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",Object(a.b)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),Object(a.b)("p",null,"And even though ",Object(a.b)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),Object(a.b)("p",null,"For workspaces, as of v3.5, ",Object(a.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(a.b)("h2",{id:"differenze-con-num-run"},"Differenze con ",Object(a.b)("inlineCode",{parentName:"h2"},"num run")),Object(a.b)("p",null,"Di default, pnpm non esegue gli hook arbitrari ",Object(a.b)("inlineCode",{parentName:"p"},"pre")," e ",Object(a.b)("inlineCode",{parentName:"p"},"post")," per gli script definiti dall'utente (come ad esempio ",Object(a.b)("inlineCode",{parentName:"p"},"prestare"),"). Questo comportamento, ereditato da npm, ha fatto s\xec che gli script siano impliciti invece che espliciti, nascondendo il flusso di esecuzione. It also led to surprising executions with ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),Object(a.b)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",Object(a.b)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"script-shell"},"script-shell"),Object(a.b)("p",null,"Added in: v5.10.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"null")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"path"))),Object(a.b)("p",null,"The shell to use for scripts run with the ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," command."),Object(a.b)("p",null,"For instance, to force usage of Git Bash on Windows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),Object(a.b)("h3",{id:"shell-emulator"},"shell-emulator"),Object(a.b)("p",null,"Added in: v5.8.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),Object(a.b)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),Object(a.b)("p",null,"But if the ",Object(a.b)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),Object(a.b)("h3",{id:"--if-present"},"--if-present"),Object(a.b)("p",null,"Added in: v4.5.0"),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),Object(a.b)("h3",{id:"--parallel"},"--parallel"),Object(a.b)("p",null,"Added in: v5.1.0"),Object(a.b)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),Object(a.b)("h3",{id:"--stream"},"--stream"),Object(a.b)("p",null,"Added in: v5.1.0"),Object(a.b)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),Object(a.b)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),Object(a.b)("p",null,"Added in: v6.1.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/it/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=i,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);