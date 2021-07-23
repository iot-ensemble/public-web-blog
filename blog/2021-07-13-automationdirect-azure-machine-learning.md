---
title: AutomationDirect BRX PLC Machine Learning
author: Matt Jackson
author_title: Product Support Specialist @ Fathym
author_url: https://www.iot-ensemble.com
author_image_url: https://avatars.githubusercontent.com/u/55766355?v=4
tags: [automationdirect, automationdirect brx plc, fathym, iot ensemble, microsoft azure, machine learning, devices, sensors, models]
hide_table_of_contents: true
---

Once you have your AutomationDirect BRX PLC data flowing to the cloud, it's time to develop some fast and efficient algorithms and Machine Learning models for real-time processing of the data. Azure Machine Learning empowers us with a wide range of productive experiences for building, training, and deploying machine learning models faster. IoT Ensemble provides out of the box APIs that allow you to easily load your AutomationDirect data into Azure Machine Learning. But first things first, let's get our AutomationDirect BRX PLC connected to Microsoft Azure.

![AutomationDirect Image](/img/screenshots/AutomationDirect-SpaceLogo.jpg)

AutomationDirect BRX PLC has a great guide located **[here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiAtNGZidLxAhWRmWoFHfg1A3AQFjABegQIBhAD&url=https%3A%2F%2Fprtnrsvcstorprdcus.blob.core.windows.net%2Fdevice-get-started-docs%2Fautomationdirect.com_Do-more!%2520BRX_920bfbc9-d1a2-4bcd-a4be-0e04328e4ef8_ab97440a-c778-4e7a-aa71-3e8000667ea4getStartedDoc.pdf&usg=AOvVaw3VIaflN-phpHEg6RoO075C)** that shows how to connect your AutomationDirect BRX PLC device to an Azure IoT Hub.  It's a great source and very informative. However, instead of going through all of the tedious steps outlined in the tutorial of setting up an Azure resource group, the IoT Hub, storage containers, the storage endpoints, and everything else, I prefer to use Fathym's **[IoT Ensemble](https://www.iot-ensemble.com)**. With one click I can register my AutomationDirect BRX PLC device and immediately get access to the data for downstream use in alerts, dashboards, visualizations, and machine learning. After I enroll my device in IoT Ensemble, it displays the IoT Hub connectionstring. I take the connectionstring into the config to use as my Azure Key and I'm ready to rock. Here's a screenshot of my connected AutomationDirect BRX PLC.

![IoT Ensemble List Device](/img/screenshots/AutomationDirect-ConnectedDevice.png)

The AutomationDirect data is immediately flowing to IoT Ensemble and I can view the data on screen. Reminder that behind the scenes in IoT Ensemble the AutomationDirect data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. 

:::tip How to access data in Microsoft Azure
Behind the scenes in IoT Ensemble the AutomationDirect data is stored in Microsoft Azure in blob storage, as well as in CosmosDB. [Read this](https://www.iot-ensemble.com/docs/getting-started/connecting-downstream) to learn more about accessing your data
:::

Fathym's IoT Ensemble is providing an easy-to-use UI for interacting with the data instead of using the Azure portal - and it saves me a ton of time and money.

![Fathym IoT Ensemble](/img/screenshots/AutomationDirect-Dashboard.png)

## AutomationDirect BRX PLC Azure Machine Learning

IoT Ensemble provides out of the box APIs that allow you to easily load your AutomationDirect data into Azure Machine Learning. This [IoT Ensemble doc](https://www.iot-ensemble.com/docs/devs/storage/azure-ml) explains how to use IoT Ensemble's cold query to configure an Azure ML Dataset and an associated Automated ML Task to run your model. Here's a couple of screenshots.

![Azure Machine Learning Dataset](/img/screenshots/azure-ml-automated-ml-run-dataset-wizard-skip.png)

![Azure Automated ML](/img/screenshots/azure-ml-automated-ml-running.png)

[Sign up](https://www.iot-ensemble.com/dashboard) for IoT Ensemble and save your company thousands of dollars in Azure setup and management costs. Enroll your first AutomationDirect BRX PLC with IoT Ensemble for free. No credit card required. No Azure account required. It really is that simple.

:::info
[Enroll your first AutomationDirect BRX PLC](https://www.iot-ensemble.com/dashboard) with IoT Ensemble for free.  
No credit card required.  
No Azure account required.
:::