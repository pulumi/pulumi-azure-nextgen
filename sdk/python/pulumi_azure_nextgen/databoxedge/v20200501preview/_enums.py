# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AccountType',
    'AzureContainerDataFormat',
    'ClientPermissionType',
    'DataBoxEdgeDeviceStatus',
    'DataPolicy',
    'DayOfWeek',
    'EncryptionAlgorithm',
    'MonitoringStatus',
    'OrderState',
    'RoleTypes',
    'SSLStatus',
    'ShareAccessProtocol',
    'ShareAccessType',
    'ShareStatus',
    'SkuName',
    'SkuTier',
    'StorageAccountStatus',
    'TriggerEventType',
    'UserType',
]


class AccountType(str, Enum):
    """
    Type of storage accessed on the storage account.
    """
    GENERAL_PURPOSE_STORAGE = "GeneralPurposeStorage"
    BLOB_STORAGE = "BlobStorage"


class AzureContainerDataFormat(str, Enum):
    """
    Storage format used for the file represented by the share.
    """
    BLOCK_BLOB = "BlockBlob"
    PAGE_BLOB = "PageBlob"
    AZURE_FILE = "AzureFile"


class ClientPermissionType(str, Enum):
    """
    Type of access to be allowed for the client.
    """
    NO_ACCESS = "NoAccess"
    READ_ONLY = "ReadOnly"
    READ_WRITE = "ReadWrite"


class DataBoxEdgeDeviceStatus(str, Enum):
    """
    The status of the Data Box Edge/Gateway device.
    """
    READY_TO_SETUP = "ReadyToSetup"
    ONLINE = "Online"
    OFFLINE = "Offline"
    NEEDS_ATTENTION = "NeedsAttention"
    DISCONNECTED = "Disconnected"
    PARTIALLY_DISCONNECTED = "PartiallyDisconnected"
    MAINTENANCE = "Maintenance"


class DataPolicy(str, Enum):
    """
    Data policy of the storage Account.
    """
    CLOUD = "Cloud"
    LOCAL = "Local"


class DayOfWeek(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"


class EncryptionAlgorithm(str, Enum):
    """
    The algorithm used to encrypt "Value".
    """
    NONE = "None"
    AES256 = "AES256"
    RSAE_S_PKCS1_V_1_5 = "RSAES_PKCS1_v_1_5"


class MonitoringStatus(str, Enum):
    """
    Current monitoring status of the share.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class OrderState(str, Enum):
    """
    Status of the order as per the allowed status types.
    """
    UNTRACKED = "Untracked"
    AWAITING_FULFILMENT = "AwaitingFulfilment"
    AWAITING_PREPARATION = "AwaitingPreparation"
    AWAITING_SHIPMENT = "AwaitingShipment"
    SHIPPED = "Shipped"
    ARRIVING = "Arriving"
    DELIVERED = "Delivered"
    REPLACEMENT_REQUESTED = "ReplacementRequested"
    LOST_DEVICE = "LostDevice"
    DECLINED = "Declined"
    RETURN_INITIATED = "ReturnInitiated"
    AWAITING_RETURN_SHIPMENT = "AwaitingReturnShipment"
    SHIPPED_BACK = "ShippedBack"
    COLLECTED_AT_MICROSOFT = "CollectedAtMicrosoft"


class RoleTypes(str, Enum):
    """
    Role type.
    """
    IOT = "IOT"
    ASA = "ASA"
    FUNCTIONS = "Functions"
    COGNITIVE = "Cognitive"


class SSLStatus(str, Enum):
    """
    Signifies whether SSL needs to be enabled or not.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ShareAccessProtocol(str, Enum):
    """
    Access protocol to be used by the share.
    """
    SMB = "SMB"
    NFS = "NFS"


class ShareAccessType(str, Enum):
    """
    Type of access to be allowed for the user.
    """
    CHANGE = "Change"
    READ = "Read"
    CUSTOM = "Custom"


class ShareStatus(str, Enum):
    """
    Current status of the share.
    """
    OFFLINE = "Offline"
    UNKNOWN = "Unknown"
    OK = "OK"
    UPDATING = "Updating"
    NEEDS_ATTENTION = "NeedsAttention"


class SkuName(str, Enum):
    """
    SKU name.
    """
    GATEWAY = "Gateway"
    EDGE = "Edge"
    TE_A_1_NODE = "TEA_1Node"
    TE_A_1_NODE_UPS = "TEA_1Node_UPS"
    TE_A_1_NODE_HEATER = "TEA_1Node_Heater"
    TE_A_1_NODE_UP_S_HEATER = "TEA_1Node_UPS_Heater"
    TE_A_4_NODE_HEATER = "TEA_4Node_Heater"
    TE_A_4_NODE_UP_S_HEATER = "TEA_4Node_UPS_Heater"
    TMA = "TMA"
    TDC = "TDC"
    TC_A_LARGE = "TCA_Large"
    TC_A_SMALL = "TCA_Small"
    GPU = "GPU"


class SkuTier(str, Enum):
    """
    The SKU tier. This is based on the SKU name.
    """
    STANDARD = "Standard"


class StorageAccountStatus(str, Enum):
    """
    Current status of the storage account
    """
    OK = "OK"
    OFFLINE = "Offline"
    UNKNOWN = "Unknown"
    UPDATING = "Updating"
    NEEDS_ATTENTION = "NeedsAttention"


class TriggerEventType(str, Enum):
    """
    Trigger Kind.
    """
    FILE_EVENT = "FileEvent"
    PERIODIC_TIMER_EVENT = "PeriodicTimerEvent"


class UserType(str, Enum):
    """
    Type of the user.
    """
    SHARE = "Share"
    LOCAL_MANAGEMENT = "LocalManagement"
    ARM = "ARM"
