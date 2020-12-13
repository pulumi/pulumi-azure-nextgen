# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'EnterpriseChannelNodeState',
    'EnterpriseChannelState',
    'Kind',
    'SkuName',
]


class EnterpriseChannelNodeState(str, Enum):
    """
    The current state of the Enterprise Channel Node.
    """
    CREATING = "Creating"
    CREATE_FAILED = "CreateFailed"
    STARTED = "Started"
    STARTING = "Starting"
    START_FAILED = "StartFailed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"
    STOP_FAILED = "StopFailed"
    DELETING = "Deleting"
    DELETE_FAILED = "DeleteFailed"


class EnterpriseChannelState(str, Enum):
    """
    The current state of the Enterprise Channel.
    """
    CREATING = "Creating"
    CREATE_FAILED = "CreateFailed"
    STARTED = "Started"
    STARTING = "Starting"
    START_FAILED = "StartFailed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"
    STOP_FAILED = "StopFailed"
    DELETING = "Deleting"
    DELETE_FAILED = "DeleteFailed"


class Kind(str, Enum):
    """
    Required. Gets or sets the Kind of the resource.
    """
    SDK = "sdk"
    DESIGNER = "designer"
    BOT = "bot"
    FUNCTION = "function"


class SkuName(str, Enum):
    """
    The sku name
    """
    F0 = "F0"
    S1 = "S1"
