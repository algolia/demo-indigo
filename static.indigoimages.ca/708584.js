
/* JS for HtmlBundle [41014:708584] */
(function() {
    try {
        (function(){var n=window.appData=window.appData||{};n.productData={}})()
    } catch (e) {
        Bugsnag.notifyException(e, 'HtmlBundle JavaScript error', { 'info': { historyId: 708584 }}, 'warning');
    }
})();

/* JS for HtmlBundle [41016:707849] */
(function() {
    try {
        prerequire.add(["jquery"],function(n){n(document).ready(function(){n("a.norton").attr("href",n("a.norton").attr("href").replace("dn=//","dn="));/*@cc_on!@*/0||(n(".emailAddressTextbox").focus(function(){n(".emailAddressTextbox").removeAttr("placeholder")}),n(".emailAddressTextbox").blur(function(){n(".emailAddressTextbox").attr("placeholder","Enter your email address here")}));n("#back-top").hide();n(function(){n(window).scroll(function(){n(this).scrollTop()>100?n("#back-top").fadeIn():n("#back-top").fadeOut()});n("#back-top a").click(function(){return n("body,html").animate({scrollTop:0},800),!1})})})}),function(){function t(){return/^((?!chrome).)*safari/i.test(navigator.userAgent)}function i(){return/fr/.test(document.documentElement.lang)}if((/shoppingbag\.html/i.test(document.location.href)||/panier\.html/i.test(document.location.href))&&t()&&!1){document.querySelector(".cartpageSidebar-couponContainer .cartpageSidebar-couponNote").style.cssText="position: absolute; top: -9999px; left: -9999px;";document.querySelector(".cartpageSidebar-couponContainer .cartpageSidebar-couponentry").style.display="none";var n;n=i()?document.querySelector("#showCouponMessageForSafariUsers-fr"):document.querySelector("#showCouponMessageForSafariUsers-en");n.style.display="block";document.querySelector(".cartpageSidebar-couponContainer").appendChild(n)}}();prerequire.add(["jquery","helperFunctions","emailSignup","BrowseCartApi","SandboxExports","$Cookies"],function(n,t,i,r,u){var o=function(){var n=appData.info.browseBase.split("://")[1];return new RegExp("^"+location.hostname.replace(/\./,"\\.")).test(n)}(),f="email-popup-cookie",e;o&&n.cookies.test()&&n.cookies.get(f)===null&&(e=u?u.constructor:exports.sandbox.constructor,t.openUrlInPopup(location.protocol+"//"+location.hostname+"/en-ca/email-signup-pop-up-blackfriday/",".embed_html",function(){var n=new e("merchEmailSingupSandbox",{shopPopup:r.showGenericPopup,membershipEmailSignUpUrl:appData.info.membershipEmailSignUpUrl,inputSelector:"#email",buttonSelector:"#emailSubmitBF"});i.init(n)}),n.cookies.set(f,!0,{domain:".indigo.ca",path:"/",expiresAt:new Date(2020,1,1)}))});prerequire.add(["jquery"],function(n){n("#thxButton").on("click",function(t){t.preventDefault();n("#browseCart-genericPopup").browsePopup("hide")})}),function(){var n=parseInt((navigator.userAgent.match(/MSIE (\d+)/)||[,NaN])[1],10);n<8&&(document.location.href="https://chapters.indigo.ca/legacy-browser/")}();prerequire.add(["jquery"],function(n){n(".page_title").text(function(n,t){return t.replace(/–/g,"")});n(".standard_title").text(function(n,t){return t.replace(/–/g,"")})});prerequire.add(["jquery"],function(n){n(document).ready(function(){if(["Toys","Baby"].indexOf(n(".categoryBrowseHeader").text())>-1){var t=["Agendas","Art and Architecture","Biography and Memoir","Business and Finance","Computers","Entertainment","Family and Relationships","Fiction and Literature","Food and Drink","Health and Well Being","History","Home and Garden","Mystery and Suspense","Reference and Language","Religion and Spirituality","Romance","Science and Nature","Science Fiction and Fantasy","Social and Cultural Studies","Sports and Fitness","Travel","Reading Accessories","Action and Adventure","Alternative","Blues","Children's Music","Comedy","Comedy and Spoken Word","Country","Dramas","Easy Listening","Electronic","Folk","Foreign Films","Horror and Suspense","Jazz","Kids and Family","Miscellaneous","Musicals and Music","New Age","R&B and Soul","Rap and Hip-Hop","Reggae","Religious","Rock and Pop","Science Fiction and Fantasy","Soundtracks and Shows","Special Interests","Sports and Fitness","World","Tech Toys","Video Games & Consoles","Tech Accessories","Graphic Novels","Humour and Comedy"];n(".side_menu_nav > .categoryBrowse ul li a").each(function(){t.indexOf(n(this).text())>-1&&n(this).parent().hide()});n(".categoryBrowseHeader").text()==="Toys"&&n("li.selected span").text()==="Toys"&&n("li.selected span").parent().hide()}})});prerequire.add(["jquery","$Cookies"],function(){"use strict";var i="PROMO_ENGINE_EFFECTIVE_DATE",r="RewardsCentrePreviewModeEffectiveDate",u=$("<div />").addClass("opptReminder").html('<h6 class="opptReminder__title">Previewing Promotions and Discounts:<\/h6>'),n=$("<ul />"),t=!1,f=$.cookies.get(i),e=$.cookies.get(r);f&&(t=!0,n.append("<li>Online: "+f+'[<a class="opptReminder__dismissLink" data-source="browse">end preview<\/a>]<\/li>'));e&&(t=!0,n.append("<li>Rewards Centre: "+e+'[<a class="opptReminder__dismissLink" data-source="rc">end preview<\/a>]<\/li>'));u.append(n);$("body").on("click",".opptReminder__dismissLink",function(n){n.preventDefault();var t=$(this).attr("data-source")==="browse"?i:r;$.cookies.del(t,{path:"/",domain:".indigo.ca"});window.location.href=window.location.href});t&&$("body").append(u)});/-(item|article)\.html/i.test(location.href)&&/\/(books|livres)\//i.test(location.href)&&prerequire.add(["jquery","_"],function(n,t){function r(){var f,o,s,e;i||(f=window.BV.require("jquery"),o=f.fn.replaceWith,f.fn.replaceWith=function(){var t=this;o.apply(this,arguments);n(t).is("ol.bv-content-list")&&r()},i=!0);s=n(document.getElementById("BVRRContainer")).find(".bv-content-badges-container");e=n(document.getElementById("BVRRContainer")).find(".bv-content-data-syndication");t.each(e,function(t,i){n(e[i]).remove()});t.each(s,function(t){var r,i;if(t=n(t),r=t.find(".bv-badge-summary"),i=n.grep(r.find("img"),function(n){return/kobo/.test(n.src)}),i.length===1){i=n(i);var e=t.closest(".bv-content-core"),f=e.find(".bv-content-data"),o=n(f).find(".bv-content-product-questions");o.remove();n(f).append('<div class="bv-content-data-syndication">\n<div class="bv-syndication-summary">\n<div class="bv-brand-logo">\n<img class="bv-brand-logo-image" src="'+i[0].src+'" alt="'+i[0].alt+'">\n<\/div><span class="bv-badge-syndicated">'+(u?"Initialement publié sur Kobo":"Originally posted on Kobo")+"<\/span>\n<\/div>\n<\/div>");r.length===1?n(t).remove():i.closest(".bv-badge-summary").remove()}})}var u=/fr/.test(document.documentElement.lang),i=!1;n(window).on("bvRenderComplete",r)}),function(n){var t=escape(window.location.href||""),i=escape(n.referrer||""),r=Math.floor(Math.random()*999999999999),u=new Image;u.src="https://www.offlinx.com/alpha/tracking/pixel.gif?merchant_id=73ADB1C6572DE809&random_num="+r+"&referer="+i+"&href="+t}(window.document)
    } catch (e) {
        Bugsnag.notifyException(e, 'HtmlBundle JavaScript error', { 'info': { historyId: 707849 }}, 'warning');
    }
})();
