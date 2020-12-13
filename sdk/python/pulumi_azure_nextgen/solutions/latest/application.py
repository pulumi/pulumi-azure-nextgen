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

__all__ = ['Application']


class Application(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 application_definition_id: Optional[pulumi.Input[str]] = None,
                 application_name: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input[pulumi.InputType['IdentityArgs']]] = None,
                 jit_access_policy: Optional[pulumi.Input[pulumi.InputType['ApplicationJitAccessPolicyArgs']]] = None,
                 kind: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 managed_by: Optional[pulumi.Input[str]] = None,
                 managed_resource_group_id: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[Any] = None,
                 plan: Optional[pulumi.Input[pulumi.InputType['PlanArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 sku: Optional[pulumi.Input[pulumi.InputType['SkuArgs']]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Information about managed application.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_definition_id: The fully qualified path of managed application definition Id.
        :param pulumi.Input[str] application_name: The name of the managed application.
        :param pulumi.Input[pulumi.InputType['IdentityArgs']] identity: The identity of the resource.
        :param pulumi.Input[pulumi.InputType['ApplicationJitAccessPolicyArgs']] jit_access_policy: The managed application Jit access policy.
        :param pulumi.Input[str] kind: The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
        :param pulumi.Input[str] location: Resource location
        :param pulumi.Input[str] managed_by: ID of the resource that manages this resource.
        :param pulumi.Input[str] managed_resource_group_id: The managed resource group Id.
        :param Any parameters: Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
        :param pulumi.Input[pulumi.InputType['PlanArgs']] plan: The plan information.
        :param pulumi.Input[str] resource_group_name: The name of the resource group. The name is case insensitive.
        :param pulumi.Input[pulumi.InputType['SkuArgs']] sku: The SKU of the resource.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags
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

            __props__['application_definition_id'] = application_definition_id
            if application_name is None and not opts.urn:
                raise TypeError("Missing required property 'application_name'")
            __props__['application_name'] = application_name
            __props__['identity'] = identity
            __props__['jit_access_policy'] = jit_access_policy
            if kind is None and not opts.urn:
                raise TypeError("Missing required property 'kind'")
            __props__['kind'] = kind
            __props__['location'] = location
            __props__['managed_by'] = managed_by
            __props__['managed_resource_group_id'] = managed_resource_group_id
            __props__['parameters'] = parameters
            __props__['plan'] = plan
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['artifacts'] = None
            __props__['authorizations'] = None
            __props__['billing_details'] = None
            __props__['created_by'] = None
            __props__['customer_support'] = None
            __props__['management_mode'] = None
            __props__['name'] = None
            __props__['outputs'] = None
            __props__['provisioning_state'] = None
            __props__['publisher_tenant_id'] = None
            __props__['support_urls'] = None
            __props__['type'] = None
            __props__['updated_by'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:solutions/v20170901:Application"), pulumi.Alias(type_="azure-nextgen:solutions/v20180601:Application"), pulumi.Alias(type_="azure-nextgen:solutions/v20190701:Application"), pulumi.Alias(type_="azure-nextgen:solutions/v20200821preview:Application")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Application, __self__).__init__(
            'azure-nextgen:solutions/latest:Application',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Application':
        """
        Get an existing Application resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Application(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="applicationDefinitionId")
    def application_definition_id(self) -> pulumi.Output[Optional[str]]:
        """
        The fully qualified path of managed application definition Id.
        """
        return pulumi.get(self, "application_definition_id")

    @property
    @pulumi.getter
    def artifacts(self) -> pulumi.Output[Sequence['outputs.ApplicationArtifactResponse']]:
        """
        The collection of managed application artifacts.
        """
        return pulumi.get(self, "artifacts")

    @property
    @pulumi.getter
    def authorizations(self) -> pulumi.Output[Sequence['outputs.ApplicationAuthorizationResponse']]:
        """
        The  read-only authorizations property that is retrieved from the application package.
        """
        return pulumi.get(self, "authorizations")

    @property
    @pulumi.getter(name="billingDetails")
    def billing_details(self) -> pulumi.Output['outputs.ApplicationBillingDetailsDefinitionResponse']:
        """
        The managed application billing details.
        """
        return pulumi.get(self, "billing_details")

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> pulumi.Output['outputs.ApplicationClientDetailsResponse']:
        """
        The client entity that created the JIT request.
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="customerSupport")
    def customer_support(self) -> pulumi.Output['outputs.ApplicationPackageContactResponse']:
        """
        The read-only customer support property that is retrieved from the application package.
        """
        return pulumi.get(self, "customer_support")

    @property
    @pulumi.getter
    def identity(self) -> pulumi.Output[Optional['outputs.IdentityResponse']]:
        """
        The identity of the resource.
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter(name="jitAccessPolicy")
    def jit_access_policy(self) -> pulumi.Output[Optional['outputs.ApplicationJitAccessPolicyResponse']]:
        """
        The managed application Jit access policy.
        """
        return pulumi.get(self, "jit_access_policy")

    @property
    @pulumi.getter
    def kind(self) -> pulumi.Output[str]:
        """
        The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="managedBy")
    def managed_by(self) -> pulumi.Output[Optional[str]]:
        """
        ID of the resource that manages this resource.
        """
        return pulumi.get(self, "managed_by")

    @property
    @pulumi.getter(name="managedResourceGroupId")
    def managed_resource_group_id(self) -> pulumi.Output[Optional[str]]:
        """
        The managed resource group Id.
        """
        return pulumi.get(self, "managed_resource_group_id")

    @property
    @pulumi.getter(name="managementMode")
    def management_mode(self) -> pulumi.Output[str]:
        """
        The managed application management mode.
        """
        return pulumi.get(self, "management_mode")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def outputs(self) -> pulumi.Output[Any]:
        """
        Name and value pairs that define the managed application outputs.
        """
        return pulumi.get(self, "outputs")

    @property
    @pulumi.getter
    def parameters(self) -> pulumi.Output[Optional[Any]]:
        """
        Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
        """
        return pulumi.get(self, "parameters")

    @property
    @pulumi.getter
    def plan(self) -> pulumi.Output[Optional['outputs.PlanResponse']]:
        """
        The plan information.
        """
        return pulumi.get(self, "plan")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The managed application provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publisherTenantId")
    def publisher_tenant_id(self) -> pulumi.Output[str]:
        """
        The publisher tenant Id.
        """
        return pulumi.get(self, "publisher_tenant_id")

    @property
    @pulumi.getter
    def sku(self) -> pulumi.Output[Optional['outputs.SkuResponse']]:
        """
        The SKU of the resource.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="supportUrls")
    def support_urls(self) -> pulumi.Output['outputs.ApplicationPackageSupportUrlsResponse']:
        """
        The read-only support URLs property that is retrieved from the application package.
        """
        return pulumi.get(self, "support_urls")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="updatedBy")
    def updated_by(self) -> pulumi.Output['outputs.ApplicationClientDetailsResponse']:
        """
        The client entity that last updated the JIT request.
        """
        return pulumi.get(self, "updated_by")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

