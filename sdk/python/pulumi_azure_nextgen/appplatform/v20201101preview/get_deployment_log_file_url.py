# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetDeploymentLogFileUrlResult',
    'AwaitableGetDeploymentLogFileUrlResult',
    'get_deployment_log_file_url',
]

@pulumi.output_type
class GetDeploymentLogFileUrlResult:
    """
    Log file URL payload
    """
    def __init__(__self__, url=None):
        if url and not isinstance(url, str):
            raise TypeError("Expected argument 'url' to be a str")
        pulumi.set(__self__, "url", url)

    @property
    @pulumi.getter
    def url(self) -> str:
        """
        URL of the log file
        """
        return pulumi.get(self, "url")


class AwaitableGetDeploymentLogFileUrlResult(GetDeploymentLogFileUrlResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDeploymentLogFileUrlResult(
            url=self.url)


def get_deployment_log_file_url(app_name: Optional[str] = None,
                                deployment_name: Optional[str] = None,
                                resource_group_name: Optional[str] = None,
                                service_name: Optional[str] = None,
                                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDeploymentLogFileUrlResult:
    """
    Use this data source to access information about an existing resource.

    :param str app_name: The name of the App resource.
    :param str deployment_name: The name of the Deployment resource.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    :param str service_name: The name of the Service resource.
    """
    __args__ = dict()
    __args__['appName'] = app_name
    __args__['deploymentName'] = deployment_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['serviceName'] = service_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:appplatform/v20201101preview:getDeploymentLogFileUrl', __args__, opts=opts, typ=GetDeploymentLogFileUrlResult).value

    return AwaitableGetDeploymentLogFileUrlResult(
        url=__ret__.url)
