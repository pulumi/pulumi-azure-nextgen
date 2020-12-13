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
    'GetComponentResult',
    'AwaitableGetComponentResult',
    'get_component',
]

@pulumi.output_type
class GetComponentResult:
    """
    An Application Insights component definition.
    """
    def __init__(__self__, app_id=None, application_id=None, application_type=None, connection_string=None, creation_date=None, disable_ip_masking=None, flow_type=None, hockey_app_id=None, hockey_app_token=None, id=None, immediate_purge_data_on30_days=None, ingestion_mode=None, instrumentation_key=None, kind=None, la_migration_date=None, location=None, name=None, private_link_scoped_resources=None, provisioning_state=None, public_network_access_for_ingestion=None, public_network_access_for_query=None, request_source=None, retention_in_days=None, sampling_percentage=None, tags=None, tenant_id=None, type=None, workspace_resource_id=None):
        if app_id and not isinstance(app_id, str):
            raise TypeError("Expected argument 'app_id' to be a str")
        pulumi.set(__self__, "app_id", app_id)
        if application_id and not isinstance(application_id, str):
            raise TypeError("Expected argument 'application_id' to be a str")
        pulumi.set(__self__, "application_id", application_id)
        if application_type and not isinstance(application_type, str):
            raise TypeError("Expected argument 'application_type' to be a str")
        pulumi.set(__self__, "application_type", application_type)
        if connection_string and not isinstance(connection_string, str):
            raise TypeError("Expected argument 'connection_string' to be a str")
        pulumi.set(__self__, "connection_string", connection_string)
        if creation_date and not isinstance(creation_date, str):
            raise TypeError("Expected argument 'creation_date' to be a str")
        pulumi.set(__self__, "creation_date", creation_date)
        if disable_ip_masking and not isinstance(disable_ip_masking, bool):
            raise TypeError("Expected argument 'disable_ip_masking' to be a bool")
        pulumi.set(__self__, "disable_ip_masking", disable_ip_masking)
        if flow_type and not isinstance(flow_type, str):
            raise TypeError("Expected argument 'flow_type' to be a str")
        pulumi.set(__self__, "flow_type", flow_type)
        if hockey_app_id and not isinstance(hockey_app_id, str):
            raise TypeError("Expected argument 'hockey_app_id' to be a str")
        pulumi.set(__self__, "hockey_app_id", hockey_app_id)
        if hockey_app_token and not isinstance(hockey_app_token, str):
            raise TypeError("Expected argument 'hockey_app_token' to be a str")
        pulumi.set(__self__, "hockey_app_token", hockey_app_token)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if immediate_purge_data_on30_days and not isinstance(immediate_purge_data_on30_days, bool):
            raise TypeError("Expected argument 'immediate_purge_data_on30_days' to be a bool")
        pulumi.set(__self__, "immediate_purge_data_on30_days", immediate_purge_data_on30_days)
        if ingestion_mode and not isinstance(ingestion_mode, str):
            raise TypeError("Expected argument 'ingestion_mode' to be a str")
        pulumi.set(__self__, "ingestion_mode", ingestion_mode)
        if instrumentation_key and not isinstance(instrumentation_key, str):
            raise TypeError("Expected argument 'instrumentation_key' to be a str")
        pulumi.set(__self__, "instrumentation_key", instrumentation_key)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if la_migration_date and not isinstance(la_migration_date, str):
            raise TypeError("Expected argument 'la_migration_date' to be a str")
        pulumi.set(__self__, "la_migration_date", la_migration_date)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if private_link_scoped_resources and not isinstance(private_link_scoped_resources, list):
            raise TypeError("Expected argument 'private_link_scoped_resources' to be a list")
        pulumi.set(__self__, "private_link_scoped_resources", private_link_scoped_resources)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if public_network_access_for_ingestion and not isinstance(public_network_access_for_ingestion, str):
            raise TypeError("Expected argument 'public_network_access_for_ingestion' to be a str")
        pulumi.set(__self__, "public_network_access_for_ingestion", public_network_access_for_ingestion)
        if public_network_access_for_query and not isinstance(public_network_access_for_query, str):
            raise TypeError("Expected argument 'public_network_access_for_query' to be a str")
        pulumi.set(__self__, "public_network_access_for_query", public_network_access_for_query)
        if request_source and not isinstance(request_source, str):
            raise TypeError("Expected argument 'request_source' to be a str")
        pulumi.set(__self__, "request_source", request_source)
        if retention_in_days and not isinstance(retention_in_days, int):
            raise TypeError("Expected argument 'retention_in_days' to be a int")
        pulumi.set(__self__, "retention_in_days", retention_in_days)
        if sampling_percentage and not isinstance(sampling_percentage, float):
            raise TypeError("Expected argument 'sampling_percentage' to be a float")
        pulumi.set(__self__, "sampling_percentage", sampling_percentage)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        pulumi.set(__self__, "tenant_id", tenant_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if workspace_resource_id and not isinstance(workspace_resource_id, str):
            raise TypeError("Expected argument 'workspace_resource_id' to be a str")
        pulumi.set(__self__, "workspace_resource_id", workspace_resource_id)

    @property
    @pulumi.getter(name="appId")
    def app_id(self) -> str:
        """
        Application Insights Unique ID for your Application.
        """
        return pulumi.get(self, "app_id")

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> str:
        """
        The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
        """
        return pulumi.get(self, "application_id")

    @property
    @pulumi.getter(name="applicationType")
    def application_type(self) -> str:
        """
        Type of application being monitored.
        """
        return pulumi.get(self, "application_type")

    @property
    @pulumi.getter(name="connectionString")
    def connection_string(self) -> str:
        """
        Application Insights component connection string.
        """
        return pulumi.get(self, "connection_string")

    @property
    @pulumi.getter(name="creationDate")
    def creation_date(self) -> str:
        """
        Creation Date for the Application Insights component, in ISO 8601 format.
        """
        return pulumi.get(self, "creation_date")

    @property
    @pulumi.getter(name="disableIpMasking")
    def disable_ip_masking(self) -> Optional[bool]:
        """
        Disable IP masking.
        """
        return pulumi.get(self, "disable_ip_masking")

    @property
    @pulumi.getter(name="flowType")
    def flow_type(self) -> Optional[str]:
        """
        Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
        """
        return pulumi.get(self, "flow_type")

    @property
    @pulumi.getter(name="hockeyAppId")
    def hockey_app_id(self) -> Optional[str]:
        """
        The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
        """
        return pulumi.get(self, "hockey_app_id")

    @property
    @pulumi.getter(name="hockeyAppToken")
    def hockey_app_token(self) -> str:
        """
        Token used to authenticate communications with between Application Insights and HockeyApp.
        """
        return pulumi.get(self, "hockey_app_token")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="immediatePurgeDataOn30Days")
    def immediate_purge_data_on30_days(self) -> Optional[bool]:
        """
        Purge data immediately after 30 days.
        """
        return pulumi.get(self, "immediate_purge_data_on30_days")

    @property
    @pulumi.getter(name="ingestionMode")
    def ingestion_mode(self) -> Optional[str]:
        """
        Indicates the flow of the ingestion.
        """
        return pulumi.get(self, "ingestion_mode")

    @property
    @pulumi.getter(name="instrumentationKey")
    def instrumentation_key(self) -> str:
        """
        Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
        """
        return pulumi.get(self, "instrumentation_key")

    @property
    @pulumi.getter
    def kind(self) -> str:
        """
        The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter(name="laMigrationDate")
    def la_migration_date(self) -> str:
        """
        The date which the component got migrated to LA, in ISO 8601 format.
        """
        return pulumi.get(self, "la_migration_date")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Azure resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="privateLinkScopedResources")
    def private_link_scoped_resources(self) -> Sequence['outputs.PrivateLinkScopedResourceResponse']:
        """
        List of linked private link scope resources.
        """
        return pulumi.get(self, "private_link_scoped_resources")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicNetworkAccessForIngestion")
    def public_network_access_for_ingestion(self) -> Optional[str]:
        """
        The network access type for accessing Application Insights ingestion.
        """
        return pulumi.get(self, "public_network_access_for_ingestion")

    @property
    @pulumi.getter(name="publicNetworkAccessForQuery")
    def public_network_access_for_query(self) -> Optional[str]:
        """
        The network access type for accessing Application Insights query.
        """
        return pulumi.get(self, "public_network_access_for_query")

    @property
    @pulumi.getter(name="requestSource")
    def request_source(self) -> Optional[str]:
        """
        Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
        """
        return pulumi.get(self, "request_source")

    @property
    @pulumi.getter(name="retentionInDays")
    def retention_in_days(self) -> int:
        """
        Retention period in days.
        """
        return pulumi.get(self, "retention_in_days")

    @property
    @pulumi.getter(name="samplingPercentage")
    def sampling_percentage(self) -> Optional[float]:
        """
        Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
        """
        return pulumi.get(self, "sampling_percentage")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> str:
        """
        Azure Tenant Id.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Azure resource type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="workspaceResourceId")
    def workspace_resource_id(self) -> str:
        """
        ResourceId of the log analytics workspace which the data will be ingested to.
        """
        return pulumi.get(self, "workspace_resource_id")


