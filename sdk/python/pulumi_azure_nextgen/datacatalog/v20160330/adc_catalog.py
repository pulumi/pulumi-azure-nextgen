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

__all__ = ['ADCCatalog']


class ADCCatalog(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 admins: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PrincipalsArgs']]]]] = None,
                 catalog_name: Optional[pulumi.Input[str]] = None,
                 enable_automatic_unit_adjustment: Optional[pulumi.Input[bool]] = None,
                 etag: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 sku: Optional[pulumi.Input[Union[str, 'SkuType']]] = None,
                 successfully_provisioned: Optional[pulumi.Input[bool]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 units: Optional[pulumi.Input[int]] = None,
                 users: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PrincipalsArgs']]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Azure Data Catalog.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PrincipalsArgs']]]] admins: Azure data catalog admin list.
        :param pulumi.Input[str] catalog_name: The name of the data catalog in the specified subscription and resource group.
        :param pulumi.Input[bool] enable_automatic_unit_adjustment: Automatic unit adjustment enabled or not.
        :param pulumi.Input[str] etag: Resource etag
        :param pulumi.Input[str] location: Resource location
        :param pulumi.Input[str] resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
        :param pulumi.Input[Union[str, 'SkuType']] sku: Azure data catalog SKU.
        :param pulumi.Input[bool] successfully_provisioned: Azure data catalog provision status.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags
        :param pulumi.Input[int] units: Azure data catalog units.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PrincipalsArgs']]]] users: Azure data catalog user list.
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

            __props__['admins'] = admins
            if catalog_name is None and not opts.urn:
                raise TypeError("Missing required property 'catalog_name'")
            __props__['catalog_name'] = catalog_name
            __props__['enable_automatic_unit_adjustment'] = enable_automatic_unit_adjustment
            __props__['etag'] = etag
            __props__['location'] = location
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['sku'] = sku
            __props__['successfully_provisioned'] = successfully_provisioned
            __props__['tags'] = tags
            __props__['units'] = units
            __props__['users'] = users
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:datacatalog/latest:ADCCatalog")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ADCCatalog, __self__).__init__(
            'azure-nextgen:datacatalog/v20160330:ADCCatalog',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ADCCatalog':
        """
        Get an existing ADCCatalog resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ADCCatalog(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def admins(self) -> pulumi.Output[Optional[Sequence['outputs.PrincipalsResponse']]]:
        """
        Azure data catalog admin list.
        """
        return pulumi.get(self, "admins")

    @property
    @pulumi.getter(name="enableAutomaticUnitAdjustment")
    def enable_automatic_unit_adjustment(self) -> pulumi.Output[Optional[bool]]:
        """
        Automatic unit adjustment enabled or not.
        """
        return pulumi.get(self, "enable_automatic_unit_adjustment")

    @property
    @pulumi.getter
    def etag(self) -> pulumi.Output[Optional[str]]:
        """
        Resource etag
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def sku(self) -> pulumi.Output[Optional[str]]:
        """
        Azure data catalog SKU.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="successfullyProvisioned")
    def successfully_provisioned(self) -> pulumi.Output[Optional[bool]]:
        """
        Azure data catalog provision status.
        """
        return pulumi.get(self, "successfully_provisioned")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def units(self) -> pulumi.Output[Optional[int]]:
        """
        Azure data catalog units.
        """
        return pulumi.get(self, "units")

    @property
    @pulumi.getter
    def users(self) -> pulumi.Output[Optional[Sequence['outputs.PrincipalsResponse']]]:
        """
        Azure data catalog user list.
        """
        return pulumi.get(self, "users")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

