# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetManagedInstanceAzureADOnlyAuthenticationResult',
    'AwaitableGetManagedInstanceAzureADOnlyAuthenticationResult',
    'get_managed_instance_azure_ad_only_authentication',
]

@pulumi.output_type
class GetManagedInstanceAzureADOnlyAuthenticationResult:
    """
    Azure Active Directory only authentication.
    """
    def __init__(__self__, azure_ad_only_authentication=None, name=None, type=None):
        if azure_ad_only_authentication and not isinstance(azure_ad_only_authentication, bool):
            raise TypeError("Expected argument 'azure_ad_only_authentication' to be a bool")
        pulumi.set(__self__, "azure_ad_only_authentication", azure_ad_only_authentication)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="azureADOnlyAuthentication")
    def azure_ad_only_authentication(self) -> bool:
        """
        Azure Active Directory only Authentication enabled.
        """
        return pulumi.get(self, "azure_ad_only_authentication")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetManagedInstanceAzureADOnlyAuthenticationResult(GetManagedInstanceAzureADOnlyAuthenticationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetManagedInstanceAzureADOnlyAuthenticationResult(
            azure_ad_only_authentication=self.azure_ad_only_authentication,
            name=self.name,
            type=self.type)


def get_managed_instance_azure_ad_only_authentication(authentication_name: Optional[str] = None,
                                                      managed_instance_name: Optional[str] = None,
                                                      resource_group_name: Optional[str] = None,
                                                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetManagedInstanceAzureADOnlyAuthenticationResult:
    """
    Use this data source to access information about an existing resource.

    :param str authentication_name: The name of server azure active directory only authentication.
    :param str managed_instance_name: The name of the managed instance.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    """
    __args__ = dict()
    __args__['authenticationName'] = authentication_name
    __args__['managedInstanceName'] = managed_instance_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/v20200801preview:getManagedInstanceAzureADOnlyAuthentication', __args__, opts=opts, typ=GetManagedInstanceAzureADOnlyAuthenticationResult).value

    return AwaitableGetManagedInstanceAzureADOnlyAuthenticationResult(
        azure_ad_only_authentication=__ret__.azure_ad_only_authentication,
        name=__ret__.name,
        type=__ret__.type)
