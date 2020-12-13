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
    'GetOriginResult',
    'AwaitableGetOriginResult',
    'get_origin',
]

@pulumi.output_type
class GetOriginResult:
    """
    CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
    """
    def __init__(__self__, enabled=None, host_name=None, http_port=None, https_port=None, id=None, name=None, origin_host_header=None, priority=None, private_endpoint_status=None, private_link_alias=None, private_link_approval_message=None, private_link_location=None, private_link_resource_id=None, provisioning_state=None, resource_state=None, system_data=None, type=None, weight=None):
        if enabled and not isinstance(enabled, bool):
            raise TypeError("Expected argument 'enabled' to be a bool")
        pulumi.set(__self__, "enabled", enabled)
        if host_name and not isinstance(host_name, str):
            raise TypeError("Expected argument 'host_name' to be a str")
        pulumi.set(__self__, "host_name", host_name)
        if http_port and not isinstance(http_port, int):
            raise TypeError("Expected argument 'http_port' to be a int")
        pulumi.set(__self__, "http_port", http_port)
        if https_port and not isinstance(https_port, int):
            raise TypeError("Expected argument 'https_port' to be a int")
        pulumi.set(__self__, "https_port", https_port)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if origin_host_header and not isinstance(origin_host_header, str):
            raise TypeError("Expected argument 'origin_host_header' to be a str")
        pulumi.set(__self__, "origin_host_header", origin_host_header)
        if priority and not isinstance(priority, int):
            raise TypeError("Expected argument 'priority' to be a int")
        pulumi.set(__self__, "priority", priority)
        if private_endpoint_status and not isinstance(private_endpoint_status, str):
            raise TypeError("Expected argument 'private_endpoint_status' to be a str")
        pulumi.set(__self__, "private_endpoint_status", private_endpoint_status)
        if private_link_alias and not isinstance(private_link_alias, str):
            raise TypeError("Expected argument 'private_link_alias' to be a str")
        pulumi.set(__self__, "private_link_alias", private_link_alias)
        if private_link_approval_message and not isinstance(private_link_approval_message, str):
            raise TypeError("Expected argument 'private_link_approval_message' to be a str")
        pulumi.set(__self__, "private_link_approval_message", private_link_approval_message)
        if private_link_location and not isinstance(private_link_location, str):
            raise TypeError("Expected argument 'private_link_location' to be a str")
        pulumi.set(__self__, "private_link_location", private_link_location)
        if private_link_resource_id and not isinstance(private_link_resource_id, str):
            raise TypeError("Expected argument 'private_link_resource_id' to be a str")
        pulumi.set(__self__, "private_link_resource_id", private_link_resource_id)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if resource_state and not isinstance(resource_state, str):
            raise TypeError("Expected argument 'resource_state' to be a str")
        pulumi.set(__self__, "resource_state", resource_state)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if weight and not isinstance(weight, int):
            raise TypeError("Expected argument 'weight' to be a int")
        pulumi.set(__self__, "weight", weight)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        """
        Origin is enabled for load balancing or not
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="hostName")
    def host_name(self) -> str:
        """
        The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
        """
        return pulumi.get(self, "host_name")

    @property
    @pulumi.getter(name="httpPort")
    def http_port(self) -> Optional[int]:
        """
        The value of the HTTP port. Must be between 1 and 65535.
        """
        return pulumi.get(self, "http_port")

    @property
    @pulumi.getter(name="httpsPort")
    def https_port(self) -> Optional[int]:
        """
        The value of the HTTPS port. Must be between 1 and 65535.
        """
        return pulumi.get(self, "https_port")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="originHostHeader")
    def origin_host_header(self) -> Optional[str]:
        """
        The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
        """
        return pulumi.get(self, "origin_host_header")

    @property
    @pulumi.getter
    def priority(self) -> Optional[int]:
        """
        Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
        """
        return pulumi.get(self, "priority")

    @property
    @pulumi.getter(name="privateEndpointStatus")
    def private_endpoint_status(self) -> str:
        """
        The approval status for the connection to the Private Link
        """
        return pulumi.get(self, "private_endpoint_status")

    @property
    @pulumi.getter(name="privateLinkAlias")
    def private_link_alias(self) -> Optional[str]:
        """
        The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
        """
        return pulumi.get(self, "private_link_alias")

    @property
    @pulumi.getter(name="privateLinkApprovalMessage")
    def private_link_approval_message(self) -> Optional[str]:
        """
        A custom message to be included in the approval request to connect to the Private Link.
        """
        return pulumi.get(self, "private_link_approval_message")

    @property
    @pulumi.getter(name="privateLinkLocation")
    def private_link_location(self) -> Optional[str]:
        """
        The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
        """
        return pulumi.get(self, "private_link_location")

    @property
    @pulumi.getter(name="privateLinkResourceId")
    def private_link_resource_id(self) -> Optional[str]:
        """
        The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
        """
        return pulumi.get(self, "private_link_resource_id")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning status of the origin.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="resourceState")
    def resource_state(self) -> str:
        """
        Resource status of the origin.
        """
        return pulumi.get(self, "resource_state")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        Read only system data
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def weight(self) -> Optional[int]:
        """
        Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
        """
        return pulumi.get(self, "weight")


class AwaitableGetOriginResult(GetOriginResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetOriginResult(
            enabled=self.enabled,
            host_name=self.host_name,
            http_port=self.http_port,
            https_port=self.https_port,
            id=self.id,
            name=self.name,
            origin_host_header=self.origin_host_header,
            priority=self.priority,
            private_endpoint_status=self.private_endpoint_status,
            private_link_alias=self.private_link_alias,
            private_link_approval_message=self.private_link_approval_message,
            private_link_location=self.private_link_location,
            private_link_resource_id=self.private_link_resource_id,
            provisioning_state=self.provisioning_state,
            resource_state=self.resource_state,
            system_data=self.system_data,
            type=self.type,
            weight=self.weight)


def get_origin(endpoint_name: Optional[str] = None,
               origin_name: Optional[str] = None,
               profile_name: Optional[str] = None,
               resource_group_name: Optional[str] = None,
               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetOriginResult:
    """
    Use this data source to access information about an existing resource.

    :param str endpoint_name: Name of the endpoint under the profile which is unique globally.
    :param str origin_name: Name of the origin which is unique within the endpoint.
    :param str profile_name: Name of the CDN profile which is unique within the resource group.
    :param str resource_group_name: Name of the Resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['endpointName'] = endpoint_name
    __args__['originName'] = origin_name
    __args__['profileName'] = profile_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:cdn/latest:getOrigin', __args__, opts=opts, typ=GetOriginResult).value

    return AwaitableGetOriginResult(
        enabled=__ret__.enabled,
        host_name=__ret__.host_name,
        http_port=__ret__.http_port,
        https_port=__ret__.https_port,
        id=__ret__.id,
        name=__ret__.name,
        origin_host_header=__ret__.origin_host_header,
        priority=__ret__.priority,
        private_endpoint_status=__ret__.private_endpoint_status,
        private_link_alias=__ret__.private_link_alias,
        private_link_approval_message=__ret__.private_link_approval_message,
        private_link_location=__ret__.private_link_location,
        private_link_resource_id=__ret__.private_link_resource_id,
        provisioning_state=__ret__.provisioning_state,
        resource_state=__ret__.resource_state,
        system_data=__ret__.system_data,
        type=__ret__.type,
        weight=__ret__.weight)
