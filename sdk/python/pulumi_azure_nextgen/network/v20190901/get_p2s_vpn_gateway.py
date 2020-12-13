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
    'GetP2sVpnGatewayResult',
    'AwaitableGetP2sVpnGatewayResult',
    'get_p2s_vpn_gateway',
]

@pulumi.output_type
class GetP2sVpnGatewayResult:
    """
    P2SVpnGateway Resource.
    """
    def __init__(__self__, etag=None, id=None, location=None, name=None, p2_s_connection_configurations=None, provisioning_state=None, tags=None, type=None, virtual_hub=None, vpn_client_connection_health=None, vpn_gateway_scale_unit=None, vpn_server_configuration=None):
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
        if p2_s_connection_configurations and not isinstance(p2_s_connection_configurations, list):
            raise TypeError("Expected argument 'p2_s_connection_configurations' to be a list")
        pulumi.set(__self__, "p2_s_connection_configurations", p2_s_connection_configurations)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_hub and not isinstance(virtual_hub, dict):
            raise TypeError("Expected argument 'virtual_hub' to be a dict")
        pulumi.set(__self__, "virtual_hub", virtual_hub)
        if vpn_client_connection_health and not isinstance(vpn_client_connection_health, dict):
            raise TypeError("Expected argument 'vpn_client_connection_health' to be a dict")
        pulumi.set(__self__, "vpn_client_connection_health", vpn_client_connection_health)
        if vpn_gateway_scale_unit and not isinstance(vpn_gateway_scale_unit, int):
            raise TypeError("Expected argument 'vpn_gateway_scale_unit' to be a int")
        pulumi.set(__self__, "vpn_gateway_scale_unit", vpn_gateway_scale_unit)
        if vpn_server_configuration and not isinstance(vpn_server_configuration, dict):
            raise TypeError("Expected argument 'vpn_server_configuration' to be a dict")
        pulumi.set(__self__, "vpn_server_configuration", vpn_server_configuration)

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
    @pulumi.getter
    def location(self) -> str:
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
    @pulumi.getter(name="p2SConnectionConfigurations")
    def p2_s_connection_configurations(self) -> Optional[Sequence['outputs.P2SConnectionConfigurationResponse']]:
        """
        List of all p2s connection configurations of the gateway.
        """
        return pulumi.get(self, "p2_s_connection_configurations")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the P2S VPN gateway resource.
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
        The VirtualHub to which the gateway belongs.
        """
        return pulumi.get(self, "virtual_hub")

    @property
    @pulumi.getter(name="vpnClientConnectionHealth")
    def vpn_client_connection_health(self) -> 'outputs.VpnClientConnectionHealthResponse':
        """
        All P2S VPN clients' connection health status.
        """
        return pulumi.get(self, "vpn_client_connection_health")

    @property
    @pulumi.getter(name="vpnGatewayScaleUnit")
    def vpn_gateway_scale_unit(self) -> Optional[int]:
        """
        The scale unit for this p2s vpn gateway.
        """
        return pulumi.get(self, "vpn_gateway_scale_unit")

    @property
    @pulumi.getter(name="vpnServerConfiguration")
    def vpn_server_configuration(self) -> Optional['outputs.SubResourceResponse']:
        """
        The VpnServerConfiguration to which the p2sVpnGateway is attached to.
        """
        return pulumi.get(self, "vpn_server_configuration")


class AwaitableGetP2sVpnGatewayResult(GetP2sVpnGatewayResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetP2sVpnGatewayResult(
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            p2_s_connection_configurations=self.p2_s_connection_configurations,
            provisioning_state=self.provisioning_state,
            tags=self.tags,
            type=self.type,
            virtual_hub=self.virtual_hub,
            vpn_client_connection_health=self.vpn_client_connection_health,
            vpn_gateway_scale_unit=self.vpn_gateway_scale_unit,
            vpn_server_configuration=self.vpn_server_configuration)


def get_p2s_vpn_gateway(gateway_name: Optional[str] = None,
                        resource_group_name: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetP2sVpnGatewayResult:
    """
    Use this data source to access information about an existing resource.

    :param str gateway_name: The name of the gateway.
    :param str resource_group_name: The resource group name of the P2SVpnGateway.
    """
    __args__ = dict()
    __args__['gatewayName'] = gateway_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190901:getP2sVpnGateway', __args__, opts=opts, typ=GetP2sVpnGatewayResult).value

    return AwaitableGetP2sVpnGatewayResult(
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        p2_s_connection_configurations=__ret__.p2_s_connection_configurations,
        provisioning_state=__ret__.provisioning_state,
        tags=__ret__.tags,
        type=__ret__.type,
        virtual_hub=__ret__.virtual_hub,
        vpn_client_connection_health=__ret__.vpn_client_connection_health,
        vpn_gateway_scale_unit=__ret__.vpn_gateway_scale_unit,
        vpn_server_configuration=__ret__.vpn_server_configuration)
