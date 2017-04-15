function txtAnalyzer(){
  var statistics = "";

  $(':submit').click(function(e){
    e.preventDefault();
    //resets
    $('.js-show-stats').text('(show stats)');
    $('.js-statistics').html('');
    statistics = "";
    //Gets the total word count
    var txtArray = $('.js-textField').val().replace(/[^\w\s]/g,'').split(" ");
    var wordCount = txtArray.length;
    //Get the average word length
    var wrdArray = $('.js-textField').val().replace(/[^\w]/g,'').split("");
    var avgLength = Math.round(((wrdArray.length / txtArray.length) + 0.00001) * 100) / 100;
    //Creates an object that tracks how many unique words there are and a tally of the repeats
    function uniqueFinder(){
      var unique = {};
      for(i = 0; i < wordCount; i++){
        if(txtArray[i] in unique){
          unique[txtArray[i]]++;
        } else {
          unique[txtArray[i]] = 1;
        }
      }
      return unique;
    }
    var getUnique = uniqueFinder();

    //Inserts necessaries into the HTML
    $('.js-wordcount').text(wordCount);
    $('.js-wordlength').text(avgLength);
    $('.js-uniquecount').text(Object.keys(getUnique).length);
    //Shows results to the DOM
    $('.text-report').removeClass('hidden');
    //Show unique word statistics
    function stats(){
    Object.keys(getUnique).forEach(function(key){
      statistics += key + ": " + getUnique[key] + '<br />';
    });
      statistics +=  "</span>";
    }
    stats();
  });

  //Shows/Hides statistics of the unique words on click
  $('.js-show-stats').click(function(){
    if($('.js-show-stats').text() === '(hide stats)') {
      $('.js-statistics').fadeOut('slow');
      $('.js-show-stats').text('(show stats)');
    } else {
      $('.js-statistics').html(statistics);
      $('.js-statistics').fadeIn('slow');
      $('.js-show-stats').text('(hide stats)');
    }
  });
}

$(txtAnalyzer);
