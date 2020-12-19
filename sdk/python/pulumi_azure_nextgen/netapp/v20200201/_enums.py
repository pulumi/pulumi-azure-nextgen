# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'EndpointType',
    'PoolServiceLevel',
    'ReplicationSchedule',
    'VolumeServiceLevel',
]


class EndpointType(str, Enum):
    """
    Indicates whether the local volume is the source or destination for the Volume Replication
    """
    SRC = "src"
    DST = "dst"


class PoolServiceLevel(str, Enum):
    """
    The service level of the file system
    """
    STANDARD = "Standard"
    PREMIUM = "Premium"
    ULTRA = "Ultra"


class ReplicationSchedule(str, Enum):
    """
    Schedule
    """
    REPLICATION_SCHEDULE_10MINUTELY = "_10minutely"
    HOURLY = "hourly"
    DAILY = "daily"


class VolumeServiceLevel(str, Enum):
    """
    The service level of the file system
    """
    STANDARD = "Standard"
    PREMIUM = "Premium"
    ULTRA = "Ultra"
