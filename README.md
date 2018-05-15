# Master Datalab IoT
César González
Universidad de Cantabria (Mayo de 2018)



## Contenido
Este repositorio contiene la plataforma de desarrollo con la que seguir los ejemplos prácticos que veremos en las clases.

La plataforma contiene los siguientes componentes principales:

- **Mosquitto** Broker de mensajes MQTT
- **NodeRed** Desarrollo rápido de agentes para tareas de ETL (Extract Transform Load)
- **Freeboard** Análitica de datos en tiempo real.
- **Grafana** Análitica avanzada de datos históricos.
- **InfluxDb** Base de datos especializada en series de tiempo. Almacenamiento histórico de datos de telemetría.

## Requisitos

Se requiere tener instalado [Vagrant](https://www.vagrantup.com/downloads.html) y un cliente git.

## Despliegue

```shell
git clone https://github.com/cesarbits/datalabiot
cd datalabiot
vagrant up
```

Mapa de puertos y servicios de la máquina virtual generada

```
*Mosquitto* 9001 websockets y 1883 MQTT
*NodeRed*  1880
*InfluxDb* 8086
*Grafana* 3000
*Freeboard* 8080
```
