# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['HubVirtualNetworkConnection']


class HubVirtualNetworkConnection(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 allow_hub_to_remote_vnet_transit: Optional[pulumi.Input[bool]] = None,
                 allow_remote_vnet_to_use_hub_vnet_gateways: Optional[pulumi.Input[bool]] = None,
                 connection_name: Optional[pulumi.Input[str]] = None,
                 enable_internet_security: Optional[pulumi.Input[bool]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 remote_virtual_network: Optional[pulumi.Input[pulumi.InputType['SubResourceArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 routing_configuration: Optional[pulumi.Input[pulumi.InputType['RoutingConfigurationArgs']]] = None,
                 virtual_hub_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        HubVirtualNetworkConnection Resource.
        Latest API Version: 2020-07-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] allow_hub_to_remote_vnet_transit: Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
        :param pulumi.Input[bool] allow_remote_vnet_to_use_hub_vnet_gateways: Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
        :param pulumi.Input[str] connection_name: The name of the HubVirtualNetworkConnection.
        :param pulumi.Input[bool] enable_internet_security: Enable internet security.
        :param pulumi.Input[str] id: Resource ID.
        :param pulumi.Input[str] name: The name of the resource that is unique within a resource group. This name can be used to access the resource.
        :param pulumi.Input[pulumi.InputType['SubResourceArgs']] remote_virtual_network: Reference to the remote virtual network.
        :param pulumi.Input[str] resource_group_name: The resource group name of the HubVirtualNetworkConnection.
        :param pulumi.Input[pulumi.InputType['RoutingConfigurationArgs']] routing_configuration: The Routing Configuration indicating the associated and propagated route tables on this connection.
        :param pulumi.Input[str] virtual_hub_name: The name of the VirtualHub.
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

            __props__['allow_hub_to_remote_vnet_transit'] = allow_hub_to_remote_vnet_transit
            __props__['allow_remote_vnet_to_use_hub_vnet_gateways'] = allow_remote_vnet_to_use_hub_vnet_gateways
            if connection_name is None and not opts.urn:
                raise TypeError("Missing required property 'connection_name'")
            __props__['connection_name'] = connection_name
            __props__['enable_internet_security'] = enable_internet_security
            __props__['id'] = id
            __props__['name'] = name
            __props__['remote_virtual_network'] = remote_virtual_network
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['routing_configuration'] = routing_configuration
            if virtual_hub_name is None and not opts.urn:
                raise TypeError("Missing required property 'virtual_hub_name'")
            __props__['virtual_hub_name'] = virtual_hub_name
            __props__['etag'] = None
            __props__['provisioning_state'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/v20200501:HubVirtualNetworkConnection"), pulumi.Alias(type_="azure-nextgen:network/v20200601:HubVirtualNetworkConnection"), pulumi.Alias(type_="azure-nextgen:network/v20200701:HubVirtualNetworkConnection")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(HubVirtualNetworkConnection, __self__).__init__(
            'azure-nextgen:network/latest:HubVirtualNetworkConnection',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'HubVirtualNetworkConnection':
        """
        Get an existing HubVirtualNetworkConnection resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return HubVirtualNetworkConnection(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="allowHubToRemoteVnetTransit")
    def allow_hub_to_remote_vnet_transit(self) -> pulumi.Output[Optional[bool]]:
        """
        Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
        """
        return pulumi.get(self, "allow_hub_to_remote_vnet_transit")

    @property
    @pulumi.getter(name="allowRemoteVnetToUseHubVnetGateways")
    def allow_remote_vnet_to_use_hub_vnet_gateways(self) -> pulumi.Output[Optional[bool]]:
        """
        Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
        """
        return pulumi.get(self, "allow_remote_vnet_to_use_hub_vnet_gateways")

    @property
    @pulumi.getter(name="enableInternetSecurity")
    def enable_internet_security(self) -> pulumi.Output[Optional[bool]]:
        """
        Enable internet security.
        """
        return pulumi.get(self, "enable_internet_security")

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[str]:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the hub virtual network connection resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="remoteVirtualNetwork")
    def remote_virtual_network(self) -> pulumi.Output[Optional['outputs.SubResourceResponse']]:
        """
        Reference to the remote virtual network.
        """
        return pulumi.get(self, "remote_virtual_network")

    @property
    @pulumi.getter(name="routingConfiguration")
    def routing_configuration(self) -> pulumi.Output[Optional['outputs.RoutingConfigurationResponse']]:
        """
        The Routing Configuration indicating the associated and propagated route tables on this connection.
        """
        return pulumi.get(self, "routing_configuration")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

