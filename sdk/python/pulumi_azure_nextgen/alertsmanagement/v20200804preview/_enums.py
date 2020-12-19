# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'HealthAlertsNamespace',
    'HealthStateName',
]


class HealthAlertsNamespace(str, Enum):
    """
    specifies the type of the alert criterion.
    """
    GUEST_VM_HEALTH = "GuestVmHealth"


class HealthStateName(str, Enum):
    """
    Health state name
    """
    WARNING = "Warning"
    CRITICAL = "Critical"
