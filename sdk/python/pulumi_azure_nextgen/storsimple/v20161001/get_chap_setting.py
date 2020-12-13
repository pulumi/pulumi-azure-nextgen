# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetChapSettingResult',
    'AwaitableGetChapSettingResult',
    'get_chap_setting',
]

@pulumi.output_type
class GetChapSettingResult:
    """
    Challenge-Handshake Authentication Protocol (CHAP) setting
    """
    def __init__(__self__, id=None, name=None, password=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if password and not isinstance(password, dict):
            raise TypeError("Expected argument 'password' to be a dict")
        pulumi.set(__self__, "password", password)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The identifier.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def password(self) -> 'outputs.AsymmetricEncryptedSecretResponse':
        """
        The chap password.
        """
        return pulumi.get(self, "password")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type.
        """
        return pulumi.get(self, "type")


class AwaitableGetChapSettingResult(GetChapSettingResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetChapSettingResult(
            id=self.id,
            name=self.name,
            password=self.password,
            type=self.type)


def get_chap_setting(chap_user_name: Optional[str] = None,
                     device_name: Optional[str] = None,
                     manager_name: Optional[str] = None,
                     resource_group_name: Optional[str] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetChapSettingResult:
    """
    Use this data source to access information about an existing resource.

    :param str chap_user_name: The user name of chap to be fetched.
    :param str device_name: The device name.
    :param str manager_name: The manager name
    :param str resource_group_name: The resource group name
    """
    __args__ = dict()
    __args__['chapUserName'] = chap_user_name
    __args__['deviceName'] = device_name
    __args__['managerName'] = manager_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:storsimple/v20161001:getChapSetting', __args__, opts=opts, typ=GetChapSettingResult).value

    return AwaitableGetChapSettingResult(
        id=__ret__.id,
        name=__ret__.name,
        password=__ret__.password,
        type=__ret__.type)
