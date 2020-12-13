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
    'GetBlobContainerResult',
    'AwaitableGetBlobContainerResult',
    'get_blob_container',
]

@pulumi.output_type
class GetBlobContainerResult:
    """
    Properties of the blob container, including Id, resource name, resource type, Etag.
    """
    def __init__(__self__, etag=None, has_immutability_policy=None, has_legal_hold=None, id=None, immutability_policy=None, last_modified_time=None, lease_duration=None, lease_state=None, lease_status=None, legal_hold=None, metadata=None, name=None, public_access=None, type=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if has_immutability_policy and not isinstance(has_immutability_policy, bool):
            raise TypeError("Expected argument 'has_immutability_policy' to be a bool")
        pulumi.set(__self__, "has_immutability_policy", has_immutability_policy)
        if has_legal_hold and not isinstance(has_legal_hold, bool):
            raise TypeError("Expected argument 'has_legal_hold' to be a bool")
        pulumi.set(__self__, "has_legal_hold", has_legal_hold)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if immutability_policy and not isinstance(immutability_policy, dict):
            raise TypeError("Expected argument 'immutability_policy' to be a dict")
        pulumi.set(__self__, "immutability_policy", immutability_policy)
        if last_modified_time and not isinstance(last_modified_time, str):
            raise TypeError("Expected argument 'last_modified_time' to be a str")
        pulumi.set(__self__, "last_modified_time", last_modified_time)
        if lease_duration and not isinstance(lease_duration, str):
            raise TypeError("Expected argument 'lease_duration' to be a str")
        pulumi.set(__self__, "lease_duration", lease_duration)
        if lease_state and not isinstance(lease_state, str):
            raise TypeError("Expected argument 'lease_state' to be a str")
        pulumi.set(__self__, "lease_state", lease_state)
        if lease_status and not isinstance(lease_status, str):
            raise TypeError("Expected argument 'lease_status' to be a str")
        pulumi.set(__self__, "lease_status", lease_status)
        if legal_hold and not isinstance(legal_hold, dict):
            raise TypeError("Expected argument 'legal_hold' to be a dict")
        pulumi.set(__self__, "legal_hold", legal_hold)
        if metadata and not isinstance(metadata, dict):
            raise TypeError("Expected argument 'metadata' to be a dict")
        pulumi.set(__self__, "metadata", metadata)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if public_access and not isinstance(public_access, str):
            raise TypeError("Expected argument 'public_access' to be a str")
        pulumi.set(__self__, "public_access", public_access)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        Resource Etag.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="hasImmutabilityPolicy")
    def has_immutability_policy(self) -> bool:
        """
        The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container.
        """
        return pulumi.get(self, "has_immutability_policy")

    @property
    @pulumi.getter(name="hasLegalHold")
    def has_legal_hold(self) -> bool:
        """
        The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account.
        """
        return pulumi.get(self, "has_legal_hold")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="immutabilityPolicy")
    def immutability_policy(self) -> 'outputs.ImmutabilityPolicyPropertiesResponse':
        """
        The ImmutabilityPolicy property of the container.
        """
        return pulumi.get(self, "immutability_policy")

    @property
    @pulumi.getter(name="lastModifiedTime")
    def last_modified_time(self) -> str:
        """
        Returns the date and time the container was last modified.
        """
        return pulumi.get(self, "last_modified_time")

    @property
    @pulumi.getter(name="leaseDuration")
    def lease_duration(self) -> str:
        """
        Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased.
        """
        return pulumi.get(self, "lease_duration")

    @property
    @pulumi.getter(name="leaseState")
    def lease_state(self) -> str:
        """
        Lease state of the container.
        """
        return pulumi.get(self, "lease_state")

    @property
    @pulumi.getter(name="leaseStatus")
    def lease_status(self) -> str:
        """
        The lease status of the container.
        """
        return pulumi.get(self, "lease_status")

    @property
    @pulumi.getter(name="legalHold")
    def legal_hold(self) -> 'outputs.LegalHoldPropertiesResponse':
        """
        The LegalHold property of the container.
        """
        return pulumi.get(self, "legal_hold")

    @property
    @pulumi.getter
    def metadata(self) -> Optional[Mapping[str, str]]:
        """
        A name-value pair to associate with the container as metadata.
        """
        return pulumi.get(self, "metadata")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="publicAccess")
    def public_access(self) -> Optional[str]:
        """
        Specifies whether data in the container may be accessed publicly and the level of access.
        """
        return pulumi.get(self, "public_access")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")


class AwaitableGetBlobContainerResult(GetBlobContainerResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetBlobContainerResult(
            etag=self.etag,
            has_immutability_policy=self.has_immutability_policy,
            has_legal_hold=self.has_legal_hold,
            id=self.id,
            immutability_policy=self.immutability_policy,
            last_modified_time=self.last_modified_time,
            lease_duration=self.lease_duration,
            lease_state=self.lease_state,
            lease_status=self.lease_status,
            legal_hold=self.legal_hold,
            metadata=self.metadata,
            name=self.name,
            public_access=self.public_access,
            type=self.type)


def get_blob_container(account_name: Optional[str] = None,
                       container_name: Optional[str] = None,
                       resource_group_name: Optional[str] = None,
                       opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetBlobContainerResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
    :param str container_name: The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
    :param str resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['containerName'] = container_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:storage/v20181101:getBlobContainer', __args__, opts=opts, typ=GetBlobContainerResult).value

    return AwaitableGetBlobContainerResult(
        etag=__ret__.etag,
        has_immutability_policy=__ret__.has_immutability_policy,
        has_legal_hold=__ret__.has_legal_hold,
        id=__ret__.id,
        immutability_policy=__ret__.immutability_policy,
        last_modified_time=__ret__.last_modified_time,
        lease_duration=__ret__.lease_duration,
        lease_state=__ret__.lease_state,
        lease_status=__ret__.lease_status,
        legal_hold=__ret__.legal_hold,
        metadata=__ret__.metadata,
        name=__ret__.name,
        public_access=__ret__.public_access,
        type=__ret__.type)
