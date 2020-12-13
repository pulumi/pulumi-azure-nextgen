# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetApplicationPackageResult',
    'AwaitableGetApplicationPackageResult',
    'get_application_package',
]

@pulumi.output_type
class GetApplicationPackageResult:
    """
    An application package which represents a particular version of an application.
    """
    def __init__(__self__, etag=None, format=None, id=None, last_activation_time=None, name=None, state=None, storage_url=None, storage_url_expiry=None, type=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if format and not isinstance(format, str):
            raise TypeError("Expected argument 'format' to be a str")
        pulumi.set(__self__, "format", format)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if last_activation_time and not isinstance(last_activation_time, str):
            raise TypeError("Expected argument 'last_activation_time' to be a str")
        pulumi.set(__self__, "last_activation_time", last_activation_time)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if state and not isinstance(state, str):
            raise TypeError("Expected argument 'state' to be a str")
        pulumi.set(__self__, "state", state)
        if storage_url and not isinstance(storage_url, str):
            raise TypeError("Expected argument 'storage_url' to be a str")
        pulumi.set(__self__, "storage_url", storage_url)
        if storage_url_expiry and not isinstance(storage_url_expiry, str):
            raise TypeError("Expected argument 'storage_url_expiry' to be a str")
        pulumi.set(__self__, "storage_url_expiry", storage_url_expiry)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        The ETag of the resource, used for concurrency statements.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def format(self) -> str:
        """
        The format of the application package, if the package is active.
        """
        return pulumi.get(self, "format")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The ID of the resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="lastActivationTime")
    def last_activation_time(self) -> str:
        """
        The time at which the package was last activated, if the package is active.
        """
        return pulumi.get(self, "last_activation_time")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def state(self) -> str:
        """
        The current state of the application package.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="storageUrl")
    def storage_url(self) -> str:
        """
        The URL for the application package in Azure Storage.
        """
        return pulumi.get(self, "storage_url")

    @property
    @pulumi.getter(name="storageUrlExpiry")
    def storage_url_expiry(self) -> str:
        """
        The UTC time at which the Azure Storage URL will expire.
        """
        return pulumi.get(self, "storage_url_expiry")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetApplicationPackageResult(GetApplicationPackageResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetApplicationPackageResult(
            etag=self.etag,
            format=self.format,
            id=self.id,
            last_activation_time=self.last_activation_time,
            name=self.name,
            state=self.state,
            storage_url=self.storage_url,
            storage_url_expiry=self.storage_url_expiry,
            type=self.type)


def get_application_package(account_name: Optional[str] = None,
                            application_name: Optional[str] = None,
                            resource_group_name: Optional[str] = None,
                            version_name: Optional[str] = None,
                            opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetApplicationPackageResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the Batch account.
    :param str application_name: The name of the application. This must be unique within the account.
    :param str resource_group_name: The name of the resource group that contains the Batch account.
    :param str version_name: The version of the application.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['applicationName'] = application_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['versionName'] = version_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:batch/v20200501:getApplicationPackage', __args__, opts=opts, typ=GetApplicationPackageResult).value

    return AwaitableGetApplicationPackageResult(
        etag=__ret__.etag,
        format=__ret__.format,
        id=__ret__.id,
        last_activation_time=__ret__.last_activation_time,
        name=__ret__.name,
        state=__ret__.state,
        storage_url=__ret__.storage_url,
        storage_url_expiry=__ret__.storage_url_expiry,
        type=__ret__.type)
