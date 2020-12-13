# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetSyncGroupResult',
    'AwaitableGetSyncGroupResult',
    'get_sync_group',
]

@pulumi.output_type
class GetSyncGroupResult:
    """
    Sync Group object.
    """
    def __init__(__self__, id=None, name=None, sync_group_status=None, type=None, unique_id=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if sync_group_status and not isinstance(sync_group_status, str):
            raise TypeError("Expected argument 'sync_group_status' to be a str")
        pulumi.set(__self__, "sync_group_status", sync_group_status)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if unique_id and not isinstance(unique_id, str):
            raise TypeError("Expected argument 'unique_id' to be a str")
        pulumi.set(__self__, "unique_id", unique_id)

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
    @pulumi.getter(name="syncGroupStatus")
    def sync_group_status(self) -> str:
        """
        Sync group status
        """
        return pulumi.get(self, "sync_group_status")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="uniqueId")
    def unique_id(self) -> str:
        """
        Unique Id
        """
        return pulumi.get(self, "unique_id")


class AwaitableGetSyncGroupResult(GetSyncGroupResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetSyncGroupResult(
            id=self.id,
            name=self.name,
            sync_group_status=self.sync_group_status,
            type=self.type,
            unique_id=self.unique_id)


def get_sync_group(resource_group_name: Optional[str] = None,
                   storage_sync_service_name: Optional[str] = None,
                   sync_group_name: Optional[str] = None,
                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetSyncGroupResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    :param str storage_sync_service_name: Name of Storage Sync Service resource.
    :param str sync_group_name: Name of Sync Group resource.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['storageSyncServiceName'] = storage_sync_service_name
    __args__['syncGroupName'] = sync_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:storagesync/v20191001:getSyncGroup', __args__, opts=opts, typ=GetSyncGroupResult).value

    return AwaitableGetSyncGroupResult(
        id=__ret__.id,
        name=__ret__.name,
        sync_group_status=__ret__.sync_group_status,
        type=__ret__.type,
        unique_id=__ret__.unique_id)
