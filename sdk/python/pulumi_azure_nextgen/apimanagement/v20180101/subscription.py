# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['Subscription']


class Subscription(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 notify: Optional[pulumi.Input[bool]] = None,
                 primary_key: Optional[pulumi.Input[str]] = None,
                 product_id: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 secondary_key: Optional[pulumi.Input[str]] = None,
                 service_name: Optional[pulumi.Input[str]] = None,
                 sid: Optional[pulumi.Input[str]] = None,
                 state: Optional[pulumi.Input['SubscriptionState']] = None,
                 user_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Subscription details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] display_name: Subscription name.
        :param pulumi.Input[bool] notify: Notify change in Subscription State. 
                - If false, do not send any email notification for change of state of subscription 
                - If true, send email notification of change of state of subscription 
        :param pulumi.Input[str] primary_key: Primary subscription key. If not specified during request key will be generated automatically.
        :param pulumi.Input[str] product_id: Product (product id path) for which subscription is being created in form /products/{productId}
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] secondary_key: Secondary subscription key. If not specified during request key will be generated automatically.
        :param pulumi.Input[str] service_name: The name of the API Management service.
        :param pulumi.Input[str] sid: Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
        :param pulumi.Input['SubscriptionState'] state: Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
        :param pulumi.Input[str] user_id: User (user id path) for whom subscription is being created in form /users/{uid}
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

            if display_name is None and not opts.urn:
                raise TypeError("Missing required property 'display_name'")
            __props__['display_name'] = display_name
            __props__['notify'] = notify
            __props__['primary_key'] = primary_key
            if product_id is None and not opts.urn:
                raise TypeError("Missing required property 'product_id'")
            __props__['product_id'] = product_id
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['secondary_key'] = secondary_key
            if service_name is None and not opts.urn:
                raise TypeError("Missing required property 'service_name'")
            __props__['service_name'] = service_name
            if sid is None and not opts.urn:
                raise TypeError("Missing required property 'sid'")
            __props__['sid'] = sid
            __props__['state'] = state
            if user_id is None and not opts.urn:
                raise TypeError("Missing required property 'user_id'")
            __props__['user_id'] = user_id
            __props__['created_date'] = None
            __props__['end_date'] = None
            __props__['expiration_date'] = None
            __props__['name'] = None
            __props__['notification_date'] = None
            __props__['start_date'] = None
            __props__['state_comment'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:apimanagement/latest:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20160707:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20161010:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20170301:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20180601preview:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20190101:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20191201preview:Subscription"), pulumi.Alias(type_="azure-nextgen:apimanagement/v20200601preview:Subscription")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Subscription, __self__).__init__(
            'azure-nextgen:apimanagement/v20180101:Subscription',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Subscription':
        """
        Get an existing Subscription resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Subscription(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="createdDate")
    def created_date(self) -> pulumi.Output[str]:
        """
        Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "created_date")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the subscription, or null if the subscription has no name.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="endDate")
    def end_date(self) -> pulumi.Output[Optional[str]]:
        """
        Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "end_date")

    @property
    @pulumi.getter(name="expirationDate")
    def expiration_date(self) -> pulumi.Output[Optional[str]]:
        """
        Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "expiration_date")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="notificationDate")
    def notification_date(self) -> pulumi.Output[Optional[str]]:
        """
        Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "notification_date")

    @property
    @pulumi.getter(name="primaryKey")
    def primary_key(self) -> pulumi.Output[str]:
        """
        Subscription primary key.
        """
        return pulumi.get(self, "primary_key")

    @property
    @pulumi.getter(name="productId")
    def product_id(self) -> pulumi.Output[str]:
        """
        The product resource identifier of the subscribed product. The value is a valid relative URL in the format of /products/{productId} where {productId} is a product identifier.
        """
        return pulumi.get(self, "product_id")

    @property
    @pulumi.getter(name="secondaryKey")
    def secondary_key(self) -> pulumi.Output[str]:
        """
        Subscription secondary key.
        """
        return pulumi.get(self, "secondary_key")

    @property
    @pulumi.getter(name="startDate")
    def start_date(self) -> pulumi.Output[Optional[str]]:
        """
        Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "start_date")

    @property
    @pulumi.getter
    def state(self) -> pulumi.Output[str]:
        """
        Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="stateComment")
    def state_comment(self) -> pulumi.Output[Optional[str]]:
        """
        Optional subscription comment added by an administrator.
        """
        return pulumi.get(self, "state_comment")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        Resource type for API Management resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userId")
    def user_id(self) -> pulumi.Output[str]:
        """
        The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{uid} where {uid} is a user identifier.
        """
        return pulumi.get(self, "user_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

