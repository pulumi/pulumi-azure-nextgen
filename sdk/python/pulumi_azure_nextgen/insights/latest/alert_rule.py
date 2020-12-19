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

__all__ = ['AlertRule']


class AlertRule(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 actions: Optional[pulumi.Input[Sequence[pulumi.Input[Union[pulumi.InputType['RuleEmailActionArgs'], pulumi.InputType['RuleWebhookActionArgs']]]]]] = None,
                 condition: Optional[pulumi.Input[Union[pulumi.InputType['LocationThresholdRuleConditionArgs'], pulumi.InputType['ManagementEventRuleConditionArgs'], pulumi.InputType['ThresholdRuleConditionArgs']]]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 is_enabled: Optional[pulumi.Input[bool]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 rule_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        The alert rule resource.
        Latest API Version: 2016-03-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[Union[pulumi.InputType['RuleEmailActionArgs'], pulumi.InputType['RuleWebhookActionArgs']]]]] actions: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
        :param pulumi.Input[Union[pulumi.InputType['LocationThresholdRuleConditionArgs'], pulumi.InputType['ManagementEventRuleConditionArgs'], pulumi.InputType['ThresholdRuleConditionArgs']]] condition: the condition that results in the alert rule being activated.
        :param pulumi.Input[str] description: the description of the alert rule that will be included in the alert email.
        :param pulumi.Input[bool] is_enabled: the flag that indicates whether the alert rule is enabled.
        :param pulumi.Input[str] location: Resource location
        :param pulumi.Input[str] name: the name of the alert rule.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] rule_name: The name of the rule.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags
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

            __props__['actions'] = actions
            if condition is None and not opts.urn:
                raise TypeError("Missing required property 'condition'")
            __props__['condition'] = condition
            __props__['description'] = description
            if is_enabled is None and not opts.urn:
                raise TypeError("Missing required property 'is_enabled'")
            __props__['is_enabled'] = is_enabled
            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            if name is None and not opts.urn:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if rule_name is None and not opts.urn:
                raise TypeError("Missing required property 'rule_name'")
            __props__['rule_name'] = rule_name
            __props__['tags'] = tags
            __props__['last_updated_time'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:insights/v20160301:AlertRule")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AlertRule, __self__).__init__(
            'azure-nextgen:insights/latest:AlertRule',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AlertRule':
        """
        Get an existing AlertRule resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AlertRule(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def actions(self) -> pulumi.Output[Optional[Sequence[Any]]]:
        """
        the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
        """
        return pulumi.get(self, "actions")

    @property
    @pulumi.getter
    def condition(self) -> pulumi.Output[Any]:
        """
        the condition that results in the alert rule being activated.
        """
        return pulumi.get(self, "condition")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        the description of the alert rule that will be included in the alert email.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> pulumi.Output[bool]:
        """
        the flag that indicates whether the alert rule is enabled.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="lastUpdatedTime")
    def last_updated_time(self) -> pulumi.Output[str]:
        """
        Last time the rule was updated in ISO8601 format.
        """
        return pulumi.get(self, "last_updated_time")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

