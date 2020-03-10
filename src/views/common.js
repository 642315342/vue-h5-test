
var Message = {
    tplIsPaySuccess: "<div class=\"ui-mask\" name=\"_mask_\" style=\"z-index:9000;\"><div class=\"ui-message ui-message-info\" style=\"top:$1;z-index:9001\"><div class=\"ui-message-wrapper ui-message-visible\"><div class=\"ui-message-container\" style=\"width:350px; height:200px\"><i class=\"ui-icon ui-icon-info-round theme-default ui-message-info\" style=\"font-size:24px;top:40px;left:20px;\"></i><div style=\"font-size:16px;margin-top:11px;margin-left:60px;\">$2</div><div class=\"ui-form-item-control\" style=\"padding:40px 0 0 90px\"><button type=\"button\" class=\"ui-button radius theme-info size-lg\" style=\"margin-right:10px\" name=\"yesBtn\">已完成支付</button><button type=\"button\" class=\"ui-button radius theme-info size-lg\" style=\"margin-left:10px\" name=\"noBtn\">遇到问题，重新支付</button></div></div></div></div></div>",
    showPaySuccess: function(msg, successCallback, failCallback) {
        $("[name=_mask_]").remove();
        var height = $(window).height();
        var top = height / 2 - 130;
        $("[name=cashierH5]").append(this.tplIsPaySuccess.replace("$1", top + "px").replace("$2", msg));
        $("[id=success]").on("click", function() {
            $("[name=_mask_]").remove();
            if(successCallback) {
                successCallback();
            }
        });
        $("[name=noBtn]").on("click", function() {
            $("[name=_mask_]").remove();
            if(failCallback) {
                failCallback();
            }
        });
    },

};