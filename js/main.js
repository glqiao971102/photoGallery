function myFunction() {

    
    let input, filter, items, txtValue;
    input = $('#search')
    filter = input.val().toUpperCase();
    items = $(".items a")

  
    // // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < items.length; i++) {
      txtValue = items.eq(i).attr('data-title')
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items.eq(i).parent().show();
        items.eq(i).attr('data-lightbox','images')
        items[i].style.display = "";
      } else {
        items.eq(i).removeAttr('data-lightbox')
        items.eq(i).parent().hide();
        
      }
    }
  }