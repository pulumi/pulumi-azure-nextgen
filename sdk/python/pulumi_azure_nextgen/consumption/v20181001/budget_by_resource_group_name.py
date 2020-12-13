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

__all__ = ['BudgetByResourceGroupName']


class BudgetByResourceGroupName(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 amount: Optional[pulumi.Input[float]] = None,
                 budget_name: Optional[pulumi.Input[str]] = None,
                 category: Optional[pulumi.Input[Union[str, 'CategoryType']]] = None,
                 e_tag: Optional[pulumi.Input[str]] = None,
                 filters: Optional[pulumi.Input[pulumi.InputType['FiltersArgs']]] = None,
                 notifications: Optional[pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['NotificationArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 time_grain: Optional[pulumi.Input[Union[str, 'TimeGrainType']]] = None,
                 time_period: Optional[pulumi.Input[pulumi.InputType['BudgetTimePeriodArgs']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        A budget resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] amount: The total amount of cost to track with the budget
        :param pulumi.Input[str] budget_name: Budget Name.
        :param pulumi.Input[Union[str, 'CategoryType']] category: The category of the budget, whether the budget tracks cost or usage.
        :param pulumi.Input[str] e_tag: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
        :param pulumi.Input[pulumi.InputType['FiltersArgs']] filters: May be used to filter budgets by resource group, resource, or meter.
        :param pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['NotificationArgs']]]] notifications: Dictionary of notifications associated with the budget. Budget can have up to five notifications.
        :param pulumi.Input[str] resource_group_name: Azure Resource Group Name.
        :param pulumi.Input[Union[str, 'TimeGrainType']] time_grain: The time covered by a budget. Tracking of the amount will be reset based on the time grain.
        :param pulumi.Input[pulumi.InputType['BudgetTimePeriodArgs']] time_period: Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
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

            if amount is None and not opts.urn:
                raise TypeError("Missing required property 'amount'")
            __props__['amount'] = amount
            if budget_name is None and not opts.urn:
                raise TypeError("Missing required property 'budget_name'")
            __props__['budget_name'] = budget_name
            if category is None and not opts.urn:
                raise TypeError("Missing required property 'category'")
            __props__['category'] = category
            __props__['e_tag'] = e_tag
            __props__['filters'] = filters
            __props__['notifications'] = notifications
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if time_grain is None and not opts.urn:
                raise TypeError("Missing required property 'time_grain'")
            __props__['time_grain'] = time_grain
            if time_period is None and not opts.urn:
                raise TypeError("Missing required property 'time_period'")
            __props__['time_period'] = time_period
            __props__['current_spend'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:consumption/latest:BudgetByResourceGroupName"), pulumi.Alias(type_="azure-nextgen:consumption/v20180131:BudgetByResourceGroupName"), pulumi.Alias(type_="azure-nextgen:consumption/v20180331:BudgetByResourceGroupName"), pulumi.Alias(type_="azure-nextgen:consumption/v20180630:BudgetByResourceGroupName"), pulumi.Alias(type_="azure-nextgen:consumption/v20180831:BudgetByResourceGroupName")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(BudgetByResourceGroupName, __self__).__init__(
            'azure-nextgen:consumption/v20181001:BudgetByResourceGroupName',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'BudgetByResourceGroupName':
        """
        Get an existing BudgetByResourceGroupName resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return BudgetByResourceGroupName(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def amount(self) -> pulumi.Output[float]:
        """
        The total amount of cost to track with the budget
        """
        return pulumi.get(self, "amount")

    @property
    @pulumi.getter
    def category(self) -> pulumi.Output[str]:
        """
        The category of the budget, whether the budget tracks cost or usage.
        """
        return pulumi.get(self, "category")

    @property
    @pulumi.getter(name="currentSpend")
    def current_spend(self) -> pulumi.Output['outputs.CurrentSpendResponse']:
        """
        The current amount of cost which is being tracked for a budget.
        """
        return pulumi.get(self, "current_spend")

    @property
    @pulumi.getter(name="eTag")
    def e_tag(self) -> pulumi.Output[Optional[str]]:
        """
        eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
        """
        return pulumi.get(self, "e_tag")

    @property
    @pulumi.getter
    def filters(self) -> pulumi.Output[Optional['outputs.FiltersResponse']]:
        """
        May be used to filter budgets by resource group, resource, or meter.
        """
        return pulumi.get(self, "filters")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def notifications(self) -> pulumi.Output[Optional[Mapping[str, 'outputs.NotificationResponse']]]:
        """
        Dictionary of notifications associated with the budget. Budget can have up to five notifications.
        """
        return pulumi.get(self, "notifications")

    @property
    @pulumi.getter(name="timeGrain")
    def time_grain(self) -> pulumi.Output[str]:
        """
        The time covered by a budget. Tracking of the amount will be reset based on the time grain.
        """
        return pulumi.get(self, "time_grain")

    @property
    @pulumi.getter(name="timePeriod")
    def time_period(self) -> pulumi.Output['outputs.BudgetTimePeriodResponse']:
        """
        Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
        """
        return pulumi.get(self, "time_period")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

