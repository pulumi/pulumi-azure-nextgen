# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AzureSkuName',
    'AzureSkuTier',
]


class AzureSkuName(str, Enum):
    """
    SKU name
    """
    S1 = "S1"


class AzureSkuTier(str, Enum):
    """
    SKU tier
    """
    STANDARD = "Standard"
