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
    'GetWebApplicationFirewallPolicyResult',
    'AwaitableGetWebApplicationFirewallPolicyResult',
    'get_web_application_firewall_policy',
]

@pulumi.output_type
class GetWebApplicationFirewallPolicyResult:
    """
    Defines web application firewall policy.
    """
    def __init__(__self__, application_gateways=None, custom_rules=None, etag=None, id=None, location=None, name=None, policy_settings=None, provisioning_state=None, resource_state=None, tags=None, type=None):
        if application_gateways and not isinstance(application_gateways, list):
            raise TypeError("Expected argument 'application_gateways' to be a list")
        pulumi.set(__self__, "application_gateways", application_gateways)
        if custom_rules and not isinstance(custom_rules, list):
            raise TypeError("Expected argument 'custom_rules' to be a list")
        pulumi.set(__self__, "custom_rules", custom_rules)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if policy_settings and not isinstance(policy_settings, dict):
            raise TypeError("Expected argument 'policy_settings' to be a dict")
        pulumi.set(__self__, "policy_settings", policy_settings)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if resource_state and not isinstance(resource_state, str):
            raise TypeError("Expected argument 'resource_state' to be a str")
        pulumi.set(__self__, "resource_state", resource_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="applicationGateways")
    def application_gateways(self) -> Sequence['outputs.ApplicationGatewayResponse']:
        """
        A collection of references to application gateways.
        """
        return pulumi.get(self, "application_gateways")

    @property
    @pulumi.getter(name="customRules")
    def custom_rules(self) -> Optional[Sequence['outputs.WebApplicationFirewallCustomRuleResponse']]:
        """
        Describes custom rules inside the policy.
        """
        return pulumi.get(self, "custom_rules")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Gets a unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="policySettings")
    def policy_settings(self) -> Optional['outputs.PolicySettingsResponse']:
        """
        Describes policySettings for policy.
        """
        return pulumi.get(self, "policy_settings")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the WebApplicationFirewallPolicy.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="resourceState")
    def resource_state(self) -> str:
        """
        Resource status of the policy.
        """
        return pulumi.get(self, "resource_state")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetWebApplicationFirewallPolicyResult(GetWebApplicationFirewallPolicyResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWebApplicationFirewallPolicyResult(
            application_gateways=self.application_gateways,
            custom_rules=self.custom_rules,
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            policy_settings=self.policy_settings,
            provisioning_state=self.provisioning_state,
            resource_state=self.resource_state,
            tags=self.tags,
            type=self.type)


def get_web_application_firewall_policy(policy_name: Optional[str] = None,
                                        resource_group_name: Optional[str] = None,
                                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWebApplicationFirewallPolicyResult:
    """
    Use this data source to access information about an existing resource.

    :param str policy_name: The name of the policy.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['policyName'] = policy_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190401:getWebApplicationFirewallPolicy', __args__, opts=opts, typ=GetWebApplicationFirewallPolicyResult).value

    return AwaitableGetWebApplicationFirewallPolicyResult(
        application_gateways=__ret__.application_gateways,
        custom_rules=__ret__.custom_rules,
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        policy_settings=__ret__.policy_settings,
        provisioning_state=__ret__.provisioning_state,
        resource_state=__ret__.resource_state,
        tags=__ret__.tags,
        type=__ret__.type)
