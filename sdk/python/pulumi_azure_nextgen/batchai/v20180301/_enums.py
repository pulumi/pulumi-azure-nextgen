# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'CachingType',
    'DeallocationOption',
    'OutputType',
    'StorageAccountType',
    'VmPriority',
]


class CachingType(str, Enum):
    NONE = "none"
    READONLY = "readonly"
    READWRITE = "readwrite"


class DeallocationOption(str, Enum):
    """
    The default value is requeue.
    """
    REQUEUE = "requeue"
    TERMINATE = "terminate"
    WAITFORJOBCOMPLETION = "waitforjobcompletion"
    UNKNOWN = "unknown"


class OutputType(str, Enum):
    """
    Default value is Custom. The possible values are Model, Logs, Summary, and Custom. Users can use multiple enums for a single directory. Eg. outPutType='Model,Logs, Summary'
    """
    MODEL = "model"
    LOGS = "logs"
    SUMMARY = "summary"
    CUSTOM = "custom"


class StorageAccountType(str, Enum):
    STANDARD_LRS = "Standard_LRS"
    PREMIUM_LRS = "Premium_LRS"


class VmPriority(str, Enum):
    """
    Default is dedicated.
    """
    DEDICATED = "dedicated"
    LOWPRIORITY = "lowpriority"