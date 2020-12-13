# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['RouteFilterRule']


class RouteFilterRule(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 access: Optional[pulumi.Input[Union[str, 'Access']]] = None,
                 communities: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 route_filter_name: Optional[pulumi.Input[str]] = None,
                 route_filter_rule_type: Optional[pulumi.Input[Union[str, 'RouteFilterRuleType']]] = None,
                 rule_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Route Filter Rule Resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Union[str, 'Access']] access: The access type of the rule.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] communities: The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
        :param pulumi.Input[str] id: Resource ID.
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[str] name: The name of the resource that is unique within a resource group. This name can be used to access the resource.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] route_filter_name: The name of the route filter.
        :param pulumi.Input[Union[str, 'RouteFilterRuleType']] route_filter_rule_type: The rule type of the rule.
        :param pulumi.Input[str] rule_name: The name of the route filter rule.
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

            if access is None and not opts.urn:
                raise TypeError("Missing required property 'access'")
            __props__['access'] = access
            if communities is None and not opts.urn:
                raise TypeError("Missing required property 'communities'")
            __props__['communities'] = communities
            __props__['id'] = id
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if route_filter_name is None and not opts.urn:
                raise TypeError("Missing required property 'route_filter_name'")
            __props__['route_filter_name'] = route_filter_name
            if route_filter_rule_type is None and not opts.urn:
                raise TypeError("Missing required property 'route_filter_rule_type'")
            __props__['route_filter_rule_type'] = route_filter_rule_type
            if rule_name is None and not opts.urn:
                raise TypeError("Missing required property 'rule_name'")
            __props__['rule_name'] = rule_name
            __props__['etag'] = None
            __props__['provisioning_state'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20161201:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20170301:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20170601:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20170801:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20170901:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20171001:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20171101:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180101:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180201:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180401:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180601:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180701:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20180801:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20181001:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20181101:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20181201:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20190201:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20190401:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20190601:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20190701:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20190901:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20191101:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20191201:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20200301:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20200401:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20200501:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20200601:RouteFilterRule"), pulumi.Alias(type_="azure-nextgen:network/v20200701:RouteFilterRule")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(RouteFilterRule, __self__).__init__(
            'azure-nextgen:network/v20190801:RouteFilterRule',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'RouteFilterRule':
        """
        Get an existing RouteFilterRule resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return RouteFilterRule(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def access(self) -> pulumi.Output[str]:
        """
        The access type of the rule.
        """
        return pulumi.get(self, "access")

    @property
    @pulumi.getter
    def communities(self) -> pulumi.Output[Sequence[str]]:
        """
        The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
        """
        return pulumi.get(self, "communities")

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
    def name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the route filter rule resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="routeFilterRuleType")
    def route_filter_rule_type(self) -> pulumi.Output[str]:
        """
        The rule type of the rule.
        """
        return pulumi.get(self, "route_filter_rule_type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

