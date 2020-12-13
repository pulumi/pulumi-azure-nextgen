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
    'GetMyWorkbookResult',
    'AwaitableGetMyWorkbookResult',
    'get_my_workbook',
]

@pulumi.output_type
class GetMyWorkbookResult:
    """
    An Application Insights private workbook definition.
    """
    def __init__(__self__, category=None, display_name=None, id=None, identity=None, kind=None, location=None, name=None, serialized_data=None, source_id=None, storage_uri=None, tags=None, time_modified=None, type=None, user_id=None, version=None):
        if category and not isinstance(category, str):
            raise TypeError("Expected argument 'category' to be a str")
        pulumi.set(__self__, "category", category)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if identity and not isinstance(identity, dict):
            raise TypeError("Expected argument 'identity' to be a dict")
        pulumi.set(__self__, "identity", identity)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if serialized_data and not isinstance(serialized_data, str):
            raise TypeError("Expected argument 'serialized_data' to be a str")
        pulumi.set(__self__, "serialized_data", serialized_data)
        if source_id and not isinstance(source_id, str):
            raise TypeError("Expected argument 'source_id' to be a str")
        pulumi.set(__self__, "source_id", source_id)
        if storage_uri and not isinstance(storage_uri, str):
            raise TypeError("Expected argument 'storage_uri' to be a str")
        pulumi.set(__self__, "storage_uri", storage_uri)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if time_modified and not isinstance(time_modified, str):
            raise TypeError("Expected argument 'time_modified' to be a str")
        pulumi.set(__self__, "time_modified", time_modified)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if user_id and not isinstance(user_id, str):
            raise TypeError("Expected argument 'user_id' to be a str")
        pulumi.set(__self__, "user_id", user_id)
        if version and not isinstance(version, str):
            raise TypeError("Expected argument 'version' to be a str")
        pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter
    def category(self) -> str:
        """
        Workbook category, as defined by the user at creation time.
        """
        return pulumi.get(self, "category")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The user-defined name of the private workbook.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def identity(self) -> Optional['outputs.ManagedIdentityResponse']:
        """
        Identity used for BYOS
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        The kind of workbook. Choices are user and shared.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="serializedData")
    def serialized_data(self) -> str:
        """
        Configuration of this particular private workbook. Configuration data is a string containing valid JSON
        """
        return pulumi.get(self, "serialized_data")

    @property
    @pulumi.getter(name="sourceId")
    def source_id(self) -> Optional[str]:
        """
        Optional resourceId for a source resource.
        """
        return pulumi.get(self, "source_id")

    @property
    @pulumi.getter(name="storageUri")
    def storage_uri(self) -> Optional[str]:
        """
        BYOS Storage Account URI
        """
        return pulumi.get(self, "storage_uri")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="timeModified")
    def time_modified(self) -> str:
        """
        Date and time in UTC of the last modification that was made to this private workbook definition.
        """
        return pulumi.get(self, "time_modified")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userId")
    def user_id(self) -> str:
        """
        Unique user id of the specific user that owns this private workbook.
        """
        return pulumi.get(self, "user_id")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        This instance's version of the data model. This can change as new features are added that can be marked private workbook.
        """
        return pulumi.get(self, "version")


class AwaitableGetMyWorkbookResult(GetMyWorkbookResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetMyWorkbookResult(
            category=self.category,
            display_name=self.display_name,
            id=self.id,
            identity=self.identity,
            kind=self.kind,
            location=self.location,
            name=self.name,
            serialized_data=self.serialized_data,
            source_id=self.source_id,
            storage_uri=self.storage_uri,
            tags=self.tags,
            time_modified=self.time_modified,
            type=self.type,
            user_id=self.user_id,
            version=self.version)


def get_my_workbook(resource_group_name: Optional[str] = None,
                    resource_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetMyWorkbookResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    :param str resource_name: The name of the Application Insights component resource.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:insights/v20201020:getMyWorkbook', __args__, opts=opts, typ=GetMyWorkbookResult).value

    return AwaitableGetMyWorkbookResult(
        category=__ret__.category,
        display_name=__ret__.display_name,
        id=__ret__.id,
        identity=__ret__.identity,
        kind=__ret__.kind,
        location=__ret__.location,
        name=__ret__.name,
        serialized_data=__ret__.serialized_data,
        source_id=__ret__.source_id,
        storage_uri=__ret__.storage_uri,
        tags=__ret__.tags,
        time_modified=__ret__.time_modified,
        type=__ret__.type,
        user_id=__ret__.user_id,
        version=__ret__.version)
