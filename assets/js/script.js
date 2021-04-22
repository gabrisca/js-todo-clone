$(function () {
  // creo un array con delle stringhe
  // var arrList = ["seguire la lezione", "fare l'esercitazione", "ripassare"];

  // alla fine di tutto il mio script tolgo i contenuti dell'array (non sono più necessari)
  var arrList = [];

  //ciclo for
  for (var i = 0; i < arrList.length; i++) {
    // salvo in una var i contenuti dell'array
    var elList = arrList[i];
    console.log(elList);

    //salvo in una var l'ul creata in html
    var ulList = $("#lista ul");

    // salvo in una var la stringa html con gli elementi dell'array
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
      // !controlllo! se il valore inserito è maggiore di 2 caratteri....
      if ($(this).val().length > 2) {
        console.log($(this).val());
        // salvo in una var locale la stringa html con gli elementi dell'array (come nel ciclo for)
        strHtml ="<li><p>" + elList + '</p><i class="fas fa-trash-alt"></i></li>';
        // aggiungo il contenuto della stringa prima della chiusra dell'ul
        $("#lista ul").append(strHtml);
        // tolgo il valore inserito nell'input sostituendolo con una stringa vuota
        $(this).val("");
      };
    };
  });

  // AGGIUNGO LA POSSIBILITA' DI CANCELLARE L'INTERO CONTENUTO DELLA LISTA (PER ALLENAMENTO)
  // creo una var in cui salvo l'id #delete
  var delete_all = $("#delete i");
  console.log(delete_all);
  // al click su delete...
  $("#delete i").on("click", delete_all, function () {
    // ... cancello tutti i figli di #lista ul. Utilizzo empty
    $("#lista ul").empty(strHtml);
  });

  // AGGIUNGO UN SALUTO IN BASE ALL'ORA (PER ALLENAMENTO)
  // salvo nella variabile greetings l'lemento con id greetings
  var greetings = $("#greetings");
  // ne leggo il contenuto con .text
  console.log(greetings.text());
  // ne modifico il contenuto applicando la variabile GETGREETINGS
  greetings.text(getGreetings);

  // AL CLICK SU ID GREETINGS ALTERNO SALUTO E ORA (RICORDARSI DI USARE UNA VAR FLAG)
  var today = new Date();
  var currentHour = today.getHours();
  var currentMin = today.getMinutes();
  var flag = false;

  $(greetings).on("click", greetings, function () {
    if(flag === false){
      greetings.text("sono le "  + currentHour + ":" + currentMin);
      flag = true;
    } else if (flag === true){
      greetings.text(getGreetings);
      flag = false;
    }
  });

  // AGGIUNGO ICONA SOLE O LUNA IN RELAZIONE ALL'ORARIO
  if((currentHour >= 06) && (currentHour <= 19)){
    $("#moon").hide();
    $("#sun").show();
  } else {
    $("#sun").hide();
    $("#moon").show();
  }
});


  // //////////////////////////////////
  // F  U   N   C  T   I   O   N   S //
  /////////////////////////////////////

  function getGreetings (){
    // salvo in una var in cui salvo l'oggetto Date
    var today = new Date();
    // salvo in una var l'ora corrente
    var currentHour = today.getHours();
    // salvo in una var i minuti correnti
    var currentMin = today.getMinutes();
    console.log("sono le "  + currentHour + ":" +currentMin)
    // creo una var greetings, momentaneamente senza contenuto
    var greeting;
  
    if((currentHour >= 06) && (currentHour <= 11)){
      greeting = "buongiorno";
    } else if ((currentHour >= 12) && (currentHour <= 17)) {
      greeting = "buon pomeriggio";
    } else if ((currentHour >= 18) && (currentHour <= 24)) {
      greeting = "buonasera";
    } else {
      greeting = "benvenuto";
    }
  
    return greeting
  }
  
  console.log(getGreetings)


