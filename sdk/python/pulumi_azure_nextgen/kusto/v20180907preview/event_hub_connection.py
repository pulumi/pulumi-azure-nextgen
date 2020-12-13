# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['EventHubConnection']


class EventHubConnection(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 cluster_name: Optional[pulumi.Input[str]] = None,
                 consumer_group: Optional[pulumi.Input[str]] = None,
                 data_format: Optional[pulumi.Input[Union[str, 'DataFormat']]] = None,
                 database_name: Optional[pulumi.Input[str]] = None,
                 event_hub_connection_name: Optional[pulumi.Input[str]] = None,
                 event_hub_resource_id: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 mapping_rule_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 table_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Class representing an event hub connection.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cluster_name: The name of the Kusto cluster.
        :param pulumi.Input[str] consumer_group: The event hub consumer group.
        :param pulumi.Input[Union[str, 'DataFormat']] data_format: The data format of the message. Optionally the data format can be added to each message.
        :param pulumi.Input[str] database_name: The name of the database in the Kusto cluster.
        :param pulumi.Input[str] event_hub_connection_name: The name of the event hub connection.
        :param pulumi.Input[str] event_hub_resource_id: The resource ID of the event hub to be used to create a data connection.
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[str] mapping_rule_name: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
        :param pulumi.Input[str] resource_group_name: The name of the resource group containing the Kusto cluster.
        :param pulumi.Input[str] table_name: The table where the data should be ingested. Optionally the table information can be added to each message.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if cluster_name is None and not opts.urn:
                raise TypeError("Missing required property 'cluster_name'")
            __props__['cluster_name'] = cluster_name
            if consumer_group is None and not opts.urn:
                raise TypeError("Missing required property 'consumer_group'")
            __props__['consumer_group'] = consumer_group
            __props__['data_format'] = data_format
            if database_name is None and not opts.urn:
                raise TypeError("Missing required property 'database_name'")
            __props__['database_name'] = database_name
            if event_hub_connection_name is None and not opts.urn:
                raise TypeError("Missing required property 'event_hub_connection_name'")
            __props__['event_hub_connection_name'] = event_hub_connection_name
            if event_hub_resource_id is None and not opts.urn:
                raise TypeError("Missing required property 'event_hub_resource_id'")
            __props__['event_hub_resource_id'] = event_hub_resource_id
            __props__['location'] = location
            __props__['mapping_rule_name'] = mapping_rule_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['table_name'] = table_name
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:kusto/v20170907privatepreview:EventHubConnection")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(EventHubConnection, __self__).__init__(
            'azure-nextgen:kusto/v20180907preview:EventHubConnection',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'EventHubConnection':
        """
        Get an existing EventHubConnection resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return EventHubConnection(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="consumerGroup")
    def consumer_group(self) -> pulumi.Output[str]:
        """
        The event hub consumer group.
        """
        return pulumi.get(self, "consumer_group")

    @property
    @pulumi.getter(name="dataFormat")
    def data_format(self) -> pulumi.Output[Optional[str]]:
        """
        The data format of the message. Optionally the data format can be added to each message.
        """
        return pulumi.get(self, "data_format")

    @property
    @pulumi.getter(name="eventHubResourceId")
    def event_hub_resource_id(self) -> pulumi.Output[str]:
        """
        The resource ID of the event hub to be used to create a data connection.
        """
        return pulumi.get(self, "event_hub_resource_id")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="mappingRuleName")
    def mapping_rule_name(self) -> pulumi.Output[Optional[str]]:
        """
        The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
        """
        return pulumi.get(self, "mapping_rule_name")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="tableName")
    def table_name(self) -> pulumi.Output[Optional[str]]:
        """
        The table where the data should be ingested. Optionally the table information can be added to each message.
        """
        return pulumi.get(self, "table_name")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

