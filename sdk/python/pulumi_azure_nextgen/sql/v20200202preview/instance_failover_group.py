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

__all__ = ['InstanceFailoverGroup']


class InstanceFailoverGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 failover_group_name: Optional[pulumi.Input[str]] = None,
                 location_name: Optional[pulumi.Input[str]] = None,
                 managed_instance_pairs: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ManagedInstancePairInfoArgs']]]]] = None,
                 partner_regions: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PartnerRegionInfoArgs']]]]] = None,
                 read_only_endpoint: Optional[pulumi.Input[pulumi.InputType['InstanceFailoverGroupReadOnlyEndpointArgs']]] = None,
                 read_write_endpoint: Optional[pulumi.Input[pulumi.InputType['InstanceFailoverGroupReadWriteEndpointArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An instance failover group.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] failover_group_name: The name of the failover group.
        :param pulumi.Input[str] location_name: The name of the region where the resource is located.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ManagedInstancePairInfoArgs']]]] managed_instance_pairs: List of managed instance pairs in the failover group.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PartnerRegionInfoArgs']]]] partner_regions: Partner region information for the failover group.
        :param pulumi.Input[pulumi.InputType['InstanceFailoverGroupReadOnlyEndpointArgs']] read_only_endpoint: Read-only endpoint of the failover group instance.
        :param pulumi.Input[pulumi.InputType['InstanceFailoverGroupReadWriteEndpointArgs']] read_write_endpoint: Read-write endpoint of the failover group instance.
        :param pulumi.Input[str] resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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

            if failover_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'failover_group_name'")
            __props__['failover_group_name'] = failover_group_name
            if location_name is None and not opts.urn:
                raise TypeError("Missing required property 'location_name'")
            __props__['location_name'] = location_name
            if managed_instance_pairs is None and not opts.urn:
                raise TypeError("Missing required property 'managed_instance_pairs'")
            __props__['managed_instance_pairs'] = managed_instance_pairs
            if partner_regions is None and not opts.urn:
                raise TypeError("Missing required property 'partner_regions'")
            __props__['partner_regions'] = partner_regions
            __props__['read_only_endpoint'] = read_only_endpoint
            if read_write_endpoint is None and not opts.urn:
                raise TypeError("Missing required property 'read_write_endpoint'")
            __props__['read_write_endpoint'] = read_write_endpoint
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['name'] = None
            __props__['replication_role'] = None
            __props__['replication_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:sql/v20171001preview:InstanceFailoverGroup"), pulumi.Alias(type_="azure-nextgen:sql/v20200801preview:InstanceFailoverGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(InstanceFailoverGroup, __self__).__init__(
            'azure-nextgen:sql/v20200202preview:InstanceFailoverGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'InstanceFailoverGroup':
        """
        Get an existing InstanceFailoverGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return InstanceFailoverGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="managedInstancePairs")
    def managed_instance_pairs(self) -> pulumi.Output[Sequence['outputs.ManagedInstancePairInfoResponse']]:
        """
        List of managed instance pairs in the failover group.
        """
        return pulumi.get(self, "managed_instance_pairs")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="partnerRegions")
    def partner_regions(self) -> pulumi.Output[Sequence['outputs.PartnerRegionInfoResponse']]:
        """
        Partner region information for the failover group.
        """
        return pulumi.get(self, "partner_regions")

    @property
    @pulumi.getter(name="readOnlyEndpoint")
    def read_only_endpoint(self) -> pulumi.Output[Optional['outputs.InstanceFailoverGroupReadOnlyEndpointResponse']]:
        """
        Read-only endpoint of the failover group instance.
        """
        return pulumi.get(self, "read_only_endpoint")

    @property
    @pulumi.getter(name="readWriteEndpoint")
    def read_write_endpoint(self) -> pulumi.Output['outputs.InstanceFailoverGroupReadWriteEndpointResponse']:
        """
        Read-write endpoint of the failover group instance.
        """
        return pulumi.get(self, "read_write_endpoint")

    @property
    @pulumi.getter(name="replicationRole")
    def replication_role(self) -> pulumi.Output[str]:
        """
        Local replication role of the failover group instance.
        """
        return pulumi.get(self, "replication_role")

    @property
    @pulumi.getter(name="replicationState")
    def replication_state(self) -> pulumi.Output[str]:
        """
        Replication state of the failover group instance.
        """
        return pulumi.get(self, "replication_state")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

