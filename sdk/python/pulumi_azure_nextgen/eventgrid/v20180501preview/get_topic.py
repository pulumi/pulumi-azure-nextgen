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
    'GetTopicResult',
    'AwaitableGetTopicResult',
    'get_topic',
]

@pulumi.output_type
class GetTopicResult:
    """
    EventGrid Topic
    """
    def __init__(__self__, endpoint=None, id=None, input_schema=None, input_schema_mapping=None, location=None, name=None, provisioning_state=None, tags=None, type=None):
        if endpoint and not isinstance(endpoint, str):
            raise TypeError("Expected argument 'endpoint' to be a str")
        pulumi.set(__self__, "endpoint", endpoint)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if input_schema and not isinstance(input_schema, str):
            raise TypeError("Expected argument 'input_schema' to be a str")
        pulumi.set(__self__, "input_schema", input_schema)
        if input_schema_mapping and not isinstance(input_schema_mapping, dict):
            raise TypeError("Expected argument 'input_schema_mapping' to be a dict")
        pulumi.set(__self__, "input_schema_mapping", input_schema_mapping)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
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
    @pulumi.getter
    def endpoint(self) -> str:
        """
        Endpoint for the topic.
        """
        return pulumi.get(self, "endpoint")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified identifier of the resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="inputSchema")
    def input_schema(self) -> Optional[str]:
        """
        This determines the format that Event Grid should expect for incoming events published to the topic.
        """
        return pulumi.get(self, "input_schema")

    @property
    @pulumi.getter(name="inputSchemaMapping")
    def input_schema_mapping(self) -> Optional['outputs.JsonInputSchemaMappingResponse']:
        """
        This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
        """
        return pulumi.get(self, "input_schema_mapping")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Location of the resource
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the topic.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Tags of the resource
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the resource
        """
        return pulumi.get(self, "type")


class AwaitableGetTopicResult(GetTopicResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTopicResult(
            endpoint=self.endpoint,
            id=self.id,
            input_schema=self.input_schema,
            input_schema_mapping=self.input_schema_mapping,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            tags=self.tags,
            type=self.type)


def get_topic(resource_group_name: Optional[str] = None,
              topic_name: Optional[str] = None,
              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetTopicResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group within the user's subscription.
    :param str topic_name: Name of the topic
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['topicName'] = topic_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:eventgrid/v20180501preview:getTopic', __args__, opts=opts, typ=GetTopicResult).value

    return AwaitableGetTopicResult(
        endpoint=__ret__.endpoint,
        id=__ret__.id,
        input_schema=__ret__.input_schema,
        input_schema_mapping=__ret__.input_schema_mapping,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        tags=__ret__.tags,
        type=__ret__.type)
