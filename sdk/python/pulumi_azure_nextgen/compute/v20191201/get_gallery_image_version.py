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
    'GetGalleryImageVersionResult',
    'AwaitableGetGalleryImageVersionResult',
    'get_gallery_image_version',
]

@pulumi.output_type
class GetGalleryImageVersionResult:
    """
    Specifies information about the gallery Image Version that you want to create or update.
    """
    def __init__(__self__, id=None, location=None, name=None, provisioning_state=None, publishing_profile=None, replication_status=None, storage_profile=None, tags=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if publishing_profile and not isinstance(publishing_profile, dict):
            raise TypeError("Expected argument 'publishing_profile' to be a dict")
        pulumi.set(__self__, "publishing_profile", publishing_profile)
        if replication_status and not isinstance(replication_status, dict):
            raise TypeError("Expected argument 'replication_status' to be a dict")
        pulumi.set(__self__, "replication_status", replication_status)
        if storage_profile and not isinstance(storage_profile, dict):
            raise TypeError("Expected argument 'storage_profile' to be a dict")
        pulumi.set(__self__, "storage_profile", storage_profile)
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
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state, which only appears in the response.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publishingProfile")
    def publishing_profile(self) -> Optional['outputs.GalleryImageVersionPublishingProfileResponse']:
        """
        The publishing profile of a gallery Image Version.
        """
        return pulumi.get(self, "publishing_profile")

    @property
    @pulumi.getter(name="replicationStatus")
    def replication_status(self) -> 'outputs.ReplicationStatusResponse':
        """
        This is the replication status of the gallery Image Version.
        """
        return pulumi.get(self, "replication_status")

    @property
    @pulumi.getter(name="storageProfile")
    def storage_profile(self) -> 'outputs.GalleryImageVersionStorageProfileResponse':
        """
        This is the storage profile of a Gallery Image Version.
        """
        return pulumi.get(self, "storage_profile")

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


class AwaitableGetGalleryImageVersionResult(GetGalleryImageVersionResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetGalleryImageVersionResult(
            id=self.id,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            publishing_profile=self.publishing_profile,
            replication_status=self.replication_status,
            storage_profile=self.storage_profile,
            tags=self.tags,
            type=self.type)


def get_gallery_image_version(expand: Optional[str] = None,
                              gallery_image_name: Optional[str] = None,
                              gallery_image_version_name: Optional[str] = None,
                              gallery_name: Optional[str] = None,
                              resource_group_name: Optional[str] = None,
                              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetGalleryImageVersionResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: The expand expression to apply on the operation.
    :param str gallery_image_name: The name of the gallery Image Definition in which the Image Version resides.
    :param str gallery_image_version_name: The name of the gallery Image Version to be retrieved.
    :param str gallery_name: The name of the Shared Image Gallery in which the Image Definition resides.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['galleryImageName'] = gallery_image_name
    __args__['galleryImageVersionName'] = gallery_image_version_name
    __args__['galleryName'] = gallery_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:compute/v20191201:getGalleryImageVersion', __args__, opts=opts, typ=GetGalleryImageVersionResult).value

    return AwaitableGetGalleryImageVersionResult(
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        publishing_profile=__ret__.publishing_profile,
        replication_status=__ret__.replication_status,
        storage_profile=__ret__.storage_profile,
        tags=__ret__.tags,
        type=__ret__.type)
