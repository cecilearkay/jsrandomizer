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
/*
    var sentences = [
        "<p style='font-size: 25pt'>Jamie, where's Madagascar?</p> <p style='font-size: 25pt'>In Disneyland?</p> <p style='font-size: 25pt'>It's in Africa.</p> <p style='font-size: 25pt'>In Africa, Disneyland?</p> <p style='font-size: 25pt'>No, in Africa, Africa.</p>",
        "<p>Instead of reading a book, can we watch an episode of Jamie Oliver tonight?</p>",
        "<p>My favorite animal is the cow because they make the Yop.</p>",
        "<p>What's that?</p> <p>The Adam's apple.</p> <p>Is it called the Eve's apple for girls?</p>",
        "<p>What are paragraphs?</p> <p>Words stacked together.</p> <p>I can read those...</p>",
        "<p>Jesus was born in December. Do you know what that makes him?</p> <p>Santa?</p> <p>Close. A capricorn.</p>",
        "<p>Do you know what soy is?</p> <p>Yes, I play Hay Day.</p>",
        "<p>What are the names of the Ninja Turtles?</p> <p>Michaelangelo, Raphael, Nutella.</p>",
        "<p>Where do you think names come from?</p> <p>The name factory.</p>",
        "<p>Did you know that Mary had a cousin named Elizabeth?</p> <p>The one of London?</p>",
        "<p>Cécile was born in August.</p> <p>She was born at the beach?</p>",
        "<p>What are you thankful for?</p> <p>Candy.</p>",
        "<p>Do the people from the Macarena song speak the same language as in Gang Nam Style?</p>",
        "<p>What's your job?</p> <p>I was in the Army.</p> <p>You mean, like in a castle?</p>",
        "<p>Dad, is nem a vegetable?</p>",
        "<p>Do fishes have hands?</p>",
        "<p>Dad, can we watch Ice Age 4?</p> <p>I don't have it. Plus when it gets beyond the number 2, it's pretty weak. Unless it's Die Hard.</p>",
        "<p>I love churros.</p> <p>You've never had them before...</p>",
        "<p>Don't bother, they can't hear you...</p>",
        "<p>Who brings the easter eggs?</p> <p>The postman.</p>",
        "<p>What are you doing?</p> <p>I’m looking you, Dad.</p>",
        "<p>You wrote that? There’s no pictures...</p>",
        "<p>What do we eat at Thanksgiving?</p> <p>A chicken with bougies?</p>",
        "<p>Dad can I breathe air?</p>",
        "<p>Is the black the house of the moule?</p> <p>Yes.</p> <p>Some of them have juice in their house.</p>",
        "<p>I did some poney.</p>",
        "<p>It's hotter than Eva Longoria.</p> <p>What's a longoria?</p>",
        "<p>I can smell the rain on my chin.</p>"
    ];
*/

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