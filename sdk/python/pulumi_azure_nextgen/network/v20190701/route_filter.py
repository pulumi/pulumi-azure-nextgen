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

__all__ = ['RouteFilter']


class RouteFilter(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 ipv6_peerings: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringArgs']]]]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 peerings: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 route_filter_name: Optional[pulumi.Input[str]] = None,
                 rules: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RouteFilterRuleArgs']]]]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Route Filter Resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] id: Resource ID.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringArgs']]]] ipv6_peerings: A collection of references to express route circuit ipv6 peerings.
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ExpressRouteCircuitPeeringArgs']]]] peerings: A collection of references to express route circuit peerings.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] route_filter_name: The name of the route filter.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['RouteFilterRuleArgs']]]] rules: Collection of RouteFilterRules contained within a route filter.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
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

            __props__['id'] = id
            __props__['ipv6_peerings'] = ipv6_peerings
            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            __props__['peerings'] = peerings
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if route_filter_name is None and not opts.urn:
                raise TypeError("Missing required property 'route_filter_name'")
            __props__['route_filter_name'] = route_filter_name
            __props__['rules'] = rules
            __props__['tags'] = tags
            __props__['etag'] = None
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20161201:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20170301:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20170601:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20170801:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20170901:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20171001:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20171101:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180101:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180201:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180401:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180601:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180701:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20180801:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20181001:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20181101:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20181201:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20190201:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20190401:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20190601:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20190801:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20190901:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20191101:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20191201:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20200301:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20200401:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20200501:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20200601:RouteFilter"), pulumi.Alias(type_="azure-nextgen:network/v20200701:RouteFilter")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(RouteFilter, __self__).__init__(
            'azure-nextgen:network/v20190701:RouteFilter',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'RouteFilter':
        """
        Get an existing RouteFilter resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return RouteFilter(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[str]:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="ipv6Peerings")
    def ipv6_peerings(self) -> pulumi.Output[Optional[Sequence['outputs.ExpressRouteCircuitPeeringResponse']]]:
        """
        A collection of references to express route circuit ipv6 peerings.
        """
        return pulumi.get(self, "ipv6_peerings")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
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
    @pulumi.getter
    def peerings(self) -> pulumi.Output[Optional[Sequence['outputs.ExpressRouteCircuitPeeringResponse']]]:
        """
        A collection of references to express route circuit peerings.
        """
        return pulumi.get(self, "peerings")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the route filter resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def rules(self) -> pulumi.Output[Optional[Sequence['outputs.RouteFilterRuleResponse']]]:
        """
        Collection of RouteFilterRules contained within a route filter.
        """
        return pulumi.get(self, "rules")

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

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

