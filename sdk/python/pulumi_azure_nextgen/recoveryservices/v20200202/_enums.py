# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'PrivateEndpointConnectionStatus',
    'ProvisioningState',
]


class PrivateEndpointConnectionStatus(str, Enum):
    """
    Gets or sets the status
    """
    PENDING = "Pending"
    APPROVED = "Approved"
    REJECTED = "Rejected"
    DISCONNECTED = "Disconnected"


class ProvisioningState(str, Enum):
    """
    Gets or sets provisioning state of the private endpoint connection
    """
    SUCCEEDED = "Succeeded"
    DELETING = "Deleting"
    FAILED = "Failed"
    PENDING = "Pending"
