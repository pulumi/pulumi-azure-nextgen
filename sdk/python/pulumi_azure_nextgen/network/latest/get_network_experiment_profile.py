# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetNetworkExperimentProfileResult',
    'AwaitableGetNetworkExperimentProfileResult',
    'get_network_experiment_profile',
]

@pulumi.output_type
class GetNetworkExperimentProfileResult:
    """
    Defines an Network Experiment Profile and lists of Experiments
    """
    def __init__(__self__, enabled_state=None, etag=None, id=None, location=None, name=None, resource_state=None, tags=None, type=None):
        if enabled_state and not isinstance(enabled_state, str):
            raise TypeError("Expected argument 'enabled_state' to be a str")
        pulumi.set(__self__, "enabled_state", enabled_state)
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
        if resource_state and not isinstance(resource_state, str):
            raise TypeError("Expected argument 'resource_state' to be a str")
        pulumi.set(__self__, "resource_state", resource_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="enabledState")
    def enabled_state(self) -> Optional[str]:
        """
        The state of the Experiment
        """
        return pulumi.get(self, "enabled_state")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Gets a unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="resourceState")
    def resource_state(self) -> str:
        """
        Resource status.
        """
        return pulumi.get(self, "resource_state")

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
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetNetworkExperimentProfileResult(GetNetworkExperimentProfileResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNetworkExperimentProfileResult(
            enabled_state=self.enabled_state,
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            resource_state=self.resource_state,
            tags=self.tags,
            type=self.type)


def get_network_experiment_profile(profile_name: Optional[str] = None,
                                   resource_group_name: Optional[str] = None,
                                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetNetworkExperimentProfileResult:
    """
    Use this data source to access information about an existing resource.

    :param str profile_name: The Profile identifier associated with the Tenant and Partner
    :param str resource_group_name: Name of the Resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['profileName'] = profile_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/latest:getNetworkExperimentProfile', __args__, opts=opts, typ=GetNetworkExperimentProfileResult).value

    return AwaitableGetNetworkExperimentProfileResult(
        enabled_state=__ret__.enabled_state,
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        resource_state=__ret__.resource_state,
        tags=__ret__.tags,
        type=__ret__.type)
