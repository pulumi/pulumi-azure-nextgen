# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'CreateMode',
    'HAEnabledEnum',
    'ResourceIdentityType',
    'ServerKeyType',
    'ServerVersion',
    'SkuTier',
]


class CreateMode(str, Enum):
    """
    The mode to create a new PostgreSQL server.
    """
    DEFAULT = "Default"
    POINT_IN_TIME_RESTORE = "PointInTimeRestore"


class HAEnabledEnum(str, Enum):
    """
    stand by count value can be either enabled or disabled
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ResourceIdentityType(str, Enum):
    """
    The identity type.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"


class ServerKeyType(str, Enum):
    """
    The key type like 'AzureKeyVault'.
    """
    AZURE_KEY_VAULT = "AzureKeyVault"


class ServerVersion(str, Enum):
    """
    PostgreSQL Server version.
    """
    SERVER_VERSION_12 = "12"
    SERVER_VERSION_11 = "11"


class SkuTier(str, Enum):
    """
    The tier of the particular SKU, e.g. Burstable.
    """
    BURSTABLE = "Burstable"
    GENERAL_PURPOSE = "GeneralPurpose"
    MEMORY_OPTIMIZED = "MemoryOptimized"
