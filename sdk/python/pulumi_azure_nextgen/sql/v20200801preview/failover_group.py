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

__all__ = ['FailoverGroup']


class FailoverGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 databases: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 failover_group_name: Optional[pulumi.Input[str]] = None,
                 partner_servers: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PartnerInfoArgs']]]]] = None,
                 read_only_endpoint: Optional[pulumi.Input[pulumi.InputType['FailoverGroupReadOnlyEndpointArgs']]] = None,
                 read_write_endpoint: Optional[pulumi.Input[pulumi.InputType['FailoverGroupReadWriteEndpointArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 server_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        A failover group.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] databases: List of databases in the failover group.
        :param pulumi.Input[str] failover_group_name: The name of the failover group.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['PartnerInfoArgs']]]] partner_servers: List of partner server information for the failover group.
        :param pulumi.Input[pulumi.InputType['FailoverGroupReadOnlyEndpointArgs']] read_only_endpoint: Read-only endpoint of the failover group instance.
        :param pulumi.Input[pulumi.InputType['FailoverGroupReadWriteEndpointArgs']] read_write_endpoint: Read-write endpoint of the failover group instance.
        :param pulumi.Input[str] resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        :param pulumi.Input[str] server_name: The name of the server containing the failover group.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
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

            __props__['databases'] = databases
            if failover_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'failover_group_name'")
            __props__['failover_group_name'] = failover_group_name
            if partner_servers is None and not opts.urn:
                raise TypeError("Missing required property 'partner_servers'")
            __props__['partner_servers'] = partner_servers
            __props__['read_only_endpoint'] = read_only_endpoint
            if read_write_endpoint is None and not opts.urn:
                raise TypeError("Missing required property 'read_write_endpoint'")
            __props__['read_write_endpoint'] = read_write_endpoint
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if server_name is None and not opts.urn:
                raise TypeError("Missing required property 'server_name'")
            __props__['server_name'] = server_name
            __props__['tags'] = tags
            __props__['location'] = None
            __props__['name'] = None
            __props__['replication_role'] = None
            __props__['replication_state'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:sql/v20150501preview:FailoverGroup"), pulumi.Alias(type_="azure-nextgen:sql/v20200202preview:FailoverGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(FailoverGroup, __self__).__init__(
            'azure-nextgen:sql/v20200801preview:FailoverGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'FailoverGroup':
        """
        Get an existing FailoverGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return FailoverGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def databases(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        List of databases in the failover group.
        """
        return pulumi.get(self, "databases")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="partnerServers")
    def partner_servers(self) -> pulumi.Output[Sequence['outputs.PartnerInfoResponse']]:
        """
        List of partner server information for the failover group.
        """
        return pulumi.get(self, "partner_servers")

    @property
    @pulumi.getter(name="readOnlyEndpoint")
    def read_only_endpoint(self) -> pulumi.Output[Optional['outputs.FailoverGroupReadOnlyEndpointResponse']]:
        """
        Read-only endpoint of the failover group instance.
        """
        return pulumi.get(self, "read_only_endpoint")

    @property
    @pulumi.getter(name="readWriteEndpoint")
    def read_write_endpoint(self) -> pulumi.Output['outputs.FailoverGroupReadWriteEndpointResponse']:
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
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

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

