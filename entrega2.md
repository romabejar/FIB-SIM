# Plantilla entregable 01 (30% de T2) #

## Membres del grup: ##

- Romà Bejar Vilà
- Joshua Ortiz Gambra

## Descripció del sistema a modelar ##
**Que modelem i amb quin objectiu:**

El sistema gestiona les comandes entrants d'una pizzeria. Les comandes poden ser Telefòniques les quals apareixen seguint una distribució uniforme[1+-0,5] minuts, o bé per persones en local que entren seguint una distribució uniforme [2+-1] minuts. Hi ha una cua de Trucades en espera de 2 de llargada, si arriba una trucada mentre la cua de Trucades en espera està plena, es perdrà aquesta trucada. També hi ha una cua de persones de mida màxima de 10, si entra alguna persona mentre la cua està plena, no s'hi posarà a la cua. Hi ha una Telefonista que agafa comandes de les trucades i les gestiona amb una durada que segueix una llei uniforme de [2,1] minuts. Hi ha una recepcionista que atén a les persones de la cua (els hi agafa la comanda). Agafar comandes de la cua costa un minut exacte. Quan la recepcionista o la telefonista agafen una comanda, aquesta va als amasadors i condimentadors. Després hi ha els amussador i condimentadors (que també fornegen). Finalment les pizzes fetes per Persones a la cua se'ls hi entrega i alliberen el seu espai a la cua. Les pizzes de comandes telefòniques les recullen uns repartidors que tarden a fer l'entrega un temps que segueix una distribució uniforme de [10,5] minuts.

## Hipòtesis considerades ##
**Hipòtesis definitives a usar en la implementació del model:**

- La durada del temps de màxima demanda és de 10800 segons (3hores).
- Les trucades entrants segueixen una distribució uniforme(30,90) segons.
- Les persones entrants segueixen una distribució uniforme(60,180) segons.
- El temps d'atenció d'una trucada segueix una distribució uniforme(60,120) segons.
- El temps de recepció d'una persona a la cua és de 60 segons.
- La cua de trucades en espera té un màxim de 2.
- La cua de persones, tant les que han demanat, com les que esperen la pizza té un
màxim de 10.
- El temps d'amassar i condimentar una pizza segueix una distribució uniforme(120,180) segons.
- El temps d'enfornar una pizza segueix una distribució uniforme(60,120) segons.
- El temps de repartir una pizza i tornar al restaurant segueix una distribució uniforme(300,600) segons.
- Si hi han més de 10 comandes que ja han sigut agafades però que no s'han començat a processar, és que falten amassadors i condimentadors.
- Si hi han més de 10 pizzes enfornades de comandes telefòniques que encara estan al restaurant, és que falten repartidors.
- Com no volem modificar el nombre de forners ni repartidors al restaurant, suposem que quan una pizza està condimentada va directament al forn, i que quan una pizza d'una comanda no telefònica està enfornada, s'entrega directament al client a la cua.
- Com sempre que s'amassa una pizza després fa falta algú que la condimenti simplifiquem fent que els amassadors i els condimentadors són una unitat.
- Com que el fornejat és independent de la solució que volem trobar, suposem que sempre hi ha espai, i quan una pizza està preparada per ser fornejada, entra directament al forn.
- Com que en temps de màxima demanda les trucades arriben cada 1 minut de mitja, i la gestió d'una trucada costa 1 minut i mig de mitja, quasi que podem assegurar que la telefonista, estarà únicament atenent trucades, per tant simplifiquem el nostre sistema fent que la telefonista no pugui atendre gent de la cua del restaurant.
- Com que no hem trobat una manera de manter l'ordre en què arriben les comandes a amasadors i condimentadors ( en el seu ordre de comandes telefòniques i comandes de Persona), simplifiquem el sistema fent que la següent comanda que es gestiona, sempre és de la que n'hi ha més, en cas d'empat s'agafa una comanda de Persona, ja que aquestes bloquegen la cua de Persones.

## Diagrames SDL ##
**Diagrames que contenen TOTS els elements que intervenen en el model de simulació.**

Adjuntats en el fitxer .vsdx. Tots els diagrames, tant sistema, bloc, i procés és troben dins de les diferents pestanyes del únic document .vsdx.
