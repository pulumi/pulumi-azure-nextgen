# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetFirewallRuleResult',
    'AwaitableGetFirewallRuleResult',
    'get_firewall_rule',
]

@pulumi.output_type
class GetFirewallRuleResult:
    """
    Represents a server firewall rule.
    """
    def __init__(__self__, end_ip_address=None, id=None, kind=None, location=None, name=None, start_ip_address=None, type=None):
        if end_ip_address and not isinstance(end_ip_address, str):
            raise TypeError("Expected argument 'end_ip_address' to be a str")
        pulumi.set(__self__, "end_ip_address", end_ip_address)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if start_ip_address and not isinstance(start_ip_address, str):
            raise TypeError("Expected argument 'start_ip_address' to be a str")
        pulumi.set(__self__, "start_ip_address", start_ip_address)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="endIpAddress")
    def end_ip_address(self) -> str:
        """
        The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
        """
        return pulumi.get(self, "end_ip_address")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def kind(self) -> str:
        """
        Kind of server that contains this firewall rule.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Location of the server that contains this firewall rule.
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
    @pulumi.getter(name="startIpAddress")
    def start_ip_address(self) -> str:
        """
        The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
        """
        return pulumi.get(self, "start_ip_address")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetFirewallRuleResult(GetFirewallRuleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetFirewallRuleResult(
            end_ip_address=self.end_ip_address,
            id=self.id,
            kind=self.kind,
            location=self.location,
            name=self.name,
            start_ip_address=self.start_ip_address,
            type=self.type)


def get_firewall_rule(firewall_rule_name: Optional[str] = None,
                      resource_group_name: Optional[str] = None,
                      server_name: Optional[str] = None,
                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetFirewallRuleResult:
    """
    Use this data source to access information about an existing resource.

    :param str firewall_rule_name: The name of the firewall rule.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    :param str server_name: The name of the server.
    """
    __args__ = dict()
    __args__['firewallRuleName'] = firewall_rule_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['serverName'] = server_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/latest:getFirewallRule', __args__, opts=opts, typ=GetFirewallRuleResult).value

    return AwaitableGetFirewallRuleResult(
        end_ip_address=__ret__.end_ip_address,
        id=__ret__.id,
        kind=__ret__.kind,
        location=__ret__.location,
        name=__ret__.name,
        start_ip_address=__ret__.start_ip_address,
        type=__ret__.type)
