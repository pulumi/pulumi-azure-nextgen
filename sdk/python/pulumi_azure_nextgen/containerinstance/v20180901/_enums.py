# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ContainerGroupIpAddressType',
    'ContainerGroupNetworkProtocol',
    'ContainerGroupRestartPolicy',
    'ContainerNetworkProtocol',
    'LogAnalyticsLogType',
    'OperatingSystemTypes',
]


class ContainerGroupIpAddressType(str, Enum):
    """
    Specifies if the IP is exposed to the public internet.
    """
    PUBLIC = "Public"
    PRIVATE = "Private"


class ContainerGroupNetworkProtocol(str, Enum):
    """
    The protocol associated with the port.
    """
    TCP = "TCP"
    UDP = "UDP"


class ContainerGroupRestartPolicy(str, Enum):
    """
    Restart policy for all containers within the container group. 
    - `Always` Always restart
    - `OnFailure` Restart on failure
    - `Never` Never restart
    """
    ALWAYS = "Always"
    ON_FAILURE = "OnFailure"
    NEVER = "Never"


class ContainerNetworkProtocol(str, Enum):
    """
    The protocol associated with the port.
    """
    TCP = "TCP"
    UDP = "UDP"


class LogAnalyticsLogType(str, Enum):
    """
    The log type to be used.
    """
    CONTAINER_INSIGHTS = "ContainerInsights"
    CONTAINER_INSTANCE_LOGS = "ContainerInstanceLogs"


class OperatingSystemTypes(str, Enum):
    """
    The operating system type required by the containers in the container group.
    """
    WINDOWS = "Windows"
    LINUX = "Linux"