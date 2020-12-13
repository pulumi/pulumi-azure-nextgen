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
    'GetSubnetResult',
    'AwaitableGetSubnetResult',
    'get_subnet',
]

@pulumi.output_type
class GetSubnetResult:
    """
    Subnet in a virtual network resource.
    """
    def __init__(__self__, address_prefix=None, address_prefixes=None, delegations=None, etag=None, id=None, interface_endpoints=None, ip_configuration_profiles=None, ip_configurations=None, name=None, nat_gateway=None, network_security_group=None, provisioning_state=None, purpose=None, resource_navigation_links=None, route_table=None, service_association_links=None, service_endpoint_policies=None, service_endpoints=None):
        if address_prefix and not isinstance(address_prefix, str):
            raise TypeError("Expected argument 'address_prefix' to be a str")
        pulumi.set(__self__, "address_prefix", address_prefix)
        if address_prefixes and not isinstance(address_prefixes, list):
            raise TypeError("Expected argument 'address_prefixes' to be a list")
        pulumi.set(__self__, "address_prefixes", address_prefixes)
        if delegations and not isinstance(delegations, list):
            raise TypeError("Expected argument 'delegations' to be a list")
        pulumi.set(__self__, "delegations", delegations)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if interface_endpoints and not isinstance(interface_endpoints, list):
            raise TypeError("Expected argument 'interface_endpoints' to be a list")
        pulumi.set(__self__, "interface_endpoints", interface_endpoints)
        if ip_configuration_profiles and not isinstance(ip_configuration_profiles, list):
            raise TypeError("Expected argument 'ip_configuration_profiles' to be a list")
        pulumi.set(__self__, "ip_configuration_profiles", ip_configuration_profiles)
        if ip_configurations and not isinstance(ip_configurations, list):
            raise TypeError("Expected argument 'ip_configurations' to be a list")
        pulumi.set(__self__, "ip_configurations", ip_configurations)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if nat_gateway and not isinstance(nat_gateway, dict):
            raise TypeError("Expected argument 'nat_gateway' to be a dict")
        pulumi.set(__self__, "nat_gateway", nat_gateway)
        if network_security_group and not isinstance(network_security_group, dict):
            raise TypeError("Expected argument 'network_security_group' to be a dict")
        pulumi.set(__self__, "network_security_group", network_security_group)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if purpose and not isinstance(purpose, str):
            raise TypeError("Expected argument 'purpose' to be a str")
        pulumi.set(__self__, "purpose", purpose)
        if resource_navigation_links and not isinstance(resource_navigation_links, list):
            raise TypeError("Expected argument 'resource_navigation_links' to be a list")
        pulumi.set(__self__, "resource_navigation_links", resource_navigation_links)
        if route_table and not isinstance(route_table, dict):
            raise TypeError("Expected argument 'route_table' to be a dict")
        pulumi.set(__self__, "route_table", route_table)
        if service_association_links and not isinstance(service_association_links, list):
            raise TypeError("Expected argument 'service_association_links' to be a list")
        pulumi.set(__self__, "service_association_links", service_association_links)
        if service_endpoint_policies and not isinstance(service_endpoint_policies, list):
            raise TypeError("Expected argument 'service_endpoint_policies' to be a list")
        pulumi.set(__self__, "service_endpoint_policies", service_endpoint_policies)
        if service_endpoints and not isinstance(service_endpoints, list):
            raise TypeError("Expected argument 'service_endpoints' to be a list")
        pulumi.set(__self__, "service_endpoints", service_endpoints)

    @property
    @pulumi.getter(name="addressPrefix")
    def address_prefix(self) -> Optional[str]:
        """
        The address prefix for the subnet.
        """
        return pulumi.get(self, "address_prefix")

    @property
    @pulumi.getter(name="addressPrefixes")
    def address_prefixes(self) -> Optional[Sequence[str]]:
        """
        List of  address prefixes for the subnet.
        """
        return pulumi.get(self, "address_prefixes")

    @property
    @pulumi.getter
    def delegations(self) -> Optional[Sequence['outputs.DelegationResponse']]:
        """
        Gets an array of references to the delegations on the subnet.
        """
        return pulumi.get(self, "delegations")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
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
    @pulumi.getter(name="interfaceEndpoints")
    def interface_endpoints(self) -> Sequence['outputs.InterfaceEndpointResponse']:
        """
        An array of references to interface endpoints 
        """
        return pulumi.get(self, "interface_endpoints")

    @property
    @pulumi.getter(name="ipConfigurationProfiles")
    def ip_configuration_profiles(self) -> Sequence['outputs.IPConfigurationProfileResponse']:
        """
        Array of IP configuration profiles which reference this subnet.
        """
        return pulumi.get(self, "ip_configuration_profiles")

    @property
    @pulumi.getter(name="ipConfigurations")
    def ip_configurations(self) -> Sequence['outputs.IPConfigurationResponse']:
        """
        Gets an array of references to the network interface IP configurations using subnet.
        """
        return pulumi.get(self, "ip_configurations")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="natGateway")
    def nat_gateway(self) -> Optional['outputs.SubResourceResponse']:
        """
        Nat gateway associated with this subnet.
        """
        return pulumi.get(self, "nat_gateway")

    @property
    @pulumi.getter(name="networkSecurityGroup")
    def network_security_group(self) -> Optional['outputs.NetworkSecurityGroupResponse']:
        """
        The reference of the NetworkSecurityGroup resource.
        """
        return pulumi.get(self, "network_security_group")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        The provisioning state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def purpose(self) -> str:
        """
        A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
        """
        return pulumi.get(self, "purpose")

    @property
    @pulumi.getter(name="resourceNavigationLinks")
    def resource_navigation_links(self) -> Optional[Sequence['outputs.ResourceNavigationLinkResponse']]:
        """
        Gets an array of references to the external resources using subnet.
        """
        return pulumi.get(self, "resource_navigation_links")

    @property
    @pulumi.getter(name="routeTable")
    def route_table(self) -> Optional['outputs.RouteTableResponse']:
        """
        The reference of the RouteTable resource.
        """
        return pulumi.get(self, "route_table")

    @property
    @pulumi.getter(name="serviceAssociationLinks")
    def service_association_links(self) -> Optional[Sequence['outputs.ServiceAssociationLinkResponse']]:
        """
        Gets an array of references to services injecting into this subnet.
        """
        return pulumi.get(self, "service_association_links")

    @property
    @pulumi.getter(name="serviceEndpointPolicies")
    def service_endpoint_policies(self) -> Optional[Sequence['outputs.ServiceEndpointPolicyResponse']]:
        """
        An array of service endpoint policies.
        """
        return pulumi.get(self, "service_endpoint_policies")

    @property
    @pulumi.getter(name="serviceEndpoints")
    def service_endpoints(self) -> Optional[Sequence['outputs.ServiceEndpointPropertiesFormatResponse']]:
        """
        An array of service endpoints.
        """
        return pulumi.get(self, "service_endpoints")


