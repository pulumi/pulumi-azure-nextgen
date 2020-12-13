# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = ['IotDefenderSetting']


class IotDefenderSetting(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 device_quota: Optional[pulumi.Input[int]] = None,
                 sentinel_workspace_resource_ids: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        IoT Defender settings

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[int] device_quota: Size of the device quota (as a opposed to a Pay as You Go billing model). Value is required to be in multiples of 1000.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] sentinel_workspace_resource_ids: Sentinel Workspace Resource Ids
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

            if device_quota is None and not opts.urn:
                raise TypeError("Missing required property 'device_quota'")
            __props__['device_quota'] = device_quota
            if sentinel_workspace_resource_ids is None and not opts.urn:
                raise TypeError("Missing required property 'sentinel_workspace_resource_ids'")
            __props__['sentinel_workspace_resource_ids'] = sentinel_workspace_resource_ids
            __props__['name'] = None
            __props__['type'] = None
        super(IotDefenderSetting, __self__).__init__(
            'azure-nextgen:security/v20200806preview:IotDefenderSetting',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'IotDefenderSetting':
        """
        Get an existing IotDefenderSetting resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return IotDefenderSetting(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="deviceQuota")
    def device_quota(self) -> pulumi.Output[int]:
        """
        Size of the device quota (as a opposed to a Pay as You Go billing model). Value is required to be in multiples of 1000.
        """
        return pulumi.get(self, "device_quota")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="sentinelWorkspaceResourceIds")
    def sentinel_workspace_resource_ids(self) -> pulumi.Output[Sequence[str]]:
        """
        Sentinel Workspace Resource Ids
        """
        return pulumi.get(self, "sentinel_workspace_resource_ids")

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

