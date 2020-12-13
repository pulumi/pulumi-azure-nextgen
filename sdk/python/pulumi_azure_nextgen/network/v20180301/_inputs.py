# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'DnsConfigArgs',
    'EndpointArgs',
    'EndpointPropertiesCustomHeadersArgs',
    'MonitorConfigArgs',
    'MonitorConfigCustomHeadersArgs',
    'MonitorConfigExpectedStatusCodeRangesArgs',
]

@pulumi.input_type
class DnsConfigArgs:
    def __init__(__self__, *,
                 relative_name: Optional[pulumi.Input[str]] = None,
                 ttl: Optional[pulumi.Input[int]] = None):
        """
        Class containing DNS settings in a Traffic Manager profile.
        :param pulumi.Input[str] relative_name: The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
        :param pulumi.Input[int] ttl: The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
        """
        if relative_name is not None:
            pulumi.set(__self__, "relative_name", relative_name)
        if ttl is not None:
            pulumi.set(__self__, "ttl", ttl)

    @property
    @pulumi.getter(name="relativeName")
    def relative_name(self) -> Optional[pulumi.Input[str]]:
        """
        The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
        """
        return pulumi.get(self, "relative_name")

    @relative_name.setter
    def relative_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "relative_name", value)

    @property
    @pulumi.getter
    def ttl(self) -> Optional[pulumi.Input[int]]:
        """
        The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
        """
        return pulumi.get(self, "ttl")

    @ttl.setter
    def ttl(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "ttl", value)


@pulumi.input_type
class EndpointArgs:
    def __init__(__self__, *,
                 custom_headers: Optional[pulumi.Input[Sequence[pulumi.Input['EndpointPropertiesCustomHeadersArgs']]]] = None,
                 endpoint_location: Optional[pulumi.Input[str]] = None,
                 endpoint_monitor_status: Optional[pulumi.Input[Union[str, 'EndpointMonitorStatus']]] = None,
                 endpoint_status: Optional[pulumi.Input[Union[str, 'EndpointStatus']]] = None,
                 geo_mapping: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 min_child_endpoints: Optional[pulumi.Input[int]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 priority: Optional[pulumi.Input[int]] = None,
                 target: Optional[pulumi.Input[str]] = None,
                 target_resource_id: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[str]] = None,
                 weight: Optional[pulumi.Input[int]] = None):
        """
        Class representing a Traffic Manager endpoint.
        :param pulumi.Input[Sequence[pulumi.Input['EndpointPropertiesCustomHeadersArgs']]] custom_headers: List of custom headers.
        :param pulumi.Input[str] endpoint_location: Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
        :param pulumi.Input[Union[str, 'EndpointMonitorStatus']] endpoint_monitor_status: The monitoring status of the endpoint.
        :param pulumi.Input[Union[str, 'EndpointStatus']] endpoint_status: The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] geo_mapping: The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
        :param pulumi.Input[str] id: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
        :param pulumi.Input[int] min_child_endpoints: The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
        :param pulumi.Input[str] name: The name of the resource
        :param pulumi.Input[int] priority: The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
        :param pulumi.Input[str] target: The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
        :param pulumi.Input[str] target_resource_id: The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
        :param pulumi.Input[str] type: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
        :param pulumi.Input[int] weight: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
        """
        if custom_headers is not None:
            pulumi.set(__self__, "custom_headers", custom_headers)
        if endpoint_location is not None:
            pulumi.set(__self__, "endpoint_location", endpoint_location)
        if endpoint_monitor_status is not None:
            pulumi.set(__self__, "endpoint_monitor_status", endpoint_monitor_status)
        if endpoint_status is not None:
            pulumi.set(__self__, "endpoint_status", endpoint_status)
        if geo_mapping is not None:
            pulumi.set(__self__, "geo_mapping", geo_mapping)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if min_child_endpoints is not None:
            pulumi.set(__self__, "min_child_endpoints", min_child_endpoints)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if priority is not None:
            pulumi.set(__self__, "priority", priority)
        if target is not None:
            pulumi.set(__self__, "target", target)
        if target_resource_id is not None:
            pulumi.set(__self__, "target_resource_id", target_resource_id)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if weight is not None:
            pulumi.set(__self__, "weight", weight)

    @property
    @pulumi.getter(name="customHeaders")
    def custom_headers(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['EndpointPropertiesCustomHeadersArgs']]]]:
        """
        List of custom headers.
        """
        return pulumi.get(self, "custom_headers")

    @custom_headers.setter
    def custom_headers(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['EndpointPropertiesCustomHeadersArgs']]]]):
        pulumi.set(self, "custom_headers", value)

    @property
    @pulumi.getter(name="endpointLocation")
    def endpoint_location(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
        """
        return pulumi.get(self, "endpoint_location")

    @endpoint_location.setter
    def endpoint_location(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "endpoint_location", value)

    @property
    @pulumi.getter(name="endpointMonitorStatus")
    def endpoint_monitor_status(self) -> Optional[pulumi.Input[Union[str, 'EndpointMonitorStatus']]]:
        """
        The monitoring status of the endpoint.
        """
        return pulumi.get(self, "endpoint_monitor_status")

    @endpoint_monitor_status.setter
    def endpoint_monitor_status(self, value: Optional[pulumi.Input[Union[str, 'EndpointMonitorStatus']]]):
        pulumi.set(self, "endpoint_monitor_status", value)

    @property
    @pulumi.getter(name="endpointStatus")
    def endpoint_status(self) -> Optional[pulumi.Input[Union[str, 'EndpointStatus']]]:
        """
        The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
        """
        return pulumi.get(self, "endpoint_status")

    @endpoint_status.setter
    def endpoint_status(self, value: Optional[pulumi.Input[Union[str, 'EndpointStatus']]]):
        pulumi.set(self, "endpoint_status", value)

    @property
    @pulumi.getter(name="geoMapping")
    def geo_mapping(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        The list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
        """
        return pulumi.get(self, "geo_mapping")

    @geo_mapping.setter
    def geo_mapping(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "geo_mapping", value)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input[str]]:
        """
        Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "id", value)

    @property
    @pulumi.getter(name="minChildEndpoints")
    def min_child_endpoints(self) -> Optional[pulumi.Input[int]]:
        """
        The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
        """
        return pulumi.get(self, "min_child_endpoints")

    @min_child_endpoints.setter
    def min_child_endpoints(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "min_child_endpoints", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def priority(self) -> Optional[pulumi.Input[int]]:
        """
        The priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
        """
        return pulumi.get(self, "priority")

    @priority.setter
    def priority(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "priority", value)

    @property
    @pulumi.getter
    def target(self) -> Optional[pulumi.Input[str]]:
        """
        The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
        """
        return pulumi.get(self, "target")

    @target.setter
    def target(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "target", value)

    @property
    @pulumi.getter(name="targetResourceId")
    def target_resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
        """
        return pulumi.get(self, "target_resource_id")

    @target_resource_id.setter
    def target_resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "target_resource_id", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[str]]:
        """
        The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "type", value)

    @property
    @pulumi.getter
    def weight(self) -> Optional[pulumi.Input[int]]:
        """
        The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
        """
        return pulumi.get(self, "weight")

    @weight.setter
    def weight(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "weight", value)


@pulumi.input_type
class EndpointPropertiesCustomHeadersArgs:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None,
                 value: Optional[pulumi.Input[str]] = None):
        """
        Custom header name and value.
        :param pulumi.Input[str] name: Header name.
        :param pulumi.Input[str] value: Header value.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Header name.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def value(self) -> Optional[pulumi.Input[str]]:
        """
        Header value.
        """
        return pulumi.get(self, "value")

    @value.setter
    def value(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "value", value)


