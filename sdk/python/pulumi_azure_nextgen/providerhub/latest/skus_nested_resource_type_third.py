# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = ['SkusNestedResourceTypeThird']


class SkusNestedResourceTypeThird(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 nested_resource_type_first: Optional[pulumi.Input[str]] = None,
                 nested_resource_type_second: Optional[pulumi.Input[str]] = None,
                 nested_resource_type_third: Optional[pulumi.Input[str]] = None,
                 provider_namespace: Optional[pulumi.Input[str]] = None,
                 resource_type: Optional[pulumi.Input[str]] = None,
                 sku: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Latest API Version: 2020-11-20.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] nested_resource_type_first: The first child resource type.
        :param pulumi.Input[str] nested_resource_type_second: The second child resource type.
        :param pulumi.Input[str] nested_resource_type_third: The third child resource type.
        :param pulumi.Input[str] provider_namespace: The name of the resource provider hosted within ProviderHub.
        :param pulumi.Input[str] resource_type: The resource type.
        :param pulumi.Input[str] sku: The SKU.
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

            if nested_resource_type_first is None and not opts.urn:
                raise TypeError("Missing required property 'nested_resource_type_first'")
            __props__['nested_resource_type_first'] = nested_resource_type_first
            if nested_resource_type_second is None and not opts.urn:
                raise TypeError("Missing required property 'nested_resource_type_second'")
            __props__['nested_resource_type_second'] = nested_resource_type_second
            if nested_resource_type_third is None and not opts.urn:
                raise TypeError("Missing required property 'nested_resource_type_third'")
            __props__['nested_resource_type_third'] = nested_resource_type_third
            if provider_namespace is None and not opts.urn:
                raise TypeError("Missing required property 'provider_namespace'")
            __props__['provider_namespace'] = provider_namespace
            if resource_type is None and not opts.urn:
                raise TypeError("Missing required property 'resource_type'")
            __props__['resource_type'] = resource_type
            if sku is None and not opts.urn:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['name'] = None
            __props__['properties'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:providerhub/v20201120:SkusNestedResourceTypeThird")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(SkusNestedResourceTypeThird, __self__).__init__(
            'azure-nextgen:providerhub/latest:SkusNestedResourceTypeThird',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'SkusNestedResourceTypeThird':
        """
        Get an existing SkusNestedResourceTypeThird resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return SkusNestedResourceTypeThird(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def properties(self) -> pulumi.Output['outputs.SkuResourceResponseProperties']:
        return pulumi.get(self, "properties")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

