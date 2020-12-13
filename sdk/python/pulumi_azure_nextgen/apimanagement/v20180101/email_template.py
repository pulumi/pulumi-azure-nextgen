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

__all__ = ['EmailTemplate']


class EmailTemplate(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 body: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['EmailTemplateParametersContractPropertiesArgs']]]]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 service_name: Optional[pulumi.Input[str]] = None,
                 subject: Optional[pulumi.Input[str]] = None,
                 template_name: Optional[pulumi.Input[str]] = None,
                 title: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Email Template details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] body: Email Template Body. This should be a valid XDocument
        :param pulumi.Input[str] description: Description of the Email Template.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['EmailTemplateParametersContractPropertiesArgs']]]] parameters: Email Template Parameter values.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] service_name: The name of the API Management service.
        :param pulumi.Input[str] subject: Subject of the Template.
        :param pulumi.Input[str] template_name: Email Template Name Identifier.
        :param pulumi.Input[str] title: Title of the Template.
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

            __props__['body'] = body
            __props__['description'] = description
            __props__['parameters'] = parameters
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if service_name is None and not opts.urn:
                raise TypeError("Missing required property 'service_name'")
            __props__['service_name'] = service_name
            __props__['subject'] = subject
            if template_name is None and not opts.urn:
                raise TypeError("Missing required property 'template_name'")
            __props__['template_name'] = template_name
            __props__['title'] = title
            __props__['is_default'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:apimanagement/latest:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20170301:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180601preview:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20190101:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201preview:EmailTemplate"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20200601preview:EmailTemplate")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(EmailTemplate, __self__).__init__(
            'azure-nextgen:apimanagement/v20180101:EmailTemplate',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'EmailTemplate':
        """
        Get an existing EmailTemplate resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return EmailTemplate(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def body(self) -> pulumi.Output[str]:
        """
        Email Template Body. This should be a valid XDocument
        """
        return pulumi.get(self, "body")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        Description of the Email Template.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="isDefault")
    def is_default(self) -> pulumi.Output[bool]:
        """
        Whether the template is the default template provided by Api Management or has been edited.
        """
        return pulumi.get(self, "is_default")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> pulumi.Output[Optional[Sequence['outputs.EmailTemplateParametersContractPropertiesResponse']]]:
        """
        Email Template Parameter values.
        """
        return pulumi.get(self, "parameters")

    @property
    @pulumi.getter
    def subject(self) -> pulumi.Output[str]:
        """
        Subject of the Template.
        """
        return pulumi.get(self, "subject")

    @property
    @pulumi.getter
    def title(self) -> pulumi.Output[Optional[str]]:
        """
        Title of the Template.
        """
        return pulumi.get(self, "title")

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

