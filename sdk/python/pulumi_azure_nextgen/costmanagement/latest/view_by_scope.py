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

__all__ = ['ViewByScope']


class ViewByScope(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 accumulated: Optional[pulumi.Input[Union[str, 'AccumulatedType']]] = None,
                 chart: Optional[pulumi.Input[Union[str, 'ChartType']]] = None,
                 dataset: Optional[pulumi.Input[pulumi.InputType['ReportConfigDatasetArgs']]] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 e_tag: Optional[pulumi.Input[str]] = None,
                 kpis: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KpiPropertiesArgs']]]]] = None,
                 metric: Optional[pulumi.Input[Union[str, 'MetricType']]] = None,
                 pivots: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PivotPropertiesArgs']]]]] = None,
                 scope: Optional[pulumi.Input[str]] = None,
                 time_period: Optional[pulumi.Input[pulumi.InputType['ReportConfigTimePeriodArgs']]] = None,
                 timeframe: Optional[pulumi.Input[Union[str, 'ReportTimeframeType']]] = None,
                 type: Optional[pulumi.Input[Union[str, 'ReportType']]] = None,
                 view_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        States and configurations of Cost Analysis.
        Latest API Version: 2020-06-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Union[str, 'AccumulatedType']] accumulated: Show costs accumulated over time.
        :param pulumi.Input[Union[str, 'ChartType']] chart: Chart type of the main view in Cost Analysis. Required.
        :param pulumi.Input[pulumi.InputType['ReportConfigDatasetArgs']] dataset: Has definition for data in this report config.
        :param pulumi.Input[str] display_name: User input name of the view. Required.
        :param pulumi.Input[str] e_tag: eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KpiPropertiesArgs']]]] kpis: List of KPIs to show in Cost Analysis UI.
        :param pulumi.Input[Union[str, 'MetricType']] metric: Metric to use when displaying costs.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PivotPropertiesArgs']]]] pivots: Configuration of 3 sub-views in the Cost Analysis UI.
        :param pulumi.Input[str] scope: Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
        :param pulumi.Input[pulumi.InputType['ReportConfigTimePeriodArgs']] time_period: Has time period for pulling data for the report.
        :param pulumi.Input[Union[str, 'ReportTimeframeType']] timeframe: The time frame for pulling data for the report. If custom, then a specific time period must be provided.
        :param pulumi.Input[Union[str, 'ReportType']] type: The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
        :param pulumi.Input[str] view_name: View name
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

            __props__['accumulated'] = accumulated
            __props__['chart'] = chart
            __props__['dataset'] = dataset
            __props__['display_name'] = display_name
            __props__['e_tag'] = e_tag
            __props__['kpis'] = kpis
            __props__['metric'] = metric
            __props__['pivots'] = pivots
            if scope is None and not opts.urn:
                raise TypeError("Missing required property 'scope'")
            __props__['scope'] = scope
            __props__['time_period'] = time_period
            if timeframe is None and not opts.urn:
                raise TypeError("Missing required property 'timeframe'")
            __props__['timeframe'] = timeframe
            if type is None and not opts.urn:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            if view_name is None and not opts.urn:
                raise TypeError("Missing required property 'view_name'")
            __props__['view_name'] = view_name
            __props__['created_on'] = None
            __props__['modified_on'] = None
            __props__['name'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:costmanagement/v20190401preview:ViewByScope"), pulumi.Alias(type_="azure-nextgen:costmanagement/v20191101:ViewByScope"), pulumi.Alias(type_="azure-nextgen:costmanagement/v20200601:ViewByScope")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ViewByScope, __self__).__init__(
            'azure-nextgen:costmanagement/latest:ViewByScope',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ViewByScope':
        """
        Get an existing ViewByScope resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ViewByScope(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def accumulated(self) -> pulumi.Output[Optional[str]]:
        """
        Show costs accumulated over time.
        """
        return pulumi.get(self, "accumulated")

    @property
    @pulumi.getter
    def chart(self) -> pulumi.Output[Optional[str]]:
        """
        Chart type of the main view in Cost Analysis. Required.
        """
        return pulumi.get(self, "chart")

    @property
    @pulumi.getter(name="createdOn")
    def created_on(self) -> pulumi.Output[str]:
        """
        Date the user created this view.
        """
        return pulumi.get(self, "created_on")

    @property
    @pulumi.getter
    def dataset(self) -> pulumi.Output[Optional['outputs.ReportConfigDatasetResponse']]:
        """
        Has definition for data in this report config.
        """
        return pulumi.get(self, "dataset")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[Optional[str]]:
        """
        User input name of the view. Required.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="eTag")
    def e_tag(self) -> pulumi.Output[Optional[str]]:
        """
        eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
        """
        return pulumi.get(self, "e_tag")

    @property
    @pulumi.getter
    def kpis(self) -> pulumi.Output[Optional[Sequence['outputs.KpiPropertiesResponse']]]:
        """
        List of KPIs to show in Cost Analysis UI.
        """
        return pulumi.get(self, "kpis")

    @property
    @pulumi.getter
    def metric(self) -> pulumi.Output[Optional[str]]:
        """
        Metric to use when displaying costs.
        """
        return pulumi.get(self, "metric")

    @property
    @pulumi.getter(name="modifiedOn")
    def modified_on(self) -> pulumi.Output[str]:
        """
        Date when the user last modified this view.
        """
        return pulumi.get(self, "modified_on")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def pivots(self) -> pulumi.Output[Optional[Sequence['outputs.PivotPropertiesResponse']]]:
        """
        Configuration of 3 sub-views in the Cost Analysis UI.
        """
        return pulumi.get(self, "pivots")

    @property
    @pulumi.getter
    def scope(self) -> pulumi.Output[Optional[str]]:
        """
        Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
        """
        return pulumi.get(self, "scope")

    @property
    @pulumi.getter(name="timePeriod")
    def time_period(self) -> pulumi.Output[Optional['outputs.ReportConfigTimePeriodResponse']]:
        """
        Has time period for pulling data for the report.
        """
        return pulumi.get(self, "time_period")

    @property
    @pulumi.getter
    def timeframe(self) -> pulumi.Output[str]:
        """
        The time frame for pulling data for the report. If custom, then a specific time period must be provided.
        """
        return pulumi.get(self, "timeframe")

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

