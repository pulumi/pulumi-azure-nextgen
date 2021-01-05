# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ProvisioningStateType',
    'StorageTargetType',
]


class ProvisioningStateType(str, Enum):
    """
    ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
    """
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    CREATING = "Creating"
    DELETING = "Deleting"
    UPDATING = "Updating"


class StorageTargetType(str, Enum):
    """
    Type for storage target.
    """
    NFS3 = "nfs3"
    CLFS = "clfs"
    UNKNOWN = "unknown"