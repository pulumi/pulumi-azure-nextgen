# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'ListManagedClusterAccessProfileResult',
    'AwaitableListManagedClusterAccessProfileResult',
    'list_managed_cluster_access_profile',
]

@pulumi.output_type
class ListManagedClusterAccessProfileResult:
    """
    Managed cluster Access Profile.
    """
    def __init__(__self__, id=None, kube_config=None, location=None, name=None, tags=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kube_config and not isinstance(kube_config, str):
            raise TypeError("Expected argument 'kube_config' to be a str")
        pulumi.set(__self__, "kube_config", kube_config)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="kubeConfig")
    def kube_config(self) -> Optional[str]:
        """
        Base64-encoded Kubernetes configuration file.
        """
        return pulumi.get(self, "kube_config")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type
        """
        return pulumi.get(self, "type")


class AwaitableListManagedClusterAccessProfileResult(ListManagedClusterAccessProfileResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ListManagedClusterAccessProfileResult(
            id=self.id,
            kube_config=self.kube_config,
            location=self.location,
            name=self.name,
            tags=self.tags,
            type=self.type)


def list_managed_cluster_access_profile(resource_group_name: Optional[str] = None,
                                        resource_name: Optional[str] = None,
                                        role_name: Optional[str] = None,
                                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableListManagedClusterAccessProfileResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group.
    :param str resource_name: The name of the managed cluster resource.
    :param str role_name: The name of the role for managed cluster accessProfile resource.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    __args__['roleName'] = role_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:containerservice/v20190401:listManagedClusterAccessProfile', __args__, opts=opts, typ=ListManagedClusterAccessProfileResult).value

    return AwaitableListManagedClusterAccessProfileResult(
        id=__ret__.id,
        kube_config=__ret__.kube_config,
        location=__ret__.location,
        name=__ret__.name,
        tags=__ret__.tags,
        type=__ret__.type)
