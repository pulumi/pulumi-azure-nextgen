# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DayOfWeek',
    'PrivateEndpointServiceConnectionStatus',
    'PublicNetworkAccess',
    'ReplicationRole',
    'SkuFamily',
    'SkuName',
    'TlsVersion',
]


class DayOfWeek(str, Enum):
    """
    Day of the week when a cache can be patched.
    """
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"
    EVERYDAY = "Everyday"
    WEEKEND = "Weekend"


class PrivateEndpointServiceConnectionStatus(str, Enum):
    """
    Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
    """
    PENDING = "Pending"
    APPROVED = "Approved"
    REJECTED = "Rejected"


class PublicNetworkAccess(str, Enum):
    """
    Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ReplicationRole(str, Enum):
    """
    Role of the linked server.
    """
    PRIMARY = "Primary"
    SECONDARY = "Secondary"


class SkuFamily(str, Enum):
    """
    The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
    """
    C = "C"
    P = "P"


class SkuName(str, Enum):
    """
    The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
    """
    BASIC = "Basic"
    STANDARD = "Standard"
    PREMIUM = "Premium"


class TlsVersion(str, Enum):
    """
    Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
    """
    _1_0 = "1.0"
    _1_1 = "1.1"
    _1_2 = "1.2"
