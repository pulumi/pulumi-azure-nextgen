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

__all__ = ['PeerAsn']


class PeerAsn(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 peer_asn: Optional[pulumi.Input[int]] = None,
                 peer_asn_name: Optional[pulumi.Input[str]] = None,
                 peer_contact_detail: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ContactDetailArgs']]]]] = None,
                 peer_name: Optional[pulumi.Input[str]] = None,
                 validation_state: Optional[pulumi.Input[Union[str, 'ValidationState']]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        The essential information related to the peer's ASN.
        Latest API Version: 2020-10-01.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[int] peer_asn: The Autonomous System Number (ASN) of the peer.
        :param pulumi.Input[str] peer_asn_name: The peer ASN name.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ContactDetailArgs']]]] peer_contact_detail: The contact details of the peer.
        :param pulumi.Input[str] peer_name: The name of the peer.
        :param pulumi.Input[Union[str, 'ValidationState']] validation_state: The validation state of the ASN associated with the peer.
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

            __props__['peer_asn'] = peer_asn
            if peer_asn_name is None and not opts.urn:
                raise TypeError("Missing required property 'peer_asn_name'")
            __props__['peer_asn_name'] = peer_asn_name
            __props__['peer_contact_detail'] = peer_contact_detail
            __props__['peer_name'] = peer_name
            __props__['validation_state'] = validation_state
            __props__['error_message'] = None
            __props__['name'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:peering/v20190801preview:PeerAsn"), pulumi.Alias(type_="azure-nextgen:peering/v20190901preview:PeerAsn"), pulumi.Alias(type_="azure-nextgen:peering/v20200101preview:PeerAsn"), pulumi.Alias(type_="azure-nextgen:peering/v20200401:PeerAsn"), pulumi.Alias(type_="azure-nextgen:peering/v20201001:PeerAsn")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(PeerAsn, __self__).__init__(
            'azure-nextgen:peering/latest:PeerAsn',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'PeerAsn':
        """
        Get an existing PeerAsn resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return PeerAsn(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="errorMessage")
    def error_message(self) -> pulumi.Output[str]:
        """
        The error message for the validation state
        """
        return pulumi.get(self, "error_message")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="peerAsn")
    def peer_asn(self) -> pulumi.Output[Optional[int]]:
        """
        The Autonomous System Number (ASN) of the peer.
        """
        return pulumi.get(self, "peer_asn")

    @property
    @pulumi.getter(name="peerContactDetail")
    def peer_contact_detail(self) -> pulumi.Output[Optional[Sequence['outputs.ContactDetailResponse']]]:
        """
        The contact details of the peer.
        """
        return pulumi.get(self, "peer_contact_detail")

    @property
    @pulumi.getter(name="peerName")
    def peer_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the peer.
        """
        return pulumi.get(self, "peer_name")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="validationState")
    def validation_state(self) -> pulumi.Output[Optional[str]]:
        """
        The validation state of the ASN associated with the peer.
        """
        return pulumi.get(self, "validation_state")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

