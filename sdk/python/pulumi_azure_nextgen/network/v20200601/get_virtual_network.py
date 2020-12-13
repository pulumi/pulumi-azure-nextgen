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
    'GetVirtualNetworkResult',
    'AwaitableGetVirtualNetworkResult',
    'get_virtual_network',
]

@pulumi.output_type
class GetVirtualNetworkResult:
    """
    Virtual Network resource.
    """
    def __init__(__self__, address_space=None, bgp_communities=None, ddos_protection_plan=None, dhcp_options=None, enable_ddos_protection=None, enable_vm_protection=None, etag=None, id=None, ip_allocations=None, location=None, name=None, provisioning_state=None, resource_guid=None, subnets=None, tags=None, type=None, virtual_network_peerings=None):
        if address_space and not isinstance(address_space, dict):
            raise TypeError("Expected argument 'address_space' to be a dict")
        pulumi.set(__self__, "address_space", address_space)
        if bgp_communities and not isinstance(bgp_communities, dict):
            raise TypeError("Expected argument 'bgp_communities' to be a dict")
        pulumi.set(__self__, "bgp_communities", bgp_communities)
        if ddos_protection_plan and not isinstance(ddos_protection_plan, dict):
            raise TypeError("Expected argument 'ddos_protection_plan' to be a dict")
        pulumi.set(__self__, "ddos_protection_plan", ddos_protection_plan)
        if dhcp_options and not isinstance(dhcp_options, dict):
            raise TypeError("Expected argument 'dhcp_options' to be a dict")
        pulumi.set(__self__, "dhcp_options", dhcp_options)
        if enable_ddos_protection and not isinstance(enable_ddos_protection, bool):
            raise TypeError("Expected argument 'enable_ddos_protection' to be a bool")
        pulumi.set(__self__, "enable_ddos_protection", enable_ddos_protection)
        if enable_vm_protection and not isinstance(enable_vm_protection, bool):
            raise TypeError("Expected argument 'enable_vm_protection' to be a bool")
        pulumi.set(__self__, "enable_vm_protection", enable_vm_protection)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if ip_allocations and not isinstance(ip_allocations, list):
            raise TypeError("Expected argument 'ip_allocations' to be a list")
        pulumi.set(__self__, "ip_allocations", ip_allocations)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        pulumi.set(__self__, "resource_guid", resource_guid)
        if subnets and not isinstance(subnets, list):
            raise TypeError("Expected argument 'subnets' to be a list")
        pulumi.set(__self__, "subnets", subnets)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_network_peerings and not isinstance(virtual_network_peerings, list):
            raise TypeError("Expected argument 'virtual_network_peerings' to be a list")
        pulumi.set(__self__, "virtual_network_peerings", virtual_network_peerings)

    @property
    @pulumi.getter(name="addressSpace")
    def address_space(self) -> Optional['outputs.AddressSpaceResponse']:
        """
        The AddressSpace that contains an array of IP address ranges that can be used by subnets.
        """
        return pulumi.get(self, "address_space")

    @property
    @pulumi.getter(name="bgpCommunities")
    def bgp_communities(self) -> Optional['outputs.VirtualNetworkBgpCommunitiesResponse']:
        """
        Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
        """
        return pulumi.get(self, "bgp_communities")

    @property
    @pulumi.getter(name="ddosProtectionPlan")
    def ddos_protection_plan(self) -> Optional['outputs.SubResourceResponse']:
        """
        The DDoS protection plan associated with the virtual network.
        """
        return pulumi.get(self, "ddos_protection_plan")

    @property
    @pulumi.getter(name="dhcpOptions")
    def dhcp_options(self) -> Optional['outputs.DhcpOptionsResponse']:
        """
        The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
        """
        return pulumi.get(self, "dhcp_options")

    @property
    @pulumi.getter(name="enableDdosProtection")
    def enable_ddos_protection(self) -> Optional[bool]:
        """
        Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
        """
        return pulumi.get(self, "enable_ddos_protection")

    @property
    @pulumi.getter(name="enableVmProtection")
    def enable_vm_protection(self) -> Optional[bool]:
        """
        Indicates if VM protection is enabled for all the subnets in the virtual network.
        """
        return pulumi.get(self, "enable_vm_protection")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        A unique read-only string that changes whenever the resource is updated.
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
    @pulumi.getter(name="ipAllocations")
    def ip_allocations(self) -> Optional[Sequence['outputs.SubResourceResponse']]:
        """
        Array of IpAllocation which reference this VNET.
        """
        return pulumi.get(self, "ip_allocations")

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
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the virtual network resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="resourceGuid")
    def resource_guid(self) -> str:
        """
        The resourceGuid property of the Virtual Network resource.
        """
        return pulumi.get(self, "resource_guid")

    @property
    @pulumi.getter
    def subnets(self) -> Optional[Sequence['outputs.SubnetResponse']]:
        """
        A list of subnets in a Virtual Network.
        """
        return pulumi.get(self, "subnets")

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

    @property
    @pulumi.getter(name="virtualNetworkPeerings")
    def virtual_network_peerings(self) -> Optional[Sequence['outputs.VirtualNetworkPeeringResponse']]:
        """
        A list of peerings in a Virtual Network.
        """
        return pulumi.get(self, "virtual_network_peerings")


class AwaitableGetVirtualNetworkResult(GetVirtualNetworkResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualNetworkResult(
            address_space=self.address_space,
            bgp_communities=self.bgp_communities,
            ddos_protection_plan=self.ddos_protection_plan,
            dhcp_options=self.dhcp_options,
            enable_ddos_protection=self.enable_ddos_protection,
            enable_vm_protection=self.enable_vm_protection,
            etag=self.etag,
            id=self.id,
            ip_allocations=self.ip_allocations,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            resource_guid=self.resource_guid,
            subnets=self.subnets,
            tags=self.tags,
            type=self.type,
            virtual_network_peerings=self.virtual_network_peerings)


def get_virtual_network(expand: Optional[str] = None,
                        resource_group_name: Optional[str] = None,
                        virtual_network_name: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualNetworkResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Expands referenced resources.
    :param str resource_group_name: The name of the resource group.
    :param str virtual_network_name: The name of the virtual network.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['resourceGroupName'] = resource_group_name
    __args__['virtualNetworkName'] = virtual_network_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20200601:getVirtualNetwork', __args__, opts=opts, typ=GetVirtualNetworkResult).value

    return AwaitableGetVirtualNetworkResult(
        address_space=__ret__.address_space,
        bgp_communities=__ret__.bgp_communities,
        ddos_protection_plan=__ret__.ddos_protection_plan,
        dhcp_options=__ret__.dhcp_options,
        enable_ddos_protection=__ret__.enable_ddos_protection,
        enable_vm_protection=__ret__.enable_vm_protection,
        etag=__ret__.etag,
        id=__ret__.id,
        ip_allocations=__ret__.ip_allocations,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        resource_guid=__ret__.resource_guid,
        subnets=__ret__.subnets,
        tags=__ret__.tags,
        type=__ret__.type,
        virtual_network_peerings=__ret__.virtual_network_peerings)
