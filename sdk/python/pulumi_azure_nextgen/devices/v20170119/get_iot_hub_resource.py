# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetIotHubResourceResult',
    'AwaitableGetIotHubResourceResult',
    'get_iot_hub_resource',
]

@pulumi.output_type
class GetIotHubResourceResult:
    """
    The description of the IoT hub.
    """
    def __init__(__self__, etag=None, id=None, location=None, name=None, properties=None, resourcegroup=None, sku=None, subscriptionid=None, tags=None, type=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if properties and not isinstance(properties, dict):
            raise TypeError("Expected argument 'properties' to be a dict")
        pulumi.set(__self__, "properties", properties)
        if resourcegroup and not isinstance(resourcegroup, str):
            raise TypeError("Expected argument 'resourcegroup' to be a str")
        pulumi.set(__self__, "resourcegroup", resourcegroup)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if subscriptionid and not isinstance(subscriptionid, str):
            raise TypeError("Expected argument 'subscriptionid' to be a str")
        pulumi.set(__self__, "subscriptionid", subscriptionid)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The resource identifier.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> 'outputs.IotHubPropertiesResponse':
        """
        The properties of an IoT hub.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter
    def resourcegroup(self) -> str:
        """
        The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
        """
        return pulumi.get(self, "resourcegroup")

    @property
    @pulumi.getter
    def sku(self) -> 'outputs.IotHubSkuInfoResponse':
        """
        Information about the SKU of the IoT hub.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def subscriptionid(self) -> str:
        """
        The subscription identifier.
        """
        return pulumi.get(self, "subscriptionid")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        The resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetIotHubResourceResult(GetIotHubResourceResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetIotHubResourceResult(
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            properties=self.properties,
            resourcegroup=self.resourcegroup,
            sku=self.sku,
            subscriptionid=self.subscriptionid,
            tags=self.tags,
            type=self.type)


def get_iot_hub_resource(resource_group_name: Optional[str] = None,
                         resource_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetIotHubResourceResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group that contains the IoT hub.
    :param str resource_name: The name of the IoT hub.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:devices/v20170119:getIotHubResource', __args__, opts=opts, typ=GetIotHubResourceResult).value

    return AwaitableGetIotHubResourceResult(
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        properties=__ret__.properties,
        resourcegroup=__ret__.resourcegroup,
        sku=__ret__.sku,
        subscriptionid=__ret__.subscriptionid,
        tags=__ret__.tags,
        type=__ret__.type)
