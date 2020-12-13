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
    'ActionGroupResponse',
    'ConditionResponse',
    'ConditionsResponse',
    'DiagnosticsResponse',
    'ScopeResponse',
    'SuppressionConfigResponse',
    'SuppressionResponse',
    'SuppressionScheduleResponse',
]

@pulumi.output_type
class ActionGroupResponse(dict):
    """
    Action rule with action group configuration
    """
    def __init__(__self__, *,
                 action_group_id: str,
                 created_at: str,
                 created_by: str,
                 last_modified_at: str,
                 last_modified_by: str,
                 type: str,
                 conditions: Optional['outputs.ConditionsResponse'] = None,
                 description: Optional[str] = None,
                 scope: Optional['outputs.ScopeResponse'] = None,
                 status: Optional[str] = None):
        """
        Action rule with action group configuration
        :param str action_group_id: Action group to trigger if action rule matches
        :param str created_at: Creation time of action rule. Date-Time in ISO-8601 format.
        :param str created_by: Created by user name.
        :param str last_modified_at: Last updated time of action rule. Date-Time in ISO-8601 format.
        :param str last_modified_by: Last modified by user name.
        :param str type: Indicates type of action rule
        :param 'ConditionsResponseArgs' conditions: conditions on which alerts will be filtered
        :param str description: Description of action rule
        :param 'ScopeResponseArgs' scope: scope on which action rule will apply
        :param str status: Indicates if the given action rule is enabled or disabled
        """
        pulumi.set(__self__, "action_group_id", action_group_id)
        pulumi.set(__self__, "created_at", created_at)
        pulumi.set(__self__, "created_by", created_by)
        pulumi.set(__self__, "last_modified_at", last_modified_at)
        pulumi.set(__self__, "last_modified_by", last_modified_by)
        pulumi.set(__self__, "type", 'ActionGroup')
        if conditions is not None:
            pulumi.set(__self__, "conditions", conditions)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if scope is not None:
            pulumi.set(__self__, "scope", scope)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="actionGroupId")
    def action_group_id(self) -> str:
        """
        Action group to trigger if action rule matches
        """
        return pulumi.get(self, "action_group_id")

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> str:
        """
        Creation time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> str:
        """
        Created by user name.
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="lastModifiedAt")
    def last_modified_at(self) -> str:
        """
        Last updated time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "last_modified_at")

    @property
    @pulumi.getter(name="lastModifiedBy")
    def last_modified_by(self) -> str:
        """
        Last modified by user name.
        """
        return pulumi.get(self, "last_modified_by")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Indicates type of action rule
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def conditions(self) -> Optional['outputs.ConditionsResponse']:
        """
        conditions on which alerts will be filtered
        """
        return pulumi.get(self, "conditions")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Description of action rule
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def scope(self) -> Optional['outputs.ScopeResponse']:
        """
        scope on which action rule will apply
        """
        return pulumi.get(self, "scope")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Indicates if the given action rule is enabled or disabled
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ConditionResponse(dict):
    """
    condition to trigger an action rule
    """
    def __init__(__self__, *,
                 operator: Optional[str] = None,
                 values: Optional[Sequence[str]] = None):
        """
        condition to trigger an action rule
        :param str operator: operator for a given condition
        :param Sequence[str] values: list of values to match for a given condition.
        """
        if operator is not None:
            pulumi.set(__self__, "operator", operator)
        if values is not None:
            pulumi.set(__self__, "values", values)

    @property
    @pulumi.getter
    def operator(self) -> Optional[str]:
        """
        operator for a given condition
        """
        return pulumi.get(self, "operator")

    @property
    @pulumi.getter
    def values(self) -> Optional[Sequence[str]]:
        """
        list of values to match for a given condition.
        """
        return pulumi.get(self, "values")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ConditionsResponse(dict):
    """
    Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
    """
    def __init__(__self__, *,
                 alert_context: Optional['outputs.ConditionResponse'] = None,
                 alert_rule_id: Optional['outputs.ConditionResponse'] = None,
                 description: Optional['outputs.ConditionResponse'] = None,
                 monitor_condition: Optional['outputs.ConditionResponse'] = None,
                 monitor_service: Optional['outputs.ConditionResponse'] = None,
                 severity: Optional['outputs.ConditionResponse'] = None,
                 target_resource_type: Optional['outputs.ConditionResponse'] = None):
        """
        Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
        :param 'ConditionResponseArgs' alert_context: filter alerts by alert context (payload)
        :param 'ConditionResponseArgs' alert_rule_id: filter alerts by alert rule id
        :param 'ConditionResponseArgs' description: filter alerts by alert rule description
        :param 'ConditionResponseArgs' monitor_condition: filter alerts by monitor condition
        :param 'ConditionResponseArgs' monitor_service: filter alerts by monitor service
        :param 'ConditionResponseArgs' severity: filter alerts by severity
        :param 'ConditionResponseArgs' target_resource_type: filter alerts by target resource type
        """
        if alert_context is not None:
            pulumi.set(__self__, "alert_context", alert_context)
        if alert_rule_id is not None:
            pulumi.set(__self__, "alert_rule_id", alert_rule_id)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if monitor_condition is not None:
            pulumi.set(__self__, "monitor_condition", monitor_condition)
        if monitor_service is not None:
            pulumi.set(__self__, "monitor_service", monitor_service)
        if severity is not None:
            pulumi.set(__self__, "severity", severity)
        if target_resource_type is not None:
            pulumi.set(__self__, "target_resource_type", target_resource_type)

    @property
    @pulumi.getter(name="alertContext")
    def alert_context(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by alert context (payload)
        """
        return pulumi.get(self, "alert_context")

    @property
    @pulumi.getter(name="alertRuleId")
    def alert_rule_id(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by alert rule id
        """
        return pulumi.get(self, "alert_rule_id")

    @property
    @pulumi.getter
    def description(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by alert rule description
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="monitorCondition")
    def monitor_condition(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by monitor condition
        """
        return pulumi.get(self, "monitor_condition")

    @property
    @pulumi.getter(name="monitorService")
    def monitor_service(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by monitor service
        """
        return pulumi.get(self, "monitor_service")

    @property
    @pulumi.getter
    def severity(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by severity
        """
        return pulumi.get(self, "severity")

    @property
    @pulumi.getter(name="targetResourceType")
    def target_resource_type(self) -> Optional['outputs.ConditionResponse']:
        """
        filter alerts by target resource type
        """
        return pulumi.get(self, "target_resource_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DiagnosticsResponse(dict):
    """
    Action rule with diagnostics configuration
    """
    def __init__(__self__, *,
                 created_at: str,
                 created_by: str,
                 last_modified_at: str,
                 last_modified_by: str,
                 type: str,
                 conditions: Optional['outputs.ConditionsResponse'] = None,
                 description: Optional[str] = None,
                 scope: Optional['outputs.ScopeResponse'] = None,
                 status: Optional[str] = None):
        """
        Action rule with diagnostics configuration
        :param str created_at: Creation time of action rule. Date-Time in ISO-8601 format.
        :param str created_by: Created by user name.
        :param str last_modified_at: Last updated time of action rule. Date-Time in ISO-8601 format.
        :param str last_modified_by: Last modified by user name.
        :param str type: Indicates type of action rule
        :param 'ConditionsResponseArgs' conditions: conditions on which alerts will be filtered
        :param str description: Description of action rule
        :param 'ScopeResponseArgs' scope: scope on which action rule will apply
        :param str status: Indicates if the given action rule is enabled or disabled
        """
        pulumi.set(__self__, "created_at", created_at)
        pulumi.set(__self__, "created_by", created_by)
        pulumi.set(__self__, "last_modified_at", last_modified_at)
        pulumi.set(__self__, "last_modified_by", last_modified_by)
        pulumi.set(__self__, "type", 'Diagnostics')
        if conditions is not None:
            pulumi.set(__self__, "conditions", conditions)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if scope is not None:
            pulumi.set(__self__, "scope", scope)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> str:
        """
        Creation time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> str:
        """
        Created by user name.
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="lastModifiedAt")
    def last_modified_at(self) -> str:
        """
        Last updated time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "last_modified_at")

    @property
    @pulumi.getter(name="lastModifiedBy")
    def last_modified_by(self) -> str:
        """
        Last modified by user name.
        """
        return pulumi.get(self, "last_modified_by")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Indicates type of action rule
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def conditions(self) -> Optional['outputs.ConditionsResponse']:
        """
        conditions on which alerts will be filtered
        """
        return pulumi.get(self, "conditions")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Description of action rule
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def scope(self) -> Optional['outputs.ScopeResponse']:
        """
        scope on which action rule will apply
        """
        return pulumi.get(self, "scope")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Indicates if the given action rule is enabled or disabled
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ScopeResponse(dict):
    """
    Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
    """
    def __init__(__self__, *,
                 scope_type: Optional[str] = None,
                 values: Optional[Sequence[str]] = None):
        """
        Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
        :param str scope_type: type of target scope
        :param Sequence[str] values: list of ARM IDs of the given scope type which will be the target of the given action rule.
        """
        if scope_type is not None:
            pulumi.set(__self__, "scope_type", scope_type)
        if values is not None:
            pulumi.set(__self__, "values", values)

    @property
    @pulumi.getter(name="scopeType")
    def scope_type(self) -> Optional[str]:
        """
        type of target scope
        """
        return pulumi.get(self, "scope_type")

    @property
    @pulumi.getter
    def values(self) -> Optional[Sequence[str]]:
        """
        list of ARM IDs of the given scope type which will be the target of the given action rule.
        """
        return pulumi.get(self, "values")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SuppressionConfigResponse(dict):
    """
    Suppression logic for a given action rule
    """
    def __init__(__self__, *,
                 recurrence_type: str,
                 schedule: Optional['outputs.SuppressionScheduleResponse'] = None):
        """
        Suppression logic for a given action rule
        :param str recurrence_type: Specifies when the suppression should be applied
        :param 'SuppressionScheduleResponseArgs' schedule: suppression schedule configuration
        """
        pulumi.set(__self__, "recurrence_type", recurrence_type)
        if schedule is not None:
            pulumi.set(__self__, "schedule", schedule)

    @property
    @pulumi.getter(name="recurrenceType")
    def recurrence_type(self) -> str:
        """
        Specifies when the suppression should be applied
        """
        return pulumi.get(self, "recurrence_type")

    @property
    @pulumi.getter
    def schedule(self) -> Optional['outputs.SuppressionScheduleResponse']:
        """
        suppression schedule configuration
        """
        return pulumi.get(self, "schedule")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SuppressionResponse(dict):
    """
    Action rule with suppression configuration
    """
    def __init__(__self__, *,
                 created_at: str,
                 created_by: str,
                 last_modified_at: str,
                 last_modified_by: str,
                 suppression_config: 'outputs.SuppressionConfigResponse',
                 type: str,
                 conditions: Optional['outputs.ConditionsResponse'] = None,
                 description: Optional[str] = None,
                 scope: Optional['outputs.ScopeResponse'] = None,
                 status: Optional[str] = None):
        """
        Action rule with suppression configuration
        :param str created_at: Creation time of action rule. Date-Time in ISO-8601 format.
        :param str created_by: Created by user name.
        :param str last_modified_at: Last updated time of action rule. Date-Time in ISO-8601 format.
        :param str last_modified_by: Last modified by user name.
        :param 'SuppressionConfigResponseArgs' suppression_config: suppression configuration for the action rule
        :param str type: Indicates type of action rule
        :param 'ConditionsResponseArgs' conditions: conditions on which alerts will be filtered
        :param str description: Description of action rule
        :param 'ScopeResponseArgs' scope: scope on which action rule will apply
        :param str status: Indicates if the given action rule is enabled or disabled
        """
        pulumi.set(__self__, "created_at", created_at)
        pulumi.set(__self__, "created_by", created_by)
        pulumi.set(__self__, "last_modified_at", last_modified_at)
        pulumi.set(__self__, "last_modified_by", last_modified_by)
        pulumi.set(__self__, "suppression_config", suppression_config)
        pulumi.set(__self__, "type", 'Suppression')
        if conditions is not None:
            pulumi.set(__self__, "conditions", conditions)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if scope is not None:
            pulumi.set(__self__, "scope", scope)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> str:
        """
        Creation time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> str:
        """
        Created by user name.
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="lastModifiedAt")
    def last_modified_at(self) -> str:
        """
        Last updated time of action rule. Date-Time in ISO-8601 format.
        """
        return pulumi.get(self, "last_modified_at")

    @property
    @pulumi.getter(name="lastModifiedBy")
    def last_modified_by(self) -> str:
        """
        Last modified by user name.
        """
        return pulumi.get(self, "last_modified_by")

    @property
    @pulumi.getter(name="suppressionConfig")
    def suppression_config(self) -> 'outputs.SuppressionConfigResponse':
        """
        suppression configuration for the action rule
        """
        return pulumi.get(self, "suppression_config")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Indicates type of action rule
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def conditions(self) -> Optional['outputs.ConditionsResponse']:
        """
        conditions on which alerts will be filtered
        """
        return pulumi.get(self, "conditions")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Description of action rule
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def scope(self) -> Optional['outputs.ScopeResponse']:
        """
        scope on which action rule will apply
        """
        return pulumi.get(self, "scope")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Indicates if the given action rule is enabled or disabled
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SuppressionScheduleResponse(dict):
    """
    Schedule for a given suppression configuration.
    """
    def __init__(__self__, *,
                 end_date: Optional[str] = None,
                 end_time: Optional[str] = None,
                 recurrence_values: Optional[Sequence[int]] = None,
                 start_date: Optional[str] = None,
                 start_time: Optional[str] = None):
        """
        Schedule for a given suppression configuration.
        :param str end_date: End date for suppression
        :param str end_time: End date for suppression
        :param Sequence[int] recurrence_values: Specifies the values for recurrence pattern
        :param str start_date: Start date for suppression
        :param str start_time: Start time for suppression
        """
        if end_date is not None:
            pulumi.set(__self__, "end_date", end_date)
        if end_time is not None:
            pulumi.set(__self__, "end_time", end_time)
        if recurrence_values is not None:
            pulumi.set(__self__, "recurrence_values", recurrence_values)
        if start_date is not None:
            pulumi.set(__self__, "start_date", start_date)
        if start_time is not None:
            pulumi.set(__self__, "start_time", start_time)

    @property
    @pulumi.getter(name="endDate")
    def end_date(self) -> Optional[str]:
        """
        End date for suppression
        """
        return pulumi.get(self, "end_date")

    @property
    @pulumi.getter(name="endTime")
    def end_time(self) -> Optional[str]:
        """
        End date for suppression
        """
        return pulumi.get(self, "end_time")

    @property
    @pulumi.getter(name="recurrenceValues")
    def recurrence_values(self) -> Optional[Sequence[int]]:
        """
        Specifies the values for recurrence pattern
        """
        return pulumi.get(self, "recurrence_values")

    @property
    @pulumi.getter(name="startDate")
    def start_date(self) -> Optional[str]:
        """
        Start date for suppression
        """
        return pulumi.get(self, "start_date")

    @property
    @pulumi.getter(name="startTime")
    def start_time(self) -> Optional[str]:
        """
        Start time for suppression
        """
        return pulumi.get(self, "start_time")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


