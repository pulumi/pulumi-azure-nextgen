# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetContentTypeResult',
    'AwaitableGetContentTypeResult',
    'get_content_type',
]

@pulumi.output_type
class GetContentTypeResult:
    """
    Content type contract details.
    """
    def __init__(__self__, description=None, id=None, name=None, schema=None, type=None, version=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if schema and not isinstance(schema, dict):
            raise TypeError("Expected argument 'schema' to be a dict")
        pulumi.set(__self__, "schema", schema)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if version and not isinstance(version, str):
            raise TypeError("Expected argument 'version' to be a str")
        pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Content type description.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def schema(self) -> Optional[Any]:
        """
        Content type schema.
        """
        return pulumi.get(self, "schema")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type for API Management resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        Content type version.
        """
        return pulumi.get(self, "version")


class AwaitableGetContentTypeResult(GetContentTypeResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetContentTypeResult(
            description=self.description,
            id=self.id,
            name=self.name,
            schema=self.schema,
            type=self.type,
            version=self.version)


def get_content_type(content_type_id: Optional[str] = None,
                     resource_group_name: Optional[str] = None,
                     service_name: Optional[str] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetContentTypeResult:
    """
    Use this data source to access information about an existing resource.

    :param str content_type_id: Content type identifier.
    :param str resource_group_name: The name of the resource group.
    :param str service_name: The name of the API Management service.
    """
    __args__ = dict()
    __args__['contentTypeId'] = content_type_id
    __args__['resourceGroupName'] = resource_group_name
    __args__['serviceName'] = service_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:apimanagement/v20200601preview:getContentType', __args__, opts=opts, typ=GetContentTypeResult).value

    return AwaitableGetContentTypeResult(
        description=__ret__.description,
        id=__ret__.id,
        name=__ret__.name,
        schema=__ret__.schema,
        type=__ret__.type,
        version=__ret__.version)
