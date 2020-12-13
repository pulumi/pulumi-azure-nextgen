# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = ['Cluster']


class Cluster(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 aad_client_id: Optional[pulumi.Input[str]] = None,
                 aad_tenant_id: Optional[pulumi.Input[str]] = None,
                 cluster_name: Optional[pulumi.Input[str]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Cluster details.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aad_client_id: App id of cluster AAD identity.
        :param pulumi.Input[str] aad_tenant_id: Tenant id of cluster AAD identity.
        :param pulumi.Input[str] cluster_name: The name of the cluster.
        :param pulumi.Input[str] location: The geo-location where the resource lives
        :param pulumi.Input[str] resource_group_name: The name of the resource group. The name is case insensitive.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: Resource tags.
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

            if aad_client_id is None and not opts.urn:
                raise TypeError("Missing required property 'aad_client_id'")
            __props__['aad_client_id'] = aad_client_id
            if aad_tenant_id is None and not opts.urn:
                raise TypeError("Missing required property 'aad_tenant_id'")
            __props__['aad_tenant_id'] = aad_tenant_id
            if cluster_name is None and not opts.urn:
                raise TypeError("Missing required property 'cluster_name'")
            __props__['cluster_name'] = cluster_name
            if location is None and not opts.urn:
                raise TypeError("Missing required property 'location'")
            __props__['location'] = location
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['billing_model'] = None
            __props__['cloud_id'] = None
            __props__['last_billing_timestamp'] = None
            __props__['last_sync_timestamp'] = None
            __props__['name'] = None
            __props__['provisioning_state'] = None
            __props__['registration_timestamp'] = None
            __props__['reported_properties'] = None
            __props__['status'] = None
            __props__['trial_days_remaining'] = None
            __props__['type'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure-nextgen:azurestackhci/latest:Cluster"), pulumi.Alias(type_="azure-nextgen:azurestackhci/v20201001:Cluster")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Cluster, __self__).__init__(
            'azure-nextgen:azurestackhci/v20200301preview:Cluster',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None) -> 'Cluster':
        """
        Get an existing Cluster resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        return Cluster(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="aadClientId")
    def aad_client_id(self) -> pulumi.Output[str]:
        """
        App id of cluster AAD identity.
        """
        return pulumi.get(self, "aad_client_id")

    @property
    @pulumi.getter(name="aadTenantId")
    def aad_tenant_id(self) -> pulumi.Output[str]:
        """
        Tenant id of cluster AAD identity.
        """
        return pulumi.get(self, "aad_tenant_id")

    @property
    @pulumi.getter(name="billingModel")
    def billing_model(self) -> pulumi.Output[str]:
        """
        Type of billing applied to the resource.
        """
        return pulumi.get(self, "billing_model")

    @property
    @pulumi.getter(name="cloudId")
    def cloud_id(self) -> pulumi.Output[str]:
        """
        Unique, immutable resource id.
        """
        return pulumi.get(self, "cloud_id")

    @property
    @pulumi.getter(name="lastBillingTimestamp")
    def last_billing_timestamp(self) -> pulumi.Output[str]:
        """
        Most recent billing meter timestamp.
        """
        return pulumi.get(self, "last_billing_timestamp")

    @property
    @pulumi.getter(name="lastSyncTimestamp")
    def last_sync_timestamp(self) -> pulumi.Output[str]:
        """
        Most recent cluster sync timestamp.
        """
        return pulumi.get(self, "last_sync_timestamp")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        The geo-location where the resource lives
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> pulumi.Output[str]:
        """
        Provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="registrationTimestamp")
    def registration_timestamp(self) -> pulumi.Output[str]:
        """
        First cluster sync timestamp.
        """
        return pulumi.get(self, "registration_timestamp")

    @property
    @pulumi.getter(name="reportedProperties")
    def reported_properties(self) -> pulumi.Output[Optional['outputs.ClusterReportedPropertiesResponse']]:
        """
        Properties reported by cluster agent.
        """
        return pulumi.get(self, "reported_properties")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[str]:
        """
        Status of the cluster agent.
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="trialDaysRemaining")
    def trial_days_remaining(self) -> pulumi.Output[float]:
        """
        Number of days remaining in the trial period.
        """
        return pulumi.get(self, "trial_days_remaining")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

