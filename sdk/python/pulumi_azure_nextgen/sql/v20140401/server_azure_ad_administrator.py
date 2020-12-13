# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['ServerAzureADAdministrator']


class ServerAzureADAdministrator(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 administrator_name: Optional[pulumi.Input[str]] = None,
                 administrator_type: Optional[pulumi.Input[Union[str, 'AdministratorType']]] = None,
                 login: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 server_name: Optional[pulumi.Input[str]] = None,
                 sid: Optional[pulumi.Input[str]] = None,
                 tenant_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An server Active Directory Administrator.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] administrator_name: Name of the server administrator resource.
        :param pulumi.Input[Union[str, 'AdministratorType']] administrator_type: The type of administrator.
        :param pulumi.Input[str] login: The server administrator login value.
        :param pulumi.Input[str] resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        :param pulumi.Input[str] server_name: The name of the server.
        :param pulumi.Input[str] sid: The server administrator Sid (Secure ID).
        :param pulumi.Input[str] tenant_id: The server Active Directory Administrator tenant id.
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

            if administrator_name is None and not opts.urn:
                raise TypeError("Missing required property 'administrator_name'")
            __props__['administrator_name'] = administrator_name
            if administrator_type is None and not opts.urn:
                raise TypeError("Missing required property 'administrator_type'")
            __props__['administrator_type'] = administrator_type
            if login is None and not opts.urn:
                raise TypeError("Missing required property 'login'")
            __props__['login'] = login
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if server_name is None and not opts.urn:
                raise TypeError("Missing required property 'server_name'")
            __props__['server_name'] = server_name
            if sid is None and not opts.urn:
                raise TypeError("Missing required property 'sid'")
            __props__['sid'] = sid
            if tenant_id is None and not opts.urn:
                raise TypeError("Missing required property 'tenant_id'")
            __props__['tenant_id'] = tenant_id
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:sql/latest:ServerAzureADAdministrator"), pulumi.Alias(type_="azure-nextgen:sql/v20180601preview:ServerAzureADAdministrator"), pulumi.Alias(type_="azure-nextgen:sql/v20190601preview:ServerAzureADAdministrator"), pulumi.Alias(type_="azure-nextgen:sql/v20200801preview:ServerAzureADAdministrator")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ServerAzureADAdministrator, __self__).__init__(
            'azure-nextgen:sql/v20140401:ServerAzureADAdministrator',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ServerAzureADAdministrator':
        """
        Get an existing ServerAzureADAdministrator resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ServerAzureADAdministrator(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="administratorType")
    def administrator_type(self) -> pulumi.Output[str]:
        """
        The type of administrator.
        """
        return pulumi.get(self, "administrator_type")

    @property
    @pulumi.getter
    def login(self) -> pulumi.Output[str]:
        """
        The server administrator login value.
        """
        return pulumi.get(self, "login")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def sid(self) -> pulumi.Output[str]:
        """
        The server administrator Sid (Secure ID).
        """
        return pulumi.get(self, "sid")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> pulumi.Output[str]:
        """
        The server Active Directory Administrator tenant id.
        """
        return pulumi.get(self, "tenant_id")

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

