---
title: Adafruit Grafana Dashboards
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.fathym.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [adafruit, fathym, iot ensemble, devices, sensors, grafana, dashboards]
keywords:
    - Adafruit
    - Adafruit Feather M0 WiFi
    - Azure IoT Hub
    - Arduino
    - BME280
    - Fathym
    - IoT
    - IoT Ensemble
    - Grafana
    - Dashboard
    - Device
    - Sensor
hide_table_of_contents: true
---

> July 17, 2021 by Matt Jackson, _Product Support Specialist @ Fathym_

Once you have your Adafruit Device data flowing to the cloud, it's time to create some Grafana Dashboards so that you can easily monitor everything. But first things first, let's get our Adafruit Device connected to Microsoft Azure.

![Adafruit Logo](https://www.fathym.com/iot/img/screenshots/adafruit-hero.jpg)

Adafruit Device has a great guide located **[here](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/get_started/iot-hub-adafruit-feather-m0-wifi-kit-arduino-get-started.md)** that shows how to connect your Adafruit Device to an Azure IoT Hub.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's **[IoT Ensemble](https://www.fathym.com/iot)**. With one click I can register my Adafruit Device and immediately get access to the data for downstream use in alerts, dashboards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into the config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected Adafruit Device.

![IoT Ensemble List Device](https://www.fathym.com/iot/img/screenshots/Adafruit-ConnectedDevice.png)

The Adafruit data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the Adafruit data is stored in Microsoft Azure in blob storage, as well as in CosmosDB.  

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the Adafruit data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. [Read this](https://www.fathym.com/iot/docs/getting-started/connecting-downstream) to learn more about accessing your data
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](https://www.fathym.com/iot/img/screenshots/Adafruit-Dashboard.png)

## Adafruit Grafana Dashboards

Now that my Adafruit data is flowing to IoT Ensemble, it's time to create some Grafana Dashboards to monitor everything. This [IoT Ensemble doc](https://www.fathym.com/iot/docs/devs/storage/grafana) explains how to import data from IoT Ensemble into Grafana and setup a dashboard. Here's a screenshot.

![Grafana Dashboard](https://www.fathym.com/iot/img/screenshots/Adafruit-GrafanaDashboard.png)

[Sign up](https://www.fathym.com/dashboard/iot) for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first Adafruit Device with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
[Enroll your first Adafruit Device](https://www.fathym.com/dashboard/iot) with IoT Ensemble for free.  
No credit card required.  
No Azure account required.
:::