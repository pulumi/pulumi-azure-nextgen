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

__all__ = ['MaintenanceConfiguration']


class MaintenanceConfiguration(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 config_name: Optional[pulumi.Input[str]] = None,
                 not_allowed_time: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['TimeSpanArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 resource_name_: Optional[pulumi.Input[str]] = None,
                 time_in_week: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['TimeInWeekArgs']]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        maintenance configuration.
        Latest API Version: 2020-12-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] config_name: The name of the maintenance configuration.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['TimeSpanArgs']]]] not_allowed_time: Time slots on which upgrade is not allowed.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] resource_name_: The name of the managed cluster resource.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['TimeInWeekArgs']]]] time_in_week: Weekday time slots allowed to upgrade.
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

            if config_name is None and not opts.urn:
                raise TypeError("Missing required property 'config_name'")
            __props__['config_name'] = config_name
            __props__['not_allowed_time'] = not_allowed_time
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if resource_name_ is None and not opts.urn:
                raise TypeError("Missing required property 'resource_name_'")
            __props__['resource_name'] = resource_name_
            __props__['time_in_week'] = time_in_week
            __props__['name'] = None
            __props__['system_data'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:containerservice/v20201201:MaintenanceConfiguration")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(MaintenanceConfiguration, __self__).__init__(
            'azure-nextgen:containerservice/latest:MaintenanceConfiguration',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'MaintenanceConfiguration':
        """
        Get an existing MaintenanceConfiguration resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return MaintenanceConfiguration(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="notAllowedTime")
    def not_allowed_time(self) -> pulumi.Output[Optional[Sequence['outputs.TimeSpanResponse']]]:
        """
        Time slots on which upgrade is not allowed.
        """
        return pulumi.get(self, "not_allowed_time")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> pulumi.Output['outputs.SystemDataResponse']:
        """
        The system meta data relating to this resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter(name="timeInWeek")
    def time_in_week(self) -> pulumi.Output[Optional[Sequence['outputs.TimeInWeekResponse']]]:
        """
        Weekday time slots allowed to upgrade.
        """
        return pulumi.get(self, "time_in_week")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
