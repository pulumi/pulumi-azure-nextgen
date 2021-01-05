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
    'GetIotSecuritySolutionResult',
    'AwaitableGetIotSecuritySolutionResult',
    'get_iot_security_solution',
]

@pulumi.output_type
class GetIotSecuritySolutionResult:
    """
    IoT Security solution configuration and resource information.
    """
    def __init__(__self__, additional_workspaces=None, auto_discovered_resources=None, disabled_data_sources=None, display_name=None, export=None, id=None, iot_hubs=None, location=None, name=None, recommendations_configuration=None, status=None, system_data=None, tags=None, type=None, unmasked_ip_logging_status=None, user_defined_resources=None, workspace=None):
        if additional_workspaces and not isinstance(additional_workspaces, list):
            raise TypeError("Expected argument 'additional_workspaces' to be a list")
        pulumi.set(__self__, "additional_workspaces", additional_workspaces)
        if auto_discovered_resources and not isinstance(auto_discovered_resources, list):
            raise TypeError("Expected argument 'auto_discovered_resources' to be a list")
        pulumi.set(__self__, "auto_discovered_resources", auto_discovered_resources)
        if disabled_data_sources and not isinstance(disabled_data_sources, list):
            raise TypeError("Expected argument 'disabled_data_sources' to be a list")
        pulumi.set(__self__, "disabled_data_sources", disabled_data_sources)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if export and not isinstance(export, list):
            raise TypeError("Expected argument 'export' to be a list")
        pulumi.set(__self__, "export", export)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if iot_hubs and not isinstance(iot_hubs, list):
            raise TypeError("Expected argument 'iot_hubs' to be a list")
        pulumi.set(__self__, "iot_hubs", iot_hubs)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if recommendations_configuration and not isinstance(recommendations_configuration, list):
            raise TypeError("Expected argument 'recommendations_configuration' to be a list")
        pulumi.set(__self__, "recommendations_configuration", recommendations_configuration)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if unmasked_ip_logging_status and not isinstance(unmasked_ip_logging_status, str):
            raise TypeError("Expected argument 'unmasked_ip_logging_status' to be a str")
        pulumi.set(__self__, "unmasked_ip_logging_status", unmasked_ip_logging_status)
        if user_defined_resources and not isinstance(user_defined_resources, dict):
            raise TypeError("Expected argument 'user_defined_resources' to be a dict")
        pulumi.set(__self__, "user_defined_resources", user_defined_resources)
        if workspace and not isinstance(workspace, str):
            raise TypeError("Expected argument 'workspace' to be a str")
        pulumi.set(__self__, "workspace", workspace)

    @property
    @pulumi.getter(name="additionalWorkspaces")
    def additional_workspaces(self) -> Optional[Sequence['outputs.AdditionalWorkspacesPropertiesResponse']]:
        """
        List of additional workspaces
        """
        return pulumi.get(self, "additional_workspaces")

    @property
    @pulumi.getter(name="autoDiscoveredResources")
    def auto_discovered_resources(self) -> Sequence[str]:
        """
        List of resources that were automatically discovered as relevant to the security solution.
        """
        return pulumi.get(self, "auto_discovered_resources")

    @property
    @pulumi.getter(name="disabledDataSources")
    def disabled_data_sources(self) -> Optional[Sequence[str]]:
        """
        Disabled data sources. Disabling these data sources compromises the system.
        """
        return pulumi.get(self, "disabled_data_sources")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        Resource display name.
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter
    def export(self) -> Optional[Sequence[str]]:
        """
        List of additional options for exporting to workspace data.
        """
        return pulumi.get(self, "export")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="iotHubs")
    def iot_hubs(self) -> Sequence[str]:
        """
        IoT Hub resource IDs
        """
        return pulumi.get(self, "iot_hubs")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        The resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="recommendationsConfiguration")
    def recommendations_configuration(self) -> Optional[Sequence['outputs.RecommendationConfigurationPropertiesResponse']]:
        """
        List of the configuration status for each recommendation type.
        """
        return pulumi.get(self, "recommendations_configuration")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Status of the IoT Security solution.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        Azure Resource Manager metadata containing createdBy and modifiedBy information.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="unmaskedIpLoggingStatus")
    def unmasked_ip_logging_status(self) -> Optional[str]:
        """
        Unmasked IP address logging status
        """
        return pulumi.get(self, "unmasked_ip_logging_status")

    @property
    @pulumi.getter(name="userDefinedResources")
    def user_defined_resources(self) -> Optional['outputs.UserDefinedResourcesPropertiesResponse']:
        """
        Properties of the IoT Security solution's user defined resources.
        """
        return pulumi.get(self, "user_defined_resources")

    @property
    @pulumi.getter
    def workspace(self) -> Optional[str]:
        """
        Workspace resource ID
        """
        return pulumi.get(self, "workspace")


class AwaitableGetIotSecuritySolutionResult(GetIotSecuritySolutionResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetIotSecuritySolutionResult(
            additional_workspaces=self.additional_workspaces,
            auto_discovered_resources=self.auto_discovered_resources,
            disabled_data_sources=self.disabled_data_sources,
            display_name=self.display_name,
            export=self.export,
            id=self.id,
            iot_hubs=self.iot_hubs,
            location=self.location,
            name=self.name,
            recommendations_configuration=self.recommendations_configuration,
            status=self.status,
            system_data=self.system_data,
            tags=self.tags,
            type=self.type,
            unmasked_ip_logging_status=self.unmasked_ip_logging_status,
            user_defined_resources=self.user_defined_resources,
            workspace=self.workspace)


def get_iot_security_solution(resource_group_name: Optional[str] = None,
                              solution_name: Optional[str] = None,
                              opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetIotSecuritySolutionResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group within the user's subscription. The name is case insensitive.
    :param str solution_name: The name of the IoT Security solution.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['solutionName'] = solution_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:security/v20190801:getIotSecuritySolution', __args__, opts=opts, typ=GetIotSecuritySolutionResult).value

    return AwaitableGetIotSecuritySolutionResult(
        additional_workspaces=__ret__.additional_workspaces,
        auto_discovered_resources=__ret__.auto_discovered_resources,
        disabled_data_sources=__ret__.disabled_data_sources,
        display_name=__ret__.display_name,
        export=__ret__.export,
        id=__ret__.id,
        iot_hubs=__ret__.iot_hubs,
        location=__ret__.location,
        name=__ret__.name,
        recommendations_configuration=__ret__.recommendations_configuration,
        status=__ret__.status,
        system_data=__ret__.system_data,
        tags=__ret__.tags,
        type=__ret__.type,
        unmasked_ip_logging_status=__ret__.unmasked_ip_logging_status,
        user_defined_resources=__ret__.user_defined_resources,
        workspace=__ret__.workspace)
