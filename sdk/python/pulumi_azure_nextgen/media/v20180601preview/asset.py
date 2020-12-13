# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['Asset']


class Asset(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 account_name: Optional[pulumi.Input[str]] = None,
                 alternate_id: Optional[pulumi.Input[str]] = None,
                 asset_name: Optional[pulumi.Input[str]] = None,
                 container: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 storage_account_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An Asset.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] account_name: The Media Services account name.
        :param pulumi.Input[str] alternate_id: The alternate ID of the Asset.
        :param pulumi.Input[str] asset_name: The Asset name.
        :param pulumi.Input[str] container: The name of the asset blob container.
        :param pulumi.Input[str] description: The Asset description.
        :param pulumi.Input[str] resource_group_name: The name of the resource group within the Azure subscription.
        :param pulumi.Input[str] storage_account_name: The name of the storage account.
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

            if account_name is None and not opts.urn:
                raise TypeError("Missing required property 'account_name'")
            __props__['account_name'] = account_name
            __props__['alternate_id'] = alternate_id
            if asset_name is None and not opts.urn:
                raise TypeError("Missing required property 'asset_name'")
            __props__['asset_name'] = asset_name
            __props__['container'] = container
            __props__['description'] = description
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['storage_account_name'] = storage_account_name
            __props__['asset_id'] = None
            __props__['created'] = None
            __props__['last_modified'] = None
            __props__['name'] = None
            __props__['storage_encryption_format'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:media/latest:Asset"), pulumi.Alias(type_="azure-nextgen:media/v20180330preview:Asset"), pulumi.Alias(type_="azure-nextgen:media/v20180701:Asset"), pulumi.Alias(type_="azure-nextgen:media/v20200501:Asset")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Asset, __self__).__init__(
            'azure-nextgen:media/v20180601preview:Asset',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Asset':
        """
        Get an existing Asset resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Asset(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="alternateId")
    def alternate_id(self) -> pulumi.Output[Optional[str]]:
        """
        The alternate ID of the Asset.
        """
        return pulumi.get(self, "alternate_id")

    @property
    @pulumi.getter(name="assetId")
    def asset_id(self) -> pulumi.Output[str]:
        """
        The Asset ID.
        """
        return pulumi.get(self, "asset_id")

    @property
    @pulumi.getter
    def container(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the asset blob container.
        """
        return pulumi.get(self, "container")

    @property
    @pulumi.getter
    def created(self) -> pulumi.Output[str]:
        """
        The creation date of the Asset.
        """
        return pulumi.get(self, "created")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        The Asset description.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="lastModified")
    def last_modified(self) -> pulumi.Output[str]:
        """
        The last modified date of the Asset.
        """
        return pulumi.get(self, "last_modified")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="storageAccountName")
    def storage_account_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the storage account.
        """
        return pulumi.get(self, "storage_account_name")

    @property
    @pulumi.getter(name="storageEncryptionFormat")
    def storage_encryption_format(self) -> pulumi.Output[str]:
        """
        The Asset encryption format. One of None or MediaStorageEncryption.
        """
        return pulumi.get(self, "storage_encryption_format")

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

