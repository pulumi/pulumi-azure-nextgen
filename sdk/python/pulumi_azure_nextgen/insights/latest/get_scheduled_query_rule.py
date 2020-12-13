# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetScheduledQueryRuleResult',
    'AwaitableGetScheduledQueryRuleResult',
    'get_scheduled_query_rule',
]

@pulumi.output_type
class GetScheduledQueryRuleResult:
    """
    The Log Search Rule resource.
    """
    def __init__(__self__, action=None, description=None, enabled=None, id=None, last_updated_time=None, location=None, name=None, provisioning_state=None, schedule=None, source=None, tags=None, type=None):
        if action and not isinstance(action, dict):
            raise TypeError("Expected argument 'action' to be a dict")
        pulumi.set(__self__, "action", action)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if enabled and not isinstance(enabled, str):
            raise TypeError("Expected argument 'enabled' to be a str")
        pulumi.set(__self__, "enabled", enabled)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if last_updated_time and not isinstance(last_updated_time, str):
            raise TypeError("Expected argument 'last_updated_time' to be a str")
        pulumi.set(__self__, "last_updated_time", last_updated_time)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if schedule and not isinstance(schedule, dict):
            raise TypeError("Expected argument 'schedule' to be a dict")
        pulumi.set(__self__, "schedule", schedule)
        if source and not isinstance(source, dict):
            raise TypeError("Expected argument 'source' to be a dict")
        pulumi.set(__self__, "source", source)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def action(self) -> Any:
        """
        Action needs to be taken on rule execution.
        """
        return pulumi.get(self, "action")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        The description of the Log Search rule.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[str]:
        """
        The flag which indicates whether the Log Search rule is enabled. Value should be true or false
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="lastUpdatedTime")
    def last_updated_time(self) -> str:
        """
        Last time the rule was updated in IS08601 format.
        """
        return pulumi.get(self, "last_updated_time")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the scheduled query rule
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def schedule(self) -> Optional['outputs.ScheduleResponse']:
        """
        Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
        """
        return pulumi.get(self, "schedule")

    @property
    @pulumi.getter
    def source(self) -> 'outputs.SourceResponse':
        """
        Data Source against which rule will Query Data
        """
        return pulumi.get(self, "source")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetScheduledQueryRuleResult(GetScheduledQueryRuleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetScheduledQueryRuleResult(
            action=self.action,
            description=self.description,
            enabled=self.enabled,
            id=self.id,
            last_updated_time=self.last_updated_time,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            schedule=self.schedule,
            source=self.source,
            tags=self.tags,
            type=self.type)


def get_scheduled_query_rule(resource_group_name: Optional[str] = None,
                             rule_name: Optional[str] = None,
                             opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetScheduledQueryRuleResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group.
    :param str rule_name: The name of the rule.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['ruleName'] = rule_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:insights/latest:getScheduledQueryRule', __args__, opts=opts, typ=GetScheduledQueryRuleResult).value

    return AwaitableGetScheduledQueryRuleResult(
        action=__ret__.action,
        description=__ret__.description,
        enabled=__ret__.enabled,
        id=__ret__.id,
        last_updated_time=__ret__.last_updated_time,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        schedule=__ret__.schedule,
        source=__ret__.source,
        tags=__ret__.tags,
        type=__ret__.type)
