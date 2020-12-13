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
    'GetAFDOriginGroupResult',
    'AwaitableGetAFDOriginGroupResult',
    'get_afd_origin_group',
]

@pulumi.output_type
class GetAFDOriginGroupResult:
    """
    AFDOrigin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
    """
    def __init__(__self__, deployment_status=None, health_probe_settings=None, id=None, load_balancing_settings=None, name=None, provisioning_state=None, response_based_afd_origin_error_detection_settings=None, session_affinity_state=None, system_data=None, traffic_restoration_time_to_healed_or_new_endpoints_in_minutes=None, type=None):
        if deployment_status and not isinstance(deployment_status, str):
            raise TypeError("Expected argument 'deployment_status' to be a str")
        pulumi.set(__self__, "deployment_status", deployment_status)
        if health_probe_settings and not isinstance(health_probe_settings, dict):
            raise TypeError("Expected argument 'health_probe_settings' to be a dict")
        pulumi.set(__self__, "health_probe_settings", health_probe_settings)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if load_balancing_settings and not isinstance(load_balancing_settings, dict):
            raise TypeError("Expected argument 'load_balancing_settings' to be a dict")
        pulumi.set(__self__, "load_balancing_settings", load_balancing_settings)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if response_based_afd_origin_error_detection_settings and not isinstance(response_based_afd_origin_error_detection_settings, dict):
            raise TypeError("Expected argument 'response_based_afd_origin_error_detection_settings' to be a dict")
        pulumi.set(__self__, "response_based_afd_origin_error_detection_settings", response_based_afd_origin_error_detection_settings)
        if session_affinity_state and not isinstance(session_affinity_state, str):
            raise TypeError("Expected argument 'session_affinity_state' to be a str")
        pulumi.set(__self__, "session_affinity_state", session_affinity_state)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if traffic_restoration_time_to_healed_or_new_endpoints_in_minutes and not isinstance(traffic_restoration_time_to_healed_or_new_endpoints_in_minutes, int):
            raise TypeError("Expected argument 'traffic_restoration_time_to_healed_or_new_endpoints_in_minutes' to be a int")
        pulumi.set(__self__, "traffic_restoration_time_to_healed_or_new_endpoints_in_minutes", traffic_restoration_time_to_healed_or_new_endpoints_in_minutes)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="deploymentStatus")
    def deployment_status(self) -> str:
        return pulumi.get(self, "deployment_status")

    @property
    @pulumi.getter(name="healthProbeSettings")
    def health_probe_settings(self) -> Optional['outputs.HealthProbeParametersResponse']:
        """
        Health probe settings to the origin that is used to determine the health of the origin.
        """
        return pulumi.get(self, "health_probe_settings")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="loadBalancingSettings")
    def load_balancing_settings(self) -> Optional['outputs.LoadBalancingSettingsParametersResponse']:
        """
        Load balancing settings for a backend pool
        """
        return pulumi.get(self, "load_balancing_settings")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning status
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="responseBasedAfdOriginErrorDetectionSettings")
    def response_based_afd_origin_error_detection_settings(self) -> Optional['outputs.ResponseBasedOriginErrorDetectionParametersResponse']:
        """
        The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
        """
        return pulumi.get(self, "response_based_afd_origin_error_detection_settings")

    @property
    @pulumi.getter(name="sessionAffinityState")
    def session_affinity_state(self) -> Optional[str]:
        """
        Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
        """
        return pulumi.get(self, "session_affinity_state")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        Read only system data
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter(name="trafficRestorationTimeToHealedOrNewEndpointsInMinutes")
    def traffic_restoration_time_to_healed_or_new_endpoints_in_minutes(self) -> Optional[int]:
        """
        Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
        """
        return pulumi.get(self, "traffic_restoration_time_to_healed_or_new_endpoints_in_minutes")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetAFDOriginGroupResult(GetAFDOriginGroupResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAFDOriginGroupResult(
            deployment_status=self.deployment_status,
            health_probe_settings=self.health_probe_settings,
            id=self.id,
            load_balancing_settings=self.load_balancing_settings,
            name=self.name,
            provisioning_state=self.provisioning_state,
            response_based_afd_origin_error_detection_settings=self.response_based_afd_origin_error_detection_settings,
            session_affinity_state=self.session_affinity_state,
            system_data=self.system_data,
            traffic_restoration_time_to_healed_or_new_endpoints_in_minutes=self.traffic_restoration_time_to_healed_or_new_endpoints_in_minutes,
            type=self.type)


def get_afd_origin_group(origin_group_name: Optional[str] = None,
                         profile_name: Optional[str] = None,
                         resource_group_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetAFDOriginGroupResult:
    """
    Use this data source to access information about an existing resource.

    :param str origin_group_name: Name of the origin group which is unique within the endpoint.
    :param str profile_name: Name of the CDN profile which is unique within the resource group.
    :param str resource_group_name: Name of the Resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['originGroupName'] = origin_group_name
    __args__['profileName'] = profile_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:cdn/v20200901:getAFDOriginGroup', __args__, opts=opts, typ=GetAFDOriginGroupResult).value

    return AwaitableGetAFDOriginGroupResult(
        deployment_status=__ret__.deployment_status,
        health_probe_settings=__ret__.health_probe_settings,
        id=__ret__.id,
        load_balancing_settings=__ret__.load_balancing_settings,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        response_based_afd_origin_error_detection_settings=__ret__.response_based_afd_origin_error_detection_settings,
        session_affinity_state=__ret__.session_affinity_state,
        system_data=__ret__.system_data,
        traffic_restoration_time_to_healed_or_new_endpoints_in_minutes=__ret__.traffic_restoration_time_to_healed_or_new_endpoints_in_minutes,
        type=__ret__.type)
