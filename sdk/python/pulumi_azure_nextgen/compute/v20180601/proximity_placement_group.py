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

__all__ = ['ProximityPlacementGroup']


class ProximityPlacementGroup(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 proximity_placement_group_name: Optional[pulumi.Input[str]] = None,
                 proximity_placement_group_type: Optional[pulumi.Input[Union[str, 'ProximityPlacementGroupType']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Specifies information about the proximity placement group.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Resource location
        :param pulumi.Input[str] proximity_placement_group_name: The name of the proximity placement group.
        :param pulumi.Input[Union[str, 'ProximityPlacementGroupType']] proximity_placement_group_type: Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
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

            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            if proximity_placement_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'proximity_placement_group_name'")
            __props__['proximity_placement_group_name'] = proximity_placement_group_name
            __props__['proximity_placement_group_type'] = proximity_placement_group_type
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['availability_sets'] = None
            __props__['name'] = None
            __props__['type'] = None
            __props__['virtual_machine_scale_sets'] = None
            __props__['virtual_machines'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:compute/latest:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20180401:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20181001:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20190301:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20190701:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20191201:ProximityPlacementGroup"), pulumi.Alias(type_="azure-nextgen:compute/v20200601:ProximityPlacementGroup")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(ProximityPlacementGroup, __self__).__init__(
            'azure-nextgen:compute/v20180601:ProximityPlacementGroup',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'ProximityPlacementGroup':
        """
        Get an existing ProximityPlacementGroup resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return ProximityPlacementGroup(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="availabilitySets")
    def availability_sets(self) -> pulumi.Output[Sequence['outputs.SubResourceResponse']]:
        """
        A list of references to all availability sets in the proximity placement group.
        """
        return pulumi.get(self, "availability_sets")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="proximityPlacementGroupType")
    def proximity_placement_group_type(self) -> pulumi.Output[Optional[str]]:
        """
        Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
        """
        return pulumi.get(self, "proximity_placement_group_type")

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
    @pulumi.getter(name="virtualMachineScaleSets")
    def virtual_machine_scale_sets(self) -> pulumi.Output[Sequence['outputs.SubResourceResponse']]:
        """
        A list of references to all virtual machine scale sets in the proximity placement group.
        """
        return pulumi.get(self, "virtual_machine_scale_sets")

    @property
    @pulumi.getter(name="virtualMachines")
    def virtual_machines(self) -> pulumi.Output[Sequence['outputs.SubResourceResponse']]:
        """
        A list of references to all virtual machines in the proximity placement group.
        """
        return pulumi.get(self, "virtual_machines")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

