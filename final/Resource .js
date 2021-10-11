{
    "name": "mk",
    "id": "/subscriptions/00bc8731-989e-4291-b885-dbe1b0285119/resourceGroups/mk_group/providers/Microsoft.Compute/virtualMachines/mk",
    "type": "Microsoft.Compute/virtualMachines",
    "location": "westeurope",
    "plan": {
        "name": "gitlab-community-edition-with-ubuntu-1804-lts",
        "publisher": "cognosys",
        "product": "gitlab-community-edition-with-ubuntu-1804-lts"
    },
    "properties": {
        "vmId": "50b0e4b3-ae4a-4002-aa9a-f5c43c713f3e",
        "hardwareProfile": {
            "vmSize": "Standard_D2_v2"
        },
        "storageProfile": {
            "imageReference": {
                "publisher": "cognosys",
                "offer": "gitlab-community-edition-with-ubuntu-1804-lts",
                "sku": "gitlab-community-edition-with-ubuntu-1804-lts",
                "version": "latest"
            },
            "osDisk": {
                "osType": "Linux",
                "name": "mk_OsDisk_1_2de0281887964da1929d214a8c79a90c",
                "createOption": "FromImage",
                "caching": "ReadWrite",
                "managedDisk": {
                    "id": "/subscriptions/00bc8731-989e-4291-b885-dbe1b0285119/resourceGroups/mk_group/providers/Microsoft.Compute/disks/mk_OsDisk_1_2de0281887964da1929d214a8c79a90c"
                },
                "diskSizeGB": 30
            },
            "dataDisks": []
        },
        "osProfile": {
            "computerName": "mk",
            "adminUsername": "maxim",
            "linuxConfiguration": {
                "disablePasswordAuthentication": false
            },
            "secrets": []
        },
        "networkProfile": {
            "networkInterfaces": [
                {
                    "id": "/subscriptions/00bc8731-989e-4291-b885-dbe1b0285119/resourceGroups/mk_group/providers/Microsoft.Network/networkInterfaces/mk733"
                }
            ]
        },
        "diagnosticsProfile": {
            "bootDiagnostics": {
                "enabled": true
            }
        },
        "provisioningState": "Succeeded"
    }
}