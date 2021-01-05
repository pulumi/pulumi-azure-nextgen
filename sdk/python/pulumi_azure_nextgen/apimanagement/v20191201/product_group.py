# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['ProductGroup']


class ProductGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 group_id: Optional[pulumi.Input[str]] = None,
                 product_id: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 service_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Contract details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] group_id: Group identifier. Must be unique in the current API Management service instance.
        :param pulumi.Input[str] product_id: Product identifier. Must be unique in the current API Management service instance.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] service_name: The name of the API Management service.
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

            if group_id is None and not opts.urn:
                raise TypeError("Missing required property 'group_id'")
            __props__['group_id'] = group_id
            if product_id is None and not opts.urn:
                raise TypeError("Missing required property 'product_id'")
            __props__['product_id'] = product_id
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if service_name is None and not opts.urn:
                raise TypeError("Missing required property 'service_name'")
            __props__['service_name'] = service_name
            __props__['built_in'] = None
            __props__['description'] = None
            __props__['display_name'] = None
            __props__['external_id'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:apimanagement/latest:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20170301:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180101:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180601preview:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20190101:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201preview:ProductGroup"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20200601preview:ProductGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ProductGroup, __self__).__init__(
            'azure-nextgen:apimanagement/v20191201:ProductGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ProductGroup':
        """
        Get an existing ProductGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ProductGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="builtIn")
    def built_in(self) -> pulumi.Output[bool]:
        """
        true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        """
        return pulumi.get(self, "built_in")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        Group description. Can contain HTML formatting tags.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[str]:
        """
        Group name.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="externalId")
    def external_id(self) -> pulumi.Output[Optional[str]]:
        """
        For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
        """
        return pulumi.get(self, "external_id")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type for API Management resource.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
