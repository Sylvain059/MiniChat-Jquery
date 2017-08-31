 var pseudo = prompt("votre pseudo");
 var reponse = ["Coucou", "ça va bien et toi?", 'Je m\'appelle Lezzy et toi?', 'J\'ai 29 ans, j\approche de la trentaine =)', 'Parle moi un peu de toi'];
 var index = 0;
 jQuery(function ($) {


     $('.envoi').submit(function (tchat) {
         if (messageClear !== "") {


             var message = $('#messageEnvoyer').val();
             var messageClear = message.trim();
             $('#affichage').append('<img src="img/garcon.png">' + '<p>' + pseudo + " " + ":" + " " + message + '</p>');
             $('#messageEnvoyer').val("");
             setTimeout(function () {

                 $('#affichage').append('<img src="img/fille.png">' + '<p>' + "Lezzy" + " " + ":" + " " + reponse[index] + '</p>');
                 index++;
             }, 2000);
         }
         return false
     })
 });
