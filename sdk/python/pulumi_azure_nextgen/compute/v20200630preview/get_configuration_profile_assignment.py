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
    'GetConfigurationProfileAssignmentResult',
    'AwaitableGetConfigurationProfileAssignmentResult',
    'get_configuration_profile_assignment',
]

@pulumi.output_type
class GetConfigurationProfileAssignmentResult:
    """
    Configuration profile assignment is an association between a VM and automanage profile configuration.
    """
    def __init__(__self__, id=None, name=None, properties=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if properties and not isinstance(properties, dict):
            raise TypeError("Expected argument 'properties' to be a dict")
        pulumi.set(__self__, "properties", properties)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> 'outputs.ConfigurationProfileAssignmentPropertiesResponse':
        """
        Properties of the configuration profile assignment.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")


class AwaitableGetConfigurationProfileAssignmentResult(GetConfigurationProfileAssignmentResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetConfigurationProfileAssignmentResult(
            id=self.id,
            name=self.name,
            properties=self.properties,
            type=self.type)


def get_configuration_profile_assignment(configuration_profile_assignment_name: Optional[str] = None,
                                         resource_group_name: Optional[str] = None,
                                         vm_name: Optional[str] = None,
                                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetConfigurationProfileAssignmentResult:
    """
    Use this data source to access information about an existing resource.

    :param str configuration_profile_assignment_name: The configuration profile assignment name.
    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    :param str vm_name: The name of the virtual machine.
    """
    __args__ = dict()
    __args__['configurationProfileAssignmentName'] = configuration_profile_assignment_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['vmName'] = vm_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:compute/v20200630preview:getConfigurationProfileAssignment', __args__, opts=opts, typ=GetConfigurationProfileAssignmentResult).value

    return AwaitableGetConfigurationProfileAssignmentResult(
        id=__ret__.id,
        name=__ret__.name,
        properties=__ret__.properties,
        type=__ret__.type)
