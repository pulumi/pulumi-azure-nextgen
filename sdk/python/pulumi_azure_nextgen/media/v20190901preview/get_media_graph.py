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
    'GetMediaGraphResult',
    'AwaitableGetMediaGraphResult',
    'get_media_graph',
]

@pulumi.output_type
class GetMediaGraphResult:
    """
    The Media Graph.
    """
    def __init__(__self__, created=None, description=None, id=None, last_modified=None, name=None, sinks=None, sources=None, state=None, type=None):
        if created and not isinstance(created, str):
            raise TypeError("Expected argument 'created' to be a str")
        pulumi.set(__self__, "created", created)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if last_modified and not isinstance(last_modified, str):
            raise TypeError("Expected argument 'last_modified' to be a str")
        pulumi.set(__self__, "last_modified", last_modified)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if sinks and not isinstance(sinks, list):
            raise TypeError("Expected argument 'sinks' to be a list")
        pulumi.set(__self__, "sinks", sinks)
        if sources and not isinstance(sources, list):
            raise TypeError("Expected argument 'sources' to be a list")
        pulumi.set(__self__, "sources", sources)
        if state and not isinstance(state, str):
            raise TypeError("Expected argument 'state' to be a str")
        pulumi.set(__self__, "state", state)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def created(self) -> str:
        """
        Date the Media Graph was created
        """
        return pulumi.get(self, "created")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Media Graph  description
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource ID for the resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="lastModified")
    def last_modified(self) -> str:
        """
        Date the Media Graph was last modified
        """
        return pulumi.get(self, "last_modified")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def sinks(self) -> Sequence['outputs.MediaGraphAssetSinkResponse']:
        """
        Media Graph sinks
        """
        return pulumi.get(self, "sinks")

    @property
    @pulumi.getter
    def sources(self) -> Sequence['outputs.MediaGraphRtspSourceResponse']:
        """
        Media Graph sources
        """
        return pulumi.get(self, "sources")

    @property
    @pulumi.getter
    def state(self) -> str:
        """
        Media Graph state
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetMediaGraphResult(GetMediaGraphResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetMediaGraphResult(
            created=self.created,
            description=self.description,
            id=self.id,
            last_modified=self.last_modified,
            name=self.name,
            sinks=self.sinks,
            sources=self.sources,
            state=self.state,
            type=self.type)


def get_media_graph(account_name: Optional[str] = None,
                    media_graph_name: Optional[str] = None,
                    resource_group_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetMediaGraphResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The Media Services account name.
    :param str media_graph_name: The Media Graph name.
    :param str resource_group_name: The name of the resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['mediaGraphName'] = media_graph_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:media/v20190901preview:getMediaGraph', __args__, opts=opts, typ=GetMediaGraphResult).value

    return AwaitableGetMediaGraphResult(
        created=__ret__.created,
        description=__ret__.description,
        id=__ret__.id,
        last_modified=__ret__.last_modified,
        name=__ret__.name,
        sinks=__ret__.sinks,
        sources=__ret__.sources,
        state=__ret__.state,
        type=__ret__.type)
