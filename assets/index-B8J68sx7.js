import{o as $m,j as Ge,R as xt,r as ha,$ as dr,W as xm}from"./AlertSnackbar-BD804zb_.js";import{G as Ch,H as zh,J as Sm}from"./index-DTzDslTL.js";import{f as Tm,g as km,r as Em,h as Im,M as Cm,s as zm}from"./svg-icons-D_J6eAcz.js";import{I as Om}from"./env-DWkyVZs8.js";var Am="2.0.10",df=500,Oh="user-agent",ya="",Ah="?",vt={FUNCTION:"function",OBJECT:"object",STRING:"string",UNDEFINED:"undefined"},Qt="browser",Hr="cpu",Mr="device",Sr="engine",sr="os",_a="result",X="name",G="type",J="vendor",Q="version",Lt="architecture",$s="major",Z="model",Ks="console",Be="mobile",Ye="tablet",$t="smarttv",Rr="wearable",Ws="xr",vs="embedded",Rm="fetcher",Fr="inapp",Bo="brands",Wi="formFactors",Do="fullVersionList",ba="platform",Po="platformVersion",Js="bitness",ui="sec-ch-ua",Mm=ui+"-full-version-list",Bm=ui+"-arch",Dm=ui+"-"+Js,Pm=ui+"-form-factors",Um=ui+"-"+Be,Nm=ui+"-"+Z,pf=ui+"-"+ba,Lm=pf+"-version",cf=[Bo,Do,Be,Z,ba,Po,Lt,Wi,Js],Gs="Amazon",fa="Apple",Rh="ASUS",Mh="BlackBerry",Vi="Google",fo="Huawei",mo="Lenovo",Bh="Honor",js="LG",go="Microsoft",wo="Motorola",Dh="Nvidia",Ph="OnePlus",yo="OPPO",ds="Samsung",Uh="Sharp",ps="Sony",_o="Xiaomi",bo="Zebra",Nh="Chrome",Lh="Chromium",ai="Chromecast",Zs="Edge",cs="Firefox",ma="Opera",vo="Facebook",Vh="Sogou",ga="Mobile ",Fi=" Browser",Co="Windows",Vm=typeof window!==vt.UNDEFINED,Xt=Vm&&window.navigator?window.navigator:void 0,Gi=Xt&&Xt.userAgentData?Xt.userAgentData:void 0,Fm=function(v,R){var D={},q=R;if(!Qs(R)){q={};for(var Y in R)for(var ee in R[Y])q[ee]=R[Y][ee].concat(q[ee]?q[ee]:[])}for(var L in v)D[L]=q[L]&&q[L].length%2===0?q[L].concat(v[L]):v[L];return D},Ys=function(v){for(var R={},D=0;D<v.length;D++)R[v[D].toUpperCase()]=v[D];return R},zo=function(v,R){if(typeof v===vt.OBJECT&&v.length>0){for(var D in v)if(ni(R)==ni(v[D]))return!0;return!1}return va(v)?ni(R)==ni(v):!1},Qs=function(v,R){for(var D in v)return/^(browser|cpu|device|engine|os)$/.test(D)||(R?Qs(v[D]):!1)},va=function(v){return typeof v===vt.STRING},$o=function(v){if(v){for(var R=[],D=wa(v).split(","),q=0;q<D.length;q++)if(D[q].indexOf(";")>-1){var Y=Ss(D[q]).split(";v=");R[q]={brand:Y[0],version:Y[1]}}else R[q]=Ss(D[q]);return R}},ni=function(v){return va(v)?v.toLowerCase():v},Oo=function(v){return va(v)?xs(/[^\d\.]/g,v).split(".")[0]:void 0},wa=function(v){return va(v)?Ss(xs(/\\?\"/g,v),df):void 0},jr=function(v){for(var R in v)if(v.hasOwnProperty(R)){var D=v[R];typeof D==vt.OBJECT&&D.length==2?this[D[0]]=D[1]:this[D]=void 0}return this},xs=function(v,R){return va(R)?R.replace(v,ya):R},Ss=function(v,R){return v=xs(/^\s\s*/,String(v)),typeof R===vt.UNDEFINED?v:v.substring(0,R)},Ao=function(v,R){if(!(!v||!R))for(var D=0,q,Y,ee,L,W,S;D<R.length&&!W;){var K=R[D],F=R[D+1];for(q=Y=0;q<K.length&&!W&&K[q];)if(W=K[q++].exec(v),W)for(ee=0;ee<F.length;ee++)S=W[++Y],L=F[ee],typeof L===vt.OBJECT&&L.length>0?L.length===2?typeof L[1]==vt.FUNCTION?this[L[0]]=L[1].call(this,S):this[L[0]]=L[1]:L.length>=3&&(typeof L[1]===vt.FUNCTION&&!(L[1].exec&&L[1].test)?L.length>3?this[L[0]]=S?L[1].apply(this,L.slice(2)):void 0:this[L[0]]=S?L[1].call(this,S,L[2]):void 0:L.length==3?this[L[0]]=S?S.replace(L[1],L[2]):void 0:L.length==4?this[L[0]]=S?L[3].call(this,S.replace(L[1],L[2])):void 0:L.length>4&&(this[L[0]]=S?L[3].apply(this,[S.replace(L[1],L[2])].concat(L.slice(4))):void 0)):this[L]=S||void 0;D+=2}},qm=function(v,R){return R.test.test(v)?R.ifTrue:R.ifFalse},xr=function(v,R){for(var D in R)if(typeof R[D]===vt.OBJECT&&R[D].length>0){for(var q=0;q<R[D].length;q++)if(zo(R[D][q],v))return D===Ah?void 0:D}else if(zo(R[D],v))return D===Ah?void 0:D;return R.hasOwnProperty("*")?R["*"]:v},Fh={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},qh={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Wm={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},Gm={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[Q,[X,ga+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[Q,[X,Zs+" WebView"],[G,Fr]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Q,[X,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[X,Q],[/opios[\/ ]+([\w\.]+)/i],[Q,[X,ma+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[Q,[X,ma+" GX"]],[/\bopr\/([\w\.]+)/i],[Q,[X,ma]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[Q,[X,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[Q,[X,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,/(brave)(?: chrome)?\/([\d\.]+)/i,/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,/(qwant)(?:ios|mobile)\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[X,Q],[/quark(?:pc)?\/([-\w\.]+)/i],[Q,[X,"Quark"]],[/\bddg\/([\w\.]+)/i],[Q,[X,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],[Q,[X,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[Q,[X,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Q,[X,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Q,[X,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Q,[X,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[Q,[X,"Smart "+mo+Fi]],[/(av(?:ast|g|ira))\/([\w\.]+)/i],[[X,/(.+)/,"$1 Secure"+Fi],Q],[/norton\/([\w\.]+)/i],[Q,[X,"Norton Private"+Fi]],[/\bfocus\/([\w\.]+)/i],[Q,[X,cs+" Focus"]],[/ mms\/([\w\.]+)$/i],[Q,[X,ma+" Neon"]],[/ opt\/([\w\.]+)$/i],[Q,[X,ma+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Q,[X,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Q,[X,"Dolphin"]],[/coast\/([\w\.]+)/i],[Q,[X,ma+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Q,[X,"MIUI"+Fi]],[/fxios\/([\w\.-]+)/i],[Q,[X,ga+cs]],[/\bqihoobrowser\/?([\w\.]*)/i],[Q,[X,"360"]],[/\b(qq)\/([\w\.]+)/i],[[X,/(.+)/,"$1Browser"],Q],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[X,/(.+)/,"$1"+Fi],Q],[/ HBPC\/([\w\.]+)/],[Q,[X,fo+Fi]],[/samsungbrowser\/([\w\.]+)/i],[Q,[X,ds+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[Q,[X,Vh+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[X,Vh+" Mobile"],Q],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[X,Q],[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],[X],[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],[Q,X],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[X,vo],Q,[G,Fr]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(bing)(?:web|sapphire)\/([\w\.]+)/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[X,Q,[G,Fr]],[/\bgsa\/([\w\.]+) .*safari\//i],[Q,[X,"GSA"],[G,Fr]],[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],[Q,[X,"TikTok"],[G,Fr]],[/\[(linkedin)app\]/i],[X,[G,Fr]],[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],[[X,/(.+)/,"Zalo"],Q,[G,Fr]],[/(chromium)[\/ ]([-\w\.]+)/i],[X,Q],[/ome-(lighthouse)$/i],[X,[G,Rm]],[/headlesschrome(?:\/([\w\.]+)| )/i],[Q,[X,Nh+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[Q,[X,Zs+" WebView2"],[G,Fr]],[/; wv\).+(chrome)\/([\w\.]+)/i],[[X,Nh+" WebView"],Q,[G,Fr]],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Q,[X,"Android"+Fi]],[/chrome\/([\w\.]+) mobile/i],[Q,[X,ga+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[X,Q],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[Q,[X,ga+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[X,ga+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[Q,X],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[X,[Q,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[X,Q],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[X,ga+cs],Q],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[X,"Netscape"],Q],[/(wolvic|librewolf)\/([\w\.]+)/i],[X,Q],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Q,[X,cs+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[X,[Q,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[X,[Q,/[^\d\.]+./,ya]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[Lt,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[Lt,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[Lt,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[Lt,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[Lt,"arm"]],[/ sun4\w[;\)]/i],[[Lt,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,/((ppc|powerpc)(64)?)( mac|;|\))/i,/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],[[Lt,/ower/,ya,ni]],[/mc680.0/i],[[Lt,"68k"]],[/winnt.+\[axp/i],[[Lt,"alpha"]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[Z,[J,ds],[G,Ye]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[Z,[J,ds],[G,Be]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],[Z,[J,fa],[G,Be]],[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,/\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],[Z,[J,fa],[G,Ye]],[/(macintosh);/i],[Z,[J,fa]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[Z,[J,Uh],[G,Be]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[Z,[J,Bh],[G,Ye]],[/honor([-\w ]+)[;\)]/i],[Z,[J,Bh],[G,Be]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[Z,[J,fo],[G,Ye]],[/(?:huawei) ?([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],[Z,[J,fo],[G,Be]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[Z,/_/g," "],[J,_o],[G,Ye]],[/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,/; ([\w ]+) miui\/v?\d/i],[[Z,/_/g," "],[J,_o],[G,Be]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[Z,[J,Ph],[G,Be]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[Z,[J,yo],[G,Be]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[Z,[J,xr,{OnePlus:["203","304","403","404","413","415"],"*":yo}],[G,Ye]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[Z,[J,"BLU"],[G,Be]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[Z,[J,"Vivo"],[G,Be]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[Z,[J,"Realme"],[G,Be]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[Z,[J,mo],[G,Ye]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[Z,[J,mo],[G,Be]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[Z,[J,wo],[G,Be]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[Z,[J,wo],[G,Ye]],[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[Z,[J,js],[G,Ye]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[Z,[J,js],[G,Be]],[/(nokia) (t[12][01])/i],[J,Z,[G,Ye]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],[[Z,/_/g," "],[G,Be],[J,"Nokia"]],[/(pixel (c|tablet))\b/i],[Z,[J,Vi],[G,Ye]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[Z,[J,Vi],[G,Be]],[/(google) (pixelbook( go)?)/i],[J,Z],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[Z,[J,ps],[G,Be]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[Z,"Xperia Tablet"],[J,ps],[G,Ye]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[Z,[J,Gs],[G,Ye]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[Z,/(.+)/g,"Fire Phone $1"],[J,Gs],[G,Be]],[/(playbook);[-\w\),; ]+(rim)/i],[Z,J,[G,Ye]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/(?:blackberry|\(bb10;) (\w+)/i],[Z,[J,Mh],[G,Be]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[Z,[J,Rh],[G,Ye]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[Z,[J,Rh],[G,Be]],[/(nexus 9)/i],[Z,[J,"HTC"],[G,Ye]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[J,[Z,/_/g," "],[G,Be]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[Z,[J,"TCL"],[G,Ye]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[Z,[J,"TCL"],[G,Be]],[/(itel) ((\w+))/i],[[J,ni],Z,[G,xr,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[Z,[J,"Acer"],[G,Ye]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[Z,[J,"Meizu"],[G,Be]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[Z,[J,"Ulefone"],[G,Be]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[Z,[J,"Energizer"],[G,Be]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[Z,[J,"Cat"],[G,Be]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[Z,[J,"Smartfren"],[G,Be]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[Z,[J,"Nothing"],[G,Be]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[Z,[J,"Archos"],[G,Ye]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[Z,[J,"Archos"],[G,Be]],[/blackview ([-\w ]+)( b|\))/i,/; (bv\d{4}[-\w ]*)( b|\))/i],[Z,[J,"Blackview"],[G,Be]],[/; (n159v)/i],[Z,[J,"HMD"],[G,Be]],[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],[Z,[G,qm,{test:/ta?b/i,ifTrue:Ye,ifFalse:Be}],[J,"T-Mobile"]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[J,Z,[G,Ye]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i,/(hisense) ([ehv][\w ]+)\)/i,/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],[J,Z,[G,Be]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[J,Z,[G,Ye]],[/(surface duo)/i],[Z,[J,go],[G,Ye]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[Z,[J,"Fairphone"],[G,Be]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[Z,[J,Dh],[G,Ye]],[/(sprint) (\w+)/i],[J,Z,[G,Be]],[/(kin\.[onetw]{3})/i],[[Z,/\./g," "],[J,go],[G,Be]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[Z,[J,bo],[G,Ye]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[Z,[J,bo],[G,Be]],[/(philips)[\w ]+tv/i,/smart-tv.+(samsung)/i],[J,[G,$t]],[/hbbtv.+maple;(\d+)/i],[[Z,/^/,"SmartTV"],[J,ds],[G,$t]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[J,Z,[G,$t]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[J,js],[G,$t]],[/(apple) ?tv/i],[J,[Z,fa+" TV"],[G,$t]],[/crkey.*devicetype\/chromecast/i],[[Z,ai+" Third Generation"],[J,Vi],[G,$t]],[/crkey.*devicetype\/([^/]*)/i],[[Z,/^/,"Chromecast "],[J,Vi],[G,$t]],[/fuchsia.*crkey/i],[[Z,ai+" Nest Hub"],[J,Vi],[G,$t]],[/crkey/i],[[Z,ai],[J,Vi],[G,$t]],[/(portaltv)/i],[Z,[J,vo],[G,$t]],[/droid.+aft(\w+)( bui|\))/i],[Z,[J,Gs],[G,$t]],[/(shield \w+ tv)/i],[Z,[J,Dh],[G,$t]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[Z,[J,Uh],[G,$t]],[/(bravia[\w ]+)( bui|\))/i],[Z,[J,ps],[G,$t]],[/(mi(tv|box)-?\w+) bui/i],[Z,[J,_o],[G,$t]],[/Hbbtv.*(technisat) (.*);/i],[J,Z,[G,$t]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[J,/.+\/(\w+)/,"$1",xr,{LG:"lge"}],[Z,Ss],[G,$t]],[/(playstation \w+)/i],[Z,[J,ps],[G,Ks]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[Z,[J,go],[G,Ks]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i,/(valve).+(steam deck)/i,/droid.+; ((shield|rgcube|gr0006))( bui|\))/i],[[J,xr,{Nvidia:"Shield",Anbernic:"RGCUBE",Logitech:"GR0006"}],Z,[G,Ks]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[Z,[J,ds],[G,Rr]],[/((pebble))app/i,/(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[J,Z,[G,Rr]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[Z,[J,yo],[G,Rr]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[Z,[J,fa],[G,Rr]],[/(opwwe\d{3})/i],[Z,[J,Ph],[G,Rr]],[/(moto 360)/i],[Z,[J,wo],[G,Rr]],[/(smartwatch 3)/i],[Z,[J,ps],[G,Rr]],[/(g watch r)/i],[Z,[J,js],[G,Rr]],[/droid.+; (wt63?0{2,3})\)/i],[Z,[J,bo],[G,Rr]],[/droid.+; (glass) \d/i],[Z,[J,Vi],[G,Ws]],[/(pico) ([\w ]+) os\d/i],[J,Z,[G,Ws]],[/(quest( \d| pro)?s?).+vr/i],[Z,[J,vo],[G,Ws]],[/mobile vr; rv.+firefox/i],[[G,Ws]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[J,[G,vs]],[/(aeobc)\b/i],[Z,[J,Gs],[G,vs]],[/(homepod).+mac os/i],[Z,[J,fa],[G,vs]],[/windows iot/i],[[G,vs]],[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],[Z,[G,$t]],[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],[[G,$t]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],[Z,[G,xr,{mobile:"Mobile",xr:"VR","*":Ye}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[G,Ye]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[G,Be]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[Z,[J,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Q,[X,Zs+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[X,Q],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Q,[X,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[X,Q],[/ladybird\//i],[[X,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Q,X]],os:[[/(windows nt) (6\.[23]); arm/i],[[X,/N/,"R"],[Q,xr,Fh]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[X,Q],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[Q,/(;|\))/g,"",xr,Fh],[X,Co]],[/(windows ce)\/?([\d\.]*)/i],[X,Q],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,/\btvos ?([\w\.]+)/i,/cfnetwork\/.+darwin/i],[[Q,/_/g,"."],[X,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[X,"macOS"],[Q,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[Q,[X,ai+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[Q,[X,ai+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[Q,[X,ai+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[Q,[X,ai+" Linux"]],[/crkey\/([\d\.]+)/i],[Q,[X,ai]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[Q,X],[/(ubuntu) ([\w\.]+) like android/i],[[X,/(.+)/,"$1 Touch"],Q],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[X,Q],[/\(bb(10);/i],[Q,[X,Mh]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[Q,[X,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],[Q,[X,cs+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[Q,[X,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[Q,xr,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[X,"webOS"]],[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],[Q,[X,"watchOS"]],[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],[Q,[X,"Chrome OS"]],[/kepler ([\w\.]+); (aft|aeo)/i],[Q,[X,"Vega OS"]],[/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[X,Q],[/(sunos) ?([\d\.]*)/i],[[X,"Solaris"],Q],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[X,Q]]},Hs=(function(){var v={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return jr.call(v.init,[[Qt,[X,Q,$s,G]],[Hr,[Lt]],[Mr,[G,Z,J]],[Sr,[X,Q]],[sr,[X,Q]]]),jr.call(v.isIgnore,[[Qt,[Q,$s]],[Sr,[Q]],[sr,[Q]]]),jr.call(v.isIgnoreRgx,[[Qt,/ ?browser$/i],[sr,/ ?os$/i]]),jr.call(v.toString,[[Qt,[X,Q]],[Hr,[Lt]],[Mr,[J,Z]],[Sr,[X,Q]],[sr,[X,Q]]]),v})(),jm=function(v,R){var D=Hs.init[R],q=Hs.isIgnore[R]||0,Y=Hs.isIgnoreRgx[R]||0,ee=Hs.toString[R]||0;function L(){jr.call(this,D)}return L.prototype.getItem=function(){return v},L.prototype.withClientHints=function(){return Gi?Gi.getHighEntropyValues(cf).then(function(W){return v.setCH(new hf(W,!1)).parseCH().get()}):v.parseCH().get()},L.prototype.withFeatureCheck=function(){return v.detectFeature().get()},R!=_a&&(L.prototype.is=function(W){var S=!1;for(var K in this)if(this.hasOwnProperty(K)&&!zo(q,K)&&ni(Y?xs(Y,this[K]):this[K])==ni(Y?xs(Y,W):W)){if(S=!0,W!=vt.UNDEFINED)break}else if(W==vt.UNDEFINED&&S){S=!S;break}return S},L.prototype.toString=function(){var W=ya;for(var S in ee)typeof this[ee[S]]!==vt.UNDEFINED&&(W+=(W?" ":ya)+this[ee[S]]);return W||vt.UNDEFINED}),L.prototype.then=function(W){var S=this,K=function(){for(var fe in S)S.hasOwnProperty(fe)&&(this[fe]=S[fe])};K.prototype={is:L.prototype.is,toString:L.prototype.toString,withClientHints:L.prototype.withClientHints,withFeatureCheck:L.prototype.withFeatureCheck};var F=new K;return W(F),F},new L};function hf(v,R){if(v=v||{},jr.call(this,cf),R)jr.call(this,[[Bo,$o(v[ui])],[Do,$o(v[Mm])],[Be,/\?1/.test(v[Um])],[Z,wa(v[Nm])],[ba,wa(v[pf])],[Po,wa(v[Lm])],[Lt,wa(v[Bm])],[Wi,$o(v[Pm])],[Js,wa(v[Dm])]]);else for(var D in v)this.hasOwnProperty(D)&&typeof v[D]!==vt.UNDEFINED&&(this[D]=v[D])}function oi(v,R,D,q){return jr.call(this,[["itemType",v],["ua",R],["uaCH",q],["rgxMap",D],["data",jm(this,v)]]),this}oi.prototype.get=function(v){return v?this.data.hasOwnProperty(v)?this.data[v]:void 0:this.data};oi.prototype.set=function(v,R){return this.data[v]=R,this};oi.prototype.setCH=function(v){return this.uaCH=v,this};oi.prototype.detectFeature=function(){if(Xt&&Xt.userAgent==this.ua)switch(this.itemType){case Qt:Xt.brave&&typeof Xt.brave.isBrave==vt.FUNCTION&&this.set(X,"Brave");break;case Mr:!this.get(G)&&Gi&&Gi[Be]&&this.set(G,Be),this.get(Z)=="Macintosh"&&Xt&&typeof Xt.standalone!==vt.UNDEFINED&&Xt.maxTouchPoints&&Xt.maxTouchPoints>2&&this.set(Z,"iPad").set(G,Ye);break;case sr:!this.get(X)&&Gi&&Gi[ba]&&this.set(X,Gi[ba]);break;case _a:var v=this.data,R=function(D){return v[D].getItem().detectFeature().get()};this.set(Qt,R(Qt)).set(Hr,R(Hr)).set(Mr,R(Mr)).set(Sr,R(Sr)).set(sr,R(sr))}return this};oi.prototype.parseUA=function(){switch(this.itemType!=_a&&Ao.call(this.data,this.ua,this.rgxMap),this.itemType){case Qt:this.set($s,Oo(this.get(Q)));break;case sr:if(this.get(X)=="iOS"&&this.get(Q)&&/^1[89][^\d]/.exec(this.get(Q))){var v=/\) Version\/((\d+)[\d\.]*)/.exec(this.ua);v&&parseInt(v[2],10)>=26&&this.set(Q,v[1])}break}return this};oi.prototype.parseCH=function(){var v=this.uaCH,R=this.rgxMap;switch(this.itemType){case Qt:case Sr:var D=v[Do]||v[Bo],q;if(D)for(var Y=0;Y<D.length;Y++){var ee=D[Y].brand||D[Y],L=D[Y].version;this.itemType==Qt&&!/not.a.brand/i.test(ee)&&(!q||/Chrom/.test(q)&&ee!=Lh||q==Zs&&/WebView2/.test(ee))&&(ee=xr(ee,Wm),q=this.get(X),q&&!/Chrom/.test(q)&&/Chrom/.test(ee)||this.set(X,ee).set(Q,L).set($s,Oo(L)),q=ee),this.itemType==Sr&&ee==Lh&&this.set(Q,L)}break;case Hr:var W=v[Lt];W&&(W&&v[Js]=="64"&&(W+="64"),Ao.call(this.data,W+";",R));break;case Mr:if(v[Be]&&this.set(G,Be),v[Z]&&(this.set(Z,v[Z]),!this.get(G)||!this.get(J))){var S={};Ao.call(S,"droid 9; "+v[Z]+")",R),!this.get(G)&&S.type&&this.set(G,S.type),!this.get(J)&&S.vendor&&this.set(J,S.vendor)}if(v[Wi]){var K;if(typeof v[Wi]!="string")for(var F=0;!K&&F<v[Wi].length;)K=xr(v[Wi][F++],qh);else K=xr(v[Wi],qh);this.set(G,K)}break;case sr:var fe=v[ba];if(fe){var le=v[Po];fe==Co&&(le=parseInt(Oo(le),10)>=13?"11":"10"),this.set(X,fe).set(Q,le)}this.get(X)==Co&&v[Z]=="Xbox"&&this.set(X,"Xbox").set(Q,void 0);break;case _a:var ce=this.data,oe=function(ae){return ce[ae].getItem().setCH(v).parseCH().get()};this.set(Qt,oe(Qt)).set(Hr,oe(Hr)).set(Mr,oe(Mr)).set(Sr,oe(Sr)).set(sr,oe(sr))}return this};function Kr(v,R,D){if(typeof v===vt.OBJECT?(Qs(v,!0)?(typeof R===vt.OBJECT&&(D=R),R=v):(D=v,R=void 0),v=void 0):typeof v===vt.STRING&&!Qs(R,!0)&&(D=R,R=void 0),D)if(typeof D.append===vt.FUNCTION){var q={};D.forEach(function(F,fe){q[String(fe).toLowerCase()]=F}),D=q}else{var Y={};for(var ee in D)D.hasOwnProperty(ee)&&(Y[String(ee).toLowerCase()]=D[ee]);D=Y}if(!(this instanceof Kr))return new Kr(v,R,D).getResult();var L=typeof v===vt.STRING?v:D&&D[Oh]?D[Oh]:Xt&&Xt.userAgent?Xt.userAgent:ya,W=new hf(D,!0),S=Gm,K=function(F){return F==_a?function(){return new oi(F,L,S,W).set("ua",L).set(Qt,this.getBrowser()).set(Hr,this.getCPU()).set(Mr,this.getDevice()).set(Sr,this.getEngine()).set(sr,this.getOS()).get()}:function(){return new oi(F,L,S[F],W).parseUA().get()}};return jr.call(this,[["getBrowser",K(Qt)],["getCPU",K(Hr)],["getDevice",K(Mr)],["getEngine",K(Sr)],["getOS",K(sr)],["getResult",K(_a)],["getUA",function(){return L}],["setUA",function(F){return va(F)&&(L=Ss(F,df)),this}],["useExtension",function(F){return F&&(S=Fm(S,F)),this}]]).setUA(L).useExtension(R),this}Kr.VERSION=Am;Kr.BROWSER=Ys([X,Q,$s,G]);Kr.CPU=Ys([Lt]);Kr.DEVICE=Ys([Z,J,G,Ks,Be,$t,Ye,Rr,vs]);Kr.ENGINE=Kr.OS=Ys([X,Q]);const hs=new Map;function Hm(v){const R=v.toString();if(hs.has(R))return hs.get(R);const D=new Promise((q,Y)=>{v().then(ee=>{q(ee),hs.delete(R)}).catch(ee=>{Y(ee),hs.delete(R)})});return hs.set(R,D),D}const Uo="lp-cid";let No;function fg(){try{return sessionStorage.getItem(Uo)}catch(v){return console.error("Unable to use browser cache",v),No}}function mg(v){try{No=v,sessionStorage.setItem(Uo,v)}catch(R){console.error("Unable to use browser cache",R)}}function gg(){try{No=void 0,sessionStorage.removeItem(Uo)}catch(v){console.error("Unable to use browser cache",v)}}async function ff(){const v=Om;let R=null;const D=sessionStorage.getItem("locationDetails");if(!D)R=await Hm(()=>$m(`https://api.ipdata.co?api-key=${v}`)).catch(q=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:q.message})),sessionStorage.setItem("locationDetails",JSON.stringify(R));else try{R=JSON.parse(D)}catch{R={country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:"Error parsing from sessionStorage"}}return R}async function wg(){const v=await ff(),D=new Kr().getResult()||{},{ip:q,is_eu:Y,city:ee,region:L,region_code:W,region_type:S,country_name:K,country_code:F,continent_name:fe,continent_code:le,latitude:ce,longitude:oe,postal:ae,calling_code:Te,time_zone:Fe,currency:Ze}=v,_e={ipAddress:q,deviceType:D.device?.type,browserName:D.browser?.name,osName:D.os?.name,...Km()};return _e.locationDetails={is_eu:Y,city:ee,region:L,region_code:W,region_type:S,country_name:K,country_code:F,continent_name:fe,continent_code:le,latitude:ce,longitude:oe,postal:ae,calling_code:Te,time_zone:Fe,currency:Ze},_e}const mf={name:"English",native:"English",code:"en"},Ro=[mf],gf="lp_prefLang";function wf(){let v=null;const R=localStorage.getItem(gf);if(R)try{const{name:D,native:q,code:Y}=JSON.parse(R);D&&q&&Y&&(v={name:D,native:q,code:Y})}catch(D){console.log("Error parsing language preference:",D)}return v||mf}function yg(v){v&&localStorage.setItem(gf,JSON.stringify(v))}function Km(){const v=new URLSearchParams(window.location.search),R=v.get("sourceUrl")||void 0,D=v.get("referrerUrl")||void 0;return{utmParameters:Array.from(v.keys()).reduce((Y,ee)=>{if(ee.startsWith("utm_")){Y=Y||{};const L=v.get(ee);L&&L!=="null"&&(Y[ee]=L)}return Y},void 0),sourceUrl:R,referrerUrl:D}}function _g(v,R={}){if(!v)return;const{chatWindowType:D,chatWindowWidth:q,chatWindowHeight:Y,mobileChatWindowWidth:ee,mobileChatWindowHeight:L,chatDisclaimer:W,hideLivservBranding:S,windowAlign:K,minimizeOnClick:F,paddingLeft:fe,paddingBottom:le,fontType:ce,fontName:oe,remoteFontLink:ae,externalCssLinks:Te,maximizeChatWindowAfter:Fe,multiLanguageChat:Ze,translateLanguages:_e,defaultLanguage:Ee,launcherType:me,buttonOnMobile:he,barText:je,launcherSpacingCorner:ne,launcherSpacingBottom:qe,showMinimizeButtonToolTip:et,titleText:it,subTitleText:nt,bgColor:at,fontColor:ht,headerPadding:Jt,logoWidth:Le,logoHeight:At,headerLogoMargin:Yt,headerFontSize:Et,botLogo:lt,hideRefreshButton:It,launcherTooltipText:Ct,visitorBorderColor:Rt,visitorBackgroundColor:Vt,visitorFontColor:nr,visitorMessageLogo:Ft,visitorBubbleBorderCurve:Tt,botBorderColor:We,botBackgroundColor:Qe,botFontColor:Xe,botMessageLogo:qt,botBubbleBorderCurve:Je,messageBubbleLogo:er,fontSize:dt,botChatButton:pt,placeholder:ot,domainSettings:ut,activateVoiceBot:Pt,openLinksInSameTab:Tr}=v,{url:Zr}=lt||{},{url:Mt}=Ft||{},{url:kr}=qt||{},{url:$a}=pt||{},li={launcherType:me,buttonLogoUrl:$a,spacingCorner:ne,spacingBottom:qe,showMinimizeButtonToolTip:et};me==="bar"&&(li.buttonOnMobile=he&&window.outerWidth<=700,li.barText=je);const ji=Wh(at);let Hi=q||"380px",Xr=Y||"500px";return window.outerWidth<=700&&(Hi=ee||q||"380px",Xr=L||Y||"500px"),{window:{width:Hi,height:Xr,align:K,minimizeOnClick:F,spacingCorner:fe||"5px",spacingBottom:le||"5px",fontFamily:oe,disclaimer:W,hideLivservBranding:S,domainSettings:ut,chatWindowType:D,maximizeChatWindowAfter:Fe,openLinksInSameTab:Tr,...R.window},remoteFontLink:ce==="remote"?ae:void 0,externalCssLinks:Te,launcher:{launcherTooltipText:Ct,...li,...R.launcher},header:{titleText:it,subTitleText:nt,bgColor:at,secBgColor:ji,fontColor:ht,hideRefreshButton:It,padding:Jt,fontSize:Et,logo:Zr?{width:Le,height:At,margin:Yt,url:Zr}:void 0,...R.header},body:{visitorBlock:{borderColor:Rt,backgroundColor:Vt,color:nr,useLogo:!!Mt,logoUrl:Mt,borderRadius:Tt,showLogo:er,fontSize:dt},assistantBlock:{borderColor:We,backgroundColor:Qe,color:Xe,useLogo:!!kr,logoUrl:kr,borderRadius:Je,showLogo:er,fontSize:dt}},composer:{placeholder:ot,pColor:at,bgColor:Wh(at,25),secBgColor:ji,iconColor:ht,fontSize:dt,multiLanguageChat:Ze,translateLanguages:_e,defaultLanguage:Ee,activateVoiceBot:Pt}}}function Wh(v,R=70){if(!v)return v;let D=parseInt(v.slice(1,3),16),q=parseInt(v.slice(3,5),16),Y=parseInt(v.slice(5,7),16);return D=Math.min(255,D+R),q=Math.min(255,q+R),Y=Math.min(255,Y+R),"#"+(1<<24|D<<16|q<<8|Y).toString(16).slice(1)}function Zm({design:v,onClear:R,onHide:D,fullScreen:q}){const{logo:Y,bgColor:ee,secBgColor:L,fontColor:W,titleText:S="Live Chat",subTitleText:K,padding:F,fontSize:fe,hideRefreshButton:le}=v||{};return Ge.jsxs("div",{className:"header",style:{background:"linear-gradient(to right, "+ee+", "+L+")",padding:F,height:F?"initial":void 0},children:[!Y&&Ge.jsx("div",{className:"icon-block",children:Tm}),Y&&Ge.jsx("div",{className:"image-block",children:Ge.jsx("img",{src:Y.url,alt:"",style:{width:Y.width,height:Y.height,margin:Y.margin}})}),Ge.jsxs("div",{className:"title-block",children:[Ge.jsx("span",{className:"title",style:{color:W,fontSize:fe},children:S}),K&&Ge.jsx("span",{className:"sub-title",style:{color:W,fontSize:fe},children:K})]}),(D||R)&&Ge.jsxs("div",{className:"controls-block",style:D&&R?{width:"110px"}:void 0,children:[D&&!q&&Ge.jsx("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:D,style:{color:W},children:km}),R&&le!==!0&&Ge.jsx("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:R,style:{color:W},children:Em})]})]})}function Xm({message:v,hideLivservBranding:R,domainSettings:D}){const[q,Y]=xt.useState(!1),ee=()=>{Y(!0)},L=()=>{Y(!1)};return Ge.jsxs("div",{className:"disclaimer-block",children:[q&&Ge.jsx("div",{className:"disclaimerMessage",children:v}),Ge.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px"},children:[!R&&Ge.jsxs("span",{className:"link",style:{display:"inline"},children:["Powered by"," ",D?.displayName?Ge.jsx("a",{href:D?.website,target:"_blank",rel:"noreferrer",children:D?.displayName}):Ge.jsx("a",{href:"https://livserv.ai",target:"_blank",rel:"noreferrer",children:"Livserv.ai"})]}),v&&Ge.jsx("span",{className:"message",style:{display:"inline",cursor:"pointer"},onMouseEnter:ee,onMouseLeave:L,children:R?"Disclaimer":Im})]})]})}async function Qm(v){v=v||[];const R=await ff();if(Array.isArray(R?.languages)){const D=Mo(Ro,R.languages);return Mo(D,v)}else return Ro}function Mo(v,R){const D=[...v];return R.forEach(q=>{D.some(ee=>q.name&&ee.name===q.name||q.code&&ee.code===q.code||q.native&&ee.native===q.native)||D.push(q)}),D}function Jm({value:v="en",onChange:R,translateLanguages:D,defaultSelectedLanguage:q,pColor:Y}){const[ee,L]=ha.useState(Ro),[W,S]=ha.useState(!1),K=ha.useRef(null),[F,fe]=ha.useState(()=>q&&q[0]?q[0].code.toLowerCase():(typeof v=="string"?v:v?.code||v?.name||"en").toLowerCase());ha.useEffect(()=>{Qm(D).then(ae=>{q&&q.length>0&&(ae=Mo(ae,q)),L(ae),q&&q.length>0?fe(q[0].code.toLowerCase()):fe("en")})},[D,q]);const le=ee.find(ae=>ae.code?.toLowerCase()===F||ae.name?.toLowerCase()===F),ce=()=>S(!W),oe=ae=>{fe(ae.code.toLowerCase()),R(ae),S(!1)};return ha.useEffect(()=>{const ae=Te=>{K.current&&!K.current.contains(Te.target)&&S(!1)};return document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)},[]),Ge.jsxs("div",{ref:K,className:"language-dropdown",children:[Ge.jsx("button",{onClick:ce,className:"language-button",style:{borderColor:Y},children:le?.code?.toUpperCase()||"EN"}),W&&Ge.jsxs("div",{className:"language-dropdown-popover",children:[Ge.jsx("div",{className:"popover-header",children:"Choose Language"}),Ge.jsx("div",{className:"language-list",children:ee.map((ae,Te)=>Ge.jsx("div",{className:`language-item ${le?.code===ae.code?"selected":""}`,onClick:()=>oe(ae),children:ae.native},Te))})]})]})}var xo={},So={},fs={},Gh;function yf(){if(Gh)return fs;Gh=1,Object.defineProperty(fs,"__esModule",{value:!0}),fs.baseAssetPath=void 0;const R=typeof window<"u"&&typeof window.document<"u"?window.document.currentScript:null;let D="/";return R&&(D=R.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/")),fs.baseAssetPath=D,fs}var ms={},jh;function Lo(){if(jh)return ms;jh=1,Object.defineProperty(ms,"__esModule",{value:!0}),ms.defaultModelFetcher=void 0;const v=R=>fetch(R).then(D=>D.arrayBuffer());return ms.defaultModelFetcher=v,ms}var qr={},gs={},Hh;function Ts(){if(Hh)return gs;Hh=1,Object.defineProperty(gs,"__esModule",{value:!0}),gs.log=void 0;const v=R=>D=>{console.log(`VAD | ${R} >`,D)};return gs.log={error:v("error"),debug:v("debug"),warn:v("warn")},gs}var ws={},Kh;function en(){if(Kh)return ws;Kh=1,Object.defineProperty(ws,"__esModule",{value:!0}),ws.Message=void 0;var v;return(function(R){R.AudioFrame="AUDIO_FRAME",R.SpeechStart="SPEECH_START",R.VADMisfire="VAD_MISFIRE",R.SpeechEnd="SPEECH_END",R.SpeechStop="SPEECH_STOP",R.SpeechRealStart="SPEECH_REAL_START",R.FrameProcessed="FRAME_PROCESSED"})(v||(ws.Message=v={})),ws}var Zh;function Vo(){if(Zh)return qr;Zh=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.FrameProcessor=qr.validateOptions=qr.defaultFrameProcessorOptions=void 0;const v=Ts(),R=en();qr.defaultFrameProcessorOptions={positiveSpeechThreshold:.3,negativeSpeechThreshold:.25,preSpeechPadMs:800,redemptionMs:1400,minSpeechMs:400,submitUserSpeechOnPause:!1};function D(L){(L.positiveSpeechThreshold<0||L.positiveSpeechThreshold>1)&&v.log.error("positiveSpeechThreshold should be a number between 0 and 1"),(L.negativeSpeechThreshold<0||L.negativeSpeechThreshold>L.positiveSpeechThreshold)&&v.log.error("negativeSpeechThreshold should be between 0 and positiveSpeechThreshold"),L.preSpeechPadMs<0&&v.log.error("preSpeechPadMs should be positive"),L.redemptionMs<0&&v.log.error("redemptionMs should be positive"),L.minSpeechMs<0&&v.log.error("minSpeechMs should be positive")}qr.validateOptions=D;const q=L=>{const W=L.reduce((K,F)=>(K.push(K.at(-1)+F.length),K),[0]),S=new Float32Array(W.at(-1));return L.forEach((K,F)=>{const fe=W[F];S.set(K,fe)}),S};function Y(L,W){const S=Math.floor(L.redemptionMs/W),K=Math.floor(L.preSpeechPadMs/W),F=Math.floor(L.minSpeechMs/W);return{redemptionFrames:S,preSpeechPadFrames:K,minSpeechFrames:F}}class ee{constructor(W,S,K,F){this.modelProcessFunc=W,this.modelResetFunc=S,this.options=K,this.msPerFrame=F,this.speaking=!1,this.redemptionCounter=0,this.speechFrameCount=0,this.active=!1,this.speechRealStartFired=!1,this.setOptions=oe=>{this.options={...this.options,...oe};const{redemptionFrames:ae,preSpeechPadFrames:Te,minSpeechFrames:Fe}=Y(this.options,this.msPerFrame);this.redemptionFrames=ae,this.preSpeechPadFrames=Te,this.minSpeechFrames=Fe},this.reset=()=>{this.speaking=!1,this.speechRealStartFired=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0,this.speechFrameCount=0},this.pause=oe=>{this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment(oe):this.reset()},this.resume=()=>{this.active=!0},this.endSegment=oe=>{const ae=this.audioBuffer;this.audioBuffer=[];const Te=this.speaking;if(this.reset(),Te)if(ae.reduce((Ze,_e)=>_e.isSpeech?Ze+1:Ze,0)>=this.minSpeechFrames){const Ze=q(ae.map(_e=>_e.frame));oe({msg:R.Message.SpeechEnd,audio:Ze})}else oe({msg:R.Message.VADMisfire});return{}},this.process=async(oe,ae)=>{if(!this.active)return;const Te=await this.modelProcessFunc(oe),Fe=Te.isSpeech>=this.options.positiveSpeechThreshold;if(ae({probs:Te,msg:R.Message.FrameProcessed,frame:oe}),this.audioBuffer.push({frame:oe,isSpeech:Fe}),Fe&&(this.speechFrameCount++,this.redemptionCounter=0),Fe&&!this.speaking&&(this.speaking=!0,ae({msg:R.Message.SpeechStart})),this.speaking&&this.speechFrameCount===this.minSpeechFrames&&!this.speechRealStartFired&&(this.speechRealStartFired=!0,ae({msg:R.Message.SpeechRealStart})),Te.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.redemptionFrames){this.redemptionCounter=0,this.speechFrameCount=0,this.speaking=!1,this.speechRealStartFired=!1;const Ze=this.audioBuffer;if(this.audioBuffer=[],Ze.reduce((Ee,me)=>me.isSpeech?Ee+1:Ee,0)>=this.minSpeechFrames){const Ee=q(Ze.map(me=>me.frame));ae({msg:R.Message.SpeechEnd,audio:Ee})}else ae({msg:R.Message.VADMisfire})}if(!this.speaking){for(;this.audioBuffer.length>this.preSpeechPadFrames;)this.audioBuffer.shift();this.speechFrameCount=0}},this.audioBuffer=[];const{redemptionFrames:fe,preSpeechPadFrames:le,minSpeechFrames:ce}=Y(this.options,this.msPerFrame);this.redemptionFrames=fe,this.preSpeechPadFrames=le,this.minSpeechFrames=ce,this.reset()}}return qr.FrameProcessor=ee,qr}var Wr={},To={exports:{}},Xh;function Ym(){return Xh||(Xh=1,(function(v,R){var D=(()=>{var q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,W=(e=>typeof dr<"u"?dr:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof dr<"u"?dr:t)[r]}):e)(function(e){if(typeof dr<"u")return dr.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),S=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},K=(e,t)=>{for(var r in t)q(e,r,{get:t[r],enumerable:!0})},F=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ee(t))!L.call(e,a)&&a!==r&&q(e,a,{get:()=>t[a],enumerable:!(i=Y(t,a))||i.enumerable});return e},fe=e=>F(q({},"__esModule",{value:!0}),e),le,ce,oe,ae,Te,Fe=S(()=>{"use strict";le=new Map,ce=[],oe=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=le.get(e);if(i===void 0)le.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=ce.indexOf(e);a!==-1&&ce.splice(a,1);for(let s=0;s<ce.length;s++)if(le.get(ce[s]).priority<=r){ce.splice(s,0,e);return}ce.push(e)}return}throw new TypeError("not a valid backend")},ae=async e=>{let t=le.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Te=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?ce:r,a,s=[],n=new Set;for(let u of i){let l=await ae(u);typeof l=="string"?s.push({name:u,err:l}):(a||(a=l),a===l&&n.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of s)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>n.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Ze=S(()=>{"use strict";Fe()}),_e,Ee=S(()=>{"use strict";_e="1.29.0"}),me,he,je=S(()=>{"use strict";Ee(),me="warning",he={wasm:{},webgl:{},webgpu:{},versions:{common:_e},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);me=e}},get logLevel(){return me}},Object.defineProperty(he,"logLevel",{enumerable:!0})}),ne,qe=S(()=>{"use strict";je(),ne=he}),et,it,nt=S(()=>{"use strict";et=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let p=s*a,d=0,h=p,m=p*2,f=-1;n==="RGBA"?(d=0,h=p,m=p*2,f=p*3):n==="RGB"?(d=0,h=p,m=p*2):n==="RBG"&&(d=0,m=p,h=p*2);for(let y=0;y<s;y++)for(let $=0;$<a;$++){let _=(e.data[d++]-l[0])*u[0],w=(e.data[h++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],x=f===-1?255:(e.data[f++]-l[3])*u[3];i.fillStyle="rgba("+_+","+w+","+T+","+x+")",i.fillRect($,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},it=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let d=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,f=1,y=2,$=3,_=0,w=d,T=d*2,x=-1;o==="RGBA"?(_=0,w=d,T=d*2,x=d*3):o==="RGB"?(_=0,w=d,T=d*2):o==="RBG"&&(_=0,T=d,w=d*2),i=r.createImageData(a,s);for(let I=0;I<s*a;m+=h,f+=h,y+=h,$+=h,I++)i.data[m]=(e.data[_++]-p[0])*l[0],i.data[f]=(e.data[w++]-p[1])*l[1],i.data[y]=(e.data[T++]-p[2])*l[2],i.data[$]=x===-1?255:(e.data[x++]-p[3])*l[3]}else throw new Error("Can not access image data");return i}}),at,ht,Jt,Le,At,Yt,Et=S(()=>{"use strict";Qe(),at=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*i,p=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,h=0,m=1,f=2,y=3,$=0,_=l,w=l*2,T=-1;o==="RGB"&&(d=3,h=0,m=1,f=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?($=0,w=l,_=l*2):u==="BGR"&&(w=0,_=l,$=l*2);for(let x=0;x<l;x++,h+=d,f+=d,m+=d,y+=d)p[$++]=(e[h]+n[0])/s[0],p[_++]=(e[m]+n[1])/s[1],p[w++]=(e[f]+n[2])/s[2],T!==-1&&y!==-1&&(p[T++]=(e[y]+n[3])/s[3]);return u==="RGBA"?new We("float32",p,[1,4,r,i]):new We("float32",p,[1,3,r,i])},ht=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let d=l(p);if(d!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=m}else o.tensorFormat="RGBA",o.height=h,o.width=m;d.drawImage(e,0,0),n=d.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(i){let p,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,d=t.resizedWidth):(p=e.height,d=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=d,t!==void 0){let h=u();h.width=d,h.height=p;let m=l(h);if(m!=null)m.putImageData(e,0,0),n=m.getImageData(0,0,d,p).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let d=l(p);if(d!=null){let h=e.height,m=e.width;return d.drawImage(e,0,0,m,h),n=d.getImageData(0,0,m,h).data,o.height=h,o.width=m,at(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((p,d)=>{let h=u(),m=l(h);if(!e||!m)return d();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{h.width=f.width,h.height=f.height,m.drawImage(f,0,0,h.width,h.height);let y=m.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,p(at(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return at(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Jt=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new We({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},Le=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},At=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},Yt=(e,t,r)=>new We({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),lt,It,Ct,Rt,Vt=S(()=>{"use strict";lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),It=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ct=!1,Rt=()=>{if(!Ct){Ct=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(lt.set("int64",BigInt64Array),It.set(BigInt64Array,"int64")),t&&(lt.set("uint64",BigUint64Array),It.set(BigUint64Array,"uint64")),i?(lt.set("float16",r),It.set(r,"float16")):lt.set("float16",Uint16Array)}}}),nr,Ft,Tt=S(()=>{"use strict";Qe(),nr=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ft=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,Qe=S(()=>{"use strict";nt(),Et(),Vt(),Tt(),We=class{constructor(e,t,r){Rt();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=lt.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let u=lt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?n=u.from(t,BigInt):n=u.from(t)}else if(t instanceof u)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",n=e;else if(u==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let u=It.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=n,this.dataLocation="cpu"}let s=nr(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return ht(e,t)}static fromTexture(e,t){return Jt(e,t)}static fromGpuBuffer(e,t){return Le(e,t)}static fromMLTensor(e,t){return At(e,t)}static fromPinnedBuffer(e,t,r){return Yt(e,t,r)}toDataURL(e){return et(this,e)}toImageData(e){return it(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,e)}}}),Xe,qt=S(()=>{"use strict";Qe(),Xe=We}),Je,er,dt,pt,ot,ut,Pt=S(()=>{"use strict";je(),Je=(e,t)=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeStamp(`${e}::ORT::${t}`)},er=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Je("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},dt=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("BEGIN",e)},pt=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("END",e)},ot=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.time(`ORT::${e}`)},ut=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeEnd(`ORT::${e}`)}}),Tr,Zr=S(()=>{"use strict";Fe(),qt(),Pt(),Tr=class _f{constructor(t){this.handler=t}async run(t,r,i){dt(),ot("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,p=Object.getOwnPropertyNames(r);for(let d of this.outputNames)if(p.indexOf(d)!==-1){let h=r[d];(h===null||h instanceof Xe)&&(l=!0,n=!1,a[d]=h)}if(l){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(n)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,s),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let p=o[l];p instanceof Xe?u[l]=p:u[l]=new Xe(p.type,p.data,p.dims)}return ut("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,a){dt(),ot("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,d=0,h=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(d=r,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(h=t.byteLength-d,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||d+h>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-d}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(p,d,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Te(n),l=await o.createInferenceSessionHandler(s,u);return ut("InferenceSession.create"),pt(),new _f(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Mt,kr=S(()=>{"use strict";Zr(),Mt=Tr}),$a=S(()=>{"use strict"}),li=S(()=>{"use strict"}),ji=S(()=>{"use strict"}),Hi=S(()=>{"use strict"}),Xr={};K(Xr,{InferenceSession:()=>Mt,TRACE:()=>Je,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>ne,registerBackend:()=>oe});var gt=S(()=>{"use strict";Ze(),qe(),kr(),qt(),$a(),li(),Pt(),ji(),Hi()}),di=S(()=>{"use strict"}),xa={};K(xa,{default:()=>Sa});var pi,ci,Sa,tn=S(()=>{"use strict";fh(),Wt(),wi(),pi="ort-wasm-proxy-worker",ci=globalThis.self?.name===pi,ci&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":bi(r.wasm).then(()=>{eo(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;to(a,i).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:i}=r,a=Vs(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;io(i,a).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":ao(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:n,options:o}=r;no(i,a,s,n,new Array(n.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},uo([...s,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":oo(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Sa=ci?null:e=>new Worker(e??st,{type:"classic",name:pi})}),Ta,ka,st,hi,Br,Ea,Ia,fi,Ca,mi,za,gi,Oa,wi=S(()=>{"use strict";di(),Ta=typeof location>"u"?void 0:location.origin,ka=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,st=ka(),hi=()=>{if(st&&!st.startsWith("blob:"))return st.substring(0,st.lastIndexOf("/")+1)},Br=(e,t)=>{try{let r=t??st;return(r?new URL(e,r):new URL(e)).origin===Ta}catch{return!1}},Ea=(e,t)=>{let r=t??st;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ia=(e,t)=>`${t??"./"}${e}`,fi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ca=async e=>(await import(e)).default,mi=(tn(),fe(xa)).default,za=async()=>{if(!st)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Br(st))return[void 0,mi()];let e=await fi(st);return[e,mi(e)]},gi=void 0,Oa=async(e,t,r,i)=>{let a=gi&&!(e||t);if(a)if(st)a=Br(st)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,gi];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??Ea(s,t),o=r&&n&&!Br(n,t),u=o?await fi(n):n??Ia(s,t);return[o?u:void 0,await Ca(u)]}}}),yi,Dr,pr,_i,Aa,Ra,Ma,bi,Ie,Wt=S(()=>{"use strict";wi(),Dr=!1,pr=!1,_i=!1,Aa=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ra=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ma=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},bi=async e=>{if(Dr)return Promise.resolve();if(pr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(_i)throw new Error("previous call to 'initializeWebAssembly()' failed.");pr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ma())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ra())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Aa();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a?.mjs,o=n?.href??n,u=a?.wasm,l=u?.href??u,p=e.wasmBinary,[d,h]=await Oa(o,s,r>1,!!p||!!l),m=!1,f=[];if(t>0&&f.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),f.push(new Promise((y,$)=>{let _={numThreads:r};if(p)_.wasmBinary=p,_.locateFile=w=>w;else if(l||s)_.locateFile=w=>l??s+w;else if(o&&o.indexOf("blob:")!==0)_.locateFile=w=>new URL(w,o).href;else if(d){let w=hi();w&&(_.locateFile=T=>w+T)}h(_).then(w=>{pr=!1,Dr=!0,yi=w,y(),d&&URL.revokeObjectURL(d)},w=>{pr=!1,_i=!0,$(w)})})),await Promise.race(f),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ie=()=>{if(Dr&&yi)return yi;throw new Error("WebAssembly is not initialized yet.")}}),ft,Pr,be,vi=S(()=>{"use strict";Wt(),ft=(e,t)=>{let r=Ie(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Pr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")Pr(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},be=e=>{let t=Ie(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Ba,rn=S(()=>{"use strict";Wt(),vi(),Ba=e=>{let t=Ie(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let s=0;return e?.tag!==void 0&&(s=ft(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&be("Can't create run options."),e?.extra!==void 0&&Pr(e.extra,"",new WeakSet,(n,o)=>{let u=ft(n,i),l=ft(o,i);t._OrtAddRunConfigEntry(r,u,l)!==0&&be(`Can't set a run config entry: ${n} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),Da,Pa,Ua,Ut,Na,La,an=S(()=>{"use strict";Wt(),vi(),Da=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Pa=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ua=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ut=(e,t,r,i)=>{let a=ft(t,i),s=ft(r,i);Ie()._OrtAddSessionConfigEntry(e,a,s)!==0&&be(`Can't set a session config entry: ${t} - ${r}.`)},Na=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",Ut(e,"session.disable_quant_qdq","1",r),Ut(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let d=a?.deviceType;d&&Ut(e,"deviceType",d,r)}break;case"webgpu":if(s="JS",typeof a!="string"){let d=a;if(d?.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);Ut(e,"preferredLayout",d.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=ft(s,r),u=n.length,l=0,p=0;if(u>0){l=Ie()._malloc(u*Ie().PTR_SIZE),r.push(l),p=Ie()._malloc(u*Ie().PTR_SIZE),r.push(p);for(let d=0;d<u;d++)Ie().setValue(l+d*Ie().PTR_SIZE,n[d][0],"*"),Ie().setValue(p+d*Ie().PTR_SIZE,n[d][1],"*")}await Ie()._OrtAppendExecutionProvider(e,o,l,p,u)!==0&&be(`Can't append execution provider: ${s}.`)}},La=async e=>{let t=Ie(),r=0,i=[],a=e||{};Ua(a);try{let s=Da(a.graphOptimizationLevel??"all"),n=Pa(a.executionMode??"sequential"),o=typeof a.logId=="string"?ft(a.logId,i):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let p=typeof a.optimizedModelFilePath=="string"?ft(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,o,u,l,p),r===0&&be("Can't create session options."),a.executionProviders&&await Na(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ut(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[d,h]of Object.entries(a.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=ft(d,i);t._OrtAddFreeDimensionOverride(r,m,h)!==0&&be(`Can't set a free dimension override: ${d} - ${h}.`)}return a.extra!==void 0&&Pr(a.extra,"",new WeakSet,(d,h)=>{Ut(r,d,h,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&be("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),Gt,jt,Ht,$i,xi,Si,Ti,Ki,ke=S(()=>{"use strict";Gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ht=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},$i=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},xi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Si=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ti=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ki=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ki,Va=S(()=>{"use strict";di(),ki=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let n=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(s,n,l).set(u),n+=l}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Fa,Zi,Xi,Er,Qi,Ji,Pe,tr=S(()=>{"use strict";ke(),Fa=["V","I","W","E","F"],Zi=(e,t)=>{console.log(`[${Fa[e]},${new Date().toISOString()}]${t}`)},Qi=(e,t)=>{Xi=e,Er=t},Ji=(e,t)=>{let r=xi(e),i=xi(Xi);r>=i&&Zi(r,typeof t=="function"?t():t)},Pe=(...e)=>{Er&&Ji(...e)}}),Yi,Ir,U,Qr,ea,qa,cr,ve=S(()=>{"use strict";Yi=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ir=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let o=Yi.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=r?3:1;o<=s;o++){let u=i-o<0?1:e[i-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let p=Math.max(u,l);if(u&&l)n[s-o]=Math.max(u,l);else{if(p>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},U=class Xs{static size(t){return Xs.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Xs.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Xs.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Qr=class si{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=i[o]||n[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)si.adjustPadAndReturnShape(t[u+(n?1:2)],r[u],i[u],a[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,a,s,n,o,u=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return si.computeShapeHelper(t,r,l,i,a,s,n,o,u),l}static computeConvOutputShape(t,r,i,a,s,n,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return si.computeShapeHelper(!1,t,u,i,a,s,n,o),u}static computeShapeHelper(t,r,i,a,s,n,o,u,l=0){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(si.adjustPadAndReturnShape(r[p+2],a[p],s[p],n[p],o,p,p+r.length-2,u,l))}static computeOutputSize(t,r,i,a,s){let n=Math.floor(t/r)+1;return s===1&&(n=Math.ceil(t/r)+1,(n-1)*r>=i+a&&(n-=1)),n}static adjustPadAndReturnShape(t,r,i,a,s,n,o,u,l=0){let p=i*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[n]=0,s[o]=0,si.computeOutputSize(t-p,r,t,0,l);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=(Math.floor((t+r-1)/r)-1)*r+a-t;return s[n]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),s[o]=d-s[n],si.computeOutputSize(t+s[n]+s[o]-p,r,t,s[n],l)}default:throw new Error("Unsupported AutoPad type")}else return si.computeOutputSize(t+s[n]+s[o]-p,r,t,s[n],l)}},ea=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(a&&!Ir.isValidBroadcast(a,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},qa=-34028234663852886e22,cr=34028234663852886e22}),Cr,Jr=S(()=>{"use strict";ke(),Cr=(e,t)=>new($i(t))(e)}),Ur,Ei,Ii,Ci,hr,zr,ta,ra,ia,Wa,Ga,ks=S(()=>{"use strict";ke(),tr(),Ur=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ei=(e,t)=>{if(t==="int32")return e;let r=Ur.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,s=new($i(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let o=0;o<a;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[o]=Number(u)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ii=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ci=1,hr=()=>Ci++,zr=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ta=(e,t)=>{let r=Ur.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},ra=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ta(this.dataType,this.tensorShape)}destroy(){Pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ii(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},ia=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!s?.input.dataTypes.includes(t)){if(n=zr.get(t),!n||s?.input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);Pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ta(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ei(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Ii(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Wa=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=hr();return this.tensorTrackersById.set(e,new ia(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){Pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),s=hr(),n=new ra({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new ia(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,r,i,a,s,n){let o=this.getMLContext(e);for(let[l,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){Pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:n??t,shape:r,dimensions:r,usage:i,writable:a,readable:s});return new ra({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ga=(...e)=>new Wa(...e)}),Yr,ja,Ha,Ka=S(()=>{"use strict";ke(),Wt(),Jr(),ks(),tr(),Yr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ja=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},Ha=class{constructor(e){this.tensorManager=Ga(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>ja(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let s=Yr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,a)}async createTemporaryTensor(e,t,r){Pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Yr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Ie().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Cr(r,t)}}registerMLTensor(e,t,r,i){let a=Yr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,a,i);return Pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Yr.get(Gt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),aa=S(()=>{"use strict"}),sa,na,zi,oa,ua,la,Za,Xa,Es,sn=S(()=>{"use strict";tr(),aa(),sa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),na=[],zi=e=>Math.ceil(Number(e)/16)*16,oa=e=>{for(let t=0;t<na.length;t++){let r=na[t];if(e<=r)return r}return Math.ceil(e/16)*16},ua=1,la=()=>ua++,Za=async(e,t,r,i)=>{let a=zi(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Xa=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of sa)na.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=zi(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);if(s===a&&i%4===0)this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,r,i,a);else{let o=new Uint8Array(s);o.set(t),this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,o,0,s)}Pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=zi(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=la();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=oa(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:la(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Za(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=sa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Es=(...e)=>new Xa(...e)}),c,g,b=S(()=>{"use strict";c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},g=e=>new c(e)}),E,k,P,O,C,B,H,re,j,N,we,A,se,tt,ze,Ae,Ue,ue=S(()=>{"use strict";ke(),ve(),E=64,k=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},P=(e,t=1)=>{let r=k(e,t);return typeof r=="string"?r:r[0]},O=(e,t=1)=>{let r=k(e,t);return typeof r=="string"?r:r[1]},C=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:U.computeStrides(r)})}),t},B=e=>e%4===0?4:e%2===0?2:1,H=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,re=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,j=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,N=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,we=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,o=[...new Array(n).keys()],u=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,l=k(t,a),p=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],h={indices:u,value:p,storage:d,tensor:t},m=ie=>typeof ie=="string"?ie:`${ie}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",$=`${y}${e}_shape`,_=`${y}${e}_strides`,w="";for(let ie=0;ie<n-1;ie++)w+=`
    let dim${ie} = current / ${N(_,ie,n)};
    let rest${ie} = current % ${N(_,ie,n)};
    indices[${ie}] = dim${ie};
    current = rest${ie};
    `;w+=`indices[${n-1}] = current;`;let T=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,x=ie=>(f.offsetToIndices=!0,n<2?ie:`o2i_${e}(${ie})`),I=[];if(n>=2)for(let ie=n-1;ie>=0;ie--)I.push(`${N(_,ie,n)} * (indices[${ie}])`);let z=n<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${I.join("+")};
  }`,M=ie=>(f.indicesToOffset=!0,n<2?ie:`i2o_${e}(${ie})`),V=(...ie)=>n===0?"0u":`${h.indices}(${ie.map(m).join(",")})`,te=(ie,Ce)=>n<2?`${ie}`:`${N(ie,Ce,n)}`,de=(ie,Ce,Se)=>n<2?`${ie}=${Se};`:`${N(ie,Ce,n)}=${Se};`,Me={},$e=(ie,Ce)=>{f.broadcastedIndicesToOffset=!0;let Se=`${Ce.name}broadcastedIndicesTo${e}Offset`;if(Se in Me)return`${Se}(${ie})`;let ge=[];for(let Ot=n-1;Ot>=0;Ot--){let Kt=Ce.indicesGet("outputIndices",Ot+Ce.rank-n);ge.push(`${te(_,Ot)} * (${Kt} % ${te($,Ot)})`)}return Me[Se]=`fn ${Se}(outputIndices: ${Ce.type.indices}) -> u32 {
             return ${ge.length>0?ge.join("+"):"0u"};
           }`,`${Se}(${ie})`},xe=(ie,Ce)=>(()=>{if(h.storage===h.value)return`${e}[${ie}]=${Ce};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${ie}]=vec2<u32>(u32(${Ce}), select(0u, 0xFFFFFFFFu, ${Ce} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${ie}]=vec2<u32>(u32(${Ce}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${ie}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Ce}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),Ke=ie=>(()=>{if(h.storage===h.value)return`${e}[${ie}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${ie}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${ie}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${ie}] & 0xFFu), bool(${e}[${ie}] & 0xFF00u), bool(${e}[${ie}] & 0xFF0000u), bool(${e}[${ie}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),pe=n<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${p} {
    return ${Ke(`i2o_${e}(indices)`)};
  }`,ye=n<2?"":(()=>{let ie=o.map(Se=>`d${Se}: u32`).join(", "),Ce=o.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${ie}) -> ${p} {
    return get_${e}ByIndices(${V(Ce)});
  }`})(),Re=(...ie)=>{if(ie.length!==n)throw new Error(`indices length must be ${n}`);let Ce=ie.map(m).join(",");return n===0?Ke("0u"):n===1?Ke(Ce[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${Ce})`)},De=ie=>n<2?Ke(ie):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${ie})`),Oe=n<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${p}) {
    ${xe(`i2o_${e}(indices)`,"value")}
  }`,Ne=n<2?"":(()=>{let ie=o.map(Se=>`d${Se}: u32`).join(", "),Ce=o.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${ie}, value: ${p}) {
    set_${e}ByIndices(${V(Ce)}, value);
  }`})();return{impl:()=>{let ie=[],Ce=!1;return f.offsetToIndices&&(ie.push(T),Ce=!0),f.indicesToOffset&&(ie.push(z),Ce=!0),f.broadcastedIndicesToOffset&&(Object.values(Me).forEach(Se=>ie.push(Se)),Ce=!0),f.set&&(ie.push(Ne),Ce=!0),f.setByIndices&&(ie.push(Oe),Ce=!0),f.get&&(ie.push(ye),Ce=!0),f.getByIndices&&(ie.push(pe),Ce=!0),!s&&Ce&&ie.unshift(`const ${$} = ${h.indices}(${r.join(",")});`,`const ${_} = ${h.indices}(${U.computeStrides(r).join(",")});`),ie.join(`
`)},type:h,offsetToIndices:x,indicesToOffset:M,broadcastedIndicesToOffset:$e,indices:V,indicesGet:te,indicesSet:de,set:(...ie)=>{if(ie.length!==n+1)throw new Error(`indices length must be ${n}`);let Ce=ie[n];if(typeof Ce!="string")throw new Error("value must be string");let Se=ie.slice(0,n).map(m).join(",");return n===0?xe("0u",Ce):n===1?xe(Se[0],Ce):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${Se}, ${Ce})`)},setByOffset:xe,setByIndices:(ie,Ce)=>n<2?xe(ie,Ce):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${ie}, ${Ce});`),get:Re,getByOffset:Ke,getByIndices:De,usage:i,name:e,strides:_,shape:$,rank:n}},A=(e,t,r,i=1)=>we(e,t,r,"input",i),se=(e,t,r,i=1)=>we(e,t,r,"output",i),tt=(e,t,r)=>we(e,t,r,"atomicOutput",1),ze=(e,t,r,i=1)=>we(e,t,r,"internal",i),Ae=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=E){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ue=(e,t)=>new Ae(e,t)}),mt,zt,St,Or,Qa,da,Bt,rr,or,fr=S(()=>{"use strict";ke(),ve(),b(),ue(),mt=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zt=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),St=(e,t)=>U.sortBasedOnPerm(e,zt(e.length,t)),Or=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},Qa=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},da=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Bt=(e,t)=>{let r=e.dataType,i=e.dims.length,a=zt(i,t),s=St(e.dims,a),n=e.dims,o=s,u=i<2||da(a,e.dims),l;if(u)return l=f=>{let y=A("input",r,n,4),$=se("output",r,o,4);return`
  ${f.registerUniform("output_size","u32").declareVariables(y,$)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let f=U.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(f/4)}]}},getShaderSource:l};let{newShape:p,newPerm:d}=Qa(e.dims,a),h=U.areEqual(d,[2,3,1]),m=U.areEqual(d,[3,1,2]);if(p.length===2||h||m){n=h?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[n[1],n[0]];let f=16;return l=y=>{let $=A("a",r,n.length),_=se("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${f+1}>, ${f}>;
  ${y.mainStart([f,f,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${f} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${f}u + local_id.x;
    let input_row = workgroup_id_x * ${f}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${f}u + local_id.x;
    let output_row = workgroup_id_y * ${f}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=U.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/f),y:Math.ceil(o[0]/f)},programUniforms:[{type:12,data:y},...C(n,o)]}},getShaderSource:l}}return l=f=>{let y=A("a",r,n.length),$=se("output",r,o.length);return`
  ${f.registerUniform("output_size","u32").declareVariables(y,$)}

  ${Or(a,i,y,$)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let f=U.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...C(n,o)]}},getShaderSource:l}},rr=(e,t)=>{mt(e.inputs,t.perm),e.compute(Bt(e.inputs[0],t.perm))},or=e=>g({perm:e.perm})}),Ve,ir,Is,mr,Oi,wt,Dt,pa,Ai,Ja,ar,gr,wr,ei,yt,ct,ur,Cs,zs,Fo,qo,Sf=S(()=>{"use strict";ke(),ve(),ue(),on(),fr(),Ve={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ir={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Is={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},mr={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Oi=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},wt=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},Dt=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},pa=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ai=(e,t)=>{let r=[];if(!pa(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ja=(e,t,r,i,a,s,n)=>{let o=r[0].dims,u=U.size(s),l=U.size(n),p=A("_A",r[0].dataType,o),d=se("output",a,s),h=64;u===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,f=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(p,d)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Is[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Ve[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ir[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${i==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${mr[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},ar=(e,t,r,i)=>{let a=e.inputs.length===1?r:nn(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,f)=>f));let n=U.normalizeAxes(s,e.inputs[0].dims.length),o=n,u=e.inputs[0],l=Ai(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(Bt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Oi(o.length,u.dims.length));let[p,d]=wt(u.dims,o),h=p;a.keepDims&&(h=Dt(p,n)),e.compute(Ja(t,a.cacheKey,[u],i,e.inputs[0].dataType,h,d),{inputs:[u]})},gr=(e,t)=>{ar(e,"ReduceMeanShared",t,"mean")},wr=(e,t)=>{ar(e,"ReduceL1Shared",t,"l1")},ei=(e,t)=>{ar(e,"ReduceL2Shared",t,"l2")},yt=(e,t)=>{ar(e,"ReduceLogSumExpShared",t,"logSumExp")},ct=(e,t)=>{ar(e,"ReduceMaxShared",t,"max")},ur=(e,t)=>{ar(e,"ReduceMinShared",t,"min")},Cs=(e,t)=>{ar(e,"ReduceProdShared",t,"prod")},zs=(e,t)=>{ar(e,"ReduceSumShared",t,"sum")},Fo=(e,t)=>{ar(e,"ReduceSumSquareShared",t,"sumSquare")},qo=(e,t)=>{ar(e,"ReduceLogSumShared",t,"logSum")}}),yr,Wo,Os,nn,_r,Go,jo,Ho,Ko,Zo,Xo,Qo,Jo,Yo,eu,br,tu,ru,iu,au,su,nu,ou,uu,lu,du,on=S(()=>{"use strict";ke(),ve(),b(),ue(),Sf(),yr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Wo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Os=(e,t,r,i,a,s,n=!1,o=!1)=>{let u=[],l=r[0].dims,p=l.length,d=U.normalizeAxes(a,p),h=!o&&d.length===0;l.forEach((y,$)=>{h||d.indexOf($)>=0?n&&u.push(1):u.push(y)});let m=u.length,f=U.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let $=[],_=A("_A",r[0].dataType,p),w=se("output",s,m),T=i(_,w,d),x=T[2];for(let I=0,z=0;I<p;I++)h||d.indexOf(I)>=0?(n&&z++,x=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${_.indicesSet("input_indices",I,`j${I}`)}
                  ${x}
                }`):($.push(`${_.indicesSet("input_indices",I,w.indicesGet("output_indices",z))};`),z++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,w)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${$.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${x}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...C(l,u)]})}},nn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),g({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},_r=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:nn(a,r);e.compute(Os(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Wo:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Go=(e,t)=>{yr(e.inputs),_r(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},jo=(e,t)=>{yr(e.inputs),_r(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ho=(e,t)=>{yr(e.inputs),_r(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ko=(e,t)=>{yr(e.inputs),_r(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Zo=(e,t)=>{yr(e.inputs),_r(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Xo=(e,t)=>{yr(e.inputs),_r(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Qo=(e,t)=>{yr(e.inputs),_r(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Jo=(e,t)=>{yr(e.inputs),_r(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Yo=(e,t)=>{yr(e.inputs),_r(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},eu=(e,t)=>{yr(e.inputs),_r(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},br=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},tu=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):gr(e,t)},ru=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):wr(e,t)},iu=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ho(e,t):ei(e,t)},au=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ko(e,t):yt(e,t)},su=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zo(e,t):ct(e,t)},nu=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qo(e,t):ur(e,t)},ou=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):Cs(e,t)},uu=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):zs(e,t)},lu=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):Fo(e,t)},du=(e,t)=>{br(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Go(e,t):qo(e,t)}}),un,pu,cu,ln,Tf=S(()=>{"use strict";ke(),b(),on(),un=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},pu=(e,t)=>{un(e.inputs);let r=(i,a,s)=>{let n=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Os("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},cu=(e,t)=>{un(e.inputs);let r=(i,a,s)=>{let n=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Os("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ln=e=>g(e)}),hu,As,fu,mu,gu,Ya,wu,yu,dn=S(()=>{"use strict";ke(),ve(),aa(),ue(),hu=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],p=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=a.dims[0]/3,h=d,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let f=l;if(d!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==d+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(n){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=n.dims[3])}let $=f+y,_=-1,w=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:f,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:p,hiddenSize:d,vHiddenSize:m,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},As=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,fu=(e,t,r,i,a,s,n,o)=>{let u=B(n?1:s),l=64,p=s/u;p<l&&(l=32);let d=Math.ceil(s/u/l),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:p},{type:12,data:d}],m=P(e.dataType,u),f=O(1,u),y=["type"];n&&y.push("type"),o&&y.push("type");let $=_=>{let w=se("x",e.dataType,e.dims,u),T=[w],x=n?A("seq_lens",n.dataType,n.dims):void 0;x&&T.push(x);let I=o?A("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let z=O(e.dataType),M=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(M).declareVariables(...T)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${As(x,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:h})}},mu=(e,t,r,i,a,s,n,o,u)=>{let l=n+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,l],d=e>1&&i,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=d?[s.batchSize,h,l,s.headSize]:void 0,f=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,$=B(s.headSize),_=s.headSize/$,w=12,T={x:Math.ceil(l/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},x=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:f}],I=d&&i&&U.size(i.dims)>0,z=["type","type"];I&&z.push("type"),a&&z.push("type"),o&&z.push("type"),u&&z.push("type");let M=[{dims:p,dataType:t.dataType,gpuDataType:0}];d&&M.push({dims:m,dataType:t.dataType,gpuDataType:0});let V=te=>{let de=A("q",t.dataType,t.dims,$),Me=A("key",r.dataType,r.dims,$),$e=[de,Me];if(I){let Oe=A("past_key",i.dataType,i.dims,$);$e.push(Oe)}a&&$e.push(A("attention_bias",a.dataType,a.dims));let xe=o?A("seq_lens",o.dataType,o.dims):void 0;xe&&$e.push(xe);let Ke=u?A("total_sequence_length_input",u.dataType,u.dims):void 0;Ke&&$e.push(Ke);let pe=se("output",t.dataType,p),ye=[pe];d&&ye.push(se("present_key",t.dataType,m,$));let Re=O(1,$),De=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${de.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${de.type.storage}, ${w*w}>;
  ${te.registerUniforms(De).declareVariables(...$e,...ye)}
  ${te.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${As(xe,Ke,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Re}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Re}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${pe.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:M,dispatchGroup:T,programUniforms:x}),getShaderSource:V}},gu=(e,t,r,i,a,s,n=void 0,o=void 0)=>{let u=s+a.kvSequenceLength,l=a.nReps?a.nReps:1,p=a.vHiddenSize*l,d=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=d?[a.batchSize,h,u,a.headSize]:void 0,f=[a.batchSize,a.sequenceLength,p],y=12,$={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},_=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:p},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:l}],w=d&&i&&U.size(i.dims)>0,T=["type","type"];w&&T.push("type"),n&&T.push("type"),o&&T.push("type");let x=[{dims:f,dataType:t.dataType,gpuDataType:0}];d&&x.push({dims:m,dataType:t.dataType,gpuDataType:0});let I=z=>{let M=A("probs",t.dataType,t.dims),V=A("v",r.dataType,r.dims),te=[M,V];w&&te.push(A("past_value",i.dataType,i.dims));let de=n?A("seq_lens",n.dataType,n.dims):void 0;n&&te.push(de);let Me=o?A("total_sequence_length_input",o.dataType,o.dims):void 0;o&&te.push(Me);let $e=[se("output",t.dataType,f)];d&&$e.push(se("present_value",t.dataType,m));let xe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${M.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${M.type.value}, ${y*y}>;
  ${z.registerUniforms(xe).declareVariables(...te,...$e)}
  ${z.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${As(de,Me,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${M.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:x,dispatchGroup:$,programUniforms:_}),getShaderSource:I}},Ya=(e,t,r,i,a,s,n,o,u,l,p=void 0,d=void 0)=>{let h=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),m=h>1?n:void 0,f=h>1?o:void 0,y=h>1?l.pastSequenceLength:0,$=y+l.kvSequenceLength,_=u&&U.size(u.dims)>0?u:void 0,w=[t,r];m&&U.size(m.dims)>0&&w.push(m),_&&w.push(_),p&&w.push(p),d&&w.push(d);let T=e.compute(mu(h,t,r,m,_,l,y,p,d),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(fu(T,l.batchSize,l.numHeads,y,l.sequenceLength,$,p,d),{inputs:p&&d?[T,p,d]:[T],outputs:[]});let x=[T,i];f&&U.size(f.dims)>0&&x.push(f),p&&x.push(p),d&&x.push(d),e.compute(gu(h,T,i,f,l,y,p,d),{inputs:x,outputs:h>1?[0,2]:[0]})},wu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=d=>{let h=se("output_q",u[0].dataType,r),m=se("output_k",u[0].dataType,r),f=se("output_v",u[0].dataType,r),y=A("input",u[0].dataType,u[0].dims),$=A("weight",u[1].dataType,u[1].dims),_=A("bias",u[2].dataType,u[2].dims),w=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${w}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${w}, ${n*n}>;
  var<workgroup> tileWeightK: array<${w}, ${n*n}>;
  var<workgroup> tileWeightV: array<${w}, ${n*n}>;
  ${d.registerUniforms(T).declareVariables(y,$,_,h,m,f)}
  ${d.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},yu=(e,t)=>{let r=hu(e.inputs,t),[i,a,s]=wu(e,r);return Ya(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),_u,bu,vu,$u,kf=S(()=>{"use strict";gt(),ke(),ve(),b(),ue(),_u=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((o,u)=>{if(o!==i[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},bu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?B(s[s.length-1]):1,o=a==="NHWC"&&s.length>1?n:1,u=U.size(s)/n,l=i,p=l?s.length:s,d=A("x",e[0].dataType,e[0].dims,n),h=A("scale",e[1].dataType,e[1].dims,o),m=A("bias",e[2].dataType,e[2].dims,o),f=A("inputMean",e[3].dataType,e[3].dims,o),y=A("inputVar",e[4].dataType,e[4].dims,o),$=se("y",e[0].dataType,p,n),_=()=>{let T="";if(i)T=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let x=1;x<h.rank;x++)T+=`cIndices[${x}] = outputIndices[${x}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(d,h,m,f,y,$)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${n}`)};
    ${_()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...C(s)]:[{type:12,data:u}]})}},vu=e=>g(e),$u=(e,t)=>{let{inputs:r,outputCount:i}=e,a=vu({...t,outputCount:i});if(ne.webgpu.validateInputContent&&_u(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(bu(r,a))}}),xu,Su,Tu,Ef=S(()=>{"use strict";ve(),ue(),xu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Su=e=>{let t=e[0].dims,r=e[0].dims[2],i=U.size(t)/4,a=e[0].dataType,s=A("input",a,t,4),n=A("bias",a,[r],4),o=A("residual",a,t,4),u=se("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(s,n,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Tu=e=>{xu(e.inputs),e.compute(Su(e.inputs))}}),ku,He,Eu,Iu,Cu,zu,Ou,Au,Ru,Mu,Bu,Du,Pu,Uu,Nu,Lu,es,Vu,Rs,Fu,qu,Wu,Gu,ju,Hu,Ku,Zu,Xu,Qu,Ju,Yu,el,tl,rl,il,al,pn,sl,cn,hn,nl,ol,ul,ll,dl,pl,fn=S(()=>{"use strict";ke(),ve(),b(),ue(),ku=(e,t,r,i,a,s,n)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=A("inputData",r,[o],4),p=se("outputData",i,[o],4),d=[{name:"vec_size",type:"u32"}];return n&&d.push(...n),`
      ${e.registerUniforms(d).declareVariables(l,p)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},He=(e,t,r,i,a,s=e.dataType,n,o)=>{let u=[{type:12,data:Math.ceil(U.size(e.dims)/4)}];return n&&u.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>ku(l,U.size(e.dims),e.dataType,s,r,i,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(U.size(l[0].dims)/64/4)},programUniforms:u})}},Eu=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},Iu=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},Cu=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},zu=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},Ou=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},Au=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},Ru=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},Mu=e=>g(e),Bu=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(He(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Du=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return g({min:t,max:r})},Pu=(e,t)=>{let r=t||Du(e.inputs),i=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Uu=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},Nu=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},Lu=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},es=e=>g(e),Vu=(e,t)=>{let r=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rs=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Fu=e=>{let t=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rs(t)))},qu=e=>{e.compute(He(e.inputs[0],"Exp","exp"))},Wu=e=>{e.compute(He(e.inputs[0],"Floor","floor"))},Gu=e=>{let t=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rs(t)))},ju=(e,t)=>{let r=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Hu=e=>{e.compute(He(e.inputs[0],"Not",t=>`!${t}`))},Ku=e=>{e.compute(He(e.inputs[0],"Neg",t=>`-${t}`))},Zu=e=>{e.compute(He(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Xu=e=>{let t=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Qu=e=>{e.compute(He(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ju=e=>g(e),Yu=(e,t)=>{let r=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},el=e=>{let t=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},tl=e=>{e.compute(He(e.inputs[0],"Sin","sin"))},rl=e=>{e.compute(He(e.inputs[0],"Sinh","sinh"))},il=e=>{e.compute(He(e.inputs[0],"Sqrt","sqrt"))},al=e=>{e.compute(He(e.inputs[0],"Tan","tan"))},pn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,sl=e=>{e.compute(He(e.inputs[0],"Tanh",pn))},cn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${pn("v")};
}
`,hn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,nl=e=>{let t=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"FastGelu",hn,cn(t),void 0,e.inputs[0].dataType))},ol=(e,t)=>{let r=O(e.inputs[0].dataType);return e.compute(He(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},ul=e=>{e.compute(He(e.inputs[0],"Log","log"))},ll=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,dl=e=>`quick_gelu_impl(${e})`,pl=(e,t)=>{let r=O(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",dl,ll(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),cl,hl,fl,If=S(()=>{"use strict";ve(),ue(),fn(),cl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=A("input",e[0].dataType,e[0].dims,4),i=A("bias",e[0].dataType,[e[0].dims[2]],4),a=se("output",e[0].dataType,t,4),s=U.size(t)/4,n=P(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,a)}

  ${Rs(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fl=e=>{cl(e.inputs),e.compute(hl(e.inputs))}}),ml,gl,vr,wl,yl,_l,bl,vl,$l,xl,Sl,Tl,kl,Cf=S(()=>{"use strict";ke(),ve(),ue(),ml=(e,t,r,i,a,s,n,o,u,l,p,d)=>{let h,m;typeof o=="string"?h=m=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?h=m=o:(h=o.scalar,m=o.vector);let f=se("outputData",p,i.length,4),y=A("aData",u,t.length,4),$=A("bData",l,r.length,4),_;if(a)if(s){let w=U.size(t)===1,T=U.size(r)===1,x=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||T?_=f.setByOffset("global_idx",m(w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):_=`
            let outputIndices = ${f.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",f)};
            let offsetB = ${$.broadcastedIndicesToOffset("outputIndices",f)};
            ${f.setByOffset("global_idx",m(n||x?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||I?$.getByOffset("offsetB / 4u"):`${$.type.value}(${$.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=f.setByOffset("global_idx",m(y.getByOffset("global_idx"),$.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,x,I="")=>{let z=`aData[indexA${x}][componentA${x}]`,M=`bData[indexB${x}][componentB${x}]`;return`
            let outputIndices${x} = ${f.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offsetA${x} = ${y.broadcastedIndicesToOffset(`outputIndices${x}`,f)};
            let offsetB${x} = ${$.broadcastedIndicesToOffset(`outputIndices${x}`,f)};
            let indexA${x} = offsetA${x} / 4u;
            let indexB${x} = offsetB${x} / 4u;
            let componentA${x} = offsetA${x} % 4u;
            let componentB${x} = offsetB${x} % 4u;
            ${T}[${x}] = ${I}(${h(z,M)});
          `};p===9?_=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,$,f)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},gl=(e,t,r,i,a,s,n=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),l=!U.areEqual(o,u),p=o,d=U.size(o),h=!1,m=!1,f=[l];if(l){let y=Ir.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");p=y.slice(),d=U.size(p);let $=U.size(o)===1,_=U.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;f.push($),f.push(_),f.push(w),f.push(T);let x=1;for(let I=1;I<p.length;I++){let z=o[o.length-I],M=u[u.length-I];if(z===M)x*=z;else break}x%4===0?(m=!0,h=!0):($||_||w||T)&&(h=!0)}else h=!0;return f.push(h),{name:e,shaderCache:{hint:t+f.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>ml(y,o,u,p,h,l,m,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:p,dataType:n}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(p)/4)},...C(o,u,p)]})}},vr=(e,t,r,i,a,s)=>{e.compute(gl(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},wl=e=>{vr(e,"Add",(t,r)=>`${t}+${r}`)},yl=e=>{vr(e,"Div",(t,r)=>`${t}/${r}`)},_l=e=>{vr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},bl=e=>{vr(e,"Mul",(t,r)=>`${t}*${r}`)},vl=e=>{let t=A("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;vr(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},$l=e=>{vr(e,"Sub",(t,r)=>`${t}-${r}`)},xl=e=>{vr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Sl=e=>{vr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Tl=e=>{vr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},kl=e=>{vr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),El,Il,Cl,zl,Ol,Al,zf=S(()=>{"use strict";ke(),ve(),b(),ue(),El=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,o)=>{if(o!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((u,l)=>{if(l!==t&&u!==i.dims[l])throw new Error("non concat dimensions must match")})}})},Il=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Cl=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},zl=(e,t,r,i)=>{let a=U.size(r),s=new Array(e.length),n=new Array(e.length),o=0,u=[],l=[],p=[{type:12,data:a}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],s[y]=o,l.push(e[y].dims.length),n[y]=A(`input${y}`,i,l[y]),u.push("rank"),p.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)p.push(...C(e[y].dims));p.push(...C(r));let d=se("output",i,r.length),h=d.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),f=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)y.registerUniform(`sizeInConcatAxis${$}`,"u32");return y.declareVariables(...n,d)})()}

  ${Il(s.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Cl(n,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:f}},Ol=(e,t)=>{let r=e.inputs,i=r[0].dims,a=U.normalizeAxis(t.axis,i.length);El(r,a);let s=i.slice();s[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let n=r.filter(o=>U.size(o.dims)>0);e.compute(zl(n,a,s,r[0].dataType),{inputs:n})},Al=e=>g({axis:e.axis})}),Ri,Mi,Bi,mn,Di=S(()=>{"use strict";ke(),ve(),Ri=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Mi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Bi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},mn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[qa,cr];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),kt,Rl,gn=S(()=>{"use strict";kt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Rl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ml,Of=S(()=>{"use strict";Ml=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ts,wn,yn=S(()=>{"use strict";ke(),ve(),ue(),Di(),ts=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,o)=>`
      if (${N(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,N(a,o+s,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},wn=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n[n.length-2],l=o[o.length-1],p=n[n.length-1],d=B(l),h=B(p),m=B(u),f=U.size(r)/d/m,y=e.length>2,$=i?i.slice(0,-2):r.slice(0,-2),_=[U.size($),u,l],w=[{type:12,data:f},{type:12,data:u},{type:12,data:l},{type:12,data:p}];Mi(t,w),w.push(...C($,n,o)),y&&w.push(...C(e[2].dims)),w.push(...C(_));let T=x=>{let I=ze("batch_dims",e[0].dataType,$.length),z=A("a",e[0].dataType,n.length,h),M=A("b",e[1].dataType,o.length,d),V=se("output",e[0].dataType,_.length,d),te=P(V.type.tensor),de=Ri(t,V.type.value,te),Me=[z,M],$e="";if(y){let pe=a?d:1;Me.push(A("bias",e[2].dataType,e[2].dims.length,pe)),$e=`${a?`value += bias[col / ${pe}];`:`value += ${V.type.value}(bias[row + i]);`}`}let xe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Bi(t,xe);let Ke=()=>{let pe=`var a_data: ${z.type.value};`;for(let ye=0;ye<h;ye++)pe+=`
              let b_data${ye} = b[(b_offset + (k + ${ye}) * uniforms.N + col) / ${d}];`;for(let ye=0;ye<m;ye++){pe+=`a_data = a[(a_offset + (row + ${ye}) * uniforms.K + k) / ${h}];`;for(let Re=0;Re<h;Re++)pe+=`
            values[${ye}] = fma(${M.type.value}(a_data${h===1?"":`[${Re}]`}), b_data${Re}, values[${ye}]);
`}return pe};return`
  ${x.registerUniforms(xe).registerInternalVariables(I).declareVariables(...Me,V)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${ts("a_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${M.type.indices};
    ${ts("b_indices",M,M.rank-2,I.rank,"batch_indices")}
    ${M.indicesSet("b_indices",M.rank-2,0)}
    ${M.indicesSet("b_indices",M.rank-1,0)}
    let b_offset = ${M.indicesToOffset("b_indices")};
    var values: array<${V.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${Ke()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${$e}
      ${de}
      let cur_indices = ${V.type.indices}(batch, row + i, col);
      let offset = ${V.indicesToOffset("cur_indices")};
      ${V.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${h};${m};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:T}}}),Bl,Dl,_n,bn,Pl,vn,Ul,Ms,$n=S(()=>{"use strict";ke(),ve(),ue(),Di(),yn(),gn(),Bl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Dl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,_n=(e,t,r="f32",i,a=!1,s=32,n=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],p=a?u:s,d=a?s:u,h=p/t[0],m=s/t[1];if(!((a&&h===4&&e[1]===4||!a&&(h===3||h===4))&&p%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${p/h}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Bl(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Dl(a,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},bn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Pl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",vn=(e,t,r="f32",i,a=!1,s=32,n=!1,o=32,u=!1)=>{let l=e[1]*t[1],p=e[0]*t[0],d=a?l:s,h=a?s:l;if(!(h%t[1]===0&&d%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],f=d/t[0],y=s/t[1],$=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${bn(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${f};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${f}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${bn(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Pl(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${d}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${$}
  }
`},Ul=(e,t,r,i,a=!1)=>{let[s,n,o,u]=i,l=P(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${kt(e,l)} {
      var value = ${kt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${ts("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${kt(e,l)} {
      var value = ${kt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ts("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${kt(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${kt(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ms=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n.slice(0,-2),l=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),d=U.size(p),h=n[n.length-2],m=n[n.length-1],f=o[o.length-1],y=m%4===0&&f%4===0,$=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],w=[Math.ceil(f/_[0]/$[0]),Math.ceil(h/_[1]/$[1]),Math.ceil(d/_[2]/$[2])],T=y?4:1,x=[...u,h,m/T],I=x.length,z=[...l,m,f/T],M=z.length,V=[d,h,f/T],te=[{type:6,data:h},{type:6,data:f},{type:6,data:m}];Mi(t,te),te.push(...C(p,x,z));let de=["rank","rank"],Me=e.length>2;Me&&(te.push(...C(e[2].dims)),de.push("rank")),te.push(...C(V));let $e=xe=>{let Ke=p.length,pe=ze("batchDims",e[0].dataType,Ke,1),ye=P(e[0].dataType),Re=A("a",e[0].dataType,I,T),De=A("b",e[1].dataType,M,T),Oe=se("result",e[0].dataType,V.length,T),Ne=[Re,De];if(Me){let Ot=a?T:1;Ne.push(A("bias",e[2].dataType,e[2].dims.length,Ot))}let ie=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Bi(t,ie);let Ce=P(Oe.type.tensor),Se=Ri(t,Oe.type.value,Ce),ge=Ul(T,Me,Se,[pe,Re,De,Oe],a);return`
  ${xe.registerUniforms(ie).registerInternalVariables(pe).declareVariables(...Ne,Oe)}
  ${ge}
  ${y?_n($,_,ye,pe):vn($,_,ye,pe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${y};${a}`,inputDependencies:de},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:te}),getShaderSource:$e}}}),Nl,Ll,Af=S(()=>{"use strict";ke(),tr(),ue(),Di(),gn(),Of(),$n(),Nl=(e,t,r,i,a=!1,s,n=4,o=4,u=4,l="f32")=>{let p=te=>{switch(te){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},d=te=>{switch(te){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",$=e?"row":"col",_=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${$} / outWidth;
    let outCol = ${$} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${kt(n,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(n)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${n};
    ${w}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${kt(n,l)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${w}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${kt(n,l)}(0.0);`,x=e?i&&r?d(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(o)}
    }
    return ${kt(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(o)}
    }
    return ${kt(o,l)}(0.0);`,I=kt(u,l),z=kt(e?n:o,l),M=kt(e?o:n,l),V=Ri(s,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?x:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Rl(a)}
      ${V}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ll=(e,t,r,i,a,s,n,o,u)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],d=r[0],h=l?r[2]:r[3],m=l?r[1]:r[2],f=l?r[3]:r[1],y=l&&(p%4===0||p%3===0)&&f%4===0,$=l?f:h*m,_=l?h*m:f,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],x=[Math.ceil($/w[0]/T[0]),Math.ceil(_/w[1]/T[1]),Math.ceil(d/w[2]/T[2])];Pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let I=y?l&&p%4!==0?3:4:1,z=w[1]*T[1],M=w[0]*T[0],V=Math.max(w[0]*I,w[1]),te=i%z===0,de=a%M===0,Me=s%V===0,$e=y?[I,4,4]:[1,1,1],xe=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Mi(t,xe),xe.push(...C(e[0].dims,e[1].dims));let Ke=["rank","rank"];n&&(xe.push(...C(e[2].dims)),Ke.push("rank")),xe.push(...C(r));let pe=ye=>{let Re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Bi(t,Re);let De=y?4:1,Oe=P(e[0].dataType),Ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        result[flatIndex] = ${y?`vec4<${Oe}>`:Oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,ie=A("x",e[0].dataType,e[0].dims.length,I===3?1:I),Ce=A("w",e[1].dataType,e[1].dims.length,De),Se=[ie,Ce],ge=se("result",e[0].dataType,r.length,De);if(n){let Ot=A("bias",e[2].dataType,e[2].dims.length,De);Se.push(Ot),Ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${Oe}>`:Oe} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Ml("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ye.registerUniforms(Re).declareVariables(...Se,ge)}
        ${Ne}
        ${Nl(l,te,de,Me,n,t,$e[0],$e[1],$e[2],Oe)}
        ${y?_n(T,w,Oe,void 0,!l,V):vn(T,w,Oe,void 0,!l,V,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${te};${de};${Me};${z};${M};${V}`,inputDependencies:Ke},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:xe}),getShaderSource:pe}}}),Vl,xn,rs,Fl,Sn,ql,Wl,Gl,Rf=S(()=>{"use strict";ke(),tr(),ve(),ue(),Di(),gn(),Vl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},xn=e=>typeof e=="number"?[e,e,e]:e,rs=(e,t)=>t<=1?e:e+(e-1)*(t-1),Fl=(e,t,r,i=1)=>{let a=rs(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Sn=(e,t,r,i,a)=>{a==null&&(a=Fl(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},ql=(e,t,r,i,a,s,n,o,u,l)=>{let p,d,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let f=Sn([t,r,i,1],[o,u,l],1,[a,s,n],e);d=f[0],h=f[1],m=f[2]}else if(Array.isArray(e)){if(!e.every((y,$,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let f=Sn([t,r,i,1],[o,u,l],1,[a,s,n],e[0]);d=f[0],h=f[1],m=f[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/a),h=Math.ceil(r/s),m=Math.ceil(i/n);let f=(d-1)*a+o-t,y=(h-1)*s+u-r,$=(m-1)*n+l-i,_=Math.floor(f/2),w=f-_,T=Math.floor(y/2),x=y-T,I=Math.floor($/2),z=$-I;p={top:T,bottom:x,left:I,right:z,front:_,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:d,outHeight:h,outWidth:m}},Wl=(e,t,r,i,a,s=!1,n="channelsLast")=>{let o,u,l,p,d;if(n==="channelsLast")[o,u,l,p,d]=e;else if(n==="channelsFirst")[o,d,u,l,p]=e;else throw new Error(`Unknown dataFormat ${n}`);let[h,,m,f,y]=t,[$,_,w]=xn(r),[T,x,I]=xn(i),z=rs(m,T),M=rs(f,x),V=rs(y,I),{padInfo:te,outDepth:de,outHeight:Me,outWidth:$e}=ql(a,u,l,p,$,_,w,z,M,V),xe=s?h*d:h,Ke=[0,0,0,0,0];return n==="channelsFirst"?Ke=[o,xe,de,Me,$e]:n==="channelsLast"&&(Ke=[o,de,Me,$e,xe]),{batchSize:o,dataFormat:n,inDepth:u,inHeight:l,inWidth:p,inChannels:d,outDepth:de,outHeight:Me,outWidth:$e,outChannels:xe,padInfo:te,strideDepth:$,strideHeight:_,strideWidth:w,filterDepth:m,filterHeight:f,filterWidth:y,effectiveFilterDepth:z,effectiveFilterHeight:M,effectiveFilterWidth:V,dilationDepth:T,dilationHeight:x,dilationWidth:I,inShape:e,outShape:Ke,filterShape:t}},Gl=(e,t,r,i,a,s)=>{let n=s==="channelsLast",o=n?e[0].dims[3]:e[0].dims[1],u=!1,l=[64,1,1],p={x:r.map((w,T)=>T)},d=[Math.ceil(Vl(p.x.map(w=>r[w]))/l[0]),1,1];Pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=u?n&&o%4!==0?3:4:1,m=U.size(r),f=[{type:12,data:m},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Mi(t,f),f.push(...C(e[0].dims,e[1].dims));let y=["rank","rank"],$=e.length===3;$&&(f.push(...C(e[2].dims)),y.push("rank")),f.push(...C(r));let _=w=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Bi(t,T);let x=u?4:1,I=P(e[0].dataType),z=A("x",e[0].dataType,e[0].dims.length,h===3?1:h),M=A("W",e[1].dataType,e[1].dims.length,x),V=[z,M],te=se("result",e[0].dataType,r.length,x),de="";if($){let xe=A("bias",e[2].dataType,e[2].dims.length,x);V.push(xe),de+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${u?`vec4<${I}>`:I} {
          return bias[${n?N("coords",4,5):N("coords",1,5)}${u?"/ 4":""}];
        }`}let Me=kt(h,I),$e=Ri(t,Me,I);return`
            ${de}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
          ${w.registerUniforms(T).declareVariables(...V,te)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${te.offsetToIndices("global_idx")};
              let batch = ${N("coords",0,z.rank)};
              let d2 = ${n?N("coords",z.rank-1,z.rank):N("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${n?N("coords",1,z.rank):N("coords",2,z.rank)},
              ${n?N("coords",2,z.rank):N("coords",3,z.rank)},
              ${n?N("coords",3,z.rank):N("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?N("uniforms.x_shape",1,z.rank):N("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${n?N("uniforms.x_shape",2,z.rank):N("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${n?N("uniforms.x_shape",3,z.rank):N("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${n?N("uniforms.x_shape",4,z.rank):N("uniforms.x_shape",1,z.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${$e}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${h};${$}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),jl,Hl,Mf=S(()=>{"use strict";ke(),ve(),ue(),Di(),jl=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],p=l/t.group,d=u&&p>=4?B(l):1,h=U.size(r)/d,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Mi(t,m),m.push(...C(n,[o[0],o[1],o[2],o[3]/d]));let f=a?["rank","rank","rank"]:["rank","rank"];m.push(...C([r[0],r[1],r[2],r[3]/d]));let y=$=>{let _=se("output",e[0].dataType,r.length,d),w=P(_.type.tensor),T=Ri(t,_.type.value,w),x=A("x",e[0].dataType,n.length),I=A("w",e[1].dataType,o.length,d),z=[x,I];a&&z.push(A("b",e[2].dataType,e[2].dims,d));let M=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Bi(t,M);let V=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${x.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${x.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${$.registerUniforms(M).declareVariables(...z,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${V}
    ${s}
    ${T}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},Hl=(e,t,r,i)=>{let a=e.length>2,s=B(r[3]),n=B(r[2]),o=U.size(r)/s/n,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],p=[r[0],r[1],r[2],r[3]/s],d=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Mi(t,d),d.push(...C(u,l,p));let h=(n-1)*t.strides[1]+l[1],m=f=>{let y=se("output",e[0].dataType,p.length,s),$=P(y.type.tensor),_=Ri(t,y.type.value,$),w=A("x",e[0].dataType,u.length,s),T=A("w",e[1].dataType,l.length,s),x=[w,T];a&&x.push(A("b",e[2].dataType,e[2].dims,s));let I=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Bi(t,z),`
  ${f.registerUniforms(z).declareVariables(...x,y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${y.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${I}
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${h};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:m}}}),Kl,Bs,Zl,Ds,Tn,kn,Xl,Ql,En,Bf=S(()=>{"use strict";ve(),Af(),Rf(),$n(),Mf(),Di(),yn(),fr(),Kl=(e,t,r,i,a,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,l=t[0],p=t.slice(2).map((h,m)=>h+(h-1)*(r[m]-1)),d=o.map((h,m)=>h+i[m]+i[m+u]).map((h,m)=>Math.floor((h-p[m]+a[m])/a[m]));return d.splice(0,0,n),d.splice(s?3:1,0,l),d},Bs=[2,3,1,0],Zl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ds=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Qr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Tn=e=>{let t=mn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},kn=(e,t,r,i)=>{let a=r.format==="NHWC",s=Kl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let M=e.kernelCustomData.wT??e.compute(Bt(t[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=M),z.push(M)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Hl(z,r,s,i),{inputs:z}):e.compute(jl(z,r,s,i),{inputs:z});return}let n=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],p=t[1].dims[2],d=t[1].dims[3],h=s[a?1:2],m=s[a?2:3],f=s[a?3:1],y=a&&p===o&&d===u&&r.pads[0]===0&&r.pads[1]===0;if(y||p===1&&d===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=s[0],M,V,te,de=[];if(a){let xe=e.kernelCustomData.wT??e.compute(Bt(t[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=xe),y){let Ke=o*u*l;M=t[0].reshape([1,z,Ke]),V=xe.reshape([1,Ke,f]),te=[1,z,f]}else M=t[0].reshape([z,o*u,l]),V=xe.reshape([1,l,f]),te=[z,h*m,f];de.push(M),de.push(V)}else M=t[0].reshape([z,l,o*u]),V=t[1].reshape([1,f,l]),te=[z,f,h*m],de.push(V),de.push(M);n&&de.push(t[2]);let Me=te[2],$e=de[0].dims[de[0].dims.length-1];Me<8&&$e<8?e.compute(wn(de,r,s,te,a,i),{inputs:de}):e.compute(Ms(de,r,s,te,a,i),{inputs:de});return}let $=!0,_=e.kernelCustomData.wT??e.compute(Bt(t[1],Bs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let w=[t[0],_];n&&w.push(t[2]);let T=a?h*m:f,x=a?f:h*m,I=p*d*l;e.compute(Ll(w,r,s,T,x,I,n,$,i),{inputs:w})},Xl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Ds({...t,pads:a,strides:s,dilations:n,kernelShape:o},i);kn(e,i,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Ql=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Ds(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=Wl(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Gl(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},En=(e,t)=>{if(Zl(e.inputs,t),e.inputs[0].dims.length===3)Xl(e,t);else if(e.inputs[0].dims.length===5)Ql(e,e.inputs,t);else{let r=Ds(t,e.inputs);kn(e,e.inputs,r)}}}),Jl,Df=S(()=>{"use strict";ke(),tr(),ve(),ue(),Jl=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,u=o[2]/n,l=o[3],p=s?B(u):1,d=s&&l===1&&u>=4,h=d?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-h,f=s?B(l):1,y=s?l===1?p:f:1,$=U.size(a)/f,_=[Math.ceil($/64),1,1];Pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],x=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],I=[t.dilations[0],t.dilations[1]],z=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],M=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],V=[{type:12,data:$},{type:12,data:T},{type:12,data:x},{type:12,data:I},{type:12,data:z},{type:6,data:M},{type:12,data:h},{type:12,data:u},{type:12,data:l},...C(e[0].dims,e[1].dims)];i&&(V.push(...C(e[2].dims)),w.push("rank")),V.push(...C(a));let te=de=>{let Me=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:M.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],$e=P(e[0].dataType),xe=s?1:2,Ke=s?2:3,pe=s?3:1,ye=A("W",e[1].dataType,e[1].dims.length,y),Re=A("Dy",e[0].dataType,e[0].dims.length,p),De=[Re,ye];i&&De.push(A("bias",e[2].dataType,[a[pe]].length,f));let Oe=se("result",e[0].dataType,a.length,f),Ne=()=>{let Se="";if(d)p===4?Se+=`
        let xValue = ${Re.getByOffset("x_offset")};
        let wValue = ${ye.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?Se+=`
          dotProd = dotProd + dot(vec4<${$e}>(${Re.getByOffset("x_offset")}, ${Re.getByOffset("x_offset + 1u")}), vec4<${$e}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(Se+=`
          dotProd = dotProd + dot(vec4<${$e}>(${Re.getByOffset("x_offset")}, ${Re.getByOffset("x_offset + 1u")}, ${Re.getByOffset("x_offset + 2u")}, ${Re.getByOffset("x_offset + 3u")}), vec4<${$e}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}, ${ye.getByOffset("w_offset + 2u")}, ${ye.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Se+=`
                  let xValue = ${s?Re.getByOffset(`${Re.indicesToOffset(`${Re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):Re.get("batch","inputChannel","idyR","idyC")};
        `,p===1)Se+=`
          let w_offset = ${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ye.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ge=0;ge<p;ge++)Se+=`
            let wValue${ge} = ${ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ge}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ge}] * wValue${ge};`;return Se},ie=()=>{if(m===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let Se="";if(p===1){Se+="dotProd = dotProd";for(let ge=0;ge<m;ge++)Se+=`
            + ${Re.getByOffset(`x_offset + ${ge}`)} * ${ye.getByOffset(`w_offset + ${ge}`)}`;Se+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);Se+=`
          let xValue = ${Re.getByOffset("x_offset")};
          let wValue = ${ye.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Se},Ce=`
            let outputIndices = ${Oe.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${Oe.indicesGet("outputIndices",0)};
            let d1 = ${Oe.indicesGet("outputIndices",pe)};
            let r = ${Oe.indicesGet("outputIndices",xe)};
            let c = ${Oe.indicesGet("outputIndices",Ke)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Oe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${$e}(dyRCorner) + ${$e}(wR)) / ${$e}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${$e}(uniforms.Dy_shape[${xe}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${$e}(dyCCorner) + ${$e}(wC)) / ${$e}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${$e}(uniforms.Dy_shape[${Ke}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${Re.indicesToOffset(`${Re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${ye.indicesToOffset(`${ye.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:p}) {
                  ${Ne()}
                  inputChannel = inputChannel + ${d?4:p};
                }
                ${ie()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${f}]`:""};
            ${Oe.setByOffset("global_idx","value")};
          `;return`
    ${de.registerUniforms(Me).declareVariables(...De,Oe)}
      ${de.mainStart()}
      ${de.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Ce}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${y}${f}${d}${m}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:V}),getShaderSource:te}}}),Yl,ed,td,In,rd,id,Cn,ad,sd,Pf=S(()=>{"use strict";Df(),Di(),fr(),Yl=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,ed=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},td=(e,t,r,i,a,s,n,o,u,l)=>{let p=e.length-2,d=l.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let h=e[0],m=t[o?3:1]*a;for(let f=0,y=e.length-p-(o?1:0);f<p;++f,++y){let $=e[y],_=d?$*n[f]:l[f],w=Yl($,n[f],s[f],t[y],r[f],_);ed(w,i,s,f,f+p),d&&l.push(n[f]*($-1)+u[f]+(t[y]-1)*r[f]+1-s[f]-s[f+p])}l.splice(0,0,h),l.splice(o?3:1,0,m)},In=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,h)=>d*h,1)===0){r.length=0;for(let d=2;d<t[1].dims.length;++d)r.push(t[1].dims[d])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}td(o,r,u,e.autoPad,e.group,a,l,i,n,s);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:u,strides:l}),p},rd=e=>{let t=mn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),p=e.outputPadding,d=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:p,outputShape:d,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},id=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Cn=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Bt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(Jl(s,r,i),{inputs:s})},ad=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=In({...t,pads:o,strides:n,dilations:s,kernelShape:a,outputPadding:u},i);Cn(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},sd=(e,t)=>{if(id(e.inputs,t),e.inputs[0].dims.length===3)ad(e,t);else{let r=In(t,e.inputs);Cn(e,e.inputs,r)}}}),nd,od,ud,Uf=S(()=>{"use strict";ke(),ve(),b(),ue(),nd=(e,t,r,i)=>{let a=U.size(t),s=t.length,n=A("input",e,s),o=se("output",e,s),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=U.normalizeAxis(u,s),p=d=>{let h=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,m=N("uniforms.input_shape","uniforms.axis",s),f=i.reverse?h+(i.exclusive?" + 1":""):"0",y=i.reverse?m:h+(i.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${f};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...C(t,t)]}),getShaderSource:p}},od=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(nd(i,r,a,t),{inputs:[0]})},ud=e=>{let t=e.exclusive===1,r=e.reverse===1;return g({exclusive:t,reverse:r})}}),ld,dd,pd,cd,hd,Nf=S(()=>{"use strict";ke(),ve(),b(),ue(),ld=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},dd=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},pd=(e,t)=>{let r,i,a,s,n,o,u=t.format==="NHWC",l=t.blocksize,p=t.mode==="DCR";u?([r,i,a,s]=e.dims,n=p?[r,i,a,l,l,s/l**2]:[r,i,a,s/l**2,l,l],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=p?[r,l,l,s/l**2,i,a]:[r,s/l**2,l,l,i,a],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(n),h=d.dims.length,m=e.dataType,f=A("a",m,h),y=se("output",m,h),$=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(f,y)}

  ${dd(o,h,f,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let w=u?[r,i*l,a*l,s/l**2]:[r,s/l**2,i*l,a*l],T=U.size(w),x=d.dims,I=U.sortBasedOnPerm(x,o);return{outputs:[{dims:w,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...C(x,I)]}},getShaderSource:$}},cd=(e,t)=>{ld(e.inputs),e.compute(pd(e.inputs[0],t))},hd=e=>g({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nr,is,Ps,zn,ti,fd,md,gd,On,An,Rn,wd,yd,Mn,_d,bd,vd,Lf=S(()=>{"use strict";ke(),ve(),b(),ue(),Nr=256,is=512,Ps=2*Math.PI,zn=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},ti=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},fd=(e,t,r,i,a)=>{let s=r/e,n=is-i,o=l=>`smem[${n}u + base + ${l*t}u]`,u=`  for (var t = local_idx; t < ${s}u; t += ${Nr}u) {
`;u+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,u+=`    var leg: array<vec2<f32>, 5>;
`;for(let l=0;l<e;l++){let p=`${i}u + t + ${l*s}u`;if(l===0)u+=`    leg[0] = smem[${p}];
`;else{let d=a*Ps*l/(e*t);u+=`    { let a = ${ti(d)} * angleUnit; leg[${l}] = cmul(smem[${p}], vec2<f32>(cos(a), sin(a))); }
`}}if(u+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)u+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let l=a<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";u+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,u+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,u+=`    let oddRot = ${l};
`,u+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,u+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let l=0;l<e;l++){let p=["leg[0]"];for(let d=1;d<e;d++){let h=a*Ps*(d*l)/e,m=ti(Math.cos(h)),f=ti(Math.sin(h));p.push(`vec2<f32>(leg[${d}].x*${m} - leg[${d}].y*${f}, leg[${d}].x*${f} + leg[${d}].y*${m})`)}u+=`    ${o(l)} = ${p.join(" + ")};
`}return`${u}  }
  workgroupBarrier();
`},md=(e,t,r)=>{let i="",a=1,s=0;for(let n of e)i+=fd(n,a,t,s,r),a*=n,s=is-s;return{code:i,resultOffset:s}},gd=(e,t,r,i,a)=>{let s=e.dims,n=s.length,o=s[n-1],u=s[t],l=r&&i?(u-1)*2:u;a!==void 0&&(l=a);let p=r&&i?1:2,d=i&&!r?Math.floor(l/2)+1:l,h=s.slice();h[t]=d,h[n-1]=p;let m=1;for(let y=t+1;y<n-1;y++)m*=s[y];let f=U.size(s)/o/u;return{dataType:e.dataType,outputDims:h,length:l,signalLength:u,inner:m,batch:f,inputComponents:o,outputComponents:p,outputLength:d,inverse:r,onesided:i}},On=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),An=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Rn=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),wd=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:s,onesided:n}=e,o=O(t),u=s?1:-1,l=s?1/r:1,p=zn(r),d=h=>{let m=A("x",t,[1]),f=se("y",t,[1]),y=I=>{let z=`inBase + (${I}) * uniforms.inner * ${i}u`,M=`f32(${m.getByOffset(z)})`,V=i===2?`f32(${m.getByOffset(`${z} + 1u`)})`:"0.0";return`vec2<f32>(${M}, ${V})`},$;if(s&&n){let I=Math.floor(r/2)+1,z=r%2===0?`select(provided, provided - 1u, provided == ${I}u)`:"provided";$=`
    let provided = min(uniforms.signalLength, ${I}u);
    for (var i = local_idx; i < ${r}u; i += ${Nr}u) {
      if (i < provided) { smem[i] = ${y("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${z}; k += ${Nr}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else $=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${Nr}u) {
      if (i < loadCount) { smem[i] = ${y("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:_,resultOffset:w}=md(p,r,u),T=l===1?`smem[${w}u + i]`:`smem[${w}u + i] * ${ti(l)}`,x=a===2?f.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Rn(h,m,f)}
  var<workgroup> smem: array<vec2<f32>, ${2*is}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${h.mainStart(Nr)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    ${$}
${_}    for (var i = local_idx; i < uniforms.outputLength; i += ${Nr}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${a}u;
      ${f.setByOffset("off",`${o}(v.x)`)}
      ${x}
    }
  }`};return{name:"DFT",shaderCache:{hint:On(e,"fft"),inputDependencies:["type"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:An(e),dispatchGroup:{x:e.batch}})}},yd=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:s,onesided:n}=e,o=O(t),u=s?1:-1,l=s?1/r:1,p=d=>{let h=A("x",t,[1]),m=se("y",t,[1]),f=T=>{let x=`inBase + (${T}) * uniforms.inner * ${i}u`,I=`f32(${h.getByOffset(x)})`,z=i===2?`f32(${h.getByOffset(`${x} + 1u`)})`:"0.0";return`vec2<f32>(${I}, ${z})`},y=s&&n?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${f("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${f("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${f("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,$=`
      let angle = ${ti(u*Ps)} * f32(knMod) / ${ti(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,_=a===2?m.setByOffset("off + 1u",`${o}(v.y)`):"",w=l===1?"acc":`acc * ${ti(l)}`;return`
  ${Rn(d,h,m)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${y}
  ${d.mainStart(Nr)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${Nr}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${$}
      }
      let v = ${w};
      let off = outBase + k * uniforms.inner * ${a}u;
      ${m.setByOffset("off",`${o}(v.x)`)}
      ${_}
    }
  }`};return{name:"DFT",shaderCache:{hint:On(e,"direct"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:An(e),dispatchGroup:{x:e.batch}})}},Mn=e=>{if(!e||e.dataType===0)return;if(U.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},_d=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},bd=(e,t)=>{_d(e.inputs);let r=e.inputs[0],i=r.dims.length,a=t.inverse!==0,s=t.onesided!==0,n=Mn(e.inputs[1]);if(n!==void 0&&n<=0)throw new Error("dft_length must be greater than zero.");let o=U.normalizeAxis(Mn(e.inputs[2])??t.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(a&&s&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let u=gd(r,o,a,s,n);if(u.length<=0)throw new Error(`Invalid DFT length: ${u.length}`);let l=u.length<=is&&zn(u.length)!==void 0?wd(u):yd(u);e.compute(l,{inputs:[0]})},vd=e=>g({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Us,as,Bn,$d,xd,Sd,Td,Dn,kd,Ed,Id,Vf=S(()=>{"use strict";ke(),ve(),b(),ue(),Us="[a-zA-Z]|\\.\\.\\.",as="("+Us+")+",Bn="^"+as+"$",$d="("+as+",)*"+as,xd="^"+$d+"$",Sd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Td=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(xd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let n=e[s].dims.slice();if(!a.match(RegExp(Bn)))throw new Error("Invalid LHS term");let o=this.processTerm(a,!0,n,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(as)))throw new Error("Invalid RHS");i.match(RegExp(Us,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],o=0;if(!e.match(RegExp(Bn))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Us,"g")),l=new Sd(i);return u?.forEach((p,d)=>{if(p==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let h=a-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<n.length;m++){let f=String.fromCharCode(48+m);l.addSymbol(f,d+m),this.addSymbol(f,r[o++],i)}}else l.addSymbol(p,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),l}},Dn=e=>e+"_max",kd=(e,t,r,i)=>{let a=e.map(l=>l.length).map((l,p)=>A(`input${p}`,t,l)),s=U.size(i),n=se("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let p=[],d="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",f=[],y=[],$=[],_=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((x,I)=>{if(r.rhs.symbolToIndices.has(I)){let z=r.rhs.symbolToIndices.get(I)?.[0];z!==void 0&&r.lhs.forEach((M,V)=>{if(x.inputIndices.includes(V)){let te=M.symbolToIndices.get(I);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(de=>{p.push(`${a[V].indicesSet(`input${V}Indices`,de,n.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,M)=>{if(x.inputIndices.includes(M)){let V=z.symbolToIndices.get(I);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(te=>{f.push(`${a[M].indicesSet(`input${M}Indices`,te,`${I}`)}`)}),_.push(`prod *= ${a[M].getByIndices(`input${M}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Dn(I)}; ${I}++) {`),$.push("}")});let T=w?[...p,`let sum = ${a.map((x,I)=>x.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...p,h,...y,...f,d,..._,m,...$];return`
            ${l.registerUniforms(o.map(x=>({name:`${Dn(x)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((x,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(d=>r.symbolToInfo.has(d)).map(d=>({type:12,data:r.symbolToInfo.get(d)?.dimValue||0}));l.push({type:12,data:s});let p=e.map((d,h)=>[...C(d)]).reduce((d,h)=>d.concat(h),l);return p.push(...C(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}},getShaderSource:u}},Ed=(e,t)=>{let r=new Td(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(kd(a,e.inputs[0].dataType,r,i))},Id=e=>{let t=e.equation.replace(/\s+/g,"");return g({equation:t})}}),Cd,Pn,zd,Od,Ad,Ff=S(()=>{"use strict";ke(),ve(),ue(),Cd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Pn=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},zd=(e,t)=>e.length>t.length?Pn(e,t):Pn(t,e),Od=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=zd(t,r),a=e[0].dataType,s=a===9||U.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(U.size(i)/o),l=d=>{let h=A("input",a,t.length,n),m=se("output",a,i.length,o),f;if(a===9){let y=($,_,w="")=>`
          let outputIndices${_} = ${m.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${h.broadcastedIndicesToOffset(`outputIndices${_}`,m)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${$}[${_}] = ${w}(${h.getByOffset(`index${_}`)}[component${_}]);
        `;f=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${h.getByOffset(`inputOffset / ${n}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(h,m)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},p=[{type:12,data:u},...C(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Ad=e=>{Cd(e.inputs),e.compute(Od(e.inputs),{inputs:[0]})}}),Rd,Md,qf=S(()=>{"use strict";ke(),ve(),ue(),fn(),Rd=e=>{let t=e[0].dataType,r=U.size(e[0].dims),i=U.size(e[1].dims),a=i%4===0,s=n=>{let o=A("x",t,[1],4),u=A("bias",t,[1],4),l=se("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(p).declareVariables(o,u,l)}

    ${cn(O(t))}

    ${n.mainStart(E)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",hn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/E/4)}})}},Md=e=>{e.inputs.length<2||U.size(e.inputs[1].dims)===0?nl(e):e.compute(Rd(e.inputs))}}),Bd,Dd,Pd,Ud,Wf=S(()=>{"use strict";ke(),ve(),b(),ue(),Bd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Dd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=U.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let o=r[s],u=e[0].dataType===9?4:1,l=Math.ceil(U.size(n)/u),p=[{type:12,data:l},{type:6,data:o},{type:12,data:s},...C(e[0].dims,e[1].dims,n)],d=h=>{let m=A("data",e[0].dataType,e[0].dims.length,u),f=A("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,n.length,u),$=w=>{let T=i.length,x=`var indicesIndices${w}  = ${f.type.indices}(0);`;for(let I=0;I<T;I++)x+=`${T>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${n.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;x+=`
          var idx${w} = ${f.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${m.type.indices};
        `;for(let I=0,z=0;I<a;I++)I===s?(x+=`${a>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,z+=T):(x+=`${a>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${n.length>1?`outputIndices${w}[${z}]`:`outputIndices${w}`};`,z++);return x},_;if(e[0].dataType===9){let w=(T,x,I="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          ${$(x)};
          let offset${x} = ${m.indicesToOffset(`dataIndices${x}`)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${T}[${x}] = ${I}(${m.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${$("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,f,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:d}},Pd=e=>g({axis:e.axis}),Ud=(e,t)=>{let r=e.inputs;Bd(r),e.compute(Dd(e.inputs,t))}}),Nd,Ld,Vd,Gf=S(()=>{"use strict";ke(),ve(),ue(),Nd=(e,t,r,i,a,s,n,o,u)=>{let l=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:u}],p=[s];l.push(...C(t.dims,p));let d=h=>{let m=A("indices_data",t.dataType,t.dims.length),f=se("input_slice_offsets_data",12,1,1),y=[m,f],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms($).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},Ld=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],o=U.sizeToDimension(s,s.length-1),u=U.sizeFromDimension(i,t.batchDims+n),l=U.sizeToDimension(i,t.batchDims),p=U.sizeFromDimension(i,t.batchDims),d=o/l,h=new Array(n),m=u;for(let x=0;x<n;++x)h[n-1-x]=m,m*=i[t.batchDims+n-1-x];let f=Nd(e,r[1],h,t.batchDims,i,o,d,p,n),y=t.batchDims+n;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=s.slice(0,-1).concat(i.slice(y)),_=U.size($),w=[{type:12,data:_},{type:12,data:u},...C(r[0].dims,f.dims,$)],T=x=>{let I=A("data",r[0].dataType,r[0].dims.length),z=A("slice_offsets",12,f.dims.length),M=se("output",r[0].dataType,$.length);return`
          ${x.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,z,M)}
            ${x.mainStart()}
            ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],f]})},Vd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Fd,qd,Wd,Gd,jf=S(()=>{"use strict";ke(),ve(),b(),ue(),Fd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=U.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/i)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},qd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=U.normalizeAxis(t.gatherAxis,a),n=U.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(s,1,...i);let u=U.size(o),l=e[2].dataType,p=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...C(...e.map((m,f)=>m.dims),o)],h=m=>{let f=A("data",e[0].dataType,e[0].dims.length),y=A("inputIndices",e[1].dataType,e[1].dims.length),$=A("scales",e[2].dataType,e[2].dims.length),_=e.length>3?A("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=se("output",l,o.length),T=[f,y,$];_&&T.push(_);let x=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(x).declareVariables(...T,w)}
        ${m.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${f.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${f.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${f.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${f.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${f.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${f.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${$.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${$.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${$.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${O(l)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,f)=>f!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,f)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h}},Wd=(e,t)=>{let r=e.inputs;Fd(r,t),e.compute(qd(e.inputs,t))},Gd=e=>g({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),jd,Hd,Kd,Zd,Hf=S(()=>{"use strict";ke(),ve(),b(),ue(),jd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Hd=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,o=U.normalizeAxis(t.axis,a),u=r[o],l=s.slice(0),p=U.size(l),d=A("input",i,a),h=A("indicesInput",n,s.length),m=se("output",i,l.length),f=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return f.push(...C(r,s,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,h,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Kd=e=>g({axis:e.axis}),Zd=(e,t)=>{let r=e.inputs;jd(r),e.compute(Hd(e.inputs,t))}}),Xd,Qd,Jd,Yd,Kf=S(()=>{"use strict";ke(),ve(),ue(),Xd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Qd=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=ea.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[a,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(s/u),p=Math.ceil(a/u),d=!0,h=U.size(o),m=[{type:12,data:d?l:h},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],f=["type","type"];e.length===3&&(m.push(...C(e[2].dims)),f.push("rank")),m.push(...C(o));let y=_=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",x=A("a",e[0].dataType,e[0].dims),I=A("b",e[1].dataType,e[1].dims),z=x.type.value,M=null,V=[x,I];e.length===3&&(M=A("c",e[2].dataType,e[2].dims.length),V.push(M));let te=se("output",e[0].dataType,o.length);V.push(te);let de=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(de).declareVariables(...V)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",te)}; value += ${z}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},$=_=>{let w=A("a",e[0].dataType,e[0].dims),T=A("b",e[1].dataType,e[1].dims),x=null,I=[w,T];e.length===3&&(x=A("c",e[2].dataType,e[2].dims.length),I.push(x));let z=se("output",e[0].dataType,o.length);I.push(z);let M=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],V="",te="";t.transA&&t.transB?(te=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(te=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(te=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(te=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let de=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(M).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${te}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${V}
      }
      workgroupBarrier();
    }

    ${de}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${x.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*p},programUniforms:m}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y}},Jd=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Yd=(e,t)=>{Xd(e.inputs),e.compute(Qd(e.inputs,t))}}),Ar,Lr,Pi,Ui,ep,tp,rp,ip,ap,sp,np,op,up,lp,Zf=S(()=>{"use strict";ke(),ve(),b(),ue(),[Ar,Lr,Pi,Ui]=[0,1,2,3],ep=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},tp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,rp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,ip=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ap=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,sp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ar}] = batch;
     indices[${Lr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Pi}] = u32(r);
            indices[${Ui}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Pi}] = u32(clamp(r, 0, H - 1));
          indices[${Ui}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Pi}] = gs_reflect(r, border[1], border[3]);
          indices[${Ui}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,np=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ar}], indices[${Lr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ar}], indices[${Lr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,op=(e,t)=>{let r=A("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=A("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ar,Lr,Pi,Ui]=[0,3,1,2]);let n=se("output",e[0].dataType,s.length),o=r.type.value,u=U.size(s),l=[{type:12,data:u},...C(e[0].dims,i,s)],p=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${tp}
  ${rp(o)}
  ${ip(t)}
  ${ap(t)}
  ${sp(r,o,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Pi}]);
      let W_in = i32(uniforms.x_shape[${Ui}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ar}], indices[${Pi}], indices[${Ui}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${np(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let h=U.size(s);return{outputs:[{dims:s,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:p}},up=(e,t)=>{ep(e.inputs),e.compute(op(e.inputs,t))},lp=e=>g({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Nt,dp,pp,Un,cp,ss,hp,fp=S(()=>{"use strict";ke(),ve(),b(),aa(),dn(),ue(),fr(),Nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,dp=(e,t)=>{let r=e[0],i=Nt(e,1),a=Nt(e,2),s=Nt(e,3),n=Nt(e,4),o=Nt(e,5),u=Nt(e,6),l=Nt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],d=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=d,f=0,y=0,$=Math.floor(h/t.numHeads);if(u&&l&&U.size(u.dims)&&U.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=u.dims[2],y=u.dims[2]}else if(u&&U.size(u.dims)||l&&U.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i&&U.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,m=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(s&&U.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=f+m,T=0;if(n&&U.size(n.dims)>0){T=8;let M=n.dims;throw M.length===1?M[0]===p?T=1:M[0]===3*p+2&&(T=3):M.length===2&&M[0]===p&&M[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let x=!1,I=h;if(a&&U.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(m!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(m!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],x=!0}}let z=!1;if(n&&U.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&U.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:I,headSize:$,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:z,passPastInKv:x,qkvFormat:_}},pp=e=>g({...e}),Un=g({perm:[0,2,1,3]}),cp=(e,t,r,i,a,s,n)=>{let o=[i,a,s],u=U.size(o),l=[{type:12,data:u},{type:12,data:n},{type:12,data:s}],p=d=>{let h=se("qkv_with_bias",t.dataType,o),m=A("qkv",t.dataType,o),f=A("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(m,f,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},ss=(e,t,r,i,a,s,n,o)=>{let u=s;if(n&&U.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=cp(e,s,n,t,i,r*a,o),u=u.reshape([t,i,r,a]),r===1||i===1?u:e.compute(Bt(u,Un.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,i,r,a])),r===1||i===1?u:e.compute(Bt(u,Un.perm),{inputs:[u],outputs:[-1]})[0]},hp=(e,t)=>{let r=dp(e.inputs,t),i=e.inputs[0],a=Nt(e.inputs,1),s=Nt(e.inputs,2),n=Nt(e.inputs,3),o=Nt(e.inputs,4),u=Nt(e.inputs,5),l=Nt(e.inputs,6),p=Nt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let d=a&&s&&a.dims.length===4&&s.dims.length===4,h=ss(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(d)return Ya(e,h,a,s,o,void 0,l,p,u,r);if(!a||!s)throw new Error("key and value must be provided");let m=ss(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),f=ss(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);Ya(e,h,m,f,o,void 0,l,p,u,r)}}),mp,gp,wp,yp,Nn,_p,bp,vp=S(()=>{"use strict";ke(),ve(),b(),ue(),mp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},gp=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),g({numOutputs:i,axis:t.axis,splitSizes:r})},wp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${N("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,yp=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Nn=(e,t)=>{let r=e[0].dims,i=U.size(r),a=e[0].dataType,s=U.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),o=A("input",a,r.length),u=new Array(t.numOutputs),l=[],p=[],d=0,h=[{type:12,data:i}];for(let f=0;f<t.numOutputs;f++){d+=t.splitSizes[f],u[f]=d;let y=r.slice();y[s]=t.splitSizes[f],p.push(y),n[f]=se(`output${f}`,a,y.length),l.push({dims:p[f],dataType:e[0].dataType})}h.push({type:12,data:u},...C(r,...p));let m=f=>`
  ${f.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...n)}
  ${wp(u.length)}
  ${yp(n)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${N("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},_p=(e,t)=>{mp(e.inputs);let r=e.inputs.length===1?t:gp(e.inputs,t);e.compute(Nn(e.inputs,r),{inputs:[0]})},bp=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return g({axis:t,numOutputs:i,splitSizes:r})}}),$p,Ns,xp,Sp=S(()=>{"use strict";ke(),ve(),b(),ue(),$p=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!U.areEqual(i.dims,[])&&!U.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!U.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],p=a.dims[0],d=U.sizeFromDimension(r.dims,1)/l,h=o===0?a.dims[1]*2:d/n;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(l!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(l>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},Ns=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],o=U.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,p=e[2].dims[1],d=a===0?p*2:l/i,h=new Array(n,u,l/d,d-p),m=U.computeStrides(h),f=[{type:1,data:s},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,d,u*d,1]}):[],...C(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=$=>{let _=A("input",e[0].dataType,e[0].dims.length),w=A("position_ids",e[1].dataType,e[1].dims.length),T=A("cos_cache",e[2].dataType,e[2].dims.length),x=A("sin_cache",e[3].dataType,e[3].dims.length),I=se("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${$.declareVariables(_,w,T,x,I)}

        ${$.mainStart(E)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",se("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${_.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:g({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(h)/E)},programUniforms:f})}},xp=(e,t)=>{$p(e.inputs,t),e.compute(Ns(e.inputs,t))}}),Tp,kp,Ln,Ep,Ip,Xf=S(()=>{"use strict";b(),ke(),dn(),fp(),vp(),fr(),Sp(),ue(),Tp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],l=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],d=l,h=0,m=!i||i.dims.length===0,f=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=f*t.numHeads);let y=s&&s.dims.length!==0,$=n&&n.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===f)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&$){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=s.dims[2]}else if(y||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');d=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let w=0,T=!1,x=t.kvNumHeads?f*t.kvNumHeads:p;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(d!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');x=a.dims[2]}else{if(d!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');x=a.dims[1]*a.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=I.dims.reduce((M,V)=>M*V,1);if(z!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${z}.`);for(let M=0;M<I.dims.length;M++)if(I.dims[M]!==1&&I.dims[M]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${M}] = ${I.dims[M]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:x,headSize:f,vHeadSize:Math.floor(x/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:_}},kp=g({perm:[0,2,1,3]}),Ln=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Bt(i,kp.perm),{inputs:[i],outputs:[-1]})[0]),i},Ep=(e,t,r,i)=>{let a=7,s=["type","type"],n=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=p=>{let d=A("seq_lens",r.dataType,r.dims),h=A("total_seq_lens",i.dataType,i.dims),m=se("pos_ids",a,n),f=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(f).declareVariables(d,h,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${d.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Ip=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Tp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,d=g({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,m,f]=!a&&!s?e.compute(Nn([i],d),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],y,$;if(t.doRotary){let x=e.compute(Ep(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],I=e.inputs[7],z=e.inputs[8],M=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),V=[h,x,I,z],te=[-1];y=e.compute(Ns(V,M),{inputs:V,outputs:te})[0],V.splice(0,1,m);let de=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(Ns(V,de),{inputs:V,outputs:te})[0]}let _=ss(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:h,void 0,0),w=Ln(e,t.doRotary?$:m,r),T=Ln(e,f,r);Ya(e,_,w,T,void 0,void 0,n,o,void 0,r,u,l)}}),Vn,Cp,zp,Op,Qf=S(()=>{"use strict";ke(),ve(),fr(),ue(),Vn=(e,t,r,i,a,s,n,o)=>{let u=B(s),l=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,d=a*n,h=64;d===1&&(h=256);let m=[a,n,s/u],f=[a,n,2],y=["rank","type","type"],$=[];$.push(...C(m,f));let _=w=>{let T=A("x",t.dataType,3,u),x=A("scale",r.dataType,r.dims),I=A("bias",i.dataType,i.dims),z=se("output",1,3,2),M=[T,x,I,z];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...M)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${j("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${j("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:d},programUniforms:$}),getShaderSource:_},{inputs:[t,r,i],outputs:[-1]})[0]},Cp=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],o=i[1],u=U.sizeFromDimension(i,s),l=B(u),p=U.size(a)/l,d=Vn(e,t[0],t[1],t[2],n,u,o,r.epsilon),h=[n,o,u/l],m=[n,o],f=["type","none"],y=$=>{let _=A("x",t[0].dataType,h.length,l),w=A("scale_shift",1,m.length,2),T=se("output",t[0].dataType,h.length,l),x=[_,w,T];return`
  ${$.registerUniform("output_size","u32").declareVariables(...x)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...C(h,m,h)]}),getShaderSource:y},{inputs:[t[0],d]})},zp=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],o=U.sizeFromDimension(i,1)/n,u=B(n),l=U.size(a)/u,p=[{type:12,data:o},{type:12,data:Math.floor(n/u)}],d=["type","type"],h=!1,m=[0,i.length-1];for(let _=0;_<i.length-2;_++)h=h||i[_+1]!==1,m.push(_+1);h=h&&i[i.length-1]!==1;let f=h?e.compute(Bt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(_,w)=>i[m[w]])),y=Vn(e,f,t[1],t[2],s,o,n,r.epsilon),$=_=>{let w=P(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,x=M=>{let V=M===0?"x":"y",te=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${te}(scale.${V}))`;case 2:return`vec2<${w}>(${te}(scale[0].${V}, scale[1].${V}))`;case 4:return`vec4<${w}>(${te}(scale[0].${V}, scale[1].${V}, scale[2].${V}, scale[3].${V}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=A("input",t[0].dataType,t[0].dims,u),z=se("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${x(0)}, ${x(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:$},{inputs:[t[0],y]})},Op=(e,t)=>{t.format==="NHWC"?zp(e,e.inputs,t):Cp(e,e.inputs,t)}}),Ap,Rp,Mp,Jf=S(()=>{"use strict";ke(),ve(),ue(),Ap=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Rp=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],o=a,u=U.normalizeAxis(t.axis,a.length),l=U.sizeToDimension(a,u),p=U.sizeFromDimension(a,u),d=U.size(s.dims),h=n?U.size(n.dims):0;if(d!==p||n&&h!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${h}`);let m=[];for(let I=0;I<a.length;++I)I<u?m.push(a[I]):m.push(1);let f=B(p),y=["type","type"],$=[{type:12,data:l},{type:1,data:p},{type:12,data:Math.floor(p/f)},{type:1,data:t.epsilon}];n&&y.push("type");let _=r>1,w=r>2,T=I=>{let z=P(e[0].dataType),M=[A("x",e[0].dataType,e[0].dims,f),A("scale",s.dataType,s.dims,f)];n&&M.push(A("bias",n.dataType,n.dims,f)),M.push(se("output",e[0].dataType,o,f)),_&&M.push(se("mean_data_output",1,m)),w&&M.push(se("inv_std_output",1,m));let V=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(V).declareVariables(...M)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${H("f32",f)};
    var mean_square_vector = ${H("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${re(z,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${j("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${j("mean_square_vector",f)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${re(z,f,"x[j + offset]")};
      let f32scale = ${re(z,f,"scale[j]")};
      output[j + offset] = ${M[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${re(z,f,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:o,dataType:e[0].dataType}];return _&&x.push({dims:m,dataType:1}),w&&x.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:$}),getShaderSource:T}},Mp=(e,t)=>{Ap(e.inputs),e.compute(Rp(e.inputs,t,e.outputCount))}}),Bp,Dp,Yf=S(()=>{"use strict";ve(),yn(),$n(),Bp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Dp=e=>{Bp(e.inputs);let t=Ir.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(wn(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=U.size(e.inputs[0].dims.slice(0,-2)),n=U.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let o=e.inputs[0].reshape([1,s,i]),u=e.inputs[1].reshape([1,i,r]),l=[1,s,r],p=[o,u];e.compute(Ms(p,{activation:""},t,l),{inputs:p})}else e.compute(Ms(e.inputs,{activation:""},t))}}}),Pp,Up,Np,Lp,Vp,em=S(()=>{"use strict";ke(),ve(),b(),ue(),Pp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!U.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(U.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(U.size(u)!==l)throw new Error("zeroPoints input size error.")}},Up=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,o=r.slice(0,i-2),u=U.size(o),l=e[1].dims[2]/4,p=e[0].dataType,d=B(t.k),h=B(l),m=B(n),f=o.concat([a,n]),y=a>1&&n/m%2===0?2:1,$=U.size(f)/m/y,_=64,w=[],T=[u,a,s/d],x=U.convertShape(e[1].dims).slice();x.splice(-1,1,l/h),w.push(...C(T)),w.push(...C(x)),w.push(...C(e[2].dims)),e.length===4&&w.push(...C(U.convertShape(e[3].dims)));let I=[u,a,n/m];w.push(...C(I));let z=M=>{let V=T.length,te=A("a",e[0].dataType,V,d),de=A("b",12,x.length,h),Me=A("scales",e[2].dataType,e[2].dims.length),$e=[te,de,Me],xe=e.length===4?A("zero_points",12,e[3].dims.length):void 0;xe&&$e.push(xe);let Ke=I.length,pe=se("output",e[0].dataType,Ke,m),ye=P(e[0].dataType),Re=(()=>{switch(d){case 1:return`array<${ye}, 8>`;case 2:return`mat4x2<${ye}>`;case 4:return`mat2x4<${ye}>`;default:throw new Error(`${d}-component is not supported.`)}})(),De=Math.floor(32/t.bits),Oe=Math.floor(De/8),Ne=()=>{let Se="";for(let ge=0;ge<Oe;ge++){let Ot=ge*t.bits*4,Kt=Ot+t.bits;Se+=`
          // reuse a data (pass ${ge})
            var input_offset${ge>0?ge:""} = ${ge===0?te.indicesToOffset(`${te.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ge>0?ge:""}: ${Re};
            for (var j${ge>0?ge:""}: u32 = 0; j${ge>0?ge:""} < ${8/d}; j${ge>0?ge:""}++) {
              a_data${ge>0?ge:""}[j${ge>0?ge:""}] = ${te.getByOffset(`input_offset${ge>0?ge:""}`)};
              input_offset${ge>0?ge:""}++;
            }
          `;for(let _t=0;_t<m*y;_t++)Se+=`
            b_value = ${h===1?`b${_t}_data`:`b${_t}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${ge*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ot}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Kt}u) & b_mask);`}
            b_quantized_values = ${Re}(${Array.from({length:4},(Zt,rt)=>`${ye}(b_value_lower[${rt}]), ${ye}(b_value_upper[${rt}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Re}(${Array.from({length:8},(Zt,rt)=>`(b_quantized_values[${rt}] - ${xe?`zero_point${_t}`:"zero_point"}) * scale${_t}`).join(", ")});`:`(b_quantized_values - ${Re}(${Array(8).fill(`${xe?`zero_point${_t}`:"zero_point"}`).join(",")})) * scale${_t};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(_t/m)}]${m>1?`[${_t%m}]`:""} += ${Array.from({length:8/d},(Zt,rt)=>`${d===1?`a_data${ge>0?ge:""}[${rt}] * b_dequantized_values[${rt}]`:`dot(a_data${ge>0?ge:""}[${rt}], b_dequantized_values[${rt}])`}`).join(" + ")};
          `}return Se},ie=()=>{let Se=`
            var col_index = col * ${m};
            ${xe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ye}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let ge=0;ge<m*y;ge++)Se+=`
            let scale${ge} = ${Me.getByOffset("col_index * nBlocksPerCol + block")};
            ${xe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${xe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ge} = ${ye}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Se},Ce=()=>{let Se=`col_index = col * ${m};`;for(let ge=0;ge<m*y;ge++)Se+=`
            let b${ge}_data = ${de.getByIndices(`${de.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Se+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Re};
            var b_dequantized_values: ${Re};`,Se};return`
        var<workgroup> workgroup_shared: array<${pe.type.value}, ${y*_}>;
        ${M.declareVariables(...$e,pe)}
        ${M.mainStart([_,1,1])}
          let output_indices = ${pe.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${ie()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${Ce()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${Ne()}
                word_offset += ${De/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${h};${m};${y};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:p}],dispatchGroup:{x:$},programUniforms:w}),getShaderSource:z}},Np=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,o=r.slice(0,i-2),u=U.size(o),l=e[1].dims[2]/4,p=e[0].dataType,d=B(t.k),h=B(l),m=o.concat([a,n]),f=128,y=n%8===0?8:n%4===0?4:1,$=f/y,_=Math.floor(32/t.bits),w=$*h*_,T=w/d,x=w/t.blockSize,I=U.size(m)/y,z=[],M=[u,a,s/d],V=U.convertShape(e[1].dims).slice();V.splice(-1,1,l/h),z.push(...C(M)),z.push(...C(V)),z.push(...C(e[2].dims)),e.length===4&&z.push(...C(U.convertShape(e[3].dims)));let te=[u,a,n];z.push(...C(te));let de=Me=>{let $e=M.length,xe=A("a",e[0].dataType,$e,d),Ke=A("b",12,V.length,h),pe=A("scales",e[2].dataType,e[2].dims.length),ye=[xe,Ke,pe],Re=e.length===4?A("zero_points",12,e[3].dims.length):void 0;Re&&ye.push(Re);let De=te.length,Oe=se("output",e[0].dataType,De),Ne=P(e[0].dataType),ie=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${Ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${xe.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Oe.type.value}, ${$}>, ${y}>;
        ${Me.declareVariables(...ye,Oe)}
        ${Me.mainStart([$,y,1])}
          let output_indices = ${Oe.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${x} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${f})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${xe.getByIndices(`${xe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${xe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${Re?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${pe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Ke.getByIndices(`${Ke.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let Ce=Math.floor(_/8),Se="";for(let ge=0;ge<Ce;ge++){let Ot=ge*t.bits*4,Kt=Ot+t.bits;Se+=`
              ${ie()}
              {${t.bits===2?`
                let half_word = b_value >> ${ge*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Ot}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Kt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Ne}>(${Array.from({length:4},(_t,Zt)=>`${Ne}(b_value_lower[${Zt}]), ${Ne}(b_value_upper[${Zt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(_t,Zt)=>`${`dot(a_data${Zt}, b_dequantized_values[${Zt}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return Se})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${Oe.type.value} = ${Oe.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Oe.setByIndices(`${Oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${h};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:I},programUniforms:z}),getShaderSource:de}},Lp=(e,t)=>{Pp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Np(e.inputs,t)):e.compute(Up(e.inputs,t))},Vp=e=>g(e)}),Fp,qp,Wp,Gp,jp,Hp,Kp,Zp,Xp,tm=S(()=>{"use strict";ke(),ve(),ue(),Fp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${N("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${N("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${N("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Wp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${N("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${N("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${N("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${N("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Gp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${N("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${N("uniforms.x_shape",a,t)})) {
                  k = i32(${N("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${N("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${N("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${N("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${N("uniforms.x_shape",a,t)})) {
                  k -= i32(${N("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${N("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Hp=(e,t,r)=>{switch(r.mode){case 0:return qp(e,t,r.pads.length);case 1:return Wp(e,t,r.pads.length);case 2:return Gp(e,t,r.pads.length);case 3:return jp(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Kp=(e,t)=>{let r=U.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=U.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...C(e[0].dims,r));let o=["rank"],u=l=>{let p=se("output",e[0].dataType,r.length),d=A("x",e[0].dataType,i.length),h=d.type.value,m=Hp(p,i.length,t),f=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&f.push({name:"constant_value",type:n?h:"f32"}),`
            ${l.registerUniforms(f).declareVariables(d,p)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(r)/64)},programUniforms:s}),getShaderSource:u}},Zp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(r[u]),s[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>s[Number(u)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:i,pads:n}}else return t},Xp=(e,t)=>{Fp(e.inputs);let r=Zp(e.inputs,t);e.compute(Kp(e.inputs,r),{inputs:[0]})}}),ns,Fn,qn,Wn,Gn,Qp,Jp,jn,Hn,Yp,ec,Kn,tc,rc,Zn,ic,ac,sc,nc,rm=S(()=>{"use strict";gt(),ke(),ve(),ue(),ns=e=>{if(ne.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fn=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],l=t.pads.slice();Qr.adjustPoolAttributes(r,a,n,o,u,l);let p=Qr.computePoolOutputShape(r,a,o,u,n,l,t.autoPad,t.ceilMode),d=Object.assign({},t);s?Object.assign(d,{kernelShape:n,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:n,strides:o,pads:l,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[d,i?h:p]},qn=(e,t)=>{let r=t.format==="NHWC",i=U.size(e),a=U.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],d=!!(l+p);s.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:p}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],f=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];h=!!(y+$),s.push({type:12,data:m},{type:12,data:f},{type:12,data:y},{type:12,data:$}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,d,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=U.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,p)=>l+p);return[s,n,!!u,!1,!1]}},Wn=(e,t,r,i,a,s,n,o,u,l,p,d)=>{let h=a.format==="NHWC",m=t.type.value,f=se("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",$="",_="",w=r-(h?2:1);if(p?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let T=r-(h?3:2);d?$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${$}
              ${y}
              ${_}
              ${n}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,$=a.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${N("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${N("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${N("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${N("uniforms.pads","j - 2u",$)};
                  ${_}
              }
              ${n}

              output[global_idx] = value;
            }`}},Gn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Qp=e=>`${Gn(e)};${e.countIncludePad}`,Jp=e=>`${Gn(e)};${e.storageOrder};${e.dilations}`,jn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Hn=(e,t,r,i)=>{let[a,s]=Fn(t,i,r),n=A("x",t.dataType,t.dims.length),o=n.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,d,h,m,f]=qn(s,a);p.push(...C(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(s)/64)},programUniforms:p}),getShaderSource:$=>Wn($,n,t.dims.length,s.length,a,u,l,0,d,h,m,f)}},Yp=e=>{let t=e.count_include_pad!==0,r=jn(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Qp(i)}},ec=(e,t)=>{ns(e.inputs),e.compute(Hn("AveragePool",e.inputs[0],!1,t))},Kn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},tc=e=>{let t=e.format;return{format:t,...Kn,cacheKey:t}},rc=(e,t)=>{ns(e.inputs),e.compute(Hn("GlobalAveragePool",e.inputs[0],!0,t))},Zn=(e,t,r,i)=>{let[a,s]=Fn(t,i,r),n=`
      value = max(x_val, value);
    `,o="",u=A("x",t.dataType,t.dims.length),l=["rank"],[p,d,h,m,f]=qn(s,a);return p.push(...C(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${m};${f}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(s)/64)},programUniforms:p}),getShaderSource:y=>Wn(y,u,t.dims.length,s.length,a,n,o,t.dataType===10?-65504:-1e5,d,h,m,f)}},ic=(e,t)=>{ns(e.inputs),e.compute(Zn("MaxPool",e.inputs[0],!1,t))},ac=e=>{let t=e.storage_order,r=e.dilations,i=jn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Jp(a)}},sc=e=>{let t=e.format;return{format:t,...Kn,cacheKey:t}},nc=(e,t)=>{ns(e.inputs),e.compute(Zn("GlobalMaxPool",e.inputs[0],!0,t))}}),oc,uc,lc,dc,im=S(()=>{"use strict";ke(),ve(),b(),ue(),oc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},uc=(e,t)=>{let r=U.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,o=U.size(s),u=i===3||i===2,l=u?[Math.ceil(U.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,d=e.length>2?e[2]:void 0,h=d?u?[Math.ceil(U.size(d.dims)/4)]:d.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,f=m===!1&&p.length===1,y=B(o),$=m&&(!u||y===4),_=$?y:1,w=$&&!u?y:1,T=A("input",u?12:i,l.length,w),x=A("scale",n,p.length),I=d?A("zero_point",u?12:i,h.length):void 0,z=se("output",n,s.length,_),M=[T,x];I&&M.push(I);let V=[l,p];d&&V.push(h);let te=[{type:12,data:o/_},{type:12,data:r},{type:12,data:t.blockSize},...C(...V,s)],de=Me=>{let $e=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Me.registerUniforms($e).declareVariables(...M,z)}
      ${Me.mainStart()}
          ${Me.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${x.getByOffset("0")}`:f?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?m?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:f?u?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:de,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:te})}},lc=(e,t)=>{oc(e.inputs,t),e.compute(uc(e.inputs,t))},dc=e=>g({axis:e.axis,blockSize:e.blockSize})}),pc,cc,hc,am=S(()=>{"use strict";gt(),ke(),ue(),pc=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},cc=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,o=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...C(s)],u=l=>{let p=se("output",i,s.length),d=p.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(h).declareVariables(p)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},hc=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ne.webgpu.validateInputContent&&pc(t,r,i),e.compute(cc(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),fc,mc,gc,wc,sm=S(()=>{"use strict";ke(),ve(),b(),ue(),fc=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},mc=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(U.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],u=U.sizeFromDimension(r,o),l=[{type:12,data:n},{type:12,data:o},{type:12,data:u},...C(e[1].dims,e[2].dims,a)],p=d=>{let h=A("indices",e[1].dataType,e[1].dims.length),m=A("updates",e[2].dataType,e[2].dims.length,s),f=t.reduction!=="none"&&t.reduction!==""?tt("output",e[0].dataType,a.length):se("output",e[0].dataType,a.length,s);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,m,f)}
      ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${fc(t.reduction,"output[data_offset + i]","value",f.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:p}},gc=e=>g({reduction:e.reduction}),wc=(e,t)=>{e.compute(mc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),yc,_c,bc,Xn,vc,$c,xc,Sc,Tc,kc,Ec,Ic,Qn,Cc,zc,Oc,Ac,Rc,Mc,Bc,nm=S(()=>{"use strict";ke(),ve(),b(),ue(),yc=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},_c=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},bc=(e,t,r,i,a,s)=>{let[n,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(p=>s.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");yc(i,t),t.axes.length>0&&_c(i,t.axes,l).forEach((p,d)=>i[d]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>a.push(Number(p))),a.length!==0&&a.length!==l&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Xn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,vc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Xn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Xn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",$c=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",xc=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},Sc=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},Tc=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},kc=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${N("uniforms.scales","i",i)};
        var roi_low = ${N("uniforms.roi","i",a)};
        var roi_hi = ${N("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${N("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${N("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ec=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${N("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${N("uniforms.roi","i",s)};
          var roi_hi = ${N("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${N("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${N("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Ic=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${N("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Qn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Cc=(e,t,r,i,a)=>{let[s,n,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Qn(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${n}];
      var col:${l} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zc=(e,t,r,i,a,s,n,o,u,l)=>{let p=r.length===2,d=!0,[h,m]=p?[0,1]:d?[2,3]:[1,2],f=e.type.value,y=$=>{let _=$===h?"row":"col";return`
      fn ${_}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[$]},
        ${i[$]}, ${r[$]}, ${s[$]}, ${s[$]} + ${r.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${_}: ${f} = originalIdx + ${f}(i);
          if (${_} < 0 || ${_} >= ${r[$]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${_} = max(0, min(${_}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${_})`)};
          data[i + 1] = ${$===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(m)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Oc=(e,t,r,i,a)=>{let[s,n,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Qn(e,l,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${n}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ac=(e,t,r,i,a,s)=>{let n=e.dims,o=xc(s,t.axes,n.length),u=Sc(n,i,a,t.axes),l=i.slice();i.length===0&&(l=n.map((w,T)=>w===0?1:u[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=Tc(n,l,t)));let p=se("output",e.dataType,u.length),d=A("input",e.dataType,n.length),h=U.size(u),m=n.length===u.length&&n.every((w,T)=>w===u[T]),f=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,$=d.type.value,_=w=>`
      ${m?"":`
      ${vc(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ic(d,n)};
              ${$c(t.nearestMode,r,$)};
              ${Ec(d,p,n,u,l.length,o.length,f)};
              `;case"linear":return`
              ${kc(p,n,u,l.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${Cc(d,p,n,f,y)}`;if(n.length===3||n.length===5)return`${Oc(d,p,n,f,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${zc(d,p,n,u,l,o,t.cubicCoeffA,f,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(d,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:o},...C(n,u)]})}},Rc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Mc=(e,t)=>{let r=[],i=[],a=[],s=Rc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");bc(e.inputs,t,s,r,i,a),e.compute(Ac(e.inputs[0],t,s,r,i,a),{inputs:[0]})},Bc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return g({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Dc,Pc,Uc,om=S(()=>{"use strict";ke(),ve(),ue(),Dc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Pc=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=U.size(s),o=s,u=n,l=s.slice(-1)[0],p=i?s.slice(0,-1).concat(1):[],d=!a&&e.length>3,h=e.length>4,m=i&&r>1,f=i&&r>2,y=r>3,$=64,_=B(l),w=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],T=I=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],M=[A("x",e[0].dataType,e[0].dims,_),A("skip",e[1].dataType,e[1].dims,_),A("gamma",e[2].dataType,e[2].dims,_)];d&&M.push(A("beta",e[3].dataType,e[3].dims,_)),h&&M.push(A("bias",e[4].dataType,e[4].dims,_)),M.push(se("output",e[0].dataType,o,_)),m&&M.push(se("mean_output",1,p)),f&&M.push(se("inv_std_output",1,p)),y&&M.push(se("input_skip_bias_sum",e[0].dataType,o,_));let V=P(e[0].dataType),te=P(1,_);return`

      ${I.registerUniforms(z).declareVariables(...M)}
      var<workgroup> sum_shared : array<${te}, ${$}>;
      var<workgroup> sum_squared_shared : array<${te}, ${$}>;

      ${I.mainStart([$,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${$};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${$};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${$-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":V+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${re(V,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${$};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${j("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${j("square_sum",_)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${f?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${V}(mean)`}) *
            ${V}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:o,dataType:e[0].dataType}];return r>1&&x.push({dims:p,dataType:1}),r>2&&x.push({dims:p,dataType:1}),r>3&&x.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${m};${f};${y}`,inputDependencies:e.map((I,z)=>"type")},getShaderSource:T,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:w})}},Uc=(e,t)=>{Dc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Pc(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Nc,os,Lc,Jn,Vc,Fc,qc,Wc,um=S(()=>{"use strict";ke(),ve(),b(),ue(),Nc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},os=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Lc=(e,t)=>{if(e.length>1){let r=os(e,1),i=os(e,2),a=os(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),g({starts:r,ends:i,axes:a})}else return t},Jn=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Vc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${N("uniforms.input_shape","i",r.length)};
            let steps_i = ${N("uniforms.steps","i",r.length)};
            let signs_i = ${N("uniforms.signs","i",r.length)};
            let starts_i = ${N("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Fc=(e,t)=>{let r=e[0].dims,i=U.size(r),a=t.axes.length>0?U.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=os(e,4);s.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((_,w)=>Jn(_,w,r,a,s)),o=t.ends.map((_,w)=>Jn(_,w,r,a,s));if(a.length!==n.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let _=0;_<r.length;++_)a.includes(_)||(n.splice(_,0,0),o.splice(_,0,r[_]),s.splice(_,0,1));let u=s.map(_=>Math.sign(_));s.forEach((_,w,T)=>{if(_<0){let x=(o[w]-n[w])/_,I=n[w],z=I+x*s[w];n[w]=z,o[w]=I,T[w]=-_}});let l=r.slice(0);a.forEach((_,w)=>{l[_]=Math.ceil((o[_]-n[_])/s[_])});let p={dims:l,dataType:e[0].dataType},d=se("output",e[0].dataType,l.length),h=A("input",e[0].dataType,e[0].dims.length),m=U.size(l),f=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:m},{type:12,data:n},{type:6,data:u},{type:12,data:s},...C(e[0].dims,l)],$=_=>`
      ${_.registerUniforms(f).declareVariables(h,d)}
        ${Vc(h,d,r)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},qc=(e,t)=>{Nc(e.inputs,t);let r=Lc(e.inputs,t);e.compute(Fc(e.inputs,r),{inputs:[0]})},Wc=e=>{let t=e.starts,r=e.ends,i=e.axes;return g({starts:t,ends:r,axes:i})}}),Gc,jc,Hc,Kc,lm=S(()=>{"use strict";ke(),ve(),b(),fr(),ue(),Gc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},jc=(e,t)=>{let r=e.inputs[0],i=r.dims,a=U.size(i),s=i.length,n=U.normalizeAxis(t.axis,s),o=n<i.length-1,u,l=[];o?(l=Array.from({length:s},(M,V)=>V),l[n]=s-1,l[s-1]=n,u=e.compute(Bt(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,d=p[s-1],h=a/d,m=B(d),f=d/m,y=64;h===1&&(y=256);let $=(M,V)=>V===4?`max(max(${M}.x, ${M}.y), max(${M}.z, ${M}.w))`:V===2?`max(${M}.x, ${M}.y)`:V===3?`max(max(${M}.x, ${M}.y), ${M}.z)`:M,_=A("x",u.dataType,u.dims,m),w=se("result",u.dataType,u.dims,m),T=_.type.value,x=P(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=M=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${M.registerUniform("packedCols","i32").declareVariables(_,w)}
      ${M.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${$("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${j("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:f}]}),getShaderSource:I},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Bt(z,l),{inputs:[z]})},Hc=(e,t)=>{Gc(e.inputs),jc(e,t)},Kc=e=>g({axis:e.axis})}),Yn,Zc,Xc,Qc,Jc,dm=S(()=>{"use strict";ke(),ve(),ue(),Yn=e=>Array.from(e.getBigInt64Array(),Number),Zc=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Yn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Xc=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Qc=(e,t)=>{let r=e[0].dims,i=t??Yn(e[1]),a=Xc(r,i),s=U.size(a),n=e[0].dataType,o=A("input",n,r.length),u=se("output",n,a.length),l=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...C(e[0].dims,a)]}),getShaderSource:l}},Jc=e=>{Zc(e.inputs),e.compute(Qc(e.inputs),{inputs:[0]})}}),Yc,eh,th,pm=S(()=>{"use strict";ke(),ve(),ue(),Yc=(e,t,r,i,a)=>{let s=se("output_data",a,r.length,4),n=A("a_data",t[1].dataType,t[1].dims.length,4),o=A("b_data",t[2].dataType,t[2].dims.length,4),u=A("c_data",t[0].dataType,t[0].dims.length,4),l,p=(d,h,m)=>`select(${h}, ${d}, ${m})`;if(!i)l=s.setByOffset("global_idx",p(n.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(h,m,f="")=>{let y=`a_data[index_a${m}][component_a${m}]`,$=`b_data[index_b${m}][component_b${m}]`,_=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${n.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${h}[${m}] = ${f}(${p(y,$,_)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${d("data",0,"u32")}
            ${d("data",1,"u32")}
            ${d("data",2,"u32")}
            ${d("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${d("output_data[global_idx]",0)}
            ${d("output_data[global_idx]",1)}
            ${d("output_data[global_idx]",2)}
            ${d("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},eh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(U.areEqual(t,r)&&U.areEqual(r,i)),n=t,o=U.size(t);if(s){let l=Ir.calcShape(Ir.calcShape(t,r,!1),i,!1);if(!l)throw new Error("Can't perform where op on the given tensors");n=l,o=U.size(n)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Yc(l,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...C(i,t,r,n)]})}},th=e=>{e.compute(eh(e.inputs))}}),rh,cm=S(()=>{"use strict";Tf(),dn(),kf(),Ef(),If(),Cf(),zf(),Bf(),Pf(),Uf(),Nf(),Lf(),Vf(),Ff(),qf(),Wf(),Gf(),jf(),Hf(),Kf(),Zf(),Xf(),Qf(),Jf(),Yf(),em(),fp(),tm(),rm(),im(),am(),sm(),on(),nm(),Sp(),om(),um(),lm(),vp(),dm(),fr(),fn(),pm(),rh=new Map([["Abs",[Eu]],["Acos",[Iu]],["Acosh",[Cu]],["Add",[wl]],["ArgMax",[cu,ln]],["ArgMin",[pu,ln]],["Asin",[zu]],["Asinh",[Ou]],["Atan",[Au]],["Atanh",[Ru]],["Attention",[yu]],["AveragePool",[ec,Yp]],["BatchNormalization",[$u]],["BiasAdd",[Tu]],["BiasSplitGelu",[fl]],["Cast",[Bu,Mu]],["Ceil",[Uu]],["Clip",[Pu]],["Concat",[Ol,Al]],["Conv",[En,Tn]],["ConvTranspose",[sd,rd]],["Cos",[Nu]],["Cosh",[Lu]],["CumSum",[od,ud]],["DepthToSpace",[cd,hd]],["DequantizeLinear",[lc,dc]],["DFT",[bd,vd]],["Div",[yl]],["Einsum",[Ed,Id]],["Elu",[Vu,es]],["Equal",[_l]],["Erf",[Fu]],["Exp",[qu]],["Expand",[Ad]],["FastGelu",[Md]],["Floor",[Wu]],["FusedConv",[En,Tn]],["Gather",[Ud,Pd]],["GatherElements",[Zd,Kd]],["GatherBlockQuantized",[Wd,Gd]],["GatherND",[Ld,Vd]],["Gelu",[Gu]],["Gemm",[Yd,Jd]],["GlobalAveragePool",[rc,tc]],["GlobalMaxPool",[nc,sc]],["Greater",[xl]],["GreaterOrEqual",[Tl]],["GridSample",[up,lp]],["GroupQueryAttention",[Ip]],["HardSigmoid",[Yu,Ju]],["HardSwish",[el]],["InstanceNormalization",[Op]],["LayerNormalization",[Mp]],["LeakyRelu",[ju,es]],["Less",[Sl]],["LessOrEqual",[kl]],["Log",[ul]],["MatMul",[Dp]],["MatMulNBits",[Lp,Vp]],["MaxPool",[ic,ac]],["Mul",[bl]],["MultiHeadAttention",[hp,pp]],["Neg",[Ku]],["Not",[Hu]],["Pad",[Xp]],["Pow",[vl]],["QuickGelu",[pl,es]],["Range",[hc]],["Reciprocal",[Zu]],["ReduceMin",[nu]],["ReduceMean",[tu]],["ReduceMax",[su]],["ReduceSum",[uu]],["ReduceProd",[ou]],["ReduceL1",[ru]],["ReduceL2",[iu]],["ReduceLogSum",[du]],["ReduceLogSumExp",[au]],["ReduceSumSquare",[lu]],["Relu",[Xu]],["Resize",[Mc,Bc]],["RotaryEmbedding",[xp]],["ScatterND",[wc,gc]],["Sigmoid",[Qu]],["Sin",[tl]],["Sinh",[rl]],["Slice",[qc,Wc]],["SkipLayerNormalization",[Uc]],["Split",[_p,bp]],["Sqrt",[il]],["Softmax",[Hc,Kc]],["Sub",[$l]],["Tan",[al]],["Tanh",[sl]],["ThresholdedRelu",[ol,es]],["Tile",[Jc]],["Transpose",[rr,or]],["Where",[th]]])}),ih,hm=S(()=>{"use strict";gt(),tr(),ue(),ih=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){dt(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}n.setPipeline(e.computePipeline),n.setBindGroup(0,u),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){dt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&i.push(`enable ${l.extension};`)});let a=Ue(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,o=r.createShaderModule({code:n,label:e.name});Pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),ah={};K(ah,{WebGpuBackend:()=>uh});var sh,nh,oh,uh,fm=S(()=>{"use strict";gt(),ke(),tr(),Jr(),sn(),cm(),hm(),sh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},nh=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${sh(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},oh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},uh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=o=>t.features.has(o)&&r.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new oh(n),this.gpuDataManager=Es(this),this.programManager=new ih(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],s=a.kernelId,n=this.kernels.get(s),o=n.kernelType,u=n.kernelName,l=a.programName,p=a.inputTensorViews,d=a.outputTensorViews,h=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let f=Number(h-this.queryTimeBase),y=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map($=>({dims:$.dims,dataType:jt($.dataType)})),outputsMetadata:d.map($=>({dims:$.dims,dataType:jt($.dataType)})),kernelId:s,kernelType:o,kernelName:u,programName:l,startTime:f,endTime:y});else{let $="";p.forEach((w,T)=>{$+=`input[${T}]: [${w.dims}] | ${jt(w.dataType)}, `});let _="";d.forEach((w,T)=>{_+=`output[${T}]: [${w.dims}] | ${jt(w.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${u}|${l}" ${$}${_}start time: ${f} ns, execution time: ${y-f} ns`)}Je("GPU",`${l}::${h}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,r,i,a,s){dt(e.name);let n=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let x=this.gpuDataManager.get(T);if(!x)throw new Error(`no GPU data for input: ${T}`);n.push(x)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),p=r.length===0?o.map((w,T)=>T):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let d=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=s)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let T=p[w]===-1,x=p[w]===-2,I=T||x?a(o[w].dataType,o[w].dims):i(p[w],o[w].dataType,o[w].dims);if(d.push(I),I.data===0)continue;let z=this.gpuDataManager.get(I.data);if(!z)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(z),x){let M=this.kernelPersistentData.get(this.currentKernelId);M||(M=[],this.kernelPersistentData.set(this.currentKernelId,M)),M.push(z)}h.push(z)}if(n.length!==t.length||h.length!==d.length){if(h.length===0)return pt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let w=0,T=[];l.forEach(M=>{let V=typeof M.data=="number"?[M.data]:M.data;if(V.length===0)return;let te=M.type===10?2:4,de,Me;M.type===10?(Me=V.length>4?16:V.length>2?8:V.length*te,de=V.length>4?16:te*V.length):(Me=V.length<=2?V.length*te:16,de=16),w=Math.ceil(w/Me)*Me,T.push(w);let $e=M.type===10?8:4;w+=V.length>4?Math.ceil(V.length/$e)*de:V.length*te});let x=16;w=Math.ceil(w/x)*x;let I=new ArrayBuffer(w);l.forEach((M,V)=>{let te=T[V],de=typeof M.data=="number"?[M.data]:M.data;if(M.type===6)new Int32Array(I,te,de.length).set(de);else if(M.type===12)new Uint32Array(I,te,de.length).set(de);else if(M.type===10)new Uint16Array(I,te,de.length).set(de);else if(M.type===1)new Float32Array(I,te,de.length).set(de);else throw new Error(`Unsupported uniform type: ${jt(M.type)}`)});let z=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,I,0,w),this.gpuDataManager.release(z.id),m={offset:0,size:w,buffer:z.buffer}}let f=this.programManager.normalizeDispatchGroupSize(u),y=f[1]===1&&f[2]===1,$=nh(e,t,y),_=this.programManager.getArtifact($);if(_||(_=this.programManager.build(e,f),this.programManager.setArtifact($,_),Pe("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let w=0;w<l.length;w++){let T=l[w],x=T.type,I=typeof T.data=="number"?1:T.data.length,[z,M]=_.uniformVariablesInfo[w];if(x!==z||I!==M)throw new Error(`Uniform variable ${w} mismatch: expect type ${z} with size ${M}, got type ${x} with size ${I} in program "${_.programInfo.name}".`)}}if(Pe("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${f[0]}x${f[1]}x${f[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(_,n,h,f,m),pt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=rh.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Pe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${s}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Za(this,e,t);return Cr(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),lh={};K(lh,{init:()=>ph});var Ls,dh,ph,mm=S(()=>{"use strict";ke(),tr(),ve(),Ka(),Ls=class bf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(U.size(t)!==U.size(this.dims))throw new Error("Invalid new shape");return new bf(this.module,this.dataType,this.data,t)}},dh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let o=[];for(let u=0;u<n;u++){let l=Number(e.getValue(i*a++,s)),p=Number(e.getValue(i*a++,"*")),d=Number(e.getValue(i*a++,s)),h=[];for(let m=0;m<d;m++)h.push(Number(e.getValue(i*a++,s)));o.push(new Ls(e,l,p,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(n=>typeof n=="number"?this.inputs[n]:n)??this.inputs,i=t?.outputs??[],a=(n,o,u)=>new Ls(this.module,o,this.output(n,u),u),s=(n,o)=>{let u=Ht(n,o);if(!u)throw new Error(`Unsupported data type: ${n}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new Ls(this.module,n,l,o)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},ph=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(fm(),fe(ah)).WebGpuBackend,n=new s;await n.initialize(r,i),a("webgpu",[n,o=>n.alloc(Number(o)),o=>n.free(o),(o,u,l,p=!1)=>{if(p)Pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),n.memcpy(Number(o),Number(u));else{Pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));n.upload(Number(u),d)}},async(o,u,l)=>{Pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await n.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>n.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>n.releaseKernel(o),(o,u,l,p)=>{Pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let d=new dh(t,n,Number(u));return n.computeKernel(Number(o),d,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new Ha(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,u,l,p)=>s.ensureTensor(n,o,u,l,p),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o),(n,o)=>s.registerMLContext(n,o),!!r.trace])}}}),ch,eo,to,ri,hh,ro,Vs,io,ao,so,no,oo,uo,fh=S(()=>{"use strict";gt(),rn(),an(),ke(),Wt(),vi(),Va(),ch=(e,t)=>{Ie()._OrtInit(e,t)!==0&&be("Can't initialize onnxruntime.")},eo=async e=>{ch(e.wasm.numThreads,xi(e.logLevel))},to=async(e,t)=>{Ie().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(mm(),fe(lh)).init;t==="webgpu"&&await i("webgpu",Ie(),e,r),t==="webnn"&&await i("webnn",Ie(),e)}},ri=new Map,hh=e=>{let t=Ie(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&be("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},ro=(e,t)=>{let r=Ie(),i=r.stackSave(),a=0;try{let s=r.PTR_SIZE,n=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&be("Can't get session input/output metadata.");let o=Number(r.getValue(n,"*"));a=Number(r.getValue(n+s,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let l=r.HEAPU32[a/4+1],p=[];for(let d=0;d<l;d++){let h=Number(r.getValue(a+8+d*s,"*"));p.push(h!==0?r.UTF8ToString(h):Number(r.getValue(a+8+(d+l)*s,"*")))}return[o,u,p]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},Vs=e=>{let t=Ie(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},io=async(e,t)=>{let r,i,a=Ie();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Vs(e);let s=0,n=0,o=0,u=[],l=[],p=[];try{if([n,u]=await La(t),t?.externalData&&a.mountExternalData){let x=[];for(let I of t.externalData){let z=typeof I=="string"?I:I.path,M=typeof I=="string"?I:I.data;x.push(ki(M).then(V=>{a.mountExternalData(z,V)}))}await Promise.all(x)}for(let x of t?.executionProviders??[])if((typeof x=="string"?x:x.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof x!="string"){let I=x,z=I?.context,M=I?.gpuDevice,V=I?.deviceType,te=I?.powerPreference;z?a.currentContext=z:M?a.currentContext=await a.webnnCreateMLContext(M):a.currentContext=await a.webnnCreateMLContext({deviceType:V,powerPreference:te})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),a.webgpuOnCreateSession?.(s),s===0&&be("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[d,h]=hh(s),m=!!t?.enableGraphCapture,f=[],y=[],$=[],_=[],w=[];for(let x=0;x<d;x++){let[I,z,M]=ro(s,x);I===0&&be("Can't get an input name."),l.push(I);let V=a.UTF8ToString(I);f.push(V),$.push(z===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:jt(z),shape:M})}for(let x=0;x<h;x++){let[I,z,M]=ro(s,x+d);I===0&&be("Can't get an output name."),p.push(I);let V=a.UTF8ToString(I);y.push(V),_.push(z===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:jt(z),shape:M});{if(m&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let te=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[V]??"cpu",de=a.webnnIsGraphOutput;if(te==="cpu"&&de&&de(s,V)){w.push("ml-tensor-cpu-output");continue}if(te!=="cpu"&&te!=="cpu-pinned"&&te!=="gpu-buffer"&&te!=="ml-tensor")throw new Error(`Not supported preferred output location: ${te}.`);if(m&&te!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${te}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(te)}}let T=null;return w.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(s),o===0&&be("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Ki(x))}),ri.set(s,[s,l,p,T,m,!1]),[s,f,y,$,_]}catch(d){throw l.forEach(h=>a._OrtFree(h)),p.forEach(h=>a._OrtFree(h)),o!==0&&a._OrtReleaseBinding(o)!==0&&be("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&be("Can't release session."),d}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&be("Can't release session options."),u.forEach(d=>a._free(d)),a.unmountExternalData?.()}},ao=e=>{let t=Ie(),r=ri.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,o]=r;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&be("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&be("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(u=>t._OrtFree(u)),s.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&be("Can't release session."),ri.delete(e)},so=async(e,t,r,i,a,s,n=!1)=>{if(!e){t.push(0);return}let o=Ie(),u=o.PTR_SIZE,l=e[0],p=e[1],d=e[3],h=d,m,f;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let _=e[2].gpuBuffer;f=Ht(Gt(l),p);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=w(i,s,_,f)}}else if(d==="ml-tensor"){let _=e[2].mlTensor;f=Ht(Gt(l),p);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=w(i,_,Gt(l),p)}else{let _=e[2];if(Array.isArray(_)){f=u*_.length,m=o._malloc(f),r.push(m);for(let w=0;w<_.length;w++){if(typeof _[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(m+w*u,ft(_[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&w&&T){let x=o.UTF8ToString(a);if(w(i,x)||T(i,x)){let I=Gt(l);f=Ht(I,p),h="ml-tensor";let z=o.webnnCreateTemporaryTensor,M=o.webnnUploadTensor;if(!z||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let V=await z(i,I,p);M(V,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),m=V}else f=_.byteLength,m=o._malloc(f),r.push(m),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,f),m)}else f=_.byteLength,m=o._malloc(f),r.push(m),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,f),m)}}let y=o.stackSave(),$=o.stackAlloc(4*p.length);try{p.forEach((w,T)=>o.setValue($+T*u,w,u===4?"i32":"i64"));let _=o._OrtCreateTensor(Gt(l),m,f,$,p.length,Ki(h));_===0&&be(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(_)}finally{o.stackRestore(y)}},no=async(e,t,r,i,a,s)=>{let n=Ie(),o=n.PTR_SIZE,u=ri.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],p=u[1],d=u[2],h=u[3],m=u[4],f=u[5],y=t.length,$=i.length,_=0,w=[],T=[],x=[],I=[],z=[],M=n.stackSave(),V=n.stackAlloc(y*o),te=n.stackAlloc(y*o),de=n.stackAlloc($*o),Me=n.stackAlloc($*o);try{[_,w]=Ba(s),ot("wasm prepareInputOutputTensor");for(let pe=0;pe<y;pe++)await so(r[pe],T,I,e,p[t[pe]],t[pe],m);for(let pe=0;pe<$;pe++)await so(a[pe],x,I,e,d[i[pe]],y+i[pe],m);ut("wasm prepareInputOutputTensor");for(let pe=0;pe<y;pe++)n.setValue(V+pe*o,T[pe],"*"),n.setValue(te+pe*o,p[t[pe]],"*");for(let pe=0;pe<$;pe++)n.setValue(de+pe*o,x[pe],"*"),n.setValue(Me+pe*o,d[i[pe]],"*");if(h&&!f){let{handle:pe,outputPreferredLocations:ye,outputPreferredLocationsEncoded:Re}=h;if(p.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${p.length}).`);ot("wasm bindInputsOutputs");for(let De=0;De<y;De++){let Oe=t[De];await n._OrtBindInput(pe,p[Oe],T[De])!==0&&be(`Can't bind input[${De}] for session=${e}.`)}for(let De=0;De<$;De++){let Oe=i[De];a[De]?.[3]?(z.push(x[De]),n._OrtBindOutput(pe,d[Oe],x[De],0)!==0&&be(`Can't bind pre-allocated output[${De}] for session=${e}.`)):n._OrtBindOutput(pe,d[Oe],0,Re[Oe])!==0&&be(`Can't bind output[${De}] to ${ye[De]} for session=${e}.`)}ut("wasm bindInputsOutputs"),ri.set(e,[l,p,d,h,m,!0])}n.jsepOnRunStart?.(l),n.webnnOnRunStart?.(l);let $e;h?$e=await n._OrtRunWithBinding(l,h.handle,$,de,_):$e=await n._OrtRun(l,te,V,y,Me,$,de,_),$e!==0&&be("failed to call OrtRun().");let xe=[],Ke=[];ot("wasm ProcessOutputTensor");for(let pe=0;pe<$;pe++){let ye=Number(n.getValue(de+pe*o,"*"));if(ye===x[pe]||z.includes(x[pe])){xe.push(a[pe]),ye!==x[pe]&&n._OrtReleaseTensor(ye)!==0&&be("Can't release tensor.");continue}let Re=n.stackSave(),De=n.stackAlloc(4*o),Oe=!1,Ne,ie=0;try{n._OrtGetTensorData(ye,De,De+o,De+2*o,De+3*o)!==0&&be(`Can't access output tensor data on index ${pe}.`);let Ce=o===4?"i32":"i64",Se=Number(n.getValue(De,Ce));ie=n.getValue(De+o,"*");let ge=n.getValue(De+o*2,"*"),Ot=Number(n.getValue(De+o*3,Ce)),Kt=[];for(let rt=0;rt<Ot;rt++)Kt.push(Number(n.getValue(ge+rt*o,Ce)));n._OrtFree(ge)!==0&&be("Can't free memory for tensor dims.");let _t=Kt.reduce((rt,bt)=>rt*bt,1);Ne=jt(Se);let Zt=h?.outputPreferredLocations[i[pe]];if(Ne==="string"){if(Zt==="gpu-buffer"||Zt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let rt=[];for(let bt=0;bt<_t;bt++){let Vr=n.getValue(ie+bt*o,"*"),bm=n.getValue(ie+(bt+1)*o,"*"),vm=bt===_t-1?void 0:bm-Vr;rt.push(n.UTF8ToString(Vr,vm))}xe.push([Ne,Kt,rt,"cpu"])}else if(Zt==="gpu-buffer"&&_t>0){let rt=n.jsepGetBuffer;if(!rt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let bt=rt(ie),Vr=Ht(Se,_t);if(Vr===void 0||!Si(Ne))throw new Error(`Unsupported data type: ${Ne}`);Oe=!0,xe.push([Ne,Kt,{gpuBuffer:bt,download:n.jsepCreateDownloader(bt,Vr,Ne),dispose:()=>{n._OrtReleaseTensor(ye)!==0&&be("Can't release tensor.")}},"gpu-buffer"])}else if(Zt==="ml-tensor"&&_t>0){let rt=n.webnnEnsureTensor,bt=n.webnnIsGraphInputOutputTypeSupported;if(!rt||!bt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(Se,_t)===void 0||!Ti(Ne))throw new Error(`Unsupported data type: ${Ne}`);if(!bt(e,Ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${Ne} output is not supported by current WebNN Context.`);let Vr=await rt(e,ie,Se,Kt,!1);Oe=!0,xe.push([Ne,Kt,{mlTensor:Vr,download:n.webnnCreateMLTensorDownloader(ie,Ne),dispose:()=>{n.webnnReleaseTensorId(ie),n._OrtReleaseTensor(ye)}},"ml-tensor"])}else if(Zt==="ml-tensor-cpu-output"&&_t>0){let rt=n.webnnCreateMLTensorDownloader(ie,Ne)(),bt=xe.length;Oe=!0,Ke.push((async()=>{let Vr=[bt,await rt];return n.webnnReleaseTensorId(ie),n._OrtReleaseTensor(ye),Vr})()),xe.push([Ne,Kt,[],"cpu"])}else{let rt=$i(Ne),bt=new rt(_t);new Uint8Array(bt.buffer,bt.byteOffset,bt.byteLength).set(n.HEAPU8.subarray(ie,ie+bt.byteLength)),xe.push([Ne,Kt,bt,"cpu"])}}finally{n.stackRestore(Re),Ne==="string"&&ie&&n._free(ie),Oe||n._OrtReleaseTensor(ye)}}h&&!m&&(n._OrtClearBoundOutputs(h.handle)!==0&&be("Can't clear bound outputs."),ri.set(e,[l,p,d,h,m,!1]));for(let[pe,ye]of await Promise.all(Ke))xe[pe][2]=ye;return ut("wasm ProcessOutputTensor"),xe}finally{n.webnnOnRunEnd?.(l),n.stackRestore(M),T.forEach($e=>n._OrtReleaseTensor($e)),x.forEach($e=>n._OrtReleaseTensor($e)),I.forEach($e=>n._free($e)),_!==0&&n._OrtReleaseRunOptions(_),w.forEach($e=>n._free($e))}},oo=e=>{let t=Ie(),r=ri.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&be("Can't get an profile file name."),t._OrtFree(a)},uo=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ii,lr,ca,us,ls,Fs,lo,qs,Ni,Li,mh,gh,wh,yh,_h,bh,vh,$h,xh=S(()=>{"use strict";gt(),fh(),Wt(),wi(),ii=()=>!!ne.wasm.proxy&&typeof document<"u",ca=!1,us=!1,ls=!1,qs=new Map,Ni=(e,t)=>{let r=qs.get(e);r?r.push(t):qs.set(e,[t])},Li=()=>{if(ca||!us||ls||!lr)throw new Error("worker not ready")},mh=e=>{switch(e.data.type){case"init-wasm":ca=!1,e.data.err?(ls=!0,lo[1](e.data.err)):(us=!0,lo[0]()),Fs&&(URL.revokeObjectURL(Fs),Fs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},gh=async()=>{if(!us){if(ca)throw new Error("multiple calls to 'initWasm()' detected.");if(ls)throw new Error("previous call to 'initWasm()' failed.");if(ca=!0,ii())return new Promise((e,t)=>{lr?.terminate(),za().then(([r,i])=>{try{lr=i,lr.onerror=s=>t(s),lr.onmessage=mh,lo=[e,t];let a={type:"init-wasm",in:ne};if(!a.in.wasm.wasmPaths&&r){let s=hi();s&&(a.in.wasm.wasmPaths=s)}lr.postMessage(a),Fs=r}catch(a){t(a)}},t)});try{await bi(ne.wasm),await eo(ne),us=!0}catch(e){throw ls=!0,e}finally{ca=!1}}},wh=async e=>{if(ii())return Li(),new Promise((t,r)=>{Ni("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ne}};lr.postMessage(i)});await to(ne,e)},yh=async e=>ii()?(Li(),new Promise((t,r)=>{Ni("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};lr.postMessage(i,[e.buffer])})):Vs(e),_h=async(e,t)=>{if(ii()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Li(),new Promise((r,i)=>{Ni("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),lr.postMessage(a,s)})}else return io(e,t)},bh=async e=>{if(ii())return Li(),new Promise((t,r)=>{Ni("release",[t,r]);let i={type:"release",in:e};lr.postMessage(i)});ao(e)},vh=async(e,t,r,i,a,s)=>{if(ii()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Li(),new Promise((n,o)=>{Ni("run",[n,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:s}};lr.postMessage(l,uo(u))})}else return no(e,t,r,i,a,s)},$h=async e=>{if(ii())return Li(),new Promise((t,r)=>{Ni("end-profiling",[t,r]);let i={type:"end-profiling",in:e};lr.postMessage(i)});oo(e)}}),po,Sh,Th,gm=S(()=>{"use strict";gt(),xh(),ke(),di(),Va(),po=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Sh=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Si(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ti(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Th=class{async fetchModelAndCopyToWasmMemory(e){return yh(await ki(e))}async loadModel(e,t){dt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await _h(r,t),pt()}async dispose(){return bh(this.sessionId)}async run(e,t,r){dt();let i=[],a=[];Object.entries(e).forEach(d=>{let h=d[0],m=d[1],f=this.inputNames.indexOf(h);if(f===-1)throw new Error(`invalid input '${h}'`);i.push(m),a.push(f)});let s=[],n=[];Object.entries(t).forEach(d=>{let h=d[0],m=d[1],f=this.outputNames.indexOf(h);if(f===-1)throw new Error(`invalid output '${h}'`);s.push(m),n.push(f)});let o=i.map((d,h)=>po(d,()=>`input "${this.inputNames[a[h]]}"`)),u=s.map((d,h)=>d?po(d,()=>`output "${this.outputNames[n[h]]}"`):null),l=await vh(this.sessionId,a,o,n,u,r),p={};for(let d=0;d<l.length;d++)p[this.outputNames[n[d]]]=s[d]??Sh(l[d]);return pt(),p}startProfiling(){}endProfiling(){$h(this.sessionId)}}}),kh={};K(kh,{OnnxruntimeWebAssemblyBackend:()=>ho,initializeFlags:()=>co,wasmBackend:()=>Eh});var co,ho,Eh,wm=S(()=>{"use strict";gt(),xh(),gm(),co=()=>{(typeof ne.wasm.initTimeout!="number"||ne.wasm.initTimeout<0)&&(ne.wasm.initTimeout=0);let e=ne.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ne.wasm.simd=!1),typeof ne.wasm.proxy!="boolean"&&(ne.wasm.proxy=!1),typeof ne.wasm.trace!="boolean"&&(ne.wasm.trace=!1),typeof ne.wasm.numThreads!="number"||!Number.isInteger(ne.wasm.numThreads)||ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ne.wasm.numThreads=1;else{let t=typeof navigator>"u"?W("node:os").cpus().length:navigator.hardwareConcurrency;ne.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ho=class{async init(e){co(),await gh(),await wh(e)}async createInferenceSessionHandler(e,t){let r=new Th;return await r.loadModel(e,t),r}},Eh=new ho}),Ih={};K(Ih,{InferenceSession:()=>Mt,TRACE:()=>Je,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>_m,env:()=>ne,registerBackend:()=>oe}),gt(),gt(),gt();var ym="1.29.0",_m=Xr;{let e=(wm(),fe(kh)).wasmBackend;oe("webgpu",e,5),oe("webnn",e,5),oe("cpu",e,10),oe("wasm",e,10)}return Object.defineProperty(ne.versions,"web",{value:ym,enumerable:!0}),fe(Ih)})();v.exports=D})(To)),To.exports}var qi={},ko={},Qh;function eg(){return Qh||(Qh=1,Object.defineProperty(ko,"__esModule",{value:!0})),ko}var ys={},Jh;function tg(){if(Jh)return ys;Jh=1;var v;Object.defineProperty(ys,"__esModule",{value:!0}),ys.SileroLegacy=void 0;const R=Ts();class D{constructor(Y,ee,L,W,S){this.ortInstance=Y,this._session=ee,this._h=L,this._c=W,this._sr=S,this.reset_state=()=>{const K=Array(128).fill(0);this._h=new this.ortInstance.Tensor("float32",K,[2,1,64]),this._c=new this.ortInstance.Tensor("float32",K,[2,1,64])},this.process=async K=>{const fe={input:new this.ortInstance.Tensor("float32",K,[1,K.length]),h:this._h,c:this._c,sr:this._sr},le=await this._session.run(fe);this._h=le.hn,this._c=le.cn;const[ce]=le.output?.data;return{notSpeech:1-ce,isSpeech:ce}}}}return ys.SileroLegacy=D,v=D,D.new=async(q,Y)=>{R.log.debug("initializing vad");const ee=await Y(),L=await q.InferenceSession.create(ee),W=new q.Tensor("int64",[16000n]),S=Array(128).fill(0),K=new q.Tensor("float32",S,[2,1,64]),F=new q.Tensor("float32",S,[2,1,64]);return R.log.debug("vad is initialized"),new v(q,L,K,F,W)},ys}var _s={},Yh;function rg(){if(Yh)return _s;Yh=1;var v;Object.defineProperty(_s,"__esModule",{value:!0}),_s.SileroV5=void 0;const R=Ts();function D(Y){const ee=Array(256).fill(0);return new Y.Tensor("float32",ee,[2,1,128])}class q{constructor(ee,L,W,S){this._session=ee,this._state=L,this._sr=W,this.ortInstance=S,this.reset_state=()=>{this._state=D(this.ortInstance)},this.process=async K=>{const fe={input:new this.ortInstance.Tensor("float32",K,[1,K.length]),state:this._state,sr:this._sr},le=await this._session.run(fe);if(!le.stateN)throw new Error("No state from model");if(this._state=le.stateN,!le.output?.data)throw new Error("No output from model");const[ce]=le.output?.data;return{notSpeech:1-ce,isSpeech:ce}}}}return _s.SileroV5=q,v=q,q.new=async(Y,ee)=>{R.log.debug("Loading VAD...");const L=await ee(),W=await Y.InferenceSession.create(L),S=new Y.Tensor("int64",[16000n]),K=D(Y);return R.log.debug("...finished loading VAD"),new v(W,K,S,Y)},_s}var ef;function vf(){return ef||(ef=1,(function(v){var R=qi&&qi.__createBinding||(Object.create?(function(ee,L,W,S){S===void 0&&(S=W);var K=Object.getOwnPropertyDescriptor(L,W);(!K||("get"in K?!L.__esModule:K.writable||K.configurable))&&(K={enumerable:!0,get:function(){return L[W]}}),Object.defineProperty(ee,S,K)}):(function(ee,L,W,S){S===void 0&&(S=W),ee[S]=L[W]})),D=qi&&qi.__exportStar||function(ee,L){for(var W in ee)W!=="default"&&!Object.prototype.hasOwnProperty.call(L,W)&&R(L,ee,W)};Object.defineProperty(v,"__esModule",{value:!0}),v.SileroV5=v.SileroLegacy=void 0,D(eg(),v);var q=tg();Object.defineProperty(v,"SileroLegacy",{enumerable:!0,get:function(){return q.SileroLegacy}});var Y=rg();Object.defineProperty(v,"SileroV5",{enumerable:!0,get:function(){return Y.SileroV5}})})(qi)),qi}var bs={},tf;function $f(){if(tf)return bs;tf=1,Object.defineProperty(bs,"__esModule",{value:!0}),bs.Resampler=void 0;const v=Ts();class R{constructor(q){this.options=q,this.process=Y=>{const ee=[];for(const L of Y)for(this.inputBuffer.push(L);this.hasEnoughDataForFrame();){const W=this.generateOutputFrame();ee.push(W)}return ee},q.nativeSampleRate<16e3&&v.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}async*stream(q){for(const Y of q)for(this.inputBuffer.push(Y);this.hasEnoughDataForFrame();)yield this.generateOutputFrame()}hasEnoughDataForFrame(){return this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>=this.options.targetFrameSize}generateOutputFrame(){const q=new Float32Array(this.options.targetFrameSize);let Y=0,ee=0;for(;Y<this.options.targetFrameSize;){let L=0,W=0;for(;ee<Math.min(this.inputBuffer.length,(Y+1)*this.options.nativeSampleRate/this.options.targetSampleRate);){const S=this.inputBuffer[ee];S!==void 0&&(L+=S,W++),ee++}q[Y]=L/W,Y++}return this.inputBuffer=this.inputBuffer.slice(ee),q}}return bs.Resampler=R,bs}var rf;function ig(){return rf||(rf=1,(function(v){var R=Wr&&Wr.__createBinding||(Object.create?(function(le,ce,oe,ae){ae===void 0&&(ae=oe);var Te=Object.getOwnPropertyDescriptor(ce,oe);(!Te||("get"in Te?!ce.__esModule:Te.writable||Te.configurable))&&(Te={enumerable:!0,get:function(){return ce[oe]}}),Object.defineProperty(le,ae,Te)}):(function(le,ce,oe,ae){ae===void 0&&(ae=oe),le[ae]=ce[oe]})),D=Wr&&Wr.__setModuleDefault||(Object.create?(function(le,ce){Object.defineProperty(le,"default",{enumerable:!0,value:ce})}):function(le,ce){le.default=ce}),q=Wr&&Wr.__importStar||function(le){if(le&&le.__esModule)return le;var ce={};if(le!=null)for(var oe in le)oe!=="default"&&Object.prototype.hasOwnProperty.call(le,oe)&&R(ce,le,oe);return D(ce,le),ce};Object.defineProperty(v,"__esModule",{value:!0}),v.NonRealTimeVAD=v.defaultNonRealTimeVADOptions=void 0;const Y=q(Ym()),ee=yf(),L=Lo(),W=Vo(),S=en(),K=vf(),F=$f();v.defaultNonRealTimeVADOptions={...W.defaultFrameProcessorOptions,modelURL:ee.baseAssetPath+"silero_vad_legacy.onnx",modelFetcher:L.defaultModelFetcher};class fe{static async new(ce={}){const oe={...v.defaultNonRealTimeVADOptions,...ce};(0,W.validateOptions)(oe),oe.ortConfig!==void 0&&oe.ortConfig(Y);const ae=()=>oe.modelFetcher(oe.modelURL),Te=await K.SileroLegacy.new(Y,ae),Fe=new W.FrameProcessor(Te.process,Te.reset_state,{positiveSpeechThreshold:oe.positiveSpeechThreshold,negativeSpeechThreshold:oe.negativeSpeechThreshold,redemptionMs:oe.redemptionMs,preSpeechPadMs:oe.preSpeechPadMs,minSpeechMs:oe.minSpeechMs,submitUserSpeechOnPause:oe.submitUserSpeechOnPause},1536/16);return Fe.resume(),new this(ae,Y,oe,Fe)}constructor(ce,oe,ae,Te){this.modelFetcher=ce,this.ort=oe,this.options=ae,this.frameProcessor=Te,this.frameSamples=1536}async*run(ce,oe){const ae={nativeSampleRate:oe,targetSampleRate:16e3,targetFrameSize:this.frameSamples},Te=new F.Resampler(ae);let Fe=0,Ze=0,_e=0;for await(const me of Te.stream(ce)){const he=[];await this.frameProcessor.process(me,je=>{he.push(je)});for(const je of he)switch(je.msg){case S.Message.SpeechStart:Fe=_e*this.frameSamples/16;break;case S.Message.SpeechEnd:Ze=(_e+1)*this.frameSamples/16,yield{audio:je.audio,start:Fe,end:Ze};break}_e++}const Ee=[];this.frameProcessor.endSegment(me=>{Ee.push(me)});for(const me of Ee)me.msg===S.Message.SpeechEnd&&(yield{audio:me.audio,start:Fe,end:_e*this.frameSamples/16})}}v.NonRealTimeVAD=fe})(Wr)),Wr}var $r={},af;function ag(){if(af)return $r;af=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.audioFileToArray=$r.encodeWAV=$r.arrayBufferToBase64=$r.minFramesForTargetMS=void 0;function v(W,S,K=16e3){return Math.ceil(W*K/1e3/S)}$r.minFramesForTargetMS=v;function R(W){const S=new Uint8Array(W),K=S.byteLength,F=new Array(K);for(let fe=0;fe<K;fe++){const le=S[fe];if(le===void 0)break;F[fe]=String.fromCharCode(le)}return btoa(F.join(""))}$r.arrayBufferToBase64=R;function D(W,S=3,K=16e3,F=1,fe=32){const le=fe/8,ce=F*le,oe=new ArrayBuffer(44+W.length*le),ae=new DataView(oe);return ee(ae,0,"RIFF"),ae.setUint32(4,36+W.length*le,!0),ee(ae,8,"WAVE"),ee(ae,12,"fmt "),ae.setUint32(16,16,!0),ae.setUint16(20,S,!0),ae.setUint16(22,F,!0),ae.setUint32(24,K,!0),ae.setUint32(28,K*ce,!0),ae.setUint16(32,ce,!0),ae.setUint16(34,fe,!0),ee(ae,36,"data"),ae.setUint32(40,W.length*le,!0),S===1?Y(ae,44,W):q(ae,44,W),oe}$r.encodeWAV=D;function q(W,S,K){for(let F=0;F<K.length;F++,S+=4)W.setFloat32(S,K[F],!0)}function Y(W,S,K){for(let F=0;F<K.length;F++,S+=2){const fe=Math.max(-1,Math.min(1,K[F]));W.setInt16(S,fe<0?fe*32768:fe*32767,!0)}}function ee(W,S,K){for(let F=0;F<K.length;F++)W.setUint8(S+F,K.charCodeAt(F))}async function L(W){const S=new OfflineAudioContext(1,1,44100),K=new FileReader;let F=null;if(await new Promise(ce=>{K.addEventListener("loadend",()=>{const oe=K.result;S.decodeAudioData(oe,ae=>{F=ae,S.startRendering().then(()=>{console.log("Rendering completed successfully"),ce()}).catch(Te=>{console.error(`Rendering failed: ${Te}`)})},ae=>{console.log(`Error with decoding audio data: ${ae}`)})}),K.readAsArrayBuffer(W)}),F===null)throw Error("some shit");const fe=F,le=new Float32Array(fe.length);for(let ce=0;ce<fe.length;ce++)for(let oe=0;oe<fe.numberOfChannels;oe++){const ae=fe.getChannelData(oe)[ce],Te=le[ce];if(ae===void 0||Te===void 0)throw new Error("sample or out[i] is undefined");le[ce]=Te+ae}return{audio:le,sampleRate:fe.sampleRate}}return $r.audioFileToArray=L,$r}var Gr={},Eo={exports:{}},sf;function sg(){return sf||(sf=1,(function(v,R){var D=(()=>{var q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,W=(c=>typeof dr<"u"?dr:typeof Proxy<"u"?new Proxy(c,{get:(g,b)=>(typeof dr<"u"?dr:g)[b]}):c)(function(c){if(typeof dr<"u")return dr.apply(this,arguments);throw Error('Dynamic require of "'+c+'" is not supported')}),S=(c,g,b)=>()=>{if(b)throw b[0];try{return c&&(g=c(c=0)),g}catch(E){throw b=[E],E}},K=(c,g)=>{for(var b in g)q(c,b,{get:g[b],enumerable:!0})},F=(c,g,b,E)=>{if(g&&typeof g=="object"||typeof g=="function")for(let k of ee(g))!L.call(c,k)&&k!==b&&q(c,k,{get:()=>g[k],enumerable:!(E=Y(g,k))||E.enumerable});return c},fe=c=>F(q({},"__esModule",{value:!0}),c),le,ce,oe,ae,Te,Fe=S(()=>{"use strict";le=new Map,ce=[],oe=(c,g,b)=>{if(g&&typeof g.init=="function"&&typeof g.createInferenceSessionHandler=="function"){let E=le.get(c);if(E===void 0)le.set(c,{backend:g,priority:b});else{if(E.priority>b)return;if(E.priority===b&&E.backend!==g)throw new Error(`cannot register backend "${c}" using priority ${b}`)}if(b>=0){let k=ce.indexOf(c);k!==-1&&ce.splice(k,1);for(let P=0;P<ce.length;P++)if(le.get(ce[P]).priority<=b){ce.splice(P,0,c);return}ce.push(c)}return}throw new TypeError("not a valid backend")},ae=async c=>{let g=le.get(c);if(!g)return"backend not found.";if(g.initialized)return g.backend;if(g.aborted)return g.error;{let b=!!g.initPromise;try{return b||(g.initPromise=g.backend.init(c)),await g.initPromise,g.initialized=!0,g.backend}catch(E){return b||(g.error=`${E}`,g.aborted=!0),g.error}finally{delete g.initPromise}}},Te=async c=>{let g=c.executionProviders||[],b=g.map(B=>typeof B=="string"?B:B.name),E=b.length===0?ce:b,k,P=[],O=new Set;for(let B of E){let H=await ae(B);typeof H=="string"?P.push({name:B,err:H}):(k||(k=H),k===H&&O.add(B))}if(!k)throw new Error(`no available backend found. ERR: ${P.map(B=>`[${B.name}] ${B.err}`).join(", ")}`);for(let{name:B,err:H}of P)b.includes(B)&&console.warn(`removing requested execution provider "${B}" from session options because it is not available: ${H}`);let C=g.filter(B=>O.has(typeof B=="string"?B:B.name));return[k,new Proxy(c,{get:(B,H)=>H==="executionProviders"?C:Reflect.get(B,H)})]}}),Ze=S(()=>{"use strict";Fe()}),_e,Ee=S(()=>{"use strict";_e="1.29.0"}),me,he,je=S(()=>{"use strict";Ee(),me="warning",he={wasm:{},webgl:{},webgpu:{},versions:{common:_e},set logLevel(c){if(c!==void 0){if(typeof c!="string"||["verbose","info","warning","error","fatal"].indexOf(c)===-1)throw new Error(`Unsupported logging level: ${c}`);me=c}},get logLevel(){return me}},Object.defineProperty(he,"logLevel",{enumerable:!0})}),ne,qe=S(()=>{"use strict";je(),ne=he}),et,it,nt=S(()=>{"use strict";et=(c,g)=>{let b=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);b.width=c.dims[3],b.height=c.dims[2];let E=b.getContext("2d");if(E!=null){let k,P;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(k=c.dims[2],P=c.dims[3]):(k=c.dims[3],P=c.dims[2]);let O=g?.format!==void 0?g.format:"RGB",C=g?.norm,B,H;C===void 0||C.mean===void 0?B=[255,255,255,255]:typeof C.mean=="number"?B=[C.mean,C.mean,C.mean,C.mean]:(B=[C.mean[0],C.mean[1],C.mean[2],0],C.mean[3]!==void 0&&(B[3]=C.mean[3])),C===void 0||C.bias===void 0?H=[0,0,0,0]:typeof C.bias=="number"?H=[C.bias,C.bias,C.bias,C.bias]:(H=[C.bias[0],C.bias[1],C.bias[2],0],C.bias[3]!==void 0&&(H[3]=C.bias[3]));let re=P*k,j=0,N=re,we=re*2,A=-1;O==="RGBA"?(j=0,N=re,we=re*2,A=re*3):O==="RGB"?(j=0,N=re,we=re*2):O==="RBG"&&(j=0,we=re,N=re*2);for(let se=0;se<P;se++)for(let tt=0;tt<k;tt++){let ze=(c.data[j++]-H[0])*B[0],Ae=(c.data[N++]-H[1])*B[1],Ue=(c.data[we++]-H[2])*B[2],ue=A===-1?255:(c.data[A++]-H[3])*B[3];E.fillStyle="rgba("+ze+","+Ae+","+Ue+","+ue+")",E.fillRect(tt,se,1,1)}if("toDataURL"in b)return b.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},it=(c,g)=>{let b=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),E;if(b!=null){let k,P,O;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(k=c.dims[2],P=c.dims[1],O=c.dims[3]):(k=c.dims[3],P=c.dims[2],O=c.dims[1]);let C=g!==void 0&&g.format!==void 0?g.format:"RGB",B=g?.norm,H,re;B===void 0||B.mean===void 0?H=[255,255,255,255]:typeof B.mean=="number"?H=[B.mean,B.mean,B.mean,B.mean]:(H=[B.mean[0],B.mean[1],B.mean[2],255],B.mean[3]!==void 0&&(H[3]=B.mean[3])),B===void 0||B.bias===void 0?re=[0,0,0,0]:typeof B.bias=="number"?re=[B.bias,B.bias,B.bias,B.bias]:(re=[B.bias[0],B.bias[1],B.bias[2],0],B.bias[3]!==void 0&&(re[3]=B.bias[3]));let j=P*k;if(g!==void 0&&(g.format!==void 0&&O===4&&g.format!=="RGBA"||O===3&&g.format!=="RGB"&&g.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let N=4,we=0,A=1,se=2,tt=3,ze=0,Ae=j,Ue=j*2,ue=-1;C==="RGBA"?(ze=0,Ae=j,Ue=j*2,ue=j*3):C==="RGB"?(ze=0,Ae=j,Ue=j*2):C==="RBG"&&(ze=0,Ue=j,Ae=j*2),E=b.createImageData(k,P);for(let mt=0;mt<P*k;we+=N,A+=N,se+=N,tt+=N,mt++)E.data[we]=(c.data[ze++]-re[0])*H[0],E.data[A]=(c.data[Ae++]-re[1])*H[1],E.data[se]=(c.data[Ue++]-re[2])*H[2],E.data[tt]=ue===-1?255:(c.data[ue++]-re[3])*H[3]}else throw new Error("Can not access image data");return E}}),at,ht,Jt,Le,At,Yt,Et=S(()=>{"use strict";Qe(),at=(c,g)=>{if(c===void 0)throw new Error("Image buffer must be defined");if(g.height===void 0||g.width===void 0)throw new Error("Image height and width must be defined");if(g.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:b,width:E}=g,k=g.norm??{mean:255,bias:0},P,O;typeof k.mean=="number"?P=[k.mean,k.mean,k.mean,k.mean]:P=[k.mean[0],k.mean[1],k.mean[2],k.mean[3]??255],typeof k.bias=="number"?O=[k.bias,k.bias,k.bias,k.bias]:O=[k.bias[0],k.bias[1],k.bias[2],k.bias[3]??0];let C=g.format!==void 0?g.format:"RGBA",B=g.tensorFormat!==void 0&&g.tensorFormat!==void 0?g.tensorFormat:"RGB",H=b*E,re=B==="RGBA"?new Float32Array(H*4):new Float32Array(H*3),j=4,N=0,we=1,A=2,se=3,tt=0,ze=H,Ae=H*2,Ue=-1;C==="RGB"&&(j=3,N=0,we=1,A=2,se=-1),B==="RGBA"?Ue=H*3:B==="RBG"?(tt=0,Ae=H,ze=H*2):B==="BGR"&&(Ae=0,ze=H,tt=H*2);for(let ue=0;ue<H;ue++,N+=j,A+=j,we+=j,se+=j)re[tt++]=(c[N]+O[0])/P[0],re[ze++]=(c[we]+O[1])/P[1],re[Ae++]=(c[A]+O[2])/P[2],Ue!==-1&&se!==-1&&(re[Ue++]=(c[se]+O[3])/P[3]);return B==="RGBA"?new We("float32",re,[1,4,b,E]):new We("float32",re,[1,3,b,E])},ht=async(c,g)=>{let b=typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement,E=typeof ImageData<"u"&&c instanceof ImageData,k=typeof ImageBitmap<"u"&&c instanceof ImageBitmap,P=typeof c=="string",O,C=g??{},B=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},H=re=>typeof HTMLCanvasElement<"u"&&re instanceof HTMLCanvasElement||re instanceof OffscreenCanvas?re.getContext("2d"):null;if(b){let re=B();re.width=c.width,re.height=c.height;let j=H(re);if(j!=null){let N=c.height,we=c.width;if(g!==void 0&&g.resizedHeight!==void 0&&g.resizedWidth!==void 0&&(N=g.resizedHeight,we=g.resizedWidth),g!==void 0){if(C=g,g.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");C.tensorFormat="RGBA",C.height=N,C.width=we}else C.tensorFormat="RGBA",C.height=N,C.width=we;j.drawImage(c,0,0),O=j.getImageData(0,0,we,N).data}else throw new Error("Can not access image data")}else if(E){let re,j;if(g!==void 0&&g.resizedWidth!==void 0&&g.resizedHeight!==void 0?(re=g.resizedHeight,j=g.resizedWidth):(re=c.height,j=c.width),g!==void 0&&(C=g),C.format="RGBA",C.height=re,C.width=j,g!==void 0){let N=B();N.width=j,N.height=re;let we=H(N);if(we!=null)we.putImageData(c,0,0),O=we.getImageData(0,0,j,re).data;else throw new Error("Can not access image data")}else O=c.data}else if(k){if(g===void 0)throw new Error("Please provide image config with format for Imagebitmap");let re=B();re.width=c.width,re.height=c.height;let j=H(re);if(j!=null){let N=c.height,we=c.width;return j.drawImage(c,0,0,we,N),O=j.getImageData(0,0,we,N).data,C.height=N,C.width=we,at(O,C)}else throw new Error("Can not access image data")}else{if(P)return new Promise((re,j)=>{let N=B(),we=H(N);if(!c||!we)return j();let A=new Image;A.crossOrigin="Anonymous",A.src=c,A.onload=()=>{N.width=A.width,N.height=A.height,we.drawImage(A,0,0,N.width,N.height);let se=we.getImageData(0,0,N.width,N.height);C.height=N.height,C.width=N.width,re(at(se.data,C))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(O!==void 0)return at(O,C);throw new Error("Input data provided is not supported - aborted tensor creation")},Jt=(c,g)=>{let{width:b,height:E,download:k,dispose:P}=g,O=[1,E,b,4];return new We({location:"texture",type:"float32",texture:c,dims:O,download:k,dispose:P})},Le=(c,g)=>{let{dataType:b,dims:E,download:k,dispose:P}=g;return new We({location:"gpu-buffer",type:b??"float32",gpuBuffer:c,dims:E,download:k,dispose:P})},At=(c,g)=>{let{dataType:b,dims:E,download:k,dispose:P}=g;return new We({location:"ml-tensor",type:b??"float32",mlTensor:c,dims:E,download:k,dispose:P})},Yt=(c,g,b)=>new We({location:"cpu-pinned",type:c,data:g,dims:b??[g.length]})}),lt,It,Ct,Rt,Vt=S(()=>{"use strict";lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),It=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ct=!1,Rt=()=>{if(!Ct){Ct=!0;let c=typeof BigInt64Array<"u"&&BigInt64Array.from,g=typeof BigUint64Array<"u"&&BigUint64Array.from,b=globalThis.Float16Array,E=typeof b<"u"&&b.from;c&&(lt.set("int64",BigInt64Array),It.set(BigInt64Array,"int64")),g&&(lt.set("uint64",BigUint64Array),It.set(BigUint64Array,"uint64")),E?(lt.set("float16",b),It.set(b,"float16")):lt.set("float16",Uint16Array)}}}),nr,Ft,Tt=S(()=>{"use strict";Qe(),nr=c=>{let g=1;for(let b=0;b<c.length;b++){let E=c[b];if(typeof E!="number"||!Number.isSafeInteger(E))throw new TypeError(`dims[${b}] must be an integer, got: ${E}`);if(E<0)throw new RangeError(`dims[${b}] must be a non-negative integer, got: ${E}`);g*=E}return g},Ft=(c,g)=>{switch(c.location){case"cpu":return new We(c.type,c.data,g);case"cpu-pinned":return new We({location:"cpu-pinned",data:c.data,type:c.type,dims:g});case"texture":return new We({location:"texture",texture:c.texture,type:c.type,dims:g});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:c.gpuBuffer,type:c.type,dims:g});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:c.mlTensor,type:c.type,dims:g});default:throw new Error(`tensorReshape: tensor location ${c.location} is not supported`)}}}),We,Qe=S(()=>{"use strict";nt(),Et(),Vt(),Tt(),We=class{constructor(c,g,b){Rt();let E,k;if(typeof c=="object"&&"location"in c)switch(this.dataLocation=c.location,E=c.type,k=c.dims,c.location){case"cpu-pinned":{let O=lt.get(E);if(!O)throw new TypeError(`unsupported type "${E}" to create tensor from pinned buffer`);if(!(c.data instanceof O))throw new TypeError(`buffer should be of type ${O.name}`);this.cpuData=c.data;break}case"texture":{if(E!=="float32")throw new TypeError(`unsupported type "${E}" to create tensor from texture`);this.gpuTextureData=c.texture,this.downloader=c.download,this.disposer=c.dispose;break}case"gpu-buffer":{if(E!=="float32"&&E!=="float16"&&E!=="int32"&&E!=="int64"&&E!=="uint32"&&E!=="uint8"&&E!=="bool"&&E!=="uint4"&&E!=="int4")throw new TypeError(`unsupported type "${E}" to create tensor from gpu buffer`);this.gpuBufferData=c.gpuBuffer,this.downloader=c.download,this.disposer=c.dispose;break}case"ml-tensor":{if(E!=="float32"&&E!=="float16"&&E!=="int32"&&E!=="int64"&&E!=="uint32"&&E!=="uint64"&&E!=="int8"&&E!=="uint8"&&E!=="bool"&&E!=="uint4"&&E!=="int4")throw new TypeError(`unsupported type "${E}" to create tensor from MLTensor`);this.mlTensorData=c.mlTensor,this.downloader=c.download,this.disposer=c.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let O,C;if(typeof c=="string")if(E=c,C=b,c==="string"){if(!Array.isArray(g))throw new TypeError("A string tensor's data must be a string array.");O=g}else{let B=lt.get(c);if(B===void 0)throw new TypeError(`Unsupported tensor type: ${c}.`);if(Array.isArray(g)){if(c==="float16"&&B===Uint16Array||c==="uint4"||c==="int4")throw new TypeError(`Creating a ${c} tensor from number array is not supported. Please use ${B.name} as data.`);c==="uint64"||c==="int64"?O=B.from(g,BigInt):O=B.from(g)}else if(g instanceof B)O=g;else if(g instanceof Uint8ClampedArray)if(c==="uint8")O=Uint8Array.from(g);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(c==="float16"&&g instanceof Uint16Array&&B!==Uint16Array)O=new globalThis.Float16Array(g.buffer,g.byteOffset,g.length);else throw new TypeError(`A ${E} tensor's data must be type of ${B}`)}else if(C=g,Array.isArray(c)){if(c.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let B=typeof c[0];if(B==="string")E="string",O=c;else if(B==="boolean")E="bool",O=Uint8Array.from(c);else throw new TypeError(`Invalid element type of data array: ${B}.`)}else if(c instanceof Uint8ClampedArray)E="uint8",O=Uint8Array.from(c);else{let B=It.get(c.constructor);if(B===void 0)throw new TypeError(`Unsupported type for tensor data: ${c.constructor}.`);E=B,O=c}if(C===void 0)C=[O.length];else if(!Array.isArray(C))throw new TypeError("A tensor's dims must be a number array");k=C,this.cpuData=O,this.dataLocation="cpu"}let P=nr(k);if(this.cpuData&&P!==this.cpuData.length&&!((E==="uint4"||E==="int4")&&Math.ceil(P/2)===this.cpuData.length))throw new Error(`Tensor's size(${P}) does not match data length(${this.cpuData.length}).`);this.type=E,this.dims=k,this.size=P}static async fromImage(c,g){return ht(c,g)}static fromTexture(c,g){return Jt(c,g)}static fromGpuBuffer(c,g){return Le(c,g)}static fromMLTensor(c,g){return At(c,g)}static fromPinnedBuffer(c,g,b){return Yt(c,g,b)}toDataURL(c){return et(this,c)}toImageData(c){return it(this,c)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(c){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let g=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=g,c&&this.disposer&&(this.disposer(),this.disposer=void 0),g}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(c){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,c)}}}),Xe,qt=S(()=>{"use strict";Qe(),Xe=We}),Je,er,dt,pt,ot,ut,Pt=S(()=>{"use strict";je(),Je=(c,g)=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeStamp(`${c}::ORT::${g}`)},er=(c,g)=>{let b=new Error().stack?.split(/\r\n|\r|\n/g)||[],E=!1;for(let k=0;k<b.length;k++){if(E&&!b[k].includes("TRACE_FUNC")){let P=`FUNC_${c}::${b[k].trim().split(" ")[1]}`;g&&(P+=`::${g}`),Je("CPU",P);return}b[k].includes("TRACE_FUNC")&&(E=!0)}},dt=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("BEGIN",c)},pt=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("END",c)},ot=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.time(`ORT::${c}`)},ut=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeEnd(`ORT::${c}`)}}),Tr,Zr=S(()=>{"use strict";Fe(),qt(),Pt(),Tr=class xf{constructor(g){this.handler=g}async run(g,b,E){dt(),ot("InferenceSession.run");let k={},P={};if(typeof g!="object"||g===null||g instanceof Xe||Array.isArray(g))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let O=!0;if(typeof b=="object"){if(b===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(b instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(b)){if(b.length===0)throw new TypeError("'fetches' cannot be an empty array.");O=!1;for(let H of b){if(typeof H!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(H)===-1)throw new RangeError(`'fetches' contains invalid output name: ${H}.`);k[H]=null}if(typeof E=="object"&&E!==null)P=E;else if(typeof E<"u")throw new TypeError("'options' must be an object.")}else{let H=!1,re=Object.getOwnPropertyNames(b);for(let j of this.outputNames)if(re.indexOf(j)!==-1){let N=b[j];(N===null||N instanceof Xe)&&(H=!0,O=!1,k[j]=N)}if(H){if(typeof E=="object"&&E!==null)P=E;else if(typeof E<"u")throw new TypeError("'options' must be an object.")}else P=b}}else if(typeof b<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let H of this.inputNames)if(typeof g[H]>"u")throw new Error(`input '${H}' is missing in 'feeds'.`);if(O)for(let H of this.outputNames)k[H]=null;let C=await this.handler.run(g,k,P),B={};for(let H in C)if(Object.hasOwnProperty.call(C,H)){let re=C[H];re instanceof Xe?B[H]=re:B[H]=new Xe(re.type,re.data,re.dims)}return ut("InferenceSession.run"),pt(),B}async release(){return this.handler.dispose()}static async create(g,b,E,k){dt(),ot("InferenceSession.create");let P,O={};if(typeof g=="string"){if(P=g,typeof b=="object"&&b!==null)O=b;else if(typeof b<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof Uint8Array){if(P=g,typeof b=="object"&&b!==null)O=b;else if(typeof b<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&g instanceof SharedArrayBuffer){let re=g,j=0,N=g.byteLength;if(typeof b=="object"&&b!==null)O=b;else if(typeof b=="number"){if(j=b,!Number.isSafeInteger(j))throw new RangeError("'byteOffset' must be an integer.");if(j<0||j>=re.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${re.byteLength}).`);if(N=g.byteLength-j,typeof E=="number"){if(N=E,!Number.isSafeInteger(N))throw new RangeError("'byteLength' must be an integer.");if(N<=0||j+N>re.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${re.byteLength-j}].`);if(typeof k=="object"&&k!==null)O=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else if(typeof E<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof b<"u")throw new TypeError("'options' must be an object.");P=new Uint8Array(re,j,N)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[C,B]=await Te(O),H=await C.createInferenceSessionHandler(P,B);return ut("InferenceSession.create"),pt(),new xf(H)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Mt,kr=S(()=>{"use strict";Zr(),Mt=Tr}),$a=S(()=>{"use strict"}),li=S(()=>{"use strict"}),ji=S(()=>{"use strict"}),Hi=S(()=>{"use strict"}),Xr={};K(Xr,{InferenceSession:()=>Mt,TRACE:()=>Je,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>ne,registerBackend:()=>oe});var gt=S(()=>{"use strict";Ze(),qe(),kr(),qt(),$a(),li(),Pt(),ji(),Hi()}),di=S(()=>{"use strict"}),xa={};K(xa,{default:()=>Sa});var pi,ci,Sa,tn=S(()=>{"use strict";qa(),Wt(),wi(),pi="ort-wasm-proxy-worker",ci=globalThis.self?.name===pi,ci&&(self.onmessage=c=>{let{type:g,in:b}=c.data;try{switch(g){case"init-wasm":bi(b.wasm).then(()=>{Zi(b).then(()=>{postMessage({type:g})},E=>{postMessage({type:g,err:E})})},E=>{postMessage({type:g,err:E})});break;case"init-ep":{let{epName:E,env:k}=b;Xi(k,E).then(()=>{postMessage({type:g})},P=>{postMessage({type:g,err:P})});break}case"copy-from":{let{buffer:E}=b,k=Pe(E);postMessage({type:g,out:k});break}case"create":{let{model:E,options:k}=b;tr(E,k).then(P=>{postMessage({type:g,out:P})},P=>{postMessage({type:g,err:P})});break}case"release":Yi(b),postMessage({type:g});break;case"run":{let{sessionId:E,inputIndices:k,inputs:P,outputIndices:O,options:C}=b;U(E,k,P,O,new Array(O.length).fill(null),C).then(B=>{B.some(H=>H[3]!=="cpu")?postMessage({type:g,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:g,out:B},ea([...P,...B]))},B=>{postMessage({type:g,err:B})});break}case"end-profiling":Qr(b),postMessage({type:g});break;default:}}catch(E){postMessage({type:g,err:E})}}),Sa=ci?null:c=>new Worker(c??st,{type:"classic",name:pi})}),Ta,ka,st,hi,Br,Ea,Ia,fi,Ca,mi,za,gi,Oa,wi=S(()=>{"use strict";di(),Ta=typeof location>"u"?void 0:location.origin,ka=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,st=ka(),hi=()=>{if(st&&!st.startsWith("blob:"))return st.substring(0,st.lastIndexOf("/")+1)},Br=(c,g)=>{try{let b=g??st;return(b?new URL(c,b):new URL(c)).origin===Ta}catch{return!1}},Ea=(c,g)=>{let b=g??st;try{return(b?new URL(c,b):new URL(c)).href}catch{return}},Ia=(c,g)=>`${g??"./"}${c}`,fi=async c=>{let g=await(await fetch(c,{credentials:"same-origin"})).blob();return URL.createObjectURL(g)},Ca=async c=>(await import(c)).default,mi=(tn(),fe(xa)).default,za=async()=>{if(!st)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Br(st))return[void 0,mi()];let c=await fi(st);return[c,mi(c)]},gi=void 0,Oa=async(c,g,b,E)=>{let k=gi&&!(c||g);if(k)if(st)k=Br(st)||E&&!b;else if(E&&!b)k=!0;else throw new Error("cannot determine the script source URL.");if(k)return[void 0,gi];{let P="ort-wasm-simd-threaded.mjs",O=c??Ea(P,g),C=b&&O&&!Br(O,g),B=C?await fi(O):O??Ia(P,g);return[C?B:void 0,await Ca(B)]}}}),yi,Dr,pr,_i,Aa,Ra,Ma,bi,Ie,Wt=S(()=>{"use strict";wi(),Dr=!1,pr=!1,_i=!1,Aa=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ra=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ma=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},bi=async c=>{if(Dr)return Promise.resolve();if(pr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(_i)throw new Error("previous call to 'initializeWebAssembly()' failed.");pr=!0;let g=c.initTimeout,b=c.numThreads;if(c.simd!==!1){if(c.simd==="relaxed"){if(!Ma())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ra())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let E=Aa();b>1&&!E&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+b+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),c.numThreads=b=1);let k=c.wasmPaths,P=typeof k=="string"?k:void 0,O=k?.mjs,C=O?.href??O,B=k?.wasm,H=B?.href??B,re=c.wasmBinary,[j,N]=await Oa(C,P,b>1,!!re||!!H),we=!1,A=[];if(g>0&&A.push(new Promise(se=>{setTimeout(()=>{we=!0,se()},g)})),A.push(new Promise((se,tt)=>{let ze={numThreads:b};if(re)ze.wasmBinary=re,ze.locateFile=Ae=>Ae;else if(H||P)ze.locateFile=Ae=>H??P+Ae;else if(C&&C.indexOf("blob:")!==0)ze.locateFile=Ae=>new URL(Ae,C).href;else if(j){let Ae=hi();Ae&&(ze.locateFile=Ue=>Ae+Ue)}N(ze).then(Ae=>{pr=!1,Dr=!0,yi=Ae,se(),j&&URL.revokeObjectURL(j)},Ae=>{pr=!1,_i=!0,tt(Ae)})})),await Promise.race(A),we)throw new Error(`WebAssembly backend initializing failed due to timeout: ${g}ms`)},Ie=()=>{if(Dr&&yi)return yi;throw new Error("WebAssembly is not initialized yet.")}}),ft,Pr,be,vi=S(()=>{"use strict";Wt(),ft=(c,g)=>{let b=Ie(),E=b.lengthBytesUTF8(c)+1,k=b._malloc(E);return b.stringToUTF8(c,k,E),g.push(k),k},Pr=(c,g,b,E)=>{if(typeof c=="object"&&c!==null){if(b.has(c))throw new Error("Circular reference in options");b.add(c)}Object.entries(c).forEach(([k,P])=>{let O=g?g+k:k;if(typeof P=="object")Pr(P,O+".",b,E);else if(typeof P=="string"||typeof P=="number")E(O,P.toString());else if(typeof P=="boolean")E(O,P?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof P}`)})},be=c=>{let g=Ie(),b=g.stackSave();try{let E=g.PTR_SIZE,k=g.stackAlloc(2*E);g._OrtGetLastError(k,k+E);let P=Number(g.getValue(k,E===4?"i32":"i64")),O=g.getValue(k+E,"*"),C=O?g.UTF8ToString(O):"";throw new Error(`${c} ERROR_CODE: ${P}, ERROR_MESSAGE: ${C}`)}finally{g.stackRestore(b)}}}),Ba,rn=S(()=>{"use strict";Wt(),vi(),Ba=c=>{let g=Ie(),b=0,E=[],k=c||{};try{if(c?.logSeverityLevel===void 0)k.logSeverityLevel=2;else if(typeof c.logSeverityLevel!="number"||!Number.isInteger(c.logSeverityLevel)||c.logSeverityLevel<0||c.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${c.logSeverityLevel}`);if(c?.logVerbosityLevel===void 0)k.logVerbosityLevel=0;else if(typeof c.logVerbosityLevel!="number"||!Number.isInteger(c.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${c.logVerbosityLevel}`);c?.terminate===void 0&&(k.terminate=!1);let P=0;return c?.tag!==void 0&&(P=ft(c.tag,E)),b=g._OrtCreateRunOptions(k.logSeverityLevel,k.logVerbosityLevel,!!k.terminate,P),b===0&&be("Can't create run options."),c?.extra!==void 0&&Pr(c.extra,"",new WeakSet,(O,C)=>{let B=ft(O,E),H=ft(C,E);g._OrtAddRunConfigEntry(b,B,H)!==0&&be(`Can't set a run config entry: ${O} - ${C}.`)}),[b,E]}catch(P){throw b!==0&&g._OrtReleaseRunOptions(b),E.forEach(O=>g._free(O)),P}}}),Da,Pa,Ua,Ut,Na,La,an=S(()=>{"use strict";Wt(),vi(),Da=c=>{switch(c){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${c}`)}},Pa=c=>{switch(c){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${c}`)}},Ua=c=>{c.extra||(c.extra={}),c.extra.session||(c.extra.session={});let g=c.extra.session;g.use_ort_model_bytes_directly||(g.use_ort_model_bytes_directly="1"),c.executionProviders&&c.executionProviders.some(b=>(typeof b=="string"?b:b.name)==="webgpu")&&(c.enableMemPattern=!1)},Ut=(c,g,b,E)=>{let k=ft(g,E),P=ft(b,E);Ie()._OrtAddSessionConfigEntry(c,k,P)!==0&&be(`Can't set a session config entry: ${g} - ${b}.`)},Na=async(c,g,b)=>{let E=g.executionProviders;for(let k of E){let P=typeof k=="string"?k:k.name,O=[];switch(P){case"webnn":if(P="WEBNN",Ut(c,"session.disable_quant_qdq","1",b),Ut(c,"session.disable_qdq_constant_folding","1",b),typeof k!="string"){let j=k?.deviceType;j&&Ut(c,"deviceType",j,b)}break;case"webgpu":if(P="JS",typeof k!="string"){let j=k;if(j?.preferredLayout){if(j.preferredLayout!=="NCHW"&&j.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${j.preferredLayout}`);Ut(c,"preferredLayout",j.preferredLayout,b)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${P}`)}let C=ft(P,b),B=O.length,H=0,re=0;if(B>0){H=Ie()._malloc(B*Ie().PTR_SIZE),b.push(H),re=Ie()._malloc(B*Ie().PTR_SIZE),b.push(re);for(let j=0;j<B;j++)Ie().setValue(H+j*Ie().PTR_SIZE,O[j][0],"*"),Ie().setValue(re+j*Ie().PTR_SIZE,O[j][1],"*")}await Ie()._OrtAppendExecutionProvider(c,C,H,re,B)!==0&&be(`Can't append execution provider: ${P}.`)}},La=async c=>{let g=Ie(),b=0,E=[],k=c||{};Ua(k);try{let P=Da(k.graphOptimizationLevel??"all"),O=Pa(k.executionMode??"sequential"),C=typeof k.logId=="string"?ft(k.logId,E):0,B=k.logSeverityLevel??2;if(!Number.isInteger(B)||B<0||B>4)throw new Error(`log severity level is not valid: ${B}`);let H=k.logVerbosityLevel??0;if(!Number.isInteger(H)||H<0||H>4)throw new Error(`log verbosity level is not valid: ${H}`);let re=typeof k.optimizedModelFilePath=="string"?ft(k.optimizedModelFilePath,E):0;if(b=g._OrtCreateSessionOptions(P,!!k.enableCpuMemArena,!!k.enableMemPattern,O,!!k.enableProfiling,0,C,B,H,re),b===0&&be("Can't create session options."),k.executionProviders&&await Na(b,k,E),k.enableGraphCapture!==void 0){if(typeof k.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${k.enableGraphCapture}`);Ut(b,"enableGraphCapture",k.enableGraphCapture.toString(),E)}if(k.freeDimensionOverrides)for(let[j,N]of Object.entries(k.freeDimensionOverrides)){if(typeof j!="string")throw new Error(`free dimension override name must be a string: ${j}`);if(typeof N!="number"||!Number.isInteger(N)||N<0)throw new Error(`free dimension override value must be a non-negative integer: ${N}`);let we=ft(j,E);g._OrtAddFreeDimensionOverride(b,we,N)!==0&&be(`Can't set a free dimension override: ${j} - ${N}.`)}return k.extra!==void 0&&Pr(k.extra,"",new WeakSet,(j,N)=>{Ut(b,j,N,E)}),[b,E]}catch(P){throw b!==0&&g._OrtReleaseSessionOptions(b)!==0&&be("Can't release session options."),E.forEach(O=>g._free(O)),P}}}),Gt,jt,Ht,$i,xi,Si,Ti,Ki,ke=S(()=>{"use strict";Gt=c=>{switch(c){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${c}`)}},jt=c=>{switch(c){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${c}`)}},Ht=(c,g)=>{let b=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][c],E=typeof g=="number"?g:g.reduce((k,P)=>k*P,1);return b>0?Math.ceil(E*b):void 0},$i=c=>{switch(c){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${c}`)}},xi=c=>{switch(c){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${c}`)}},Si=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",Ti=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint64"||c==="int8"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",Ki=c=>{switch(c){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${c}`)}}}),ki,Va=S(()=>{"use strict";di(),ki=async c=>{if(typeof c=="string"){let g=await fetch(c);if(!g.ok)throw new Error(`failed to load external data file: ${c}`);let b=g.headers.get("Content-Length"),E=b?parseInt(b,10):0;if(E<1073741824)return new Uint8Array(await g.arrayBuffer());{if(!g.body)throw new Error(`failed to load external data file: ${c}, no response body.`);let k=g.body.getReader(),P;try{P=new ArrayBuffer(E)}catch(C){if(C instanceof RangeError){let B=Math.ceil(E/65536);P=new WebAssembly.Memory({initial:B,maximum:B}).buffer}else throw C}let O=0;for(;;){let{done:C,value:B}=await k.read();if(C)break;let H=B.byteLength;new Uint8Array(P,O,H).set(B),O+=H}return new Uint8Array(P,0,E)}}else return c instanceof Blob?new Uint8Array(await c.arrayBuffer()):c instanceof Uint8Array?c:new Uint8Array(c)}}),Fa,Zi,Xi,Er,Qi,Ji,Pe,tr,Yi,Ir,U,Qr,ea,qa=S(()=>{"use strict";gt(),rn(),an(),ke(),Wt(),vi(),Va(),Fa=(c,g)=>{Ie()._OrtInit(c,g)!==0&&be("Can't initialize onnxruntime.")},Zi=async c=>{Fa(c.wasm.numThreads,xi(c.logLevel))},Xi=async(c,g)=>{Ie().asyncInit?.();let b=c.webgpu.adapter;if(g==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(b){if(typeof b.limits!="object"||typeof b.features!="object"||typeof b.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let E=c.webgpu.powerPreference;if(E!==void 0&&E!=="low-power"&&E!=="high-performance")throw new Error(`Invalid powerPreference setting: "${E}"`);let k=c.webgpu.forceFallbackAdapter;if(k!==void 0&&typeof k!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${k}"`);if(b=await navigator.gpu.requestAdapter({powerPreference:E,forceFallbackAdapter:k}),!b)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(g==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},Er=new Map,Qi=c=>{let g=Ie(),b=g.stackSave();try{let E=g.PTR_SIZE,k=g.stackAlloc(2*E);g._OrtGetInputOutputCount(c,k,k+E)!==0&&be("Can't get session input/output count.");let P=E===4?"i32":"i64";return[Number(g.getValue(k,P)),Number(g.getValue(k+E,P))]}finally{g.stackRestore(b)}},Ji=(c,g)=>{let b=Ie(),E=b.stackSave(),k=0;try{let P=b.PTR_SIZE,O=b.stackAlloc(2*P);b._OrtGetInputOutputMetadata(c,g,O,O+P)!==0&&be("Can't get session input/output metadata.");let C=Number(b.getValue(O,"*"));k=Number(b.getValue(O+P,"*"));let B=b.HEAP32[k/4];if(B===0)return[C,0];let H=b.HEAPU32[k/4+1],re=[];for(let j=0;j<H;j++){let N=Number(b.getValue(k+8+j*P,"*"));re.push(N!==0?b.UTF8ToString(N):Number(b.getValue(k+8+(j+H)*P,"*")))}return[C,B,re]}finally{b.stackRestore(E),k!==0&&b._OrtFree(k)}},Pe=c=>{let g=Ie(),b=g._malloc(c.byteLength);if(b===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${c.byteLength}.`);return g.HEAPU8.set(c,b),[b,c.byteLength]},tr=async(c,g)=>{let b,E,k=Ie();Array.isArray(c)?[b,E]=c:c.buffer===k.HEAPU8.buffer?[b,E]=[c.byteOffset,c.byteLength]:[b,E]=Pe(c);let P=0,O=0,C=0,B=[],H=[],re=[];try{if([O,B]=await La(g),g?.externalData&&k.mountExternalData){let Ue=[];for(let ue of g.externalData){let mt=typeof ue=="string"?ue:ue.path,zt=typeof ue=="string"?ue:ue.data;Ue.push(ki(zt).then(St=>{k.mountExternalData(mt,St)}))}await Promise.all(Ue)}for(let Ue of g?.executionProviders??[])if((typeof Ue=="string"?Ue:Ue.name)==="webnn"){if(k.shouldTransferToMLTensor=!1,typeof Ue!="string"){let ue=Ue,mt=ue?.context,zt=ue?.gpuDevice,St=ue?.deviceType,Or=ue?.powerPreference;mt?k.currentContext=mt:zt?k.currentContext=await k.webnnCreateMLContext(zt):k.currentContext=await k.webnnCreateMLContext({deviceType:St,powerPreference:Or})}else k.currentContext=await k.webnnCreateMLContext();break}P=await k._OrtCreateSession(b,E,O),k.webgpuOnCreateSession?.(P),P===0&&be("Can't create a session."),k.jsepOnCreateSession?.(),k.currentContext&&(k.webnnRegisterMLContext(P,k.currentContext),k.currentContext=void 0,k.shouldTransferToMLTensor=!0);let[j,N]=Qi(P),we=!!g?.enableGraphCapture,A=[],se=[],tt=[],ze=[],Ae=[];for(let Ue=0;Ue<j;Ue++){let[ue,mt,zt]=Ji(P,Ue);ue===0&&be("Can't get an input name."),H.push(ue);let St=k.UTF8ToString(ue);A.push(St),tt.push(mt===0?{name:St,isTensor:!1}:{name:St,isTensor:!0,type:jt(mt),shape:zt})}for(let Ue=0;Ue<N;Ue++){let[ue,mt,zt]=Ji(P,Ue+j);ue===0&&be("Can't get an output name."),re.push(ue);let St=k.UTF8ToString(ue);se.push(St),ze.push(mt===0?{name:St,isTensor:!1}:{name:St,isTensor:!0,type:jt(mt),shape:zt})}return Er.set(P,[P,H,re,null,we,!1]),[P,A,se,tt,ze]}catch(j){throw H.forEach(N=>k._OrtFree(N)),re.forEach(N=>k._OrtFree(N)),C!==0&&k._OrtReleaseBinding(C)!==0&&be("Can't release IO binding."),P!==0&&k._OrtReleaseSession(P)!==0&&be("Can't release session."),j}finally{k._free(b),O!==0&&k._OrtReleaseSessionOptions(O)!==0&&be("Can't release session options."),B.forEach(j=>k._free(j)),k.unmountExternalData?.()}},Yi=c=>{let g=Ie(),b=Er.get(c);if(!b)throw new Error(`cannot release session. invalid session id: ${c}`);let[E,k,P,O,C]=b;O&&(C&&g._OrtClearBoundOutputs(O.handle)!==0&&be("Can't clear bound outputs."),g._OrtReleaseBinding(O.handle)!==0&&be("Can't release IO binding.")),g.jsepOnReleaseSession?.(c),g.webnnOnReleaseSession?.(c),g.webgpuOnReleaseSession?.(c),k.forEach(B=>g._OrtFree(B)),P.forEach(B=>g._OrtFree(B)),g._OrtReleaseSession(E)!==0&&be("Can't release session."),Er.delete(c)},Ir=async(c,g,b,E,k,P,O=!1)=>{if(!c){g.push(0);return}let C=Ie(),B=C.PTR_SIZE,H=c[0],re=c[1],j=c[3],N=j,we,A;if(H==="string"&&(j==="gpu-buffer"||j==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(O&&j!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${P} when enableGraphCapture is true.`);if(j==="gpu-buffer"){let ze=c[2].gpuBuffer;A=Ht(Gt(H),re);{let Ae=C.jsepRegisterBuffer;if(!Ae)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');we=Ae(E,P,ze,A)}}else if(j==="ml-tensor"){let ze=c[2].mlTensor;A=Ht(Gt(H),re);let Ae=C.webnnRegisterMLTensor;if(!Ae)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');we=Ae(E,ze,Gt(H),re)}else{let ze=c[2];if(Array.isArray(ze)){A=B*ze.length,we=C._malloc(A),b.push(we);for(let Ae=0;Ae<ze.length;Ae++){if(typeof ze[Ae]!="string")throw new TypeError(`tensor data at index ${Ae} is not a string`);C.setValue(we+Ae*B,ft(ze[Ae],b),"*")}}else{let Ae=C.webnnIsGraphInput,Ue=C.webnnIsGraphOutput;if(H!=="string"&&Ae&&Ue){let ue=C.UTF8ToString(k);if(Ae(E,ue)||Ue(E,ue)){let mt=Gt(H);A=Ht(mt,re),N="ml-tensor";let zt=C.webnnCreateTemporaryTensor,St=C.webnnUploadTensor;if(!zt||!St)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Or=await zt(E,mt,re);St(Or,new Uint8Array(ze.buffer,ze.byteOffset,ze.byteLength)),we=Or}else A=ze.byteLength,we=C._malloc(A),b.push(we),C.HEAPU8.set(new Uint8Array(ze.buffer,ze.byteOffset,A),we)}else A=ze.byteLength,we=C._malloc(A),b.push(we),C.HEAPU8.set(new Uint8Array(ze.buffer,ze.byteOffset,A),we)}}let se=C.stackSave(),tt=C.stackAlloc(4*re.length);try{re.forEach((Ae,Ue)=>C.setValue(tt+Ue*B,Ae,B===4?"i32":"i64"));let ze=C._OrtCreateTensor(Gt(H),we,A,tt,re.length,Ki(N));ze===0&&be(`Can't create tensor for input/output. session=${E}, index=${P}.`),g.push(ze)}finally{C.stackRestore(se)}},U=async(c,g,b,E,k,P)=>{let O=Ie(),C=O.PTR_SIZE,B=Er.get(c);if(!B)throw new Error(`cannot run inference. invalid session id: ${c}`);let H=B[0],re=B[1],j=B[2],N=B[3],we=B[4],A=B[5],se=g.length,tt=E.length,ze=0,Ae=[],Ue=[],ue=[],mt=[],zt=[],St=O.stackSave(),Or=O.stackAlloc(se*C),Qa=O.stackAlloc(se*C),da=O.stackAlloc(tt*C),Bt=O.stackAlloc(tt*C);try{[ze,Ae]=Ba(P),ot("wasm prepareInputOutputTensor");for(let Ve=0;Ve<se;Ve++)await Ir(b[Ve],Ue,mt,c,re[g[Ve]],g[Ve],we);for(let Ve=0;Ve<tt;Ve++)await Ir(k[Ve],ue,mt,c,j[E[Ve]],se+E[Ve],we);ut("wasm prepareInputOutputTensor");for(let Ve=0;Ve<se;Ve++)O.setValue(Or+Ve*C,Ue[Ve],"*"),O.setValue(Qa+Ve*C,re[g[Ve]],"*");for(let Ve=0;Ve<tt;Ve++)O.setValue(da+Ve*C,ue[Ve],"*"),O.setValue(Bt+Ve*C,j[E[Ve]],"*");O.jsepOnRunStart?.(H),O.webnnOnRunStart?.(H);let rr;rr=await O._OrtRun(H,Qa,Or,se,Bt,tt,da,ze),rr!==0&&be("failed to call OrtRun().");let or=[],fr=[];ot("wasm ProcessOutputTensor");for(let Ve=0;Ve<tt;Ve++){let ir=Number(O.getValue(da+Ve*C,"*"));if(ir===ue[Ve]||zt.includes(ue[Ve])){or.push(k[Ve]),ir!==ue[Ve]&&O._OrtReleaseTensor(ir)!==0&&be("Can't release tensor.");continue}let Is=O.stackSave(),mr=O.stackAlloc(4*C),Oi=!1,wt,Dt=0;try{O._OrtGetTensorData(ir,mr,mr+C,mr+2*C,mr+3*C)!==0&&be(`Can't access output tensor data on index ${Ve}.`);let pa=C===4?"i32":"i64",Ai=Number(O.getValue(mr,pa));Dt=O.getValue(mr+C,"*");let Ja=O.getValue(mr+C*2,"*"),ar=Number(O.getValue(mr+C*3,pa)),gr=[];for(let yt=0;yt<ar;yt++)gr.push(Number(O.getValue(Ja+yt*C,pa)));O._OrtFree(Ja)!==0&&be("Can't free memory for tensor dims.");let wr=gr.reduce((yt,ct)=>yt*ct,1);wt=jt(Ai);let ei=N?.outputPreferredLocations[E[Ve]];if(wt==="string"){if(ei==="gpu-buffer"||ei==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let yt=[];for(let ct=0;ct<wr;ct++){let ur=O.getValue(Dt+ct*C,"*"),Cs=O.getValue(Dt+(ct+1)*C,"*"),zs=ct===wr-1?void 0:Cs-ur;yt.push(O.UTF8ToString(ur,zs))}or.push([wt,gr,yt,"cpu"])}else if(ei==="gpu-buffer"&&wr>0){let yt=O.jsepGetBuffer;if(!yt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ct=yt(Dt),ur=Ht(Ai,wr);if(ur===void 0||!Si(wt))throw new Error(`Unsupported data type: ${wt}`);Oi=!0,or.push([wt,gr,{gpuBuffer:ct,download:O.jsepCreateDownloader(ct,ur,wt),dispose:()=>{O._OrtReleaseTensor(ir)!==0&&be("Can't release tensor.")}},"gpu-buffer"])}else if(ei==="ml-tensor"&&wr>0){let yt=O.webnnEnsureTensor,ct=O.webnnIsGraphInputOutputTypeSupported;if(!yt||!ct)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(Ai,wr)===void 0||!Ti(wt))throw new Error(`Unsupported data type: ${wt}`);if(!ct(c,wt,!1))throw new Error(`preferredLocation "ml-tensor" for ${wt} output is not supported by current WebNN Context.`);let ur=await yt(c,Dt,Ai,gr,!1);Oi=!0,or.push([wt,gr,{mlTensor:ur,download:O.webnnCreateMLTensorDownloader(Dt,wt),dispose:()=>{O.webnnReleaseTensorId(Dt),O._OrtReleaseTensor(ir)}},"ml-tensor"])}else if(ei==="ml-tensor-cpu-output"&&wr>0){let yt=O.webnnCreateMLTensorDownloader(Dt,wt)(),ct=or.length;Oi=!0,fr.push((async()=>{let ur=[ct,await yt];return O.webnnReleaseTensorId(Dt),O._OrtReleaseTensor(ir),ur})()),or.push([wt,gr,[],"cpu"])}else{let yt=$i(wt),ct=new yt(wr);new Uint8Array(ct.buffer,ct.byteOffset,ct.byteLength).set(O.HEAPU8.subarray(Dt,Dt+ct.byteLength)),or.push([wt,gr,ct,"cpu"])}}finally{O.stackRestore(Is),wt==="string"&&Dt&&O._free(Dt),Oi||O._OrtReleaseTensor(ir)}}N&&!we&&(O._OrtClearBoundOutputs(N.handle)!==0&&be("Can't clear bound outputs."),Er.set(c,[H,re,j,N,we,!1]));for(let[Ve,ir]of await Promise.all(fr))or[Ve][2]=ir;return ut("wasm ProcessOutputTensor"),or}finally{O.webnnOnRunEnd?.(H),O.stackRestore(St),Ue.forEach(rr=>O._OrtReleaseTensor(rr)),ue.forEach(rr=>O._OrtReleaseTensor(rr)),mt.forEach(rr=>O._free(rr)),ze!==0&&O._OrtReleaseRunOptions(ze),Ae.forEach(rr=>O._free(rr))}},Qr=c=>{let g=Ie(),b=Er.get(c);if(!b)throw new Error("invalid session id");let E=b[0],k=g._OrtEndProfiling(E);k===0&&be("Can't get an profile file name."),g._OrtFree(k)},ea=c=>{let g=[];for(let b of c){let E=b[2];!Array.isArray(E)&&"buffer"in E&&g.push(E.buffer)}return g}}),cr,ve,Cr,Jr,Ur,Ei,Ii,Ci,hr,zr,ta,ra,ia,Wa,Ga,ks,Yr,ja,Ha=S(()=>{"use strict";gt(),qa(),Wt(),wi(),cr=()=>!!ne.wasm.proxy&&typeof document<"u",Cr=!1,Jr=!1,Ur=!1,Ci=new Map,hr=(c,g)=>{let b=Ci.get(c);b?b.push(g):Ci.set(c,[g])},zr=()=>{if(Cr||!Jr||Ur||!ve)throw new Error("worker not ready")},ta=c=>{switch(c.data.type){case"init-wasm":Cr=!1,c.data.err?(Ur=!0,Ii[1](c.data.err)):(Jr=!0,Ii[0]()),Ei&&(URL.revokeObjectURL(Ei),Ei=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let g=Ci.get(c.data.type);c.data.err?g.shift()[1](c.data.err):g.shift()[0](c.data.out);break}default:}},ra=async()=>{if(!Jr){if(Cr)throw new Error("multiple calls to 'initWasm()' detected.");if(Ur)throw new Error("previous call to 'initWasm()' failed.");if(Cr=!0,cr())return new Promise((c,g)=>{ve?.terminate(),za().then(([b,E])=>{try{ve=E,ve.onerror=P=>g(P),ve.onmessage=ta,Ii=[c,g];let k={type:"init-wasm",in:ne};if(!k.in.wasm.wasmPaths&&b){let P=hi();P&&(k.in.wasm.wasmPaths=P)}ve.postMessage(k),Ei=b}catch(k){g(k)}},g)});try{await bi(ne.wasm),await Zi(ne),Jr=!0}catch(c){throw Ur=!0,c}finally{Cr=!1}}},ia=async c=>{if(cr())return zr(),new Promise((g,b)=>{hr("init-ep",[g,b]);let E={type:"init-ep",in:{epName:c,env:ne}};ve.postMessage(E)});await Xi(ne,c)},Wa=async c=>cr()?(zr(),new Promise((g,b)=>{hr("copy-from",[g,b]);let E={type:"copy-from",in:{buffer:c}};ve.postMessage(E,[c.buffer])})):Pe(c),Ga=async(c,g)=>{if(cr()){if(g?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zr(),new Promise((b,E)=>{hr("create",[b,E]);let k={type:"create",in:{model:c,options:{...g}}},P=[];c instanceof Uint8Array&&P.push(c.buffer),ve.postMessage(k,P)})}else return tr(c,g)},ks=async c=>{if(cr())return zr(),new Promise((g,b)=>{hr("release",[g,b]);let E={type:"release",in:c};ve.postMessage(E)});Yi(c)},Yr=async(c,g,b,E,k,P)=>{if(cr()){if(b.some(O=>O[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(k.some(O=>O))throw new Error("pre-allocated output tensor is not supported for proxy.");return zr(),new Promise((O,C)=>{hr("run",[O,C]);let B=b,H={type:"run",in:{sessionId:c,inputIndices:g,inputs:B,outputIndices:E,options:P}};ve.postMessage(H,ea(B))})}else return U(c,g,b,E,k,P)},ja=async c=>{if(cr())return zr(),new Promise((g,b)=>{hr("end-profiling",[g,b]);let E={type:"end-profiling",in:c};ve.postMessage(E)});Qr(c)}}),Ka,aa,sa,na=S(()=>{"use strict";gt(),Ha(),ke(),di(),Va(),Ka=(c,g)=>{switch(c.location){case"cpu":return[c.type,c.dims,c.data,"cpu"];case"gpu-buffer":return[c.type,c.dims,{gpuBuffer:c.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[c.type,c.dims,{mlTensor:c.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${c.location} for ${g()}`)}},aa=c=>{switch(c[3]){case"cpu":return new Xe(c[0],c[2],c[1]);case"gpu-buffer":{let g=c[0];if(!Si(g))throw new Error(`not supported data type: ${g} for deserializing GPU tensor`);let{gpuBuffer:b,download:E,dispose:k}=c[2];return Xe.fromGpuBuffer(b,{dataType:g,dims:c[1],download:E,dispose:k})}case"ml-tensor":{let g=c[0];if(!Ti(g))throw new Error(`not supported data type: ${g} for deserializing MLTensor tensor`);let{mlTensor:b,download:E,dispose:k}=c[2];return Xe.fromMLTensor(b,{dataType:g,dims:c[1],download:E,dispose:k})}default:throw new Error(`invalid data location: ${c[3]}`)}},sa=class{async fetchModelAndCopyToWasmMemory(c){return Wa(await ki(c))}async loadModel(c,g){dt();let b;typeof c=="string"?b=await this.fetchModelAndCopyToWasmMemory(c):b=c,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Ga(b,g),pt()}async dispose(){return ks(this.sessionId)}async run(c,g,b){dt();let E=[],k=[];Object.entries(c).forEach(j=>{let N=j[0],we=j[1],A=this.inputNames.indexOf(N);if(A===-1)throw new Error(`invalid input '${N}'`);E.push(we),k.push(A)});let P=[],O=[];Object.entries(g).forEach(j=>{let N=j[0],we=j[1],A=this.outputNames.indexOf(N);if(A===-1)throw new Error(`invalid output '${N}'`);P.push(we),O.push(A)});let C=E.map((j,N)=>Ka(j,()=>`input "${this.inputNames[k[N]]}"`)),B=P.map((j,N)=>j?Ka(j,()=>`output "${this.outputNames[O[N]]}"`):null),H=await Yr(this.sessionId,k,C,O,B,b),re={};for(let j=0;j<H.length;j++)re[this.outputNames[O[j]]]=P[j]??aa(H[j]);return pt(),re}startProfiling(){}endProfiling(){ja(this.sessionId)}}}),zi={};K(zi,{OnnxruntimeWebAssemblyBackend:()=>ua,initializeFlags:()=>oa,wasmBackend:()=>la});var oa,ua,la,Za=S(()=>{"use strict";gt(),Ha(),na(),oa=()=>{(typeof ne.wasm.initTimeout!="number"||ne.wasm.initTimeout<0)&&(ne.wasm.initTimeout=0);let c=ne.wasm.simd;if(typeof c!="boolean"&&c!==void 0&&c!=="fixed"&&c!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${c}". Reset it to \`false\` and ignore SIMD feature checking.`),ne.wasm.simd=!1),typeof ne.wasm.proxy!="boolean"&&(ne.wasm.proxy=!1),typeof ne.wasm.trace!="boolean"&&(ne.wasm.trace=!1),typeof ne.wasm.numThreads!="number"||!Number.isInteger(ne.wasm.numThreads)||ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ne.wasm.numThreads=1;else{let g=typeof navigator>"u"?W("node:os").cpus().length:navigator.hardwareConcurrency;ne.wasm.numThreads=Math.min(4,Math.ceil((g||1)/2))}},ua=class{async init(c){oa(),await ra(),await ia(c)}async createInferenceSessionHandler(c,g){let b=new sa;return await b.loadModel(c,g),b}},la=new ua}),Xa={};K(Xa,{InferenceSession:()=>Mt,TRACE:()=>Je,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>sn,env:()=>ne,registerBackend:()=>oe}),gt(),gt(),gt();var Es="1.29.0",sn=Xr;{let c=(Za(),fe(zi)).wasmBackend;oe("cpu",c,10),oe("wasm",c,10)}return Object.defineProperty(ne.versions,"web",{value:Es,enumerable:!0}),fe(Xa)})();v.exports=D})(Eo)),Eo.exports}var nf;function ng(){return nf||(nf=1,(function(v){var R=Gr&&Gr.__createBinding||(Object.create?(function(_e,Ee,me,he){he===void 0&&(he=me);var je=Object.getOwnPropertyDescriptor(Ee,me);(!je||("get"in je?!Ee.__esModule:je.writable||je.configurable))&&(je={enumerable:!0,get:function(){return Ee[me]}}),Object.defineProperty(_e,he,je)}):(function(_e,Ee,me,he){he===void 0&&(he=me),_e[he]=Ee[me]})),D=Gr&&Gr.__setModuleDefault||(Object.create?(function(_e,Ee){Object.defineProperty(_e,"default",{enumerable:!0,value:Ee})}):function(_e,Ee){_e.default=Ee}),q=Gr&&Gr.__importStar||function(_e){if(_e&&_e.__esModule)return _e;var Ee={};if(_e!=null)for(var me in _e)me!=="default"&&Object.prototype.hasOwnProperty.call(_e,me)&&R(Ee,_e,me);return D(Ee,_e),Ee};Object.defineProperty(v,"__esModule",{value:!0}),v.MicVAD=v.getDefaultRealTimeVADOptions=v.ort=v.DEFAULT_MODEL=void 0;const Y=q(sg()),ee=Lo(),L=Vo(),W=Ts(),S=en(),K=vf(),F=$f();v.DEFAULT_MODEL="legacy",v.ort=Y;const fe="vad.worklet.bundle.min.js",le="silero_vad_v5.onnx",ce="silero_vad_legacy.onnx",oe=_e=>({...L.defaultFrameProcessorOptions,onFrameProcessed:()=>{},onVADMisfire:()=>{W.log.debug("VAD misfire")},onSpeechStart:()=>{W.log.debug("Detected speech start")},onSpeechEnd:()=>{W.log.debug("Detected speech end")},onSpeechRealStart:()=>{W.log.debug("Detected real speech start")},baseAssetPath:"./",onnxWASMBasePath:"./",model:_e,workletOptions:{},getStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),pauseStream:async Ee=>{Ee.getTracks().forEach(me=>{me.stop()})},resumeStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),ortConfig:Ee=>{Ee.env.logLevel="error"},startOnLoad:!0,processorType:"auto"});v.getDefaultRealTimeVADOptions=oe;const ae=_e=>"audioWorklet"in _e&&typeof AudioWorkletNode=="function"?"AudioWorklet":"ScriptProcessor";async function Te(_e,Ee,me,he,je){await me.audioWorklet.addModule(_e),Ee.processorOptions={...Ee.processorOptions??{},frameSamples:he};const ne=new AudioWorkletNode(me,"vad-helper-worklet",Ee);return ne.port.onmessage=async qe=>{if(qe.data?.message===S.Message.AudioFrame){let et=qe.data.data;et instanceof ArrayBuffer||(et=new ArrayBuffer(qe.data.data.byteLength),new Uint8Array(et).set(new Uint8Array(qe.data.data)));const it=new Float32Array(et);await je(it)}},ne}async function Fe(_e,Ee,me){const he=new F.Resampler({nativeSampleRate:_e.sampleRate,targetSampleRate:16e3,targetFrameSize:Ee??480});W.log.debug("using script processor");const ne=_e.createScriptProcessor(4096,1,1);let qe=!1;return ne.onaudioprocess=async et=>{if(!qe){qe=!0;try{const it=et.inputBuffer.getChannelData(0);if(et.outputBuffer.getChannelData(0).fill(0),he){const at=he.process(it);for(const ht of at)await me(ht)}}catch(it){console.error("Error processing audio:",it)}finally{qe=!1}}},ne.connect(_e.destination),ne}class Ze{constructor(Ee,me,he,je=!1,ne=null,qe=null,et=null,it=null,nt=null,at=null,ht="uninitialized",Jt=!1){this.options=Ee,this.frameProcessor=me,this.frameSamples=he,this.listening=je,this.errored=ne,this._stream=qe,this._audioContext=et,this._vadNode=it,this._mediaStreamAudioSourceNode=nt,this._audioProcessorAdapterType=at,this.initializationState=ht,this.ownsAudioContext=Jt,this.getAudioInstances=()=>{if(this._stream===null||this._audioContext===null||this._vadNode==null||this._mediaStreamAudioSourceNode==null)throw new Error("MicVAD has null stream, audio context, or processor adapter");return{stream:this._stream,audioContext:this._audioContext,vadNode:this._vadNode,mediaStreamAudioSourceNode:this._mediaStreamAudioSourceNode}},this.setErrored=Le=>{this.initializationState="errored",this.errored=Le},this.start=async()=>{switch(this.initializationState){case"uninitialized":{W.log.debug("initializing micVAD"),this.initializationState="initializing",this.frameProcessor.resume();try{this._stream=await this.options.getStream()}catch(Le){throw Le instanceof Error?this.setErrored(Le.message):this.setErrored(String(Le)),Le}if(this.options.audioContext||(this._audioContext=new AudioContext,this.ownsAudioContext=!0),!this._audioContext)throw this.setErrored("Audio context is null"),Error("Audio context is null");switch(this._audioProcessorAdapterType=this.options.processorType=="auto"?ae(this._audioContext):this.options.processorType,this._audioProcessorAdapterType){case"AudioWorklet":this._vadNode=await Te(this.options.baseAssetPath+fe,this.options.workletOptions??{},this._audioContext,this.frameSamples,this.processFrame);break;case"ScriptProcessor":this._vadNode=await Fe(this._audioContext,this.frameSamples,this.processFrame);break;default:throw new Error(`Unsupported audio processor adapter type: ${this._audioProcessorAdapterType}`)}this._mediaStreamAudioSourceNode=new MediaStreamAudioSourceNode(this._audioContext,{mediaStream:this._stream}),this._mediaStreamAudioSourceNode.connect(this._vadNode),W.log.debug("started micVAD"),this.listening=!0,this.initializationState="initialized";break}case"initializing":{W.log.warn("start called while initializing");break}case"initialized":{if(this.listening)return;this.listening=!0,this.frameProcessor.resume();const{stream:Le,audioContext:At,vadNode:Yt}=this.getAudioInstances();this._stream=await this.options.resumeStream(Le);const Et=new MediaStreamAudioSourceNode(At,{mediaStream:this._stream});this._mediaStreamAudioSourceNode=Et,Et.connect(Yt);break}case"destroyed":{W.log.warn("start called after destroyed");break}case"errored":{W.log.error("start called after errored");break}default:{W.log.warn("weird initialization state");break}}},this.pause=async()=>{if(!this.listening)return;this.listening=!1;const{stream:Le,mediaStreamAudioSourceNode:At}=this.getAudioInstances();await this.options.pauseStream(Le),At.disconnect(),this.frameProcessor.pause(this.handleFrameProcessorEvent)},this.destroy=()=>{W.log.debug("destroy called"),this.initializationState="destroyed";const{vadNode:Le}=this.getAudioInstances();Le instanceof AudioWorkletNode&&Le.port.postMessage(S.Message.SpeechStop),this.listening&&this.pause(),this.ownsAudioContext&&this._audioContext?.close()},this.setOptions=Le=>{this.frameProcessor.setOptions(Le)},this.processFrame=async Le=>{await this.frameProcessor.process(Le,this.handleFrameProcessorEvent)},this.handleFrameProcessorEvent=Le=>{switch(Le.msg){case S.Message.FrameProcessed:this.options.onFrameProcessed(Le.probs,Le.frame);break;case S.Message.SpeechStart:this.options.onSpeechStart();break;case S.Message.SpeechRealStart:this.options.onSpeechRealStart();break;case S.Message.VADMisfire:this.options.onVADMisfire();break;case S.Message.SpeechEnd:this.options.onSpeechEnd(Le.audio);break}}}static async new(Ee={}){const me={...(0,v.getDefaultRealTimeVADOptions)(Ee.model??v.DEFAULT_MODEL),...Ee};(0,L.validateOptions)(me),v.ort.env.wasm.wasmPaths=me.onnxWASMBasePath,me.ortConfig!==void 0&&me.ortConfig(v.ort);const he=me.model==="v5"?le:ce,je=me.baseAssetPath+he,ne=me.model==="v5"?K.SileroV5.new:K.SileroLegacy.new;let qe;try{qe=await ne(v.ort,()=>(0,ee.defaultModelFetcher)(je))}catch(ht){throw console.error(`Encountered an error while loading model file ${je}`),ht}const et=me.model==="v5"?512:1536,it=et/16,nt=new L.FrameProcessor(qe.process,qe.reset_state,{positiveSpeechThreshold:me.positiveSpeechThreshold,negativeSpeechThreshold:me.negativeSpeechThreshold,redemptionMs:me.redemptionMs,preSpeechPadMs:me.preSpeechPadMs,minSpeechMs:me.minSpeechMs,submitUserSpeechOnPause:me.submitUserSpeechOnPause},it),at=new Ze(me,nt,et);if(me.startOnLoad)try{await at.start()}catch(ht){throw console.error("Error starting micVad",ht),ht}return at}}v.MicVAD=Ze})(Gr)),Gr}var of;function uf(){return of||(of=1,(function(v){Object.defineProperty(v,"__esModule",{value:!0}),v.getDefaultRealTimeVADOptions=v.MicVAD=v.DEFAULT_MODEL=v.utils=v.NonRealTimeVAD=v.Message=v.FrameProcessor=v.defaultModelFetcher=v.baseAssetPath=void 0;var R=yf();Object.defineProperty(v,"baseAssetPath",{enumerable:!0,get:function(){return R.baseAssetPath}});var D=Lo();Object.defineProperty(v,"defaultModelFetcher",{enumerable:!0,get:function(){return D.defaultModelFetcher}});var q=Vo();Object.defineProperty(v,"FrameProcessor",{enumerable:!0,get:function(){return q.FrameProcessor}});var Y=en();Object.defineProperty(v,"Message",{enumerable:!0,get:function(){return Y.Message}});var ee=ig();Object.defineProperty(v,"NonRealTimeVAD",{enumerable:!0,get:function(){return ee.NonRealTimeVAD}});const L=ag();v.utils={audioFileToArray:L.audioFileToArray,minFramesForTargetMS:L.minFramesForTargetMS,arrayBufferToBase64:L.arrayBufferToBase64,encodeWAV:L.encodeWAV};var W=ng();Object.defineProperty(v,"DEFAULT_MODEL",{enumerable:!0,get:function(){return W.DEFAULT_MODEL}}),Object.defineProperty(v,"MicVAD",{enumerable:!0,get:function(){return W.MicVAD}}),Object.defineProperty(v,"getDefaultRealTimeVADOptions",{enumerable:!0,get:function(){return W.getDefaultRealTimeVADOptions}})})(So)),So}var lf;function og(){return lf||(lf=1,(function(v){Object.defineProperty(v,"__esModule",{value:!0}),v.useMicVAD=v.getDefaultReactRealTimeVADOptions=v.utils=void 0;const R=uf(),D=xm();var q=uf();Object.defineProperty(v,"utils",{enumerable:!0,get:function(){return q.utils}});const Y={userSpeakingThreshold:.6},ee=S=>({...(0,R.getDefaultRealTimeVADOptions)(S),...Y});v.getDefaultReactRealTimeVADOptions=ee;function L(S){const K=S.model??R.DEFAULT_MODEL,F={...(0,v.getDefaultReactRealTimeVADOptions)(K),...S},fe={userSpeakingThreshold:F.userSpeakingThreshold},le={positiveSpeechThreshold:F.positiveSpeechThreshold,negativeSpeechThreshold:F.negativeSpeechThreshold,redemptionMs:F.redemptionMs,preSpeechPadMs:F.preSpeechPadMs,minSpeechMs:F.minSpeechMs,submitUserSpeechOnPause:F.submitUserSpeechOnPause,onFrameProcessed:F.onFrameProcessed,onVADMisfire:F.onVADMisfire,onSpeechStart:F.onSpeechStart,onSpeechEnd:F.onSpeechEnd,onSpeechRealStart:F.onSpeechRealStart,baseAssetPath:F.baseAssetPath,onnxWASMBasePath:F.onnxWASMBasePath,model:F.model,workletOptions:F.workletOptions,getStream:F.getStream,pauseStream:F.pauseStream,resumeStream:F.resumeStream,startOnLoad:F.startOnLoad,processorType:F.processorType};return F.ortConfig&&(le.ortConfig=F.ortConfig),F.audioContext&&(le.audioContext=F.audioContext),[fe,le]}function W(S){const[K,F]=L(S),fe=S.model??R.DEFAULT_MODEL,[le,ce]=(0,D.useState)(!1),[oe,ae]=(0,D.useState)(!0),[Te,Fe]=(0,D.useState)(!1),[Ze,_e]=(0,D.useState)(!1),[Ee,me]=(0,D.useState)(null),he=(0,D.useRef)(F.onFrameProcessed),je=(0,D.useRef)(F.onSpeechEnd),ne=(0,D.useRef)(F.onSpeechStart),qe=(0,D.useRef)(F.onSpeechRealStart),et=(0,D.useRef)(F.onVADMisfire),it=(0,D.useRef)(F.getStream);(0,D.useEffect)(()=>{he.current=F.onFrameProcessed,je.current=F.onSpeechEnd,ne.current=F.onSpeechStart,qe.current=F.onSpeechRealStart,et.current=F.onVADMisfire},[F.onFrameProcessed,F.onSpeechEnd,F.onSpeechStart,F.onSpeechRealStart,F.onVADMisfire]),(0,D.useEffect)(()=>{it.current=F.getStream},[F.getStream]);const nt=F.getStream.toString();(0,D.useEffect)(()=>{let Le=null,At=!1;return(async()=>{try{ae(!0),Fe(!1);const Et={...F,onFrameProcessed:(lt,It)=>{const Ct=lt.isSpeech>K.userSpeakingThreshold;ce(Ct),he.current(lt,It)},onSpeechEnd:lt=>{je.current(lt)},onSpeechStart:()=>{ne.current()},onSpeechRealStart:()=>{qe.current()},onVADMisfire:()=>{et.current()},getStream:()=>it.current()};if(Le=await R.MicVAD.new(Et),At){Le.destroy();return}me(Le),ae(!1),F.startOnLoad&&(Le.start(),_e(!0))}catch(Et){ae(!1),Et instanceof Error?Fe(Et.message):Fe(String(Et))}})().catch(()=>{}),function(){At=!0,Le&&Le.destroy(),!oe&&!Te&&_e(!1)}},[nt,fe]);const at=(0,D.useCallback)(()=>{!oe&&!Te&&(Ee?.pause(),_e(!1))},[oe,Te,Ee]),ht=(0,D.useCallback)(()=>{!oe&&!Te&&(Ee?.start(),_e(!0))},[oe,Te,Ee]),Jt=(0,D.useCallback)(()=>{Ze?at():ht()},[Ze,at,ht]);return{listening:Ze,errored:Te,loading:oe,userSpeaking:le,pause:at,start:ht,toggle:Jt}}v.useMicVAD=W})(xo)),xo}var Io=og();function ug({bgColor:v,pColor:R,iconColor:D,onVoiceSend:q,handleInterrupt:Y}){const[ee,L]=xt.useState(!1),[W,S]=xt.useState(null);xt.useRef("");const K=wf(),F=Io.useMicVAD({model:"v5",startOnLoad:!1,positiveSpeechThreshold:.6,negativeSpeechThreshold:.3,minSpeechFrames:1,frameSamples:512,onSpeechStart:()=>{console.log("Speech started"),Y?.()},onSpeechEnd:async ae=>{if(console.log("Speech ended"),ae.length>0){const Te=Io.utils.encodeWAV(ae),Fe=Io.utils.arrayBufferToBase64(Te);fe(Fe)}}});function fe(ae){W&&W.readyState===WebSocket.OPEN&&W.send(JSON.stringify({data:ae,languageCode:K.code}))}const le=()=>{{console.error("WebSocket URL is not defined");return}},ce=async()=>{try{const ae=await navigator.permissions.query({name:"microphone"});return ae.state==="granted"?!0:ae.state==="prompt"?((await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Fe=>Fe.stop()),!0):(alert("Microphone access denied. Please enable it from your browser settings."),!1)}catch(ae){return console.error("Error accessing microphone:",ae),!1}},oe=async()=>{await ce()&&(ee?(W&&W.close(),F.pause(),L(!1)):(le(),F.start(),L(!0)))};return Ge.jsx("div",{style:{backgroundColor:v,outlineColor:R,color:D},role:"button",tabIndex:0,className:`voice-recorder-icon ${ee?"recording":""}`,onClick:oe,children:Cm})}function lg({design:v,language:R,onSend:D,onChangeLanguage:q,promisesArray:Y,onVoiceSend:ee,clearChat:L,activateVoiceBot:W}){const{placeholder:S="Type your message...",pColor:K,bgColor:F,secBgColor:fe,iconColor:le,multiLanguageChat:ce,translateLanguages:oe}=v||{};let ae=v||{};ae=[wf()];const[Fe,Ze]=xt.useState(""),_e=xt.useRef("");xt.useEffect(()=>{L&&(_e.current="")},[L]);const Ee=()=>{!D||!Fe?.trim()||(D({message:Fe.trim()}),Ze(""))},me=ne=>{ne.keyCode===13&&Ee()},he=xt.useCallback(ne=>{const qe=ne.currentTarget.value;Ze(qe)},[]);function je(){Y&&Y.length>0&&Y.map(ne=>{ne(),Y.pop(ne)})}return Ge.jsxs("div",{className:"message-block",children:[ce&&Ge.jsx("div",{className:"language-picker-wrapper",children:Ge.jsx(Jm,{pColor:K,value:R,onChange:q,translateLanguages:oe,defaultSelectedLanguage:ae})}),Ge.jsx("input",{style:{borderColor:fe,fontSize:13,fontFamily:"inherit"},value:Fe,placeholder:S,disabled:!D,onChange:he,onKeyDown:me,id:"messageInputBox"}),Ge.jsxs("div",{className:"action-buttons",children:[W&&Ge.jsx(ug,{bgColor:F,pColor:K,iconColor:le,onVoiceSend:ee,handleInterrupt:je}),Ge.jsx("div",{style:{backgroundColor:F,outlineColor:K,color:le},role:"button",tabIndex:0,className:"send-icon",onClick:Ee,onKeyDown:me,id:"msgSendButton",children:zm})]})]})}function bg({botDesign:v,messages:R,showTime:D,displayComponents:q,disabledMessage:Y,optionsRenderer:ee,onUserMessage:L,onHistoryChange:W,onClear:S,onHide:K,onCallback:F,onLinkClick:fe,hostOrigin:le,language:ce,setLanguage:oe,fullScreen:ae,isCustomChatWindow:Te,activateVoiceBot:Fe}){const[Ze,_e]=xt.useState([]),[Ee,me]=xt.useState(!1),he=xt.useRef({}),je=xt.useRef([]),ne=xt.useRef(null),qe=xt.useRef(null),et=xt.useRef(!1),it=xt.useRef([]);he.current.history=Ze,he.current.onUserMessage=L,he.current.onHistoryChange=W;const{window:nt={},header:at,body:ht,composer:Jt}=v||{},Le=nt?.chatWindowType||v?.chatWindowType||"default",At={width:nt.width,height:nt.height,marginRight:nt.spacingCorner,marginLeft:nt.spacingCorner,fontFamily:nt.fontFamily,bottom:Te?"0px":(parseFloat(nt.height)||500)+(parseFloat(nt.spacingBottom)||0)+"px"},Yt=xt.useCallback(async Ct=>{const{history:Rt,onHistoryChange:Vt,onUserMessage:nr}=he.current;let Ft=Rt.length;const Tt=Ct.message||Ct;if(typeof Tt=="string"){const We=[...Rt,{role:"user",type:"text",content:Tt}];Ft=We.length,_e(We),Vt?.(We)}else Vt?.(Rt);me(!0),nr(Tt).then(We=>{let Qe=[...he.current.history];Array.isArray(We)?Qe.splice(Ft,0,...We):Qe.splice(Ft,0,We);const Xe=Qe.length-1;Qe=Qe.filter((qt,Je)=>!Ch.includes(qt.type)||Je===Xe),_e(Qe),Vt?.(Qe)}).finally(()=>{me(!1)})},[]),Et=xt.useCallback(Ct=>{const{history:Rt,onHistoryChange:Vt,onUserMessage:nr}=he.current;let Ft=Rt.length;const Tt=Ct.message;et.current&&(et.current=!1);function We(Qe,Xe){let qt,Je=!1,er=!1;return{userPromises:new Promise((pt,ot)=>{qt=()=>{Je||(er=!0,Je=!0,ne.current&&(ne.current.pause(),ne.current.currentTime=0,ne.current=null),qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ot(new Error("Audio playback cancelled.")))},Qe.then(async ut=>{if(pt(!0),Je)return;if(er){Je=!0,ot(new Error("cancelled"));return}let Pt=[...he.current.history];Array.isArray(ut.data)?Pt.splice(Xe,0,...ut.data):Pt.splice(Xe,0,ut.data);const Tr=ut.audioUri;if(Tr){ne.current&&(ne.current.pause(),ne.current=null),qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ne.current=new Audio(Tr);const Mt=ne.current.play();Mt&&typeof Mt.then=="function"&&Mt.catch(kr=>{console.log("Audio playback error:",kr),Je||(Je=!0,ne.current=null,ot(new Error("Audio playback error.")))}),ne.current.onended=()=>{Je||(Je=!0,Ct.resetData.current="",ne.current=null,qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),it.current=[])},ne.current.onerror=()=>{Je||(Je=!0,ne.current=null,qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ot(new Error("Audio playback error.")))}}else{Je||(Je=!0,ot(new Error("Invalid audio buffer data.")));return}const Zr=Pt.length-1;Pt=Pt.filter((Mt,kr)=>!Ch.includes(Mt.type)||kr===Zr),_e(Pt),Vt?.(Pt)}).catch(ut=>{Je||(Je=!0,ot(ut))}).finally(()=>{me(!1)})}),cancelPromises:qt}}if(typeof Tt=="string")if(Tt&&Tt?.trim()===""){const Qe=[...Rt,{role:"user",type:"text",content:"Language not detected please try again"}];_e(Qe),Vt?.(Qe)}else{const Qe=[...Rt,{role:"user",type:"text",content:Tt}];Ft=Qe.length,_e(Qe),Vt?.(Qe)}else Vt?.(Rt);try{if(Tt&&Tt.trim()!==""){me(!0),it.current.push(Tt);const{userPromises:Qe,cancelPromises:Xe}=We(it.current.length===1?nr(Tt,!0):nr(it.current.join(" "),!0),Ft);return Qe.then(()=>{it.current=[]}).catch(qt=>(console.log("Cancelled or error in userPromises",qt),!1)),console.log(it.current.length,"inCompletedMessages"),je.current.push(Xe),!0}return!1}catch(Qe){console.log(Qe)}},[ne,qe]),lt=()=>{S&&S(),et.current=!0};xt.useEffect(()=>{_e(R||[])},[R]);const It=xt.useMemo(()=>q?{...zh,...q}:zh,[q]);return Ge.jsx("div",{className:`${Le==="default"?"default":"theme-one"}`,children:Ge.jsx("div",{className:`chat-container ${Te?"no-animation":""}`,style:At,children:Ge.jsxs("div",{className:`chat-window ${Te?"no-shadow":""}`,children:[!Te&&Ge.jsx(Zm,{design:at,onClear:lt,onHide:K,fullScreen:ae}),Ge.jsx(Sm,{chatWindowType:Le,design:ht,messages:Ze,displayComponents:It,showTime:D,showLoader:Ee,optionsRenderer:ee,onSendMessage:L?Yt:void 0,onCallback:F,openLinksInSameTab:nt.openLinksInSameTab,onLinkClick:fe,hostOrigin:le}),Ge.jsx(lg,{design:Jt,language:ce,onSend:Y?void 0:Yt,onChangeLanguage:oe,promisesArray:je.current,onVoiceSend:Et,clearChat:et.current,activateVoiceBot:Fe}),Ge.jsx(Xm,{message:nt.disclaimer,hideLivservBranding:nt.hideLivservBranding,domainSettings:nt?.domainSettings})]})})})}export{bg as C,_g as a,fg as b,gg as c,ff as d,yg as e,wf as f,wg as g,mg as s};
