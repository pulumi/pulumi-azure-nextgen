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
    'GetTemplateSpecResult',
    'AwaitableGetTemplateSpecResult',
    'get_template_spec',
]

@pulumi.output_type
class GetTemplateSpecResult:
    """
    Template Spec object.
    """
    def __init__(__self__, description=None, display_name=None, id=None, location=None, name=None, system_data=None, tags=None, type=None, versions=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
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
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if versions and not isinstance(versions, dict):
            raise TypeError("Expected argument 'versions' to be a dict")
        pulumi.set(__self__, "versions", versions)

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Template Spec description.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[str]:
        """
        Template Spec display name.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        String Id used to locate any resource on Azure.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of this resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        Azure Resource Manager metadata containing createdBy and modifiedBy information.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of this resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def versions(self) -> Mapping[str, 'outputs.TemplateSpecVersionInfoResponse']:
        """
        High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.
        """
        return pulumi.get(self, "versions")


class AwaitableGetTemplateSpecResult(GetTemplateSpecResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTemplateSpecResult(
            description=self.description,
            display_name=self.display_name,
            id=self.id,
            location=self.location,
            name=self.name,
            system_data=self.system_data,
            tags=self.tags,
            type=self.type,
            versions=self.versions)


def get_template_spec(expand: Optional[str] = None,
                      resource_group_name: Optional[str] = None,
                      template_spec_name: Optional[str] = None,
                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetTemplateSpecResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Allows for expansion of additional Template Spec details in the response. Optional.
    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    :param str template_spec_name: Name of the Template Spec.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['resourceGroupName'] = resource_group_name
    __args__['templateSpecName'] = template_spec_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:resources/v20190601preview:getTemplateSpec', __args__, opts=opts, typ=GetTemplateSpecResult).value

    return AwaitableGetTemplateSpecResult(
        description=__ret__.description,
        display_name=__ret__.display_name,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        system_data=__ret__.system_data,
        tags=__ret__.tags,
        type=__ret__.type,
        versions=__ret__.versions)
