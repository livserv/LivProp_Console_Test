import{o as im,j as Ge,R as St,r as oa,$ as ur,W as am}from"./AlertSnackbar-BD804zb_.js";import{G as ph,H as ch,J as nm}from"./index-DTzDslTL.js";import{f as sm,g as om,r as um,h as lm,M as dm,s as pm}from"./svg-icons-D_J6eAcz.js";import{I as cm}from"./env-DWkyVZs8.js";var hm="2.0.10",Gh=500,hh="user-agent",ca="",fh="?",vt={FUNCTION:"function",OBJECT:"object",STRING:"string",UNDEFINED:"undefined"},Qt="browser",Fr="cpu",zr="device",br="engine",ir="os",ha="result",X="name",W="type",Y="vendor",Q="version",Lt="architecture",yn="major",Z="model",Wn="console",Pe="mobile",Je="tablet",xt="smarttv",Cr="wearable",Ln="xr",gn="embedded",fm="fetcher",Pr="inapp",To="brands",Ui="formFactors",Eo="fullVersionList",fa="platform",ko="platformVersion",Kn="bitness",ii="sec-ch-ua",mm=ii+"-full-version-list",gm=ii+"-arch",wm=ii+"-"+Kn,ym=ii+"-form-factors",_m=ii+"-"+Pe,bm=ii+"-"+Z,jh=ii+"-"+fa,vm=jh+"-version",Hh=[To,Eo,Pe,Z,fa,ko,Lt,Ui,Kn],Vn="Amazon",ua="Apple",mh="ASUS",gh="BlackBerry",Bi="Google",io="Huawei",ao="Lenovo",wh="Honor",Fn="LG",no="Microsoft",so="Motorola",yh="Nvidia",_h="OnePlus",oo="OPPO",nn="Samsung",bh="Sharp",sn="Sony",uo="Xiaomi",lo="Zebra",vh="Chrome",$h="Chromium",ei="Chromecast",Gn="Edge",on="Firefox",la="Opera",po="Facebook",xh="Sogou",da="Mobile ",Di=" Browser",_o="Windows",$m=typeof window!==vt.UNDEFINED,Xt=$m&&window.navigator?window.navigator:void 0,Ni=Xt&&Xt.userAgentData?Xt.userAgentData:void 0,xm=function(b,A){var M={},F=A;if(!Hn(A)){F={};for(var J in A)for(var te in A[J])F[te]=A[J][te].concat(F[te]?F[te]:[])}for(var N in b)M[N]=F[N]&&F[N].length%2===0?F[N].concat(b[N]):b[N];return M},Zn=function(b){for(var A={},M=0;M<b.length;M++)A[b[M].toUpperCase()]=b[M];return A},bo=function(b,A){if(typeof b===vt.OBJECT&&b.length>0){for(var M in b)if(ti(A)==ti(b[M]))return!0;return!1}return ma(b)?ti(A)==ti(b):!1},Hn=function(b,A){for(var M in b)return/^(browser|cpu|device|engine|os)$/.test(M)||(A?Hn(b[M]):!1)},ma=function(b){return typeof b===vt.STRING},co=function(b){if(b){for(var A=[],M=pa(b).split(","),F=0;F<M.length;F++)if(M[F].indexOf(";")>-1){var J=bn(M[F]).split(";v=");A[F]={brand:J[0],version:J[1]}}else A[F]=bn(M[F]);return A}},ti=function(b){return ma(b)?b.toLowerCase():b},vo=function(b){return ma(b)?_n(/[^\d\.]/g,b).split(".")[0]:void 0},pa=function(b){return ma(b)?bn(_n(/\\?\"/g,b),Gh):void 0},Vr=function(b){for(var A in b)if(b.hasOwnProperty(A)){var M=b[A];typeof M==vt.OBJECT&&M.length==2?this[M[0]]=M[1]:this[M]=void 0}return this},_n=function(b,A){return ma(A)?A.replace(b,ca):A},bn=function(b,A){return b=_n(/^\s\s*/,String(b)),typeof A===vt.UNDEFINED?b:b.substring(0,A)},$o=function(b,A){if(!(!b||!A))for(var M=0,F,J,te,N,q,S;M<A.length&&!q;){var K=A[M],V=A[M+1];for(F=J=0;F<K.length&&!q&&K[F];)if(q=K[F++].exec(b),q)for(te=0;te<V.length;te++)S=q[++J],N=V[te],typeof N===vt.OBJECT&&N.length>0?N.length===2?typeof N[1]==vt.FUNCTION?this[N[0]]=N[1].call(this,S):this[N[0]]=N[1]:N.length>=3&&(typeof N[1]===vt.FUNCTION&&!(N[1].exec&&N[1].test)?N.length>3?this[N[0]]=S?N[1].apply(this,N.slice(2)):void 0:this[N[0]]=S?N[1].call(this,S,N[2]):void 0:N.length==3?this[N[0]]=S?S.replace(N[1],N[2]):void 0:N.length==4?this[N[0]]=S?N[3].call(this,S.replace(N[1],N[2])):void 0:N.length>4&&(this[N[0]]=S?N[3].apply(this,[S.replace(N[1],N[2])].concat(N.slice(4))):void 0)):this[N]=S||void 0;M+=2}},Sm=function(b,A){return A.test.test(b)?A.ifTrue:A.ifFalse},_r=function(b,A){for(var M in A)if(typeof A[M]===vt.OBJECT&&A[M].length>0){for(var F=0;F<A[M].length;F++)if(bo(A[M][F],b))return M===fh?void 0:M}else if(bo(A[M],b))return M===fh?void 0:M;return A.hasOwnProperty("*")?A["*"]:b},Sh={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},Th={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Tm={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},Em={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[Q,[X,da+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[Q,[X,Gn+" WebView"],[W,Pr]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Q,[X,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[X,Q],[/opios[\/ ]+([\w\.]+)/i],[Q,[X,la+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[Q,[X,la+" GX"]],[/\bopr\/([\w\.]+)/i],[Q,[X,la]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[Q,[X,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[Q,[X,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,/(brave)(?: chrome)?\/([\d\.]+)/i,/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,/(qwant)(?:ios|mobile)\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[X,Q],[/quark(?:pc)?\/([-\w\.]+)/i],[Q,[X,"Quark"]],[/\bddg\/([\w\.]+)/i],[Q,[X,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],[Q,[X,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[Q,[X,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Q,[X,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Q,[X,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Q,[X,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[Q,[X,"Smart "+ao+Di]],[/(av(?:ast|g|ira))\/([\w\.]+)/i],[[X,/(.+)/,"$1 Secure"+Di],Q],[/norton\/([\w\.]+)/i],[Q,[X,"Norton Private"+Di]],[/\bfocus\/([\w\.]+)/i],[Q,[X,on+" Focus"]],[/ mms\/([\w\.]+)$/i],[Q,[X,la+" Neon"]],[/ opt\/([\w\.]+)$/i],[Q,[X,la+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Q,[X,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Q,[X,"Dolphin"]],[/coast\/([\w\.]+)/i],[Q,[X,la+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Q,[X,"MIUI"+Di]],[/fxios\/([\w\.-]+)/i],[Q,[X,da+on]],[/\bqihoobrowser\/?([\w\.]*)/i],[Q,[X,"360"]],[/\b(qq)\/([\w\.]+)/i],[[X,/(.+)/,"$1Browser"],Q],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[X,/(.+)/,"$1"+Di],Q],[/ HBPC\/([\w\.]+)/],[Q,[X,io+Di]],[/samsungbrowser\/([\w\.]+)/i],[Q,[X,nn+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[Q,[X,xh+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[X,xh+" Mobile"],Q],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[X,Q],[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],[X],[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],[Q,X],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[X,po],Q,[W,Pr]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(bing)(?:web|sapphire)\/([\w\.]+)/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[X,Q,[W,Pr]],[/\bgsa\/([\w\.]+) .*safari\//i],[Q,[X,"GSA"],[W,Pr]],[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],[Q,[X,"TikTok"],[W,Pr]],[/\[(linkedin)app\]/i],[X,[W,Pr]],[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],[[X,/(.+)/,"Zalo"],Q,[W,Pr]],[/(chromium)[\/ ]([-\w\.]+)/i],[X,Q],[/ome-(lighthouse)$/i],[X,[W,fm]],[/headlesschrome(?:\/([\w\.]+)| )/i],[Q,[X,vh+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[Q,[X,Gn+" WebView2"],[W,Pr]],[/; wv\).+(chrome)\/([\w\.]+)/i],[[X,vh+" WebView"],Q,[W,Pr]],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Q,[X,"Android"+Di]],[/chrome\/([\w\.]+) mobile/i],[Q,[X,da+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[X,Q],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[Q,[X,da+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[X,da+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[Q,X],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[X,[Q,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[X,Q],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[X,da+on],Q],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[X,"Netscape"],Q],[/(wolvic|librewolf)\/([\w\.]+)/i],[X,Q],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Q,[X,on+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[X,[Q,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[X,[Q,/[^\d\.]+./,ca]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[Lt,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[Lt,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[Lt,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[Lt,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[Lt,"arm"]],[/ sun4\w[;\)]/i],[[Lt,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,/((ppc|powerpc)(64)?)( mac|;|\))/i,/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],[[Lt,/ower/,ca,ti]],[/mc680.0/i],[[Lt,"68k"]],[/winnt.+\[axp/i],[[Lt,"alpha"]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[Z,[Y,nn],[W,Je]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[Z,[Y,nn],[W,Pe]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],[Z,[Y,ua],[W,Pe]],[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,/\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],[Z,[Y,ua],[W,Je]],[/(macintosh);/i],[Z,[Y,ua]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[Z,[Y,bh],[W,Pe]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[Z,[Y,wh],[W,Je]],[/honor([-\w ]+)[;\)]/i],[Z,[Y,wh],[W,Pe]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[Z,[Y,io],[W,Je]],[/(?:huawei) ?([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],[Z,[Y,io],[W,Pe]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[Z,/_/g," "],[Y,uo],[W,Je]],[/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,/; ([\w ]+) miui\/v?\d/i],[[Z,/_/g," "],[Y,uo],[W,Pe]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[Z,[Y,_h],[W,Pe]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[Z,[Y,oo],[W,Pe]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[Z,[Y,_r,{OnePlus:["203","304","403","404","413","415"],"*":oo}],[W,Je]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[Z,[Y,"BLU"],[W,Pe]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[Z,[Y,"Vivo"],[W,Pe]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[Z,[Y,"Realme"],[W,Pe]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[Z,[Y,ao],[W,Je]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[Z,[Y,ao],[W,Pe]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[Z,[Y,so],[W,Pe]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[Z,[Y,so],[W,Je]],[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[Z,[Y,Fn],[W,Je]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[Z,[Y,Fn],[W,Pe]],[/(nokia) (t[12][01])/i],[Y,Z,[W,Je]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],[[Z,/_/g," "],[W,Pe],[Y,"Nokia"]],[/(pixel (c|tablet))\b/i],[Z,[Y,Bi],[W,Je]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[Z,[Y,Bi],[W,Pe]],[/(google) (pixelbook( go)?)/i],[Y,Z],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[Z,[Y,sn],[W,Pe]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[Z,"Xperia Tablet"],[Y,sn],[W,Je]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[Z,[Y,Vn],[W,Je]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[Z,/(.+)/g,"Fire Phone $1"],[Y,Vn],[W,Pe]],[/(playbook);[-\w\),; ]+(rim)/i],[Z,Y,[W,Je]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/(?:blackberry|\(bb10;) (\w+)/i],[Z,[Y,gh],[W,Pe]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[Z,[Y,mh],[W,Je]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[Z,[Y,mh],[W,Pe]],[/(nexus 9)/i],[Z,[Y,"HTC"],[W,Je]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[Y,[Z,/_/g," "],[W,Pe]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[Z,[Y,"TCL"],[W,Je]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[Z,[Y,"TCL"],[W,Pe]],[/(itel) ((\w+))/i],[[Y,ti],Z,[W,_r,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[Z,[Y,"Acer"],[W,Je]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[Z,[Y,"Meizu"],[W,Pe]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[Z,[Y,"Ulefone"],[W,Pe]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[Z,[Y,"Energizer"],[W,Pe]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[Z,[Y,"Cat"],[W,Pe]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[Z,[Y,"Smartfren"],[W,Pe]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[Z,[Y,"Nothing"],[W,Pe]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[Z,[Y,"Archos"],[W,Je]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[Z,[Y,"Archos"],[W,Pe]],[/blackview ([-\w ]+)( b|\))/i,/; (bv\d{4}[-\w ]*)( b|\))/i],[Z,[Y,"Blackview"],[W,Pe]],[/; (n159v)/i],[Z,[Y,"HMD"],[W,Pe]],[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],[Z,[W,Sm,{test:/ta?b/i,ifTrue:Je,ifFalse:Pe}],[Y,"T-Mobile"]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[Y,Z,[W,Je]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i,/(hisense) ([ehv][\w ]+)\)/i,/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],[Y,Z,[W,Pe]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[Y,Z,[W,Je]],[/(surface duo)/i],[Z,[Y,no],[W,Je]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[Z,[Y,"Fairphone"],[W,Pe]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[Z,[Y,yh],[W,Je]],[/(sprint) (\w+)/i],[Y,Z,[W,Pe]],[/(kin\.[onetw]{3})/i],[[Z,/\./g," "],[Y,no],[W,Pe]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[Z,[Y,lo],[W,Je]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[Z,[Y,lo],[W,Pe]],[/(philips)[\w ]+tv/i,/smart-tv.+(samsung)/i],[Y,[W,xt]],[/hbbtv.+maple;(\d+)/i],[[Z,/^/,"SmartTV"],[Y,nn],[W,xt]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[Y,Z,[W,xt]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[Y,Fn],[W,xt]],[/(apple) ?tv/i],[Y,[Z,ua+" TV"],[W,xt]],[/crkey.*devicetype\/chromecast/i],[[Z,ei+" Third Generation"],[Y,Bi],[W,xt]],[/crkey.*devicetype\/([^/]*)/i],[[Z,/^/,"Chromecast "],[Y,Bi],[W,xt]],[/fuchsia.*crkey/i],[[Z,ei+" Nest Hub"],[Y,Bi],[W,xt]],[/crkey/i],[[Z,ei],[Y,Bi],[W,xt]],[/(portaltv)/i],[Z,[Y,po],[W,xt]],[/droid.+aft(\w+)( bui|\))/i],[Z,[Y,Vn],[W,xt]],[/(shield \w+ tv)/i],[Z,[Y,yh],[W,xt]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[Z,[Y,bh],[W,xt]],[/(bravia[\w ]+)( bui|\))/i],[Z,[Y,sn],[W,xt]],[/(mi(tv|box)-?\w+) bui/i],[Z,[Y,uo],[W,xt]],[/Hbbtv.*(technisat) (.*);/i],[Y,Z,[W,xt]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[Y,/.+\/(\w+)/,"$1",_r,{LG:"lge"}],[Z,bn],[W,xt]],[/(playstation \w+)/i],[Z,[Y,sn],[W,Wn]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[Z,[Y,no],[W,Wn]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i,/(valve).+(steam deck)/i,/droid.+; ((shield|rgcube|gr0006))( bui|\))/i],[[Y,_r,{Nvidia:"Shield",Anbernic:"RGCUBE",Logitech:"GR0006"}],Z,[W,Wn]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[Z,[Y,nn],[W,Cr]],[/((pebble))app/i,/(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[Y,Z,[W,Cr]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[Z,[Y,oo],[W,Cr]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[Z,[Y,ua],[W,Cr]],[/(opwwe\d{3})/i],[Z,[Y,_h],[W,Cr]],[/(moto 360)/i],[Z,[Y,so],[W,Cr]],[/(smartwatch 3)/i],[Z,[Y,sn],[W,Cr]],[/(g watch r)/i],[Z,[Y,Fn],[W,Cr]],[/droid.+; (wt63?0{2,3})\)/i],[Z,[Y,lo],[W,Cr]],[/droid.+; (glass) \d/i],[Z,[Y,Bi],[W,Ln]],[/(pico) ([\w ]+) os\d/i],[Y,Z,[W,Ln]],[/(quest( \d| pro)?s?).+vr/i],[Z,[Y,po],[W,Ln]],[/mobile vr; rv.+firefox/i],[[W,Ln]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[Y,[W,gn]],[/(aeobc)\b/i],[Z,[Y,Vn],[W,gn]],[/(homepod).+mac os/i],[Z,[Y,ua],[W,gn]],[/windows iot/i],[[W,gn]],[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],[Z,[W,xt]],[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],[[W,xt]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],[Z,[W,_r,{mobile:"Mobile",xr:"VR","*":Je}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[W,Je]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[W,Pe]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[Z,[Y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Q,[X,Gn+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[X,Q],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Q,[X,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[X,Q],[/ladybird\//i],[[X,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Q,X]],os:[[/(windows nt) (6\.[23]); arm/i],[[X,/N/,"R"],[Q,_r,Sh]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[X,Q],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[Q,/(;|\))/g,"",_r,Sh],[X,_o]],[/(windows ce)\/?([\d\.]*)/i],[X,Q],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,/\btvos ?([\w\.]+)/i,/cfnetwork\/.+darwin/i],[[Q,/_/g,"."],[X,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[X,"macOS"],[Q,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[Q,[X,ei+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[Q,[X,ei+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[Q,[X,ei+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[Q,[X,ei+" Linux"]],[/crkey\/([\d\.]+)/i],[Q,[X,ei]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[Q,X],[/(ubuntu) ([\w\.]+) like android/i],[[X,/(.+)/,"$1 Touch"],Q],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[X,Q],[/\(bb(10);/i],[Q,[X,gh]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[Q,[X,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],[Q,[X,on+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[Q,[X,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[Q,_r,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[X,"webOS"]],[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],[Q,[X,"watchOS"]],[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],[Q,[X,"Chrome OS"]],[/kepler ([\w\.]+); (aft|aeo)/i],[Q,[X,"Vega OS"]],[/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[X,Q],[/(sunos) ?([\d\.]*)/i],[[X,"Solaris"],Q],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[X,Q]]},qn=(function(){var b={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return Vr.call(b.init,[[Qt,[X,Q,yn,W]],[Fr,[Lt]],[zr,[W,Z,Y]],[br,[X,Q]],[ir,[X,Q]]]),Vr.call(b.isIgnore,[[Qt,[Q,yn]],[br,[Q]],[ir,[Q]]]),Vr.call(b.isIgnoreRgx,[[Qt,/ ?browser$/i],[ir,/ ?os$/i]]),Vr.call(b.toString,[[Qt,[X,Q]],[Fr,[Lt]],[zr,[Y,Z]],[br,[X,Q]],[ir,[X,Q]]]),b})(),km=function(b,A){var M=qn.init[A],F=qn.isIgnore[A]||0,J=qn.isIgnoreRgx[A]||0,te=qn.toString[A]||0;function N(){Vr.call(this,M)}return N.prototype.getItem=function(){return b},N.prototype.withClientHints=function(){return Ni?Ni.getHighEntropyValues(Hh).then(function(q){return b.setCH(new Kh(q,!1)).parseCH().get()}):b.parseCH().get()},N.prototype.withFeatureCheck=function(){return b.detectFeature().get()},A!=ha&&(N.prototype.is=function(q){var S=!1;for(var K in this)if(this.hasOwnProperty(K)&&!bo(F,K)&&ti(J?_n(J,this[K]):this[K])==ti(J?_n(J,q):q)){if(S=!0,q!=vt.UNDEFINED)break}else if(q==vt.UNDEFINED&&S){S=!S;break}return S},N.prototype.toString=function(){var q=ca;for(var S in te)typeof this[te[S]]!==vt.UNDEFINED&&(q+=(q?" ":ca)+this[te[S]]);return q||vt.UNDEFINED}),N.prototype.then=function(q){var S=this,K=function(){for(var he in S)S.hasOwnProperty(he)&&(this[he]=S[he])};K.prototype={is:N.prototype.is,toString:N.prototype.toString,withClientHints:N.prototype.withClientHints,withFeatureCheck:N.prototype.withFeatureCheck};var V=new K;return q(V),V},new N};function Kh(b,A){if(b=b||{},Vr.call(this,Hh),A)Vr.call(this,[[To,co(b[ii])],[Eo,co(b[mm])],[Pe,/\?1/.test(b[_m])],[Z,pa(b[bm])],[fa,pa(b[jh])],[ko,pa(b[vm])],[Lt,pa(b[gm])],[Ui,co(b[ym])],[Kn,pa(b[wm])]]);else for(var M in b)this.hasOwnProperty(M)&&typeof b[M]!==vt.UNDEFINED&&(this[M]=b[M])}function ri(b,A,M,F){return Vr.call(this,[["itemType",b],["ua",A],["uaCH",F],["rgxMap",M],["data",km(this,b)]]),this}ri.prototype.get=function(b){return b?this.data.hasOwnProperty(b)?this.data[b]:void 0:this.data};ri.prototype.set=function(b,A){return this.data[b]=A,this};ri.prototype.setCH=function(b){return this.uaCH=b,this};ri.prototype.detectFeature=function(){if(Xt&&Xt.userAgent==this.ua)switch(this.itemType){case Qt:Xt.brave&&typeof Xt.brave.isBrave==vt.FUNCTION&&this.set(X,"Brave");break;case zr:!this.get(W)&&Ni&&Ni[Pe]&&this.set(W,Pe),this.get(Z)=="Macintosh"&&Xt&&typeof Xt.standalone!==vt.UNDEFINED&&Xt.maxTouchPoints&&Xt.maxTouchPoints>2&&this.set(Z,"iPad").set(W,Je);break;case ir:!this.get(X)&&Ni&&Ni[fa]&&this.set(X,Ni[fa]);break;case ha:var b=this.data,A=function(M){return b[M].getItem().detectFeature().get()};this.set(Qt,A(Qt)).set(Fr,A(Fr)).set(zr,A(zr)).set(br,A(br)).set(ir,A(ir))}return this};ri.prototype.parseUA=function(){switch(this.itemType!=ha&&$o.call(this.data,this.ua,this.rgxMap),this.itemType){case Qt:this.set(yn,vo(this.get(Q)));break;case ir:if(this.get(X)=="iOS"&&this.get(Q)&&/^1[89][^\d]/.exec(this.get(Q))){var b=/\) Version\/((\d+)[\d\.]*)/.exec(this.ua);b&&parseInt(b[2],10)>=26&&this.set(Q,b[1])}break}return this};ri.prototype.parseCH=function(){var b=this.uaCH,A=this.rgxMap;switch(this.itemType){case Qt:case br:var M=b[Eo]||b[To],F;if(M)for(var J=0;J<M.length;J++){var te=M[J].brand||M[J],N=M[J].version;this.itemType==Qt&&!/not.a.brand/i.test(te)&&(!F||/Chrom/.test(F)&&te!=$h||F==Gn&&/WebView2/.test(te))&&(te=_r(te,Tm),F=this.get(X),F&&!/Chrom/.test(F)&&/Chrom/.test(te)||this.set(X,te).set(Q,N).set(yn,vo(N)),F=te),this.itemType==br&&te==$h&&this.set(Q,N)}break;case Fr:var q=b[Lt];q&&(q&&b[Kn]=="64"&&(q+="64"),$o.call(this.data,q+";",A));break;case zr:if(b[Pe]&&this.set(W,Pe),b[Z]&&(this.set(Z,b[Z]),!this.get(W)||!this.get(Y))){var S={};$o.call(S,"droid 9; "+b[Z]+")",A),!this.get(W)&&S.type&&this.set(W,S.type),!this.get(Y)&&S.vendor&&this.set(Y,S.vendor)}if(b[Ui]){var K;if(typeof b[Ui]!="string")for(var V=0;!K&&V<b[Ui].length;)K=_r(b[Ui][V++],Th);else K=_r(b[Ui],Th);this.set(W,K)}break;case ir:var he=b[fa];if(he){var ue=b[ko];he==_o&&(ue=parseInt(vo(ue),10)>=13?"11":"10"),this.set(X,he).set(Q,ue)}this.get(X)==_o&&b[Z]=="Xbox"&&this.set(X,"Xbox").set(Q,void 0);break;case ha:var de=this.data,oe=function(ie){return de[ie].getItem().setCH(b).parseCH().get()};this.set(Qt,oe(Qt)).set(Fr,oe(Fr)).set(zr,oe(zr)).set(br,oe(br)).set(ir,oe(ir))}return this};function qr(b,A,M){if(typeof b===vt.OBJECT?(Hn(b,!0)?(typeof A===vt.OBJECT&&(M=A),A=b):(M=b,A=void 0),b=void 0):typeof b===vt.STRING&&!Hn(A,!0)&&(M=A,A=void 0),M)if(typeof M.append===vt.FUNCTION){var F={};M.forEach(function(V,he){F[String(he).toLowerCase()]=V}),M=F}else{var J={};for(var te in M)M.hasOwnProperty(te)&&(J[String(te).toLowerCase()]=M[te]);M=J}if(!(this instanceof qr))return new qr(b,A,M).getResult();var N=typeof b===vt.STRING?b:M&&M[hh]?M[hh]:Xt&&Xt.userAgent?Xt.userAgent:ca,q=new Kh(M,!0),S=Em,K=function(V){return V==ha?function(){return new ri(V,N,S,q).set("ua",N).set(Qt,this.getBrowser()).set(Fr,this.getCPU()).set(zr,this.getDevice()).set(br,this.getEngine()).set(ir,this.getOS()).get()}:function(){return new ri(V,N,S[V],q).parseUA().get()}};return Vr.call(this,[["getBrowser",K(Qt)],["getCPU",K(Fr)],["getDevice",K(zr)],["getEngine",K(br)],["getOS",K(ir)],["getResult",K(ha)],["getUA",function(){return N}],["setUA",function(V){return ma(V)&&(N=bn(V,Gh)),this}],["useExtension",function(V){return V&&(S=xm(S,V)),this}]]).setUA(N).useExtension(A),this}qr.VERSION=hm;qr.BROWSER=Zn([X,Q,yn,W]);qr.CPU=Zn([Lt]);qr.DEVICE=Zn([Z,Y,W,Wn,Pe,xt,Je,Cr,gn]);qr.ENGINE=qr.OS=Zn([X,Q]);const un=new Map;function Im(b){const A=b.toString();if(un.has(A))return un.get(A);const M=new Promise((F,J)=>{b().then(te=>{F(te),un.delete(A)}).catch(te=>{J(te),un.delete(A)})});return un.set(A,M),M}const Io="lp-cid";let Co;function Zm(){try{return sessionStorage.getItem(Io)}catch(b){return console.error("Unable to use browser cache",b),Co}}function Xm(b){try{Co=b,sessionStorage.setItem(Io,b)}catch(A){console.error("Unable to use browser cache",A)}}function Qm(){try{Co=void 0,sessionStorage.removeItem(Io)}catch(b){console.error("Unable to use browser cache",b)}}async function Zh(){const b=cm;let A=null;const M=sessionStorage.getItem("locationDetails");if(!M)A=await Im(()=>im(`https://api.ipdata.co?api-key=${b}`)).catch(F=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:F.message})),sessionStorage.setItem("locationDetails",JSON.stringify(A));else try{A=JSON.parse(M)}catch{A={country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:"Error parsing from sessionStorage"}}return A}async function Ym(){const b=await Zh(),M=new qr().getResult()||{},{ip:F,is_eu:J,city:te,region:N,region_code:q,region_type:S,country_name:K,country_code:V,continent_name:he,continent_code:ue,latitude:de,longitude:oe,postal:ie,calling_code:Te,time_zone:Fe,currency:Ze}=b,be={ipAddress:F,deviceType:M.device?.type,browserName:M.browser?.name,osName:M.os?.name,...Cm()};return be.locationDetails={is_eu:J,city:te,region:N,region_code:q,region_type:S,country_name:K,country_code:V,continent_name:he,continent_code:ue,latitude:de,longitude:oe,postal:ie,calling_code:Te,time_zone:Fe,currency:Ze},be}const Xh={name:"English",native:"English",code:"en"},xo=[Xh],Qh="lp_prefLang";function Yh(){let b=null;const A=localStorage.getItem(Qh);if(A)try{const{name:M,native:F,code:J}=JSON.parse(A);M&&F&&J&&(b={name:M,native:F,code:J})}catch(M){console.log("Error parsing language preference:",M)}return b||Xh}function Jm(b){b&&localStorage.setItem(Qh,JSON.stringify(b))}function Cm(){const b=new URLSearchParams(window.location.search),A=b.get("sourceUrl")||void 0,M=b.get("referrerUrl")||void 0;return{utmParameters:Array.from(b.keys()).reduce((J,te)=>{if(te.startsWith("utm_")){J=J||{};const N=b.get(te);N&&N!=="null"&&(J[te]=N)}return J},void 0),sourceUrl:A,referrerUrl:M}}function eg(b,A={}){if(!b)return;const{chatWindowType:M,chatWindowWidth:F,chatWindowHeight:J,mobileChatWindowWidth:te,mobileChatWindowHeight:N,chatDisclaimer:q,hideLivservBranding:S,windowAlign:K,minimizeOnClick:V,paddingLeft:he,paddingBottom:ue,fontType:de,fontName:oe,remoteFontLink:ie,externalCssLinks:Te,maximizeChatWindowAfter:Fe,multiLanguageChat:Ze,translateLanguages:be,defaultLanguage:Ie,launcherType:me,buttonOnMobile:ce,barText:je,launcherSpacingCorner:ne,launcherSpacingBottom:qe,showMinimizeButtonToolTip:et,titleText:rt,subTitleText:st,bgColor:it,fontColor:ft,headerPadding:Yt,logoWidth:Ve,logoHeight:Rt,headerLogoMargin:Jt,headerFontSize:Ct,botLogo:lt,hideRefreshButton:zt,launcherTooltipText:Ot,visitorBorderColor:Mt,visitorBackgroundColor:Vt,visitorFontColor:ar,visitorMessageLogo:Ft,visitorBubbleBorderCurve:Et,botBorderColor:We,botBackgroundColor:Qe,botFontColor:Xe,botMessageLogo:qt,botBubbleBorderCurve:Ye,messageBubbleLogo:er,fontSize:dt,botChatButton:pt,placeholder:ot,domainSettings:ut,activateVoiceBot:Pt,openLinksInSameTab:vr}=b,{url:Wr}=lt||{},{url:Bt}=Ft||{},{url:$r}=qt||{},{url:ga}=pt||{},ai={launcherType:me,buttonLogoUrl:ga,spacingCorner:ne,spacingBottom:qe,showMinimizeButtonToolTip:et};me==="bar"&&(ai.buttonOnMobile=ce&&window.outerWidth<=700,ai.barText=je);const Li=Eh(it);let Vi=F||"380px",Gr=J||"500px";return window.outerWidth<=700&&(Vi=te||F||"380px",Gr=N||J||"500px"),{window:{width:Vi,height:Gr,align:K,minimizeOnClick:V,spacingCorner:he||"5px",spacingBottom:ue||"5px",fontFamily:oe,disclaimer:q,hideLivservBranding:S,domainSettings:ut,chatWindowType:M,maximizeChatWindowAfter:Fe,openLinksInSameTab:vr,...A.window},remoteFontLink:de==="remote"?ie:void 0,externalCssLinks:Te,launcher:{launcherTooltipText:Ot,...ai,...A.launcher},header:{titleText:rt,subTitleText:st,bgColor:it,secBgColor:Li,fontColor:ft,hideRefreshButton:zt,padding:Yt,fontSize:Ct,logo:Wr?{width:Ve,height:Rt,margin:Jt,url:Wr}:void 0,...A.header},body:{visitorBlock:{borderColor:Mt,backgroundColor:Vt,color:ar,useLogo:!!Bt,logoUrl:Bt,borderRadius:Et,showLogo:er,fontSize:dt},assistantBlock:{borderColor:We,backgroundColor:Qe,color:Xe,useLogo:!!$r,logoUrl:$r,borderRadius:Ye,showLogo:er,fontSize:dt}},composer:{placeholder:ot,pColor:it,bgColor:Eh(it,25),secBgColor:Li,iconColor:ft,fontSize:dt,multiLanguageChat:Ze,translateLanguages:be,defaultLanguage:Ie,activateVoiceBot:Pt}}}function Eh(b,A=70){if(!b)return b;let M=parseInt(b.slice(1,3),16),F=parseInt(b.slice(3,5),16),J=parseInt(b.slice(5,7),16);return M=Math.min(255,M+A),F=Math.min(255,F+A),J=Math.min(255,J+A),"#"+(1<<24|M<<16|F<<8|J).toString(16).slice(1)}function zm({design:b,onClear:A,onHide:M,fullScreen:F}){const{logo:J,bgColor:te,secBgColor:N,fontColor:q,titleText:S="Live Chat",subTitleText:K,padding:V,fontSize:he,hideRefreshButton:ue}=b||{};return Ge.jsxs("div",{className:"header",style:{background:"linear-gradient(to right, "+te+", "+N+")",padding:V,height:V?"initial":void 0},children:[!J&&Ge.jsx("div",{className:"icon-block",children:sm}),J&&Ge.jsx("div",{className:"image-block",children:Ge.jsx("img",{src:J.url,alt:"",style:{width:J.width,height:J.height,margin:J.margin}})}),Ge.jsxs("div",{className:"title-block",children:[Ge.jsx("span",{className:"title",style:{color:q,fontSize:he},children:S}),K&&Ge.jsx("span",{className:"sub-title",style:{color:q,fontSize:he},children:K})]}),(M||A)&&Ge.jsxs("div",{className:"controls-block",style:M&&A?{width:"110px"}:void 0,children:[M&&!F&&Ge.jsx("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:M,style:{color:q},children:om}),A&&ue!==!0&&Ge.jsx("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:A,style:{color:q},children:um})]})]})}function Om({message:b,hideLivservBranding:A,domainSettings:M}){const[F,J]=St.useState(!1),te=()=>{J(!0)},N=()=>{J(!1)};return Ge.jsxs("div",{className:"disclaimer-block",children:[F&&Ge.jsx("div",{className:"disclaimerMessage",children:b}),Ge.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px"},children:[!A&&Ge.jsxs("span",{className:"link",style:{display:"inline"},children:["Powered by"," ",M?.displayName?Ge.jsx("a",{href:M?.website,target:"_blank",rel:"noreferrer",children:M?.displayName}):Ge.jsx("a",{href:"https://livserv.ai",target:"_blank",rel:"noreferrer",children:"Livserv.ai"})]}),b&&Ge.jsx("span",{className:"message",style:{display:"inline",cursor:"pointer"},onMouseEnter:te,onMouseLeave:N,children:A?"Disclaimer":lm})]})]})}async function Am(b){b=b||[];const A=await Zh();if(Array.isArray(A?.languages)){const M=So(xo,A.languages);return So(M,b)}else return xo}function So(b,A){const M=[...b];return A.forEach(F=>{M.some(te=>F.name&&te.name===F.name||F.code&&te.code===F.code||F.native&&te.native===F.native)||M.push(F)}),M}function Rm({value:b="en",onChange:A,translateLanguages:M,defaultSelectedLanguage:F,pColor:J}){const[te,N]=oa.useState(xo),[q,S]=oa.useState(!1),K=oa.useRef(null),[V,he]=oa.useState(()=>F&&F[0]?F[0].code.toLowerCase():(typeof b=="string"?b:b?.code||b?.name||"en").toLowerCase());oa.useEffect(()=>{Am(M).then(ie=>{F&&F.length>0&&(ie=So(ie,F)),N(ie),F&&F.length>0?he(F[0].code.toLowerCase()):he("en")})},[M,F]);const ue=te.find(ie=>ie.code?.toLowerCase()===V||ie.name?.toLowerCase()===V),de=()=>S(!q),oe=ie=>{he(ie.code.toLowerCase()),A(ie),S(!1)};return oa.useEffect(()=>{const ie=Te=>{K.current&&!K.current.contains(Te.target)&&S(!1)};return document.addEventListener("mousedown",ie),()=>document.removeEventListener("mousedown",ie)},[]),Ge.jsxs("div",{ref:K,className:"language-dropdown",children:[Ge.jsx("button",{onClick:de,className:"language-button",style:{borderColor:J},children:ue?.code?.toUpperCase()||"EN"}),q&&Ge.jsxs("div",{className:"language-dropdown-popover",children:[Ge.jsx("div",{className:"popover-header",children:"Choose Language"}),Ge.jsx("div",{className:"language-list",children:te.map((ie,Te)=>Ge.jsx("div",{className:`language-item ${ue?.code===ie.code?"selected":""}`,onClick:()=>oe(ie),children:ie.native},Te))})]})]})}var ho={},fo={},ln={},kh;function Jh(){if(kh)return ln;kh=1,Object.defineProperty(ln,"__esModule",{value:!0}),ln.baseAssetPath=void 0;const A=typeof window<"u"&&typeof window.document<"u"?window.document.currentScript:null;let M="/";return A&&(M=A.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/")),ln.baseAssetPath=M,ln}var dn={},Ih;function zo(){if(Ih)return dn;Ih=1,Object.defineProperty(dn,"__esModule",{value:!0}),dn.defaultModelFetcher=void 0;const b=A=>fetch(A).then(M=>M.arrayBuffer());return dn.defaultModelFetcher=b,dn}var Ur={},pn={},Ch;function vn(){if(Ch)return pn;Ch=1,Object.defineProperty(pn,"__esModule",{value:!0}),pn.log=void 0;const b=A=>M=>{console.log(`VAD | ${A} >`,M)};return pn.log={error:b("error"),debug:b("debug"),warn:b("warn")},pn}var cn={},zh;function Xn(){if(zh)return cn;zh=1,Object.defineProperty(cn,"__esModule",{value:!0}),cn.Message=void 0;var b;return(function(A){A.AudioFrame="AUDIO_FRAME",A.SpeechStart="SPEECH_START",A.VADMisfire="VAD_MISFIRE",A.SpeechEnd="SPEECH_END",A.SpeechStop="SPEECH_STOP",A.SpeechRealStart="SPEECH_REAL_START",A.FrameProcessed="FRAME_PROCESSED"})(b||(cn.Message=b={})),cn}var Oh;function Oo(){if(Oh)return Ur;Oh=1,Object.defineProperty(Ur,"__esModule",{value:!0}),Ur.FrameProcessor=Ur.validateOptions=Ur.defaultFrameProcessorOptions=void 0;const b=vn(),A=Xn();Ur.defaultFrameProcessorOptions={positiveSpeechThreshold:.3,negativeSpeechThreshold:.25,preSpeechPadMs:800,redemptionMs:1400,minSpeechMs:400,submitUserSpeechOnPause:!1};function M(N){(N.positiveSpeechThreshold<0||N.positiveSpeechThreshold>1)&&b.log.error("positiveSpeechThreshold should be a number between 0 and 1"),(N.negativeSpeechThreshold<0||N.negativeSpeechThreshold>N.positiveSpeechThreshold)&&b.log.error("negativeSpeechThreshold should be between 0 and positiveSpeechThreshold"),N.preSpeechPadMs<0&&b.log.error("preSpeechPadMs should be positive"),N.redemptionMs<0&&b.log.error("redemptionMs should be positive"),N.minSpeechMs<0&&b.log.error("minSpeechMs should be positive")}Ur.validateOptions=M;const F=N=>{const q=N.reduce((K,V)=>(K.push(K.at(-1)+V.length),K),[0]),S=new Float32Array(q.at(-1));return N.forEach((K,V)=>{const he=q[V];S.set(K,he)}),S};function J(N,q){const S=Math.floor(N.redemptionMs/q),K=Math.floor(N.preSpeechPadMs/q),V=Math.floor(N.minSpeechMs/q);return{redemptionFrames:S,preSpeechPadFrames:K,minSpeechFrames:V}}class te{constructor(q,S,K,V){this.modelProcessFunc=q,this.modelResetFunc=S,this.options=K,this.msPerFrame=V,this.speaking=!1,this.redemptionCounter=0,this.speechFrameCount=0,this.active=!1,this.speechRealStartFired=!1,this.setOptions=oe=>{this.options={...this.options,...oe};const{redemptionFrames:ie,preSpeechPadFrames:Te,minSpeechFrames:Fe}=J(this.options,this.msPerFrame);this.redemptionFrames=ie,this.preSpeechPadFrames=Te,this.minSpeechFrames=Fe},this.reset=()=>{this.speaking=!1,this.speechRealStartFired=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0,this.speechFrameCount=0},this.pause=oe=>{this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment(oe):this.reset()},this.resume=()=>{this.active=!0},this.endSegment=oe=>{const ie=this.audioBuffer;this.audioBuffer=[];const Te=this.speaking;if(this.reset(),Te)if(ie.reduce((Ze,be)=>be.isSpeech?Ze+1:Ze,0)>=this.minSpeechFrames){const Ze=F(ie.map(be=>be.frame));oe({msg:A.Message.SpeechEnd,audio:Ze})}else oe({msg:A.Message.VADMisfire});return{}},this.process=async(oe,ie)=>{if(!this.active)return;const Te=await this.modelProcessFunc(oe),Fe=Te.isSpeech>=this.options.positiveSpeechThreshold;if(ie({probs:Te,msg:A.Message.FrameProcessed,frame:oe}),this.audioBuffer.push({frame:oe,isSpeech:Fe}),Fe&&(this.speechFrameCount++,this.redemptionCounter=0),Fe&&!this.speaking&&(this.speaking=!0,ie({msg:A.Message.SpeechStart})),this.speaking&&this.speechFrameCount===this.minSpeechFrames&&!this.speechRealStartFired&&(this.speechRealStartFired=!0,ie({msg:A.Message.SpeechRealStart})),Te.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.redemptionFrames){this.redemptionCounter=0,this.speechFrameCount=0,this.speaking=!1,this.speechRealStartFired=!1;const Ze=this.audioBuffer;if(this.audioBuffer=[],Ze.reduce((Ie,me)=>me.isSpeech?Ie+1:Ie,0)>=this.minSpeechFrames){const Ie=F(Ze.map(me=>me.frame));ie({msg:A.Message.SpeechEnd,audio:Ie})}else ie({msg:A.Message.VADMisfire})}if(!this.speaking){for(;this.audioBuffer.length>this.preSpeechPadFrames;)this.audioBuffer.shift();this.speechFrameCount=0}},this.audioBuffer=[];const{redemptionFrames:he,preSpeechPadFrames:ue,minSpeechFrames:de}=J(this.options,this.msPerFrame);this.redemptionFrames=he,this.preSpeechPadFrames=ue,this.minSpeechFrames=de,this.reset()}}return Ur.FrameProcessor=te,Ur}var Nr={},mo={exports:{}},Ah;function Mm(){return Ah||(Ah=1,(function(b,A){var M=(()=>{var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,te=Object.getOwnPropertyNames,N=Object.prototype.hasOwnProperty,q=(e=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof ur<"u"?ur:t)[r]}):e)(function(e){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),S=(e,t)=>()=>(e&&(t=e(e=0)),t),K=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},V=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of te(t))!N.call(e,a)&&a!==r&&F(e,a,{get:()=>t[a],enumerable:!(i=J(t,a))||i.enumerable});return e},he=e=>V(F({},"__esModule",{value:!0}),e),ue,de,oe,ie,Te,Fe=S(()=>{ue=new Map,de=[],oe=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ue.get(e);if(i===void 0)ue.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=de.indexOf(e);a!==-1&&de.splice(a,1);for(let n=0;n<de.length;n++)if(ue.get(de[n]).priority<=r){de.splice(n,0,e);return}de.push(e)}return}throw new TypeError("not a valid backend")},ie=async e=>{let t=ue.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Te=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?de:r,a,n=[],s=new Set;for(let u of i){let l=await ie(u);typeof l=="string"?n.push({name:u,err:l}):(a||(a=l),a===l&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of n)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Ze=S(()=>{Fe()}),be,Ie=S(()=>{be="1.27.0"}),me,ce,je=S(()=>{Ie(),me="warning",ce={wasm:{},webgl:{},webgpu:{},versions:{common:be},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);me=e}},get logLevel(){return me}},Object.defineProperty(ce,"logLevel",{enumerable:!0})}),ne,qe=S(()=>{je(),ne=ce}),et,rt,st=S(()=>{et=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=n*a,p=0,h=d,f=d*2,m=-1;s==="RGBA"?(p=0,h=d,f=d*2,m=d*3):s==="RGB"?(p=0,h=d,f=d*2):s==="RBG"&&(p=0,f=d,h=d*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let _=(e.data[p++]-l[0])*u[0],w=(e.data[h++]-l[1])*u[1],T=(e.data[f++]-l[2])*u[2],$=m===-1?255:(e.data[m++]-l[3])*u[3];i.fillStyle="rgba("+_+","+w+","+T+","+$+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},rt=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,f=0,m=1,y=2,x=3,_=0,w=p,T=p*2,$=-1;o==="RGBA"?(_=0,w=p,T=p*2,$=p*3):o==="RGB"?(_=0,w=p,T=p*2):o==="RBG"&&(_=0,T=p,w=p*2),i=r.createImageData(a,n);for(let C=0;C<n*a;f+=h,m+=h,y+=h,x+=h,C++)i.data[f]=(e.data[_++]-d[0])*l[0],i.data[m]=(e.data[w++]-d[1])*l[1],i.data[y]=(e.data[T++]-d[2])*l[2],i.data[x]=$===-1?255:(e.data[$++]-d[3])*l[3]}else throw new Error("Can not access image data");return i}}),it,ft,Yt,Ve,Rt,Jt,Ct=S(()=>{Qe(),it=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*i,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,f=1,m=2,y=3,x=0,_=l,w=l*2,T=-1;o==="RGB"&&(p=3,h=0,f=1,m=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(x=0,w=l,_=l*2):u==="BGR"&&(w=0,_=l,x=l*2);for(let $=0;$<l;$++,h+=p,m+=p,f+=p,y+=p)d[x++]=(e[h]+s[0])/n[0],d[_++]=(e[f]+s[1])/n[1],d[w++]=(e[m]+s[2])/n[2],T!==-1&&y!==-1&&(d[T++]=(e[y]+s[3])/n[3]);return u==="RGBA"?new We("float32",d,[1,4,r,i]):new We("float32",d,[1,3,r,i])},ft=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=f}else o.tensorFormat="RGBA",o.height=h,o.width=f;p.drawImage(e,0,0),s=p.getImageData(0,0,f,h).data}else throw new Error("Can not access image data")}else if(i){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let h=u();h.width=p,h.height=d;let f=l(h);if(f!=null)f.putImageData(e,0,0),s=f.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,f=e.width;return p.drawImage(e,0,0,f,h),s=p.getImageData(0,0,f,h).data,o.height=h,o.width=f,it(s,o)}else throw new Error("Can not access image data")}else{if(n)return new Promise((d,p)=>{let h=u(),f=l(h);if(!e||!f)return p();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,f.drawImage(m,0,0,h.width,h.height);let y=f.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,d(it(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return it(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Yt=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new We({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Ve=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new We({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Rt=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new We({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Jt=(e,t,r)=>new We({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),lt,zt,Ot,Mt,Vt=S(()=>{lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ot=!1,Mt=()=>{if(!Ot){Ot=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(lt.set("int64",BigInt64Array),zt.set(BigInt64Array,"int64")),t&&(lt.set("uint64",BigUint64Array),zt.set(BigUint64Array,"uint64")),i?(lt.set("float16",r),zt.set(r,"float16")):lt.set("float16",Uint16Array)}}}),ar,Ft,Et=S(()=>{Qe(),ar=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ft=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,Qe=S(()=>{st(),Ct(),Vt(),Et(),We=class{constructor(e,t,r){Mt();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=lt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=lt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=zt.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let n=ar(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return ft(e,t)}static fromTexture(e,t){return Yt(e,t)}static fromGpuBuffer(e,t){return Ve(e,t)}static fromMLTensor(e,t){return Rt(e,t)}static fromPinnedBuffer(e,t,r){return Jt(e,t,r)}toDataURL(e){return et(this,e)}toImageData(e){return rt(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,e)}}}),Xe,qt=S(()=>{Qe(),Xe=We}),Ye,er,dt,pt,ot,ut,Pt=S(()=>{je(),Ye=(e,t)=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.timeStamp(`${e}::ORT::${t}`)},er=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Ye("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},dt=e=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||er("BEGIN",e)},pt=e=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||er("END",e)},ot=e=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.time(`ORT::${e}`)},ut=e=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.timeEnd(`ORT::${e}`)}}),vr,Wr=S(()=>{Fe(),qt(),Pt(),vr=class ef{constructor(t){this.handler=t}async run(t,r,i){dt(),ot("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let h=r[p];(h===null||h instanceof Xe)&&(l=!0,s=!1,a[p]=h)}if(l){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,n),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Xe?u[l]=d:u[l]=new Xe(d.type,d.data,d.dims)}return ut("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,a){dt(),ot("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(h=t.byteLength-p,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(d,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Te(s),l=await o.createInferenceSessionHandler(n,u);return ut("InferenceSession.create"),pt(),new ef(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Bt,$r=S(()=>{Wr(),Bt=vr}),ga=S(()=>{}),ai=S(()=>{}),Li=S(()=>{}),Vi=S(()=>{}),Gr={};K(Gr,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>ne,registerBackend:()=>oe});var gt=S(()=>{Ze(),qe(),$r(),qt(),ga(),ai(),Pt(),Li(),Vi()}),ni=S(()=>{}),wa={};K(wa,{default:()=>ya});var si,oi,ya,Qn=S(()=>{Xc(),Wt(),ci(),si="ort-wasm-proxy-worker",oi=globalThis.self?.name===si,oi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":mi(r.wasm).then(()=>{Ws(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Gs(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Pn(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Hs(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ks(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:o}=r;Xs(i,a,n,s,new Array(s.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Ys([...n,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":Qs(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),ya=oi?null:e=>new Worker(e??at,{type:"classic",name:si})}),_a,ba,at,ui,Or,va,$a,li,xa,di,Sa,pi,Ta,ci=S(()=>{ni(),_a=typeof location>"u"?void 0:location.origin,ba=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,at=ba(),ui=()=>{if(at&&!at.startsWith("blob:"))return at.substring(0,at.lastIndexOf("/")+1)},Or=(e,t)=>{try{let r=t??at;return(r?new URL(e,r):new URL(e)).origin===_a}catch{return!1}},va=(e,t)=>{let r=t??at;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},$a=(e,t)=>`${t??"./"}${e}`,li=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},xa=async e=>(await import(e)).default,di=(Qn(),he(wa)).default,Sa=async()=>{if(!at)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(at))return[void 0,di()];let e=await li(at);return[e,di(e)]},pi=void 0,Ta=async(e,t,r,i)=>{let a=pi&&!(e||t);if(a)if(at)a=Or(at)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,pi];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??va(n,t),o=r&&s&&!Or(s,t),u=o?await li(s):s??$a(n,t);return[o?u:void 0,await xa(u)]}}}),hi,Ar,lr,fi,Ea,ka,Ia,mi,Ce,Wt=S(()=>{ci(),Ar=!1,lr=!1,fi=!1,Ea=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ka=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},mi=async e=>{if(Ar)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(fi)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ia())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ka())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Ea();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,o=s?.href??s,u=a?.wasm,l=u?.href??u,d=e.wasmBinary,[p,h]=await Ta(o,n,r>1,!!d||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,x)=>{let _={numThreads:r};if(d)_.wasmBinary=d,_.locateFile=w=>w;else if(l||n)_.locateFile=w=>l??n+w;else if(o&&o.indexOf("blob:")!==0)_.locateFile=w=>new URL(w,o).href;else if(p){let w=ui();w&&(_.locateFile=T=>w+T)}h(_).then(w=>{lr=!1,Ar=!0,hi=w,y(),p&&URL.revokeObjectURL(p)},w=>{lr=!1,fi=!0,x(w)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ce=()=>{if(Ar&&hi)return hi;throw new Error("WebAssembly is not initialized yet.")}}),mt,Rr,ve,gi=S(()=>{Wt(),mt=(e,t)=>{let r=Ce(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Rr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Rr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},ve=e=>{let t=Ce(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Ca,Yn=S(()=>{Wt(),gi(),Ca=e=>{let t=Ce(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=mt(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&ve("Can't create run options."),e?.extra!==void 0&&Rr(e.extra,"",new WeakSet,(s,o)=>{let u=mt(s,i),l=mt(o,i);t._OrtAddRunConfigEntry(r,u,l)!==0&&ve(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),za,Oa,Aa,Ut,Ra,Ma,Jn=S(()=>{Wt(),gi(),za=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Oa=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Aa=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ut=(e,t,r,i)=>{let a=mt(t,i),n=mt(r,i);Ce()._OrtAddSessionConfigEntry(e,a,n)!==0&&ve(`Can't set a session config entry: ${t} - ${r}.`)},Ra=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",Ut(e,"session.disable_quant_qdq","1",r),Ut(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let p=a?.deviceType;p&&Ut(e,"deviceType",p,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let p=a;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ut(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=mt(n,r),u=s.length,l=0,d=0;if(u>0){l=Ce()._malloc(u*Ce().PTR_SIZE),r.push(l),d=Ce()._malloc(u*Ce().PTR_SIZE),r.push(d);for(let p=0;p<u;p++)Ce().setValue(l+p*Ce().PTR_SIZE,s[p][0],"*"),Ce().setValue(d+p*Ce().PTR_SIZE,s[p][1],"*")}await Ce()._OrtAppendExecutionProvider(e,o,l,d,u)!==0&&ve(`Can't append execution provider: ${n}.`)}},Ma=async e=>{let t=Ce(),r=0,i=[],a=e||{};Aa(a);try{let n=za(a.graphOptimizationLevel??"all"),s=Oa(a.executionMode??"sequential"),o=typeof a.logId=="string"?mt(a.logId,i):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof a.optimizedModelFilePath=="string"?mt(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,u,l,d),r===0&&ve("Can't create session options."),a.executionProviders&&await Ra(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ut(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[p,h]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let f=mt(p,i);t._OrtAddFreeDimensionOverride(r,f,h)!==0&&ve(`Can't set a free dimension override: ${p} - ${h}.`)}return a.extra!==void 0&&Rr(a.extra,"",new WeakSet,(p,h)=>{Ut(r,p,h,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ve("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Gt,jt,Ht,wi,yi,_i,bi,Fi,Ee=S(()=>{Gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ht=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},wi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},yi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_i=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",bi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Fi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),vi,Ba=S(()=>{ni(),vi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(n,s,l).set(u),s+=l}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Da,qi,Wi,xr,Gi,ji,Ne,tr=S(()=>{Ee(),Da=["V","I","W","E","F"],qi=(e,t)=>{console.log(`[${Da[e]},${new Date().toISOString()}]${t}`)},Gi=(e,t)=>{Wi=e,xr=t},ji=(e,t)=>{let r=yi(e),i=yi(Wi);r>=i&&qi(r,typeof t=="function"?t():t)},Ne=(...e)=>{xr&&ji(...e)}}),Hi,Sr,U,jr,Ki,Pa,dr,$e=S(()=>{Hi=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Sr=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let o=Hi.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[n-2],s[n-1]]=o}for(let o=r?3:1;o<=n;o++){let u=i-o<0?1:e[i-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)s[n-o]=Math.max(u,l);else{if(d>1)return;s[n-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},U=class jn{static size(t){return jn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},jr=class wn{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,o){if(o){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)wn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],a[u],n,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,a,n,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return wn.computeShapeHelper(t,r,u,i,a,n,s,o),u}static computeConvOutputShape(t,r,i,a,n,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return wn.computeShapeHelper(!1,t,u,i,a,n,s,o),u}static computeShapeHelper(t,r,i,a,n,s,o,u){if(t)for(let l=0;l<r.length-2;l++)i.push(1);else for(let l=0;l<r.length-2;l++)i.push(wn.adjustPadAndReturnShape(r[l+2],a[l],n[l],s[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,a,n,s,o,u){let l=i*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),n[o]=d-n[s],Math.floor((t+d-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[o]-l)/r+1)}},Ki=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,o;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(n<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Sr.isValidBroadcast(a,[n,o]))throw new Error("gemm: invalid bias shape for broadcast");return[n,o,s]}},Pa=-34028234663852886e22,dr=34028234663852886e22}),Tr,Hr=S(()=>{Ee(),Tr=(e,t)=>new(wi(t))(e)}),Mr,Kr,$i,xi,pr,Er,Zi,Xi,Qi,Ua,Na,$n=S(()=>{Ee(),tr(),Mr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Kr=(e,t)=>{if(t==="int32")return e;let r=Mr.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(wi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let u=n[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},$i=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},xi=1,pr=()=>xi++,Er=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Zi=(e,t)=>{let r=Mr.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Xi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Zi(this.dataType,this.tensorShape)}destroy(){Ne("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=$i(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Qi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!n?.input.dataTypes.includes(t)){if(s=Er.get(t),!s||n?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);Ne("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Zi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Kr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ne("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?$i(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ua=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=pr();return this.tensorTrackersById.set(e,new Qi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){Ne("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ne("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=pr(),s=new Xi({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Qi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){Ne("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Ne("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Xi({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Na=(...e)=>new Ua(...e)}),Zr,La,Va,Fa=S(()=>{Ee(),Wt(),Hr(),$n(),tr(),Zr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),La=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Va=class{constructor(e){this.tensorManager=Na(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Gi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ne("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ne("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ne("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>La(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ne("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=Zr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){Ne("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Zr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Ce().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ne("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Tr(r,t)}}registerMLTensor(e,t,r,i){let a=Zr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return Ne("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=n.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(a.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(s){let p=Kr(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),a.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Ne("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Zr.get(Gt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),Yi=S(()=>{}),Ji,ea,Si,ta,ra,ia,qa,Wa,xn,es=S(()=>{tr(),Yi(),Ji=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ea=[],Si=e=>Math.ceil(Number(e)/16)*16,ta=e=>{for(let t=0;t<ea.length;t++){let r=ea[t];if(e<=r)return r}return Math.ceil(e/16)*16},ra=1,ia=()=>ra++,qa=async(e,t,r,i)=>{let a=Si(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let o=n.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{n.destroy()}},Wa=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ji)ea.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Si(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,a)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([l.finish()]),o.destroy(),Ne("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Si(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Ne("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ia();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ne("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ne("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ta(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:ia(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Ne("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ne("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await qa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ji.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ne("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xn=(...e)=>new Wa(...e)}),c,g,v=S(()=>{c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},g=e=>new c(e)}),k,E,B,z,I,R,H,ee,G,L,ge,O,ae,nt,Re,we,Me,pe=S(()=>{Ee(),$e(),k=64,E=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},B=(e,t=1)=>{let r=E(e,t);return typeof r=="string"?r:r[0]},z=(e,t=1)=>{let r=E(e,t);return typeof r=="string"?r:r[1]},I=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:U.computeStrides(r)})}),t},R=e=>e%4===0?4:e%2===0?2:1,H=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ee=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,G=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,L=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ge=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=E(t,a),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:d,storage:p,tensor:t},f=re=>typeof re=="string"?re:`${re}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,_=`${y}${e}_strides`,w="";for(let re=0;re<s-1;re++)w+=`
    let dim${re} = current / ${L(_,re,s)};
    let rest${re} = current % ${L(_,re,s)};
    indices[${re}] = dim${re};
    current = rest${re};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,$=re=>(m.offsetToIndices=!0,s<2?re:`o2i_${e}(${re})`),C=[];if(s>=2)for(let re=s-1;re>=0;re--)C.push(`${L(_,re,s)} * (indices[${re}])`);let D=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${C.join("+")};
  }`,P=re=>(m.indicesToOffset=!0,s<2?re:`i2o_${e}(${re})`),j=(...re)=>s===0?"0u":`${h.indices}(${re.map(f).join(",")})`,se=(re,ze)=>s<2?`${re}`:`${L(re,ze,s)}`,fe=(re,ze,Se)=>s<2?`${re}=${Se};`:`${L(re,ze,s)}=${Se};`,De={},xe=(re,ze)=>{m.broadcastedIndicesToOffset=!0;let Se=`${ze.name}broadcastedIndicesTo${e}Offset`;if(Se in De)return`${Se}(${re})`;let ye=[];for(let At=s-1;At>=0;At--){let Kt=ze.indicesGet("outputIndices",At+ze.rank-s);ye.push(`${se(_,At)} * (${Kt} % ${se(x,At)})`)}return De[Se]=`fn ${Se}(outputIndices: ${ze.type.indices}) -> u32 {
             return ${ye.length>0?ye.join("+"):"0u"};
           }`,`${Se}(${re})`},ke=(re,ze)=>(()=>{if(h.storage===h.value)return`${e}[${re}]=${ze};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${re}]=vec2<u32>(u32(${ze}), select(0u, 0xFFFFFFFFu, ${ze} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${re}]=vec2<u32>(u32(${ze}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${re}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ze}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),He=re=>(()=>{if(h.storage===h.value)return`${e}[${re}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${re}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${re}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${re}] & 0xFFu), bool(${e}[${re}] & 0xFF00u), bool(${e}[${re}] & 0xFF0000u), bool(${e}[${re}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),le=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${d} {
    return ${He(`i2o_${e}(indices)`)};
  }`,_e=s<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),ze=o.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${re}) -> ${d} {
    return get_${e}ByIndices(${j(ze)});
  }`})(),Ae=(...re)=>{if(re.length!==s)throw new Error(`indices length must be ${s}`);let ze=re.map(f).join(",");return s===0?He("0u"):s===1?He(ze[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${ze})`)},Ue=re=>s<2?He(re):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${re})`),Oe=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${d}) {
    ${ke(`i2o_${e}(indices)`,"value")}
  }`,Le=s<2?"":(()=>{let re=o.map(Se=>`d${Se}: u32`).join(", "),ze=o.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${re}, value: ${d}) {
    set_${e}ByIndices(${j(ze)}, value);
  }`})();return{impl:()=>{let re=[],ze=!1;return m.offsetToIndices&&(re.push(T),ze=!0),m.indicesToOffset&&(re.push(D),ze=!0),m.broadcastedIndicesToOffset&&(Object.values(De).forEach(Se=>re.push(Se)),ze=!0),m.set&&(re.push(Le),ze=!0),m.setByIndices&&(re.push(Oe),ze=!0),m.get&&(re.push(_e),ze=!0),m.getByIndices&&(re.push(le),ze=!0),!n&&ze&&re.unshift(`const ${x} = ${h.indices}(${r.join(",")});`,`const ${_} = ${h.indices}(${U.computeStrides(r).join(",")});`),re.join(`
`)},type:h,offsetToIndices:$,indicesToOffset:P,broadcastedIndicesToOffset:xe,indices:j,indicesGet:se,indicesSet:fe,set:(...re)=>{if(re.length!==s+1)throw new Error(`indices length must be ${s}`);let ze=re[s];if(typeof ze!="string")throw new Error("value must be string");let Se=re.slice(0,s).map(f).join(",");return s===0?ke("0u",ze):s===1?ke(Se[0],ze):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${Se}, ${ze})`)},setByOffset:ke,setByIndices:(re,ze)=>s<2?ke(re,ze):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${re}, ${ze});`),get:Ae,getByOffset:He,getByIndices:Ue,usage:i,name:e,strides:_,shape:x,rank:s}},O=(e,t,r,i=1)=>ge(e,t,r,"input",i),ae=(e,t,r,i=1)=>ge(e,t,r,"output",i),nt=(e,t,r)=>ge(e,t,r,"atomicOutput",1),Re=(e,t,r,i=1)=>ge(e,t,r,"internal",i),we=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=k){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Me=(e,t)=>new we(e,t)}),Tt,kt,kr,Xr,aa,Ga,ct,nr,ja,Be=S(()=>{Ee(),$e(),v(),pe(),Tt=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},kt=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),kr=(e,t)=>U.sortBasedOnPerm(e,kt(e.length,t)),Xr=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},aa=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Ga=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},ct=(e,t)=>{let r=e.dataType,i=e.dims.length,a=kt(i,t),n=kr(e.dims,a),s=e.dims,o=n,u=i<2||Ga(a,e.dims),l;if(u)return l=m=>{let y=O("input",r,s,4),x=ae("output",r,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,x)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=U.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=aa(e.dims,a),h=U.areEqual(p,[2,3,1]),f=U.areEqual(p,[3,1,2]);if(d.length===2||h||f){s=h?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,o=[s[1],s[0]];let m=16;return l=y=>{let x=O("a",r,s.length),_=ae("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${m+1}>, ${m}>;
  ${y.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=U.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:y},...I(s,o)]}},getShaderSource:l}}return l=m=>{let y=O("a",r,s.length),x=ae("output",r,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,x)}

  ${Xr(a,i,y,x)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=U.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...I(s,o)]}},getShaderSource:l}},nr=(e,t)=>{Tt(e.inputs,t.perm),e.compute(ct(e.inputs[0],t.perm))},ja=e=>g({perm:e.perm})}),rr,Sn,cr,Ti,wt,Dt,na,Ei,Ha,Tn,$t,hr,Qr,yt,ht,sr,En,kn,Ao,Ro,Mo,sf=S(()=>{Ee(),$e(),pe(),rs(),Be(),rr={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Sn={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},cr={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ti={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},wt=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Dt=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},na=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Ei=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ha=(e,t)=>{let r=[];if(!Ei(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Tn=(e,t,r,i,a,n,s)=>{let o=r[0].dims,u=U.size(n),l=U.size(s),d=O("_A",r[0].dataType,o),p=ae("output",a,n),h=64;u===1&&(h=256);let f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${cr[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${rr[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Sn[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${i==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ti[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},$t=(e,t,r,i)=>{let a=e.inputs.length===1?r:ts(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((f,m)=>m));let s=U.normalizeAxes(n,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=Ha(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ct(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=wt(o.length,u.dims.length));let[d,p]=Dt(u.dims,o),h=d;a.keepDims&&(h=na(d,s)),e.compute(Tn(t,a.cacheKey,[u],i,e.inputs[0].dataType,h,p),{inputs:[u]})},hr=(e,t)=>{$t(e,"ReduceMeanShared",t,"mean")},Qr=(e,t)=>{$t(e,"ReduceL1Shared",t,"l1")},yt=(e,t)=>{$t(e,"ReduceL2Shared",t,"l2")},ht=(e,t)=>{$t(e,"ReduceLogSumExpShared",t,"logSumExp")},sr=(e,t)=>{$t(e,"ReduceMaxShared",t,"max")},En=(e,t)=>{$t(e,"ReduceMinShared",t,"min")},kn=(e,t)=>{$t(e,"ReduceProdShared",t,"prod")},Ao=(e,t)=>{$t(e,"ReduceSumShared",t,"sum")},Ro=(e,t)=>{$t(e,"ReduceSumSquareShared",t,"sumSquare")},Mo=(e,t)=>{$t(e,"ReduceLogSumShared",t,"logSum")}}),fr,Bo,In,ts,mr,Do,Po,Uo,No,Lo,Vo,Fo,qo,Wo,Go,gr,jo,Ho,Ko,Zo,Xo,Qo,Yo,Jo,eu,tu,rs=S(()=>{Ee(),$e(),v(),pe(),sf(),fr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Bo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],In=(e,t,r,i,a,n,s=!1,o=!1)=>{let u=[],l=r[0].dims,d=l.length,p=U.normalizeAxes(a,d),h=!o&&p.length===0;l.forEach((y,x)=>{h||p.indexOf(x)>=0?s&&u.push(1):u.push(y)});let f=u.length,m=U.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],_=O("_A",r[0].dataType,d),w=ae("output",n,f),T=i(_,w,p),$=T[2];for(let C=0,D=0;C<d;C++)h||p.indexOf(C)>=0?(s&&D++,$=`for(var j${C}: u32 = 0; j${C} < ${l[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${_.indicesSet("input_indices",C,`j${C}`)}
                  ${$}
                }`):(x.push(`${_.indicesSet("input_indices",C,w.indicesGet("output_indices",D))};`),D++);return`

        ${y.registerUniform("output_size","u32").declareVariables(_,w)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${$}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:n}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...I(l,u)]})}},ts=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),g({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},mr=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:ts(a,r);e.compute(In(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Bo:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Do=(e,t)=>{fr(e.inputs),mr(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Po=(e,t)=>{fr(e.inputs),mr(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Uo=(e,t)=>{fr(e.inputs),mr(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},No=(e,t)=>{fr(e.inputs),mr(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Lo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Vo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},Fo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},qo=(e,t)=>{fr(e.inputs),mr(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Wo=(e,t)=>{fr(e.inputs),mr(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Go=(e,t)=>{fr(e.inputs),mr(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},gr=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},jo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vo(e,t):hr(e,t)},Ho=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):Qr(e,t)},Ko=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):yt(e,t)},Zo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):ht(e,t)},Xo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):sr(e,t)},Qo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):En(e,t)},Yo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qo(e,t):kn(e,t)},Jo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wo(e,t):Ao(e,t)},eu=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Go(e,t):Ro(e,t)},tu=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):Mo(e,t)}}),is,ru,iu,as,of=S(()=>{Ee(),v(),rs(),is=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ru=(e,t)=>{is(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(In("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},iu=(e,t)=>{is(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(In("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},as=e=>g(e)}),au,Cn,nu,su,ou,Ka,uu,lu,ns=S(()=>{Ee(),$e(),Yi(),pe(),au=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],d=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,h=p,f=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+h+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(h!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=m+y,_=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:f,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Cn=(e,t,r)=>t&&e?`
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
    `,nu=(e,t,r,i,a,n,s,o)=>{let u=R(s?1:n),l=64,d=n/u;d<l&&(l=32);let p=Math.ceil(n/u/l),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:d},{type:12,data:p}],f=B(e.dataType,u),m=z(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let x=_=>{let w=ae("x",e.dataType,e.dims,u),T=[w],$=s?O("seq_lens",s.dataType,s.dims):void 0;$&&T.push($);let C=o?O("total_sequence_length_input",o.dataType,o.dims):void 0;C&&T.push(C);let D=z(e.dataType),P=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(P).declareVariables(...T)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Cn($,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${D}(1.0) / ${D}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${D}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:h})}},su=(e,t,r,i,a,n,s,o,u)=>{let l=s+n.kvSequenceLength,d=[n.batchSize,n.numHeads,n.sequenceLength,l],p=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,f=p?[n.batchSize,h,l,n.headSize]:void 0,m=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=R(n.headSize),_=n.headSize/x,w=12,T={x:Math.ceil(l/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:m}],C=p&&i&&U.size(i.dims)>0,D=["type","type"];C&&D.push("type"),a&&D.push("type"),o&&D.push("type"),u&&D.push("type");let P=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&P.push({dims:f,dataType:t.dataType,gpuDataType:0});let j=se=>{let fe=O("q",t.dataType,t.dims,x),De=O("key",r.dataType,r.dims,x),xe=[fe,De];if(C){let Oe=O("past_key",i.dataType,i.dims,x);xe.push(Oe)}a&&xe.push(O("attention_bias",a.dataType,a.dims));let ke=o?O("seq_lens",o.dataType,o.dims):void 0;ke&&xe.push(ke);let He=u?O("total_sequence_length_input",u.dataType,u.dims):void 0;He&&xe.push(He);let le=ae("output",t.dataType,d),_e=[le];p&&_e.push(ae("present_key",t.dataType,f,x));let Ae=z(1,x),Ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${fe.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${fe.type.storage}, ${w*w}>;
  ${se.registerUniforms(Ue).declareVariables(...xe,..._e)}
  ${se.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Cn(ke,He,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Ae}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Ae}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${le.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:P,dispatchGroup:T,programUniforms:$}),getShaderSource:j}},ou=(e,t,r,i,a,n,s=void 0,o=void 0)=>{let u=n+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=p?[a.batchSize,h,u,a.headSize]:void 0,m=[a.batchSize,a.sequenceLength,d],y=12,x={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},_=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:d},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:l}],w=p&&i&&U.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),o&&T.push("type");let $=[{dims:m,dataType:t.dataType,gpuDataType:0}];p&&$.push({dims:f,dataType:t.dataType,gpuDataType:0});let C=D=>{let P=O("probs",t.dataType,t.dims),j=O("v",r.dataType,r.dims),se=[P,j];w&&se.push(O("past_value",i.dataType,i.dims));let fe=s?O("seq_lens",s.dataType,s.dims):void 0;s&&se.push(fe);let De=o?O("total_sequence_length_input",o.dataType,o.dims):void 0;o&&se.push(De);let xe=[ae("output",t.dataType,m)];p&&xe.push(ae("present_value",t.dataType,f));let ke=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${P.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${P.type.value}, ${y*y}>;
  ${D.registerUniforms(ke).declareVariables(...se,...xe)}
  ${D.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Cn(fe,De,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${P.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:$,dispatchGroup:x,programUniforms:_}),getShaderSource:C}},Ka=(e,t,r,i,a,n,s,o,u,l,d=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),f=h>1?s:void 0,m=h>1?o:void 0,y=h>1?l.pastSequenceLength:0,x=y+l.kvSequenceLength,_=u&&U.size(u.dims)>0?u:void 0,w=[t,r];f&&U.size(f.dims)>0&&w.push(f),_&&w.push(_),d&&w.push(d),p&&w.push(p);let T=e.compute(su(h,t,r,f,_,l,y,d,p),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(nu(T,l.batchSize,l.numHeads,y,l.sequenceLength,x,d,p),{inputs:d&&p?[T,d,p]:[T],outputs:[]});let $=[T,i];m&&U.size(m.dims)>0&&$.push(m),d&&$.push(d),p&&$.push(p),e.compute(ou(h,T,i,m,l,y,d,p),{inputs:$,outputs:h>1?[0,2]:[0]})},uu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let h=ae("output_q",u[0].dataType,r),f=ae("output_k",u[0].dataType,r),m=ae("output_v",u[0].dataType,r),y=O("input",u[0].dataType,u[0].dims),x=O("weight",u[1].dataType,u[1].dims),_=O("bias",u[2].dataType,u[2].dims),w=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${p.registerUniforms(T).declareVariables(y,x,_,h,f,m)}
  ${p.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},lu=(e,t)=>{let r=au(e.inputs,t),[i,a,n]=uu(e,r);return Ka(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),du,pu,cu,hu,uf=S(()=>{gt(),Ee(),$e(),v(),pe(),du=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((o,u)=>{if(o!==i[u])throw new Error(`${n}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},pu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?R(n[n.length-1]):1,o=a==="NHWC"&&n.length>1?s:1,u=U.size(n)/s,l=i,d=l?n.length:n,p=O("x",e[0].dataType,e[0].dims,s),h=O("scale",e[1].dataType,e[1].dims,o),f=O("bias",e[2].dataType,e[2].dims,o),m=O("inputMean",e[3].dataType,e[3].dims,o),y=O("inputVar",e[4].dataType,e[4].dims,o),x=ae("y",e[0].dataType,d,s),_=()=>{let T="";if(i)T=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let $=1;$<h.rank;$++)T+=`cIndices[${$}] = outputIndices[${$}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,f,m,y,x)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${_()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...I(n)]:[{type:12,data:u}]})}},cu=e=>g(e),hu=(e,t)=>{let{inputs:r,outputCount:i}=e,a=cu({...t,outputCount:i});if(ne.webgpu.validateInputContent&&du(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(pu(r,a))}}),fu,mu,gu,lf=S(()=>{$e(),pe(),fu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},mu=e=>{let t=e[0].dims,r=e[0].dims[2],i=U.size(t)/4,a=e[0].dataType,n=O("input",a,t,4),s=O("bias",a,[r],4),o=O("residual",a,t,4),u=ae("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(n,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},gu=e=>{fu(e.inputs),e.compute(mu(e.inputs))}}),wu,Ke,yu,_u,bu,vu,$u,xu,Su,Tu,Eu,ku,Iu,Cu,zu,Ou,Za,Au,zn,Ru,Mu,Bu,Du,Pu,Uu,Nu,Lu,Vu,Fu,qu,Wu,Gu,ju,Hu,Ku,ss,Zu,os,us,Xu,Qu,Yu,Ju,el,tl,ls=S(()=>{Ee(),$e(),v(),pe(),wu=(e,t,r,i,a,n,s)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=O("inputData",r,[o],4),d=ae("outputData",i,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ke=(e,t,r,i,a,n=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(U.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>wu(l,U.size(e.dims),e.dataType,n,r,i,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(U.size(l[0].dims)/64/4)},programUniforms:u})}},yu=e=>{e.compute(Ke(e.inputs[0],"Abs","abs"))},_u=e=>{e.compute(Ke(e.inputs[0],"Acos","acos"))},bu=e=>{e.compute(Ke(e.inputs[0],"Acosh","acosh"))},vu=e=>{e.compute(Ke(e.inputs[0],"Asin","asin"))},$u=e=>{e.compute(Ke(e.inputs[0],"Asinh","asinh"))},xu=e=>{e.compute(Ke(e.inputs[0],"Atan","atan"))},Su=e=>{e.compute(Ke(e.inputs[0],"Atanh","atanh"))},Tu=e=>g(e),Eu=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ke(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},ku=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return g({min:t,max:r})},Iu=(e,t)=>{let r=t||ku(e.inputs),i=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Cu=e=>{e.compute(Ke(e.inputs[0],"Ceil","ceil"))},zu=e=>{e.compute(Ke(e.inputs[0],"Cos","cos"))},Ou=e=>{e.compute(Ke(e.inputs[0],"Cosh","cosh"))},Za=e=>g(e),Au=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},zn=(e="f32")=>`
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
}`,Ru=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,zn(t)))},Mu=e=>{e.compute(Ke(e.inputs[0],"Exp","exp"))},Bu=e=>{e.compute(Ke(e.inputs[0],"Floor","floor"))},Du=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,zn(t)))},Pu=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Uu=e=>{e.compute(Ke(e.inputs[0],"Not",t=>`!${t}`))},Nu=e=>{e.compute(Ke(e.inputs[0],"Neg",t=>`-${t}`))},Lu=e=>{e.compute(Ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Vu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Fu=e=>{e.compute(Ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},qu=e=>g(e),Wu=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Gu=e=>{e.compute(Ke(e.inputs[0],"Sin","sin"))},ju=e=>{e.compute(Ke(e.inputs[0],"Sinh","sinh"))},Hu=e=>{e.compute(Ke(e.inputs[0],"Sqrt","sqrt"))},Ku=e=>{e.compute(Ke(e.inputs[0],"Tan","tan"))},ss=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Zu=e=>{e.compute(Ke(e.inputs[0],"Tanh",ss))},os=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ss("v")};
}
`,us=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Xu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"FastGelu",us,os(t),void 0,e.inputs[0].dataType))},Qu=(e,t)=>{let r=z(e.inputs[0].dataType);return e.compute(Ke(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Yu=e=>{e.compute(Ke(e.inputs[0],"Log","log"))},Ju=(e,t)=>`
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
`,el=e=>`quick_gelu_impl(${e})`,tl=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"QuickGelu",el,Ju(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),rl,il,al,df=S(()=>{$e(),pe(),ls(),rl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},il=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=O("input",e[0].dataType,e[0].dims,4),i=O("bias",e[0].dataType,[e[0].dims[2]],4),a=ae("output",e[0].dataType,t,4),n=U.size(t)/4,s=B(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,a)}

  ${zn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},al=e=>{rl(e.inputs),e.compute(il(e.inputs))}}),nl,sl,wr,ol,ul,ll,dl,pl,cl,hl,fl,ml,gl,pf=S(()=>{Ee(),$e(),pe(),nl=(e,t,r,i,a,n,s,o,u,l,d,p)=>{let h,f;typeof o=="string"?h=f=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?h=f=o:(h=o.scalar,f=o.vector);let m=ae("outputData",d,i.length,4),y=O("aData",u,t.length,4),x=O("bData",l,r.length,4),_;if(a)if(n){let w=U.size(t)===1,T=U.size(r)===1,$=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;w||T?_=m.setByOffset("global_idx",f(w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):_=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(s||$?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,$,C="")=>{let D=`aData[indexA${$}][componentA${$}]`,P=`bData[indexB${$}][componentB${$}]`;return`
            let outputIndices${$} = ${m.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offsetA${$} = ${y.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
            let offsetB${$} = ${x.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
            let indexA${$} = offsetA${$} / 4u;
            let indexB${$} = offsetB${$} / 4u;
            let componentA${$} = offsetA${$} % 4u;
            let componentB${$} = offsetB${$} % 4u;
            ${T}[${$}] = ${C}(${h(D,P)});
          `};d===9?_=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,m)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},sl=(e,t,r,i,a,n,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),l=!U.areEqual(o,u),d=o,p=U.size(o),h=!1,f=!1,m=[l];if(l){let y=Sr.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),p=U.size(d);let x=U.size(o)===1,_=U.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;m.push(x),m.push(_),m.push(w),m.push(T);let $=1;for(let C=1;C<d.length;C++){let D=o[o.length-C],P=u[u.length-C];if(D===P)$*=D;else break}$%4===0?(f=!0,h=!0):(x||_||w||T)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>nl(y,o,u,d,h,l,f,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(d)/4)},...I(o,u,d)]})}},wr=(e,t,r,i,a,n)=>{e.compute(sl(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},ol=e=>{wr(e,"Add",(t,r)=>`${t}+${r}`)},ul=e=>{wr(e,"Div",(t,r)=>`${t}/${r}`)},ll=e=>{wr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},dl=e=>{wr(e,"Mul",(t,r)=>`${t}*${r}`)},pl=e=>{let t=O("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;wr(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},cl=e=>{wr(e,"Sub",(t,r)=>`${t}-${r}`)},hl=e=>{wr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},fl=e=>{wr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ml=e=>{wr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},gl=e=>{wr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),wl,yl,_l,bl,vl,$l,cf=S(()=>{Ee(),$e(),v(),pe(),wl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==i.dims[l])throw new Error("non concat dimensions must match")})}})},yl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,_l=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},bl=(e,t,r,i)=>{let a=U.size(r),n=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:a}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],n[y]=o,l.push(e[y].dims.length),s[y]=O(`input${y}`,i,l[y]),u.push("rank"),d.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)d.push(...I(e[y].dims));d.push(...I(r));let p=ae("output",i,r.length),h=p.indicesGet("indices",t),f=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,p)})()}

  ${yl(n.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${_l(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:m}},vl=(e,t)=>{let r=e.inputs,i=r[0].dims,a=U.normalizeAxis(t.axis,i.length);wl(r,a);let n=i.slice();n[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(o=>U.size(o.dims)>0);e.compute(bl(s,a,n,r[0].dataType),{inputs:s})},$l=e=>g({axis:e.axis})}),ki,Ii,Ci,ds,zi=S(()=>{Ee(),$e(),ki=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ii=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ci=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ds=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Pa,dr];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),It,xl,ps=S(()=>{It=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},xl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Sl,hf=S(()=>{Sl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Xa,cs,hs=S(()=>{Ee(),$e(),pe(),zi(),Xa=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${L(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,L(a,o+n,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},cs=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],d=s[s.length-1],p=R(l),h=R(d),f=R(u),m=U.size(r)/p/f,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),_=[U.size(x),u,l],w=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Ii(t,w),w.push(...I(x,s,o)),y&&w.push(...I(e[2].dims)),w.push(...I(_));let T=$=>{let C=Re("batch_dims",e[0].dataType,x.length),D=O("a",e[0].dataType,s.length,h),P=O("b",e[1].dataType,o.length,p),j=ae("output",e[0].dataType,_.length,p),se=B(j.type.tensor),fe=ki(t,j.type.value,se),De=[D,P],xe="";if(y){let le=a?p:1;De.push(O("bias",e[2].dataType,e[2].dims.length,le)),xe=`${a?`value += bias[col / ${le}];`:`value += ${j.type.value}(bias[row + i]);`}`}let ke=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ci(t,ke);let He=()=>{let le=`var a_data: ${D.type.value};`;for(let _e=0;_e<h;_e++)le+=`
              let b_data${_e} = b[(b_offset + (k + ${_e}) * uniforms.N + col) / ${p}];`;for(let _e=0;_e<f;_e++){le+=`a_data = a[(a_offset + (row + ${_e}) * uniforms.K + k) / ${h}];`;for(let Ae=0;Ae<h;Ae++)le+=`
            values[${_e}] = fma(${P.type.value}(a_data${h===1?"":`[${Ae}]`}), b_data${Ae}, values[${_e}]);
`}return le};return`
  ${$.registerUniforms(ke).registerInternalVariables(C).declareVariables(...De,j)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${D.type.indices};
    ${Xa("a_indices",D,D.rank-2,C.rank,"batch_indices")}
    ${D.indicesSet("a_indices",D.rank-2,0)}
    ${D.indicesSet("a_indices",D.rank-1,0)}
    let a_offset = ${D.indicesToOffset("a_indices")};

    var b_indices: ${P.type.indices};
    ${Xa("b_indices",P,P.rank-2,C.rank,"batch_indices")}
    ${P.indicesSet("b_indices",P.rank-2,0)}
    ${P.indicesSet("b_indices",P.rank-1,0)}
    let b_offset = ${P.indicesToOffset("b_indices")};
    var values: array<${j.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${He()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${xe}
      ${fe}
      let cur_indices = ${j.type.indices}(batch, row + i, col);
      let offset = ${j.indicesToOffset("cur_indices")};
      ${j.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${f};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:w}),getShaderSource:T}}}),Tl,El,fs,ms,kl,gs,Il,On,ws=S(()=>{Ee(),$e(),pe(),zi(),hs(),ps(),Tl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,El=(e,t)=>e?`
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
        }`,fs=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=a?u:n,p=a?n:u,h=d/t[0],f=n/t[1];if(!((a&&h===4&&e[1]===4||!a&&(h===3||h===4))&&d%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${d/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Tl(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
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

          ${El(a,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ms=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,kl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",gs=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=a?l:n,h=a?n:l;if(!(h%t[1]===0&&p%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let f=h/t[1],m=p/t[0],y=n/t[1],x=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${ms(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
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

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ms(a,i)}
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
      ${kl(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Il=(e,t,r,i,a=!1)=>{let[n,s,o,u]=i,l=B(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${It(e,l)} {
      var value = ${It(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Xa("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${It(e,l)} {
      var value = ${It(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Xa("bIndices",o,o.rank-2,n.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${It(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${It(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},On=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),d=i?i.slice(0,-2):r.slice(0,-2),p=U.size(d),h=s[s.length-2],f=s[s.length-1],m=o[o.length-1],y=f%4===0&&m%4===0,x=h<=8?[4,1,1]:[4,4,1],_=[8,8,1],w=[Math.ceil(m/_[0]/x[0]),Math.ceil(h/_[1]/x[1]),Math.ceil(p/_[2]/x[2])],T=y?4:1,$=[...u,h,f/T],C=$.length,D=[...l,f,m/T],P=D.length,j=[p,h,m/T],se=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];Ii(t,se),se.push(...I(d,$,D));let fe=["rank","rank"],De=e.length>2;De&&(se.push(...I(e[2].dims)),fe.push("rank")),se.push(...I(j));let xe=ke=>{let He=d.length,le=Re("batchDims",e[0].dataType,He,1),_e=B(e[0].dataType),Ae=O("a",e[0].dataType,C,T),Ue=O("b",e[1].dataType,P,T),Oe=ae("result",e[0].dataType,j.length,T),Le=[Ae,Ue];if(De){let At=a?T:1;Le.push(O("bias",e[2].dataType,e[2].dims.length,At))}let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ci(t,re);let ze=B(Oe.type.tensor),Se=ki(t,Oe.type.value,ze),ye=Il(T,De,Se,[le,Ae,Ue,Oe],a);return`
  ${ke.registerUniforms(re).registerInternalVariables(le).declareVariables(...Le,Oe)}
  ${ye}
  ${y?fs(x,_,_e,le):gs(x,_,_e,le)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:fe},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:se}),getShaderSource:xe}}}),Cl,zl,ff=S(()=>{Ee(),tr(),pe(),zi(),ps(),hf(),ws(),Cl=(e,t,r,i,a=!1,n,s=4,o=4,u=4,l="f32")=>{let d=se=>{switch(se){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},p=se=>{switch(se){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
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
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",_=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${It(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${It(s,l)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${It(s,l)}(0.0);`,$=e?i&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${It(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${It(o,l)}(0.0);`,C=It(u,l),D=It(e?s:o,l),P=It(e?o:s,l),j=ki(n,C,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${D} {
      ${e?T:$}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?$:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${xl(a)}
      ${j}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},zl=(e,t,r,i,a,n,s,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=r[0],h=l?r[2]:r[3],f=l?r[1]:r[2],m=l?r[3]:r[1],y=l&&(d%4===0||d%3===0)&&m%4===0,x=l?m:h*f,_=l?h*f:m,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],$=[Math.ceil(x/w[0]/T[0]),Math.ceil(_/w[1]/T[1]),Math.ceil(p/w[2]/T[2])];Ne("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${$}`);let C=y?l&&d%4!==0?3:4:1,D=w[1]*T[1],P=w[0]*T[0],j=Math.max(w[0]*C,w[1]),se=i%D===0,fe=a%P===0,De=n%j===0,xe=y?[C,4,4]:[1,1,1],ke=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ii(t,ke),ke.push(...I(e[0].dims,e[1].dims));let He=["rank","rank"];s&&(ke.push(...I(e[2].dims)),He.push("rank")),ke.push(...I(r));let le=_e=>{let Ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ci(t,Ae);let Ue=y?4:1,Oe=B(e[0].dataType),Le=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        result[flatIndex] = ${y?`vec4<${Oe}>`:Oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,re=O("x",e[0].dataType,e[0].dims.length,C===3?1:C),ze=O("w",e[1].dataType,e[1].dims.length,Ue),Se=[re,ze],ye=ae("result",e[0].dataType,r.length,Ue);if(s){let At=O("bias",e[2].dataType,e[2].dims.length,Ue);Se.push(At),Le+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${Oe}>`:Oe} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Sl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${_e.registerUniforms(Ae).declareVariables(...Se,ye)}
        ${Le}
        ${Cl(l,se,fe,De,s,t,xe[0],xe[1],xe[2],Oe)}
        ${y?fs(T,w,Oe,void 0,!l,j):gs(T,w,Oe,void 0,!l,j,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${y};${se};${fe};${De};${D};${P};${j}`,inputDependencies:He},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:ke}),getShaderSource:le}}}),Ol,ys,Qa,Al,_s,Rl,Ml,Bl,mf=S(()=>{Ee(),tr(),$e(),pe(),zi(),ps(),Ol=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ys=e=>typeof e=="number"?[e,e,e]:e,Qa=(e,t)=>t<=1?e:e+(e-1)*(t-1),Al=(e,t,r,i=1)=>{let a=Qa(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},_s=(e,t,r,i,a)=>{a==null&&(a=Al(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Rl=(e,t,r,i,a,n,s,o,u,l)=>{let d,p,h,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=_s([t,r,i,1],[o,u,l],1,[a,n,s],e);p=m[0],h=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,x,_)=>y===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=_s([t,r,i,1],[o,u,l],1,[a,n,s],e[0]);p=m[0],h=m[1],f=m[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),h=Math.ceil(r/n),f=Math.ceil(i/s);let m=(p-1)*a+o-t,y=(h-1)*n+u-r,x=(f-1)*s+l-i,_=Math.floor(m/2),w=m-_,T=Math.floor(y/2),$=y-T,C=Math.floor(x/2),D=x-C;d={top:T,bottom:$,left:C,right:D,front:_,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:f}},Ml=(e,t,r,i,a,n=!1,s="channelsLast")=>{let o,u,l,d,p;if(s==="channelsLast")[o,u,l,d,p]=e;else if(s==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,f,m,y]=t,[x,_,w]=ys(r),[T,$,C]=ys(i),D=Qa(f,T),P=Qa(m,$),j=Qa(y,C),{padInfo:se,outDepth:fe,outHeight:De,outWidth:xe}=Rl(a,u,l,d,x,_,w,D,P,j),ke=n?h*p:h,He=[0,0,0,0,0];return s==="channelsFirst"?He=[o,ke,fe,De,xe]:s==="channelsLast"&&(He=[o,fe,De,xe,ke]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:fe,outHeight:De,outWidth:xe,outChannels:ke,padInfo:se,strideDepth:x,strideHeight:_,strideWidth:w,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:D,effectiveFilterHeight:P,effectiveFilterWidth:j,dilationDepth:T,dilationHeight:$,dilationWidth:C,inShape:e,outShape:He,filterShape:t}},Bl=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((x,_)=>_)},l=[Math.ceil(Ol(u.x.map(x=>r[x]))/o[0]),1,1];Ne("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=U.size(r),h=[{type:12,data:p},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Ii(t,h),h.push(...I(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(h.push(...I(e[2].dims)),f.push("rank")),h.push(...I(r));let y=x=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ci(t,_);let w=1,T=B(e[0].dataType),$=O("x",e[0].dataType,e[0].dims.length,d),C=O("W",e[1].dataType,e[1].dims.length,w),D=[$,C],P=ae("result",e[0].dataType,r.length,w),j="";if(m){let De=O("bias",e[2].dataType,e[2].dims.length,w);D.push(De),j+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?L("coords",4,5):L("coords",1,5)}];
        }`}let se=It(d,T),fe=ki(t,se,T);return`
            ${j}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${$.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${x.registerUniforms(_).declareVariables(...D,P)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${P.offsetToIndices("global_idx")};
              let batch = ${L("coords",0,$.rank)};
              let d2 = ${s?L("coords",$.rank-1,$.rank):L("coords",1,$.rank)};
              let xFRCCorner = vec3<u32>(${s?L("coords",1,$.rank):L("coords",2,$.rank)},
              ${s?L("coords",2,$.rank):L("coords",3,$.rank)},
              ${s?L("coords",3,$.rank):L("coords",4,$.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?L("uniforms.x_shape",1,$.rank):L("uniforms.x_shape",2,$.rank)};
              let xShapeZ = ${s?L("uniforms.x_shape",2,$.rank):L("uniforms.x_shape",3,$.rank)};
              let xShapeW = ${s?L("uniforms.x_shape",3,$.rank):L("uniforms.x_shape",4,$.rank)};
              let xShapeU = ${s?L("uniforms.x_shape",4,$.rank):L("uniforms.x_shape",1,$.rank)};
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
                      ${s?`let xValues = vec4<f32>(
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
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
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
                      ${s?`let xValues = vec3<f32>(
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${fe}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${d};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),Dl,Pl,gf=S(()=>{Ee(),$e(),pe(),zi(),Dl=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],d=l/t.group,p=u&&d>=4?R(l):1,h=U.size(r)/p,f=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Ii(t,f),f.push(...I(s,[o[0],o[1],o[2],o[3]/p]));let m=a?["rank","rank","rank"]:["rank","rank"];f.push(...I([r[0],r[1],r[2],r[3]/p]));let y=x=>{let _=ae("output",e[0].dataType,r.length,p),w=B(_.type.tensor),T=ki(t,_.type.value,w),$=O("x",e[0].dataType,s.length),C=O("w",e[1].dataType,o.length,p),D=[$,C];a&&D.push(O("b",e[2].dataType,e[2].dims,p));let P=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ci(t,P);let j=u?`
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
            let xVal = ${$.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${$.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(P).declareVariables(...D,_)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${j}
    ${n}
    ${T}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:y}},Pl=(e,t,r,i)=>{let a=e.length>2,n=R(r[3]),s=R(r[2]),o=U.size(r)/n/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],d=[r[0],r[1],r[2],r[3]/n],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ii(t,p),p.push(...I(u,l,d));let h=(s-1)*t.strides[1]+l[1],f=m=>{let y=ae("output",e[0].dataType,d.length,n),x=B(y.type.tensor),_=ki(t,y.type.value,x),w=O("x",e[0].dataType,u.length,n),T=O("w",e[1].dataType,l.length,n),$=[w,T];a&&$.push(O("b",e[2].dataType,e[2].dims,n));let C=a?"value += b[output_channel];":"",D=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ci(t,D),`
  ${m.registerUniforms(D).declareVariables(...$,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${y.type.value}, ${s}>;
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
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${_}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:f}}}),Ul,An,Nl,Rn,bs,vs,Ll,Vl,$s,wf=S(()=>{$e(),ff(),mf(),ws(),gf(),zi(),hs(),Be(),Ul=(e,t,r,i,a,n)=>{let s=e[0],o=e.slice(n?1:2,n?3:4),u=o.length,l=t[0],d=t.slice(2).map((h,f)=>h+(h-1)*(r[f]-1)),p=o.map((h,f)=>h+i[f]+i[f+u]).map((h,f)=>Math.floor((h-d[f]+a[f])/a[f]));return p.splice(0,0,s),p.splice(n?3:1,0,l),p},An=[2,3,1,0],Nl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Rn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();jr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},bs=e=>{let t=ds(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},vs=(e,t,r,i)=>{let a=r.format==="NHWC",n=Ul(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let D=[t[0]];if(a){let P=e.kernelCustomData.wT??e.compute(ct(t[1],An),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=P),D.push(P)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Pl(D,r,n,i),{inputs:D}):e.compute(Dl(D,r,n,i),{inputs:D});return}let s=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],d=t[1].dims[2],p=t[1].dims[3],h=n[a?1:2],f=n[a?2:3],m=n[a?3:1],y=a&&d===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if(y||d===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=n[0],P,j,se,fe=[];if(a){let ke=e.kernelCustomData.wT??e.compute(ct(t[1],An),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ke),y){let He=o*u*l;P=t[0].reshape([1,D,He]),j=ke.reshape([1,He,m]),se=[1,D,m]}else P=t[0].reshape([D,o*u,l]),j=ke.reshape([1,l,m]),se=[D,h*f,m];fe.push(P),fe.push(j)}else P=t[0].reshape([D,l,o*u]),j=t[1].reshape([1,m,l]),se=[D,m,h*f],fe.push(j),fe.push(P);s&&fe.push(t[2]);let De=se[2],xe=fe[0].dims[fe[0].dims.length-1];De<8&&xe<8?e.compute(cs(fe,r,n,se,a,i),{inputs:fe}):e.compute(On(fe,r,n,se,a,i),{inputs:fe});return}let x=!0,_=e.kernelCustomData.wT??e.compute(ct(t[1],An),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let w=[t[0],_];s&&w.push(t[2]);let T=a?h*f:m,$=a?m:h*f,C=d*p*l;e.compute(zl(w,r,n,T,$,C,s,x,i),{inputs:w})},Ll=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Rn({...t,pads:a,strides:n,dilations:s,kernelShape:o},i);vs(e,i,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Vl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Rn(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Ml(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Bl(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},$s=(e,t)=>{if(Nl(e.inputs,t),e.inputs[0].dims.length===3)Ll(e,t);else if(e.inputs[0].dims.length===5)Vl(e,e.inputs,t);else{let r=Rn(t,e.inputs);vs(e,e.inputs,r)}}}),Fl,yf=S(()=>{Ee(),tr(),$e(),pe(),Fl=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],d=n?R(u):1,p=n&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-h,m=n?R(l):1,y=n?l===1?d:m:1,x=U.size(a)/m,_=[Math.ceil(x/64),1,1];Ne("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],$=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],C=[t.dilations[0],t.dilations[1]],D=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],P=[D[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),D[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],j=[{type:12,data:x},{type:12,data:T},{type:12,data:$},{type:12,data:C},{type:12,data:D},{type:6,data:P},{type:12,data:h},{type:12,data:u},{type:12,data:l},...I(e[0].dims,e[1].dims)];i&&(j.push(...I(e[2].dims)),w.push("rank")),j.push(...I(a));let se=fe=>{let De=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:D.length},{name:"pads",type:"i32",length:P.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],xe=B(e[0].dataType),ke=n?1:2,He=n?2:3,le=n?3:1,_e=O("W",e[1].dataType,e[1].dims.length,y),Ae=O("Dy",e[0].dataType,e[0].dims.length,d),Ue=[Ae,_e];i&&Ue.push(O("bias",e[2].dataType,[a[le]].length,m));let Oe=ae("result",e[0].dataType,a.length,m),Le=()=>{let Se="";if(p)d===4?Se+=`
        let xValue = ${Ae.getByOffset("x_offset")};
        let wValue = ${_e.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?Se+=`
          dotProd = dotProd + dot(vec4<${xe}>(${Ae.getByOffset("x_offset")}, ${Ae.getByOffset("x_offset + 1u")}), vec4<${xe}>(${_e.getByOffset("w_offset")}, ${_e.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(Se+=`
          dotProd = dotProd + dot(vec4<${xe}>(${Ae.getByOffset("x_offset")}, ${Ae.getByOffset("x_offset + 1u")}, ${Ae.getByOffset("x_offset + 2u")}, ${Ae.getByOffset("x_offset + 3u")}), vec4<${xe}>(${_e.getByOffset("w_offset")}, ${_e.getByOffset("w_offset + 1u")}, ${_e.getByOffset("w_offset + 2u")}, ${_e.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Se+=`
                  let xValue = ${n?Ae.getByOffset(`${Ae.indicesToOffset(`${Ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):Ae.get("batch","inputChannel","idyR","idyC")};
        `,d===1)Se+=`
          let w_offset = ${_e.indicesToOffset(`${_e.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${_e.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ye=0;ye<d;ye++)Se+=`
            let wValue${ye} = ${_e.getByOffset(`${_e.indicesToOffset(`${_e.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ye}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ye}] * wValue${ye};`;return Se},re=()=>{if(f===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Se="";if(d===1){Se+="dotProd = dotProd";for(let ye=0;ye<f;ye++)Se+=`
            + ${Ae.getByOffset(`x_offset + ${ye}`)} * ${_e.getByOffset(`w_offset + ${ye}`)}`;Se+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);Se+=`
          let xValue = ${Ae.getByOffset("x_offset")};
          let wValue = ${_e.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Se},ze=`
            let outputIndices = ${Oe.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${Oe.indicesGet("outputIndices",0)};
            let d1 = ${Oe.indicesGet("outputIndices",le)};
            let r = ${Oe.indicesGet("outputIndices",ke)};
            let c = ${Oe.indicesGet("outputIndices",He)};
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
              let dyR = (${xe}(dyRCorner) + ${xe}(wR)) / ${xe}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${xe}(uniforms.Dy_shape[${ke}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${xe}(dyCCorner) + ${xe}(wC)) / ${xe}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${xe}(uniforms.Dy_shape[${He}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Ae.indicesToOffset(`${Ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${_e.indicesToOffset(`${_e.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${Le()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${re()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${m}]`:""};
            ${Oe.setByOffset("global_idx","value")};
          `;return`
    ${fe.registerUniforms(De).declareVariables(...Ue,Oe)}
      ${fe.mainStart()}
      ${fe.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ze}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${p}${f}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:j}),getShaderSource:se}}}),ql,Wl,Gl,xs,jl,Hl,Ss,Kl,Zl,_f=S(()=>{yf(),zi(),Be(),ql=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Wl=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Gl=(e,t,r,i,a,n,s,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let h=e[0],f=t[o?3:1]*a;for(let m=0,y=e.length-d-(o?1:0);m<d;++m,++y){let x=e[y],_=p?x*s[m]:l[m],w=ql(x,s[m],n[m],t[y],r[m],_);Wl(w,i,n,m,m+d),p&&l.push(s[m]*(x-1)+u[m]+(t[y]-1)*r[m]+1-n[m]-n[m+d])}l.splice(0,0,h),l.splice(o?3:1,0,f)},xs=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}Gl(o,r,u,e.autoPad,e.group,a,l,i,s,n);let d=Object.assign({},e);return Object.assign(d,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:u,strides:l}),d},jl=e=>{let t=ds(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Hl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ss=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(ct(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(Fl(n,r,i),{inputs:n})},Kl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=xs({...t,pads:o,strides:s,dilations:n,kernelShape:a,outputPadding:u},i);Ss(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Zl=(e,t)=>{if(Hl(e.inputs,t),e.inputs[0].dims.length===3)Kl(e,t);else{let r=xs(t,e.inputs);Ss(e,e.inputs,r)}}}),Xl,Ql,Yl,bf=S(()=>{Ee(),$e(),v(),pe(),Xl=(e,t,r,i)=>{let a=U.size(t),n=t.length,s=O("input",e,n),o=ae("output",e,n),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=U.normalizeAxis(u,n),d=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,f=L("uniforms.input_shape","uniforms.axis",n),m=i.reverse?h+(i.exclusive?" + 1":""):"0",y=i.reverse?f:h+(i.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...I(t,t)]}),getShaderSource:d}},Ql=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Xl(i,r,a,t),{inputs:[0]})},Yl=e=>{let t=e.exclusive===1,r=e.reverse===1;return g({exclusive:t,reverse:r})}}),Jl,ed,td,rd,id,vf=S(()=>{Ee(),$e(),v(),pe(),Jl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ed=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},td=(e,t)=>{let r,i,a,n,s,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([r,i,a,n]=e.dims,s=d?[r,i,a,l,l,n/l**2]:[r,i,a,n/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=d?[r,l,l,n/l**2,i,a]:[r,n/l**2,l,l,i,a],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,f=e.dataType,m=O("a",f,h),y=ae("output",f,h),x=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(m,y)}

  ${ed(o,h,m,y)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let w=u?[r,i*l,a*l,n/l**2]:[r,n/l**2,i*l,a*l],T=U.size(w),$=p.dims,C=U.sortBasedOnPerm($,o);return{outputs:[{dims:w,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...I($,C)]}},getShaderSource:x}},rd=(e,t)=>{Jl(e.inputs),e.compute(td(e.inputs[0],t))},id=e=>g({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Mn,Ya,Ts,ad,nd,sd,od,Es,ud,ld,dd,$f=S(()=>{Ee(),$e(),v(),pe(),Mn="[a-zA-Z]|\\.\\.\\.",Ya="("+Mn+")+",Ts="^"+Ya+"$",ad="("+Ya+",)*"+Ya,nd="^"+ad+"$",sd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},od=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(nd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ts)))throw new Error("Invalid LHS term");let o=this.processTerm(a,!0,s,n);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Ya)))throw new Error("Invalid RHS");i.match(RegExp(Mn,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],o=0;if(!e.match(RegExp(Ts))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Mn,"g")),l=new sd(i);return u?.forEach((d,p)=>{if(d==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let h=a-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<s.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,p+f),this.addSymbol(m,r[o++],i)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],i)}),l}},Es=e=>e+"_max",ud=(e,t,r,i)=>{let a=e.map(l=>l.length).map((l,d)=>O(`input${d}`,t,l)),n=U.size(i),s=ae("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",h="var sum = 0.0;",f="sum += prod;",m=[],y=[],x=[],_=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach(($,C)=>{if(r.rhs.symbolToIndices.has(C)){let D=r.rhs.symbolToIndices.get(C)?.[0];D!==void 0&&r.lhs.forEach((P,j)=>{if($.inputIndices.includes(j)){let se=P.symbolToIndices.get(C);if(se===void 0)throw new Error("Invalid symbol error");se.forEach(fe=>{d.push(`${a[j].indicesSet(`input${j}Indices`,fe,s.indicesGet("outputIndices",D))}`)})}})}else r.lhs.forEach((D,P)=>{if($.inputIndices.includes(P)){let j=D.symbolToIndices.get(C);if(j===void 0)throw new Error("Invalid symbol error");j.forEach(se=>{m.push(`${a[P].indicesSet(`input${P}Indices`,se,`${C}`)}`)}),_.push(`prod *= ${a[P].getByIndices(`input${P}Indices`)};`)}}),y.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${Es(C)}; ${C}++) {`),x.push("}")});let T=w?[...d,`let sum = ${a.map(($,C)=>$.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...d,h,...y,...m,p,..._,f,...x];return`
            ${l.registerUniforms(o.map($=>({name:`${Es($)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map(($,C)=>`var input${C}Indices: ${a[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));l.push({type:12,data:n});let d=e.map((p,h)=>[...I(p)]).reduce((p,h)=>p.concat(h),l);return d.push(...I(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}},getShaderSource:u}},ld=(e,t)=>{let r=new od(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(ud(a,e.inputs[0].dataType,r,i))},dd=e=>{let t=e.equation.replace(/\s+/g,"");return g({equation:t})}}),pd,ks,cd,hd,fd,xf=S(()=>{Ee(),$e(),pe(),pd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ks=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},cd=(e,t)=>e.length>t.length?ks(e,t):ks(t,e),hd=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=cd(t,r),a=e[0].dataType,n=a===9||U.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=n||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(U.size(i)/o),l=p=>{let h=O("input",a,t.length,s),f=ae("output",a,i.length,o),m;if(a===9){let y=(x,_,w="")=>`
          let outputIndices${_} = ${f.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${h.broadcastedIndicesToOffset(`outputIndices${_}`,f)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${x}[${_}] = ${w}(${h.getByOffset(`index${_}`)}[component${_}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,f)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...I(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},fd=e=>{pd(e.inputs),e.compute(hd(e.inputs),{inputs:[0]})}}),md,gd,Sf=S(()=>{Ee(),$e(),pe(),ls(),md=e=>{let t=e[0].dataType,r=U.size(e[0].dims),i=U.size(e[1].dims),a=i%4===0,n=s=>{let o=O("x",t,[1],4),u=O("bias",t,[1],4),l=ae("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,h=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(d).declareVariables(o,u,l)}

    ${os(z(t))}

    ${s.mainStart(k)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",us("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/k/4)}})}},gd=e=>{e.inputs.length<2||U.size(e.inputs[1].dims)===0?Xu(e):e.compute(md(e.inputs))}}),wd,yd,_d,bd,Tf=S(()=>{Ee(),$e(),v(),pe(),wd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=U.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let o=r[n],u=e[0].dataType===9?4:1,l=Math.ceil(U.size(s)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:n},...I(e[0].dims,e[1].dims,s)],p=h=>{let f=O("data",e[0].dataType,e[0].dims.length,u),m=O("inputIndices",e[1].dataType,e[1].dims.length),y=ae("output",e[0].dataType,s.length,u),x=w=>{let T=i.length,$=`var indicesIndices${w}  = ${m.type.indices}(0);`;for(let C=0;C<T;C++)$+=`${T>1?`indicesIndices${w}[${C}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${C}]`:`outputIndices${w}`};`;$+=`
          var idx${w} = ${m.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${f.type.indices};
        `;for(let C=0,D=0;C<a;C++)C===n?($+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = u32(idx${w});`,D+=T):($+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${D}]`:`outputIndices${w}`};`,D++);return $},_;if(e[0].dataType===9){let w=(T,$,C="")=>`
          let outputIndices${$} = ${y.offsetToIndices(`outputOffset + ${$}u`)};
          ${x($)};
          let offset${$} = ${f.indicesToOffset(`dataIndices${$}`)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${T}[${$}] = ${C}(${f.getByOffset(`index${$}`)}[component${$}]);
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
      ${x("")};
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},_d=e=>g({axis:e.axis}),bd=(e,t)=>{let r=e.inputs;wd(r),e.compute(yd(e.inputs,t))}}),vd,$d,xd,Ef=S(()=>{Ee(),$e(),pe(),vd=(e,t,r,i,a,n,s,o,u)=>{let l=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],d=[n];l.push(...I(t.dims,d));let p=h=>{let f=O("indices_data",t.dataType,t.dims.length),m=ae("input_slice_offsets_data",12,1,1),y=[f,m],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(...y)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},$d=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],o=U.sizeToDimension(n,n.length-1),u=U.sizeFromDimension(i,t.batchDims+s),l=U.sizeToDimension(i,t.batchDims),d=U.sizeFromDimension(i,t.batchDims),p=o/l,h=new Array(s),f=u;for(let $=0;$<s;++$)h[s-1-$]=f,f*=i[t.batchDims+s-1-$];let m=vd(e,r[1],h,t.batchDims,i,o,p,d,s),y=t.batchDims+s;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(y)),_=U.size(x),w=[{type:12,data:_},{type:12,data:u},...I(r[0].dims,m.dims,x)],T=$=>{let C=O("data",r[0].dataType,r[0].dims.length),D=O("slice_offsets",12,m.dims.length),P=ae("output",r[0].dataType,x.length);return`
          ${$.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,D,P)}
            ${$.mainStart()}
            ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],m]})},xd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Sd,Td,Ed,kd,kf=S(()=>{Ee(),$e(),v(),pe(),Sd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=U.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/i)===n.dims[u]:o===n.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((o,u)=>o===n.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Td=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=U.normalizeAxis(t.gatherAxis,a),s=U.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(n,1,...i);let u=U.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...I(...e.map((f,m)=>f.dims),o)],h=f=>{let m=O("data",e[0].dataType,e[0].dims.length),y=O("inputIndices",e[1].dataType,e[1].dims.length),x=O("scales",e[2].dataType,e[2].dims.length),_=e.length>3?O("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=ae("output",l,o.length),T=[m,y,x];_&&T.push(_);let $=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms($).declareVariables(...T,w)}
        ${f.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${z(l)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},Ed=(e,t)=>{let r=e.inputs;Sd(r,t),e.compute(Td(e.inputs,t))},kd=e=>g({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Id,Cd,zd,Od,If=S(()=>{Ee(),$e(),v(),pe(),Id=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cd=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,o=U.normalizeAxis(t.axis,a),u=r[o],l=n.slice(0),d=U.size(l),p=O("input",i,a),h=O("indicesInput",s,n.length),f=ae("output",i,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return m.push(...I(r,n,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},zd=e=>g({axis:e.axis}),Od=(e,t)=>{let r=e.inputs;Id(r),e.compute(Cd(e.inputs,t))}}),Ad,Rd,Md,Bd,Cf=S(()=>{Ee(),$e(),pe(),Ad=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Rd=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Ki.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[a,n];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(n/u),d=Math.ceil(a/u);U.size(o);let p=[{type:12,data:l},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(p.push(...I(e[2].dims)),h.push("rank")),p.push(...I(o));let f=m=>{let y=O("a",e[0].dataType,e[0].dims),x=O("b",e[1].dataType,e[1].dims),_=null,w=[y,x];e.length===3&&(_=O("c",e[2].dataType,e[2].dims.length),w.push(_));let T=ae("output",e[0].dataType,o.length);w.push(T);let $=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],C="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${m.registerUniforms($).declareVariables(...w)}
  var<workgroup> tile_a: array<array<${y.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${u}>, ${u}>;
  ${m.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${C}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${_!=null?`let cOffset = ${_.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${_.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:f}},Md=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Bd=(e,t)=>{Ad(e.inputs),e.compute(Rd(e.inputs,t))}}),Ir,Br,Oi,Ai,Dd,Pd,Ud,Nd,Ld,Vd,Fd,qd,Wd,Gd,zf=S(()=>{Ee(),$e(),v(),pe(),[Ir,Br,Oi,Ai]=[0,1,2,3],Dd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Pd=`
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
`,Ud=e=>`
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
`,Nd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ld=e=>`
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
`,Vd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ir}] = batch;
     indices[${Br}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Oi}] = u32(r);
            indices[${Ai}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Oi}] = u32(clamp(r, 0, H - 1));
          indices[${Ai}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Oi}] = gs_reflect(r, border[1], border[3]);
          indices[${Ai}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Fd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ir}], indices[${Br}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ir}], indices[${Br}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ir}], indices[${Br}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ir}], indices[${Br}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ir}], indices[${Br}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ir}], indices[${Br}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,qd=(e,t)=>{let r=O("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=O("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ir,Br,Oi,Ai]=[0,3,1,2]);let s=ae("output",e[0].dataType,n.length),o=r.type.value,u=U.size(n),l=[{type:12,data:u},...I(e[0].dims,i,n)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Pd}
  ${Ud(o)}
  ${Nd(t)}
  ${Ld(t)}
  ${Vd(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Oi}]);
      let W_in = i32(uniforms.x_shape[${Ai}]);

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

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ir}], indices[${Oi}], indices[${Ai}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Fd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=U.size(n);return{outputs:[{dims:n,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:d}},Wd=(e,t)=>{Dd(e.inputs),e.compute(qd(e.inputs,t))},Gd=e=>g({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Nt,jd,Hd,Is,Kd,Ja,Zd,Xd=S(()=>{Ee(),$e(),v(),Yi(),ns(),pe(),Be(),Nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,jd=(e,t)=>{let r=e[0],i=Nt(e,1),a=Nt(e,2),n=Nt(e,3),s=Nt(e,4),o=Nt(e,5),u=Nt(e,6),l=Nt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=r.dims[0],p=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],f=p,m=0,y=0,x=Math.floor(h/t.numHeads);if(u&&l&&U.size(u.dims)&&U.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&U.size(u.dims)||l&&U.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i&&U.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,f=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(n&&U.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=m+f,T=0;if(s&&U.size(s.dims)>0){T=8;let P=s.dims;throw P.length===1?P[0]===d?T=1:P[0]===3*d+2&&(T=3):P.length===2&&P[0]===d&&P[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let $=!1,C=h;if(a&&U.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=a.dims[1]*a.dims[3],$=!0}}let D=!1;if(s&&U.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&U.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:w,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:C,headSize:x,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:D,passPastInKv:$,qkvFormat:_}},Hd=e=>g({...e}),Is=g({perm:[0,2,1,3]}),Kd=(e,t,r,i,a,n,s)=>{let o=[i,a,n],u=U.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:n}],d=p=>{let h=ae("qkv_with_bias",t.dataType,o),f=O("qkv",t.dataType,o),m=O("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(f,m,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,r],outputs:[-1]})[0]},Ja=(e,t,r,i,a,n,s,o)=>{let u=n;if(s&&U.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Kd(e,n,s,t,i,r*a,o),u=u.reshape([t,i,r,a]),r===1||i===1?u:e.compute(ct(u,Is.perm),{inputs:[u],outputs:[-1]})[0]}else return n.dims.length===3&&(u=n.reshape([t,i,r,a])),r===1||i===1?u:e.compute(ct(u,Is.perm),{inputs:[u],outputs:[-1]})[0]},Zd=(e,t)=>{let r=jd(e.inputs,t),i=e.inputs[0],a=Nt(e.inputs,1),n=Nt(e.inputs,2),s=Nt(e.inputs,3),o=Nt(e.inputs,4),u=Nt(e.inputs,5),l=Nt(e.inputs,6),d=Nt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let p=a&&n&&a.dims.length===4&&n.dims.length===4,h=Ja(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(p)return Ka(e,h,a,n,o,void 0,l,d,u,r);if(!a||!n)throw new Error("key and value must be provided");let f=Ja(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),m=Ja(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Ka(e,h,f,m,o,void 0,l,d,u,r)}}),Qd,Yd,Jd,ep,Cs,tp,rp,ip=S(()=>{Ee(),$e(),v(),pe(),Qd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Yd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),g({numOutputs:i,axis:t.axis,splitSizes:r})},Jd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${L("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ep=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Cs=(e,t)=>{let r=e[0].dims,i=U.size(r),a=e[0].dataType,n=U.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=O("input",a,r.length),u=new Array(t.numOutputs),l=[],d=[],p=0,h=[{type:12,data:i}];for(let m=0;m<t.numOutputs;m++){p+=t.splitSizes[m],u[m]=p;let y=r.slice();y[n]=t.splitSizes[m],d.push(y),s[m]=ae(`output${m}`,a,y.length),l.push({dims:d[m],dataType:e[0].dataType})}h.push({type:12,data:u},...I(r,...d));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Jd(u.length)}
  ${ep(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${L("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},tp=(e,t)=>{Qd(e.inputs);let r=e.inputs.length===1?t:Yd(e.inputs,t);e.compute(Cs(e.inputs,r),{inputs:[0]})},rp=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return g({axis:t,numOutputs:i,splitSizes:r})}}),ap,Bn,np,sp=S(()=>{Ee(),$e(),v(),pe(),ap=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!U.areEqual(i.dims,[])&&!U.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!U.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],d=a.dims[0],p=U.sizeFromDimension(r.dims,1)/l,h=o===0?a.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(l!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},Bn=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],o=U.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=a===0?d*2:l/i,h=new Array(s,u,l/p,p-d),f=U.computeStrides(h),m=[{type:1,data:n},{type:12,data:h},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...I(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let _=O("input",e[0].dataType,e[0].dims.length),w=O("position_ids",e[1].dataType,e[1].dims.length),T=O("cos_cache",e[2].dataType,e[2].dims.length),$=O("sin_cache",e[3].dataType,e[3].dims.length),C=ae("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${x.declareVariables(_,w,T,$,C)}

        ${x.mainStart(k)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",ae("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${_.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:g({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(h)/k)},programUniforms:m})}},np=(e,t)=>{ap(e.inputs,t),e.compute(Bn(e.inputs,t))}}),op,up,zs,lp,dp,Of=S(()=>{v(),Ee(),ns(),Xd(),ip(),Be(),sp(),pe(),op=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=r.dims[0],u=r.dims[1],l=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],d=u,p=0,h=!i||i.dims.length===0,f=Math.floor(h?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);h&&(l=f*t.numHeads);let m=n&&n.dims.length!==0,y=s&&s.dims.length!==0;if(m&&n.dims.length===4&&n.dims[0]===o&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===f)throw new Error("BSNH pastKey/pastValue is not supported");if(m&&y){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=n.dims[2]}else if(m||y)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');d=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let _=0,w=!1,T=t.kvNumHeads?f*t.kvNumHeads:l;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(d!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(d!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],w=!0}}let $=e.length>4?e[5]:void 0;if($){if($.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=$.dims.reduce((D,P)=>D*P,1);if(C!==o)throw new Error(`seqlens_k must have batch_size (${o}) elements, got ${C}.`);for(let D=0;D<$.dims.length;D++)if($.dims[D]!==1&&$.dims[D]!==o)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${o}), got dims[${D}] = ${$.dims[D]}.`)}return{batchSize:o,sequenceLength:u,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:T,headSize:f,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:w,qkvFormat:x}},up=g({perm:[0,2,1,3]}),zs=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(ct(i,up.perm),{inputs:[i],outputs:[-1]})[0]),i},lp=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let p=O("seq_lens",r.dataType,r.dims),h=O("total_seq_lens",i.dataType,i.dims),f=ae("pos_ids",a,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(p,h,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},dp=(e,t)=>{let r=op(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=g({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[h,f,m]=!a&&!n?e.compute(Cs([i],p),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],y,x;if(t.doRotary){let $=e.compute(lp(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],C=e.inputs[7],D=e.inputs[8],P=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),j=[h,$,C,D],se=[-1];y=e.compute(Bn(j,P),{inputs:j,outputs:se})[0],j.splice(0,1,f);let fe=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(Bn(j,fe),{inputs:j,outputs:se})[0]}let _=Ja(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:h,void 0,0),w=zs(e,t.doRotary?x:f,r),T=zs(e,m,r);Ka(e,_,w,T,void 0,void 0,s,o,void 0,r,u,l)}}),Os,pp,cp,hp,Af=S(()=>{Ee(),$e(),Be(),pe(),Os=(e,t,r,i,a,n,s,o)=>{let u=R(n),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=a*s,h=64;p===1&&(h=256);let f=[a,s,n/u],m=[a,s,2],y=["rank","type","type"],x=[];x.push(...I(f,m));let _=w=>{let T=O("x",t.dataType,3,u),$=O("scale",r.dataType,r.dims),C=O("bias",i.dataType,i.dims),D=ae("output",1,3,2),P=[T,$,C,D];return`
  var<workgroup> workgroup_shared : array<${d}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...P)}
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
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${G("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${G("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:p},programUniforms:x}),getShaderSource:_},{inputs:[t,r,i],outputs:[-1]})[0]},pp=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],o=i[1],u=U.sizeFromDimension(i,n),l=R(u),d=U.size(a)/l,p=Os(e,t[0],t[1],t[2],s,u,o,r.epsilon),h=[s,o,u/l],f=[s,o],m=["type","none"],y=x=>{let _=O("x",t[0].dataType,h.length,l),w=O("scale_shift",1,f.length,2),T=ae("output",t[0].dataType,h.length,l),$=[_,w,T];return`
  ${x.registerUniform("output_size","u32").declareVariables(...$)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...I(h,f,h)]}),getShaderSource:y},{inputs:[t[0],p]})},cp=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],o=U.sizeFromDimension(i,1)/s,u=R(s),l=U.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],h=!1,f=[0,i.length-1];for(let _=0;_<i.length-2;_++)h=h||i[_+1]!==1,f.push(_+1);h=h&&i[i.length-1]!==1;let m=h?e.compute(ct(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(_,w)=>i[f[w]])),y=Os(e,m,t[1],t[2],n,o,s,r.epsilon),x=_=>{let w=B(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,$=P=>{let j=P===0?"x":"y",se=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${se}(scale.${j}))`;case 2:return`vec2<${w}>(${se}(scale[0].${j}, scale[1].${j}))`;case 4:return`vec4<${w}>(${se}(scale[0].${j}, scale[1].${j}, scale[2].${j}, scale[3].${j}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=O("input",t[0].dataType,t[0].dims,u),D=ae("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${D.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${$(0)}, ${$(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:x},{inputs:[t[0],y]})},hp=(e,t)=>{t.format==="NHWC"?cp(e,e.inputs,t):pp(e,e.inputs,t)}}),fp,mp,gp,Rf=S(()=>{Ee(),$e(),pe(),fp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},mp=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],o=a,u=U.normalizeAxis(t.axis,a.length),l=U.sizeToDimension(a,u),d=U.sizeFromDimension(a,u),p=U.size(n.dims),h=s?U.size(s.dims):0;if(p!==d||s&&h!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let f=[];for(let C=0;C<a.length;++C)C<u?f.push(a[C]):f.push(1);let m=R(d),y=["type","type"],x=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];s&&y.push("type");let _=r>1,w=r>2,T=C=>{let D=B(e[0].dataType),P=[O("x",e[0].dataType,e[0].dims,m),O("scale",n.dataType,n.dims,m)];s&&P.push(O("bias",s.dataType,s.dims,m)),P.push(ae("output",e[0].dataType,o,m)),_&&P.push(ae("mean_data_output",1,f)),w&&P.push(ae("inv_std_output",1,f));let j=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(j).declareVariables(...P)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${H("f32",m)};
    var mean_square_vector = ${H("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ee(D,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${G("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${G("mean_square_vector",m)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ee(D,m,"x[j + offset]")};
      let f32scale = ${ee(D,m,"scale[j]")};
      output[j + offset] = ${P[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ee(D,m,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},$=[{dims:o,dataType:e[0].dataType}];return _&&$.push({dims:f,dataType:1}),w&&$.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:x}),getShaderSource:T}},gp=(e,t)=>{fp(e.inputs),e.compute(mp(e.inputs,t,e.outputCount))}}),wp,yp,Mf=S(()=>{$e(),hs(),ws(),wp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},yp=e=>{wp(e.inputs);let t=Sr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(cs(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=U.size(e.inputs[0].dims.slice(0,-2)),s=U.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,n,i]),u=e.inputs[1].reshape([1,i,r]),l=[1,n,r],d=[o,u];e.compute(On(d,{activation:""},t,l),{inputs:d})}else e.compute(On(e.inputs,{activation:""},t))}}}),_p,bp,vp,$p,xp,Bf=S(()=>{Ee(),$e(),v(),pe(),_p=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!U.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(U.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(U.size(u)!==l)throw new Error("zeroPoints input size error.")}},bp=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),u=U.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=R(t.k),h=R(l),f=R(s),m=o.concat([a,s]),y=a>1&&s/f%2===0?2:1,x=U.size(m)/f/y,_=64,w=[],T=[u,a,n/p],$=U.convertShape(e[1].dims).slice();$.splice(-1,1,l/h),w.push(...I(T)),w.push(...I($)),w.push(...I(e[2].dims)),e.length===4&&w.push(...I(U.convertShape(e[3].dims)));let C=[u,a,s/f];w.push(...I(C));let D=P=>{let j=T.length,se=O("a",e[0].dataType,j,p),fe=O("b",12,$.length,h),De=O("scales",e[2].dataType,e[2].dims.length),xe=[se,fe,De],ke=e.length===4?O("zero_points",12,e[3].dims.length):void 0;ke&&xe.push(ke);let He=C.length,le=ae("output",e[0].dataType,He,f),_e=B(e[0].dataType),Ae=(()=>{switch(p){case 1:return`array<${_e}, 8>`;case 2:return`mat4x2<${_e}>`;case 4:return`mat2x4<${_e}>`;default:throw new Error(`${p}-component is not supported.`)}})(),Ue=Math.floor(32/t.bits),Oe=Math.floor(Ue/8),Le=()=>{let Se="";for(let ye=0;ye<Oe;ye++){let At=ye*t.bits*4,Kt=At+t.bits;Se+=`
          // reuse a data (pass ${ye})
            var input_offset${ye>0?ye:""} = ${ye===0?se.indicesToOffset(`${se.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ye>0?ye:""}: ${Ae};
            for (var j${ye>0?ye:""}: u32 = 0; j${ye>0?ye:""} < ${8/p}; j${ye>0?ye:""}++) {
              a_data${ye>0?ye:""}[j${ye>0?ye:""}] = ${se.getByOffset(`input_offset${ye>0?ye:""}`)};
              input_offset${ye>0?ye:""}++;
            }
          `;for(let _t=0;_t<f*y;_t++)Se+=`
            b_value = ${h===1?`b${_t}_data`:`b${_t}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${ye*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${At}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Kt}u) & b_mask);`}
            b_quantized_values = ${Ae}(${Array.from({length:4},(Zt,tt)=>`${_e}(b_value_lower[${tt}]), ${_e}(b_value_upper[${tt}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Ae}(${Array.from({length:8},(Zt,tt)=>`(b_quantized_values[${tt}] - ${ke?`zero_point${_t}`:"zero_point"}) * scale${_t}`).join(", ")});`:`(b_quantized_values - ${Ae}(${Array(8).fill(`${ke?`zero_point${_t}`:"zero_point"}`).join(",")})) * scale${_t};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(_t/f)}]${f>1?`[${_t%f}]`:""} += ${Array.from({length:8/p},(Zt,tt)=>`${p===1?`a_data${ye>0?ye:""}[${tt}] * b_dequantized_values[${tt}]`:`dot(a_data${ye>0?ye:""}[${tt}], b_dequantized_values[${tt}])`}`).join(" + ")};
          `}return Se},re=()=>{let Se=`
            var col_index = col * ${f};
            ${ke?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${_e}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let ye=0;ye<f*y;ye++)Se+=`
            let scale${ye} = ${De.getByOffset("col_index * nBlocksPerCol + block")};
            ${ke?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${ke.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ye} = ${_e}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Se},ze=()=>{let Se=`col_index = col * ${f};`;for(let ye=0;ye<f*y;ye++)Se+=`
            let b${ye}_data = ${fe.getByIndices(`${fe.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Se+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Ae};
            var b_dequantized_values: ${Ae};`,Se};return`
        var<workgroup> workgroup_shared: array<${le.type.value}, ${y*_}>;
        ${P.declareVariables(...xe,le)}
        ${P.mainStart([_,1,1])}
          let output_indices = ${le.offsetToIndices(`(global_idx / ${_}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${re()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${ze()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${Le()}
                word_offset += ${Ue/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${le.setByIndices(`${le.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${f};${y};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x},programUniforms:w}),getShaderSource:D}},vp=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),u=U.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=R(t.k),h=R(l),f=o.concat([a,s]),m=128,y=s%8===0?8:s%4===0?4:1,x=m/y,_=Math.floor(32/t.bits),w=x*h*_,T=w/p,$=w/t.blockSize,C=U.size(f)/y,D=[],P=[u,a,n/p],j=U.convertShape(e[1].dims).slice();j.splice(-1,1,l/h),D.push(...I(P)),D.push(...I(j)),D.push(...I(e[2].dims)),e.length===4&&D.push(...I(U.convertShape(e[3].dims)));let se=[u,a,s];D.push(...I(se));let fe=De=>{let xe=P.length,ke=O("a",e[0].dataType,xe,p),He=O("b",12,j.length,h),le=O("scales",e[2].dataType,e[2].dims.length),_e=[ke,He,le],Ae=e.length===4?O("zero_points",12,e[3].dims.length):void 0;Ae&&_e.push(Ae);let Ue=se.length,Oe=ae("output",e[0].dataType,Ue),Le=B(e[0].dataType),re=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ke.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Oe.type.value}, ${x}>, ${y}>;
        ${De.declareVariables(..._e,Oe)}
        ${De.mainStart([x,y,1])}
          let output_indices = ${Oe.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${$} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ke.getByIndices(`${ke.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ke.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${$} + local_id.x;
            ${Ae?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Le}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Le}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${le.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${He.getByIndices(`${He.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let ze=Math.floor(_/8),Se="";for(let ye=0;ye<ze;ye++){let At=ye*t.bits*4,Kt=At+t.bits;Se+=`
              ${re()}
              {${t.bits===2?`
                let half_word = b_value >> ${ye*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${At}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Kt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Le}>(${Array.from({length:4},(_t,Zt)=>`${Le}(b_value_lower[${Zt}]), ${Le}(b_value_upper[${Zt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Le}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(_t,Zt)=>`${`dot(a_data${Zt}, b_dequantized_values[${Zt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Se})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${Oe.type.value} = ${Oe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Oe.setByIndices(`${Oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${x};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:C},programUniforms:D}),getShaderSource:fe}},$p=(e,t)=>{_p(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(vp(e.inputs,t)):e.compute(bp(e.inputs,t))},xp=e=>g(e)}),Sp,Tp,Ep,kp,Ip,Cp,zp,Op,Ap,Df=S(()=>{Ee(),$e(),pe(),Sp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Tp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${L("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${L("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Ep=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${L("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${L("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},kp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${L("uniforms.x_shape",a,t)})) {
                  k = i32(${L("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ip=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${L("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${L("uniforms.x_shape",a,t)})) {
                  k -= i32(${L("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Cp=(e,t,r)=>{switch(r.mode){case 0:return Tp(e,t,r.pads.length);case 1:return Ep(e,t,r.pads.length);case 2:return kp(e,t,r.pads.length);case 3:return Ip(e,t,r.pads.length);default:throw new Error("Invalid mode")}},zp=(e,t)=>{let r=U.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=U.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...I(e[0].dims,r));let o=["rank"],u=l=>{let d=ae("output",e[0].dataType,r.length),p=O("x",e[0].dataType,i.length),h=p.type.value,f=Cp(d,i.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?h:"f32"}),`
            ${l.registerUniforms(m).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(r)/64)},programUniforms:n}),getShaderSource:u}},Op=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)n[Number(o[u])]=Number(r[u]),n[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>n[Number(u)]=Number(o));let s=[];return n.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},Ap=(e,t)=>{Sp(e.inputs);let r=Op(e.inputs,t);e.compute(zp(e.inputs,r),{inputs:[0]})}}),en,As,Rs,Ms,Bs,Rp,Mp,Ds,Ps,Bp,Dp,Us,Pp,Up,Ns,Np,Lp,Vp,Fp,Pf=S(()=>{gt(),Ee(),$e(),pe(),en=e=>{if(ne.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},As=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=n?t.dilations.slice():[],l=t.pads.slice();jr.adjustPoolAttributes(r,a,s,o,u,l);let d=jr.computePoolOutputShape(r,a,o,u,s,l,t.autoPad),p=Object.assign({},t);n?Object.assign(p,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let h=d.slice();return h.push(h.splice(1,1)[0]),[p,i?h:d]},Rs=(e,t)=>{let r=t.format==="NHWC",i=U.size(e),a=U.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);n.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];h=!!(y+x),n.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,p,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=U.computeStrides(t.kernelShape);n.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[n,s,!!u,!1,!1]}},Ms=(e,t,r,i,a,n,s,o,u,l,d,p)=>{let h=a.format==="NHWC",f=t.type.value,m=ae("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",_="",w=r-(h?2:1);if(d?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let T=r-(h?3:2);p?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${x}
              ${y}
              ${_}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${L("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${L("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${L("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${L("uniforms.pads","j - 2u",x)};
                  ${_}
              }
              ${s}

              output[global_idx] = value;
            }`}},Bs=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Rp=e=>`${Bs(e)};${e.countIncludePad}`,Mp=e=>`${Bs(e)};${e.storageOrder};${e.dilations}`,Ds=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ps=(e,t,r,i)=>{let[a,n]=As(t,i,r),s=O("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,h,f,m]=Rs(n,a);d.push(...I(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(n)/64)},programUniforms:d}),getShaderSource:x=>Ms(x,s,t.dims.length,n.length,a,u,l,0,p,h,f,m)}},Bp=e=>{let t=e.count_include_pad!==0,r=Ds(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Rp(i)}},Dp=(e,t)=>{en(e.inputs),e.compute(Ps("AveragePool",e.inputs[0],!1,t))},Us={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Pp=e=>{let t=e.format;return{format:t,...Us,cacheKey:t}},Up=(e,t)=>{en(e.inputs),e.compute(Ps("GlobalAveragePool",e.inputs[0],!0,t))},Ns=(e,t,r,i)=>{let[a,n]=As(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=O("x",t.dataType,t.dims.length),l=["rank"],[d,p,h,f,m]=Rs(n,a);return d.push(...I(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(n)/64)},programUniforms:d}),getShaderSource:y=>Ms(y,u,t.dims.length,n.length,a,s,o,t.dataType===10?-65504:-1e5,p,h,f,m)}},Np=(e,t)=>{en(e.inputs),e.compute(Ns("MaxPool",e.inputs[0],!1,t))},Lp=e=>{let t=e.storage_order,r=e.dilations,i=Ds(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Mp(a)}},Vp=e=>{let t=e.format;return{format:t,...Us,cacheKey:t}},Fp=(e,t)=>{en(e.inputs),e.compute(Ns("GlobalMaxPool",e.inputs[0],!0,t))}}),qp,Wp,Gp,jp,Uf=S(()=>{Ee(),$e(),v(),pe(),qp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Wp=(e,t)=>{let r=U.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,o=U.size(n),u=i===3||i===2,l=u?[Math.ceil(U.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(U.size(p.dims)/4)]:p.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,m=f===!1&&d.length===1,y=R(o),x=f&&(!u||y===4),_=x?y:1,w=x&&!u?y:1,T=O("input",u?12:i,l.length,w),$=O("scale",s,d.length),C=p?O("zero_point",u?12:i,h.length):void 0,D=ae("output",s,n.length,_),P=[T,$];C&&P.push(C);let j=[l,d];p&&j.push(h);let se=[{type:12,data:o/_},{type:12,data:r},{type:12,data:t.blockSize},...I(...j,n)],fe=De=>{let xe=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${De.registerUniforms(xe).declareVariables(...P,D)}
      ${De.mainStart()}
          ${De.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${D.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${$.getByOffset("0")}`:m?`
            let scale_index = ${D.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?f?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:m?u?`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${D.setByOffset("global_idx",`${D.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:fe,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:se})}},Gp=(e,t)=>{qp(e.inputs,t),e.compute(Wp(e.inputs,t))},jp=e=>g({axis:e.axis,blockSize:e.blockSize})}),Hp,Kp,Zp,Nf=S(()=>{gt(),Ee(),pe(),Hp=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Kp=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...I(n)],u=l=>{let d=ae("output",i,n.length),p=d.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Zp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ne.webgpu.validateInputContent&&Hp(t,r,i),e.compute(Kp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Xp,Qp,Yp,Jp,Lf=S(()=>{Ee(),$e(),v(),pe(),Xp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Qp=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(U.sizeToDimension(i,i.length-1)/n),o=i[i.length-1],u=U.sizeFromDimension(r,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...I(e[1].dims,e[2].dims,a)],d=p=>{let h=O("indices",e[1].dataType,e[1].dims.length),f=O("updates",e[2].dataType,e[2].dims.length,n),m=t.reduction!=="none"&&t.reduction!==""?nt("output",e[0].dataType,a.length):ae("output",e[0].dataType,a.length,n);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,f,m)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${Xp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d}},Yp=e=>g({reduction:e.reduction}),Jp=(e,t)=>{e.compute(Qp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ec,tc,rc,Ls,ic,ac,nc,sc,oc,uc,lc,dc,Vs,pc,cc,hc,fc,mc,gc,wc,Vf=S(()=>{Ee(),$e(),v(),pe(),ec=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},tc=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},rc=(e,t,r,i,a,n)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(d=>n.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ec(i,t),t.axes.length>0&&tc(i,t.axes,l).forEach((d,p)=>i[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>a.push(Number(d))),a.length!==0&&a.length!==l&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Ls=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,ic=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ls("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ls("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ac=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nc=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},sc=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},oc=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},uc=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${L("uniforms.scales","i",i)};
        var roi_low = ${L("uniforms.roi","i",a)};
        var roi_hi = ${L("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${L("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${L("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,lc=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${L("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${L("uniforms.roi","i",n)};
          var roi_hi = ${L("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${L("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${L("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,dc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${L("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Vs=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",pc=(e,t,r,i,a)=>{let[n,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Vs(e,u,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
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
    }`},cc=(e,t,r,i,a,n,s,o,u,l)=>{let d=r.length===2,[p,h]=d?[0,1]:[2,3],f=e.type.value,m=y=>{let x=y===p?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${f} = originalIdx + ${f}(i);
          if (${x} < 0 || ${x} >= ${r[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${x} = max(0, min(${x}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${x})`)};
          data[i + 1] = ${y===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(p)};
    ${m(h)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
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
    `},hc=(e,t,r,i,a)=>{let[n,s,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Vs(e,l,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${s}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
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
    }`},fc=(e,t,r,i,a,n)=>{let s=e.dims,o=nc(n,t.axes,s.length),u=sc(s,i,a,t.axes),l=i.slice();i.length===0&&(l=s.map((w,T)=>w===0?1:u[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=oc(s,l,t)));let d=ae("output",e.dataType,u.length),p=O("input",e.dataType,s.length),h=U.size(u),f=s.length===u.length&&s.every((w,T)=>w===u[T]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=p.type.value,_=w=>`
      ${f?"":`
      ${ic(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${dc(p,s)};
              ${ac(t.nearestMode,r,x)};
              ${lc(p,d,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${uc(d,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${pc(p,d,s,m,y)}`;if(s.length===3||s.length===5)return`${hc(p,d,s,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${cc(p,d,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${f}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:o},...I(s,u)]})}},mc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},gc=(e,t)=>{let r=[],i=[],a=[],n=mc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");rc(e.inputs,t,n,r,i,a),e.compute(fc(e.inputs[0],t,n,r,i,a),{inputs:[0]})},wc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return g({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),yc,_c,bc,Ff=S(()=>{Ee(),$e(),pe(),yc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},_c=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=U.size(n),o=n,u=s,l=n.slice(-1)[0],d=i?n.slice(0,-1).concat(1):[],p=!a&&e.length>3,h=e.length>4,f=i&&r>1,m=i&&r>2,y=r>3,x=64,_=R(l),w=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],T=C=>{let D=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],P=[O("x",e[0].dataType,e[0].dims,_),O("skip",e[1].dataType,e[1].dims,_),O("gamma",e[2].dataType,e[2].dims,_)];p&&P.push(O("beta",e[3].dataType,e[3].dims,_)),h&&P.push(O("bias",e[4].dataType,e[4].dims,_)),P.push(ae("output",e[0].dataType,o,_)),f&&P.push(ae("mean_output",1,d)),m&&P.push(ae("inv_std_output",1,d)),y&&P.push(ae("input_skip_bias_sum",e[0].dataType,o,_));let j=B(e[0].dataType),se=B(1,_);return`

      ${C.registerUniforms(D).declareVariables(...P)}
      var<workgroup> sum_shared : array<${se}, ${x}>;
      var<workgroup> sum_squared_shared : array<${se}, ${x}>;

      ${C.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":j+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ee(j,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
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
        let mean = ${G("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${G("square_sum",_)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${j}(mean)`}) *
            ${j}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},$=[{dims:o,dataType:e[0].dataType}];return r>1&&$.push({dims:d,dataType:1}),r>2&&$.push({dims:d,dataType:1}),r>3&&$.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${f};${m};${y}`,inputDependencies:e.map((C,D)=>"type")},getShaderSource:T,getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:w})}},bc=(e,t)=>{yc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(_c(e.inputs,t,e.outputCount,!1),{outputs:r})}}),vc,tn,$c,Fs,xc,Sc,Tc,Ec,qf=S(()=>{Ee(),$e(),v(),pe(),vc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},tn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},$c=(e,t)=>{if(e.length>1){let r=tn(e,1),i=tn(e,2),a=tn(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),g({starts:r,ends:i,axes:a})}else return t},Fs=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},xc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${L("uniforms.input_shape","i",r.length)};
            let steps_i = ${L("uniforms.steps","i",r.length)};
            let signs_i = ${L("uniforms.signs","i",r.length)};
            let starts_i = ${L("uniforms.starts","i",r.length)};
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
      }`,Sc=(e,t)=>{let r=e[0].dims,i=U.size(r),a=t.axes.length>0?U.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=tn(e,4);n.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((_,w)=>Fs(_,w,r,a,n)),o=t.ends.map((_,w)=>Fs(_,w,r,a,n));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let _=0;_<r.length;++_)a.includes(_)||(s.splice(_,0,0),o.splice(_,0,r[_]),n.splice(_,0,1));let u=n.map(_=>Math.sign(_));n.forEach((_,w,T)=>{if(_<0){let $=(o[w]-s[w])/_,C=s[w],D=C+$*n[w];s[w]=D,o[w]=C,T[w]=-_}});let l=r.slice(0);a.forEach((_,w)=>{l[_]=Math.ceil((o[_]-s[_])/n[_])});let d={dims:l,dataType:e[0].dataType},p=ae("output",e[0].dataType,l.length),h=O("input",e[0].dataType,e[0].dims.length),f=U.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:f},{type:12,data:s},{type:6,data:u},{type:12,data:n},...I(e[0].dims,l)],x=_=>`
      ${_.registerUniforms(m).declareVariables(h,p)}
        ${xc(h,p,r)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Tc=(e,t)=>{vc(e.inputs,t);let r=$c(e.inputs,t);e.compute(Sc(e.inputs,r),{inputs:[0]})},Ec=e=>{let t=e.starts,r=e.ends,i=e.axes;return g({starts:t,ends:r,axes:i})}}),kc,Ic,Cc,zc,Wf=S(()=>{Ee(),$e(),v(),Be(),pe(),kc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ic=(e,t)=>{let r=e.inputs[0],i=r.dims,a=U.size(i),n=i.length,s=U.normalizeAxis(t.axis,n),o=s<i.length-1,u,l=[];o?(l=Array.from({length:n},(P,j)=>j),l[s]=n-1,l[n-1]=s,u=e.compute(ct(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let d=u.dims,p=d[n-1],h=a/p,f=R(p),m=p/f,y=64;h===1&&(y=256);let x=(P,j)=>j===4?`max(max(${P}.x, ${P}.y), max(${P}.z, ${P}.w))`:j===2?`max(${P}.x, ${P}.y)`:j===3?`max(max(${P}.x, ${P}.y), ${P}.z)`:P,_=O("x",u.dataType,u.dims,f),w=ae("result",u.dataType,u.dims,f),T=_.type.value,$=B(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=P=>`
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
      ${P.registerUniform("packedCols","i32").declareVariables(_,w)}
      ${P.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
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
          rowMaxShared = ${T}(${x("threadShared[0]",f)});
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
          rowSumShared = ${T}(${G("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,D=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:C},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ct(D,l),{inputs:[D]})},Cc=(e,t)=>{kc(e.inputs),Ic(e,t)},zc=e=>g({axis:e.axis})}),qs,Oc,Ac,Rc,Mc,Gf=S(()=>{Ee(),$e(),pe(),qs=e=>Array.from(e.getBigInt64Array(),Number),Oc=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(qs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ac=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Rc=(e,t)=>{let r=e[0].dims,i=t??qs(e[1]),a=Ac(r,i),n=U.size(a),s=e[0].dataType,o=O("input",s,r.length),u=ae("output",s,a.length),l=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...I(e[0].dims,a)]}),getShaderSource:l}},Mc=e=>{Oc(e.inputs),e.compute(Rc(e.inputs),{inputs:[0]})}}),Bc,Dc,Pc,jf=S(()=>{Ee(),$e(),pe(),Bc=(e,t,r,i,a)=>{let n=ae("output_data",a,r.length,4),s=O("a_data",t[1].dataType,t[1].dims.length,4),o=O("b_data",t[2].dataType,t[2].dims.length,4),u=O("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,h,f)=>`select(${h}, ${p}, ${f})`;if(!i)l=n.setByOffset("global_idx",d(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,x=`b_data[index_b${f}][component_b${f}]`,_=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${n.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${h}[${f}] = ${m}(${d(y,x,_)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Dc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(U.areEqual(t,r)&&U.areEqual(r,i)),s=t,o=U.size(t);if(n){let l=Sr.calcShape(Sr.calcShape(t,r,!1),i,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=U.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Bc(l,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...I(i,t,r,s)]})}},Pc=e=>{e.compute(Dc(e.inputs))}}),Uc,Hf=S(()=>{of(),ns(),uf(),lf(),df(),pf(),cf(),wf(),_f(),bf(),vf(),$f(),xf(),Sf(),Tf(),Ef(),kf(),If(),Cf(),zf(),Of(),Af(),Rf(),Mf(),Bf(),Xd(),Df(),Pf(),Uf(),Nf(),Lf(),rs(),Vf(),sp(),Ff(),qf(),Wf(),ip(),Gf(),Be(),ls(),jf(),Uc=new Map([["Abs",[yu]],["Acos",[_u]],["Acosh",[bu]],["Add",[ol]],["ArgMax",[iu,as]],["ArgMin",[ru,as]],["Asin",[vu]],["Asinh",[$u]],["Atan",[xu]],["Atanh",[Su]],["Attention",[lu]],["AveragePool",[Dp,Bp]],["BatchNormalization",[hu]],["BiasAdd",[gu]],["BiasSplitGelu",[al]],["Cast",[Eu,Tu]],["Ceil",[Cu]],["Clip",[Iu]],["Concat",[vl,$l]],["Conv",[$s,bs]],["ConvTranspose",[Zl,jl]],["Cos",[zu]],["Cosh",[Ou]],["CumSum",[Ql,Yl]],["DepthToSpace",[rd,id]],["DequantizeLinear",[Gp,jp]],["Div",[ul]],["Einsum",[ld,dd]],["Elu",[Au,Za]],["Equal",[ll]],["Erf",[Ru]],["Exp",[Mu]],["Expand",[fd]],["FastGelu",[gd]],["Floor",[Bu]],["FusedConv",[$s,bs]],["Gather",[bd,_d]],["GatherElements",[Od,zd]],["GatherBlockQuantized",[Ed,kd]],["GatherND",[$d,xd]],["Gelu",[Du]],["Gemm",[Bd,Md]],["GlobalAveragePool",[Up,Pp]],["GlobalMaxPool",[Fp,Vp]],["Greater",[hl]],["GreaterOrEqual",[ml]],["GridSample",[Wd,Gd]],["GroupQueryAttention",[dp]],["HardSigmoid",[Wu,qu]],["InstanceNormalization",[hp]],["LayerNormalization",[gp]],["LeakyRelu",[Pu,Za]],["Less",[fl]],["LessOrEqual",[gl]],["Log",[Yu]],["MatMul",[yp]],["MatMulNBits",[$p,xp]],["MaxPool",[Np,Lp]],["Mul",[dl]],["MultiHeadAttention",[Zd,Hd]],["Neg",[Nu]],["Not",[Uu]],["Pad",[Ap]],["Pow",[pl]],["QuickGelu",[tl,Za]],["Range",[Zp]],["Reciprocal",[Lu]],["ReduceMin",[Qo]],["ReduceMean",[jo]],["ReduceMax",[Xo]],["ReduceSum",[Jo]],["ReduceProd",[Yo]],["ReduceL1",[Ho]],["ReduceL2",[Ko]],["ReduceLogSum",[tu]],["ReduceLogSumExp",[Zo]],["ReduceSumSquare",[eu]],["Relu",[Vu]],["Resize",[gc,wc]],["RotaryEmbedding",[np]],["ScatterND",[Jp,Yp]],["Sigmoid",[Fu]],["Sin",[Gu]],["Sinh",[ju]],["Slice",[Tc,Ec]],["SkipLayerNormalization",[bc]],["Split",[tp,rp]],["Sqrt",[Hu]],["Softmax",[Cc,zc]],["Sub",[cl]],["Tan",[Ku]],["Tanh",[Zu]],["ThresholdedRelu",[Qu,Za]],["Tile",[Mc]],["Transpose",[nr,ja]],["Where",[Pc]]])}),Nc,Kf=S(()=>{gt(),tr(),pe(),Nc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){dt(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){dt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&i.push(`enable ${l.extension};`)});let a=Me(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,o=r.createShaderModule({code:s,label:e.name});Ne("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Lc={};K(Lc,{WebGpuBackend:()=>Wc});var Vc,Fc,qc,Wc,Zf=S(()=>{gt(),Ee(),tr(),Hr(),es(),Hf(),Kf(),Vc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Fc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Vc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},qc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Wc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=o=>t.features.has(o)&&r.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new qc(s),this.gpuDataManager=xn(this),this.programManager=new Nc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Gi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),o=s.kernelType,u=s.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,h=t[i*2],f=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let m=Number(h-this.queryTimeBase),y=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(x=>({dims:x.dims,dataType:jt(x.dataType)})),outputsMetadata:p.map(x=>({dims:x.dims,dataType:jt(x.dataType)})),kernelId:n,kernelType:o,kernelName:u,programName:l,startTime:m,endTime:y});else{let x="";d.forEach((w,T)=>{x+=`input[${T}]: [${w.dims}] | ${jt(w.dataType)}, `});let _="";p.forEach((w,T)=>{_+=`output[${T}]: [${w.dims}] | ${jt(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${u}|${l}" ${x}${_}start time: ${m} ns, execution time: ${y-m} ns`)}Ye("GPU",`${l}::${h}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,r,i,a,n){dt(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let $=this.gpuDataManager.get(T);if(!$)throw new Error(`no GPU data for input: ${T}`);s.push($)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=r.length===0?o.map((w,T)=>T):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(d[w])||d[w]<-3||d[w]>=n)throw new Error(`Invalid output index: ${d[w]}`);if(d[w]===-3)continue;let T=d[w]===-1,$=d[w]===-2,C=T||$?a(o[w].dataType,o[w].dims):i(d[w],o[w].dataType,o[w].dims);if(p.push(C),C.data===0)continue;let D=this.gpuDataManager.get(C.data);if(!D)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(D),$){let P=this.kernelPersistentData.get(this.currentKernelId);P||(P=[],this.kernelPersistentData.set(this.currentKernelId,P)),P.push(D)}h.push(D)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return pt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let w=0,T=[];l.forEach(P=>{let j=typeof P.data=="number"?[P.data]:P.data;if(j.length===0)return;let se=P.type===10?2:4,fe,De;P.type===10?(De=j.length>4?16:j.length>2?8:j.length*se,fe=j.length>4?16:se*j.length):(De=j.length<=2?j.length*se:16,fe=16),w=Math.ceil(w/De)*De,T.push(w);let xe=P.type===10?8:4;w+=j.length>4?Math.ceil(j.length/xe)*fe:j.length*se});let $=16;w=Math.ceil(w/$)*$;let C=new ArrayBuffer(w);l.forEach((P,j)=>{let se=T[j],fe=typeof P.data=="number"?[P.data]:P.data;if(P.type===6)new Int32Array(C,se,fe.length).set(fe);else if(P.type===12)new Uint32Array(C,se,fe.length).set(fe);else if(P.type===10)new Uint16Array(C,se,fe.length).set(fe);else if(P.type===1)new Float32Array(C,se,fe.length).set(fe);else throw new Error(`Unsupported uniform type: ${jt(P.type)}`)});let D=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(D.buffer,0,C,0,w),this.gpuDataManager.release(D.id),f={offset:0,size:w,buffer:D.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,x=Fc(e,t,y),_=this.programManager.getArtifact(x);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(x,_),Ne("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let w=0;w<l.length;w++){let T=l[w],$=T.type,C=typeof T.data=="number"?1:T.data.length,[D,P]=_.uniformVariablesInfo[w];if($!==D||C!==P)throw new Error(`Uniform variable ${w} mismatch: expect type ${D} with size ${P}, got type ${$} with size ${C} in program "${_.programInfo.name}".`)}}if(Ne("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(_,s,h,m,f),pt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Uc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ne("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${n}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await qa(this,e,t);return Tr(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ne("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ne("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ne("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Gc={};K(Gc,{init:()=>Hc});var Dn,jc,Hc,Xf=S(()=>{Ee(),tr(),$e(),Fa(),Dn=class tf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(U.size(t)!==U.size(this.dims))throw new Error("Invalid new shape");return new tf(this.module,this.dataType,this.data,t)}},jc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(i*a++,n)),d=Number(e.getValue(i*a++,"*")),p=Number(e.getValue(i*a++,n)),h=[];for(let f=0;f<p;f++)h.push(Number(e.getValue(i*a++,n)));o.push(new Dn(e,l,d,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,o,u)=>new Dn(this.module,o,this.output(s,u),u),n=(s,o)=>{let u=Ht(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new Dn(this.module,s,l,o)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Hc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Zf(),he(Lc)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,d=!1)=>{if(d)Ne("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{Ne("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),p)}},async(o,u,l)=>{Ne("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,d)=>{Ne("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new jc(t,s,Number(u));return s.computeKernel(Number(o),p,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Va(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,o,u,l,d)=>n.ensureTensor(s,o,u,l,d),(s,o)=>{n.uploadTensor(s,o)},async(s,o)=>n.downloadTensor(s,o),(s,o)=>n.registerMLContext(s,o),!!r.trace])}}}),Kc,Ws,Gs,Yr,Zc,js,Pn,Hs,Ks,Zs,Xs,Qs,Ys,Xc=S(()=>{gt(),Yn(),Jn(),Ee(),Wt(),gi(),Ba(),Kc=(e,t)=>{Ce()._OrtInit(e,t)!==0&&ve("Can't initialize onnxruntime.")},Ws=async e=>{Kc(e.wasm.numThreads,yi(e.logLevel))},Gs=async(e,t)=>{Ce().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Xf(),he(Gc)).init;t==="webgpu"&&await i("webgpu",Ce(),e,r),t==="webnn"&&await i("webnn",Ce(),e)}},Yr=new Map,Zc=e=>{let t=Ce(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&ve("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},js=(e,t)=>{let r=Ce(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&ve("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let l=r.HEAPU32[a/4+1],d=[];for(let p=0;p<l;p++){let h=Number(r.getValue(a+8+p*n,"*"));d.push(h!==0?r.UTF8ToString(h):Number(r.getValue(a+8+(p+l)*n,"*")))}return[o,u,d]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},Pn=e=>{let t=Ce(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Hs=async(e,t)=>{let r,i,a=Ce();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Pn(e);let n=0,s=0,o=0,u=[],l=[],d=[];try{if([s,u]=await Ma(t),t?.externalData&&a.mountExternalData){let $=[];for(let C of t.externalData){let D=typeof C=="string"?C:C.path;$.push(vi(typeof C=="string"?C:C.data).then(P=>{a.mountExternalData(D,P)}))}await Promise.all($)}for(let $ of t?.executionProviders??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let C=$,D=C?.context,P=C?.gpuDevice,j=C?.deviceType,se=C?.powerPreference;D?a.currentContext=D:P?a.currentContext=await a.webnnCreateMLContext(P):a.currentContext=await a.webnnCreateMLContext({deviceType:j,powerPreference:se})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&ve("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[p,h]=Zc(n),f=!!t?.enableGraphCapture,m=[],y=[],x=[],_=[],w=[];for(let $=0;$<p;$++){let[C,D,P]=js(n,$);C===0&&ve("Can't get an input name."),l.push(C);let j=a.UTF8ToString(C);m.push(j),x.push(D===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:jt(D),shape:P})}for(let $=0;$<h;$++){let[C,D,P]=js(n,$+p);C===0&&ve("Can't get an output name."),d.push(C);let j=a.UTF8ToString(C);y.push(j),_.push(D===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:jt(D),shape:P});{if(f&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let se=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[j]??"cpu",fe=a.webnnIsGraphOutput;if(se==="cpu"&&fe&&fe(n,j)){w.push("ml-tensor-cpu-output");continue}if(se!=="cpu"&&se!=="cpu-pinned"&&se!=="gpu-buffer"&&se!=="ml-tensor")throw new Error(`Not supported preferred output location: ${se}.`);if(f&&se!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${se}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(se)}}let T=null;return w.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(n),o===0&&ve("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>Fi($))}),Yr.set(n,[n,l,d,T,f,!1]),[n,m,y,x,_]}catch(p){throw l.forEach(h=>a._OrtFree(h)),d.forEach(h=>a._OrtFree(h)),o!==0&&a._OrtReleaseBinding(o)!==0&&ve("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&ve("Can't release session."),p}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&ve("Can't release session options."),u.forEach(p=>a._free(p)),a.unmountExternalData?.()}},Ks=e=>{let t=Ce(),r=Yr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&ve("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ve("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(u=>t._OrtFree(u)),n.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&ve("Can't release session."),Yr.delete(e)},Zs=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let o=Ce(),u=o.PTR_SIZE,l=e[0],d=e[1],p=e[3],h=p,f,m;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;m=Ht(Gt(l),d);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=w(i,n,_,m)}}else if(p==="ml-tensor"){let _=e[2].mlTensor;m=Ht(Gt(l),d);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=w(i,_,Gt(l),d)}else{let _=e[2];if(Array.isArray(_)){m=u*_.length,f=o._malloc(m),r.push(f);for(let w=0;w<_.length;w++){if(typeof _[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(f+w*u,mt(_[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&w&&T){let $=o.UTF8ToString(a);if(w(i,$)||T(i,$)){let C=Gt(l);m=Ht(C,d),h="ml-tensor";let D=o.webnnCreateTemporaryTensor,P=o.webnnUploadTensor;if(!D||!P)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let j=await D(i,C,d);P(j,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),f=j}else m=_.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}else m=_.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,m),f)}}let y=o.stackSave(),x=o.stackAlloc(4*d.length);try{d.forEach((w,T)=>o.setValue(x+T*u,w,u===4?"i32":"i64"));let _=o._OrtCreateTensor(Gt(l),f,m,x,d.length,Fi(h));_===0&&ve(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(_)}finally{o.stackRestore(y)}},Xs=async(e,t,r,i,a,n)=>{let s=Ce(),o=s.PTR_SIZE,u=Yr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],h=u[3],f=u[4],m=u[5],y=t.length,x=i.length,_=0,w=[],T=[],$=[],C=[],D=[],P=s.stackSave(),j=s.stackAlloc(y*o),se=s.stackAlloc(y*o),fe=s.stackAlloc(x*o),De=s.stackAlloc(x*o);try{[_,w]=Ca(n),ot("wasm prepareInputOutputTensor");for(let le=0;le<y;le++)await Zs(r[le],T,C,e,d[t[le]],t[le],f);for(let le=0;le<x;le++)await Zs(a[le],$,C,e,p[i[le]],y+i[le],f);ut("wasm prepareInputOutputTensor");for(let le=0;le<y;le++)s.setValue(j+le*o,T[le],"*"),s.setValue(se+le*o,d[t[le]],"*");for(let le=0;le<x;le++)s.setValue(fe+le*o,$[le],"*"),s.setValue(De+le*o,p[i[le]],"*");if(h&&!m){let{handle:le,outputPreferredLocations:_e,outputPreferredLocationsEncoded:Ae}=h;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);ot("wasm bindInputsOutputs");for(let Ue=0;Ue<y;Ue++){let Oe=t[Ue];await s._OrtBindInput(le,d[Oe],T[Ue])!==0&&ve(`Can't bind input[${Ue}] for session=${e}.`)}for(let Ue=0;Ue<x;Ue++){let Oe=i[Ue];a[Ue]?.[3]?(D.push($[Ue]),s._OrtBindOutput(le,p[Oe],$[Ue],0)!==0&&ve(`Can't bind pre-allocated output[${Ue}] for session=${e}.`)):s._OrtBindOutput(le,p[Oe],0,Ae[Oe])!==0&&ve(`Can't bind output[${Ue}] to ${_e[Ue]} for session=${e}.`)}ut("wasm bindInputsOutputs"),Yr.set(e,[l,d,p,h,f,!0])}s.jsepOnRunStart?.(l),s.webnnOnRunStart?.(l);let xe;h?xe=await s._OrtRunWithBinding(l,h.handle,x,fe,_):xe=await s._OrtRun(l,se,j,y,De,x,fe,_),xe!==0&&ve("failed to call OrtRun().");let ke=[],He=[];ot("wasm ProcessOutputTensor");for(let le=0;le<x;le++){let _e=Number(s.getValue(fe+le*o,"*"));if(_e===$[le]||D.includes($[le])){ke.push(a[le]),_e!==$[le]&&s._OrtReleaseTensor(_e)!==0&&ve("Can't release tensor.");continue}let Ae=s.stackSave(),Ue=s.stackAlloc(4*o),Oe=!1,Le,re=0;try{s._OrtGetTensorData(_e,Ue,Ue+o,Ue+2*o,Ue+3*o)!==0&&ve(`Can't access output tensor data on index ${le}.`);let ze=o===4?"i32":"i64",Se=Number(s.getValue(Ue,ze));re=s.getValue(Ue+o,"*");let ye=s.getValue(Ue+o*2,"*"),At=Number(s.getValue(Ue+o*3,ze)),Kt=[];for(let tt=0;tt<At;tt++)Kt.push(Number(s.getValue(ye+tt*o,ze)));s._OrtFree(ye)!==0&&ve("Can't free memory for tensor dims.");let _t=Kt.reduce((tt,bt)=>tt*bt,1);Le=jt(Se);let Zt=h?.outputPreferredLocations[i[le]];if(Le==="string"){if(Zt==="gpu-buffer"||Zt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let tt=[];for(let bt=0;bt<_t;bt++){let Dr=s.getValue(re+bt*o,"*"),tm=s.getValue(re+(bt+1)*o,"*"),rm=bt===_t-1?void 0:tm-Dr;tt.push(s.UTF8ToString(Dr,rm))}ke.push([Le,Kt,tt,"cpu"])}else if(Zt==="gpu-buffer"&&_t>0){let tt=s.jsepGetBuffer;if(!tt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let bt=tt(re),Dr=Ht(Se,_t);if(Dr===void 0||!_i(Le))throw new Error(`Unsupported data type: ${Le}`);Oe=!0,ke.push([Le,Kt,{gpuBuffer:bt,download:s.jsepCreateDownloader(bt,Dr,Le),dispose:()=>{s._OrtReleaseTensor(_e)!==0&&ve("Can't release tensor.")}},"gpu-buffer"])}else if(Zt==="ml-tensor"&&_t>0){let tt=s.webnnEnsureTensor,bt=s.webnnIsGraphInputOutputTypeSupported;if(!tt||!bt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(Se,_t)===void 0||!bi(Le))throw new Error(`Unsupported data type: ${Le}`);if(!bt(e,Le,!1))throw new Error(`preferredLocation "ml-tensor" for ${Le} output is not supported by current WebNN Context.`);let Dr=await tt(e,re,Se,Kt,!1);Oe=!0,ke.push([Le,Kt,{mlTensor:Dr,download:s.webnnCreateMLTensorDownloader(re,Le),dispose:()=>{s.webnnReleaseTensorId(re),s._OrtReleaseTensor(_e)}},"ml-tensor"])}else if(Zt==="ml-tensor-cpu-output"&&_t>0){let tt=s.webnnCreateMLTensorDownloader(re,Le)(),bt=ke.length;Oe=!0,He.push((async()=>{let Dr=[bt,await tt];return s.webnnReleaseTensorId(re),s._OrtReleaseTensor(_e),Dr})()),ke.push([Le,Kt,[],"cpu"])}else{let tt=wi(Le),bt=new tt(_t);new Uint8Array(bt.buffer,bt.byteOffset,bt.byteLength).set(s.HEAPU8.subarray(re,re+bt.byteLength)),ke.push([Le,Kt,bt,"cpu"])}}finally{s.stackRestore(Ae),Le==="string"&&re&&s._free(re),Oe||s._OrtReleaseTensor(_e)}}h&&!f&&(s._OrtClearBoundOutputs(h.handle)!==0&&ve("Can't clear bound outputs."),Yr.set(e,[l,d,p,h,f,!1]));for(let[le,_e]of await Promise.all(He))ke[le][2]=_e;return ut("wasm ProcessOutputTensor"),ke}finally{s.webnnOnRunEnd?.(l),s.stackRestore(P),T.forEach(xe=>s._OrtReleaseTensor(xe)),$.forEach(xe=>s._OrtReleaseTensor(xe)),C.forEach(xe=>s._free(xe)),_!==0&&s._OrtReleaseRunOptions(_),w.forEach(xe=>s._free(xe))}},Qs=e=>{let t=Ce(),r=Yr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&ve("Can't get an profile file name."),t._OrtFree(a)},Ys=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Jr,or,sa,rn,an,Un,Js,Nn,Ri,Mi,Qc,Yc,Jc,eh,th,rh,ih,ah,nh=S(()=>{gt(),Xc(),Wt(),ci(),Jr=()=>!!ne.wasm.proxy&&typeof document<"u",sa=!1,rn=!1,an=!1,Nn=new Map,Ri=(e,t)=>{let r=Nn.get(e);r?r.push(t):Nn.set(e,[t])},Mi=()=>{if(sa||!rn||an||!or)throw new Error("worker not ready")},Qc=e=>{switch(e.data.type){case"init-wasm":sa=!1,e.data.err?(an=!0,Js[1](e.data.err)):(rn=!0,Js[0]()),Un&&(URL.revokeObjectURL(Un),Un=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Yc=async()=>{if(!rn){if(sa)throw new Error("multiple calls to 'initWasm()' detected.");if(an)throw new Error("previous call to 'initWasm()' failed.");if(sa=!0,Jr())return new Promise((e,t)=>{or?.terminate(),Sa().then(([r,i])=>{try{or=i,or.onerror=n=>t(n),or.onmessage=Qc,Js=[e,t];let a={type:"init-wasm",in:ne};if(!a.in.wasm.wasmPaths&&r){let n=ui();n&&(a.in.wasm.wasmPaths=n)}or.postMessage(a),Un=r}catch(a){t(a)}},t)});try{await mi(ne.wasm),await Ws(ne),rn=!0}catch(e){throw an=!0,e}finally{sa=!1}}},Jc=async e=>{if(Jr())return Mi(),new Promise((t,r)=>{Ri("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ne}};or.postMessage(i)});await Gs(ne,e)},eh=async e=>Jr()?(Mi(),new Promise((t,r)=>{Ri("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};or.postMessage(i,[e.buffer])})):Pn(e),th=async(e,t)=>{if(Jr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Mi(),new Promise((r,i)=>{Ri("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),or.postMessage(a,n)})}else return Hs(e,t)},rh=async e=>{if(Jr())return Mi(),new Promise((t,r)=>{Ri("release",[t,r]);let i={type:"release",in:e};or.postMessage(i)});Ks(e)},ih=async(e,t,r,i,a,n)=>{if(Jr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Mi(),new Promise((s,o)=>{Ri("run",[s,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:n}};or.postMessage(l,Ys(u))})}else return Xs(e,t,r,i,a,n)},ah=async e=>{if(Jr())return Mi(),new Promise((t,r)=>{Ri("end-profiling",[t,r]);let i={type:"end-profiling",in:e};or.postMessage(i)});Qs(e)}}),eo,sh,oh,Qf=S(()=>{gt(),nh(),Ee(),ni(),Ba(),eo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},sh=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!_i(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!bi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},oh=class{async fetchModelAndCopyToWasmMemory(e){return eh(await vi(e))}async loadModel(e,t){dt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await th(r,t),pt()}async dispose(){return rh(this.sessionId)}async run(e,t,r){dt();let i=[],a=[];Object.entries(e).forEach(p=>{let h=p[0],f=p[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);i.push(f),a.push(m)});let n=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],f=p[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);n.push(f),s.push(m)});let o=i.map((p,h)=>eo(p,()=>`input "${this.inputNames[a[h]]}"`)),u=n.map((p,h)=>p?eo(p,()=>`output "${this.outputNames[s[h]]}"`):null),l=await ih(this.sessionId,a,o,s,u,r),d={};for(let p=0;p<l.length;p++)d[this.outputNames[s[p]]]=n[p]??sh(l[p]);return pt(),d}startProfiling(){}endProfiling(){ah(this.sessionId)}}}),uh={};K(uh,{OnnxruntimeWebAssemblyBackend:()=>ro,initializeFlags:()=>to,wasmBackend:()=>lh});var to,ro,lh,Yf=S(()=>{gt(),nh(),Qf(),to=()=>{(typeof ne.wasm.initTimeout!="number"||ne.wasm.initTimeout<0)&&(ne.wasm.initTimeout=0);let e=ne.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ne.wasm.simd=!1),typeof ne.wasm.proxy!="boolean"&&(ne.wasm.proxy=!1),typeof ne.wasm.trace!="boolean"&&(ne.wasm.trace=!1),typeof ne.wasm.numThreads!="number"||!Number.isInteger(ne.wasm.numThreads)||ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ne.wasm.numThreads=1;else{let t=typeof navigator>"u"?q("node:os").cpus().length:navigator.hardwareConcurrency;ne.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ro=class{async init(e){to(),await Yc(),await Jc(e)}async createInferenceSessionHandler(e,t){let r=new oh;return await r.loadModel(e,t),r}},lh=new ro}),dh={};K(dh,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>em,env:()=>ne,registerBackend:()=>oe}),gt(),gt(),gt();var Jf="1.27.0",em=Gr;{let e=(Yf(),he(uh)).wasmBackend;oe("webgpu",e,5),oe("webnn",e,5),oe("cpu",e,10),oe("wasm",e,10)}return Object.defineProperty(ne.versions,"web",{value:Jf,enumerable:!0}),he(dh)})();b.exports=M})(mo)),mo.exports}var Pi={},go={},Rh;function Bm(){return Rh||(Rh=1,Object.defineProperty(go,"__esModule",{value:!0})),go}var hn={},Mh;function Dm(){if(Mh)return hn;Mh=1;var b;Object.defineProperty(hn,"__esModule",{value:!0}),hn.SileroLegacy=void 0;const A=vn();class M{constructor(J,te,N,q,S){this.ortInstance=J,this._session=te,this._h=N,this._c=q,this._sr=S,this.reset_state=()=>{const K=Array(128).fill(0);this._h=new this.ortInstance.Tensor("float32",K,[2,1,64]),this._c=new this.ortInstance.Tensor("float32",K,[2,1,64])},this.process=async K=>{const he={input:new this.ortInstance.Tensor("float32",K,[1,K.length]),h:this._h,c:this._c,sr:this._sr},ue=await this._session.run(he);this._h=ue.hn,this._c=ue.cn;const[de]=ue.output?.data;return{notSpeech:1-de,isSpeech:de}}}}return hn.SileroLegacy=M,b=M,M.new=async(F,J)=>{A.log.debug("initializing vad");const te=await J(),N=await F.InferenceSession.create(te),q=new F.Tensor("int64",[16000n]),S=Array(128).fill(0),K=new F.Tensor("float32",S,[2,1,64]),V=new F.Tensor("float32",S,[2,1,64]);return A.log.debug("vad is initialized"),new b(F,N,K,V,q)},hn}var fn={},Bh;function Pm(){if(Bh)return fn;Bh=1;var b;Object.defineProperty(fn,"__esModule",{value:!0}),fn.SileroV5=void 0;const A=vn();function M(J){const te=Array(256).fill(0);return new J.Tensor("float32",te,[2,1,128])}class F{constructor(te,N,q,S){this._session=te,this._state=N,this._sr=q,this.ortInstance=S,this.reset_state=()=>{this._state=M(this.ortInstance)},this.process=async K=>{const he={input:new this.ortInstance.Tensor("float32",K,[1,K.length]),state:this._state,sr:this._sr},ue=await this._session.run(he);if(!ue.stateN)throw new Error("No state from model");if(this._state=ue.stateN,!ue.output?.data)throw new Error("No output from model");const[de]=ue.output?.data;return{notSpeech:1-de,isSpeech:de}}}}return fn.SileroV5=F,b=F,F.new=async(J,te)=>{A.log.debug("Loading VAD...");const N=await te(),q=await J.InferenceSession.create(N),S=new J.Tensor("int64",[16000n]),K=M(J);return A.log.debug("...finished loading VAD"),new b(q,K,S,J)},fn}var Dh;function rf(){return Dh||(Dh=1,(function(b){var A=Pi&&Pi.__createBinding||(Object.create?(function(te,N,q,S){S===void 0&&(S=q);var K=Object.getOwnPropertyDescriptor(N,q);(!K||("get"in K?!N.__esModule:K.writable||K.configurable))&&(K={enumerable:!0,get:function(){return N[q]}}),Object.defineProperty(te,S,K)}):(function(te,N,q,S){S===void 0&&(S=q),te[S]=N[q]})),M=Pi&&Pi.__exportStar||function(te,N){for(var q in te)q!=="default"&&!Object.prototype.hasOwnProperty.call(N,q)&&A(N,te,q)};Object.defineProperty(b,"__esModule",{value:!0}),b.SileroV5=b.SileroLegacy=void 0,M(Bm(),b);var F=Dm();Object.defineProperty(b,"SileroLegacy",{enumerable:!0,get:function(){return F.SileroLegacy}});var J=Pm();Object.defineProperty(b,"SileroV5",{enumerable:!0,get:function(){return J.SileroV5}})})(Pi)),Pi}var mn={},Ph;function af(){if(Ph)return mn;Ph=1,Object.defineProperty(mn,"__esModule",{value:!0}),mn.Resampler=void 0;const b=vn();class A{constructor(F){this.options=F,this.process=J=>{const te=[];for(const N of J)for(this.inputBuffer.push(N);this.hasEnoughDataForFrame();){const q=this.generateOutputFrame();te.push(q)}return te},F.nativeSampleRate<16e3&&b.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}async*stream(F){for(const J of F)for(this.inputBuffer.push(J);this.hasEnoughDataForFrame();)yield this.generateOutputFrame()}hasEnoughDataForFrame(){return this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>=this.options.targetFrameSize}generateOutputFrame(){const F=new Float32Array(this.options.targetFrameSize);let J=0,te=0;for(;J<this.options.targetFrameSize;){let N=0,q=0;for(;te<Math.min(this.inputBuffer.length,(J+1)*this.options.nativeSampleRate/this.options.targetSampleRate);){const S=this.inputBuffer[te];S!==void 0&&(N+=S,q++),te++}F[J]=N/q,J++}return this.inputBuffer=this.inputBuffer.slice(te),F}}return mn.Resampler=A,mn}var Uh;function Um(){return Uh||(Uh=1,(function(b){var A=Nr&&Nr.__createBinding||(Object.create?(function(ue,de,oe,ie){ie===void 0&&(ie=oe);var Te=Object.getOwnPropertyDescriptor(de,oe);(!Te||("get"in Te?!de.__esModule:Te.writable||Te.configurable))&&(Te={enumerable:!0,get:function(){return de[oe]}}),Object.defineProperty(ue,ie,Te)}):(function(ue,de,oe,ie){ie===void 0&&(ie=oe),ue[ie]=de[oe]})),M=Nr&&Nr.__setModuleDefault||(Object.create?(function(ue,de){Object.defineProperty(ue,"default",{enumerable:!0,value:de})}):function(ue,de){ue.default=de}),F=Nr&&Nr.__importStar||function(ue){if(ue&&ue.__esModule)return ue;var de={};if(ue!=null)for(var oe in ue)oe!=="default"&&Object.prototype.hasOwnProperty.call(ue,oe)&&A(de,ue,oe);return M(de,ue),de};Object.defineProperty(b,"__esModule",{value:!0}),b.NonRealTimeVAD=b.defaultNonRealTimeVADOptions=void 0;const J=F(Mm()),te=Jh(),N=zo(),q=Oo(),S=Xn(),K=rf(),V=af();b.defaultNonRealTimeVADOptions={...q.defaultFrameProcessorOptions,modelURL:te.baseAssetPath+"silero_vad_legacy.onnx",modelFetcher:N.defaultModelFetcher};class he{static async new(de={}){const oe={...b.defaultNonRealTimeVADOptions,...de};(0,q.validateOptions)(oe),oe.ortConfig!==void 0&&oe.ortConfig(J);const ie=()=>oe.modelFetcher(oe.modelURL),Te=await K.SileroLegacy.new(J,ie),Fe=new q.FrameProcessor(Te.process,Te.reset_state,{positiveSpeechThreshold:oe.positiveSpeechThreshold,negativeSpeechThreshold:oe.negativeSpeechThreshold,redemptionMs:oe.redemptionMs,preSpeechPadMs:oe.preSpeechPadMs,minSpeechMs:oe.minSpeechMs,submitUserSpeechOnPause:oe.submitUserSpeechOnPause},1536/16);return Fe.resume(),new this(ie,J,oe,Fe)}constructor(de,oe,ie,Te){this.modelFetcher=de,this.ort=oe,this.options=ie,this.frameProcessor=Te,this.frameSamples=1536}async*run(de,oe){const ie={nativeSampleRate:oe,targetSampleRate:16e3,targetFrameSize:this.frameSamples},Te=new V.Resampler(ie);let Fe=0,Ze=0,be=0;for await(const me of Te.stream(de)){const ce=[];await this.frameProcessor.process(me,je=>{ce.push(je)});for(const je of ce)switch(je.msg){case S.Message.SpeechStart:Fe=be*this.frameSamples/16;break;case S.Message.SpeechEnd:Ze=(be+1)*this.frameSamples/16,yield{audio:je.audio,start:Fe,end:Ze};break}be++}const Ie=[];this.frameProcessor.endSegment(me=>{Ie.push(me)});for(const me of Ie)me.msg===S.Message.SpeechEnd&&(yield{audio:me.audio,start:Fe,end:be*this.frameSamples/16})}}b.NonRealTimeVAD=he})(Nr)),Nr}var yr={},Nh;function Nm(){if(Nh)return yr;Nh=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.audioFileToArray=yr.encodeWAV=yr.arrayBufferToBase64=yr.minFramesForTargetMS=void 0;function b(q,S,K=16e3){return Math.ceil(q*K/1e3/S)}yr.minFramesForTargetMS=b;function A(q){const S=new Uint8Array(q),K=S.byteLength,V=new Array(K);for(let he=0;he<K;he++){const ue=S[he];if(ue===void 0)break;V[he]=String.fromCharCode(ue)}return btoa(V.join(""))}yr.arrayBufferToBase64=A;function M(q,S=3,K=16e3,V=1,he=32){const ue=he/8,de=V*ue,oe=new ArrayBuffer(44+q.length*ue),ie=new DataView(oe);return te(ie,0,"RIFF"),ie.setUint32(4,36+q.length*ue,!0),te(ie,8,"WAVE"),te(ie,12,"fmt "),ie.setUint32(16,16,!0),ie.setUint16(20,S,!0),ie.setUint16(22,V,!0),ie.setUint32(24,K,!0),ie.setUint32(28,K*de,!0),ie.setUint16(32,de,!0),ie.setUint16(34,he,!0),te(ie,36,"data"),ie.setUint32(40,q.length*ue,!0),S===1?J(ie,44,q):F(ie,44,q),oe}yr.encodeWAV=M;function F(q,S,K){for(let V=0;V<K.length;V++,S+=4)q.setFloat32(S,K[V],!0)}function J(q,S,K){for(let V=0;V<K.length;V++,S+=2){const he=Math.max(-1,Math.min(1,K[V]));q.setInt16(S,he<0?he*32768:he*32767,!0)}}function te(q,S,K){for(let V=0;V<K.length;V++)q.setUint8(S+V,K.charCodeAt(V))}async function N(q){const S=new OfflineAudioContext(1,1,44100),K=new FileReader;let V=null;if(await new Promise(de=>{K.addEventListener("loadend",()=>{const oe=K.result;S.decodeAudioData(oe,ie=>{V=ie,S.startRendering().then(()=>{console.log("Rendering completed successfully"),de()}).catch(Te=>{console.error(`Rendering failed: ${Te}`)})},ie=>{console.log(`Error with decoding audio data: ${ie}`)})}),K.readAsArrayBuffer(q)}),V===null)throw Error("some shit");const he=V,ue=new Float32Array(he.length);for(let de=0;de<he.length;de++)for(let oe=0;oe<he.numberOfChannels;oe++){const ie=he.getChannelData(oe)[de],Te=ue[de];if(ie===void 0||Te===void 0)throw new Error("sample or out[i] is undefined");ue[de]=Te+ie}return{audio:ue,sampleRate:he.sampleRate}}return yr.audioFileToArray=N,yr}var Lr={},wo={exports:{}},Lh;function Lm(){return Lh||(Lh=1,(function(b,A){var M=(()=>{var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,te=Object.getOwnPropertyNames,N=Object.prototype.hasOwnProperty,q=(c=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(c,{get:(g,v)=>(typeof ur<"u"?ur:g)[v]}):c)(function(c){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+c+'" is not supported')}),S=(c,g)=>()=>(c&&(g=c(c=0)),g),K=(c,g)=>{for(var v in g)F(c,v,{get:g[v],enumerable:!0})},V=(c,g,v,k)=>{if(g&&typeof g=="object"||typeof g=="function")for(let E of te(g))!N.call(c,E)&&E!==v&&F(c,E,{get:()=>g[E],enumerable:!(k=J(g,E))||k.enumerable});return c},he=c=>V(F({},"__esModule",{value:!0}),c),ue,de,oe,ie,Te,Fe=S(()=>{ue=new Map,de=[],oe=(c,g,v)=>{if(g&&typeof g.init=="function"&&typeof g.createInferenceSessionHandler=="function"){let k=ue.get(c);if(k===void 0)ue.set(c,{backend:g,priority:v});else{if(k.priority>v)return;if(k.priority===v&&k.backend!==g)throw new Error(`cannot register backend "${c}" using priority ${v}`)}if(v>=0){let E=de.indexOf(c);E!==-1&&de.splice(E,1);for(let B=0;B<de.length;B++)if(ue.get(de[B]).priority<=v){de.splice(B,0,c);return}de.push(c)}return}throw new TypeError("not a valid backend")},ie=async c=>{let g=ue.get(c);if(!g)return"backend not found.";if(g.initialized)return g.backend;if(g.aborted)return g.error;{let v=!!g.initPromise;try{return v||(g.initPromise=g.backend.init(c)),await g.initPromise,g.initialized=!0,g.backend}catch(k){return v||(g.error=`${k}`,g.aborted=!0),g.error}finally{delete g.initPromise}}},Te=async c=>{let g=c.executionProviders||[],v=g.map(R=>typeof R=="string"?R:R.name),k=v.length===0?de:v,E,B=[],z=new Set;for(let R of k){let H=await ie(R);typeof H=="string"?B.push({name:R,err:H}):(E||(E=H),E===H&&z.add(R))}if(!E)throw new Error(`no available backend found. ERR: ${B.map(R=>`[${R.name}] ${R.err}`).join(", ")}`);for(let{name:R,err:H}of B)v.includes(R)&&console.warn(`removing requested execution provider "${R}" from session options because it is not available: ${H}`);let I=g.filter(R=>z.has(typeof R=="string"?R:R.name));return[E,new Proxy(c,{get:(R,H)=>H==="executionProviders"?I:Reflect.get(R,H)})]}}),Ze=S(()=>{Fe()}),be,Ie=S(()=>{be="1.27.0"}),me,ce,je=S(()=>{Ie(),me="warning",ce={wasm:{},webgl:{},webgpu:{},versions:{common:be},set logLevel(c){if(c!==void 0){if(typeof c!="string"||["verbose","info","warning","error","fatal"].indexOf(c)===-1)throw new Error(`Unsupported logging level: ${c}`);me=c}},get logLevel(){return me}},Object.defineProperty(ce,"logLevel",{enumerable:!0})}),ne,qe=S(()=>{je(),ne=ce}),et,rt,st=S(()=>{et=(c,g)=>{let v=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);v.width=c.dims[3],v.height=c.dims[2];let k=v.getContext("2d");if(k!=null){let E,B;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(E=c.dims[2],B=c.dims[3]):(E=c.dims[3],B=c.dims[2]);let z=g?.format!==void 0?g.format:"RGB",I=g?.norm,R,H;I===void 0||I.mean===void 0?R=[255,255,255,255]:typeof I.mean=="number"?R=[I.mean,I.mean,I.mean,I.mean]:(R=[I.mean[0],I.mean[1],I.mean[2],0],I.mean[3]!==void 0&&(R[3]=I.mean[3])),I===void 0||I.bias===void 0?H=[0,0,0,0]:typeof I.bias=="number"?H=[I.bias,I.bias,I.bias,I.bias]:(H=[I.bias[0],I.bias[1],I.bias[2],0],I.bias[3]!==void 0&&(H[3]=I.bias[3]));let ee=B*E,G=0,L=ee,ge=ee*2,O=-1;z==="RGBA"?(G=0,L=ee,ge=ee*2,O=ee*3):z==="RGB"?(G=0,L=ee,ge=ee*2):z==="RBG"&&(G=0,ge=ee,L=ee*2);for(let ae=0;ae<B;ae++)for(let nt=0;nt<E;nt++){let Re=(c.data[G++]-H[0])*R[0],we=(c.data[L++]-H[1])*R[1],Me=(c.data[ge++]-H[2])*R[2],pe=O===-1?255:(c.data[O++]-H[3])*R[3];k.fillStyle="rgba("+Re+","+we+","+Me+","+pe+")",k.fillRect(nt,ae,1,1)}if("toDataURL"in v)return v.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},rt=(c,g)=>{let v=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),k;if(v!=null){let E,B,z;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(E=c.dims[2],B=c.dims[1],z=c.dims[3]):(E=c.dims[3],B=c.dims[2],z=c.dims[1]);let I=g!==void 0&&g.format!==void 0?g.format:"RGB",R=g?.norm,H,ee;R===void 0||R.mean===void 0?H=[255,255,255,255]:typeof R.mean=="number"?H=[R.mean,R.mean,R.mean,R.mean]:(H=[R.mean[0],R.mean[1],R.mean[2],255],R.mean[3]!==void 0&&(H[3]=R.mean[3])),R===void 0||R.bias===void 0?ee=[0,0,0,0]:typeof R.bias=="number"?ee=[R.bias,R.bias,R.bias,R.bias]:(ee=[R.bias[0],R.bias[1],R.bias[2],0],R.bias[3]!==void 0&&(ee[3]=R.bias[3]));let G=B*E;if(g!==void 0&&(g.format!==void 0&&z===4&&g.format!=="RGBA"||z===3&&g.format!=="RGB"&&g.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let L=4,ge=0,O=1,ae=2,nt=3,Re=0,we=G,Me=G*2,pe=-1;I==="RGBA"?(Re=0,we=G,Me=G*2,pe=G*3):I==="RGB"?(Re=0,we=G,Me=G*2):I==="RBG"&&(Re=0,Me=G,we=G*2),k=v.createImageData(E,B);for(let Tt=0;Tt<B*E;ge+=L,O+=L,ae+=L,nt+=L,Tt++)k.data[ge]=(c.data[Re++]-ee[0])*H[0],k.data[O]=(c.data[we++]-ee[1])*H[1],k.data[ae]=(c.data[Me++]-ee[2])*H[2],k.data[nt]=pe===-1?255:(c.data[pe++]-ee[3])*H[3]}else throw new Error("Can not access image data");return k}}),it,ft,Yt,Ve,Rt,Jt,Ct=S(()=>{Qe(),it=(c,g)=>{if(c===void 0)throw new Error("Image buffer must be defined");if(g.height===void 0||g.width===void 0)throw new Error("Image height and width must be defined");if(g.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:v,width:k}=g,E=g.norm??{mean:255,bias:0},B,z;typeof E.mean=="number"?B=[E.mean,E.mean,E.mean,E.mean]:B=[E.mean[0],E.mean[1],E.mean[2],E.mean[3]??255],typeof E.bias=="number"?z=[E.bias,E.bias,E.bias,E.bias]:z=[E.bias[0],E.bias[1],E.bias[2],E.bias[3]??0];let I=g.format!==void 0?g.format:"RGBA",R=g.tensorFormat!==void 0&&g.tensorFormat!==void 0?g.tensorFormat:"RGB",H=v*k,ee=R==="RGBA"?new Float32Array(H*4):new Float32Array(H*3),G=4,L=0,ge=1,O=2,ae=3,nt=0,Re=H,we=H*2,Me=-1;I==="RGB"&&(G=3,L=0,ge=1,O=2,ae=-1),R==="RGBA"?Me=H*3:R==="RBG"?(nt=0,we=H,Re=H*2):R==="BGR"&&(we=0,Re=H,nt=H*2);for(let pe=0;pe<H;pe++,L+=G,O+=G,ge+=G,ae+=G)ee[nt++]=(c[L]+z[0])/B[0],ee[Re++]=(c[ge]+z[1])/B[1],ee[we++]=(c[O]+z[2])/B[2],Me!==-1&&ae!==-1&&(ee[Me++]=(c[ae]+z[3])/B[3]);return R==="RGBA"?new We("float32",ee,[1,4,v,k]):new We("float32",ee,[1,3,v,k])},ft=async(c,g)=>{let v=typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement,k=typeof ImageData<"u"&&c instanceof ImageData,E=typeof ImageBitmap<"u"&&c instanceof ImageBitmap,B=typeof c=="string",z,I=g??{},R=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},H=ee=>typeof HTMLCanvasElement<"u"&&ee instanceof HTMLCanvasElement||ee instanceof OffscreenCanvas?ee.getContext("2d"):null;if(v){let ee=R();ee.width=c.width,ee.height=c.height;let G=H(ee);if(G!=null){let L=c.height,ge=c.width;if(g!==void 0&&g.resizedHeight!==void 0&&g.resizedWidth!==void 0&&(L=g.resizedHeight,ge=g.resizedWidth),g!==void 0){if(I=g,g.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");I.tensorFormat="RGBA",I.height=L,I.width=ge}else I.tensorFormat="RGBA",I.height=L,I.width=ge;G.drawImage(c,0,0),z=G.getImageData(0,0,ge,L).data}else throw new Error("Can not access image data")}else if(k){let ee,G;if(g!==void 0&&g.resizedWidth!==void 0&&g.resizedHeight!==void 0?(ee=g.resizedHeight,G=g.resizedWidth):(ee=c.height,G=c.width),g!==void 0&&(I=g),I.format="RGBA",I.height=ee,I.width=G,g!==void 0){let L=R();L.width=G,L.height=ee;let ge=H(L);if(ge!=null)ge.putImageData(c,0,0),z=ge.getImageData(0,0,G,ee).data;else throw new Error("Can not access image data")}else z=c.data}else if(E){if(g===void 0)throw new Error("Please provide image config with format for Imagebitmap");let ee=R();ee.width=c.width,ee.height=c.height;let G=H(ee);if(G!=null){let L=c.height,ge=c.width;return G.drawImage(c,0,0,ge,L),z=G.getImageData(0,0,ge,L).data,I.height=L,I.width=ge,it(z,I)}else throw new Error("Can not access image data")}else{if(B)return new Promise((ee,G)=>{let L=R(),ge=H(L);if(!c||!ge)return G();let O=new Image;O.crossOrigin="Anonymous",O.src=c,O.onload=()=>{L.width=O.width,L.height=O.height,ge.drawImage(O,0,0,L.width,L.height);let ae=ge.getImageData(0,0,L.width,L.height);I.height=L.height,I.width=L.width,ee(it(ae.data,I))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(z!==void 0)return it(z,I);throw new Error("Input data provided is not supported - aborted tensor creation")},Yt=(c,g)=>{let{width:v,height:k,download:E,dispose:B}=g,z=[1,k,v,4];return new We({location:"texture",type:"float32",texture:c,dims:z,download:E,dispose:B})},Ve=(c,g)=>{let{dataType:v,dims:k,download:E,dispose:B}=g;return new We({location:"gpu-buffer",type:v??"float32",gpuBuffer:c,dims:k,download:E,dispose:B})},Rt=(c,g)=>{let{dataType:v,dims:k,download:E,dispose:B}=g;return new We({location:"ml-tensor",type:v??"float32",mlTensor:c,dims:k,download:E,dispose:B})},Jt=(c,g,v)=>new We({location:"cpu-pinned",type:c,data:g,dims:v??[g.length]})}),lt,zt,Ot,Mt,Vt=S(()=>{lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ot=!1,Mt=()=>{if(!Ot){Ot=!0;let c=typeof BigInt64Array<"u"&&BigInt64Array.from,g=typeof BigUint64Array<"u"&&BigUint64Array.from,v=globalThis.Float16Array,k=typeof v<"u"&&v.from;c&&(lt.set("int64",BigInt64Array),zt.set(BigInt64Array,"int64")),g&&(lt.set("uint64",BigUint64Array),zt.set(BigUint64Array,"uint64")),k?(lt.set("float16",v),zt.set(v,"float16")):lt.set("float16",Uint16Array)}}}),ar,Ft,Et=S(()=>{Qe(),ar=c=>{let g=1;for(let v=0;v<c.length;v++){let k=c[v];if(typeof k!="number"||!Number.isSafeInteger(k))throw new TypeError(`dims[${v}] must be an integer, got: ${k}`);if(k<0)throw new RangeError(`dims[${v}] must be a non-negative integer, got: ${k}`);g*=k}return g},Ft=(c,g)=>{switch(c.location){case"cpu":return new We(c.type,c.data,g);case"cpu-pinned":return new We({location:"cpu-pinned",data:c.data,type:c.type,dims:g});case"texture":return new We({location:"texture",texture:c.texture,type:c.type,dims:g});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:c.gpuBuffer,type:c.type,dims:g});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:c.mlTensor,type:c.type,dims:g});default:throw new Error(`tensorReshape: tensor location ${c.location} is not supported`)}}}),We,Qe=S(()=>{st(),Ct(),Vt(),Et(),We=class{constructor(c,g,v){Mt();let k,E;if(typeof c=="object"&&"location"in c)switch(this.dataLocation=c.location,k=c.type,E=c.dims,c.location){case"cpu-pinned":{let z=lt.get(k);if(!z)throw new TypeError(`unsupported type "${k}" to create tensor from pinned buffer`);if(!(c.data instanceof z))throw new TypeError(`buffer should be of type ${z.name}`);this.cpuData=c.data;break}case"texture":{if(k!=="float32")throw new TypeError(`unsupported type "${k}" to create tensor from texture`);this.gpuTextureData=c.texture,this.downloader=c.download,this.disposer=c.dispose;break}case"gpu-buffer":{if(k!=="float32"&&k!=="float16"&&k!=="int32"&&k!=="int64"&&k!=="uint32"&&k!=="uint8"&&k!=="bool"&&k!=="uint4"&&k!=="int4")throw new TypeError(`unsupported type "${k}" to create tensor from gpu buffer`);this.gpuBufferData=c.gpuBuffer,this.downloader=c.download,this.disposer=c.dispose;break}case"ml-tensor":{if(k!=="float32"&&k!=="float16"&&k!=="int32"&&k!=="int64"&&k!=="uint32"&&k!=="uint64"&&k!=="int8"&&k!=="uint8"&&k!=="bool"&&k!=="uint4"&&k!=="int4")throw new TypeError(`unsupported type "${k}" to create tensor from MLTensor`);this.mlTensorData=c.mlTensor,this.downloader=c.download,this.disposer=c.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let z,I;if(typeof c=="string")if(k=c,I=v,c==="string"){if(!Array.isArray(g))throw new TypeError("A string tensor's data must be a string array.");z=g}else{let R=lt.get(c);if(R===void 0)throw new TypeError(`Unsupported tensor type: ${c}.`);if(Array.isArray(g)){if(c==="float16"&&R===Uint16Array||c==="uint4"||c==="int4")throw new TypeError(`Creating a ${c} tensor from number array is not supported. Please use ${R.name} as data.`);c==="uint64"||c==="int64"?z=R.from(g,BigInt):z=R.from(g)}else if(g instanceof R)z=g;else if(g instanceof Uint8ClampedArray)if(c==="uint8")z=Uint8Array.from(g);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(c==="float16"&&g instanceof Uint16Array&&R!==Uint16Array)z=new globalThis.Float16Array(g.buffer,g.byteOffset,g.length);else throw new TypeError(`A ${k} tensor's data must be type of ${R}`)}else if(I=g,Array.isArray(c)){if(c.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let R=typeof c[0];if(R==="string")k="string",z=c;else if(R==="boolean")k="bool",z=Uint8Array.from(c);else throw new TypeError(`Invalid element type of data array: ${R}.`)}else if(c instanceof Uint8ClampedArray)k="uint8",z=Uint8Array.from(c);else{let R=zt.get(c.constructor);if(R===void 0)throw new TypeError(`Unsupported type for tensor data: ${c.constructor}.`);k=R,z=c}if(I===void 0)I=[z.length];else if(!Array.isArray(I))throw new TypeError("A tensor's dims must be a number array");E=I,this.cpuData=z,this.dataLocation="cpu"}let B=ar(E);if(this.cpuData&&B!==this.cpuData.length&&!((k==="uint4"||k==="int4")&&Math.ceil(B/2)===this.cpuData.length))throw new Error(`Tensor's size(${B}) does not match data length(${this.cpuData.length}).`);this.type=k,this.dims=E,this.size=B}static async fromImage(c,g){return ft(c,g)}static fromTexture(c,g){return Yt(c,g)}static fromGpuBuffer(c,g){return Ve(c,g)}static fromMLTensor(c,g){return Rt(c,g)}static fromPinnedBuffer(c,g,v){return Jt(c,g,v)}toDataURL(c){return et(this,c)}toImageData(c){return rt(this,c)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(c){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let g=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=g,c&&this.disposer&&(this.disposer(),this.disposer=void 0),g}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(c){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,c)}}}),Xe,qt=S(()=>{Qe(),Xe=We}),Ye,er,dt,pt,ot,ut,Pt=S(()=>{je(),Ye=(c,g)=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.timeStamp(`${c}::ORT::${g}`)},er=(c,g)=>{let v=new Error().stack?.split(/\r\n|\r|\n/g)||[],k=!1;for(let E=0;E<v.length;E++){if(k&&!v[E].includes("TRACE_FUNC")){let B=`FUNC_${c}::${v[E].trim().split(" ")[1]}`;g&&(B+=`::${g}`),Ye("CPU",B);return}v[E].includes("TRACE_FUNC")&&(k=!0)}},dt=c=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||er("BEGIN",c)},pt=c=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||er("END",c)},ot=c=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.time(`ORT::${c}`)},ut=c=>{(typeof ce.trace>"u"?!ce.wasm.trace:!ce.trace)||console.timeEnd(`ORT::${c}`)}}),vr,Wr=S(()=>{Fe(),qt(),Pt(),vr=class nf{constructor(g){this.handler=g}async run(g,v,k){dt(),ot("InferenceSession.run");let E={},B={};if(typeof g!="object"||g===null||g instanceof Xe||Array.isArray(g))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let z=!0;if(typeof v=="object"){if(v===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(v instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(v)){if(v.length===0)throw new TypeError("'fetches' cannot be an empty array.");z=!1;for(let H of v){if(typeof H!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(H)===-1)throw new RangeError(`'fetches' contains invalid output name: ${H}.`);E[H]=null}if(typeof k=="object"&&k!==null)B=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else{let H=!1,ee=Object.getOwnPropertyNames(v);for(let G of this.outputNames)if(ee.indexOf(G)!==-1){let L=v[G];(L===null||L instanceof Xe)&&(H=!0,z=!1,E[G]=L)}if(H){if(typeof k=="object"&&k!==null)B=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else B=v}}else if(typeof v<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let H of this.inputNames)if(typeof g[H]>"u")throw new Error(`input '${H}' is missing in 'feeds'.`);if(z)for(let H of this.outputNames)E[H]=null;let I=await this.handler.run(g,E,B),R={};for(let H in I)if(Object.hasOwnProperty.call(I,H)){let ee=I[H];ee instanceof Xe?R[H]=ee:R[H]=new Xe(ee.type,ee.data,ee.dims)}return ut("InferenceSession.run"),pt(),R}async release(){return this.handler.dispose()}static async create(g,v,k,E){dt(),ot("InferenceSession.create");let B,z={};if(typeof g=="string"){if(B=g,typeof v=="object"&&v!==null)z=v;else if(typeof v<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof Uint8Array){if(B=g,typeof v=="object"&&v!==null)z=v;else if(typeof v<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&g instanceof SharedArrayBuffer){let ee=g,G=0,L=g.byteLength;if(typeof v=="object"&&v!==null)z=v;else if(typeof v=="number"){if(G=v,!Number.isSafeInteger(G))throw new RangeError("'byteOffset' must be an integer.");if(G<0||G>=ee.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${ee.byteLength}).`);if(L=g.byteLength-G,typeof k=="number"){if(L=k,!Number.isSafeInteger(L))throw new RangeError("'byteLength' must be an integer.");if(L<=0||G+L>ee.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${ee.byteLength-G}].`);if(typeof E=="object"&&E!==null)z=E;else if(typeof E<"u")throw new TypeError("'options' must be an object.")}else if(typeof k<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof v<"u")throw new TypeError("'options' must be an object.");B=new Uint8Array(ee,G,L)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[I,R]=await Te(z),H=await I.createInferenceSessionHandler(B,R);return ut("InferenceSession.create"),pt(),new nf(H)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Bt,$r=S(()=>{Wr(),Bt=vr}),ga=S(()=>{}),ai=S(()=>{}),Li=S(()=>{}),Vi=S(()=>{}),Gr={};K(Gr,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>ne,registerBackend:()=>oe});var gt=S(()=>{Ze(),qe(),$r(),qt(),ga(),ai(),Pt(),Li(),Vi()}),ni=S(()=>{}),wa={};K(wa,{default:()=>ya});var si,oi,ya,Qn=S(()=>{Pa(),Wt(),ci(),si="ort-wasm-proxy-worker",oi=globalThis.self?.name===si,oi&&(self.onmessage=c=>{let{type:g,in:v}=c.data;try{switch(g){case"init-wasm":mi(v.wasm).then(()=>{qi(v).then(()=>{postMessage({type:g})},k=>{postMessage({type:g,err:k})})},k=>{postMessage({type:g,err:k})});break;case"init-ep":{let{epName:k,env:E}=v;Wi(E,k).then(()=>{postMessage({type:g})},B=>{postMessage({type:g,err:B})});break}case"copy-from":{let{buffer:k}=v,E=Ne(k);postMessage({type:g,out:E});break}case"create":{let{model:k,options:E}=v;tr(k,E).then(B=>{postMessage({type:g,out:B})},B=>{postMessage({type:g,err:B})});break}case"release":Hi(v),postMessage({type:g});break;case"run":{let{sessionId:k,inputIndices:E,inputs:B,outputIndices:z,options:I}=v;U(k,E,B,z,new Array(z.length).fill(null),I).then(R=>{R.some(H=>H[3]!=="cpu")?postMessage({type:g,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:g,out:R},Ki([...B,...R]))},R=>{postMessage({type:g,err:R})});break}case"end-profiling":jr(v),postMessage({type:g});break;default:}}catch(k){postMessage({type:g,err:k})}}),ya=oi?null:c=>new Worker(c??at,{type:"classic",name:si})}),_a,ba,at,ui,Or,va,$a,li,xa,di,Sa,pi,Ta,ci=S(()=>{ni(),_a=typeof location>"u"?void 0:location.origin,ba=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,at=ba(),ui=()=>{if(at&&!at.startsWith("blob:"))return at.substring(0,at.lastIndexOf("/")+1)},Or=(c,g)=>{try{let v=g??at;return(v?new URL(c,v):new URL(c)).origin===_a}catch{return!1}},va=(c,g)=>{let v=g??at;try{return(v?new URL(c,v):new URL(c)).href}catch{return}},$a=(c,g)=>`${g??"./"}${c}`,li=async c=>{let g=await(await fetch(c,{credentials:"same-origin"})).blob();return URL.createObjectURL(g)},xa=async c=>(await import(c)).default,di=(Qn(),he(wa)).default,Sa=async()=>{if(!at)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(at))return[void 0,di()];let c=await li(at);return[c,di(c)]},pi=void 0,Ta=async(c,g,v,k)=>{let E=pi&&!(c||g);if(E)if(at)E=Or(at)||k&&!v;else if(k&&!v)E=!0;else throw new Error("cannot determine the script source URL.");if(E)return[void 0,pi];{let B="ort-wasm-simd-threaded.mjs",z=c??va(B,g),I=v&&z&&!Or(z,g),R=I?await li(z):z??$a(B,g);return[I?R:void 0,await xa(R)]}}}),hi,Ar,lr,fi,Ea,ka,Ia,mi,Ce,Wt=S(()=>{ci(),Ar=!1,lr=!1,fi=!1,Ea=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ka=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},mi=async c=>{if(Ar)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(fi)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let g=c.initTimeout,v=c.numThreads;if(c.simd!==!1){if(c.simd==="relaxed"){if(!Ia())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ka())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let k=Ea();v>1&&!k&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+v+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),c.numThreads=v=1);let E=c.wasmPaths,B=typeof E=="string"?E:void 0,z=E?.mjs,I=z?.href??z,R=E?.wasm,H=R?.href??R,ee=c.wasmBinary,[G,L]=await Ta(I,B,v>1,!!ee||!!H),ge=!1,O=[];if(g>0&&O.push(new Promise(ae=>{setTimeout(()=>{ge=!0,ae()},g)})),O.push(new Promise((ae,nt)=>{let Re={numThreads:v};if(ee)Re.wasmBinary=ee,Re.locateFile=we=>we;else if(H||B)Re.locateFile=we=>H??B+we;else if(I&&I.indexOf("blob:")!==0)Re.locateFile=we=>new URL(we,I).href;else if(G){let we=ui();we&&(Re.locateFile=Me=>we+Me)}L(Re).then(we=>{lr=!1,Ar=!0,hi=we,ae(),G&&URL.revokeObjectURL(G)},we=>{lr=!1,fi=!0,nt(we)})})),await Promise.race(O),ge)throw new Error(`WebAssembly backend initializing failed due to timeout: ${g}ms`)},Ce=()=>{if(Ar&&hi)return hi;throw new Error("WebAssembly is not initialized yet.")}}),mt,Rr,ve,gi=S(()=>{Wt(),mt=(c,g)=>{let v=Ce(),k=v.lengthBytesUTF8(c)+1,E=v._malloc(k);return v.stringToUTF8(c,E,k),g.push(E),E},Rr=(c,g,v,k)=>{if(typeof c=="object"&&c!==null){if(v.has(c))throw new Error("Circular reference in options");v.add(c)}Object.entries(c).forEach(([E,B])=>{let z=g?g+E:E;if(typeof B=="object")Rr(B,z+".",v,k);else if(typeof B=="string"||typeof B=="number")k(z,B.toString());else if(typeof B=="boolean")k(z,B?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof B}`)})},ve=c=>{let g=Ce(),v=g.stackSave();try{let k=g.PTR_SIZE,E=g.stackAlloc(2*k);g._OrtGetLastError(E,E+k);let B=Number(g.getValue(E,k===4?"i32":"i64")),z=g.getValue(E+k,"*"),I=z?g.UTF8ToString(z):"";throw new Error(`${c} ERROR_CODE: ${B}, ERROR_MESSAGE: ${I}`)}finally{g.stackRestore(v)}}}),Ca,Yn=S(()=>{Wt(),gi(),Ca=c=>{let g=Ce(),v=0,k=[],E=c||{};try{if(c?.logSeverityLevel===void 0)E.logSeverityLevel=2;else if(typeof c.logSeverityLevel!="number"||!Number.isInteger(c.logSeverityLevel)||c.logSeverityLevel<0||c.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${c.logSeverityLevel}`);if(c?.logVerbosityLevel===void 0)E.logVerbosityLevel=0;else if(typeof c.logVerbosityLevel!="number"||!Number.isInteger(c.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${c.logVerbosityLevel}`);c?.terminate===void 0&&(E.terminate=!1);let B=0;return c?.tag!==void 0&&(B=mt(c.tag,k)),v=g._OrtCreateRunOptions(E.logSeverityLevel,E.logVerbosityLevel,!!E.terminate,B),v===0&&ve("Can't create run options."),c?.extra!==void 0&&Rr(c.extra,"",new WeakSet,(z,I)=>{let R=mt(z,k),H=mt(I,k);g._OrtAddRunConfigEntry(v,R,H)!==0&&ve(`Can't set a run config entry: ${z} - ${I}.`)}),[v,k]}catch(B){throw v!==0&&g._OrtReleaseRunOptions(v),k.forEach(z=>g._free(z)),B}}}),za,Oa,Aa,Ut,Ra,Ma,Jn=S(()=>{Wt(),gi(),za=c=>{switch(c){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${c}`)}},Oa=c=>{switch(c){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${c}`)}},Aa=c=>{c.extra||(c.extra={}),c.extra.session||(c.extra.session={});let g=c.extra.session;g.use_ort_model_bytes_directly||(g.use_ort_model_bytes_directly="1"),c.executionProviders&&c.executionProviders.some(v=>(typeof v=="string"?v:v.name)==="webgpu")&&(c.enableMemPattern=!1)},Ut=(c,g,v,k)=>{let E=mt(g,k),B=mt(v,k);Ce()._OrtAddSessionConfigEntry(c,E,B)!==0&&ve(`Can't set a session config entry: ${g} - ${v}.`)},Ra=async(c,g,v)=>{let k=g.executionProviders;for(let E of k){let B=typeof E=="string"?E:E.name,z=[];switch(B){case"webnn":if(B="WEBNN",Ut(c,"session.disable_quant_qdq","1",v),Ut(c,"session.disable_qdq_constant_folding","1",v),typeof E!="string"){let G=E?.deviceType;G&&Ut(c,"deviceType",G,v)}break;case"webgpu":if(B="JS",typeof E!="string"){let G=E;if(G?.preferredLayout){if(G.preferredLayout!=="NCHW"&&G.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${G.preferredLayout}`);Ut(c,"preferredLayout",G.preferredLayout,v)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${B}`)}let I=mt(B,v),R=z.length,H=0,ee=0;if(R>0){H=Ce()._malloc(R*Ce().PTR_SIZE),v.push(H),ee=Ce()._malloc(R*Ce().PTR_SIZE),v.push(ee);for(let G=0;G<R;G++)Ce().setValue(H+G*Ce().PTR_SIZE,z[G][0],"*"),Ce().setValue(ee+G*Ce().PTR_SIZE,z[G][1],"*")}await Ce()._OrtAppendExecutionProvider(c,I,H,ee,R)!==0&&ve(`Can't append execution provider: ${B}.`)}},Ma=async c=>{let g=Ce(),v=0,k=[],E=c||{};Aa(E);try{let B=za(E.graphOptimizationLevel??"all"),z=Oa(E.executionMode??"sequential"),I=typeof E.logId=="string"?mt(E.logId,k):0,R=E.logSeverityLevel??2;if(!Number.isInteger(R)||R<0||R>4)throw new Error(`log severity level is not valid: ${R}`);let H=E.logVerbosityLevel??0;if(!Number.isInteger(H)||H<0||H>4)throw new Error(`log verbosity level is not valid: ${H}`);let ee=typeof E.optimizedModelFilePath=="string"?mt(E.optimizedModelFilePath,k):0;if(v=g._OrtCreateSessionOptions(B,!!E.enableCpuMemArena,!!E.enableMemPattern,z,!!E.enableProfiling,0,I,R,H,ee),v===0&&ve("Can't create session options."),E.executionProviders&&await Ra(v,E,k),E.enableGraphCapture!==void 0){if(typeof E.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${E.enableGraphCapture}`);Ut(v,"enableGraphCapture",E.enableGraphCapture.toString(),k)}if(E.freeDimensionOverrides)for(let[G,L]of Object.entries(E.freeDimensionOverrides)){if(typeof G!="string")throw new Error(`free dimension override name must be a string: ${G}`);if(typeof L!="number"||!Number.isInteger(L)||L<0)throw new Error(`free dimension override value must be a non-negative integer: ${L}`);let ge=mt(G,k);g._OrtAddFreeDimensionOverride(v,ge,L)!==0&&ve(`Can't set a free dimension override: ${G} - ${L}.`)}return E.extra!==void 0&&Rr(E.extra,"",new WeakSet,(G,L)=>{Ut(v,G,L,k)}),[v,k]}catch(B){throw v!==0&&g._OrtReleaseSessionOptions(v)!==0&&ve("Can't release session options."),k.forEach(z=>g._free(z)),B}}}),Gt,jt,Ht,wi,yi,_i,bi,Fi,Ee=S(()=>{Gt=c=>{switch(c){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${c}`)}},jt=c=>{switch(c){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${c}`)}},Ht=(c,g)=>{let v=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][c],k=typeof g=="number"?g:g.reduce((E,B)=>E*B,1);return v>0?Math.ceil(k*v):void 0},wi=c=>{switch(c){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${c}`)}},yi=c=>{switch(c){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${c}`)}},_i=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",bi=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint64"||c==="int8"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",Fi=c=>{switch(c){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${c}`)}}}),vi,Ba=S(()=>{ni(),vi=async c=>{if(typeof c=="string"){let g=await fetch(c);if(!g.ok)throw new Error(`failed to load external data file: ${c}`);let v=g.headers.get("Content-Length"),k=v?parseInt(v,10):0;if(k<1073741824)return new Uint8Array(await g.arrayBuffer());{if(!g.body)throw new Error(`failed to load external data file: ${c}, no response body.`);let E=g.body.getReader(),B;try{B=new ArrayBuffer(k)}catch(I){if(I instanceof RangeError){let R=Math.ceil(k/65536);B=new WebAssembly.Memory({initial:R,maximum:R}).buffer}else throw I}let z=0;for(;;){let{done:I,value:R}=await E.read();if(I)break;let H=R.byteLength;new Uint8Array(B,z,H).set(R),z+=H}return new Uint8Array(B,0,k)}}else return c instanceof Blob?new Uint8Array(await c.arrayBuffer()):c instanceof Uint8Array?c:new Uint8Array(c)}}),Da,qi,Wi,xr,Gi,ji,Ne,tr,Hi,Sr,U,jr,Ki,Pa=S(()=>{gt(),Yn(),Jn(),Ee(),Wt(),gi(),Ba(),Da=(c,g)=>{Ce()._OrtInit(c,g)!==0&&ve("Can't initialize onnxruntime.")},qi=async c=>{Da(c.wasm.numThreads,yi(c.logLevel))},Wi=async(c,g)=>{Ce().asyncInit?.();let v=c.webgpu.adapter;if(g==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(v){if(typeof v.limits!="object"||typeof v.features!="object"||typeof v.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let k=c.webgpu.powerPreference;if(k!==void 0&&k!=="low-power"&&k!=="high-performance")throw new Error(`Invalid powerPreference setting: "${k}"`);let E=c.webgpu.forceFallbackAdapter;if(E!==void 0&&typeof E!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${E}"`);if(v=await navigator.gpu.requestAdapter({powerPreference:k,forceFallbackAdapter:E}),!v)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(g==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},xr=new Map,Gi=c=>{let g=Ce(),v=g.stackSave();try{let k=g.PTR_SIZE,E=g.stackAlloc(2*k);g._OrtGetInputOutputCount(c,E,E+k)!==0&&ve("Can't get session input/output count.");let B=k===4?"i32":"i64";return[Number(g.getValue(E,B)),Number(g.getValue(E+k,B))]}finally{g.stackRestore(v)}},ji=(c,g)=>{let v=Ce(),k=v.stackSave(),E=0;try{let B=v.PTR_SIZE,z=v.stackAlloc(2*B);v._OrtGetInputOutputMetadata(c,g,z,z+B)!==0&&ve("Can't get session input/output metadata.");let I=Number(v.getValue(z,"*"));E=Number(v.getValue(z+B,"*"));let R=v.HEAP32[E/4];if(R===0)return[I,0];let H=v.HEAPU32[E/4+1],ee=[];for(let G=0;G<H;G++){let L=Number(v.getValue(E+8+G*B,"*"));ee.push(L!==0?v.UTF8ToString(L):Number(v.getValue(E+8+(G+H)*B,"*")))}return[I,R,ee]}finally{v.stackRestore(k),E!==0&&v._OrtFree(E)}},Ne=c=>{let g=Ce(),v=g._malloc(c.byteLength);if(v===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${c.byteLength}.`);return g.HEAPU8.set(c,v),[v,c.byteLength]},tr=async(c,g)=>{let v,k,E=Ce();Array.isArray(c)?[v,k]=c:c.buffer===E.HEAPU8.buffer?[v,k]=[c.byteOffset,c.byteLength]:[v,k]=Ne(c);let B=0,z=0,I=[],R=[],H=[];try{if([z,I]=await Ma(g),g?.externalData&&E.mountExternalData){let we=[];for(let Me of g.externalData){let pe=typeof Me=="string"?Me:Me.path;we.push(vi(typeof Me=="string"?Me:Me.data).then(Tt=>{E.mountExternalData(pe,Tt)}))}await Promise.all(we)}for(let we of g?.executionProviders??[])if((typeof we=="string"?we:we.name)==="webnn"){if(E.shouldTransferToMLTensor=!1,typeof we!="string"){let Me=we,pe=Me?.context,Tt=Me?.gpuDevice,kt=Me?.deviceType,kr=Me?.powerPreference;pe?E.currentContext=pe:Tt?E.currentContext=await E.webnnCreateMLContext(Tt):E.currentContext=await E.webnnCreateMLContext({deviceType:kt,powerPreference:kr})}else E.currentContext=await E.webnnCreateMLContext();break}B=await E._OrtCreateSession(v,k,z),E.webgpuOnCreateSession?.(B),B===0&&ve("Can't create a session."),E.jsepOnCreateSession?.(),E.currentContext&&(E.webnnRegisterMLContext(B,E.currentContext),E.currentContext=void 0,E.shouldTransferToMLTensor=!0);let[ee,G]=Gi(B),L=!!g?.enableGraphCapture,ge=[],O=[],ae=[],nt=[],Re=[];for(let we=0;we<ee;we++){let[Me,pe,Tt]=ji(B,we);Me===0&&ve("Can't get an input name."),R.push(Me);let kt=E.UTF8ToString(Me);ge.push(kt),ae.push(pe===0?{name:kt,isTensor:!1}:{name:kt,isTensor:!0,type:jt(pe),shape:Tt})}for(let we=0;we<G;we++){let[Me,pe,Tt]=ji(B,we+ee);Me===0&&ve("Can't get an output name."),H.push(Me);let kt=E.UTF8ToString(Me);O.push(kt),nt.push(pe===0?{name:kt,isTensor:!1}:{name:kt,isTensor:!0,type:jt(pe),shape:Tt})}return xr.set(B,[B,R,H,null,L,!1]),[B,ge,O,ae,nt]}catch(ee){throw R.forEach(G=>E._OrtFree(G)),H.forEach(G=>E._OrtFree(G)),B!==0&&E._OrtReleaseSession(B)!==0&&ve("Can't release session."),ee}finally{E._free(v),z!==0&&E._OrtReleaseSessionOptions(z)!==0&&ve("Can't release session options."),I.forEach(ee=>E._free(ee)),E.unmountExternalData?.()}},Hi=c=>{let g=Ce(),v=xr.get(c);if(!v)throw new Error(`cannot release session. invalid session id: ${c}`);let[k,E,B,z,I]=v;z&&(I&&g._OrtClearBoundOutputs(z.handle)!==0&&ve("Can't clear bound outputs."),g._OrtReleaseBinding(z.handle)!==0&&ve("Can't release IO binding.")),g.jsepOnReleaseSession?.(c),g.webnnOnReleaseSession?.(c),g.webgpuOnReleaseSession?.(c),E.forEach(R=>g._OrtFree(R)),B.forEach(R=>g._OrtFree(R)),g._OrtReleaseSession(k)!==0&&ve("Can't release session."),xr.delete(c)},Sr=async(c,g,v,k,E,B,z=!1)=>{if(!c){g.push(0);return}let I=Ce(),R=I.PTR_SIZE,H=c[0],ee=c[1],G=c[3],L=G,ge,O;if(H==="string"&&(G==="gpu-buffer"||G==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(z&&G!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${B} when enableGraphCapture is true.`);if(G==="gpu-buffer"){let Re=c[2].gpuBuffer;O=Ht(Gt(H),ee);{let we=I.jsepRegisterBuffer;if(!we)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');ge=we(k,B,Re,O)}}else if(G==="ml-tensor"){let Re=c[2].mlTensor;O=Ht(Gt(H),ee);let we=I.webnnRegisterMLTensor;if(!we)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');ge=we(k,Re,Gt(H),ee)}else{let Re=c[2];if(Array.isArray(Re)){O=R*Re.length,ge=I._malloc(O),v.push(ge);for(let we=0;we<Re.length;we++){if(typeof Re[we]!="string")throw new TypeError(`tensor data at index ${we} is not a string`);I.setValue(ge+we*R,mt(Re[we],v),"*")}}else{let we=I.webnnIsGraphInput,Me=I.webnnIsGraphOutput;if(H!=="string"&&we&&Me){let pe=I.UTF8ToString(E);if(we(k,pe)||Me(k,pe)){let Tt=Gt(H);O=Ht(Tt,ee),L="ml-tensor";let kt=I.webnnCreateTemporaryTensor,kr=I.webnnUploadTensor;if(!kt||!kr)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Xr=await kt(k,Tt,ee);kr(Xr,new Uint8Array(Re.buffer,Re.byteOffset,Re.byteLength)),ge=Xr}else O=Re.byteLength,ge=I._malloc(O),v.push(ge),I.HEAPU8.set(new Uint8Array(Re.buffer,Re.byteOffset,O),ge)}else O=Re.byteLength,ge=I._malloc(O),v.push(ge),I.HEAPU8.set(new Uint8Array(Re.buffer,Re.byteOffset,O),ge)}}let ae=I.stackSave(),nt=I.stackAlloc(4*ee.length);try{ee.forEach((we,Me)=>I.setValue(nt+Me*R,we,R===4?"i32":"i64"));let Re=I._OrtCreateTensor(Gt(H),ge,O,nt,ee.length,Fi(L));Re===0&&ve(`Can't create tensor for input/output. session=${k}, index=${B}.`),g.push(Re)}finally{I.stackRestore(ae)}},U=async(c,g,v,k,E,B)=>{let z=Ce(),I=z.PTR_SIZE,R=xr.get(c);if(!R)throw new Error(`cannot run inference. invalid session id: ${c}`);let H=R[0],ee=R[1],G=R[2],L=R[3],ge=R[4];R[5];let O=g.length,ae=k.length,nt=0,Re=[],we=[],Me=[],pe=[],Tt=[],kt=z.stackSave(),kr=z.stackAlloc(O*I),Xr=z.stackAlloc(O*I),aa=z.stackAlloc(ae*I),Ga=z.stackAlloc(ae*I);try{[nt,Re]=Ca(B),ot("wasm prepareInputOutputTensor");for(let Be=0;Be<O;Be++)await Sr(v[Be],we,pe,c,ee[g[Be]],g[Be],ge);for(let Be=0;Be<ae;Be++)await Sr(E[Be],Me,pe,c,G[k[Be]],O+k[Be],ge);ut("wasm prepareInputOutputTensor");for(let Be=0;Be<O;Be++)z.setValue(kr+Be*I,we[Be],"*"),z.setValue(Xr+Be*I,ee[g[Be]],"*");for(let Be=0;Be<ae;Be++)z.setValue(aa+Be*I,Me[Be],"*"),z.setValue(Ga+Be*I,G[k[Be]],"*");z.jsepOnRunStart?.(H),z.webnnOnRunStart?.(H);let ct;ct=await z._OrtRun(H,Xr,kr,O,Ga,ae,aa,nt),ct!==0&&ve("failed to call OrtRun().");let nr=[],ja=[];ot("wasm ProcessOutputTensor");for(let Be=0;Be<ae;Be++){let rr=Number(z.getValue(aa+Be*I,"*"));if(rr===Me[Be]||Tt.includes(Me[Be])){nr.push(E[Be]),rr!==Me[Be]&&z._OrtReleaseTensor(rr)!==0&&ve("Can't release tensor.");continue}let Sn=z.stackSave(),cr=z.stackAlloc(4*I),Ti=!1,wt,Dt=0;try{z._OrtGetTensorData(rr,cr,cr+I,cr+2*I,cr+3*I)!==0&&ve(`Can't access output tensor data on index ${Be}.`);let na=I===4?"i32":"i64",Ei=Number(z.getValue(cr,na));Dt=z.getValue(cr+I,"*");let Ha=z.getValue(cr+I*2,"*"),Tn=Number(z.getValue(cr+I*3,na)),$t=[];for(let yt=0;yt<Tn;yt++)$t.push(Number(z.getValue(Ha+yt*I,na)));z._OrtFree(Ha)!==0&&ve("Can't free memory for tensor dims.");let hr=$t.reduce((yt,ht)=>yt*ht,1);wt=jt(Ei);let Qr=L?.outputPreferredLocations[k[Be]];if(wt==="string"){if(Qr==="gpu-buffer"||Qr==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let yt=[];for(let ht=0;ht<hr;ht++){let sr=z.getValue(Dt+ht*I,"*"),En=z.getValue(Dt+(ht+1)*I,"*"),kn=ht===hr-1?void 0:En-sr;yt.push(z.UTF8ToString(sr,kn))}nr.push([wt,$t,yt,"cpu"])}else if(Qr==="gpu-buffer"&&hr>0){let yt=z.jsepGetBuffer;if(!yt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ht=yt(Dt),sr=Ht(Ei,hr);if(sr===void 0||!_i(wt))throw new Error(`Unsupported data type: ${wt}`);Ti=!0,nr.push([wt,$t,{gpuBuffer:ht,download:z.jsepCreateDownloader(ht,sr,wt),dispose:()=>{z._OrtReleaseTensor(rr)!==0&&ve("Can't release tensor.")}},"gpu-buffer"])}else if(Qr==="ml-tensor"&&hr>0){let yt=z.webnnEnsureTensor,ht=z.webnnIsGraphInputOutputTypeSupported;if(!yt||!ht)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(Ei,hr)===void 0||!bi(wt))throw new Error(`Unsupported data type: ${wt}`);if(!ht(c,wt,!1))throw new Error(`preferredLocation "ml-tensor" for ${wt} output is not supported by current WebNN Context.`);let sr=await yt(c,Dt,Ei,$t,!1);Ti=!0,nr.push([wt,$t,{mlTensor:sr,download:z.webnnCreateMLTensorDownloader(Dt,wt),dispose:()=>{z.webnnReleaseTensorId(Dt),z._OrtReleaseTensor(rr)}},"ml-tensor"])}else if(Qr==="ml-tensor-cpu-output"&&hr>0){let yt=z.webnnCreateMLTensorDownloader(Dt,wt)(),ht=nr.length;Ti=!0,ja.push((async()=>{let sr=[ht,await yt];return z.webnnReleaseTensorId(Dt),z._OrtReleaseTensor(rr),sr})()),nr.push([wt,$t,[],"cpu"])}else{let yt=wi(wt),ht=new yt(hr);new Uint8Array(ht.buffer,ht.byteOffset,ht.byteLength).set(z.HEAPU8.subarray(Dt,Dt+ht.byteLength)),nr.push([wt,$t,ht,"cpu"])}}finally{z.stackRestore(Sn),wt==="string"&&Dt&&z._free(Dt),Ti||z._OrtReleaseTensor(rr)}}L&&!ge&&(z._OrtClearBoundOutputs(L.handle)!==0&&ve("Can't clear bound outputs."),xr.set(c,[H,ee,G,L,ge,!1]));for(let[Be,rr]of await Promise.all(ja))nr[Be][2]=rr;return ut("wasm ProcessOutputTensor"),nr}finally{z.webnnOnRunEnd?.(H),z.stackRestore(kt),we.forEach(ct=>z._OrtReleaseTensor(ct)),Me.forEach(ct=>z._OrtReleaseTensor(ct)),pe.forEach(ct=>z._free(ct)),nt!==0&&z._OrtReleaseRunOptions(nt),Re.forEach(ct=>z._free(ct))}},jr=c=>{let g=Ce(),v=xr.get(c);if(!v)throw new Error("invalid session id");let k=v[0],E=g._OrtEndProfiling(k);E===0&&ve("Can't get an profile file name."),g._OrtFree(E)},Ki=c=>{let g=[];for(let v of c){let k=v[2];!Array.isArray(k)&&"buffer"in k&&g.push(k.buffer)}return g}}),dr,$e,Tr,Hr,Mr,Kr,$i,xi,pr,Er,Zi,Xi,Qi,Ua,Na,$n,Zr,La,Va=S(()=>{gt(),Pa(),Wt(),ci(),dr=()=>!!ne.wasm.proxy&&typeof document<"u",Tr=!1,Hr=!1,Mr=!1,xi=new Map,pr=(c,g)=>{let v=xi.get(c);v?v.push(g):xi.set(c,[g])},Er=()=>{if(Tr||!Hr||Mr||!$e)throw new Error("worker not ready")},Zi=c=>{switch(c.data.type){case"init-wasm":Tr=!1,c.data.err?(Mr=!0,$i[1](c.data.err)):(Hr=!0,$i[0]()),Kr&&(URL.revokeObjectURL(Kr),Kr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let g=xi.get(c.data.type);c.data.err?g.shift()[1](c.data.err):g.shift()[0](c.data.out);break}}},Xi=async()=>{if(!Hr){if(Tr)throw new Error("multiple calls to 'initWasm()' detected.");if(Mr)throw new Error("previous call to 'initWasm()' failed.");if(Tr=!0,dr())return new Promise((c,g)=>{$e?.terminate(),Sa().then(([v,k])=>{try{$e=k,$e.onerror=B=>g(B),$e.onmessage=Zi,$i=[c,g];let E={type:"init-wasm",in:ne};if(!E.in.wasm.wasmPaths&&v){let B=ui();B&&(E.in.wasm.wasmPaths=B)}$e.postMessage(E),Kr=v}catch(E){g(E)}},g)});try{await mi(ne.wasm),await qi(ne),Hr=!0}catch(c){throw Mr=!0,c}finally{Tr=!1}}},Qi=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("init-ep",[g,v]);let k={type:"init-ep",in:{epName:c,env:ne}};$e.postMessage(k)});await Wi(ne,c)},Ua=async c=>dr()?(Er(),new Promise((g,v)=>{pr("copy-from",[g,v]);let k={type:"copy-from",in:{buffer:c}};$e.postMessage(k,[c.buffer])})):Ne(c),Na=async(c,g)=>{if(dr()){if(g?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Er(),new Promise((v,k)=>{pr("create",[v,k]);let E={type:"create",in:{model:c,options:{...g}}},B=[];c instanceof Uint8Array&&B.push(c.buffer),$e.postMessage(E,B)})}else return tr(c,g)},$n=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("release",[g,v]);let k={type:"release",in:c};$e.postMessage(k)});Hi(c)},Zr=async(c,g,v,k,E,B)=>{if(dr()){if(v.some(z=>z[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(E.some(z=>z))throw new Error("pre-allocated output tensor is not supported for proxy.");return Er(),new Promise((z,I)=>{pr("run",[z,I]);let R=v,H={type:"run",in:{sessionId:c,inputIndices:g,inputs:R,outputIndices:k,options:B}};$e.postMessage(H,Ki(R))})}else return U(c,g,v,k,E,B)},La=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("end-profiling",[g,v]);let k={type:"end-profiling",in:c};$e.postMessage(k)});jr(c)}}),Fa,Yi,Ji,ea=S(()=>{gt(),Va(),Ee(),ni(),Ba(),Fa=(c,g)=>{switch(c.location){case"cpu":return[c.type,c.dims,c.data,"cpu"];case"gpu-buffer":return[c.type,c.dims,{gpuBuffer:c.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[c.type,c.dims,{mlTensor:c.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${c.location} for ${g()}`)}},Yi=c=>{switch(c[3]){case"cpu":return new Xe(c[0],c[2],c[1]);case"gpu-buffer":{let g=c[0];if(!_i(g))throw new Error(`not supported data type: ${g} for deserializing GPU tensor`);let{gpuBuffer:v,download:k,dispose:E}=c[2];return Xe.fromGpuBuffer(v,{dataType:g,dims:c[1],download:k,dispose:E})}case"ml-tensor":{let g=c[0];if(!bi(g))throw new Error(`not supported data type: ${g} for deserializing MLTensor tensor`);let{mlTensor:v,download:k,dispose:E}=c[2];return Xe.fromMLTensor(v,{dataType:g,dims:c[1],download:k,dispose:E})}default:throw new Error(`invalid data location: ${c[3]}`)}},Ji=class{async fetchModelAndCopyToWasmMemory(c){return Ua(await vi(c))}async loadModel(c,g){dt();let v;typeof c=="string"?v=await this.fetchModelAndCopyToWasmMemory(c):v=c,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Na(v,g),pt()}async dispose(){return $n(this.sessionId)}async run(c,g,v){dt();let k=[],E=[];Object.entries(c).forEach(G=>{let L=G[0],ge=G[1],O=this.inputNames.indexOf(L);if(O===-1)throw new Error(`invalid input '${L}'`);k.push(ge),E.push(O)});let B=[],z=[];Object.entries(g).forEach(G=>{let L=G[0],ge=G[1],O=this.outputNames.indexOf(L);if(O===-1)throw new Error(`invalid output '${L}'`);B.push(ge),z.push(O)});let I=k.map((G,L)=>Fa(G,()=>`input "${this.inputNames[E[L]]}"`)),R=B.map((G,L)=>G?Fa(G,()=>`output "${this.outputNames[z[L]]}"`):null),H=await Zr(this.sessionId,E,I,z,R,v),ee={};for(let G=0;G<H.length;G++)ee[this.outputNames[z[G]]]=B[G]??Yi(H[G]);return pt(),ee}startProfiling(){}endProfiling(){La(this.sessionId)}}}),Si={};K(Si,{OnnxruntimeWebAssemblyBackend:()=>ra,initializeFlags:()=>ta,wasmBackend:()=>ia});var ta,ra,ia,qa=S(()=>{gt(),Va(),ea(),ta=()=>{(typeof ne.wasm.initTimeout!="number"||ne.wasm.initTimeout<0)&&(ne.wasm.initTimeout=0);let c=ne.wasm.simd;if(typeof c!="boolean"&&c!==void 0&&c!=="fixed"&&c!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${c}". Reset it to \`false\` and ignore SIMD feature checking.`),ne.wasm.simd=!1),typeof ne.wasm.proxy!="boolean"&&(ne.wasm.proxy=!1),typeof ne.wasm.trace!="boolean"&&(ne.wasm.trace=!1),typeof ne.wasm.numThreads!="number"||!Number.isInteger(ne.wasm.numThreads)||ne.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ne.wasm.numThreads=1;else{let g=typeof navigator>"u"?q("node:os").cpus().length:navigator.hardwareConcurrency;ne.wasm.numThreads=Math.min(4,Math.ceil((g||1)/2))}},ra=class{async init(c){ta(),await Xi(),await Qi(c)}async createInferenceSessionHandler(c,g){let v=new Ji;return await v.loadModel(c,g),v}},ia=new ra}),Wa={};K(Wa,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>es,env:()=>ne,registerBackend:()=>oe}),gt(),gt(),gt();var xn="1.27.0",es=Gr;{let c=(qa(),he(Si)).wasmBackend;oe("cpu",c,10),oe("wasm",c,10)}return Object.defineProperty(ne.versions,"web",{value:xn,enumerable:!0}),he(Wa)})();b.exports=M})(wo)),wo.exports}var Vh;function Vm(){return Vh||(Vh=1,(function(b){var A=Lr&&Lr.__createBinding||(Object.create?(function(be,Ie,me,ce){ce===void 0&&(ce=me);var je=Object.getOwnPropertyDescriptor(Ie,me);(!je||("get"in je?!Ie.__esModule:je.writable||je.configurable))&&(je={enumerable:!0,get:function(){return Ie[me]}}),Object.defineProperty(be,ce,je)}):(function(be,Ie,me,ce){ce===void 0&&(ce=me),be[ce]=Ie[me]})),M=Lr&&Lr.__setModuleDefault||(Object.create?(function(be,Ie){Object.defineProperty(be,"default",{enumerable:!0,value:Ie})}):function(be,Ie){be.default=Ie}),F=Lr&&Lr.__importStar||function(be){if(be&&be.__esModule)return be;var Ie={};if(be!=null)for(var me in be)me!=="default"&&Object.prototype.hasOwnProperty.call(be,me)&&A(Ie,be,me);return M(Ie,be),Ie};Object.defineProperty(b,"__esModule",{value:!0}),b.MicVAD=b.getDefaultRealTimeVADOptions=b.ort=b.DEFAULT_MODEL=void 0;const J=F(Lm()),te=zo(),N=Oo(),q=vn(),S=Xn(),K=rf(),V=af();b.DEFAULT_MODEL="legacy",b.ort=J;const he="vad.worklet.bundle.min.js",ue="silero_vad_v5.onnx",de="silero_vad_legacy.onnx",oe=be=>({...N.defaultFrameProcessorOptions,onFrameProcessed:()=>{},onVADMisfire:()=>{q.log.debug("VAD misfire")},onSpeechStart:()=>{q.log.debug("Detected speech start")},onSpeechEnd:()=>{q.log.debug("Detected speech end")},onSpeechRealStart:()=>{q.log.debug("Detected real speech start")},baseAssetPath:"./",onnxWASMBasePath:"./",model:be,workletOptions:{},getStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),pauseStream:async Ie=>{Ie.getTracks().forEach(me=>{me.stop()})},resumeStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),ortConfig:Ie=>{Ie.env.logLevel="error"},startOnLoad:!0,processorType:"auto"});b.getDefaultRealTimeVADOptions=oe;const ie=be=>"audioWorklet"in be&&typeof AudioWorkletNode=="function"?"AudioWorklet":"ScriptProcessor";async function Te(be,Ie,me,ce,je){await me.audioWorklet.addModule(be),Ie.processorOptions={...Ie.processorOptions??{},frameSamples:ce};const ne=new AudioWorkletNode(me,"vad-helper-worklet",Ie);return ne.port.onmessage=async qe=>{if(qe.data?.message===S.Message.AudioFrame){let et=qe.data.data;et instanceof ArrayBuffer||(et=new ArrayBuffer(qe.data.data.byteLength),new Uint8Array(et).set(new Uint8Array(qe.data.data)));const rt=new Float32Array(et);await je(rt)}},ne}async function Fe(be,Ie,me){const ce=new V.Resampler({nativeSampleRate:be.sampleRate,targetSampleRate:16e3,targetFrameSize:Ie??480});q.log.debug("using script processor");const ne=be.createScriptProcessor(4096,1,1);let qe=!1;return ne.onaudioprocess=async et=>{if(!qe){qe=!0;try{const rt=et.inputBuffer.getChannelData(0);if(et.outputBuffer.getChannelData(0).fill(0),ce){const it=ce.process(rt);for(const ft of it)await me(ft)}}catch(rt){console.error("Error processing audio:",rt)}finally{qe=!1}}},ne.connect(be.destination),ne}class Ze{constructor(Ie,me,ce,je=!1,ne=null,qe=null,et=null,rt=null,st=null,it=null,ft="uninitialized",Yt=!1){this.options=Ie,this.frameProcessor=me,this.frameSamples=ce,this.listening=je,this.errored=ne,this._stream=qe,this._audioContext=et,this._vadNode=rt,this._mediaStreamAudioSourceNode=st,this._audioProcessorAdapterType=it,this.initializationState=ft,this.ownsAudioContext=Yt,this.getAudioInstances=()=>{if(this._stream===null||this._audioContext===null||this._vadNode==null||this._mediaStreamAudioSourceNode==null)throw new Error("MicVAD has null stream, audio context, or processor adapter");return{stream:this._stream,audioContext:this._audioContext,vadNode:this._vadNode,mediaStreamAudioSourceNode:this._mediaStreamAudioSourceNode}},this.setErrored=Ve=>{this.initializationState="errored",this.errored=Ve},this.start=async()=>{switch(this.initializationState){case"uninitialized":{q.log.debug("initializing micVAD"),this.initializationState="initializing",this.frameProcessor.resume();try{this._stream=await this.options.getStream()}catch(Ve){throw Ve instanceof Error?this.setErrored(Ve.message):this.setErrored(String(Ve)),Ve}if(this.options.audioContext||(this._audioContext=new AudioContext,this.ownsAudioContext=!0),!this._audioContext)throw this.setErrored("Audio context is null"),Error("Audio context is null");switch(this._audioProcessorAdapterType=this.options.processorType=="auto"?ie(this._audioContext):this.options.processorType,this._audioProcessorAdapterType){case"AudioWorklet":this._vadNode=await Te(this.options.baseAssetPath+he,this.options.workletOptions??{},this._audioContext,this.frameSamples,this.processFrame);break;case"ScriptProcessor":this._vadNode=await Fe(this._audioContext,this.frameSamples,this.processFrame);break;default:throw new Error(`Unsupported audio processor adapter type: ${this._audioProcessorAdapterType}`)}this._mediaStreamAudioSourceNode=new MediaStreamAudioSourceNode(this._audioContext,{mediaStream:this._stream}),this._mediaStreamAudioSourceNode.connect(this._vadNode),q.log.debug("started micVAD"),this.listening=!0,this.initializationState="initialized";break}case"initializing":{q.log.warn("start called while initializing");break}case"initialized":{if(this.listening)return;this.listening=!0,this.frameProcessor.resume();const{stream:Ve,audioContext:Rt,vadNode:Jt}=this.getAudioInstances();this._stream=await this.options.resumeStream(Ve);const Ct=new MediaStreamAudioSourceNode(Rt,{mediaStream:this._stream});this._mediaStreamAudioSourceNode=Ct,Ct.connect(Jt);break}case"destroyed":{q.log.warn("start called after destroyed");break}case"errored":{q.log.error("start called after errored");break}default:{q.log.warn("weird initialization state");break}}},this.pause=async()=>{if(!this.listening)return;this.listening=!1;const{stream:Ve,mediaStreamAudioSourceNode:Rt}=this.getAudioInstances();await this.options.pauseStream(Ve),Rt.disconnect(),this.frameProcessor.pause(this.handleFrameProcessorEvent)},this.destroy=()=>{q.log.debug("destroy called"),this.initializationState="destroyed";const{vadNode:Ve}=this.getAudioInstances();Ve instanceof AudioWorkletNode&&Ve.port.postMessage(S.Message.SpeechStop),this.listening&&this.pause(),this.ownsAudioContext&&this._audioContext?.close()},this.setOptions=Ve=>{this.frameProcessor.setOptions(Ve)},this.processFrame=async Ve=>{await this.frameProcessor.process(Ve,this.handleFrameProcessorEvent)},this.handleFrameProcessorEvent=Ve=>{switch(Ve.msg){case S.Message.FrameProcessed:this.options.onFrameProcessed(Ve.probs,Ve.frame);break;case S.Message.SpeechStart:this.options.onSpeechStart();break;case S.Message.SpeechRealStart:this.options.onSpeechRealStart();break;case S.Message.VADMisfire:this.options.onVADMisfire();break;case S.Message.SpeechEnd:this.options.onSpeechEnd(Ve.audio);break}}}static async new(Ie={}){const me={...(0,b.getDefaultRealTimeVADOptions)(Ie.model??b.DEFAULT_MODEL),...Ie};(0,N.validateOptions)(me),b.ort.env.wasm.wasmPaths=me.onnxWASMBasePath,me.ortConfig!==void 0&&me.ortConfig(b.ort);const ce=me.model==="v5"?ue:de,je=me.baseAssetPath+ce,ne=me.model==="v5"?K.SileroV5.new:K.SileroLegacy.new;let qe;try{qe=await ne(b.ort,()=>(0,te.defaultModelFetcher)(je))}catch(ft){throw console.error(`Encountered an error while loading model file ${je}`),ft}const et=me.model==="v5"?512:1536,rt=et/16,st=new N.FrameProcessor(qe.process,qe.reset_state,{positiveSpeechThreshold:me.positiveSpeechThreshold,negativeSpeechThreshold:me.negativeSpeechThreshold,redemptionMs:me.redemptionMs,preSpeechPadMs:me.preSpeechPadMs,minSpeechMs:me.minSpeechMs,submitUserSpeechOnPause:me.submitUserSpeechOnPause},rt),it=new Ze(me,st,et);if(me.startOnLoad)try{await it.start()}catch(ft){throw console.error("Error starting micVad",ft),ft}return it}}b.MicVAD=Ze})(Lr)),Lr}var Fh;function qh(){return Fh||(Fh=1,(function(b){Object.defineProperty(b,"__esModule",{value:!0}),b.getDefaultRealTimeVADOptions=b.MicVAD=b.DEFAULT_MODEL=b.utils=b.NonRealTimeVAD=b.Message=b.FrameProcessor=b.defaultModelFetcher=b.baseAssetPath=void 0;var A=Jh();Object.defineProperty(b,"baseAssetPath",{enumerable:!0,get:function(){return A.baseAssetPath}});var M=zo();Object.defineProperty(b,"defaultModelFetcher",{enumerable:!0,get:function(){return M.defaultModelFetcher}});var F=Oo();Object.defineProperty(b,"FrameProcessor",{enumerable:!0,get:function(){return F.FrameProcessor}});var J=Xn();Object.defineProperty(b,"Message",{enumerable:!0,get:function(){return J.Message}});var te=Um();Object.defineProperty(b,"NonRealTimeVAD",{enumerable:!0,get:function(){return te.NonRealTimeVAD}});const N=Nm();b.utils={audioFileToArray:N.audioFileToArray,minFramesForTargetMS:N.minFramesForTargetMS,arrayBufferToBase64:N.arrayBufferToBase64,encodeWAV:N.encodeWAV};var q=Vm();Object.defineProperty(b,"DEFAULT_MODEL",{enumerable:!0,get:function(){return q.DEFAULT_MODEL}}),Object.defineProperty(b,"MicVAD",{enumerable:!0,get:function(){return q.MicVAD}}),Object.defineProperty(b,"getDefaultRealTimeVADOptions",{enumerable:!0,get:function(){return q.getDefaultRealTimeVADOptions}})})(fo)),fo}var Wh;function Fm(){return Wh||(Wh=1,(function(b){Object.defineProperty(b,"__esModule",{value:!0}),b.useMicVAD=b.getDefaultReactRealTimeVADOptions=b.utils=void 0;const A=qh(),M=am();var F=qh();Object.defineProperty(b,"utils",{enumerable:!0,get:function(){return F.utils}});const J={userSpeakingThreshold:.6},te=S=>({...(0,A.getDefaultRealTimeVADOptions)(S),...J});b.getDefaultReactRealTimeVADOptions=te;function N(S){const K=S.model??A.DEFAULT_MODEL,V={...(0,b.getDefaultReactRealTimeVADOptions)(K),...S},he={userSpeakingThreshold:V.userSpeakingThreshold},ue={positiveSpeechThreshold:V.positiveSpeechThreshold,negativeSpeechThreshold:V.negativeSpeechThreshold,redemptionMs:V.redemptionMs,preSpeechPadMs:V.preSpeechPadMs,minSpeechMs:V.minSpeechMs,submitUserSpeechOnPause:V.submitUserSpeechOnPause,onFrameProcessed:V.onFrameProcessed,onVADMisfire:V.onVADMisfire,onSpeechStart:V.onSpeechStart,onSpeechEnd:V.onSpeechEnd,onSpeechRealStart:V.onSpeechRealStart,baseAssetPath:V.baseAssetPath,onnxWASMBasePath:V.onnxWASMBasePath,model:V.model,workletOptions:V.workletOptions,getStream:V.getStream,pauseStream:V.pauseStream,resumeStream:V.resumeStream,startOnLoad:V.startOnLoad,processorType:V.processorType};return V.ortConfig&&(ue.ortConfig=V.ortConfig),V.audioContext&&(ue.audioContext=V.audioContext),[he,ue]}function q(S){const[K,V]=N(S),he=S.model??A.DEFAULT_MODEL,[ue,de]=(0,M.useState)(!1),[oe,ie]=(0,M.useState)(!0),[Te,Fe]=(0,M.useState)(!1),[Ze,be]=(0,M.useState)(!1),[Ie,me]=(0,M.useState)(null),ce=(0,M.useRef)(V.onFrameProcessed),je=(0,M.useRef)(V.onSpeechEnd),ne=(0,M.useRef)(V.onSpeechStart),qe=(0,M.useRef)(V.onSpeechRealStart),et=(0,M.useRef)(V.onVADMisfire),rt=(0,M.useRef)(V.getStream);(0,M.useEffect)(()=>{ce.current=V.onFrameProcessed,je.current=V.onSpeechEnd,ne.current=V.onSpeechStart,qe.current=V.onSpeechRealStart,et.current=V.onVADMisfire},[V.onFrameProcessed,V.onSpeechEnd,V.onSpeechStart,V.onSpeechRealStart,V.onVADMisfire]),(0,M.useEffect)(()=>{rt.current=V.getStream},[V.getStream]);const st=V.getStream.toString();(0,M.useEffect)(()=>{let Ve=null,Rt=!1;return(async()=>{try{ie(!0),Fe(!1);const Ct={...V,onFrameProcessed:(lt,zt)=>{const Ot=lt.isSpeech>K.userSpeakingThreshold;de(Ot),ce.current(lt,zt)},onSpeechEnd:lt=>{je.current(lt)},onSpeechStart:()=>{ne.current()},onSpeechRealStart:()=>{qe.current()},onVADMisfire:()=>{et.current()},getStream:()=>rt.current()};if(Ve=await A.MicVAD.new(Ct),Rt){Ve.destroy();return}me(Ve),ie(!1),V.startOnLoad&&(Ve.start(),be(!0))}catch(Ct){ie(!1),Ct instanceof Error?Fe(Ct.message):Fe(String(Ct))}})().catch(()=>{}),function(){Rt=!0,Ve&&Ve.destroy(),!oe&&!Te&&be(!1)}},[st,he]);const it=(0,M.useCallback)(()=>{!oe&&!Te&&(Ie?.pause(),be(!1))},[oe,Te,Ie]),ft=(0,M.useCallback)(()=>{!oe&&!Te&&(Ie?.start(),be(!0))},[oe,Te,Ie]),Yt=(0,M.useCallback)(()=>{Ze?it():ft()},[Ze,it,ft]);return{listening:Ze,errored:Te,loading:oe,userSpeaking:ue,pause:it,start:ft,toggle:Yt}}b.useMicVAD=q})(ho)),ho}var yo=Fm();function qm({bgColor:b,pColor:A,iconColor:M,onVoiceSend:F,handleInterrupt:J}){const[te,N]=St.useState(!1),[q,S]=St.useState(null);St.useRef("");const K=Yh(),V=yo.useMicVAD({model:"v5",startOnLoad:!1,positiveSpeechThreshold:.6,negativeSpeechThreshold:.3,minSpeechFrames:1,frameSamples:512,onSpeechStart:()=>{console.log("Speech started"),J?.()},onSpeechEnd:async ie=>{if(console.log("Speech ended"),ie.length>0){const Te=yo.utils.encodeWAV(ie),Fe=yo.utils.arrayBufferToBase64(Te);he(Fe)}}});function he(ie){q&&q.readyState===WebSocket.OPEN&&q.send(JSON.stringify({data:ie,languageCode:K.code}))}const ue=()=>{{console.error("WebSocket URL is not defined");return}},de=async()=>{try{const ie=await navigator.permissions.query({name:"microphone"});return ie.state==="granted"?!0:ie.state==="prompt"?((await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Fe=>Fe.stop()),!0):(alert("Microphone access denied. Please enable it from your browser settings."),!1)}catch(ie){return console.error("Error accessing microphone:",ie),!1}},oe=async()=>{await de()&&(te?(q&&q.close(),V.pause(),N(!1)):(ue(),V.start(),N(!0)))};return Ge.jsx("div",{style:{backgroundColor:b,outlineColor:A,color:M},role:"button",tabIndex:0,className:`voice-recorder-icon ${te?"recording":""}`,onClick:oe,children:dm})}function Wm({design:b,language:A,onSend:M,onChangeLanguage:F,promisesArray:J,onVoiceSend:te,clearChat:N,activateVoiceBot:q}){const{placeholder:S="Type your message...",pColor:K,bgColor:V,secBgColor:he,iconColor:ue,multiLanguageChat:de,translateLanguages:oe}=b||{};let ie=b||{};ie=[Yh()];const[Fe,Ze]=St.useState(""),be=St.useRef("");St.useEffect(()=>{N&&(be.current="")},[N]);const Ie=()=>{!M||!Fe?.trim()||(M({message:Fe.trim()}),Ze(""))},me=ne=>{ne.keyCode===13&&Ie()},ce=St.useCallback(ne=>{const qe=ne.currentTarget.value;Ze(qe)},[]);function je(){J&&J.length>0&&J.map(ne=>{ne(),J.pop(ne)})}return Ge.jsxs("div",{className:"message-block",children:[de&&Ge.jsx("div",{className:"language-picker-wrapper",children:Ge.jsx(Rm,{pColor:K,value:A,onChange:F,translateLanguages:oe,defaultSelectedLanguage:ie})}),Ge.jsx("input",{style:{borderColor:he,fontSize:13,fontFamily:"inherit"},value:Fe,placeholder:S,disabled:!M,onChange:ce,onKeyDown:me,id:"messageInputBox"}),Ge.jsxs("div",{className:"action-buttons",children:[q&&Ge.jsx(qm,{bgColor:V,pColor:K,iconColor:ue,onVoiceSend:te,handleInterrupt:je}),Ge.jsx("div",{style:{backgroundColor:V,outlineColor:K,color:ue},role:"button",tabIndex:0,className:"send-icon",onClick:Ie,onKeyDown:me,id:"msgSendButton",children:pm})]})]})}function tg({botDesign:b,messages:A,showTime:M,displayComponents:F,disabledMessage:J,optionsRenderer:te,onUserMessage:N,onHistoryChange:q,onClear:S,onHide:K,onCallback:V,onLinkClick:he,hostOrigin:ue,language:de,setLanguage:oe,fullScreen:ie,isCustomChatWindow:Te,activateVoiceBot:Fe}){const[Ze,be]=St.useState([]),[Ie,me]=St.useState(!1),ce=St.useRef({}),je=St.useRef([]),ne=St.useRef(null),qe=St.useRef(null),et=St.useRef(!1),rt=St.useRef([]);ce.current.history=Ze,ce.current.onUserMessage=N,ce.current.onHistoryChange=q;const{window:st={},header:it,body:ft,composer:Yt}=b||{},Ve=st?.chatWindowType||b?.chatWindowType||"default",Rt={width:st.width,height:st.height,marginRight:st.spacingCorner,marginLeft:st.spacingCorner,fontFamily:st.fontFamily,bottom:Te?"0px":(parseFloat(st.height)||500)+(parseFloat(st.spacingBottom)||0)+"px"},Jt=St.useCallback(async Ot=>{const{history:Mt,onHistoryChange:Vt,onUserMessage:ar}=ce.current;let Ft=Mt.length;const Et=Ot.message||Ot;if(typeof Et=="string"){const We=[...Mt,{role:"user",type:"text",content:Et}];Ft=We.length,be(We),Vt?.(We)}else Vt?.(Mt);me(!0),ar(Et).then(We=>{let Qe=[...ce.current.history];Array.isArray(We)?Qe.splice(Ft,0,...We):Qe.splice(Ft,0,We);const Xe=Qe.length-1;Qe=Qe.filter((qt,Ye)=>!ph.includes(qt.type)||Ye===Xe),be(Qe),Vt?.(Qe)}).finally(()=>{me(!1)})},[]),Ct=St.useCallback(Ot=>{const{history:Mt,onHistoryChange:Vt,onUserMessage:ar}=ce.current;let Ft=Mt.length;const Et=Ot.message;et.current&&(et.current=!1);function We(Qe,Xe){let qt,Ye=!1,er=!1;return{userPromises:new Promise((pt,ot)=>{qt=()=>{Ye||(er=!0,Ye=!0,ne.current&&(ne.current.pause(),ne.current.currentTime=0,ne.current=null),qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ot(new Error("Audio playback cancelled.")))},Qe.then(async ut=>{if(pt(!0),Ye)return;if(er){Ye=!0,ot(new Error("cancelled"));return}let Pt=[...ce.current.history];Array.isArray(ut.data)?Pt.splice(Xe,0,...ut.data):Pt.splice(Xe,0,ut.data);const vr=ut.audioUri;if(vr){ne.current&&(ne.current.pause(),ne.current=null),qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ne.current=new Audio(vr);const Bt=ne.current.play();Bt&&typeof Bt.then=="function"&&Bt.catch($r=>{console.log("Audio playback error:",$r),Ye||(Ye=!0,ne.current=null,ot(new Error("Audio playback error.")))}),ne.current.onended=()=>{Ye||(Ye=!0,Ot.resetData.current="",ne.current=null,qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),rt.current=[])},ne.current.onerror=()=>{Ye||(Ye=!0,ne.current=null,qe.current&&(URL.revokeObjectURL(qe.current),qe.current=null),ot(new Error("Audio playback error.")))}}else{Ye||(Ye=!0,ot(new Error("Invalid audio buffer data.")));return}const Wr=Pt.length-1;Pt=Pt.filter((Bt,$r)=>!ph.includes(Bt.type)||$r===Wr),be(Pt),Vt?.(Pt)}).catch(ut=>{Ye||(Ye=!0,ot(ut))}).finally(()=>{me(!1)})}),cancelPromises:qt}}if(typeof Et=="string")if(Et&&Et?.trim()===""){const Qe=[...Mt,{role:"user",type:"text",content:"Language not detected please try again"}];be(Qe),Vt?.(Qe)}else{const Qe=[...Mt,{role:"user",type:"text",content:Et}];Ft=Qe.length,be(Qe),Vt?.(Qe)}else Vt?.(Mt);try{if(Et&&Et.trim()!==""){me(!0),rt.current.push(Et);const{userPromises:Qe,cancelPromises:Xe}=We(rt.current.length===1?ar(Et,!0):ar(rt.current.join(" "),!0),Ft);return Qe.then(()=>{rt.current=[]}).catch(qt=>(console.log("Cancelled or error in userPromises",qt),!1)),console.log(rt.current.length,"inCompletedMessages"),je.current.push(Xe),!0}return!1}catch(Qe){console.log(Qe)}},[ne,qe]),lt=()=>{S&&S(),et.current=!0};St.useEffect(()=>{be(A||[])},[A]);const zt=St.useMemo(()=>F?{...ch,...F}:ch,[F]);return Ge.jsx("div",{className:`${Ve==="default"?"default":"theme-one"}`,children:Ge.jsx("div",{className:`chat-container ${Te?"no-animation":""}`,style:Rt,children:Ge.jsxs("div",{className:`chat-window ${Te?"no-shadow":""}`,children:[!Te&&Ge.jsx(zm,{design:it,onClear:lt,onHide:K,fullScreen:ie}),Ge.jsx(nm,{chatWindowType:Ve,design:ft,messages:Ze,displayComponents:zt,showTime:M,showLoader:Ie,optionsRenderer:te,onSendMessage:N?Jt:void 0,onCallback:V,openLinksInSameTab:st.openLinksInSameTab,onLinkClick:he,hostOrigin:ue}),Ge.jsx(Wm,{design:Yt,language:de,onSend:J?void 0:Jt,onChangeLanguage:oe,promisesArray:je.current,onVoiceSend:Ct,clearChat:et.current,activateVoiceBot:Fe}),Ge.jsx(Om,{message:st.disclaimer,hideLivservBranding:st.hideLivservBranding,domainSettings:st?.domainSettings})]})})})}export{tg as C,eg as a,Zm as b,Qm as c,Zh as d,Jm as e,Yh as f,Ym as g,Xm as s};
