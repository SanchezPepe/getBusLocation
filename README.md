# Bus ITAM location API

API methods to get the location of the shuttles in realtime in JSON

## Methods

- getBus/barranca
- getBus/quevedo
- getBus/staTeresa1
- getBus/staTeresa2

## Sample Response

```
{
   "Table":[
      {
         "LATITUD":19.35493,
         "LONGITUD":-99.19008,
         "RUTA":1,
         "FECHA":"2022-04-28T20:55:55-05:00",
         "DIRECCION":186,
         "VELOCIDAD":47,
         "LOCFECHA":"2022-04-28T20:53:37-05:00"
      },
      {
         "LATITUD":19.34238,
         "LONGITUD":-99.19094,
         "RUTA":1,
         "FECHA":"2022-04-28T21:00:25-05:00",
         "DIRECCION":264,
         "VELOCIDAD":12,
         "LOCFECHA":"2022-04-28T20:59:50-05:00"
      }
   ]
}
```
