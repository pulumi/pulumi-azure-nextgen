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
                 application_resource_name: Optional[pulumi.Input[str]] = None,
                 debug_params: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 diagnostics: Optional[pulumi.Input[pulumi.InputType['DiagnosticsDescriptionArgs']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 services: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ServiceResourceDescriptionArgs']]]]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        This type describes an application resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_resource_name: The identity of the application.
        :param pulumi.Input[str] debug_params: Internal - used by Visual Studio to setup the debugging session on the local development environment.
        :param pulumi.Input[str] description: User readable description of the application.
        :param pulumi.Input[pulumi.InputType['DiagnosticsDescriptionArgs']] diagnostics: Describes the diagnostics definition and usage for an application resource.
        :param pulumi.Input[str] location: The geo-location where the resource lives
        :param pulumi.Input[str] resource_group_name: Azure resource group name
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ServiceResourceDescriptionArgs']]]] services: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
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

            if application_resource_name is None and not opts.urn:
                raise TypeError("Missing required property 'application_resource_name'")
            __props__['application_resource_name'] = application_resource_name
            __props__['debug_params'] = debug_params
            __props__['description'] = description
            __props__['diagnostics'] = diagnostics
            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['services'] = services
            __props__['tags'] = tags
            __props__['health_state'] = None
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['service_names'] = None
            __props__['status'] = None
            __props__['status_details'] = None
            __props__['type'] = None
            __props__['unhealthy_evaluation'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:servicefabricmesh/v20180701preview:Application")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Application, __self__).__init__(
            'azure-nextgen:servicefabricmesh/v20180901preview:Application',
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
    @pulumi.getter(name="debugParams")
    def debug_params(self) -> pulumi.Output[Optional[str]]:
        """
        Internal - used by Visual Studio to setup the debugging session on the local development environment.
        """
        return pulumi.get(self, "debug_params")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        User readable description of the application.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def diagnostics(self) -> pulumi.Output[Optional['outputs.DiagnosticsDescriptionResponse']]:
        """
        Describes the diagnostics definition and usage for an application resource.
        """
        return pulumi.get(self, "diagnostics")

    @property
    @pulumi.getter(name="healthState")
    def health_state(self) -> pulumi.Output[str]:
        """
        Describes the health state of an application resource.
        """
        return pulumi.get(self, "health_state")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        The geo-location where the resource lives
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
        State of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="serviceNames")
    def service_names(self) -> pulumi.Output[Sequence[str]]:
        """
        Names of the services in the application.
        """
        return pulumi.get(self, "service_names")

    @property
    @pulumi.getter
    def services(self) -> pulumi.Output[Optional[Sequence['outputs.ServiceResourceDescriptionResponse']]]:
        """
        Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
        """
        return pulumi.get(self, "services")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[str]:
        """
        Status of the application.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="statusDetails")
    def status_details(self) -> pulumi.Output[str]:
        """
        Gives additional information about the current status of the application.
        """
        return pulumi.get(self, "status_details")

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
        The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="unhealthyEvaluation")
    def unhealthy_evaluation(self) -> pulumi.Output[str]:
        """
        When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.
        """
        return pulumi.get(self, "unhealthy_evaluation")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

