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
    'GetDefaultRolloutResult',
    'AwaitableGetDefaultRolloutResult',
    'get_default_rollout',
]

@pulumi.output_type
class GetDefaultRolloutResult:
    """
    Default rollout definition.
    """
    def __init__(__self__, id=None, name=None, provisioning_state=None, specification=None, status=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if specification and not isinstance(specification, dict):
            raise TypeError("Expected argument 'specification' to be a dict")
        pulumi.set(__self__, "specification", specification)
        if status and not isinstance(status, dict):
            raise TypeError("Expected argument 'status' to be a dict")
        pulumi.set(__self__, "status", status)
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
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def specification(self) -> Optional['outputs.DefaultRolloutPropertiesResponseSpecification']:
        return pulumi.get(self, "specification")

    @property
    @pulumi.getter
    def status(self) -> Optional['outputs.DefaultRolloutPropertiesResponseStatus']:
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")


class AwaitableGetDefaultRolloutResult(GetDefaultRolloutResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDefaultRolloutResult(
            id=self.id,
            name=self.name,
            provisioning_state=self.provisioning_state,
            specification=self.specification,
            status=self.status,
            type=self.type)


def get_default_rollout(provider_namespace: Optional[str] = None,
                        rollout_name: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDefaultRolloutResult:
    """
    Use this data source to access information about an existing resource.

    :param str provider_namespace: The name of the resource provider hosted within ProviderHub.
    :param str rollout_name: The rollout name.
    """
    __args__ = dict()
    __args__['providerNamespace'] = provider_namespace
    __args__['rolloutName'] = rollout_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:providerhub/latest:getDefaultRollout', __args__, opts=opts, typ=GetDefaultRolloutResult).value

    return AwaitableGetDefaultRolloutResult(
        id=__ret__.id,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        specification=__ret__.specification,
        status=__ret__.status,
        type=__ret__.type)
