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

__all__ = [
    'ListConnectedClusterUserCredentialsResult',
    'AwaitableListConnectedClusterUserCredentialsResult',
    'list_connected_cluster_user_credentials',
]

@pulumi.output_type
class ListConnectedClusterUserCredentialsResult:
    """
    The list of credential result response.
    """
    def __init__(__self__, hybrid_connection_config=None, kubeconfigs=None):
        if hybrid_connection_config and not isinstance(hybrid_connection_config, dict):
            raise TypeError("Expected argument 'hybrid_connection_config' to be a dict")
        pulumi.set(__self__, "hybrid_connection_config", hybrid_connection_config)
        if kubeconfigs and not isinstance(kubeconfigs, list):
            raise TypeError("Expected argument 'kubeconfigs' to be a list")
        pulumi.set(__self__, "kubeconfigs", kubeconfigs)

    @property
    @pulumi.getter(name="hybridConnectionConfig")
    def hybrid_connection_config(self) -> 'outputs.HybridConnectionConfigResponseResult':
        """
        Contains the REP (rendezvous endpoint) and “Sender” access token.
        """
        return pulumi.get(self, "hybrid_connection_config")

    @property
    @pulumi.getter
    def kubeconfigs(self) -> Sequence['outputs.CredentialResultResponseResult']:
        """
        Base64-encoded Kubernetes configuration file.
        """
        return pulumi.get(self, "kubeconfigs")


class AwaitableListConnectedClusterUserCredentialsResult(ListConnectedClusterUserCredentialsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ListConnectedClusterUserCredentialsResult(
            hybrid_connection_config=self.hybrid_connection_config,
            kubeconfigs=self.kubeconfigs)


def list_connected_cluster_user_credentials(authentication_method: Optional[Union[str, 'AuthenticationMethod']] = None,
                                            client_proxy: Optional[bool] = None,
                                            cluster_name: Optional[str] = None,
                                            resource_group_name: Optional[str] = None,
                                            opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableListConnectedClusterUserCredentialsResult:
    """
    Use this data source to access information about an existing resource.

    :param Union[str, 'AuthenticationMethod'] authentication_method: The mode of client authentication.
    :param bool client_proxy: Boolean value to indicate whether the request is for client side proxy or not
    :param str cluster_name: The name of the Kubernetes cluster on which get is called.
    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    """
    __args__ = dict()
    __args__['authenticationMethod'] = authentication_method
    __args__['clientProxy'] = client_proxy
    __args__['clusterName'] = cluster_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:kubernetes/v20210401preview:listConnectedClusterUserCredentials', __args__, opts=opts, typ=ListConnectedClusterUserCredentialsResult).value

    return AwaitableListConnectedClusterUserCredentialsResult(
        hybrid_connection_config=__ret__.hybrid_connection_config,
        kubeconfigs=__ret__.kubeconfigs)
