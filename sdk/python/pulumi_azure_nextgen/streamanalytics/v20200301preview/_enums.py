# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ClusterSkuName',
]


class ClusterSkuName(str, Enum):
    """
    Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.
    """
    DEFAULT = "Default"
