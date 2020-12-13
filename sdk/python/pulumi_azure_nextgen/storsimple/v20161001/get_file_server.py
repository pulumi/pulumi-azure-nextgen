# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetFileServerResult',
    'AwaitableGetFileServerResult',
    'get_file_server',
]

@pulumi.output_type
class GetFileServerResult:
    """
    The file server.
    """
    def __init__(__self__, backup_schedule_group_id=None, description=None, domain_name=None, id=None, name=None, storage_domain_id=None, type=None):
        if backup_schedule_group_id and not isinstance(backup_schedule_group_id, str):
            raise TypeError("Expected argument 'backup_schedule_group_id' to be a str")
        pulumi.set(__self__, "backup_schedule_group_id", backup_schedule_group_id)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if domain_name and not isinstance(domain_name, str):
            raise TypeError("Expected argument 'domain_name' to be a str")
        pulumi.set(__self__, "domain_name", domain_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if storage_domain_id and not isinstance(storage_domain_id, str):
            raise TypeError("Expected argument 'storage_domain_id' to be a str")
        pulumi.set(__self__, "storage_domain_id", storage_domain_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="backupScheduleGroupId")
    def backup_schedule_group_id(self) -> str:
        """
        The backup policy id.
        """
        return pulumi.get(self, "backup_schedule_group_id")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        The description of the file server
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="domainName")
    def domain_name(self) -> str:
        """
        Domain of the file server
        """
        return pulumi.get(self, "domain_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The identifier.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="storageDomainId")
    def storage_domain_id(self) -> str:
        """
        The storage domain id.
        """
        return pulumi.get(self, "storage_domain_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type.
        """
        return pulumi.get(self, "type")


class AwaitableGetFileServerResult(GetFileServerResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetFileServerResult(
            backup_schedule_group_id=self.backup_schedule_group_id,
            description=self.description,
            domain_name=self.domain_name,
            id=self.id,
            name=self.name,
            storage_domain_id=self.storage_domain_id,
            type=self.type)


def get_file_server(device_name: Optional[str] = None,
                    file_server_name: Optional[str] = None,
                    manager_name: Optional[str] = None,
                    resource_group_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetFileServerResult:
    """
    Use this data source to access information about an existing resource.

    :param str device_name: The device name.
    :param str file_server_name: The file server name.
    :param str manager_name: The manager name
    :param str resource_group_name: The resource group name
    """
    __args__ = dict()
    __args__['deviceName'] = device_name
    __args__['fileServerName'] = file_server_name
    __args__['managerName'] = manager_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:storsimple/v20161001:getFileServer', __args__, opts=opts, typ=GetFileServerResult).value

    return AwaitableGetFileServerResult(
        backup_schedule_group_id=__ret__.backup_schedule_group_id,
        description=__ret__.description,
        domain_name=__ret__.domain_name,
        id=__ret__.id,
        name=__ret__.name,
        storage_domain_id=__ret__.storage_domain_id,
        type=__ret__.type)
