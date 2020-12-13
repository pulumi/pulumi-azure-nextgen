# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetTriggerResult',
    'AwaitableGetTriggerResult',
    'get_trigger',
]

@pulumi.output_type
class GetTriggerResult:
    """
    A Trigger data transfer object.
    """
    def __init__(__self__, id=None, kind=None, name=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The resource id of the azure resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def kind(self) -> str:
        """
        Kind of synchronization
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the azure resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the azure resource
        """
        return pulumi.get(self, "type")


class AwaitableGetTriggerResult(GetTriggerResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTriggerResult(
            id=self.id,
            kind=self.kind,
            name=self.name,
            type=self.type)


def get_trigger(account_name: Optional[str] = None,
                resource_group_name: Optional[str] = None,
                share_subscription_name: Optional[str] = None,
                trigger_name: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetTriggerResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the share account.
    :param str resource_group_name: The resource group name.
    :param str share_subscription_name: The name of the shareSubscription.
    :param str trigger_name: The name of the trigger.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['shareSubscriptionName'] = share_subscription_name
    __args__['triggerName'] = trigger_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:datashare/v20181101preview:getTrigger', __args__, opts=opts, typ=GetTriggerResult).value

    return AwaitableGetTriggerResult(
        id=__ret__.id,
        kind=__ret__.kind,
        name=__ret__.name,
        type=__ret__.type)
