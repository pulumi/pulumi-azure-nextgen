# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['Endpoint']


class Endpoint(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 endpoint_location: Optional[pulumi.Input[str]] = None,
                 endpoint_monitor_status: Optional[pulumi.Input[Union[str, 'EndpointMonitorStatus']]] = None,
                 endpoint_name: Optional[pulumi.Input[str]] = None,
                 endpoint_status: Optional[pulumi.Input[Union[str, 'EndpointStatus']]] = None,
                 endpoint_type: Optional[pulumi.Input[str]] = None,
                 geo_mapping: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 min_child_endpoints: Optional[pulumi.Input[int]] = None,
                 priority: Optional[pulumi.Input[int]] = None,
                 profile_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 target: Optional[pulumi.Input[str]] = None,
                 target_resource_id: Optional[pulumi.Input[str]] = None,
                 weight: Optional[pulumi.Input[int]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Class representing a Traffic Manager endpoint.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] endpoint_location: Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
        :param pulumi.Input[Union[str, 'EndpointMonitorStatus']] endpoint_monitor_status: The monitoring status of the endpoint.
        :param pulumi.Input[str] endpoint_name: The name of the Traffic Manager endpoint to be created or updated.
        :param pulumi.Input[Union[str, 'EndpointStatus']] endpoint_status: The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
        :param pulumi.Input[str] endpoint_type: The type of the Traffic Manager endpoint to be created or updated.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] geo_mapping: The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
        :param pulumi.Input[int] min_child_endpoints: The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
        :param pulumi.Input[int] priority: The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
        :param pulumi.Input[str] profile_name: The name of the Traffic Manager profile.
        :param pulumi.Input[str] resource_group_name: The name of the resource group containing the Traffic Manager endpoint to be created or updated.
        :param pulumi.Input[str] target: The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
        :param pulumi.Input[str] target_resource_id: The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
        :param pulumi.Input[int] weight: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
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

            __props__['endpoint_location'] = endpoint_location
            __props__['endpoint_monitor_status'] = endpoint_monitor_status
            if endpoint_name is None and not opts.urn:
                raise TypeError("Missing required property 'endpoint_name'")
            __props__['endpoint_name'] = endpoint_name
            __props__['endpoint_status'] = endpoint_status
            if endpoint_type is None and not opts.urn:
                raise TypeError("Missing required property 'endpoint_type'")
            __props__['endpoint_type'] = endpoint_type
            __props__['geo_mapping'] = geo_mapping
            __props__['min_child_endpoints'] = min_child_endpoints
            __props__['priority'] = priority
            if profile_name is None and not opts.urn:
                raise TypeError("Missing required property 'profile_name'")
            __props__['profile_name'] = profile_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['target'] = target
            __props__['target_resource_id'] = target_resource_id
            __props__['weight'] = weight
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:network/latest:Endpoint"), pulumi.Alias(type_="azure-nextgen:network/v20151101:Endpoint"), pulumi.Alias(type_="azure-nextgen:network/v20170301:Endpoint"), pulumi.Alias(type_="azure-nextgen:network/v20180201:Endpoint"), pulumi.Alias(type_="azure-nextgen:network/v20180301:Endpoint"), pulumi.Alias(type_="azure-nextgen:network/v20180401:Endpoint")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Endpoint, __self__).__init__(
            'azure-nextgen:network/v20170501:Endpoint',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Endpoint':
        """
        Get an existing Endpoint resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Endpoint(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="endpointLocation")
    def endpoint_location(self) -> pulumi.Output[Optional[str]]:
        """
        Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
        """
        return pulumi.get(self, "endpoint_location")

    @property
    @pulumi.getter(name="endpointMonitorStatus")
    def endpoint_monitor_status(self) -> pulumi.Output[Optional[str]]:
        """
        The monitoring status of the endpoint.
        """
        return pulumi.get(self, "endpoint_monitor_status")

    @property
    @pulumi.getter(name="endpointStatus")
    def endpoint_status(self) -> pulumi.Output[Optional[str]]:
        """
        The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
        """
        return pulumi.get(self, "endpoint_status")

    @property
    @pulumi.getter(name="geoMapping")
    def geo_mapping(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
        """
        return pulumi.get(self, "geo_mapping")

    @property
    @pulumi.getter(name="minChildEndpoints")
    def min_child_endpoints(self) -> pulumi.Output[Optional[int]]:
        """
        The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
        """
        return pulumi.get(self, "min_child_endpoints")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def priority(self) -> pulumi.Output[Optional[int]]:
        """
        The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
        """
        return pulumi.get(self, "priority")

    @property
    @pulumi.getter
    def target(self) -> pulumi.Output[Optional[str]]:
        """
        The fully-qualified DNS name of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
        """
        return pulumi.get(self, "target")

    @property
    @pulumi.getter(name="targetResourceId")
    def target_resource_id(self) -> pulumi.Output[Optional[str]]:
        """
        The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
        """
        return pulumi.get(self, "target_resource_id")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def weight(self) -> pulumi.Output[Optional[int]]:
        """
        The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
        """
        return pulumi.get(self, "weight")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

