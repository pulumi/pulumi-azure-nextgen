# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'KeySource',
]


class KeySource(str, Enum):
    """
    The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
    """
    DEFAULT = "Default"
    MICROSOFT_KEYVAULT = "Microsoft.Keyvault"