class AwaitableGetSubnetResult(GetSubnetResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetSubnetResult(
            address_prefix=self.address_prefix,
            address_prefixes=self.address_prefixes,
            delegations=self.delegations,
            etag=self.etag,
            id=self.id,
            interface_endpoints=self.interface_endpoints,
            ip_configuration_profiles=self.ip_configuration_profiles,
            ip_configurations=self.ip_configurations,
            name=self.name,
            nat_gateway=self.nat_gateway,
            network_security_group=self.network_security_group,
            provisioning_state=self.provisioning_state,
            purpose=self.purpose,
            resource_navigation_links=self.resource_navigation_links,
            route_table=self.route_table,
            service_association_links=self.service_association_links,
            service_endpoint_policies=self.service_endpoint_policies,
            service_endpoints=self.service_endpoints)


def get_subnet(expand: Optional[str] = None,
               resource_group_name: Optional[str] = None,
               subnet_name: Optional[str] = None,
               virtual_network_name: Optional[str] = None,
               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetSubnetResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Expands referenced resources.
    :param str resource_group_name: The name of the resource group.
    :param str subnet_name: The name of the subnet.
    :param str virtual_network_name: The name of the virtual network.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['resourceGroupName'] = resource_group_name
    __args__['subnetName'] = subnet_name
    __args__['virtualNetworkName'] = virtual_network_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190201:getSubnet', __args__, opts=opts, typ=GetSubnetResult).value

    return AwaitableGetSubnetResult(
        address_prefix=__ret__.address_prefix,
        address_prefixes=__ret__.address_prefixes,
        delegations=__ret__.delegations,
        etag=__ret__.etag,
        id=__ret__.id,
        interface_endpoints=__ret__.interface_endpoints,
        ip_configuration_profiles=__ret__.ip_configuration_profiles,
        ip_configurations=__ret__.ip_configurations,
        name=__ret__.name,
        nat_gateway=__ret__.nat_gateway,
        network_security_group=__ret__.network_security_group,
        provisioning_state=__ret__.provisioning_state,
        purpose=__ret__.purpose,
        resource_navigation_links=__ret__.resource_navigation_links,
        route_table=__ret__.route_table,
        service_association_links=__ret__.service_association_links,
        service_endpoint_policies=__ret__.service_endpoint_policies,
        service_endpoints=__ret__.service_endpoints)
