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
    'GetDiskEncryptionSetResult',
    'AwaitableGetDiskEncryptionSetResult',
    'get_disk_encryption_set',
]

@pulumi.output_type
class GetDiskEncryptionSetResult:
    """
    disk encryption set resource.
    """
    def __init__(__self__, active_key=None, id=None, identity=None, location=None, name=None, previous_keys=None, provisioning_state=None, tags=None, type=None):
        if active_key and not isinstance(active_key, dict):
            raise TypeError("Expected argument 'active_key' to be a dict")
        pulumi.set(__self__, "active_key", active_key)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if identity and not isinstance(identity, dict):
            raise TypeError("Expected argument 'identity' to be a dict")
        pulumi.set(__self__, "identity", identity)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if previous_keys and not isinstance(previous_keys, list):
            raise TypeError("Expected argument 'previous_keys' to be a list")
        pulumi.set(__self__, "previous_keys", previous_keys)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="activeKey")
    def active_key(self) -> Optional['outputs.KeyVaultAndKeyReferenceResponse']:
        """
        The key vault key which is currently used by this disk encryption set.
        """
        return pulumi.get(self, "active_key")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def identity(self) -> Optional['outputs.EncryptionSetIdentityResponse']:
        """
        The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
        """
        return pulumi.get(self, "identity")

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
    @pulumi.getter(name="previousKeys")
    def previous_keys(self) -> Sequence['outputs.KeyVaultAndKeyReferenceResponse']:
        """
        A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
        """
        return pulumi.get(self, "previous_keys")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The disk encryption set provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

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


class AwaitableGetDiskEncryptionSetResult(GetDiskEncryptionSetResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDiskEncryptionSetResult(
            active_key=self.active_key,
            id=self.id,
            identity=self.identity,
            location=self.location,
            name=self.name,
            previous_keys=self.previous_keys,
            provisioning_state=self.provisioning_state,
            tags=self.tags,
            type=self.type)


def get_disk_encryption_set(disk_encryption_set_name: Optional[str] = None,
                            resource_group_name: Optional[str] = None,
                            opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDiskEncryptionSetResult:
    """
    Use this data source to access information about an existing resource.

    :param str disk_encryption_set_name: The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['diskEncryptionSetName'] = disk_encryption_set_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:compute/v20190701:getDiskEncryptionSet', __args__, opts=opts, typ=GetDiskEncryptionSetResult).value

    return AwaitableGetDiskEncryptionSetResult(
        active_key=__ret__.active_key,
        id=__ret__.id,
        identity=__ret__.identity,
        location=__ret__.location,
        name=__ret__.name,
        previous_keys=__ret__.previous_keys,
        provisioning_state=__ret__.provisioning_state,
        tags=__ret__.tags,
        type=__ret__.type)
