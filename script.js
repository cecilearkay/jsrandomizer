$(document).ready(function() {

    $(function() {

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        if (randomColor.length < 6) {
            randomColor = "000000";
            $("body").css({ backgroundColor: "#" + randomColor });
        } else {
            $("body").css({ backgroundColor: "#" + randomColor });
        }
    });

    var sentences = [
        "<p>A vouloir étouffer les révolutions pacifiques, on rend inévitables les révolutions violentes.</p>",
        "<p>La victoire a cent pères, mais la défaite est orpheline.</p>",
        "<p>On connait une nation aux hommes qu'elle produit, mais aussi à ceux dont elle se souvient et qu'elle honore.</p>",
        "<p>Diriger et apprendre ne sont pas dissociables.</p>",
        "<p>Ne négocions jamais avec nos peurs. Mais n’ayons jamais peur de négocier.</p>"
    ];



    var random = sentences[Math.floor(Math.random() * sentences.length)];

    document.getElementById("container").innerHTML = "<p>" + random + "</p>";

    $("#click").click(function () {
        location.reload();
    });

    $("#container").click(function () {
        location.reload();
    });

});
