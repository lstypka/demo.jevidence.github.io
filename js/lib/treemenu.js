!function(e){"use strict";e.fn.tree=function(){return this.each(function(){var a=e(this).children("a").first(),s=e(this).children(".treeview-menu").first(),n=e(this).hasClass("active");n&&(s.show(),a.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down")),a.click(function(e){e.preventDefault(),n?(s.slideUp(),n=!1,a.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left"),a.parent("li").removeClass("active")):(s.slideDown(),n=!0,a.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down"),a.parent("li").addClass("active"))}),s.find("li > a").each(function(){var a=parseInt(e(this).css("margin-left"))+10;e(this).css({"margin-left":a+"px"})})})}}(jQuery);