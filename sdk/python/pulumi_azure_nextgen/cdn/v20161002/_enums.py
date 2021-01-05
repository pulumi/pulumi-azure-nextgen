# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'GeoFilterActions',
    'OptimizationType',
    'QueryStringCachingBehavior',
    'SkuName',
]


class GeoFilterActions(str, Enum):
    """
    Action of the geo filter, i.e. allow or block access.
    """
    BLOCK = "Block"
    ALLOW = "Allow"


class OptimizationType(str, Enum):
    """
    Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
    """
    GENERAL_WEB_DELIVERY = "GeneralWebDelivery"
    GENERAL_MEDIA_STREAMING = "GeneralMediaStreaming"
    VIDEO_ON_DEMAND_MEDIA_STREAMING = "VideoOnDemandMediaStreaming"
    LARGE_FILE_DOWNLOAD = "LargeFileDownload"
    DYNAMIC_SITE_ACCELERATION = "DynamicSiteAcceleration"


class QueryStringCachingBehavior(str, Enum):
    """
    Defines the query string caching behavior
    """
    IGNORE_QUERY_STRING = "IgnoreQueryString"
    BYPASS_CACHING = "BypassCaching"
    USE_QUERY_STRING = "UseQueryString"
    NOT_SET = "NotSet"


class SkuName(str, Enum):
    """
    Name of the pricing tier.
    """
    STANDARD_VERIZON = "Standard_Verizon"
    PREMIUM_VERIZON = "Premium_Verizon"
    CUSTOM_VERIZON = "Custom_Verizon"
    STANDARD_AKAMAI = "Standard_Akamai"
    STANDARD_CHINA_CDN = "Standard_ChinaCdn"