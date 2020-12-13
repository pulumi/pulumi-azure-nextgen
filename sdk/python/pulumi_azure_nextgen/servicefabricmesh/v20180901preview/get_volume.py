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
    'GetVolumeResult',
    'AwaitableGetVolumeResult',
    'get_volume',
]

@pulumi.output_type
class GetVolumeResult:
    """
    This type describes a volume resource.
    """
    def __init__(__self__, azure_file_parameters=None, description=None, id=None, location=None, name=None, provider=None, provisioning_state=None, status=None, status_details=None, tags=None, type=None):
        if azure_file_parameters and not isinstance(azure_file_parameters, dict):
            raise TypeError("Expected argument 'azure_file_parameters' to be a dict")
        pulumi.set(__self__, "azure_file_parameters", azure_file_parameters)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provider and not isinstance(provider, str):
            raise TypeError("Expected argument 'provider' to be a str")
        pulumi.set(__self__, "provider", provider)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if status_details and not isinstance(status_details, str):
            raise TypeError("Expected argument 'status_details' to be a str")
        pulumi.set(__self__, "status_details", status_details)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="azureFileParameters")
    def azure_file_parameters(self) -> Optional['outputs.VolumeProviderParametersAzureFileResponse']:
        """
        This type describes a volume provided by an Azure Files file share.
        """
        return pulumi.get(self, "azure_file_parameters")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        User readable description of the volume.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The geo-location where the resource lives
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def provider(self) -> str:
        """
        Provider of the volume.
        """
        return pulumi.get(self, "provider")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        State of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        Status of the volume.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="statusDetails")
    def status_details(self) -> str:
        """
        Gives additional information about the current status of the volume.
        """
        return pulumi.get(self, "status_details")

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
        The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        """
        return pulumi.get(self, "type")


class AwaitableGetVolumeResult(GetVolumeResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVolumeResult(
            azure_file_parameters=self.azure_file_parameters,
            description=self.description,
            id=self.id,
            location=self.location,
            name=self.name,
            provider=self.provider,
            provisioning_state=self.provisioning_state,
            status=self.status,
            status_details=self.status_details,
            tags=self.tags,
            type=self.type)


def get_volume(resource_group_name: Optional[str] = None,
               volume_resource_name: Optional[str] = None,
               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVolumeResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: Azure resource group name
    :param str volume_resource_name: The identity of the volume.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['volumeResourceName'] = volume_resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:servicefabricmesh/v20180901preview:getVolume', __args__, opts=opts, typ=GetVolumeResult).value

    return AwaitableGetVolumeResult(
        azure_file_parameters=__ret__.azure_file_parameters,
        description=__ret__.description,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provider=__ret__.provider,
        provisioning_state=__ret__.provisioning_state,
        status=__ret__.status,
        status_details=__ret__.status_details,
        tags=__ret__.tags,
        type=__ret__.type)
