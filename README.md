# Desafío MOTOMENSAJERIA

Realicé esta app siguiendo una sugerencia de Nico del canal "Hola Mundo" de youtube.
La consigna básica es generar un listado de horarios de media hora cada uno para cubrir el horario de 8:00 a 20:00 para una empresa 
de motomensajería que disponga de 8 motos por turno. 
La app debería poder reservar un pedido de moto para cada horario y llevar un control de las motos disponibles según cada horario.
Se requería también que si el mismo usuario clickeaba el mismo horario, esto liberara el recurso tomado y que si otros usuarios habían
tomado todos los recursos, no se permitiera tomar nuevas motos.

# Mi solución
## PRIMERA SOLUCION - PRIMER COMMIT ##
En la primera oportunidad, traté de respetar lo más que pude los lineamientos, sin embargo admito que no pude hacerlo por completo, dado
que al ser nuevo aún en el mundo de la programación, no manejo conexiones a bases de datos y, por lo tanto, no podía manejar varios usuarios distintos.
Así que traté de compensar esto por medio de agregar un boton adicional para cancelar los pedidos y una ventana que muestra en forma
dinámica los pedidos realizados y los recuros restantes, cambiando su color a ROJO cuando no quedan más recursos.

## SEGUNDA SOLUCION - SEGUNDO COMMIT ##
Un poco frustrado por no poder realizar la consigna en lo que requería bases de datos, decidí llevar la solución más allá y agregué mas
funcionalidades.
Cambié la botonera de horarios por un SELECT. Agregué la fecha. Agregué unas ventanas donde se muestra la información en forma dinámica.
Agregué un mini-formulario para ingresar el nombre del usuario y mostrarlo en forma dinámica y además un control que impide solicitar
mas de una moto por pesona.
Espero les guste!
