
$(function() {

  // Table row clicking ...
  var el;
  if (el = $("table#var_reports tr")) {
  
    el.css("cursor", "pointer");
    el.click(function() {

      var csv = $(this).data('timeserie');
      
      var tmp = csv.split('\n');
      var labels = new Array;
      var times  = new Array;
      var values = new Array;
      
      for(i = 0; i < tmp.length; i++) {
        a = tmp[i].split(",");
        labels.push(a[0]);
        times.push(parseInt(a[1]));
        values.push(parseInt(a[2]));
      }

      /*
      var labels = ['param1', 'param2', 'param3'];
      var times  = [0.500, 1.000, 1.500];
      var values = [20, 30, 40];
      */
      
      drawChart("chart_div", labels, values);
      
      $("#chart_header").fadeIn('fast', function() {  
      
        $('html, body, .content').animate({
          scrollTop: $(document).height()
        }, 800, function() {
        
          // Typeahead experiment filter
          
          filter = $('input#experiment_filter');
          labels = filter.data('labels').split(",");
          filter.typeahead({
            source: labels, items: 5
          });
          
          $("button#button_filter").click(function() {
          
            // filter the labels 
            var labels_copy = labels.slice();
            var times_partial = new Array;
            var values_partial = new Array;
            var pos = $.inArray(filter.val(), labels_copy);
            
            while(pos !== -1) {
              delete labels_copy[pos];
              times_partial.push(times[pos]);
              values_partial.push(values[pos]);
              
              pos = $.inArray(filter.val(), labels_copy);
            }
            
            drawChart("chart_div", times_partial, values_partial, "Time");
          
          });
        });
      });
    });
  } 
  
});
      

