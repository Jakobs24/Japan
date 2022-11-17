

  $(document).on('scroll', function() {
  
    var pixelsFromTop = $(document).scrollTop()
  
  
    
    
     if (pixelsFromTop > 50) {
       $('header').addClass('hidden')
     } else {
       $('header').removeClass('hidden') 
     }
  
    if (pixelsFromTop < 600) {
      $('body').css('background-color', '#fff')
    } else if (pixelsFromTop < 1400)  {
      $('body').css('background-color', '#3E2C41')
    } else if (pixelsFromTop < 2200)  {
      $('body').css('background-color', '#5C527F')
    } else if (pixelsFromTop < 3000)  {
      $('body').css('background-color', '#261C2C')
    } else {
      $('body').css('background-color', '#EDEDED')
    }

    var documentHeight = $(document).height()
    var windowHeight = $(window).height()

    var difference = documentHeight - windowHeight

    var percentage = 100 * pixelsFromTop / difference

    $('.bar').css('width', percentage + '%')

  })


  // 1400 2200 3000 else some other color