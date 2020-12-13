# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'IotDpsPropertiesDescriptionArgs',
    'IotDpsSkuInfoArgs',
    'IotHubDefinitionDescriptionArgs',
    'IpFilterRuleArgs',
    'SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs',
]

@pulumi.input_type
class IotDpsPropertiesDescriptionArgs:
    def __init__(__self__, *,
                 allocation_policy: Optional[pulumi.Input[Union[str, 'AllocationPolicy']]] = None,
                 authorization_policies: Optional[pulumi.Input[Sequence[pulumi.Input['SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs']]]] = None,
                 iot_hubs: Optional[pulumi.Input[Sequence[pulumi.Input['IotHubDefinitionDescriptionArgs']]]] = None,
                 ip_filter_rules: Optional[pulumi.Input[Sequence[pulumi.Input['IpFilterRuleArgs']]]] = None,
                 provisioning_state: Optional[pulumi.Input[str]] = None,
                 state: Optional[pulumi.Input[Union[str, 'State']]] = None):
        """
        the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
        :param pulumi.Input[Union[str, 'AllocationPolicy']] allocation_policy: Allocation policy to be used by this provisioning service.
        :param pulumi.Input[Sequence[pulumi.Input['SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs']]] authorization_policies: List of authorization keys for a provisioning service.
        :param pulumi.Input[Sequence[pulumi.Input['IotHubDefinitionDescriptionArgs']]] iot_hubs: List of IoT hubs associated with this provisioning service.
        :param pulumi.Input[Sequence[pulumi.Input['IpFilterRuleArgs']]] ip_filter_rules: The IP filter rules.
        :param pulumi.Input[str] provisioning_state: The ARM provisioning state of the provisioning service.
        :param pulumi.Input[Union[str, 'State']] state: Current state of the provisioning service.
        """
        if allocation_policy is not None:
            pulumi.set(__self__, "allocation_policy", allocation_policy)
        if authorization_policies is not None:
            pulumi.set(__self__, "authorization_policies", authorization_policies)
        if iot_hubs is not None:
            pulumi.set(__self__, "iot_hubs", iot_hubs)
        if ip_filter_rules is not None:
            pulumi.set(__self__, "ip_filter_rules", ip_filter_rules)
        if provisioning_state is not None:
            pulumi.set(__self__, "provisioning_state", provisioning_state)
        if state is not None:
            pulumi.set(__self__, "state", state)

    @property
    @pulumi.getter(name="allocationPolicy")
    def allocation_policy(self) -> Optional[pulumi.Input[Union[str, 'AllocationPolicy']]]:
        """
        Allocation policy to be used by this provisioning service.
        """
        return pulumi.get(self, "allocation_policy")

    @allocation_policy.setter
    def allocation_policy(self, value: Optional[pulumi.Input[Union[str, 'AllocationPolicy']]]):
        pulumi.set(self, "allocation_policy", value)

    @property
    @pulumi.getter(name="authorizationPolicies")
    def authorization_policies(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs']]]]:
        """
        List of authorization keys for a provisioning service.
        """
        return pulumi.get(self, "authorization_policies")

    @authorization_policies.setter
    def authorization_policies(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs']]]]):
        pulumi.set(self, "authorization_policies", value)

    @property
    @pulumi.getter(name="iotHubs")
    def iot_hubs(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['IotHubDefinitionDescriptionArgs']]]]:
        """
        List of IoT hubs associated with this provisioning service.
        """
        return pulumi.get(self, "iot_hubs")

    @iot_hubs.setter
    def iot_hubs(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['IotHubDefinitionDescriptionArgs']]]]):
        pulumi.set(self, "iot_hubs", value)

    @property
    @pulumi.getter(name="ipFilterRules")
    def ip_filter_rules(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['IpFilterRuleArgs']]]]:
        """
        The IP filter rules.
        """
        return pulumi.get(self, "ip_filter_rules")

    @ip_filter_rules.setter
    def ip_filter_rules(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['IpFilterRuleArgs']]]]):
        pulumi.set(self, "ip_filter_rules", value)

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[pulumi.Input[str]]:
        """
        The ARM provisioning state of the provisioning service.
        """
        return pulumi.get(self, "provisioning_state")

    @provisioning_state.setter
    def provisioning_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "provisioning_state", value)

    @property
    @pulumi.getter
    def state(self) -> Optional[pulumi.Input[Union[str, 'State']]]:
        """
        Current state of the provisioning service.
        """
        return pulumi.get(self, "state")

    @state.setter
    def state(self, value: Optional[pulumi.Input[Union[str, 'State']]]):
        pulumi.set(self, "state", value)


