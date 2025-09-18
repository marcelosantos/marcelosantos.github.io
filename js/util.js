$( document ).ready(function() {
    const today = new Date();
    const currentYear = today.getFullYear();
    var old = (currentYear - 1986);
    var lang = $("#data-old").attr("data-lang");
    var text = getTextByLang(lang, old);
    
    //$("#data-old").html("<s>Casado</s>, "+ old +" anos");
    $("#data-old").html(text);

    function getTextByLang(lang, old){
        if (lang == "en"){
            return "<s>Married</s>, "+ old +" years old";
        }

        return "<s>Casado</s>, "+ old +" anos";
    }
});