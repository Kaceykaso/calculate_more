

$(document).ready(function() {
    // Init calculator
    var viewWidth = $(window).width();
    var viewHeight = $(window).height();
    var top, left;
    
    // Spawn calculator on button click
    $(document).on("click", ".button-row > button", function() {
        left = Math.random() * (viewWidth-0);
        top = Math.random() * (viewHeight-0);
        $calc(top,left);
    });
  });
  
  // Build calculator
  $calc = function(top,left) {
    // get example calculator to copy pasta for the rest
    var calculator = document.querySelector('#exCalc');
    var copy = calculator.cloneNode(true);

    // count and apply count
    var divCount = $(".calculator").length;
    var thisClass = "calc"+divCount;

    // add back in and position randomly
    
    copy.classList.add(thisClass);
    calculator.after(copy);
    $("."+thisClass).css({
        "margin-top":top,
        "margin-left":left,
        "float":divCount+1
    });
  };