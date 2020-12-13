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
from ._inputs import *

__all__ = ['VpnServerConfiguration']


class VpnServerConfiguration(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 aad_authentication_parameters: Optional[pulumi.Input[pulumi.InputType['AadAuthenticationParametersArgs']]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 radius_client_root_certificates: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigRadiusClientRootCertificateArgs']]]]] = None,
                 radius_server_address: Optional[pulumi.Input[str]] = None,
                 radius_server_root_certificates: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigRadiusServerRootCertificateArgs']]]]] = None,
                 radius_server_secret: Optional[pulumi.Input[str]] = None,
                 radius_servers: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RadiusServerArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 vpn_authentication_types: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'VpnAuthenticationType']]]]] = None,
                 vpn_client_ipsec_policies: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['IpsecPolicyArgs']]]]] = None,
                 vpn_client_revoked_certificates: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigVpnClientRevokedCertificateArgs']]]]] = None,
                 vpn_client_root_certificates: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigVpnClientRootCertificateArgs']]]]] = None,
                 vpn_protocols: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'VpnGatewayTunnelingProtocol']]]]] = None,
                 vpn_server_configuration_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        VpnServerConfiguration Resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[pulumi.InputType['AadAuthenticationParametersArgs']] aad_authentication_parameters: The set of aad vpn authentication parameters.
        :param pulumi.Input[str] id: Resource ID.
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[str] name: The name of the VpnServerConfiguration that is unique within a resource group.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigRadiusClientRootCertificateArgs']]]] radius_client_root_certificates: Radius client root certificate of VpnServerConfiguration.
        :param pulumi.Input[str] radius_server_address: The radius server address property of the VpnServerConfiguration resource for point to site client connection.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigRadiusServerRootCertificateArgs']]]] radius_server_root_certificates: Radius Server root certificate of VpnServerConfiguration.
        :param pulumi.Input[str] radius_server_secret: The radius secret property of the VpnServerConfiguration resource for point to site client connection.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RadiusServerArgs']]]] radius_servers: Multiple Radius Server configuration for VpnServerConfiguration.
        :param pulumi.Input[str] resource_group_name: The resource group name of the VpnServerConfiguration.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'VpnAuthenticationType']]]] vpn_authentication_types: VPN authentication types for the VpnServerConfiguration.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['IpsecPolicyArgs']]]] vpn_client_ipsec_policies: VpnClientIpsecPolicies for VpnServerConfiguration.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigVpnClientRevokedCertificateArgs']]]] vpn_client_revoked_certificates: VPN client revoked certificate of VpnServerConfiguration.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['VpnServerConfigVpnClientRootCertificateArgs']]]] vpn_client_root_certificates: VPN client root certificate of VpnServerConfiguration.
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'VpnGatewayTunnelingProtocol']]]] vpn_protocols: VPN protocols for the VpnServerConfiguration.
        :param pulumi.Input[str] vpn_server_configuration_name: The name of the VpnServerConfiguration being created or updated.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['aad_authentication_parameters'] = aad_authentication_parameters
            __props__['id'] = id
            __props__['location'] = location
            __props__['name'] = name
            __props__['radius_client_root_certificates'] = radius_client_root_certificates
            __props__['radius_server_address'] = radius_server_address
            __props__['radius_server_root_certificates'] = radius_server_root_certificates
            __props__['radius_server_secret'] = radius_server_secret
            __props__['radius_servers'] = radius_servers
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['vpn_authentication_types'] = vpn_authentication_types
            __props__['vpn_client_ipsec_policies'] = vpn_client_ipsec_policies
            __props__['vpn_client_revoked_certificates'] = vpn_client_revoked_certificates
            __props__['vpn_client_root_certificates'] = vpn_client_root_certificates
            __props__['vpn_protocols'] = vpn_protocols
            if vpn_server_configuration_name is None and not opts.urn:
                raise TypeError("Missing required property 'vpn_server_configuration_name'")
            __props__['vpn_server_configuration_name'] = vpn_server_configuration_name
            __props__['etag'] = None
            __props__['p2_s_vpn_gateways'] = None
            __props__['provisioning_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20190801:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20190901:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20191101:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20191201:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20200301:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20200401:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20200501:VpnServerConfiguration"), pulumi.Alias(type_="azure-nextgen:network/v20200601:VpnServerConfiguration")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(VpnServerConfiguration, __self__).__init__(
            'azure-nextgen:network/v20200701:VpnServerConfiguration',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'VpnServerConfiguration':
        """
        Get an existing VpnServerConfiguration resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return VpnServerConfiguration(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="aadAuthenticationParameters")
    def aad_authentication_parameters(self) -> pulumi.Output[Optional['outputs.AadAuthenticationParametersResponse']]:
        """
        The set of aad vpn authentication parameters.
        """
        return pulumi.get(self, "aad_authentication_parameters")

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[str]:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="p2SVpnGateways")
    def p2_s_vpn_gateways(self) -> pulumi.Output[Sequence['outputs.P2SVpnGatewayResponse']]:
        """
        List of references to P2SVpnGateways.
        """
        return pulumi.get(self, "p2_s_vpn_gateways")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="radiusClientRootCertificates")
    def radius_client_root_certificates(self) -> pulumi.Output[Optional[Sequence['outputs.VpnServerConfigRadiusClientRootCertificateResponse']]]:
        """
        Radius client root certificate of VpnServerConfiguration.
        """
        return pulumi.get(self, "radius_client_root_certificates")

    @property
    @pulumi.getter(name="radiusServerAddress")
    def radius_server_address(self) -> pulumi.Output[Optional[str]]:
        """
        The radius server address property of the VpnServerConfiguration resource for point to site client connection.
        """
        return pulumi.get(self, "radius_server_address")

    @property
    @pulumi.getter(name="radiusServerRootCertificates")
    def radius_server_root_certificates(self) -> pulumi.Output[Optional[Sequence['outputs.VpnServerConfigRadiusServerRootCertificateResponse']]]:
        """
        Radius Server root certificate of VpnServerConfiguration.
        """
        return pulumi.get(self, "radius_server_root_certificates")

    @property
    @pulumi.getter(name="radiusServerSecret")
    def radius_server_secret(self) -> pulumi.Output[Optional[str]]:
        """
        The radius secret property of the VpnServerConfiguration resource for point to site client connection.
        """
        return pulumi.get(self, "radius_server_secret")

    @property
    @pulumi.getter(name="radiusServers")
    def radius_servers(self) -> pulumi.Output[Optional[Sequence['outputs.RadiusServerResponse']]]:
        """
        Multiple Radius Server configuration for VpnServerConfiguration.
        """
        return pulumi.get(self, "radius_servers")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="vpnAuthenticationTypes")
    def vpn_authentication_types(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        VPN authentication types for the VpnServerConfiguration.
        """
        return pulumi.get(self, "vpn_authentication_types")

    @property
    @pulumi.getter(name="vpnClientIpsecPolicies")
    def vpn_client_ipsec_policies(self) -> pulumi.Output[Optional[Sequence['outputs.IpsecPolicyResponse']]]:
        """
        VpnClientIpsecPolicies for VpnServerConfiguration.
        """
        return pulumi.get(self, "vpn_client_ipsec_policies")

    @property
    @pulumi.getter(name="vpnClientRevokedCertificates")
    def vpn_client_revoked_certificates(self) -> pulumi.Output[Optional[Sequence['outputs.VpnServerConfigVpnClientRevokedCertificateResponse']]]:
        """
        VPN client revoked certificate of VpnServerConfiguration.
        """
        return pulumi.get(self, "vpn_client_revoked_certificates")

    @property
    @pulumi.getter(name="vpnClientRootCertificates")
    def vpn_client_root_certificates(self) -> pulumi.Output[Optional[Sequence['outputs.VpnServerConfigVpnClientRootCertificateResponse']]]:
        """
        VPN client root certificate of VpnServerConfiguration.
        """
        return pulumi.get(self, "vpn_client_root_certificates")

    @property
    @pulumi.getter(name="vpnProtocols")
    def vpn_protocols(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        VPN protocols for the VpnServerConfiguration.
        """
        return pulumi.get(self, "vpn_protocols")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

