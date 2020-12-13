# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetBookmarkRelationResult',
    'AwaitableGetBookmarkRelationResult',
    'get_bookmark_relation',
]

@pulumi.output_type
class GetBookmarkRelationResult:
    """
    Represents a relation between two resources
    """
    def __init__(__self__, etag=None, id=None, name=None, related_resource_id=None, related_resource_kind=None, related_resource_name=None, related_resource_type=None, type=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if related_resource_id and not isinstance(related_resource_id, str):
            raise TypeError("Expected argument 'related_resource_id' to be a str")
        pulumi.set(__self__, "related_resource_id", related_resource_id)
        if related_resource_kind and not isinstance(related_resource_kind, str):
            raise TypeError("Expected argument 'related_resource_kind' to be a str")
        pulumi.set(__self__, "related_resource_kind", related_resource_kind)
        if related_resource_name and not isinstance(related_resource_name, str):
            raise TypeError("Expected argument 'related_resource_name' to be a str")
        pulumi.set(__self__, "related_resource_name", related_resource_name)
        if related_resource_type and not isinstance(related_resource_type, str):
            raise TypeError("Expected argument 'related_resource_type' to be a str")
        pulumi.set(__self__, "related_resource_type", related_resource_type)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Etag of the azure resource
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="relatedResourceId")
    def related_resource_id(self) -> str:
        """
        The resource ID of the related resource
        """
        return pulumi.get(self, "related_resource_id")

    @property
    @pulumi.getter(name="relatedResourceKind")
    def related_resource_kind(self) -> str:
        """
        The resource kind of the related resource
        """
        return pulumi.get(self, "related_resource_kind")

    @property
    @pulumi.getter(name="relatedResourceName")
    def related_resource_name(self) -> str:
        """
        The name of the related resource
        """
        return pulumi.get(self, "related_resource_name")

    @property
    @pulumi.getter(name="relatedResourceType")
    def related_resource_type(self) -> str:
        """
        The resource type of the related resource
        """
        return pulumi.get(self, "related_resource_type")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetBookmarkRelationResult(GetBookmarkRelationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetBookmarkRelationResult(
            etag=self.etag,
            id=self.id,
            name=self.name,
            related_resource_id=self.related_resource_id,
            related_resource_kind=self.related_resource_kind,
            related_resource_name=self.related_resource_name,
            related_resource_type=self.related_resource_type,
            type=self.type)


def get_bookmark_relation(bookmark_id: Optional[str] = None,
                          operational_insights_resource_provider: Optional[str] = None,
                          relation_name: Optional[str] = None,
                          resource_group_name: Optional[str] = None,
                          workspace_name: Optional[str] = None,
                          opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetBookmarkRelationResult:
    """
    Use this data source to access information about an existing resource.

    :param str bookmark_id: Bookmark ID
    :param str operational_insights_resource_provider: The namespace of workspaces resource provider- Microsoft.OperationalInsights.
    :param str relation_name: Relation Name
    :param str resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
    :param str workspace_name: The name of the workspace.
    """
    __args__ = dict()
    __args__['bookmarkId'] = bookmark_id
    __args__['operationalInsightsResourceProvider'] = operational_insights_resource_provider
    __args__['relationName'] = relation_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['workspaceName'] = workspace_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:securityinsights/v20190101preview:getBookmarkRelation', __args__, opts=opts, typ=GetBookmarkRelationResult).value

    return AwaitableGetBookmarkRelationResult(
        etag=__ret__.etag,
        id=__ret__.id,
        name=__ret__.name,
        related_resource_id=__ret__.related_resource_id,
        related_resource_kind=__ret__.related_resource_kind,
        related_resource_name=__ret__.related_resource_name,
        related_resource_type=__ret__.related_resource_type,
        type=__ret__.type)
