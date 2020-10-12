# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['ClusterPrincipalAssignment']


class ClusterPrincipalAssignment(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 cluster_name: Optional[pulumi.Input[str]] = None,
                 principal_assignment_name: Optional[pulumi.Input[str]] = None,
                 principal_id: Optional[pulumi.Input[str]] = None,
                 principal_type: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 role: Optional[pulumi.Input[str]] = None,
                 tenant_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Class representing a cluster principal assignment.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cluster_name: The name of the Kusto cluster.
        :param pulumi.Input[str] principal_assignment_name: The name of the Kusto principalAssignment.
        :param pulumi.Input[str] principal_id: The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
        :param pulumi.Input[str] principal_type: Principal type.
        :param pulumi.Input[str] resource_group_name: The name of the resource group containing the Kusto cluster.
        :param pulumi.Input[str] role: Cluster principal role.
        :param pulumi.Input[str] tenant_id: The tenant id of the principal
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

            if cluster_name is None:
                raise TypeError("Missing required property 'cluster_name'")
            __props__['cluster_name'] = cluster_name
            if principal_assignment_name is None:
                raise TypeError("Missing required property 'principal_assignment_name'")
            __props__['principal_assignment_name'] = principal_assignment_name
            if principal_id is None:
                raise TypeError("Missing required property 'principal_id'")
            __props__['principal_id'] = principal_id
            if principal_type is None:
                raise TypeError("Missing required property 'principal_type'")
            __props__['principal_type'] = principal_type
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if role is None:
                raise TypeError("Missing required property 'role'")
            __props__['role'] = role
            __props__['tenant_id'] = tenant_id
            __props__['name'] = None
            __props__['principal_name'] = None
            __props__['provisioning_state'] = None
            __props__['tenant_name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:kusto/latest:ClusterPrincipalAssignment"), pulumi.Alias(type_="azure-nextgen:kusto/v20191109:ClusterPrincipalAssignment"), pulumi.Alias(type_="azure-nextgen:kusto/v20200614:ClusterPrincipalAssignment"), pulumi.Alias(type_="azure-nextgen:kusto/v20200918:ClusterPrincipalAssignment")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ClusterPrincipalAssignment, __self__).__init__(
            'azure-nextgen:kusto/v20200215:ClusterPrincipalAssignment',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ClusterPrincipalAssignment':
        """
        Get an existing ClusterPrincipalAssignment resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ClusterPrincipalAssignment(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> pulumi.Output[str]:
        """
        The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="principalName")
    def principal_name(self) -> pulumi.Output[str]:
        """
        The principal name
        """
        return pulumi.get(self, "principal_name")

    @property
    @pulumi.getter(name="principalType")
    def principal_type(self) -> pulumi.Output[str]:
        """
        Principal type.
        """
        return pulumi.get(self, "principal_type")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioned state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def role(self) -> pulumi.Output[str]:
        """
        Cluster principal role.
        """
        return pulumi.get(self, "role")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> pulumi.Output[Optional[str]]:
        """
        The tenant id of the principal
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter(name="tenantName")
    def tenant_name(self) -> pulumi.Output[str]:
        """
        The tenant name of the principal
        """
        return pulumi.get(self, "tenant_name")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

