// place any jQuery/helper plugins in here, instead of separate, slower script files.
console.log('scripts');
    $("#search_submit").click(function(){
        var phrase = "/search_for/kornwalie";
        console.log(phrase);
        $.ajax({
          url: phrase,
          context: document.body
            }).done(function() {

        });
    });