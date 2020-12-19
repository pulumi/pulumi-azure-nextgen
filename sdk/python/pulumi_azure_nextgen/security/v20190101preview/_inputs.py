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
    'AssessmentStatusArgs',
    'AutomationActionEventHubArgs',
    'AutomationActionLogicAppArgs',
    'AutomationActionWorkspaceArgs',
    'AutomationRuleSetArgs',
    'AutomationScopeArgs',
    'AutomationSourceArgs',
    'AutomationTriggeringRuleArgs',
    'AzureResourceDetailsArgs',
    'OnPremiseResourceDetailsArgs',
    'ScopeElementArgs',
    'SuppressionAlertsScopeArgs',
]

@pulumi.input_type
class AssessmentStatusArgs:
    def __init__(__self__, *,
                 code: pulumi.Input[Union[str, 'AssessmentStatusCode']],
                 cause: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None):
        """
        The result of the assessment
        :param pulumi.Input[Union[str, 'AssessmentStatusCode']] code: Programmatic code for the status of the assessment
        :param pulumi.Input[str] cause: Programmatic code for the cause of the assessment status
        :param pulumi.Input[str] description: Human readable description of the assessment status
        """
        pulumi.set(__self__, "code", code)
        if cause is not None:
            pulumi.set(__self__, "cause", cause)
        if description is not None:
            pulumi.set(__self__, "description", description)

    @property
    @pulumi.getter
    def code(self) -> pulumi.Input[Union[str, 'AssessmentStatusCode']]:
        """
        Programmatic code for the status of the assessment
        """
        return pulumi.get(self, "code")

    @code.setter
    def code(self, value: pulumi.Input[Union[str, 'AssessmentStatusCode']]):
        pulumi.set(self, "code", value)

    @property
    @pulumi.getter
    def cause(self) -> Optional[pulumi.Input[str]]:
        """
        Programmatic code for the cause of the assessment status
        """
        return pulumi.get(self, "cause")

    @cause.setter
    def cause(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "cause", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        Human readable description of the assessment status
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)


@pulumi.input_type
class AutomationActionEventHubArgs:
    def __init__(__self__, *,
                 action_type: pulumi.Input[str],
                 connection_string: Optional[pulumi.Input[str]] = None,
                 event_hub_resource_id: Optional[pulumi.Input[str]] = None):
        """
        The target Event Hub to which event data will be exported. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
        :param pulumi.Input[str] action_type: The type of the action that will be triggered by the Automation
               Expected value is 'EventHub'.
        :param pulumi.Input[str] connection_string: The target Event Hub connection string (it will not be included in any response).
        :param pulumi.Input[str] event_hub_resource_id: The target Event Hub Azure Resource ID.
        """
        pulumi.set(__self__, "action_type", 'EventHub')
        if connection_string is not None:
            pulumi.set(__self__, "connection_string", connection_string)
        if event_hub_resource_id is not None:
            pulumi.set(__self__, "event_hub_resource_id", event_hub_resource_id)

    @property
    @pulumi.getter(name="actionType")
    def action_type(self) -> pulumi.Input[str]:
        """
        The type of the action that will be triggered by the Automation
        Expected value is 'EventHub'.
        """
        return pulumi.get(self, "action_type")

    @action_type.setter
    def action_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "action_type", value)

    @property
    @pulumi.getter(name="connectionString")
    def connection_string(self) -> Optional[pulumi.Input[str]]:
        """
        The target Event Hub connection string (it will not be included in any response).
        """
        return pulumi.get(self, "connection_string")

    @connection_string.setter
    def connection_string(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "connection_string", value)

    @property
    @pulumi.getter(name="eventHubResourceId")
    def event_hub_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The target Event Hub Azure Resource ID.
        """
        return pulumi.get(self, "event_hub_resource_id")

    @event_hub_resource_id.setter
    def event_hub_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "event_hub_resource_id", value)


@pulumi.input_type
class AutomationActionLogicAppArgs:
    def __init__(__self__, *,
                 action_type: pulumi.Input[str],
                 logic_app_resource_id: Optional[pulumi.Input[str]] = None,
                 uri: Optional[pulumi.Input[str]] = None):
        """
        The logic app action that should be triggered. To learn more about Security Center's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
        :param pulumi.Input[str] action_type: The type of the action that will be triggered by the Automation
               Expected value is 'LogicApp'.
        :param pulumi.Input[str] logic_app_resource_id: The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
        :param pulumi.Input[str] uri: The Logic App trigger URI endpoint (it will not be included in any response).
        """
        pulumi.set(__self__, "action_type", 'LogicApp')
        if logic_app_resource_id is not None:
            pulumi.set(__self__, "logic_app_resource_id", logic_app_resource_id)
        if uri is not None:
            pulumi.set(__self__, "uri", uri)

    @property
    @pulumi.getter(name="actionType")
    def action_type(self) -> pulumi.Input[str]:
        """
        The type of the action that will be triggered by the Automation
        Expected value is 'LogicApp'.
        """
        return pulumi.get(self, "action_type")

    @action_type.setter
    def action_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "action_type", value)

    @property
    @pulumi.getter(name="logicAppResourceId")
    def logic_app_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
        """
        return pulumi.get(self, "logic_app_resource_id")

    @logic_app_resource_id.setter
    def logic_app_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "logic_app_resource_id", value)

    @property
    @pulumi.getter
    def uri(self) -> Optional[pulumi.Input[str]]:
        """
        The Logic App trigger URI endpoint (it will not be included in any response).
        """
        return pulumi.get(self, "uri")

    @uri.setter
    def uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "uri", value)


