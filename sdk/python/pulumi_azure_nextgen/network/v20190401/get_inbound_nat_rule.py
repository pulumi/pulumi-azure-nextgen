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
    'GetInboundNatRuleResult',
    'AwaitableGetInboundNatRuleResult',
    'get_inbound_nat_rule',
]

@pulumi.output_type
class GetInboundNatRuleResult:
    """
    Inbound NAT rule of the load balancer.
    """
    def __init__(__self__, backend_ip_configuration=None, backend_port=None, enable_floating_ip=None, enable_tcp_reset=None, etag=None, frontend_ip_configuration=None, frontend_port=None, id=None, idle_timeout_in_minutes=None, name=None, protocol=None, provisioning_state=None):
        if backend_ip_configuration and not isinstance(backend_ip_configuration, dict):
            raise TypeError("Expected argument 'backend_ip_configuration' to be a dict")
        pulumi.set(__self__, "backend_ip_configuration", backend_ip_configuration)
        if backend_port and not isinstance(backend_port, int):
            raise TypeError("Expected argument 'backend_port' to be a int")
        pulumi.set(__self__, "backend_port", backend_port)
        if enable_floating_ip and not isinstance(enable_floating_ip, bool):
            raise TypeError("Expected argument 'enable_floating_ip' to be a bool")
        pulumi.set(__self__, "enable_floating_ip", enable_floating_ip)
        if enable_tcp_reset and not isinstance(enable_tcp_reset, bool):
            raise TypeError("Expected argument 'enable_tcp_reset' to be a bool")
        pulumi.set(__self__, "enable_tcp_reset", enable_tcp_reset)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if frontend_ip_configuration and not isinstance(frontend_ip_configuration, dict):
            raise TypeError("Expected argument 'frontend_ip_configuration' to be a dict")
        pulumi.set(__self__, "frontend_ip_configuration", frontend_ip_configuration)
        if frontend_port and not isinstance(frontend_port, int):
            raise TypeError("Expected argument 'frontend_port' to be a int")
        pulumi.set(__self__, "frontend_port", frontend_port)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if idle_timeout_in_minutes and not isinstance(idle_timeout_in_minutes, int):
            raise TypeError("Expected argument 'idle_timeout_in_minutes' to be a int")
        pulumi.set(__self__, "idle_timeout_in_minutes", idle_timeout_in_minutes)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if protocol and not isinstance(protocol, str):
            raise TypeError("Expected argument 'protocol' to be a str")
        pulumi.set(__self__, "protocol", protocol)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)

    @property
    @pulumi.getter(name="backendIPConfiguration")
    def backend_ip_configuration(self) -> 'outputs.NetworkInterfaceIPConfigurationResponse':
        """
        A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
        """
        return pulumi.get(self, "backend_ip_configuration")

    @property
    @pulumi.getter(name="backendPort")
    def backend_port(self) -> Optional[int]:
        """
        The port used for the internal endpoint. Acceptable values range from 1 to 65535.
        """
        return pulumi.get(self, "backend_port")

    @property
    @pulumi.getter(name="enableFloatingIP")
    def enable_floating_ip(self) -> Optional[bool]:
        """
        Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
        """
        return pulumi.get(self, "enable_floating_ip")

    @property
    @pulumi.getter(name="enableTcpReset")
    def enable_tcp_reset(self) -> Optional[bool]:
        """
        Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
        """
        return pulumi.get(self, "enable_tcp_reset")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="frontendIPConfiguration")
    def frontend_ip_configuration(self) -> Optional['outputs.SubResourceResponse']:
        """
        A reference to frontend IP addresses.
        """
        return pulumi.get(self, "frontend_ip_configuration")

    @property
    @pulumi.getter(name="frontendPort")
    def frontend_port(self) -> Optional[int]:
        """
        The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
        """
        return pulumi.get(self, "frontend_port")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="idleTimeoutInMinutes")
    def idle_timeout_in_minutes(self) -> Optional[int]:
        """
        The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
        """
        return pulumi.get(self, "idle_timeout_in_minutes")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def protocol(self) -> Optional[str]:
        """
        The reference to the transport protocol used by the load balancing rule.
        """
        return pulumi.get(self, "protocol")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        """
        return pulumi.get(self, "provisioning_state")


class AwaitableGetInboundNatRuleResult(GetInboundNatRuleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetInboundNatRuleResult(
            backend_ip_configuration=self.backend_ip_configuration,
            backend_port=self.backend_port,
            enable_floating_ip=self.enable_floating_ip,
            enable_tcp_reset=self.enable_tcp_reset,
            etag=self.etag,
            frontend_ip_configuration=self.frontend_ip_configuration,
            frontend_port=self.frontend_port,
            id=self.id,
            idle_timeout_in_minutes=self.idle_timeout_in_minutes,
            name=self.name,
            protocol=self.protocol,
            provisioning_state=self.provisioning_state)


def get_inbound_nat_rule(expand: Optional[str] = None,
                         inbound_nat_rule_name: Optional[str] = None,
                         load_balancer_name: Optional[str] = None,
                         resource_group_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetInboundNatRuleResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Expands referenced resources.
    :param str inbound_nat_rule_name: The name of the inbound nat rule.
    :param str load_balancer_name: The name of the load balancer.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['inboundNatRuleName'] = inbound_nat_rule_name
    __args__['loadBalancerName'] = load_balancer_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190401:getInboundNatRule', __args__, opts=opts, typ=GetInboundNatRuleResult).value

    return AwaitableGetInboundNatRuleResult(
        backend_ip_configuration=__ret__.backend_ip_configuration,
        backend_port=__ret__.backend_port,
        enable_floating_ip=__ret__.enable_floating_ip,
        enable_tcp_reset=__ret__.enable_tcp_reset,
        etag=__ret__.etag,
        frontend_ip_configuration=__ret__.frontend_ip_configuration,
        frontend_port=__ret__.frontend_port,
        id=__ret__.id,
        idle_timeout_in_minutes=__ret__.idle_timeout_in_minutes,
        name=__ret__.name,
        protocol=__ret__.protocol,
        provisioning_state=__ret__.provisioning_state)
