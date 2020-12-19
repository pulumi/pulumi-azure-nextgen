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

__all__ = ['IntegrationAccountMap']


class IntegrationAccountMap(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 content: Optional[pulumi.Input[str]] = None,
                 content_type: Optional[pulumi.Input[str]] = None,
                 integration_account_name: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 map_name: Optional[pulumi.Input[str]] = None,
                 map_type: Optional[pulumi.Input[Union[str, 'MapType']]] = None,
                 metadata: Optional[Any] = None,
                 parameters_schema: Optional[pulumi.Input[pulumi.InputType['IntegrationAccountMapPropertiesParametersSchemaArgs']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        The integration account map.
        Latest API Version: 2019-05-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] content: The content.
        :param pulumi.Input[str] content_type: The content type.
        :param pulumi.Input[str] integration_account_name: The integration account name.
        :param pulumi.Input[str] location: The resource location.
        :param pulumi.Input[str] map_name: The integration account map name.
        :param pulumi.Input[Union[str, 'MapType']] map_type: The map type.
        :param Any metadata: The metadata.
        :param pulumi.Input[pulumi.InputType['IntegrationAccountMapPropertiesParametersSchemaArgs']] parameters_schema: The parameters schema of integration account map.
        :param pulumi.Input[str] resource_group_name: The resource group name.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: The resource tags.
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

            __props__['content'] = content
            __props__['content_type'] = content_type
            if integration_account_name is None and not opts.urn:
                raise TypeError("Missing required property 'integration_account_name'")
            __props__['integration_account_name'] = integration_account_name
            __props__['location'] = location
            if map_name is None and not opts.urn:
                raise TypeError("Missing required property 'map_name'")
            __props__['map_name'] = map_name
            if map_type is None and not opts.urn:
                raise TypeError("Missing required property 'map_type'")
            __props__['map_type'] = map_type
            __props__['metadata'] = metadata
            __props__['parameters_schema'] = parameters_schema
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['changed_time'] = None
            __props__['content_link'] = None
            __props__['created_time'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:logic/v20150801preview:IntegrationAccountMap"), pulumi.Alias(type_="azure-nextgen:logic/v20160601:IntegrationAccountMap"), pulumi.Alias(type_="azure-nextgen:logic/v20180701preview:IntegrationAccountMap"), pulumi.Alias(type_="azure-nextgen:logic/v20190501:IntegrationAccountMap")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(IntegrationAccountMap, __self__).__init__(
            'azure-nextgen:logic/latest:IntegrationAccountMap',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'IntegrationAccountMap':
        """
        Get an existing IntegrationAccountMap resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return IntegrationAccountMap(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="changedTime")
    def changed_time(self) -> pulumi.Output[str]:
        """
        The changed time.
        """
        return pulumi.get(self, "changed_time")

    @property
    @pulumi.getter
    def content(self) -> pulumi.Output[Optional[str]]:
        """
        The content.
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter(name="contentLink")
    def content_link(self) -> pulumi.Output['outputs.ContentLinkResponse']:
        """
        The content link.
        """
        return pulumi.get(self, "content_link")

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> pulumi.Output[Optional[str]]:
        """
        The content type.
        """
        return pulumi.get(self, "content_type")

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> pulumi.Output[str]:
        """
        The created time.
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[Optional[str]]:
        """
        The resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="mapType")
    def map_type(self) -> pulumi.Output[str]:
        """
        The map type.
        """
        return pulumi.get(self, "map_type")

    @property
    @pulumi.getter
    def metadata(self) -> pulumi.Output[Optional[Any]]:
        """
        The metadata.
        """
        return pulumi.get(self, "metadata")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Gets the resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="parametersSchema")
    def parameters_schema(self) -> pulumi.Output[Optional['outputs.IntegrationAccountMapPropertiesResponseParametersSchema']]:
        """
        The parameters schema of integration account map.
        """
        return pulumi.get(self, "parameters_schema")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        The resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Gets the resource type.
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