@pulumi.input_type
class AutomationActionWorkspaceArgs:
    def __init__(__self__, *,
                 action_type: pulumi.Input[str],
                 workspace_resource_id: Optional[pulumi.Input[str]] = None):
        """
        The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
        :param pulumi.Input[str] action_type: The type of the action that will be triggered by the Automation
               Expected value is 'Workspace'.
        :param pulumi.Input[str] workspace_resource_id: The fully qualified Log Analytics Workspace Azure Resource ID.
        """
        pulumi.set(__self__, "action_type", 'Workspace')
        if workspace_resource_id is not None:
            pulumi.set(__self__, "workspace_resource_id", workspace_resource_id)

    @property
    @pulumi.getter(name="actionType")
    def action_type(self) -> pulumi.Input[str]:
        """
        The type of the action that will be triggered by the Automation
        Expected value is 'Workspace'.
        """
        return pulumi.get(self, "action_type")

    @action_type.setter
    def action_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "action_type", value)

    @property
    @pulumi.getter(name="workspaceResourceId")
    def workspace_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The fully qualified Log Analytics Workspace Azure Resource ID.
        """
        return pulumi.get(self, "workspace_resource_id")

    @workspace_resource_id.setter
    def workspace_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "workspace_resource_id", value)


@pulumi.input_type
class AutomationRuleSetArgs:
    def __init__(__self__, *,
                 rules: Optional[pulumi.Input[Sequence[pulumi.Input['AutomationTriggeringRuleArgs']]]] = None):
        """
        A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions.
        """
        if rules is not None:
            pulumi.set(__self__, "rules", rules)

    @property
    @pulumi.getter
    def rules(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['AutomationTriggeringRuleArgs']]]]:
        return pulumi.get(self, "rules")

    @rules.setter
    def rules(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['AutomationTriggeringRuleArgs']]]]):
        pulumi.set(self, "rules", value)


@pulumi.input_type
class AutomationScopeArgs:
    def __init__(__self__, *,
                 description: Optional[pulumi.Input[str]] = None,
                 scope_path: Optional[pulumi.Input[str]] = None):
        """
        A single automation scope.
        :param pulumi.Input[str] description: The resources scope description.
        :param pulumi.Input[str] scope_path: The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
        """
        if description is not None:
            pulumi.set(__self__, "description", description)
        if scope_path is not None:
            pulumi.set(__self__, "scope_path", scope_path)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        The resources scope description.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="scopePath")
    def scope_path(self) -> Optional[pulumi.Input[str]]:
        """
        The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
        """
        return pulumi.get(self, "scope_path")

    @scope_path.setter
    def scope_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scope_path", value)


@pulumi.input_type
class AutomationSourceArgs:
    def __init__(__self__, *,
                 event_source: Optional[pulumi.Input[Union[str, 'EventSource']]] = None,
                 rule_sets: Optional[pulumi.Input[Sequence[pulumi.Input['AutomationRuleSetArgs']]]] = None):
        """
        The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
        :param pulumi.Input[Union[str, 'EventSource']] event_source: A valid event source type.
        :param pulumi.Input[Sequence[pulumi.Input['AutomationRuleSetArgs']]] rule_sets: A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
        """
        if event_source is not None:
            pulumi.set(__self__, "event_source", event_source)
        if rule_sets is not None:
            pulumi.set(__self__, "rule_sets", rule_sets)

    @property
    @pulumi.getter(name="eventSource")
    def event_source(self) -> Optional[pulumi.Input[Union[str, 'EventSource']]]:
        """
        A valid event source type.
        """
        return pulumi.get(self, "event_source")

    @event_source.setter
    def event_source(self, value: Optional[pulumi.Input[Union[str, 'EventSource']]]):
        pulumi.set(self, "event_source", value)

    @property
    @pulumi.getter(name="ruleSets")
    def rule_sets(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['AutomationRuleSetArgs']]]]:
        """
        A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
        """
        return pulumi.get(self, "rule_sets")

    @rule_sets.setter
    def rule_sets(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['AutomationRuleSetArgs']]]]):
        pulumi.set(self, "rule_sets", value)


@pulumi.input_type
class AutomationTriggeringRuleArgs:
    def __init__(__self__, *,
                 expected_value: Optional[pulumi.Input[str]] = None,
                 operator: Optional[pulumi.Input[Union[str, 'Operator']]] = None,
                 property_j_path: Optional[pulumi.Input[str]] = None,
                 property_type: Optional[pulumi.Input[Union[str, 'PropertyType']]] = None):
        """
        A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.
        :param pulumi.Input[str] expected_value: The expected value.
        :param pulumi.Input[Union[str, 'Operator']] operator: A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
        :param pulumi.Input[str] property_j_path: The JPath of the entity model property that should be checked.
        :param pulumi.Input[Union[str, 'PropertyType']] property_type: The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
        """
        if expected_value is not None:
            pulumi.set(__self__, "expected_value", expected_value)
        if operator is not None:
            pulumi.set(__self__, "operator", operator)
        if property_j_path is not None:
            pulumi.set(__self__, "property_j_path", property_j_path)
        if property_type is not None:
            pulumi.set(__self__, "property_type", property_type)

    @property
    @pulumi.getter(name="expectedValue")
    def expected_value(self) -> Optional[pulumi.Input[str]]:
        """
        The expected value.
        """
        return pulumi.get(self, "expected_value")

    @expected_value.setter
    def expected_value(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "expected_value", value)

    @property
    @pulumi.getter
    def operator(self) -> Optional[pulumi.Input[Union[str, 'Operator']]]:
        """
        A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
        """
        return pulumi.get(self, "operator")

    @operator.setter
    def operator(self, value: Optional[pulumi.Input[Union[str, 'Operator']]]):
        pulumi.set(self, "operator", value)

    @property
    @pulumi.getter(name="propertyJPath")
    def property_j_path(self) -> Optional[pulumi.Input[str]]:
        """
        The JPath of the entity model property that should be checked.
        """
        return pulumi.get(self, "property_j_path")

    @property_j_path.setter
    def property_j_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "property_j_path", value)

    @property
    @pulumi.getter(name="propertyType")
    def property_type(self) -> Optional[pulumi.Input[Union[str, 'PropertyType']]]:
        """
        The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
        """
        return pulumi.get(self, "property_type")

    @property_type.setter
    def property_type(self, value: Optional[pulumi.Input[Union[str, 'PropertyType']]]):
        pulumi.set(self, "property_type", value)


@pulumi.input_type
class AzureResourceDetailsArgs:
    def __init__(__self__, *,
                 source: pulumi.Input[str]):
        """
        Details of the Azure resource that was assessed
        :param pulumi.Input[str] source: The platform where the assessed resource resides
               Expected value is 'Azure'.
        """
        pulumi.set(__self__, "source", 'Azure')

    @property
    @pulumi.getter
    def source(self) -> pulumi.Input[str]:
        """
        The platform where the assessed resource resides
        Expected value is 'Azure'.
        """
        return pulumi.get(self, "source")

    @source.setter
    def source(self, value: pulumi.Input[str]):
        pulumi.set(self, "source", value)


@pulumi.input_type
class OnPremiseResourceDetailsArgs:
    def __init__(__self__, *,
                 machine_name: pulumi.Input[str],
                 source: pulumi.Input[str],
                 source_computer_id: pulumi.Input[str],
                 vmuuid: pulumi.Input[str],
                 workspace_id: pulumi.Input[str]):
        """
        Details of the On Premise resource that was assessed
        :param pulumi.Input[str] machine_name: The name of the machine
        :param pulumi.Input[str] source: The platform where the assessed resource resides
               Expected value is 'OnPremise'.
        :param pulumi.Input[str] source_computer_id: The oms agent Id installed on the machine
        :param pulumi.Input[str] vmuuid: The unique Id of the machine
        :param pulumi.Input[str] workspace_id: Azure resource Id of the workspace the machine is attached to
        """
        pulumi.set(__self__, "machine_name", machine_name)
        pulumi.set(__self__, "source", 'OnPremise')
        pulumi.set(__self__, "source_computer_id", source_computer_id)
        pulumi.set(__self__, "vmuuid", vmuuid)
        pulumi.set(__self__, "workspace_id", workspace_id)

    @property
    @pulumi.getter(name="machineName")
    def machine_name(self) -> pulumi.Input[str]:
        """
        The name of the machine
        """
        return pulumi.get(self, "machine_name")

    @machine_name.setter
    def machine_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "machine_name", value)

    @property
    @pulumi.getter
    def source(self) -> pulumi.Input[str]:
        """
        The platform where the assessed resource resides
        Expected value is 'OnPremise'.
        """
        return pulumi.get(self, "source")

    @source.setter
    def source(self, value: pulumi.Input[str]):
        pulumi.set(self, "source", value)

    @property
    @pulumi.getter(name="sourceComputerId")
    def source_computer_id(self) -> pulumi.Input[str]:
        """
        The oms agent Id installed on the machine
        """
        return pulumi.get(self, "source_computer_id")

    @source_computer_id.setter
    def source_computer_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "source_computer_id", value)

    @property
    @pulumi.getter
    def vmuuid(self) -> pulumi.Input[str]:
        """
        The unique Id of the machine
        """
        return pulumi.get(self, "vmuuid")

    @vmuuid.setter
    def vmuuid(self, value: pulumi.Input[str]):
        pulumi.set(self, "vmuuid", value)

    @property
    @pulumi.getter(name="workspaceId")
    def workspace_id(self) -> pulumi.Input[str]:
        """
        Azure resource Id of the workspace the machine is attached to
        """
        return pulumi.get(self, "workspace_id")

    @workspace_id.setter
    def workspace_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "workspace_id", value)


@pulumi.input_type
class ScopeElementArgs:
    def __init__(__self__, *,
                 field: Optional[pulumi.Input[str]] = None):
        """
        A more specific scope used to identify the alerts to suppress.
        :param pulumi.Input[str] field: The alert entity type to suppress by.
        """
        if field is not None:
            pulumi.set(__self__, "field", field)

    @property
    @pulumi.getter
    def field(self) -> Optional[pulumi.Input[str]]:
        """
        The alert entity type to suppress by.
        """
        return pulumi.get(self, "field")

    @field.setter
    def field(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "field", value)


@pulumi.input_type
class SuppressionAlertsScopeArgs:
    def __init__(__self__, *,
                 all_of: pulumi.Input[Sequence[pulumi.Input['ScopeElementArgs']]]):
        """
        :param pulumi.Input[Sequence[pulumi.Input['ScopeElementArgs']]] all_of: All the conditions inside need to be true in order to suppress the alert
        """
        pulumi.set(__self__, "all_of", all_of)

    @property
    @pulumi.getter(name="allOf")
    def all_of(self) -> pulumi.Input[Sequence[pulumi.Input['ScopeElementArgs']]]:
        """
        All the conditions inside need to be true in order to suppress the alert
        """
        return pulumi.get(self, "all_of")

    @all_of.setter
    def all_of(self, value: pulumi.Input[Sequence[pulumi.Input['ScopeElementArgs']]]):
        pulumi.set(self, "all_of", value)


