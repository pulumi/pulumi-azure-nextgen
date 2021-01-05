# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'Kind',
    'SkuName',
]


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