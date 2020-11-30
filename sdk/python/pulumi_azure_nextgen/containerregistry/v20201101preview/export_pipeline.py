# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['ExportPipeline']


class ExportPipeline(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 export_pipeline_name: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input[pulumi.InputType['IdentityPropertiesArgs']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 options: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 registry_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 target: Optional[pulumi.Input[pulumi.InputType['ExportPipelineTargetPropertiesArgs']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        An object that represents an export pipeline for a container registry.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] export_pipeline_name: The name of the export pipeline.
        :param pulumi.Input[pulumi.InputType['IdentityPropertiesArgs']] identity: The identity of the export pipeline.
        :param pulumi.Input[str] location: The location of the export pipeline.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] options: The list of all options configured for the pipeline.
        :param pulumi.Input[str] registry_name: The name of the container registry.
        :param pulumi.Input[str] resource_group_name: The name of the resource group to which the container registry belongs.
        :param pulumi.Input[pulumi.InputType['ExportPipelineTargetPropertiesArgs']] target: The target properties of the export pipeline.
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

            if export_pipeline_name is None:
                raise TypeError("Missing required property 'export_pipeline_name'")
            __props__['export_pipeline_name'] = export_pipeline_name
            __props__['identity'] = identity
            __props__['location'] = location
            __props__['options'] = options
            if registry_name is None:
                raise TypeError("Missing required property 'registry_name'")
            __props__['registry_name'] = registry_name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if target is None:
                raise TypeError("Missing required property 'target'")
            __props__['target'] = target
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['system_data'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:containerregistry/v20191201preview:ExportPipeline")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ExportPipeline, __self__).__init__(
            'azure-nextgen:containerregistry/v20201101preview:ExportPipeline',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ExportPipeline':
        """
        Get an existing ExportPipeline resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ExportPipeline(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def identity(self) -> pulumi.Output[Optional['outputs.IdentityPropertiesResponse']]:
        """
        The identity of the export pipeline.
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The location of the export pipeline.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def options(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The list of all options configured for the pipeline.
        """
        return pulumi.get(self, "options")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The provisioning state of the pipeline at the time the operation was called.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> pulumi.Output['outputs.SystemDataResponse']:
        """
        Metadata pertaining to creation and last modification of the resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def target(self) -> pulumi.Output['outputs.ExportPipelineTargetPropertiesResponse']:
        """
        The target properties of the export pipeline.
        """
        return pulumi.get(self, "target")

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

