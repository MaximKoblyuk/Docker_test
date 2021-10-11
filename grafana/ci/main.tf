provider "azurerm" {
  version = "2.28.0"
  subscription_id = "ee9604a7-1fe3-43ef-ac3d-9b1833808972"
}

resource "azurerm_resource_group" "terraform" {
  name     = "final"
  location = "West Europe"

 tags = {
   environment = "Dev"
 }
}