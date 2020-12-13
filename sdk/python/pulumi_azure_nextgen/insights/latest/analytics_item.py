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

__all__ = ['AnalyticsItem']


class AnalyticsItem(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 content: Optional[pulumi.Input[str]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 override_item: Optional[pulumi.Input[bool]] = None,
                 properties: Optional[pulumi.Input[pulumi.InputType['ApplicationInsightsComponentAnalyticsItemPropertiesArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 resource_name_: Optional[pulumi.Input[str]] = None,
                 scope: Optional[pulumi.Input[Union[str, 'ItemScope']]] = None,
                 scope_path: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[Union[str, 'ItemType']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Properties that define an Analytics item that is associated to an Application Insights component.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] content: The content of this item
        :param pulumi.Input[str] id: Internally assigned unique id of the item definition.
        :param pulumi.Input[str] name: The user-defined name of the item.
        :param pulumi.Input[bool] override_item: Flag indicating whether or not to force save an item. This allows overriding an item if it already exists.
        :param pulumi.Input[pulumi.InputType['ApplicationInsightsComponentAnalyticsItemPropertiesArgs']] properties: A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
        :param pulumi.Input[str] resource_group_name: The name of the resource group. The name is case insensitive.
        :param pulumi.Input[str] resource_name_: The name of the Application Insights component resource.
        :param pulumi.Input[Union[str, 'ItemScope']] scope: Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
        :param pulumi.Input[str] scope_path: Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
        :param pulumi.Input[Union[str, 'ItemType']] type: Enum indicating the type of the Analytics item.
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

            __props__['content'] = content
            __props__['id'] = id
            __props__['name'] = name
            __props__['override_item'] = override_item
            __props__['properties'] = properties
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if resource_name_ is None and not opts.urn:
                raise TypeError("Missing required property 'resource_name_'")
            __props__['resource_name'] = resource_name_
            __props__['scope'] = scope
            if scope_path is None and not opts.urn:
                raise TypeError("Missing required property 'scope_path'")
            __props__['scope_path'] = scope_path
            __props__['type'] = type
            __props__['time_created'] = None
            __props__['time_modified'] = None
            __props__['version'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:insights/v20150501:AnalyticsItem")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AnalyticsItem, __self__).__init__(
            'azure-nextgen:insights/latest:AnalyticsItem',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AnalyticsItem':
        """
        Get an existing AnalyticsItem resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AnalyticsItem(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def content(self) -> pulumi.Output[Optional[str]]:
        """
        The content of this item
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[Optional[str]]:
        """
        The user-defined name of the item.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> pulumi.Output['outputs.ApplicationInsightsComponentAnalyticsItemPropertiesResponse']:
        """
        A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter
    def scope(self) -> pulumi.Output[Optional[str]]:
        """
        Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
        """
        return pulumi.get(self, "scope")

    @property
    @pulumi.getter(name="timeCreated")
    def time_created(self) -> pulumi.Output[str]:
        """
        Date and time in UTC when this item was created.
        """
        return pulumi.get(self, "time_created")

    @property
    @pulumi.getter(name="timeModified")
    def time_modified(self) -> pulumi.Output[str]:
        """
        Date and time in UTC of the last modification that was made to this item.
        """
        return pulumi.get(self, "time_modified")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[Optional[str]]:
        """
        Enum indicating the type of the Analytics item.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def version(self) -> pulumi.Output[str]:
        """
        This instance's version of the data model. This can change as new features are added.
        """
        return pulumi.get(self, "version")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

