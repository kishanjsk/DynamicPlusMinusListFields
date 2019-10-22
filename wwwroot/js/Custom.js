function bindNameDynamically(className, childClassName, replacePath) {
    var NewName = 0;
    $("." + className + " ." + childClassName).each(function () {
        $(this).find("input").each(function () {
            $(this)[0].outerHTML = $(this)[0].outerHTML.split(replacePath + "[" + $(this)[0].outerHTML.split(replacePath + '[').pop().split(']')[0] + "]").join(replacePath + "[" + NewName + "]");
            //$(this)[0].outerHTML = $(this)[0].outerHTML.split(replacePath + "[" + $(this)[0].name.match(/\d+/) + "]").join(replacePath + "[" + NewName + "]")
        });
        $(this).find("select").each(function () {
            $(this)[0].outerHTML = $(this)[0].outerHTML.split(replacePath + "[" + $(this)[0].outerHTML.split(replacePath + '[').pop().split(']')[0] + "]").join(replacePath + "[" + NewName + "]").split(replacePath + "_" + $(this)[0].outerHTML.split(replacePath + '_').pop().split('_')[0] + "_").join(replacePath + "_" + NewName + "_");
        });

        //$(this).find("button").each(function () {
        //    $(this)[0].outerHTML = "";//$(this)[0].outerHTML.split(replacePath + "[" + $(this)[0].outerHTML.split(replacePath + '[').pop().split(']')[0] + "]").join(replacePath + "[" + NewName + "]").split(replacePath + "_" + $(this)[0].outerHTML.split(replacePath + '_').pop().split('_')[0] + "_").join(replacePath + "_" + NewName + "_");
        //});
        NewName++
    });
};
 
$(document).on("click", ".plusBtn", function () {
    var BoxToReplace = $(this).data("content");
    var replacePath = $(this).data("path");
    $("." + BoxToReplace + ":first").each(function () {
        debugger
        $(this).parent().append($(this)[0].outerHTML.split("plusBtn").join("minusBtn").split("fa-plus").join("fa-minus"));
    });
    bindNameDynamically($("." + BoxToReplace).parent()[0].className, BoxToReplace, replacePath);
});
$(document).on("click", ".minusBtn", function () {
    var BoxToReplace = $(this).data("content");
    var replacePath = $(this).data("path");
    $(this).parent().parent().remove()
    bindNameDynamically($("." + BoxToReplace).parent()[0].className, BoxToReplace, replacePath);
});
$(document).on("change", "input", function () {
    $(this)[0].defaultValue = $(this)[0].value
});