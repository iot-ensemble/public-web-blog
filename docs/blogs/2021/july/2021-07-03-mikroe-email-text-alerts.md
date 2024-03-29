---
title: Mikroe Email & Text Alerts
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.fathym.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [mikroe, mikroe click board, thermo 5 click, fathym, iot ensemble, microsoft azure, logic apps, devices, sensors, dashboards, email, text, alerts, notifications]
keywords:
     - Mikroe
     - Mikroe Click Board
     - Thermo 5 Click
     - Fathym
     - IoT
     - IoT Ensemble
     - Microsoft Azure
     - Logic Apps
     - Device
     - Sensor
     - Dashboard
     - Email
     - Text
     - Alert
     - Notification
hide_table_of_contents: true
---

> July 3, 2021 by Matt Jackson, _Product Support Specialist @ Fathym_

Once you have your Mikroe Click board data flowing to the cloud, it's time to setup alerts and notifications so that you can easily monitor everything. I prefer using Microsoft Logic Apps for sending email and text alerts when temperatures rise above a specified threshold. But first things first, let's get our Mikroe Click board connected to Microsoft Azure.

![Mikroe Logo](https://www.fathym.com/iot/img/screenshots/Mikroe-blk-background-logo.png)

Mikroe Click boards have a great guide located [here](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/get_started/cec1702-iot-development-kit-no-operating-system-c.md) that shows how to connect your Mikroe Click board devices to an Azure IoT Hub running the devBoard_Azure_IoT_build package.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, IoT Hub Device Provisioning Service, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's [IoT Ensemble](https://www.fathym.com/iot). With one click I can register my Mikroe Click board device and immediately get access to the data for downstream use in alerts, dashboards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into your config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my device connected with the Mikroe Thermo 5 Click board temp sensor.

![IoT Ensemble List Device](https://www.fathym.com/iot/img/screenshots/Mikroe-Connected-Device.png)

:::info
Please note the above referenced documentation utilizes the X.509 certificate to authenticate a device.  IoT Ensemble uses the Symmetric Key authentication.  The device config will need to be modified to communicate using a connectionstring instead of the certificate.  You can learn more about access to the IoT Hub using Shared Access Keys and security tokens **[here]( https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-sas?tabs=node)**
:::

The Mikroe data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the Mikroe data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. 

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the Mikroe data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. **[Read this](https://www.fathym.com/iot/docs/getting-started/connecting-downstream)** to learn more about accessing your data.
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](https://www.fathym.com/iot/img/screenshots/Mikroe-Dashboard.png)

## Mikroe Email & Text Alerts in Logic Apps

Now that my Mikroe data is flowing to IoT Ensemble, it's time to setup the email alerts using Logic Apps. This **[IoT Ensemble doc](https://www.fathym.com/iot/docs/devs/alerts/logic-apps)** explains how to use Logic Apps to call the IoT Ensemble warm query every 12 hours and check if the Temperature of any of the results is greater than 45. If so, it sends an email alert. Here's a screenshot.

![Email Alert Logic Apps](https://www.fathym.com/iot/img/screenshots/logic-apps-sendemail-settings.png)

**[Sign up](https://www.fathym.com/dashboard/iot)** for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first Mikroe Click board with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
**[Enroll your first Mikroe Click board](https://www.fathym.com/dashboard/iot)** with IoT Ensemble for free.
No credit card required.
No Azure account required.
:::