class AwaitableGetComponentResult(GetComponentResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetComponentResult(
            app_id=self.app_id,
            application_id=self.application_id,
            application_type=self.application_type,
            connection_string=self.connection_string,
            creation_date=self.creation_date,
            disable_ip_masking=self.disable_ip_masking,
            flow_type=self.flow_type,
            hockey_app_id=self.hockey_app_id,
            hockey_app_token=self.hockey_app_token,
            id=self.id,
            immediate_purge_data_on30_days=self.immediate_purge_data_on30_days,
            ingestion_mode=self.ingestion_mode,
            instrumentation_key=self.instrumentation_key,
            kind=self.kind,
            la_migration_date=self.la_migration_date,
            location=self.location,
            name=self.name,
            private_link_scoped_resources=self.private_link_scoped_resources,
            provisioning_state=self.provisioning_state,
            public_network_access_for_ingestion=self.public_network_access_for_ingestion,
            public_network_access_for_query=self.public_network_access_for_query,
            request_source=self.request_source,
            retention_in_days=self.retention_in_days,
            sampling_percentage=self.sampling_percentage,
            tags=self.tags,
            tenant_id=self.tenant_id,
            type=self.type,
            workspace_resource_id=self.workspace_resource_id)


def get_component(resource_group_name: Optional[str] = None,
                  resource_name: Optional[str] = None,
                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetComponentResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    :param str resource_name: The name of the Application Insights component resource.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['resourceName'] = resource_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:insights/v20200202preview:getComponent', __args__, opts=opts, typ=GetComponentResult).value

    return AwaitableGetComponentResult(
        app_id=__ret__.app_id,
        application_id=__ret__.application_id,
        application_type=__ret__.application_type,
        connection_string=__ret__.connection_string,
        creation_date=__ret__.creation_date,
        disable_ip_masking=__ret__.disable_ip_masking,
        flow_type=__ret__.flow_type,
        hockey_app_id=__ret__.hockey_app_id,
        hockey_app_token=__ret__.hockey_app_token,
        id=__ret__.id,
        immediate_purge_data_on30_days=__ret__.immediate_purge_data_on30_days,
        ingestion_mode=__ret__.ingestion_mode,
        instrumentation_key=__ret__.instrumentation_key,
        kind=__ret__.kind,
        la_migration_date=__ret__.la_migration_date,
        location=__ret__.location,
        name=__ret__.name,
        private_link_scoped_resources=__ret__.private_link_scoped_resources,
        provisioning_state=__ret__.provisioning_state,
        public_network_access_for_ingestion=__ret__.public_network_access_for_ingestion,
        public_network_access_for_query=__ret__.public_network_access_for_query,
        request_source=__ret__.request_source,
        retention_in_days=__ret__.retention_in_days,
        sampling_percentage=__ret__.sampling_percentage,
        tags=__ret__.tags,
        tenant_id=__ret__.tenant_id,
        type=__ret__.type,
        workspace_resource_id=__ret__.workspace_resource_id)
