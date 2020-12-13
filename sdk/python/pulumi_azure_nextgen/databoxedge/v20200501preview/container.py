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

__all__ = ['Container']


class Container(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 container_name: Optional[pulumi.Input[str]] = None,
                 data_format: Optional[pulumi.Input[Union[str, 'AzureContainerDataFormat']]] = None,
                 device_name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 storage_account_name: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Represents a container on the  Data Box Edge/Gateway device.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] container_name: The container name.
        :param pulumi.Input[Union[str, 'AzureContainerDataFormat']] data_format: DataFormat for Container
        :param pulumi.Input[str] device_name: The device name.
        :param pulumi.Input[str] resource_group_name: The resource group name.
        :param pulumi.Input[str] storage_account_name: The Storage Account Name
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

            if container_name is None and not opts.urn:
                raise TypeError("Missing required property 'container_name'")
            __props__['container_name'] = container_name
            if data_format is None and not opts.urn:
                raise TypeError("Missing required property 'data_format'")
            __props__['data_format'] = data_format
            if device_name is None and not opts.urn:
                raise TypeError("Missing required property 'device_name'")
            __props__['device_name'] = device_name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if storage_account_name is None and not opts.urn:
                raise TypeError("Missing required property 'storage_account_name'")
            __props__['storage_account_name'] = storage_account_name
            __props__['container_status'] = None
            __props__['created_date_time'] = None
            __props__['name'] = None
            __props__['refresh_details'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:databoxedge/latest:Container"), pulumi.Alias(type_="azure-nextgen:databoxedge/v20190801:Container")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Container, __self__).__init__(
            'azure-nextgen:databoxedge/v20200501preview:Container',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Container':
        """
        Get an existing Container resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Container(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="containerStatus")
    def container_status(self) -> pulumi.Output[str]:
        """
        Current status of the container.
        """
        return pulumi.get(self, "container_status")

    @property
    @pulumi.getter(name="createdDateTime")
    def created_date_time(self) -> pulumi.Output[str]:
        """
        The UTC time when container got created.
        """
        return pulumi.get(self, "created_date_time")

    @property
    @pulumi.getter(name="dataFormat")
    def data_format(self) -> pulumi.Output[str]:
        """
        DataFormat for Container
        """
        return pulumi.get(self, "data_format")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The object name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="refreshDetails")
    def refresh_details(self) -> pulumi.Output['outputs.RefreshDetailsResponse']:
        """
        Details of the refresh job on this container.
        """
        return pulumi.get(self, "refresh_details")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The hierarchical type of the object.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

