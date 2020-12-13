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
    'AzureSkuArgs',
    'TrustedExternalTenantArgs',
]

@pulumi.input_type
class AzureSkuArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[Union[str, 'AzureSkuName']],
                 tier: pulumi.Input[Union[str, 'AzureSkuTier']],
                 capacity: Optional[pulumi.Input[int]] = None):
        """
        :param pulumi.Input[Union[str, 'AzureSkuName']] name: SKU name.
        :param pulumi.Input[Union[str, 'AzureSkuTier']] tier: SKU tier.
        :param pulumi.Input[int] capacity: SKU capacity.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "tier", tier)
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[Union[str, 'AzureSkuName']]:
        """
        SKU name.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[Union[str, 'AzureSkuName']]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def tier(self) -> pulumi.Input[Union[str, 'AzureSkuTier']]:
        """
        SKU tier.
        """
        return pulumi.get(self, "tier")

    @tier.setter
    def tier(self, value: pulumi.Input[Union[str, 'AzureSkuTier']]):
        pulumi.set(self, "tier", value)

    @property
    @pulumi.getter
    def capacity(self) -> Optional[pulumi.Input[int]]:
        """
        SKU capacity.
        """
        return pulumi.get(self, "capacity")

    @capacity.setter
    def capacity(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "capacity", value)


@pulumi.input_type
class TrustedExternalTenantArgs:
    def __init__(__self__, *,
                 value: Optional[pulumi.Input[str]] = None):
        """
        :param pulumi.Input[str] value: GUID representing an external tenant.
        """
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def value(self) -> Optional[pulumi.Input[str]]:
        """
        GUID representing an external tenant.
        """
        return pulumi.get(self, "value")

    @value.setter
    def value(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "value", value)


