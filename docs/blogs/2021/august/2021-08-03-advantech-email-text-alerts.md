---
title: Advantech Email & Text Alerts
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.fathym.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [advantech, fathym, iot ensemble, microsoft azure, logic apps, devices, sensors, dashboards, email, text, alerts, notifications]
keywords:
    - Advantech
    - Fathym
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

> August 3, 2021 by Matt Jackson, _Product Support Specialist @ Fathym_

Once you have your Advantech Edge Intelligent RTU data flowing to the cloud, it's time to setup alerts and notifications so that you can easily monitor everything. I prefer using Microsoft Logic Apps for sending email and text alerts when temperatures rise above a specified threshold. But first things first, let's get our Advantech RTU connected to Microsoft Azure.

![Advantech Logo](https://www.fathym.com/iot/img/screenshots/advantech-bubble-diagram.jpg)

Advantech has a video **[here](https://www.youtube.com/watch?v=HEhvcU36Z8o)** that shows how to connect your Advantech RTU to an Azure IoT Hub. It's a great video and very informative. However, instead of going through all of the tedious steps outlined in the video of setting up an Azure IoT Hub. I prefer to use Fathym's **[IoT Ensemble](https://www.fathym.com/iot)**. With one click I can register my Advantech device and immediately get access to the data for downstream use in alerts, dashboards, and visualizations. Behind the scenes we've already created an Azure resource group, storage containers, the storage endpoints, and everything else to help manage your data. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into Advantech TagLink Studio to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected Advantech RTU.

![IoT Ensemble List Device](https://www.fathym.com/iot/img/screenshots/Advantech-ConnectedDevice.PNG)

The Advantech data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the Advantech data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. 

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the Advantech data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. **[Read This](https://www.fathym.com/iot/docs/getting-started/connecting-downstream)** to learn more about accessing your data.
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](https://www.fathym.com/iot/img/screenshots/Advantech-Dashboard.PNG)

## Advantech Email & Text Alerts in Logic Apps

Now that my Advantech data is flowing to IoT Ensemble, it's time to setup the email alerts using Logic Apps. This **[IoT Ensemble doc](https://www.fathym.com/iot/docs/devs/alerts/logic-apps)** explains how to use Logic Apps to call the IoT Ensemble warm query every 12 hours and check if the Temperature of any of the results is greater than 45. If so, it sends an email alert. Here's a screenshot.

![Email Alert Logic Apps](https://www.fathym.com/iot/img/screenshots/logic-apps-sendemail-settings.png)

**[Sign up](https://www.fathym.com/dashboard/iot)** for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first Advantech RTU with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
**[Enroll your first Advantech RTU](https://www.fathym.com/dashboard/iot)** with IoT Ensemble for free.  
No credit card required.  
No Azure account required.
:::