# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['CloudEndpoint']


class CloudEndpoint(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 cloud_endpoint_name: Optional[pulumi.Input[str]] = None,
                 friendly_name: Optional[pulumi.Input[str]] = None,
                 last_workflow_id: Optional[pulumi.Input[str]] = None,
                 partnership_id: Optional[pulumi.Input[str]] = None,
                 provisioning_state: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 storage_account: Optional[pulumi.Input[str]] = None,
                 storage_account_key: Optional[pulumi.Input[str]] = None,
                 storage_account_resource_id: Optional[pulumi.Input[str]] = None,
                 storage_account_share_name: Optional[pulumi.Input[str]] = None,
                 storage_account_tenant_id: Optional[pulumi.Input[str]] = None,
                 storage_sync_service_name: Optional[pulumi.Input[str]] = None,
                 sync_group_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Cloud Endpoint object.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cloud_endpoint_name: Name of Cloud Endpoint object.
        :param pulumi.Input[str] friendly_name: Friendly Name
        :param pulumi.Input[str] last_workflow_id: CloudEndpoint lastWorkflowId
        :param pulumi.Input[str] partnership_id: Partnership Id
        :param pulumi.Input[str] provisioning_state: CloudEndpoint Provisioning State
        :param pulumi.Input[str] resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
        :param pulumi.Input[str] storage_account: Storage Account name.
        :param pulumi.Input[str] storage_account_key: Storage Account access key.
        :param pulumi.Input[str] storage_account_resource_id: Storage Account Resource Id
        :param pulumi.Input[str] storage_account_share_name: Storage Account Share name
        :param pulumi.Input[str] storage_account_tenant_id: Storage Account Tenant Id
        :param pulumi.Input[str] storage_sync_service_name: Name of Storage Sync Service resource.
        :param pulumi.Input[str] sync_group_name: Name of Sync Group resource.
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

            if cloud_endpoint_name is None and not opts.urn:
                raise TypeError("Missing required property 'cloud_endpoint_name'")
            __props__['cloud_endpoint_name'] = cloud_endpoint_name
            __props__['friendly_name'] = friendly_name
            __props__['last_workflow_id'] = last_workflow_id
            __props__['partnership_id'] = partnership_id
            __props__['provisioning_state'] = provisioning_state
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['storage_account'] = storage_account
            __props__['storage_account_key'] = storage_account_key
            __props__['storage_account_resource_id'] = storage_account_resource_id
            __props__['storage_account_share_name'] = storage_account_share_name
            __props__['storage_account_tenant_id'] = storage_account_tenant_id
            if storage_sync_service_name is None and not opts.urn:
                raise TypeError("Missing required property 'storage_sync_service_name'")
            __props__['storage_sync_service_name'] = storage_sync_service_name
            if sync_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'sync_group_name'")
            __props__['sync_group_name'] = sync_group_name
            __props__['backup_enabled'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:storagesync/latest:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20180402:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20180701:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20181001:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20190201:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20190301:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20190601:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20191001:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20200301:CloudEndpoint"), pulumi.Alias(type_="azure-nextgen:storagesync/v20200901:CloudEndpoint")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(CloudEndpoint, __self__).__init__(
            'azure-nextgen:storagesync/v20170605preview:CloudEndpoint',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'CloudEndpoint':
        """
        Get an existing CloudEndpoint resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return CloudEndpoint(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="backupEnabled")
    def backup_enabled(self) -> pulumi.Output[bool]:
        """
        Backup Enabled
        """
        return pulumi.get(self, "backup_enabled")

    @property
    @pulumi.getter(name="friendlyName")
    def friendly_name(self) -> pulumi.Output[Optional[str]]:
        """
        Friendly Name
        """
        return pulumi.get(self, "friendly_name")

    @property
    @pulumi.getter(name="lastWorkflowId")
    def last_workflow_id(self) -> pulumi.Output[Optional[str]]:
        """
        CloudEndpoint lastWorkflowId
        """
        return pulumi.get(self, "last_workflow_id")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="partnershipId")
    def partnership_id(self) -> pulumi.Output[Optional[str]]:
        """
        Partnership Id
        """
        return pulumi.get(self, "partnership_id")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[Optional[str]]:
        """
        CloudEndpoint Provisioning State
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="storageAccount")
    def storage_account(self) -> pulumi.Output[Optional[str]]:
        """
        Storage Account name.
        """
        return pulumi.get(self, "storage_account")

    @property
    @pulumi.getter(name="storageAccountKey")
    def storage_account_key(self) -> pulumi.Output[Optional[str]]:
        """
        Storage Account access key.
        """
        return pulumi.get(self, "storage_account_key")

    @property
    @pulumi.getter(name="storageAccountResourceId")
    def storage_account_resource_id(self) -> pulumi.Output[Optional[str]]:
        """
        Storage Account Resource Id
        """
        return pulumi.get(self, "storage_account_resource_id")

    @property
    @pulumi.getter(name="storageAccountShareName")
    def storage_account_share_name(self) -> pulumi.Output[Optional[str]]:
        """
        Storage Account Share name
        """
        return pulumi.get(self, "storage_account_share_name")

    @property
    @pulumi.getter(name="storageAccountTenantId")
    def storage_account_tenant_id(self) -> pulumi.Output[Optional[str]]:
        """
        Storage Account Tenant Id
        """
        return pulumi.get(self, "storage_account_tenant_id")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

