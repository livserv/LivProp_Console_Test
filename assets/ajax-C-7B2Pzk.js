const Y=Symbol.for("constructDateFrom");function b(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Y in e?e[Y](t):e instanceof Date?new e.constructor(t):new Date(t)}function g(e,t){return b(t||e,e)}let L={};function W(){return L}function D(e,t){var c,d,u,f;const n=W(),r=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??0,a=g(e,t==null?void 0:t.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function v(e,t){return D(e,{...t,weekStartsOn:1})}function Q(e,t){const n=g(e,t==null?void 0:t.in),r=n.getFullYear(),a=b(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=v(a),o=b(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const c=v(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function E(e){const t=g(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function R(e,...t){const n=b.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function F(e,t){const n=g(e,t==null?void 0:t.in);return n.setHours(0,0,0,0),n}function p(e,t,n){const[r,a]=R(n==null?void 0:n.in,e,t),i=F(r),o=F(a),c=+i-E(i),d=+o-E(o);return Math.round((c-d)/864e5)}function B(e,t){const n=Q(e,t),r=b(e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),v(r)}function G(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function I(e){return!(!G(e)&&typeof e!="number"||isNaN(+g(e)))}function V(e,t){const n=g(e,t==null?void 0:t.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},J=(e,t,n)=>{let r;const a=j[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function T(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const U={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},z={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},K={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Z={date:T({formats:U,defaultWidth:"full"}),time:T({formats:z,defaultWidth:"full"}),dateTime:T({formats:K,defaultWidth:"full"})},tt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},et=(e,t,n,r)=>tt[e];function k(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,c=n!=null&&n.width?String(n.width):o;a=e.formattingValues[c]||e.formattingValues[o]}else{const o=e.defaultWidth,c=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[c]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const nt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},at={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},it={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},st={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ct=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ut={ordinalNumber:ct,era:k({values:nt,defaultWidth:"wide"}),quarter:k({values:rt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:k({values:at,defaultWidth:"wide"}),day:k({values:it,defaultWidth:"wide"}),dayPeriod:k({values:ot,defaultWidth:"wide",formattingValues:st,defaultFormattingWidth:"wide"})};function x(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const o=i[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?ft(c,m=>m.test(o)):dt(c,m=>m.test(o));let u;u=e.valueCallback?e.valueCallback(d):d,u=n.valueCallback?n.valueCallback(u):u;const f=t.slice(o.length);return{value:u,rest:f}}}function dt(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ft(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ht(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const c=t.slice(a.length);return{value:o,rest:c}}}const lt=/^(\d+)(th|st|nd|rd)?/i,mt=/\d+/i,gt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wt={any:[/^b/i,/^(a|c)/i]},yt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bt={any:[/1/i,/2/i,/3/i,/4/i]},Pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},xt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vt={ordinalNumber:ht({matchPattern:lt,parsePattern:mt,valueCallback:e=>parseInt(e,10)}),era:x({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),quarter:x({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:x({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),day:x({matchPatterns:Ot,defaultMatchWidth:"wide",parsePatterns:kt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:xt,defaultMatchWidth:"any",parsePatterns:Dt,defaultParseWidth:"any"})},Wt={code:"en-US",formatDistance:J,formatLong:Z,formatRelative:et,localize:ut,match:vt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function St(e,t){const n=g(e,t==null?void 0:t.in);return p(n,V(n))+1}function Tt(e,t){const n=g(e,t==null?void 0:t.in),r=+v(n)-+B(n);return Math.round(r/6048e5)+1}function X(e,t){var f,m,w,O;const n=g(e,t==null?void 0:t.in),r=n.getFullYear(),a=W(),i=(t==null?void 0:t.firstWeekContainsDate)??((m=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(w=a.locale)==null?void 0:w.options)==null?void 0:O.firstWeekContainsDate)??1,o=b((t==null?void 0:t.in)||e,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=D(o,t),d=b((t==null?void 0:t.in)||e,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const u=D(d,t);return+n>=+c?r+1:+n>=+u?r:r-1}function Yt(e,t){var c,d,u,f;const n=W(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(u=n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??1,a=X(e,t),i=b((t==null?void 0:t.in)||e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),D(i,t)}function Et(e,t){const n=g(e,t==null?void 0:t.in),r=+D(n,t)-+Yt(n,t);return Math.round(r/6048e5)+1}function s(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const y={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return s(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):s(n+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return s(a,t.length)}},M={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},C={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(e,t)},Y:function(e,t,n,r){const a=X(e,r),i=a>0?a:1-a;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const n=Q(e);return s(n,t.length)},u:function(e,t){const n=e.getFullYear();return s(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Et(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):s(a,t.length)},I:function(e,t,n){const r=Tt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,n){const r=St(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return s(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return N(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return N(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,t,n){const r=Math.trunc(+e/1e3);return s(r,t.length)},T:function(e,t,n){return s(+e,t.length)}};function q(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+s(i,2)}function N(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):P(e,t)}function P(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=s(Math.trunc(r/60),2),i=s(r%60,2);return n+a+t+i}const H=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},_=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ft=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return H(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",H(r,t)).replace("{{time}}",_(a,t))},Ct={p:_,P:Ft},qt=/^D+$/,Nt=/^Y+$/,Ht=["D","DD","YY","YYYY"];function Qt(e){return qt.test(e)}function Xt(e){return Nt.test(e)}function _t(e,t,n){const r=$t(e,t,n);if(console.warn(r),Ht.includes(e))throw new RangeError(r)}function $t(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const At=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rt=/^'([^]*?)'?$/,pt=/''/g,Bt=/[a-zA-Z]/;function $(e,t,n){var f,m,w,O;const r=W(),a=r.locale??Wt,i=r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=r.weekStartsOn??((O=(w=r.locale)==null?void 0:w.options)==null?void 0:O.weekStartsOn)??0,c=g(e,n==null?void 0:n.in);if(!I(c))throw new RangeError("Invalid time value");let d=t.match(Lt).map(l=>{const h=l[0];if(h==="p"||h==="P"){const S=Ct[h];return S(l,a.formatLong)}return l}).join("").match(At).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const h=l[0];if(h==="'")return{isToken:!1,value:Gt(l)};if(C[h])return{isToken:!0,value:l};if(h.match(Bt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const u={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return d.map(l=>{if(!l.isToken)return l.value;const h=l.value;(Xt(h)||Qt(h))&&_t(h,t,String(e));const S=C[h[0]];return S(c,h,a.localize,u)}).join("")}function Gt(e){const t=e.match(Rt);return t?t[1].replace(pt,"'"):e}function It(e,t){return e==null?void 0:e.replace(new RegExp(`${Vt(t)}+$`),"")}function Vt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Kt(e){const t=new Date(e);return $(t,"dd-MMM-yyyy")}function Zt(e){const t=new Date(e);return $(t,"dd-MMM-yyyy hh:mm a")}function te(e,t){if(!t||!e)return e;let n=e[t];if(!n){const r=t.split(".");r.length>1&&(n=r.reduce((a,i)=>(a||void 0)&&a[i],e))}return n}function jt(e,t,n){if(!t&&!e)return n;e=e||{};const r=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const a=t.indexOf("."),i=t.substring(0,a),o=t.substring(a+1);r[i]=jt(e[i],o,n)}else r[t]=n;return r}const Jt="https://devbackend.livhousing.com:444";async function ee(e,t,n={}){return A("GET",e,t,n)}async function ne(e,t,n={}){return A("POST",e,t,n)}async function A(e,t,n,{headers:r,noAuth:a,...i}={}){var d;const o=e==="POST"||e==="PUT"||e==="DELETE";t=zt(t,o?void 0:n);const c=n instanceof FormData;if(c||(n&&typeof n=="object"&&o?n=JSON.stringify(n):n=void 0),r||(r={}),c||(r["Content-Type"]="application/json"),r.Accept="application/json",a!==!1){const u=sessionStorage.getItem("token");u&&(r.Authorization=`Bearer ${u}`)}try{const u=await fetch(t,{...i,headers:r,body:n,method:e}),f=await u.json();if(u.ok){const{data:m,...w}=f;return delete w.status,m&&!Object.keys(w).length?m:f}else throw f.message?new Error(f.message):f}catch(u){throw console.error("Error calling API: ",u),(d=u.message)!=null&&d.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(u.message)}}const Ut=It(Jt,"/");function zt(e,t){if(!e)return e;const n=t?Object.keys(t):null;if(n!=null&&n.length){const r=n.reduce((a,i)=>{let o=t[i];return o==null?a:(o=`${i}=${encodeURIComponent(o)}`,a?`${a}&${o}`:o)},"");r&&(e=`${e}${e.includes("?")?"&":"?"}${r}`)}return e.startsWith("https://")?e:`${Ut}${e}`}export{ee as a,F as b,b as c,p as d,Kt as e,Zt as f,te as g,ne as p,jt as s,g as t};
