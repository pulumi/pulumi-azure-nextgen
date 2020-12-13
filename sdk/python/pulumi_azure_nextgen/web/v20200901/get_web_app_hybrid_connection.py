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
    'GetWebAppHybridConnectionResult',
    'AwaitableGetWebAppHybridConnectionResult',
    'get_web_app_hybrid_connection',
]

@pulumi.output_type
class GetWebAppHybridConnectionResult:
    """
    Hybrid Connection contract. This is used to configure a Hybrid Connection.
    """
    def __init__(__self__, hostname=None, id=None, kind=None, name=None, port=None, relay_arm_uri=None, relay_name=None, send_key_name=None, send_key_value=None, service_bus_namespace=None, service_bus_suffix=None, system_data=None, type=None):
        if hostname and not isinstance(hostname, str):
            raise TypeError("Expected argument 'hostname' to be a str")
        pulumi.set(__self__, "hostname", hostname)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if port and not isinstance(port, int):
            raise TypeError("Expected argument 'port' to be a int")
        pulumi.set(__self__, "port", port)
        if relay_arm_uri and not isinstance(relay_arm_uri, str):
            raise TypeError("Expected argument 'relay_arm_uri' to be a str")
        pulumi.set(__self__, "relay_arm_uri", relay_arm_uri)
        if relay_name and not isinstance(relay_name, str):
            raise TypeError("Expected argument 'relay_name' to be a str")
        pulumi.set(__self__, "relay_name", relay_name)
        if send_key_name and not isinstance(send_key_name, str):
            raise TypeError("Expected argument 'send_key_name' to be a str")
        pulumi.set(__self__, "send_key_name", send_key_name)
        if send_key_value and not isinstance(send_key_value, str):
            raise TypeError("Expected argument 'send_key_value' to be a str")
        pulumi.set(__self__, "send_key_value", send_key_value)
        if service_bus_namespace and not isinstance(service_bus_namespace, str):
            raise TypeError("Expected argument 'service_bus_namespace' to be a str")
        pulumi.set(__self__, "service_bus_namespace", service_bus_namespace)
        if service_bus_suffix and not isinstance(service_bus_suffix, str):
            raise TypeError("Expected argument 'service_bus_suffix' to be a str")
        pulumi.set(__self__, "service_bus_suffix", service_bus_suffix)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def hostname(self) -> Optional[str]:
        """
        The hostname of the endpoint.
        """
        return pulumi.get(self, "hostname")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def port(self) -> Optional[int]:
        """
        The port of the endpoint.
        """
        return pulumi.get(self, "port")

    @property
    @pulumi.getter(name="relayArmUri")
    def relay_arm_uri(self) -> Optional[str]:
        """
        The ARM URI to the Service Bus relay.
        """
        return pulumi.get(self, "relay_arm_uri")

    @property
    @pulumi.getter(name="relayName")
    def relay_name(self) -> Optional[str]:
        """
        The name of the Service Bus relay.
        """
        return pulumi.get(self, "relay_name")

    @property
    @pulumi.getter(name="sendKeyName")
    def send_key_name(self) -> Optional[str]:
        """
        The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
        """
        return pulumi.get(self, "send_key_name")

    @property
    @pulumi.getter(name="sendKeyValue")
    def send_key_value(self) -> Optional[str]:
        """
        The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
        normally, use the POST /listKeys API instead.
        """
        return pulumi.get(self, "send_key_value")

    @property
    @pulumi.getter(name="serviceBusNamespace")
    def service_bus_namespace(self) -> Optional[str]:
        """
        The name of the Service Bus namespace.
        """
        return pulumi.get(self, "service_bus_namespace")

    @property
    @pulumi.getter(name="serviceBusSuffix")
    def service_bus_suffix(self) -> Optional[str]:
        """
        The suffix for the service bus endpoint. By default this is .servicebus.windows.net
        """
        return pulumi.get(self, "service_bus_suffix")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        The system metadata relating to this resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetWebAppHybridConnectionResult(GetWebAppHybridConnectionResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWebAppHybridConnectionResult(
            hostname=self.hostname,
            id=self.id,
            kind=self.kind,
            name=self.name,
            port=self.port,
            relay_arm_uri=self.relay_arm_uri,
            relay_name=self.relay_name,
            send_key_name=self.send_key_name,
            send_key_value=self.send_key_value,
            service_bus_namespace=self.service_bus_namespace,
            service_bus_suffix=self.service_bus_suffix,
            system_data=self.system_data,
            type=self.type)


def get_web_app_hybrid_connection(name: Optional[str] = None,
                                  namespace_name: Optional[str] = None,
                                  relay_name: Optional[str] = None,
                                  resource_group_name: Optional[str] = None,
                                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWebAppHybridConnectionResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: The name of the web app.
    :param str namespace_name: The namespace for this hybrid connection.
    :param str relay_name: The relay name for this hybrid connection.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['namespaceName'] = namespace_name
    __args__['relayName'] = relay_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/v20200901:getWebAppHybridConnection', __args__, opts=opts, typ=GetWebAppHybridConnectionResult).value

    return AwaitableGetWebAppHybridConnectionResult(
        hostname=__ret__.hostname,
        id=__ret__.id,
        kind=__ret__.kind,
        name=__ret__.name,
        port=__ret__.port,
        relay_arm_uri=__ret__.relay_arm_uri,
        relay_name=__ret__.relay_name,
        send_key_name=__ret__.send_key_name,
        send_key_value=__ret__.send_key_value,
        service_bus_namespace=__ret__.service_bus_namespace,
        service_bus_suffix=__ret__.service_bus_suffix,
        system_data=__ret__.system_data,
        type=__ret__.type)
