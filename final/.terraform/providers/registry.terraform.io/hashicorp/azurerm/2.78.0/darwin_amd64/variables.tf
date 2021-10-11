# --- root/variables.tf ---

variable "ssh_public_key_path" {
  type = string
}

variable "ansible_inventory_file_path" {
  type = string
}

variable "tenant_id" {
  type    = string
  default = "00bc8731-989e-4291-b885-dbe1b0285119"
}

variable "project" {
  type    = string
  default = "final"
}

variable "http_info_ip_url" {
  type    = string
  default = "http://ipinfo.io/ip"
}

variable "environment" {
  type = map(any)
  default = {
    dev = {
      address_space  = "172.31.0.0/16"
      instance_count = 1
      vm_size        = "Standard_D1_v2"
    }

    prod = {
      address_space  = "10.0.0.0/16"
      instance_count = 2
      vm_size        = "Standard_D1_v2"
    }
  }
}
