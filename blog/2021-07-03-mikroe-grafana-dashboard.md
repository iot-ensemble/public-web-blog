---
title: Mikroe Grafana Dashboards
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [mikroe, mikroe click board, thermo 5 click, fathym, iot ensemble, devices, sensors, grafana, dashboards]
hide_table_of_contents: true
---

Once you have your Mikroe Click board data flowing to the cloud, it's time to create some Grafana Dashboards so that you can easily monitor everything. But first things first, let's get our Mikroe Click board connected to Microsoft Azure.

![Mikroe Logo](https://www.iot-ensemble.com/img/screenshots/Mikroe-blk-background-logo.png)

Mikroe Click boards have a great guide located [here](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/get_started/cec1702-iot-development-kit-no-operating-system-c.md) that shows how to connect your Mikroe Click board devices to an Azure IoT Hub running the devBoard_Azure_IoT_build package.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, IoT Hub Device Provisioning Service, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's [IoT Ensemble](https://www.iot-ensemble.com). With one click I can register my Mikroe Click board device and immediately get access to the data for downstream use in alerts, dashboards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into your config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my device connected with the Mikroe Thermo 5 Click board temp sensor.

![IoT Ensemble List Device](https://www.iot-ensemble.com/img/screenshots/Mikroe-Connected-Device.png)

:::info
Please note the above referenced documentation utilizes the X.509 certificate to authenticate a device.  IoT Ensemble uses the Symmetric Key authentication.  The device config will need to be modified to communicate using a connectionstring instead of the certificate.  You can learn more about access to the IoT Hub using Shared Access Keys and security tokens [here]( https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-sas?tabs=node)
:::

The Mikroe data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the Mikroe data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. 

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the Mikroe data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. [Read this](https://www.iot-ensemble.com/docs/getting-started/connecting-downstream) to learn more about accessing your data.
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](https://www.iot-ensemble.com/img/screenshots/Mikroe-Dashboard.png)

## Mikroe Grafana Dashboards

Now that my Mikroe data is flowing to IoT Ensemble, it's time to create some Grafana Dashboards to monitor everything. This [IoT Ensemble doc](https://www.iot-ensemble.com/docs/devs/storage/grafana) explains how to import data from IoT Ensemble into Grafana and setup a dashboard. Here's a screenshot.

![Grafana Dashboard](https://www.iot-ensemble.com/img/screenshots/Mikroe-Grafana-Dashboard.png)

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first Mikroe Click board with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
[Enroll your first Mikroe Click board](https://www.iot-ensemble.com/dashboard) with IoT Ensemble for free.
No credit card required.
No Azure account required.
:::