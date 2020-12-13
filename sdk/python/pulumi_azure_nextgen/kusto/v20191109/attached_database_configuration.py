# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['AttachedDatabaseConfiguration']


class AttachedDatabaseConfiguration(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 attached_database_configuration_name: Optional[pulumi.Input[str]] = None,
                 cluster_name: Optional[pulumi.Input[str]] = None,
                 cluster_resource_id: Optional[pulumi.Input[str]] = None,
                 database_name: Optional[pulumi.Input[str]] = None,
                 default_principals_modification_kind: Optional[pulumi.Input[Union[str, 'DefaultPrincipalsModificationKind']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Class representing an attached database configuration.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] attached_database_configuration_name: The name of the attached database configuration.
        :param pulumi.Input[str] cluster_name: The name of the Kusto cluster.
        :param pulumi.Input[str] cluster_resource_id: The resource id of the cluster where the databases you would like to attach reside.
        :param pulumi.Input[str] database_name: The name of the database which you would like to attach, use * if you want to follow all current and future databases.
        :param pulumi.Input[Union[str, 'DefaultPrincipalsModificationKind']] default_principals_modification_kind: The default principals modification kind
        :param pulumi.Input[str] location: Resource location.
        :param pulumi.Input[str] resource_group_name: The name of the resource group containing the Kusto cluster.
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

            if attached_database_configuration_name is None and not opts.urn:
                raise TypeError("Missing required property 'attached_database_configuration_name'")
            __props__['attached_database_configuration_name'] = attached_database_configuration_name
            if cluster_name is None and not opts.urn:
                raise TypeError("Missing required property 'cluster_name'")
            __props__['cluster_name'] = cluster_name
            if cluster_resource_id is None and not opts.urn:
                raise TypeError("Missing required property 'cluster_resource_id'")
            __props__['cluster_resource_id'] = cluster_resource_id
            if database_name is None and not opts.urn:
                raise TypeError("Missing required property 'database_name'")
            __props__['database_name'] = database_name
            if default_principals_modification_kind is None and not opts.urn:
                raise TypeError("Missing required property 'default_principals_modification_kind'")
            __props__['default_principals_modification_kind'] = default_principals_modification_kind
            __props__['location'] = location
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['attached_database_names'] = None
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:kusto/latest:AttachedDatabaseConfiguration"), pulumi.Alias(type_="azure-nextgen:kusto/v20190907:AttachedDatabaseConfiguration"), pulumi.Alias(type_="azure-nextgen:kusto/v20200215:AttachedDatabaseConfiguration"), pulumi.Alias(type_="azure-nextgen:kusto/v20200614:AttachedDatabaseConfiguration"), pulumi.Alias(type_="azure-nextgen:kusto/v20200918:AttachedDatabaseConfiguration")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AttachedDatabaseConfiguration, __self__).__init__(
            'azure-nextgen:kusto/v20191109:AttachedDatabaseConfiguration',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AttachedDatabaseConfiguration':
        """
        Get an existing AttachedDatabaseConfiguration resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AttachedDatabaseConfiguration(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="attachedDatabaseNames")
    def attached_database_names(self) -> pulumi.Output[Sequence[str]]:
        """
        The list of databases from the clusterResourceId which are currently attached to the cluster.
        """
        return pulumi.get(self, "attached_database_names")

    @property
    @pulumi.getter(name="clusterResourceId")
    def cluster_resource_id(self) -> pulumi.Output[str]:
        """
        The resource id of the cluster where the databases you would like to attach reside.
        """
        return pulumi.get(self, "cluster_resource_id")

    @property
    @pulumi.getter(name="databaseName")
    def database_name(self) -> pulumi.Output[str]:
        """
        The name of the database which you would like to attach, use * if you want to follow all current and future databases.
        """
        return pulumi.get(self, "database_name")

    @property
    @pulumi.getter(name="defaultPrincipalsModificationKind")
    def default_principals_modification_kind(self) -> pulumi.Output[str]:
        """
        The default principals modification kind
        """
        return pulumi.get(self, "default_principals_modification_kind")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioned state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

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

