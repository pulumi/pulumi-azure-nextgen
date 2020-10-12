# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['RegisteredPrefix']


class RegisteredPrefix(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 peering_name: Optional[pulumi.Input[str]] = None,
                 prefix: Optional[pulumi.Input[str]] = None,
                 registered_prefix_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        The customer's prefix that is registered by the peering service provider.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] peering_name: The name of the peering.
        :param pulumi.Input[str] prefix: The customer's prefix from which traffic originates.
        :param pulumi.Input[str] registered_prefix_name: The name of the registered prefix.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
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

            if peering_name is None:
                raise TypeError("Missing required property 'peering_name'")
            __props__['peering_name'] = peering_name
            __props__['prefix'] = prefix
            if registered_prefix_name is None:
                raise TypeError("Missing required property 'registered_prefix_name'")
            __props__['registered_prefix_name'] = registered_prefix_name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['error_message'] = None
            __props__['name'] = None
            __props__['peering_service_prefix_key'] = None
            __props__['prefix_validation_state'] = None
            __props__['provisioning_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:peering/latest:RegisteredPrefix"), pulumi.Alias(type_="azure-nextgen:peering/v20200401:RegisteredPrefix"), pulumi.Alias(type_="azure-nextgen:peering/v20201001:RegisteredPrefix")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(RegisteredPrefix, __self__).__init__(
            'azure-nextgen:peering/v20200101preview:RegisteredPrefix',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'RegisteredPrefix':
        """
        Get an existing RegisteredPrefix resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return RegisteredPrefix(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="errorMessage")
    def error_message(self) -> pulumi.Output[str]:
        """
        The error message associated with the validation state, if any.
        """
        return pulumi.get(self, "error_message")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="peeringServicePrefixKey")
    def peering_service_prefix_key(self) -> pulumi.Output[str]:
        """
        The peering service prefix key that is to be shared with the customer.
        """
        return pulumi.get(self, "peering_service_prefix_key")

    @property
    @pulumi.getter
    def prefix(self) -> pulumi.Output[Optional[str]]:
        """
        The customer's prefix from which traffic originates.
        """
        return pulumi.get(self, "prefix")

    @property
    @pulumi.getter(name="prefixValidationState")
    def prefix_validation_state(self) -> pulumi.Output[str]:
        """
        The prefix validation state.
        """
        return pulumi.get(self, "prefix_validation_state")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

