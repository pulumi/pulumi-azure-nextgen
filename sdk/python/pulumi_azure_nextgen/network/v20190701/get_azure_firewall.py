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
    'GetAzureFirewallResult',
    'AwaitableGetAzureFirewallResult',
    'get_azure_firewall',
]

@pulumi.output_type
class GetAzureFirewallResult:
    """
    Azure Firewall resource.
    """
    def __init__(__self__, application_rule_collections=None, etag=None, firewall_policy=None, hub_ip_addresses=None, id=None, ip_configurations=None, location=None, name=None, nat_rule_collections=None, network_rule_collections=None, provisioning_state=None, tags=None, threat_intel_mode=None, type=None, virtual_hub=None, zones=None):
        if application_rule_collections and not isinstance(application_rule_collections, list):
            raise TypeError("Expected argument 'application_rule_collections' to be a list")
        pulumi.set(__self__, "application_rule_collections", application_rule_collections)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if firewall_policy and not isinstance(firewall_policy, dict):
            raise TypeError("Expected argument 'firewall_policy' to be a dict")
        pulumi.set(__self__, "firewall_policy", firewall_policy)
        if hub_ip_addresses and not isinstance(hub_ip_addresses, dict):
            raise TypeError("Expected argument 'hub_ip_addresses' to be a dict")
        pulumi.set(__self__, "hub_ip_addresses", hub_ip_addresses)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if ip_configurations and not isinstance(ip_configurations, list):
            raise TypeError("Expected argument 'ip_configurations' to be a list")
        pulumi.set(__self__, "ip_configurations", ip_configurations)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if nat_rule_collections and not isinstance(nat_rule_collections, list):
            raise TypeError("Expected argument 'nat_rule_collections' to be a list")
        pulumi.set(__self__, "nat_rule_collections", nat_rule_collections)
        if network_rule_collections and not isinstance(network_rule_collections, list):
            raise TypeError("Expected argument 'network_rule_collections' to be a list")
        pulumi.set(__self__, "network_rule_collections", network_rule_collections)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if threat_intel_mode and not isinstance(threat_intel_mode, str):
            raise TypeError("Expected argument 'threat_intel_mode' to be a str")
        pulumi.set(__self__, "threat_intel_mode", threat_intel_mode)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_hub and not isinstance(virtual_hub, dict):
            raise TypeError("Expected argument 'virtual_hub' to be a dict")
        pulumi.set(__self__, "virtual_hub", virtual_hub)
        if zones and not isinstance(zones, list):
            raise TypeError("Expected argument 'zones' to be a list")
        pulumi.set(__self__, "zones", zones)

    @property
    @pulumi.getter(name="applicationRuleCollections")
    def application_rule_collections(self) -> Optional[Sequence['outputs.AzureFirewallApplicationRuleCollectionResponse']]:
        """
        Collection of application rule collections used by Azure Firewall.
        """
        return pulumi.get(self, "application_rule_collections")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="firewallPolicy")
    def firewall_policy(self) -> Optional['outputs.SubResourceResponse']:
        """
        The firewallPolicy associated with this azure firewall.
        """
        return pulumi.get(self, "firewall_policy")

    @property
    @pulumi.getter(name="hubIpAddresses")
    def hub_ip_addresses(self) -> 'outputs.HubIPAddressesResponse':
        """
        IP addresses associated with AzureFirewall.
        """
        return pulumi.get(self, "hub_ip_addresses")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="ipConfigurations")
    def ip_configurations(self) -> Optional[Sequence['outputs.AzureFirewallIPConfigurationResponse']]:
        """
        IP configuration of the Azure Firewall resource.
        """
        return pulumi.get(self, "ip_configurations")

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
    @pulumi.getter(name="natRuleCollections")
    def nat_rule_collections(self) -> Optional[Sequence['outputs.AzureFirewallNatRuleCollectionResponse']]:
        """
        Collection of NAT rule collections used by Azure Firewall.
        """
        return pulumi.get(self, "nat_rule_collections")

    @property
    @pulumi.getter(name="networkRuleCollections")
    def network_rule_collections(self) -> Optional[Sequence['outputs.AzureFirewallNetworkRuleCollectionResponse']]:
        """
        Collection of network rule collections used by Azure Firewall.
        """
        return pulumi.get(self, "network_rule_collections")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the Azure firewall resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="threatIntelMode")
    def threat_intel_mode(self) -> Optional[str]:
        """
        The operation mode for Threat Intelligence.
        """
        return pulumi.get(self, "threat_intel_mode")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualHub")
    def virtual_hub(self) -> Optional['outputs.SubResourceResponse']:
        """
        The virtualHub to which the firewall belongs.
        """
        return pulumi.get(self, "virtual_hub")

    @property
    @pulumi.getter
    def zones(self) -> Optional[Sequence[str]]:
        """
        A list of availability zones denoting where the resource needs to come from.
        """
        return pulumi.get(self, "zones")


class AwaitableGetAzureFirewallResult(GetAzureFirewallResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAzureFirewallResult(
            application_rule_collections=self.application_rule_collections,
            etag=self.etag,
            firewall_policy=self.firewall_policy,
            hub_ip_addresses=self.hub_ip_addresses,
            id=self.id,
            ip_configurations=self.ip_configurations,
            location=self.location,
            name=self.name,
            nat_rule_collections=self.nat_rule_collections,
            network_rule_collections=self.network_rule_collections,
            provisioning_state=self.provisioning_state,
            tags=self.tags,
            threat_intel_mode=self.threat_intel_mode,
            type=self.type,
            virtual_hub=self.virtual_hub,
            zones=self.zones)


def get_azure_firewall(azure_firewall_name: Optional[str] = None,
                       resource_group_name: Optional[str] = None,
                       opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetAzureFirewallResult:
    """
    Use this data source to access information about an existing resource.

    :param str azure_firewall_name: The name of the Azure Firewall.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['azureFirewallName'] = azure_firewall_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190701:getAzureFirewall', __args__, opts=opts, typ=GetAzureFirewallResult).value

    return AwaitableGetAzureFirewallResult(
        application_rule_collections=__ret__.application_rule_collections,
        etag=__ret__.etag,
        firewall_policy=__ret__.firewall_policy,
        hub_ip_addresses=__ret__.hub_ip_addresses,
        id=__ret__.id,
        ip_configurations=__ret__.ip_configurations,
        location=__ret__.location,
        name=__ret__.name,
        nat_rule_collections=__ret__.nat_rule_collections,
        network_rule_collections=__ret__.network_rule_collections,
        provisioning_state=__ret__.provisioning_state,
        tags=__ret__.tags,
        threat_intel_mode=__ret__.threat_intel_mode,
        type=__ret__.type,
        virtual_hub=__ret__.virtual_hub,
        zones=__ret__.zones)
