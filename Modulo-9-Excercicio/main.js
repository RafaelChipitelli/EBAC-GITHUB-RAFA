$(document).ready(function(){

    $('button').click('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#nomeTarefa').val();
        const novoItem = $('<div></div>');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nomeTarefa').val('');
    });

    $("#lista-tarefas").on('click', 'li',(function() {
        $(this).css("text-decoration", "line-through");
    }));

})

/*$(document).ready(function(){
    $(".textoClicavel").click(function() {
        $(this).css("text-decoration", "line-through");
        });
})*/