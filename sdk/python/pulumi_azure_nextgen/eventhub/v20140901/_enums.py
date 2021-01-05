# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AccessRights',
    'EntityStatus',
    'NamespaceState',
    'SkuName',
    'SkuTier',
]


class AccessRights(str, Enum):
    MANAGE = "Manage"
    SEND = "Send"
    LISTEN = "Listen"


class EntityStatus(str, Enum):
    """
    Enumerates the possible values for the status of the Event Hub.
    """
    ACTIVE = "Active"
    DISABLED = "Disabled"
    RESTORING = "Restoring"
    SEND_DISABLED = "SendDisabled"
    RECEIVE_DISABLED = "ReceiveDisabled"
    CREATING = "Creating"
    DELETING = "Deleting"
    RENAMING = "Renaming"
    UNKNOWN = "Unknown"


class NamespaceState(str, Enum):
    """
    State of the Namespace.
    """
    UNKNOWN = "Unknown"
    CREATING = "Creating"
    CREATED = "Created"
    ACTIVATING = "Activating"
    ENABLING = "Enabling"
    ACTIVE = "Active"
    DISABLING = "Disabling"
    DISABLED = "Disabled"
    SOFT_DELETING = "SoftDeleting"
    SOFT_DELETED = "SoftDeleted"
    REMOVING = "Removing"
    REMOVED = "Removed"
    FAILED = "Failed"


class SkuName(str, Enum):
    """
    Name of this SKU.
    """
    BASIC = "Basic"
    STANDARD = "Standard"


class SkuTier(str, Enum):
    """
    The billing tier of this particular SKU.
    """
    BASIC = "Basic"
    STANDARD = "Standard"
    PREMIUM = "Premium"