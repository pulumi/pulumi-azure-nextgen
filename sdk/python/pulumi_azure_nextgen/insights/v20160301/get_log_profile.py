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
    'GetLogProfileResult',
    'AwaitableGetLogProfileResult',
    'get_log_profile',
]

@pulumi.output_type
class GetLogProfileResult:
    """
    The log profile resource.
    """
    def __init__(__self__, categories=None, id=None, location=None, locations=None, name=None, retention_policy=None, service_bus_rule_id=None, storage_account_id=None, tags=None, type=None):
        if categories and not isinstance(categories, list):
            raise TypeError("Expected argument 'categories' to be a list")
        pulumi.set(__self__, "categories", categories)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if locations and not isinstance(locations, list):
            raise TypeError("Expected argument 'locations' to be a list")
        pulumi.set(__self__, "locations", locations)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if retention_policy and not isinstance(retention_policy, dict):
            raise TypeError("Expected argument 'retention_policy' to be a dict")
        pulumi.set(__self__, "retention_policy", retention_policy)
        if service_bus_rule_id and not isinstance(service_bus_rule_id, str):
            raise TypeError("Expected argument 'service_bus_rule_id' to be a str")
        pulumi.set(__self__, "service_bus_rule_id", service_bus_rule_id)
        if storage_account_id and not isinstance(storage_account_id, str):
            raise TypeError("Expected argument 'storage_account_id' to be a str")
        pulumi.set(__self__, "storage_account_id", storage_account_id)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def categories(self) -> Sequence[str]:
        """
        the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
        """
        return pulumi.get(self, "categories")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def locations(self) -> Sequence[str]:
        """
        List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
        """
        return pulumi.get(self, "locations")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="retentionPolicy")
    def retention_policy(self) -> 'outputs.RetentionPolicyResponse':
        """
        the retention policy for the events in the log.
        """
        return pulumi.get(self, "retention_policy")

    @property
    @pulumi.getter(name="serviceBusRuleId")
    def service_bus_rule_id(self) -> Optional[str]:
        """
        The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
        """
        return pulumi.get(self, "service_bus_rule_id")

    @property
    @pulumi.getter(name="storageAccountId")
    def storage_account_id(self) -> Optional[str]:
        """
        the resource id of the storage account to which you would like to send the Activity Log.
        """
        return pulumi.get(self, "storage_account_id")

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


class AwaitableGetLogProfileResult(GetLogProfileResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetLogProfileResult(
            categories=self.categories,
            id=self.id,
            location=self.location,
            locations=self.locations,
            name=self.name,
            retention_policy=self.retention_policy,
            service_bus_rule_id=self.service_bus_rule_id,
            storage_account_id=self.storage_account_id,
            tags=self.tags,
            type=self.type)


def get_log_profile(log_profile_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetLogProfileResult:
    """
    Use this data source to access information about an existing resource.

    :param str log_profile_name: The name of the log profile.
    """
    __args__ = dict()
    __args__['logProfileName'] = log_profile_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:insights/v20160301:getLogProfile', __args__, opts=opts, typ=GetLogProfileResult).value

    return AwaitableGetLogProfileResult(
        categories=__ret__.categories,
        id=__ret__.id,
        location=__ret__.location,
        locations=__ret__.locations,
        name=__ret__.name,
        retention_policy=__ret__.retention_policy,
        service_bus_rule_id=__ret__.service_bus_rule_id,
        storage_account_id=__ret__.storage_account_id,
        tags=__ret__.tags,
        type=__ret__.type)
