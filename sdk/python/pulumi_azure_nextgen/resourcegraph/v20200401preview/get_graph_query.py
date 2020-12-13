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
    'GetGraphQueryResult',
    'AwaitableGetGraphQueryResult',
    'get_graph_query',
]

@pulumi.output_type
class GetGraphQueryResult:
    """
    Graph Query entity definition.
    """
    def __init__(__self__, description=None, e_tag=None, id=None, location=None, name=None, query=None, result_kind=None, system_data=None, tags=None, time_modified=None, type=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if e_tag and not isinstance(e_tag, str):
            raise TypeError("Expected argument 'e_tag' to be a str")
        pulumi.set(__self__, "e_tag", e_tag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if query and not isinstance(query, str):
            raise TypeError("Expected argument 'query' to be a str")
        pulumi.set(__self__, "query", query)
        if result_kind and not isinstance(result_kind, str):
            raise TypeError("Expected argument 'result_kind' to be a str")
        pulumi.set(__self__, "result_kind", result_kind)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if time_modified and not isinstance(time_modified, str):
            raise TypeError("Expected argument 'time_modified' to be a str")
        pulumi.set(__self__, "time_modified", time_modified)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        The description of a graph query.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="eTag")
    def e_tag(self) -> Optional[str]:
        """
        This will be used to handle Optimistic Concurrency.
        """
        return pulumi.get(self, "e_tag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The location of the resource
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name. This is GUID value. The display name should be assigned within properties field.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def query(self) -> str:
        """
        KQL query that will be graph.
        """
        return pulumi.get(self, "query")

    @property
    @pulumi.getter(name="resultKind")
    def result_kind(self) -> str:
        """
        Enum indicating a type of graph query.
        """
        return pulumi.get(self, "result_kind")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        Metadata pertaining to creation and last modification of the resource.
        """
        return pulumi.get(self, "system_data")

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
        Date and time in UTC of the last modification that was made to this graph query definition.
        """
        return pulumi.get(self, "time_modified")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetGraphQueryResult(GetGraphQueryResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetGraphQueryResult(
            description=self.description,
            e_tag=self.e_tag,
            id=self.id,
            location=self.location,
            name=self.name,
            query=self.query,
            result_kind=self.result_kind,
            system_data=self.system_data,
            tags=self.tags,
            time_modified=self.time_modified,
            type=self.type)


def get_graph_query(resource_group_name: Optional[str] = None,
                    resource_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetGraphQueryResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group.
    :param str resource_name: The name of the Graph Query resource.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:resourcegraph/v20200401preview:getGraphQuery', __args__, opts=opts, typ=GetGraphQueryResult).value

    return AwaitableGetGraphQueryResult(
        description=__ret__.description,
        e_tag=__ret__.e_tag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        query=__ret__.query,
        result_kind=__ret__.result_kind,
        system_data=__ret__.system_data,
        tags=__ret__.tags,
        time_modified=__ret__.time_modified,
        type=__ret__.type)
