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

__all__ = ['AppServicePlanRouteForVnet']


class AppServicePlanRouteForVnet(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 end_address: Optional[pulumi.Input[str]] = None,
                 kind: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 route_name: Optional[pulumi.Input[str]] = None,
                 route_type: Optional[pulumi.Input[Union[str, 'RouteType']]] = None,
                 start_address: Optional[pulumi.Input[str]] = None,
                 vnet_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Virtual Network route contract used to pass routing information for a Virtual Network.
        Latest API Version: 2020-09-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] end_address: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
        :param pulumi.Input[str] kind: Kind of resource.
        :param pulumi.Input[str] name: Name of the App Service plan.
        :param pulumi.Input[str] resource_group_name: Name of the resource group to which the resource belongs.
        :param pulumi.Input[str] route_name: Name of the Virtual Network route.
        :param pulumi.Input[Union[str, 'RouteType']] route_type: The type of route this is:
               DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
               INHERITED - Routes inherited from the real Virtual Network routes
               STATIC - Static route set on the app only
               
               These values will be used for syncing an app's routes with those from a Virtual Network.
        :param pulumi.Input[str] start_address: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        :param pulumi.Input[str] vnet_name: Name of the Virtual Network.
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

            __props__['end_address'] = end_address
            __props__['kind'] = kind
            if name is None and not opts.urn:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if route_name is None and not opts.urn:
                raise TypeError("Missing required property 'route_name'")
            __props__['route_name'] = route_name
            __props__['route_type'] = route_type
            __props__['start_address'] = start_address
            if vnet_name is None and not opts.urn:
                raise TypeError("Missing required property 'vnet_name'")
            __props__['vnet_name'] = vnet_name
            __props__['system_data'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:web/v20150801:AppServicePlanRouteForVnet"), pulumi.Alias(type_="azure-nextgen:web/v20160901:AppServicePlanRouteForVnet"), pulumi.Alias(type_="azure-nextgen:web/v20180201:AppServicePlanRouteForVnet"), pulumi.Alias(type_="azure-nextgen:web/v20190801:AppServicePlanRouteForVnet"), pulumi.Alias(type_="azure-nextgen:web/v20200601:AppServicePlanRouteForVnet"), pulumi.Alias(type_="azure-nextgen:web/v20200901:AppServicePlanRouteForVnet")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AppServicePlanRouteForVnet, __self__).__init__(
            'azure-nextgen:web/latest:AppServicePlanRouteForVnet',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AppServicePlanRouteForVnet':
        """
        Get an existing AppServicePlanRouteForVnet resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AppServicePlanRouteForVnet(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="endAddress")
    def end_address(self) -> pulumi.Output[Optional[str]]:
        """
        The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
        """
        return pulumi.get(self, "end_address")

    @property
    @pulumi.getter
    def kind(self) -> pulumi.Output[Optional[str]]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="routeType")
    def route_type(self) -> pulumi.Output[Optional[str]]:
        """
        The type of route this is:
        DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
        INHERITED - Routes inherited from the real Virtual Network routes
        STATIC - Static route set on the app only

        These values will be used for syncing an app's routes with those from a Virtual Network.
        """
        return pulumi.get(self, "route_type")

    @property
    @pulumi.getter(name="startAddress")
    def start_address(self) -> pulumi.Output[Optional[str]]:
        """
        The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
        """
        return pulumi.get(self, "start_address")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> pulumi.Output['outputs.SystemDataResponse']:
        """
        The system metadata relating to this resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

