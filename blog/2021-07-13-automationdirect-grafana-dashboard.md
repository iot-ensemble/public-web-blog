---
title: AutomationDirect Grafana Dashboards
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [automationdirect, automationdirect brx plc, fathym, iot ensemble, devices, sensors, grafana, dashboards]
hide_table_of_contents: true
---

Once you have your AutomationDirect BRX PLC data flowing to the cloud, it's time to create some Grafana Dashboards so that you can easily monitor everything. But first things first, let's get our AutomationDirect BRX PLC connected to Microsoft Azure.

![AutomationDirect Image](/img/screenshots/AutomationDirect-ProductsLogo.jpg)

AutomationDirect BRX PLC has a great guide located **[here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiAtNGZidLxAhWRmWoFHfg1A3AQFjABegQIBhAD&url=https%3A%2F%2Fprtnrsvcstorprdcus.blob.core.windows.net%2Fdevice-get-started-docs%2Fautomationdirect.com_Do-more!%2520BRX_920bfbc9-d1a2-4bcd-a4be-0e04328e4ef8_ab97440a-c778-4e7a-aa71-3e8000667ea4getStartedDoc.pdf&usg=AOvVaw3VIaflN-phpHEg6RoO075C)** that shows how to connect your AutomationDirect BRX PLC device to an Azure IoT Hub.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's **[IoT Ensemble](https://www.iot-ensemble.com)**. With one click I can register my AutomationDirect BRX PLC device and immediately get access to the data for downstream use in alerts, dashboards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into the config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected AutomationDirect BRX PLC.

![IoT Ensemble List Device](/img/screenshots/AutomationDirect-ConnectedDevice.png)

The AutomationDirect data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the AutomationDirect data is stored in Microsoft Azure in blob storage, as well as in CosmosDB.  

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the AutomationDirect data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. [Read this](https://www.iot-ensemble.com/docs/getting-started/connecting-downstream) to learn more about accessing your data
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](/img/screenshots/AutomationDirect-Dashboard.png)

## AutomationDirect Grafana Dashboards

Now that my AutomationDirect data is flowing to IoT Ensemble, it's time to create some Grafana Dashboards to monitor everything. This [IoT Ensemble doc](https://www.iot-ensemble.com/docs/devs/storage/grafana) explains how to import data from IoT Ensemble into Grafana and setup a dashboard. Here's a screenshot.

![Grafana Dashboard](/img/screenshots/AutomationDirect-GrafanaDashboard.png)

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first AutomationDirect BRX PLC with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
[Enroll your first AutomationDirect BRX PLC](https://www.iot-ensemble.com/dashboard) with IoT Ensemble for free.  
No credit card required.  
No Azure account required.
:::