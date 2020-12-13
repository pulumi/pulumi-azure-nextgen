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
    'GetProjectResult',
    'AwaitableGetProjectResult',
    'get_project',
]

@pulumi.output_type
class GetProjectResult:
    """
    A project resource
    """
    def __init__(__self__, creation_time=None, databases_info=None, id=None, location=None, name=None, provisioning_state=None, source_connection_info=None, source_platform=None, tags=None, target_connection_info=None, target_platform=None, type=None):
        if creation_time and not isinstance(creation_time, str):
            raise TypeError("Expected argument 'creation_time' to be a str")
        pulumi.set(__self__, "creation_time", creation_time)
        if databases_info and not isinstance(databases_info, list):
            raise TypeError("Expected argument 'databases_info' to be a list")
        pulumi.set(__self__, "databases_info", databases_info)
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
        if source_connection_info and not isinstance(source_connection_info, dict):
            raise TypeError("Expected argument 'source_connection_info' to be a dict")
        pulumi.set(__self__, "source_connection_info", source_connection_info)
        if source_platform and not isinstance(source_platform, str):
            raise TypeError("Expected argument 'source_platform' to be a str")
        pulumi.set(__self__, "source_platform", source_platform)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if target_connection_info and not isinstance(target_connection_info, dict):
            raise TypeError("Expected argument 'target_connection_info' to be a dict")
        pulumi.set(__self__, "target_connection_info", target_connection_info)
        if target_platform and not isinstance(target_platform, str):
            raise TypeError("Expected argument 'target_platform' to be a str")
        pulumi.set(__self__, "target_platform", target_platform)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="creationTime")
    def creation_time(self) -> str:
        """
        UTC Date and time when project was created
        """
        return pulumi.get(self, "creation_time")

    @property
    @pulumi.getter(name="databasesInfo")
    def databases_info(self) -> Optional[Sequence['outputs.DatabaseInfoResponse']]:
        """
        List of DatabaseInfo
        """
        return pulumi.get(self, "databases_info")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
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
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The project's provisioning state
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="sourceConnectionInfo")
    def source_connection_info(self) -> Optional['outputs.SqlConnectionInfoResponse']:
        """
        Information for connecting to source
        """
        return pulumi.get(self, "source_connection_info")

    @property
    @pulumi.getter(name="sourcePlatform")
    def source_platform(self) -> str:
        """
        Source platform for the project
        """
        return pulumi.get(self, "source_platform")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="targetConnectionInfo")
    def target_connection_info(self) -> Optional['outputs.SqlConnectionInfoResponse']:
        """
        Information for connecting to target
        """
        return pulumi.get(self, "target_connection_info")

    @property
    @pulumi.getter(name="targetPlatform")
    def target_platform(self) -> str:
        """
        Target platform for the project
        """
        return pulumi.get(self, "target_platform")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetProjectResult(GetProjectResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetProjectResult(
            creation_time=self.creation_time,
            databases_info=self.databases_info,
            id=self.id,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            source_connection_info=self.source_connection_info,
            source_platform=self.source_platform,
            tags=self.tags,
            target_connection_info=self.target_connection_info,
            target_platform=self.target_platform,
            type=self.type)


def get_project(group_name: Optional[str] = None,
                project_name: Optional[str] = None,
                service_name: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetProjectResult:
    """
    Use this data source to access information about an existing resource.

    :param str group_name: Name of the resource group
    :param str project_name: Name of the project
    :param str service_name: Name of the service
    """
    __args__ = dict()
    __args__['groupName'] = group_name
    __args__['projectName'] = project_name
    __args__['serviceName'] = service_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:datamigration/v20171115preview:getProject', __args__, opts=opts, typ=GetProjectResult).value

    return AwaitableGetProjectResult(
        creation_time=__ret__.creation_time,
        databases_info=__ret__.databases_info,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        source_connection_info=__ret__.source_connection_info,
        source_platform=__ret__.source_platform,
        tags=__ret__.tags,
        target_connection_info=__ret__.target_connection_info,
        target_platform=__ret__.target_platform,
        type=__ret__.type)
