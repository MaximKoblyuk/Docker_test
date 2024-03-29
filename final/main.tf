provider "azurerm" {
  version = "2.42.0"
  subscription_id = var.subscriptionID

}

resource "azurerm_resource_group" "mk" {
  name = var.resourceGroupeName
  location = var.location
}
  
resource "azurerm_kubernetes_cluster" "aks" {
  name                    = var.cluster_name 
  kubernetes_version      = var.kubernetes_version
  location                = var.location
  resource_group_name     = azurerm_resource_group.mk
  dns_prefix              = var.cluster_name

   default_node_pool {
     name                = "system"
     node_count          =  var.system_node_count
     vm_size             = "Standard_DS2_v2"
     type                = "VirtualMachineScaleSets"
     availability_zones  = [1 ,2, 3]
     enable_auto_scaling = false
   }
    identity {
        type = "SystemAssigned"
    }
 
    network_profile {
        load_balancer_sku = "Standard"
        network_plugin    = "kubenet"
  }
} 
