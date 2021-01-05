# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DeviceType',
    'DiskCreateOptionTypes',
    'IPAllocationMethod',
    'IPVersion',
    'NetworkFunctionRoleConfigurationType',
    'OperatingSystemTypes',
    'SkuDeploymentMode',
    'SkuType',
    'VMSwitchType',
    'VirtualMachineSizeTypes',
]


class DeviceType(str, Enum):
    """
    The type of the device.
    """
    UNKNOWN = "Unknown"
    AZURE_STACK_EDGE = "AzureStackEdge"


class DiskCreateOptionTypes(str, Enum):
    """
    Specifies how the virtual machine should be created.
    """
    UNKNOWN = "Unknown"
    EMPTY = "Empty"


class IPAllocationMethod(str, Enum):
    """
    IP address allocation method.
    """
    UNKNOWN = "Unknown"
    STATIC = "Static"
    DYNAMIC = "Dynamic"


class IPVersion(str, Enum):
    """
    IP address version.
    """
    UNKNOWN = "Unknown"
    I_PV4 = "IPv4"


class NetworkFunctionRoleConfigurationType(str, Enum):
    """
    Role type.
    """
    UNKNOWN = "Unknown"
    VIRTUAL_MACHINE = "VirtualMachine"


class OperatingSystemTypes(str, Enum):
    """
    The OS type.
    """
    UNKNOWN = "Unknown"
    WINDOWS = "Windows"
    LINUX = "Linux"


class SkuDeploymentMode(str, Enum):
    """
    The sku deployment mode.
    """
    UNKNOWN = "Unknown"
    AZURE = "Azure"
    PRIVATE_EDGE_ZONE = "PrivateEdgeZone"


class SkuType(str, Enum):
    """
    The sku type.
    """
    UNKNOWN = "Unknown"
    EVOLVED_PACKET_CORE = "EvolvedPacketCore"
    SDWAN = "SDWAN"
    FIREWALL = "Firewall"


class VMSwitchType(str, Enum):
    """
    The type of the VM switch.
    """
    UNKNOWN = "Unknown"
    MANAGEMENT = "Management"
    WAN = "Wan"
    LAN = "Lan"


class VirtualMachineSizeTypes(str, Enum):
    """
    The size of the virtual machine.
    """
    UNKNOWN = "Unknown"
    STANDARD_D1_V2 = "Standard_D1_v2"
    STANDARD_D2_V2 = "Standard_D2_v2"
    STANDARD_D3_V2 = "Standard_D3_v2"
    STANDARD_D4_V2 = "Standard_D4_v2"
    STANDARD_D5_V2 = "Standard_D5_v2"
    STANDARD_D11_V2 = "Standard_D11_v2"
    STANDARD_D12_V2 = "Standard_D12_v2"
    STANDARD_D13_V2 = "Standard_D13_v2"
    STANDARD_DS1_V2 = "Standard_DS1_v2"
    STANDARD_DS2_V2 = "Standard_DS2_v2"
    STANDARD_DS3_V2 = "Standard_DS3_v2"
    STANDARD_DS4_V2 = "Standard_DS4_v2"
    STANDARD_DS5_V2 = "Standard_DS5_v2"
    STANDARD_DS11_V2 = "Standard_DS11_v2"
    STANDARD_DS12_V2 = "Standard_DS12_v2"
    STANDARD_DS13_V2 = "Standard_DS13_v2"
    STANDARD_F1 = "Standard_F1"
    STANDARD_F2 = "Standard_F2"
    STANDARD_F4 = "Standard_F4"
    STANDARD_F8 = "Standard_F8"
    STANDARD_F16 = "Standard_F16"
    STANDARD_F1S = "Standard_F1s"
    STANDARD_F2S = "Standard_F2s"
    STANDARD_F4S = "Standard_F4s"
    STANDARD_F8S = "Standard_F8s"
    STANDARD_F16S = "Standard_F16s"