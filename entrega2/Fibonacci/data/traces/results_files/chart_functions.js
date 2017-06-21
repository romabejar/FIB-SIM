// Dygraph chart functions

function drawChart(div_id, xvalues, yvalues, xlabel, ylabel) {

  xlabel = typeof xlabel !== 'undefined' ? xlabel : "Experiment";
  ylabel = typeof ylabel !== 'undefined' ? ylabel : "Value";

  var labelOptions = {
    fontFamily: 'Georgia, Serif',
    fontSize: '12pt'
  };

 
  //g = new Dygraph(document.getElementById(div_id), csv);
  $("#" + div_id).empty();
  $.jqplot(div_id, [yvalues], {
    axes: {
      xaxis: {
        label: xlabel,
        labelOptions: labelOptions,
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
        renderer: $.jqplot.CategoryAxisRenderer,
        ticks: xvalues
      },
      yaxis: {
        label: ylabel,
        labelOptions: labelOptions,
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
      }
    },
    highlighter: { show: true }
  });  
}
;