@pulumi.input_type
class MonitorConfigArgs:
    def __init__(__self__, *,
                 custom_headers: Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigCustomHeadersArgs']]]] = None,
                 expected_status_code_ranges: Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigExpectedStatusCodeRangesArgs']]]] = None,
                 interval_in_seconds: Optional[pulumi.Input[int]] = None,
                 path: Optional[pulumi.Input[str]] = None,
                 port: Optional[pulumi.Input[int]] = None,
                 profile_monitor_status: Optional[pulumi.Input[Union[str, 'ProfileMonitorStatus']]] = None,
                 protocol: Optional[pulumi.Input[Union[str, 'MonitorProtocol']]] = None,
                 timeout_in_seconds: Optional[pulumi.Input[int]] = None,
                 tolerated_number_of_failures: Optional[pulumi.Input[int]] = None):
        """
        Class containing endpoint monitoring settings in a Traffic Manager profile.
        :param pulumi.Input[Sequence[pulumi.Input['MonitorConfigCustomHeadersArgs']]] custom_headers: List of custom headers.
        :param pulumi.Input[Sequence[pulumi.Input['MonitorConfigExpectedStatusCodeRangesArgs']]] expected_status_code_ranges: List of expected status code ranges.
        :param pulumi.Input[int] interval_in_seconds: The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
        :param pulumi.Input[str] path: The path relative to the endpoint domain name used to probe for endpoint health.
        :param pulumi.Input[int] port: The TCP port used to probe for endpoint health.
        :param pulumi.Input[Union[str, 'ProfileMonitorStatus']] profile_monitor_status: The profile-level monitoring status of the Traffic Manager profile.
        :param pulumi.Input[Union[str, 'MonitorProtocol']] protocol: The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
        :param pulumi.Input[int] timeout_in_seconds: The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
        :param pulumi.Input[int] tolerated_number_of_failures: The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
        """
        if custom_headers is not None:
            pulumi.set(__self__, "custom_headers", custom_headers)
        if expected_status_code_ranges is not None:
            pulumi.set(__self__, "expected_status_code_ranges", expected_status_code_ranges)
        if interval_in_seconds is not None:
            pulumi.set(__self__, "interval_in_seconds", interval_in_seconds)
        if path is not None:
            pulumi.set(__self__, "path", path)
        if port is not None:
            pulumi.set(__self__, "port", port)
        if profile_monitor_status is not None:
            pulumi.set(__self__, "profile_monitor_status", profile_monitor_status)
        if protocol is not None:
            pulumi.set(__self__, "protocol", protocol)
        if timeout_in_seconds is not None:
            pulumi.set(__self__, "timeout_in_seconds", timeout_in_seconds)
        if tolerated_number_of_failures is not None:
            pulumi.set(__self__, "tolerated_number_of_failures", tolerated_number_of_failures)

    @property
    @pulumi.getter(name="customHeaders")
    def custom_headers(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigCustomHeadersArgs']]]]:
        """
        List of custom headers.
        """
        return pulumi.get(self, "custom_headers")

    @custom_headers.setter
    def custom_headers(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigCustomHeadersArgs']]]]):
        pulumi.set(self, "custom_headers", value)

    @property
    @pulumi.getter(name="expectedStatusCodeRanges")
    def expected_status_code_ranges(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigExpectedStatusCodeRangesArgs']]]]:
        """
        List of expected status code ranges.
        """
        return pulumi.get(self, "expected_status_code_ranges")

    @expected_status_code_ranges.setter
    def expected_status_code_ranges(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['MonitorConfigExpectedStatusCodeRangesArgs']]]]):
        pulumi.set(self, "expected_status_code_ranges", value)

    @property
    @pulumi.getter(name="intervalInSeconds")
    def interval_in_seconds(self) -> Optional[pulumi.Input[int]]:
        """
        The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
        """
        return pulumi.get(self, "interval_in_seconds")

    @interval_in_seconds.setter
    def interval_in_seconds(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "interval_in_seconds", value)

    @property
    @pulumi.getter
    def path(self) -> Optional[pulumi.Input[str]]:
        """
        The path relative to the endpoint domain name used to probe for endpoint health.
        """
        return pulumi.get(self, "path")

    @path.setter
    def path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "path", value)

    @property
    @pulumi.getter
    def port(self) -> Optional[pulumi.Input[int]]:
        """
        The TCP port used to probe for endpoint health.
        """
        return pulumi.get(self, "port")

    @port.setter
    def port(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "port", value)

    @property
    @pulumi.getter(name="profileMonitorStatus")
    def profile_monitor_status(self) -> Optional[pulumi.Input[Union[str, 'ProfileMonitorStatus']]]:
        """
        The profile-level monitoring status of the Traffic Manager profile.
        """
        return pulumi.get(self, "profile_monitor_status")

    @profile_monitor_status.setter
    def profile_monitor_status(self, value: Optional[pulumi.Input[Union[str, 'ProfileMonitorStatus']]]):
        pulumi.set(self, "profile_monitor_status", value)

    @property
    @pulumi.getter
    def protocol(self) -> Optional[pulumi.Input[Union[str, 'MonitorProtocol']]]:
        """
        The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
        """
        return pulumi.get(self, "protocol")

    @protocol.setter
    def protocol(self, value: Optional[pulumi.Input[Union[str, 'MonitorProtocol']]]):
        pulumi.set(self, "protocol", value)

    @property
    @pulumi.getter(name="timeoutInSeconds")
    def timeout_in_seconds(self) -> Optional[pulumi.Input[int]]:
        """
        The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
        """
        return pulumi.get(self, "timeout_in_seconds")

    @timeout_in_seconds.setter
    def timeout_in_seconds(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "timeout_in_seconds", value)

    @property
    @pulumi.getter(name="toleratedNumberOfFailures")
    def tolerated_number_of_failures(self) -> Optional[pulumi.Input[int]]:
        """
        The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
        """
        return pulumi.get(self, "tolerated_number_of_failures")

    @tolerated_number_of_failures.setter
    def tolerated_number_of_failures(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "tolerated_number_of_failures", value)


