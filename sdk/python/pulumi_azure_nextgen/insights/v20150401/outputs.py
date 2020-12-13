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

__all__ = [
    'AutoscaleNotificationResponse',
    'AutoscaleProfileResponse',
    'EmailNotificationResponse',
    'MetricTriggerResponse',
    'RecurrenceResponse',
    'RecurrentScheduleResponse',
    'ScaleActionResponse',
    'ScaleCapacityResponse',
    'ScaleRuleMetricDimensionResponse',
    'ScaleRuleResponse',
    'TimeWindowResponse',
    'WebhookNotificationResponse',
]

@pulumi.output_type
class AutoscaleNotificationResponse(dict):
    """
    Autoscale notification.
    """
    def __init__(__self__, *,
                 operation: str,
                 email: Optional['outputs.EmailNotificationResponse'] = None,
                 webhooks: Optional[Sequence['outputs.WebhookNotificationResponse']] = None):
        """
        Autoscale notification.
        :param str operation: the operation associated with the notification and its value must be "scale"
        :param 'EmailNotificationResponseArgs' email: the email notification.
        :param Sequence['WebhookNotificationResponseArgs'] webhooks: the collection of webhook notifications.
        """
        pulumi.set(__self__, "operation", operation)
        if email is not None:
            pulumi.set(__self__, "email", email)
        if webhooks is not None:
            pulumi.set(__self__, "webhooks", webhooks)

    @property
    @pulumi.getter
    def operation(self) -> str:
        """
        the operation associated with the notification and its value must be "scale"
        """
        return pulumi.get(self, "operation")

    @property
    @pulumi.getter
    def email(self) -> Optional['outputs.EmailNotificationResponse']:
        """
        the email notification.
        """
        return pulumi.get(self, "email")

    @property
    @pulumi.getter
    def webhooks(self) -> Optional[Sequence['outputs.WebhookNotificationResponse']]:
        """
        the collection of webhook notifications.
        """
        return pulumi.get(self, "webhooks")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AutoscaleProfileResponse(dict):
    """
    Autoscale profile.
    """
    def __init__(__self__, *,
                 capacity: 'outputs.ScaleCapacityResponse',
                 name: str,
                 rules: Sequence['outputs.ScaleRuleResponse'],
                 fixed_date: Optional['outputs.TimeWindowResponse'] = None,
                 recurrence: Optional['outputs.RecurrenceResponse'] = None):
        """
        Autoscale profile.
        :param 'ScaleCapacityResponseArgs' capacity: the number of instances that can be used during this profile.
        :param str name: the name of the profile.
        :param Sequence['ScaleRuleResponseArgs'] rules: the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
        :param 'TimeWindowResponseArgs' fixed_date: the specific date-time for the profile. This element is not used if the Recurrence element is used.
        :param 'RecurrenceResponseArgs' recurrence: the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
        """
        pulumi.set(__self__, "capacity", capacity)
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "rules", rules)
        if fixed_date is not None:
            pulumi.set(__self__, "fixed_date", fixed_date)
        if recurrence is not None:
            pulumi.set(__self__, "recurrence", recurrence)

    @property
    @pulumi.getter
    def capacity(self) -> 'outputs.ScaleCapacityResponse':
        """
        the number of instances that can be used during this profile.
        """
        return pulumi.get(self, "capacity")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        the name of the profile.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def rules(self) -> Sequence['outputs.ScaleRuleResponse']:
        """
        the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
        """
        return pulumi.get(self, "rules")

    @property
    @pulumi.getter(name="fixedDate")
    def fixed_date(self) -> Optional['outputs.TimeWindowResponse']:
        """
        the specific date-time for the profile. This element is not used if the Recurrence element is used.
        """
        return pulumi.get(self, "fixed_date")

    @property
    @pulumi.getter
    def recurrence(self) -> Optional['outputs.RecurrenceResponse']:
        """
        the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
        """
        return pulumi.get(self, "recurrence")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EmailNotificationResponse(dict):
    """
    Email notification of an autoscale event.
    """
    def __init__(__self__, *,
                 custom_emails: Optional[Sequence[str]] = None,
                 send_to_subscription_administrator: Optional[bool] = None,
                 send_to_subscription_co_administrators: Optional[bool] = None):
        """
        Email notification of an autoscale event.
        :param Sequence[str] custom_emails: the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
        :param bool send_to_subscription_administrator: a value indicating whether to send email to subscription administrator.
        :param bool send_to_subscription_co_administrators: a value indicating whether to send email to subscription co-administrators.
        """
        if custom_emails is not None:
            pulumi.set(__self__, "custom_emails", custom_emails)
        if send_to_subscription_administrator is not None:
            pulumi.set(__self__, "send_to_subscription_administrator", send_to_subscription_administrator)
        if send_to_subscription_co_administrators is not None:
            pulumi.set(__self__, "send_to_subscription_co_administrators", send_to_subscription_co_administrators)

    @property
    @pulumi.getter(name="customEmails")
    def custom_emails(self) -> Optional[Sequence[str]]:
        """
        the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
        """
        return pulumi.get(self, "custom_emails")

    @property
    @pulumi.getter(name="sendToSubscriptionAdministrator")
    def send_to_subscription_administrator(self) -> Optional[bool]:
        """
        a value indicating whether to send email to subscription administrator.
        """
        return pulumi.get(self, "send_to_subscription_administrator")

    @property
    @pulumi.getter(name="sendToSubscriptionCoAdministrators")
    def send_to_subscription_co_administrators(self) -> Optional[bool]:
        """
        a value indicating whether to send email to subscription co-administrators.
        """
        return pulumi.get(self, "send_to_subscription_co_administrators")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class MetricTriggerResponse(dict):
    """
    The trigger that results in a scaling action.
    """
    def __init__(__self__, *,
                 metric_name: str,
                 metric_resource_uri: str,
                 operator: str,
                 statistic: str,
                 threshold: float,
                 time_aggregation: str,
                 time_grain: str,
                 time_window: str,
                 dimensions: Optional[Sequence['outputs.ScaleRuleMetricDimensionResponse']] = None,
                 metric_namespace: Optional[str] = None):
        """
        The trigger that results in a scaling action.
        :param str metric_name: the name of the metric that defines what the rule monitors.
        :param str metric_resource_uri: the resource identifier of the resource the rule monitors.
        :param str operator: the operator that is used to compare the metric data and the threshold.
        :param str statistic: the metric statistic type. How the metrics from multiple instances are combined.
        :param float threshold: the threshold of the metric that triggers the scale action.
        :param str time_aggregation: time aggregation type. How the data that is collected should be combined over time. The default value is Average.
        :param str time_grain: the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
        :param str time_window: the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
        :param Sequence['ScaleRuleMetricDimensionResponseArgs'] dimensions: List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
        :param str metric_namespace: the namespace of the metric that defines what the rule monitors.
        """
        pulumi.set(__self__, "metric_name", metric_name)
        pulumi.set(__self__, "metric_resource_uri", metric_resource_uri)
        pulumi.set(__self__, "operator", operator)
        pulumi.set(__self__, "statistic", statistic)
        pulumi.set(__self__, "threshold", threshold)
        pulumi.set(__self__, "time_aggregation", time_aggregation)
        pulumi.set(__self__, "time_grain", time_grain)
        pulumi.set(__self__, "time_window", time_window)
        if dimensions is not None:
            pulumi.set(__self__, "dimensions", dimensions)
        if metric_namespace is not None:
            pulumi.set(__self__, "metric_namespace", metric_namespace)

    @property
    @pulumi.getter(name="metricName")
    def metric_name(self) -> str:
        """
        the name of the metric that defines what the rule monitors.
        """
        return pulumi.get(self, "metric_name")

    @property
    @pulumi.getter(name="metricResourceUri")
    def metric_resource_uri(self) -> str:
        """
        the resource identifier of the resource the rule monitors.
        """
        return pulumi.get(self, "metric_resource_uri")

    @property
    @pulumi.getter
    def operator(self) -> str:
        """
        the operator that is used to compare the metric data and the threshold.
        """
        return pulumi.get(self, "operator")

    @property
    @pulumi.getter
    def statistic(self) -> str:
        """
        the metric statistic type. How the metrics from multiple instances are combined.
        """
        return pulumi.get(self, "statistic")

    @property
    @pulumi.getter
    def threshold(self) -> float:
        """
        the threshold of the metric that triggers the scale action.
        """
        return pulumi.get(self, "threshold")

    @property
    @pulumi.getter(name="timeAggregation")
    def time_aggregation(self) -> str:
        """
        time aggregation type. How the data that is collected should be combined over time. The default value is Average.
        """
        return pulumi.get(self, "time_aggregation")

    @property
    @pulumi.getter(name="timeGrain")
    def time_grain(self) -> str:
        """
        the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
        """
        return pulumi.get(self, "time_grain")

    @property
    @pulumi.getter(name="timeWindow")
    def time_window(self) -> str:
        """
        the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
        """
        return pulumi.get(self, "time_window")

    @property
    @pulumi.getter
    def dimensions(self) -> Optional[Sequence['outputs.ScaleRuleMetricDimensionResponse']]:
        """
        List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
        """
        return pulumi.get(self, "dimensions")

    @property
    @pulumi.getter(name="metricNamespace")
    def metric_namespace(self) -> Optional[str]:
        """
        the namespace of the metric that defines what the rule monitors.
        """
        return pulumi.get(self, "metric_namespace")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RecurrenceResponse(dict):
    """
    The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
    """
    def __init__(__self__, *,
                 frequency: str,
                 schedule: 'outputs.RecurrentScheduleResponse'):
        """
        The repeating times at which this profile begins. This element is not used if the FixedDate element is used.
        :param str frequency: the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
        :param 'RecurrentScheduleResponseArgs' schedule: the scheduling constraints for when the profile begins.
        """
        pulumi.set(__self__, "frequency", frequency)
        pulumi.set(__self__, "schedule", schedule)

    @property
    @pulumi.getter
    def frequency(self) -> str:
        """
        the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
        """
        return pulumi.get(self, "frequency")

    @property
    @pulumi.getter
    def schedule(self) -> 'outputs.RecurrentScheduleResponse':
        """
        the scheduling constraints for when the profile begins.
        """
        return pulumi.get(self, "schedule")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RecurrentScheduleResponse(dict):
    """
    The scheduling constraints for when the profile begins.
    """
    def __init__(__self__, *,
                 days: Sequence[str],
                 hours: Sequence[int],
                 minutes: Sequence[int],
                 time_zone: str):
        """
        The scheduling constraints for when the profile begins.
        :param Sequence[str] days: the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
        :param Sequence[int] hours: A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
        :param Sequence[int] minutes: A collection of minutes at which the profile takes effect at.
        :param str time_zone: the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
        """
        pulumi.set(__self__, "days", days)
        pulumi.set(__self__, "hours", hours)
        pulumi.set(__self__, "minutes", minutes)
        pulumi.set(__self__, "time_zone", time_zone)

    @property
    @pulumi.getter
    def days(self) -> Sequence[str]:
        """
        the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
        """
        return pulumi.get(self, "days")

    @property
    @pulumi.getter
    def hours(self) -> Sequence[int]:
        """
        A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
        """
        return pulumi.get(self, "hours")

    @property
    @pulumi.getter
    def minutes(self) -> Sequence[int]:
        """
        A collection of minutes at which the profile takes effect at.
        """
        return pulumi.get(self, "minutes")

    @property
    @pulumi.getter(name="timeZone")
    def time_zone(self) -> str:
        """
        the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
        """
        return pulumi.get(self, "time_zone")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScaleActionResponse(dict):
    """
    The parameters for the scaling action.
    """
    def __init__(__self__, *,
                 cooldown: str,
                 direction: str,
                 type: str,
                 value: Optional[str] = None):
        """
        The parameters for the scaling action.
        :param str cooldown: the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
        :param str direction: the scale direction. Whether the scaling action increases or decreases the number of instances.
        :param str type: the type of action that should occur when the scale rule fires.
        :param str value: the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
        """
        pulumi.set(__self__, "cooldown", cooldown)
        pulumi.set(__self__, "direction", direction)
        pulumi.set(__self__, "type", type)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def cooldown(self) -> str:
        """
        the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
        """
        return pulumi.get(self, "cooldown")

    @property
    @pulumi.getter
    def direction(self) -> str:
        """
        the scale direction. Whether the scaling action increases or decreases the number of instances.
        """
        return pulumi.get(self, "direction")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        the type of action that should occur when the scale rule fires.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def value(self) -> Optional[str]:
        """
        the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
        """
        return pulumi.get(self, "value")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScaleCapacityResponse(dict):
    """
    The number of instances that can be used during this profile.
    """
    def __init__(__self__, *,
                 default: str,
                 maximum: str,
                 minimum: str):
        """
        The number of instances that can be used during this profile.
        :param str default: the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
        :param str maximum: the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
        :param str minimum: the minimum number of instances for the resource.
        """
        pulumi.set(__self__, "default", default)
        pulumi.set(__self__, "maximum", maximum)
        pulumi.set(__self__, "minimum", minimum)

    @property
    @pulumi.getter
    def default(self) -> str:
        """
        the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
        """
        return pulumi.get(self, "default")

    @property
    @pulumi.getter
    def maximum(self) -> str:
        """
        the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
        """
        return pulumi.get(self, "maximum")

    @property
    @pulumi.getter
    def minimum(self) -> str:
        """
        the minimum number of instances for the resource.
        """
        return pulumi.get(self, "minimum")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScaleRuleMetricDimensionResponse(dict):
    """
    Specifies an auto scale rule metric dimension.
    """
    def __init__(__self__, *,
                 dimension_name: str,
                 operator: str,
                 values: Sequence[str]):
        """
        Specifies an auto scale rule metric dimension.
        :param str dimension_name: Name of the dimension.
        :param str operator: the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
        :param Sequence[str] values: list of dimension values. For example: ["App1","App2"].
        """
        pulumi.set(__self__, "dimension_name", dimension_name)
        pulumi.set(__self__, "operator", operator)
        pulumi.set(__self__, "values", values)

    @property
    @pulumi.getter(name="dimensionName")
    def dimension_name(self) -> str:
        """
        Name of the dimension.
        """
        return pulumi.get(self, "dimension_name")

    @property
    @pulumi.getter
    def operator(self) -> str:
        """
        the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
        """
        return pulumi.get(self, "operator")

    @property
    @pulumi.getter
    def values(self) -> Sequence[str]:
        """
        list of dimension values. For example: ["App1","App2"].
        """
        return pulumi.get(self, "values")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScaleRuleResponse(dict):
    """
    A rule that provide the triggers and parameters for the scaling action.
    """
    def __init__(__self__, *,
                 metric_trigger: 'outputs.MetricTriggerResponse',
                 scale_action: 'outputs.ScaleActionResponse'):
        """
        A rule that provide the triggers and parameters for the scaling action.
        :param 'MetricTriggerResponseArgs' metric_trigger: the trigger that results in a scaling action.
        :param 'ScaleActionResponseArgs' scale_action: the parameters for the scaling action.
        """
        pulumi.set(__self__, "metric_trigger", metric_trigger)
        pulumi.set(__self__, "scale_action", scale_action)

    @property
    @pulumi.getter(name="metricTrigger")
    def metric_trigger(self) -> 'outputs.MetricTriggerResponse':
        """
        the trigger that results in a scaling action.
        """
        return pulumi.get(self, "metric_trigger")

    @property
    @pulumi.getter(name="scaleAction")
    def scale_action(self) -> 'outputs.ScaleActionResponse':
        """
        the parameters for the scaling action.
        """
        return pulumi.get(self, "scale_action")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class TimeWindowResponse(dict):
    """
    A specific date-time for the profile.
    """
    def __init__(__self__, *,
                 end: str,
                 start: str,
                 time_zone: Optional[str] = None):
        """
        A specific date-time for the profile.
        :param str end: the end time for the profile in ISO 8601 format.
        :param str start: the start time for the profile in ISO 8601 format.
        :param str time_zone: the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
        """
        pulumi.set(__self__, "end", end)
        pulumi.set(__self__, "start", start)
        if time_zone is not None:
            pulumi.set(__self__, "time_zone", time_zone)

    @property
    @pulumi.getter
    def end(self) -> str:
        """
        the end time for the profile in ISO 8601 format.
        """
        return pulumi.get(self, "end")

    @property
    @pulumi.getter
    def start(self) -> str:
        """
        the start time for the profile in ISO 8601 format.
        """
        return pulumi.get(self, "start")

    @property
    @pulumi.getter(name="timeZone")
    def time_zone(self) -> Optional[str]:
        """
        the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
        """
        return pulumi.get(self, "time_zone")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class WebhookNotificationResponse(dict):
    """
    Webhook notification of an autoscale event.
    """
    def __init__(__self__, *,
                 properties: Optional[Mapping[str, str]] = None,
                 service_uri: Optional[str] = None):
        """
        Webhook notification of an autoscale event.
        :param Mapping[str, str] properties: a property bag of settings. This value can be empty.
        :param str service_uri: the service address to receive the notification.
        """
        if properties is not None:
            pulumi.set(__self__, "properties", properties)
        if service_uri is not None:
            pulumi.set(__self__, "service_uri", service_uri)

    @property
    @pulumi.getter
    def properties(self) -> Optional[Mapping[str, str]]:
        """
        a property bag of settings. This value can be empty.
        """
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter(name="serviceUri")
    def service_uri(self) -> Optional[str]:
        """
        the service address to receive the notification.
        """
        return pulumi.get(self, "service_uri")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


