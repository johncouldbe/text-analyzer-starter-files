function txtAnalyzer(){

  $(':submit').click(function(e){
    e.preventDefault();
    var txtArray = $('.js-textField').val().replace(/[^\w\s]/g,'').split(" ");
    console.log(txtArray);

    var wordCount = txtArray.length;
console.log(wordCount);



  $('.js-wordcount').text(wordCount);
  $('.text-report').removeClass('hidden');
  });

}

$(txtAnalyzer);
