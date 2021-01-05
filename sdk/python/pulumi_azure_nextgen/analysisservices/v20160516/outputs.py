# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'ResourceSkuResponse',
    'ServerAdministratorsResponse',
]

@pulumi.output_type
class ResourceSkuResponse(dict):
    """
    Represents the SKU name and Azure pricing tier for Analysis Services resource.
    """
    def __init__(__self__, *,
                 name: str,
                 capacity: Optional[int] = None,
                 tier: Optional[str] = None):
        """
        Represents the SKU name and Azure pricing tier for Analysis Services resource.
        :param str name: Name of the SKU level.
        :param int capacity: The number of instances in the read only query pool.
        :param str tier: The name of the Azure pricing tier to which the SKU applies.
        """
        pulumi.set(__self__, "name", name)
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the SKU level.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def capacity(self) -> Optional[int]:
        """
        The number of instances in the read only query pool.
        """
        return pulumi.get(self, "capacity")

    @property
    @pulumi.getter
    def tier(self) -> Optional[str]:
        """
        The name of the Azure pricing tier to which the SKU applies.
        """
        return pulumi.get(self, "tier")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ServerAdministratorsResponse(dict):
    """
    An array of administrator user identities
    """
    def __init__(__self__, *,
                 members: Optional[Sequence[str]] = None):
        """
        An array of administrator user identities
        :param Sequence[str] members: An array of administrator user identities.
        """
        if members is not None:
            pulumi.set(__self__, "members", members)

    @property
    @pulumi.getter
    def members(self) -> Optional[Sequence[str]]:
        """
        An array of administrator user identities.
        """
        return pulumi.get(self, "members")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


