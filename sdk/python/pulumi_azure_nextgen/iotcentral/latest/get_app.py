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
    'GetAppResult',
    'AwaitableGetAppResult',
    'get_app',
]

@pulumi.output_type
class GetAppResult:
    """
    The IoT Central application.
    """
    def __init__(__self__, application_id=None, display_name=None, id=None, location=None, name=None, sku=None, subdomain=None, tags=None, template=None, type=None):
        if application_id and not isinstance(application_id, str):
            raise TypeError("Expected argument 'application_id' to be a str")
        pulumi.set(__self__, "application_id", application_id)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if subdomain and not isinstance(subdomain, str):
            raise TypeError("Expected argument 'subdomain' to be a str")
        pulumi.set(__self__, "subdomain", subdomain)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if template and not isinstance(template, str):
            raise TypeError("Expected argument 'template' to be a str")
        pulumi.set(__self__, "template", template)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> str:
        """
        The ID of the application.
        """
        return pulumi.get(self, "application_id")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[str]:
        """
        The display name of the application.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The ARM resource identifier.
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
        The ARM resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def sku(self) -> 'outputs.AppSkuInfoResponse':
        """
        A valid instance SKU.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def subdomain(self) -> Optional[str]:
        """
        The subdomain of the application.
        """
        return pulumi.get(self, "subdomain")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        The resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def template(self) -> Optional[str]:
        """
        The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
        """
        return pulumi.get(self, "template")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetAppResult(GetAppResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAppResult(
            application_id=self.application_id,
            display_name=self.display_name,
            id=self.id,
            location=self.location,
            name=self.name,
            sku=self.sku,
            subdomain=self.subdomain,
            tags=self.tags,
            template=self.template,
            type=self.type)


def get_app(resource_group_name: Optional[str] = None,
            resource_name: Optional[str] = None,
            opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetAppResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group that contains the IoT Central application.
    :param str resource_name: The ARM resource name of the IoT Central application.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:iotcentral/latest:getApp', __args__, opts=opts, typ=GetAppResult).value

    return AwaitableGetAppResult(
        application_id=__ret__.application_id,
        display_name=__ret__.display_name,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        sku=__ret__.sku,
        subdomain=__ret__.subdomain,
        tags=__ret__.tags,
        template=__ret__.template,
        type=__ret__.type)
