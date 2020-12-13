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

__all__ = ['VirtualNetworkLink']


class VirtualNetworkLink(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 etag: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 private_zone_name: Optional[pulumi.Input[str]] = None,
                 registration_enabled: Optional[pulumi.Input[bool]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 virtual_network: Optional[pulumi.Input[pulumi.InputType['SubResourceArgs']]] = None,
                 virtual_network_link_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Describes a link to virtual network for a Private DNS zone.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] etag: The ETag of the virtual network link.
        :param pulumi.Input[str] location: The Azure Region where the resource lives
        :param pulumi.Input[str] private_zone_name: The name of the Private DNS zone (without a terminating dot).
        :param pulumi.Input[bool] registration_enabled: Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
        :param pulumi.Input[pulumi.InputType['SubResourceArgs']] virtual_network: The reference of the virtual network.
        :param pulumi.Input[str] virtual_network_link_name: The name of the virtual network link.
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

            __props__['etag'] = etag
            __props__['location'] = location
            if private_zone_name is None and not opts.urn:
                raise TypeError("Missing required property 'private_zone_name'")
            __props__['private_zone_name'] = private_zone_name
            __props__['registration_enabled'] = registration_enabled
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['virtual_network'] = virtual_network
            if virtual_network_link_name is None and not opts.urn:
                raise TypeError("Missing required property 'virtual_network_link_name'")
            __props__['virtual_network_link_name'] = virtual_network_link_name
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['type'] = None
            __props__['virtual_network_link_state'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:VirtualNetworkLink"), pulumi.Alias(type_="azure-nextgen:network/v20200101:VirtualNetworkLink"), pulumi.Alias(type_="azure-nextgen:network/v20200601:VirtualNetworkLink")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(VirtualNetworkLink, __self__).__init__(
            'azure-nextgen:network/v20180901:VirtualNetworkLink',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'VirtualNetworkLink':
        """
        Get an existing VirtualNetworkLink resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return VirtualNetworkLink(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[Optional[str]]:
        """
        The ETag of the virtual network link.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The Azure Region where the resource lives
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="registrationEnabled")
    def registration_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
        """
        return pulumi.get(self, "registration_enabled")

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
        The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualNetwork")
    def virtual_network(self) -> pulumi.Output[Optional['outputs.SubResourceResponse']]:
        """
        The reference of the virtual network.
        """
        return pulumi.get(self, "virtual_network")

    @property
    @pulumi.getter(name="virtualNetworkLinkState")
    def virtual_network_link_state(self) -> pulumi.Output[str]:
        """
        The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
        """
        return pulumi.get(self, "virtual_network_link_state")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

