# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'FontSize',
    'FontStyle',
    'OsType',
    'ProvisioningState',
    'ShellType',
]


class FontSize(str, Enum):
    """
    Size of terminal font.
    """
    NOT_SPECIFIED = "NotSpecified"
    SMALL = "Small"
    MEDIUM = "Medium"
    LARGE = "Large"


class FontStyle(str, Enum):
    """
    Style of terminal font.
    """
    NOT_SPECIFIED = "NotSpecified"
    MONOSPACE = "Monospace"
    COURIER = "Courier"


class OsType(str, Enum):
    """
    The operating system type of the cloud shell. Deprecated, use preferredShellType.
    """
    WINDOWS = "Windows"
    LINUX = "Linux"


class ProvisioningState(str, Enum):
    """
    Provisioning state of the console.
    """
    NOT_SPECIFIED = "NotSpecified"
    ACCEPTED = "Accepted"
    PENDING = "Pending"
    UPDATING = "Updating"
    CREATING = "Creating"
    REPAIRING = "Repairing"
    FAILED = "Failed"
    CANCELED = "Canceled"
    SUCCEEDED = "Succeeded"


class ShellType(str, Enum):
    """
    The shell type of the cloud shell.
    """
    BASH = "bash"
    PWSH = "pwsh"
    POWERSHELL = "powershell"
