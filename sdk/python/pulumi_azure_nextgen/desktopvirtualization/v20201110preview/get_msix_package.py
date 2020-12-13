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
    'GetMSIXPackageResult',
    'AwaitableGetMSIXPackageResult',
    'get_msix_package',
]

@pulumi.output_type
class GetMSIXPackageResult:
    """
    Schema for MSIX Package properties.
    """
    def __init__(__self__, display_name=None, id=None, image_path=None, is_active=None, is_regular_registration=None, last_updated=None, name=None, package_applications=None, package_dependencies=None, package_family_name=None, package_name=None, package_relative_path=None, type=None, version=None):
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if image_path and not isinstance(image_path, str):
            raise TypeError("Expected argument 'image_path' to be a str")
        pulumi.set(__self__, "image_path", image_path)
        if is_active and not isinstance(is_active, bool):
            raise TypeError("Expected argument 'is_active' to be a bool")
        pulumi.set(__self__, "is_active", is_active)
        if is_regular_registration and not isinstance(is_regular_registration, bool):
            raise TypeError("Expected argument 'is_regular_registration' to be a bool")
        pulumi.set(__self__, "is_regular_registration", is_regular_registration)
        if last_updated and not isinstance(last_updated, str):
            raise TypeError("Expected argument 'last_updated' to be a str")
        pulumi.set(__self__, "last_updated", last_updated)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if package_applications and not isinstance(package_applications, list):
            raise TypeError("Expected argument 'package_applications' to be a list")
        pulumi.set(__self__, "package_applications", package_applications)
        if package_dependencies and not isinstance(package_dependencies, list):
            raise TypeError("Expected argument 'package_dependencies' to be a list")
        pulumi.set(__self__, "package_dependencies", package_dependencies)
        if package_family_name and not isinstance(package_family_name, str):
            raise TypeError("Expected argument 'package_family_name' to be a str")
        pulumi.set(__self__, "package_family_name", package_family_name)
        if package_name and not isinstance(package_name, str):
            raise TypeError("Expected argument 'package_name' to be a str")
        pulumi.set(__self__, "package_name", package_name)
        if package_relative_path and not isinstance(package_relative_path, str):
            raise TypeError("Expected argument 'package_relative_path' to be a str")
        pulumi.set(__self__, "package_relative_path", package_relative_path)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if version and not isinstance(version, str):
            raise TypeError("Expected argument 'version' to be a str")
        pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[str]:
        """
        User friendly Name to be displayed in the portal. 
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="imagePath")
    def image_path(self) -> Optional[str]:
        """
        VHD/CIM image path on Network Share.
        """
        return pulumi.get(self, "image_path")

    @property
    @pulumi.getter(name="isActive")
    def is_active(self) -> Optional[bool]:
        """
        Make this version of the package the active one across the hostpool. 
        """
        return pulumi.get(self, "is_active")

    @property
    @pulumi.getter(name="isRegularRegistration")
    def is_regular_registration(self) -> Optional[bool]:
        """
        Specifies how to register Package in feed.
        """
        return pulumi.get(self, "is_regular_registration")

    @property
    @pulumi.getter(name="lastUpdated")
    def last_updated(self) -> Optional[str]:
        """
        Date Package was last updated, found in the appxmanifest.xml. 
        """
        return pulumi.get(self, "last_updated")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="packageApplications")
    def package_applications(self) -> Optional[Sequence['outputs.MsixPackageApplicationsResponse']]:
        """
        List of package applications. 
        """
        return pulumi.get(self, "package_applications")

    @property
    @pulumi.getter(name="packageDependencies")
    def package_dependencies(self) -> Optional[Sequence['outputs.MsixPackageDependenciesResponse']]:
        """
        List of package dependencies. 
        """
        return pulumi.get(self, "package_dependencies")

    @property
    @pulumi.getter(name="packageFamilyName")
    def package_family_name(self) -> Optional[str]:
        """
        Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
        """
        return pulumi.get(self, "package_family_name")

    @property
    @pulumi.getter(name="packageName")
    def package_name(self) -> Optional[str]:
        """
        Package Name from appxmanifest.xml. 
        """
        return pulumi.get(self, "package_name")

    @property
    @pulumi.getter(name="packageRelativePath")
    def package_relative_path(self) -> Optional[str]:
        """
        Relative Path to the package inside the image. 
        """
        return pulumi.get(self, "package_relative_path")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        Package Version found in the appxmanifest.xml. 
        """
        return pulumi.get(self, "version")


class AwaitableGetMSIXPackageResult(GetMSIXPackageResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetMSIXPackageResult(
            display_name=self.display_name,
            id=self.id,
            image_path=self.image_path,
            is_active=self.is_active,
            is_regular_registration=self.is_regular_registration,
            last_updated=self.last_updated,
            name=self.name,
            package_applications=self.package_applications,
            package_dependencies=self.package_dependencies,
            package_family_name=self.package_family_name,
            package_name=self.package_name,
            package_relative_path=self.package_relative_path,
            type=self.type,
            version=self.version)


def get_msix_package(host_pool_name: Optional[str] = None,
                     msix_package_full_name: Optional[str] = None,
                     resource_group_name: Optional[str] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetMSIXPackageResult:
    """
    Use this data source to access information about an existing resource.

    :param str host_pool_name: The name of the host pool within the specified resource group
    :param str msix_package_full_name: The version specific package full name of the MSIX package within specified hostpool
    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    """
    __args__ = dict()
    __args__['hostPoolName'] = host_pool_name
    __args__['msixPackageFullName'] = msix_package_full_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:desktopvirtualization/v20201110preview:getMSIXPackage', __args__, opts=opts, typ=GetMSIXPackageResult).value

    return AwaitableGetMSIXPackageResult(
        display_name=__ret__.display_name,
        id=__ret__.id,
        image_path=__ret__.image_path,
        is_active=__ret__.is_active,
        is_regular_registration=__ret__.is_regular_registration,
        last_updated=__ret__.last_updated,
        name=__ret__.name,
        package_applications=__ret__.package_applications,
        package_dependencies=__ret__.package_dependencies,
        package_family_name=__ret__.package_family_name,
        package_name=__ret__.package_name,
        package_relative_path=__ret__.package_relative_path,
        type=__ret__.type,
        version=__ret__.version)
