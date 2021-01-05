# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ApplianceArtifactType',
    'ApplianceLockLevel',
    'ResourceIdentityType',
]


class ApplianceArtifactType(str, Enum):
    """
    The appliance artifact type.
    """
    TEMPLATE = "Template"
    CUSTOM = "Custom"


class ApplianceLockLevel(str, Enum):
    """
    The appliance lock level.
    """
    CAN_NOT_DELETE = "CanNotDelete"
    READ_ONLY = "ReadOnly"
    NONE = "None"


class ResourceIdentityType(str, Enum):
    """
    The identity type.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"