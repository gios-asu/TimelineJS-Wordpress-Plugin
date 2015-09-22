/*
    TimelineJS - ver. 2015-09-22-21-26-18 - 2015-09-22
    Copyright (c) 2012-2015 Northwestern University
    a project of the Northwestern University Knight Lab, originally created by Zach Wise
    https://github.com/NUKnightLab/TimelineJS3
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function r(e,t){function n(){lt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}var r=!0;return d(function(){return r&&(n(),r=!1),t.apply(this,arguments)},t)}function s(e,t){return function(n){return h(e.call(this,n),t)}}function a(e,t){return function(n){return this.lang().ordinal(e.call(this,n),t)}}function i(){}function o(e){b(e),d(this,e)}function u(e){var t=p(e),n=t.year||0,r=t.quarter||0,s=t.month||0,a=t.week||0,i=t.day||0,o=t.hour||0,u=t.minute||0,d=t.second||0,c=t.millisecond||0;this._milliseconds=+c+1e3*d+6e4*u+36e5*o,this._days=+i+7*a,this._months=+s+3*r+12*n,this._data={},this._bubble()}function d(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return t.hasOwnProperty("toString")&&(e.toString=t.toString),t.hasOwnProperty("valueOf")&&(e.valueOf=t.valueOf),e}function c(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&Tt.hasOwnProperty(t)&&(n[t]=e[t]);return n}function f(e){return 0>e?Math.ceil(e):Math.floor(e)}function h(e,t,n){for(var r=""+Math.abs(e),s=e>=0;r.length<t;)r="0"+r;return(s?n?"+":"":"-")+r}function l(e,t,n,r){var s=t._milliseconds,a=t._days,i=t._months;r=null==r?!0:r,s&&e._d.setTime(+e._d+s*n),a&&ut(e,"Date",ot(e,"Date")+a*n),i&&it(e,ot(e,"Month")+i*n),r&&lt.updateOffset(e,a||i)}function _(e){return"[object Array]"===Object.prototype.toString.call(e)}function m(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function y(e,t,n){var r,s=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0;for(r=0;s>r;r++)(n&&e[r]!==t[r]||!n&&w(e[r])!==w(t[r]))&&i++;return i+a}function g(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=nn[e]||rn[t]||t}return e}function p(e){var t,n,r={};for(n in e)e.hasOwnProperty(n)&&(t=g(n),t&&(r[t]=e[n]));return r}function Y(t){var n,r;if(0===t.indexOf("week"))n=7,r="day";else{if(0!==t.indexOf("month"))return;n=12,r="month"}lt[t]=function(s,a){var i,o,u=lt.fn._lang[t],d=[];if("number"==typeof s&&(a=s,s=e),o=function(e){var t=lt().utc().set(r,e);return u.call(lt.fn._lang,t,s||"")},null!=a)return o(a);for(i=0;n>i;i++)d.push(o(i));return d}}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function M(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function D(e,t,n){return nt(lt([e,11,31+t-n]),t,n).week}function v(e){return k(e)?366:365}function k(e){return e%4===0&&e%100!==0||e%400===0}function b(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[wt]<0||e._a[wt]>11?wt:e._a[Mt]<1||e._a[Mt]>M(e._a[Yt],e._a[wt])?Mt:e._a[Dt]<0||e._a[Dt]>23?Dt:e._a[vt]<0||e._a[vt]>59?vt:e._a[kt]<0||e._a[kt]>59?kt:e._a[bt]<0||e._a[bt]>999?bt:-1,e._pf._overflowDayOfYear&&(Yt>t||t>Mt)&&(t=Mt),e._pf.overflow=t)}function S(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function T(e){return e?e.toLowerCase().replace("_","-"):e}function O(e,t){return t._isUTC?lt(e).zone(t._offset||0):lt(e).local()}function W(e,t){return t.abbr=e,St[e]||(St[e]=new i),St[e].set(t),St[e]}function G(e){delete St[e]}function F(e){var t,n,r,s,a=0,i=function(e){if(!St[e]&&Ot)try{require("./lang/"+e)}catch(t){}return St[e]};if(!e)return lt.fn._lang;if(!_(e)){if(n=i(e))return n;e=[e]}for(;a<e.length;){for(s=T(e[a]).split("-"),t=s.length,r=T(e[a+1]),r=r?r.split("-"):null;t>0;){if(n=i(s.slice(0,t).join("-")))return n;if(r&&r.length>=t&&y(s,r,!0)>=t-1)break;t--}a++}return lt.fn._lang}function C(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function P(e){var t,n,r=e.match(Ct);for(t=0,n=r.length;n>t;t++)r[t]=dn[r[t]]?dn[r[t]]:C(r[t]);return function(s){var a="";for(t=0;n>t;t++)a+=r[t]instanceof Function?r[t].call(s,e):r[t];return a}}function U(e,t){return e.isValid()?(t=z(t,e.lang()),sn[t]||(sn[t]=P(t)),sn[t](e)):e.lang().invalidDate()}function z(e,t){function n(e){return t.longDateFormat(e)||e}var r=5;for(Pt.lastIndex=0;r>=0&&Pt.test(e);)e=e.replace(Pt,n),Pt.lastIndex=0,r-=1;return e}function L(e,t){var n,r=t._strict;switch(e){case"Q":return jt;case"DDDD":return qt;case"YYYY":case"GGGG":case"gggg":return r?$t:Lt;case"Y":case"G":case"g":return Qt;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return r?Jt:Ht;case"S":if(r)return jt;case"SS":if(r)return Vt;case"SSS":if(r)return qt;case"DDD":return zt;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return xt;case"a":case"A":return F(t._l)._meridiemParse;case"X":return Nt;case"Z":case"ZZ":return At;case"T":return Zt;case"SSSS":return It;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return r?Vt:Ut;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Ut;case"Do":return Et;default:return n=new RegExp(V(j(e.replace("\\","")),"i"))}}function H(e){e=e||"";var t=e.match(At)||[],n=t[t.length-1]||[],r=(n+"").match(en)||["-",0,0],s=+(60*r[1])+w(r[2]);return"+"===r[0]?-s:s}function I(e,t,n){var r,s=n._a;switch(e){case"Q":null!=t&&(s[wt]=3*(w(t)-1));break;case"M":case"MM":null!=t&&(s[wt]=w(t)-1);break;case"MMM":case"MMMM":r=F(n._l).monthsParse(t),null!=r?s[wt]=r:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(s[Mt]=w(t));break;case"Do":null!=t&&(s[Mt]=w(parseInt(t,10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=w(t));break;case"YY":s[Yt]=lt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":s[Yt]=w(t);break;case"a":case"A":n._isPm=F(n._l).isPM(t);break;case"H":case"HH":case"h":case"hh":s[Dt]=w(t);break;case"m":case"mm":s[vt]=w(t);break;case"s":case"ss":s[kt]=w(t);break;case"S":case"SS":case"SSS":case"SSSS":s[bt]=w(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=H(t);break;case"dd":case"ddd":case"dddd":r=F(n._l).weekdaysParse(t),null!=r?(n._w=n._w||{},n._w.d=r):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=w(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=lt.parseTwoDigitYear(t)}}function x(e){var n,r,s,a,i,o,u,d;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(i=1,o=4,r=t(n.GG,e._a[Yt],nt(lt(),1,4).year),s=t(n.W,1),a=t(n.E,1)):(d=F(e._l),i=d._week.dow,o=d._week.doy,r=t(n.gg,e._a[Yt],nt(lt(),i,o).year),s=t(n.w,1),null!=n.d?(a=n.d,i>a&&++s):a=null!=n.e?n.e+i:i),u=rt(r,s,a,o,i),e._a[Yt]=u.year,e._dayOfYear=u.dayOfYear}function A(e){var n,r,s,a,i=[];if(!e._d){for(s=N(e),e._w&&null==e._a[Mt]&&null==e._a[wt]&&x(e),e._dayOfYear&&(a=t(e._a[Yt],s[Yt]),e._dayOfYear>v(a)&&(e._pf._overflowDayOfYear=!0),r=B(a,0,e._dayOfYear),e._a[wt]=r.getUTCMonth(),e._a[Mt]=r.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=i[n]=s[n];for(;7>n;n++)e._a[n]=i[n]=null==e._a[n]?2===n?1:0:e._a[n];e._d=(e._useUTC?B:R).apply(null,i),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function Z(e){var t;e._d||(t=p(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],A(e))}function N(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function E(e){if(e._f===lt.ISO_8601)return void J(e);e._a=[],e._pf.empty=!0;var t,n,r,s,a,i=F(e._l),o=""+e._i,u=o.length,d=0;for(r=z(e._f,i).match(Ct)||[],t=0;t<r.length;t++)s=r[t],n=(o.match(L(s,e))||[])[0],n&&(a=o.substr(0,o.indexOf(n)),a.length>0&&e._pf.unusedInput.push(a),o=o.slice(o.indexOf(n)+n.length),d+=n.length),dn[s]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(s),I(s,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(s);e._pf.charsLeftOver=u-d,o.length>0&&e._pf.unusedInput.push(o),e._isPm&&e._a[Dt]<12&&(e._a[Dt]+=12),e._isPm===!1&&12===e._a[Dt]&&(e._a[Dt]=0),A(e),b(e)}function j(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,s){return t||n||r||s})}function V(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function q(e){var t,r,s,a,i;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(a=0;a<e._f.length;a++)i=0,t=d({},e),t._pf=n(),t._f=e._f[a],E(t),S(t)&&(i+=t._pf.charsLeftOver,i+=10*t._pf.unusedTokens.length,t._pf.score=i,(null==s||s>i)&&(s=i,r=t));d(e,r||t)}function J(e){var t,n,r=e._i,s=Xt.exec(r);if(s){for(e._pf.iso=!0,t=0,n=Bt.length;n>t;t++)if(Bt[t][1].exec(r)){e._f=Bt[t][0]+(s[6]||" ");break}for(t=0,n=Kt.length;n>t;t++)if(Kt[t][1].exec(r)){e._f+=Kt[t][0];break}r.match(At)&&(e._f+="Z"),E(e)}else e._isValid=!1}function Q(e){J(e),e._isValid===!1&&(delete e._isValid,lt.createFromInputFallback(e))}function X(t){var n=t._i,r=Wt.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):"string"==typeof n?Q(t):_(n)?(t._a=n.slice(0),A(t)):m(n)?t._d=new Date(+n):"object"==typeof n?Z(t):"number"==typeof n?t._d=new Date(n):lt.createFromInputFallback(t)}function R(e,t,n,r,s,a,i){var o=new Date(e,t,n,r,s,a,i);return 1970>e&&o.setFullYear(e),o}function B(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function K(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function et(e,t,n,r,s){return s.relativeTime(t||1,!!n,e,r)}function tt(e,t,n){var r=pt(Math.abs(e)/1e3),s=pt(r/60),a=pt(s/60),i=pt(a/24),o=pt(i/365),u=r<an.s&&["s",r]||1===s&&["m"]||s<an.m&&["mm",s]||1===a&&["h"]||a<an.h&&["hh",a]||1===i&&["d"]||i<=an.dd&&["dd",i]||i<=an.dm&&["M"]||i<an.dy&&["MM",pt(i/30)]||1===o&&["y"]||["yy",o];return u[2]=t,u[3]=e>0,u[4]=n,et.apply({},u)}function nt(e,t,n){var r,s=n-t,a=n-e.day();return a>s&&(a-=7),s-7>a&&(a+=7),r=lt(e).add("d",a),{week:Math.ceil(r.dayOfYear()/7),year:r.year()}}function rt(e,t,n,r,s){var a,i,o=B(e,0,1).getUTCDay();return o=0===o?7:o,n=null!=n?n:s,a=s-o+(o>r?7:0)-(s>o?7:0),i=7*(t-1)+(n-s)+a+1,{year:i>0?e:e-1,dayOfYear:i>0?i:v(e-1)+i}}function st(t){var n=t._i,r=t._f;return null===n||r===e&&""===n?lt.invalid({nullInput:!0}):("string"==typeof n&&(t._i=n=F().preparse(n)),lt.isMoment(n)?(t=c(n),t._d=new Date(+n._d)):r?_(r)?q(t):E(t):X(t),new o(t))}function at(e,t){var n,r;if(1===t.length&&_(t[0])&&(t=t[0]),!t.length)return lt();for(n=t[0],r=1;r<t.length;++r)t[r][e](n)&&(n=t[r]);return n}function it(e,t){var n;return"string"==typeof t&&(t=e.lang().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),M(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function ot(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function ut(e,t,n){return"Month"===t?it(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function dt(e,t){return function(n){return null!=n?(ut(this,e,n),lt.updateOffset(this,t),this):ot(this,e)}}function ct(e){lt.duration.fn[e]=function(){return this._data[e]}}function ft(e,t){lt.duration.fn["as"+e]=function(){return+this/t}}function ht(e){"undefined"==typeof ender&&(_t=gt.moment,gt.moment=e?r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",lt):lt)}for(var lt,_t,mt,yt="2.7.0",gt="undefined"!=typeof global?global:this,pt=Math.round,Yt=0,wt=1,Mt=2,Dt=3,vt=4,kt=5,bt=6,St={},Tt={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_tzm:null,_isUTC:null,_offset:null,_pf:null,_lang:null},Ot="undefined"!=typeof module&&module.exports,Wt=/^\/?Date\((\-?\d+)/i,Gt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ft=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Ct=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Pt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ut=/\d\d?/,zt=/\d{1,3}/,Lt=/\d{1,4}/,Ht=/[+\-]?\d{1,6}/,It=/\d+/,xt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,At=/Z|[\+\-]\d\d:?\d\d/gi,Zt=/T/i,Nt=/[\+\-]?\d+(\.\d{1,3})?/,Et=/\d{1,2}/,jt=/\d/,Vt=/\d\d/,qt=/\d{3}/,$t=/\d{4}/,Jt=/[+-]?\d{6}/,Qt=/[+-]?\d+/,Xt=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Rt="YYYY-MM-DDTHH:mm:ssZ",Bt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Kt=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],en=/([\+\-]|\d\d)/gi,tn=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),nn={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},rn={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},sn={},an={s:45,m:45,h:22,dd:25,dm:45,dy:345},on="DDD w W M D d".split(" "),un="M D H h m s w W".split(" "),dn={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return h(this.year()%100,2)},YYYY:function(){return h(this.year(),4)},YYYYY:function(){return h(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+h(Math.abs(e),6)},gg:function(){return h(this.weekYear()%100,2)},gggg:function(){return h(this.weekYear(),4)},ggggg:function(){return h(this.weekYear(),5)},GG:function(){return h(this.isoWeekYear()%100,2)},GGGG:function(){return h(this.isoWeekYear(),4)},GGGGG:function(){return h(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return w(this.milliseconds()/100)},SS:function(){return h(w(this.milliseconds()/10),2)},SSS:function(){return h(this.milliseconds(),3)},SSSS:function(){return h(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+h(w(e/60),2)+":"+h(w(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+h(w(e/60),2)+h(w(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},cn=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];on.length;)mt=on.pop(),dn[mt+"o"]=a(dn[mt],mt);for(;un.length;)mt=un.pop(),dn[mt+mt]=s(dn[mt],2);for(dn.DDDD=s(dn.DDD,3),d(i.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,r;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=lt.utc([2e3,t]),r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(r.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,r;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=lt([2e3,1]).day(t),r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(r.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var s=this._relativeTime[n];return"function"==typeof s?s(e,t,n,r):s.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return nt(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),lt=function(t,r,s,a){var i;return"boolean"==typeof s&&(a=s,s=e),i={},i._isAMomentObject=!0,i._i=t,i._f=r,i._l=s,i._strict=a,i._isUTC=!1,i._pf=n(),st(i)},lt.suppressDeprecationWarnings=!1,lt.createFromInputFallback=r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),lt.min=function(){var e=[].slice.call(arguments,0);return at("isBefore",e)},lt.max=function(){var e=[].slice.call(arguments,0);return at("isAfter",e)},lt.utc=function(t,r,s,a){var i;return"boolean"==typeof s&&(a=s,s=e),i={},i._isAMomentObject=!0,i._useUTC=!0,i._isUTC=!0,i._l=s,i._i=t,i._f=r,i._strict=a,i._pf=n(),st(i).utc()},lt.unix=function(e){return lt(1e3*e)},lt.duration=function(e,t){var n,r,s,a=e,i=null;return lt.isDuration(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(a={},t?a[t]=e:a.milliseconds=e):(i=Gt.exec(e))?(n="-"===i[1]?-1:1,a={y:0,d:w(i[Mt])*n,h:w(i[Dt])*n,m:w(i[vt])*n,s:w(i[kt])*n,ms:w(i[bt])*n}):(i=Ft.exec(e))&&(n="-"===i[1]?-1:1,s=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},a={y:s(i[2]),M:s(i[3]),d:s(i[4]),h:s(i[5]),m:s(i[6]),s:s(i[7]),w:s(i[8])}),r=new u(a),lt.isDuration(e)&&e.hasOwnProperty("_lang")&&(r._lang=e._lang),r},lt.version=yt,lt.defaultFormat=Rt,lt.ISO_8601=function(){},lt.momentProperties=Tt,lt.updateOffset=function(){},lt.relativeTimeThreshold=function(t,n){return an[t]===e?!1:(an[t]=n,!0)},lt.lang=function(e,t){var n;return e?(t?W(T(e),t):null===t?(G(e),e="en"):St[e]||F(e),n=lt.duration.fn._lang=lt.fn._lang=F(e),n._abbr):lt.fn._lang._abbr},lt.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),F(e)},lt.isMoment=function(e){return e instanceof o||null!=e&&e.hasOwnProperty("_isAMomentObject")},lt.isDuration=function(e){return e instanceof u},mt=cn.length-1;mt>=0;--mt)Y(cn[mt]);lt.normalizeUnits=function(e){return g(e)},lt.invalid=function(e){var t=lt.utc(0/0);return null!=e?d(t._pf,e):t._pf.userInvalidated=!0,t},lt.parseZone=function(){return lt.apply(null,arguments).parseZone()},lt.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)},d(lt.fn=o.prototype,{clone:function(){return lt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=lt(this).utc();return 0<e.year()&&e.year()<=9999?U(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return S(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?lt.utc(this._a):lt(this._a)).toArray())>0:!1},parsingFlags:function(){return d({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(e){var t=U(this,e||lt.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;return n="string"==typeof e&&"string"==typeof t?lt.duration(isNaN(+t)?+e:+t,isNaN(+t)?t:e):"string"==typeof e?lt.duration(+t,e):lt.duration(e,t),l(this,n,1),this},subtract:function(e,t){var n;return n="string"==typeof e&&"string"==typeof t?lt.duration(isNaN(+t)?+e:+t,isNaN(+t)?t:e):"string"==typeof e?lt.duration(+t,e):lt.duration(e,t),l(this,n,-1),this},diff:function(e,t,n){var r,s,a=O(e,this),i=6e4*(this.zone()-a.zone());return t=g(t),"year"===t||"month"===t?(r=432e5*(this.daysInMonth()+a.daysInMonth()),s=12*(this.year()-a.year())+(this.month()-a.month()),s+=(this-lt(this).startOf("month")-(a-lt(a).startOf("month")))/r,s-=6e4*(this.zone()-lt(this).startOf("month").zone()-(a.zone()-lt(a).startOf("month").zone()))/r,"year"===t&&(s/=12)):(r=this-a,s="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-i)/864e5:"week"===t?(r-i)/6048e5:r),n?s:f(s)},from:function(e,t){return lt.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(lt(),e)},calendar:function(e){var t=e||lt(),n=O(t,this).startOf("day"),r=this.diff(n,"days",!0),s=-6>r?"sameElse":-1>r?"lastWeek":0>r?"lastDay":1>r?"sameDay":2>r?"nextDay":7>r?"nextWeek":"sameElse";return this.format(this.lang().calendar(s,this))},isLeapYear:function(){return k(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=K(e,this.lang()),this.add({d:e-t})):t},month:dt("Month",!0),startOf:function(e){switch(e=g(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=g(e),this.startOf(e).add("isoWeek"===e?"week":e,1).subtract("ms",1)},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+lt(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+lt(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+O(e,this).startOf(t)},min:r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=lt.apply(null,arguments),this>e?this:e}),max:r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=lt.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n=this._offset||0;return null==e?this._isUTC?n:this._d.getTimezoneOffset():("string"==typeof e&&(e=H(e)),Math.abs(e)<16&&(e=60*e),this._offset=e,this._isUTC=!0,n!==e&&(!t||this._changeInProgress?l(this,lt.duration(n-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,lt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?lt(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return M(this.year(),this.month())},dayOfYear:function(e){var t=pt((lt(this).startOf("day")-lt(this).startOf("year"))/864e5)+1;return null==e?t:this.add("d",e-t)},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=nt(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==e?t:this.add("y",e-t)},isoWeekYear:function(e){var t=nt(this,1,4).year;return null==e?t:this.add("y",e-t)},week:function(e){var t=this.lang().week(this);return null==e?t:this.add("d",7*(e-t))},isoWeek:function(e){var t=nt(this,1,4).week;return null==e?t:this.add("d",7*(e-t))},weekday:function(e){var t=(this.day()+7-this.lang()._week.dow)%7;return null==e?t:this.add("d",e-t)},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return D(this.year(),1,4)},weeksInYear:function(){var e=this._lang._week;return D(this.year(),e.dow,e.doy)},get:function(e){return e=g(e),this[e]()},set:function(e,t){return e=g(e),"function"==typeof this[e]&&this[e](t),this},lang:function(t){return t===e?this._lang:(this._lang=F(t),this)}}),lt.fn.millisecond=lt.fn.milliseconds=dt("Milliseconds",!1),lt.fn.second=lt.fn.seconds=dt("Seconds",!1),lt.fn.minute=lt.fn.minutes=dt("Minutes",!1),lt.fn.hour=lt.fn.hours=dt("Hours",!0),lt.fn.date=dt("Date",!0),lt.fn.dates=r("dates accessor is deprecated. Use date instead.",dt("Date",!0)),lt.fn.year=dt("FullYear",!0),lt.fn.years=r("years accessor is deprecated. Use year instead.",dt("FullYear",!0)),lt.fn.days=lt.fn.day,lt.fn.months=lt.fn.month,lt.fn.weeks=lt.fn.week,lt.fn.isoWeeks=lt.fn.isoWeek,lt.fn.quarters=lt.fn.quarter,lt.fn.toJSON=lt.fn.toISOString,d(lt.duration.fn=u.prototype,{_bubble:function(){var e,t,n,r,s=this._milliseconds,a=this._days,i=this._months,o=this._data;o.milliseconds=s%1e3,e=f(s/1e3),o.seconds=e%60,t=f(e/60),o.minutes=t%60,n=f(t/60),o.hours=n%24,a+=f(n/24),o.days=a%30,i+=f(a/30),o.months=i%12,r=f(i/12),o.years=r},weeks:function(){return f(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12)},humanize:function(e){var t=+this,n=tt(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},add:function(e,t){var n=lt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=lt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=g(e),this[e.toLowerCase()+"s"]()},as:function(e){return e=g(e),this["as"+e.charAt(0).toUpperCase()+e.slice(1)+"s"]()},lang:lt.fn.lang,toIsoString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),r=Math.abs(this.hours()),s=Math.abs(this.minutes()),a=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(r||s||a?"T":"")+(r?r+"H":"")+(s?s+"M":"")+(a?a+"S":""):"P0D"}});for(mt in tn)tn.hasOwnProperty(mt)&&(ft(mt,tn[mt]),ct(mt.toLowerCase()));ft("Weeks",6048e5),lt.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},lt.lang("en",{ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),Ot?module.exports=lt:"function"==typeof define&&define.amd?(define("moment",function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(gt.moment=_t),lt}),ht(!0)):ht()}).call(this);