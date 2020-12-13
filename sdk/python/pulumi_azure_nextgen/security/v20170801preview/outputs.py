# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'AllowlistCustomAlertRuleResponse',
    'DenylistCustomAlertRuleResponse',
    'RecommendationConfigurationPropertiesResponse',
    'ThresholdCustomAlertRuleResponse',
    'TimeWindowCustomAlertRuleResponse',
    'UserDefinedResourcesPropertiesResponse',
]

@pulumi.output_type
class AllowlistCustomAlertRuleResponse(dict):
    """
    A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
    """
    def __init__(__self__, *,
                 allowlist_values: Sequence[str],
                 description: str,
                 display_name: str,
                 is_enabled: bool,
                 rule_type: str,
                 value_type: str):
        """
        A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
        :param Sequence[str] allowlist_values: The values to allow. The format of the values depends on the rule type.
        :param str description: The description of the custom alert.
        :param str display_name: The display name of the custom alert.
        :param bool is_enabled: Status of the custom alert.
        :param str rule_type: The type of the custom alert rule.
        :param str value_type: The value type of the items in the list.
        """
        pulumi.set(__self__, "allowlist_values", allowlist_values)
        pulumi.set(__self__, "description", description)
        pulumi.set(__self__, "display_name", display_name)
        pulumi.set(__self__, "is_enabled", is_enabled)
        pulumi.set(__self__, "rule_type", 'ListCustomAlertRule')
        pulumi.set(__self__, "value_type", value_type)

    @property
    @pulumi.getter(name="allowlistValues")
    def allowlist_values(self) -> Sequence[str]:
        """
        The values to allow. The format of the values depends on the rule type.
        """
        return pulumi.get(self, "allowlist_values")

    @property
    @pulumi.getter
    def description(self) -> str:
        """
        The description of the custom alert.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The display name of the custom alert.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> bool:
        """
        Status of the custom alert.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="ruleType")
    def rule_type(self) -> str:
        """
        The type of the custom alert rule.
        """
        return pulumi.get(self, "rule_type")

    @property
    @pulumi.getter(name="valueType")
    def value_type(self) -> str:
        """
        The value type of the items in the list.
        """
        return pulumi.get(self, "value_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DenylistCustomAlertRuleResponse(dict):
    """
    A custom alert rule that checks if a value (depends on the custom alert type) is denied.
    """
    def __init__(__self__, *,
                 denylist_values: Sequence[str],
                 description: str,
                 display_name: str,
                 is_enabled: bool,
                 rule_type: str,
                 value_type: str):
        """
        A custom alert rule that checks if a value (depends on the custom alert type) is denied.
        :param Sequence[str] denylist_values: The values to deny. The format of the values depends on the rule type.
        :param str description: The description of the custom alert.
        :param str display_name: The display name of the custom alert.
        :param bool is_enabled: Status of the custom alert.
        :param str rule_type: The type of the custom alert rule.
        :param str value_type: The value type of the items in the list.
        """
        pulumi.set(__self__, "denylist_values", denylist_values)
        pulumi.set(__self__, "description", description)
        pulumi.set(__self__, "display_name", display_name)
        pulumi.set(__self__, "is_enabled", is_enabled)
        pulumi.set(__self__, "rule_type", 'ListCustomAlertRule')
        pulumi.set(__self__, "value_type", value_type)

    @property
    @pulumi.getter(name="denylistValues")
    def denylist_values(self) -> Sequence[str]:
        """
        The values to deny. The format of the values depends on the rule type.
        """
        return pulumi.get(self, "denylist_values")

    @property
    @pulumi.getter
    def description(self) -> str:
        """
        The description of the custom alert.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The display name of the custom alert.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> bool:
        """
        Status of the custom alert.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="ruleType")
    def rule_type(self) -> str:
        """
        The type of the custom alert rule.
        """
        return pulumi.get(self, "rule_type")

    @property
    @pulumi.getter(name="valueType")
    def value_type(self) -> str:
        """
        The value type of the items in the list.
        """
        return pulumi.get(self, "value_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RecommendationConfigurationPropertiesResponse(dict):
    """
    Recommendation configuration
    """
    def __init__(__self__, *,
                 name: str,
                 recommendation_type: str,
                 status: str):
        """
        Recommendation configuration
        :param str recommendation_type: The recommendation type.
        :param str status: Recommendation status. The recommendation is not generated when the status is disabled
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "recommendation_type", recommendation_type)
        pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter
    def name(self) -> str:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="recommendationType")
    def recommendation_type(self) -> str:
        """
        The recommendation type.
        """
        return pulumi.get(self, "recommendation_type")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        Recommendation status. The recommendation is not generated when the status is disabled
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ThresholdCustomAlertRuleResponse(dict):
    """
    A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
    """
    def __init__(__self__, *,
                 description: str,
                 display_name: str,
                 is_enabled: bool,
                 max_threshold: int,
                 min_threshold: int,
                 rule_type: str):
        """
        A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
        :param str description: The description of the custom alert.
        :param str display_name: The display name of the custom alert.
        :param bool is_enabled: Status of the custom alert.
        :param int max_threshold: The maximum threshold.
        :param int min_threshold: The minimum threshold.
        :param str rule_type: The type of the custom alert rule.
        """
        pulumi.set(__self__, "description", description)
        pulumi.set(__self__, "display_name", display_name)
        pulumi.set(__self__, "is_enabled", is_enabled)
        pulumi.set(__self__, "max_threshold", max_threshold)
        pulumi.set(__self__, "min_threshold", min_threshold)
        pulumi.set(__self__, "rule_type", 'ThresholdCustomAlertRule')

    @property
    @pulumi.getter
    def description(self) -> str:
        """
        The description of the custom alert.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The display name of the custom alert.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> bool:
        """
        Status of the custom alert.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="maxThreshold")
    def max_threshold(self) -> int:
        """
        The maximum threshold.
        """
        return pulumi.get(self, "max_threshold")

    @property
    @pulumi.getter(name="minThreshold")
    def min_threshold(self) -> int:
        """
        The minimum threshold.
        """
        return pulumi.get(self, "min_threshold")

    @property
    @pulumi.getter(name="ruleType")
    def rule_type(self) -> str:
        """
        The type of the custom alert rule.
        """
        return pulumi.get(self, "rule_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class TimeWindowCustomAlertRuleResponse(dict):
    """
    A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
    """
    def __init__(__self__, *,
                 description: str,
                 display_name: str,
                 is_enabled: bool,
                 max_threshold: int,
                 min_threshold: int,
                 rule_type: str,
                 time_window_size: str):
        """
        A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
        :param str description: The description of the custom alert.
        :param str display_name: The display name of the custom alert.
        :param bool is_enabled: Status of the custom alert.
        :param int max_threshold: The maximum threshold.
        :param int min_threshold: The minimum threshold.
        :param str rule_type: The type of the custom alert rule.
        :param str time_window_size: The time window size in iso8601 format.
        """
        pulumi.set(__self__, "description", description)
        pulumi.set(__self__, "display_name", display_name)
        pulumi.set(__self__, "is_enabled", is_enabled)
        pulumi.set(__self__, "max_threshold", max_threshold)
        pulumi.set(__self__, "min_threshold", min_threshold)
        pulumi.set(__self__, "rule_type", 'ThresholdCustomAlertRule')
        pulumi.set(__self__, "time_window_size", time_window_size)

    @property
    @pulumi.getter
    def description(self) -> str:
        """
        The description of the custom alert.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        The display name of the custom alert.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> bool:
        """
        Status of the custom alert.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="maxThreshold")
    def max_threshold(self) -> int:
        """
        The maximum threshold.
        """
        return pulumi.get(self, "max_threshold")

    @property
    @pulumi.getter(name="minThreshold")
    def min_threshold(self) -> int:
        """
        The minimum threshold.
        """
        return pulumi.get(self, "min_threshold")

    @property
    @pulumi.getter(name="ruleType")
    def rule_type(self) -> str:
        """
        The type of the custom alert rule.
        """
        return pulumi.get(self, "rule_type")

    @property
    @pulumi.getter(name="timeWindowSize")
    def time_window_size(self) -> str:
        """
        The time window size in iso8601 format.
        """
        return pulumi.get(self, "time_window_size")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class UserDefinedResourcesPropertiesResponse(dict):
    """
    Properties of the solution's user defined resources.
    """
    def __init__(__self__, *,
                 query: str,
                 query_subscriptions: Sequence[str]):
        """
        Properties of the solution's user defined resources.
        :param str query: Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
        :param Sequence[str] query_subscriptions: List of Azure subscription ids on which the user defined resources query should be executed.
        """
        pulumi.set(__self__, "query", query)
        pulumi.set(__self__, "query_subscriptions", query_subscriptions)

    @property
    @pulumi.getter
    def query(self) -> str:
        """
        Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
        """
        return pulumi.get(self, "query")

    @property
    @pulumi.getter(name="querySubscriptions")
    def query_subscriptions(self) -> Sequence[str]:
        """
        List of Azure subscription ids on which the user defined resources query should be executed.
        """
        return pulumi.get(self, "query_subscriptions")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


