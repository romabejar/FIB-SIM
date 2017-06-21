PQueue_Elems <- subset(report_values, report_values$varname == "PQueue_Elems")
PQueue_Elems$varvalue <- as.numeric(as.character(PQueue_Elems$varvalue))
PQueue_Elems$xTime <- as.numeric(as.character(PQueue_Elems$xTime))

library('plotly')
library('htmlwidgets')

grafica1 <- plot_ly(data.frame(PQueue_Elems$xTime,PQueue_Elems$varvalue), x = PQueue_Elems$xTime, y = PQueue_Elems$varvalue, text = paste("Agent: ", PQueue_Elems$agent),mode = "lines+markers")

grafica <- paste("plotly-",nameFile,sep="")
grafica <- paste(grafica,".html",sep="")


htmlwidgets::saveWidget(as.widget(grafica1), grafica,selfcontained = FALSE)
