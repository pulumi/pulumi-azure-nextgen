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

__all__ = ['ExpressRouteCrossConnectionPeering']


class ExpressRouteCrossConnectionPeering(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 cross_connection_name: Optional[pulumi.Input[str]] = None,
                 gateway_manager_etag: Optional[pulumi.Input[str]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 ipv6_peering_config: Optional[pulumi.Input[pulumi.InputType['Ipv6ExpressRouteCircuitPeeringConfigArgs']]] = None,
                 microsoft_peering_config: Optional[pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringConfigArgs']]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 peer_asn: Optional[pulumi.Input[int]] = None,
                 peering_name: Optional[pulumi.Input[str]] = None,
                 peering_type: Optional[pulumi.Input[Union[str, 'ExpressRoutePeeringType']]] = None,
                 primary_peer_address_prefix: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 secondary_peer_address_prefix: Optional[pulumi.Input[str]] = None,
                 shared_key: Optional[pulumi.Input[str]] = None,
                 state: Optional[pulumi.Input[Union[str, 'ExpressRoutePeeringState']]] = None,
                 vlan_id: Optional[pulumi.Input[int]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Peering in an ExpressRoute Cross Connection resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cross_connection_name: The name of the ExpressRouteCrossConnection.
        :param pulumi.Input[str] gateway_manager_etag: The GatewayManager Etag.
        :param pulumi.Input[str] id: Resource ID.
        :param pulumi.Input[pulumi.InputType['Ipv6ExpressRouteCircuitPeeringConfigArgs']] ipv6_peering_config: The IPv6 peering configuration.
        :param pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringConfigArgs']] microsoft_peering_config: The Microsoft peering configuration.
        :param pulumi.Input[str] name: The name of the resource that is unique within a resource group. This name can be used to access the resource.
        :param pulumi.Input[int] peer_asn: The peer ASN.
        :param pulumi.Input[str] peering_name: The name of the peering.
        :param pulumi.Input[Union[str, 'ExpressRoutePeeringType']] peering_type: The peering type.
        :param pulumi.Input[str] primary_peer_address_prefix: The primary address prefix.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] secondary_peer_address_prefix: The secondary address prefix.
        :param pulumi.Input[str] shared_key: The shared key.
        :param pulumi.Input[Union[str, 'ExpressRoutePeeringState']] state: The peering state.
        :param pulumi.Input[int] vlan_id: The VLAN ID.
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

            if cross_connection_name is None and not opts.urn:
                raise TypeError("Missing required property 'cross_connection_name'")
            __props__['cross_connection_name'] = cross_connection_name
            __props__['gateway_manager_etag'] = gateway_manager_etag
            __props__['id'] = id
            __props__['ipv6_peering_config'] = ipv6_peering_config
            __props__['microsoft_peering_config'] = microsoft_peering_config
            __props__['name'] = name
            __props__['peer_asn'] = peer_asn
            if peering_name is None and not opts.urn:
                raise TypeError("Missing required property 'peering_name'")
            __props__['peering_name'] = peering_name
            __props__['peering_type'] = peering_type
            __props__['primary_peer_address_prefix'] = primary_peer_address_prefix
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['secondary_peer_address_prefix'] = secondary_peer_address_prefix
            __props__['shared_key'] = shared_key
            __props__['state'] = state
            __props__['vlan_id'] = vlan_id
            __props__['azure_asn'] = None
            __props__['etag'] = None
            __props__['last_modified_by'] = None
            __props__['primary_azure_port'] = None
            __props__['provisioning_state'] = None
            __props__['secondary_azure_port'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20180201:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20180401:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20180601:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20180701:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20180801:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20181001:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20181101:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20181201:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190201:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190401:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190601:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190701:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190801:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20190901:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20191101:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20191201:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20200301:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20200401:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20200601:ExpressRouteCrossConnectionPeering"), pulumi.Alias(type_="azure-nextgen:network/v20200701:ExpressRouteCrossConnectionPeering")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ExpressRouteCrossConnectionPeering, __self__).__init__(
            'azure-nextgen:network/v20200501:ExpressRouteCrossConnectionPeering',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ExpressRouteCrossConnectionPeering':
        """
        Get an existing ExpressRouteCrossConnectionPeering resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ExpressRouteCrossConnectionPeering(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="azureASN")
    def azure_asn(self) -> pulumi.Output[int]:
        """
        The Azure ASN.
        """
        return pulumi.get(self, "azure_asn")

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[str]:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="gatewayManagerEtag")
    def gateway_manager_etag(self) -> pulumi.Output[Optional[str]]:
        """
        The GatewayManager Etag.
        """
        return pulumi.get(self, "gateway_manager_etag")

    @property
    @pulumi.getter(name="ipv6PeeringConfig")
    def ipv6_peering_config(self) -> pulumi.Output[Optional['outputs.Ipv6ExpressRouteCircuitPeeringConfigResponse']]:
        """
        The IPv6 peering configuration.
        """
        return pulumi.get(self, "ipv6_peering_config")

    @property
    @pulumi.getter(name="lastModifiedBy")
    def last_modified_by(self) -> pulumi.Output[str]:
        """
        Who was the last to modify the peering.
        """
        return pulumi.get(self, "last_modified_by")

    @property
    @pulumi.getter(name="microsoftPeeringConfig")
    def microsoft_peering_config(self) -> pulumi.Output[Optional['outputs.ExpressRouteCircuitPeeringConfigResponse']]:
        """
        The Microsoft peering configuration.
        """
        return pulumi.get(self, "microsoft_peering_config")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="peerASN")
    def peer_asn(self) -> pulumi.Output[Optional[int]]:
        """
        The peer ASN.
        """
        return pulumi.get(self, "peer_asn")

    @property
    @pulumi.getter(name="peeringType")
    def peering_type(self) -> pulumi.Output[Optional[str]]:
        """
        The peering type.
        """
        return pulumi.get(self, "peering_type")

    @property
    @pulumi.getter(name="primaryAzurePort")
    def primary_azure_port(self) -> pulumi.Output[str]:
        """
        The primary port.
        """
        return pulumi.get(self, "primary_azure_port")

    @property
    @pulumi.getter(name="primaryPeerAddressPrefix")
    def primary_peer_address_prefix(self) -> pulumi.Output[Optional[str]]:
        """
        The primary address prefix.
        """
        return pulumi.get(self, "primary_peer_address_prefix")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the express route cross connection peering resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="secondaryAzurePort")
    def secondary_azure_port(self) -> pulumi.Output[str]:
        """
        The secondary port.
        """
        return pulumi.get(self, "secondary_azure_port")

    @property
    @pulumi.getter(name="secondaryPeerAddressPrefix")
    def secondary_peer_address_prefix(self) -> pulumi.Output[Optional[str]]:
        """
        The secondary address prefix.
        """
        return pulumi.get(self, "secondary_peer_address_prefix")

    @property
    @pulumi.getter(name="sharedKey")
    def shared_key(self) -> pulumi.Output[Optional[str]]:
        """
        The shared key.
        """
        return pulumi.get(self, "shared_key")

    @property
    @pulumi.getter
    def state(self) -> pulumi.Output[Optional[str]]:
        """
        The peering state.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="vlanId")
    def vlan_id(self) -> pulumi.Output[Optional[int]]:
        """
        The VLAN ID.
        """
        return pulumi.get(self, "vlan_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

