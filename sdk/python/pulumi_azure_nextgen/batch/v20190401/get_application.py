# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetApplicationResult',
    'AwaitableGetApplicationResult',
    'get_application',
]

@pulumi.output_type
class GetApplicationResult:
    """
    Contains information about an application in a Batch account.
    """
    def __init__(__self__, allow_updates=None, default_version=None, display_name=None, etag=None, id=None, name=None, type=None):
        if allow_updates and not isinstance(allow_updates, bool):
            raise TypeError("Expected argument 'allow_updates' to be a bool")
        pulumi.set(__self__, "allow_updates", allow_updates)
        if default_version and not isinstance(default_version, str):
            raise TypeError("Expected argument 'default_version' to be a str")
        pulumi.set(__self__, "default_version", default_version)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="allowUpdates")
    def allow_updates(self) -> Optional[bool]:
        """
        A value indicating whether packages within the application may be overwritten using the same version string.
        """
        return pulumi.get(self, "allow_updates")

    @property
    @pulumi.getter(name="defaultVersion")
    def default_version(self) -> Optional[str]:
        """
        The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
        """
        return pulumi.get(self, "default_version")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[str]:
        """
        The display name for the application.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        The ETag of the resource, used for concurrency statements.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The ID of the resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetApplicationResult(GetApplicationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetApplicationResult(
            allow_updates=self.allow_updates,
            default_version=self.default_version,
            display_name=self.display_name,
            etag=self.etag,
            id=self.id,
            name=self.name,
            type=self.type)


def get_application(account_name: Optional[str] = None,
                    application_name: Optional[str] = None,
                    resource_group_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetApplicationResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the Batch account.
    :param str application_name: The name of the application. This must be unique within the account.
    :param str resource_group_name: The name of the resource group that contains the Batch account.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['applicationName'] = application_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:batch/v20190401:getApplication', __args__, opts=opts, typ=GetApplicationResult).value

    return AwaitableGetApplicationResult(
        allow_updates=__ret__.allow_updates,
        default_version=__ret__.default_version,
        display_name=__ret__.display_name,
        etag=__ret__.etag,
        id=__ret__.id,
        name=__ret__.name,
        type=__ret__.type)
