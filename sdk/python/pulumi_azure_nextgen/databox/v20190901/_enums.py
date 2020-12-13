# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AddressType',
    'ClassDiscriminator',
    'DataDestinationType',
    'JobDeliveryType',
    'NotificationStageName',
    'SkuName',
    'TransportShipmentTypes',
]


class AddressType(str, Enum):
    """
    Type of address.
    """
    NONE = "None"
    RESIDENTIAL = "Residential"
    COMMERCIAL = "Commercial"


class ClassDiscriminator(str, Enum):
    """
    Indicates the type of job details.
    """
    DATA_BOX = "DataBox"
    DATA_BOX_DISK = "DataBoxDisk"
    DATA_BOX_HEAVY = "DataBoxHeavy"


class DataDestinationType(str, Enum):
    """
    Data Destination Type.
    """
    STORAGE_ACCOUNT = "StorageAccount"
    MANAGED_DISK = "ManagedDisk"


class JobDeliveryType(str, Enum):
    """
    Delivery type of Job.
    """
    NON_SCHEDULED = "NonScheduled"
    SCHEDULED = "Scheduled"


class NotificationStageName(str, Enum):
    """
    Name of the stage.
    """
    DEVICE_PREPARED = "DevicePrepared"
    DISPATCHED = "Dispatched"
    DELIVERED = "Delivered"
    PICKED_UP = "PickedUp"
    AT_AZURE_DC = "AtAzureDC"
    DATA_COPY = "DataCopy"


class SkuName(str, Enum):
    """
    The sku name.
    """
    DATA_BOX = "DataBox"
    DATA_BOX_DISK = "DataBoxDisk"
    DATA_BOX_HEAVY = "DataBoxHeavy"


class TransportShipmentTypes(str, Enum):
    """
    Indicates Shipment Logistics type that the customer preferred.
    """
    CUSTOMER_MANAGED = "CustomerManaged"
    MICROSOFT_MANAGED = "MicrosoftManaged"
