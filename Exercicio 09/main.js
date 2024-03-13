$(document).ready(function(){
    $("#hide").click(function(e){
        $(".list").slideToggle();
    });

    $("#submit").click(function(e){
        e.preventDefault();
        const value = $('#note').val();
        $('.list tr:last').after(`
            <tr>
                <td>${value}</td>
            </tr>
        `);
        $("#note").val("");
    });

    $(".list").on('click', 'td', function(){
        $(this).toggleClass('completed');
    });
}); 