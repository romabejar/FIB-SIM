
values <- report_values[report_values$varname == "sum",]$varvalue
xTime <- report_values[report_values$varname == "sum",]$xTime

values <- as.numeric(as.character(values))
xTime <- as.numeric(as.character(xTime))

library(plotly)

grafica <- plot_ly(data.frame(xTime, values), x = xTime, y = values, text = paste("Agent: ", report_values$agent),mode = "markers+lines")

graficaFile <- paste("plotly-complete-",nameFile,sep="")
graficaFile <- paste(graficaFile,".html",sep="")


htmlwidgets::saveWidget(as.widget(grafica), graficaFile, selfcontained = FALSE)

grafica <- plot_ly(data.frame(xTime[0:20], values[0:20]), x = xTime[0:20], y = values[0:20], text = paste("Agent: ", report_values$agent[0:20]),mode = "lines+markers")

graficaFile <- paste("plotly-partial-",nameFile,sep="")
graficaFile <- paste(graficaFile,".html",sep="")

htmlwidgets::saveWidget(as.widget(grafica), graficaFile, selfcontained = FALSE)