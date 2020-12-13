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

__all__ = ['PublishedBlueprint']


class PublishedBlueprint(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 blueprint_name: Optional[pulumi.Input[str]] = None,
                 change_notes: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['ParameterDefinitionArgs']]]]] = None,
                 resource_groups: Optional[pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['ResourceGroupDefinitionArgs']]]]] = None,
                 resource_scope: Optional[pulumi.Input[str]] = None,
                 target_scope: Optional[pulumi.Input[Union[str, 'BlueprintTargetScope']]] = None,
                 version_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Represents a published blueprint.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] blueprint_name: Name of the published blueprint definition.
        :param pulumi.Input[str] change_notes: Version-specific change notes.
        :param pulumi.Input[str] description: Multi-line explain this resource.
        :param pulumi.Input[str] display_name: One-liner string explain this resource.
        :param pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['ParameterDefinitionArgs']]]] parameters: Parameters required by this blueprint definition.
        :param pulumi.Input[Mapping[str, pulumi.Input[pulumi.InputType['ResourceGroupDefinitionArgs']]]] resource_groups: Resource group placeholders defined by this blueprint definition.
        :param pulumi.Input[str] resource_scope: The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
        :param pulumi.Input[Union[str, 'BlueprintTargetScope']] target_scope: The scope where this blueprint definition can be assigned.
        :param pulumi.Input[str] version_id: Version of the published blueprint definition.
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

            if blueprint_name is None and not opts.urn:
                raise TypeError("Missing required property 'blueprint_name'")
            __props__['blueprint_name'] = blueprint_name
            __props__['change_notes'] = change_notes
            __props__['description'] = description
            __props__['display_name'] = display_name
            __props__['parameters'] = parameters
            __props__['resource_groups'] = resource_groups
            if resource_scope is None and not opts.urn:
                raise TypeError("Missing required property 'resource_scope'")
            __props__['resource_scope'] = resource_scope
            __props__['target_scope'] = target_scope
            if version_id is None and not opts.urn:
                raise TypeError("Missing required property 'version_id'")
            __props__['version_id'] = version_id
            __props__['name'] = None
            __props__['status'] = None
            __props__['type'] = None
        super(PublishedBlueprint, __self__).__init__(
            'azure-nextgen:blueprint/v20181101preview:PublishedBlueprint',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'PublishedBlueprint':
        """
        Get an existing PublishedBlueprint resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return PublishedBlueprint(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="blueprintName")
    def blueprint_name(self) -> pulumi.Output[Optional[str]]:
        """
        Name of the published blueprint definition.
        """
        return pulumi.get(self, "blueprint_name")

    @property
    @pulumi.getter(name="changeNotes")
    def change_notes(self) -> pulumi.Output[Optional[str]]:
        """
        Version-specific change notes.
        """
        return pulumi.get(self, "change_notes")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        Multi-line explain this resource.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[Optional[str]]:
        """
        One-liner string explain this resource.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Name of this resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> pulumi.Output[Optional[Mapping[str, 'outputs.ParameterDefinitionResponse']]]:
        """
        Parameters required by this blueprint definition.
        """
        return pulumi.get(self, "parameters")

    @property
    @pulumi.getter(name="resourceGroups")
    def resource_groups(self) -> pulumi.Output[Optional[Mapping[str, 'outputs.ResourceGroupDefinitionResponse']]]:
        """
        Resource group placeholders defined by this blueprint definition.
        """
        return pulumi.get(self, "resource_groups")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output['outputs.BlueprintStatusResponse']:
        """
        Status of the blueprint. This field is readonly.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="targetScope")
    def target_scope(self) -> pulumi.Output[Optional[str]]:
        """
        The scope where this blueprint definition can be assigned.
        """
        return pulumi.get(self, "target_scope")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Type of this resource.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

