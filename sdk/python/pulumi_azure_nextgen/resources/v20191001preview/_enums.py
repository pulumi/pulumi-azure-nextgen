# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ManagedServiceIdentityType',
    'ScriptType',
]


class ManagedServiceIdentityType(str, Enum):
    """
    Type of the managed identity.
    """
    USER_ASSIGNED = "UserAssigned"


class ScriptType(str, Enum):
    """
    Type of the script.
    """
    AZURE_POWER_SHELL = "AzurePowerShell"
    AZURE_CLI = "AzureCLI"
