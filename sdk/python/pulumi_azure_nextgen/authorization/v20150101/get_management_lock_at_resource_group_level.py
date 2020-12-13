# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetManagementLockAtResourceGroupLevelResult',
    'AwaitableGetManagementLockAtResourceGroupLevelResult',
    'get_management_lock_at_resource_group_level',
]

@pulumi.output_type
class GetManagementLockAtResourceGroupLevelResult:
    """
    Management lock information.
    """
    def __init__(__self__, id=None, level=None, name=None, notes=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if level and not isinstance(level, str):
            raise TypeError("Expected argument 'level' to be a str")
        pulumi.set(__self__, "level", level)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if notes and not isinstance(notes, str):
            raise TypeError("Expected argument 'notes' to be a str")
        pulumi.set(__self__, "notes", notes)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The Id of the lock.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def level(self) -> Optional[str]:
        """
        The lock level of the management lock.
        """
        return pulumi.get(self, "level")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the lock.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def notes(self) -> Optional[str]:
        """
        The notes of the management lock.
        """
        return pulumi.get(self, "notes")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the lock.
        """
        return pulumi.get(self, "type")


class AwaitableGetManagementLockAtResourceGroupLevelResult(GetManagementLockAtResourceGroupLevelResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetManagementLockAtResourceGroupLevelResult(
            id=self.id,
            level=self.level,
            name=self.name,
            notes=self.notes,
            type=self.type)


def get_management_lock_at_resource_group_level(lock_name: Optional[str] = None,
                                                resource_group_name: Optional[str] = None,
                                                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetManagementLockAtResourceGroupLevelResult:
    """
    Use this data source to access information about an existing resource.

    :param str lock_name: The lock name.
    :param str resource_group_name: The resource group name.
    """
    __args__ = dict()
    __args__['lockName'] = lock_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:authorization/v20150101:getManagementLockAtResourceGroupLevel', __args__, opts=opts, typ=GetManagementLockAtResourceGroupLevelResult).value

    return AwaitableGetManagementLockAtResourceGroupLevelResult(
        id=__ret__.id,
        level=__ret__.level,
        name=__ret__.name,
        notes=__ret__.notes,
        type=__ret__.type)
