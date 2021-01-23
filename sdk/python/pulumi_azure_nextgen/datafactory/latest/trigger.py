# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._enums import *
from ._inputs import *

__all__ = ['Trigger']


class Trigger(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 factory_name: Optional[pulumi.Input[str]] = None,
                 properties: Optional[pulumi.Input[Union[pulumi.InputType['BlobEventsTriggerArgs'], pulumi.InputType['BlobTriggerArgs'], pulumi.InputType['ChainingTriggerArgs'], pulumi.InputType['CustomEventsTriggerArgs'], pulumi.InputType['MultiplePipelineTriggerArgs'], pulumi.InputType['RerunTumblingWindowTriggerArgs'], pulumi.InputType['ScheduleTriggerArgs'], pulumi.InputType['TumblingWindowTriggerArgs']]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 trigger_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Trigger resource type.
        Latest API Version: 2018-06-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] factory_name: The factory name.
        :param pulumi.Input[Union[pulumi.InputType['BlobEventsTriggerArgs'], pulumi.InputType['BlobTriggerArgs'], pulumi.InputType['ChainingTriggerArgs'], pulumi.InputType['CustomEventsTriggerArgs'], pulumi.InputType['MultiplePipelineTriggerArgs'], pulumi.InputType['RerunTumblingWindowTriggerArgs'], pulumi.InputType['ScheduleTriggerArgs'], pulumi.InputType['TumblingWindowTriggerArgs']]] properties: Properties of the trigger.
        :param pulumi.Input[str] resource_group_name: The resource group name.
        :param pulumi.Input[str] trigger_name: The trigger name.
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

            if factory_name is None and not opts.urn:
                raise TypeError("Missing required property 'factory_name'")
            __props__['factory_name'] = factory_name
            if properties is None and not opts.urn:
                raise TypeError("Missing required property 'properties'")
            __props__['properties'] = properties
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if trigger_name is None and not opts.urn:
                raise TypeError("Missing required property 'trigger_name'")
            __props__['trigger_name'] = trigger_name
            __props__['etag'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:datafactory/v20170901preview:Trigger"), pulumi.Alias(type_="azure-nextgen:datafactory/v20180601:Trigger")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Trigger, __self__).__init__(
            'azure-nextgen:datafactory/latest:Trigger',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Trigger':
        """
        Get an existing Trigger resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Trigger(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[str]:
        """
        Etag identifies change in the resource.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> pulumi.Output[Any]:
        """
        Properties of the trigger.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The resource type.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

