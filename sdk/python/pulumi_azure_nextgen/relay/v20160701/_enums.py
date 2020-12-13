# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AccessRights',
    'Relaytype',
    'SkuName',
    'SkuTier',
]


class AccessRights(str, Enum):
    MANAGE = "Manage"
    SEND = "Send"
    LISTEN = "Listen"


class Relaytype(str, Enum):
    """
    WCFRelay Type.
    """
    NET_TCP = "NetTcp"
    HTTP = "Http"


class SkuName(str, Enum):
    """
    Name of this Sku
    """
    STANDARD = "Standard"


class SkuTier(str, Enum):
    """
    The tier of this particular SKU
    """
    STANDARD = "Standard"
