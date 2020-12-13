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

__all__ = ['AFDOrigin']


class AFDOrigin(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 azure_origin: Optional[pulumi.Input[pulumi.InputType['ResourceReferenceArgs']]] = None,
                 enabled_state: Optional[pulumi.Input[Union[str, 'EnabledState']]] = None,
                 host_name: Optional[pulumi.Input[str]] = None,
                 http_port: Optional[pulumi.Input[int]] = None,
                 https_port: Optional[pulumi.Input[int]] = None,
                 origin_group_name: Optional[pulumi.Input[str]] = None,
                 origin_host_header: Optional[pulumi.Input[str]] = None,
                 origin_name: Optional[pulumi.Input[str]] = None,
                 priority: Optional[pulumi.Input[int]] = None,
                 profile_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 shared_private_link_resource: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['SharedPrivateLinkResourcePropertiesArgs']]]]] = None,
                 weight: Optional[pulumi.Input[int]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[pulumi.InputType['ResourceReferenceArgs']] azure_origin: Resource reference to the Azure origin resource.
        :param pulumi.Input[Union[str, 'EnabledState']] enabled_state: Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
        :param pulumi.Input[str] host_name: The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
        :param pulumi.Input[int] http_port: The value of the HTTP port. Must be between 1 and 65535.
        :param pulumi.Input[int] https_port: The value of the HTTPS port. Must be between 1 and 65535.
        :param pulumi.Input[str] origin_group_name: Name of the origin group which is unique within the profile.
        :param pulumi.Input[str] origin_host_header: The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
        :param pulumi.Input[str] origin_name: Name of the origin that is unique within the profile.
        :param pulumi.Input[int] priority: Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
        :param pulumi.Input[str] profile_name: Name of the CDN profile which is unique within the resource group.
        :param pulumi.Input[str] resource_group_name: Name of the Resource group within the Azure subscription.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['SharedPrivateLinkResourcePropertiesArgs']]]] shared_private_link_resource: The properties of the private link resource for private origin.
        :param pulumi.Input[int] weight: Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
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

            __props__['azure_origin'] = azure_origin
            __props__['enabled_state'] = enabled_state
            if host_name is None and not opts.urn:
                raise TypeError("Missing required property 'host_name'")
            __props__['host_name'] = host_name
            __props__['http_port'] = http_port
            __props__['https_port'] = https_port
            if origin_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'origin_group_name'")
            __props__['origin_group_name'] = origin_group_name
            __props__['origin_host_header'] = origin_host_header
            if origin_name is None and not opts.urn:
                raise TypeError("Missing required property 'origin_name'")
            __props__['origin_name'] = origin_name
            __props__['priority'] = priority
            if profile_name is None and not opts.urn:
                raise TypeError("Missing required property 'profile_name'")
            __props__['profile_name'] = profile_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['shared_private_link_resource'] = shared_private_link_resource
            __props__['weight'] = weight
            __props__['deployment_status'] = None
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['system_data'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:cdn/latest:AFDOrigin")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AFDOrigin, __self__).__init__(
            'azure-nextgen:cdn/v20200901:AFDOrigin',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AFDOrigin':
        """
        Get an existing AFDOrigin resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AFDOrigin(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="azureOrigin")
    def azure_origin(self) -> pulumi.Output[Optional['outputs.ResourceReferenceResponse']]:
        """
        Resource reference to the Azure origin resource.
        """
        return pulumi.get(self, "azure_origin")

    @property
    @pulumi.getter(name="deploymentStatus")
    def deployment_status(self) -> pulumi.Output[str]:
        return pulumi.get(self, "deployment_status")

    @property
    @pulumi.getter(name="enabledState")
    def enabled_state(self) -> pulumi.Output[Optional[str]]:
        """
        Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
        """
        return pulumi.get(self, "enabled_state")

    @property
    @pulumi.getter(name="hostName")
    def host_name(self) -> pulumi.Output[str]:
        """
        The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
        """
        return pulumi.get(self, "host_name")

    @property
    @pulumi.getter(name="httpPort")
    def http_port(self) -> pulumi.Output[Optional[int]]:
        """
        The value of the HTTP port. Must be between 1 and 65535.
        """
        return pulumi.get(self, "http_port")

    @property
    @pulumi.getter(name="httpsPort")
    def https_port(self) -> pulumi.Output[Optional[int]]:
        """
        The value of the HTTPS port. Must be between 1 and 65535.
        """
        return pulumi.get(self, "https_port")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="originHostHeader")
    def origin_host_header(self) -> pulumi.Output[Optional[str]]:
        """
        The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
        """
        return pulumi.get(self, "origin_host_header")

    @property
    @pulumi.getter
    def priority(self) -> pulumi.Output[Optional[int]]:
        """
        Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
        """
        return pulumi.get(self, "priority")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        Provisioning status
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="sharedPrivateLinkResource")
    def shared_private_link_resource(self) -> pulumi.Output[Optional[Sequence['outputs.SharedPrivateLinkResourcePropertiesResponse']]]:
        """
        The properties of the private link resource for private origin.
        """
        return pulumi.get(self, "shared_private_link_resource")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> pulumi.Output['outputs.SystemDataResponse']:
        """
        Read only system data
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def weight(self) -> pulumi.Output[Optional[int]]:
        """
        Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
        """
        return pulumi.get(self, "weight")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

