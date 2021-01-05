# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = ['AgentPool']


class AgentPool(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 agent_pool_name: Optional[pulumi.Input[str]] = None,
                 availability_zones: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 count: Optional[pulumi.Input[int]] = None,
                 enable_auto_scaling: Optional[pulumi.Input[bool]] = None,
                 enable_node_public_ip: Optional[pulumi.Input[bool]] = None,
                 max_count: Optional[pulumi.Input[int]] = None,
                 max_pods: Optional[pulumi.Input[int]] = None,
                 min_count: Optional[pulumi.Input[int]] = None,
                 node_taints: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 orchestrator_version: Optional[pulumi.Input[str]] = None,
                 os_disk_size_gb: Optional[pulumi.Input[int]] = None,
                 os_type: Optional[pulumi.Input[Union[str, 'OSType']]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 resource_name_: Optional[pulumi.Input[str]] = None,
                 scale_set_eviction_policy: Optional[pulumi.Input[Union[str, 'ScaleSetEvictionPolicy']]] = None,
                 scale_set_priority: Optional[pulumi.Input[Union[str, 'ScaleSetPriority']]] = None,
                 type: Optional[pulumi.Input[Union[str, 'AgentPoolType']]] = None,
                 vm_size: Optional[pulumi.Input[Union[str, 'ContainerServiceVMSizeTypes']]] = None,
                 vnet_subnet_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Agent Pool.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] agent_pool_name: The name of the agent pool.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] availability_zones: (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        :param pulumi.Input[int] count: Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
        :param pulumi.Input[bool] enable_auto_scaling: Whether to enable auto-scaler
        :param pulumi.Input[bool] enable_node_public_ip: Enable public IP for nodes
        :param pulumi.Input[int] max_count: Maximum number of nodes for auto-scaling
        :param pulumi.Input[int] max_pods: Maximum number of pods that can run on a node.
        :param pulumi.Input[int] min_count: Minimum number of nodes for auto-scaling
        :param pulumi.Input[Sequence[pulumi.Input[str]]] node_taints: Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        :param pulumi.Input[str] orchestrator_version: Version of orchestrator specified when creating the managed cluster.
        :param pulumi.Input[int] os_disk_size_gb: OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        :param pulumi.Input[Union[str, 'OSType']] os_type: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        :param pulumi.Input[str] resource_group_name: The name of the resource group.
        :param pulumi.Input[str] resource_name_: The name of the managed cluster resource.
        :param pulumi.Input[Union[str, 'ScaleSetEvictionPolicy']] scale_set_eviction_policy: ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
        :param pulumi.Input[Union[str, 'ScaleSetPriority']] scale_set_priority: ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        :param pulumi.Input[Union[str, 'AgentPoolType']] type: AgentPoolType represents types of an agent pool
        :param pulumi.Input[Union[str, 'ContainerServiceVMSizeTypes']] vm_size: Size of agent VMs.
        :param pulumi.Input[str] vnet_subnet_id: VNet SubnetID specifies the VNet's subnet identifier.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if agent_pool_name is None and not opts.urn:
                raise TypeError("Missing required property 'agent_pool_name'")
            __props__['agent_pool_name'] = agent_pool_name
            __props__['availability_zones'] = availability_zones
            __props__['count'] = count
            __props__['enable_auto_scaling'] = enable_auto_scaling
            __props__['enable_node_public_ip'] = enable_node_public_ip
            __props__['max_count'] = max_count
            __props__['max_pods'] = max_pods
            __props__['min_count'] = min_count
            __props__['node_taints'] = node_taints
            __props__['orchestrator_version'] = orchestrator_version
            __props__['os_disk_size_gb'] = os_disk_size_gb
            __props__['os_type'] = os_type
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if resource_name_ is None and not opts.urn:
                raise TypeError("Missing required property 'resource_name_'")
            __props__['resource_name'] = resource_name_
            __props__['scale_set_eviction_policy'] = scale_set_eviction_policy
            __props__['scale_set_priority'] = scale_set_priority
            __props__['type'] = type
            __props__['vm_size'] = vm_size
            __props__['vnet_subnet_id'] = vnet_subnet_id
            __props__['name'] = None
            __props__['provisioning_state'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:containerservice/latest:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20190201:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20190401:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20190601:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20191001:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20191101:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200101:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200201:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200301:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200401:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200601:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200701:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20200901:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20201101:AgentPool"), pulumi.Alias(type_="azure-nextgen:containerservice/v20201201:AgentPool")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(AgentPool, __self__).__init__(
            'azure-nextgen:containerservice/v20190801:AgentPool',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'AgentPool':
        """
        Get an existing AgentPool resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return AgentPool(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="availabilityZones")
    def availability_zones(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        """
        return pulumi.get(self, "availability_zones")

    @property
    @pulumi.getter
    def count(self) -> pulumi.Output[Optional[int]]:
        """
        Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
        """
        return pulumi.get(self, "count")

    @property
    @pulumi.getter(name="enableAutoScaling")
    def enable_auto_scaling(self) -> pulumi.Output[Optional[bool]]:
        """
        Whether to enable auto-scaler
        """
        return pulumi.get(self, "enable_auto_scaling")

    @property
    @pulumi.getter(name="enableNodePublicIP")
    def enable_node_public_ip(self) -> pulumi.Output[Optional[bool]]:
        """
        Enable public IP for nodes
        """
        return pulumi.get(self, "enable_node_public_ip")

    @property
    @pulumi.getter(name="maxCount")
    def max_count(self) -> pulumi.Output[Optional[int]]:
        """
        Maximum number of nodes for auto-scaling
        """
        return pulumi.get(self, "max_count")

    @property
    @pulumi.getter(name="maxPods")
    def max_pods(self) -> pulumi.Output[Optional[int]]:
        """
        Maximum number of pods that can run on a node.
        """
        return pulumi.get(self, "max_pods")

    @property
    @pulumi.getter(name="minCount")
    def min_count(self) -> pulumi.Output[Optional[int]]:
        """
        Minimum number of nodes for auto-scaling
        """
        return pulumi.get(self, "min_count")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource that is unique within a resource group. This name can be used to access the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="nodeTaints")
    def node_taints(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        """
        return pulumi.get(self, "node_taints")

    @property
    @pulumi.getter(name="orchestratorVersion")
    def orchestrator_version(self) -> pulumi.Output[Optional[str]]:
        """
        Version of orchestrator specified when creating the managed cluster.
        """
        return pulumi.get(self, "orchestrator_version")

    @property
    @pulumi.getter(name="osDiskSizeGB")
    def os_disk_size_gb(self) -> pulumi.Output[Optional[int]]:
        """
        OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        """
        return pulumi.get(self, "os_disk_size_gb")

    @property
    @pulumi.getter(name="osType")
    def os_type(self) -> pulumi.Output[Optional[str]]:
        """
        OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        """
        return pulumi.get(self, "os_type")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        The current deployment or provisioning state, which only appears in the response.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="scaleSetEvictionPolicy")
    def scale_set_eviction_policy(self) -> pulumi.Output[Optional[str]]:
        """
        ScaleSetEvictionPolicy to be used to specify eviction policy for low priority virtual machine scale set. Default to Delete.
        """
        return pulumi.get(self, "scale_set_eviction_policy")

    @property
    @pulumi.getter(name="scaleSetPriority")
    def scale_set_priority(self) -> pulumi.Output[Optional[str]]:
        """
        ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        """
        return pulumi.get(self, "scale_set_priority")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        AgentPoolType represents types of an agent pool
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="vmSize")
    def vm_size(self) -> pulumi.Output[Optional[str]]:
        """
        Size of agent VMs.
        """
        return pulumi.get(self, "vm_size")

    @property
    @pulumi.getter(name="vnetSubnetID")
    def vnet_subnet_id(self) -> pulumi.Output[Optional[str]]:
        """
        VNet SubnetID specifies the VNet's subnet identifier.
        """
        return pulumi.get(self, "vnet_subnet_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