@pulumi.input_type
class MonitorConfigCustomHeadersArgs:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None,
                 value: Optional[pulumi.Input[str]] = None):
        """
        Custom header name and value.
        :param pulumi.Input[str] name: Header name.
        :param pulumi.Input[str] value: Header value.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Header name.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def value(self) -> Optional[pulumi.Input[str]]:
        """
        Header value.
        """
        return pulumi.get(self, "value")

    @value.setter
    def value(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "value", value)


@pulumi.input_type
class MonitorConfigExpectedStatusCodeRangesArgs:
    def __init__(__self__, *,
                 max: Optional[pulumi.Input[int]] = None,
                 min: Optional[pulumi.Input[int]] = None):
        """
        Min and max value of a status code range.
        :param pulumi.Input[int] max: Max status code.
        :param pulumi.Input[int] min: Min status code.
        """
        if max is not None:
            pulumi.set(__self__, "max", max)
        if min is not None:
            pulumi.set(__self__, "min", min)

    @property
    @pulumi.getter
    def max(self) -> Optional[pulumi.Input[int]]:
        """
        Max status code.
        """
        return pulumi.get(self, "max")

    @max.setter
    def max(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "max", value)

    @property
    @pulumi.getter
    def min(self) -> Optional[pulumi.Input[int]]:
        """
        Min status code.
        """
        return pulumi.get(self, "min")

    @min.setter
    def min(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "min", value)


