

$(document).ready(function() {
    // Init calculator
    var viewWidth = $(window).width();
    var viewHeight = $(window).height();
    var top, left;
    var heading = document.querySelector('#header');
    
    // Spawn calculator on button click
    $(document).on("click", ".button-row > button", function() {
        left = Math.random() * (viewWidth-0);
        top = Math.random() * (viewHeight-0);
        // new calculator placed randomly
        $calc(top,left);
        // change heading
        $compute(heading);
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

    // Change heading
    $compute = function(heading) {
        var phrases = [
            "Does not compute.",
            "Are you serious?",
            "I didn't feel anything.",
            "What are you trying to do?",
            "This is not a tip calculator.",
            "It's a secret.",
            "3.141592653589793238462643383279502884197",
            "Sorry, that calculator is broken. Here's a new one.",
            "I don't understand.",
            "Error.",
        ];
        heading.textContent = phrases[Math.floor(Math.random() * 10)];
    };
  };