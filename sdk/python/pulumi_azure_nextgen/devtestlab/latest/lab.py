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

__all__ = ['Lab']


class Lab(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 announcement: Optional[pulumi.Input[pulumi.InputType['LabAnnouncementPropertiesArgs']]] = None,
                 environment_permission: Optional[pulumi.Input[Union[str, 'EnvironmentPermission']]] = None,
                 extended_properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 lab_storage_type: Optional[pulumi.Input[Union[str, 'StorageType']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 mandatory_artifacts_resource_ids_linux: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 mandatory_artifacts_resource_ids_windows: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 premium_data_disks: Optional[pulumi.Input[Union[str, 'PremiumDataDisk']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 support: Optional[pulumi.Input[pulumi.InputType['LabSupportPropertiesArgs']]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        A lab.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[pulumi.InputType['LabAnnouncementPropertiesArgs']] announcement: The properties of any lab announcement associated with this lab
        :param pulumi.Input[Union[str, 'EnvironmentPermission']] environment_permission: The access rights to be granted to the user when provisioning an environment
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] extended_properties: Extended properties of the lab used for experimental features
        :param pulumi.Input[Union[str, 'StorageType']] lab_storage_type: Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
        :param pulumi.Input[str] location: The location of the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] mandatory_artifacts_resource_ids_linux: The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] mandatory_artifacts_resource_ids_windows: The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
        :param pulumi.Input[str] name: The name of the lab.
        :param pulumi.Input[Union[str, 'PremiumDataDisk']] premium_data_disks: The setting to enable usage of premium data disks.
               When its value is 'Enabled', creation of standard or premium data disks is allowed.
               When its value is 'Disabled', only creation of standard data disks is allowed.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[pulumi.InputType['LabSupportPropertiesArgs']] support: The properties of any lab support message associated with this lab
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: The tags of the resource.
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

            __props__['announcement'] = announcement
            __props__['environment_permission'] = environment_permission
            __props__['extended_properties'] = extended_properties
            __props__['lab_storage_type'] = lab_storage_type
            __props__['location'] = location
            __props__['mandatory_artifacts_resource_ids_linux'] = mandatory_artifacts_resource_ids_linux
            __props__['mandatory_artifacts_resource_ids_windows'] = mandatory_artifacts_resource_ids_windows
            if name is None and not opts.urn:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['premium_data_disks'] = premium_data_disks
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['support'] = support
            __props__['tags'] = tags
            __props__['artifacts_storage_account'] = None
            __props__['created_date'] = None
            __props__['default_premium_storage_account'] = None
            __props__['default_storage_account'] = None
            __props__['load_balancer_id'] = None
            __props__['network_security_group_id'] = None
            __props__['premium_data_disk_storage_account'] = None
            __props__['provisioning_state'] = None
            __props__['public_ip_id'] = None
            __props__['type'] = None
            __props__['unique_identifier'] = None
            __props__['vault_name'] = None
            __props__['vm_creation_resource_group'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:devtestlab/v20150521preview:Lab"), pulumi.Alias(type_="azure-nextgen:devtestlab/v20160515:Lab"), pulumi.Alias(type_="azure-nextgen:devtestlab/v20180915:Lab")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Lab, __self__).__init__(
            'azure-nextgen:devtestlab/latest:Lab',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Lab':
        """
        Get an existing Lab resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Lab(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def announcement(self) -> pulumi.Output[Optional['outputs.LabAnnouncementPropertiesResponse']]:
        """
        The properties of any lab announcement associated with this lab
        """
        return pulumi.get(self, "announcement")

    @property
    @pulumi.getter(name="artifactsStorageAccount")
    def artifacts_storage_account(self) -> pulumi.Output[str]:
        """
        The lab's artifact storage account.
        """
        return pulumi.get(self, "artifacts_storage_account")

    @property
    @pulumi.getter(name="createdDate")
    def created_date(self) -> pulumi.Output[str]:
        """
        The creation date of the lab.
        """
        return pulumi.get(self, "created_date")

    @property
    @pulumi.getter(name="defaultPremiumStorageAccount")
    def default_premium_storage_account(self) -> pulumi.Output[str]:
        """
        The lab's default premium storage account.
        """
        return pulumi.get(self, "default_premium_storage_account")

    @property
    @pulumi.getter(name="defaultStorageAccount")
    def default_storage_account(self) -> pulumi.Output[str]:
        """
        The lab's default storage account.
        """
        return pulumi.get(self, "default_storage_account")

    @property
    @pulumi.getter(name="environmentPermission")
    def environment_permission(self) -> pulumi.Output[Optional[str]]:
        """
        The access rights to be granted to the user when provisioning an environment
        """
        return pulumi.get(self, "environment_permission")

    @property
    @pulumi.getter(name="extendedProperties")
    def extended_properties(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Extended properties of the lab used for experimental features
        """
        return pulumi.get(self, "extended_properties")

    @property
    @pulumi.getter(name="labStorageType")
    def lab_storage_type(self) -> pulumi.Output[Optional[str]]:
        """
        Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
        """
        return pulumi.get(self, "lab_storage_type")

    @property
    @pulumi.getter(name="loadBalancerId")
    def load_balancer_id(self) -> pulumi.Output[str]:
        """
        The load balancer used to for lab VMs that use shared IP address.
        """
        return pulumi.get(self, "load_balancer_id")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The location of the resource.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="mandatoryArtifactsResourceIdsLinux")
    def mandatory_artifacts_resource_ids_linux(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
        """
        return pulumi.get(self, "mandatory_artifacts_resource_ids_linux")

    @property
    @pulumi.getter(name="mandatoryArtifactsResourceIdsWindows")
    def mandatory_artifacts_resource_ids_windows(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
        """
        return pulumi.get(self, "mandatory_artifacts_resource_ids_windows")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="networkSecurityGroupId")
    def network_security_group_id(self) -> pulumi.Output[str]:
        """
        The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
        """
        return pulumi.get(self, "network_security_group_id")

    @property
    @pulumi.getter(name="premiumDataDiskStorageAccount")
    def premium_data_disk_storage_account(self) -> pulumi.Output[str]:
        """
        The lab's premium data disk storage account.
        """
        return pulumi.get(self, "premium_data_disk_storage_account")

    @property
    @pulumi.getter(name="premiumDataDisks")
    def premium_data_disks(self) -> pulumi.Output[Optional[str]]:
        """
        The setting to enable usage of premium data disks.
        When its value is 'Enabled', creation of standard or premium data disks is allowed.
        When its value is 'Disabled', only creation of standard data disks is allowed.
        """
        return pulumi.get(self, "premium_data_disks")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning status of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicIpId")
    def public_ip_id(self) -> pulumi.Output[str]:
        """
        The public IP address for the lab's load balancer.
        """
        return pulumi.get(self, "public_ip_id")

    @property
    @pulumi.getter
    def support(self) -> pulumi.Output[Optional['outputs.LabSupportPropertiesResponse']]:
        """
        The properties of any lab support message associated with this lab
        """
        return pulumi.get(self, "support")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        The tags of the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="uniqueIdentifier")
    def unique_identifier(self) -> pulumi.Output[str]:
        """
        The unique immutable identifier of a resource (Guid).
        """
        return pulumi.get(self, "unique_identifier")

    @property
    @pulumi.getter(name="vaultName")
    def vault_name(self) -> pulumi.Output[str]:
        """
        The lab's Key vault.
        """
        return pulumi.get(self, "vault_name")

    @property
    @pulumi.getter(name="vmCreationResourceGroup")
    def vm_creation_resource_group(self) -> pulumi.Output[str]:
        """
        The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
        """
        return pulumi.get(self, "vm_creation_resource_group")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

