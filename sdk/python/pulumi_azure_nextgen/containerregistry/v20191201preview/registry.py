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

__all__ = ['Registry']


class Registry(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 admin_user_enabled: Optional[pulumi.Input[bool]] = None,
                 data_endpoint_enabled: Optional[pulumi.Input[bool]] = None,
                 encryption: Optional[pulumi.Input[pulumi.InputType['EncryptionPropertyArgs']]] = None,
                 identity: Optional[pulumi.Input[pulumi.InputType['IdentityPropertiesArgs']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 network_rule_set: Optional[pulumi.Input[pulumi.InputType['NetworkRuleSetArgs']]] = None,
                 policies: Optional[pulumi.Input[pulumi.InputType['PoliciesArgs']]] = None,
                 public_network_access: Optional[pulumi.Input[Union[str, 'PublicNetworkAccess']]] = None,
                 registry_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 sku: Optional[pulumi.Input[pulumi.InputType['SkuArgs']]] = None,
                 storage_account: Optional[pulumi.Input[pulumi.InputType['StorageAccountPropertiesArgs']]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An object that represents a container registry.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] admin_user_enabled: The value that indicates whether the admin user is enabled.
        :param pulumi.Input[bool] data_endpoint_enabled: Enable a single data endpoint per region for serving data.
        :param pulumi.Input[pulumi.InputType['EncryptionPropertyArgs']] encryption: The encryption settings of container registry.
        :param pulumi.Input[pulumi.InputType['IdentityPropertiesArgs']] identity: The identity of the container registry.
        :param pulumi.Input[str] location: The location of the resource. This cannot be changed after the resource is created.
        :param pulumi.Input[pulumi.InputType['NetworkRuleSetArgs']] network_rule_set: The network rule set for a container registry.
        :param pulumi.Input[pulumi.InputType['PoliciesArgs']] policies: The policies for a container registry.
        :param pulumi.Input[Union[str, 'PublicNetworkAccess']] public_network_access: Whether or not public network access is allowed for the container registry.
        :param pulumi.Input[str] registry_name: The name of the container registry.
        :param pulumi.Input[str] resource_group_name: The name of the resource group to which the container registry belongs.
        :param pulumi.Input[pulumi.InputType['SkuArgs']] sku: The SKU of the container registry.
        :param pulumi.Input[pulumi.InputType['StorageAccountPropertiesArgs']] storage_account: The properties of the storage account for the container registry. Only applicable to Classic SKU.
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

            __props__['admin_user_enabled'] = admin_user_enabled
            __props__['data_endpoint_enabled'] = data_endpoint_enabled
            __props__['encryption'] = encryption
            __props__['identity'] = identity
            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            __props__['network_rule_set'] = network_rule_set
            __props__['policies'] = policies
            __props__['public_network_access'] = public_network_access
            if registry_name is None and not opts.urn:
                raise TypeError("Missing required property 'registry_name'")
            __props__['registry_name'] = registry_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku is None and not opts.urn:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['storage_account'] = storage_account
            __props__['tags'] = tags
            __props__['creation_date'] = None
            __props__['data_endpoint_host_names'] = None
            __props__['login_server'] = None
            __props__['name'] = None
            __props__['private_endpoint_connections'] = None
            __props__['provisioning_state'] = None
            __props__['status'] = None
            __props__['system_data'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:containerregistry/latest:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20160627preview:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20170301:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20170601preview:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20171001:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20190501:Registry"), pulumi.Alias(type_="azure-nextgen:containerregistry/v20201101preview:Registry")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Registry, __self__).__init__(
            'azure-nextgen:containerregistry/v20191201preview:Registry',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Registry':
        """
        Get an existing Registry resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Registry(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="adminUserEnabled")
    def admin_user_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        The value that indicates whether the admin user is enabled.
        """
        return pulumi.get(self, "admin_user_enabled")

    @property
    @pulumi.getter(name="creationDate")
    def creation_date(self) -> pulumi.Output[str]:
        """
        The creation date of the container registry in ISO8601 format.
        """
        return pulumi.get(self, "creation_date")

    @property
    @pulumi.getter(name="dataEndpointEnabled")
    def data_endpoint_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        Enable a single data endpoint per region for serving data.
        """
        return pulumi.get(self, "data_endpoint_enabled")

    @property
    @pulumi.getter(name="dataEndpointHostNames")
    def data_endpoint_host_names(self) -> pulumi.Output[Sequence[str]]:
        """
        List of host names that will serve data when dataEndpointEnabled is true.
        """
        return pulumi.get(self, "data_endpoint_host_names")

    @property
    @pulumi.getter
    def encryption(self) -> pulumi.Output[Optional['outputs.EncryptionPropertyResponse']]:
        """
        The encryption settings of container registry.
        """
        return pulumi.get(self, "encryption")

    @property
    @pulumi.getter
    def identity(self) -> pulumi.Output[Optional['outputs.IdentityPropertiesResponse']]:
        """
        The identity of the container registry.
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        The location of the resource. This cannot be changed after the resource is created.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="loginServer")
    def login_server(self) -> pulumi.Output[str]:
        """
        The URL that can be used to log into the container registry.
        """
        return pulumi.get(self, "login_server")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="networkRuleSet")
    def network_rule_set(self) -> pulumi.Output[Optional['outputs.NetworkRuleSetResponse']]:
        """
        The network rule set for a container registry.
        """
        return pulumi.get(self, "network_rule_set")

    @property
    @pulumi.getter
    def policies(self) -> pulumi.Output[Optional['outputs.PoliciesResponse']]:
        """
        The policies for a container registry.
        """
        return pulumi.get(self, "policies")

    @property
    @pulumi.getter(name="privateEndpointConnections")
    def private_endpoint_connections(self) -> pulumi.Output[Sequence['outputs.PrivateEndpointConnectionResponse']]:
        """
        List of private endpoint connections for a container registry.
        """
        return pulumi.get(self, "private_endpoint_connections")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the container registry at the time the operation was called.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicNetworkAccess")
    def public_network_access(self) -> pulumi.Output[Optional[str]]:
        """
        Whether or not public network access is allowed for the container registry.
        """
        return pulumi.get(self, "public_network_access")

    @property
    @pulumi.getter
    def sku(self) -> pulumi.Output['outputs.SkuResponse']:
        """
        The SKU of the container registry.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output['outputs.StatusResponse']:
        """
        The status of the container registry at the time the operation was called.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="storageAccount")
    def storage_account(self) -> pulumi.Output[Optional['outputs.StorageAccountPropertiesResponse']]:
        """
        The properties of the storage account for the container registry. Only applicable to Classic SKU.
        """
        return pulumi.get(self, "storage_account")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> pulumi.Output['outputs.SystemDataResponse']:
        """
        Metadata pertaining to creation and last modification of the resource.
        """
        return pulumi.get(self, "system_data")

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

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

