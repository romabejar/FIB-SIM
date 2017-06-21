setwd("F:\\Wokspace\\models\\SIM\\Fibonacci\\data\\traces")
nameFile <-c("Fibonacci (2016-03-25 1246h)")
require(XML)
data <-xmlParse("F:\\Wokspace\\models\\SIM\\Fibonacci\\data\\traces\\Fibonacci (2016-03-25 1246h).trace.xml")
xTime <-xpathSApply(data, "//Events/EYE_Report/@xTime")
agent <-xpathSApply(data, "//Events/EYE_Report/@agent")
varname <-xpathSApply(data, "//Events/EYE_Report/@varname")
vartype <-xpathSApply(data, "//Events/EYE_Report/@vartype")
varvalue <-xpathSApply(data, "//Events/EYE_Report/@varvalue")
label <-xpathSApply(data, "//Events/EYE_Report/@label")
report_values<-data.frame(xTime, agent, varname, vartype, varvalue, label)
xTime_array <-xpathSApply(data, "//Events/EYE_ReportArray/@xTime")
agent_array <-xpathSApply(data, "//Events/EYE_ReportArray/@agent")
varname_array <-xpathSApply(data, "//Events/EYE_ReportArray/@varname")
vartype_array <-xpathSApply(data, "//Events/EYE_ReportArray/@vartype")
varvalue_array <-xpathSApply(data, "//Events/EYE_ReportArray/@varvalue")
label_array <-xpathSApply(data, "//Events/EYE_ReportArray/@label")
varname_label <-xpathSApply(data, "//Events/EYE_ReportArray/@varname_label")
vartype_label <-xpathSApply(data, "//Events/EYE_ReportArray/@vartype_label")
varvalue_label <-xpathSApply(data, "//Events/EYE_ReportArray/@varvalue_label")
report_array_values<-data.frame(xTime_array, agent_array, varname_label, vartype_label, varvalue_label, varname_array, vartype_array, varvalue_array, label_array)

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