@pulumi.input_type
class IotDpsSkuInfoArgs:
    def __init__(__self__, *,
                 capacity: Optional[pulumi.Input[int]] = None,
                 name: Optional[pulumi.Input[Union[str, 'IotDpsSku']]] = None):
        """
        List of possible provisioning service SKUs.
        :param pulumi.Input[int] capacity: The number of units to provision
        :param pulumi.Input[Union[str, 'IotDpsSku']] name: Sku name.
        """
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def capacity(self) -> Optional[pulumi.Input[int]]:
        """
        The number of units to provision
        """
        return pulumi.get(self, "capacity")

    @capacity.setter
    def capacity(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "capacity", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[Union[str, 'IotDpsSku']]]:
        """
        Sku name.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[Union[str, 'IotDpsSku']]]):
        pulumi.set(self, "name", value)


@pulumi.input_type
class IotHubDefinitionDescriptionArgs:
    def __init__(__self__, *,
                 connection_string: pulumi.Input[str],
                 location: pulumi.Input[str],
                 allocation_weight: Optional[pulumi.Input[int]] = None,
                 apply_allocation_policy: Optional[pulumi.Input[bool]] = None):
        """
        Description of the IoT hub.
        :param pulumi.Input[str] connection_string: Connection string og the IoT hub.
        :param pulumi.Input[str] location: ARM region of the IoT hub.
        :param pulumi.Input[int] allocation_weight: weight to apply for a given iot h.
        :param pulumi.Input[bool] apply_allocation_policy: flag for applying allocationPolicy or not for a given iot hub.
        """
        pulumi.set(__self__, "connection_string", connection_string)
        pulumi.set(__self__, "location", location)
        if allocation_weight is not None:
            pulumi.set(__self__, "allocation_weight", allocation_weight)
        if apply_allocation_policy is not None:
            pulumi.set(__self__, "apply_allocation_policy", apply_allocation_policy)

    @property
    @pulumi.getter(name="connectionString")
    def connection_string(self) -> pulumi.Input[str]:
        """
        Connection string og the IoT hub.
        """
        return pulumi.get(self, "connection_string")

    @connection_string.setter
    def connection_string(self, value: pulumi.Input[str]):
        pulumi.set(self, "connection_string", value)

    @property
    @pulumi.getter
    def location(self) -> pulumi.Input[str]:
        """
        ARM region of the IoT hub.
        """
        return pulumi.get(self, "location")

    @location.setter
    def location(self, value: pulumi.Input[str]):
        pulumi.set(self, "location", value)

    @property
    @pulumi.getter(name="allocationWeight")
    def allocation_weight(self) -> Optional[pulumi.Input[int]]:
        """
        weight to apply for a given iot h.
        """
        return pulumi.get(self, "allocation_weight")

    @allocation_weight.setter
    def allocation_weight(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "allocation_weight", value)

    @property
    @pulumi.getter(name="applyAllocationPolicy")
    def apply_allocation_policy(self) -> Optional[pulumi.Input[bool]]:
        """
        flag for applying allocationPolicy or not for a given iot hub.
        """
        return pulumi.get(self, "apply_allocation_policy")

    @apply_allocation_policy.setter
    def apply_allocation_policy(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "apply_allocation_policy", value)


@pulumi.input_type
class IpFilterRuleArgs:
    def __init__(__self__, *,
                 action: pulumi.Input['IpFilterActionType'],
                 filter_name: pulumi.Input[str],
                 ip_mask: pulumi.Input[str],
                 target: Optional[pulumi.Input['IpFilterTargetType']] = None):
        """
        The IP filter rules for the IoT dps.
        :param pulumi.Input['IpFilterActionType'] action: The desired action for requests captured by this rule.
        :param pulumi.Input[str] filter_name: The name of the IP filter rule.
        :param pulumi.Input[str] ip_mask: A string that contains the IP address range in CIDR notation for the rule.
        :param pulumi.Input['IpFilterTargetType'] target: Target for requests captured by this rule.
        """
        pulumi.set(__self__, "action", action)
        pulumi.set(__self__, "filter_name", filter_name)
        pulumi.set(__self__, "ip_mask", ip_mask)
        if target is not None:
            pulumi.set(__self__, "target", target)

    @property
    @pulumi.getter
    def action(self) -> pulumi.Input['IpFilterActionType']:
        """
        The desired action for requests captured by this rule.
        """
        return pulumi.get(self, "action")

    @action.setter
    def action(self, value: pulumi.Input['IpFilterActionType']):
        pulumi.set(self, "action", value)

    @property
    @pulumi.getter(name="filterName")
    def filter_name(self) -> pulumi.Input[str]:
        """
        The name of the IP filter rule.
        """
        return pulumi.get(self, "filter_name")

    @filter_name.setter
    def filter_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "filter_name", value)

    @property
    @pulumi.getter(name="ipMask")
    def ip_mask(self) -> pulumi.Input[str]:
        """
        A string that contains the IP address range in CIDR notation for the rule.
        """
        return pulumi.get(self, "ip_mask")

    @ip_mask.setter
    def ip_mask(self, value: pulumi.Input[str]):
        pulumi.set(self, "ip_mask", value)

    @property
    @pulumi.getter
    def target(self) -> Optional[pulumi.Input['IpFilterTargetType']]:
        """
        Target for requests captured by this rule.
        """
        return pulumi.get(self, "target")

    @target.setter
    def target(self, value: Optional[pulumi.Input['IpFilterTargetType']]):
        pulumi.set(self, "target", value)


@pulumi.input_type
class SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs:
    def __init__(__self__, *,
                 key_name: pulumi.Input[str],
                 rights: pulumi.Input[Union[str, 'AccessRightsDescription']],
                 primary_key: Optional[pulumi.Input[str]] = None,
                 secondary_key: Optional[pulumi.Input[str]] = None):
        """
        Description of the shared access key.
        :param pulumi.Input[str] key_name: Name of the key.
        :param pulumi.Input[Union[str, 'AccessRightsDescription']] rights: Rights that this key has.
        :param pulumi.Input[str] primary_key: Primary SAS key value.
        :param pulumi.Input[str] secondary_key: Secondary SAS key value.
        """
        pulumi.set(__self__, "key_name", key_name)
        pulumi.set(__self__, "rights", rights)
        if primary_key is not None:
            pulumi.set(__self__, "primary_key", primary_key)
        if secondary_key is not None:
            pulumi.set(__self__, "secondary_key", secondary_key)

    @property
    @pulumi.getter(name="keyName")
    def key_name(self) -> pulumi.Input[str]:
        """
        Name of the key.
        """
        return pulumi.get(self, "key_name")

    @key_name.setter
    def key_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "key_name", value)

    @property
    @pulumi.getter
    def rights(self) -> pulumi.Input[Union[str, 'AccessRightsDescription']]:
        """
        Rights that this key has.
        """
        return pulumi.get(self, "rights")

    @rights.setter
    def rights(self, value: pulumi.Input[Union[str, 'AccessRightsDescription']]):
        pulumi.set(self, "rights", value)

    @property
    @pulumi.getter(name="primaryKey")
    def primary_key(self) -> Optional[pulumi.Input[str]]:
        """
        Primary SAS key value.
        """
        return pulumi.get(self, "primary_key")

    @primary_key.setter
    def primary_key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "primary_key", value)

    @property
    @pulumi.getter(name="secondaryKey")
    def secondary_key(self) -> Optional[pulumi.Input[str]]:
        """
        Secondary SAS key value.
        """
        return pulumi.get(self, "secondary_key")

    @secondary_key.setter
    def secondary_key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "secondary_key", value)


