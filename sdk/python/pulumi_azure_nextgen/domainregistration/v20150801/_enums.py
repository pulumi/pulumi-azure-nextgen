# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AzureResourceType',
    'CustomHostNameDnsRecordType',
    'DomainStatus',
    'HostNameType',
    'ProvisioningState',
]


class AzureResourceType(str, Enum):
    """
    Type of the Azure resource the hostname is assigned to
    """
    WEBSITE = "Website"
    TRAFFIC_MANAGER = "TrafficManager"


class CustomHostNameDnsRecordType(str, Enum):
    """
    Type of the Dns record
    """
    C_NAME = "CName"
    A = "A"


class DomainStatus(str, Enum):
    """
    Domain registration status
    """
    ACTIVE = "Active"
    AWAITING = "Awaiting"
    CANCELLED = "Cancelled"
    CONFISCATED = "Confiscated"
    DISABLED = "Disabled"
    EXCLUDED = "Excluded"
    EXPIRED = "Expired"
    FAILED = "Failed"
    HELD = "Held"
    LOCKED = "Locked"
    PARKED = "Parked"
    PENDING = "Pending"
    RESERVED = "Reserved"
    REVERTED = "Reverted"
    SUSPENDED = "Suspended"
    TRANSFERRED = "Transferred"
    UNKNOWN = "Unknown"
    UNLOCKED = "Unlocked"
    UNPARKED = "Unparked"
    UPDATED = "Updated"
    JSON_CONVERTER_FAILED = "JsonConverterFailed"


class HostNameType(str, Enum):
    """
    Type of the hostname
    """
    VERIFIED = "Verified"
    MANAGED = "Managed"


class ProvisioningState(str, Enum):
    """
    Domain provisioning state
    """
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    CANCELED = "Canceled"
    IN_PROGRESS = "InProgress"
    DELETING = "Deleting"
