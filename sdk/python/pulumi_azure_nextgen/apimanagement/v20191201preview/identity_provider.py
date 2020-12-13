# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['IdentityProvider']


class IdentityProvider(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 allowed_tenants: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 authority: Optional[pulumi.Input[str]] = None,
                 client_id: Optional[pulumi.Input[str]] = None,
                 client_secret: Optional[pulumi.Input[str]] = None,
                 identity_provider_name: Optional[pulumi.Input[str]] = None,
                 password_reset_policy_name: Optional[pulumi.Input[str]] = None,
                 profile_editing_policy_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 service_name: Optional[pulumi.Input[str]] = None,
                 signin_policy_name: Optional[pulumi.Input[str]] = None,
                 signin_tenant: Optional[pulumi.Input[str]] = None,
                 signup_policy_name: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[Union[str, 'IdentityProviderType']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Identity Provider details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] allowed_tenants: List of Allowed Tenants when configuring Azure Active Directory login.
        :param pulumi.Input[str] authority: OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
        :param pulumi.Input[str] client_id: Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
        :param pulumi.Input[str] client_secret: Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        :param pulumi.Input[str] identity_provider_name: Identity Provider Type identifier.
        :param pulumi.Input[str] password_reset_policy_name: Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
        :param pulumi.Input[str] profile_editing_policy_name: Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] service_name: The name of the API Management service.
        :param pulumi.Input[str] signin_policy_name: Signin Policy Name. Only applies to AAD B2C Identity Provider.
        :param pulumi.Input[str] signin_tenant: The TenantId to use instead of Common when logging into Active Directory
        :param pulumi.Input[str] signup_policy_name: Signup Policy Name. Only applies to AAD B2C Identity Provider.
        :param pulumi.Input[Union[str, 'IdentityProviderType']] type: Identity Provider Type identifier.
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

            __props__['allowed_tenants'] = allowed_tenants
            __props__['authority'] = authority
            if client_id is None and not opts.urn:
                raise TypeError("Missing required property 'client_id'")
            __props__['client_id'] = client_id
            if client_secret is None and not opts.urn:
                raise TypeError("Missing required property 'client_secret'")
            __props__['client_secret'] = client_secret
            if identity_provider_name is None and not opts.urn:
                raise TypeError("Missing required property 'identity_provider_name'")
            __props__['identity_provider_name'] = identity_provider_name
            __props__['password_reset_policy_name'] = password_reset_policy_name
            __props__['profile_editing_policy_name'] = profile_editing_policy_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if service_name is None and not opts.urn:
                raise TypeError("Missing required property 'service_name'")
            __props__['service_name'] = service_name
            __props__['signin_policy_name'] = signin_policy_name
            __props__['signin_tenant'] = signin_tenant
            __props__['signup_policy_name'] = signup_policy_name
            __props__['type'] = type
            __props__['name'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:apimanagement/latest:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20160707:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20161010:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20170301:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180101:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180601preview:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20190101:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201:IdentityProvider"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20200601preview:IdentityProvider")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(IdentityProvider, __self__).__init__(
            'azure-nextgen:apimanagement/v20191201preview:IdentityProvider',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'IdentityProvider':
        """
        Get an existing IdentityProvider resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return IdentityProvider(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="allowedTenants")
    def allowed_tenants(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        List of Allowed Tenants when configuring Azure Active Directory login.
        """
        return pulumi.get(self, "allowed_tenants")

    @property
    @pulumi.getter
    def authority(self) -> pulumi.Output[Optional[str]]:
        """
        OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
        """
        return pulumi.get(self, "authority")

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Output[str]:
        """
        Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="clientSecret")
    def client_secret(self) -> pulumi.Output[Optional[str]]:
        """
        Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
        """
        return pulumi.get(self, "client_secret")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="passwordResetPolicyName")
    def password_reset_policy_name(self) -> pulumi.Output[Optional[str]]:
        """
        Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
        """
        return pulumi.get(self, "password_reset_policy_name")

    @property
    @pulumi.getter(name="profileEditingPolicyName")
    def profile_editing_policy_name(self) -> pulumi.Output[Optional[str]]:
        """
        Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
        """
        return pulumi.get(self, "profile_editing_policy_name")

    @property
    @pulumi.getter(name="signinPolicyName")
    def signin_policy_name(self) -> pulumi.Output[Optional[str]]:
        """
        Signin Policy Name. Only applies to AAD B2C Identity Provider.
        """
        return pulumi.get(self, "signin_policy_name")

    @property
    @pulumi.getter(name="signinTenant")
    def signin_tenant(self) -> pulumi.Output[Optional[str]]:
        """
        The TenantId to use instead of Common when logging into Active Directory
        """
        return pulumi.get(self, "signin_tenant")

    @property
    @pulumi.getter(name="signupPolicyName")
    def signup_policy_name(self) -> pulumi.Output[Optional[str]]:
        """
        Signup Policy Name. Only applies to AAD B2C Identity Provider.
        """
        return pulumi.get(self, "signup_policy_name")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type for API Management resource.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

