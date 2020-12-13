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
    'GetLabAccountResult',
    'AwaitableGetLabAccountResult',
    'get_lab_account',
]

@pulumi.output_type
class GetLabAccountResult:
    """
    Represents a lab account.
    """
    def __init__(__self__, enabled_region_selection=None, id=None, latest_operation_result=None, location=None, name=None, provisioning_state=None, size_configuration=None, tags=None, type=None, unique_identifier=None):
        if enabled_region_selection and not isinstance(enabled_region_selection, bool):
            raise TypeError("Expected argument 'enabled_region_selection' to be a bool")
        pulumi.set(__self__, "enabled_region_selection", enabled_region_selection)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if latest_operation_result and not isinstance(latest_operation_result, dict):
            raise TypeError("Expected argument 'latest_operation_result' to be a dict")
        pulumi.set(__self__, "latest_operation_result", latest_operation_result)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if size_configuration and not isinstance(size_configuration, dict):
            raise TypeError("Expected argument 'size_configuration' to be a dict")
        pulumi.set(__self__, "size_configuration", size_configuration)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if unique_identifier and not isinstance(unique_identifier, str):
            raise TypeError("Expected argument 'unique_identifier' to be a str")
        pulumi.set(__self__, "unique_identifier", unique_identifier)

    @property
    @pulumi.getter(name="enabledRegionSelection")
    def enabled_region_selection(self) -> Optional[bool]:
        """
        Represents if region selection is enabled
        """
        return pulumi.get(self, "enabled_region_selection")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The identifier of the resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="latestOperationResult")
    def latest_operation_result(self) -> 'outputs.LatestOperationResultResponse':
        """
        The details of the latest operation. ex: status, error
        """
        return pulumi.get(self, "latest_operation_result")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        The location of the resource.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        The provisioning status of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="sizeConfiguration")
    def size_configuration(self) -> 'outputs.SizeConfigurationPropertiesResponse':
        """
        Represents the size configuration under the lab account
        """
        return pulumi.get(self, "size_configuration")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        The tags of the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="uniqueIdentifier")
    def unique_identifier(self) -> Optional[str]:
        """
        The unique immutable identifier of a resource (Guid).
        """
        return pulumi.get(self, "unique_identifier")


class AwaitableGetLabAccountResult(GetLabAccountResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetLabAccountResult(
            enabled_region_selection=self.enabled_region_selection,
            id=self.id,
            latest_operation_result=self.latest_operation_result,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            size_configuration=self.size_configuration,
            tags=self.tags,
            type=self.type,
            unique_identifier=self.unique_identifier)


def get_lab_account(expand: Optional[str] = None,
                    lab_account_name: Optional[str] = None,
                    resource_group_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetLabAccountResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
    :param str lab_account_name: The name of the lab Account.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['labAccountName'] = lab_account_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:labservices/v20181015:getLabAccount', __args__, opts=opts, typ=GetLabAccountResult).value

    return AwaitableGetLabAccountResult(
        enabled_region_selection=__ret__.enabled_region_selection,
        id=__ret__.id,
        latest_operation_result=__ret__.latest_operation_result,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        size_configuration=__ret__.size_configuration,
        tags=__ret__.tags,
        type=__ret__.type,
        unique_identifier=__ret__.unique_identifier)
