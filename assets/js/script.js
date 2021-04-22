$(function () {
  // creo un array con delle stringhe
  // var arrList = ["seguire la lezione", "fare l'esercitazione", "ripassare"];

  // alla fine di tutto il mio script tolgo i contenuti dell'array (non sono più necessari)
  var arrList = [];

  //ciclo for
  for (var i = 0; i < arrList.length; i++) {
    // salvo in una var locale i contenuti dell'array
    var elList = arrList[i];
    console.log(elList);

    //salvo in una var locale l'ul creata in html
    var ulList = $("#lista ul");

    // salvo in una var locale la stringa html con gli elementi dell'array
    var strHtml =
      "<li><p>" + elList + '</p><i class="fas fa-trash-alt"></i></li>';
    // aggiungo il contenuto della stringa prima della chiusra dell'ul
    ulList.append(strHtml);
    // giunto qui visualizzo sul browser il contenuto dell'array
  }
  // chiudo ciclo for

  // rimuovo gli elementi li(genitori) al click sui f_awsome cestini (figli)
  $(document).on("click", ".fa-trash-alt", function () {
    // this = .fa-trash-alt
    console.log(this);
    // rimuovo il genitore di .fa-trash-alt
    $(this).parent().remove();
  });

  // aggiugno un elemento alla lista scrivendo nel campo input
  // quando sonone campo input(html) e digito qualcosa, al rilascio del tasto comincia l'evento seguente
  $(".input_text").keyup(function (event) {
    // event.which restituisce il tasto della tastiera premuto (in numeri)
    // scateno l'evento squando schiaccio il tasto enter che corrisponde a 13
    if (event.which === 13) {
      // elimino gli spazi con trim
      elList = $(this).val().trim();
      // !controlllo! se il valore inserito è maggiore di 2 caratteri vedo il valore inserito
      if ($(this).val().length > 2) {
        console.log($(this).val());
        // salvo in una var locale la stringa html con gli elementi dell'array (come nel ciclo for)
        var strHtml =
          "<li><p>" + elList + '</p><i class="fas fa-trash-alt"></i></li>';
        // aggiungo il contenuto della stringa prima della chiusra dell'ul
        ulList.append(strHtml);
        // tolgo il valore inserito nell'input sostituendolo con una stringa vuota
        $(this).val("");
      }
    }
  });
});
